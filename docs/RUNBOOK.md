# Runbook

Operational procedures and the production launch checklist.

---

## Environment setup

Each environment needs its own values for every key in `.env.example`. Nothing
is shared between development, staging and production — not the database, not
the Stripe keys, not the storage buckets, not the analytics project.

### Database

```bash
supabase link --project-ref <ref>
supabase db push                     # applies migrations in order
psql "$DATABASE_URL" -f supabase/seed.sql   # reference data only
```

`supabase/seed.sql` is idempotent: plans, states, counties, cities, industries,
sources and indicator definitions all upsert on a natural key. It contains no
demo users and no sample records — those come from `npm run db:seed`, which
refuses to run against production.

### Stripe

Steps 1 and 2 are **done** in the live account `acct_1QBl8ZINLKqe1c6g`
("Down Dirty 84 llc"). They are recorded here so the wiring can be finished
without rediscovering the identifiers.

1. ~~Create four products matching the plan codes.~~ Done — each carries
   `plan_code` and `access_rank` in metadata:

   | Plan | Product |
   | --- | --- |
   | `free` | `prod_UzCmUxNZwISwan` |
   | `weekly` | `prod_UzCmnGDe4j595N` |
   | `detailed` | `prod_UzCmNJIUP1kEgY` |
   | `premium` | `prod_UzCm77hAdOM052` |

2. ~~Create monthly and annual prices for the three paid plans.~~ Done, at the
   spec 6 amounts. Each price also carries a `lookup_key`, so it can be
   resolved by name if an id is ever lost:

   | Plan | Interval | Amount | Price id | Lookup key |
   | --- | --- | --- | --- | --- |
   | Weekly | monthly | $15 | `price_1TzEO3INLKqe1c6gLvq62WD1` | `gol_weekly_monthly` |
   | Weekly | annual | $150 | `price_1TzEO7INLKqe1c6gH20i3Wo2` | `gol_weekly_annual` |
   | Detailed | monthly | $39 | `price_1TzEOAINLKqe1c6ggOvRN5VP` | `gol_detailed_monthly` |
   | Detailed | annual | $390 | `price_1TzEODINLKqe1c6gnKArkYcD` | `gol_detailed_annual` |
   | Premium | monthly | $99 | `price_1TzEOJINLKqe1c6gYboc5ODU` | `gol_premium_monthly` |
   | Premium | annual | $990 | `price_1TzEOMINLKqe1c6ghcReIVhO` | `gol_premium_annual` |

   The free plan has no price, which is correct — nothing is charged for it and
   checkout is never started for it.

   Note these were created directly in **live** mode. There is no test-mode
   equivalent, so the test-payment matrix below needs the same products
   recreated against a test key before it can be run.

3. Write the price ids onto `subscription_plans` — **still outstanding**, and
   the reason checkout cannot yet complete:

   ```sql
   update public.subscription_plans set
     stripe_monthly_price_id = 'price_1TzEO3INLKqe1c6gLvq62WD1',
     stripe_annual_price_id  = 'price_1TzEO7INLKqe1c6gH20i3Wo2'
   where code = 'weekly';

   update public.subscription_plans set
     stripe_monthly_price_id = 'price_1TzEOAINLKqe1c6ggOvRN5VP',
     stripe_annual_price_id  = 'price_1TzEODINLKqe1c6gnKArkYcD'
   where code = 'detailed';

   update public.subscription_plans set
     stripe_monthly_price_id = 'price_1TzEOJINLKqe1c6gYboc5ODU',
     stripe_annual_price_id  = 'price_1TzEOMINLKqe1c6ghcReIVhO'
   where code = 'premium';
   ```

   The checkout endpoint returns a clear conflict rather than failing inside
   Stripe when a price id is missing, so this step is safe to verify by trying it.

4. Add the webhook endpoint `POST /api/v1/webhooks/stripe` subscribed to
   `checkout.session.completed`, `customer.subscription.created|updated|deleted`
   and `invoice.payment_failed`. Put the signing secret in
   `STRIPE_WEBHOOK_SECRET`.

   **Still outstanding — the account currently has no webhook endpoints at
   all.** This is the failure that costs money rather than merely blocking a
   launch: without it Checkout completes and the card is charged, but nothing
   writes the subscription back, so the member's access rank never rises and
   they have paid for a tier they cannot see. Do not take a live payment before
   this exists. It cannot be created until the application has a public
   hostname to point at.

5. Pin the API version on the Stripe account. The client deliberately does not
   pin one in code, so upgrading is a deliberate dashboard action with a
   test-mode rehearsal rather than a side effect of a dependency bump.

### Background jobs

`vercel.json` declares all thirteen cron schedules. Set `CRON_SECRET`; Vercel
sends it automatically as a bearer token when the variable is present. Jobs
accept both `GET` (what Vercel Cron sends) and `POST`.

To run one by hand:

```bash
curl -X POST -H "Authorization: Bearer $CRON_SECRET" \
  https://<host>/api/v1/jobs/evaluate-deadlines
```

Available jobs: `publish-scheduled`, `premium-alerts`, `saved-search-matching`,
`process-exports`, `evaluate-deadlines`, `deadline-reminders`,
`reverification-reminders`, `stale-source-reminders`, `expire-lapsed-access`,
`sync-subscriptions`, `aggregate-analytics`, `prune`,
`distribute-weekly-report`.

---

## Operational procedures

### A staff member has lost their authenticator

They are locked out of the admin area, not out of their account — they can still
use the member side normally. Clear the enrolled factor through Supabase (Auth →
the user → MFA factors), then have them re-enrol at `/admin/security`. There is
no in-product reset yet; that gap is recorded in `MILESTONES.md`.

### A member reports missing access after paying

1. Check `subscriptions` for their `status` and `current_period_end`.
2. Check `billing_events` for unprocessed rows — `processed = false` with a
   `processing_error` means a webhook failed.
3. Run `sync-subscriptions` to reconcile against Stripe directly. This is the
   designed remedy for a missed webhook and is safe to run at any time.
4. If they need access immediately while you investigate, a super administrator
   can set `access_rank_override` with an expiry. It is audited.

### A record was published in error

Move it to `internal_review` through
`POST /api/v1/admin/opportunities/{id}/submit-review`, which clears
`published_at` and writes an `opportunity.unpublished` audit entry. Do not
delete it: deletion loses the version history and the audit trail is what makes
the correction defensible.

For a record that must be withheld from everyone regardless of tier — a source
dispute, a pending correction — set `is_restricted = true` with a
`restriction_reason`. The database requires the reason.

### Alerts did not fire

Every declined alert records a machine-readable reason. Check the `job_runs`
row's `detail` for the run, then reason through
`src/lib/alerts/matching.ts`: the common causes are
`insufficient_access_rank` (the record is above their plan),
`not_entitled` (immediate alerts are Premium-only),
`deadline_unverified` (we do not push people toward unconfirmed deadlines), and
`already_sent` (the dedupe key was claimed).

### An export is stuck

Exports above 500 rows are queued for `process-exports`. Check `export_jobs` for
`status` and `error_message`. Files live under a per-user prefix in the
`exports` bucket, are served through short-lived signed URLs, and expire after
seven days — `prune` marks them expired.

### Rate limiting is too aggressive

Limits are in `RATE_LIMITS` in `src/lib/http/rate-limit.ts`. The limiter fails
open on database errors and logs when it does, so a spike in
`[rate-limit] check failed` means the limiter is not limiting, not that members
are locked out.

---

## Production launch checklist

Spec 28, milestone 10. Every line needs a name against it.

### Blocking

- [ ] **Legal review of all twelve documents** in `src/lib/legal/documents.ts`.
      Each is marked `requiresReview: true` and renders an "awaiting legal
      review" banner until cleared. This is the hard blocker.
- [ ] Stripe live mode: products, prices, webhook endpoint, price ids written to
      `subscription_plans`.
- [ ] Tier-by-tier test payment verifying each plan grants the correct access
      (spec 28, milestone 3 acceptance).
- [ ] Email domain authentication: SPF, DKIM and DMARC on the sending domain.
- [ ] Database backups enabled with point-in-time recovery.
- [ ] Administrator multi-factor enrolment for every staff account. The gate is
      enforced in code; each person still has to enrol at `/admin/security`.
- [ ] `EMAIL_UNSUBSCRIBE_SECRET` set to its own value, not falling back to
      `CRON_SECRET`. Rotating one must not invalidate every unsubscribe link
      already sitting in inboxes.
- [ ] Verify one-click unsubscribe end to end: the `List-Unsubscribe` header is
      present, and the link works while signed out.
- [ ] Security review: the test list in spec 26 — unauthorised API access,
      access-rank bypass, direct URL access, ID enumeration, invalid webhooks,
      file-upload attacks, XSS, SQL injection, rate-limit enforcement.
- [ ] Confirm no sample data reached production:
      `select count(*) from opportunities where is_sample;` must be 0.

### Required before opening to customers

- [ ] Domain connected with Cloudflare in front.
- [ ] Sentry DSN configured and an error verified end to end.
- [ ] PostHog configured and the subscription funnel verified.
- [ ] Cron schedules confirmed firing; check `job_runs` after 24 hours.
- [ ] A real weekly report published, emailed, and read at each tier.
- [ ] Administrator training on the review queue and correction workflow.
- [ ] Accessibility audit against WCAG 2.1 AA.
- [ ] Core Web Vitals measured on the public pages.

### Verify after launch

- [ ] `robots.ts` serves the production ruleset (it blocks everything outside
      production, so a misconfigured `NEXT_PUBLIC_ENVIRONMENT` silently
      de-indexes the site).
- [ ] Sitemap reachable and county pages indexed.
- [ ] A cancellation end to end: access continues to period end, then drops.
- [ ] A failed payment end to end: grace window, then downgrade, with saved
      records intact.

---

## Things that will bite

- **`NEXT_PUBLIC_ENVIRONMENT` controls more than a banner.** It gates indexing
  and the seeder's production refusal. Set it correctly per environment.
- **The service-role key bypasses row-level security entirely.** It belongs only
  in the webhook handler, the jobs and the seeder. Anything acting on behalf of
  a signed-in member must use `createServerSupabaseClient()`.
- **`getUser()`, not `getSession()`.** The former validates the token with the
  auth server; the latter trusts the cookie. On pages that decide what paid
  content to render, that difference matters.
- **Public pages must use the anonymous client.** `src/lib/db/public.ts`, not
  `createServerSupabaseClient()`. The session client reads cookies, which makes
  the whole route render per request. A `try/catch` around such a read will also
  swallow Next.js's dynamic-bailout signal — that bug produced a silently empty
  homepage once already.
- **The plan matrix lives in two places.** Changing a limit means changing both
  `subscription_plans.feature_configuration` and `PLAN_FEATURE_DEFAULTS`.
  `tests/unit/access/plan-parity.test.ts` fails if you forget.
