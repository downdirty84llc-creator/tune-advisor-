# CLAUDE.md

Guidance for Claude Code and other AI assistants working in this repository.

## What this repository is

Despite the repository name (`tune-advisor-`), the code in this repository is the
**Georgia Opportunity Ledger** (`package.json` name:
`georgia-opportunity-ledger`) — a subscription intelligence platform for
commercial property, business funding and market pricing in Georgia. Public and
authorised sources are monitored, verified, scored against a published 100-point
method, and distributed to subscribers through a searchable database, a weekly
report, immediate alerts and a deadline calendar.

It is one venture under Down Dirty 84 LLC. The owner's cross-venture growth-agent
specification lives in `docs/DD84-GROWTH-AGENT.md` — that is **product direction,
not implemented code**. Do not assume anything in it exists in this codebase.

The product is deliberately **not** a brokerage, MLS, lender, investment adviser,
legal service or appraisal service. Nothing it publishes may guarantee
eligibility, financing or performance. That constraint is enforced in the code
and copy, not just in a footer — respect it when writing user-facing text.

## Stack

- **Next.js 15** App Router, React 19, TypeScript (strict, `noUncheckedIndexedAccess`)
- **Supabase** Postgres + Auth + Storage (21 migrations, heavy RLS)
- **Stripe** for billing (Checkout + customer portal; no card data ever reaches us)
- **Tailwind 3**, custom primitives in `src/components/ui/primitives.tsx`
- **Vitest** (unit/integration) + **Playwright** (e2e)
- **Vercel** for hosting and the 13 cron jobs declared in `vercel.json`
- Node `>=20.9.0`

## Commands

| Command                           | What it does                                                       |
| --------------------------------- | ------------------------------------------------------------------ |
| `npm run dev`                     | Development server on :3000                                        |
| `npm run build`                   | Production build                                                   |
| `npm run typecheck`               | `tsc --noEmit`                                                     |
| `npm run lint`                    | ESLint (`next/core-web-vitals` + `next/typescript`)                |
| `npm test`                        | Vitest, `tests/unit` and `tests/integration`                       |
| `npm run test:e2e`                | Playwright; builds and starts the app unless `E2E_BASE_URL` is set |
| `npm run db:reset`                | Re-runs every migration then `supabase/seed.sql`                   |
| `npm run db:seed`                 | `scripts/seed.ts` — demo users and sample records                  |
| `npm run db:types`                | Regenerates DB types from a live local schema                      |
| `npm run format` / `format:check` | Prettier                                                           |

**Before declaring work done, run `npm run typecheck`, `npm run lint` and
`npm test`.** They are fast (the whole set is under a minute) and they are the
only gate that exists — there is no CI workflow in this repository. As of the
last check all three are green: typecheck clean, zero ESLint warnings, 148 tests
passing across 9 files.

`npm run format:check` is a different story — it currently reports **105
pre-existing files** as unformatted, including most of `src/` and `README.md`.
Do not treat a red `format:check` as something you broke, and do not "fix" it by
running `npm run format` across the repository: that would bury your change in a
thousand-line whitespace diff. Format only the files you touched
(`npx prettier --write <paths>`).

### Local setup

```bash
npm install
cp .env.example .env.local     # fill in Supabase and Stripe values
supabase start                 # local Postgres + Auth + Storage
supabase db reset              # migrations, then supabase/seed.sql
npm run db:seed                # demo users, sample records, sample reports
npm run dev
```

Seeded accounts use `SEED_PASSWORD` (default `ledger-demo-password-2026`):
`free.member@`, `weekly.member@`, `detailed.member@`, `premium.member@`,
`researcher@`, `reviewer@`, `editor@`, `support@`, `billing@`, `admin@`
— all `@example.com`. Everything the seeder writes carries `is_sample = true`,
is badged in the UI, and is excluded from analytics. The seeder refuses to run
when `NEXT_PUBLIC_ENVIRONMENT=production`.

## The access model — read this before changing anything

A **rank** is one integer answering "how much of a record may this account
read": Free 0, Weekly 10, Detailed 20, Premium 30, staff 100. Ranks are compared
with `>=` against an opportunity's `minimum_access_rank`, and are spaced ten
apart so a tier can be inserted later without renumbering published content.

The rule is enforced in **three independent places, deliberately**:

1. **Row-level security** on every table — a leaked anon key gets nothing it
   should not have, whatever the application does.
2. **`public.search_opportunities`** (migration `...002100`), a `SECURITY DEFINER`
   function doing column-level redaction. RLS is row-level and cannot express
   "this member may see the title but not the financials", which is exactly what
   the upsell requires. Locked-out teasers come from
   `public.opportunity_previews` (migration `...001900`), a narrow view with no
   analysis, financial, eligibility or source-URL fields in it to leak.
3. **`src/lib/access`** in TypeScript — not for security, but so the API can
   return a useful 402 naming the plan that unlocks the record.

Because the plan matrix therefore exists twice (in
`subscription_plans.feature_configuration` and in `PLAN_FEATURE_DEFAULTS`),
`tests/unit/access/plan-parity.test.ts` diffs the compiled table against
`supabase/seed.sql` on every run. **If you change one, change the other**, or
that test fails.

Rules that must not be broken:

- **Administrator permissions are decided by role, never by rank or plan.** A
  Premium member has rank 30 and no administrative access whatsoever.
- `effectiveAccessRank` is the single answer to "what may this account read".
  Suspended/closed → rank 0 immediately, including for staff. Cancelled keeps
  access to period end (it was paid for). Past-due keeps access through the
  period plus a **three-day grace window**. `cancel_at_period_end` does **not**
  reduce access.
- **`audit_logs` is append-only.** No update or delete policy exists for anyone,
  including super administrators. Write through `log_admin_action` (the guarded
  wrapper), never `write_audit_log` directly.

## Repository layout

```
src/
  app/
    (marketing)/      Public: home, pricing, landing, legal, auth
    (member)/         Dashboard, search, detail, saved, calendar, reports, account
    (admin)/          Dashboard, review queue, opportunity editor, report builder,
                      sources, audit log, MFA setup
    api/v1/           Versioned API
  components/         UI primitives and feature components
  lib/
    access/           Ranks, plan features, entitlement decisions
    alerts/           Alert matching and suppression
    analytics/        First-party events + server-side PostHog forwarding
    auth/             Session/viewer resolution, MFA status
    billing/          Stripe client, subscription-status resolution
    db/               Supabase clients: server (session), admin (service role),
                      browser, public (anonymous, cookie-free)
    email/            Provider abstraction, templates, unsubscribe tokens
    exports/          CSV generation and export jobs
    http/             Response envelope, rate limiting
    jobs/             13 background jobs and the idempotent runner
    legal/            The ten legal documents
    observability/    Sentry envelope API (no SDK)
    opportunities/    Lifecycle, workflow, query, serialisation, editor schema
    reports/          Dependency-free PDF writer
    scoring/          The 100-point score
    search/           Filter schema, sorting, cursor pagination
  middleware.ts       Session refresh, route guarding, pathname header
supabase/
  migrations/         21 files: schema, RLS, functions, triggers
  seed.sql            Reference data (plans, 159 counties, industries, sources)
scripts/seed.ts       Demo users and sample records
tests/                unit/ (Vitest), e2e/ (Playwright)
docs/                 ARCHITECTURE.md, MILESTONES.md, RUNBOOK.md,
                      DD84-GROWTH-AGENT.md
```

Import alias: `@/*` → `./src/*` (configured in both `tsconfig.json` and
`vitest.config.ts`).

## Conventions

### API routes

Every handler in `src/app/api/v1/**` follows the same shape — copy
`src/app/api/v1/opportunities/route.ts` as the reference:

```ts
export const dynamic = 'force-dynamic';

export const GET = withErrorHandling(async (request: Request) => {
  const parsed = schema.safeParse(input);
  if (!parsed.success) return validationFailed(parsed.error);

  const viewer = await getViewer();
  const limit = await checkRateLimit(
    'search',
    rateLimitIdentity(request, viewer.userId),
  );
  if (!limit.allowed) return rateLimited(limit.resetAt);

  const supabase = await createServerSupabaseClient();
  // ...
  return ok(data, meta, { headers: rateLimitHeaders(limit) });
});
```

- **One response envelope**, from `src/lib/http/responses.ts`: success is
  `{ data, meta? }`, failure is `{ error: { code, message, details? } }`. Use
  `ok` / `created` / `noContent` / `apiError` / `denied` / `validationFailed` /
  `rateLimited`. Never hand-roll a `NextResponse.json` error.
- **`upgrade_required` maps to HTTP 402**, so the client can show an upgrade
  prompt without string-matching a message. `denied(decision)` converts an
  entitlement `Decision` into the right failure automatically.
- **Wrap every handler in `withErrorHandling`.** It converts a `ZodError` to 422,
  reports anything else to Sentry, and returns a 500 with no internal detail in
  the body.
- **Validate all input with Zod.** Schemas live next to the domain
  (`src/lib/search/filters.ts`, `src/lib/opportunities/editor-schema.ts`).
- **Use `createServerSupabaseClient()`** (session-bound, RLS applies) for
  member-facing reads. Reach for `src/lib/db/admin.ts` (service role) only where
  a job or webhook genuinely must bypass RLS, and re-check permissions yourself
  when you do.
- **Public/marketing loaders must use `src/lib/db/public.ts`** — an anonymous,
  cookie-free client. Using the session client there calls `cookies()` and makes
  the whole route render per request. Do not wrap those loaders in a `try/catch`
  that swallows Next.js's `DynamicServerError`; that is framework control flow,
  and catching it produces a permanently blank page with no error logged.

### Editorial workflow

Separation of duties is enforced in `src/lib/opportunities/workflow.ts`, not by
convention: a **researcher** drafts and submits; a **reviewer** approves, returns
with notes and sets component scores; an **editor** publishes. Nobody can carry a
record from draft to publication alone.

`workflow_status` is deliberately **not accepted by the content PATCH endpoint** —
otherwise a researcher could publish by PATCHing a field they may edit. Workflow
moves live on dedicated action endpoints (`/approve`, `/publish`, `/expire`,
`/reverify`, `/submit-review`) that re-check the role. `missingPublishFields`
blocks publication at the API, not only in the form.

### Background jobs

Add a job by writing it in the relevant `src/lib/jobs/*-jobs.ts`, registering it
in `src/lib/jobs/registry.ts` (the single source of truth for name + schedule),
**and** adding the matching cron entry to `vercel.json` and the job list in
`docs/RUNBOOK.md`. Jobs authenticate with `CRON_SECRET` compared in constant
time, accept `GET` (what Vercel Cron sends) and `POST`, and write a `job_runs`
row visible on the admin dashboard.

Three separate idempotency mechanisms exist because three different things can
double-fire — see `docs/ARCHITECTURE.md` §4 before changing any of them:

- **Stripe webhooks**: the unique `stripe_event_id` insert into `billing_events`
  _is_ the lock. Only faults a retry could fix return 500.
- **Jobs**: unique index on `job_runs (job_name, idempotency_key)`.
- **Alerts**: content-addressed suppression keys
  (`high_score:{id}:v{version}`, `deadline:{id}:{date}:{interval}`). Alert jobs
  insert the notification row **before** sending, so a crash loses an email
  rather than sending two.

### Style

- Prettier: single quotes, semicolons, trailing commas, `printWidth: 80`, 2-space
  indent, `prettier-plugin-tailwindcss`. Run `npm run format` rather than
  hand-aligning.
- Unused vars must be prefixed `_` to pass lint.
- British spelling appears throughout existing prose and comments
  ("authorised", "serialisation", "behaviour"). Match the file you are editing.
- **Comments in this codebase explain _why_, and are load-bearing.** Several
  record a rejected alternative and the reason. When you change such code, update
  the comment; when you add a close call, write one.
- Accessibility is not optional: focus-visible rings, `role="meter"` with text
  labels, badges never carrying status by colour alone, reduced-motion support.

### Data honesty rules

These exist to stop the product overstating what it knows. Do not "simplify"
them away:

- **Unknown is not zero.** An unresearched capital requirement scores 5
  (neutral), not 0, and a capital-ceiling filter does not exclude records whose
  requirement is unknown.
- **Ranges stay ranges.** `formatMoneyRange` renders "$250,000 – $400,000", never
  a midpoint — a midpoint implies precision we do not have.
- **Coordinates are absent rather than estimated.**
- **Sample data is flagged** with `is_sample` and carried into the CSV export.
- **`sources.automation_allowed`** cannot be set without a recorded permissive
  `scraping_review_status` — a table constraint, not a policy document.

## Testing

`npm test` covers the places where a quiet mistake costs money or leaks paid
content, across nine suites in `tests/unit`: score arithmetic and classification
bands, subscription-status resolution including the past-due grace window,
entitlement decisions per tier, TS↔SQL plan parity, alert matching and
suppression keys, deadline lifecycle transitions, CSV escaping and
formula-injection defence, filter parsing, and unsubscribe token signing and
tampering.

Anything touching **access, billing status, scoring, alert suppression or CSV
escaping needs a test**. Everything else is judged on merit. `tests/integration`
is configured in `vitest.config.ts` but does not exist yet — create it there if
you need it.

`npm run test:e2e` runs Playwright across desktop Chrome, iPhone 14, Pixel 7 and
iPad viewports.

## Things worth knowing

- **Admin two-factor is a gate on the admin area, not a sign-in step.** Staff are
  members too and must not be locked out of their own dashboard mid-setup.
  `/admin/security` is exempt from its own gate or enrolment sits behind a
  redirect loop. The check **fails open** on unexpected error — a Supabase outage
  should not be indistinguishable from a missing second factor, and RLS still
  enforces every permission underneath.
- **Rate limiting lives in Postgres** (`public.check_rate_limit`), because an
  in-process counter on serverless is per-instance and no limit at all. Windows
  are fixed, not sliding, and the limiter **fails open** and logs when it does.
- **Report PDFs come from a dependency-free writer** (`src/lib/reports/pdf.ts`)
  emitting PDF 1.4 with standard Helvetica. No headless browser — that would cost
  hundreds of megabytes of bundle for no better output. Complex layout (charts,
  images, multi-column) is not available; if the product needs it, the answer is
  a rendering service, not a bigger writer.
- **Sentry and PostHog are used without their SDKs**, on purpose — see
  `docs/ARCHITECTURE.md` §12. The rule: reach for an SDK when it does something
  genuinely hard. Posting JSON is not that.
- **Unsubscribe works without a login.** HMAC token over user id + scope, only
  ever turns email _off_, grants no read access. Alert/deadline/weekly email
  carries RFC 8058 `List-Unsubscribe` headers; account and billing email
  deliberately does not, because a failed-payment notice is not marketing.
- **`src/lib/db/types.ts` is honestly loose** rather than hand-maintained. Replace
  it via `npm run db:types` against a migrated database instead of editing it.
- **Middleware is convenience, not the security boundary.** Every API route
  re-checks entitlements and RLS refuses paid rows regardless.

## Current state

Milestones 2–9 of the specification are implemented; milestone 1 is partial
(design system exists, brand sign-off does not) and milestone 10 (launch) has not
started. See `docs/MILESTONES.md`.

Nothing has been run against a live Supabase instance or a live Stripe account.

Outstanding, with two hard launch blockers first:

1. **Stripe products and prices**, plus the tier-by-tier test-payment matrix.
   Everything on our side is ready; `stripe_monthly_price_id` /
   `stripe_annual_price_id` are unpopulated.
2. **Legal review of the documents** in `src/lib/legal/documents.ts`. Each renders
   an "awaiting legal review" banner until cleared.
3. Virus scanning on uploads — `attachments.scan_status` exists and defaults to
   `pending`; no scanner is wired to it.
4. High-fidelity design and brand sign-off.
5. Public landing pages render per request rather than cached, because the
   marketing layout's header is session-aware. Fixing it properly means moving
   the auth-dependent part to a client component or adopting partial
   prerendering — deliberately not bodged in the meantime.
6. Super-administrator MFA reset in-product (currently needs Supabase directly).

> **Known doc drift — trust the source over the prose:**
>
> - `docs/ARCHITECTURE.md` §11 still lists the admin opportunity editor and the
>   report builder as deliberate omissions. Both are now built
>   (`src/components/admin/opportunity-editor.tsx`,
>   `src/components/admin/report-builder.tsx`) and `docs/MILESTONES.md` records
>   them as done.
> - `README.md`, `docs/MILESTONES.md` and `docs/RUNBOOK.md` all refer to "twelve
>   legal documents". `LEGAL_DOCUMENTS` in `src/lib/legal/documents.ts` contains
>   **ten**: terms, privacy, subscription-terms, refunds, editorial-standards,
>   corrections, data-sources, cookies, copyright, disclaimers. Either two were
>   dropped or the count was always wrong; confirm which before quoting it to
>   anyone, and fix the docs once you know.

## Working agreements

- **Read `docs/ARCHITECTURE.md` before changing access control, idempotency,
  search pagination, the workflow, or the audit log.** It records the rejected
  alternatives and why, so a change can disagree on purpose rather than by
  accident.
- Schema changes are **new numbered migrations** in `supabase/migrations/`. Do
  not edit an applied migration.
- Never introduce a dependency that duplicates something already solved here
  (PDF writing, error reporting, analytics) without saying why the existing
  choice fails.
- Never weaken RLS, never bypass the redaction function, and never move an
  admin permission onto a rank check.
- Production data is never copied into development without sanitisation.
