# Milestone status

Against the ten milestones in specification section 28. This is an honest
accounting: "Done" means implemented, typechecked and linted, with unit tests
where the logic is testable without a database. Nothing here has been run
against a live Supabase instance or live Stripe account.

---

## Milestone 1 — Discovery and design system

**Partial.** A working design system exists (`tailwind.config.ts`,
`src/app/globals.css`, `src/components/ui/primitives.tsx`) with a defined
palette and type scale.

The four accessibility claims made here were previously asserted rather than
checked. They have now been verified against the code:

| Claim | Verified |
| --- | --- |
| Focus-visible rings | `:focus-visible` is a global rule in `globals.css`, so it covers every interactive element rather than each component remembering to opt in |
| Meters carry role and text | `role="meter"` with `aria-valuenow` / `aria-valuemin` / `aria-valuemax`, plus a visible label |
| Status never by colour alone | `Pill` types `children` as required, so the compiler refuses a badge that is colour and nothing else |
| Reduced motion respected | `@media (prefers-reduced-motion: reduce)` collapses animation and transition durations globally |

Still not delivered, and none of it is a code artefact: high-fidelity
comparative design work, a confirmed brand direction, and **owner sign-off**.
Sign-off is the owner's to give — it is recorded here when given, with the
date, and the launch checklist item in `RUNBOOK.md` stays unticked until then.

## Milestone 2 — Foundation

**Done.** Repository, environment separation, complete schema across 21
migrations, email/password and magic-link authentication, password reset (both
halves of the flow on one page), Google sign-in wired in Supabase config,
profiles created by database trigger, the full role system, public pages, and
all ten legal documents behind `/legal/[slug]`.

## Milestone 3 — Billing and access

**Done in code; needs a Stripe account to verify.** Checkout, customer portal,
plan change with upgrade/downgrade proration policy, cancellation at period end
with a confirmation that states what the member keeps, and an idempotent webhook
handler. A full billing page shows plan, status, renewal, interval and amount.
Access-rank enforcement is implemented in all three layers described in
`ARCHITECTURE.md`.

Outstanding: create the products and prices in Stripe, populate
`stripe_monthly_price_id` / `stripe_annual_price_id` on `subscription_plans`,
and run the tier-by-tier test-payment matrix the acceptance criterion requires.

## Milestone 4 — Opportunity database

**Done.** Opportunity schema with property and funding detail tables, source
management with the terms-review constraint, full-text search, the filter and
sort surface from spec 11, cursor pagination, opportunity cards, and tier-aware
detail pages.

## Milestone 5 — Administrative workflow

**Done.** Draft workflow, review queue with approve/publish actions, transition
validation with role checks, version history on material change, audit logging
on every action spec 7.15 lists, and the seven-step opportunity editor
(spec 15.2) with autosave, local draft recovery, live scoring, a per-tier
preview and a publish gate that names the missing fields and links to the step
each one lives on.

Acceptance met: an administrator can now take a record from creation through
review to publication without developer assistance.

## Milestone 6 — Member features

**Done.** Dashboard with personalised recommendations and metrics, saved
opportunities with status and notes, deadline calendar with per-record `.ics`
export, a full preferences surface (counties, industries, property and funding
types, capital range, minimum score, time zone), and locked-content states that
name the exact feature withheld and the plan that unlocks it.

## Milestone 7 — Reports and email

**Done.** Report schema with per-section access ranks, the report builder
(spec 15.4) with record search, keyboard-accessible ordering, per-entry
commentary, per-entry and per-section tier gating, a live access preview and
schedule/PDF/distribution settings. Dependency-free PDF generation, the weekly
distribution job with per-member personalisation, and all five transactional
templates in HTML and plain text.

Email additionally supports RFC 8058 one-click unsubscribe: signed tokens,
`List-Unsubscribe` headers, an endpoint that works without a login, and a
granular per-alert-type preference page.

## Milestone 8 — Premium features

**Done.** Saved searches with immediate alert matching, the alert pipeline with
content-addressed suppression, CSV export with formula-injection defence and
async handling above 500 rows, alert preferences, and premium-briefing access
gating.

## Milestone 9 — Analytics and optimisation

**Done.** First-party analytics events with property scrubbing, forwarded to
PostHog server-side from the same scrubbed payload. Error reporting to Sentry
from the API error handler and the job runner. Admin dashboard with subscriber
counts, MRR, failed payments, editorial backlog and job-run observability.

Both integrations are implemented without their vendor SDKs — see
`ARCHITECTURE.md` §12 for why, and what that costs.

Public-page caching is now closed as well. The marketing surface was rendering
per request because the shared header resolved the session in the layout;
`SiteHeader` now takes the session as a prop and public pages resolve it in the
browser. `/`, `/pricing`, `/commercial-property`, `/funding`, `/insights`,
`/pricing-reports`, `/sample-report`, `/how-it-works` and `/georgia/[county]`
are prerendered and revalidated on their declared intervals. See
`ARCHITECTURE.md` §15.

## Milestone 10 — Launch

**Not started** — correctly, since it depends on the outstanding items below.
See `RUNBOOK.md` for the checklist.

---

## What is still not built

1. **Stripe webhook endpoint.** The account still has none. This is the one
   that costs money rather than merely blocking a launch: a completed Checkout
   charges the card while nothing writes the subscription back, leaving a
   paying member at their old access rank. It cannot be created until the
   application has a public hostname. Do not take a live payment first.

   The rest of the Stripe chain is done — products, all six prices at the
   spec 6 amounts, and the price ids written onto `subscription_plans` on the
   provisioned project. The test-payment matrix still needs test-mode
   equivalents, since the products were created directly in live mode.
2. **Legal review of all ten documents.** A hard launch blocker. Seven of the
   ten carry `requiresReview: true` and render an "awaiting legal review"
   banner; the three editorial documents do not, which is itself a question for
   counsel. `docs/LEGAL-REVIEW.md` is the packet.

   The four places where the documents promised behaviour the software did not
   have are now closed — account deletion, subject-access export, the analytics
   opt-out and the refund workflow are all built (migrations `…002300` and
   `…002400`). Counsel is reviewing an accurate description, which was the
   point of settling them first. What remains is the review itself.
3. ~~**Attachment uploads.**~~ **Built, with the scanner still switched off.**
   `POST /api/v1/admin/attachments` takes a multipart upload from any of the
   four content roles — a role check, never a rank check — validates size and
   type in `src/lib/attachments/storage.ts` before anything reaches the bucket
   so a rejected file gets a 422 naming the accepted formats rather than a
   constraint violation surfacing as a 500, stores the object under a path
   carrying 128 bits of randomness, and writes the row through
   `log_admin_action`. `scan_status` is left at its `pending` default: the API
   never asserts a scan result it has not got.

   `GET /api/v1/attachments/{id}` reads the row through the session-bound
   client so `attachments_read` decides visibility, calls
   `canServeAttachment()` and refuses anything but `clean` — staff included,
   with no bypass — then mints a signed URL that lives two minutes. Migration
   `…002600` adds the storage policy that lets a member's own session do that
   signing, and it re-checks both the row's visibility and its scan status, so
   a member holding a bucket path cannot step around the gate by asking
   storage directly.

   The honest remainder: no administrator UI yet (the endpoints are the
   surface), no delete endpoint, and — the one that matters — with no
   `VIRUS_SCAN_PROVIDER` configured every attachment stays `pending` and is
   therefore never downloadable. The feature is off, not bypassed, but that
   means an uploaded file is currently unreachable until a scanner is
   configured. Configuring one is a launch task, not a code change.
4. **High-fidelity design and brand sign-off** (milestone 1).
5. ~~**Super-administrator MFA reset.**~~ **Built.**
   `POST /api/v1/admin/staff/{id}/mfa-reset` removes a locked-out staff
   member's enrolled factors so they can re-enrol. Super administrator only,
   never by rank, with a mandatory written reason and an audit entry naming
   both parties. It deliberately refuses to target your own account: a super
   administrator who loses their own device must be reset by another one, so
   losing a phone never quietly removes the protection from the account that
   most needs it.
