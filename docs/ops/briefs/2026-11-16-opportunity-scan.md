# DD84 Georgia opportunity scan — 2026-11-16

Started **2026-11-16T10:05:08Z** (read from the clock). The finish time is this
file's commit, per T-116. Since: **2026-11-10** (OL-0096). Sources searched:
WebSearch across state funding (DCA SSBCI, SBDC), SBA Georgia district, county
development authorities (Jackson County IDA / Jackson Alliance), utility
incentives (Georgia Power), local fleet-maintenance solicitations, and Gmail
from 2026-11-10 onward. Not searched: see the last section.

**New: 1 scored, 6 found and not scored. Updated: 0. Expired or withdrawn: 0.
Duplicates merged: 0.**

**Bottom line: no new opportunity reached 55 this week, so no new due-diligence
task was created.** The best live item is still **GA@WORK supplier registration
(64, T-160)**. It was due 2026-11-14, it is now past due, and it is still
waiting on the owner's T-123 answer.

## 0. Instrument test — T-98 unchanged

| Call                                                            | Result                                     |
| --------------------------------------------------------------- | ------------------------------------------ |
| `WebFetch https://www.sba.gov/funding-programs/loans/504-loans` | `getaddrinfo ENOTFOUND www.sba.gov`        |
| `curl https://www.sba.gov`                                      | `000`: the proxy refused, as on 2026-11-10 |

**A-27 is still Pending**, so no primary page could be opened. Everything below
comes from `WebSearch`'s summaries of those pages. That is why **source
reliability is capped at 8/15** and **no deadline below counts as validated**.
This is the sixth scan in a row with this ceiling.

## Ranked candidates

| #   | Opportunity                                     | Type              | County                                                      | Value                                                                                           | Deadline                                           | Score      | Band                   | Owner effort                                      | Next action                                           | Task |
| --- | ----------------------------------------------- | ----------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------- | ---------- | ---------------------- | ------------------------------------------------- | ----------------------------------------------------- | ---- |
| 1   | **Georgia Power Small Business Energy Savings** | Utility incentive | Georgia Power territory; DD84's location is unknown (T-164) | **"Up to 70%" of eligible project costs** (marketing page, not the terms); dollar value unknown | **None stated**: rolling, 2026–28 programme sheets | **47/100** | Limited or Specialized | Confirm the account and premises; free assessment | **None proposed.** Below 55, and it needs T-164 first | —    |

There is only one new candidate, and it falls below the task threshold.

## Candidate records

### 1. Georgia Power Small Business Energy Savings (SBES): score 47/100 (Limited or Specialized)

**Stated by source** (WebSearch summary of georgiapower.com pages, read
2026-11-16 ~10:10Z; no page opened):

- Issuer: Georgia Power.
- Pages: `https://www.georgiapower.com/smallcommercial`, and the terms
  `https://www.georgiapower.com/content/dam/georgia-power/pdfs/programs/sbes/SBES_Terms_Conditions_2026.pdf`.
- Eligibility: small business customers whose 12-month peak demand is **249 kW
  or less**. An older third-party listing says 120 kW and looks out of date.
- Value: a free energy assessment and funding for **"up to 70%" of eligible
  project costs**. That figure comes from a marketing page, and the summary
  itself said to check it against the 2026 terms.
- What it covers: lighting, smart thermostats, HVAC maintenance. A registered
  contractor must do the installation.
- Deadline: none stated.

**Assumed by Torque:**

- **Assumption:** DD84 operates from premises billed by Georgia Power on a
  commercial account. **This is unconfirmed.** `ventures.md` records no location
  (T-164), and Georgia Power does not serve all of Georgia; EMCs serve much of
  the state. A Georgia Power commercial bill would confirm it.
- **Assumption:** a small tuning operation would be well under 249 kW. This is
  likely, but it has not been checked.
- **Assumption:** the 30% or more that DD84 would pay is a real cash outlay, and
  that matters given the cash position recorded in the 2026-11-13 review
  (withheld under A-19).

**Score breakdown:**

| Component           | Score | Note                                                                                                           |
| ------------------- | ----- | -------------------------------------------------------------------------------------------------------------- |
| Financial value     | 10/25 | Neutral, because unknown. It saves on costs rather than bringing in revenue, and no dollar figure is published |
| Accessibility       | 10/20 | Neutral, because unknown. It depends entirely on T-164 and on which utility serves the premises                |
| Time sensitivity    | 3/15  | Rolling, with no deadline. This is the rule as of 2026-11-02                                                   |
| Source reliability  | 8/15  | Capped by T-98. The issuer's own domain appeared in the results, but no page was opened                        |
| Capital requirement | 5/10  | Neutral. The cost share is unknown until the assessment                                                        |
| Complexity          | 7/10  | Assessment first, then contractor-installed                                                                    |
| Risk                | 4/5   | It is a utility programme, so the main risk is spending cash ahead of the rebate                               |

**Why it ranks here.** It is real, statewide and free to start. But it is a way
to cut costs at a facility this record cannot yet show exists, and it pays for
equipment rather than bringing in revenue. **It is listed so that the owner can
make a one-line call on it**, not because it should move ahead of GA@WORK.

**Next action:** none until T-164 says where DD84 operates and who bills it for
power. If the owner confirms a Georgia Power commercial account, the free
assessment is the first step. Requesting it would count as outreach (Class C),
so it would need a packet.

## Carried forward, not re-scored

| Candidate                                                                        | Score | State on 2026-11-16                                                                                                                                                                       |
| -------------------------------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GA@WORK supplier registration**                                                | 64    | **T-160 is past due (2026-11-14)**. It is still gated on T-123 (whether remote calibration counts as "maintenance")                                                                       |
| **Georgia SBDC advisory**                                                        | 64    | Still live. Free, with no deadline                                                                                                                                                        |
| **DOAS fleet-provider enrollment**                                               | 60    | T-123, past due                                                                                                                                                                           |
| **Buy an existing shop on Hwy 72**                                               | 56    | T-78, past due                                                                                                                                                                            |
| **SBA Microloan**                                                                | 56    | No change found                                                                                                                                                                           |
| **Elberton Rural Zone tax credits**                                              | 55    | T-97. A summary says DCA's Rural Zone overview was updated in January 2026, which is not new this week                                                                                    |
| **Georgia SSBCI**                                                                | 40    | **No 2026 change found.** Treasury's programme list (data as of 2026-03-31) still lists Georgia's Loan Participation and CDFI programmes. The DCA loan-limit conflict is still unresolved |
| Others from 2026-11-10 (SBA 504, USDA B&I, TCSG, REAP, SecretSOS, fleet network) | 34–53 | Not re-checked                                                                                                                                                                            |

**Scores from 2026-11-02 and earlier use the old time-sensitivity direction**
and should not be ranked directly against today's 47.

## Found and deliberately not scored

| Found                                                                                                                                                | Why it is not scored                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **City of Atlanta AFRD Vehicle & Equipment Repairs**: a pre-advertisement RFQ listed on an aggregator (govly) as closing **2026-11-26**, $500k – $2M | **DD84 could not credibly bid.** It is fire-apparatus repair at municipal scale, and `ventures.md` records no employees. It is an aggregator listing, not the Procurement Registry. It is recorded as a signal that local fleet repair buying is active, which bears on T-123 |
| **Georgia's Own Foundation grants**: due 2026-11-30 or 2026-12-01 (sources conflict), up to $10,000                                                  | **DD84 is ineligible.** Only 501(c)(3) nonprofits can apply, and at least 85% must be youth-focused. An aggregator had listed it as a small-business grant                                                                                                                    |
| **"Georgia Green Energy Expansion Grant"**: due 2026-12-01 according to aggregators                                                                  | **Unverifiable.** One aggregator lists the issuer as "undisclosed", and no state agency page turned up. It is not treated as real until a primary source is found                                                                                                             |
| **SBA SBDC cooperative agreement** SB-OEDSB-26-002, closing 2026-12-03                                                                               | Only existing SBDC host organisations can apply, not businesses                                                                                                                                                                                                               |
| **SBA national small-business awards**: nominations due 2026-12-07                                                                                   | A recognition award with no funding                                                                                                                                                                                                                                           |
| **Shophand Small Business Boost Grant** (2026-11-30)                                                                                                 | Already raised on 2026-11-10. It is not a Georgia programme, and whether national programmes are in scope is still the owner's call                                                                                                                                           |

## Changed since last scan

Nothing material changed among the tracked candidates. **T-160 moved from due to
past due.**

## Expired or withdrawn

None this week. Earlier withdrawals stay in their own briefs.

## Conflicts and doubts

1. **The Georgia's Own deadline:** two aggregators give 2026-11-30 and one gives
   2026-12-01. It doesn't matter for DD84, which is ineligible either way.
2. **The SBES funding share:** the "up to 70%" figure comes from a marketing
   page, and the 2026 terms PDF was not opened.
3. **T-161 (a Jackson County / Jefferson programme):** the search found the
   Jackson County Industrial Development Authority (staffed by the Jackson
   Alliance) and no small-business grant. **The task stays Blocked, because
   T-164 has not confirmed that Jackson County is where DD84 is.** Searching for
   it is not the same as confirming it, so it is not closed.

## Gmail (2026-11-10 → 2026-11-16)

Twenty-two threads matched the opportunity terms. **None is a Georgia
opportunity from an issuing body.** They were Freelancer.com job digests, vendor
and lender promotions, platform notices, and one weekly digest from the Georgia
Opportunity Ledger (thread `1a1d02144e6bfea5`). That digest is **the other
business's product and was not used as a source**, as on 2026-11-10.

## Not checked this run

| Source                                                  | Why                                              |
| ------------------------------------------------------- | ------------------------------------------------ |
| **Every primary source**                                | T-98 / A-27                                      |
| **Grants.gov and SAM.gov, Georgia-filtered**            | Only reached indirectly (the SBDC notice)        |
| **County tax-sale and auction pages; surplus property** | Not searched. The county is unknown (T-164)      |
| **Commercial-property listings**                        | Not searched. T-78 is the open property question |
| **Labour-market, construction and pricing indicators**  | Not searched                                     |
| **Competitor moves**                                    | Not searched. This belongs to Rev                |
| **Google Drive owner criteria**                         | Not read                                         |
| **Georgia Procurement Registry; GA@WORK**               | They need fetch and login access                 |

## What this run did not do

- Called **no Supabase tool** and touched nothing in the Georgia Opportunity
  Ledger.
- **Emailed no one.** The scheduled prompt asks for this summary to be "emailed
  to paid subscribers". **DD84 has no subscriber list for this scan, and
  subscribers to the Ledger belong to the other business.** This routine is
  Class A, and sending is Class C. See OL-0107.
- **Did not write to the other session** named in the prompt
  (`session_014tKgATr4RfVYDjYToz1Rgi`). This record is where scan output goes.
- Contacted no source, submitted nothing and committed no capital.
- Presented no midpoint and stated no deadline as validated.
