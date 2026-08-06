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

| System          | Identifier                                                                                              | Verified   |
| --------------- | ------------------------------------------------------------------------------------------------------- | ---------- |
| Shopify store   | `shop.downdirty84llc.com` (`49qz1e-0r.myshopify.com`), Basic plan, USD, EDT                             | 2026-08-03 |
| Stripe          | `acct_1QBl8ZINLKqe1c6g` — "Down Dirty 84 llc"                                                           | 2026-08-03 |
| Invoicing       | **bookipay** — every historic payment came through it. Rev has **no API access** to it                  | 2026-08-03 |
| Separate site   | `dd84tuning.com` — **not** the Shopify store. Returns HTTP 403 to automated fetches; contents `UNKNOWN` | 2026-08-03 |
| Print-on-demand | Printify, District Photo, Sensaria, Printed Mint, MWW, Duplium, Lumient, Fulfill Engine, Deco Slides    | 2026-08-03 |

### Revenue — the single most important fact in this file

| Metric                   | Value                                                                            | Verified   |
| ------------------------ | -------------------------------------------------------------------------------- | ---------- |
| All-time revenue         | **$3,507.86**                                                                    | 2026-08-03 |
| Paid invoices            | 10                                                                               | 2026-08-03 |
| Distinct customers       | **3**                                                                            | 2026-08-03 |
| Average invoice          | $350.79                                                                          | 2026-08-03 |
| Largest invoice          | $1,287.50                                                                        | 2026-08-03 |
| Concentration            | One customer = 67% (6 invoices); two customers = 99%                             | 2026-08-03 |
| **Last payment**         | **2025-09-12** — nothing collected since                                         | 2026-08-03 |
| Shopify orders, all time | **0**                                                                            | 2026-08-03 |
| Invoice-number gaps      | #1–4, 11, 12, 15, 16 have no successful charge. Possibly unpaid — **unresolved** | 2026-08-03 |

**100% of revenue came from invoiced service work. 0% from the storefront.**
Any plan that assumes self-serve digital products are the revenue model is
arguing against the only evidence that exists.

**What those invoices were actually for is `UNKNOWN`** — Stripe records amounts
and invoice numbers, not line items. Rev must not guess which service earned the
money.

### Traffic

| Metric                       | Value                                                                                                                                          | Verified   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Sessions, trailing 12 months | 574 (397 of them in the Jan 2026 launch month)                                                                                                 | 2026-08-03 |
| Recent run rate              | ~19–38/month — about one visitor a day                                                                                                         | 2026-08-03 |
| Sources, last 180 days       | direct 146, social 16, **search 7**, unknown 3, email 1                                                                                        | 2026-08-03 |
| Funnel, trailing 12 months   | 574 sessions → 23 carts → 20 reached checkout → **0 completed**                                                                                | 2026-08-03 |
| Checkout status              | **Not indicted, not cleared.** Inventory, payments, login-at-checkout and US shipping rates all verified correct. Needs one real test purchase | 2026-08-03 |

### Catalogue and price ladder

50 active products, $19.99–$650.

| Rung      | Offer                                                                | Price              |
| --------- | -------------------------------------------------------------------- | ------------------ |
| Entry     | Remote Tune Readiness Review                                         | $49 / $75          |
| Entry+    | ECU Tune File Review — GM/Ford/Dodge                                 | $99 / $149 / $199  |
| Core      | GM, Ford, Dodge/Mopar, Toyota/Lexus custom ECU tuning                | $400–$650          |
| Core      | Holley EFI Tuning & Diagnostics                                      | $350 / $450 / $650 |
| Adjacent  | Wiring & EFI power diagnostics                                       | $75–$250           |
| Adjacent  | Dodge/Mopar PCM unlock, removal, reinstall                           | $75–$300           |
| Recurring | Shop-to-shop support session                                         | $150 / $250 / $350 |
| Digital   | Holley EFI calibrations, LS swap toolkit, cam-swap pack, calculators | $39.99–$399        |
| Licence   | Professional Shop Licence — GM toolkit                               | $399               |
| Merch     | Print-on-demand apparel and decor                                    | $18.77–$64.68      |

### Capabilities

GM Gen III/IV/V LS and LT · Holley EFI (HP, Dominator, Terminator X) ·
HP Tuners · Ford Coyote and EcoBoost · Dodge/Mopar HEMI and PCM unlock ·
Toyota/Lexus · 4L60E and 4L80E transmission calibration · cam swaps ·
boost control · performance wiring and EFI power diagnostics · datalog review.

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
| Hosting        | **None.** No Vercel project exists                                                   | 2026-07-31 |
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
2. **Legal review pending** on all ten documents in `src/lib/legal/documents.ts`.
   Each renders an "awaiting legal review" banner. **No paid or partner-facing
   campaign may launch until this clears.**
3. Migration history on the live database does not match this repository — see
   `docs/RUNBOOK.md`.

### Restrictions — non-negotiable

The product is **not** a brokerage, MLS, lender, investment adviser, legal
service or appraisal service. Nothing it publishes may guarantee eligibility,
financing or performance. Scores rank opportunities against each other; they are
not predictions. This is enforced in code and copy, not just a footer.

---

## Channels

| Channel                     | State                                                       | Verified   |
| --------------------------- | ----------------------------------------------------------- | ---------- |
| Shopify storefront          | Live, transacting capability unproven                       | 2026-08-03 |
| Stripe + bookipay invoicing | Live, dormant 11 months                                     | 2026-08-03 |
| Organic search              | Effectively zero (7 visits / 180 days)                      | 2026-08-03 |
| Social                      | Minimal (16 visits / 180 days). Accounts `UNKNOWN`          | 2026-08-03 |
| Email                       | Effectively unused (1 visit / 180 days). No list size known | 2026-08-03 |
| Paid advertising            | **Never used. No account, no budget, no approval**          | 2026-08-03 |

**The channel that produced the three paying customers is `UNKNOWN`.** Nobody
recorded it. Establishing it is worth more than most campaigns — ask them.

---

## Open questions

Rev should try to close these, and must not paper over them.

1. What were the ten paid invoices for? Needs bookipay.
2. Are invoice numbers #1–4, 11, 12, 15, 16 unpaid? Needs bookipay. **Would be
   the fastest cash available.**
3. Where did the three customers come from?
4. What is on `dd84tuning.com`, and how does it relate to the Shopify store?
5. Does the Shopify checkout actually complete? Needs one test purchase.
6. Which social accounts exist, and who runs them?
