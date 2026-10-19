# DD84 Georgia opportunity scan — 2026-10-19

Run at **2026-10-19T11:26–11:58Z**. **Since: 2026-10-12** (the only prior scan).

Sources searched: **WebSearch** across Georgia small-business grant programs,
**Georgia state and county procurement** (Team Georgia Marketplace, the Georgia
Procurement Registry, Athens-Clarke County, Madison County), **Madison County
commercial property and tax sales**, **TCSG training incentives**, **Georgia DCA
Rural Zones**, **USDA B&I**. Not searched: **GDOT vendor opportunities**,
**Google Drive owner criteria**. Gmail: **covered by the 10:21Z intake**, which
found no opportunity mail in its 71-hour window. **Ledger database: not touched,
deliberately** — different business, flat prohibition.

**New: 3. Updated: 2 (both rescored downward, on evidence). Expired or
withdrawn: 5. Duplicates merged: 0.**

**Checkout, per `docs/ops/README.md` contract item 0** — tip **`d838301`**,
`HEAD` equal to `origin/claude/claude-md-docs-cqvhy6`, **no `src/` directory and
no `package.json`.** Both markers absent. **47 tracked files, working tree
clean.**

## This file was committed empty before the research began

**OL-0050 records the 2026-10-16 cash review firing, running, and leaving no
record** — a worker restart erased roughly twenty minutes of work before its
first write. The repair named there is to commit a skeleton first and amend it,
and **the two routines it matters for are this one and the cash review**, both
of which gather for a long time before writing.

**So the skeleton went up as commit `6338360` before the first search ran**, and
this is the amending write. **The durable version belongs in the four
scheduled-task prompts and is still T-69**, one sentence from the owner.

## Still no primary source — and the symptom changed

**Second consecutive scan in which the routine's own design is half-blocked.**
The design is `WebSearch`, then `WebFetch` on the issuing body's page. **Every
`WebFetch` this run failed**, and **not the way it failed last week**:

| Host                | 2026-10-12                    | 2026-10-19                  |
| ------------------- | ----------------------------- | --------------------------- |
| `doas.ga.gov`       | not attempted                 | **`getaddrinfo ENOTFOUND`** |
| `www.rd.usda.gov`   | **403 CONNECT tunnel failed** | **`getaddrinfo ENOTFOUND`** |
| `www.landwatch.com` | not attempted                 | **`getaddrinfo ENOTFOUND`** |

**Diagnosed properly this time rather than reported as an error string.** Three
readings, run at 11:38Z:

- The proxy reports itself healthy — `enabled: true`,
  `bundleCoversEveryHost: true`, and **`recentRelayFailures: []`**, meaning it
  is not even seeing these attempts fail.
- **`getent hosts doas.ga.gov` returns nothing.** The container has **no DNS
  resolution of its own.**
- **`curl https://doas.ga.gov/` still returns
  `CONNECT tunnel failed, response 403`** — exactly last week's symptom.

**So the cause is unchanged and the symptom is an artefact of which tool asks.**
`curl` hands the hostname to the proxy and is refused at the tunnel; `WebFetch`
tries to resolve the name itself first and dies earlier, at DNS. **One block,
two error messages.**

**The lesson worth keeping: an error string is not a diagnosis.** Last week's
brief named "403 CONNECT tunnel failed" as the finding. Had this run done the
same with `ENOTFOUND`, the record would now show two different problems where
there is one. **The check that settles it is the proxy's own status plus a
`curl` against the same host** — two commands, and they should be in this
routine's instructions.

**What follows, applied strictly as the command file requires:** no deadline
below is stated as fact unless a search result quoted a specific published date,
every such date is marked as reported rather than read, and **every candidate's
source-reliability component is scored low for exactly this reason** and says
so.

## Ranked candidates

| #   | Opportunity                                                                                | Type                 | County                       | Value                              | Deadline                     | Score            | Band | Owner effort                  | Next action                                     | Task     |
| --- | ------------------------------------------------------------------------------------------ | -------------------- | ---------------------------- | ---------------------------------- | ---------------------------- | ---------------- | ---- | ----------------------------- | ----------------------------------------------- | -------- |
| 1   | **State and county supplier registration** (Georgia Procurement Registry · ACCGov OpenGov) | Revenue channel      | Statewide · Clarke · Madison | **Unknown; recurring if it lands** | **None**                     | **62**           | n/a  | **~2 hours, once**            | Register; pick NIGP codes                       | **T-77** |
| 2   | **Buy an existing shop on Hwy 72 rather than build on raw land**                           | Real estate strategy | Madison                      | **A dated comparable at $260,000** | None                         | **56**           | n/a  | Ongoing, replaces T-70 effort | Reprice the buy-vs-build decision               | **T-78** |
| 3   | **SecretSOS quarterly small-business grant**                                               | Grant                | n/a                          | **Unknown award**                  | **Reported 2026-12-31**      | **53**           | n/a  | ~1 hour                       | **Verify the issuer before paying the $15 fee** | **T-79** |
| 4   | **USDA B&I guaranteed loan**                                                               | Debt                 | Madison                      | Up to $25M guarantee               | None found                   | **44** ↓ from 50 | n/a  | Lender-led                    | **Resolve the Athens adjacency test**           | **T-56** |
| 5   | **Georgia Rural Zone tax credits**                                                         | Tax credit           | Madison                      | **$2,000 per job per year**        | **Cities apply each August** | **40** ↓ from 48 | n/a  | None available to DD84        | Record as near-dead                             | **T-57** |

**No band is given, for the third time, and no threshold was invented.** The
command file says to score with its method "and the classification bands that
follow from the total" — **and then never states them.** On 2026-10-12 this was
recorded as the bands having died with `src/lib/scoring/score.ts` (deleted
2026-09-25). **The command file has since been rewritten to restate the
components inline, which fixed half the problem and left a dangling promise of
bands that exist nowhere.** Due-diligence tasks went to the top three by raw
score, as last week, with the substitution stated.

**The method's ranking and the command file's ranking rule agree this week**,
which is worth noting because they need not: the file says rank by realistic
revenue and cash preservation first. **The free registration that costs nothing
and might produce revenue outranks the $260,000 strategy on both counts.**

## Candidate records

### 1. State and county supplier registration — score 62/100

**Stated by source** — Read **2026-10-19T11:33Z**, from search summaries of the
issuers' own pages; **none of the pages could be opened.**

- State and local buyers post solicitations on the **Georgia Procurement
  Registry (GPR)**; suppliers search it by **NIGP code**. Team Georgia
  Marketplace is available 24/7 except Mondays 05:00–05:30. Issuer: Georgia
  **DOAS** — `doas.ga.gov/state-purchasing/supplier-registration-bid-notices`,
  registry at `ssl.doas.state.ga.us/gpr`.
- **Athens-Clarke County** runs electronic bidding and vendor management through
  **OpenGov**, and **"registration with OpenGov carries no cost for vendors."**
  ACCGov **"does not register vendors for bidding purposes only"** — a Vendor
  Registration Form is for vendors with a current or pending contract. Issuer:
  `accgov.com/9313/Bids-Proposals`.
- **Madison County** lists each RFP/RFQ on its own bid page when it is ready to
  receive bids. Issuer: `madisoncountyga.us/business/bid-opportunities`.
- **No current vehicle-maintenance or diagnostic solicitation was found** in
  either county or on Team Georgia Marketplace. The two nearest were **Fleet
  Management Services 26-051-LH** (telematics, not maintenance — a
  `georgiabids.net` listing updated 2026-07-29) and a **South Fulton municipal
  fleet maintenance RFP with a reported 2026-01-08 bid date**, long passed and
  the wrong county.

**Assumed by Torque** — (a) **that DD84's capability maps to vehicle-maintenance
and diagnostic NIGP codes.** Confirmed by: reading the code list, which needs
the registry. (b) **That state registration is free.** The free-registration
statement found is ACCGov's OpenGov, not DOAS's; **DOAS's own fee position was
not read.** (c) **That an LLC with three customers and no revenue since
2025-09-12 can register.** Registration and award are different gates and only
the first is being claimed here. (d) **That the empty current pipeline is a
snapshot, not a pattern** — one week of searching is not a base rate.

**Score breakdown** — financial value **11/25** (unknown award size, and the
near-term pipeline searched empty — scored below neutral on partial evidence,
not scored zero); accessibility **17/20** (self-service, no gatekeeper); time
sensitivity **5/15** (no deadline; waiting costs only missed notices); source
reliability **7/15** (**scored low because no issuer page could be opened** —
see the egress section); capital requirement **10/10** (zero); complexity
**7/10** (registering is simple, NIGP selection and bidding are not); risk
**5/5** (none identified).

**Why it ranks here** — It is the only candidate in this scan that **costs
nothing, has no deadline to miss, and could produce recurring revenue** from
capability DD84 already has rather than capability it would have to buy. Against
a business with no recorded revenue in thirteen months and an account that
reported zero available on Friday, **a free registration that opens a notice
stream is worth more than a large loan it cannot service or a tax credit against
payroll it does not have.** What it is not: a sale. **No current solicitation
matches DD84, and registration does not win work.**

**Next action** — **T-77**: register on the GPR and on ACCGov's OpenGov, select
NIGP codes covering vehicle maintenance, diagnostics and calibration, and record
what the registry actually charges. **No packet needed** — registering as a
supplier commits no money and contacts no counterparty. **Submitting a bid is
Class E and G and would need one.**

### 2. Buy an existing shop on Hwy 72 rather than build on raw land — score 56/100

**Stated by source** — Read **2026-10-19T11:44Z**, from four independent listing
aggregators carrying consistent MLS-derived data (Georgia MLS, Coldwell Banker,
Berkshire Hathaway HomeServices, Metro Brokers). **MLS# 10723733. The county
deed and the MLS record itself could not be opened.**

- **6911 Highway 72, Colbert, GA 30628** — **3,072 SF, built 1970, on ~0.76–0.8
  acres** (lot reported as 33,106 SF). Described as **an auto mechanic shop with
  five service bays and a fully encapsulated automotive paint booth.** Property
  type **commercial**. **2024 annual taxes $816.**
- **Price history as reported:** listed **$280,000** late March / early April
  2026 → **$270,000** on 2026-05-01 → **$260,000** on 2026-05-20 → **closed
  2026-06-25 at $260,000** (one source gives 2026-06-26).
- Location described as on the right before Colbert city limits travelling from
  Athens.

**This property is sold. It is not an acquirable opportunity and is not
presented as one.** It is listed because it is a **dated, specific,
independently corroborated comparable** for exactly the thing DD84 is currently
trying to engineer from scratch.

**Assumed by Torque** — (a) **that it is a reasonable comparable for DD84's
intended use.** Five bays and a paint booth is more building than DD84 needs;
the inference is about the price band of improved automotive property on this
road, not about this building's suitability. (b) **That ~12 weeks on market with
two cuts indicates slow absorption.** One property is not a market. (c) **That
buying improved property avoids T-70's septic constraint.** An existing 1970
shop presumably has a working system, **but its permitted capacity was not read
and may itself be limited.** (d) **That DD84's raw-land path costs more than
$260,000 all-in.** **Not established** — the asking price of parcel 0059 038 is
not in this record, and no build estimate exists.

**Score breakdown** — financial value **17/25** (the avoided cost is clearly
material and **cannot be quantified from here**, so not scored higher);
accessibility **8/20** (needs an equivalent property to come to market **and**
financing DD84 does not have); time sensitivity **9/15** (no deadline, but
**T-70 is consuming owner effort right now**, so the decision is live); source
reliability **9/15** (**four consistent secondaries, no primary** — scored low
for that reason, not for inconsistency); capital requirement **3/10**
(**~$260,000 against an account that reported zero available** — scored low on
researched evidence, not neutral for ignorance); complexity **8/10** (buying a
permitted, purpose-built shop is far simpler than land plus septic design plus
well plus build); risk **2/5** (financing is the whole risk and it is
substantial).

**Why it ranks here** — **This is the only thing in the scan that bears directly
on a decision the owner is actively working.** T-70 has DD84 corresponding with
a state environmental-health office about whether raw land at parcel 0059 038
can carry a septic system, with a **380 gpd ceiling** already established.
**Four months ago, on the same highway, a purpose-built five-bay shop with a
paint booth and a septic system that already exists changed hands for $260,000**
— and had to shed $20,000 over seven weeks to do it. **That is a benchmark the
raw-land path has to beat, and nobody has priced it against one.** It ranks
below the free registration only because it requires capital DD84 does not have.

**Next action** — **T-78**: put the two paths side by side — parcel 0059 038
asking price plus septic design plus well plus build, against ~$260,000 for an
improved shop — and **set an alert for the next comparable listing on Hwy 72.**
**No packet needed to compare.** Any offer, enquiry to a broker, or financing
application is **Class C, E and G** and needs one.

### 3. SecretSOS quarterly small-business grant — score 53/100

**Stated by source** — Read **2026-10-19T11:30Z**. **Aggregator only**
(`grantcompass.co`, "Small Business Grants Open Now (October 2026)"). **No
issuer page was identified and none was opened.**

- Open to Georgia businesses; applications run **quarterly** in January–March,
  April–June, July–September and **October–December**, so **the October–December
  window is the one currently open**. **A $15 application fee is charged.**
- For state purposes, Georgia defines a small business as **independently owned
  and operated with fewer than 300 employees or under $30 million in gross
  receipts** — DD84 is comfortably inside either test.

**Assumed by Torque** — (a) **that "SecretSOS" is a real grant programme.**
**Not established.** No issuing organisation, address, or award figure was
found. (b) **That the December window end is 2026-12-31.** Inferred from
"October–December"; **no published date was read.** (c) **That the $15 is the
whole cost.** Unverified.

**Score breakdown** — financial value **13/25** (**scored neutral because the
award size is genuinely unknown**, per the routine's own rule that unknown is
not zero); accessibility **13/20** (open now, no apparent gatekeeper); time
sensitivity **8/15** (roughly ten weeks on a reported window end); source
reliability **3/15** (**one aggregator, no issuer, no primary page** — the
lowest reliability in this scan and the reason it is not ranked higher); capital
requirement **9/10** ($15); complexity **5/10** (**neutral — the application
burden is unresearched**); risk **2/5** (**an upfront fee for an unverifiable
grant programme has the shape of an advance-fee scam**, and DD84's mailbox is
currently receiving loan-fraud solicitations — T-42, T-67).

**Why it ranks here** — It is the only candidate with an open window and a
trivial cost, which is why it is listed at all. **It ranks third rather than
first because the thing that is cheap about it is also the thing that is
suspicious about it**: a $15 fee is small enough to pay without thinking and is
exactly the hook an advance-fee scheme uses. **The score is carried almost
entirely by "unknown" components**, and a 53 built from neutrals is not the same
as a 53 built from facts.

**Next action** — **T-79**: **identify the issuing organisation before paying
anything.** If no issuer with a verifiable address and published award history
can be found, **the correct outcome is a no-action record, not an application.**
Paying the fee is a financial action — **Class E, and it needs a packet, for
$15**, because the question is not the amount.

### 4. USDA Business & Industry guaranteed loan — score 44/100, down from 50

**Stated by source** — Read **2026-10-19T11:50Z**. **Lender and consultant
secondaries only; `www.rd.usda.gov` unreachable.**

- **Rural test:** the programme serves areas with populations of **50,000 or
  fewer**, and the fuller definition is **"any place that is not a city or town
  of more than 50,000 people and not in the urbanized area next to such a city
  or town."** The governing regulation is **7 CFR Part 5001**, reported
  effective 2020-10-01.
- **Guarantee:** maximum **$25M**, up to **$40M** for certain projects; **up to
  85% for loans of $5 million and under in FY 2026**, scaling down above that.
- **Eligible borrowers** include for-profit businesses, non-profits,
  cooperatives, tribes and public bodies.
- **FY2027 authority: not found.** No appropriation or programme level for
  FY2027 appeared in any result.

**Assumed by Torque** — (a) **that Colbert's own population is far below
50,000.** Safe, and not the binding test. (b) **That the "urbanized area next to
such a city or town" clause is the live risk.** **Athens-Clarke County has
roughly 130,000 people and Colbert sits about ten miles from it.** Whether
Colbert falls inside Athens's urbanized area as the regulation defines it
**determines eligibility outright**, and it cannot be answered without 7 CFR
Part 5001 or a USDA map — neither reachable. (c) That no equity-injection
requirement was researched.

**Score breakdown** — financial value **18/25**; accessibility **7/20** (needs a
participating lender willing to underwrite a business with no recorded revenue
in thirteen months); time sensitivity **5/15** (no deadline found, **FY2027
authority unknown**); source reliability **5/15** (**lender marketing pages
only**); capital requirement **5/10** (**neutral — equity injection
unresearched**); complexity **3/10**; risk **1/5** (**the adjacency test may
disqualify the site outright**).

**Why it fell six points** — **Not because anything changed at USDA.** Last
week's entry scored the programme; **this week's names a specific eligibility
test that may exclude the specific site**, which is a different and worse fact.
**The demotion is the research working**, and it is recorded rather than
smoothed over.

**Next action** — **T-56**, due today and **advanced rather than closed.** The
two open questions are now precise: **does Colbert fall within Athens's
urbanized area under 7 CFR Part 5001**, and **what is the FY2027 authority.**
Neither is answerable while egress is blocked; **both are one phone call to
Georgia USDA Rural Development**, which is **Class C** and needs a packet.

### 5. Georgia Rural Zone tax credits — score 40/100, down from 48

**Stated by source** — Read **2026-10-19T11:50Z**, from a **DCA press release**
(2025-12-05) and **NCSHA**, consistent with each other. **`dca.georgia.gov`
unreachable.**

- **Designations are granted to cities, not counties.** The cohort effective
  **2026-01-01**, running to **2030-12-31**, is **Alma, Barnesville,
  Blairsville, Elberton, Folkston, Grantville and Summerville**. **Colbert is
  not among them.**
- **Applications are due each August; designees are announced each October.**
- Incentives: a **job tax credit worth $2,000 per year per new
  full-time-equivalent job for up to five years**, plus investment and
  rehabilitation credits.

**Assumed by Torque** — (a) **that Colbert is not currently designated.** The
seven-city list is one cohort, not the full register; **the complete current
list is on the DCA documents page, which could not be opened.** (b) **That an
October 2026 announcement may be imminent** — consistent with the stated cycle,
not read. (c) **That DD84 cannot apply.** **Cities apply, not businesses**, so
DD84's only route is a designation it does not control.

**Why it fell eight points, and the reason is the useful part** — **the
mechanism, not the availability.** The headline incentive is a **job tax
credit**. **DD84 has no employees and no payroll**, so even a designation
tomorrow would yield **close to nothing in the near term** — the credits attach
to hiring and to qualifying investment, both of which require capital the
business does not have. **Last week's 48 scored the programme's generosity. This
week's 40 scores its generosity to DD84**, which is the only score that matters
here.

**Score breakdown** — financial value **6/25** (**a payroll-based credit against
no payroll**); accessibility **3/20** (requires the city to be designated, and
it is not on the evidence); time sensitivity **7/15** (an announcement window
may be live, but **DD84 is not the applicant**); source reliability **7/15**
(two consistent secondaries, **no primary**); capital requirement **10/10**
(none); complexity **4/10**; risk **3/5**.

**Next action** — **T-57**, due today and **advanced rather than closed.** The
finding is recorded: **cities apply, Colbert is not in the current cohort, and
the credit is payroll-based.** Confirming the complete designation list needs
the DCA page. **Recommended: let this one sit at the bottom of the register
rather than spending more agent capacity on it.**

## Changed since last scan

| Item                                               | 2026-10-12                  | 2026-10-19                                                       | Source of the change                                                                                                           |
| -------------------------------------------------- | --------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **USDA B&I**                                       | 50/100                      | **44/100**                                                       | A named eligibility risk: the **"urbanized area next to"** clause of 7 CFR Part 5001, against Athens ~10 miles away            |
| **Georgia Rural Zones**                            | 48/100                      | **40/100**                                                       | The credit is **payroll-based** and DD84 has no payroll; designations go to **cities**, and Colbert is not in the 2026 cohort  |
| **Egress symptom**                                 | `403 CONNECT tunnel failed` | **`getaddrinfo ENOTFOUND`** via WebFetch, **403 still via curl** | **Same block, different tool path.** One cause, two error strings                                                              |
| **Georgia SBDC advisory** (64/100, last week's #1) | Live                        | **Unchanged and not re-researched**                              | No new information found; **it remains the highest-scoring candidate on this record** and **A-15 still gates contacting them** |
| **TCSG High Demand Apprenticeship** (41/100)       | Live                        | **Likely closed** — see Expired                                  | The **Industry-Driven Skills Training Fund** window closed **2026-04-09**                                                      |

## Expired or withdrawn — kept, not deleted

| Item                                          | What happened                                                                                   | Reported source date |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------- |
| **USDA Rural Business Development Grants**    | **Closed 2026-06-15 or 2026-06-30** depending on application type                               | 2026                 |
| **TCSG Industry-Driven Skills Training Fund** | Employer window **closed 2026-04-09**                                                           | 2026                 |
| **Go Global Georgia**                         | **2026-09-01 deadline passed**; funds can run out before the deadline                           | 2026                 |
| **Invest Atlanta improvement grant**          | Ran **January–May 2026**; **Atlanta only**, never DD84's county                                 | 2026                 |
| **6911 Highway 72, Colbert**                  | **Sold 2026-06-25 at $260,000.** Retained as a comparable, **not as an acquirable opportunity** | 2026-06-25           |

## Conflicts and doubts

1. **No primary source was opened for any candidate in this scan.** Every
   score's source-reliability component is low for that reason and says so.
   **Nothing here should be acted on without opening the issuing body's page.**
2. **The scoring bands still do not exist**, and the command file now
   **promises** bands "that follow from the total" without stating them. **Worse
   than last week's defect, not better**: a dangling reference in a live
   instruction file reads like an oversight on the reader's part. → **T-59**,
   and it belongs with T-69's prompt edit.
3. **TCSG Quick Start** is "free of charge for clients opening or expanding
   **manufacturing operations, distribution centers, headquarters operations and
   customer contact centers**." **DD84 is a service shop and almost certainly
   out of scope** — stated as a doubt because the statute's "certain existing
   industries which may qualify under rules established by the State Board"
   leaves a door this scan could not open.
4. **The Georgia Retraining Tax Credit** appeared in results and is **not listed
   as a candidate**: it credits training on new technology against **payroll**,
   and DD84 has none. Recorded so the next scan does not re-raise it.
5. **DOAS's own registration fee position was not read.** The "no cost"
   statement found belongs to **ACCGov's OpenGov**, not to the state registry.
   **T-77 must establish what the GPR actually charges** before the brief's
   "costs nothing" framing is relied on.
6. **"SecretSOS" could not be tied to any issuing organisation.** Treated as a
   candidate with the lowest reliability score in the scan and a
   verification-first next action.

## Not checked this run

| Source class                                                 | Reason                                                                                                                                                                                         |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Every issuing body's own page**                            | **Egress blocked** — see the diagnosis above. **T-59**, now in its sixth reported run, and today it also cost **T-60** (the platform deadline that expired today could not be verified either) |
| **The Georgia Procurement Registry itself**                  | Unreachable. **NIGP codes, open solicitations and any fee are therefore unread** — the single biggest gap in candidate #1                                                                      |
| **County surplus-property and tax-sale official pages**      | Unreachable. The only tax-sale reference found was a **2026-08-04 Madison County sale**, already passed, on a third-party page that advises contacting the Tax Commissioner directly           |
| **GDOT vendor opportunities**                                | Not searched this run. **DD84 already has a live GDOT access-review thread** (T-38), so this is a plausible adjacency nobody has looked at                                                     |
| **Google Drive owner criteria**                              | Not read. **DD84's acquisition criteria, financing assumptions and prior due diligence remain unconfirmed**, so every property score rests on inference about what the owner wants             |
| **Gmail**                                                    | **Covered by the 10:21Z intake** — 109 threads, no opportunity mail in the window                                                                                                              |
| **The Georgia Opportunity Ledger's database and repository** | **Deliberately untouched.** Different business, flat prohibition. No Supabase tool was called in this run                                                                                      |

---

**Class A held.** **No source, agency, broker, seller or partner was
contacted.** No application, expression of interest or offer was submitted. **No
capital committed, nothing signed, no terms accepted.** **No `mcp__Supabase__*`
tool was called** and nothing belonging to the Georgia Opportunity Ledger was
read or written. `docs/growth/` untouched — **candidate #1 is arguably a Rev
observation as well as an operational one, and it was not written there.**

**No assumption is presented as a source fact.** Every candidate carries both
blocks and they do not merge. **No deadline is stated that was not quoted by a
result, and every one is marked as reported rather than read.** **Three
components were scored neutral for lack of information and each says so.** **Two
candidates were scored down on new evidence and the reasons are recorded**
rather than the scores quietly adjusted.
