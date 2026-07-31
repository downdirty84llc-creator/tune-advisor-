# CLAUDE.md

Guidance for AI assistants working in this repository. Read this before making
changes; it records the invariants that are easy to break and hard to notice.

## What this is

**Georgia Opportunity Ledger** — a subscription intelligence platform for
commercial property, business funding and market pricing in Georgia. Public
sources are monitored, verified, scored against a published 100-point method,
and distributed to subscribers through a searchable database, a weekly report,
immediate alerts and a deadline calendar.

Stack: Next.js 15 (App Router, React 19) · TypeScript (strict) · Supabase
Postgres/Auth/Storage · Stripe · Tailwind · Vitest · Playwright · Vercel.

The product is deliberately **not** a brokerage, MLS, lender, investment
adviser, legal service or appraisal service. That constraint is enforced in
copy and in the data model, not just the footer — do not add features that
imply guaranteed eligibility, financing or performance.

## Commands

```bash
npm run dev            # dev server on :3000
npm run build          # production build
npm run typecheck      # tsc --noEmit
npm run lint           # ESLint (next/core-web-vitals + next/typescript)
npm test               # Vitest, tests/unit + tests/integration
npm run test:watch     # Vitest watch
npm run test:e2e       # Playwright; builds and starts the app unless E2E_BASE_URL is set
npm run format         # Prettier over ts/tsx/md/json/sql
npm run db:reset       # supabase db reset — re-runs all migrations + seed.sql
npm run db:seed        # demo users and sample records (refuses in production)
npm run db:types       # regenerate DB types from a live local schema
```

Before declaring work complete run, at minimum: `npm run typecheck`,
`npm run lint`, `npm test`. Formatting is Prettier-enforced (single quotes,
semicolons, trailing commas, 80 columns, 2-space indent).

Local setup: `npm install`, `cp .env.example .env.local`, `supabase start`,
`supabase db reset`, `npm run db:seed`. Seeded logins are listed in `README.md`
(password from `SEED_PASSWORD`).

## Layout

```
src/app/
  (marketing)/   Public: home, pricing, landing pages, legal, auth
  (member)/      Dashboard, search, detail, saved, calendar, reports, account
  (admin)/       Dashboard, review queue, opportunity editor, report builder,
                 sources, audit log, MFA setup
  api/v1/        Versioned API — the only data-write surface
src/components/  ui/primitives.tsx plus feature components
src/lib/
  access/        Ranks, plan features, entitlement decisions
  alerts/        Alert matching and suppression keys
  auth/          Session context, role guards, MFA status
  billing/       Stripe client, subscription-status resolution
  db/            Four Supabase clients — see "Pick the right client"
  email/         Provider abstraction, templates, unsubscribe tokens
  exports/       CSV generation and export jobs
  http/          Response envelope, rate limiting
  jobs/          13 background jobs, registry, idempotent runner
  observability/ Sentry via envelope API (no SDK)
  opportunities/ Lifecycle, workflow, query, serialisation, editor schema
  reports/       Dependency-free PDF writer
  scoring/       The 100-point score
  search/        Filter schema, sorting, cursor pagination
supabase/
  migrations/    21 files, ordered by timestamp prefix
  seed.sql       Reference data — idempotent, upserts on natural keys
tests/unit/      Vitest, mirrors src/lib structure
tests/e2e/       Playwright across desktop/iPhone/Android/tablet
docs/            ARCHITECTURE.md (why), RUNBOOK.md (ops), MILESTONES.md (status)
```

Path alias: `@/*` → `./src/*`, configured in both `tsconfig.json` and
`vitest.config.ts` — update both if it ever changes.

## The access model — read this before touching anything

A **rank** is one integer answering "how much of a record may this account
read": Free 0, Weekly 10, Detailed 20, Premium 30, staff 100. Compared with
`>=` against an opportunity's `minimum_access_rank`. Spaced ten apart so a tier
can be inserted later without renumbering published content.

It is enforced in **three independent layers**, on purpose:

1. **Row-level security** on every table — a leaked anon key gets nothing.
2. **`public.search_opportunities`** (`SECURITY DEFINER`, migration `...002100`)
   — column-level redaction, returning `NULL` for fields above the caller's
   tier. RLS is row-level and cannot express "may see the title, not the
   financials", which is exactly what the upsell needs.
3. **`src/lib/access`** in TypeScript — so the API can return a useful 402
   naming the plan that unlocks the record.

Rules that must hold:

- **Never weaken a layer because another one covers it.** The redundancy is the
  design.
- **Administrator permissions are decided by role, never by rank.** A Premium
  member has rank 30 and zero administrative access. Publishing, refunding and
  suspending are role checks.
- The plan matrix exists twice — `PLAN_FEATURE_DEFAULTS` in
  `src/lib/access/ranks.ts` and `subscription_plans.feature_configuration` in
  `supabase/seed.sql`. **Change both**;
  `tests/unit/access/plan-parity.test.ts` diffs them and will fail otherwise.
- Gates return a `Decision` object (reason + message + required plan), never a
  bare boolean. A dead button with no explanation is the worst version of this
  product.
- `cancel_at_period_end` does **not** reduce access — it has been paid for.
  Past-due keeps access through the period plus a three-day grace window.

## Pick the right Supabase client

| Client | File | Use for |
| --- | --- | --- |
| Session-bound | `db/server.ts` | Everything acting for a signed-in member. RLS applies. |
| Anonymous | `db/public.ts` | Public marketing pages only. No cookies, so the route stays cacheable. |
| Service role | `db/admin.ts` | **Bypasses RLS.** Only: Stripe webhook, background jobs, seed script, rate limiter. |
| Browser | `db/browser.ts` | Auth flows only (sign in/out, password reset). Data reads go through the API. |

Using `db/admin.ts` in a member-facing path removes the RLS backstop entirely —
if you find yourself reaching for it there, the answer is almost always a
policy or a `SECURITY DEFINER` function instead.

Using the session client on a marketing page calls `cookies()` and silently
makes the whole route dynamic. Related trap: do **not** wrap public loaders in
a `try/catch` that swallows everything — Next.js throws `DynamicServerError` as
control flow, and catching it produces a permanently blank page with no error.

## API conventions

Every route under `src/app/api/v1/`:

- Wraps the handler in `withErrorHandling` from `@/lib/http/responses`. It
  converts `ZodError` to 422, reports unexpected throws to Sentry, and returns
  a 500 with no internal detail in the body.
- Returns through `ok` / `created` / `noContent` / `apiError`. One envelope for
  the whole API: `{ data, meta? }` on success, `{ error: { code, message,
  details? } }` on failure. `denied(decision)` maps an entitlement decision to
  the right status — including **402 `upgrade_required`**, which is the honest
  status for "your plan does not include this" and lets clients show an upgrade
  prompt without string-matching a message.
- Validates input with a Zod schema; never trusts a body shape.
- Calls `checkRateLimit` for anything costly or brute-forceable, and attaches
  `rateLimitHeaders`. Limits live in `RATE_LIMITS` in `http/rate-limit.ts`. The
  limiter **fails open** by design.
- Declares `export const dynamic = 'force-dynamic'`.

Route context params are `Promise`-typed in Next 15. The existing routes type
the second argument as `any` with an eslint-disable and cast to a local
`RouteContext` — follow that pattern rather than inventing a new one.

## Editorial workflow

Separation of duties is enforced in `src/lib/opportunities/workflow.ts` as
tables (`ALLOWED_TRANSITIONS`, `ACTION_ROLES`), not scattered `if (role === …)`
checks. Researcher drafts and submits; reviewer approves and scores; editor
publishes. Nobody carries a record from draft to publication alone.

`workflow_status` is deliberately **not** accepted by the content PATCH
endpoint — otherwise a researcher could publish by PATCHing a field they are
allowed to edit. Workflow moves live on dedicated action endpoints
(`/approve`, `/publish`, `/expire`, `/reverify`, `/submit-review`) that
re-check the role. Do not add it to the PATCH schema.

`missingPublishFields` blocks publication of a record lacking the analysis a
subscriber is paying for, at the API rather than only in the form.

`audit_logs` is append-only — there is no update or delete policy for anyone,
including super administrators. Write entries via `log_admin_action`, never
`write_audit_log` directly (execution on the latter is revoked from `PUBLIC`).

## Background jobs

Thirteen jobs in `src/lib/jobs/`, registered in `registry.ts` with their cron
expressions, exposed at `POST|GET /api/v1/jobs/{job}`, scheduled in
`vercel.json`. **`registry.ts` and `vercel.json` must stay in step** — adding a
job means editing both, plus the job list in `docs/RUNBOOK.md`.

Every job must be idempotent, logged, retryable and observable; `runJob`
provides all four. Jobs that must run once per window declare `dailyKey` or
`weeklyKey`, and the unique index on `job_runs (job_name, idempotency_key)`
turns a double-fire into a no-op.

Authentication is `CRON_SECRET` as a bearer token, compared in constant time.
There is no unauthenticated path.

Alert suppression is a **content-addressed dedupe key**, not a timestamp:
`high_score:{id}:v{version}`, `deadline:{id}:{date}:{interval}`. Alert jobs
insert the notification row *before* sending, and skip on conflict — a crash
loses an email rather than sending two, which is the right way round.

## Testing

`tests/unit/` mirrors `src/lib/`. Coverage is concentrated where a quiet
mistake costs money or leaks paid content: score arithmetic, subscription
status and the grace window, entitlement decisions per tier, alert matching and
suppression, deadline lifecycle, CSV escaping and formula-injection defence,
filter parsing, unsubscribe token signing and tampering.

Tests run in the `node` environment with no database — pure functions in
`src/lib` are testable, and that is why the logic lives there rather than in
route handlers. Keep it that way: put decision logic in `lib`, keep handlers
thin.

Playwright asserts that no protected content leaks to a signed-out visitor and
that the access boundary redirects, across four viewports.

## Conventions worth matching

- **Comments explain why, not what.** Most modules open with a block explaining
  the decision and its cost. Close calls are recorded with the reasoning so a
  future change can disagree on purpose. Match this density; do not strip it.
- **British spelling** in prose and comments (`authorisation`, `serialisation`).
- Secrets go through `serverEnv()`, which throws if called from a browser
  bundle. Anything the browser needs is in `publicEnv` and prefixed
  `NEXT_PUBLIC_`. Never add a secret without the prefix rule in mind.
- Server Components by default; `'use client'` only where interaction requires
  it (~19 files). There are no Server Actions — writes go through `api/v1`.
- `tsconfig` has `strict` **and** `noUncheckedIndexedAccess`. Indexing an array
  yields `T | undefined`; handle it rather than asserting.
- Accessibility rules are enforced in `components/ui/primitives.tsx`: status is
  never carried by colour alone (every badge contains a word) and icon-like
  elements carry text. Build on the primitives.
- **Unknown is not zero.** An unresearched capital requirement scores 5
  (neutral), ranges render as ranges rather than midpoints, coordinates are
  `NULL` rather than estimated, and sample data carries `is_sample` through to
  the CSV export. Do not paper over missing data.
- Vendor integrations (Sentry, PostHog) are written against the HTTP API rather
  than the SDK, with the cost stated in-module. The rule: reach for an SDK when
  it does something genuinely hard. Posting JSON is not that.

## Database changes

Migrations are timestamp-prefixed and applied in order; never edit a migration
that has been applied anywhere — add a new one. `supabase/seed.sql` is
reference data only (plans, 159 counties, industries, sources, indicator
definitions) and must stay idempotent. Demo users and sample records belong in
`scripts/seed.ts`, which refuses to run when
`NEXT_PUBLIC_ENVIRONMENT=production`.

`src/lib/db/types.ts` currently exports `Database = any` on purpose. Running
`npm run db:types` and re-pointing the alias at `generated-types.ts` gives the
whole codebase column-level checking with no other edits — a worthwhile change,
but do it deliberately and expect to fix real errors it surfaces.

## Known gaps

Tracked honestly in `docs/MILESTONES.md`; do not "fix" these by hiding them.
Hard launch blockers are legal review of the twelve documents in
`src/lib/legal/documents.ts` and creating the Stripe products/prices. Also
outstanding: virus scanning on uploads, super-administrator MFA reset, brand
sign-off, and public landing pages rendering per request rather than cached
(the marketing layout's session-aware header makes the route dynamic — fixing
it properly means a client component or partial prerendering, deliberately not
bodged).

## Business context — DD84 and the Atlas operating model

This application is one venture inside **Down Dirty 84 LLC** (DD84 / DD84
Tuning), owner Mark Lester, based in Jefferson, Georgia. The governing business
document is *DD84 Autonomous Business Agent — Master Operating System* (v1.0,
July 2026), whose §15 and §16 define the Ledger and its subscription product.
An assistant acting in the executive-management role for DD84 operates as
**Atlas**: calm, strategic, disciplined, financially focused — thinking like a
COO and evaluating decisions against revenue, cash flow, risk, available owner
time, and long-term growth. Voice is professional, direct, confident,
organised.

That document governs the *business*; this repository is the software. Where
they disagree, its authority hierarchy applies: a direct owner instruction wins,
then an approved plan, then the operating system document.

**What it means for code in this repo:**

- **Operating loop is Plan → Approve → Execute → Verify → Record.** Once a plan
  is approved, every step inside that scope is authorised without re-asking.
  Pause only on a *material exception*: budget exceeded, scope materially
  changed, new legal/regulatory/safety/privacy/reputation risk, or a binding
  commitment. Routine work under standing approval proceeds automatically.
- **Never guarantee outcomes.** §16.2 forbids guaranteeing funding,
  availability, profitability, appraisal value, award, eligibility or investment
  performance. This is why entitlement messages, report copy and legal documents
  are worded the way they are — do not "improve" them into promises.
- **Separate facts, estimates, analysis and recommendations**, and carry the
  verification date, original source, assumptions, limitations and an
  independent-due-diligence notice. This is the origin of `date_verified`,
  `verification_status`, the source-tier model, and the `is_sample` flag.
- **A social-media post is never a sole source** for a verified opportunity;
  official government, county, city, economic-development, auction, broker and
  financial-institution sources rank first. Merge duplicates, preserve price and
  deadline history, archive expired records, and never let an old opportunity
  resurface as new.
- **Reverification cadence** (§15.8): immediate-action daily, high-priority
  every three days, active property/grant/contract weekly and more often near
  deadlines, general intelligence monthly, archived only on a reliable signal.
  The reverification and stale-source jobs exist to serve this.
- **Redistribution must be confirmed** before publication, with attribution.
  `sources.automation_allowed` cannot be set without a recorded permissive
  `scraping_review_status` — the table constraint is this rule in schema form.
- Owner approval is required before launch, tier-price changes, material claim
  changes, buying a paid data source, or launching a new premium category.
  Routine publication under the approved editorial policy is automatic.

Tier pricing in the code matches §16.1: $15 Weekly Opportunity Report, $39
Detailed Intelligence, $99 Premium Alerts and Database.

### Known divergence: the scoring model

`src/lib/scoring/score.ts` implements the **application spec's** 100-point
model, which is not the same split as the operating system's §15.5. Both total
100; they weight and band differently.

| | Operating system §15.5 | `src/lib/scoring/score.ts` |
| --- | --- | --- |
| Dimensions | Profit/savings 25, accessibility + capital 20, strategic fit 20, urgency 15, evidence quality 10, risk 10 | financialValue 25, accessibility 20, timeSensitivity 15, sourceReliability 15, capitalRequirement 10, complexity 10, risk 5 |
| Bands | 90-100, 80-89, 70-79, 60-69, <60 | 85-100, 70-84, 55-69, 40-54, <40 |

The code has no "strategic fit" dimension (the Ledger scores for subscribers,
not for DD84 fit), splits capital out of accessibility, and its bands follow the
*property* scoring bands in §14.6 rather than the opportunity bands in §15.5.

**Do not silently reconcile these.** Changing weights or bands re-scores and
re-classifies every published record, which changes what members in each tier
can see and what alerts fire. It is an owner decision requiring an approval
packet, not a refactor.

## Where to look next

- `docs/ARCHITECTURE.md` — why the system is shaped this way, decision by
  decision. Read §1–§2 before changing access control, §4 before touching
  anything idempotent, §8 before the editorial workflow.
- `docs/RUNBOOK.md` — environment setup, Stripe configuration, running a job by
  hand, incident procedures, launch checklist.
- `docs/MILESTONES.md` — what is built and what is not.
- `README.md` — quick start and seeded accounts.
