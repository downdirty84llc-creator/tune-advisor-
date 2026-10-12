# DD84 Georgia opportunity scan — 2026-10-12

Run at 2026-10-12T11:27–11:52Z. **Since: no prior scan — this is the first one
this platform has run.** `docs/ops/briefs/` holds no earlier
`*-opportunity-scan.md`.

Sources searched: **WebSearch** across Georgia state grant programs, DCA Rural
Zones, SBA 504, USDA Rural Development (B&I and REAP), TCSG apprenticeship
funding, and DD84's own inbox. Not searched: **county and municipal postings,
surplus-property and tax-sale listings, Georgia procurement RFPs** — see Not
checked. **Ledger database checked: no, deliberately** — see the scope note.

New: **6**. Updated: 0. Expired or withdrawn: **7** (recorded, not discarded).
Duplicates merged: 0.

> ## Read this before any score: no primary source could be opened
>
> **This routine's design is `WebSearch`, then `WebFetch` on the primary source.
> The second half is blocked.** Every issuing body returned **HTTP 403 CONNECT
> tunnel failed** through this environment's egress proxy:
>
> | Host              | Result  |
> | ----------------- | ------- |
> | `dca.georgia.gov` | **403** |
> | `www.sba.gov`     | **403** |
> | `grants.gov`      | **403** |
> | `www.rd.usda.gov` | **403** |
>
> The proxy itself reports healthy — `enabled: true`, no relay failures,
> `bundleCoversEveryHost: true` — so this is the **environment's network
> policy**, not a transient fault. **The owner can change it:** Network access
> in the environment's settings — the cloud environment menu in the session's
> title bar, then Edit — either a broader access level, or those hosts added
> under Allowed domains with "Allow package managers" left ticked.
> <https://code.claude.com/docs/en/cloud-environments#network-access>
>
> **What follows from the command file's own rules, applied strictly:**
>
> - _"Never state a deadline you have not seen on the issuing body's own page."_
>   → **No deadline below is stated as fact. Every one is marked as reported by
>   a secondary source, unverified.**
> - _"If a primary source could not be fetched, the candidate is still listed
>   but its source reliability component is scored low for that reason."_ →
>   **Every candidate's source reliability is 3–5 out of 15**, and the reason is
>   the block, not the issuer's quality.
>
> **An empty scan would have been a finding about the scan.** So is this one:
> six real candidates were found, and **not one could be validated.** → **T-59**

### A second gap: the scoring bands do not exist on this branch

The command file says to score with the method in
**`src/lib/scoring/score.ts`**. **That file was deleted from this branch on
2026-09-25** (T-29, OL-0016) when the Ledger source tree was removed.

The **components and maxima survive** because the command file restates them
inline, and they sum correctly: financial value 25 · accessibility 20 · time
sensitivity 15 · source reliability 15 · capital requirement 10 · complexity 10
· risk 5 = **100**. **That is the method used here, and it is named as the
command file's own restatement rather than as the code.**

**The classification bands do not survive.** They were in `score.ts` and are
nowhere in the command file. **So no candidate below carries a band**, the
"worth investigating" gate could not be applied, and due-diligence tasks were
created for the top three by raw score with that substitution stated. **No
threshold was invented.** → also **T-59**

### Scope note — this is DD84's own scan, and the command file is stale about that

The command file opens _"This repository **is** the Georgia Opportunity Ledger"_
and directs a Supabase duplicate-check against Ledger data. **Both are out of
date.** `CLAUDE.md` §0 records that the Ledger is a separate business in
`downdirty84llc-creator/georgia-opportunity-ledger`, and today's firing
instruction is explicit: this scan is DD84 looking for its own opportunities,
and nothing found here becomes a Ledger record.

**So the Ledger database was deliberately not queried.** A duplicate check
against another company's editorial records would be meaningless for DD84's own
opportunities, and reaching into that business's production database is not
something this routine should do. **Deduplication was against `TASK-REGISTER.md`
and prior briefs only** — and there are no prior scans, so nothing could
duplicate.

---

## Ranked candidates

| #   | Opportunity                         | Type               | County / scope    | Value                                                                        | Deadline (all **unverified**)               | Score      | Owner effort                      | Next action                    | Task     |
| --- | ----------------------------------- | ------------------ | ----------------- | ---------------------------------------------------------------------------- | ------------------------------------------- | ---------- | --------------------------------- | ------------------------------ | -------- |
| 1   | **Georgia SBDC advisory**           | Advisory           | Statewide         | No cash — free advice                                                        | **None.** Adviser already offered           | **64/100** | ~1 hr + travel                    | Book the slot                  | **T-39** |
| 2   | **USDA B&I guaranteed loan**        | Debt guarantee     | Rural GA          | Reported 85% guarantee on loans <$5M                                         | No fixed window reported                    | **50/100** | Weeks, via a lender               | Confirm FY27 authority         | **T-56** |
| 3   | **Georgia Rural Zone credits**      | State tax credit   | Designated cities | 25% of purchase, cap **$125,000**; $2,000/job/yr ×5; 30% rehab, cap $150,000 | Designation round date not found            | **48/100** | Depends on a city                 | Check if Colbert is designated | **T-57** |
| 4   | **SBA 504 loan**                    | Debt               | National          | Up to ~$15M; manufacturer debenture cap reported $5.5M                       | Continuously available                      | **47/100** | Weeks, bank + CDC                 | **Send the GACDC draft**       | **T-58** |
| 5   | **TCSG High Demand Apprenticeship** | Grant              | Statewide         | Up to **$50,000** per employer                                               | Current round not found                     | **41/100** | Significant — needs an apprentice | Watch only                     | —        |
| 6   | **USDA REAP**                       | Grant / cost-share | Rural GA          | Up to 25% of eligible project cost                                           | **Reported Oct 31** — from an FY22 document | **34/100** | Moderate                          | Watch only                     | —        |

**Scores are comparable to each other and to nothing else.** Every one carries a
3–5/15 source-reliability component purely because of the egress block. **A
re-run with network access would move all six upward**, and the ranking between
them could change.

---

## Candidate records

### 1. Georgia SBDC advisory — score 64/100

**Stated by source** — University of Georgia Small Business Development Center,
via **direct email to DD84's own inbox** from a named adviser,
2026-10-06T19:56Z: a meeting had been scheduled for that day at 3:30 pm, was
missed, and a Calendly rescheduling link was offered. **Read from Gmail at
2026-10-12T10:30Z** (thread recorded in the 2026-10-08 intake). No cost is
stated because the SBDC is state and federally funded advisory service.

**Assumed by Torque** — _(assumption)_ that SBDC advice would be useful on the
shop financing specifically; the adviser's own email does not say what they
would cover. _(assumption)_ that the service remains free; not re-confirmed this
run. **What would confirm both:** the booked session itself.

**Score breakdown** — financial value **6/25** (no cash, indirect benefit only)
· accessibility **18/20** (free, offered, and already extended once after a
no-show) · time sensitivity **6/15** (no deadline; goodwill does decay) · source
reliability **10/15** (**the only candidate sourced from a named human writing
directly to DD84, not from a web page** — scored below full only because the
service's current terms were not re-read) · capital requirement **10/10** (zero)
· complexity **9/10** (book a slot) · risk **5/5** (none).

**Why it ranks first** — it ranks first on a technicality that happens to be the
real point: **it is the only item in this scan that is confirmed, free, already
offered, and blocked by nothing but a calendar booking.** Every funding
candidate below it is larger and less certain. It is also the natural front door
to the rest — an SBDC adviser is exactly who would know which of candidates 2 to
6 Georgia actually operates this year, which is the knowledge this scan could
not obtain.

**Next action** — book the slot. **Already tracked as T-39 and covered by the
pending A-15**, whose draft is written and unsent. **No new task** — a second
would be a duplicate.

### 2. USDA Business & Industry guaranteed loan — score 50/100

**Stated by source** — USDA Rural Development's own program page
(`rd.usda.gov/programs-services/business-programs/business-and-industry-guaranteed-loan-5`)
**appeared in search results but could not be fetched — 403.** Program purpose
as quoted in the search summary: to improve the economic health of rural
communities by increasing access to business capital through loan guarantees,
enabling commercial lenders to provide affordable financing for rural
businesses. **Secondary reporting, single-source:** the guarantee was raised to
**85% for qualifying loans under $5 million for FY2026**; the **FY2027 budget
request eliminates appropriated authority** for the programme against $1.43
billion enacted the prior year, and a House appropriations bill passed June 4
restores it at **$2.0 billion**.

**Assumed by Torque** — _(assumption)_ that the Colbert site qualifies as rural;
Madison County is rural in ordinary usage but **USDA has a specific population
test that was not read.** _(assumption)_ that DD84's intended use — an
owner-occupied tuning and dyno shop — is an eligible business purpose.
_(assumption)_ that a local commercial lender would originate for a business
with DD84's revenue history. **What would confirm:** the eligibility page, and
one conversation with a Georgia USDA business programs specialist.

**Score breakdown** — financial value **18/25** · accessibility **9/20**
(geographic fit looks good; a lender must still originate) · time sensitivity
**8/15** (**no published window, but the programme's own authority is contested
for FY27** — that is a reason to move early, and it is the only candidate whose
urgency comes from policy risk rather than a deadline) · source reliability
**5/15** (**403 — issuer page not opened**) · capital requirement **5/10**
(**NEUTRAL — the borrower equity requirement was not researched.** Unknown, not
assumed bad) · complexity **3/10** · risk **2/5** (appropriation risk is live
and named above).

**Why it ranks here** — it is the best-fitting debt instrument for a rural
owner-occupied shop and it ranks above SBA 504 on one factor: **the 85%
guarantee reportedly makes a lender's decision easier for exactly the profile
DD84 has, which is thin revenue history.** It ranks below the SBDC session
because every number in it is second-hand.

**Next action** — **T-56.** Confirm FY2027 authority and the rural eligibility
test before any lender conversation. **Contacting USDA is Class C and needs a
packet** — not raised, because the question should go to the SBDC session first
at no cost.

### 3. Georgia Rural Zone tax credits — score 48/100

**Stated by source** — Georgia DCA, via its own documents surfaced in search
(`dca.georgia.gov`, **403, not fetched**). Programme created 2017. Three state
income tax credits: **a job tax credit of $2,000 per year for each new
full-time-equivalent job for up to five years; an investment credit of 25% of
the purchase price of a property within the designated zone, not to exceed
$125,000; and a rehabilitation credit of 30% of qualified rehabilitation costs,
not to exceed $150,000.** Eligibility for a **zone**: maximum population 15,000,
a concentration of historic commercial structures at least 50 years old, and
demonstrated distress by poverty rate, downtown vacancy or blight. **The
applicant is the local government, not the business** — the package requires a
cover letter signed by an authorised local government agent, a feasibility study
or market analysis, a master or strategic plan, and a boundary map with parcels
marked by vacancy and blight status. Most recent designation round announced
**2025-12-05**: Alma, Barnesville, Blairsville, Elberton, Folkston, Grantville
and Summerville, designated from 2026-01-01 through 2030-12-31.

**Crucially: neither Colbert nor Jefferson, nor Madison nor Jackson County,
appeared in any designation list found** — including a ~40-community 2023
overview. **That is an absence in search results, not a confirmed negative.**

**Assumed by Torque** — _(assumption)_ that Colbert's population is under
15,000; it is a very small town, but **the figure was not read from a source
this run.** _(assumption)_ that a tuning and dyno shop would count as a
qualifying business activity in a historic downtown zone — **genuinely
uncertain**, since the programme targets downtown revitalisation and a dyno shop
on a state route is not obviously a downtown use. **What would confirm:** the
DCA designations PDF, or one email to `ruralzones@dca.ga.gov`.

**Score breakdown** — financial value **24/25** (**25% of a purchase price,
capped at $125,000, is transformative against DD84's scale** — all-time revenue
is $3,507.86) · accessibility **3/20** (**DD84 cannot apply. A city must be
designated, and neither candidate city appears to be**) · time sensitivity
**5/15** (next round's date not found; designations take effect the following 1
January) · source reliability **5/15** (**403**) · capital requirement **8/10**
(a credit against a purchase DD84 would make anyway — no additional capital) ·
complexity **2/10** (**requires a municipality to run a full designation
application** — outside DD84's control entirely) · risk **1/5**.

**Why risk scores 1/5, which is the thing to notice** — these are
**non-refundable state income tax credits.** A credit offsets Georgia income tax
owed. **DD84 has collected $3,507.86 in its lifetime and nothing since
2025-09-12**, so its Georgia income tax liability is almost certainly too small
to absorb a $125,000 credit in any usable timeframe. **The headline number is
real and mostly unusable at DD84's current size**, and that is why a candidate
scoring 24/25 on value sits third.

**Next action** — **T-57.** One cheap question: is Colbert in a designated Rural
Zone? If no, this is dormant until the city applies. If yes, the credit changes
the shop purchase arithmetic and belongs in the financing conversation.

### 4. SBA 504 loan — score 47/100

**Stated by source** — `sba.gov` **403, not fetched.** All figures below are
**lender and marketing pages**, which the search summary itself flagged as not
authoritative: a **10% borrower equity contribution** standard for offices,
warehouses and retail storefronts; **15–20% for special-purpose buildings and
newer businesses**, with an additional 5–10% for businesses under two years old;
a typical **50% bank / 40% CDC / 10% borrower** split; **at least 51%
owner-occupancy** required for an existing building; up to **$15 million** with
terms to 25 years; a manufacturer debenture cap reported at **$5.5 million for
loans approved 2025-10-01 to 2026-09-30**; business eligibility of **net worth
below $20 million and average after-tax net income below $5 million**.

**Assumed by Torque** — _(assumption)_ that DD84's planned 36 × 50
owner-occupied shop clears the 51% occupancy test; the plan is wholly
owner-occupied, so this looks comfortable, **but the test was not read on SBA's
page.** _(assumption)_ that a dyno shop is **not** classified "special purpose"
— **this one matters a great deal and is genuinely unknown.** A dyno is a fixed,
purpose-built installation; if an underwriter calls the building
special-purpose, the equity requirement moves from 10% to 15–20%. **What would
confirm:** the CDC. **Georgia CDC is already in DD84's mailbox** — an unsent
draft to them has been sitting for 13 days (T-42).

**Score breakdown** — financial value **20/25** · accessibility **10/20** (the
structural fit is good; thin revenue history is the obstacle) · time sensitivity
**4/15** (continuously available — **lowest urgency in the scan**) · source
reliability **5/15** (**403; lender pages only**) · capital requirement **3/10**
(**10% at best, plausibly 15–20%** — this is researched, not neutral, and it is
a genuine constraint) · complexity **3/10** (bank, CDC, SBA, appraisal,
occupancy test) · risk **2/5** (long-term debt with a personal guarantee against
a business with no verifiable current revenue).

**Why it ranks here** — it is the most conventional path to the shop and the
most demanding. **It ranks below the Rural Zone credit despite being actually
available to DD84**, because its capital and risk components are real costs
where the Rural Zone's are not. **The practical point is that it is already in
motion and stalled on one unsent email.**

**Next action** — **T-58.** **Send the Georgia CDC draft** that has been written
and unsent since 2026-09-29, and ask the two questions above: special-purpose
classification, and equity for a business of DD84's age. **Sending is Class C**
and is covered by the existing T-42 decision rather than a new packet.

### 5. TCSG High Demand Apprenticeship Program — score 41/100

**Stated by source** — Technical College System of Georgia (`tcsg.edu`, **403,
not fetched**). Formerly HDCI. Provides **up to $50,000 in funding awards to
selected employers for registered apprenticeships**, and **automotive is one of
its listed focus areas.** Search surfaced only **2022 and 2024** application
windows; **no current round was found.** A separate, related programme — the
**Industry-Driven Skills Training Fund**, a $5 million US Department of Labor
award — **closed to employers on 2026-04-09** and targets advanced
manufacturing, construction, and energy rather than automotive service.

**Assumed by Torque** — _(assumption)_ that a sole operator with no employees
cannot register an apprenticeship and therefore cannot apply today. **That is an
inference from the programme being employer-and-apprentice based**, not a quoted
rule. **What would confirm:** the HDAP page, or the grant manager named in a
2024 release.

**Score breakdown** — financial value **12/25** · accessibility **6/20**
(**automotive is an explicit focus area — the strongest industry fit in this
scan — but DD84 has no staff to apprentice**) · time sensitivity **5/15** (no
current round found) · source reliability **5/15** (**403**) · capital
requirement **5/10** (**NEUTRAL — reimbursement structure not researched**) ·
complexity **4/10** · risk **4/5** (a grant, not debt).

**Why it ranks here, and why it has no task** — the industry fit is better than
anything else in this scan, and **it is premature by at least one hire.** It
belongs on a watch list for the moment DD84 has a first employee, which is a
scale question the register does not yet contain. **No task created**, because a
task with no possible next action is clutter.

### 6. USDA REAP — score 34/100

**Stated by source** — a **USDA Rural Development Georgia summary hosted by the
Georgia Municipal Association** reports deadlines of **October 31 or March 31 of
each year**, with grants covering **up to 25% of eligible project costs**.
**That document uses FY22 figures.** `rd.usda.gov` **403, not fetched.**

**Assumed by Torque** — _(assumption)_ that the October 31 date still applies
in 2026. **If it does, it is 19 days away** — and **this is the single most
time-sensitive item in the scan resting on the single weakest source.**
_(assumption)_ that DD84 is ineligible today because **REAP funds energy
projects at an existing agricultural or rural small business site and DD84 does
not yet own the building.** **What would confirm:** the current REAP notice.

**Score breakdown** — financial value **8/25** · accessibility **3/20** (**no
building to improve**) · time sensitivity **11/15** (**only if the reported date
holds**) · source reliability **3/15** (**lowest in the scan — a four-year-old
secondary document, and the primary was 403**) · capital requirement **3/10**
(cost-share: DD84 would fund 75%) · complexity **3/10** · risk **3/5** (no
financial risk; real risk of wasted effort on an ineligible application).

**Why it ranks last** — it is the clearest illustration of why the egress block
matters. **A possibly-imminent deadline, from a source too old to rely on, for a
programme DD84 probably cannot use yet.** Acting on it would be guessing;
ignoring it without saying so would be worse. **No task** — but if network
access is restored before 2026-10-31, check it first.

---

## Expired or withdrawn — kept, not deleted

Seven programmes were found and ruled out. **Recorded so the next scan does not
rediscover them**, and because several recur annually.

| Programme                                             | Status found                                                        | Note                                                                                                                                                                                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hurricane Helene Block Grant (GA Dept of Agriculture) | **Closed** — sources give 2026-04-27 and 2026-05-11 after extension | Farmers and ranchers; DD84 ineligible on sector regardless                                                                                                                                                           |
| Invest Atlanta Small Business Improvement Grant       | **Closed** — ran Jan–May 2026                                       | Up to $50,000 with 10% match. **Atlanta only — DD84 is in Jackson County**                                                                                                                                           |
| Go Global Georgia                                     | **Closed** — deadline 2026-09-01                                    | Export-focused                                                                                                                                                                                                       |
| USDA Rural Business Development Grants                | **Closed** — 2026-06-15 and 06-30                                   | **Recurs. Worth a calendar note for spring 2027**                                                                                                                                                                    |
| Decatur Commercial Grants Program                     | **Closed** — window 2026-08-10 to 08-30                             | City of Decatur only. Runs twice a year                                                                                                                                                                              |
| Industry-Driven Skills Training Fund (TCSG)           | **Closed** — employer applications 2026-04-09                       | Advanced manufacturing, construction, energy — not automotive service                                                                                                                                                |
| FedEx Entrepreneur Fund                               | **Unconfirmed for 2026.** Last known window closed 2025-11-21       | **DD84 appears to meet the published criteria — under 25 employees, under $1M revenue.** Historically opens Oct–Nov, so it may be open now and this scan could not confirm it. **The best watch item in this table** |

**The pattern across all seven: Georgia's 2026 small-business grant calendar has
largely closed.** Two sources independently said so. **For a business seeking
building finance, that points at debt and tax credits rather than grants**,
which is where the top four candidates sit.

## Changed since last scan

**Not applicable — there is no prior scan.** This is the baseline. The next run
should compare against it.

## Conflicts and doubts

1. **Two DCA application documents carry different year labels** — one titled
   "Application for 2026 Rural Zone Designation", another "Application for 2027
   Rural Zone Designation", with the 2027 version warning it is subject to
   change pending the 2026 legislative session. **Which is current is
   unresolved**, and the primary source could not be opened to settle it.
2. **Hurricane Helene grant deadline given as both 2026-04-27 and 2026-05-11.**
   Immaterial — both are past — but it is a worked example of why aggregators
   are not sources.
3. **USDA B&I authority: eliminated in the FY27 request, restored at $2.0B in a
   House bill passed June 4.** A single secondary source for both halves. **The
   programme's future is genuinely uncertain and that is a scoring input, not a
   footnote.**
4. **Every deadline in this document is unverified.** Not one was read on an
   issuing body's page.

## Not checked this run

| Source class                                     | Reason                                                                                                                                                                     |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Every primary issuing body**                   | **HTTP 403 through the egress proxy.** `dca.georgia.gov`, `www.sba.gov`, `grants.gov`, `www.rd.usda.gov` all refused. → **T-59**                                           |
| **County and municipal postings**                | Jackson, Madison and Clarke county development authority pages — would need fetch, which is blocked                                                                        |
| **Surplus property, tax sales, sheriff's sales** | A listed source class in the command file. **Not searched** — these need listing-level fetch to be worth anything, and a scan that cannot open a listing cannot assess one |
| **Georgia procurement / RFPs**                   | Not searched. DD84 has no past-performance record, so public contracting is a poor early fit — **that is a judgement, not a finding**                                      |
| **Ledger Supabase database**                     | **Deliberately not queried.** Different business, different repository; see the scope note                                                                                 |
| **Google Drive**                                 | Owner criteria and financing assumptions not read. **So "eligibility against DD84's actual profile" was checked against `ventures.md` and the register only**              |
| **Gmail**                                        | Not re-searched for opportunity mail — this morning's intake covered the mailbox at 10:21–10:38Z. The SBDC item above comes from that read                                 |

---

**Class A held.** Nobody was contacted, nothing was applied for, no capital was
committed, no agency or broker was approached. **Nothing was written to any
Ledger database** and no record was moved through any editorial workflow.
`docs/growth/` was not touched. **No deadline, award amount or eligibility rule
was invented**, and every figure above names its source and whether that source
is the issuer or a secondary report.
