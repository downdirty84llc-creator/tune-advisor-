# Opportunity Register — Georgia Opportunity Ledger

**Agent:** Rev (Marketing & Revenue), operating under `docs/DD84-GROWTH-AGENT.md`
**Date:** 2026-07-31
**Venture:** Georgia Opportunity Ledger (Down Dirty 84 LLC)
**Stage:** Approved as planned, 2026-07-31. OPP-001, OPP-002, OPP-003 and
OPP-009 executed. See the completion records at the foot of this file.

**No money was committed and no price was changed.** No Stripe object was
created — the products and prices already existed. Nothing was published; the
code changes sit on a branch awaiting the owner's deploy.

---

## Verified facts

Every claim here was read out of this repository or a read-only API call. Facts
are separated from estimates per §12 research standards.

| #   | Fact                                                                                                                                                                                                                                       | Evidence                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| F1  | Published prices are Free $0, Weekly $15/mo · $150/yr, Detailed $39/mo · $390/yr, Premium $99/mo · $990/yr                                                                                                                                 | `supabase/seed.sql` L18–100                                                                           |
| F2  | Detailed ($39) is the tier flagged `is_recommended`                                                                                                                                                                                        | `supabase/seed.sql` L72                                                                               |
| F3  | **Paid checkout cannot complete.** `stripe_monthly_price_id` / `stripe_annual_price_id` are declared in migration `...000400` but never populated by `seed.sql`. The checkout route returns HTTP 409 `conflict` when a price id is missing | `src/app/api/v1/billing/create-checkout-session/route.ts` L59–75; `supabase/seed.sql` (no assignment) |
| F4  | A live Stripe account exists: **"Down Dirty 84 llc"**, `acct_1QBl8ZINLKqe1c6g`                                                                                                                                                             | `get_stripe_account_info`, read-only                                                                  |
| F5  | Free registration works with **zero** Stripe involvement — profile and free subscription rows are created by database triggers                                                                                                             | `src/app/api/v1/auth/register/route.ts` (0 references to Stripe)                                      |
| F6  | The homepage's primary call to action is "See membership plans" → `/pricing` → a checkout that 409s                                                                                                                                        | `src/app/(marketing)/page.tsx` L153; F3                                                               |
| F7  | There is **no email-only capture** anywhere on the marketing site. The only conversion path is full account registration                                                                                                                   | `src/app/(marketing)/**`, searched                                                                    |
| F8  | 159 Georgia county landing pages exist at `/georgia/[county]`, with `revalidate = 900` and per-county metadata, and all are enumerated in the sitemap                                                                                      | `src/app/(marketing)/georgia/[county]/page.tsx` L9, L24; `src/app/sitemap.ts` L36–43                  |
| F9  | Funnel telemetry already exists: `locked_content_viewed`, `upgrade_button_clicked`, `checkout_started`, `subscription_purchased`                                                                                                           | `src/lib/analytics/events.ts`                                                                         |
| F10 | A weekly report distribution job runs Thursdays 12:00 UTC                                                                                                                                                                                  | `src/lib/jobs/registry.ts`; `vercel.json`                                                             |
| F11 | All ten legal documents render an "awaiting legal review" banner                                                                                                                                                                           | `src/lib/legal/documents.ts`; `docs/MILESTONES.md`                                                    |
| F12 | Nothing has been run against a live Supabase instance or live Stripe account                                                                                                                                                               | `docs/MILESTONES.md`                                                                                  |

### The finding that governs everything else

**This business cannot accept a single dollar today.** F3 is not a caveat, it is
the headline: every paid conversion attempt on every tier terminates in a 409.

The honest consequence: **any acquisition spend right now converts at 0% on paid
tiers.** Not "poorly" — zero. Rev's §14 financial discipline says do not commit
money into a funnel that cannot transact, so no paid-advertising brief appears
below. Proposing ad spend this week would be the wrong recommendation, however
much it would look like marketing work.

F4 materially de-risks the fix: the Stripe account already exists, so this is
product-and-price creation, not company onboarding.

---

## Scored opportunity queue

Scored against the §9 ten-factor method, components shown. This is **not** the
Ledger's own 100-point property score in `src/lib/scoring/score.ts` — different
method, different purpose.

Abbreviations: Rev = revenue potential /20 · Prof = profitability /15 · Spd =
speed to cash /10 · Fit = strategic fit /10 · Auto = automation potential /10 ·
Urg = customer urgency /10 · Rpt = repeatability /10 · Adv = competitive
advantage /5 · Time = owner time (higher = less owner involvement) /5 · Risk =
risk adjustment −15…+5.

| ID      | Opportunity                                            | Rev | Prof | Spd | Fit | Auto | Urg | Rpt | Adv | Time | Risk | **Total** |
| ------- | ------------------------------------------------------ | --: | ---: | --: | --: | ---: | --: | --: | --: | ---: | ---: | --------: |
| OPP-001 | Activate Stripe products and prices                    |  20 |   15 |  10 |  10 |    8 |   6 |   3 |   2 |    2 |   −3 |    **73** |
| OPP-003 | County programmatic SEO (159 pages, already built)     |  16 |   14 |   3 |  10 |    9 |   4 |  10 |   4 |    4 |   −2 |    **72** |
| OPP-002 | Re-point the pre-launch funnel away from dead checkout |  10 |   13 |   7 |  10 |    9 |   8 |   8 |   3 |    5 |   −1 |    **72** |
| OPP-004 | Weekly report as the free-tier lead magnet             |  12 |   13 |   5 |  10 |   10 |   5 |  10 |   3 |    4 |   −2 |    **70** |
| OPP-005 | Broker / SBDC / chamber referral pipeline              |  15 |   12 |   6 |   9 |    4 |   5 |   9 |   4 |    2 |   −3 |    **63** |
| OPP-007 | Validate packaging from existing upgrade telemetry     |   9 |   12 |   4 |   9 |    8 |   4 |   6 |   3 |    5 |   +1 |    **61** |
| OPP-008 | Sample report as top-of-funnel proof asset             |   8 |   12 |   6 |   9 |    7 |   4 |   6 |   3 |    5 |    0 |    **60** |

**Priority rule applied.** §9 says the highest score generally leads, but urgent
revenue always takes precedence. OPP-001 is both, so it goes first regardless.
OPP-002 is sequenced ahead of the higher-ceiling OPP-003 because it is a
same-day change that stops active waste, while OPP-003 compounds over months.

### Gate, not an opportunity

**G-1 — Legal review of the ten documents (F11).** This is not scored because it
is not a growth item; it is a launch gate. §15 forbids publishing marketing
claims that outrun reviewed legal copy. Any campaign that drives traffic to a
site whose terms, subscription terms, refund policy and disclaimers all carry an
"awaiting legal review" banner is a compliance exposure, not a growth win. **No
paid or partner-facing campaign should launch until G-1 clears.** Organic
preparation and free-tier capture are unaffected.

---

## Approval briefs

Each follows the §5 twelve-field structure. Decision options are always:
approve as planned · approve with changes · hold · reject.

### OPP-001 — Activate Stripe products and prices · score 73 · **urgent revenue**

| Field                       | Content                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Opportunity**             | Every paid tier is unsellable. Checkout returns 409 for all three paid plans because no price ids exist (F3). The Stripe account is already live (F4), so this is object creation, not onboarding.                                                                                                                                                                                                                         |
| **Business fit**            | Georgia Opportunity Ledger, all three paid tiers. Gates 100% of subscription revenue.                                                                                                                                                                                                                                                                                                                                      |
| **Target customer**         | Everyone already able to reach `/pricing`. No new audience required.                                                                                                                                                                                                                                                                                                                                                       |
| **Offer**                   | The published matrix, unchanged: Weekly $15/$150, Detailed $39/$390, Premium $99/$990 (F1). **This brief proposes no price change.**                                                                                                                                                                                                                                                                                       |
| **Execution**               | Create 3 products and 6 prices in Stripe; write the 6 price ids onto `subscription_plans`; register the webhook endpoint `POST /api/v1/webhooks/stripe` for `checkout.session.completed`, `customer.subscription.created\|updated\|deleted`, `invoice.payment_failed`; set `STRIPE_WEBHOOK_SECRET`; pin the account API version; run the tier-by-tier test-payment matrix. Procedure already written in `docs/RUNBOOK.md`. |
| **Channels**                | None. Internal system change.                                                                                                                                                                                                                                                                                                                                                                                              |
| **Cost and budget ceiling** | **$0.** Stripe charges per transaction, not for object creation. No spend authority requested.                                                                                                                                                                                                                                                                                                                             |
| **Revenue potential**       | Unquantifiable as a delta because the current denominator is zero — this moves capacity from $0 to the full published matrix. Any figure beyond that would be invention, and §15 forbids it.                                                                                                                                                                                                                               |
| **Risks and safeguards**    | Wrong price id on a plan silently charges the wrong amount → verify each of the 6 ids against its plan code before writing. Live-vs-test key mix-up → rehearse in test mode first. API version drift → pin deliberately in the dashboard, per `RUNBOOK.md`.                                                                                                                                                                |
| **Success metrics**         | 6 populated price ids; one successful test payment per tier per interval; `checkout_started` → `subscription_purchased` completing without a 409.                                                                                                                                                                                                                                                                          |
| **Approval choices**        | Approve as planned · approve with changes · hold · reject                                                                                                                                                                                                                                                                                                                                                                  |
| **After approval**          | Rev cannot complete this alone: creating products and prices is a financial commitment and a §14 pricing action, and the Stripe dashboard requires owner authentication (§24). On approval Rev will prepare the exact object definitions and the SQL to write the ids, and hand off the dashboard steps. **Rev will not create Stripe objects without an explicit instruction naming the amounts.**                        |

### OPP-002 — Re-point the pre-launch funnel · score 72

| Field                       | Content                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Opportunity**             | The homepage's primary CTA sends every visitor to `/pricing`, and every button there leads to a 409 (F6). Meanwhile free registration works perfectly with no Stripe dependency (F5), and there is no lighter-weight capture anywhere on the site (F7). Every visitor arriving before OPP-001 lands is currently a total loss.                                                          |
| **Business fit**            | Top of funnel for all tiers. Preserves demand generated before the payment path opens.                                                                                                                                                                                                                                                                                                  |
| **Target customer**         | Pre-launch visitors: Georgia investors, small-business owners seeking funding, commercial brokers, and anyone arriving from a county page.                                                                                                                                                                                                                                              |
| **Offer**                   | The Free Preview tier as it already ships — 1 saved opportunity, preview-level detail, published methodology. It is a real product, not a waitlist, so it needs no new promise.                                                                                                                                                                                                         |
| **Execution**               | Make free registration the primary homepage CTA and demote "See membership plans" to secondary; add an honest pre-launch note on `/pricing` stating paid tiers open shortly and inviting free registration meanwhile; keep every `upgrade_button_clicked` event firing so demand is measured (F9). Roughly a dozen lines across `src/app/(marketing)/page.tsx` and `/pricing/page.tsx`. |
| **Channels**                | Owned website only.                                                                                                                                                                                                                                                                                                                                                                     |
| **Cost and budget ceiling** | **$0.** No paid channels, no tools, no new dependencies.                                                                                                                                                                                                                                                                                                                                |
| **Revenue potential**       | No direct revenue. Converts otherwise-lost pre-launch traffic into a registered free base that is addressable the day OPP-001 lands. Magnitude depends entirely on traffic volume, which is not yet measurable — stated as a mechanism, not a number.                                                                                                                                   |
| **Risks and safeguards**    | Implying a launch date we then miss → the copy commits to no date. Cannibalising paid conversion after launch → the change is explicitly reverted as part of OPP-001's rollout.                                                                                                                                                                                                         |
| **Success metrics**         | `account_created` per week; bounce rate on `/pricing`; `upgrade_button_clicked` per free account (the pre-launch demand signal that feeds OPP-007).                                                                                                                                                                                                                                     |
| **Approval choices**        | Approve as planned · approve with changes · hold · reject                                                                                                                                                                                                                                                                                                                               |
| **After approval**          | Rev writes the copy and the diff, runs typecheck, lint and tests, formats only the touched files, commits and pushes to the working branch. Publishing to production remains the owner's deploy.                                                                                                                                                                                        |

### OPP-003 — County programmatic SEO · score 72 · **highest ceiling**

| Field                       | Content                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Opportunity**             | 159 county landing pages already exist, cached at 15-minute revalidation, with per-county metadata, all enumerated in the sitemap (F8). This is a substantial organic acquisition asset that is already built and currently doing nothing. Search intent for county-level Georgia commercial property and funding is exactly the product's subject.                                                                                      |
| **Business fit**            | Georgia Opportunity Ledger, primary long-term acquisition channel. Organic traffic carries no per-lead cost, which is what makes a $15–$99 subscription viable.                                                                                                                                                                                                                                                                          |
| **Target customer**         | People searching county-specific commercial property, funding and deadline terms — the highest-intent, lowest-cost audience available to this product.                                                                                                                                                                                                                                                                                   |
| **Offer**                   | Free-tier preview of that county's records, upgrading to full detail.                                                                                                                                                                                                                                                                                                                                                                    |
| **Execution**               | Audit what each county page renders when it holds few or zero published records; ensure thin counties degrade to genuinely useful content (methodology, what gets tracked, adjacent counties) rather than an empty shell; verify the ISR path is not silently forced dynamic by the session-aware marketing header (the known gap in `MILESTONES.md` item 5); confirm titles, descriptions and internal linking are distinct per county. |
| **Channels**                | Organic search only. No paid component in this brief.                                                                                                                                                                                                                                                                                                                                                                                    |
| **Cost and budget ceiling** | **$0.** Engineering time only.                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Revenue potential**       | Highest long-term ceiling of anything in this register, and the slowest — organic ranking is a 3–6 month instrument, so it contributes nothing this quarter. **This is an estimate based on the mechanism, not a forecast**; no traffic data exists yet (F12).                                                                                                                                                                           |
| **Risks and safeguards**    | 159 near-identical thin pages is a textbook trigger for a search quality penalty and is the real risk here — mitigated by gating publication of a county page on it having genuine content. Publishing before G-1 clears exposes unreviewed legal copy to indexed traffic.                                                                                                                                                               |
| **Success metrics**         | Indexed county pages; organic sessions per county page; free registrations attributable to a county entry point; eventual paid conversion from that cohort.                                                                                                                                                                                                                                                                              |
| **Approval choices**        | Approve as planned · approve with changes · hold · reject                                                                                                                                                                                                                                                                                                                                                                                |
| **After approval**          | Rev audits all 159 pages' rendered state, reports which are thin, implements the degradation and metadata fixes, and verifies caching behaviour at build. Sequenced after OPP-002 and gated on G-1 before any push for indexing.                                                                                                                                                                                                         |

### Remaining queue — summaries

- **OPP-004 · Weekly report as the free-tier lead magnet (70).** The distribution
  job already runs Thursdays (F10) and the templates exist. A recurring free
  digest is the natural retention instrument for an intelligence product and the
  most credible demonstration of what a paid tier buys. Blocked in practice until
  there is real published inventory to report on — sending a weekly built from
  `is_sample` records would violate §15. Consent and unsubscribe are already
  handled correctly (RFC 8058, no login required).
- **OPP-005 · Broker / SBDC / chamber referral pipeline (63).** The highest-value
  partner set for this product, and the most legally delicate: the product is
  explicitly not a brokerage and every partner-facing claim has to stay on the
  right side of that. Requires outreach, which is an external action, so it needs
  its own approval and should wait for G-1.
- **OPP-007 · Validate packaging from existing telemetry (61).** `locked_content_viewed`
  and `upgrade_button_clicked` are already instrumented (F9). Before treating
  $39 Detailed as settled, measure which locked feature actually drives upgrade
  intent. Near-zero cost, and it is the only item here that can de-risk pricing
  with evidence rather than opinion.
- **OPP-008 · Sample report as proof asset (60).** `/sample-report` exists and is
  the strongest single proof of value on the site. Currently a secondary CTA.

---

## What Rev is asking for

One decision per brief. Approval shorthand from §32 applies — "approved as
planned", "approved with changes", "approved up to $X", "organic only", "hold",
"reject".

Recommended order: **OPP-001** (unblocks all revenue, needs owner at the Stripe
dashboard), then **OPP-002** (same-day, stops active waste), then **G-1** into
**OPP-003**.

Approved as planned on 2026-07-31 for OPP-001, OPP-002 and OPP-003.

---

## Completion record — 2026-07-31

The §25 "PDF B" content: approved scope versus what was actually completed,
with evidence and unresolved blockers. Two findings contradict the briefs they
came from; both are corrected here rather than quietly left standing.

### OPP-001 — Activate Stripe products and prices

**Correction to the brief.** The brief assumed the Stripe objects did not
exist. They do. A read of the live account found all four products and all six
prices already created, with `plan_code` and `access_rank` metadata,
`gol_<plan>_<interval>` lookup keys, and amounts matching the published matrix
exactly. Rev created nothing and deliberately avoided creating duplicates.

| Plan     | Interval | Price id                         |  Amount |
| -------- | -------- | -------------------------------- | ------: |
| weekly   | monthly  | `price_1TzEO3INLKqe1c6gLvq62WD1` |  $15.00 |
| weekly   | annual   | `price_1TzEO7INLKqe1c6gH20i3Wo2` | $150.00 |
| detailed | monthly  | `price_1TzEOAINLKqe1c6ggOvRN5VP` |  $39.00 |
| detailed | annual   | `price_1TzEODINLKqe1c6gnKArkYcD` | $390.00 |
| premium  | monthly  | `price_1TzEOJINLKqe1c6gYboc5ODU` |  $99.00 |
| premium  | annual   | `price_1TzEOMINLKqe1c6ghcReIVhO` | $990.00 |

All six are **live mode**. The real remaining gap was that nothing carried these
ids into `subscription_plans`.

**Completed.** `supabase/stripe-prices.live.sql` — idempotent updates for the
three paid plans, plus a verification query naming any tier that would still 409. `docs/RUNBOOK.md` §Stripe updated to mark steps 1 and 2 done and to point
step 3 at the file.

**Deliberately not done:** these ids were kept out of `seed.sql`. Every
environment loads `seed.sql`, and each environment has its own Stripe keys — a
live price id installed into a development database by `supabase db reset`
would aim that environment at real money. This is why no `stripe-prices.test.sql`
was invented either; it must come from a genuine test-mode price set.

**Unresolved, needs the owner.** The webhook endpoint, `STRIPE_WEBHOOK_SECRET`,
the pinned API version and the tier-by-tier test-payment matrix all require a
deployed application and dashboard access. There is also no Ledger Supabase
project — the only project on the account is `Snoop`, INACTIVE and unrelated —
so there is no live database to run the SQL against yet. **Checkout will still
409 until a database exists and that file is run against it.**

### OPP-002 — Re-point the pre-launch funnel

**Completed as planned.** Homepage hero call to action is now "Start free" →
`/register`, with the plans link demoted to inline text that states plainly
that paid tiers are not open. `/pricing` carries a `role="note"` banner saying
the same and pointing at free registration, styled with the project's own
`signal.investigate` token rather than an imported colour. Both changes carry a
comment saying to revert them as part of the paid launch, so they cannot
outlive their reason.

No launch date is stated anywhere, because we do not have one and a missed date
costs more than no date.

### OPP-003 — County programmatic SEO

**Real defect found and fixed.** `loadCounty` in
`src/app/(marketing)/georgia/[county]/page.tsx` used
`createServerSupabaseClient()` — the session-bound client — which calls
`cookies()`. It ran twice per request. This is precisely the trap documented in
`docs/ARCHITECTURE.md` §15 and in `CLAUDE.md`, and it silently defeated the
`revalidate = 900` declared at the top of the same file. Switched to
`createPublicSupabaseClient()`, with a comment recording why.

**Thin-content case addressed.** A county with no published records previously
rendered a breadcrumb, a heading, one sentence and a sign-up box. It now
explains what is monitored in that county, why an empty county is an honest one,
and links to the method.

**Correction to the brief.** The brief rated "159 near-identical thin pages" as
the main risk. That was overstated: `sitemap.ts` draws from the
`opportunity_facets` RPC, which only returns counties that actually have
published records, so thin counties were never being submitted to search
engines. They are reachable by direct navigation and internal links only.

**Verified at build, and the result is negative.** `npm run build` still
classifies `/georgia/[county]` as `ƒ` (Dynamic) — as it does every route under
`(marketing)`. The client fix was necessary but not sufficient. The binding
constraint is `SiteHeader` (`src/components/site/header.tsx` L24–25), an async
server component calling `getSessionContext()`, which forces the entire
marketing layout dynamic regardless of what any page does.

**Not fixed, on purpose.** That is `MILESTONES.md` item 5, where the repository
explicitly records that the fix means moving the auth-dependent part of the
header to a client component or adopting partial prerendering, and that it is
"deliberately not bodged in the meantime". Re-architecting the header is outside
what was approved here. It needs its own brief.

### Gate check

**G-1 is untouched and still blocking.** All ten legal documents still carry an
"awaiting legal review" banner. Nothing above published anything externally, so
nothing crossed that gate.

### Verification evidence

`npm run typecheck` clean · `npm run lint` zero warnings · `npm test` 148 passing
across 9 files · `npm run build` compiles successfully. Only touched files were
formatted.

### Next action

One new brief is needed and not yet written: **make the marketing layout
cacheable** by moving the session-dependent part of `SiteHeader` to a client
component or adopting partial prerendering. Until that lands, OPP-003's organic
ceiling is capped — the pages work, but every visit is server-rendered.

The two things still standing between this business and its first dollar are a
provisioned Supabase database (to run the price-id SQL against) and the legal
review. Neither is something Rev can clear.

---

## OPP-009 — Make the marketing layout cacheable · score 62

Added 2026-07-31 after OPP-003's build verification came back negative. Numbered
009 because 006 was vacated when the legal item was reclassified as gate G-1.

**Sequencing note.** 62 is below OPP-003 (72) and OPP-004 (70), and that is
honest — on its own this generates no revenue. But it is the enabler for
OPP-003's entire organic ceiling, so it sequences with OPP-003 rather than by
its own score, the same way the priority rule pulled OPP-001 to the front.

| Factor                | Score | Reasoning                                                                          |
| --------------------- | ----: | ---------------------------------------------------------------------------------- |
| Revenue potential     |    11 | No direct revenue; uncaps the organic channel                                      |
| Profitability         |    13 | Removes server render on every marketing hit; no ongoing cost                      |
| Speed to cash         |     3 | Caching is immediate, revenue from it is not                                       |
| Strategic fit         |    10 | Organic is the only acquisition channel that makes a $15 subscription viable       |
| Automation potential  |     8 | Once fixed, every future marketing page inherits it                                |
| Customer urgency      |     4 | No customer is asking for this                                                     |
| Repeatability         |     8 | Applies to all seven cached routes plus 159 county pages                           |
| Competitive advantage |     3 | Faster pages, better Core Web Vitals                                               |
| Owner time required   |     5 | Fully delegable                                                                    |
| Risk adjustment       |    −3 | Touches a header shared by three layouts; hydration and cookie-policy implications |

### The twelve fields

| Field                       | Content                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Opportunity**             | Seven marketing routes declare `revalidate` (300–900s) and all seven are dead, along with the 159 county pages. `SiteHeader` is an async server component calling `getSessionContext()`, which calls `cookies()`, which opts every route under the marketing layout out of static rendering. Every marketing hit is a server render that was meant to be a cache read. |
| **Business fit**            | Prerequisite for OPP-003. Organic search is the only channel whose per-lead cost makes a $15–$99 subscription work.                                                                                                                                                                                                                                                    |
| **Target customer**         | Anonymous search traffic — the audience that should never have needed a personalised header in the first place.                                                                                                                                                                                                                                                        |
| **Offer**                   | Unchanged. This is infrastructure.                                                                                                                                                                                                                                                                                                                                     |
| **Execution**               | Split the header by audience. Marketing gets a static shell; members keep the server-rendered one. Detail below.                                                                                                                                                                                                                                                       |
| **Channels**                | None. Internal change.                                                                                                                                                                                                                                                                                                                                                 |
| **Cost and budget ceiling** | **$0.** No new dependency, no new service. Engineering time only.                                                                                                                                                                                                                                                                                                      |
| **Revenue potential**       | None directly. Removes the cap on OPP-003 and cuts server compute per marketing request. **Estimate based on mechanism, not a forecast** — there is still no traffic data.                                                                                                                                                                                             |
| **Risks and safeguards**    | Detailed below; the material ones are a logged-out flash, one extra request per marketing page view, and a cookie-policy consequence.                                                                                                                                                                                                                                  |
| **Success metrics**         | `npm run build` reports `○`/`●` rather than `ƒ` for the seven marketing routes and `/georgia/[county]`; Core Web Vitals LCP on county pages; server compute per marketing request.                                                                                                                                                                                     |
| **Approval choices**        | Approve as planned · approve with changes · hold · reject                                                                                                                                                                                                                                                                                                              |
| **After approval**          | Rev implements option A, verifies route classification at build, checks no member data appears in prerendered HTML, runs the full gate, formats only touched files, commits and pushes.                                                                                                                                                                                |

### Verified constraint: partial prerendering is not available

`MILESTONES.md` item 5 offers two routes — move the auth-dependent part to a
client component, **or** adopt partial prerendering. The second is closed.
Setting `experimental: { ppr: 'incremental' }` on the installed Next 15.5.22 and
building fails outright:

```
[Error: The experimental feature "experimental.ppr" can only be enabled
 when using the latest canary version of Next.js.]
```

Tested and reverted; `next.config.mjs` is unchanged. Taking PPR would mean
moving a pre-launch product with billing and heavy RLS onto a Next canary
release to win a caching improvement. That trade is not worth proposing, so this
brief does not offer it.

### What the header actually needs the session for

Only four things, all in the right-hand cluster and the nav list:

1. `PUBLIC_LINKS` vs `MEMBER_LINKS`
2. `viewer.isStaff` — the Admin link
3. `viewer.isAuthenticated` — "Log in / Join now" vs plan name and Upgrade
4. `planName` — one string

Everything else — logo, chrome, layout — is static. The dynamic surface is small,
which is what makes this tractable.

### Option A — static shell plus a client session island · recommended

- `SiteHeader` becomes a **non-async** server component: static chrome plus
  `PUBLIC_LINKS`. It renders the signed-out state, and nothing else.
- A new `'use client'` component owns the session-dependent cluster. It renders
  the signed-out state as its initial markup, then calls
  **`GET /api/v1/auth/session`** — which already exists and already returns
  exactly `authenticated`, `planCode`, `planName` and `isStaff` — and upgrades
  itself if a session is found.
- `(member)/layout.tsx` keeps today's async server header, renamed
  `MemberHeader`. Member routes are per-user by definition and `next.config.mjs`
  already sends `private, no-store` for them, so there is nothing to gain by
  making them client-side and a real cost in doing so.

This avoids the UX regression in option B: a signed-in member visiting a
marketing page still gets their own nav, a moment later.

**A security argument, not only a performance one.** Today the marketing pages
embed session state in server-rendered HTML. Anyone who later made those routes
cacheable without fixing this would put member-specific markup into a shared
cache. Option A makes the prerendered HTML contain the signed-out state and
nothing else, so caching becomes safe rather than merely faster. Verifying that
no member data appears in the prerendered output is part of the acceptance.

### Option B — two separate headers · simpler, worse

A static `MarketingHeader` and a session-aware `MemberHeader`, with no client
island. Less code and no flash, but a signed-in member on any marketing page
sees the public nav with no route back to their dashboard. Rejected on that
basis, though it is the correct fallback if the island proves troublesome.

### Risks and how each is handled

- **Flash of signed-out header.** Reserve the cluster's width and height so the
  swap causes no layout shift, and do not animate it. Members see it briefly on
  marketing pages only; the member area is unaffected.
- **One extra request per marketing page view.** The island would fetch for
  anonymous visitors too, who will never have a session. Supabase auth cookies
  are `httpOnly`, so the client cannot check for one directly. Mitigation:
  middleware already calls `getUser()` on every request, so it can set a
  non-`httpOnly`, non-identifying hint cookie — a boolean, no user id, no token —
  and the island fetches only when that cookie is present. Anonymous traffic
  then costs nothing extra.
- **That hint cookie has a legal consequence.** It is functional rather than
  analytical, but `src/lib/legal/documents.ts` has a cookie policy and it must
  list the cookie. **This lands inside G-1's scope**, so if the cookie mitigation
  is taken, the cookie policy changes before that document goes to review — or
  the mitigation is deferred and we accept the extra request. Flagging it rather
  than letting a legal document silently drift out of date.
- **Shared component, three call sites.** `reset-password/page.tsx` also renders
  `SiteHeader`; it needs checking, not just the two layouts.

### Explicitly out of scope

The member layout stays server-rendered. Nothing about RLS, entitlements or the
access model is touched. No caching headers change — the existing `no-store`
rules for `/dashboard`, `/account`, `/saved`, `/admin` and `/api` stay exactly
as they are.

### Completion record — OPP-009

Approved and executed 2026-07-31, option A as recommended.

**Built.** `src/components/site/header-session.tsx` (`'use client'`) owns the
nav list and the right-hand cluster, initial state signed-out, upgrading itself
from `GET /api/v1/auth/session` on mount. `src/components/site/header.tsx` is now
a plain non-async server component: chrome plus that island, no session access.
`src/components/site/member-header.tsx` keeps the original server-resolved
header, and `(member)/layout.tsx` uses it.

`generateStaticParams` was added to the county route. It prerenders only the
counties that hold published records — the same set the sitemap submits — and
lets the rest render on demand under `dynamicParams` with this file's
`revalidate` caching the result. Building 159 pages when most say "nothing
published here yet" would trade build time for nothing.

**Route classification, before and after.** All seven routes that declare
`revalidate` now cache; before this change every one of them was `ƒ`.

| Route                                                             | Before | After           |
| ----------------------------------------------------------------- | ------ | --------------- |
| `/`                                                               | ƒ      | ○ 5m            |
| `/commercial-property`                                            | ƒ      | ○ 10m           |
| `/funding`                                                        | ƒ      | ○ 10m           |
| `/insights`                                                       | ƒ      | ○ 15m           |
| `/pricing-reports`                                                | ƒ      | ○ 15m           |
| `/sample-report`                                                  | ƒ      | ○ 15m           |
| `/georgia/[county]`                                               | ƒ      | ● SSG           |
| `/how-it-works`                                                   | ƒ      | ○               |
| `/legal/[slug]`                                                   | ƒ      | ● SSG, 10 paths |
| `/login`, `/register`, `/corrections/new`, `/auth/reset-password` | ƒ      | ○               |

**Security acceptance met.** The prerendered homepage HTML was inspected
directly: it contains "Log in" and "Join now", the public nav, and **no**
`href="/dashboard"`, **no** `href="/admin"`, and no plan-name string. The only
occurrence of the word "dashboard" is the homepage's own "Member dashboard"
preview-panel label, which is static marketing copy. Nothing member-specific
can reach a shared cache.

**Honest limits.**

- `/georgia/[county]` reports `●` but currently prerenders **zero** paths,
  because there is no database to enumerate counties from. The classification
  change is real and the route is now free of `cookies()`, so it caches on
  demand; the build-time prerender of individual counties starts working when a
  database exists.
- `/pricing` is still `ƒ`, correctly. The page itself calls `getSessionContext()`
  to tell `PlanGrid` which plan the viewer is on, and it never declared
  `revalidate` — it was not one of the seven and was never meant to be cached.
- `/support` and `/unsubscribed` remain `ƒ` for the same reason: no `revalidate`,
  never in scope.

**Deferred, and why.** The hint-cookie mitigation was **not** implemented. The
island therefore issues one request to `/api/v1/auth/session` per marketing page
view, including for anonymous visitors who will never have a session. The fix is
a non-identifying boolean cookie set in middleware, but a new cookie has to be
listed in the cookie policy, and that document is inside gate G-1's pending legal
review. Adding an unlisted cookie to win a round trip is the wrong trade while
the policy is being reviewed. The reasoning is recorded in a comment in
`header-session.tsx` so it is not rediscovered from scratch.

**Verification.** `npm run typecheck` clean · `npm run lint` zero warnings ·
`npm test` 148 passing · `npm run build` compiles with no errors · route table
inspected · prerendered HTML inspected.

**Follow-up worth its own decision:** implement the hint cookie once the cookie
policy is being revised anyway, and add `generateStaticParams` coverage checks
once a database exists so a county with records cannot silently fall out of the
prerendered set.
