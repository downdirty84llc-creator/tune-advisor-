# DD84 Georgia opportunity scan — 2026-11-02

Run at **2026-11-02T11:30Z**, Monday. **End time is this file's commit, per
T-116.**

> **SKELETON COMMITTED BEFORE GATHERING** at **`7c7ab50`** — OL-0050's repair,
> eighteenth application. **The worker then restarted mid-gather for the seventh
> time this session, and because the skeleton was already pushed, nothing was
> lost.** First run where the repair's value can be stated as a fact rather than
> an argument.

**Scoring method, named as the prompt requires:** the command file's 100-point
method — **financial value 25 · accessibility 20 · time sensitivity 15 · source
reliability 15 · capital requirement 10 · complexity 10 · risk 5.**

**Two defects in the method, both reported rather than papered over:**

1. **The classification bands do not exist.** The command file promises "bands
   that follow from the total" and never states them. **Fourth scan to report
   this.** No threshold is invented; entries are **ranked by total and not
   labelled.**
2. **"Time sensitivity" has no stated direction.** **New this run.** A rolling
   programme DD84 could act on any day is _less_ time-sensitive and _more_
   useful, so the axis can be read either way. **The reading used here, stated
   so it can be overruled: higher means the window better favours acting now.**
   A rolling open programme scores mid-high; a closed one scores zero.
   **T-125.**

**This scan is DD84 looking for its own opportunities.** **Nothing here is
editorial input for the Georgia Opportunity Ledger**, which is a different
business in a different repository.

**Class A: nobody was contacted, nothing was applied for, nothing was
committed.**

**Every factual claim below is attributed to its source URL. Everything labelled
_assumption_ is this run's inference, not source data.**

## 0. Instrument test — the constraint that shapes this whole scan

**T-98 re-tested with a control host, and it still fails.**

| Call                           | Result                                  |
| ------------------------------ | --------------------------------------- |
| `WebFetch https://example.com` | **`getaddrinfo ENOTFOUND example.com`** |

**A control host that certainly exists does not resolve, so this is not about
any particular site.** **The error text names the cause: the host is outside the
session's allowed network domains.** **That refines T-98 usefully** — the
earlier conclusion was "no name resolution at all, and no allow-list would fix
it," and **the accurate version is that the session's network policy permits
none of these hosts, control included, which makes it a policy-scope setting
rather than an impossibility.**

**The owner can change it:** **Network access** in the environment's settings —
the cloud environment menu in the session's title bar, then **Edit** — either a
broader access level, or the specific hosts added under **Allowed domains** with
**Allow package managers** left ticked. Steps:
`https://code.claude.com/docs/en/cloud-environments#network-access`.

**What it costs this scan.** **The prompt requires validating the source and the
deadline before scoring, and WebFetch is the only tool that could open a page.**
**WebSearch works and is the sole evidence base here**, which means **every
entry below is scored from search-result content and every one takes a reduced
source reliability score for that reason.** **No entry is presented as
validated.** **Nothing is mocked or filled in to cover the gap.**

## Ranked opportunities

### 1. Georgia DOAS fleet-provider enrollment — 60/100

| Field                   | Detail                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Location**            | Statewide Georgia                                                                                                                                                                                                                                                                                                                                                                          |
| **Source**              | `doas.ga.gov` — Vendor Enrollment Guide, path dated **2026-07**. **Primary state domain. Not opened: WebFetch cannot reach it**                                                                                                                                                                                                                                                            |
| **What it is (source)** | **The Georgia Department of Administrative Services' Office of Fleet Management has moved state-owned vehicle maintenance to Element Fleet Management's provider network.** Its vendor letter states that a business not currently in Element's network **"must enroll and become an approved maintenance provider"** to continue performing maintenance or repair on state-owned vehicles |
| **Eligibility**         | **Approved maintenance providers in Element's network.** **Whether remote ECU/EFI calibration and diagnostics count as "maintenance or repair services" is NOT stated and is NOT assumed**                                                                                                                                                                                                 |
| **Deadline**            | **None found. Enrollment, not a bid** — _assumption: ongoing, because the letter describes a standing requirement rather than a closing date_                                                                                                                                                                                                                                              |
| **Estimated capital**   | **Not stated.** _Assumption: enrollment itself is administrative rather than capital-intensive_ — **scored neutral, not best or worst case**                                                                                                                                                                                                                                               |
| **Expected return**     | **Recurring fleet work rather than a one-off award.** **No volume or rate is stated anywhere in the results and none is invented**                                                                                                                                                                                                                                                         |
| **Owner effort**        | An enrollment package, plus whatever approval requires. _Assumption: hours, not weeks_                                                                                                                                                                                                                                                                                                     |
| **Risk**                | **Low.** Enrolling commits little and can be abandoned                                                                                                                                                                                                                                                                                                                                     |
| **Next action**         | **Establish whether remote calibration qualifies at all, before any enrollment effort.** **T-123**                                                                                                                                                                                                                                                                                         |

**Score breakdown** — financial value **14**/25 · accessibility **11**/20 · time
sensitivity **11**/15 · source reliability **9**/15 · capital requirement
**6**/10 · complexity **5**/10 · risk **4**/5 = **60/100**.

**Why it ranks first despite having no award figure.** **It is the only find
that is recurring revenue rather than a one-time grant**, and DD84's actual
services — diagnostics and calibration — are adjacent to what it procures. **The
honest weakness is the eligibility question**: DD84 is a remote calibration
business, not a physical repair shop, and **nothing in the source says whether
that qualifies.** **That question is worth answering before any effort goes in,
which is why T-123 asks it rather than proposing enrollment.**

### 2. SBA Microloan through a Georgia intermediary — 56/100

| Field                   | Detail                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Location**            | **All 159 Georgia counties**                                                                                                                                                                                                                                                                           |
| **Source**              | SBA programme material via `americanbar.org`, `opengrants.io`, `effinghamherald.net`. **No official SBA page was opened**                                                                                                                                                                              |
| **What it is (source)** | **Loans up to $50,000 through nonprofit intermediary lenders; the SBA does not lend directly.** **A microlender decides eligibility using SBA criteria plus its own policies.** Atlanta intermediaries include Access to Capital for Entrepreneurs                                                     |
| **Eligibility**         | **A small business based in the United States.** One guide suggests **at least a year in operation** improves odds — DD84 clears that. **Whether automotive services qualify is NOT confirmed**                                                                                                        |
| **Deadline**            | **None — rolling**                                                                                                                                                                                                                                                                                     |
| **Estimated capital**   | **It supplies capital.** Application cost is time                                                                                                                                                                                                                                                      |
| **Expected return**     | **Up to $50,000 of debt, not revenue**                                                                                                                                                                                                                                                                 |
| **Owner effort**        | A full loan application, likely collateral and a personal guarantee                                                                                                                                                                                                                                    |
| **Risk**                | **The highest on this list.** **Debt against a business with four payments in eleven days and a cash shape last recorded as overdrawn (T-71).** **Borrowing before the three unattributed payments are even reconciled would be taking on fixed obligations against revenue nobody can yet attribute** |
| **Next action**         | **None proposed.** Named because **`CLAUDE.md` records DD84 as pursuing SBA 504** — and a microloan is the right-sized instrument for this balance sheet, where 504 is not                                                                                                                             |
| **Evidence**            | Several results claiming citizenship requirements came from **a private lender's marketing pages and could not be verified**; they are not relied on here                                                                                                                                              |

**Score breakdown** — financial value **12**/25 · accessibility **13**/20 · time
sensitivity **10**/15 · source reliability **8**/15 · capital requirement
**8**/10 · complexity **4**/10 · risk **1**/5 = **56/100**.

**The risk score of 1 out of 5 is the point of this entry, not an
afterthought.** **It ranks second on total and this scan does not recommend
it.** Its value is **comparative**: it shows that the financing instrument DD84
is reportedly pursuing is several sizes too large, and that a $50,000 ceiling
instrument exists and is reachable from Jackson County.

### 3. Jackson County Chamber small-business grant — 42/100

| Field                    | Detail                                                                                                                                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Location**             | **Jefferson, Georgia — DD84's own county.** The chamber is listed as a public charity in Jefferson, GA                                                                                        |
| **Source**               | `jcchamber.com/small-business-grant-application/`. **The chamber's own domain — and the page content is the 2024 cycle**                                                                      |
| **What it is (source)**  | A chamber small-business grant. **2024 cycle: applications due 1 October, awards presented at the 30 October annual meeting, total requests capped at $3,000**                                |
| **Eligibility (source)** | **Chamber membership of at least one year**, **fewer than 50 employees**, **a price quote submitted with the application**, and **attendance at a marketing training session** for recipients |
| **Deadline**             | **No 2026 cycle confirmed.** **If the cycle repeats, 1 October has already passed** — 32 days ago                                                                                             |
| **Estimated capital**    | **A price quote is required, so it reimburses a planned purchase** — the purchase must be identified first                                                                                    |
| **Expected return**      | **Up to $3,000 in the 2024 cycle.** **No 2026 figure exists**                                                                                                                                 |
| **Owner effort**         | A short application, a quote, and a training session                                                                                                                                          |
| **Risk**                 | **Minimal**                                                                                                                                                                                   |
| **Next action**          | **One phone call, and it is the owner's**: does a 2026 cycle exist, and is DD84 a member of at least a year's standing? **T-124**                                                             |

**Score breakdown** — financial value **5**/25 · accessibility **9**/20 · time
sensitivity **3**/15 · source reliability **6**/15 · capital requirement
**7**/10 · complexity **7**/10 · risk **5**/5 = **42/100**.

**A correction this run made to itself, and it matters for how aggregators get
read.** **The first search reported this as a "Small Business Grant Program
2026", jointly run with Chevron, targeting operational, customer-experience and
safety improvements.** **An extended search of the same page found the content
is the 2024 cycle, and no result anywhere connects Chevron to this chamber.**

**So the year in the first snippet was wrong and the sponsor appears to have
been imported from a different programme.** **Had this scan scored from the
first search alone it would have published a confident 2026 deadline that does
not exist** — **which is exactly the failure the prompt's "never score from a
stale or unverifiable listing" rule is aimed at, arriving through a route the
rule does not describe: not a stale listing, but a fresh summary of a stale
page.**

## Scored but held — source could not be validated

| Opportunity                                                                                       | Why held                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Georgia DCA — State Small Business Credit Initiative 2.0 / Georgia Loan Participation Program** | **Aggregator-only** (`grantedai.com`). The programme buys portions of loans private lenders make to small businesses. **No official DCA page was reached, no terms, no deadline. Not scored** |
| **A $4,000 Georgia commercial-building-improvement grant, deadline stated as 2026-10-15**         | **Aggregator-only, and the stated deadline has already passed.** Recorded so a future scan can look for the next cycle                                                                        |
| **SecretSOS grant; FedEx Entrepreneur Fund / Boost Camp**                                         | **Not Georgia-specific; no confirmed 2026 dates found.** SecretSOS is described as running October–December windows. **Insufficient to score**                                                |

## Found and deliberately not scored

**1. A claimed $90,000 Georgia Department of Community Health grant, deadline
2026-11-13.** **Refused.** The search that surfaced it reported the listing page
carries **"jumbled, mismatched program descriptions"**, and **a
health-department grant has no evident fit with an automotive calibration
business.** **An unverified opportunity with a number beside it is worse than
one without** — the same judgement the 2026-10-26 scan made, and the second time
it has been needed.

**2. Fulton County police fleet repair — a Small Business Set Aside, closed
2026-09-15.** **48 days past; not scoreable.** **Recorded because it is the most
useful forward-looking fact in this scan:** **Georgia counties do issue fleet
work as small-business set-asides**, which is a class of opportunity DD84 could
be positioned for before the next one opens rather than after. **Several others
closed earlier in 2026** — Atlanta Fire Rescue EMS (due 2026-05-29),
Augusta-Richmond County fleet (due 2026-06-03), City of South Fulton heavy-duty
and light-duty fleet (due 2026-04-30 and 2026-04-24).

**That pattern is the finding, not any single closed bid: fleet maintenance work
comes up repeatedly in Georgia, it closes on short windows, and a weekly scan
that cannot open a procurement portal will keep meeting these after they
close.**

## Due-diligence tasks created

| Task      | What                                                                                                     | Owner |
| --------- | -------------------------------------------------------------------------------------------------------- | ----- |
| **T-123** | Does remote ECU/EFI calibration qualify as a "maintenance or repair service" for state fleet enrollment? | Owner |
| **T-124** | Does the Jackson County Chamber run a 2026 grant cycle, and is DD84 a member of a year's standing?       | Owner |
| **T-125** | The scoring method's "time sensitivity" axis has no stated direction                                     | Agent |

## Not checked this run

- **Every source, in the sense the prompt means.** **WebFetch resolves no host,
  control included**, so **not one listing was opened.** **Source reliability is
  scored down on every entry and no entry is presented as validated. T-98.**
- **The Georgia Procurement Registry itself.** **It is the state's central bid
  registry and the authoritative place for open solicitations** — and it cannot
  be opened from here. **Everything above about Georgia fleet bids came from
  third-party mirrors whose dates the search itself advised verifying.**
- **Whether the Jackson County Chamber's 2026 cycle exists.** **T-124. Not
  assumed in either direction.**
- **Whether DD84 is a Jackson County Chamber member at all**, which the 2024
  eligibility rule makes a precondition. **Nothing in this register records a
  chamber membership.**
- **Automotive eligibility for the SBA microloan programme.** **Not confirmed,
  not assumed.**
- **Any award amount, rate or volume for the fleet enrollment.** **None is
  stated in any source and none is invented.**

## Top three, deadlines, and what the owner must decide

| Rank  | Opportunity                                     | Score      | Deadline                                                     |
| ----- | ----------------------------------------------- | ---------- | ------------------------------------------------------------ |
| **1** | **Georgia DOAS fleet-provider enrollment**      | **60/100** | **None found — enrollment, not a bid**                       |
| **2** | **SBA Microloan via a Georgia intermediary**    | **56/100** | **None — rolling.** **Scored second and not recommended**    |
| **3** | **Jackson County Chamber small-business grant** | **42/100** | **No 2026 cycle confirmed; the 2024 cycle closed 1 October** |

**Not one opportunity in this scan has a confirmed open deadline.** **That is
the scan's honest headline and it is a finding about reach, not about Georgia**
— **the prompt says an empty scan is a finding about the scan**, and this scan
is not empty but it is unvalidated, for one reason: **the session cannot open a
web page.**

**Three decisions, and two are one question each:**

1. **Should the session's network access be widened?** **This is the decision
   that unblocks the routine rather than any single opportunity.** **With
   WebFetch working, a weekly scan could read the Georgia Procurement Registry
   directly instead of meeting closed bids in third-party mirrors.** **T-98, and
   it is the owner's environment setting, not an agent's.**
2. **Does remote calibration count as fleet maintenance?** **One question to
   DOAS or Element, and it decides whether the top-ranked opportunity is real
   for DD84 at all.** **T-123.**
3. **Is DD84 a Jackson County Chamber member, and is there a 2026 cycle?** **One
   phone call, local, and the only item here under $5,000 and therefore the only
   one proportionate to the business's current size.** **T-124.**

**Nothing here needs money, and nothing here is urgent this week.** **The
genuinely urgent items are elsewhere in the register — T-110, T-52 and T-60 —
and this scan does not compete with them for the owner's attention.**

## Sources

- [Georgia DOAS Vendor Enrollment Guide (2026-07)](https://doas.ga.gov/sites/default/files/2026-07/Vendor%20Enrollment%20Guide.pdf)
- [Georgia Procurement Registry overview, DOAS](https://doas.ga.gov/state-purchasing/georgia-procurement-registry-local-governments/gpr-overview)
- [Jackson County Chamber — small business grant application](https://jcchamber.com/small-business-grant-application/)
- [SBA microloans — American Bar Association](https://www.americanbar.org/groups/gpsolo/resources/ereport/2026-july/small-business-administration-sba-microloans)
- [SBA microloan programme — opengrants.io](https://opengrants.io/sba-microloan-program-who-really-decides/)
- [SBA extends microloan program to all 159 counties](https://www.effinghamherald.net/local/business/sba-extends-microloan-program-to-all-159-counties/)
- [Georgia Loan Participation Program, DCA — via aggregator](https://grantedai.com/grants/georgia-loan-participation-program-georgia-department-of-community-affairs--23f5ae30)
- [Fulton County / Georgia SLED fleet solicitations — third-party mirror](https://samsearch.co/gov-explore/sled/light-duty-vehicle-maintenance-full-line-repair-services/PE-66020-NONST-2026-000000086)
- [Georgia small business grants — GrantWatch](https://georgia.grantwatch.com/cat/13/small-business-grants.html)
- [Cloud environment network access documentation](https://code.claude.com/docs/en/cloud-environments#network-access)
