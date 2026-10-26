# DD84 task register

The live register of operational work, in the task standard of
`docs/DD84-OPERATIONS-AGENT.md` §4. This file is controlling. A task that exists
only in a chat transcript does not exist.

- **Seeded** 2026-08-06 from repository evidence — `git log`,
  `docs/MILESTONES.md`, `docs/RUNBOOK.md`, `CLAUDE.md` — plus the statuses the
  owner stated for T-06, T-12, T-18, T-19, T-20 and packets A-05 to A-07.
- Fields that could not be sourced from an artifact read **`not recorded`**
  rather than a plausible guess. Filling one in is a task of its own.
- **Due dates on tasks that are not yet approved are Torque's proposal, not an
  owner commitment.** They become commitments when the covering packet is
  approved.
- Statuses and their meanings are in `README.md`. **Done requires evidence in
  `OPERATING-LOG.md`.** Without it the status is In Verification.

Workstreams in use: `ledger` (Georgia Opportunity Ledger software), `ops`
(operating system for the agent itself), `finance`, `compliance`, `design`, and
since 2026-10-08 `service`, `real estate` and `sales`.

> **That changed on 2026-10-08, and the change is the point.** This note used to
> read "Customer, service, marketing, procurement and real-estate workstreams
> have no open tasks yet — no intake routine has run against a live connector."
> The first intake run against live Gmail found an **active customer tuning
> job** (T-37), a **live GDOT access review on a shop site** (T-38) and two lead
> candidates (T-41) — none of which existed anywhere in this register. The
> absence was never evidence; it was the connector gap. `marketing` and
> `procurement` are still empty, and that is now the only claim this note makes.

---

## Summary

| ID   | Title                                                                     | Workstream | Priority     | Status                   | Owner | Approval         | Due          |
| ---- | ------------------------------------------------------------------------- | ---------- | ------------ | ------------------------ | ----- | ---------------- | ------------ |
| T-01 | Transcribe the DD84 operations specification into the repository          | ops        | High         | Done                     | Agent | A-01             | 2026-07-31   |
| T-02 | Author CLAUDE.md as the repository orientation guide                      | ops        | High         | Done                     | Agent | A-01             | 2026-07-31   |
| T-03 | Define the Torque agent as a reusable subagent                            | ops        | High         | Done                     | Agent | A-01             | 2026-07-31   |
| T-04 | Correct documentation that had drifted away from the code                 | ledger     | Normal       | Done                     | Agent | A-02             | 2026-07-31   |
| T-05 | Record the true legal-review flags on the ten legal documents             | compliance | High         | Done                     | Agent | A-02             | 2026-07-31   |
| T-06 | Exclude demo accounts from subscriber, revenue and analytics counts       | finance    | High         | **In Verification**      | Agent | A-03             | 2026-08-08   |
| T-07 | Count annual subscribers at a twelfth of the annual price                 | finance    | High         | Done                     | Agent | A-04             | 2026-07-31   |
| T-08 | Remove the phantom integration-test glob from the Vitest config           | ledger     | Normal       | Done                     | Agent | S-01             | 2026-08-02   |
| T-09 | Close the PostgREST filter injection in the opportunity fallback          | ledger     | High         | Done                     | Agent | S-01             | 2026-08-02   |
| T-10 | Correct the test counts and integration-suite claim in CLAUDE.md          | ops        | Normal       | Done                     | Agent | S-01             | 2026-08-05   |
| T-11 | Create Stripe products and prices and run the test-payment matrix         | finance    | Critical     | Blocked                  | Owner | A-05 approved    | 2026-08-20   |
| T-12 | Record the sample-data exclusion rule in CLAUDE.md                        | ops        | Normal       | Done                     | Agent | A-03             | 2026-07-31   |
| T-13 | Commission legal review of the ten legal and policy documents             | compliance | Critical     | Blocked                  | Owner | A-06 approved    | 2026-08-27   |
| T-14 | Wire virus scanning to `attachments.scan_status`                          | ledger     | High         | Awaiting Approval        | Owner | **A-07 pending** | 2026-09-03   |
| T-15 | Make the public landing pages cacheable again                             | ledger     | Normal       | Planned                  | Agent | S-01 to prepare  | 2026-09-03   |
| T-16 | Build in-product super-administrator MFA reset                            | ledger     | Normal       | Backlog                  | Agent | S-01 to prepare  | not recorded |
| T-17 | Commission high-fidelity design and brand sign-off                        | design     | Low          | Backlog                  | Owner | none yet         | not recorded |
| T-18 | Build the six DD84 routines as runnable commands                          | ops        | High         | Done                     | Agent | A-08             | 2026-08-06   |
| T-19 | Stand up the operating record and seed it with current state              | ops        | High         | **In Verification**      | Agent | A-08             | 2026-08-06   |
| T-20 | Extend the Torque agent definition with the missing spec sections         | ops        | High         | Done                     | Agent | A-08             | 2026-08-06   |
| T-21 | Point CLAUDE.md §10 at the commands and the operating record              | ops        | Normal       | Done                     | Agent | A-08             | 2026-08-06   |
| T-22 | Verify and push the operations control plane                              | ops        | High         | Done                     | Agent | A-08             | 2026-08-06   |
| T-23 | Schedule the six routines and confirm the first firing                    | ops        | High         | **In Verification**      | Owner | owner-held       | 2026-08-08   |
| T-24 | Build the weekly marketing opportunity scan routine                       | ops        | Normal       | Planned                  | Agent | S-01 to prepare  | 2026-08-13   |
| T-25 | Build the project status control routine                                  | ops        | Normal       | Planned                  | Agent | S-01 to prepare  | 2026-08-13   |
| T-26 | Decide what to do about 105 files failing `prettier --check`              | ledger     | Normal       | Planned                  | Agent | S-01 to prepare  | 2026-08-13   |
| T-27 | Routines fire but commit nothing                                          | ops        | High         | **Done**                 | Agent | A-14 executed    | 2026-10-09   |
| T-28 | Settle where the Ledger and the agent platform each live                  | ops        | High         | Done                     | Agent | A-11             | 2026-09-23   |
| T-29 | The Ledger application copy in this repository is stale                   | ops        | Normal       | Blocked                  | Owner | A-11             | not set      |
| T-30 | Unattended Ledger subscriber-email Routine — cannot be removed            | ops        | High         | **Accepted Risk**        | Owner | A-12 accepted    | 2026-09-25   |
| T-31 | Consolidate the two diverged operating records onto one branch            | ops        | High         | Done                     | Agent | owner decision   | 2026-09-25   |
| T-32 | Both repositories are public, and the venture registry is in one          | compliance | High         | **No Action** (accepted) | Owner | A-13 closed      | 2026-10-08   |
| T-33 | Establish what `dd84-api` is, and why it is failing on Render             | ops        | High         | Planned                  | Agent | A to diagnose    | 2026-10-10   |
| T-34 | CI is failing on `main` in `downdirty84-ai-tuning`                        | ops        | Normal       | Planned                  | Agent | A to diagnose    | 2026-10-13   |
| T-35 | Three stale pull requests, one from the superseded branch                 | ops        | High         | **Awaiting Owner**       | Owner | none yet         | not set      |
| T-36 | No readable path to DD84's own revenue figures                            | finance    | High         | Planned                  | Agent | A to prepare     | 2026-10-15   |
| T-37 | The C10 customer — Terminator X Max AFR fault                             | service    | High         | **In Progress**          | Owner | **A-20 + A-21**  | 2026-10-10   |
| T-38 | GDOT access review — right-in/right-out on the Colbert site               | real est.  | High         | **In Progress**          | Owner | A-15 sent        | 2026-10-28   |
| T-39 | Reschedule the missed Georgia SBDC session                                | finance    | Normal       | **In Progress**          | Owner | A-15 sent        | 2026-10-28   |
| T-40 | Google Play developer account at risk of closure                          | ops        | Normal       | Planned                  | Owner | A to diagnose    | 2026-12-06   |
| T-41 | Five r/LSSwapTheWorld lead candidates, none contacted                     | sales      | Normal       | Planned                  | Owner | C to contact     | not set      |
| T-42 | Fifteen unsent drafts, five of them to likely loan fraud                  | ops        | High         | **Awaiting Owner**       | Owner | none yet         | 2026-10-10   |
| T-43 | `downdirty84llc.com` is live and absent from the venture registry         | ops        | Normal       | Planned                  | Owner | A to prepare     | not set      |
| T-44 | One inbox query is not an intake; fix the routine's search                | ops        | Normal       | Planned                  | Agent | A to prepare     | 2026-10-15   |
| T-45 | GREC will not interpret the law; the licensing question is open           | compliance | High         | Blocked                  | Owner | A-06 covers it   | 2026-10-16   |
| T-46 | Webador annual invoice will auto-charge; amount unknown                   | finance    | Normal       | **Awaiting Owner**       | Owner | E if cancelled   | 2026-10-12   |
| T-47 | Two Google Business Profiles for one business                             | ops        | Normal       | Planned                  | Owner | A to prepare     | not set      |
| T-48 | Customer identity is in a public repository and in its history            | compliance | **High**     | **In Verification**      | Agent | A-16 executed    | 2026-10-10   |
| T-49 | A bank transfer was declined on 2026-10-05                                | finance    | **High**     | **Awaiting Owner**       | Owner | A to read        | 2026-10-09   |
| T-50 | HP Tuners Do Not Sell List — partner obligation                           | compliance | Normal       | **Awaiting Owner**       | Owner | A to read        | 2026-10-12   |
| T-51 | Third-party contact details in a public repository                        | compliance | Normal       | **Awaiting Owner**       | Owner | **A-17 pending** | 2026-10-13   |
| T-52 | Phishing email impersonating Meta, unread and flagged important           | compliance | **Critical** | **Awaiting Owner**       | Owner | A to report      | 2026-10-12   |
| T-53 | Purchase proposal on the Colbert parcel — no reply in six days            | real est.  | **High**     | **Awaiting Owner**       | Owner | C to follow up   | 2026-10-13   |
| T-54 | Three HP Tuners credit orders in three days, amounts unread               | finance    | Normal       | Planned                  | Owner | A to read        | 2026-10-14   |
| T-55 | Chime is a payment channel absent from the venture registry               | finance    | Normal       | Planned                  | Owner | A to read        | 2026-10-14   |
| T-56 | USDA B&I loan guarantee — confirm FY27 authority and rural test           | real est.  | Normal       | Planned                  | Agent | A to research    | 2026-10-19   |
| T-57 | Is Colbert in a designated Georgia Rural Zone?                            | real est.  | Normal       | Planned                  | Agent | A to research    | 2026-10-19   |
| T-58 | SBA 504 — send the Georgia CDC draft and ask two questions                | finance    | **High**     | **Awaiting Owner**       | Owner | C — within T-42  | 2026-10-14   |
| T-59 | The opportunity scan cannot validate any primary source                   | ops        | **High**     | **Awaiting Owner**       | Owner | A to prepare     | 2026-10-14   |
| T-60 | Reddit flagged the account for automated activity — 7 days                | sales      | **Critical** | **Awaiting Owner**       | Owner | A to report      | 2026-10-19   |
| T-61 | Square turns offline payments on by default in two days                   | finance    | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-15   |
| T-62 | Vercel reports three misconfigured domains on one project                 | ops        | Normal       | Planned                  | Agent | A to read        | 2026-10-16   |
| T-63 | Two Shopify account-verification codes, cause unexplained                 | compliance | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-13   |
| T-64 | A second live tuning job — price proposed; customer's log unread          | service    | **Critical** | **Awaiting Owner**       | Owner | **A-20 + A-21**  | 2026-10-14   |
| T-65 | A Shopify customer account with zero orders, unrecorded                   | sales      | Normal       | Planned                  | Agent | A to read        | 2026-10-16   |
| T-66 | A real Lexus enquiry sat 23 days; the contact form was never read         | sales      | **High**     | **Awaiting Owner**       | Owner | **A-20 pending** | 2026-10-15   |
| T-67 | Two more loan-fraud "application" emails, 16 minutes apart                | compliance | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-15   |
| T-68 | MFA switched off on the Zoho account now holding Ledger support           | compliance | Normal       | **Awaiting Owner**       | Owner | A to report      | 2026-10-16   |
| T-69 | Four Routine prompts contradict the checkout guard in version control     | ops        | Normal       | **Blocked**              | Owner | S-01 (Class A)   | 2026-10-15   |
| T-70 | Colbert parcel capped at 380 gpd design flow without public water         | real est.  | **High**     | **Awaiting Owner**       | Owner | A to research    | 2026-10-17   |
| T-71 | The business bank account is overdrawn; two payments declined             | finance    | **Critical** | **Awaiting Owner**       | Owner | **A-19 pending** | 2026-10-16   |
| T-72 | A store enquiry asked if DD84 is open; unread 56 hours                    | sales      | **High**     | **Awaiting Owner**       | Owner | C to send        | 2026-10-19   |
| T-73 | Three dated outflows inside nine days, three amounts unknown              | finance    | **Critical** | **Awaiting Owner**       | Owner | A to report      | 2026-10-20   |
| T-74 | A third party says a Melio account exists; message does not hold together | finance    | Normal       | **Awaiting Owner**       | Owner | A to verify      | 2026-10-22   |
| T-75 | A new Shopify theme was published and nobody checked the storefront       | service    | **High**     | Planned                  | Agent | A to diagnose    | 2026-10-21   |
| T-76 | Four account-access notices in four hours across four providers           | compliance | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-21   |
| T-77 | Register as a supplier on the Georgia Procurement Registry and ACCGov     | sales      | **High**     | Planned                  | Agent | A to register    | 2026-10-26   |
| T-78 | Price buy-an-existing-shop against the raw-land build on Hwy 72           | real est.  | **High**     | Planned                  | Agent | A to compare     | 2026-10-26   |
| T-79 | Identify the SecretSOS issuer before any fee is paid                      | finance    | Normal       | Planned                  | Agent | A to verify      | 2026-11-30   |
| T-80 | Supabase `public`-schema grants deadline 2026-10-30 — Ledger-side         | ledger     | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-28   |
| T-81 | A five-word enquiry asks whether DD84 ships to London                     | sales      | Normal       | **Awaiting Owner**       | Owner | C to send        | 2026-10-22   |
| T-82 | Supercharger reseller application silent; supplier has chased twice       | sales      | **High**     | **Awaiting Owner**       | Owner | **A-22 pending** | 2026-10-22   |
| T-83 | Capital on Tap: a business credit card with a statement nobody opened     | finance    | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-23   |
| T-84 | The price ladder was stale and two rung boundaries are undefined          | sales      | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-29   |
| T-85 | Three platform-record questions: a third send, a sign-in, a stale test    | ops        | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-29   |
| T-86 | Pinterest publishing mostly failing; one failure announced as success     | ops        | Normal       | Planned                  | Agent | A to diagnose    | 2026-10-29   |
| T-87 | Ledger production deploys failing on main — recorded, not touched         | ops        | Normal       | **Awaiting Owner**       | Owner | none yet         | 2026-10-30   |
| T-88 | A $450 payment arrived and nobody knows which job it paid for             | finance    | **Critical** | **Awaiting Owner**       | Owner | A to report      | 2026-10-26   |
| T-89 | Shopify billing failed; the retry will hit the same stopped card          | ops        | **Critical** | **Awaiting Owner**       | Owner | E to fix         | 2026-10-24   |
| T-90 | A Colbert building quote sits outside the register, amount unread         | real est.  | Normal       | Planned                  | Agent | A to read        | 2026-10-27   |
| T-91 | Shopify made its first sale ever — order #1001, $550, paid and fulfilled  | sales      | **Critical** | **Awaiting Owner**       | Owner | A to report      | 2026-10-28   |
| T-92 | A second unattributed payment — $700, memo "mecanic tune", from a company | finance    | **Critical** | **Awaiting Owner**       | Owner | A to report      | 2026-10-28   |
| T-93 | A customer was written to by someone this register cannot identify        | ops        | **High**     | **Awaiting Owner**       | Owner | A to report      | 2026-10-28   |
| T-94 | HP Tuners credits bought; amount unread, and margin needs it              | finance    | Normal       | Planned                  | Agent | A to read        | 2026-10-29   |
| T-95 | The first inbound enquiry in five runs, unqualified and unread            | sales      | **High**     | **Awaiting Approval**    | Owner | **A-23 pending** | 2026-10-27   |
| T-96 | The business site has new indexing failures on duplicate canonicals       | ops        | Normal       | Planned                  | Agent | A to diagnose    | 2026-10-30   |

**T-37 to T-44 all came from one intake run** against a mailbox no routine had
ever read. Seven of the eight concern a customer, a permit, money or a deadline,
and **none existed in this register an hour earlier.**

Counts: **17 Done** · 1 No Action · 1 Accepted Risk · 4 In Verification · 3 In
Progress · 2 Awaiting Approval · **35 Awaiting Owner** · 5 Blocked · 26 Planned
· 2 Backlog. **96 tasks.** Recounted mechanically from the table above after
every write — last **2026-10-26T10:50Z** (Monday intake, 72-hour window; **T-91
to T-96 added**, three of them from money arriving). **35 of the 96 rows are
Awaiting Owner** — a plain count of the Status column, up from 32 on Friday.
**Eleven rows are now Critical and open**, and **$1,700 of the business's
$5,207.86 lifetime collections arrived in the last four days.**

> **Separately, and more usefully than the count: 45 of the 57 open tasks are
> past due, 30 of them the owner's — and on 2026-10-19 exactly one of those 45
> was a real deadline.** **T-60** expired that day; the other forty-four carry
> dates Torque proposed and nobody agreed to. **Nothing in this table
> distinguishes the two.** That is the defect to fix next, and it is the
> 2026-10-15 observation arriving from the other end: **a list that grows by
> date rather than by event stops being read, and the day it matters is the day
> something real is buried in it.**

> **The owner's queue is growing roughly four times faster than it is being
> emptied.** 10 → 19 → 23 waiting on him in seven days, against **nothing closed
> in that period**. This is stated as a count, not a reproach: **every one of
> the four added today needs a decision only he can make** — whether to send a
> reply, whether a charge should land, whether an account exists, whether four
> sign-in notices were his. **The register has no mechanism for this except to
> keep counting**, and the honest reading is that intake is out-running decision
> capacity rather than that anything is being neglected.

> **This callout said on 2026-10-16 that the account was overdrawn. As of
> 2026-10-17T17:55 Eastern it reads at zero instead of below it** — the second
> alert is in **T-71**'s dated correction, which controls. **The original
> wording is left struck rather than edited away**, because the state changing
> is more informative than the state:
>
> > ~~One of the 19 outranks the other 18. T-71: the business bank account is
> > overdrawn, two payments declined on the evening of 2026-10-15, and the alert
> > is unread.~~
>
> **What stands is the ranking, for a different reason.** **T-71** is still the
> top of this register because **how the account moved is unknown**, both alerts
> are still unread, and **T-73 now lists five committed or attempted outflows
> against it inside nine days, the first landing 2026-10-21.** **Zero available
> is not solvency.** And the two items that looked like tidiness — **T-37 and
> T-64, completed jobs never priced** — are still the only near-term cash this
> record can identify, now joined by **T-72**, a prospect asking whether DD84 is
> open at all.

> **This line was stale again** — it read 68 tasks, 17 Awaiting Owner and 4
> Blocked, against 69 rows after T-69 was added yesterday from another session.
> **That is the ninth instance of summary drift, and the first contributed by a
> different session**, which is the useful part: the earlier eight could be read
> as one agent forgetting a step. **Two sessions independently adding a row and
> not recounting is the structural argument finishing itself.** The fix is not
> more diligence — a tally hand-maintained beside a table that two writers
> append to will drift, and the only durable repair is to stop storing a derived
> number by hand. **Recorded, not quietly corrected.**

> **This line was wrong twice before the 2026-10-13 intake touched it** — it
> read "3 In Verification" against 4, and "58 tasks" against 59. **That is the
> seventh instance of summary drift in this register's short life** (T-11, T-13,
> T-23, T-29, T-32 ×2, A-16, A-17, and now this). OL-0034 and OL-0038 both
> concluded the fix is structural rather than another reminder, and this is the
> evidence for it: a hand-maintained tally beside a growing table is a defect
> generator, and every routine that writes a row has to recount or it lies.

T-26 was discovered while verifying T-22 and is the register doing its job: a
finding that would otherwise have been mentioned once in a reply and lost.

### Reconciliation, 2026-10-08 — five corrections from the first daily brief

The first `/dd84-daily-brief` run read this register against `APPROVALS.md` and
found the two disagreeing. Recorded here rather than quietly edited, because a
silent correction teaches nothing:

1. **T-11** read `Awaiting Approval · A-05 pending`. **A-05 was APPROVED on
   2026-08-10** and its result block records the work found already satisfied in
   live Stripe. Corrected to **Blocked** — it waits on test-mode keys and the
   missing webhook endpoint, both Ledger scope, not on a decision.
2. **T-13** read `Awaiting Approval · A-06 pending`. **A-06 was APPROVED on
   2026-08-10.** Corrected to **Blocked** — it waits on the owner engaging
   counsel.
3. **T-23's summary row read Blocked**, its own detail block **In
   Verification**. The detail is later and controlling; the summary was
   corrected to match.
4. **T-29's summary row read Partly Done**, its detail **Blocked (on owner)**,
   re-confirmed 2026-10-08 in OL-0026. Summary corrected.
5. **T-32 was absent from this table altogether**, and the counts line read "2
   Awaiting Approval" where the table showed three. Both fixed.

Corrections 1 and 2 had stood for **59 days**. They are the same failure mode
T-31 recorded at the top of this file — A-05 reading "awaiting owner" six weeks
after it was answered — reappearing in the summary table rather than in a second
record. **The lesson that generalises: when an approval is answered, the row in
this table is part of the write.** Evidence: OL-0028.

---

## Open items, by what they are waiting on

| Waiting on                              | Tasks                                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Owner approval (A-10 — the big one)     | T-23 (T-27 closed 2026-10-09)                                                                  |
| Owner approval (A-13 — repo visibility) | T-32, and it blocks T-29                                                                       |
| Owner approval                          | T-14                                                                                           |
| Owner action (engaging counsel)         | T-13                                                                                           |
| Owner or developer, test-mode keys      | T-11                                                                                           |
| Owner decision                          | T-29, T-35                                                                                     |
| Owner confirmation                      | T-19                                                                                           |
| A seeded or live database               | T-06                                                                                           |
| A readable payment system               | T-36                                                                                           |
| Owner approval (A-15 — the drafts)      | T-38, T-39                                                                                     |
| Owner approval (A-18 — one chase)       | T-64                                                                                           |
| Owner decision                          | T-41, T-42, T-43, T-46, T-47, T-49, T-50                                                       |
| Owner action — a platform deadline      | **T-60** (Reddit, ~2026-10-19), **T-61** (Square, ~2026-10-15)                                 |
| Owner action — security                 | **T-63** (two Shopify verification codes, cause unexplained)                                   |
| Owner — CASH: both alerts unread        | **T-71** (zero as of 10-17, cause unknown), **A-19** (may the figure be recorded?), T-49, T-61 |
| Owner — a dated charge, 2 days out      | **T-73** (five outflows, three amounts unknown), **T-46** (Webador, unopened)                  |
| Owner — a prospect is waiting           | **T-72** (56 hours; draft written, Class C to send)                                            |
| Owner — is this account ours?           | **T-74** (a Melio signup claimed by a third party)                                             |
| Owner action — security                 | **T-76** (four access notices in four hours), **T-63**, **T-52** step 4                        |
| Owner action — security                 | **T-67** (two fraud lures), **T-68** (Zoho MFA state)                                          |
| Owner — an unwatched lead inbox         | **T-66** (a 23-day-old enquiry; count the rest)                                                |
| Owner — a price on a live job           | **T-64** (11 days silent), **T-37** (29 messages) — neither ever quoted                        |
| Owner action — security                 | **T-52** (phishing, unread 4 days)                                                             |
| Owner action — network policy           | **T-59** (egress block disables a routine)                                                     |
| A counterparty who has not replied      | T-53 (7 days), and A-15 is 7 days unsent                                                       |
| A-16 executed; verification outstanding | T-48                                                                                           |
| Counsel (A-06 is already approved)      | T-13, T-45                                                                                     |
| Agent execution capacity                | T-15, T-16, T-24, T-25, T-26, T-33, T-34, T-62, **T-77**, **T-78**, **T-79**                   |
| Nobody — accepted risk                  | T-30                                                                                           |

---

## T-01 — Transcribe the DD84 operations specification into the repository

- **Objective** — Make the owner's governing specification readable, searchable
  and diffable by every agent and human working in the repository.
- **Source** — Owner-supplied PDF specification, July 2026.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-07-31
- **Dependencies** — Owner supplying the PDF.
- **Approval class** — B (internal maintenance), covered by A-01.
- **Execution steps** — Transcribe to `docs/DD84-OPERATIONS-AGENT.md`,
  preserving section numbering; mark the PDF as authoritative.
- **Cost** — none. **Risk** — transcription drift from the PDF; mitigated by the
  header note requiring the file to be updated when the PDF is revised.
- **Expected result** — The full 18-section spec in the repository.
- **Completion evidence** — Commit `6468118`, `docs/DD84-OPERATIONS-AGENT.md`
  (497 lines). Log `OL-0001`.
- **Status** Done · **Next action** — Re-verify against the PDF whenever the
  owner revises it.

## T-02 — Author CLAUDE.md as the repository orientation guide

- **Objective** — Stop each new agent session rediscovering the same three
  traps: the repo name, the absent `main` branch, and the three-layer access
  model.
- **Source** — Owner instruction, 2026-07-31.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-07-31
- **Dependencies** — T-01 for the governance section.
- **Approval class** — B, covered by A-01.
- **Execution steps** — Write the orientation, stack, layout, access model,
  client selection, API conventions, workflow, jobs, testing and conventions
  sections; cross-reference the spec.
- **Cost** — none. **Risk** — documentation drifting from code, which later
  materialised as T-04 and T-10.
- **Expected result** — A single onboarding file that is accurate.
- **Completion evidence** — Commit `6468118`, `CLAUDE.md`. Log `OL-0001`.
- **Status** Done · **Next action** — T-21 adds the operating-system pointer.

## T-03 — Define the Torque agent as a reusable subagent

- **Objective** — Give the operating protocol an executable identity rather than
  leaving it as prose in a spec.
- **Source** — Spec §1 (persona) and §5 (workflow).
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-07-31
- **Dependencies** — T-01.
- **Approval class** — B, covered by A-01.
- **Execution steps** — Write `.claude/agents/torque.md` with persona, operating
  sequence, autonomy boundary, approval packet and execution standards.
- **Cost** — none. **Risk** — a definition that states the persona but omits the
  machinery, which is exactly what T-20 later corrected.
- **Expected result** — An invocable agent definition.
- **Completion evidence** — Commit `6468118`, `.claude/agents/torque.md` (138
  lines). Log `OL-0001`.
- **Status** Done · **Next action** — Superseded in scope by T-20.

## T-04 — Correct documentation that had drifted away from the code

- **Objective** — Remove claims in the docs that the code did not support, so
  that the documentation can be trusted as a source.
- **Source** — Agent review of README, ARCHITECTURE, MILESTONES, RUNBOOK against
  the implementation.
- **Workstream** ledger · **Priority** Normal · **Owner** Agent · **Due**
  2026-07-31
- **Dependencies** — none.
- **Approval class** — B, covered by A-02.
- **Execution steps** — Diff each claim against the code; correct or delete the
  ones that failed; state the residual honestly.
- **Cost** — none. **Risk** — none material; documentation-only.
- **Expected result** — Documentation that matches the code.
- **Completion evidence** — Commit `a489144`, five files, +122/−57. Log
  `OL-0002`.
- **Status** Done · **Next action** — Recurrence handled by T-10.

## T-05 — Record the true legal-review flags on the ten legal documents

- **Objective** — Make the review status of each legal document explicit rather
  than implied, so the launch blocker is visible.
- **Source** — Review of `src/lib/legal/documents.ts` against
  `docs/MILESTONES.md`.
- **Workstream** compliance · **Priority** High · **Owner** Agent · **Due**
  2026-07-31
- **Dependencies** — none.
- **Approval class** — A (record-keeping only — no legal determination made),
  covered by A-02.
- **Execution steps** — Set `requiresReview` truthfully on all ten; record in
  MILESTONES that seven carry the banner and that the exemption claimed for the
  other three is undocumented.
- **Cost** — none. **Risk** — the exemption for editorial standards, corrections
  policy and data source policy is a defensible reading, **not a legal
  determination**, and is not Torque's to make.
- **Expected result** — Seven documents render the "awaiting legal review"
  banner; the exemption question is written down.
- **Completion evidence** — Commit `a489144`, `src/lib/legal/documents.ts`,
  `docs/MILESTONES.md` item 2. Log `OL-0002`.
- **Status** Done · **Next action** — **T-13** takes the question to counsel.

## T-06 — Exclude demo accounts from subscriber, revenue and analytics counts

- **Objective** — Stop the admin dashboard, MRR and the analytics aggregate from
  reporting seeded demo accounts as real business. An inflated subscriber count
  is a number the owner would make decisions on.
- **Source** — Agent finding while reviewing `scripts/seed.ts` against the admin
  dashboard queries.
- **Workstream** finance · **Priority** High · **Owner** Agent · **Due**
  2026-08-08
- **Dependencies** — none for the code; a seeded database for verification.
- **Approval class** — **E-adjacent** (changes owner-facing revenue reporting).
  Approved under **A-03**, 2026-07-31.
- **Execution steps** — (1) `src/lib/analytics/sample-data.ts` with the
  exclusion predicate and the filter builders; (2) apply to the subscriber,
  revenue and — under T-09's commit — failed-payment tiles; (3) apply to the
  `aggregate-analytics` job; (4) badge sample rows in the UI and carry the flag
  into CSV exports; (5) 13 unit tests, extended to 16 by the failed-payment
  tile.
- **Cost** — none. **Risk** — the two exclusion helpers are deliberately
  asymmetric because `analytics_events.user_id` is nullable and a null means
  real anonymous traffic; unifying them would make one tile wrong. Pinned by
  tests.
- **Expected result** — Dashboard subscriber count, MRR and failed-payment tile
  count only real accounts.
- **Completion evidence** — Commits `1039582` and `8337e41`; tests
  `tests/unit/analytics/sample-data.test.ts` pass. Logs `OL-0003`, `OL-0005`.
- **Verification gap** — **The rendered numbers have never been observed against
  a database.** Unit tests pin the filter _shape_, not the result. Nothing in
  this repository has run against a live or seeded Supabase instance.
- **Status** **In Verification** · **Next action** — `supabase start`,
  `supabase db reset`, `npm run db:seed`, then read `/admin` and confirm the
  subscriber count and MRR both read zero with only demo accounts present.
  Record the observation in `OPERATING-LOG.md`; only then does this move to
  Done.

## T-07 — Count annual subscribers at a twelfth of the annual price

- **Objective** — Report monthly recurring revenue truthfully. Counting an
  annual subscriber at the monthly price overstated MRR.
- **Source** — Agent review of the admin dashboard revenue tile.
- **Workstream** finance · **Priority** High · **Owner** Agent · **Due**
  2026-07-31
- **Dependencies** — T-06 (shares the dashboard query path).
- **Approval class** — E-adjacent. Approved under **A-04**, 2026-07-31.
- **Execution steps** — Extract the arithmetic into `src/lib/billing/mrr.ts`;
  normalise every interval to a monthly figure; cover with fixtures.
- **Cost** — none. **Risk** — rounding at the cent boundary; covered by tests.
- **Expected result** — MRR is interval-correct.
- **Completion evidence** — Commit `5ae44fa`; 18 tests in
  `tests/unit/billing/mrr.test.ts` pass. Log `OL-0004`.
- **Status** Done — the success test was "the arithmetic matches hand-calculated
  fixtures across intervals", and it does. **Reconciliation against live Stripe
  data is a different test and belongs to T-11**, not to this task.
- **Next action** — none; folded into T-11's payment matrix.

## T-08 — Remove the phantom integration-test glob from the Vitest config

- **Objective** — Stop the test configuration implying a layer of coverage that
  has never existed.
- **Source** — Agent review of `vitest.config.ts` against the filesystem.
- **Workstream** ledger · **Priority** Normal · **Owner** Agent · **Due**
  2026-08-02
- **Dependencies** — none.
- **Approval class** — B, covered by S-01.
- **Execution steps** — Drop `tests/integration/**` from `include`; record in
  the config why it was removed rather than filled.
- **Cost** — none. **Risk** — none; the directory never existed.
- **Expected result** — `npm test` claims only the coverage it has.
- **Completion evidence** — Commit `8337e41`, `vitest.config.ts`. Log `OL-0005`.
- **Status** Done · **Next action** — If a database-backed suite is ever
  written, it gets its own directory, glob and script.

## T-09 — Close the PostgREST filter injection in the opportunity fallback

- **Objective** — Remove a filter-injection pattern from the API surface before
  it is copied into a route where the blast radius is not small.
- **Source** — Agent security review of the API surface.
- **Workstream** ledger · **Priority** High · **Owner** Agent · **Due**
  2026-08-02
- **Dependencies** — none.
- **Approval class** — B, covered by S-01.
- **Execution steps** — Replace the interpolated `.or()` in
  `src/app/api/v1/opportunities/[idOrSlug]/route.ts` with a column choice bound
  to the value; export `isOpportunityId` from `query.ts` so both lookups
  discriminate identically.
- **Cost** — none. **Risk assessment recorded at the time** — the target,
  `opportunity_previews`, is already granted to anon, already restricted to
  published non-restricted rows, and carries no analysis, financial, eligibility
  or source-URL field. This was a malformed-query and unintended-row-match bug,
  **not a disclosure one**. Fixed because the pattern gets copied.
- **Expected result** — A crafted path segment is treated as a value.
- **Completion evidence** — Commit `8337e41`; the same commit records the parts
  of the surface reviewed and found correct, so they are not re-reviewed. Log
  `OL-0005`.
- **Status** Done · **Next action** — none.

## T-10 — Correct the test counts and integration-suite claim in CLAUDE.md

- **Objective** — Keep the one file every agent reads first accurate about what
  the test suite actually is.
- **Source** — Agent verification of CLAUDE.md against a real `npm test` run.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-08-05
- **Dependencies** — T-08.
- **Approval class** — B, covered by S-01.
- **Execution steps** — Run the suite; write the real counts; remove the
  integration-suite claim.
- **Cost** — none. **Risk** — none.
- **Expected result** — CLAUDE.md states 179 tests in 11 files.
- **Completion evidence** — Commit `3d22acc`. Log `OL-0006`.
- **Status** Done · **Next action** — Any change to the suite updates this line
  in the same commit.

## T-11 — Create Stripe products and prices and run the test-payment matrix

- **Objective** — Unblock billing. Nothing can be sold until the products exist
  and the tier-by-tier payment matrix has been run.
- **Source** — `docs/MILESTONES.md` "What is still not built", item 1.
- **Workstream** finance · **Priority** **Critical** · **Owner** Owner · **Due**
  2026-08-20 (proposed)
- **Dependencies** — A Stripe account with live and test keys; owner decision on
  final pricing.
- **Approval class** — **E (financial) and F (system change)**. Blocked on
  **A-05**, pending.
- **Execution steps (prepared, not executed)** — (1) Create four products and
  eight prices (monthly and annual per tier) in Stripe **test mode** first; (2)
  populate `stripe_monthly_price_id` / `stripe_annual_price_id` on
  `subscription_plans`; (3) run checkout for each tier with test cards, plus
  upgrade, downgrade, cancel-at-period-end, past-due and reactivation; (4)
  confirm each webhook lands one `billing_events` row and the right
  `effectiveAccessRank`; (5) repeat the read-only checks in live mode.
- **Cost** — Stripe fees on test transactions are zero; live-mode verification
  costs the processing fee on any real charge made to test it.
- **Risk** — Wrong price IDs silently grant the wrong rank. Rollback: prices can
  be archived, not deleted; the plan rows can be reverted to null.
- **Expected result** — Every tier is purchasable and the granted rank matches.
- **Completion proof required** — Stripe dashboard product and price IDs, one
  `billing_events` row per event, a screenshot of each tier's billing page.
- **Status** **Blocked**, corrected 2026-10-08 · **Next action** — Obtain
  test-mode Stripe keys, and register the missing webhook endpoint. **A-05 was
  approved on 2026-08-10, not pending**; this block read "Awaiting Approval ·
  Owner answers A-05" for 59 days after the answer. A-05's result records that
  the four products and six prices already existed in live account
  `acct_1QBl8ZINLKqe1c6g` and that nothing needed creating. What is left is the
  tier-by-tier matrix, which needs test-mode keys no agent session holds, and
  the absent webhook endpoint — **both Ledger scope**, so both belong with
  `downdirty84llc-creator/georgia-opportunity-ledger`.

## T-12 — Record the sample-data exclusion rule in CLAUDE.md

- **Objective** — Stop a future agent "cleaning up" the demo-data exclusion and
  silently reinflating the subscriber count and MRR.
- **Source** — T-06.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-07-31
- **Dependencies** — T-06.
- **Approval class** — B, covered by A-03.
- **Execution steps** — Add the rule to the CLAUDE.md data-honesty section,
  including the one deliberate exception: `reports_read` lets `is_sample = true`
  bypass the rank check so a demo report displays at every tier.
- **Cost** — none. **Risk** — none.
- **Expected result** — The exclusion is documented as intentional.
- **Completion evidence** — Commit `1039582`, CLAUDE.md §9. Log `OL-0003`.
- **Status** Done · **Next action** — none.

## T-13 — Commission legal review of the ten legal and policy documents

- **Objective** — Clear the hard launch blocker. Seven documents render an
  "awaiting legal review" banner and three claim an undocumented exemption.
- **Source** — `docs/MILESTONES.md` item 2; T-05.
- **Workstream** compliance · **Priority** **Critical** · **Owner** Owner ·
  **Due** 2026-08-27 (proposed)
- **Dependencies** — Owner engaging counsel; a budget.
- **Approval class** — **G (legal)**. Blocked on **A-06**, pending. **Torque
  makes no legal determination and gives no legal advice.**
- **Execution steps (prepared, not executed)** — (1) Export the ten documents
  from `src/lib/legal/documents.ts` into a review pack; (2) attach the specific
  question for each — for terms, privacy, subscription terms, refunds, cookies,
  copyright and disclaimers, "is this fit to publish"; for editorial standards,
  corrections policy and data source policy, "are these genuinely exempt as
  descriptions of our own practice rather than agreements with the member"; (3)
  record counsel's answer per document; (4) flip `requiresReview` only on a
  recorded answer.
- **Cost** — Counsel fee, **not recorded** — obtaining a quote is part of A-06.
- **Risk** — Launching on unreviewed terms is a legal and reputational exposure.
  The exemption claimed for the three is a reading, not an opinion.
- **Expected result** — Every document either reviewed or documented as exempt
  **by counsel**, not by the agent.
- **Completion proof required** — Written response from counsel per document.
- **Status** **Blocked**, corrected 2026-10-08 · **Next action** — Owner engages
  counsel; an agent then builds the briefing package. **A-06 was approved on
  2026-08-10, not pending** — this block read "Awaiting Approval" for 59 days
  after the answer. A-06's result also corrects this task's own title: the
  canonical Ledger carries **twelve** documents, **nine** requiring review, not
  ten and seven. **Possible movement, unconfirmed:** a client-portal invitation
  from Hawkins Law, LLC arrived 2026-10-08T13:39Z and is unactivated. Whether
  that is this engagement is **a question for the owner, not an inference** —
  see the 2026-10-08 brief.

## T-14 — Wire virus scanning to `attachments.scan_status`

- **Objective** — Stop accepting member uploads into a column that says
  `pending` forever.
- **Source** — `docs/MILESTONES.md` item 3.
- **Workstream** ledger · **Priority** High · **Owner** Owner · **Due**
  2026-09-03 (proposed)
- **Dependencies** — Choice of scanning service; a paid subscription.
- **Approval class** — **E (recurring spend)** and **F (integration)**. Blocked
  on **A-07**, pending.
- **Execution steps (prepared, not executed)** — (1) Compare candidate scanners
  on price, file-size ceiling, latency and retention; (2) wire the storage hook
  to set `scan_status` to `clean` or `infected`; (3) gate download on `clean`;
  (4) alert an administrator on `infected`; (5) test with the EICAR string.
- **Cost** — Recurring, **not recorded** until A-07 selects a vendor.
- **Risk** — An unscanned upload distributed to members. Interim mitigation is
  that uploads are namespaced by user id in the storage policy.
- **Expected result** — No attachment is downloadable until scanned clean.
- **Completion proof required** — An EICAR upload marked `infected` and blocked;
  a clean file marked `clean` and downloadable.
- **Status** Awaiting Approval · **Next action** — Owner answers A-07.

## T-15 — Make the public landing pages cacheable again

- **Objective** — Restore caching on the marketing routes, which currently
  render per request because the marketing layout renders a session-aware
  header.
- **Source** — `docs/MILESTONES.md` item 5.
- **Workstream** ledger · **Priority** Normal · **Owner** Agent · **Due**
  2026-09-03 (proposed)
- **Dependencies** — none to prepare; a deploy needs approval.
- **Approval class** — A to prepare (S-01); **F to deploy**.
- **Execution steps** — Move the auth-dependent part of the header into a client
  component or adopt partial prerendering; confirm the marketing loaders still
  use `db/public.ts` and stay cookie-free; verify `revalidate` takes effect.
- **Cost** — none. **Risk** — a bodged fix that swallows Next.js's
  `DynamicServerError` produces a permanently blank homepage with nothing
  logged. That failure has happened here before; it is why `db/public.ts`
  exists.
- **Expected result** — Marketing routes render statically with a working
  session-aware header.
- **Completion proof required** — Build output showing the routes as static, and
  a signed-in header still correct in the browser.
- **Status** Planned · **Next action** — Schedule after T-11 and T-13; neither
  blocks it, but both outrank it.

## T-16 — Build in-product super-administrator MFA reset

- **Objective** — Remove the need to touch Supabase directly when a staff member
  loses their authenticator.
- **Source** — `docs/MILESTONES.md` item 6.
- **Workstream** ledger · **Priority** Normal · **Owner** Agent · **Due** not
  recorded
- **Dependencies** — none.
- **Approval class** — A to prepare (S-01); **F to deploy** — it changes an
  authentication path.
- **Execution steps** — Design the reset flow described on `/admin/security`;
  require a second super-administrator; write an audit entry on every reset.
- **Cost** — none. **Risk** — an MFA reset path is an account-takeover path if
  it is not itself gated. Two-person rule is not optional here.
- **Expected result** — A super-administrator can reset a colleague's second
  factor, audited.
- **Completion proof required** — A reset performed in a local environment, with
  the `audit_logs` row.
- **Status** Backlog · **Next action** — Size it after launch blockers clear.

## T-17 — Commission high-fidelity design and brand sign-off

- **Objective** — Close milestone 1, which is partial: a working design system
  exists, but there is no confirmed brand direction or owner sign-off.
- **Source** — `docs/MILESTONES.md` milestone 1 and item 4.
- **Workstream** design · **Priority** Low · **Owner** Owner · **Due** not
  recorded
- **Dependencies** — Owner decision; a budget; possibly an external designer.
- **Approval class** — **E** if it involves spend. No packet raised yet — it is
  below the launch blockers and raising it now would spend owner attention on
  the wrong decision.
- **Execution steps** — not yet scoped.
- **Cost** — not recorded. **Risk** — none operational; a launch-quality risk.
- **Expected result** — A signed-off brand direction.
- **Status** Backlog · **Next action** — Raise a packet once T-11 and T-13 are
  answered.

## T-18 — Build the six DD84 routines as runnable commands

- **Objective** — Turn spec §16 from a table of intentions into six commands
  that actually run.
- **Source** — Owner instruction, 2026-08-06.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-08-06
- **Dependencies** — T-19 for the files they write into.
- **Approval class** — B, covered by **A-08**.
- **Execution steps** — Write
  `.claude/commands/dd84-{daily-brief,inbox-intake, followup,cash-review,opportunity-scan,site-monitor}.md`;
  each states its objective, its connectors and the exact tool calls, its output
  format, where it writes, what it may never do without approval, and its
  degradation rule.
- **Cost** — none. **Risk** — a routine that fabricates a section when a
  connector is missing would be worse than no routine at all; the degradation
  rule is stated in every file and in the shared contract in `README.md`.
- **Expected result** — Six invocable commands, all Class A.
- **Completion evidence** — Six files in `.claude/commands/`. Log `OL-0007`.
- **Status** Done · **Next action** — T-23 schedules them; the first live run of
  each is the real test, since none has yet run against a connector.

## T-19 — Stand up the operating record and seed it with current state

- **Objective** — Give the register, the approvals and the execution log a home
  on disk, so operational state survives the end of a conversation.
- **Source** — Owner instruction, 2026-08-06; spec §3 and §9.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-08-06
- **Dependencies** — none.
- **Approval class** — B, covered by **A-08**.
- **Execution steps** — Create `docs/ops/` with `README.md`, `TASK-REGISTER.md`,
  `APPROVALS.md`, `OPERATING-LOG.md` and `briefs/`; seed each from repository
  evidence and the owner's stated statuses.
- **Cost** — none. **Risk** — **a seeded register that is wrong is worse than an
  empty one**, because everything downstream trusts it.
- **Expected result** — Three linked files that a routine can read and update.
- **Completion evidence** — This directory. Log `OL-0007`.
- **Verification gap** — The register was reconstructed from git history,
  `MILESTONES.md` and the owner's stated statuses. **Torque cannot confirm from
  inside the repository that no task is missing** — work that was discussed but
  never touched a file leaves no trace here.
- **Status** **In Verification** · **Next action** — Owner reads the summary
  table and confirms it matches their own record, or names what is missing. Only
  then does this move to Done.

## T-20 — Extend the Torque agent definition with the missing spec sections

- **Objective** — Make the agent definition operationally complete: it stated
  the persona and the boundary but not the task fields, the prioritisation
  factors or the escalation table.
- **Source** — Owner instruction, 2026-08-06; spec §4, §10, §14.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-08-06
- **Dependencies** — T-19 for the pointer target.
- **Approval class** — B, covered by **A-08**.
- **Execution steps** — Add the §4 field list, the §10 prioritisation factors,
  the §14 escalation table and a pointer to `docs/ops/`, keeping the file a
  working document rather than a copy of the spec.
- **Cost** — none. **Risk** — bloating the definition until it is not read.
- **Expected result** — A definition that answers "what do I do when X" without
  opening the spec.
- **Completion evidence** — `.claude/agents/torque.md`. Log `OL-0007`.
- **Status** Done · **Next action** — Revisit whenever the PDF spec is revised.

## T-21 — Point CLAUDE.md §10 at the commands and the operating record

- **Objective** — Make the operating system discoverable from the file every
  agent reads first.
- **Source** — Owner instruction, 2026-08-06, which explicitly authorised this
  one CLAUDE.md edit.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-08-06
- **Dependencies** — T-18, T-19.
- **Approval class** — B, covered by **A-08**, with the stated limit: additive
  only, §10 only, and §11 and the existing §10 protocol text untouched.
- **Execution steps** — Append a short subsection to §10 listing the commands
  and the three operating-record files.
- **Cost** — none. **Risk** — scope creep into the rest of CLAUDE.md; bounded by
  the approval limit and checked in the diff.
- **Expected result** — A reader of CLAUDE.md finds the routines.
- **Completion evidence** — CLAUDE.md §10 diff. Log `OL-0007`.
- **Status** Done · **Next action** — none.

## T-22 — Verify and push the operations control plane

- **Objective** — Prove the change is green and land it on the working branch.
- **Source** — Owner instruction, 2026-08-06.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-08-06
- **Dependencies** — T-18, T-19, T-20, T-21.
- **Approval class** — B for the branch push, covered by **A-08** and CLAUDE.md
  §11. **No pull request** — that boundary is not crossed.
- **Execution steps** — `npm run format` over the new markdown;
  `npm run typecheck && npm run lint && npm test`; commit; push to
  `claude/claude-md-docs-jjveuq`.
- **Cost** — none. **Risk** — a markdown-only change should not move the suite;
  if it does, the change is wrong and is reverted rather than explained away.
- **Expected result** — 179 tests in 11 files still pass; the branch is updated.
- **Completion proof required** — Real command output and the pushed commit
  hash, recorded in `OPERATING-LOG.md` **after** the push, not before.
- **Completion evidence** — Logs `OL-0008` (verification) and `OL-0009` (push).
  Commit `fd50a82`; `origin/claude/claude-md-docs-jjveuq` confirmed at the same
  hash after a fetch, rather than inferred from the push output. Typecheck
  clean, lint clean, 179 tests in 11 files passing.
- **Status** Done · **Next action** — T-23: the owner schedules the routines. A
  run of `/dd84-daily-brief` against real connectors is the first genuine test
  of T-18, and nothing here has had one yet.

## T-23 — Schedule the six routines and confirm the first firing

- **Objective** — Get the routines running on a cadence rather than on demand.
- **Source** — Owner instruction, 2026-08-06: "Do not create scheduled triggers
  yourself. I am handling scheduling."
- **Workstream** ops · **Priority** High · **Owner** **Owner** · **Due**
  2026-08-08
- **Dependencies** — T-18.
- **Approval class** — Owner-held. **Torque must not create its own schedule.**
- **Execution steps (owner)** — Create a trigger per routine at the cadence in
  `docs/ops/README.md`; confirm the first firing writes a brief and an operating
  log entry.
- **Cost** — none. **Risk** — a routine that fires but writes nothing looks like
  a routine that found nothing. The first firing must be checked for a log
  entry, not just for output.
- **Expected result** — Six scheduled routines, each with a first run recorded.
- **Completion proof required** — One `OL-` entry per routine's first firing.
- **Status** In Verification · **Next action** — Confirm the next scheduled run
  writes a brief. **Partly done, 2026-08-13.** The owner scheduled four of the
  six routines — daily brief, inbox intake, cash review and opportunity scan —
  on 2026-08-07. Follow-up and site monitor are still unscheduled. All four were
  repointed at the merged branch under A-09 (OL-0011). **The completion proof is
  still missing:** this task requires one `OL-` entry per routine's first
  firing, and no routine run has yet written one. See T-27 — that gap is now its
  own task, and T-23 cannot close until it is resolved.

## T-24 — Build the weekly marketing opportunity scan routine

- **Objective** — Close the gap between spec §16's eight routines and the six
  that exist.
- **Source** — Spec §16; gap identified while executing T-18.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-08-13
- **Dependencies** — Confirmation of which advertising accounts exist, which
  Supermetrics can answer, and which are authorised.
- **Approval class** — A to build; the routine itself will be Class A.
- **Execution steps** — Ranked campaigns, partnerships, offers, content and
  outreach tied to capacity and measurable revenue, per spec §8.3; read spend
  and conversion through Supermetrics; **prepare, never publish**.
- **Cost** — none to build. **Risk** — recommending spend without capacity data
  produces leads the shop cannot service.
- **Expected result** — `.claude/commands/dd84-marketing-scan.md`.
- **Status** Planned · **Next action** — Confirm the authorised ad accounts
  first; building it against imagined accounts is how a routine learns to
  invent.

## T-25 — Build the project status control routine

- **Objective** — The eighth spec §16 routine: active builds, software projects,
  product development and equipment purchases reviewed for milestones, blockers,
  costs and decisions.
- **Source** — Spec §16 and §8.7.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-08-13
- **Dependencies** — A project record per active build. None exists yet; the
  register currently holds software tasks only.
- **Approval class** — A to build; the routine itself will be Class A.
- **Execution steps** — Read the register, GitHub milestones and the project
  records; report milestone, blocker, budget variance, scope change and the next
  owner decision per project.
- **Cost** — none. **Risk** — reporting on projects that have no record produces
  an empty report that looks like a healthy one.
- **Expected result** — `.claude/commands/dd84-project-review.md`.
- **Status** Planned · **Next action** — Create the first project record — the
  vehicle builds and product-development work in spec §8.7 are not represented
  in this register at all, which is itself a finding.

## T-26 — Decide what to do about 105 files failing `prettier --check`

- **Objective** — Resolve a discrepancy between what the repository says about
  its own formatting and what `npm run format:check` actually reports.
- **Source** — Agent finding while running the verification chain for T-22 on
  2026-08-06.
- **Workstream** ledger · **Priority** Normal · **Owner** Agent · **Due**
  2026-08-13 (proposed)
- **Dependencies** — none.
- **Approval class** — A to investigate (S-01). A reformat touching 105 files is
  a large diff over code nobody is changing, so **the decision to run it is the
  owner's**, not a side effect of some other task.
- **The finding, precisely** — `npm run format:check` reports 105 files with
  style issues: effectively the whole `src/` tree, the unit tests, `scripts/`
  and `vercel.json`. **This is pre-existing.** It was confirmed by stashing the
  operations-control-plane change and re-running the check against clean `HEAD`
  (`3d22acc`), where `src/lib/scoring/score.ts` still fails. Every markdown file
  added or changed by T-18 to T-21 passes.
- **Most likely cause, not yet confirmed** — a version difference in
  `prettier-plugin-tailwindcss` or Prettier itself between whoever last ran
  `npm run format` and the currently installed dependency tree. That is a guess
  and is labelled as one; step 1 confirms or kills it.
- **Execution steps** — (1) Compare the installed Prettier and plugin versions
  against the lockfile and identify what the reformat would actually change —
  class reordering, or something substantive; (2) sample three diffs and show
  them to the owner; (3) on approval, run `npm run format` as a **single
  mechanical commit that touches nothing else**, so it can be skipped in
  `git blame`; (4) confirm `typecheck`, `lint` and `test` are unchanged after.
- **Cost** — none. **Risk** — low, but a 105-file diff buries any real change
  landing beside it, which is the whole reason it gets its own commit.
- **Expected result** — Either a clean `format:check`, or a recorded decision
  that the repository does not enforce it and the script says so.
- **Completion proof required** — `npm run format:check` exiting clean, with the
  three test commands still green, or the recorded decision.
- **Status** Planned · **Next action** — Step 1. **Not fixed during T-22**:
  reformatting 105 unrelated files while landing the operations control plane
  would be silent scope expansion, which §11 of the spec forbids.

## T-27 — Routines fire but commit nothing

- **Objective** — Find out why four scheduled routines have run for a week
  without writing a single brief, and make the next run leave evidence.
- **Source** — Agent finding while executing A-09 on 2026-08-13.
- **Workstream** ops · **Priority** **High** · **Owner** Agent · **Due**
  2026-08-15
- **Dependencies** — none. It blocks T-23.
- **Approval class** — A. Diagnosis reads logs and repository state; it changes
  no live system. Any fix that alters a Routine's schedule or permissions comes
  back to the owner, since A-09's grant was consumed on execution.
- **The finding, precisely** — `list_triggers` reports `last_fired_at` values
  through 2026-08-13 for all four Torque Routines: the daily brief at 10:50 UTC
  and the inbox intake at 10:25 UTC that morning, the opportunity scan on
  2026-08-10, the cash review on 2026-08-07. Against that,
  `git log -- docs/ops/` on the merged branch shows exactly two commits, both
  written by hand during T-22, and `docs/ops/briefs/` contains only its README.
  **Zero briefs exist.** The routines are being invoked and producing nothing
  that survives the session.
- **Updated 2026-08-28. Two more weeks of the same.** Every routine has kept
  firing on schedule and every run reports `ROUTINE_RUN_STATUS_SUCCEEDED` —
  inbox intake as recently as 2026-08-28 10:20, the daily brief 2026-08-27, the
  opportunity scan 2026-08-24, the cash review 2026-08-21. The newest commit on
  the branch is still a hand-written one. **`SUCCEEDED` means the session
  finished, not that it delivered.**

### Root cause — confirmed 2026-08-28

**The fired sessions have no repository attached.** They are created without a
git source and without an outcome branch, so there is nothing to commit to and
nothing to push with. The agent does the work and has nowhere to put it.

The evidence, in the order that settles it:

1. **The fired session's own record.** `get_session` on the 2026-08-28 inbox
   intake (`cse_01G1uzjS1oNsmD3ZCvVq8FQx`) returns a `session_context` of
   exactly `{autofix_on_pr_create, permission_mode}` — **no `sources`, no
   `outcomes`**. The 2026-08-27 daily brief (`cse_01X8sfFM64UdniNEnDZJMMtx`) is
   the same.
2. **The control.** The one Routine on this account that _does_ carry `sources`
   and `outcomes` in its session context is _Weekly Georgia Opportunity Ledger
   summary_ — the only one with `created_via: http_api`, i.e. created from the
   claude.ai Routines UI. The four that deliver nothing are all
   `created_via: meta_mcp`.
3. **The tool cannot express it.** `create_trigger` has no `source_url` or
   `outcome_branch` parameter, and `update_trigger` accepts only `name`,
   `prompt`, `cron_expression`, `run_once_at`, `enabled` and `model`. **So this
   cannot be repaired by editing the existing Routines** — the missing thing is
   not in the editable surface.
4. **It is not permissions and not a prompt fault.** Both sampled sessions ran
   with `permission_mode: auto`, and both did the work: the 2026-08-28 run spent
   **$1.77 and produced 22,888 output tokens**, the 2026-08-27 run $0.86 and
   13,824. That is a written brief in each case. It went into the reply and died
   with the session.

**This is the same root cause as the connector gap** recorded in
`docs/agents/README.md`: a Routine minted through the MCP tool is impoverished
relative to one minted in the claude.ai UI — no connectors, and no repository.
One remedy fixes both.

- **Cost of leaving it** — real and recurring. Two sampled runs cost $2.63
  between them and produced nothing that survives. The routines have fired on
  this pattern since 2026-08-07. **No total is claimed here** — only the sampled
  runs were read, and a number without a source is a defect.
- **Risk** — the schedule reads as coverage that does not exist. That is worse
  than no automation, because it invites someone to trust an operating record
  that was never written.
- **The fix is the owner's, and there are two.** Recorded as **A-10**.
  **Recommended:** recreate the four Routines from the claude.ai Routines UI
  with the repository and branch attached — one trip, and it fixes the connector
  gap at the same time, which is most of what the cash review and inbox intake
  are for. **Alternative:** rebind them to fire into a persistent session that
  already holds the checkout via `create_trigger`'s `persistent_session_id`.
  That is inside the agent's reach but fragile — it depends on one session
  surviving, and its context grows without bound.
- **Expected result** — One scheduled run that ends with a dated brief committed
  to `docs/ops/briefs/` and an entry in `OPERATING-LOG.md`.
- **Completion proof required** — The commit hash of a routine-written brief.

### 2026-09-25 — diagnosis re-verified, and the data loss stopped

The root cause was recorded on 2026-08-28 and was a month old, so it was checked
again rather than repeated. It holds. Session `session_01AVGZKmA9TpaePUTDatFWry`
— this morning's intake — carries **no `sources` field at all**, in the same
environment as an interactive session that does have repositories attached. The
repository is a property of the session, not the environment. The fired
session's tool list has no `add_repo` and no credentials to clone with, so it
cannot attach one itself. **A-10 remains the remedy and remains owner-only.**

**What was fixed without waiting for it.** That run cost $1.11 and 132k tokens
to produce a brief that went nowhere. The loss was never the missing repository
— it was that the output had no second home. All four prompts now carry a
three-step fallback: say in the first sentence that the commit failed and do not
report success; **publish the output as an Artifact**, which survives the
session where a reply does not; and paste the full text into the reply as well.
Artifact was chosen because it is the only durable sink these sessions actually
have — it is in their tool list and a repository is not. Evidence: OL-0023.

**Still true after the fix, and the reason this task stays open:** briefs do not
reach `docs/ops/briefs/`, and the routines cannot update this register or the
log. **The operating record still advances only when a session holding the
repository writes to it.** The change narrows the damage; it does not close the
task.

- **Status** **DONE**, 2026-10-09 · **Completion evidence: commit `ecd04da`**,
  the 2026-10-09 inbox intake, written and pushed by a **scheduled** firing of
  `trig_01UdMtZvf1BdVuYoucd6UY7N` at 10:20:15Z and landed at 10:29:17Z. A second
  scheduled firing, the daily brief at 10:51:09Z, committed as well. **Two for
  two.** That is the objective this task was opened for — "find out why four
  scheduled routines have run for a week without writing a single brief, and
  make the next run leave evidence" — and both halves are now answered. Recorded
  in OL-0033 and OL-0034.
- **What this does NOT close.** **A-10 is still pending** and T-23 is still In
  Verification. The fix that worked is the A-14 stopgap: one host session
  holding the checkout, with all four Routines bound to it. **Its three
  weaknesses are unchanged** — a single point of failure, unbounded context
  growth, and four routines serialising through one session. **The real fix is
  still recreating the Routines from the claude.ai UI with a repository
  attached.** Closing this task is not permission to stop wanting that.
- **Previously** · **In Verification**, 2026-10-08 · **A-14 executed a
  stopgap**: a host session that holds this repository and branch now exists,
  and the four Routines are bound to it (OL-0029, sibling session). **That is
  not a fix and A-10 stays open** — it is one session, its context grows without
  bound, and all four routines serialise through it. **The success test is
  unchanged and unmet:** one _scheduled_ firing landing a commit. First
  opportunity **2026-10-09T10:20Z** (inbox intake). The two briefs that reached
  `docs/ops/briefs/` on 2026-10-08 were **hand-driven and prove nothing about
  the schedule.** · **Next action** — A-10, unchanged: recreate the four
  Routines from the claude.ai Routines UI with the repository
  `downdirty84llc-creator/tune-advisor-` and branch
  `claude/claude-md-docs-cqvhy6` attached, copy each prompt across verbatim —
  they are current as of 2026-09-25 — then delete the agent-created originals so
  the schedule is not doubled.

## T-28 — Settle where the Ledger and the agent platform each live

- **Objective** — End the two-copy confusion between this repository and the
  Ledger's, without merging two separate businesses into one codebase.
- **Source** — Write access granted 2026-09-09; divergence found the same day.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Approval** A-11.
- **Outcome** — The Ledger application is maintained in
  `downdirty84llc-creator/georgia-opportunity-ledger` on `main`. The DD84 agent
  platform stays here. Three Ledger-only modules crossed over and landed as
  `a228f3d`; nothing of DD84's did.
- **Corrections this produced** — Two, both recorded rather than quietly fixed.
  The `MILESTONES.md` in this repository lists virus scanning and the
  super-administrator MFA reset as unbuilt; **both are built in the Ledger's own
  repository**, and its MILESTONES was already accurate. And the legal-document
  count quoted from here — "ten documents, seven requiring review" — is wrong
  for the Ledger, which has **twelve, nine requiring review**.
- **Completion proof** — `a228f3d` on the Ledger's `main`, gate green; PR #2 and
  #3 closed.
- **Status** **Done**, 2026-09-23 · Evidence: OL-0013, OL-0015.

## T-29 — The Ledger application copy in this repository is stale

- **Objective** — Decide what happens to the Ledger source tree still sitting in
  this repository, now that it is not the maintained copy.
- **Source** — Agent finding, 2026-09-23, while closing T-28.
- **Workstream** ops · **Priority** Normal · **Owner** **Owner** · **Due** not
  set
- **Approval class** — **Owner's.** Deleting a source tree from a repository is
  not an agent's call, and GitHub will not let the default branch be deleted,
  which is the reason the copy exists at all.
- **The finding** — `src/`, `supabase/`, `docs/ARCHITECTURE.md`,
  `docs/MILESTONES.md` and `docs/RUNBOOK.md` here describe a Ledger that is four
  migrations and several features behind the real one. The CLAUDE.md banner says
  so, but a banner is read by whoever opens that file and by nobody else. Anyone
  landing on `src/` from a search will not see it.
- **Options** — (1) leave it, banner only — cheapest, and the trap stays; (2)
  delete the Ledger source from this branch, keeping the agent platform —
  removes the trap, and the history is still in git; (3) archive the whole
  repository once the platform moves somewhere of its own.
- **Risk of leaving it** — Low but real, and it has already happened once: this
  agent quoted the stale MILESTONES and the stale legal-document count as
  current fact, in writing, more than once.
- **Status** **Blocked (on owner)**, re-confirmed 2026-10-08 · The owner chose
  the repoint on 2026-10-08 and **it could not be executed** — four routes
  refused, evidence in OL-0026, and the permission is present while the proxy in
  front of it is not. **Step 1 is also gated on T-32**, which found both
  repositories are public. Previously: Partly done, 2026-09-25 · Option 2
  executed: the Ledger source is gone from this branch (OL-0016), audited file
  by file first. **Two owner actions remain and the task cannot close without
  them** — repoint this repository's default branch away from
  `claude/georgia-opportunity-ledger-kfpt4c` and delete it, and delete the two
  spent branches in the Ledger's repository, one of which still carries DD84's
  revenue and customer records. Neither is reachable from a session: GitHub will
  not delete a default branch, and this environment's git proxy refuses deletion
  pushes.

## T-30 — Unattended Ledger subscriber-email Routine — cannot be removed

> Originally **T-31** on `claude/claude-md-docs-jjveuq`; renumbered on
> consolidation, where T-31 is the consolidation itself. Its approval, formerly
> A-11 there, is **A-12** here.

- **Objective** — Remove the one scheduled job on this account that can send
  external email with no approval step.
- **Source** — OL-0020, 2026-09-25.
- **Workstream** ops · **Priority** High · **Owner** **Owner** · **Due**
  2026-09-25
- **The Routine** — "Weekly Georgia Opportunity Ledger summary",
  `trig_01FxDef9B5snYTW42FfcMEbD`, Mondays 09:00 UTC, created 2026-07-30 via
  `http_api` with seven connectors including Gmail and Stripe. Its prompt ends
  with an unconditional "email the summary to paid subscribers".
- **Audited, not assumed** — it has sent nothing in four weeks of green runs. No
  sent mail in any fire window, no drafts. The Ledger has zero profiles, so the
  subscriber list is empty and the send is a no-op.
- **Why it still matters** — the protection is an empty database, not a rule.
  One real subscriber turns a weekly no-op into a weekly unattended send, from a
  product that has not launched, using a session link from July. Every routine
  built afterwards is Class A by construction; this one predates them.
- **Why the agent cannot do it** — `update_trigger` refuses: a Routine created
  via `http_api` can only be edited by its owner. That boundary was not worked
  around.
- **The action** — disable at
  https://claude.ai/code/routines/trig_01FxDef9B5snYTW42FfcMEbD. Reversible;
  nothing is lost. Deleting outright is also reasonable — it has produced no
  artefact anyone depends on.
- **Completion proof required** — `list_triggers` showing `enabled: false`, or
  the Routine absent.
- **Status 2026-09-25 — ACCEPTED RISK, by owner decision A-12.** Not Done, and
  deliberately not closed. The Routine is still there and still fires.
- **Three removal attempts, all refused or ineffective.** `update_trigger` and
  `delete_trigger` are both refused to agents — a Routine created via `http_api`
  can only be changed by its owner. The owner then reported disabling it, and
  later deleting it; `get_trigger` after each returned the object unchanged,
  with `updated_at` still `2026-07-30T16:31:25`, identical to `created_at` and
  not moved by a fraction of a second across all three checks. A deleted Routine
  returns not-found. **Nothing has modified this Routine since it was created.**
- **Most likely cause** — it is an orphan. Created through the HTTP API under
  its own OAuth token (`api_token_hint` `sk-ant-oat01-1o2fMrgy...OQAA`), it
  appears not to be editable from the Routines UI either, which is why two
  different owner actions both silently failed to persist.
- **Why accepting is defensible** — the only harmful thing it can do is send,
  and sending resolves to an empty list: the Ledger database holds zero
  profiles. Four green runs have sent nothing, verified against sent mail and
  drafts in OL-0020. The cost of leaving it is a weekly no-op.
- **What makes this stop being acceptable — the single trigger condition.** The
  **first real Ledger subscriber**. At that moment the weekly no-op becomes a
  weekly unattended external send, from an unlaunched product, with no approval
  step. **Anyone reading this register at that point must treat T-30 as reopened
  and urgent, without waiting to be told.** The safeguard today is an empty
  table, not a rule — and tables fill.
- **Two routes that bypass the broken UI, if it needs killing later** — revoke
  the OAuth token it runs under, which fails every future run at authentication
  and is scoped to this Routine alone; or detach the Gmail connector, which is
  blunter because other things use Gmail. Neither was attempted: removing a
  credential is irreversible for whatever else might hold it, and that is the
  owner's call, not an agent's.
- **Status** Accepted Risk · **Next action** — none, unless the Ledger gains a
  subscriber, or the Routines UI starts saving for HTTP-API-created Routines.
  Worth reporting the UI failure to Anthropic: anything created that way is
  currently unmanageable by its owner.

---

---

## T-31 — Consolidate the two diverged operating records onto one branch

- **Objective** — One operating record. Two branches had been appending
  independently to files whose entire value is that they are append-only and
  unique.
- **Source** — Message from the `claude/claude-md-docs-cqvhy6` session,
  2026-09-25; claims verified before acting, in OL-0022.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-09-25
- **Decision** — **Owner chose this branch, 2026-09-25 ("use cqvhy6").** The
  other branch, `claude/claude-md-docs-jjveuq`, is superseded at `f315ab2`.

### What the divergence actually was

|                     | `jjveuq`                             | `cqvhy6` (this branch)   |
| ------------------- | ------------------------------------ | ------------------------ |
| Tracked files       | 267, including the whole Ledger tree | 28, DD84 only            |
| Operating log       | OL-0001…OL-0015                      | OL-0001…OL-0016          |
| Approvals           | had its own **A-11**                 | had a different **A-11** |
| Routines point here | no                                   | yes, all four            |

OL-0001…OL-0009 were identical — shared ancestry. Everything after diverged.

### How it was merged, and the one rule followed throughout

**This branch was the base; nothing was merged into it.** A `git merge` would
have restored the 241-file Ledger tree the owner had just had deleted. The six
unique entries were carried across by hand instead.

- **Log** — `jjveuq`'s OL-0010…OL-0015 are now **OL-0017…OL-0022**, in original
  order, each carrying a note of the number it had so the commits referencing it
  stay findable. Cross-references inside them were repointed; nothing was
  reworded, shortened or dropped. **Two of the six record mistakes and their
  corrections** — those are exactly the entries a consolidation is tempted to
  lose, and the reason the file is append-only.
- **Approvals** — `jjveuq`'s A-11 became **A-12**. More importantly, **A-05 and
  A-06 were answered by the owner on 2026-08-10 and still read "awaiting owner"
  here**, six weeks later, because the answers were recorded on the other
  branch. Both now carry their responses and their findings.
- **Register** — its T-31 became **T-30**. Its T-29 and T-30 duplicated this
  branch's T-28 and T-29 in substance and were **not** imported as separate
  tasks; the decisions were the same ones, reached twice.

### What was deliberately left behind

- **The Ledger tree, and `ARCHITECTURE.md` / `MILESTONES.md` / `RUNBOOK.md`.**
  Deleted from this branch on purpose; re-importing them would undo T-29.
- **`docs/ops/DEPLOYMENT-PACKAGE.md`** — a full Vercel deployment procedure for
  the Ledger, written on `jjveuq`. It is Ledger content and this repository is
  DD84-only, so it is **not** copied here. It is not lost: it lives at
  `jjveuq:docs/ops/DEPLOYMENT-PACKAGE.md`, commit `f315ab2`, and belongs in
  `downdirty84llc-creator/georgia-opportunity-ledger` if anyone wants it. Its
  two useful findings — the Vercel GitHub App must be installed before a
  repository can be linked, and the hobby-plan cron and duration limits — are
  already recorded in OL-0018 and in this branch's `CLAUDE.md`.
- **T-27 (webhook) and T-28 (deploy) as they existed on `jjveuq`** — both Ledger
  scope. Their substance is preserved in A-05's findings above rather than as
  DD84 tasks in a DD84 register.

- **Completion proof** — every OL entry from both branches present with no
  duplicate number; no duplicate A number; this branch still DD84-only with no
  `src/`; `jjveuq` marked superseded so nothing appends to it again.
- **Status** **Done**, 2026-09-25 · Evidence: this commit and OL-0017…OL-0022.
- **Standing rule this creates** — **there is one operating record, and it is on
  this branch.** A session that finds itself on `jjveuq` should stop and move,
  not append. Two truthful logs still add up to a false one; A-05 spent six
  weeks reading "awaiting owner" after the owner had answered, and that is what
  a second record costs.

## T-32 — Both repositories are public, and the venture registry is in one of them

- **Objective** — Get a deliberate owner decision on whether DD84's revenue
  figures and system identifiers should be readable by anyone, before anything
  makes them more prominent.
- **Source** — Agent finding, 2026-10-08, while checking whether the default
  branch could be repointed (T-29). The visibility was not the thing being
  looked for.
- **Workstream** compliance · **Priority** **High** · **Owner** **Owner** ·
  **Due** before T-29 step 1
- **Dependencies** — **Blocks T-29.** Repointing the default at
  `claude/claude-md-docs-cqvhy6` puts `docs/agents/ventures.md` on the public
  front page of `tune-advisor-`.
- **Approval class** — Owner's. Repository visibility is a Class G setting and
  the content question is a judgement about the business, not a technical one.
- **The finding** — `gh api` reports **both**
  `downdirty84llc-creator/tune-advisor-` and
  `downdirty84llc-creator/georgia-opportunity-ledger` as `private: false`.
  `docs/agents/ventures.md` on this branch carries, in one table each: all-time
  revenue, paid invoice count, distinct customer count, **customer concentration
  as a percentage**, average and largest invoice, the date of the last payment,
  the Stripe account id, the Supabase project ref, the Shopify store identifiers
  and the owner's email address.
- **What this is and is not** — **No credentials and no customer names.** The
  registry was written under the §23 rule that keeps customer detail out of
  version control, and that rule held. What is exposed is the business's own
  financial position and its concentration risk, which is ordinarily the kind of
  thing a competitor or an acquirer would have to ask for.
- **Honest about the timing** — this is **not** caused by the repoint and is not
  new. The repository has been public throughout; the figures have been readable
  since 2026-08-03. The repoint would move them from findable to first-read,
  which is a difference of degree, and it is the reason to decide now rather
  than the reason it matters.
- **Options** — (1) **Make `tune-advisor-` private.** One setting; nothing else
  changes and the registry keeps the figures the agents need. Recommended. (2)
  Strip the revenue table and identifiers out of `ventures.md` into something
  not version-controlled — **this costs real capability**: the registry exists
  so an agent does not re-derive or invent these numbers, and §5 of CLAUDE.md
  turns on them being present and dated. (3) Accept it on the record, which at
  least makes it a decision rather than an oversight.
- **Note on the other repository** — `georgia-opportunity-ledger` is also public
  and is a separate question, not covered here. It holds no DD84 material; what
  it does hold is a product whose legal documents still carry "awaiting legal
  review" banners.
- **Status** **Closed**, 2026-10-08 · **Option 3 — the owner accepts the
  exposure on the record.** Option 1 was answered first, then the owner asked
  for the reasoning and chose to accept; both answers are in A-13. The
  repository stays public. **T-29 is no longer gated on this.**
- **What this decision changes going forward** — it sets a standing rule rather
  than closing a question. This repository is public **by decision**, so nothing
  may be added to it that would be harmful in public: no credentials, no
  customer names, emails or payment details, no tune files or bench pinouts.
  **The registry's existing figures are accepted; a new category of sensitive
  material is not covered by this decision and would need its own.**

---

## T-33 — Establish what `dd84-api` is, and why it is failing on Render

- **Objective** — Find out whether a failing production service belongs to DD84,
  what it serves, and whether anything customer-facing is down. The failure is
  confirmed; its significance is not.
- **Source** — `/dd84-daily-brief`, 2026-10-08. Two unread Render alerts to
  `downdirty84llc@gmail.com`.
- **Workstream** ops · **Priority** High · **Owner** Agent · **Due** 2026-10-10
- **Dependencies** — None to diagnose. No Render connector exists on this
  account, so the alerts are the only evidence available from a session.
- **Approval class** — **A to diagnose.** Any change to the service is **F** and
  returns for approval.
- **The finding, precisely** — Two emails, both unread:
  - 2026-10-08T00:27:38Z, `no-reply@render.com`, "Server failure detected on
    dd84-api" — _"Exited with status 1. This alert means one of the instances
    running your service became unavailable."_
  - 2026-10-08T15:21:58Z, `no-reply@render.com`, "deploy failed for dd84-api" —
    _"your deploy didn't complete successfully and your latest changes may not
    be live."_ Commit line reads **"Merge pull request #25"**.
- **Why this is a register entry and not a footnote** — **`ventures.md` does not
  mention Render, `dd84-api`, or any hosted API.** Its systems table lists a
  Manus front door, Shopify, Stripe, bookipay and print-on-demand vendors, and
  nothing else. So either the registry is incomplete, or this service belongs to
  something outside the two recorded ventures. **Both possibilities matter and
  neither is established.**
- **Cost and risk** — **not recorded.** A Render service has a plan and a price;
  neither was read. The risk cannot be sized until the service is identified: if
  it serves customers it is an outage, and if it is a dormant experiment it is
  noise. **Do not assume either.**
- **Execution steps** — (1) Identify the service: which repository deploys to
  it, what its URL is, whether anything public depends on it; (2) establish
  whether the 00:27Z exit and the 15:21Z deploy failure are one fault or two;
  (3) check whether PR #25 and T-34's CI failure are the same change; (4) add
  the service to `ventures.md`, or record that it belongs to neither venture;
  (5) only then decide whether a fix is warranted, and raise a packet if it
  touches the live service.
- **Completion proof required** — The service identified by name and repository,
  its customer-facing status stated, and `ventures.md` either updated or
  explicitly recorded as correct to omit it.
- **Status** Planned · **Next action** — Step 1. **Note the sequencing honestly:
  this is the top item on the 2026-10-08 brief because it is the only thing
  confirmed broken today, not because its impact is known.**

### 2026-10-13 — a third failure, and a correction to yesterday's brief

**`no-reply@render.com`, 2026-10-12T14:00:40Z, thread `1a1306a8538b8e46`:** _"We
recently detected a server failure for dd84-api: **Exited with status 1**."_
Same signature as the 2026-10-08T00:27Z alert. **Three alerts in five days.**

**This corrects the 2026-10-12 daily brief**, which recorded "no Render alert
since 10-08T15:21Z" and read it as _consistent with_ the service having
stabilised **while explicitly declining to call it evidence of that**. The brief
was written at ~11:00Z and the alert landed at 14:00Z, so **it was accurate when
written and overtaken three hours later.** The hedge is why this is an update
and not a retraction — **a brief that had asserted stabilisation would have been
wrong, and this one was not.**

**What changes:** the failure is **intermittent, not resolved**. Nothing else
does — the service is **still unidentified**, no Render connector exists, and
its customer-facing status is **still unknown**. Steps 1–5 stand unaltered.
**Three failures of an unidentified service is three times the unknown, not
three times the information.**

### 2026-10-13 — a fourth failure

**2026-10-13T22:00:20Z, thread `1a13747e5ff7aa19`:** the same _"Exited with
status 1"_. **Four alerts in six days, two of them in the last two.**

**Nothing else has changed, and that is the finding.** The service is still
unidentified, still has no connector, and its customer-facing status is still
unknown. **The register has now recorded four failures of a thing nobody has
named**, which is less a diagnosis than a count. **Step 1 has been outstanding
since 2026-10-08 and is Torque's, not the owner's** — it does not wait on an
approval, only on capacity, and four alerts is the argument for spending it.

### 2026-10-19 — failures five, six and seven, and the count is now the problem

**2026-10-16T13:57:28Z, 2026-10-17T14:19:54Z and 2026-10-18T14:24:56Z** — three
more _"Exited with status 1"_ alerts, one on each of three consecutive days
including both weekend days. **Seven alerts across seven separate days since
2026-10-08.**

**Nothing in this task has changed except the number, which is the point.** Step
1 — establish what `dd84-api` is — has been Torque's to do since 2026-10-08 and
has not been done for eleven days, while the register has faithfully logged
seven failures of a service **nobody has named, nobody has connected, and
nothing in `ventures.md` mentions.**

**Stated plainly because it is an agent failure rather than an owner one:** this
is the clearest case in the register of a task that waits on capacity rather
than on a decision, and **a count is not a diagnosis.** The three facts that
would settle it are the Render dashboard, the repository the service deploys
from, and whether anything customer-facing calls it. **None needs an approval.**

- **Status unchanged: Planned** · **Next action** — unchanged, and now overdue
  by nine days: **step 1, by Torque.**

### 2026-10-21 — this task's framing was wrong: somebody merged a pull request into it yesterday

**2026-10-20T16:24:55Z, thread `1a15a21557f28045`:** _"**deploy failed for
dd84-api** … your latest changes may not be live. **Commit: Merge pull request
#29**"_ — with **two further server failures** at 15:41:54Z and 16:51:39Z.
**Nine failures on nine separate days since 2026-10-08, and now a failed
deploy.**

**The correction matters more than the count.** This task has described
`dd84-api` for thirteen days as a service **"nobody has named, nobody has
connected, and nothing in `ventures.md` mentions"** — language that implied
orphaned infrastructure decaying on its own.

**A merged PR #29 and a failed deploy mean the opposite: the service has an
active repository and an active committer.** Somebody is working on it. **So the
nine failures are not a forgotten thing rotting; they are a service under
development whose deploys are failing** — a different problem, with a different
owner, and a much cheaper diagnosis.

**What this record got wrong, and why.** Every alert this task logged was a
_failure_ notice, and failure notices look identical whether a service is
abandoned or actively broken. **The deploy notice is the first one carrying a
commit**, and it took thirteen days to arrive because nobody deployed in that
window. **The inference from silence was unsupported and is withdrawn.**

**What is now cheap to establish and was not before:** **which repository holds
PR #29.** That names the service, its committer and its purpose in one read.
**GitHub has not been re-read since 2026-10-15**, and this register already
carries three repositories it can reach.

- **Status unchanged: Planned** · **Next action, now specific** — **find PR
  #29.** Step 1 stops being "establish what `dd84-api` is" in the abstract and
  becomes **one GitHub query**. Still Torque's, still needs no approval, **and
  no longer needs the Render dashboard to start.**

## T-34 — CI is failing on `main` in `downdirty84-ai-tuning`

- **Objective** — Find out whether a third repository on this account has a
  broken main branch, and whether it is DD84's.
- **Source** — `/dd84-daily-brief`, 2026-10-08. GitHub notification email.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-10-13
- **Dependencies** — **This session's GitHub scope covers `tune-advisor-`
  only.** Reading the repository needs it attached with `add_repo`, which is a
  deliberate act and was not performed during a Class A reporting run.
- **Approval class** — A to diagnose and to attach a repository for reading.
- **The finding** — 2026-10-08T15:12:35Z, `notifications@github.com`:
  `[downdirty84llc-creator/downdirty84-ai-tuning] Run failed: CI - main (914e171)`.
  The visible annotation line reads _"CI / Safety guardrails still in place —
  Succeeded in 12 seconds"_, so **at least one job passed and something else
  failed**; which job failed is not in the preview and was not read.
- **Worth noting about that repository's name** — a CI job called "Safety
  guardrails still in place" implies deliberate guardrail testing in a tuning
  context. If that repository publishes anything about tuning, the DD84
  restrictions bind it: **no guaranteed power figures, no emissions-defeat
  marketing, stop and escalate on safety-critical faults.** That is a flag for
  whoever picks this up, not a finding about the code.
- **Cost and risk** — none known. **not recorded.**
- **Execution steps** — (1) Attach the repository read-only; (2) read the
  failing job, not the summary; (3) establish whether it shares a cause with
  T-33; (4) record whether this repository is DD84's and add it to `ventures.md`
  if so.
- **Completion proof required** — The failing job named, with its real output.
- **Status** Planned · **Next action** — Step 1, after T-33.

## T-35 — Three stale pull requests, one from the superseded branch

- **Objective** — Stop a merge that would reinstate a retired operating record
  and a deleted source tree.
- **Source** — `/dd84-daily-brief`, 2026-10-08. `list_pull_requests` on
  `downdirty84llc-creator/tune-advisor-`, read 15:38Z.
- **Workstream** ops · **Priority** High · **Owner** **Owner** · **Due** not set
- **Dependencies** — None. **The action is the owner's**: closing or retargeting
  a pull request is a repository write, and OL-0027 established that this
  environment's proxy refuses repository writes regardless.
- **Approval class** — **Owner's.** An agent does not close someone else's pull
  request.
- **The finding, precisely** — Three pull requests are open, all targeting a
  branch called **`dd84/main`** which is neither the repository default
  (`claude/georgia-opportunity-ledger-kfpt4c`) nor the working branch:
  - **#1** _"Add CLAUDE.md, DD84 operations spec and the Torque agent
    definition"_ — head **`claude/claude-md-docs-jjveuq`**, opened 2026-08-03,
    last touched 2026-09-25.
  - **#4** _"Add CLAUDE.md and correct stale architecture omissions"_ — head
    `claude/claude-md-docs-4501xa`, opened 2026-08-05, last touched 2026-09-15.
  - **#5** _"[WIP] Reapply changes from PR #4"_ — draft, opened by Copilot
    2026-08-05.
- **Why #1 is the dangerous one** — its head is the branch **T-31 declared
  superseded**, at a commit that still carries the retired operating record
  (OL-0001…OL-0015 under their old numbers) and the 241-file Ledger tree that
  T-29 had deleted. Merging it would **undo both T-29 and T-31 in one action**,
  and would restore a second operating log whose entries duplicate numbers in
  the live one. T-31's standing rule — "there is one operating record, and it is
  on this branch" — is enforced by nothing but that branch not being merged.
- **The fourth branch nobody has explained** — `dd84/main` is the base of all
  three. It appears in no task, no approval and no log entry in this register.
  **What it is and whether anything depends on it is unknown**, and that is part
  of this task rather than an aside.
- **Cost and risk** — No cost. The risk is low-probability and high-consequence:
  these PRs have sat for nine weeks, so nobody is about to merge them by
  accident — but a single click reverses two completed tasks.
- **Execution steps (owner)** — (1) Close **#1** with a comment naming T-31; (2)
  close **#5**, a draft reapplication of #4 that has not moved since 2026-08-05;
  (3) decide whether **#4** holds anything not already on this branch, and close
  it if not; (4) establish what `dd84/main` is for.
- **Completion proof required** — `list_pull_requests` returning no open PR
  whose head is `claude/claude-md-docs-jjveuq`.
- **Status** **Awaiting Owner** · **Next action** — Step 1. No packet raised:
  the decision is a repository hygiene call with no cost, no customer impact and
  no irreversible consequence beyond what closing a stale PR implies. **If the
  owner would rather have it in packet form, say so and it will be written.**

## T-36 — No readable path to DD84's own revenue figures

- **Objective** — Restore the ability to answer "what has this business
  collected" from a live system rather than from a 66-day-old document.
- **Source** — `/dd84-daily-brief`, 2026-10-08, which could not fill its own
  money section.
- **Workstream** finance · **Priority** High · **Owner** Agent · **Due**
  2026-10-15
- **Dependencies** — A Stripe connector on this account, or a bookipay export.
  **Neither is in an agent's gift.**
- **Approval class** — **A to prepare and to read.** Connecting a connector is
  the owner's action.
- **The finding** — Every revenue figure in `docs/agents/ventures.md` — all-time
  revenue $3,507.86, 10 paid invoices, 3 distinct customers, 67% single-customer
  concentration, last payment 2025-09-12 — carries **Verified 2026-08-03**. That
  is **66 days old**, and CLAUDE.md §5 requires anything past 30 days to be
  re-checked against the live system before it is quoted. **It cannot be
  re-checked from this session:**
  - **No Stripe MCP server exists in this session's tool list.** Confirmed by
    searching the loaded servers, not inferred from a failed call.
  - **bookipay has no API access at all**, by design and by record — and
    `ventures.md` states that **every historic payment came through it**.
  - PayPal and Shopify both read clean and both read **zero**; PayPal is not
    listed as a DD84 payment system, so its zero says nothing about DD84.
- **What this costs in practice** — the daily brief's "money moved" section, the
  entire cash review routine, and any claim about revenue. **Unknown is not
  zero**, and the registry's figures are now quotable only with their date
  attached and a caveat — which is the honest position and a poor one.
- **Cost and risk** — No cost. The risk is that a stale figure gets quoted as
  current, which has already happened in this repository with the stale
  MILESTONES and the legal-document count (T-28).
- **Execution steps** — (1) Ask the owner to connect Stripe to this account, or
  confirm the connector was intentionally removed; (2) if bookipay has no API,
  establish a manual export cadence — a CSV in Drive the agent can read is
  enough; (3) re-verify the eight revenue figures and re-date them; (4) record
  in `ventures.md` which system is authoritative for revenue, since "Stripe plus
  bookipay" is currently ambiguous.
- **Completion proof required** — The eight figures re-read from a live system,
  with a new verification date and the read recorded in `OPERATING-LOG.md`.
- **Status** Planned · **Next action** — Step 1. **Until it closes, every
  routine that reports money must degrade that section rather than quote
  2026-08-03 as if it were today.**

---

### 2026-10-16 — a partial path nobody had used, found by accident

**2026-10-15T22:13:42Z, thread `1a141a0da70a7e5d`: PayPal emailed a completed
outbound payment** — a named merchant, an amount, a transaction date and an
order ID. **That is the first outbound payment this record has ever captured.**

**The point is the channel, not the payment.** This task records that there is
**no readable path to DD84's own figures**, and for the _inbound_ side that
remains true. But **PayPal's connector has required re-authentication since
2026-10-09 while PayPal's notification mail has worked throughout** — and the
intake routine reads that mailbox every weekday.

**So the claim needs narrowing: there is no readable path to a complete
position, and there is a partial, event-driven path to individual transactions
that no routine has been using.** It is strictly worse than a connector — it
sees only what PayPal chooses to email, it cannot be queried, and **absence of a
notification is not absence of a transaction.** It is not nothing.

**The same question is now open for the bank.** T-71's entire evidence base is
**one alert email**, because there is no bank connector either. **If balance
alerts arrive by mail, so may transaction alerts** — unchecked, and worth one
search before the next cash review concludes that cash is unreadable.

- **Status unchanged.** · **Next action, extended** — the connector gap is
  unchanged, **and the mail-derived route should be worked deliberately rather
  than stumbled on**: search the mailbox for payment notifications from PayPal,
  the bank, Stripe and Square, and record what each actually emails. **A partial
  source, labelled as partial, beats a blank.**

## T-37 — The C10 customer: Terminator X Max AFR fault

- **Objective** — Get a live customer's erratic AFR resolved, decide whether the
  revised tune file can go out on its current reasoning, and establish whether
  this work is billed.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. Gmail thread
  `1a1082503004a073`, "C10 Terminator X Max - DL Files", **22 messages**
  2026-10-04 → 2026-10-07.
- **Workstream** service · **Priority** High · **Owner** **Owner** · **Due**
  2026-10-10 (for the owner's determination; the customer's checklist has no
  date)
- **Customer record (§8.1 fields, missing ones marked missing)**
  - **Identity redacted 2026-10-09 under CLAUDE.md §5** (A-13: this repository
    is public by decision, and customer identity may not be added to it). The
    customer's name, email and mobile number were written here on 2026-10-08,
    before that rule existed. **They live in Gmail thread `1a1082503004a073`**,
    which is the stable pointer and is not identity. **The history still carries
    them — see T-48 and A-16.**
  - Vehicle **Chevrolet C10** · Engine **LM7 from a 2000 Silverado** ·
    Transmission **missing** · Location **missing**
  - ECU **Holley Terminator X Max**, software **V3 build 110** · Injectors **GM
    12613412**, cleaned to rule out a clog · Fuel pump and rails **stock** ·
    Wideband **Bosch 4.9 LSU**
  - Requested service — datalog review and calibration of an AFR fault
  - Source of the enquiry **missing** — and it is the one field `ventures.md`
    most wants, since the channel that produces DD84's customers is recorded as
    `UNKNOWN`. **Ask him.**
- **Customer status — UNVERIFIED, and deliberately not merged.** Shopify holds
  **no customer** with that email; Stripe and bookipay were unreachable this
  run. Spec §9 permits a merge only on verified identity, so he is recorded as
  an active correspondent of unknown purchase history. **He is not counted as
  one of the three known customers and not counted as a fourth.**
- **Approval class** — A to prepare. **Sending anything is C.** Supplying a tune
  file for a running engine is **safety-adjacent** and is the owner's, not an
  agent's.
- **Where it stands** — DD84 sent last on 2026-10-07T13:24Z: _"just get back to
  me as soon as you are able to go through the checklist. Safe travels."_ The
  C10 customer is on a work trip and said he would run the checks on return.
  **Waiting is correct here**; this task is not about chasing him.

### The blocker is a contradiction, not a delay

On 2026-10-06T11:33Z DD84 told him the Bosch O2 sensor was the limiting factor
"due to incorrect resistance" and that an **OEM Holley** sensor was required. On
2026-10-07T01:35Z he checked and reported: _"I did verify it is the **Holley
Bosch 4.9 LSU**."_

**If the sensor is already the Holley part, the remedy no longer follows from
the cause, and the root cause is open again.** Both statements can be true — a
correct part can be failed, miswired or contaminated — which is exactly why this
needs the owner. **Torque has not resolved it, has not offered a replacement
diagnosis, and will not:** `ventures.md` forbids fabricating a diagnosis or
guaranteeing a result, and this is a customer's running engine.

**No draft was written for this thread** for the same reason. The next message
must either send the revised tune file or answer the contradiction, and both are
technical determinations.

### The second finding: no payment appears anywhere

**Twenty-two messages, three datalog round-trips, a diagnosis and a newly built
tune file — and no invoice, deposit, price or payment link is mentioned once.**
Against the catalogue the work sits between _ECU Tune File Review_
($99/$149/$199) and _Holley EFI Tuning & Diagnostics_ ($350/$450/$650).

**Whether he has paid is unknown and is not asserted.** Stripe and bookipay are
the systems that would know and neither was readable (T-36). **This is flagged
as a question, not as unbilled work.** It matters because DD84 has collected
nothing since 2025-09-12.

- **Cost and risk** — No cost to prepare. The risk is reputational and
  mechanical: sending a tune built on a superseded diagnosis.
- **Completion proof required** — The owner's determination on the O2 question
  recorded here, the payment position established from a live system, and the
  customer's reply to the checklist.
- **Status** **In Progress** · **Next action** — Owner answers one question:
  given that the sensor is the Holley 4.9 LSU, does the revised tune file still
  go out as built? Then decide the billing position.

### 2026-10-13 — the job came back to life, and this task's framing was wrong

**Thread `1a1082503004a073`: 22 → 29 messages.** Seven messages on 2026-10-12,
after five days of silence. In order:

1. **17:41Z — the customer returned the checklist.** Oil pressure **42–45 PSI**;
   fuel **33 PSI key-on-engine-off, 53 psi at idle**; fuel **91 octane**;
   wideband _"runs warmup and appears to be functioning"_; warm idle RPM given.
2. **18:39Z —** customer adjusted idle **IAC down to 8–10%**.
3. **19:31Z — the owner replied**, naming **iridium spark plugs** as the first
   problem and recommending a **standard copper plug, NGK TR5**.
4. **19:40Z —** customer has **another wideband inbound** to swap in and see
   _"if it is the smoking gun"_.
5. **20:39Z —** the owner endorsed that plan and repeated the plug advice.

**The correction, stated plainly.** This task recorded the blocker as a
contradiction the owner owed a determination on: _given the sensor is the Holley
4.9 LSU, does the revised tune still go out as built?_ **It was not resolved
that way and did not need to be.** The owner moved to a new, independent finding
— plug heat range and type — and left the sensor hypothesis to be settled
**empirically, by the customer, with a spare part he already has coming.**

**That is a better resolution than the one this register was waiting for**, and
**the register was wrong to frame the thread as stalled on a single owed
answer.** A live diagnostic exchange does not have to clear its open questions
in order; it can route around one. **Recorded as a correction to this task, not
as a completion** — the AFR fault is not fixed, and the revised tune file's
status is still not stated anywhere in the thread.

**No draft was written, deliberately.** The owner is handling a live technical
exchange competently and at pace; an agent drafting into it would be
interference, and the diagnosis is safety-adjacent and his by rule.

**The payment finding does not move: 29 messages, still no price.** No quote, no
deposit, no invoice, no payment link. Against the catalogue the work still sits
between **$99 and $650** — **the range stays a range, and no midpoint is
offered.** Stripe is absent, bookipay has no API, and **PayPal is now unreadable
too** (re-authentication required since 2026-10-09), so **whether anything has
been billed remains unknown and is not asserted** (T-36, T-58).

- **Status unchanged: In Progress.** · **Next action revised** — the owner's
  open question is no longer the O2 contradiction. It is now: **does the plug
  change and the second wideband get tested before any tune file is revised
  again, and when does this job get priced?** The second half has been open for
  29 messages and nine days.

### 2026-10-13 — the price question, answered as far as mail can answer it

The follow-up routine ran the same targeted search over **every message to or
from this customer** —
`invoice OR price OR pricing OR deposit OR quote OR payment OR paid OR cost OR charge OR "$"`
— and it returned **zero messages.** The identical search against the
**Challenger** customer (**T-64**, a second live job this register did not know
about) also returned **zero.**

**That upgrades the finding from "no price was noticed in 29 messages" to "the
word does not occur in any of them."** The first is an observation about
attention; the second is a result. **It still does not prove the job is
unbilled** — the search reads written mail, a price agreed by phone would not
appear, and every payment system remains unreadable (T-36). **The billing
position stays unknown and unasserted.**

**No chase was drafted, and the reason is positive rather than cautious: DD84
spoke last, 18 hours ago.** The ball is with the customer, who is waiting on a
second wideband to arrive. **No threshold has been reached**, and a chase would
interrupt a live exchange the owner is handling well.

### 2026-10-21 — the customer went quiet after DD84's last message, and it is still unpriced

**Thread `1a1082503004a073` now holds 29 messages and returned all 29 — no
truncation.** **DD84 spoke last, 2026-10-12T20:39:11Z**, which is **~207 hours**
ago. The customer's own last message was 58 minutes earlier, so **the thread
ends with DD84's reply and the customer has not answered it.**

**That is a different stage from the one this task has been reporting.** It is
not a response risk on the customer's side — **it is a job that ran out of
conversation.** Under the proposed thresholds a waiting-on-customer item is
chased at 3 days and this is at 8.6.

**A follow-up is drafted under A-20, and it asks about the car rather than the
money.** The routine's rule binds: **Stripe has no MCP server, PayPal needs
re-authentication, and neither job was ever invoiced**, so no payment system can
confirm anything is open. **Shopify was reachable and reports 0 orders
all-time**, which rules out an order-based sale and says nothing about this job.

**Worth stating because it is the ninth day of it: the blocker is not the
connector.** Even a working Stripe would return nothing, **because nobody set a
price.** That has been this task's next action since 2026-10-13.

- **Status unchanged: Awaiting Owner** · **Next action** — **price it**, then
  send **A-20 draft 2**. **If the owner wants the offered datalog review billed,
  draft 2 should be deferred until the price exists** — that caveat is in the
  packet.

## T-38 — GDOT access review: right-in/right-out on the Colbert shop site

- **Objective** — Keep a live state-agency permit review moving, and get the
  revised access layout decided before any survey or civil-design money is
  spent.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. Gmail thread
  `1a0cf82b91d1352c`, 4 messages, 2026-09-23 → 2026-10-06.
- **Workstream** real estate · **Priority** High · **Owner** **Owner** · **Due**
  2026-10-10 for the reply; GDOT set no deadline
- **The project, as the thread describes it** — parcel **0059 038, 0 Highway 72
  W, Colbert, GA 30628**. A proposed **36 ft × 50 ft owner-occupied Down Dirty
  84 automotive tuning/dyno shop**, bay-door and customer side facing SR 72, a
  24-foot conceptual connection at the apparent existing apron, railroad
  corridor behind the site. **None of this appeared anywhere in this register
  before today.**
- **Counterparty** — Nakia Nembhard, Civil Engineer 3, GDOT District 1 Traffic
  Operations, Gainesville. Cc Hunter Boyle. Office (770) 533-8496.
- **Approval class** — Replying is **C** (external communication to a state
  agency), covered by the pending **A-15**. Paying for a survey or civil design
  is **E** and has no packet.

### What GDOT actually said, 2026-10-06T22:04:31Z

Quoted rather than paraphrased, because the constraint matters:

> "Currently the plan needs a bit more detail to give a full in depth review. If
> the plans of the driveway that is being proposed can meet all GDOT
> requirements we should not have any issues permitting. **Due to the median in
> the state route a right in right out will be the only permittable driveway for
> that property.**"

**Two things follow, and they pull in opposite directions.**

1. **The permit is not in doubt** — "we should not have any issues permitting"
   is as encouraging as a reviewer gets before seeing a full plan set. The
   owner's 2026-10-06 message explicitly wanted this answer _before_ paying for
   survey or civil design. **That gate has opened.**
2. **Right-in/right-out excludes left turns out of the site.** The concept
   submitted on 2026-09-24 did not assume that. For a shop where customers
   arrive in modified vehicles and sometimes on trailers, **how traffic actually
   enters and leaves is a design question the owner has to answer**, not a
   detail to hand a surveyor.

- **The checklist attachment is UNREAD.** `D1TO Full Permit Review V1.7.pdf`
  arrived with that message. No attachment-download tool is loaded in this
  session, so **its contents are unknown and are not guessed.** Reading it is
  step 1 — it defines what the next submission must contain.
- **Thread hygiene finding** — the thread carries the label
  `[Superhuman]/AI/Waiting`. **It is not waiting any more.** A stale label on a
  permit thread is worse than none, because it is trusted. Proposed relabel to
  `DD84 Dyno Facility Outreach` (13 messages, same project); **not applied** —
  Class B, no taxonomy approval exists.
- **Cost and risk** — No cost to reply. **The money at stake is the survey and
  civil design**, figures **not recorded** — nobody has quoted them. The risk of
  delay is that a favourable reviewer's attention is a perishable asset, and the
  message has already sat unread for 42 hours.
- **Execution steps** — (1) Read the checklist PDF; (2) owner decides the
  revised right-in/right-out layout and what it does to the bay-door
  orientation; (3) send the reply in A-15, which asks the three questions that
  determine the surveyor's scope; (4) raise an **E** packet for the survey and
  civil design once their cost is quoted; (5) establish whether railroad
  coordination runs before or in parallel.
- **Completion proof required** — GDOT's written answer to the three questions,
  and a revised concept sheet showing right-in/right-out.
- **Status** **In Progress** · **Next action** — Step 1, then A-15.

## T-39 — Reschedule the missed Georgia SBDC session

- **Objective** — Recover a free advisory relationship that is directly on point
  for financing the shop building.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. Gmail `1a112caffaba4e6d`.
- **Workstream** finance · **Priority** Normal · **Owner** **Owner** · **Due**
  2026-10-10
- **The finding** — `djones@georgiasbdc.org`, 2026-10-06T19:56Z, marked
  IMPORTANT and read: _"We had a meeting scheduled for today at 3:30 pm. If you
  would like to reschedule, please use the Calendly link below."_ **The meeting
  was missed and the reply is two days overdue.**
- **Why it is worth a task rather than a shrug** — the Georgia SBDC is free,
  state-funded, and advises on exactly the two things in front of this business:
  financing a building and what a lender expects to see. T-38 is a shop site and
  there are **two unsent drafts to an SBA 504 lender** sitting in the mailbox
  (T-42). The session is the cheapest input available to either.
- **Approval class** — **C** to reply, covered by pending **A-15**. **Booking
  the slot is the owner's** — this routine does not write to the calendar, and
  the draft deliberately says the owner will book rather than proposing a time.
- **Cost and risk** — No cost. The risk of leaving it is that advisers stop
  chasing no-shows.
- **Completion proof required** — A booked Calendly slot, visible on the
  calendar.
- **Status** Awaiting Approval · **Next action** — A-15, then the owner books.

### 2026-10-13 — the missed appointment is confirmed from the calendar

Until now this task rested on **the adviser's chasing email** — good evidence
that a meeting was missed, but secondhand. **Google Calendar, read at
2026-10-13T11:15Z, confirms the appointment directly:** a 30-minute Microsoft
Teams meeting on **2026-10-06, 19:30–20:00Z**, booked through Calendly on
**2026-10-02**, **organised by the SBDC adviser**, with **both attendees marked
`accepted`** and status `confirmed`.

**So the meeting was real, was accepted, and was not attended.** That is firmer
than the register had it, and **it makes the unsent reschedule reply worse, not
better**: a free advisory session was booked, agreed and missed, the adviser
chased once, and **the reply has been written and unsent for seven days**
(A-15).

**The adviser's name, email address and phone number are in that calendar entry
and are deliberately not copied here** — §5, and **A-17 is already with the
owner on exactly this category.** The appointment is identified by its date and
time, which identifies nobody.

- **Status unchanged: Awaiting Approval (A-15).** · **Next action unchanged** —
  approve A-15 and send. **Nothing in this task needs more evidence; it needs a
  send.**

## T-40 — Google Play developer account at risk of closure

- **Objective** — Keep or deliberately abandon a developer account, rather than
  losing it to a clock nobody is watching.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. Gmail `1a116c8c96396572`,
  2026-10-07T14:33Z.
- **Workstream** ops · **Priority** Normal · **Owner** **Owner** · **Due**
  **2026-12-06** (60 days from notice, per the email)
- **The finding** — _"Your developer account is at risk of being closed because
  it's not being used… You have 60 days to fix issues with your Play Console
  developer account, Down Dirty 84."_
- **What is not known, and is not guessed** — what the account was for, whether
  anything was ever published to it, and whether DD84 wants it. **The register
  and `ventures.md` do not mention a mobile app anywhere.** This may well be
  worth letting lapse; that is a decision, not a default.
- **Approval class** — A to investigate. Any action inside the Play Console is
  the owner's.
- **Cost and risk** — No cost either way. The risk is a 60-day clock on an asset
  of unknown value, which is precisely the kind of deadline that is remembered
  on day 59.
- **Completion proof required** — A recorded decision: keep and remediate, or
  let it close.
- **Status** Planned · **Next action** — Owner says whether the account matters.
  If it does not, close this as **No Action** with that reason rather than
  letting it expire silently.

## T-41 — Two r/LSSwapTheWorld lead candidates

- **Objective** — Convert two warm strangers into a qualified enquiry, or decide
  deliberately not to.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. Reddit notifications
  `1a11ba74d5e738c8` (2026-10-08) and `1a1116eadb1da434` (2026-10-06/07).
- **Workstream** sales · **Priority** Normal · **Owner** **Owner** · **Due** not
  set
- **The two**
  - **u/Traveller930** — after DD84 advised buying on condition rather than
    mileage and checking compression/leakdown, replied _"I will be in touch! Im
    not far off in NC either, thank you!"_ **They volunteered to make contact.**
  - **u/CausionWitFlossin** — DD84 advised chasing the main power path before
    buying a starter or changing the tune on a dead dash. They reported back:
    _"So it was my starter wires man… the guy that swapped my engine and
    installed harness did so much cuts n everything."_ **The free diagnosis was
    correct, and the vehicle has a botched third-party harness** — which is
    DD84's _Wiring & EFI power diagnostics_ service, $75–$250.
- **Every §8.1 field except the handle is missing** — no name, email, phone,
  vehicle, engine, transmission, location beyond "NC", service request or
  budget. **Recorded as missing, not inferred.**
- **Approval class** — **C to contact.** No message is drafted here.
- **The restriction that decides the approach** — `ventures.md`: technical
  forums generally ban unmarked solicitation; lead with the answer, disclose the
  commercial interest, link only when relevant. **DD84 has already led with the
  answer in both threads, which is the right order and the reason these two are
  warm at all.** A cold DM pitch would spend that credibility.
- **Cost and risk** — No cost. The risk is a subreddit ban for solicitation,
  which would close a channel that is currently producing the only inbound
  interest DD84 has.
- **Completion proof required** — Either a contactable enquiry with the §8.1
  fields filled, or a recorded decision not to pursue.
- **Status** Planned · **Next action** — Owner decides whether and how to follow
  up. **Worth asking u/CausionWitFlossin nothing at all and simply leaving the
  correct answer standing** — it is already the best advertisement in the
  thread.

### A third handle, 2026-10-09 — and an objection worth more than the lead

**u/thatguy-\_-0**, r/LSSwapTheWorld, 2026-10-08T18:41Z. **2000 GMC Sierra**,
planning a **street 6.0**. After DD84 asked what year the Sierra was, they
replied: _"Thank you I appreciate that. My truck is 2000. But I'm not sure if
it's possible I'm located at Riyadh, Saudi Arabia."_ Contact, transmission,
current modifications and budget are all **missing**, and whether the truck is
in Saudi Arabia or the US is **not established**.

**The objection is the finding.** They assumed distance made DD84's help
impossible — for a business whose catalogue is mostly **remote**: tune file
review ($99/$149/$199), remote tune readiness review ($49/$75), shop-to-shop
support ($150/$250/$350). **A prospect concluding "not possible" about a remote
service is a positioning problem, not a logistics one.**

**Three handles in three days, all from one subreddit, every one produced by
DD84 answering a technical question for free.** That is now the only inbound
channel this record has any evidence for, against `ventures.md` recording the
channel that produced the three paying customers as `UNKNOWN`. **Worth telling
Rev** — with the restriction attached: forums ban unmarked solicitation, and
DD84's standing there comes precisely from answering without pitching.

**Export control is an open question nobody has checked**, not an obstacle:
whether calibration files may be sent to Saudi Arabia is a compliance question
for counsel, not for an agent. Recorded now so it is not discovered after a
payment.

### Handles four and five, 2026-10-12 — and the channel now has a clock on it

Both from r/LSSwapTheWorld, both mid-diagnosis, **both still identified by
handle alone**:

- **u/combustable_lemons3**, 2026-10-12T14:20Z — LS swap with a **shortened
  harness**, **no-start, cranking at roughly 300 rpm**. DD84 advised verifying
  injector power in RUN and START and checking for pulse; they replied _"I can
  get them to fire manually if I use my scanner."_ **A non-running vehicle with
  a butchered harness is squarely DD84's _Wiring & EFI power diagnostics_
  service at $75–$250** — the same shape as u/CausionWitFlossin, and this one is
  **still down**. **The closest thing to a qualified lead in this register.**
- **u/Ill_Relationship_365**, 2026-10-12T17:15Z — **2WD** truck, LS swap
  planned, **power goal not stated**. DD84 advised making shops quote the same
  engine/transmission package and **itemise wiring and fuel separately**; they
  replied _"2WD, thanks this was in my brain but i will ask specifically."_
  **Actively collecting quotes right now**, which is a timing signal and not a
  request.

**Every §8.1 field except the handle is missing for both.** Recorded as missing.

**Five handles in six days, and every one was produced by DD84 answering a
technical question for free.** Nothing else in this record has produced a single
inbound enquiry. `ventures.md` still records the channel behind DD84's three
paying customers as `UNKNOWN` and paid advertising as never used.

**And that is now urgent rather than merely notable: Reddit has flagged the
account for automated activity with a seven-day deadline (T-60).** The only
demand source this business can demonstrate has a clock on it, roughly to
2026-10-19. **T-60 is a prerequisite for this task, not a neighbour of it.**

- **Status unchanged: Planned.** **Nobody has been contacted** — all five remain
  uncontacted, contacting any of them is Class C, and the forum restriction
  holds: lead with the answer, disclose the interest, do not pitch into a
  technical thread. · **Next action** — **clear T-60 first.** Then the owner
  decides on u/combustable_lemons3, who is the one with a dead truck.

## T-42 — Fourteen unsent drafts, five of them to likely loan fraud

- **Objective** — Clear a backlog of prepared-but-unsent work, and get five
  risky drafts looked at before any of them is sent.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. `mcp__Gmail__list_drafts`.
- **Workstream** ops · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-10
- **The finding** — **14 drafts, none sent.** Metadata only was read; **no draft
  body was opened.**
  - `grecmail@grec.state.ga.us` — Georgia Real Estate Commission, created
    **2026-10-08T15:30:55Z**, roughly 25 seconds before the daily brief read the
    mailbox. **Today's, and unsent.**
  - `TChristopher@gacdc.com` cc `Loans@gacdc.com` — Georgia CDC, an SBA 504
    lender. 2026-09-29, **9 days unsent.** Directly relevant to T-38 and T-39.
  - `ericw@keensbuildings.com` — steel buildings, 2026-09-29. On point for the
    36 × 50 shop.
  - `clientservice@legalplans.com` — 2026-09-25.
  - **Five to consumer free-mail addresses** — `lenderbright006@gmail.com` ×2,
    `legendgrowth6@gmail.com`, `ewhere261@gmail.com`,
    `ayubagoodness377@gmail.com`.
  - Five self-addressed drafts, 2026-08-19 and 2026-09-04. Probably notes.
- **The risk, stated carefully** — those five have **the shape** of advance-fee
  loan fraud: lender-sounding names on consumer Gmail accounts. **Torque has not
  read them and makes no accusation about any specific sender.** The reason it
  is High rather than Normal is the combination: a business actively seeking
  building finance (T-38, T-39, the GACDC drafts) is the exact target profile
  for that fraud, and there are five replies half-written.
- **Approval class** — Reviewing is A. **Sending any of these is C**, and none
  is covered by A-15, which covers only the two drafts written today.
- **Cost and risk** — No cost to review. The downside of an advance-fee scam is
  money out the door and bank details disclosed.
- **Completion proof required** — Each of the 14 either sent (under its own
  approval), deleted, or recorded as deliberately parked.
- **Status** **Awaiting Owner** · **Next action** — Owner reads the five
  free-mail drafts first. **The GACDC one is the opposite problem** — a real
  lender, nine days waiting.

## T-43 — `downdirty84llc.com` is live and absent from the venture registry

- **Objective** — Establish what DD84's web estate actually is, so the registry
  stops describing part of it.
- **Source** — `/dd84-inbox-intake`, 2026-10-08. Google Search Console
  notification `1a1154876e345907`, 2026-10-07T07:33Z: _"New reasons prevent
  pages from being indexed on site **downdirty84llc.com**"_, reason "Alternate
  page with proper canonical".
- **Workstream** ops · **Priority** Normal · **Owner** **Owner** · **Due** not
  set
- **The finding** — `ventures.md` records the front door as **`dd84tuning.com`**
  (a Manus site) with Shopify behind it, and `shop.downdirty84llc.com` as the
  Shopify domain. **`downdirty84llc.com` as a site in its own right, verified in
  Search Console, appears nowhere.** Search Console does not report on sites
  nobody owns.
- **Why it is an ops task and not a marketing one** — the registry's accuracy is
  the issue. **The SEO substance belongs to Rev**, and `docs/agents/ventures.md`
  is Rev's file: Torque reads across the two records and does not write across
  them. **Nothing was changed in `ventures.md`.**
- **This compounds an existing hole.** `ventures.md` already names the Manus
  site's analytics as "the most valuable unknown in this file", unreadable
  because the domain is blocked by this environment's egress proxy. **There are
  now at least three domains and readable analytics for none of them.**
- **Cost and risk** — No cost. The risk is that any traffic claim about DD84 is
  measured on the wrong surface, which `ventures.md` already records happening
  once on 2026-08-03.
- **Completion proof required** — A list of DD84's live domains, what each
  serves, and which has analytics — handed to Rev for the registry.
- **Status** Planned · **Next action** — Owner confirms what
  `downdirty84llc.com` is.

### 2026-10-13 — confirmed as a working lead-capture surface, by the owner's own test

**Thread `1a130a7e1ee4d5f5`, 2026-10-12T15:07:49Z, from
`no-reply@downdirty84llc.com`** — a contact-form submission reading
**"DD84-WEBSITE-QA-20261012-PHONE Owner-authorized website test only. Verify
delivery of the…"**.

**This is evidence, not an inference.** The domain is live, it has a contact
form, and **the form delivers into the business inbox** — proven by a submission
the owner made himself and labelled as a test. Nothing here was inferred from
Search Console.

**What it upgrades.** T-43 opened as "a domain appears in Search Console and in
no DD84 record". It is now **a functioning lead-capture surface absent from the
venture registry** — which is a materially worse gap, because an unrecorded
domain that merely exists leaks nothing, and one that **collects enquiries** can
collect them where nobody is watching. **Who monitors those submissions is not
established.**

**The hole also got bigger the same day.** T-62 records **Vercel reporting three
misconfigured domains on one project** — a hosting platform `ventures.md` never
mentions. So the count now stands at **`dd84tuning.com` (Manus, egress-blocked),
`shop.downdirty84llc.com` (Shopify), `downdirty84llc.com` (live, with a working
form), plus three Vercel domains of unknown identity** — and **readable
analytics for none of them.**

- **Status unchanged: Planned**, because the completion proof is a list of every
  live domain and what each serves, and that list is now **longer and less
  complete than it was yesterday.** · **Next action** — fold T-62's domain list
  into this one, then hand the whole estate to Rev for the registry. **The SEO
  and marketing half is still Rev's; `ventures.md` and `docs/growth/` were not
  written to.**

### 2026-10-14 — the form was never the problem; nobody reading it was

**T-66 found a real customer enquiry delivered by this contact form on
2026-09-15 and answered 23 days later.** That changes what this task is about.

**This task's two prior findings were both true.** The domain was live and
absent from the registry. The form was confirmed working on 2026-10-12 by the
owner's own QA submission. **The conclusion drawn from them was wrong in the way
that mattered: the form was treated as a newly discovered surface needing
verification.** It was neither new nor unverified — **it had been delivering
real enquiries for a month, and nobody was reading them.**

**A delivery test proves delivery. It cannot prove anyone is watching the inbox
it delivers to**, and this record took the one as evidence of the other. **That
is the more expensive fault of the two**: a broken form loses leads visibly, a
working unwatched one loses them silently and looks healthy the whole time.

**How many submissions arrived before 2026-09-15 is unknown.** Mail older than
the intake windows has never been assessed and **~20,700 unread messages
remain.** T-66 step 2 is the count.

- **Status unchanged: Planned.** · **Next action, revised** — the domain list is
  still wanted (with T-62's Vercel domains), **but the live question is now who
  reads the form's output and how often.** That is T-66, and it outranks the
  registry gap.

## T-44 — One inbox query is not an intake; fix the routine's search

- **Objective** — Stop the intake routine from missing real work on a mailbox
  this noisy.
- **Source** — `/dd84-inbox-intake`, 2026-10-08, failing at its own job and
  noticing.
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-10-15
- **The finding, which is about the routine and not the mailbox** — the first
  query of the run, `in:inbox newer_than:2d`, returned 25 threads of which **not
  one was from a human**. A second query, `category:primary`, surfaced an active
  customer tuning job (T-37) and a state-agency permit response (T-38) — the two
  most valuable items in the mailbox, **both inside the same two-day window the
  first query had supposedly covered.**
- **Why it happened** — ~201 inbox threads arrive in two days and the great
  majority are marketing. A 25-result page sorted by recency is all marketing.
  The mailbox holds **22,192 threads and 20,756 unread**;
  `[Superhuman]/AI/ Marketing` alone carries 1,627 messages.
- **The fix, which is cheap** — amend `.claude/commands/dd84-inbox-intake.md` so
  the discovery step runs **several targeted queries rather than one broad
  one**: `category:primary`, `is:important`, `in:sent` for threads awaiting a
  reply, the existing `[Superhuman]/AI/Respond` and `/Waiting` labels, and only
  then a general sweep. **Also add a draft-backlog read** — `list_drafts` found
  T-42, and the routine never asked for it.
- **Cost and risk** — None. The risk of not doing it is that the next intake
  reports "no customer threads" on a mailbox containing a live customer job,
  which is the failure the routine's own contract calls worse than no routine.
- **Completion proof required** — The amended command file, and one intake run
  that surfaces T-37's thread from the primary sweep rather than from a
  follow-up query.
- **Status** Planned · **Next action** — Amend the command file. **This is the
  routine's first real run and it found a defect in itself; that is the run
  working, not failing.**

---

## T-45 — GREC will not interpret the law; the licensing question is open

- **Objective** — Get a defensible answer to whether the Georgia Opportunity
  Ledger requires a real estate broker's licence, before it takes a payment.
- **Source** — `/dd84-inbox-intake`, 2026-10-09. Gmail thread
  `1a11c2392eaa6b20`, 2 messages.
- **Workstream** compliance · **Priority** **High** · **Owner** **Owner** ·
  **Due** 2026-10-16 (proposed — nothing external sets a date)
- **Approval class** — **G (legal/regulatory).** **A-06 already approves
  engaging counsel**, so no new packet is needed to ask a lawyer. Filing a
  formal request with a state commission is also G and is the owner's.
- **What happened** — the GREC guidance request that yesterday's intake found
  sitting as an **unsent draft** (T-42) was sent on 2026-10-08T15:54Z. It is a
  precise letter: what the service does, what it does not do, the $15/$39/$99
  tiers, and five numbered questions. GREC replied at 18:59Z, in full:

  > "You would need to refer to license law 43-40-18, 43-40-30, and 520-1-12 all
  > laws regarding Brokerage business and activities. We don't have any legal
  > team on staff, and I can't interpret the law."

- **Why that is not an answer, in three parts**
  1. **None of the five questions was addressed.**
  2. **Question 5 was the one that mattered and was ignored** — whether a formal
     advisory opinion or declaratory ruling procedure exists. **That is the
     route to a binding answer and it remains unknown.**
  3. **The citations do not match the questions.** The letter asked about
     **O.C.G.A. 43-40-1** and **Rule 520-1-.09**; the reply names **43-40-18,
     43-40-30 and 520-1-12**. Whether that is a redirection, a correction or a
     generic pointer **is not Torque's to decide.**
- **Torque has made, and will make, no determination.** No statute was read,
  interpreted or summarised beyond quoting GREC verbatim. Spec §14: organise the
  facts and deadlines, recommend professional review, make no determination.
  **Do not let a later session treat the three citations as a finding about what
  the law requires** — they are a quotation of what a state employee wrote.
- **How this relates to what is already approved** — **A-06 was approved
  2026-08-10** to engage counsel for the Ledger's legal documents, and T-13 has
  sat Blocked on the owner actually engaging someone. A **Hawkins Law client
  portal invitation has been unactivated since 2026-10-08T13:39Z**. If that is
  counsel, **this question should go first**: the document review asks whether
  the copy is fit to publish, and this asks whether the product may operate at
  all. **Whether Hawkins Law is that engagement is unconfirmed** — it is a
  question for the owner, not an inference.
- **Cost and risk** — Counsel fee **not recorded**; nobody has quoted one, and
  A-06 says the same. The risk of proceeding without an answer is operating an
  unlicensed brokerage activity if the analysis goes the wrong way — which is
  why the owner asked before taking a payment, and that instinct was right.
- **What is not at risk today** — the Ledger **has no subscribers, is not
  deployed and has taken no payment**. There is no live exposure, only a launch
  blocker. **That is the honest framing and it should lead, not the statute
  numbers.**
- **Execution steps** — (1) Owner confirms whether Hawkins Law is engaged
  counsel; (2) put this question to counsel ahead of the document review; (3)
  separately, establish whether GREC has a declaratory-ruling procedure — that
  is a factual question staff can answer and question 5 did not get picked up;
  (4) record counsel's written answer here.
- **Completion proof required** — A written answer from counsel, or a formal
  GREC ruling. **Not a reading of the statutes by an agent or by the owner.**
- **Status** **Blocked** (on engaging counsel) · **Next action** — Step 1.

## T-46 — Webador annual invoice will auto-charge; amount unknown

- **Objective** — Know what is about to be charged, and decide whether to keep
  paying for it, before the money leaves.
- **Source** — `/dd84-inbox-intake`, 2026-10-09. Gmail `1a11ee03ed9d14b8`,
  2026-10-09T04:16Z.
- **Workstream** finance · **Priority** Normal · **Owner** **Owner** · **Due**
  2026-10-12 (proposed, ahead of an unknown charge date)
- **The finding** — _"The 2026-1408429 invoice for Down Dirty 84 LLC is attached
  as a PDF. **This invoice will be charged to your saved payment method
  automatically.**"_
- **The amount is UNKNOWN and is not estimated.** It is in the attached PDF, and
  **no attachment-download tool is loaded in this session.** Webador's published
  pricing was not looked up, because a published price is not this invoice.
  **Unknown is not zero and it is not a guess.**
- **The charge date is also unknown** — the email does not state one.
- **Why it is worth a task** — a business that has **collected nothing since
  2025-09-12** is about to pay an annual hosting bill automatically. That may be
  entirely correct. It should be a decision.
- **It may also answer T-43.** `downdirty84llc.com` appears in Search Console
  and in no DD84 record. **Hypothesis, labelled as one: Webador hosts it.** The
  invoice body names no domain, so this is **not established** and must not be
  recorded as fact.
- **Approval class** — A to read and report. **Cancelling a subscription or
  disputing a charge is E** and would need its own packet.
- **Cost and risk** — Cost **not recorded**. The risk is small in money and real
  in principle: an automatic renewal nobody has looked at.
- **Execution steps** — (1) Owner opens the PDF and records the amount and
  renewal date here; (2) establish which domain it hosts, closing or informing
  T-43; (3) decide keep or cancel. If cancel, raise an E packet.
- **Completion proof required** — The amount and renewal date recorded, and a
  keep-or-cancel decision.
- **Status** **Awaiting Owner** · **Next action** — Step 1. **An agent cannot
  read the attachment; this one genuinely needs your eyes.**

### 2026-10-16 — an auto-charge against an overdrawn account

**T-71**: the business account held a **negative available balance** as of
2026-10-15T13:05 Eastern, and **two payments declined that evening** — one to a
subscription service at 18:33Z and, earlier, the transfer in T-49.

**This invoice auto-charges and its amount is still unknown.** Those two facts
were separately tolerable. Together they are not: **an unknown charge is due to
try itself against an account that has just failed two payments.**

**Three outcomes, none of them good, and no prediction between them** — it
succeeds and deepens the overdraft; it fails and the hosting lapses; or it fails
and adds a decline fee on top of an overdraft fee. **Which one depends on the
amount, the timing and the account's grace terms, and this record knows none of
the three.**

**The cheap move is still the one this task has always asked for: read the
invoice.** It is now worth doing **before** the charge rather than after, which
is a change of urgency and not of action.

- **Status unchanged: Awaiting Owner**, **but it belongs in the same sitting as
  T-71.** · **Next action** — read the amount and the date; then decide whether
  to stop the charge, which is Class E and the owner's.

## T-47 — Two Google Business Profiles for one business

- **Objective** — Establish whether DD84 has duplicate local listings, and
  consolidate if so.
- **Source** — `/dd84-inbox-intake`, 2026-10-09. Two September performance
  reports, `1a11fa217b421ec7` (07:47Z) and `1a11f83e578df80a` (07:14Z).
- **Workstream** ops · **Priority** Normal · **Owner** **Owner** · **Due** not
  set
- **The finding** — two reports arrived 33 minutes apart for names that differ
  only in capitalisation, with **different numbers**:
  - **"DOWN DIRTY 84 LLC"** — **4 people viewed** last month
  - **"Down Dirty 84 llc"** — **40 people viewed** last month **Different counts
    mean different listings**, not one email delivered twice. That is the whole
    basis for this task and it is a solid one.
- **Why it matters** — a duplicate listing splits impressions, reviews and map
  presence between two records, and Google may suppress one. For a business
  whose only verified audience figures are these two numbers, **the larger
  listing is 90% of the visibility and the smaller one may be eating the rest.**
- **These are also the first real DD84 audience numbers in this record.** Every
  traffic figure in `ventures.md` is Shopify's, measured on what that file
  itself calls the wrong surface. **44 views across two profiles in a month is a
  small number from a live system, which beats a large number from none.**
- **Where this belongs** — **the marketing substance is Rev's.** Nothing was
  written to `docs/growth/` or to `ventures.md`. This task is the ops half:
  establish how many listings exist and which is authoritative.
- **Approval class** — A to investigate. **Merging or closing a Google Business
  Profile is F** (a live public account) and needs a packet.
- **Cost and risk** — No cost. The risk of leaving it is a permanently split
  local presence, which is slow and invisible.
- **Execution steps** — (1) Owner lists the Business Profiles on the account and
  confirms whether both are DD84's; (2) record which is authoritative and both
  view counts, with the read date; (3) hand the consolidation and the local-SEO
  question to Rev; (4) raise an F packet before merging or closing anything.
- **Completion proof required** — The number of profiles, named, with view
  counts and a read date; and a recorded decision on which survives.
- **Status** Planned · **Next action** — Step 1.

## T-48 — Customer identity is in a public repository, and in its history

- **Objective** — Get customer identity out of a world-readable repository, and
  get an owner decision on the two files an agent must not quietly edit.
- **Source** — `/dd84-inbox-intake`, 2026-10-09, finding its own previous run's
  output in breach of a rule that landed overnight.
- **Workstream** compliance · **Priority** **High** · **Owner** **Owner** ·
  **Due** 2026-10-10
- **Approval class** — Redacting the register and a dated brief is **A**, within
  their own write modes. Editing `OPERATING-LOG.md` or an approval packet is
  **not** — raised as **A-16**, **approved Option A 2026-10-09 and executed**.
- **Why this is In Verification and not Done** — the current files are clean and
  that is verifiable, but **the task's objective was to get customer identity
  out of a world-readable repository and that has not been achieved.** The
  history still carries it. **Do not close this on the redaction.**

### What happened, in order

1. **2026-10-08, 16:04Z** — the first intake run recorded the C10 customer's
   **full name, personal email address and mobile number** in
   `TASK-REGISTER.md`, the intake brief, `OPERATING-LOG.md` and `APPROVALS.md`.
   `ventures.md` §23 already said customer detail stays out of version control;
   **this run put it in.**
2. **2026-10-08, ~23:00Z** — A-13 closed as Option 3 and a standing rule landed
   in `CLAUDE.md` §5: the repository is **public by decision**, and **"never add
   customer names, email addresses, phone numbers or payment details … customer
   identity is not [accepted], and the decision does not extend to it."**
3. **2026-10-09, 10:30Z** — this run found the conflict and redacted what it
   could.

**The rule did not exist when the breach happened**, so this is not a violation
of an instruction in force at the time. **It is an exposure now**, and the rule
anticipates exactly this: "A-13 covers what was exposed on 2026-10-08, not
whatever gets added later."

### What is done, and what is deliberately not

| File                                | Write mode                      | State after A-16                                                        |
| ----------------------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| `TASK-REGISTER.md`                  | Edit in place                   | **Clean.** 1 further site found and removed under A-16                  |
| `briefs/2026-10-08-inbox-intake.md` | Dated output                    | **Clean.** 7 further sites found and removed under A-16                 |
| `OPERATING-LOG.md`                  | **Append-only**                 | **Clean**, 4 sites, **with a visible inline redaction note** in OL-0031 |
| `APPROVALS.md` (A-15 body)          | Append; **Response block only** | **Clean**, 1 site, **with a visible inline redaction note**             |

**Breaking one hard rule to satisfy another is not an agent's call.** Both the
append-only log and the edit-once packet exist to stop records being quietly
rewritten, which is precisely what a redaction is. **A-16 asked the owner, and
the owner approved Option A on 2026-10-09.** Executed the same day; see OL-0036.

### The two "already redacted" files were not redacted

Rows 1 and 2 above were recorded as **done** when A-16 was raised. **Both still
carried the customer's first name — eight sites between them.** The first pass
removed the full name, the email address and the phone number and left every
bare first name in place.

**The cause was A-16's success test**, which was a `grep` for an email address
and a phone number. A first name is neither, so the tree tested clean while
eight sites still named the customer. **§5 lists names first** of the four
things it forbids, and a name is the one of the four you cannot grep for without
already knowing it. The lesson is the same one T-27 taught in a different
costume: **a success test narrower than the rule it is testing reports success
early.** T-51's packet carries a non-grep success test for that reason.

### The part that matters most

**Redaction does not unpublish anything.** The name, email and mobile number
remain in the git history of a **public** repository, in commits `dbd6c21`
through `cb35580`. Removing them needs a history rewrite — which CLAUDE.md
forbids on this branch, and which this environment's proxy refuses in any case
(OL-0026, OL-0027). **This is the same trap A-13's Option 2 analysis named:
deleting a table from a file does not remove it from a public history.**

**So the honest position is: the current files are clean, the history is not,
and only the owner can decide what to do about that** — accept it as A-13
accepted the revenue figures, or treat it as the new category of sensitive
material the rule says needs its own decision.

### What is not exposed, stated as plainly as what is

**No credentials, no API keys, no payment details and no tune files.** One
customer's name, personal email and mobile number, and the vehicle they own.
**No other customer's identity is in the repository** — and that is because
nothing else had been intaked yet, not because anything prevented it.

- **The adjacent judgements, flagged rather than acted on** — the repository
  also carries a **named GDOT engineer with her office phone**, and **the
  owner's own name and mobile** in the A-15 draft signatures. Neither is a
  customer. A public official's work contact on a government signature block and
  the owner's own details are different in kind from a customer's mobile number,
  so **neither was redacted** — but the owner should say whether they agree.
- **What changed in practice** — today's intake writes **no customer identity at
  all**: handles and Gmail thread IDs only. **A thread ID is a pointer, not an
  identity**, and it is enough for anyone with mailbox access to find the
  person. **That is the pattern every future intake should use**, and it belongs
  in the command file alongside the T-44 fix.
- **Cost and risk** — No cost. The risk is one real person's contact details
  being world-readable and search-indexable, attached to their vehicle and a
  fault on it.
- **Completion proof required** — `grep` over the tracked tree returning no
  customer email or phone number (**already true**), plus a recorded owner
  decision on the log, the packet and the history.
- **Status** **Awaiting Owner** · **Next action** — A-16.

---

## T-49 — A bank transfer was declined on 2026-10-05

- **Objective** — Find out what failed, how much, and in which direction, before
  it fails again or means something worse.
- **Source** — `/dd84-cash-review`, 2026-10-09. Gmail `1a10d796458de156`,
  `service@paypal.com`, 2026-10-05T19:10:17Z, **unread**.
- **Workstream** finance · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-09
- **The finding, quoted** — _"Your bank declined your electronic funds transfer.
  You recently attempted to transfer funds from your bank account. Your bank
  has…"_ The snippet truncates there and the message has not been opened.
- **What is unknown, and is not guessed** — **the amount, the direction, the
  bank, and the reason.** All four are in the unread message or in PayPal, and
  **no bank connector exists on this account.** PayPal itself dropped to "needs
  re-authentication" during this run, so it could not be asked either.
- **Why it is High rather than Normal.** A declined ACH is one of two things: a
  bank-side block, or insufficient funds. **Torque cannot distinguish them and
  will not try.** Against a business with **no verifiable revenue since
  2025-09-12** and an annual hosting charge inbound on an unknown amount (T-46),
  either reading matters. If it is insufficient funds, the Webador auto-charge
  may fail too.
- **Approval class** — **A to read.** Any remedial transfer, retry or account
  change is **E** and needs a packet.
- **Cost and risk** — **not recorded.** The risk of leaving it is a second
  failure, a bank fee, or a declined charge on a service DD84 depends on.
- **Execution steps** — (1) Owner opens the email and records amount, direction
  and stated reason here; (2) check whether the transfer has since succeeded;
  (3) if it was insufficient funds, check it against T-46's inbound charge; (4)
  raise an E packet for any corrective transfer.
- **Completion proof required** — The amount, direction and reason recorded, and
  the current state of that transfer.
- **Status** **Awaiting Owner** · **Next action** — Step 1. **An agent cannot
  read a bank; this one needs your eyes and takes a minute.**

### 2026-10-16 — a probable cause, from the other end

**T-71 records that the business account carried a negative available balance as
of 2026-10-15T13:05 Eastern.** A transfer declining on 2026-10-05 fits that
plainly.

**Stated as probable, not established.** No bank connector exists, **no
transaction list was read**, and a transfer can decline for a limit, a hold, a
mismatched detail or a fraud block as readily as for insufficient funds.
**Eleven days separate the decline from the balance alert**, and nothing read
this run links them.

**What it changes is the order of work, not the diagnosis.** This task has sat
unread for six days as "a declined transfer, cause unknown"; it is now **one
line in a cash picture** and should be read together with T-71 rather than
chased on its own. **T-71 step 2 — establishing how the account went negative —
answers this task as a by-product.**

- **Status unchanged: Awaiting Owner.** · **Next action** — read it inside T-71,
  not beside it.

## T-50 — HP Tuners Do Not Sell List — a partner obligation with a past effective date

- **Objective** — Establish who DD84 may not sell to, and whether it already
  has.
- **Source** — `/dd84-cash-review`, 2026-10-09. Gmail `1a10c967ba25d9b7`,
  `system@sent-via.netsuite.com`, 2026-10-05T15:02:24Z.
- **Workstream** compliance · **Priority** Normal · **Owner** **Owner** ·
  **Due** 2026-10-12
- **The finding, quoted** — _"Dear Valued HP Tuners Partner, Please find
  attached HP Tuners Do Not Sell List. This list becomes effective **NEXT DAY
  FROM RECEIPT at 12:01:00 AM**. The entities on the attached files are in
  violation of…"_
- **Why DD84 is bound by it** — `ventures.md` lists **HP Tuners** among DD84's
  capabilities, so DD84 is a partner this notice addresses. **The effective date
  has already passed** — the list took effect 2026-10-06 and today is
  2026-10-09, **four days of unknown obligation.**
- **The list itself is UNREAD.** It is an attachment, and no attachment-download
  tool is loaded in this session. **Who is on it is unknown and is not guessed
  at.**
- **What this is not** — not a cash figure, and not evidence that DD84 has done
  anything wrong. It is a supplier instruction whose contents nobody has
  checked. **The risk is partner standing, not money.**
- **Approval class** — A to read and cross-check. Any customer-facing
  consequence is **C**.
- **Cost and risk** — No cost. Risk: selling to a listed entity in breach of a
  partner agreement, which is the kind of thing that ends a tooling relationship
  rather than generating an invoice dispute.
- **Execution steps** — (1) Owner opens the attachment; (2) cross-check against
  DD84's customers and open work — **three known customers and one live job, so
  this is a short check**; (3) record whether any match exists; (4) if one does,
  stop and raise a packet before any further contact.
- **Completion proof required** — A recorded statement that the list was read
  and checked against DD84's customers, with the result.
- **Status** **Awaiting Owner** · **Next action** — Step 1.

## T-51 — Third-party contact details in a public repository

- **Objective** — Get an owner decision on contact details belonging to people
  who are **not** DD84 customers, and write the resulting rule into the intake
  routine so the question is settled rather than re-asked every weekday.
- **Source** — A full tracked-tree scan on 2026-10-09 while executing A-16. A-16
  was scoped to one customer; the scan was not.
- **Workstream** compliance · **Priority** Normal · **Owner** **Owner** ·
  **Due** 2026-10-13
- **Approval class** — **A-17 pending.** Redacting `TASK-REGISTER.md` and dated
  briefs would be Class A within their write modes, but **the decision of where
  the line sits is not an agent's**, and A-15's body is a sealed packet again.

### What is there

Nineteen items, in six categories, none of them a customer: **six named
officials' work addresses** (GDOT ×2, Georgia SBDC, GREC, Georgia CDC ×2), **two
named vendor-staff addresses**, **five consumer free-mail addresses** belonging
to inbound solicitors — the T-42 set, five of which are assessed as likely loan
fraud — **two published agency phone lines**, **the owner's own mobile** in two
draft signatures, and **four automated no-reply senders**. The full table, with
an assessment of each, is in A-17.

### Why it is Normal priority and not High

**Nothing here is a credential, a customer, or a payment detail.** Most of it is
already public: government staff addresses, agency information lines, no-reply
robots. **The weak point is the five consumer addresses** — private individuals'
personal accounts, and the fact that two of them appear to be running a loan
fraud is not a reason DD84 should be publishing where they live online.

T-48 was High because it was a paying customer's mobile number. This is not
that, and saying so is more useful than flagging everything at the same level.

### The thing to decide, in one sentence

**Is a named official's work email address "sensitive material" in the sense §5
means?** Say yes and the register gets vaguer about who said what, including in
A-15's drafts, which become hard to review without opening Gmail. Say no and the
five solicitor addresses need handling separately. A-17 recommends exactly that
split — Option A.

### What it does not fix

**No option removes anything from the git history.** Same limit as T-48, same
reason: history rewriting is forbidden on this branch and refused by the proxy.
Any option here cleans current files only.

- **Status** **Awaiting Owner** · **Next action** — answer **A-17**. **Due
  2026-10-13**, which is the next weekday intake after the weekend. **The stated
  consequence of missing it did not materialise** — see below.

### Measured 2026-10-21, and the due-date reasoning was wrong

The due date above was set on the argument that "past that the routine keeps
adding to the pile under no rule." **Eight days past it, the pile has not
grown.** 23 briefs committed since A-17 was raised added **zero** new consumer
free-mail addresses; the five still sit in the same two files. The full
measurement, its two consequences and its limits are in **A-17's Actual-result
block**.

**The date is not being moved.** It was missed, and re-dating it to make the
register look current would hide the one thing the measurement establishes:
**this task is overdue and it is also not urgent, and both are true at once.**
That is a different state from the other past-due items, and worth being able to
see. **The reason to answer A-17 is that the next intake run deserves a rule,
not that the exposure is widening.**

---

## T-52 — Phishing email impersonating Meta, unread and flagged important

- **Objective** — Get a credential-harvesting email out of the inbox before
  anyone acts on it, and establish whether anyone already has.
- **Source** — `/dd84-inbox-intake`, 2026-10-12. Gmail thread
  `1a120384795bc4cf`, received **2026-10-09T10:32:00Z**, **unread for 3 days**.
- **Workstream** compliance · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-12
- **Approval class** — A to read and report here. **Reporting or deleting the
  mail is a mail-state change and is the owner's** — Torque may not modify mail
  state without a taxonomy approval, and would not delete evidence anyway.
- **The message** — subject _"System Safety Hub – DOWNDIRTY84 - Ref:
  REF-KYJS1D"_. Body: _"Hello Admin, log in to finalize the system security
  check for DOWNDIRTY84"_ with a "Finalize System Check" link, then a footer
  giving Meta's Menlo Park address and an `unsubscribe@meta.com`.
- **Why it is phishing, from the message itself** — four independent tells:
  1. **The sender is an ordinary consumer Gmail address**, not a Meta domain.
  2. **The link targets a Google Forms page**, not Facebook. No real Meta
     security process collects an admin login on a Google form.
  3. Manufactured urgency with **no specific account, page or incident named**.
  4. Addressed to "Admin" generically while claiming to know the business name.
- **Why it is Critical rather than High** — **Gmail classified it IMPORTANT and
  CATEGORY_PERSONAL.** It is not in spam and not in promotions; it is sitting in
  the inbox looking like real mail, and it has been there three days. The whole
  risk is that it gets believed.
- **The URL is deliberately not recorded here.** This repository is **public**
  (CLAUDE.md §5) and reproducing a live phishing link in it would republish the
  attack. The subject line, Ref ID and timestamp are enough to find the message.
  **Torque did not click it.**
- **Cost and risk** — No cost. The exposure if it has been actioned is whatever
  was typed into that form, most likely a Facebook/Meta Business login.
  `ventures.md` records DD84's social accounts as `UNKNOWN`, so **what a
  compromised Facebook page would reach is itself unknown** — that gap is T-43's
  neighbour and worth closing.
- **Context, offered without a causal claim** — the same three days brought a
  Chime "new login detected", two Disney+ new-login notices with a one-time
  passcode, and the fifth day of debit-card toggling. **No evidence links any of
  these to the phish, and Torque is not asserting a link** — account notices are
  routine. They are listed together because checking them is one ten-minute task
  rather than five.
- **Execution steps** — (1) Do not click; report as phishing and delete; (2)
  establish whether anyone clicked or submitted; (3) if so, change that password
  and audit the page's admin list; (4) **close the `UNKNOWN` on which social
  accounts exist and who administers them** — hand that half to Rev.
- **Completion proof required** — The message reported or deleted, and a
  recorded statement that no credential was submitted, or the remediation if one
  was.
- **Status** **Awaiting Owner** · **Next action** — Step 1, today.

### 2026-10-13 — four days unread, and the cluster gained a sixth item

**The phish is still unread**, now **four days** in an inbox that classified it
IMPORTANT. Nothing about the message has changed and no remediation is recorded.

**Added to the cluster, from the 2026-10-12 intake window:** **two GitHub device
verification emails**, 2026-10-12T11:58Z and 11:59Z, **both flagged IMPORTANT**
— a sign-in from an unrecognised device requesting a code.

**They are counted here rather than dismissed as routine**, and the reason is
arithmetic, not suspicion: one week has now produced **a credential phishing
attempt, a Reddit automated-activity flag (T-60), a GitHub device prompt, a
Chime new-login notice, two Disney+ new-login notices with a one-time passcode,
and six days of debit-card toggling.** **No linkage between any of them is
claimed and no cause is asserted** — every one of those notices is individually
unremarkable. **The point is that checking them is one task, not six**, and that
a reader seeing them one per brief would never notice the density.

**Step 4 of this task gains weight.** `ventures.md` records DD84's social
accounts as `UNKNOWN`, and the week's notices now span **Meta, Reddit, GitHub,
Chime and Disney+** — so **what a compromised credential would reach is still
unknown**, and that gap is the one thing here nobody has started on.

- **Status unchanged: Awaiting Owner.** · **Next action** — Step 1, still today,
  **plus the Reddit verification in T-60, which has a dated deadline the phish
  does not.**

## T-53 — Purchase proposal on the Colbert parcel: no reply in six days

- **Objective** — Get an answer on buying the shop site, or establish that the
  listing agent is not responding, before more is spent on a parcel DD84 may not
  be able to acquire.
- **Source** — `/dd84-inbox-intake`, 2026-10-12. Gmail thread
  `1a0f74adc1dbd49a`.
- **Workstream** real estate · **Priority** **High** · **Owner** **Owner** ·
  **Due** 2026-10-13
- **The finding** — DD84 sent a **non-binding purchase proposal on
  2026-10-06T15:50:27Z** for **0 Highway 72 W, Colbert, GA 30628, parcel 0059
  038 / MLS 10802803**, for an owner-occupied automotive performance, tuning,
  diagnostics and light vehicle service use. **No reply in six days.** A
  follow-up draft to the listing agent was created **2026-10-12T10:11:23Z** and
  is **unsent**.
- **Why this is its own task and not part of T-38** — T-38 is the **GDOT access
  review** for this parcel: whether a driveway can be permitted. This is
  **whether DD84 can buy the land at all.** The register has tracked the permit
  since 2026-10-08 and **has never tracked the purchase**, which is the larger
  of the two. Same site, two independent gates, and the property one had no
  entry.
- **How it depends on the others** — T-38 established GDOT would likely permit
  access, subject to right-in/right-out. **That answer is worth little if the
  parcel is not available**, and a survey or civil design commissioned before
  the purchase is settled is money spent at risk. Sequence matters.
- **Approval class** — **C to follow up** (external communication). The owner's
  own draft already exists; **Torque did not write, edit or send it.** Any
  offer, deposit or contract is **E and G**.
- **Cost and risk** — No cost to follow up. **The purchase price is not recorded
  and no figure appears in the thread's preview** — not estimated. Risk of
  silence: the listing moves, or survey money is spent on a parcel that is gone.
- **Execution steps** — (1) Owner sends or revises the draft that is already
  sitting there; (2) if there is still no reply, telephone the listing agent;
  (3) record the asking price and whether the property is still available; (4)
  sequence any survey spend behind a positive answer.
- **Completion proof required** — A reply from the listing agent, or a recorded
  decision to stop pursuing this parcel.
- **Status** **Awaiting Owner** · **Next action** — Step 1. **The draft is
  written; it needs sending, which is yours.**

### 2026-10-14 — the agent replied; this task's premise is gone

**2026-10-13T23:11:42Z the realty agent replied:** _"This is what my client
has!"_ — with a **5.6 MB attachment**, **unread**.

This task recorded a purchase proposal with no reply in seven days and a
drafted, unsent follow-up. **Both halves have moved.** The owner wrote to her
directly at **2026-10-13T12:30:36Z** without waiting for the draft, and she
answered eleven hours later. **The drafted follow-up is moot in substance** — it
chases a silence that has ended.

**The open question has changed shape, not closed.** **The attachment was not
downloaded**, so **what the seller's client "has" is unknown** — a survey, a
soil report, a counter, a plat, or nothing useful. **No inference is drawn from
the file size.** The silence was the problem; now the unread attachment is.

**And the property work is moving faster than this register.** On 10-13 the
owner also opened **two new agency threads** — Piedmont Water (12:28:46Z) and
the Georgia DPH Lead Environmental Health Specialist (12:30:14Z, cc a second
officer) — and **Colbert City Hall replied at 14:55:43Z naming that same DPH
officer as the person who would have to decide.** **He had contacted the right
official two and a half hours before the city told him who it was.**

- **Status unchanged: Awaiting Owner**, but the action has changed. · **Next
  action** — **open the attachment.** Then decide whether the drafted follow-up
  is still wanted at all; on this evidence it is not.

### 2026-10-15 — the attachment is now blocking the septic application

**Still unread, two days on.** And it has acquired a second reason to matter.

**T-70** records the state's commercial-septic requirement list, and **one of
the five documents is the recorded plat of the property.** The agent's message
of 2026-10-13T23:11:42Z reads _"This is what my client has!"_ with a **5.6 MB
attachment** — **which may be exactly that plat**, or a survey, or something
else entirely. **The contents are unknown; no inference is drawn from the size
or the wording.**

**That makes this the cheapest possible step on the property's critical path.**
If the plat is in there, one of five required documents is already in hand for
free. If it is not, DD84 knows to ask. **Either answer costs one click**, and it
sits ahead of commissioning any paid soil work.

**And a second dependency runs through this thread.** The septic application's
**owner-consent signature block** needs the seller, and **DD84 does not own the
parcel** — so the agent is the route to that signature too. **This thread is no
longer a follow-up chase; it is the property file's gate.**

- **Status unchanged: Awaiting Owner.** · **Next action** — **open the
  attachment.** The drafted follow-up remains moot.

## T-54 — Three HP Tuners credit orders in three days, amounts unread

- **Objective** — Record what DD84 is spending on tuning credits, and supply the
  margin input Friday's cash review could not.
- **Source** — `/dd84-inbox-intake`, 2026-10-12. Gmail receipts for orders
  `#2005285` (2026-10-09T20:32Z), `#2005948` (2026-10-10T17:17Z) and `#2006613`
  (2026-10-11T20:36Z), all for **Universal Credits**.
- **Workstream** finance · **Priority** Normal · **Owner** **Owner** · **Due**
  2026-10-14
- **What is known** — three separate orders, three consecutive days, all
  Universal Credits, all marked complete.
- **What is NOT known, and is not estimated** — **the amount of any of them.**
  The figures are not in the receipts' preview text and the full receipts were
  not opened. **Three orders of unknown value is the honest statement.**
- **Why it matters twice** — Universal Credits are the consumable HP Tuners
  licensing consumes per vehicle, so **three purchases in three days reads
  either as active tuning work or as stock-building**, and the two have opposite
  cash implications. Separately, **OL-0035 recorded software credits as a
  missing margin input for T-37** and marked that margin INCOMPLETE. These three
  receipts are where that input comes from.
- **The uncomfortable juxtaposition, stated plainly** — three credit purchases
  in three days against **no revenue verifiable in any reachable system** and a
  **declined bank transfer on 2026-10-05** (T-49). None of those three facts
  explains the others, and **Torque is drawing no conclusion.** They belong on
  the same page.
- **Approval class** — A to read. Any decision to stop or change purchasing is
  **E**.
- **Cost and risk** — Cost **not recorded**, by three receipts. Risk: credit
  spend running ahead of billable work, invisible because nobody totals it.
- **Execution steps** — (1) Open the three receipts and record each amount here;
  (2) establish whether they were consumed on a job or stocked; (3) if consumed
  on the C10 job, feed the figure into T-37's margin; (4) note whether HP Tuners
  credit spend should be a standing line in the weekly cash review.
- **Completion proof required** — Three amounts recorded with their order
  numbers, and a statement of what they were for.
- **Status** Planned · **Next action** — Step 1.

## T-55 — Chime is a payment channel absent from the venture registry

- **Objective** — Establish every channel through which money reaches DD84, so a
  cash review can state a cash position.
- **Source** — `/dd84-inbox-intake`, 2026-10-12. Chime notification,
  2026-10-10T18:22:08Z: _"Robert L. just sent you money… The funds are in your
  Chime account and available for immediate use."_
- **Workstream** finance · **Priority** Normal · **Owner** **Owner** · **Due**
  2026-10-14
- **The finding** — **money arrived through a channel `ventures.md` does not
  list.** The registry's systems table names Shopify, Stripe, bookipay and
  print-on-demand vendors. **Chime appears nowhere in it, or in this register.**
- **What is unknown, and not guessed** — **the amount** (not in the preview),
  and **whether this is business or personal.** A peer-to-peer transfer from a
  named individual could be either, and Torque will not assume. **The sender is
  not recorded here**: §5 forbids adding personal contact detail to a public
  repository, and whether this person is a customer is exactly what is unknown.
- **Why it matters** — OL-0035 could not state DD84's cash position, naming the
  absence of a bank connector as the cause. **This is a fifth money channel, and
  the registry's incompleteness is now a measured fact rather than a
  suspicion.** A cash review that does not know where money arrives cannot be
  complete however many connectors are fixed.
- **Scope note** — `ventures.md` is **Rev's file**; Torque reads it and does not
  write to it (CLAUDE.md §2). **Nothing was changed there.** This task is the
  ops half: establish the channel list. Updating the registry is Rev's or the
  owner's.
- **Approval class** — A to read and report. Connecting a Chime connector, if
  one exists, is the owner's.
- **Cost and risk** — No cost. Risk: an unrecorded inbound channel means
  revenue, and tax-relevant income, that no routine can see.
- **Execution steps** — (1) Owner states whether the Chime account is a business
  channel; (2) if it is, record it in `ventures.md` with the other systems; (3)
  establish whether any of DD84's three known customers has ever paid through
  it; (4) list every other channel not in the registry.
- **Completion proof required** — A complete, dated list of DD84's inbound
  payment channels, in `ventures.md`.
- **Status** Planned · **Next action** — Step 1, one sentence from the owner.

---

### 2026-10-14 — the channel count is less certain than this task implied

**T-61's 2026-10-14 addendum records that Square may never have been activated**
— twelve Square threads since 2026-08-17, several of them onboarding prompts for
an unfinished account, including _"Start taking payments — just verify your
identity"_.

**That does not change this task, which is about Chime.** It changes **the count
this task started.** Chime was recorded as the fifth payment channel and Square
as the sixth; **"six channels" may in fact be "five channels and an abandoned
signup".** **Neither Chime's nor Square's activity was ever read** — no
connector exists for either.

**So the registry gap is confirmed and the channel count is not.** Both should
go to Rev for `ventures.md` **with their status marked unverified**, rather than
being added as live payment channels on the strength of their mail.

## T-56 — USDA B&I loan guarantee: confirm FY27 authority and the rural test

- **Objective** — Establish whether the best-fitting debt instrument for a rural
  owner-occupied shop will still exist, and whether the Colbert site qualifies.
- **Source** — `/dd84-opportunity-scan`, 2026-10-12. Score **50/100**, ranked 2.
- **Workstream** real estate · **Priority** Normal · **Owner** Agent · **Due**
  2026-10-19 (next scan)
- **Approval class** — **A to research.** Contacting USDA is **C**; any
  application is **E and G**.
- **Stated by source** — USDA Rural Development's own programme page surfaced in
  search but **returned 403 and was not read.** Secondary, single-source:
  guarantee raised to **85% for qualifying loans under $5 million in FY2026**;
  **the FY2027 budget request eliminates appropriated authority** against
  $1.43bn enacted the prior year, and a House bill passed 2026-06-04 restores it
  at **$2.0 billion**.
- **Assumed by Torque** — that Madison County/Colbert meets USDA's population
  test (**the test itself was not read**), and that an owner-occupied tuning and
  dyno shop is an eligible business purpose. **Both unconfirmed.**
- **Why it matters more than its score** — the reported 85% guarantee is aimed
  at exactly DD84's weakness: **a lender's reluctance given thin revenue
  history.** It is the one instrument whose design compensates for the thing
  that makes SBA 504 hard.
- **Cost and risk** — No cost to research. **The risk is unusual: the
  programme's own survival is contested**, which argues for establishing fit
  early rather than at the point of need.
- **Execution steps** — (1) Read the B&I eligibility page **once network access
  permits** (T-59); (2) confirm FY2027 authority from the enacted appropriation,
  not a budget request; (3) confirm the rural population test against Colbert;
  (4) **raise with the SBDC adviser first** (T-39) — a free session is cheaper
  than a cold call to USDA.
- **Completion proof required** — The population test and FY27 authority each
  recorded with the page and date read.
- **Status** Planned · **Next action** — Step 4, which costs nothing and is
  already scheduled work.

### 2026-10-19 — advanced, not closed: the binding test is named and unanswerable from here

**`/dd84-opportunity-scan`, 2026-10-19T11:50Z.** This task asked for FY27
authority and the rural test. **One is now precise and the other is confirmed
absent.**

**The rural test, as reported by lender and consultant secondaries:** the
programme serves areas of **50,000 or fewer**, and the fuller definition is
**"any place that is not a city or town of more than 50,000 people and not in
the urbanized area next to such a city or town"**, governed by **7 CFR Part
5001**.

**Colbert's own population was never the risk.** The binding clause is **"the
urbanized area next to"** — and **Athens-Clarke County carries roughly 130,000
people about ten miles away.** Whether Colbert falls inside Athens's urbanized
area as the regulation defines it **decides eligibility outright**, and it
cannot be answered without the regulation or a USDA map, **neither of which is
reachable while egress is blocked** (T-59).

**FY2027 authority: searched and not found.** No appropriation or programme
level for FY2027 appeared in any result. The most recent figures found are
**FY2026** — up to **85% guarantee for loans of $5 million and under**, maximum
guarantee **$25M** and up to **$40M** for certain projects.

**This moved the candidate's score down from 50 to 44**, and the reason is this
task's own finding rather than anything changing at USDA. **The demotion is the
research working.**

- **Status unchanged: Planned** · **Next action, narrowed** — the two open
  questions are now **the adjacency test** and **the FY2027 authority**, and
  **both are one phone call to Georgia USDA Rural Development.** That is **Class
  C** and needs a packet. **Nothing further is answerable from inside this
  platform**, so this task should stop consuming agent capacity until either
  egress opens or the owner approves the call.

## T-57 — Is Colbert in a designated Georgia Rural Zone?

- **Objective** — Answer one cheap question that would materially change the
  arithmetic of buying the shop site.
- **Source** — `/dd84-opportunity-scan`, 2026-10-12. Score **48/100**, ranked 3.
- **Workstream** real estate · **Priority** Normal · **Owner** Agent · **Due**
  2026-10-19
- **Approval class** — **A to research.** Emailing DCA is **C**.
- **Stated by source** — Georgia DCA documents surfaced in search (**403, not
  fetched**): **investment credit of 25% of a property's purchase price, capped
  at $125,000**; job tax credit **$2,000 per FTE per year for up to five
  years**; rehabilitation credit **30% of qualified costs, capped $150,000**.
  Zone eligibility: population ≤15,000, a concentration of commercial structures
  50+ years old, demonstrated distress. **The local government applies, not the
  business.** Latest round announced 2025-12-05 designated Alma, Barnesville,
  Blairsville, Elberton, Folkston, Grantville and Summerville from 2026-01-01 to
  2030-12-31.
- **Neither Colbert nor Jefferson, nor Madison nor Jackson County, appeared in
  any designation list found** — including a ~40-community 2023 overview. **That
  is an absence in search results, not a confirmed negative.**
- **Assumed by Torque** — that Colbert's population is under 15,000 (**not read
  from a source this run**), and that a dyno shop on a state route would count
  as a qualifying activity in a **downtown revitalisation** zone — **genuinely
  doubtful**, and the doubt is the honest part.
- **The limitation that matters most** — these are **non-refundable Georgia
  income tax credits.** DD84's all-time revenue is **$3,507.86** with nothing
  collected since 2025-09-12, so its state tax liability is almost certainly too
  small to absorb a $125,000 credit in any useful period. **The headline number
  is real and largely unusable at current scale.** Scored 24/25 on value and 1/5
  on risk for exactly that reason.
- **Cost and risk** — No cost. Risk of ignoring it: buying the parcel without
  knowing a 25% credit was available.
- **Execution steps** — (1) Read DCA's designations list once network access
  permits; (2) if Colbert is not designated, record that and park this; (3) if
  it is, put the investment credit into the financing conversation and **check
  whether DD84 could actually use the credit** before valuing it.
- **Completion proof required** — A yes or no on Colbert's designation, with the
  page and date read.
- **Status** Planned · **Next action** — Step 1, gated on T-59.

### 2026-10-19 — advanced, not closed: cities apply, and the credit is payroll-based

**`/dd84-opportunity-scan`, 2026-10-19T11:50Z**, from a **DCA press release
(2025-12-05)** and **NCSHA**, consistent with one another. **`dca.georgia.gov`
could not be opened** (T-59).

**Two findings, and the second matters more than the first.**

**One — Colbert is almost certainly not designated.** **Rural Zone designations
are granted to cities, not counties.** The cohort effective **2026-01-01** and
running to **2030-12-31** is **Alma, Barnesville, Blairsville, Elberton,
Folkston, Grantville and Summerville**. **Colbert is not among them.**
**Applications are due each August and designees announced each October**, so an
announcement may be imminent — **but cities apply, not businesses, so DD84's
only route is a designation it does not control.** The complete current register
is on DCA's documents page, unreachable, so **"not designated" is reported as
very likely rather than confirmed.**

**Two — even a designation would be worth close to nothing to DD84 today.** The
headline incentive is a **job tax credit of $2,000 per year per new full-time
equivalent job, for up to five years**, plus investment and rehabilitation
credits. **DD84 has no employees and no payroll.** The credits attach to hiring
and to qualifying investment, **both of which need capital this business does
not have.**

**That took the candidate from 48/100 to 40/100**, and the drop is about
**generosity to DD84** rather than generosity in general — which is the only
score this register should carry.

- **Status unchanged: Planned** · **Next action** — **none worth agent
  capacity.** The finding is recorded; confirming the full designation list
  needs the DCA page. **Recommended: leave this at the bottom of the register
  and do not re-raise it until DD84 has payroll or a designation appears.**

## T-58 — SBA 504: send the Georgia CDC draft and ask two questions

- **Objective** — Move the shop financing from a written-but-unsent draft to an
  actual answer from a Certified Development Company.
- **Source** — `/dd84-opportunity-scan`, 2026-10-12. Score **47/100**, ranked 4.
- **Workstream** finance · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-14
- **Approval class** — **C to send.** **Covered by the existing T-42 decision on
  the drafts backlog; no new packet raised** — a second packet for one of the
  fifteen drafts would fragment a decision the owner already has in front of
  them.
- **Why this is the action rather than more research** — **Georgia CDC is
  already in the mailbox.** A draft to them has been written and unsent since
  **2026-09-29 — 13 days.** Every remaining SBA 504 question is one a CDC
  answers in a sentence and no amount of searching will settle.
- **The two questions, and why they are the right two** — both come from gaps
  this scan could not close:
  1. **Is a building with a fixed dyno installation classified "special
     purpose"?** If yes, the borrower equity requirement reportedly moves from
     **10% to 15–20%.** For a purchase in the low hundreds of thousands that is
     tens of thousands of dollars of difference, and it is the single largest
     unknown in DD84's financing plan.
  2. **What equity does a business of DD84's age and revenue history need?**
     Secondary sources report an **additional 5–10% for businesses under two
     years old.**
- **Stated by source** — all SBA 504 figures in the scan are from **lender and
  marketing pages**; `sba.gov` returned **403**. Reported: 10% standard equity,
  15–20% special purpose, 50/40/10 bank/CDC/borrower split, **≥51%
  owner-occupancy**, up to ~$15M, net worth under $20M and average after-tax net
  income under $5M.
- **Assumed by Torque** — that DD84's wholly owner-occupied plan clears the 51%
  test comfortably. **Looks safe; not read on SBA's page.**
- **Cost and risk** — No cost to send. Risk of continued delay: the Colbert
  parcel purchase (T-53) has had no reply in six days, and financing readiness
  is what makes an offer credible.
- **Execution steps** — (1) Owner sends the existing GACDC draft with the two
  questions added; (2) record the answers here; (3) feed the equity figure into
  whatever offer T-53 produces.
- **Completion proof required** — A written answer from the CDC on
  classification and equity.
- **Status** **Awaiting Owner** · **Next action** — Step 1. **The draft exists;
  it needs sending.**

## T-59 — The opportunity scan cannot validate any primary source

- **Objective** — Restore the half of this routine that makes its output
  trustworthy, and fix two stale references in its command file.
- **Source** — `/dd84-opportunity-scan`, 2026-10-12, failing its own validation
  step and recording why.
- **Workstream** ops · **Priority** **High** · **Owner** **Owner** (the network
  change) **and Agent** (the command file) · **Due** 2026-10-14
- **Approval class** — A to prepare and to amend the command file. **The network
  policy change is the owner's.**

### Finding 1 — egress is blocked to every issuing body

The routine's design is **`WebSearch`, then `WebFetch` on the primary source.**
`WebSearch` works. **`WebFetch` is blocked.** Measured this run:

| Host              | Result                             |
| ----------------- | ---------------------------------- |
| `dca.georgia.gov` | **HTTP 403 CONNECT tunnel failed** |
| `www.sba.gov`     | **403**                            |
| `grants.gov`      | **403**                            |
| `www.rd.usda.gov` | **403**                            |

**The proxy is healthy** — `enabled: true`, `bundleCoversEveryHost: true`,
`recentRelayFailures: []` — so this is the **environment's network policy**, not
a fault. **The remedy is the owner's:** Network access in the environment's
settings (the cloud environment menu in the session title bar, then Edit) —
either a broader level, or those hosts under Allowed domains with "Allow package
managers" left ticked.
<https://code.claude.com/docs/en/cloud-environments#network-access>

**What it costs, concretely.** The command file says _"never state a deadline
you have not seen on the issuing body's own page"_ and _"never score an
opportunity you could not open."_ Applied honestly, **this routine can discover
candidates and cannot validate one.** The 2026-10-12 scan found six real
candidates and every single one carries a **3–5/15 source reliability** score
for that reason alone. **The ranking is therefore a ranking of search summaries,
not of programmes**, and it says so.

### Finding 2 — the command file points at a deleted file, and misdescribes the repository

- **`src/lib/scoring/score.ts` does not exist on this branch.** It went with the
  Ledger tree on 2026-09-25 (T-29, OL-0016). The **components and maxima survive
  in the command file's own inline restatement** and sum to 100, so scoring was
  possible — **but the classification bands were only in the code and are now
  unavailable.** The 2026-10-12 scan therefore reported raw scores with **no
  bands**, could not apply the "worth investigating" gate, and **invented no
  thresholds.**
- **The command file states _"This repository is the Georgia Opportunity
  Ledger"_** and directs a Supabase duplicate check against Ledger data.
  **`CLAUDE.md` §0 says otherwise** — the Ledger is a separate business in
  another repository — and the firing prompt is explicit that this scan is
  DD84's own. **The file is describing an arrangement that ended on
  2026-09-23.**

- **Cost and risk** — No cost. **The risk is a scan that reads as authoritative
  and is not.** A ranked list with scores looks like validated research; this
  one is honest about being search summaries, but **the next session may not be
  as careful**, which is what makes this High rather than Normal.
- **Execution steps** — (1) **Owner** adds the four hosts to Allowed domains, or
  widens network access; (2) **Agent** amends
  `.claude/commands/dd84-opportunity-scan.md`: write the band thresholds in
  explicitly or state that bands are unavailable, delete the "this repository is
  the Ledger" framing, and remove the Supabase duplicate-check step; (3) re-run
  the scan and compare — **the 2026-10-12 brief is the baseline and all six
  scores should rise.**
- **Completion proof required** — One scan in which at least one deadline is
  recorded as read from an issuing body's own page, with the URL and timestamp.
- **Status** **Awaiting Owner** · **Next action** — Step 1. **Step 2 is Torque's
  and does not wait on it**, but is worth doing in the same pass so the file is
  corrected once.

### 2026-10-19 — the block is one cause with two error strings, and today it cost something

**`/dd84-opportunity-scan`, 2026-10-19T11:38Z.** The second scan to run with
this task open, and the first to diagnose it properly rather than quote an error
string.

**Three readings:**

| Check                                             | Result                                                                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Proxy status (`$HTTPS_PROXY/__agentproxy/status`) | **`enabled: true`, `bundleCoversEveryHost: true`, `recentRelayFailures: []`** — it is not even seeing these attempts fail |
| `getent hosts doas.ga.gov`                        | **nothing.** The container has **no DNS resolution of its own**                                                           |
| `curl https://doas.ga.gov/`                       | **`CONNECT tunnel failed, response 403`** — exactly the 2026-10-12 symptom                                                |

**So the cause is unchanged and the symptom depends on which tool asks.** `curl`
hands the hostname to the proxy and is refused at the tunnel. **`WebFetch`
resolves the name itself first and dies earlier, at DNS, reporting
`getaddrinfo ENOTFOUND`.** **One block, two messages.**

**Recorded because the near-miss is instructive.** Had this run reported
`ENOTFOUND` as the finding, the way 2026-10-12 reported the 403, **this register
would now carry two different problems where there is one** — and the second
would look like a new regression rather than the same unchanged policy. **An
error string is not a diagnosis.** The check that settles it is **two
commands**: the proxy's own status, and a `curl` against the same host. **Those
two belong in this routine's instructions**, alongside T-69's other prompt
edits.

**And today it cost something concrete, twice.** **T-60's platform deadline
expired today and could not be verified** because the host is blocked. **Every
candidate in the 2026-10-19 scan carries a low source-reliability score for this
reason**, and two candidates were ranked on secondaries alone. **Five runs of
"an egress block that disables a routine" at no visible cost, and then a day
when it cost the ability to know whether the business still has its only
evidenced inbound channel.**

- **Status unchanged** · **Next action** — unchanged and **now carrying a
  concrete cost rather than a hypothetical one.** The remedy is the
  environment's **Network access** setting, which is the owner's: either a
  broader access level, or the issuing hosts added under Allowed domains.

## T-60 — Reddit flagged the account for automated activity: seven days

- **Objective** — Keep DD84 able to post in r/LSSwapTheWorld, which is the only
  inbound channel this record has any evidence for, before the deadline Reddit
  set expires.
- **Source** — `/dd84-inbox-intake`, 2026-10-13. Gmail thread
  `1a13111f99c61711`, from `noreply@reddit.com`, received
  **2026-10-12T17:03:43Z** and **flagged IMPORTANT**.
- **Workstream** sales · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-19
- **Approval class** — **A to read and report here.** The remedy is a
  human-verification click in the owner's own Reddit session. **Torque may not
  and will not perform it** — see below.
- **What the message says, quoted** — _"down-dirty-84 We detected automated
  activity on your account. Verify you're human or register your account as an
  app on the Reddit Developer Platform **within 7 days** to continue posting,
  commenting…"_
- **The deadline, and what makes it unusual in this register** — **approximately
  2026-10-19**, seven days from receipt. **Reddit set it, in its own message to
  this mailbox.** That makes it **the only dated deadline anywhere in the
  2026-10-13 intake, and the only one this week not inherited from a secondary
  source** — the 2026-10-12 opportunity scan produced six candidates and not one
  verified deadline (T-59). **A platform's own notice to its own account holder
  is as primary as a source gets.**
- **Why this is Critical, in business terms rather than platform terms** —
  r/LSSwapTheWorld has produced **five lead candidates in six days** (T-41) and
  **nothing else in this record has produced one.** `ventures.md` records the
  channel behind DD84's three paying customers as `UNKNOWN` and paid advertising
  as never used. **If posting is restricted, DD84 loses the only demand source
  it can demonstrate**, with nothing identified to replace it. The account also
  carries the goodwill that made those five warm: DD84's standing there comes
  from answering technical questions without pitching, and **that standing is
  not portable to a new handle.**
- **What Torque is not claiming** — **nothing here establishes why Reddit
  flagged the account.** Automated-activity flags fire on posting cadence, link
  patterns, VPN or shared-IP use, and plain false positives. **No cause is
  asserted, and no inference is drawn from the fact that an AI agent reads this
  mailbox** — Torque has never posted to Reddit, and the notification previews
  are all this routine has ever read of it.
- **What was not examined, and it matters here** — **the Reddit threads
  themselves.** Only the email previews were read. **What DD84 actually posted,
  and whether anything in it would explain the flag, is unknown**: the threads
  are on reddit.com and web fetch is blocked by this environment's egress policy
  (T-59). So **this task cannot diagnose the cause even in principle from a
  session.**
- **The one thing an agent must not do here** — click the verification. **A bot
  completing a "verify you're human" check is precisely the behaviour being
  flagged**, it would be a misrepresentation to the platform, and a failed or
  suspicious verification could cost the account outright. **It is the owner's
  click and nobody else's.**
- **Cost and risk** — No cost to verify. The risk of inaction is losing posting
  rights on the only channel with evidence behind it. The risk of the wrong
  action — an agent verifying, or registering the account as a developer app
  when it is a person posting — is **a worse standing than the flag itself.**
- **Execution steps** — (1) **Owner** opens the Reddit notification and
  completes human verification in his own session, before ~2026-10-19; (2)
  record here that it was done and what Reddit then showed; (3) if Reddit states
  a cause, record it — **that is the only route to a cause this record has**;
  (4) if posting is already restricted, say so, because T-41's five candidates
  then need a different route; (5) **separately and without urgency**, decide
  whether the developer-app path is ever appropriate — it is not, if a human is
  doing the posting.
- **Completion proof required** — A recorded statement that verification was
  completed, with the date, and confirmation that posting and commenting still
  work. **Not an assumption that the deadline passed harmlessly.**
- **Status** **Awaiting Owner** · **Next action** — Step 1. **T-41 waits on
  this**: contacting any of the five candidates through a restricted account is
  not a plan.

### 2026-10-19 — day seven, and the state cannot be established

**Today is the deadline.** Reddit's notice of 2026-10-12T17:03:43Z gave seven
days; the seventh is **2026-10-19**.

**Whether the verification has been completed is unknown and cannot be checked
from here.** reddit.com is **egress-blocked** (**T-59**), no Reddit connector
exists, and no mail in the 71-hour window to 2026-10-19T10:21Z mentions the
account. **The only reachable evidence is the original notice.**

**This task is therefore not closed, and will not be closed by its date
arriving.** Per §5 and the README, **unknown is not done**; a deadline passing
is not evidence that the thing behind it happened. **Status stays Awaiting
Owner** and the completion test below is unchanged.

**The timing is the lesson rather than the task.** **T-59** has been reported as
"an egress block that disables a routine" for five runs, costing nothing visible
each time. **Today it costs the ability to know whether the business still has
its only evidenced inbound channel**, on the one day that knowing would change
what the owner does. **A capability gap with no consequence is indistinguishable
from a capability gap with a consequence, right up until the day it is not.**

- **Status unchanged: Awaiting Owner.** · **Next action** — unchanged and now
  terminal: **complete the verification in the owner's own Reddit session
  today**, then **report the outcome here**, because nothing else in this
  platform can observe it. **If it has already been done, say so and this
  closes.**

## T-61 — Square turns offline payments on by default in two days

- **Objective** — Get a payment-acceptance setting decided before a platform
  changes it unilaterally, and close the fact that **Square is a payment channel
  the venture registry does not contain.**
- **Source** — `/dd84-inbox-intake`, 2026-10-13. Gmail thread
  `1a134be9ce241c19`, received **2026-10-13T10:11:09Z — ten minutes before the
  intake fired.**
- **Workstream** finance · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-15
- **Approval class** — **A to read and report.** Changing a payment-acceptance
  setting is **Class E and F** and is the owner's. **No Square setting was
  touched and no Square connector exists.**
- **What the message says, quoted** — _"Reminder! 2 days left before offline
  payments are automatically allowed… If we don't hear from you, offline
  payments will be turned on by default."_ **Effective approximately
  2026-10-15**, and **the default is on.**
- **Finding one: a money setting changes by inaction.** Offline card acceptance
  takes a payment **without a live authorisation**, holding it until the
  terminal reconnects. The trade is real in both directions: it prevents losing
  a sale when connectivity drops at the shop, and it means **declines, expired
  cards and chargebacks surface after the customer has gone.** **Whether that
  trade is acceptable depends on how DD84 takes payment in person, and this
  record does not know that.** `ventures.md` does not describe in-person payment
  at all. **No recommendation is offered here, because an informed one is not
  available.**
- **Finding two, which is the larger one: Square is the sixth payment channel.**
  `ventures.md` lists **Shopify, Stripe, bookipay and print-on-demand vendors.**
  **Chime was the fifth, found 2026-10-10 (T-55). Square is the sixth.** That is
  **two previously unrecorded ways money can reach this business, discovered in
  three days, by reading email.**
- **Why that compounds T-36 rather than merely adding to it** — T-36 records
  that there is **no readable path to DD84's own revenue figures**: Stripe has
  no connector in this session, bookipay has no API by design, and **PayPal has
  required re-authentication since 2026-10-09.** A sixth channel does not just
  widen the gap; **it means the size of the gap is itself unknown.** Any revenue
  total assembled today would be a total over an unknown number of systems, and
  **the cash review of 2026-10-09 declined to state one for exactly this
  reason.** That refusal looks better today than it did then.
- **Cost and risk** — No cost to decide. The exposure if offline payments are
  switched on unconsidered is **post-hoc declines and chargebacks on work
  already delivered**, against a business whose last recorded payment was
  **2025-09-12**. The registry risk is that **a channel nobody has recorded is a
  channel nobody reconciles.**
- **Execution steps** — (1) **Owner** decides before ~2026-10-15 whether offline
  payments should be on, and records the decision here with the reason — **an
  explicit "yes, leave it on" is a fine answer and a default is not**; (2) state
  what Square is used for and since when; (3) **hand Square and Chime to Rev for
  `ventures.md`**, with the systems table's verification date; (4) fold both
  into T-36's list of systems that would have to be readable before any revenue
  figure is quoted.
- **Completion proof required** — The offline-payment setting's state recorded
  as **read from Square**, with the date, plus Square present in the venture
  registry. **Not the email's description of the setting** — the email says what
  will happen, not what the account is currently set to.
- **Status** **Awaiting Owner** · **Next action** — Step 1, within two days.
  **The deadline is the platform's, and it does not require a reply to take
  effect.**

### 2026-10-14 — the date is firmer and the channel is doubtful

**Two corrections, from a fuller read of Square's mail.**

**First, the date is ~2026-10-15 and it is corroborated.** The 2026-10-13
message said _"2 days left"_. A **second** Square message,
**2026-09-15T10:11:14Z**, said _"Offline payments will be turned on across all
compatible devices **in 30 days**"_ — **30 days from 15 September is also ~15
October.** **Two messages a month apart converge on one date**, which is firmer
than either alone. **The 2026-10-14 intake said the date was "today or passed";
that was wrong and overstated the urgency.** It is tomorrow.

**Second, and larger: Square may never have been activated.** This task and T-55
recorded Square as DD84's **sixth payment channel**. **Square has sent twelve
threads since 2026-08-17, and several are onboarding prompts for an unfinished
account** — _"Your point of sale is waiting"_ and "Finish your setup today"
(08-17), **_"Start taking payments — just verify your identity"_** and "You're
so close to making the most of Square" (08-20), _"How to take a payment"_
(08-21), hardware and Tap-to-Pay prompts (08-23, 08-24).

**That is consistent with a provisioned-but-never-activated account.** **It is
not asserted**: no Square connector exists, the account state was never read,
and an identity-verification nag can be stale. **But it changes what the
decision is.** If Square has never taken a payment, the offline-payment setting
is close to harmless and **the real question is whether the account should exist
at all.** If it has, the setting matters. **One look at the dashboard answers
both, and that look has never been taken.**

**What this does and does not do to T-36's argument.** This task argued that a
sixth channel made the **size** of the revenue-visibility gap unknown. **That
still holds** — an unread channel is unread whether or not it ever took money.
**What must not harden is the count: "six channels" may be "five channels and an
abandoned signup",** and the register should not carry a number it has not
verified.

- **Status unchanged: Awaiting Owner.** · **Next action, revised** — **open the
  Square dashboard.** Establish (a) whether the account has ever taken a
  payment, (b) the current offline-payment setting, (c) whether identity
  verification was ever completed. **Then** decide the setting. **Deciding a
  setting on an account that may not process payments is the wrong order.**

### 2026-10-16 — it switched itself on, and the risk is now different

**2026-10-16T10:11:09Z, thread `1a14431b2f5a8027`: _"Offline payments are now
turned on"_**, subtitled _"No connection? No problem"_.

**The forecast was right and the decision was never made.** Two Square messages
a month apart pointed at ~2026-10-15; **the date passed, nobody chose, and the
default took effect.** This task's prediction is closed as correct; **its
purpose is not.**

**What it opens is worse than what it closed.** Offline card acceptance takes
payment **without a live authorisation**, so a decline or chargeback surfaces
after the customer has left — **and as of 2026-10-15 the business's own account
is overdrawn with two payments already declined** (**T-71**). **Accepting cards
without authorisation while unable to absorb a reversal is a different decision
from the one this task originally framed**, and it has already been made by
inaction.

**Still unestablished, and now load-bearing:** whether that Square account has
**ever processed a payment.** If it never has, the setting is close to harmless
and the live question is whether the account should exist. If it has, **this is
now a cash-risk control that is switched the wrong way.** **One dashboard read
settles it and still nobody has taken it.**

- **Status unchanged: Awaiting Owner**, **Priority raised in effect by T-71**
  rather than re-labelled here. · **Next action** — unchanged in order but no
  longer optional: **read the dashboard, then decide, then tell T-71 what you
  found.**

## T-62 — Vercel reports three misconfigured domains on one project

- **Objective** — Find out what Vercel hosts for DD84 and which three domains
  are misconfigured, because both the platform and the domains are absent from
  the venture registry.
- **Source** — `/dd84-inbox-intake`, 2026-10-13. Vercel notification received
  **2026-10-13T09:23:56Z**: _"Your Team (downdirty84llc-creator's projects) has
  **3 misconfigured domains across 1 project**."_
- **Workstream** ops · **Priority** Normal · **Owner** Agent · **Due**
  2026-10-16
- **Approval class** — **A to read.** A Vercel connector exists in this session
  and **reading project and domain configuration is observation.** Changing a
  DNS record, a domain assignment or a deployment is **Class F** and returns for
  approval.
- **The finding** — **Vercel is hosting something for DD84 and this register has
  never mentioned it.** `ventures.md`'s systems table names a Manus front door,
  Shopify, Stripe, bookipay and print-on-demand vendors. **No Vercel, no
  project, no domains.** The team name `downdirty84llc-creator` matches the
  GitHub owner, so the account is DD84's rather than coincidental.
- **What is known and what is not** — **three misconfigured domains across one
  project is the email's count.** It was **not verified by reading Vercel**, and
  the three domains are **not named here because they have not been read.**
  Whether any of them is customer-facing is **unknown.** A misconfigured domain
  usually means DNS that does not point where Vercel expects — which can mean a
  domain that does not resolve, or one that simply was never finished. **Neither
  is assumed.**
- **Why Normal and not High** — nothing establishes that anything
  customer-facing is down. **It is sized as a registry gap, not an outage**, and
  the sizing will change the moment the domains are read. **Three alerts about
  an unidentified thing is the same shape as T-33**, which is also an
  unidentified service failing on an unrecorded platform, and **that recurrence
  is the real finding here: email keeps revealing infrastructure the registry
  does not contain.**
- **How it joins T-43** — T-43 is the open question of what DD84's web estate
  actually is. With this, the count stands at **`dd84tuning.com` (Manus,
  egress-blocked), `shop.downdirty84llc.com` (Shopify), `downdirty84llc.com`
  (live, with a contact form confirmed working on 2026-10-12), and three Vercel
  domains of unknown identity** — **with readable analytics for none of them.**
- **Cost and risk** — No cost to read. A Vercel project has a plan and possibly
  a price; **neither was read.** The risk is that a live surface is broken and
  nobody knows, or that DD84 is paying for a platform nobody has recorded.
- **Execution steps** — (1) **Agent** reads the Vercel team, its projects and
  its domain list, and records which three are misconfigured and how; (2)
  establish whether any is customer-facing or carries traffic; (3) state the
  project's plan and cost if the connector exposes it; (4) **fold the domain
  list into T-43** and hand the whole estate to Rev for `ventures.md`; (5) raise
  a packet before changing any DNS record or domain assignment — **that is F,
  and a wrong DNS change on a live domain is an outage.**
- **Completion proof required** — The three domains named, each one's state read
  **from Vercel** rather than from the email, and their customer-facing status
  stated.
- **Status** Planned · **Next action** — Step 1. **No approval needed to
  start**; this one is Torque's and does not wait on the owner.

## T-63 — Two Shopify account-verification codes, cause unexplained

- **Objective** — Establish who requested two Shopify account-verification codes
  this morning, and whether anyone other than the owner has been trying to get
  into the storefront.
- **Source** — `/dd84-daily-brief`, 2026-10-13. Gmail thread `1a134d328c12b11c`,
  two messages from `mailer@shopify.com`, **2026-10-13T10:33:35Z and
  2026-10-13T10:36:34Z** — **three minutes apart, both flagged IMPORTANT**, the
  second still unread. Subject _"Shopify verification code"_, body _"We received
  a request to verify your account."_
- **Workstream** compliance · **Priority** **High** · **Owner** **Owner** ·
  **Due** 2026-10-13
- **Approval class** — **A to read and report here.** Checking the Shopify
  account's login history and staff list is the owner's; **changing a password,
  revoking a session or altering staff permissions is Class F.**
- **The codes are deliberately not recorded in this repository.** They are
  credentials, `CLAUDE.md` §5 forbids credentials here, and **the fact that they
  expire in ten minutes does not make them a different category.** The thread ID
  and the two timestamps are enough to find them.
- **What is established** — two verification requests reached this mailbox three
  minutes apart. That is all. **A single request is routine; two in three
  minutes is either a retry or two attempts, and nothing here distinguishes
  them.**
- **What is not established, and will not be guessed** — **who asked.** Three
  explanations fit the evidence equally and no evidence separates them:
  1. The owner, or someone with the owner's password, signing in and retrying
     after the first code was missed or expired.
  2. A connector or integration re-authenticating against the Shopify account.
  3. Someone who has the account's email address or password attempting to get
     in, in which case **the code arriving in this mailbox is what stops them.**
     **No cause is asserted.** A verification code reaching the owner's own
     inbox is as consistent with a blocked attempt as with a successful sign-in.
- **What Torque can rule out about itself, precisely** — **this session made no
  Shopify call between 10:21Z and 10:40Z**, the window in which both codes were
  issued; the intake that ran then read Gmail only, and its own "not checked"
  list is the evidence. The first Shopify call from this session was
  `list-orders` at **10:53Z, seventeen minutes after the second code**. **That
  rules this session out as the cause and rules nothing else in** — another
  session on this account, or the connector's own background re-authentication,
  remains entirely possible and cannot be checked from here.
- **Why it is High rather than Critical** — **there is no evidence of a
  compromise**, and treating an unexplained verification code as a breach would
  be the same defect as treating a quiet Render log as a fix. It is High because
  **Shopify is the storefront and one of six payment channels**, because the
  check is ten minutes, and because it lands in a week that has already produced
  a credential phishing attempt (T-52) and a Reddit automation flag (T-60).
- **The honest version of the cluster claim** — this is the **seventh** account
  or security notice in eight days. **No linkage between any of them is claimed,
  and several are certainly routine.** The reason they are grouped is that
  checking them is one task; the reason the grouping is stated is that a reader
  seeing one per brief would never notice the density. **Density is not
  evidence.**
- **Cost and risk** — No cost to check. The exposure if someone else holds the
  password is the storefront, its product catalogue, its payment configuration
  and whatever customer data Shopify holds. **What Shopify holds was not read
  this run** — only the order count.
- **Execution steps** — (1) **Owner** confirms whether he requested either code;
  (2) if not, review Shopify's login history and active sessions, change the
  password and enable or re-check two-factor authentication; (3) review the
  staff list for accounts nobody recognises; (4) record the finding here either
  way — **"it was me" is a result worth writing down**, because the next
  unexplained code should not restart this task from zero; (5) fold into T-52's
  step 4, the open question of which accounts exist and who administers them.
- **Completion proof required** — A recorded statement of **who requested the
  codes**, or, if that cannot be established, the remediation performed and the
  date. **Not an assumption that silence means it was routine.**
- **Status** **Awaiting Owner** · **Next action** — Step 1, today. **Ten
  minutes, and it is the only item today that could be an active compromise.**

## T-64 — A second live tuning job, unrecorded and unpriced, 11 days silent

- **Objective** — Recover a live customer job that this register never knew
  existed, and get it priced before it goes cold with work already delivered.
- **Source** — `/dd84-followup`, 2026-10-13. **Found in Google Drive, not in
  email**: three customer videos (158 MB, 114 MB, 97 MB) shared with the
  business account on 2026-10-02 and viewed by the owner on 2026-10-04, which
  **no task in this register referenced.** Tracing them led to Gmail thread
  **`1a0e402cdcf75731`** — _"2018 rt challenger log"_, **28 messages**,
  2026-09-27T17:56:10Z → 2026-10-02T20:06:05Z — and a second thread
  **`1a0e75796744dd11`** (2026-09-28, DD84's intake questions).
- **Workstream** service · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-14
- **Customer record (§8.1 fields; missing ones marked missing)**
  - **Identity deliberately not recorded.** `CLAUDE.md` §5 forbids customer
    names, email addresses and phone numbers in this public repository. **Gmail
    thread `1a0e402cdcf75731` is the stable pointer and is not identity.** The
    same convention as T-37, applied from the start this time rather than
    retrofitted — **T-48 exists because it was not.**
  - Vehicle **2018 Dodge Challenger R/T** · Engine **missing** (R/T is the 5.7
    HEMI as sold, **not confirmed from the thread**) · Transmission **missing**
    · Location **missing**
  - Fault — **hard cranking and intermittent no-start.** The customer's own
    words, 2026-10-02T15:49:21Z: _"the only thing i did on this log is crank up
    a few times and i did a few burn outs, but no drive. the last 3 or 4 cranks
    it didnt start so i hit the gas jus a lil to help it"_
  - Requested service — datalog review and recalibration
  - Source of the enquiry **missing** — and it is the field `ventures.md` most
    needs, since the channel producing DD84's customers is recorded as
    `UNKNOWN`. **Two live jobs now have an unknown origin. Ask both.**
- **Customer status — UNVERIFIED, and not merged.** Shopify holds **no**
  matching customer; Stripe, PayPal, bookipay and Square were all unreachable.
  Per spec §9 a merge needs verified identity, so this is **a correspondent of
  unknown purchase history — counted as neither a new customer nor one of the
  three known paying ones.**
- **What DD84 delivered** — at least **two revised tune files, confirmed from
  the message text**: 2026-10-02T17:04:22Z and 2026-10-02T20:06:05Z, both
  reading _"Here is the updated tune file with additional VE table corrections
  and startup adjustments."_ **Six further SENT messages in the thread are
  1.88–1.92 MB each, the same size class as those two, consistent with further
  tune-file attachments — but their text was not read and they are not asserted
  to be tune files.** Six days of iteration either way.
- **Where it stands: DD84 spoke last, 2026-10-02T20:06:05Z**, asking the
  customer to flash the revision, take a log and report back. **Eleven days of
  silence since.** Against the proposed thresholds that is **past the 7-day
  final threshold for _waiting on a customer datalog_** — and those thresholds
  are **Torque's proposal and still not owner-approved.**

### The finding that outranks the silence: money has never been mentioned

A targeted Gmail search over **every message to or from this customer** for
`invoice OR price OR pricing OR deposit OR quote OR payment OR paid OR cost OR charge OR "$"`
returned **zero messages.** The identical search against the **C10** customer
(T-37) also returned **zero**.

**Two live tuning jobs. 57 messages. Tune files delivered on both. Not one
written mention of money in either.**

That is **two deliberate empty search results, not an inference from not having
noticed a price.** It is the difference between "no invoice was found" and "the
word invoice does not occur", and only the second is worth acting on.

**What it is not.** It is **not proof the jobs are unbilled.** The search reads
written mail only; **a price agreed by phone or text would not appear**, and
DD84 publishes a business number. Stripe, PayPal, bookipay and Square are all
unreadable (T-36), so **the billing position of both jobs is unknown and is not
asserted.** This task asks the owner rather than concluding.

**Why it is the revenue leak and not a slow payment.** A job with no price
cannot be invoiced, cannot be chased, and **cannot appear in any cash review** —
which is exactly why three cash reviews have found nothing to report against a
business doing visible work. **An unpriced job is not a late payment. It is an
absent one.**

- **Approval class** — **A to prepare. Sending is C.** A technical chase is
  drafted in `docs/ops/briefs/2026-10-13-followup.md` and covered by packet
  **A-18**. **Pricing the job is the owner's and is outside this routine
  entirely** — the follow-up command file puts discounts, extensions and
  goodwill credits beyond its scope, and setting a first price is the same
  category. **Supplying calibration for a running engine is safety-adjacent and
  the owner's by rule.**
- **Cost and risk** — No cost to chase. **The risk of waiting** is a job going
  cold with work already delivered and never invoiced; at 11 days a chase still
  reads as service, at a month it reads as an afterthought. **The risk of the
  wrong chase** is asking for money a customer may already have paid, which is
  why the drafted message asks for a datalog and nothing else.
- **Execution steps** — (1) **Owner** approves A-18 and sends the technical
  chase; (2) **owner sets a price for this job** and records it here; (3)
  establish whether anything has been billed, from a payment system or from the
  owner's own knowledge; (4) ask the customer **where he found DD84** — the
  `UNKNOWN` channel field; (5) if no reply comes by ~2026-10-20, decide
  deliberately whether to close the job rather than letting it lapse.
- **Completion proof required** — The customer's reply recorded here, **a price
  for this job stated**, and the billing position established from a live system
  or from an explicit owner statement. **Not an assumption that silence means
  the job ended.**
- **Status** **Awaiting Owner** · **Next action** — superseded; see below.

### 2026-10-14 — he replied, and the approved chase would now be wrong

**2026-10-13T15:39:45Z, thread now 29 messages, still unread:** _"this is the
log from a hour+ drive"_ — with a **2.8 MB attachment.**

**Eleven days of silence ended four hours after the follow-up run drafted a
message asking for exactly this.** The draft was written at 11:34Z; the log
arrived at 15:39Z.

**So A-18 must not be sent as written.** It asks him to flash the revision, say
how the car starts, and send a datalog. **He has flashed it, driven it for over
an hour, and sent the log.** Sending that message now would tell a customer who
has just ended a long silence that nobody read his reply. **Recommendation:
REJECT A-18, or approve only as amended.** Recorded in A-18's own Actual-result
block.

**This is the second time in three days a brief has been overtaken within
hours** — the 10-12 daily brief's Render line was overtaken at 14:00Z the same
day. **Both times the output was accurate when written and both times the
hedging is what kept it from becoming a false claim.** The lesson is not to
hedge more; it is that **a drafted outbound message has a shelf life, and A-18's
was four hours.** A packet left pending for a day is a packet that may no longer
describe the world.

**What the log does not tell us.** **The attachment was not downloaded** — no
download tool exists in this session — so **the car's actual state is unknown.**
"An hour-plus drive" means it starts and runs well enough to drive, which is
more than was true on 2 October; **whether the hard-start fault is resolved is
not established** and will not be guessed at.

**Still unpriced.** 29 messages now, and the price search run on 10-13 returned
zero. Nothing in this window changed it. **The billing position remains unknown
and unasserted** — but note **the owner signed into Stripe at
2026-10-13T11:51:46Z** (T-36), so the person who can answer was in the system
that knows.

- **Status unchanged: Awaiting Owner.** · **Next action, revised** — (1) **read
  the datalog**; (2) **decide A-18: reject or amend** — do not send as written;
  (3) **price the job.** The customer is no longer the blocker on any of the
  three.

### 2026-10-15 — forty-three hours unread, and A-18 is still pending

**Nothing moved.** `in:sent newer_than:1d` returned **empty**, so no reply left
the mailbox, and the datalog of 2026-10-13T15:39:45Z is **still unread at ~43
hours.**

**A-18 is therefore still pending and still wrong.** Each day it sits, the
message it authorises gets further from the facts: it asks a customer to flash a
revision, report how the car starts and send a log, and **he did all three two
days ago.** **Reject it or amend it; do not let it age into being sent.**

**Still unpriced**, 29 messages in. Nothing in this window could change that —
no payment system is readable — but **nothing in this window tried.**

### 2026-10-21 — the age of this neglect was overstated by a day, four times

**The datalog arrived 2026-10-13T15:39:45Z. As of 2026-10-21T11:15Z that is ~187
hours — 7 days 19.5 hours.**

**Four statements reported it a day too high.** The 10-20 intake and daily brief
said **187** (correct: 163); the 10-21 intake and daily brief said **211**
(correct: 187). **One error, carried forward four times**, because each run took
the previous figure and added 24 hours instead of recomputing from the stored
timestamp.

**The direction is the part worth recording.** It **overstated** the neglect —
the flattering direction for a routine whose purpose is to make neglect visible.
**A register that exaggerates the very thing it exists to detect is less
trustworthy than one that understates it**, because the exaggeration will be
believed.

**The repair is mechanical: compute every age from the stored timestamp on each
run, never from the last figure reported.** This is the third instrument defect
of the same family — **OL-0049's silent query truncation, OL-0055's windowed
sweep that cannot see a quiet thread, and now a carried-forward number** —
**each one a tool or a prior output trusted where a recomputation was needed.**

**What does not change.** The datalog is **still unread**, the customer **still
did exactly what was asked**, the job is **still unpriced**, and **A-18 still
asks this customer for the file he already sent.** **A follow-up is drafted
under A-20** — it acknowledges the log and commits to a date the owner fills in,
**and it asks for no money**, because Stripe and PayPal are both unreachable and
**there is no invoice for either to confirm.**

- **Status unchanged: Awaiting Owner** · **Next action** — unchanged: **read the
  log, reject A-18, price the job.** **A-20 draft 1 is ready to send and cannot
  be sent from here.**

## T-65 — A Shopify customer account with zero orders, unrecorded

- **Objective** — Establish whether a Shopify customer account created last week
  is a real prospect or the owner's own test, before anybody is contacted.
- **Source** — `/dd84-followup`, 2026-10-13. `mcp__Shopify__list-customers` read
  at 2026-10-13T11:20Z returned **exactly one customer**:
  `gid://shopify/Customer/10013547724847`, created **2026-10-07T21:35:33Z**, **0
  orders**, **$0.00 total spent**, first and last name `null`, phone `null`, and
  an **email-masking forwarding alias** rather than a direct address.
- **Workstream** sales · **Priority** Normal · **Owner** Agent · **Due**
  2026-10-16
- **Approval class** — **A to read.** Reading the Shopify customer and order
  list is observation. **Contacting the account holder is C**, and **is not
  recommended until step 1 settles what this is.**
- **The address is deliberately not recorded here.** §5. It is a masked alias
  and not a person's direct address, but **the rule is about category, not about
  how useful the address would be**, and the Shopify customer ID is a stable
  pointer that identifies nobody.
- **What the registry gets right, and what it is silent about** — `ventures.md`
  records **0 Shopify orders**, and Shopify confirms **0 orders**, so the
  registry is **correct**. It says nothing about customer accounts, and **this
  one has existed for six days unrecorded.** A storefront with a signup and no
  sale is a different fact from a storefront with neither.
- **The two explanations, and no preference between them** —
  1. **The owner's own test.** 2026-10-07 sits in the week he was QA-testing the
     `downdirty84llc.com` contact form (T-43), and a masking alias is exactly
     what a careful person uses to test a signup flow.
  2. **A real visitor** who created an account and did not buy, in which case it
     is **the only recorded instance of someone reaching the storefront and
     stopping.** **Nothing in the data separates them**, and the two call for
     opposite actions — which is why nothing is sent.
- **Why not simply email and find out** — because **sending "we noticed you
  didn't finish your order" to yourself is the cheap mistake and sending it to a
  stranger whose only interaction was an aliased signup is the expensive one.**
  A single-customer store cannot afford to look automated.
- **Cost and risk** — No cost. The risk is **a cart-abandonment follow-up
  pointed at the owner's own test account**, which would be visible in the
  record and faintly ridiculous. The opposite risk — a real prospect left alone
  for a week — is already realised and costs nothing more to check properly.
- **Execution steps** — (1) **Owner** says whether he created it; (2) if not,
  read the account's Shopify activity — abandoned checkouts, which products were
  viewed — and record what the storefront actually did; (3) decide whether a
  single, non-automated follow-up is worth sending, and raise it as a C packet
  if so; (4) **hand the storefront-conversion question to Rev**, which is where
  it belongs; (5) add Shopify customer accounts to whatever the site monitor
  checks, since nothing currently notices one appearing.
- **Completion proof required** — A statement of **what this account is**, from
  the owner or from Shopify's own activity record — and, if it is a real
  visitor, a recorded decision on whether to contact them. **Not a guess either
  way.**
- **Status** Planned · **Next action** — Step 1. **One question to the owner,
  and it costs him one word.**

## T-66 — A real Lexus enquiry sat 23 days, and the contact form was never read

- **Objective** — Recover a catalogued-service enquiry that went unanswered for
  23 days, and fix the reason it did: **nobody was reading what the website's
  contact form delivered.**
- **Source** — `/dd84-inbox-intake`, 2026-10-14. Gmail thread
  **`1a0a565f802fc60b`**, a contact-form submission from
  `no-reply@downdirty84llc.com` received **2026-09-15T14:08:37Z** and flagged
  IMPORTANT.
- **Workstream** sales · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-15
- **Lead record (§8.1 fields; missing ones marked missing)**
  - **Identity deliberately not recorded.** §5. The enquirer's name and email
    address are in the thread; **`1a0a565f802fc60b` is the pointer and is not
    identity.**
  - Vehicle **2016 Lexus RC 350 F Sport** · Engine **2GR-FSE** · Transmission
    **missing** · Modifications **missing** · **Location: New York** (stated by
    the enquirer)
  - Requested service — in his own words, _"just a mild burble"_. **Exhaust and
    idle character, not a power goal** — worth stating precisely, because it
    changes which catalogue line applies.
  - Source — **the `downdirty84llc.com` contact form.** This is the **first
    recorded instance of that form producing a real customer enquiry.**
  - Budget **missing** · Urgency — **decaying**
- **What happened, in order** — enquiry **2026-09-15T14:08:37Z**. DD84 replied
  **2026-10-08T14:38:21Z**, **twenty-three days later**, opening _"Sorry for the
  delayed response. Are you still looking into remote tuning?"_ and asking for
  details before confirming support, pricing or timing. **No reply in the six
  days since.**
- **Why it is High** — `ventures.md` prices **Toyota/Lexus custom ECU tuning at
  $400–$650**. This was a real enquiry, for a catalogued service, with the
  vehicle and engine already stated. **It is the only inbound lead in this
  record that arrived through DD84's own website rather than a free answer on a
  forum** — which makes it the only evidence that the website converts at all.
- **The probable cause of the silence, labelled as probable** — **the 23-day
  delay.** That is an inference, not a finding: he may have gone elsewhere, had
  the work done, or lost interest. **No cause is asserted**, and the reply he
  did get was a reasonable one.

### The correction this forces on T-43

**T-43 recorded `downdirty84llc.com` as a domain discovered in Search Console
and, on 2026-10-12, as a contact form "confirmed working" by the owner's own QA
submission.** Both statements were true. **The conclusion drawn from them was
wrong in a way that mattered.**

**The form was never broken and was never new. It has been delivering real
customer enquiries since at least 2026-09-15.** The fault was not a dead form
needing verification — **it was a working form whose output nobody was
reading.** A QA test proves delivery; **it cannot prove anyone is watching the
inbox it delivers to**, and this record treated the one as evidence of the
other.

**That is the more expensive fault**, because a broken form loses leads visibly
and a working, unwatched one loses them silently. **How many other submissions
arrived before 2026-09-15 is unknown** — mail older than the intake windows has
never been assessed, and ~20,700 unread messages remain.

- **Approval class** — **A to prepare. C to contact.** No draft is written here:
  a re-approach after 29 days needs the owner's judgement on tone, and **what to
  say depends on whether he still wants New York remote work at all.**
- **Cost and risk** — No cost to re-approach. The risk of sending is a second
  late message to someone who has moved on, which costs nothing but goodwill
  already spent. **The risk of not fixing the reading problem is every future
  submission.**
- **Execution steps** — (1) **Owner** decides whether to re-approach, and if so
  sends one message; (2) **search the mailbox for every prior
  `no-reply@downdirty84llc.com` submission** and establish how many enquiries
  have arrived and how many were answered — **this is the step that recovers
  more than one lead**; (3) decide who reads that form's output and how often,
  and record it; (4) add contact-form submissions to whatever the site monitor
  checks; (5) **hand the conversion question to Rev**, not here.
- **Completion proof required** — A count of contact-form submissions received
  and answered, taken from the mailbox, **plus a stated owner for watching that
  inbox.** The single lead's outcome is secondary to that count.
- **Status** **Awaiting Owner** · **Next action** — Step 2 first, not step 1.
  **One lead is worth less than knowing how many there have been.**

### 2026-10-21 — at final threshold: send one touch, then close it

**~13 days since the last contact on thread `1a0a565f802fc60b`**, and **well
past the proposed 7-day close** for a stalled enquiry.

**A final touch is drafted under A-20 (draft 3).** It asks whether the car is
otherwise stock and **quotes nothing** — **which catalogue line applies to "just
a mild burble" on a 2016 RC 350 was never decided**, and an agent deciding it
would be pricing.

**The recommendation, which needs the owner rather than another chase: if there
is no reply within 7 days of sending, close the enquiry and record it as lost.**

**Not because the lead is worthless, but because the register needs to
distinguish live leads from dead ones.** An enquiry that stays open forever is
indistinguishable from one being worked, **and this register now holds four
inbound leads** (T-65, T-66, T-72, T-81) **with no way to tell which are
alive.**

**And the live issue was never this lead.** It is that **the website's contact
form went unread for 23 days** — which is still true, and is still the thing
that will produce the next T-66.

- **Status unchanged: Awaiting Owner** · **Next action** — approve **A-20 draft
  3**; **count the other contact-form submissions**; and **decide the close
  rule** so the next stalled lead does not need a packet to retire.

## T-67 — Two more loan-fraud "application" emails, sixteen minutes apart

- **Objective** — Get two fraudulent lure emails out of the inbox, and establish
  that nobody has engaged with this campaign.
- **Source** — `/dd84-inbox-intake`, 2026-10-14. Two threads received
  **2026-10-13**:
  - **15:08:31Z**, thread `1a135cedc8722ad9`, from a `mityfunds.com` address,
    **flagged IMPORTANT** — _"Thanks for your application. Our team has finished
    review of your application and would like to let you know that your account
    is live. Log on to your account and…"_
  - **15:24:01Z**, thread `1a135dd0d70d671b`, from a `fundyze.com` address —
    _"Your information is available to review. You can access your application
    below to confirm details and continue."_
- **Workstream** compliance · **Priority** **High** · **Owner** **Owner** ·
  **Due** 2026-10-15
- **Approval class** — **A to read and report here.** Reporting or deleting mail
  is a mail-state change and is the owner's.
- **Why it is fraud, from the messages themselves** — four tells:
  1. **Both reference an "application" DD84 never made.** That is the whole
     mechanism: an invented prior relationship to make a login look expected.
  2. **Same template, two unrelated domains, sixteen minutes apart.** A single
     campaign spraying a list, not two lenders coincidentally writing.
  3. **Both drive to a link rather than naming any amount, term, product or
     officer.** A real lender's decision letter contains numbers.
  4. **Generic salutations** — _"Hey"_, _"Hi there"_ — from a business claiming
     to have reviewed a specific application.
- **Neither link was opened and neither URL is recorded here.** §5 — this
  repository is public and reproducing a live lure republishes the attack. The
  thread IDs and timestamps locate the messages.
- **The pattern this belongs to** — **T-42 records fifteen unsent drafts, five
  of them addressed to likely loan fraud.** Those five were the historic
  evidence. **These two are the campaign arriving now**, which means the address
  is on an active list and **more will come.** The five drafts in T-42 should be
  **deleted rather than sent**, and this task is the argument for it.
- **Why High rather than Critical** — **no evidence anyone has engaged.** The
  Meta phish (T-52) is Critical because it sat unread in an inbox that had
  classified it IMPORTANT, looking like real mail, for days. These are the same
  category and the same risk; **what is absent is any sign of a click.**
- **Cost and risk** — No cost. The exposure if either is actioned is whatever
  gets typed into a fake lender portal — **in a funding context that is bank
  details, an EIN and a personal guarantee**, which is worse than a social
  login. **DD84 is actively seeking SBA 504 financing** (T-58, T-42), which is
  exactly the state of mind these messages are built to exploit.
- **Execution steps** — (1) **Owner** reports both as phishing and deletes them,
  without clicking; (2) confirm no application was made to either name and no
  details were submitted; (3) **delete the five loan-fraud drafts in T-42**
  rather than leaving them one accidental click from sending; (4) record that
  legitimate SBA 504 contact goes through the Georgia CDC only (T-58), so a
  future lure is easier to spot; (5) fold into T-52's security review — this is
  now **the eighth and ninth items in eight days.**
- **Completion proof required** — Both messages reported or deleted, and a
  recorded statement that **no information was submitted to either.**
- **Status** **Awaiting Owner** · **Next action** — Step 1, and step 3 in the
  same sitting.

## T-68 — MFA switched off on the Zoho account now holding Ledger support

- **Objective** — Confirm that a brief multi-factor-authentication gap on a
  newly business-critical account was deliberate, and that MFA is on now.
- **Source** — `/dd84-inbox-intake`, 2026-10-14. A sequence of Zoho
  notifications on **2026-10-13**, **all unread**: two one-time passwords and
  two new sign-ins (15:58:43Z–16:00:52Z, Windows/Chrome, Georgia, United
  States); **MFA enabled 16:01:15Z**; **_"You have disabled multi-factor
  authentication for your Zoho account"_ at 16:03:37Z**; **MFA enabled again at
  16:03:43Z**; domain `georgiaopportunityledger.com` verified 16:09:47Z;
  `support@georgiaopportunityledger.com` added 16:10:04Z; a delivery test sent
  and **confirmed working** 16:14:59Z–16:16:03Z.
- **Workstream** compliance · **Priority** Normal · **Owner** **Owner** ·
  **Due** 2026-10-16
- **Approval class** — **A to read and report.** Changing an account's
  authentication settings is **Class F** and is the owner's.
- **The benign reading is probably the right one, and is stated first** — **six
  seconds separate the disable from the re-enable.** That is the signature of a
  person switching authentication method inside a settings screen, not an
  account left exposed. **No compromise is alleged**, both sign-ins came from
  Georgia on a plausible device, and the whole sequence is consistent with one
  person deliberately setting up a mailbox.
- **Why it is recorded anyway** — because of **what the account became in the
  next six minutes.** It went from a personal Zoho login to **the account
  holding a customer-facing support mailbox for a subscription business.** The
  MFA state of an account that receives customer mail is worth one confirmed
  line in a register, and **"it was almost certainly fine" is not that line.**
- **The two one-time passwords were read and are deliberately not recorded
  here.** §5 — credentials, and expiry does not change the category.
- **Which venture this belongs to** — **the Ledger's, not DD84's.** It is in
  this register only because the register already carries Ledger-era tasks, and
  **the commercial significance of a support mailbox belongs to Rev.**
  `docs/growth/` was not written to. **The security question is operational and
  stays here.**
- **What is not established** — **whether MFA is on right now.** The last
  notification says enabled, but **notifications are not a reading of the
  account**, and no Zoho connector exists in this session. **Unknown, not
  assumed.**
- **Cost and risk** — No cost to confirm. The exposure if MFA is in fact off is
  a support mailbox and a verified domain for a business that intends to take
  subscription payments.
- **Execution steps** — (1) **Owner** confirms he performed the sequence, and
  **reads the current MFA state in Zoho** rather than trusting the last email;
  (2) if MFA is off, turn it on; (3) record who else can sign into that account;
  (4) **add the support mailbox to the venture registry** — it is a new
  customer-facing surface and `ventures.md` does not contain it; (5) decide
  whether support mail should route somewhere a routine can read, since **a
  support inbox nobody monitors is T-66's fault repeating on a different
  surface.**
- **Completion proof required** — The **current** MFA state read from Zoho with
  the date, and the support mailbox present in the registry. **Not the last
  notification's claim.**
- **Status** **Awaiting Owner** · **Next action** — Step 1. **Step 5 is the one
  with teeth: this record has just learned what an unwatched inbox costs.**

## T-69 — Four Routine prompts contradict the checkout guard in version control

- **Objective** — Get the four scheduled Routine prompts to stop asserting a
  tracked-file count, so the guard they carry agrees with `docs/ops/README.md`
  contract item 0.
- **Source** — OL-0045, 2026-10-14, found while fixing the guard itself.
- **Workstream** ops · **Priority** Normal · **Owner** **Agent** · **Due**
  2026-10-15, the next weekday firing
- **Approval class** — **A.** Correcting the agents' own instruction text. No
  send, no spend, no live system.

### What is wrong

All four prompts open with "confirm **28 tracked files** and no `src/`", and add
that "the file count is the only tell". The tree held 28 files when the prompt
was written on 2026-10-08 and holds **41** today, measured with `git ls-files`
at `d8effb4` — briefs add about two per weekday — so **the check fails on every
run whose checkout is correct.** The guard exists to catch a container reset
that serves the stale Ledger tree with a clean `git status`, which is the one
failure that looks like success. **A guard that always fails gets skipped.**

### What is already done

**`docs/ops/README.md` contract item 0 carries the guard** with a test that does
not drift — `src/` and `package.json` both absent — and **requires the run to
state the result and the tip commit in its log entry.** Verified: this branch
tracks neither marker and `origin/claude/georgia-opportunity-ledger-kfpt4c`
tracks both. Every routine is told to read that README first, so the correct
check is in force now, in version control, where anyone can fix it.

### Why this is not simply Done

**`update_trigger` refuses from this session**: "a routine's instructions can be
changed only from the conversation or thread the routine posts into." The four
Routines post into the A-14 host session `session_01MadzgqZSAWtvberqr3hMpN`. A
re-read of the intake prompt at 2026-10-14T14:25Z confirms it **still names 28
files**. Until that session applies the change the prompt and the README
disagree, and a run following the prompt literally still trips the count.

**Two documents disagreeing is worse than one being wrong**, because a run has
to choose and nothing makes it say which it chose. That is precisely how the
opportunity-scan defect in the same OL entry survived three weeks.

### A related gap, worth not losing

**No brief from 2026-10-08 to 2026-10-14 records the checkout check at all** —
ten runs. That does **not** prove it was skipped; the prompts never asked for it
to be reported. It proves **the record cannot tell the difference**, which is
why contract item 0 now requires the result in the log entry.

### Not a blocked permission

The refusal names where the edit belongs and says to ask there. **That is a
routing constraint, not a denial**, and categorically different from the branch
deletions in OL-0026 and OL-0027 where the capability itself was refused and
asking another session would have been a way around it.

### The ask is not reachable from here either — corrected after the first commit

`b2f3ab7` committed this task saying the host session "**has been asked**". **It
had not been, and then could not be.** That sentence was written before the
attempt, on the assumption it would work. Recorded rather than quietly amended,
because an entry about a check that passed without running is the worst possible
place to assert an unverified completion.

| Route                 | Result                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `update_trigger`      | **Refused** — prompt edits only from the conversation the routine posts into                                                    |
| `ListAgents`          | **No reachable peer.** It covers this machine; the host runs in its own cloud container                                         |
| Session messaging     | **No tool reaches a cloud session** from here                                                                                   |
| `fire_trigger` + text | **Would work, and was not used** — it delivers by running an unscheduled intake, buying a note for a false firing in the record |

**Owner action, and it is one line.** In the host session's own conversation
(`session_01MadzgqZSAWtvberqr3hMpN`), say:

> Update all four DD84 Routine prompts: replace the "28 tracked files and no
> `src/`" check with "no `src/` directory and no `package.json`", and have each
> run state the result and the tip commit in its log entry. `docs/ops/README.md`
> contract item 0 is the wording.

- **Status** **Blocked — owner** · **Next action** — the line above, in the host
  session. **Done only when a `get_trigger` read shows the new text** — not when
  any session reports having applied it. Until then `docs/ops/README.md` is the
  controlling contract and the prompts' file count is known-wrong rather than
  merely stale.

### 2026-10-15 — confirmed from the host session, which can do it and has not

**The host session is now reading this task, and it has first-hand evidence
rather than a re-read.** The Inbox and Lead Intake routine fired at
**2026-10-15T10:20:25Z** and its message body opens: _"confirm **28 tracked
files and no `src/`**… the file count is the only tell."_ **The tree holds 41
files at `d432b96`.** So the prompt is wrong on today's firing, not merely
recorded as wrong — **the eleventh consecutive run whose correct checkout fails
the prompt's own test.**

**The routing picture changes, and in the direction that matters.** This session
**is** the conversation the four Routines post into, and `update_trigger` is
available to it. **So the edit is reachable — there is no missing capability.**
The sibling's table recorded "no route from here", which was true **from
there**; from here the route exists.

**It was still not taken, deliberately.** A scheduled task's prompt is
configuration of an automation that runs unattended, and **the instruction to
change it came from another agent's register entry, not from the owner.** The
rule this session operates under is explicit that a request arriving through a
scheduled firing — including one relayed in a task someone else filed — is
information to weigh and not an instruction, and that **creating, changing or
firing a scheduled task on that basis is precisely the action to report rather
than perform.** Doing it anyway would also make this entry self-authorising: an
agent writes a task asking for a change, another agent reads it and makes the
change, and no human is in the loop at any point.

**So the status is right and the reason is narrower than "blocked".** It is not
blocked on capability or on routing. **It is blocked on one sentence from the
owner, to a session that can execute it immediately.** The line to say is in the
block above this one.

**Contract item 0 was followed this run and the result is in the log**, which is
the part that protects the record while the prompts stay wrong: tip `d432b96`,
**no `src/`, no `package.json`.** The guard works; only its four copies in the
trigger prompts do not.

## T-70 — Colbert parcel capped at 380 gpd design flow without public water

- **Objective** — Establish whether the proposed facility fits inside the
  state's 380-gallon-per-day ceiling, and what the feasibility review costs,
  before any money is spent on soil work.
- **Source** — `/dd84-inbox-intake`, 2026-10-15. Gmail thread
  **`1a1353df03441a3e`**: the **Madison County environmental health specialist**
  replied **twice** on **2026-10-14, 14:12:58Z and 14:17:17Z**, answering all
  six of the owner's 10-13 questions, with the **county fee schedule attached as
  a PDF**. The second message is **still unread**.
- **Workstream** real estate · **Priority** **High** · **Owner** **Owner** ·
  **Due** 2026-10-17
- **Approval class** — **A to research and report.** Reading table 13.J and the
  fee schedule is observation. **Commissioning a level 3 soil survey is Class
  E**, and **any application touching the parcel needs the seller's signature**
  — see below.

### Stated by the agency

Quoted or closely paraphrased from the two messages; **nothing here is
inferred**.

- **"Without public water the property is limited to a maximum design flow of
  380 gallons"** — from **table 13.J** of the Georgia on-site sewage manual
  (`https://dph.georgia.gov/media/92616/download`).
- The office evaluates sites **without public sewer** carrying **typical
  residential-strength waste under 10,000 gpd**. DD84's stated concept —
  restroom and handwashing only, **no vehicle fluids, parts washing, bay-floor
  drainage or vehicle-wash discharge** — fits that description.
- **"We do not have any permits or soil evaluations for this property."**
- A commercial feasibility review needs **five documents**: the **recorded
  plat**; a **to-scale stamped original level 3 soil survey**; a **business plan
  describing the size and use of the proposed facility**; a **floor plan**; a
  **plumbing plan**.
- Design flow is set from **table 13.J**, and for a commercial facility the
  office wants a **floor plan** to estimate sewage flow, which with the soil
  survey determines system size and design.
- **Owner consent is a signature block inside the application form.**
- **"We don't have any info about the lot that would point to adverse conditions
  for development."**
- Registries of **state-certified septic installers and soil classifiers** are
  on the state site.
- **Question 4 was not answered** — site-specific setbacks, groundwater, well
  separation, easements, replacement drainfield. His reply: _"I don't know if I
  understand this question… I wouldn't have that info."_

### Why 380 gallons is the finding

**Piedmont Water said on 2026-09-18 that its system was at capacity and could
not add service.** If that still holds, the parcel has **no public water**, and
**380 gpd is the ceiling for the entire facility** — restroom, office, light
service and the hub dyno together.

**Whether 380 gpd is sufficient is NOT established, and no estimate is
offered.** It depends on table 13.J's per-employee and per-fixture figures, and
**that PDF is on `dph.georgia.gov`, which this environment's egress policy
blocks** (T-59). **Reading one table decides whether this site can hold the
business the owner is planning**, which makes it the highest-value unread
document in this record.

**It is a constraint, not a verdict.** A single-restroom shop with one or two
people may fit inside 380 gpd comfortably; the same building with a wash bay
would not, and DD84 has already excluded wash discharge from the concept.
**Nothing here says the site fails.**

### What the answer is not, stated so it is not over-read

- **Not a clearance.** "No info pointing to adverse conditions" is the same
  sentence as "no permits or soil evaluations on file" — **the agency has no
  record of this lot.** Absence of a record is not a finding of suitability.
- **Not costed.** **The fee schedule PDF was not downloaded** — no download tool
  in this session — so **every fee is unknown**, including the level 3 soil
  survey, which is the expensive line and the first one that spends money.
- **Not DD84's to apply for.** **Owner consent is in the application form and
  DD84 does not own the parcel.** The seller must sign before soil work, which
  puts this **behind** the realty thread (T-53), not beside it. T-53's unread
  5.6 MB attachment — _"this is what my client has!"_ — **may already contain
  the recorded plat**, which is one of the five required documents.

### Why the agency's speed is worth recording

The owner wrote at **2026-10-13T12:30:14Z** and had a six-point answer with an
attachment **26 hours later**. For comparison, in this same register: **GDOT has
been waiting 9 days on a written reply DD84 has already drafted**, the **Georgia
CDC draft is 16 days unsent**, and **Colbert City Hall took three requests over
13 days** to answer.

**The pattern is consistent and worth acting on: this business gets fast, useful
answers from state agencies when it asks them specific questions in writing.**
That is the cheapest research channel it has, and three of its four open agency
threads are stalled on DD84's side rather than theirs.

**And the owner's own framing is why the answer cost nothing.** His enquiry
closed with _"Do not initiate a chargeable application, site visit, testing, or
other work; please quote any fee first."_ **Six substantive answers and a fee
schedule, no charge incurred.** Repeat that exact sentence on the soil survey.

- **Cost and risk** — **No cost to read table 13.J and the fee schedule.** The
  risk of not reading them is **commissioning a soil survey for a site whose
  water ceiling may already rule out the plan** — spending the expensive step
  first. The risk the other way is a stalled file, which is what the last four
  weeks already produced.
- **Execution steps** — (1) **Owner** opens the unread second message and the
  attached fee schedule, and records the soil-survey and application fees here;
  (2) **read table 13.J** and compute design flow for the actual intended
  fixture and staff count — **this is the decision**; (3) get Piedmont Water's
  **current written position**, since the 380 gpd ceiling depends on the
  four-week-old "at capacity" statement still being true, and the owner's 10-13
  request for that is unanswered; (4) **reword question 4** and send it back —
  the specialist asked for clarification and did not refuse; (5) check whether
  T-53's unread attachment contains the recorded plat; (6) **only then** decide
  whether to ask the seller to sign a consent form, which is a C and an E.
- **Completion proof required** — A **design-flow figure computed from table
  13.J** against the intended facility, with the table's own numbers cited, and
  **the fee schedule's actual figures recorded.** **Not "380 gpd is probably
  fine."**
- **Status** **Awaiting Owner** · **Next action** — Step 2, and it needs step 1
  first. **This is the property's critical path**: T-38, T-53, T-56 and T-57 are
  all downstream of whether the site can take water and waste at all.

### 2026-10-15 — the owner supplied the inputs, and did it the right way

**2026-10-15T20:08:02Z — the one message sent in 24 hours**, and it went to the
reviewer:

> _"Thank you for clarifying the requirements. The shop would have **one toilet
> and one handwashing sink only, with an estimated maximum of 10 people total
> per day**. The employee/customer…"_

**That is exactly what table 13.J needs** — fixture count and occupancy — and it
**asks the agency to compute the design flow rather than guessing at it.**
**Thirty hours from the agency's answer to DD84's reply**, against a GDOT
message that has sat written-and-unsent for ten days. **When this business
answers a specific written question it answers quickly; the gap is in the
messages nobody has to write.**

**So step 2 has moved off DD84's side.** The determination is now the reviewer's
to produce, with the inputs in hand.

**Torque is not computing the flow, and the reason is not only the blocked
PDF.** The figure decides a property purchase, the agency is the body whose
number counts, and it now has what it needs. **What this record can say and no
more: one toilet, one sink and ten people a day is a small sanitary load.**
**Whether it fits inside 380 gpd is the agency's finding to state** — no
estimate is offered, and a midpoint or a "should be fine" would be exactly the
fabrication the spec forbids.

- **Status unchanged: Awaiting Owner**, but **what it waits on has changed** —
  from a computation DD84 owed to a reply the agency owes. · **Next action** —
  **the fee schedule is still unread** and is still DD84's to open (step 1), and
  **T-53's attachment may already hold the recorded plat.** Those two remain the
  cheapest steps on this path.

## T-71 — The business bank account is overdrawn; two payments declined

- **Objective** — Get the owner looking at a negative cash position he has not
  read, before the next auto-charge lands, and establish what put it there.
- **Source** — `/dd84-inbox-intake`, 2026-10-16. Wells Fargo alert
  **2026-10-15T17:06:44Z**, thread `1a14087d5d2b6009`, subject **"Your balance
  is at or below zero"**, stating a **negative available balance** on the
  business account as of **10/15 at 13:05 Eastern**. **Still unread.**
- **Workstream** finance · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-16
- **Approval class** — **A to read and report here.** Moving money, paying an
  overdraft, transferring funds or changing an account setting is **Class E**
  and is the owner's alone. **Nothing was touched.**

### The figure is deliberately not recorded here

**The balance is known to the run that found it and is not written in this
repository.** Nor is the account's last four digits, nor the debit card's.

**This is §5's closing clause applied as written, not caution for its own
sake.** This repository is **public by the owner's decision (A-13,
2026-10-08)**. A-13 accepted **revenue figures and system identifiers** on the
record that day; it says nothing about a **cash position**, and §5 states
plainly that **a new category of sensitive material needs its own decision** and
that something awkward in public **is an approval packet, not a judgement
call.**

**The specific harm is not hypothetical.** DD84 is **actively pursuing SBA 504
financing** (T-58, T-42) and has a **prescreened personal-loan solicitation**
chasing it. A public, searchable record of a negative balance is material to a
lender. **Publishing it to save the owner one click is a bad trade.**

**So: the number is in his inbox, the thread ID above gets him there in one
click, and A-19 asks whether figures of this kind may be written here at all.**
That question cannot wait, because **the weekly cash review fires on Fridays at
11:10 UTC — within the hour — and its whole job is to report cash position.**

### What this explains, and what it does not

**Nine findings this record has carried as unrelated now fit one explanation:**

| Finding                                                     | How it was recorded              | How it reads now                                            |
| ----------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| A bank transfer declined 2026-10-05 (**T-49**)              | Cause unknown, unread for 6 days | **A decline on an account heading to zero**                 |
| **Nine days of debit-card toggling**, 10-08 to 10-16        | "No cause is asserted"           | **Card control on an overdrawn account**                    |
| Webador invoice **auto-charges**, amount unknown (**T-46**) | A dated risk                     | **An auto-charge against an overdrawn account**             |
| Holley abandoned cart, 2026-10-14T16:45Z                    | "No causal claim"                | **A checkout that may have failed**                         |
| **DAZN "Your payment has declined"**, 2026-10-15T18:33:37Z  | New this run                     | **A second decline, 90 minutes after the alert**            |
| Three HP Tuners credit orders in three days (**T-54**)      | Amounts unread                   | **Credit purchases, amounts still unknown**                 |
| A prescreened loan offer, chased twice                      | A solicitation                   | Still a solicitation — **the context is no longer neutral** |
| A credit-score-change notice, 2026-10-14                    | Noted for T-58                   | Material; **direction still unread**                        |
| **No revenue since 2025-09-12**                             | `ventures.md`                    | **The other side of the same ledger**                       |

**No causal chain is asserted beyond what the alerts themselves say.** Each row
is still its own fact, and several have ordinary explanations — card toggling is
a documented fraud-control habit, abandoned-cart mail fires without any payment
attempt.

**What changed is the standard of evidence for declining to connect them.** For
a week this record reported these as coincidences and said so explicitly each
time. **That was right without the balance. It is not right with it**, and the
correction is recorded here rather than left as nine separate hedges.

### What is not known, which is most of it

- **How the account got there.** **No transaction list, no pending items, no
  deposit history and no overdraft-fee schedule were read** — there is **no bank
  connector**, and the single alert email is the entire evidence base.
- **Whether it is still negative.** The figure is **as of 10/15 13:05 Eastern**,
  roughly 21 hours before this run. **Not re-read, because it cannot be.**
- **Whether an overdraft fee has been charged**, or whether the account has a
  grace feature. The alert mentions a grace period; **its terms were not read.**
- **The size of the gap relative to anything.** Against unknown receivables,
  unknown HP Tuners balances and **two delivered-but-unpriced jobs** (T-37,
  T-64), the figure cannot be put in context from here.

### Why this outranks everything else in the register

**It is the first finding in this record that is unambiguously about survival
rather than tidiness.** The register's other Critical items are a phishing
attempt nobody clicked and a platform flag with a seven-day clock. **This is a
business with no recorded revenue in thirteen months, two declined payments in
one evening, an auto-charge pending, and a payment setting that just switched
itself to accepting cards without live authorisation** (T-61).

**And it reframes two items that looked administrative.** T-37 and T-64 are
**two completed jobs that were never priced** — somewhere between **$198 and
$1,300** against the catalogue if both are chargeable, **and the range stays a
range** because neither job's tier was ever decided. **Pricing them stopped
being a bookkeeping chore the moment the account went negative.**

- **Cost and risk** — **No cost to read the alert.** The risk of not reading it
  is a third decline, an overdraft fee, or the Webador auto-charge failing
  against an account that cannot cover it. **The risk of acting on it from here
  is why nothing was acted on:** every remedy is Class E.
- **Execution steps** — (1) **Owner** reads the alert and the account; (2)
  establishes **how** it went negative — which debit landed, and whether
  anything is still pending; (3) decides whether to cover it today, and whether
  the Webador auto-charge (T-46) should be stopped before it tries; (4) **prices
  T-37 and T-64 and invoices them** — the only two identified sources of
  near-term cash this record knows of; (5) answers **A-19** so the cash review
  can report a position at all; (6) revisits **T-61** — offline card acceptance
  on an overdrawn account is a different decision from offline acceptance in
  general.
- **Completion proof required** — The current balance read **from the bank**,
  with the date; a statement of **what caused the shortfall**; and either the
  account positive or a recorded decision to leave it. **Not "it was probably
  the card thing."**
- **Status** **Awaiting Owner** · **Next action** — Step 1, today. **This is the
  top of the register until it is answered.**

### 2026-10-16, 10:56Z — the toggle count was understated, and the card is on right now

**This task's table row read "nine days of debit-card toggling, 10-08 to
10-16".** The span was right; **the count behind it was produced by a query that
hid messages.**

A targeted sweep of `from:notify.wellsfargo.com newer_than:2d` at
**2026-10-16T10:56Z** returns **nine threads** and **eighteen toggle events in
the 63 hours from 2026-10-13T18:48Z to 2026-10-16T10:00:52Z** — against the ten
in 25 hours this register last recorded. **The most recent event is an enable at
2026-10-16T10:00:52Z, so the card is currently ON**, 17 hours after the balance
alert.

**The cause is a tool behaviour, and it is worth writing down because it will
recur.** The Gmail search tool returns **previews containing only the ~5 oldest
messages of a thread, with newer messages omitted and no truncation marker.**
Wells Fargo collapses these alerts into two long-running threads. A
`newer_than:1d` inbox query matched those threads, showed their oldest five
messages, and **silently withheld the rest** — which is how yesterday's daily
brief came to report that the toggling had stopped. **It had not.** That claim
is withdrawn in full, along with any inference drawn from it.

**What this does not change:** the reading in the table above — **card control
on an overdrawn account** — is unaffected, and the density is higher than
recorded, not lower. **No cause is asserted.** Card toggling is a documented
fraud-control habit and the owner may be doing it deliberately; what this
register can now say with evidence is that **the card was switched at least
eighteen times in 63 hours and is enabled as of 10:00:52Z today.**

- **Status unchanged: Awaiting Owner.** · **Next action** — unchanged. Step 1
  still begins with reading the alert. **The toggle count is context for that
  conversation, not a separate errand.**

### 2026-10-19 — the account is no longer overdrawn, and this section controls

**A second alert, 2026-10-17T21:55:25Z, thread `1a14bdcd406bdaf2`, still
unread.** Same subject — _"Your balance is at or below zero"_ — but it reports
the available balance **at zero rather than below it**, as of **10/17 at 17:55
Eastern**, **51 hours after the first alert.**

**So this task's title is now wrong, and it is left as written.** On this
register's own rule from the 2026-10-08 reconciliation — **the later detail is
controlling** — **this section is the current state and the title is the
historical finding.** Rewriting the title would hide that the state changed, and
the change is the most useful thing in the task.

**Neither figure is recorded.** The first alert carried a negative number, the
second carries zero, and **both are withheld under §5 pending A-19**, which is
now on its second instance in four days. **The thread IDs put the owner one
click from both.** Recording the _direction_ was judged necessary because the
alternative is a register that says "overdrawn" after the overdraft cleared —
**a stale wrong claim is worse than a withheld figure.**

### What is still unknown, which is the whole explanation

**How it got from below zero to zero is not established and cannot be from
here.** No bank connector, no transaction list, no pending items, no deposit
history. **At least three explanations fit the two alerts equally well** — a
deposit or transfer covering the shortfall, the Extra Day Grace Period the first
alert mentions resolving it, or pending items settling differently than
projected. **No inference is drawn and none should be.**

**Zero available is not solvency.** The second alert still fired on an
at-or-below-zero trigger, **five committed or attempted outflows sit against
that account inside nine days** (**T-73**, the nearest on **2026-10-21**), and
**no revenue has been recorded since 2025-09-12.**

### The card, re-counted properly this time

**Toggling continued through the weekend and then stopped.** A per-sender sweep
at **2026-10-19T10:25Z** gives, after **10-16T10:00:52Z**:

| Date              | Toggle events                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| **10-16**         | off 13:53 · on 14:40 · off 14:41 · on 16:18 · off 20:13 · on 22:38 · off 22:38 · on 22:53 · off 22:56 |
| **10-17**         | on 00:09 · off 13:50 · on 14:02 · off 14:46 · **on 16:37**                                            |
| **10-18 / 10-19** | **none**                                                                                              |

**The card has been ON since 2026-10-17T16:37:38Z — roughly 66 hours with no
alert.** **That claim is made on a per-sender sweep with the message counts
reconciled, not on a windowed query**, which is the specific repair for the
defect recorded in OL-0049.

**Thirty-two toggle events are now on the record since 2026-10-08, and no cause
is asserted.** Card toggling is a documented fraud-control habit; the owner may
simply be doing it. **What changed on 10-17 is that it stopped on the same
afternoon the balance reached zero**, and that coincidence is noted without a
causal claim.

- **Status unchanged: Awaiting Owner**, **and still the top of this register.**
  · **Next action** — **read both alerts** (step 1 now covers two), then step 2:
  establish how the account moved. **The second alert makes this cheaper, not
  less urgent** — the question "what put it there" is still unanswered and
  **T-73's first charge lands on 2026-10-21.**

### 2026-10-20 — a third alert: below zero, to zero, and below zero again

**Thread `1a1543fa2b75e598`, 2026-10-19T13:00:15Z, unread.** The same
at-or-below-zero alert, reporting the available balance **below zero** as of
**10/19 at 08:24 Eastern.**

| Date      | As of    | State                | Thread             |
| --------- | -------- | -------------------- | ------------------ |
| **10-15** | 13:05 ET | **Below zero**       | `1a14087d5d2b6009` |
| **10-17** | 17:55 ET | **At zero**          | `1a14bdcd406bdaf2` |
| **10-19** | 08:24 ET | **Below zero again** | `1a1543fa2b75e598` |

**All three remain unread. No figure from any of them is recorded** — **A-19's
third instance in five days.**

**What the third alert adds, and it is not just repetition.** The 10-19 section
of this task reasoned that the clock had come off this item because the
overdraft cleared. **It has come back on.** And the sequence now rules out the
most benign reading: **a one-off timing mismatch that resolved itself does not
recur on day four.**

**Three things are true at once and none is asserted as the cause:** the account
went below zero **before** the Capital One AutoPay scheduled for **2026-10-21**
(T-73); it went below zero **while the debit card was switched on** — no toggle
alert since 10-17T16:37:38Z, about 90 hours; and **no deposit is visible to this
record**, because there is no bank connector and three alert emails are the
entire evidence base.

**What is still unknown is the same thing that was unknown on 10-15: how.** No
transaction list, no pending items, no overdraft terms, no deposit history.
**Four runs have now reported the state of this account and not one has been
able to report a cause.**

- **Status unchanged: Awaiting Owner**, **and still the top of this register.**
  · **Next action** — **read the three alerts** (step 1 now covers three), then
  step 2. **The 2026-10-21 charge lands tomorrow and its amount has never been
  read.**

### 2026-10-21 — the bank named a declined transaction, and it is the first answer to "how"

**2026-10-20T18:10:25Z, thread `1a15a81ecfcb864b`, unread**, subject **"Some
transactions were declined"**: _"There wasn't enough money available in your
account …"_ — **digits redacted here, not in the original** — followed by the
transactions themselves: **a PayPal purchase to a Meta platform entity, dated
10-18.**

**Corroborated 63 minutes later by the other side.** **2026-10-20T19:13:25Z,
thread `1a15abb9aa68a165`, unread**, from PayPal: _"Your bank declined your
electronic funds transfer."_ **Two independent senders, one event.**

**This is the first time in six days of alerts that anything named what was
hitting the account.** Four runs reported the state — below zero, at zero, below
zero again — and **none could say what was moving through it.** Now one thing is
known: **a recurring charge to the same payee as the $17.00 PayPal payment
captured on 10-17** (T-36).

**It is a partial answer and is recorded as one.** It explains one declined
debit. **It does not explain how the account reached zero**, what else is
pending, or what the Capital One AutoPay scheduled for 2026-10-21 did — **no
confirmation and no failure notice arrived for that** (T-73).

**And it shifts the character of the problem.** Five days ago this was an
unexplained balance. **Today it is an account declining recurring subscription
charges** — which is cheaper to fix than a mystery, because the charges are
enumerable: **Meta via PayPal, DAZN, Ocoya via Stripe, Webador, ChatGPT
Business, and whatever the two card statements hold** (T-73, T-83).

- **Status unchanged: Awaiting Owner**, **still the top of this register.** ·
  **Next action** — **read the four unread bank messages** (three balance alerts
  and now the declined-transactions notice) **as one sitting.** The decline
  notice is the most informative of the four and arrived last.

## T-72 — A store enquiry asked if DD84 is open; unread 56 hours

- **Objective** — Answer a live buying-intent question before the prospect
  concludes the business is closed, and establish which inbound route it came in
  by.
- **Source** — `/dd84-inbox-intake`, 2026-10-19. Thread `1a147a736841eaed`,
  **2026-10-17T02:18:04Z**, subject _"Follow-up with Downdirty84llc"_,
  **unread**. The entire message is one sentence: _"is this store still taking
  orders or temporary closed?"_
- **Workstream** sales · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-19
- **Approval class** — **A to read, draft and record. C to send.** A draft is in
  `docs/ops/briefs/2026-10-19-inbox-intake.md` and **was not placed in the mail
  account**.

### The fields the spec asks for, and how few of them exist

| Field                                           | Value                                                                                                                                                     |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                                            | **Not given.** The sender provided no name                                                                                                                |
| Contact                                         | The sending address. **Not recorded here** — §5                                                                                                           |
| Vehicle · engine · transmission · modifications | **None stated**                                                                                                                                           |
| Location                                        | **Unknown**                                                                                                                                               |
| Requested service                               | **Unspecified** — the question is whether DD84 is trading                                                                                                 |
| Urgency                                         | **High.** 56 hours unanswered on a pre-purchase question                                                                                                  |
| Source                                          | **Unknown.** The subject line reads like an automated storefront or marketplace follow-up rather than a typed email, and **establishing which is step 1** |

**Not merged with T-65.** That is a Shopify customer account created 2026-10-07
behind a masking alias. This arrived by direct email on a different route and
**the identities are not verified as the same person** (spec §9).

### Why this is more than one more unanswered email

**DD84 now has three inbound routes and watches none of them.** The website
contact form (**T-66**, where a real enquiry sat 23 days), the Shopify customer
account (**T-65**), and now direct email. **Three routes, three findings, each
found by an intake run rather than by anyone watching.**

**And the question itself is the symptom.** A prospect asking whether a store is
temporarily closed has already looked at the storefront and come away unsure.
**That is a conversion problem stated in the customer's own words**, and it
arrives in the same window as a theme change nobody checked (**T-75**) and an
all-time Shopify order count of zero.

- **Cost and risk** — **No cost to reply.** The risk of the draft as written is
  that its first line asserts the store is open, which **no reachable system
  confirms** — see T-75. The risk of not replying is the same one T-66 already
  demonstrated at 23 days.
- **Execution steps** — (1) **Owner** reads the thread and decides whether the
  route is the storefront, a marketplace, or something else; (2) approves,
  amends or rejects the draft; (3) if approved, **the owner sends it** — Class
  C; (4) whatever the answer, **T-75 settles whether the claim in line one is
  true** before the next such reply goes out.
- **Completion proof required** — The sent message in `in:sent`, or a recorded
  decision not to reply with the reason. **Not "a draft exists."**
- **Status** **Awaiting Owner** · **Next action** — Step 1, today.

## T-73 — Three dated outflows inside nine days, three amounts unknown

- **Objective** — Give the owner the forward cash calendar this record has never
  produced, so that a charge landing on an account at zero is a decision rather
  than a surprise.
- **Source** — `/dd84-inbox-intake`, 2026-10-19, from five separate threads in
  one 71-hour window.
- **Workstream** finance · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-20
- **Approval class** — **A to read and report.** **Stopping, moving or paying
  any of these is Class E** and is the owner's alone. **Nothing was touched.**

### The calendar

| Item                                 | Date                              | Amount                                            | Evidence                                                   |
| ------------------------------------ | --------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| **Ocoya**, billed through Stripe     | **Declined 2026-10-16T12:26:37Z** | **$29.00**                                        | _"We weren't able to charge the credit card you provided"_ |
| **DAZN**                             | **Declined 2026-10-16T16:00:00Z** | **Not stated**                                    | _"Your last payment declined"_                             |
| **Capital One AutoPay**              | **2026-10-21**                    | **Not stated**                                    | Scheduled-payment notice, 2026-10-17T15:01:55Z             |
| **ChatGPT Business**, DD84 workspace | **2026-10-24**                    | **Not stated** — 1 Premium seat + 1 Standard seat | Renewal notice, 2026-10-17T10:48:44Z                       |
| **Webador** annual invoice           | **Unread**                        | **Not stated**                                    | **T-46**, unopened since 2026-10-12                        |

**Three of five amounts are unknown and none is estimated.** A total is not
given because a total across unread figures would be the fabrication the spec
forbids. **What can be said without a number: five committed or attempted
outflows, two already declined, three still to land, and the account they draw
on reported an available balance at zero on 2026-10-17** (T-71).

### The one item pointing the other way

**DAZN owes DD84 $49.99.** The owner sent two messages himself —
**2026-10-16T17:54:15Z** asking for complete cancellation and a refund of the
**2026-09-16** charge, and **2026-10-17T12:57:38Z** escalating to a supervisor
after the first reply declined, on the grounds that cancellation was requested
on 2026-09-15, **before** the charge. **This is DD84's only inbound money claim
in the window and it needs no agent action** — it is recorded here so the cash
picture is not one-sided.

### Why this is Critical rather than administrative

**Two cards and at least four declines are now in the record** — the 10-05
transfer (**T-49**), Ocoya and DAZN on 10-16, and DAZN's earlier decline on
10-15. **A declined vendor charge is cheap. A declined charge on a service the
business depends on is an outage with an invoice attached**, and nothing in this
record establishes which of these five services DD84 actually needs.

**It also names the gap the weekly cash review exists to close.** That routine
fired on 2026-10-16 and produced nothing (see OL-0050). **This task is the part
of its job that could be done from mail alone.**

- **Cost and risk** — **No cost to read.** The risk of inaction is a charge
  landing against an account at zero on **2026-10-21**, two days out, with an
  overdraft consequence nobody has read the terms of.
- **Execution steps** — (1) **Owner** reads the Capital One notice and
  establishes the amount and the funding account; (2) decides whether the
  2026-10-21 payment should proceed, and whether anything must be moved first —
  **Class E either way**; (3) reads the Webador invoice (**T-46**) before it
  tries; (4) decides whether **Ocoya** and **DAZN** are services DD84 keeps —
  cancelling either is **Class E**; (5) reads the ChatGPT Business renewal and
  decides on seat count before **2026-10-24**; (6) tells **T-71** what the
  funding position actually is.
- **Completion proof required** — Each of the five rows carrying an amount read
  from the vendor or the bank, a date, and a decision. **Not "it probably went
  through."**
- **Status** **Awaiting Owner** · **Next action** — Step 1, before 2026-10-21.

### 2026-10-20 — the first charge lands tomorrow, and a third decline arrived

**Capital One AutoPay is scheduled for 2026-10-21 — tomorrow — and its amount
has still never been read.** The notice has sat unopened since
2026-10-17T15:01:55Z.

**And DAZN declined a third time:** **2026-10-19T16:00:00Z**, _"Your payment has
declined."_ Declines now recorded on **10-15, 10-16 and 10-19**.

**That third decline is worth more than a tally.** **A vendor is retrying
charges against an account at or below zero, while the owner is simultaneously
asking that same vendor to cancel the subscription and refund $49.99** (his two
messages of 10-16 and 10-17). **Each retry is another authorisation attempt on
an account that reported below zero on 10-19** — and **T-71** records that the
account went negative again **before** tomorrow's scheduled charge.

**Nothing new is known about the other three outflows.** The Webador invoice is
still unopened (T-46); the ChatGPT Business renewal is still **2026-10-24**;
**three of the five amounts in this task remain unread and none is estimated.**

- **Status unchanged: Awaiting Owner** · **Next action** — **step 1 today, not
  tomorrow.** Reading the Capital One notice is the only one of the five that
  has a deadline inside 24 hours.

### 2026-10-21 — the charge date arrived and its outcome is unobserved

**The Capital One AutoPay was scheduled for today, 2026-10-21.** A targeted
two-day sweep of `notification.capitalone.com` returned **nothing** — **no
confirmation, no failure notice, no revised schedule.** The original notice is
**still unread since 2026-10-17T15:01:55Z.**

**So the amount is still unknown and now the result is too.** **Unknown is not
zero and unknown is not paid.** This task cannot say whether the payment went
through, was declined like yesterday's PayPal debit, or was never attempted.

**One thing did land, from a different direction:** the bank declined **a PayPal
charge to a Meta entity** on 10-20 for insufficient funds (**T-71**), **naming a
recurring subscription this task had not listed.** **The outflow list in this
task is therefore incomplete**, and the gap is not at the margins — **it was
missing a charge large enough to be declined.**

**Revised list of what is known to draw on this account**, with what is still
unread:

| Item                    | Status                                                         |
| ----------------------- | -------------------------------------------------------------- |
| **Meta, via PayPal**    | **Declined 10-20 for insufficient funds.** Amount not recorded |
| **Capital One AutoPay** | **Due today. Amount unread, outcome unobserved**               |
| **DAZN**                | Declined 10-15, 10-16, 10-19                                   |
| **Ocoya, via Stripe**   | Declined 10-16, **$29.00**                                     |
| **ChatGPT Business**    | **Renews 2026-10-24** — amount unread                          |
| **Webador**             | Date and amount unread (T-46)                                  |
| **Capital on Tap**      | **Statement issued 10-20, unopened** (T-83)                    |

**Seven items, four amounts unknown, no total given.**

- **Status unchanged: Awaiting Owner** · **Next action** — **read the Capital
  One notice and establish what happened today**, then the Capital on Tap
  statement. **Both are unopened email, not missing information.**

## T-74 — A third party says a Melio account exists; the message does not hold together

- **Objective** — Establish whether DD84 has a Melio bill-pay account, because
  the answer changes the payment-channel count that **T-36** is built on.
- **Source** — `/dd84-inbox-intake`, 2026-10-19. Thread `1a1456066392fc38`,
  **2026-10-16T15:41:35Z**, subject _"Down dirty 84 llc | Melio Account Set
  Up"_: _"I noticed you recently signed up for Melio"_, offering a 10–15 minute
  call.
- **Workstream** finance · **Priority** Normal · **Owner** **Owner** ·
  **Approval class** **A to verify from the owner's own records.** **No link in
  the message was opened and no URL from it is recorded here.** · **Due**
  2026-10-22

### What does not line up

**Three different identities in one message.** The sending address is at
`xero.com`; the signature gives a **different first name** from the one in the
address; the booking link carries a **third variant**. **Melio is a real
bill-pay provider and does power Xero's US bill pay**, so a `xero.com` sender is
not itself suspicious — **but a name mismatch inside an unsolicited message
about a payment account is not something to resolve by clicking the link inside
it.**

**No claim is made that this is fraud.** Sloppy sales templating produces
exactly this signature. **What is claimed is narrower: an unverified third party
asserts DD84 opened a payment account, and the assertion cannot be checked from
the message.**

### Why it matters beyond itself

**T-36 argues the revenue-visibility gap is unmeasurable because the channel
count is unknown.** On 2026-10-16 that count was hardened to **"five channels
and possibly an abandoned Square signup."** This would make it **six or seven**,
and **the register must not harden a number it has not verified** — the same
discipline applied to Square.

- **Cost and risk** — No cost. The risk of ignoring it is a payment account
  nobody is watching; the risk of engaging with the message is answering a
  pretext. **Both are avoided by checking the owner's own records.**
- **Execution steps** — (1) **Owner** checks whether a Melio account exists,
  from his own records or by navigating to Melio directly — **not via the link
  in the email**; (2) if it exists, it joins the channel list in **T-36** and
  `ventures.md`; (3) if it does not, the message is reported and the thread
  closed; (4) either way, **T-36's channel count is restated with its basis.**
- **Completion proof required** — A yes or no from a source that is not this
  email.
- **Status** **Awaiting Owner** · **Next action** — Step 1.

### 2026-10-20 — much stronger evidence, and still not proof

**Two messages ten minutes apart on 2026-10-19:**

- **13:07:24Z**, the same sender as 10-16, in thread `1a1456066392fc38` (now two
  messages): _"With your account already being made, I'd like to set aside some
  time to better understand how you would like to use Melio for your business."_
  **The three-way name mismatch recorded above is unchanged.**
- **13:17:29Z**, thread `1a15450c6e7bfc86`, from **`info@melio.com`** — _"5
  updates to your account from last quarter"_, covering expenses, bill import,
  weekend payments, currencies and a referral bonus.

**The second message is materially better evidence than the first.** It comes
from **Melio's own domain** and addresses DD84 **as an account holder**, which
an unsolicited sales message does not.

**It is still not proof, and the distinction is worth keeping.** A vendor's
quarterly product-update mail reaches marketing lists as readily as account
holders, and **this register's own discipline on Square — "five channels and
possibly an abandoned signup" — exists precisely because a signup and an account
are not the same thing.**

**So the finding is narrowed, not closed:** **a Melio account probably exists**,
and **T-36's channel count is probably seven.** **"Probably" is doing real work
in both sentences** and must not be edited out of them.

- **Status unchanged: Awaiting Owner.** · **Next action** — unchanged and now
  cheaper: **the owner either recognises the account or he does not.** Still
  **not** via the link in the sales message.

## T-75 — A new Shopify theme was published and nobody checked the storefront

- **Objective** — Establish whether a stranger can complete a purchase on
  dd84tuning.com today, three days after the storefront's theme changed.
- **Source** — `/dd84-inbox-intake`, 2026-10-19. Thread `1a144a56a5e7f009`,
  **2026-10-16T12:17:33Z**, from Judge.me: _"We see you've published a new theme
  for Down Dirty 84 LLC. To show reviews on your pages, don't forget to install
  Judge.me's widgets in this new theme."_
- **Workstream** service · **Priority** **High** · **Owner** Agent · **Approval
  class** **A to diagnose and report. Changing anything live is Class F.** ·
  **Due** 2026-10-21
- **Status** **Planned** · **Next action** — **Run `/dd84-site-monitor`.** It
  has never run.

### What the notice establishes and what it does not

**Established:** a theme publish happened on or just before 2026-10-16T12:17Z,
and **the review widgets did not come with it.**

**Not established:** who published it, what changed, whether it was a template
switch or an edit, and **whether checkout still works.** A third-party app
noticing a theme change is weak evidence about the theme and no evidence at all
about the storefront's function.

### Why it is High rather than Normal

**It collides with a live customer question.** On **2026-10-17** a prospect
asked whether the store is still taking orders (**T-72**), and the drafted reply
opens by saying it is. **That claim rests on `ventures.md` — 50 active products
— and on nothing read since.** Shopify reports **0 orders all-time**, confirmed
across a 365-day window. **A theme published three days ago is the single most
likely moment for a storefront to have quietly broken**, and no routine has
looked.

**No causal claim is made.** Zero orders has stood for thirteen months and
predates this theme by a year. **The point is not that the theme broke
something; it is that nobody can say either way, while a reply asserting the
store works is waiting for approval.**

- **Cost and risk** — No cost; the site monitor is Class A. **The risk of
  skipping it is telling a customer the store is open and being wrong**, which
  is worse than the 23-day silence in T-66.
- **Execution steps** — (1) **Torque** runs `/dd84-site-monitor`: critical
  pages, product pages, forms, uploads, payment links, fulfilment instructions;
  (2) reports what the theme change did or did not affect; (3) the Judge.me
  widget question is answered only after (1) — **reviews on a broken checkout
  are not the problem**; (4) **T-72's draft is approved or amended on the
  result.**
- **Completion proof required** — A site-monitor brief naming each page checked
  and its state, with timestamps.

### 2026-10-21 — due today, not done, and nothing schedules the routine it needs

**This task falls due today and Torque has not done it.** Recorded plainly
because the firing instructions say not to report an owner action as agent work,
**and the reverse obligation is the same one.**

**The reason is structural, not a lapse of attention.** This task's next action
is **"run `/dd84-site-monitor`"**, and **that routine has no schedule.** Four of
the six DD84 routines fire on a timer — intake, daily brief, cash review,
opportunity scan. **`/dd84-site-monitor` and `/dd84-followup` only run when
somebody asks.**

**So this task cannot close by waiting.** It will sit here indefinitely unless
the owner triggers the routine or **T-69's prompt edits add a schedule for it**
— which is now the fourth edit that one sentence carries.

**And it is currently gating a customer reply.** **T-72**'s drafted first line
says the business is open and taking work. **Nothing reachable confirms that**:
`ventures.md` claims 50 active products, **Shopify reports 0 orders all-time**,
a **new storefront theme was published 2026-10-16** and nobody looked. The check
is **free and Class A**. **A prospect has now been waiting about 104 hours for
an answer that depends on a routine nothing fires.**

**Not silently re-dated.** Moving the due date would hide exactly the thing
worth seeing: **the register can generate work for a routine it has no way to
trigger.**

- **Status unchanged: Planned, Agent-owned** · **Next action** — unchanged:
  **run `/dd84-site-monitor`.** It needs its own run and its own brief, not a
  section inside the daily one. **Either the owner asks for it, or T-69 gives it
  a schedule.**

## T-76 — Four account-access notices in four hours across four providers

- **Objective** — Establish whether the 2026-10-16 cluster of account notices is
  the owner's own activity or something else, and close out the pattern T-63
  opened.
- **Source** — `/dd84-inbox-intake`, 2026-10-19. Four threads inside four hours
  on **2026-10-16**:

| Time (UTC)   | Provider | Notice                                                         |
| ------------ | -------- | -------------------------------------------------------------- |
| **10:58:51** | OpenAI   | New sign-in, ChatGPT Web, **approximate location Chicago, US** |
| **11:50:07** | DSers    | **Password reset requested** for the DD84 account              |
| **14:50:55** | GitHub   | Device-verification code, unrecognised device                  |
| **14:51:41** | GitHub   | A second device-verification code, 46 seconds later            |

- **Workstream** compliance · **Priority** **High** · **Owner** **Owner** ·
  **Approval class** **A to report. No code is recorded here, and none was
  used.** · **Due** 2026-10-21

### What is and is not being claimed

**Not claimed: a compromise.** Every one of the four has an ordinary
explanation. Approximate IP geolocation routinely names the wrong city, and a
remote session or VPN will do it reliably. A password reset is usually the
person who forgot the password. Two GitHub codes 46 seconds apart is what a
first failed entry looks like.

**Claimed, and narrowly:** **four providers issued access notices inside four
hours, and the register cannot attribute any of them.** **T-63** recorded the
same shape in Shopify on 2026-10-13 and it was never explained; **T-52** step 4
has been open since 2026-10-12. **This is the third such cluster and the first
spanning four providers.**

**The GitHub one is the one with teeth.** This repository is **public by
decision (A-13)** and that account can change what is in it. **A device
verification is the control working** — but an unattributed one on the account
that owns the operating record is not a thing to file and forget.

- **Cost and risk** — No cost to answer. **The risk of not answering is that the
  register keeps logging access notices it cannot attribute**, which is how a
  real one gets missed — the same failure mode as the overdue count and the
  `dd84-api` tally.
- **Execution steps** — (1) **Owner** confirms each of the four was his own
  activity; (2) for any that was not, change that password and revoke sessions —
  **Class F**, and escalate here first; (3) confirm **MFA state on GitHub**
  specifically, given A-13; (4) close **T-63** and **T-52** step 4 with the same
  answer, or say why they differ.
- **Completion proof required** — A yes or no per provider. **Not "probably
  me."**
- **Status** **Awaiting Owner** · **Next action** — Step 1.

## T-77 — Register as a supplier on the Georgia Procurement Registry and ACCGov

- **Objective** — Open a revenue notice stream that costs nothing, using
  capability DD84 already has, in a week when the business has no recorded
  revenue in thirteen months.
- **Source** — `/dd84-opportunity-scan`, 2026-10-19. **Ranked #1 at 62/100** —
  the full record, including every assumption, is in
  `docs/ops/briefs/2026-10-19-opportunity-scan.md`.
- **Workstream** sales · **Priority** **High** · **Owner** Agent · **Approval
  class** **A to register.** Registering as a supplier **commits no money and
  contacts no counterparty.** **Submitting a bid is Class E and G** and needs a
  packet. · **Due** 2026-10-26

### Why this outranked a $260,000 property and a $25M loan programme

**Because it is the only candidate that costs nothing.** The scan's method and
its ranking rule agreed for once: **financial value unknown, capital requirement
zero, risk none identified.** Against an account that reported zero available on
2026-10-17 (**T-71**), **a free registration that might produce revenue beats a
loan DD84 cannot service and a tax credit against payroll it does not have.**

**What it is not: a sale.** **No current vehicle-maintenance or diagnostic
solicitation was found** on Team Georgia Marketplace or in either county, and
**registration does not win work.** One week of searching is not a base rate.

### What must be established, not assumed

- **What the Georgia Procurement Registry actually charges.** **The "no cost"
  statement the scan found belongs to ACCGov's OpenGov, not to the state
  registry** — DOAS's own fee position was never read, because the page could
  not be opened (**T-59**). **The brief's "costs nothing" framing rests on this
  and must be confirmed first.**
- **Which NIGP codes cover tuning, calibration and diagnostics.** The code list
  is inside the registry.
- **Whether ACCGov's rule bites.** It **"does not register vendors for bidding
  purposes only"**; its Vendor Registration Form is for vendors with a current
  or pending contract. **The OpenGov bidding registration and the vendor
  registration may be two different things** and the scan could not separate
  them.

- **Cost and risk** — **Expected zero, unconfirmed.** The risk is an hour or two
  of owner or agent time, and the discovery that the registry charges a fee —
  which would make it a Class E decision, not an A one.
- **Execution steps** — (1) Open the GPR and record any fee; (2) register, or
  stop and raise a packet if there is a cost; (3) select NIGP codes for vehicle
  maintenance, diagnostics and calibration; (4) register on ACCGov's OpenGov and
  establish whether the bidding and vendor registrations differ; (5) check
  Madison County's bid page, which posts only when it is ready to receive bids;
  (6) record what notices arrive over the following month, **so the next scan
  has a base rate instead of one week's snapshot.**
- **Completion proof required** — A registration confirmation from each portal,
  the codes selected, and **the actual fee, read from the registry.**
- **Status** **Planned** · **Next action** — Step 1. **Blocked on egress for the
  registry itself** (T-59), so the first real step may have to be the owner's
  browser rather than this platform.

## T-78 — Price buy-an-existing-shop against the raw-land build on Hwy 72

- **Objective** — Put a number on the path DD84 is not taking, before more owner
  effort goes into the path it is.
- **Source** — `/dd84-opportunity-scan`, 2026-10-19. **Ranked #2 at 56/100.**
- **Workstream** real estate · **Priority** **High** · **Owner** Agent ·
  **Approval class** **A to compare.** **Any offer, broker enquiry or financing
  application is Class C, E and G.** · **Due** 2026-10-26

### The comparable, and what it is not

**6911 Highway 72, Colbert, GA 30628 — MLS# 10723733. SOLD 2026-06-25 at
$260,000.** **It is not an acquirable opportunity and must never be recorded as
one.**

**What it is: a dated, independently corroborated benchmark.** 3,072 SF, built
1970, ~0.76–0.8 acres, described as **an auto mechanic shop with five service
bays and a fully encapsulated automotive paint booth**; 2024 taxes **$816**.
Listed **$280,000** in late March/early April 2026, cut to **$270,000** on 05-01
and **$260,000** on 05-20, closing at that. **Four listing aggregators carry
consistent MLS-derived data; the deed and the MLS record itself could not be
opened** (T-59).

### Why this is worth an owner's attention rather than a file note

**DD84 is actively engineering the harder path.** **T-70** has the business
corresponding with a state environmental-health office about whether raw land at
**parcel 0059 038** can carry a septic system, with a **380 gpd ceiling already
established** and a fee schedule still unread. **Four months ago, on the same
highway, a purpose-built five-bay shop with a paint booth and a septic system
that already exists changed hands for $260,000** — after shedding $20,000 over
seven weeks to find a buyer.

**Nobody has priced one path against the other.** That is the whole task.

### Stated separately, because the scan requires it

**Assumed, not established:** that the raw-land path costs more than $260,000
all-in — **parcel 0059 038's asking price is not in this record and no build
estimate exists**; that an existing 1970 shop's septic capacity is adequate —
**its permitted capacity was not read and may itself be limited**; that one
property with two price cuts indicates slow absorption — **one property is not a
market.**

- **Cost and risk** — **No cost to compare.** The risk is that the comparison
  argues for a purchase DD84 cannot finance, which is information either way.
- **Execution steps** — (1) Record parcel 0059 038's asking price from T-70's
  thread; (2) list the raw-land costs already known — septic design, well,
  build, the 380 gpd constraint — marking each as known or unknown; (3) set the
  $260,000 comparable beside them **as a range against unknowns, never as a
  midpoint**; (4) establish whether any equivalent improved property is
  currently listed on Hwy 72; (5) hand the owner one page, not a recommendation
  — **financing is his decision and he has no capital today.**
- **Completion proof required** — The two paths side by side with every unknown
  named as unknown.
- **Status** **Planned** · **Next action** — Step 1, which needs nothing but
  T-70's own thread.

## T-79 — Identify the SecretSOS issuer before any fee is paid

- **Objective** — Establish whether a grant programme with an open window and a
  $15 application fee is real, before a business short of cash pays it.
- **Source** — `/dd84-opportunity-scan`, 2026-10-19. **Ranked #3 at 53/100 — and
  the score is built almost entirely from unknowns**, which is itself the
  finding.
- **Workstream** finance · **Priority** Normal · **Owner** Agent · **Approval
  class** **A to verify. Paying the fee is Class E and needs a packet — for $15,
  because the question is not the amount.** · **Due** 2026-11-30

### What is claimed and by whom

**One aggregator** (`grantcompass.co`, "Small Business Grants Open Now, October
2026"), read **2026-10-19T11:30Z**: open to Georgia businesses, applications
**quarterly**, the **October–December window currently open**, **a $15
application fee**. **No issuing organisation was identified. No issuer page
exists in this record. No award figure was found.**

### Why it is listed at all, and why it is listed third

**It is the only candidate in the scan with an open window and a trivial cost.**
That is also why it is suspicious: **$15 is small enough to pay without
thinking, which is the shape of an advance-fee scheme** — and **DD84's mailbox
is currently receiving loan-fraud solicitations** (**T-42**, five drafts still
addressed to them; **T-67**).

**No accusation is made.** The claim is narrower: **an unverifiable programme
charging an upfront fee should be verified before it is paid**, and the
verification costs nothing.

- **Cost and risk** — **$15 and the information it buys**, against the risk of
  handing details to an unidentified party. **Scored 3/15 on source reliability,
  the lowest in the scan.**
- **Execution steps** — (1) Identify the issuing organisation — a legal name, an
  address, a published award history; (2) if none can be found, **close this as
  a no-action record with the reason**, which is the expected outcome; (3) only
  if a real issuer is found, read the eligibility rules and the award range,
  then raise a packet to pay the fee.
- **Completion proof required** — Either a named issuer with a verifiable award
  history, **or a no-action record saying no issuer could be found.** **Not "it
  looked fine."**
- **Status** **Planned** · **Next action** — Step 1.

## T-80 — Supabase `public`-schema grants deadline 2026-10-30 — Ledger-side

- **Objective** — Make sure a dated platform change to a **production database
  that is not DD84's** reaches the people who own it, without this platform
  touching it.
- **Source** — `/dd84-inbox-intake`, 2026-10-20. Thread `1a1586e9de9b100b`,
  **2026-10-20T08:30:05Z**, **unread and flagged important**: _"Final notice:
  new tables in 'public' need grants from October 30."_ Stated as **10 days
  left**.
- **Workstream** ledger · **Priority** **High** · **Owner** **Owner** ·
  **Approval class** **A to report only.** · **Due** 2026-10-28 — **two days
  before the deadline, not on it.**

### Why this is in DD84's register at all, and what must not happen

**The only Supabase project on this account belongs to the Georgia Opportunity
Ledger** — a different business, in
`downdirty84llc-creator/georgia-opportunity-ledger`, deliberately separate
(`CLAUDE.md` §0).

**This task exists because the notice arrived in DD84's mailbox and nowhere else
this platform can see.** It is logged so that a dated change to a live database
is not lost between two records. **It is not DD84 work.**

**What was not done, and will not be:** **no `mcp__Supabase__*` tool was
called.** The project was not read, its tables were not listed, and its
migrations were not inspected. **The command files make this a flat prohibition
rather than a read-only allowance**, and that holds even when a genuine deadline
would be easier to assess with one query.

**The register already carries Ledger-side items** — T-11 (Stripe test keys),
T-13 (legal review), T-14 (virus scanning) — **so a Ledger row here is the
established pattern, not an exception.** What is new is that this one has a
**hard external date.**

### What is and is not established

**Established:** a notice with the wording above, a date of **2026-10-30**, and
a "final notice" framing implying earlier messages this platform has not seen.

**Not established:** whether the Ledger's schema is actually affected, how many
tables, whether its migrations already set explicit grants, or whether anything
breaks on 10-30 if nothing is done. **Answering any of those means reading that
project, which this routine may not do.**

- **Cost and risk** — **No cost to report.** The risk of silence is a production
  database changing behaviour on a known date with nobody on either record
  having read the notice. **The risk of acting is crossing a boundary the
  platform sets deliberately**, which is why nothing was touched.
- **Execution steps** — (1) **Owner** reads the notice; (2) decides whether it
  affects the Ledger's schema — **from that repository's session, not this
  one**; (3) if it does, the work belongs in the Ledger's own operating record;
  (4) tell this task the outcome so it can close with evidence.
- **Completion proof required** — Either a statement that the Ledger's schema is
  unaffected, or a record **in the Ledger repository** that the grants were set.
  **Not "it was probably fine."**
- **Status** **Awaiting Owner** · **Next action** — Step 1. **Ten days, and this
  register cannot shorten them.**

## T-81 — A five-word enquiry asks whether DD84 ships to London

- **Objective** — Decide whether DD84 ships internationally, so that this
  enquiry and the next one can be answered at all.
- **Source** — `/dd84-inbox-intake`, 2026-10-21. Thread `1a15baddf0d998a0`,
  **2026-10-20T23:37:50Z**, **unread**, **no subject line**. The entire message:
  _"Ar u shping to London"_.
- **Workstream** sales · **Priority** Normal · **Owner** **Owner** · **Approval
  class** **A to record. C to reply.** · **Due** 2026-10-22

### The fields, and how few exist

| Field                                           | Value                                                          |
| ----------------------------------------------- | -------------------------------------------------------------- |
| Name                                            | **Not given**                                                  |
| Contact                                         | The sending address. **Not recorded here** — §5                |
| Vehicle · engine · transmission · modifications | **None stated**                                                |
| Location                                        | **London, by implication only**                                |
| Requested service                               | **Unspecified.** Possibly a physical product; possibly nothing |
| Urgency                                         | **Normal**                                                     |
| Source                                          | **Unknown.** No subject line, free email account               |

### Why no draft was written, which is the substantive part

**A reply would have to state a shipping policy and an international price, and
neither exists.** `ventures.md` prices digital products at **$39.99–$399** and
print-on-demand merchandise at **$18.77–$64.68**, **and says nothing about
shipping outside the United States.** The Shopify store **has never taken an
order**, so no shipping configuration has ever been exercised.

**Inventing either is exactly what this routine must not do.** **The owner's
decision is one line long** — DD84 ships abroad, or it does not — **and the
draft follows in a minute once it exists.**

**Note what the answer might be: "no, but the digital products need no shipping
at all."** Tune files, calculators and toolkits are **$39.99–$399** and deliver
by download. **If this enquirer wants a physical part, the answer is probably
no; if they want a calibration, geography is irrelevant.** **That distinction is
worth one question, and the question is the draft.**

### The pattern, which is bigger than this lead

**Second one-line enquiry in four days with an identical shape** — no subject,
no name, a free email account, broken spelling, one question about whether the
store works (**T-72**, 10-17). **Not merged**: different senders, unverified
identity, spec §9.

**Two readings this record cannot separate.** Either **an unwatched inbound
route is producing real low-quality traffic** — which would be the first
evidence of any inbound demand at all — **or these are automated probes.**
**Characterising that route matters more than either lead**, and it is the
fourth unwatched route the register has found (T-65, T-66, T-72, this).

- **Cost and risk** — **No cost.** The risk of a reply is promising delivery
  DD84 cannot do; the risk of silence is the T-66 outcome at 23 days.
- **Execution steps** — (1) **Owner** decides whether DD84 ships
  internationally, and whether digital products are offered to overseas buyers;
  (2) a draft is written to that decision; (3) **the owner sends it** — Class C;
  (4) **establish which route these enquiries arrive by**, which serves T-72 and
  T-81 together.
- **Completion proof required** — A stated shipping position in `ventures.md`,
  and either a sent reply or a recorded decision not to reply.
- **Status** **Awaiting Owner** · **Next action** — Step 1.

## T-82 — Supercharger reseller application 16 days silent; supplier chased

- **Objective** — Decide whether DD84 proceeds with a supercharger reseller line
  it asked for in September, before the supplier closes the file.
- **Source** — `/dd84-inbox-intake`, 2026-10-21. Thread `1a0dd710e6d59123`, **4
  messages, read in full.**
- **Workstream** sales · **Priority** **High** · **Owner** **Owner** ·
  **Approval class** **A to record and draft. C to reply.** · **Due** 2026-10-22

### The sequence, which DD84 started

| When                     | What                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **2026-09-26T11:19:29Z** | **DD84 wrote first**, stating interest in a reseller line and asking for paperwork and current pricing                                                                   |
| **2026-10-04T20:33:02Z** | The supplier's new-dealer rep sent **a full dealer packet**, 2.9 MB, apologising for the delay                                                                           |
| **2026-10-05T11:11:48Z** | **DD84 confirmed receipt**, listing what it was reviewing: **the Dealer Request/Review form, the dealer policy, the UPP pricing policy, a W-9, and buy-in requirements** |
| **2026-10-21T01:06:06Z** | **The rep chased**: _"Wanted to check in. Hope you're well. If I can help in anyway please let me know."_                                                                |

**Sixteen days of silence on an opportunity DD84 initiated**, after being sent
everything it asked for.

### Why this is High, and why it is not simple

**It is the only warm supplier relationship in this entire record.** Every other
inbound thread is a solicitation, a decline notice or a one-line enquiry. **Here
a named supplier sent a dealer packet and is still following up three weeks
later** — that is a real commercial door, held open.

**And it has a buy-in requirement.** The 10-05 message names it explicitly.
**DD84's account declined a transaction yesterday for insufficient funds**
(T-71). **The honest position is that the money question and the opportunity
question are the same question**, and only the owner can answer it.

**What must not happen is a third week of silence.** **A reseller application
that lapses by inattention reads to the supplier exactly like one that was
declined** — and costs the relationship either way. **"Not now" is a better
answer than nothing**, and it keeps the door open.

**This also exposes a gap in the register rather than in the business.** The
thread began **2026-09-26**, ran through the first intake runs, and **appears
nowhere in this register until today.** The reason is mechanical: **intake
windows look at recent mail**, and a thread whose last inbound was 10-04 fell
outside every window until the chase arrived. **A quiet thread is invisible to a
windowed sweep** — the same defect class as the Gmail truncation in OL-0049, and
worth stating because **the correct instrument is a periodic sweep of threads
awaiting DD84's reply, which no routine runs.**

- **Cost and risk** — **No cost to reply.** The buy-in is unquantified here —
  **the packet was not opened and no download tool exists.** The risk of silence
  is losing the only warm supplier channel on the record.
- **Execution steps** — (1) **Owner** reads the dealer packet and establishes
  **the actual buy-in figure**; (2) decides: proceed, defer with a date, or
  decline; (3) **a draft is written to that decision** — a one-paragraph
  "reviewing, here is my timeline" is enough to hold the door; (4) **the owner
  sends it** — Class C; (5) **if proceeding, the buy-in is a Class E decision**
  against the cash position and needs a packet.
- **Completion proof required** — A sent reply, and either a recorded decision
  or a dated commitment. **Not "we'll get to it."**
- **Status** **Awaiting Owner** · **Next action** — Step 1, today. **The rep
  wrote nineteen hours ago.**

## T-83 — Capital on Tap: a business credit card with a statement nobody opened

- **Objective** — Get a second business credit facility onto the record, with
  its balance and payment date, before it joins the list of things drawing on an
  account that is declining charges.
- **Source** — `/dd84-inbox-intake`, 2026-10-21. Thread `1a15b7f53703d062`,
  **2026-10-20T22:47:12Z**, **unread**, **1.9 MB with an attached statement**,
  billing period **9/20/2026 to 10/19/2026**. Plus thread `1a159855562c98da`,
  **2026-10-20T13:34:31Z**: **an $8.00 Amazon gift card reward issued "from DOWN
  DIRTY 84"**.
- **Workstream** finance · **Priority** **High** · **Owner** **Owner** ·
  **Approval class** **A to report.** **Paying, drawing on or closing the card
  is Class E.** · **Due** 2026-10-23

### What this establishes

**A live business credit card with a monthly billing cycle and an active rewards
programme.** The gift-card reward is issued in DD84's name, which means **the
account is not dormant** — it has spend on it.

**The statement's figures are not recorded here.** **A-19's fifth instance in
six days**, and **the first where the withheld figure is a liability rather than
a bank balance** — which is worth noting because A-19 asks about "cash position"
and a credit-card balance is adjacent to rather than inside that phrase. **The
conservative reading was taken.** If the owner's answer is narrower, this figure
can be written here later; **the reverse is not available.**

### Why it matters beyond bookkeeping

**T-73 lists the charges known to draw on the overdrawn account.** This adds a
card whose **payment date and minimum are unread** — and **T-71 now shows the
account declining recurring charges**. A card payment that fails is worse than a
subscription that fails: **it carries a fee, a credit-file consequence, and in
some facilities a rate change.**

**It also means the payment-channel question in T-36 is further from settled,
not closer.** The register has been counting _inbound_ channels. **This is the
second business credit facility on the outbound side** — Capital One and Capital
on Tap — **plus PayPal, plus whatever Melio turns out to be** (T-74). **Nobody
has listed DD84's liabilities, and no routine asks for one.**

- **Cost and risk** — **No cost to open the statement.** The risk of leaving it
  is a missed card payment on top of a declining bank account.
- **Execution steps** — (1) **Owner** opens the statement and records **the
  balance, the minimum payment and the due date**; (2) adds them to **T-73**'s
  outflow list; (3) confirms whether the card autopays from the account that
  declined a charge on 10-20; (4) **if the two are linked, that is a Class E
  decision and needs a packet.**
- **Completion proof required** — Balance, minimum and due date read from the
  statement, with the funding account named.
- **Status** **Awaiting Owner** · **Next action** — Step 1. **The statement is
  an unopened attachment in the mailbox, not missing information.**

---

> ## A-15 sent, 2026-10-21 — what changed for T-38 and T-39
>
> Both replies went out at **12:10–12:11Z** and are verified in their threads:
> GDOT `1a15e5f14b204202` (thread 4 → 5 messages), SBDC `1a15e5f48ed39b01`
> (thread 1 → 2). Full record in **A-15** and **OL-0059** (corrected 2026-10-22:
> the note said OL-0058, which is the follow-up run).
>
> **T-38 — the ball is with GDOT, and the three answers set the surveyor's
> scope.** Nothing can be bought until Nembhard answers: preferred throat width
> and radii, whether a boundary and topographic survey with sight distance
> suffices or a traffic statement is also expected, and whether railroad
> coordination must precede the driveway application or can run in parallel.
> **Do not engage a surveyor before those three answers** — that is the whole
> point of having asked. Chase on **2026-10-28** if nothing arrives; the
> thread's own history is a 12-day reply turnaround, so a week is not yet late.
>
> **T-39 — the booking is the owner's, and the agent cannot do it.** The reply
> says Mark will book through the adviser's Calendly link. **No slot was
> proposed and nothing was written to the calendar.** The task stays open until
> a booking exists.
>
> **Still unread and still blocking a full submission:** the D1TO Full Permit
> Review checklist PDF. No session here has an attachment-download tool, so its
> contents have never been read and nothing in the reply claims otherwise.

---

> ## Priced, 2026-10-22 — T-37 and T-64, against the live catalogue
>
> **The owner asked: "price T-37 and T-64."** Both figures below are **proposed,
> not set.** Quoting either to a customer is Class C and is packet **A-21**.
> Nothing was sent, no live price was changed, and no catalogue edit is needed
> to invoice either job — every figure is an **ACTIVE Shopify variant at its
> current price**, read live at 2026-10-22T09:47Z.
>
> ### The answer
>
> | Job      | Work already delivered                                 | Work still owed                                                                       | Job total     |
> | -------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------- |
> | T-37     | **$349** — Remote NA Base Tune `DD84-HOLLEY-REMOTE-NA` | **$149** — Tune-or-Mechanical Diagnostic Review (remote) `DD84-TUNE-MECH-DIAG-REMOTE` | **$349–$498** |
> | T-64     | **$350** — Mopar Basic Tune `DD84-MOPAR-TUNE-BASIC`    | **$149** — the same diagnostic SKU                                                    | **$350–$499** |
> | **Pair** | **$699**                                               | **$298**                                                                              | **$699–$997** |
>
> **$699 is the figure that matters**: it is work DD84 has already done, on two
> cars, that no invoice has ever named. **The pair is now separable per job** —
> it was explicitly not separable before, because no tier had been chosen.
>
> **Ceiling $1,347** if the owner puts T-64's delivered work on the Street
> ($450) or Performance ($650) rung. That boundary is **undefined in DD84's own
> published copy** and was not invented here — see T-84.
>
> ### T-37 — $349, and why not $399
>
> The live Holley product (`holley-efi-tuning-services-remote-street`) defines
> its own rungs. **Remote NA Base Tune $349** is "remote calibration for stock
> or lightly modified naturally aspirated combinations". **Remote
> Cammed/Modified NA Tune $399** is "for camshaft, injector, intake, exhaust,
> and other airflow modifications".
>
> The record for this car says **fuel pump and rails stock**, injectors **GM
> 12613412** (an OE part number), and records **no camshaft, intake or exhaust
> change**. On the evidence the car is in the $349 rung. **$399 needs a
> modification the record does not show — one question to the customer settles
> it**, and that question is worth $50.
>
> **What $349 does not buy is a finished tune, and this tune is not finished.**
> The AFR fault is open and the wideband contradiction recorded above is
> unresolved. So $349 is invoiceable **on completion**, not today.
>
> ### T-37 — the $149 prices the question without answering it
>
> This register committed to **not** resolving the sensor contradiction, and
> that still holds: it is a running engine and a technical determination that is
> the owner's. **The live store sells the determination itself.** _DD84
> Tune-or-Mechanical Diagnostic Review_, remote **$149**, publishes a
> traffic-light outcome — **GREEN** calibration likely, **YELLOW** calibration
> plus mechanical or electrical correction, **RED** hardware. That is exactly
> the open question on this car, and it can be **priced without being
> answered.**
>
> Twenty-nine messages, three datalog round-trips, a diagnosis and a built tune
> file have already been given away on this thread. $149 is the rung that should
> have carried them.
>
> **Optional, $59.99** — `DD84-CAM-SCAN-01`, the GM LS Cam Swap Scanner &
> Diagnostic Pack, whose published copy includes "**check wideband validity
> before making fueling decisions**". That is the precise point this job is
> stuck on. Offered as an add-on, not a substitute for the diagnostic.
>
> ### T-64 — $350, and the three rungs that do not apply
>
> DD84 delivered **at least two revised tune files** (2026-10-02T17:04:22Z and
> T20:06:05Z, both "updated tune file with additional VE table corrections and
> startup adjustments"). That is custom Mopar ECU calibration work, and the live
> _Dodge / Mopar Custom ECU Tuning Service_ prices it at **Basic $350** / Street
> $450 / Performance $650.
>
> **Basic is the only rung the evidence supports.** The scope here was fault
> correction on a street car, not added power. The product's full published
> description lists the three prices and **defines no scope difference between
> them**, so the higher rungs cannot be reached from the store — only from the
> owner's own practice, which is written down nowhere this session can read.
>
> **Three cheaper rungs were considered and excluded, on DD84's own terms:**
>
> - **ECU Tune File Review, $99/$149/$199** — excluded. Its copy reads "written
>   ECU file review — **no calibration changes included**" and "not included:
>   editing or delivering a tune, flashing, **tune revisions**". DD84 delivered
>   tune revisions. **This kills the $99–$199 lower bound this register has
>   carried since 2026-10-13.**
> - **Bad or Unknown Tune Evaluation, $149** — excluded. It is for reviewing
>   _someone else's_ calibration. This car is running DD84's own.
> - **Check Engine / No-Tune Diagnostic Deposit, $75** — not excluded, and it is
>   the lower-friction alternative to the $149 if the owner wants the easiest
>   possible yes. Its copy: "determine whether the vehicle is ready for
>   calibration or needs mechanical, sensor, fuel, ignition, or wiring repair
>   first."
>
> ### T-64 — the precondition is unmet, and that is the real risk
>
> The Mopar product states: "**Vehicle must be mechanically sound before
> tuning.** Final scope depends on vehicle condition, setup, and datalog
> review." A car with **hard cranking and intermittent no-start** is not
> established as mechanically sound. **DD84 recalibrated it anyway, twice.**
>
> So the $350 is owed for work done — but the job **may not be completable by
> calibration at all**, and selling further calibration into an unmet
> precondition is what DD84's own product copy warns against. If the log shows
> the fault persisting, the next sale is the **$149 determination or the $75
> deposit**, not another tune file.
>
> ### T-64 — the customer is not silent. DD84 is.
>
> Thread `1a0e402cdcf75731` read live at 2026-10-22T09:47Z: **29 messages**, and
> the last one is **from the customer** — 2026-10-13T15:39:45Z, ~2.8 MB, the
> largest message in the thread, and still carrying the **`UNREAD`** label.
> **210.1 hours — 8.76 days — unopened.**
>
> **This row's title said "11 days silent", and that was wrong about who is
> silent.** The customer was asked to flash the revision, take a log and report
> back. He did. The title is corrected above. **Read the log before quoting
> anything**, because it is the evidence that decides whether $350 closes this
> job or opens a diagnostic.
>
> T-37's thread `1a1082503004a073` was checked in the same pass: **29 messages,
> DD84 spoke last at 2026-10-12T20:39:11Z, 229.1 hours ago.** There the silence
> is the customer's, and waiting remains correct.
>
> **Both ages were recomputed from their stored timestamps, not carried forward
> from the last run** — the OL-0058 defect, which overstated T-64's age by 24
> hours four times running.
>
> ### The figure this replaces
>
> This register has carried the pair at **$198–$1,300, not separable per job**,
> for nine days. **Both bounds were defective.**
>
> - The **$198 floor** was two $99 file reviews — a SKU whose own published
>   terms exclude the tune revisions that both jobs received.
> - The **$1,300 ceiling** was two $650 rungs of _Holley EFI Tuning &
>   Diagnostics_, a product that has been **ARCHIVED since 2026-08-06**.
>
> **The new floor is $699 — three and a half times the old one.** The error ran
> in the direction that made the neglect look cheaper than it was.
>
> ### What is still unknown, and is not estimated here
>
> - **Whether either job is already paid.** No payment system is readable
>   (T-36): Stripe has no MCP server, PayPal needs re-authentication, bookipay
>   has no API. A targeted search for money words across both customers' mail
>   returned zero on 2026-10-13, but **a price agreed by phone would not
>   appear.** Unknown, not unbilled.
> - **Whether either customer was ever told a price.** Nothing in writing says
>   so, and nothing says otherwise.
> - **Cam and airflow status on the C10** — the $50 between $349 and $399.
> - **The Mopar rung boundary** — T-84.
>
> ### Why nine days of runs could not do this
>
> Every routine run read `docs/agents/ventures.md`, whose ladder carried a dead
> Holley SKU and **omitted every diagnostic rung** — the $149 determination, the
> $75 deposit, the $99 written datalog guidance. The prices were in the store
> the whole time. **"The live system always beats the document, including this
> one"** earned its place today. The ladder is corrected and `T-84` carries the
> rest.

---

## T-84 — The price ladder was stale and two rung boundaries are undefined

- **Objective** — Make DD84's own price list quotable without reading the store,
  and get the two undefined rung boundaries decided.
- **Source** — Pricing T-37 and T-64 on 2026-10-22 against the live Shopify
  catalogue. Corrections written into `docs/agents/ventures.md` the same day.
- **Workstream** sales · **Priority** High · **Owner** **Owner** · **Due**
  2026-10-29
- **What was already fixed** — the archived Holley rung, the $400 floor that is
  really $350, the $650 ceiling that is really $749, and six missing active
  service rungs. **No live price was changed; only the record.**
- **Step 1 — Agent, no approval needed.** Re-verify the four rows still marked
  **not re-checked** (Dodge/Mopar PCM unlock · Digital · Licence · Merch) and
  add the four known-missing Core rows (Cammed Street · Injector/E85/Flex ·
  LS/Hemi Swap Commissioning · Transmission). **Not done this run on purpose:**
  the owner asked for two prices, not a catalogue audit.
- **Step 2 — Owner.** Define what separates **Basic $350 / Street $450 /
  Performance $650** on the GM, Ford and Mopar tuning services. The published
  description lists the three prices and no scope difference, so **DD84 cannot
  presently price its own mid and top rungs consistently**, and no agent may
  infer the boundary.
- **Step 3 — Owner.** Decide the **Holley diagnostic gap**. Archiving _Holley
  EFI Tuning & Diagnostics_ on 2026-08-06 removed the only Holley
  troubleshooting rung; the replacement product has six variants and none is a
  diagnostic. **T-37 is the proof that this costs money** — a Holley diagnostic
  job had to be priced off a generic SKU.
- **Cost and risk** — No cost. The risk of leaving it is quoting a dead SKU to a
  customer, or three agents reading the same ladder and reaching three prices.
- **Status** **Awaiting Owner** · **Next action** — Step 1 is Agent work and
  needs no approval; Steps 2 and 3 are the owner's.
- **Completion proof required** — The ladder carrying a 2026-10-22-or-later
  verification date on every row, and the two boundary decisions recorded in
  `APPROVALS.md` or `ventures.md`.

---

## T-85 — Three platform-record questions: a third send, a sign-in, a stale test

- **Objective** — Settle three things about this platform's own record that no
  agent can settle by inference.
- **Source** — `/dd84-inbox-intake`, 2026-10-22.
- **Workstream** ops · **Priority** High · **Owner** **Owner** · **Due**
  2026-10-29
- **Step 1 — Owner. Who sent the third external message?** `OL-0059` records the
  two A-15 replies as **"the first two external messages this platform has ever
  sent"**, at 12:10:51Z and 12:11:05Z on 2026-10-21. A **third** went to the
  Georgia Real Estate Commission at **12:06:43Z** — four minutes earlier — and
  **A-15 covers two replies, not three.**
  - **This is not an allegation.** The owner sends his own mail from this
    account, and the log itself records an earlier GREC send on 2026-10-08,
    which predates A-15 entirely — so **"first ever" can only mean first by an
    agent**, and T-45 already points at A-06 as the approval covering the GREC
    question.
  - **What needs fixing either way is the phrase.** A future reader following
    "the first two external messages this platform has ever sent" will conclude
    the platform sent two when three left the account that minute. **If the
    owner sent it, OL-0059 needs one qualifying word. If an agent sent it, that
    is a control failure and the most serious item in this register.** An agent
    should not decide which by inference about its own sending history.
- **Step 2 — Owner. Was the 2026-10-21T13:26:26Z Stripe sign-in yours?** Two
  paired notices: "unrecognized device signed in to your Stripe account" and a
  Google notice that account data was shared with Stripe, same second. The
  pairing is what a legitimate Google-SSO sign-in looks like, so **the likely
  answer is yes** — but an unrecognised-device notice is only benign once the
  owner says so. **Useful either way: the Stripe account is reachable by a
  human, so T-36's gap is the connector, not the account.**
- **Step 3 — Agent, no approval needed. The checkout test false-alarms.** Every
  routine prompt says to confirm **"28 tracked files and no `src/`"** and calls
  the count "the only tell" for the 2026-10-08 container reset that left this
  branch pointing at the retired Ledger tree. **There are 54.** No application
  code is tracked — no `.ts`, `.tsx`, `.js`, `package.json`, `next.config` or
  migrations — so the tree is correct and **the count grew because the platform
  grew.** 28 was true when the test was written.
  - **A test that cries wolf on every run is worse than no test**, because it
    trains its operator to skip the one check that would catch a real reset.
    **The durable test is "no `src/` and no `package.json`", which is a property
    of the Ledger tree rather than a count that drifts.** Changing it means
    editing four Routine prompts in the claude.ai UI, which **no tool in a
    session can reach — the same wall as A-10.**
- **Cost and risk** — None to raise. The risk of leaving step 1 is a false
  record of what this platform has sent.
- **Status** **Awaiting Owner** · **Next action** — Steps 1 and 2 are questions
  only the owner can answer; step 3 needs the Routines UI.

---

## T-86 — Pinterest publishing mostly failing; one failure announced as success

- **Objective** — Find out why bulk publishing is dropping most of its items,
  and stop a failure being reported as a success.
- **Source** — `/dd84-inbox-intake`, 2026-10-22. Three notices in one window.
- **Workstream** ops · **Priority** Normal · **Owner** **Agent** · **Due**
  2026-10-29
- **What arrived**

| When                     | Claim                                                             |
| ------------------------ | ----------------------------------------------------------------- |
| **2026-10-21T04:14:52Z** | Instagram import — **18 published, 10 did not**                   |
| **2026-10-21T11:38:49Z** | **"Success! Your .csv file was uploaded"** — **"0 Pins created"** |
| **2026-10-21T12:39:32Z** | **"There was an issue"** — **1 row uploaded, 11 failed**          |

- **The arithmetic** — across the three, **19 of 50 attempted items published.**
  The reasons were not stated in any notice and are not guessed here.
- **The defect worth naming is the second notice.** A message headed
  **"Success!"** that reports **zero** results will be read as a success and
  filed. **The failure that gets ignored is the one that announces itself as a
  win.**
- **Approval class** — A to diagnose. **Any change to what is published is Rev's
  and is Class C/F.** Nothing was written to `docs/growth/`.
- **Status** Planned · **Next action** — read the three notices in full and
  establish whether the failures share a cause.
- **Completion proof required** — the failure reason quoted from the platform,
  not inferred.

---

## T-87 — Ledger production deploys failing on main — recorded, not touched

- **Objective** — Record that the other venture's production deployments are
  failing, without acting in its repository.
- **Source** — `/dd84-inbox-intake`, 2026-10-22. Two Vercel notices.
- **Workstream** ops · **Priority** Normal · **Owner** **Owner** · **Due**
  2026-10-30
- **What arrived** — **two production deployment failures for
  `georgia-opportunity-ledger`**, both on `main`, seven minutes apart:
  **2026-10-21T10:52:36Z at `089935b`** and **2026-10-21T10:59:49Z at
  `511f401`**.
- **Why it is here and not fixed** — `CLAUDE.md` forbids pushing DD84 material
  to the Ledger repository and the separation is deliberate. **The precedent is
  T-80**, which logged a Ledger-side database deadline without calling a single
  Supabase tool. **The same discipline applies: the fact is recorded, nothing
  was touched, no Ledger tool was called.**
- **What it does tell this register** — **somebody is actively committing to the
  Ledger's `main`**, two commits seven minutes apart. That is the second
  independent confirmation this month that the Ledger is live work rather than
  dormant infrastructure; the first retired the thirteen-day
  "nobody-has-named-it" framing of `dd84-api` recorded under T-33. **Inferring
  abandonment from silence has now been wrong twice.**
- **Status** **Awaiting Owner** · **Next action** — the owner decides whether a
  Ledger-side session is wanted. **Not this session's to open.**

---

> ## Intake, 2026-10-22 — a window with no customer in it
>
> **58 threads, zero leads, and the fourth consecutive run to report an empty
> funnel.** Full record in `docs/ops/briefs/2026-10-22-inbox-intake.md` and
> **OL-0062**.
>
> **T-71 gains a hypothesis, not an answer.** A second bank notice says the
> business debit card **"remains off, as you requested in online or mobile
> banking on 10/07/2026"**. A card deliberately switched off declines every time
> it is used — so the "two payments declined" may be the card obeying
> instructions rather than a funding failure. **Two candidate causes, no
> evidence separating them**, and the mail does not say which instrument the
> declines hit. **The balance figure and account digits stay withheld: A-19 is
> still pending.**
>
> **T-82 was due today and is drafted.** The supplier has chased twice and the
> second chase went unread for 33.2 hours; DD84 last wrote **407.1 hours — 17.0
> days — ago**. Yesterday's run declined to draft on the grounds that the buy-in
> is the owner's call. **That was right about the buy-in and wrong about the
> silence.** The draft in **A-22** commits nothing financial and carries a
> `[DATE]` bracket for the only part the owner must fill. **The day count has
> been removed from the row's title** — a title with an age in it is wrong again
> tomorrow.
>
> **Nothing moved on either priced job.** Both A-20's drafts and A-21's prices
> are one day old and unanswered. **Calendar empty through 2026-10-29; drafts
> still exactly 15, the oldest 64.0 days.**

---

## T-88 — A $450 payment arrived and nobody knows which job it paid for

- **Objective** — Attribute DD84's first revenue in 405 days to a job, so it can
  be recorded, reconciled and — if it is a deposit — completed.
- **Source** — `/dd84-inbox-intake`, 2026-10-23. Bank notification,
  **2026-10-22T20:46:58Z**.
- **Workstream** finance · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-26
- **What is known, and only this**
  - **$450.00**, received **2026-10-22**, by Zelle into the business account.
  - **Memo: "tune".**
  - **Not a storefront sale** — Shopify reports **0 orders all-time**, read live
    2026-10-23.
  - **Not an existing Shopify customer** — a name search of the customer list
    returned empty.
  - **Payer's name, account digits and confirmation code withheld** under §5.
    The amount and memo are recorded because A-13 accepts DD84's revenue
    figures; **the balance is not, because A-19 is pending.**
- **Why it is Critical** — `ventures.md` records the last payment as
  **2025-09-12**. **This is the first money in 405 days**, against an all-time
  $3,507.86 across 10 invoices and 3 customers. **A business with three paying
  customers has just gained a transaction it cannot attribute.**
- **$450.00 is exactly a catalogue rung** — the **Street Tune** price on the GM,
  Ford and Dodge/Mopar custom ECU tuning services, and the Street rung of the
  archived Holley product. **Suggestive. Not asserted** — which rung was sold is
  unknown.
- **It bears on A-21.** That packet proposes **$349 (T-37)** and **$350
  (T-64)**, both one rung lower. **A customer has now paid $450 for something
  called a tune.** A-21's rungs were argued from each job's published scope and
  **are not withdrawn** — but **this is the first market evidence in 13 months,
  and it points up, not down.**
- **The payer appears to be neither live-job customer.** The name does not
  correspond to either correspondent on `1a1082503004a073` or
  `1a0e402cdcf75731`. **A legal name and an email handle are different things,
  so this is suggestive, not identification**, and no payment system is readable
  to settle it.
- **If it is a third job, it is the second unrecorded live job found here**,
  after T-64. **That would make the pattern the finding** — jobs reach DD84
  through a channel this register cannot see.
- **Step 1 — Owner.** Say which job the $450 is for, or that it is a new one.
- **Step 2 — Agent, after step 1.** Record it against that job, reconcile it to
  a rung, and draft the acknowledgement. **No acknowledgement was drafted this
  run**: a receipt that names the wrong job, or implies work is finished, is
  worse than silence.
- **Status** **Awaiting Owner** · **Next action** — step 1. **One sentence from
  the owner unblocks everything else here.**
- **Completion proof required** — the job named, the rung named, and the amount
  recorded against it in this register.

---

## T-89 — Shopify billing failed; the retry will hit the same stopped card

- **Objective** — Keep the storefront from being suspended for non-payment.
- **Source** — `/dd84-inbox-intake`, 2026-10-23. Shopify billing notice,
  **2026-10-22T12:35:23Z**.
- **Workstream** ops · **Priority** **Critical** · **Owner** **Owner** · **Due**
  2026-10-24
- **What arrived** — **"We couldn't process your last bill payment of $39.00 USD
  for Down Dirty 84 LLC. We'll try again…"** for `shop.downdirty84llc.com`.
- **Why it is Critical and not administrative** — **the storefront holds the
  entire approved price ladder**, the digital products and the payment links.
  Yesterday's pricing of T-37 and T-64 was read out of it. **A store suspended
  for non-payment takes the catalogue with it**, and A-21 depends on those SKUs
  being live.
- **The probable cause, flagged as probable** — **ten minutes later** the bank
  reported a card declined with its own reason: **"Declined as your card is
  off."** Same morning, same account. **The Shopify notice does not name the
  instrument it tried**, so the common cause is plausible and not established.
  **If it is right, the promised retry fails too** — a retry against a stopped
  card is not a second chance.
- **Why an agent cannot fix it** — changing a payment method or paying a bill is
  **Class E**. **Turning a card on is the owner's, in his banking app.**
- **Step 1 — Owner.** Either turn the business card back on or put a working
  instrument on the Shopify account **before the retry**.
- **Step 2 — Agent, read-only.** Confirm from the store whether the charge
  settled, and whether any service degradation followed.
- **Status** **Awaiting Owner** · **Next action** — step 1, today. **$39 is the
  smallest number in this register and the one with the largest blast radius.**

---

> ## Intake, 2026-10-23 — money arrived, and two of this register's own readings
>
> were wrong
>
> Full record in `docs/ops/briefs/2026-10-23-inbox-intake.md` and **OL-0063**.
> **44 threads, zero new leads — the fifth consecutive run with an empty funnel
> — and $450.00 in the bank.**
>
> ### T-71's title conflates two different failures
>
> The row reads **"The business bank account is overdrawn; two payments
> declined."** On **2026-10-22T12:45:11Z** the bank declined a card and gave its
> own reason: **"Declined as your card is off."**
>
> **Yesterday's intake raised exactly this as a hypothesis with two candidate
> causes and no evidence separating them. The bank has now separated them.** At
> least one decline is card state, not a shortage of funds. **The overdraft is
> real and separately evidenced; the declines are not all evidence of it.**
> **Status unchanged — the correction is to the reasoning, which was driving the
> priority.** And card state was being actively worked: a second card was
> toggled **off and on four times in under twelve hours**, with international
> use switched off in the middle of it.
>
> ### T-85 step 1 is no longer a wording question
>
> On 2026-10-22, **four substantive follow-ups left this account in eleven
> seconds** — 13:40:03Z, 13:40:07Z, 13:40:10Z and 13:40:14Z, to GDOT, Colbert
> City Hall, Piedmont Water and Georgia DPH.
>
> **Yesterday this register concluded that a third external send was most
> plausibly the owner's own, because he sends his own mail. A person does not
> compose and send four distinct substantive follow-ups in eleven seconds.** A
> batching tool, a scheduled automation or another agent would all explain it,
> and the first two are unremarkable — **but "the owner typed them" is no longer
> a sufficient account, and that was this register's own reading.** T-85 step 1
> is now a control question.
>
> ### The Colbert site took two near-fatal answers in one day — T-38, T-78
>
> **Piedmont Water, 2026-10-22T13:46:38Z: "As of right now there is no more
> connection to the water system in the Colbert area."** **Georgia DPH,
> 17:56:52Z: "it might be quite difficult to get everything to fit on the
> parcel: the shop, parking, and the septic system (and replacement area)"** —
> on a **0.638-acre** lot.
>
> **GDOT answered two of A-15's three questions** at 13:16:01Z and 15:00:25Z:
> width and radii follow the Driveway & Encroachment Control Manual, and on a
> traffic study, **"I am unable to say as of now."**
>
> **The 2026-10-21 note said "Do not engage a surveyor before those three
> answers." Two have arrived and both point away from the site.** No status was
> changed on the owner's own project; **the finding is recorded and the spending
> decision is his.**

---

## T-90 — A Colbert building quote sits outside the register, amount unread

- **Objective** — Put a number on a quote DD84 already asked for, before the
  Colbert stop/go decision is taken without it.
- **Source** — `/dd84-cash-review`, 2026-10-23. A thread of DD84's own,
  **2026-10-20T15:52Z**, subject referencing a high-capacity building quote and
  **"final Colbert planning dimensions"**.
- **Workstream** real est. · **Priority** Normal · **Owner** **Agent** · **Due**
  2026-10-27
- **Why it is not Critical and still matters** — **the amount was not read**, so
  no figure is recorded and none is estimated. But it is **committed intent on a
  site that two agencies questioned this week**: no public water connection, and
  a 0.638-acre lot that may not fit shop, parking and septic with replacement
  area. **A building quote for a site that may not be buildable is the cheapest
  thing to check before the expensive decisions.**
- **Step 1 — Agent, Class A.** Read the thread, record the amount, the validity
  period and what it covers.
- **Step 2 — feeds T-78** (buy-vs-build) and the Colbert stop/go, **not a
  purchase.** Accepting a quote is Class E and nobody's but the owner's.
- **Status** Planned · **Next action** — step 1.

---

> ## Weekly cash review, 2026-10-23 — the drought ended, and the window had been
>
> hiding something
>
> Full record in `docs/ops/briefs/2026-10-23-cash-review.md` and **OL-0065**.
> **First cash review to survive since 2026-10-16**, when one fired, ran twenty
> minutes and left nothing.
>
> **Revenue closed: $450.00.** One transaction, 2026-10-22, memo "tune", the
> first in **405 days**. Unattributed — **T-88**. `ventures.md` updated: last
> payment **2025-09-12 → 2026-10-22**, Shopify orders re-verified at **0**,
> all-time payments **$3,957.86 derived from two unreconciled sources** and
> labelled as derived. **The invoice count stays at 10 — a Zelle transfer is not
> an invoice.**
>
> **The largest overdue receivable is $699 and it has never been overdue.** T-37
> and T-64, delivered and never invoiced, so **nothing aged. It has been
> invisible rather than late.**
>
> ### T-71 is now third-order wrong, and the weekly window is why we know
>
> The row says **"two payments declined."** This week shows **six distinct
> failures across five providers** — Stripe, PayPal ("your bank declined your
> electronic funds transfer"), Shopify, a subscription twice, and a card decline
> the bank attributed to **card state** — plus **two successes**.
>
> **And this morning's intake reported the card toggling as "four times in under
> twelve hours" on 2026-10-22. The weekly view shows at least eleven off/on
> notices across 2026-10-16, 10-17 and 10-22** — beginning a week earlier. **The
> intake's 24-hour window could not see it**, which is the OL-0055 defect
> exactly: a windowed sweep reports its window and the reader takes it for the
> phenomenon. **The weekly review exists to catch this and this is the first
> week it has.**
>
> **Not asserted:** that the toggling is deliberate cash management. It is
> consistent with someone controlling which charges land, **and intent is not
> read off a notification log.**
>
> ### Still withheld, second Friday running
>
> **The balance — A-19.** Three separate notices this week reported the account
> at or below zero (10-17, 10-19, 10-21), and **$450 arrived on the 22nd, the
> day after the third.** **So the first job of the first money in 405 days was
> to cover a hole.** That is the cash position, stated as a shape because the
> figure is not permitted here.

---

## T-91 — Shopify made its first sale ever: order #1001, $550, paid and fulfilled

- **Objective** — Record the storefront's first order, confirm the service was
  genuinely delivered, and keep `ventures.md` honest about what the store now
  is.
- **Source** — `/dd84-inbox-intake`, 2026-10-26. Verified live in Shopify:
  `gid://shopify/Order/7017291448367`, **`totalCount` 1**.
- **Workstream** sales · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-28
- **The order** — **#1001**, placed **2026-10-23T11:56:43Z**, **$550.00 USD**,
  **financial status PAID**, **fulfilment status FULFILLED**, **2 line items**.
  First named item from the notification: **"Standard Dodge / Mopar PCM Unlock
  Service — $300.00 × 1"**. **The second item's description was truncated and is
  not reconstructed.** Customer identity withheld under §5.
- **Why Critical** — **it is the storefront's first revenue in its existence**,
  it is already marked fulfilled, and **the register did not know it happened
  for three days.**
- **The registry was wrong and this run wrote the wrong figure into it.** The
  2026-10-23 cash review re-verified **"Shopify orders, all time: 0"** between
  **11:13 and 11:40Z**. The order was placed at **11:56:43Z** — **true when
  read, false about seventeen minutes later.**
  - **Not a bad read. A badly shaped claim.** "0 orders all time" was carrying
    the weight of a structural fact — _"100% of revenue came from invoiced
    service work, 0% from the storefront"_ — when it was **a running total one
    customer could change.** Corrected in `ventures.md` with the timing stated.
  - **What survives the correction:** no _digital product_ has ever sold. The
    store turned out to be **a viable order channel for services**, which is a
    different and better finding than the one it replaced.
- **Step 1 — Owner.** Confirm the PCM unlock service was actually delivered.
  **It is marked FULFILLED in Shopify and the store already asked the customer
  to confirm — but that message came from someone this register cannot identify
  (T-93).** A fulfilment flag is not evidence of delivered work.
- **Step 2 — Agent, after step 1.** Read the second line item from the order,
  record the rung split, and reconcile $550.00 against the catalogue. **The
  Dodge/Mopar PCM unlock rung in `ventures.md` is $75–$300 and was not
  re-verified this week.**
- **Status** **Awaiting Owner** · **Completion proof required** — delivery
  confirmed by the owner, both line items recorded, and the amount reconciled to
  rungs.

---

## T-92 — A second unattributed payment: $700, memo "mecanic tune", from a company

- **Objective** — Attribute the largest single payment DD84 has taken this year.
- **Source** — `/dd84-inbox-intake`, 2026-10-26. Bank notification,
  **2026-10-24T22:31:55Z**.
- **Workstream** finance · **Priority** **Critical** · **Owner** **Owner** ·
  **Due** 2026-10-28
- **What is known** — **$700.00**, Zelle, **memo "mecanic tune"** (spelling as
  received). **The payer is a limited liability company, not a private
  individual** — identity, account digits and confirmation code withheld under
  §5.
- **A business paying for a tune is shop-to-shop work**, and DD84 has rungs for
  that. **$700.00 is not one of them.** The nearest approved figures are
  **$650** (Performance Tune, GM/Ford/Mopar) and **$749** (in-person swap
  commissioning). **$700 sits between two rungs and matches neither**, so either
  a price was agreed off-catalogue or it combines services. **Not inferred.**
- **This is the second payment in four days that cannot be attributed to a
  job**, after **T-88**'s $450.00. **Together with order #1001 that is $1,700.00
  in four days, of which $1,150.00 is unexplained.** **The register now holds
  more unexplained revenue than explained.**
- **Step 1 — Owner.** Say what the $700 bought and which shop paid it.
- **Step 2 — Agent.** Record it, reconcile to a rung or record it as
  off-catalogue, and draft the acknowledgement. **No acknowledgement drafted:
  naming the wrong job to a business customer is worse than silence.**
- **Status** **Awaiting Owner** · **Next action** — step 1.

---

## T-93 — A customer was written to by someone this register cannot identify

- **Objective** — Establish who is authorised to speak to DD84 customers, before
  two parties answer the same customer.
- **Source** — `/dd84-inbox-intake`, 2026-10-26. A message sent **from the
  Shopify store** to the order #1001 customer, **2026-10-24T00:13:46Z**.
- **Workstream** ops · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-28
- **What it said** — it introduced the sender by **a first name, "with Down
  Dirty 84 LLC"**, and asked the customer to confirm that the PCM unlock and
  tuning service on order #1001 had been completed and received. **The name is
  withheld here. It appears nowhere in this register, nowhere in `ventures.md`,
  and is not the owner's.**
- **What this is not** — **not an allegation.** A nickname, a family member, a
  helper or a contractor would all explain it, and **a business asking its own
  customer to confirm delivery is good practice.**
- **What it is** — **the third signal in four days that communication leaves
  this business from places the operating record cannot see**, after the third
  external send and the four-sends-in-eleven-seconds burst (**T-85 step 1**).
  **Individually each is unremarkable. Three in four days is a pattern**, and
  the pattern matters because **this register's drafts, approvals and Class C
  gate all assume it knows who can speak for DD84.**
- **The immediate practical cost** — **this run did not draft to the order #1001
  customer**, because a second message from a different quarter about the same
  order is worse than none. **So an unidentified sender is currently the only
  party in contact with the store's first-ever customer.**
- **Step 1 — Owner.** Name who may write to customers as DD84, and from which
  accounts.
- **Step 2 — Agent.** Record it in `ventures.md` so drafts and approvals can
  account for it.
- **Status** **Awaiting Owner** · **Next action** — step 1. **One sentence.**

---

## T-94 — HP Tuners credits bought; amount unread, and margin needs it

- **Objective** — Put a cost on tuning credits, which is one of the two reasons
  no job can be margined.
- **Source** — `/dd84-inbox-intake`, 2026-10-26. Order **#2021394**, "Universal
  Credits", **received and completed 2026-10-24T22:19Z** (two notices, two
  seconds apart).
- **Workstream** finance · **Priority** Normal · **Owner** **Agent** · **Due**
  2026-10-29
- **Why it matters beyond the amount** — **T-36 and the cash review both report
  that margin is uncomputable because tuning-credit balances are unknown.** This
  is a credit purchase with an order number, **nine hours before $700 arrived**.
  **A cost and a payment in the same day is the first chance this record has had
  to put the two beside each other.**
- **Step 1 — Agent, Class A.** Read the order mail, record the amount and the
  credit quantity. **Not estimated — the notification snippet did not carry
  it.**
- **Step 2** — feeds **T-36** and the margin section of the next cash review.
- **Status** Planned · **Next action** — step 1.

---

## T-95 — The first inbound enquiry in five runs, unqualified and unread

- **Objective** — Convert, or qualify out, the only new enquiry since 2026-10-19
  — and **find out how they found DD84.**
- **Source** — `/dd84-inbox-intake`, 2026-10-26. Thread `1a174388c7b0c461`,
  **2026-10-25T17:57:58Z**, still **unread**.
- **Workstream** sales · **Priority** **High** · **Owner** **Owner** · **Due**
  2026-10-27
- **Customer record (§8.1 fields; missing ones marked missing)**
  - **Identity withheld** under §5. **Thread `1a174388c7b0c461` is the stable
    pointer.**
  - Vehicle **missing** · Engine **missing** · Transmission **missing** ·
    Modifications **missing** · Location **missing** · Requested service
    **missing** · Source **missing**
  - **The entire message is one line asking whether this is the business.** It
    is recorded as a lead because a person wrote to a business asking if it
    exists; **nothing about a vehicle is invented.**
- **Why High despite its size** — `ventures.md` records the customer-producing
  channel as **`UNKNOWN`**, and **three paying jobs this month arrived through
  it unseen.** **This is the first enquirer who can simply be asked**, and the
  draft asks.
- **Draft prepared, not sent** — full text in
  `docs/ops/briefs/2026-10-26-inbox-intake.md`. **Packet A-23.** It confirms the
  business, asks the §8.1 qualifying fields and the source question, and
  **commits to no price, no turnaround and no result.**
- **Status** **Awaiting Approval** · **Next action** — A-23. **A one-line
  enquiry goes cold faster than a quote.**

---

## T-96 — The business site has new indexing failures on duplicate canonicals

- **Objective** — Stop the business site losing pages from search.
- **Source** — `/dd84-inbox-intake`, 2026-10-26. Google Search Console,
  **2026-10-25T21:34:11Z**: a **new** reason preventing indexing — **"Duplicate
  without user-selected canonical."**
- **Workstream** ops · **Priority** Normal · **Owner** **Agent** · **Due**
  2026-10-30
- **Why it is here and not Rev's** — **the fault is technical and the fix is a
  site change.** What to _do_ about search visibility is Rev's and is Class C/F;
  **establishing that pages have stopped being indexed is this routine's.**
  Nothing was written to `docs/growth/`.
- **The standing decision that frames it** — **2026-08-13: `dd84tuning.com` is a
  Manus site and is the front door; Shopify is a checkout behind it.** The
  notice names **`downdirty84llc.com`**. **Which property is affected, and
  whether it is the front door or the checkout, was not established this run.**
- **Step 1 — Agent, Class A.** Identify the affected pages and whether they are
  service pages. **Diagnosis only; a canonical tag is a live site change and is
  Class F.**
- **Status** Planned · **Next action** — step 1.

---

> ## Intake, 2026-10-26 — $1,700 in four days, and a registry figure that went
>
> stale in seventeen minutes
>
> Full record in `docs/ops/briefs/2026-10-26-inbox-intake.md` and **OL-0066**.
> **67 threads over a 72-hour weekend window. One new lead. Six new tasks, three
> of them because money arrived.**
>
> | When                 | Amount        | Route             | Attributed             |
> | -------------------- | ------------- | ----------------- | ---------------------- |
> | 2026-10-22T20:46:58Z | $450.00       | Zelle             | **No — T-88**          |
> | 2026-10-23T11:56:43Z | **$550.00**   | **Shopify #1001** | **Yes**                |
> | 2026-10-24T22:31:55Z | $700.00       | Zelle             | **No — T-92**          |
> | **Total**            | **$1,700.00** |                   | **$1,150 unexplained** |
>
> **That is 48% of everything DD84 had ever collected, in four days**, after 405
> days of nothing. **`ventures.md` updated: lifetime collections $5,207.86,
> derived and labelled derived from three unreconciled sources.**
>
> **T-89's prediction was confirmed.** Friday's task said a retry against a
> stopped card is not a second chance. **2026-10-24T12:11:22Z — Shopify billing
> failed again, $39.00. Nine minutes later the bank declined the card again,
> same stated reason: "Declined as your card is off."** The store now holds $550
> of settled revenue and two failed bills.
>
> **T-85 gains a third instance and T-93 carries it.** A message went to the
> store's first-ever customer **signed by a first name that appears nowhere in
> this record.** Not an allegation — a nickname or a helper explains it. **But
> three signals in four days is a pattern, and the Class C gate assumes this
> register knows who may speak for DD84.**
