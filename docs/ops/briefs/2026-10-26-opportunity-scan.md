# DD84 Georgia opportunity scan — 2026-10-26

Run at **2026-10-26T11:27–11:55Z**, Monday. Previous scan: **2026-10-19**. Class
A — **nobody was contacted, nothing was applied for, nothing committed.**

**This scan is DD84 looking for its own opportunities.** It is not editorial
input for the Georgia Opportunity Ledger, which is a different business in a
different repository. **Nothing here becomes a Ledger record.**

## Scoring method, named as the routine requires

The 100-point method from `.claude/commands/dd84-opportunity-scan.md`:
**financial value 25 · accessibility 20 · time sensitivity 15 · source
reliability 15 · capital requirement 10 · complexity 10 · risk 5.**

**The command file promises "bands that follow from the total" and never states
them.** No threshold is invented here — **the totals rank the entries against
each other and mean nothing in absolute terms.** Third scan to report this.

**Unknown scores neutral, not worst-case**, per the routine. Where a component
is unknown it is scored at the midpoint and marked.

## Egress and instrument check — the finding that bounds every entry below

**WebSearch works. WebFetch does not work at all. The record's previous
description of this was wrong, and the correction matters.**

| Instrument     | Target                          | Result                                                                 |
| -------------- | ------------------------------- | ---------------------------------------------------------------------- |
| `curl`         | `doas.ga.gov`                   | **`CONNECT tunnel failed, response 403`** — reaches the proxy, refused |
| `getent hosts` | `doas.ga.gov`                   | **no container DNS**                                                   |
| **WebFetch**   | `doas.ga.gov`                   | `getaddrinfo ENOTFOUND`                                                |
| **WebFetch**   | `www.rd.usda.gov`               | `getaddrinfo ENOTFOUND`                                                |
| **WebFetch**   | `www.georgia.org`               | `getaddrinfo ENOTFOUND`                                                |
| **WebFetch**   | **`example.com`** — the control | **`getaddrinfo ENOTFOUND`**                                            |
| **WebSearch**  | four queries                    | **worked every time**                                                  |
| Proxy status   | —                               | `enabled: true` · `bundleCoversEveryHost: true` · `selective: false`   |

**OL-0049 and OL-0055 described this as "one block, two error strings, decided
by which tool asks."** That framing implied a host-level block on Georgia state
sites. **The control disproves it: `example.com` fails too, so WebFetch has no
name resolution whatsoever, for any host.**

**These are two different failures, not two views of one:**

- **`curl` resolves and reaches the proxy, which refuses CONNECT with 403.** A
  policy block.
- **WebFetch never reaches the proxy, because it cannot resolve anything.** No
  host allow-listing would fix it.

**What that costs this routine, concretely.** The command file says _"validate
the source and the deadline before scoring — never score from a stale or
unverifiable listing"_ and _"cite the source URL for each."_ **The URLs below
are cited, and not one of them was fetched.** Everything factual here is
**WebSearch's server-side synthesis of those pages**, which is a real source and
is not the same as reading them.

**So "source reliability" (15 points) cannot score top for anything in this
scan, by construction.** That is not a judgement about Georgia's websites — **it
is a ceiling this container imposes on the routine**, and every total below
carries it. **T-98.**

## Ranked opportunities

| #     | Opportunity                                                                    | Total        | Open deadline?                                   |
| ----- | ------------------------------------------------------------------------------ | ------------ | ------------------------------------------------ |
| **1** | **Elberton Rural Zone tax credits** — job, investment and rehabilitation       | **55 / 100** | **No deadline — designation live to 2030-12-31** |
| **2** | **Statewide fleet-maintenance vendor network** — subcontracting to small shops | **40 / 100** | **None found**                                   |

**Two scored entries, and neither has an open verified deadline.** The routine
says an empty scan is a finding about the scan. **This one is not empty, but it
found nothing with a live application window** — and the honest reading is
split: **most 2026 Georgia grant cycles have genuinely closed** (see below),
**and the one listing that may be open today could not be verified.**

---

## Scored entries

### 1. Elberton Rural Zone tax credits — **55 / 100**

**Source data — factual, from the cited pages via WebSearch:**

- **Elberton was designated a Rural Zone effective 2026-01-01, running through
  2030-12-31.**
- **Job credit: $2,000 per year per new full-time-equivalent job, up to five
  years.** The Department of Revenue form states a **maximum credit of $40,000
  per tax year.**
- **Investment credit: 25% of the purchase price of property inside the zone,
  capped at $125,000.** Cannot be taken unless jobs are created and the job
  credit is taken.
- **Rehabilitation credit: 30% of qualified rehabilitation costs, capped at
  $150,000.**
- **Eligibility: at least two net new full-time-equivalent jobs.** The business
  must be **located in the investment property** and maintain **at least two FTE
  for each year claimed.**
- The program is limited to **downtowns in communities under 15,000 people** —
  an aggregator claim, **consistent with Elberton's designation but not
  confirmed from DCA.**

**My assumptions — labelled as mine, not source data:**

- **Elberton is roughly 30 miles from the Colbert parcel DD84 has been
  evaluating.** Distance not measured from a source this run.
- **The binding constraint is employment, not geography.** `ventures.md` records
  **no employees**. **Two net new FTE is a payroll commitment DD84 has never
  made**, and every one of the three credits hangs off it.
- **Source conflict noted and not resolved:** a 2007-era Georgia Main Street
  page lists a $200,000 total job-credit cap and a $25,000 per-year investment
  cap. **Those contradict the current DOR form.** The newer figures are used
  above and **the conflict is recorded rather than silently dropped.**

**Why it scores where it does**

| Component           | Score       | Reasoning                                                                                                                                                                                                               |
| ------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Financial value     | **22 / 25** | Two FTEs give $4,000/yr; buying in the zone returns **25% of purchase price** up to $125,000, and rehab 30% up to $150,000. **Plausibly tens of thousands against a business whose lifetime collections are $5,207.86** |
| Accessibility       | **9 / 20**  | No competitive award and no application window — **but it requires relocating into a designated downtown and hiring two people**                                                                                        |
| Time sensitivity    | **4 / 15**  | **No deadline.** The window closes 2030-12-31, which is far off                                                                                                                                                         |
| Source reliability  | **9 / 15**  | DOR form and DCA release are authoritative — **and could not be fetched.** One aggregator conflicted with older figures                                                                                                 |
| Capital requirement | **5 / 10**  | **Unknown → neutral.** A building purchase is substantial and these are credits, not grants — **a rebate on money already spent**                                                                                       |
| Complexity          | **3 / 10**  | Multi-year, employment-dependent, property-dependent, interacts with the Colbert decision and with tax filings                                                                                                          |
| Risk                | **3 / 5**   | Nothing is clawed back for simply not qualifying. **The risk is spending to qualify and then falling short of two FTE**                                                                                                 |

**Why this is the top entry despite scoring 55** — **it changes the arithmetic
of a decision already in front of the owner.** T-78 is buy-vs-build on the
Colbert parcel, and last week two agencies said that site may not work: **no
public water connection, and a 0.638-acre lot that may not fit shop, parking and
septic.** **A designated Rural Zone 30 miles away returns 25% of a purchase
price.** That is not a new project — **it is a second candidate site for a
decision that currently has one failing candidate.**

**Sources:**
[2026 Rural Zone application form (DCA)](https://dca.georgia.gov/document/applications/rural-zone-application-2026/download)
·
[Rural Zone tax credits, Form IT-RZ (DOR)](https://dor.georgia.gov/document/document-document/formit-rzruralzonetaxcredits/download)
·
[DCA: seven new Rural Zones designated, 2025-12-05](https://dca.georgia.gov/press-releases/2025-12-05/georgia-designates-seven-new-communities-rural-zones)
·
[DCA: nine new Rural Zones, 2024-11-01](https://dca.georgia.gov/press-releases/2024-11-01/georgia-designates-nine-new-rural-zones-tax-incentives-and-development)
·
[Georgia Main Street: Rural Zone designation](https://georgiamainstreet.org/financial/rural-zone-designation/)

**Next action — Class A, agent:** nothing. **T-97 is the owner's**, because the
first question is whether he would ever hire two people.

---

### 2. Statewide fleet-maintenance vendor network — **40 / 100**

**Source data — factual:**

- Georgia's Department of Administrative Services **awarded a statewide contract
  covering "outside repair facilities in the vendor's network"**, plus a Total
  Management System and a Garage Maintenance System. **The listing is from 2022
  and its current award status was not confirmed.**
- **DeKalb County's May 2026 agreement report lists fleet parts and service
  vendors on contracts running January 2026 to January 2027.** County, not
  state.
- **Georgia DOT's October 2025 routine-maintenance prequalification manual**
  defines a small business as independently owned with **fewer than 300
  employees or under $30 million gross receipts**, and encourages primes to
  subcontract. **That covers road maintenance, not vehicle repair.**
- **South Fulton's municipal fleet preventive-maintenance RFP had a bid date of
  2026-01-08** — closed. One-year initial term, two one-year renewals.

**My assumptions — labelled:**

- **This is the only route found where DD84's actual capability maps onto
  government spend without DD84 being a prime contractor.** A statewide contract
  that routes work to a network of outside repair facilities is, in principle, a
  door a small shop can knock on.
- **Whether that network accepts new shops is not established**, and **DD84 has
  no recorded physical bay, staff or fleet-grade insurance** — `ventures.md`
  describes a remote-tuning and diagnostics operation. **Fleet repair networks
  want a facility.**

| Component           | Score       | Reasoning                                                                                                        |
| ------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Financial value     | **12 / 25** | Recurring fleet work is the right _shape_ for a shop. **No figure available → neutral**                          |
| Accessibility       | **8 / 20**  | No bid to win — it is a commercial conversation. **But a repair network wants a facility DD84 has not recorded** |
| Time sensitivity    | **3 / 15**  | **No deadline found**                                                                                            |
| Source reliability  | **5 / 15**  | **A 2022 listing, unconfirmed award status, and the Procurement Registry could not be fetched**                  |
| Capital requirement | **5 / 10**  | **Unknown → neutral.** Likely facility and insurance costs                                                       |
| Complexity          | **3 / 10**  | Insurance, certification and probably premises                                                                   |
| Risk                | **4 / 5**   | **A conversation costs nothing** and commits nothing                                                             |

**Sources:**
[Georgia Procurement Registry event listing](https://ssl.doas.state.ga.us/gpr/eventDetails?eSourceNumber=40300-DAS0000146&sourceSystemType=ps)
·
[GDOT routine maintenance prequalification manual](https://www.dot.ga.gov/PartnerSmart/Business/Prequalification/Documents/Maintenance/RoutineMaintenancePrequalificationManual.pdf)
·
[DeKalb County PO agreements, 2026-05-07](https://dekalbcountyga.gov/sites/default/files/2026-05/DC_R_PO%20Agreements_05-07%202026_SQE.pdf)
·
[South Fulton municipal fleet RFP](https://www.georgiabids.net/government-agencies/fulton/south-fulton-city-of---purchasing-dept-1399402/14520018-preventive-maintenance-and-repair-services-for-municipal-vehicle-fleet-rfp.html)

**Next action:** **T-99**, agent, Class A — establish from the Procurement
Registry whether any fleet or vehicle-repair solicitation is actually open.
**Blocked on the same egress problem**, so the task names that up front.

---

## Already tracked, not re-scored

**Georgia Procurement Registry registration — T-77**, raised 2026-10-21.
Rolling, no deadline, no fee found. **It is the precondition for entry 2** and
is already in the register; **re-scoring it would double-count.**

## Not scored, and why

**Scoring an unverifiable listing is the one thing this routine explicitly
forbids. These are named so the owner can look, not ranked as though
validated.**

| Opportunity                                                                                 | Why not scored                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **A Tennessee/Georgia small-business contest with a stated deadline of 2026-10-26 — today** | **Aggregator listing, unfetchable, eligibility unconfirmed.** Scoring something on its deadline day from a source I cannot open would be exactly the failure the routine forbids. **Flagged as worth the owner's five minutes**                                                                           |
| Hurricane Helene Block Grant for farmers and ranchers                                       | **Closed.** Ran 2026-03-16 to 2026-05-11                                                                                                                                                                                                                                                                  |
| Go Global Georgia                                                                           | **Closed.** 2026-09-01 deadline passed                                                                                                                                                                                                                                                                    |
| USDA Rural Business Development Grants, Georgia                                             | **Closed June 2026**                                                                                                                                                                                                                                                                                      |
| A $4,000 commercial-building-improvement grant for Georgia businesses                       | **Closed.** 2026-10-15 deadline passed                                                                                                                                                                                                                                                                    |
| Invest Atlanta Small Business Improvement Grant                                             | **Not eligible — Atlanta only.** DD84 is in Jefferson                                                                                                                                                                                                                                                     |
| **Rural Zone _designation_** (as distinct from the credits)                                 | **Communities apply, not businesses.** The 2026 cycle closed 2025-08-15; the pattern is an August deadline with October announcements, so the next is presumptively **August 2027 — unpublished**. **Not DD84's to apply for**, though Jefferson or Colbert could be put forward by their own governments |
| Three national grants said to close 2026-10-31                                              | **Not Georgia, not verified, not DD84-specific**                                                                                                                                                                                                                                                          |

## Owner decisions needed before the next scan

| Decision                                                | Why it matters now                                                                                                                                                                                                                  |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Would DD84 ever employ two people?**                  | **Every Rural Zone credit hangs off two net new FTE.** If the answer is no, entry 1 scores 0 and should not be looked at again. **One word closes or opens the best thing this scan found** — **T-97**                              |
| **Does the Colbert decision stay single-candidate?**    | T-78 is buy-vs-build on a parcel that **two agencies questioned last week**. A designated Rural Zone 30 miles away **returns 25% of a purchase price**. **The arithmetic deserves a second site before money goes into the first**  |
| **Is this routine worth running weekly as configured?** | **It cannot fetch a single source.** It still produced two ranked entries and a usable correction — **but "validate before scoring" is unachievable here**, and the owner should know the ceiling before trusting a score. **T-98** |

## Not checked this run

- **Every cited source**, as pages. **WebFetch has no DNS; curl is refused at
  the proxy with 403.** All factual content is WebSearch's synthesis.
- **grants.gov, the Georgia Procurement Registry and DCA directly** — the three
  the search itself recommended checking. **Unreachable from this container.**
- **The distance from Elberton to the Colbert parcel** — asserted as "roughly 30
  miles" from general knowledge and **labelled as my assumption, not measured.**
- **Whether Jefferson or Madison County has any local incentive programme** —
  not searched this run; the window went to Rural Zone and procurement.
