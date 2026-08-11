# Deployment package — Georgia Opportunity Ledger

**Status: NOT EXECUTED.** No Vercel or Netlify tooling is attached to the agent
session, so none of this has been run. It is the manual action package §11 of
`docs/DD84-OPERATIONS-AGENT.md` requires when a tool is unavailable: exact steps,
nothing assumed, nothing claimed as done.

Prepared 2026-08-10 against commit `530466b`. Covers **T-28** (deploy) and
unblocks **T-27** (the Stripe webhook), which is waiting only on a live host.

---

## What is already true — verified, not assumed

Checked directly this session. These are the parts you do **not** have to do.

| Component                  | State                                                                    | Evidence                                                             |
| -------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Production database        | **Ready.** 36 tables, **36 with RLS enabled**, 26 `SECURITY DEFINER` fns | `execute_sql` against project `bbgikfblcahhvrpxiqnd`, ACTIVE_HEALTHY |
| Reference data             | **Seeded.** 4 subscription plans, 159 counties                           | same query                                                           |
| Stripe products and prices | **Live and correct.** 4 products, 6 prices, amounts match `seed.sql`     | OL-0010                                                              |
| Plan → price wiring        | **Done.** All six ids on `subscription_plans`, verified both directions  | OL-0010                                                              |
| Production build           | **Passes.** 29 static pages generated                                    | `npm run build` at `fd50a82`                                         |
| Tests                      | 179 passing in 11 files; typecheck silent; lint clean                    | this session                                                         |

**Two things are empty and that is expected, not broken:** `opportunities` is 0
and `profiles` is 0. Nobody has signed up and no record has been published. See
"Before you announce it" below — this matters more than it looks.

---

## Step 1 — Create the hosting project

Vercel is what the repository is built for: `vercel.json` already declares all
thirteen cron schedules, and the app is Next.js 15 on the App Router.

1. Import `downdirty84llc-creator/tune-advisor-` into Vercel.
2. **Set the production branch to `claude/georgia-opportunity-ledger-kfpt4c`** —
   there is no `main` in this repository, and the import will otherwise fail
   looking for one. This is the single most likely thing to go wrong.
3. Framework preset: Next.js. Build command, output directory and install
   command are all the defaults — do not override them.
4. Node version 20 or later (`package.json` requires `>=20.9.0`).

Deploy nothing yet. Set the environment variables first, or the first build ships
without them and the marketing pages render empty.

---

## Step 2 — Environment variables

Every key below is required in **Production**. Sources are named so nothing is
invented. **Do not paste any of these into the repository, a commit message, an
issue, or a chat log.**

### Site

| Key                       | Value                                                    |
| ------------------------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`    | The production URL, no trailing slash                    |
| `NEXT_PUBLIC_ENVIRONMENT` | `production` — this is also what disarms the seed script |

### Supabase — project `bbgikfblcahhvrpxiqnd`

| Key                             | Where to get it                                       |
| ------------------------------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase → Project Settings → API                     |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | same page, `anon` / publishable key                   |
| `SUPABASE_SERVICE_ROLE_KEY`     | same page, **service role** — bypasses RLS completely |

`SUPABASE_SERVICE_ROLE_KEY` must never carry a `NEXT_PUBLIC_` prefix. That
prefix is what ships a value to the browser, and this key ignores every access
rule in the system.

### Stripe — account `acct_1QBl8ZINLKqe1c6g`

| Key                                  | Value                                      |
| ------------------------------------ | ------------------------------------------ |
| `STRIPE_SECRET_KEY`                  | Live secret key                            |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Live publishable key                       |
| `STRIPE_WEBHOOK_SECRET`              | **From step 4** — you will not have it yet |

The six price-ID variables in `.env.example` are a seeding fallback only. The
database already holds the real ids, and the database wins at runtime, so you
can leave them unset.

### Email

| Key                        | Value                                                 |
| -------------------------- | ----------------------------------------------------- |
| `EMAIL_PROVIDER`           | `resend` or `postmark`                                |
| `EMAIL_API_KEY`            | from that provider                                    |
| `EMAIL_FROM`               | e.g. `Georgia Opportunity Ledger <alerts@yourdomain>` |
| `EMAIL_REPLY_TO`           | a monitored address                                   |
| `EMAIL_UNSUBSCRIBE_SECRET` | **its own random value** — see below                  |

Give `EMAIL_UNSUBSCRIBE_SECRET` a distinct value rather than letting it fall
back to `CRON_SECRET`. It signs the unsubscribe links already sitting in
people's inboxes; if it shares a value with `CRON_SECRET`, rotating the cron
secret silently breaks every one of them, and a broken unsubscribe link is how a
sending domain earns spam complaints.

### Jobs, observability, storage

| Key                                                             | Value                                    |
| --------------------------------------------------------------- | ---------------------------------------- |
| `CRON_SECRET`                                                   | long random string; Vercel Cron sends it |
| `SENTRY_DSN`                                                    | optional                                 |
| `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST`          | optional                                 |
| `SUPABASE_STORAGE_BUCKET_REPORTS` / `_ATTACHMENTS` / `_EXPORTS` | `reports` / `attachments` / `exports`    |
| `MAX_UPLOAD_BYTES`                                              | `26214400`                               |

---

## Step 3 — Deploy and check it actually serves

Deploy, then verify in the destination rather than trusting the build log:

- `/` renders with content, not an empty shell. An empty homepage means the
  Supabase keys are wrong — the public loaders fail closed.
- `/pricing` shows all four tiers at $15/$150, $39/$390, $99/$990.
- `/legal/terms` renders, carrying the "awaiting legal review" banner. That
  banner is correct until T-13 clears it.
- `curl -I https://<host>/dashboard` returns
  `Cache-Control: private, no-store, max-age=0, must-revalidate`. **This is the
  outstanding verification from T-07** — record the result there.

---

## Step 4 — Register the Stripe webhook (this is T-27)

Only possible once step 3 gives a real host.

- Endpoint: `https://<host>/api/v1/webhooks/stripe`
- Events — exactly the five the handler switches on
  (`src/app/api/v1/webhooks/stripe/route.ts:119-129`). More is noise; fewer is a
  silent gap:
  - `checkout.session.completed`
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_failed`
- Copy the signing secret into `STRIPE_WEBHOOK_SECRET` and **redeploy** — an
  environment variable added after a build is not in that build.
- Send a test event and confirm exactly one `billing_events` row appears with
  the matching `stripe_event_id`. The unique index on that column is the
  idempotency lock; one row is the proof it works.

**Why this is not optional.** Without it, checkout succeeds and the application
never hears. The customer is charged, `subscriptions` stays empty,
`effectiveAccessRank` returns free tier — they have paid and have nothing. That
fails silently and lands on the customer, which is worse than checkout failing
outright.

---

## Step 5 — Confirm the crons registered

`vercel.json` declares all thirteen. After the first production deploy, check
Vercel → Settings → Cron Jobs lists thirteen entries, and that `job_runs` starts
receiving rows. `process-exports` runs every five minutes, so it is the fastest
signal that job auth is working.

---

## Before you announce it

Deploying is not launching, and three of these are load-bearing:

1. **`opportunities` is 0.** A subscription product with an empty database has
   nothing to sell. Publishing real records through the admin editor is the work
   between "deployed" and "launched".
2. **Seven legal documents still show "awaiting legal review".** T-13. A-06 is
   approved, but counsel has not been engaged.
3. **The past-due grace window, upgrade, downgrade and cancellation paths have
   never been exercised against Stripe.** T-11's matrix needs test-mode keys and
   is not an agent task.

Also outstanding and unrelated to deployment: T-06 and T-19's database
verifications, and T-22's `SECURITY DEFINER` revoke migration — which should be
verified locally before it goes anywhere near this project.

---

## Rollback

Vercel keeps every previous deployment; promoting the prior one is instant and is
the rollback for anything in steps 1–3 and 5. For step 4, delete the webhook
endpoint in Stripe. Nothing here writes customer data, so no data migration is
involved either way.
