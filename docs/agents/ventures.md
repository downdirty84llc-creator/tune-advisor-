# Venture Registry

The business context Rev operates against. §30 of `docs/DD84-GROWTH-AGENT.md`
requires "a business and venture registry containing brands, offers, pricing,
service areas, capabilities and restrictions" — this is that file.

**Read this before doing anything.** It exists so Rev does not re-derive the
same facts on every run, and so a claim about the business can be checked
against a written source instead of being invented.

**Every figure here was read from a live system on the date shown.** When a
figure is older than 30 days, re-verify it rather than quoting it. Facts that
could not be verified are marked `UNKNOWN` and must stay that way until someone
checks — an `UNKNOWN` is not an invitation to estimate.

**No customer names, emails or payment details in this file.** It is
version-controlled. §23 forbids publishing confidential customer information.
Customer detail lives in Stripe and bookipay.

---

## Owner and authority

| Field              | Value                                                           |
| ------------------ | --------------------------------------------------------------- |
| Owner              | Down Dirty 84 LLC (`downdirty84llc@gmail.com`)                  |
| Approval mechanism | The owner, in conversation. No standing budget authority exists |
| Spend authority    | **$0.** Every paid commitment needs explicit per-item approval  |
| Pricing authority  | **None.** Rev may propose prices, never change them             |
| Discount policy    | No standing policy. Every discount needs approval               |
| Refund authority   | **None.** Refunds are the owner's                               |

---

## Venture 1 — DD84 Tuning

Automotive performance: ECU and EFI calibration, diagnostics, PCM services,
digital tuning tools, and merchandise.

### Systems

| System          | Identifier                                                                                           | Verified              |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------------------- |
| **Front door**  | **`dd84tuning.com`, built and hosted on Manus. Everything runs through it** — see below              | 2026-08-13 _(stated)_ |
| Shopify store   | `shop.downdirty84llc.com` (`49qz1e-0r.myshopify.com`), Basic plan, USD, EDT                          | 2026-08-03            |
| Stripe          | `acct_1QBl8ZINLKqe1c6g` — "Down Dirty 84 llc"                                                        | 2026-08-03            |
| Invoicing       | **bookipay** — every historic payment came through it. Rev has **no API access** to it               | 2026-08-03            |
| Print-on-demand | Printify, District Photo, Sensaria, Printed Mint, MWW, Duplium, Lumient, Fulfill Engine, Deco Slides | 2026-08-03            |

### The front door — and why every traffic figure below is suspect

**Owner statement, 2026-08-13: `dd84tuning.com` is a Manus site, and everything
runs through it — the tuning business, the Ledger, and traffic into the Shopify
store.** Shopify is a checkout behind it, not the shop window.

**This is `stated`, not `verified`, and cannot currently be verified by Rev.**
`dd84tuning.com` is blocked by this environment's network egress proxy, and
there is no Manus connector on this account. Rev can read neither the site nor
its analytics. Until that changes, **anything about the front door is the
owner's word, recorded as such** — which is a legitimate source, and is still
not the same as a reading.

**What this invalidates.** Every traffic and channel figure in this file was
read from Shopify. If Shopify is the second step, those numbers describe the
back half of the funnel and say nothing about the front. They remain true of
Shopify and must stop being quoted as if they described the business.

> **Correction — the 2026-08-03 diagnosis was measured on the wrong surface.**
> Rev concluded that DD84 Tuning's problem was **invisibility**, and rested it
> on Shopify's 7 organic search visits in 180 days. That figure is real, but it
> measures a page that may never have been the landing surface. **If the
> audience arrives at `dd84tuning.com`, the business is not invisible — Rev was
> looking at the wrong window.** The finding that survives untouched is the
> money: 0 Shopify orders all time, and no payment collected since 2025-09-12.
> Those come from Stripe and Shopify order records, not from traffic
> attribution.

**The most valuable unknown in this file is now the Manus site's analytics.**
Sessions, sources and conversions for `dd84tuning.com` would settle in one
reading what the Shopify numbers cannot: whether anyone is arriving at all, and
what they do next. Ask for it before commissioning any further marketing work.

### Revenue — the single most important fact in this file

| Metric                          | Value                                                                                                                               | Verified   |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| All-time revenue                | **$3,507.86**                                                                                                                       | 2026-08-03 |
| Paid invoices                   | 10                                                                                                                                  | 2026-08-03 |
| Distinct customers              | **3**                                                                                                                               | 2026-08-03 |
| Average invoice                 | $350.79                                                                                                                             | 2026-08-03 |
| Largest invoice                 | $1,287.50                                                                                                                           | 2026-08-03 |
| Concentration                   | One customer = 67% (6 invoices); two customers = 99%                                                                                | 2026-08-03 |
| ~~**Last payment**~~            | ~~2025-09-12~~ → **2026-10-22**                                                                                                     | 2026-10-23 |
| ~~Shopify orders, all time~~    | ~~**0**~~ → **1** — order #1001, **$550.00, PAID, FULFILLED**, placed 2026-10-23T11:56:43Z                                          | 2026-10-26 |
| **Payments since the baseline** | **+$1,700.00** — $450.00 (10-22, Zelle, "tune") · **$550.00 (10-23, Shopify order #1001)** · $700.00 (10-24, Zelle, "mecanic tune") | 2026-10-26 |

**The drought ended on 2026-10-22, after 405 days — and then it rained.**
**$1,700.00 arrived in four days**: $450.00 on 10-22 (Zelle, memo "tune"),
**$550.00 on 10-23 through the storefront**, and $700.00 on 10-24 (Zelle, memo
"mecanic tune", from a company). **That is 48% of everything this business had
ever collected, in four days.**

**Only one of the three can be attributed to a job.** Order #1001 carries line
items; **the two bank transfers do not, and neither payer has been identified
against a job** — **T-88** and **T-92** carry them. **$700.00 matches no
approved rung**, sitting between the $650 Performance Tune and $749 in-person
commissioning.

**Derived, and labelled as derived: all-time payments received are $5,207.86**
($3,507.86 from the 2026-08-03 baseline **plus $1,700.00 collected between
2026-10-22 and 2026-10-24**). **The figures come from different sources — a bank
notification for two of them, Shopify for the third — and have not been
reconciled against each other**, because no payment system is reachable. **The
invoice count stays at 10:** two of the three were bank transfers and the third
is a storefront order, and **none of them is an invoice.**

**The rest of this table is 81 days old and breaches the 30-day rule.** This run
re-verified only the last-payment date and the Shopify order count. **Average
invoice, largest invoice and concentration were not re-checked and must not be
quoted as current.**

~~**100% of revenue came from invoiced service work. 0% from the storefront.**~~
**False from 2026-10-23.** Order #1001 took **$550.00 through checkout** — 32%
of this week's $1,700.

**The claim underneath it still holds, and the correction is to the figure, not
the strategy.** That sentence was arguing that **self-serve digital products are
not the revenue model**, and order #1001 does not contradict it: **it is a PCM
unlock _service_ bought through checkout, not a digital download.** The
storefront turned out to be a viable _order channel for services_. **No digital
product has ever sold.**

**The lesson is about the shape of the claim.** "0 orders, all time" was being
used as a structural fact about the business when it was **a running total one
customer could change** — and on 2026-10-23 one did, **about seventeen minutes
after a routine re-verified it as zero.**

**What those invoices were actually for is `UNKNOWN`** — Stripe records amounts
and invoice numbers, not line items.

**Owner decision, 2026-08-07: the invoices are closed as a line of enquiry.** Do
not chase the line items, and do not raise the gaps in invoice numbering. The
`UNKNOWN` above still binds — Rev must not guess which service earned the money,
and must not present a guess as the reason a service is worth leading with. It
is simply not a question to keep asking.

### Traffic

**Shopify only. This is the back half of the funnel** — see "The front door"
above. `dd84tuning.com`'s own traffic is unread and is the figure that matters.

| Metric                       | Value                                                                                                                                          | Verified   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Sessions, trailing 12 months | 574 (397 of them in the Jan 2026 launch month)                                                                                                 | 2026-08-03 |
| Recent run rate              | ~19–38/month — about one visitor a day **reaching Shopify**                                                                                    | 2026-08-03 |
| Sources, last 180 days       | direct 146, social 16, **search 7**, unknown 3, email 1                                                                                        | 2026-08-03 |
| Funnel, trailing 12 months   | 574 sessions → 23 carts → 20 reached checkout → **0 completed**                                                                                | 2026-08-03 |
| Checkout status              | **Not indicted, not cleared.** Inventory, payments, login-at-checkout and US shipping rates all verified correct. Needs one real test purchase | 2026-08-03 |

**Read "direct 146" again in this light.** A referral that arrives without a
referrer header lands in `direct`, and a link from the Manus front door may well
do exactly that. So `direct` is not necessarily people typing the URL — it may
be the front door doing its job. **This is a hypothesis with two candidate
causes and no evidence separating them**, and it is not to be reported as a
finding until the Manus analytics are read.

### Catalogue and price ladder

~~50 active products, $19.99–$650.~~ **The ceiling was wrong: it is $749**
(Toyota/Lexus Performance Tune with the 7-day device rental,
`DD84-TOYLEX-PERF-RENTAL`, ACTIVE). Corrected 2026-10-22 — see the corrections
note below.

| Rung       | Offer                                                                | Price              | Verified       |
| ---------- | -------------------------------------------------------------------- | ------------------ | -------------- |
| Entry      | ECM Compatibility & Tune Readiness Review                            | $49 / $75          | 2026-10-22     |
| Entry+     | ECU Tune File Review — GM/Ford/Dodge · _no calibration changes_      | $99 / $149 / $199  | 2026-10-22     |
| Entry+     | Written Setup & Datalog Guidance — one written response              | $99                | 2026-10-22     |
| Diagnostic | Tune-or-Mechanical Diagnostic Review — GREEN/YELLOW/RED outcome      | $149 / $199        | 2026-10-22     |
| Diagnostic | Bad or Unknown Tune Evaluation — third-party calibration             | $149               | 2026-10-22     |
| Diagnostic | Check Engine / No-Tune Diagnostic Deposit                            | $75                | 2026-10-22     |
| Core       | GM, Ford, Dodge/Mopar custom ECU tuning                              | $350 / $450 / $650 | 2026-10-22     |
| Core       | Toyota/Lexus performance tuning (+$99 7-day device rental)           | $400–$749          | 2026-10-22     |
| Core       | Holley EFI Tuning Services — remote and in-person                    | $275–$599          | 2026-10-22     |
| Adjacent   | Wiring & EFI power diagnostics                                       | $75 / $125 / $250  | 2026-10-22     |
| Adjacent   | Holley EFI fuse-blowing & power-loss diagnostic                      | $125 / $250 / $350 | 2026-10-22     |
| Adjacent   | Dodge/Mopar PCM unlock, removal, reinstall                           | $75–$300           | not re-checked |
| Recurring  | Performance Shop Tuning Support Session                              | $150 / $250 / $350 | 2026-10-22     |
| Digital    | Holley EFI calibrations, LS swap toolkit, cam-swap pack, calculators | $39.99–$399        | not re-checked |
| Licence    | Professional Shop Licence — GM toolkit                               | $399               | not re-checked |
| Merch      | Print-on-demand apparel and decor                                    | $18.77–$64.68      | not re-checked |

#### Corrections, 2026-10-22 — read before quoting anything

Read against the live Shopify catalogue while pricing T-37 and T-64. **No live
price was changed; only this record was corrected to match the store.**

| This file said                                                | The store says                                                                                                                                                        |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Core · **Holley EFI Tuning & Diagnostics** · $350/$450/$650   | That product is **ARCHIVED**. It was replaced on 2026-08-06 by _Holley EFI Tuning Services_ at $275/$349/$399/$499/$550/$599, which has **no diagnostic rung at all** |
| Core · GM/Ford/Mopar/Toyota custom ECU tuning · **$400–$650** | GM, Ford and Mopar start at **$350**, not $400; Toyota/Lexus reaches **$749** with the device rental                                                                  |
| 50 active products, **$19.99–$650**                           | The ceiling is **$749**                                                                                                                                               |

**Six active service rungs were missing from this ladder**, and they are the
ones a half-diagnosed job needs: the three Diagnostic rows above, the Written
Setup & Datalog Guidance row, the Holley fuse-blowing row, and four more not yet
added (Cammed Street $499/$599 · Injector/E85/Flex $399/$499/$649 · LS/Hemi Swap
Commissioning $599/$749 · Transmission $149/$299/$349).

**This is why two live jobs sat unpriced for nine days.** Every routine run read
this ladder, and the rungs that price an unfinished diagnostic job were not in
it. The prices existed in the store the whole time. **A full ladder
re-verification is T-84.**

**Two rung boundaries are undefined in DD84's own published copy** and cannot be
settled from the store: what separates Basic ($350) from Street ($450) from
Performance ($650) on the GM, Ford and Mopar tuning services. The product
description lists the three prices and no scope difference. **Do not infer one**
— that is an owner decision, raised as T-84.

### Capabilities

GM Gen III/IV/V LS and LT · Holley EFI (HP, Dominator, Terminator X) · HP Tuners
· Ford Coyote and EcoBoost · Dodge/Mopar HEMI and PCM unlock · Toyota/Lexus ·
4L60E and 4L80E transmission calibration · cam swaps · boost control ·
performance wiring and EFI power diagnostics · datalog review.

### Restrictions — non-negotiable

- **Never guarantee a power figure, a result, or that a tune will fix an
  undiagnosed problem.**
- **Never market emissions-equipment defeat**, or imply a tune makes an
  off-road-only modification street legal.
- Safety-critical faults **stop and escalate** before anything is published.
- Never fabricate a customer, review, dyno figure, result or endorsement. With
  three customers there is no testimonial library, and inventing one is
  disqualifying.
- Technical forums generally ban unmarked solicitation. Lead with the answer,
  disclose the commercial interest, link only when relevant.

---

## Venture 2 — Georgia Opportunity Ledger

Subscription intelligence for commercial property, business funding and market
pricing in Georgia. Code lives in this repository.

### Systems

| System         | Identifier                                                                           | Verified   |
| -------------- | ------------------------------------------------------------------------------------ | ---------- |
| Supabase       | `bbgikfblcahhvrpxiqnd` — ACTIVE_HEALTHY, us-east-1, free tier                        | 2026-07-31 |
| Stripe         | Same account. 4 products, 6 prices, all live mode, all wired to `subscription_plans` | 2026-07-31 |
| Hosting        | **None — not deployed anywhere.** Owner's intent, 2026-08-13: run it through the     |            |
|                | Manus front door. Feasibility unestablished — see open question 4 and `RUNBOOK.md`   | 2026-08-13 |
| Reference data | 159 counties, 12 industries, 12 sources loaded. 0 opportunities, 0 users             | 2026-07-31 |

### Plans

| Plan                                  | Monthly | Annual | Rank |
| ------------------------------------- | ------- | ------ | ---- |
| Free Preview                          | $0      | $0     | 0    |
| Weekly Report                         | $15     | $150   | 10   |
| Detailed Intelligence _(recommended)_ | $39     | $390   | 20   |
| Premium Alerts & Database             | $99     | $990   | 30   |

### Blockers

1. **Not deployed.** No webhook, no signing secret, no test-payment matrix.
2. **Legal review pending** on all ten documents in
   `src/lib/legal/documents.ts`. Each renders an "awaiting legal review" banner.
   **No paid or partner-facing campaign may launch until this clears.**
3. Migration history on the live database does not match this repository — see
   `docs/RUNBOOK.md`.

### Restrictions — non-negotiable

The product is **not** a brokerage, MLS, lender, investment adviser, legal
service or appraisal service. Nothing it publishes may guarantee eligibility,
financing or performance. Scores rank opportunities against each other; they are
not predictions. This is enforced in code and copy, not just a footer.

---

## Channels

| Channel                     | State                                                                        | Verified              |
| --------------------------- | ---------------------------------------------------------------------------- | --------------------- |
| **Manus front door**        | **Live. The entry point for everything. Traffic and conversion unread**      | 2026-08-13 _(stated)_ |
| Shopify storefront          | Live as a checkout behind the front door; transacting capability unproven    | 2026-08-03            |
| Stripe + bookipay invoicing | Live, dormant 11 months                                                      | 2026-08-03            |
| Organic search              | **Unknown.** 7 visits/180d _to Shopify_; the front door's own search traffic |                       |
|                             | has never been read                                                          | 2026-08-13            |
| Social                      | Minimal (16 visits / 180 days _to Shopify_). Accounts `UNKNOWN`              | 2026-08-03            |
| Email                       | Effectively unused (1 visit / 180 days _to Shopify_). No list size known     | 2026-08-03            |
| Paid advertising            | **Never used. No account, no budget, no approval**                           | 2026-08-03            |

**The channel that produced the three paying customers is `UNKNOWN`.** Nobody
recorded it. Establishing it is worth more than most campaigns — ask them.

**"Organic search: effectively zero" was downgraded to `UNKNOWN` on
2026-08-13**, not because new evidence contradicted it but because the evidence
behind it was found to describe the wrong page. That is the correct direction
for a claim whose support has been withdrawn: it goes back to unknown, not to
its opposite.

---

## Open questions

Rev should try to close these, and must not paper over them.

1. Where did the three customers come from?
2. ~~What is on `dd84tuning.com`, and how does it relate to the Shopify store?~~
   **Answered by the owner, 2026-08-13:** it is a Manus site and it is the front
   door; Shopify sits behind it. Rev could not verify this and cannot at
   present.
3. **What do the Manus analytics say?** Sessions, sources and conversions for
   `dd84tuning.com`. This is now the highest-value unknown in the file — it
   settles whether the business has an audience problem or a conversion problem,
   which the Shopify numbers cannot. **Rev cannot read it: the domain is blocked
   by the network egress proxy and no Manus connector exists on this account.**
   Either connect Manus, or export the figures by hand.
4. **Can Manus host the Ledger at all?** The owner wants it there. It is a
   Next.js app needing server-side rendering, per-request auth, and thirteen
   cron jobs. Whether Manus supports that — or only static pages — is
   unestablished, and it decides whether the Vercel plan in `docs/RUNBOOK.md` is
   replaced or kept. **Do not assume either way.**
5. Does the Shopify checkout actually complete? Needs one test purchase.
6. Which social accounts exist, and who runs them?

**Closed by owner decision, 2026-08-07 — do not reopen:** what the ten invoices
were for, and whether the gaps in invoice numbering represent unpaid invoices.
