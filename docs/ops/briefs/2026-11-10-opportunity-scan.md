# DD84 Georgia opportunity scan — 2026-11-10

Run from **2026-11-10T10:40:22Z**, read from the clock. **End time is this
file's commit, per T-116** — **only the start was read at the time of writing
this skeleton, and a span whose second half was not read is not printed.**

> ## ⚠ THIS SCAN FIRED ON 2026-11-09 AND IS RUNNING A DAY LATE
>
> **The weekly Georgia opportunity scan fired 2026-11-09T11:26:06Z and did not
> run.** Its notification was read in the same turn as the Monday daily brief's,
> both having waited about four and a half hours through a sequence of worker
> restarts. **The daily brief was run; the turn ended before the scan was.**
>
> **Nothing was lost except the run itself.** **No skeleton was written on
> 2026-11-09**, so unlike the 2026-11-06 cash review there is no orphaned file —
> there is simply no 2026-11-09 scan, and `docs/ops/briefs/` shows scans dated
> 2026-10-19, 2026-10-26 and 2026-11-02 and then a gap.
>
> **It is dated 2026-11-10, the day the work happened, and records that it fired
> on 2026-11-09.** **Backdating the heading to a day the work did not happen on
> is the error the 2026-11-06 cash-review annotation was written to avoid**, and
> the two cases are deliberately handled the same way.
>
> **It is being run rather than written off because the next scheduled scan is
> 2026-11-16**, so skipping would leave a fortnight uncovered, and **the
> routine's own premise is that an empty scan is a finding about the scan rather
> than about Georgia.**
>
> **"Since" is therefore 2026-11-02 — eight days, not seven.**

> **SKELETON COMMITTED BEFORE RESEARCH** — OL-0050's repair, **twenty-sixth
> application.** The intake committed minutes ago, but **the test is the size of
> what a restart would destroy, not the age of the last commit**: this routine
> runs an instrument test, a deduplication pass over four prior scans and a
> round of live searches.

**Checkout, contract item 0:** tip `70230a3`, `HEAD` equal to origin, no `src/`,
no `package.json`, clean. **84 tracked files, not the 28 the prompt expects** —
**thirty-second run reporting it, T-85 step 3.** The count rose by one because
this run's own intake brief is now tracked.

**Boundaries this routine holds, stated before anything is gathered.** **No
`mcp__Supabase__*` call** — the only Supabase project on this account belongs to
the Georgia Opportunity Ledger, a different business, and this is a flat
prohibition rather than a read-only allowance. **Nothing found here becomes a
Ledger record.** **Nothing is written into `docs/growth/`.** **No source,
agency, broker or seller is contacted; no application is submitted; no capital
is committed.** **Deduplication is against `docs/ops/TASK-REGISTER.md` and the
four prior scan briefs in this repository, which is the whole universe this
routine knows.**

**Two scoring corrections carried in, both of which bound what follows.**

| Carried in                                                                             | Effect on this run                                                                                                                  |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **The classification bands were recovered 2026-11-09** and are now in the command file | **Entries are banded.** The four scans that refused to invent a threshold were right to refuse                                      |
| **Time sensitivity: higher means more urgent** (corrected 2026-11-02, T-125)           | **A rolling programme scores 3 of 15, not high.** **Scores from 2026-11-02 and earlier are not comparable with these on this axis** |

**Sources searched:** `WebSearch` (six extended queries), **Gmail**
(opportunity, grant, procurement and chamber mail since 2026-11-02), **the
operating record** (`TASK-REGISTER.md` and all four prior scan briefs — the
whole of this routine's duplicate check), and **the session's own network
configuration**, read from `get_environment`.

**Not searched:** **every primary source.** See §0. **Google Drive** was not
read, so **owner criteria and financing assumptions could not be confirmed** and
nothing below is checked against them.

**New: 2** (one scored, one withdrawn before scoring). **Updated: 3.** **Expired
or withdrawn: 2.** **Duplicates merged: 0.**

## 0. Instrument test

**T-98 re-tested with a control host and a second instrument. It still fails,
and this run has the cause from the authoritative source rather than by
inference.**

| Call                                                            | Result                                                                                                                |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `WebFetch https://example.com` — **control**                    | **`getaddrinfo ENOTFOUND example.com`**                                                                               |
| `WebFetch https://doas.ga.gov/state-purchasing`                 | **`getaddrinfo ENOTFOUND doas.ga.gov`**                                                                               |
| `WebFetch` DCA Rural Zones page                                 | **`getaddrinfo ENOTFOUND www.dca.ga.gov`**                                                                            |
| `WebFetch https://www.sba.gov/funding-programs/loans/504-loans` | **`getaddrinfo ENOTFOUND www.sba.gov`**                                                                               |
| `curl https://example.com` — **control**                        | **`curl: (56) CONNECT tunnel failed, response 403`**                                                                  |
| `curl https://doas.ga.gov`                                      | **`curl: (56) CONNECT tunnel failed, response 403`**                                                                  |
| `getent hosts example.com`                                      | **no container DNS**                                                                                                  |
| Proxy status                                                    | `enabled: true` · `bundleCoversEveryHost: true` · `selective: false` — **the proxy itself is reachable and answered** |
| **`get_environment`**                                           | **`network: {"type":"limited","allowed_hosts":[]}`**                                                                  |

**The new fact is the last row, and it settles a question four scans could only
infer.** **The environment's allowed-hosts list is empty.** Not misconfigured,
not partially populated, not blocking Georgia state sites in particular —
**empty**, with package managers and MCP server hosts permitted separately. **So
no public web host is reachable by any tool, and `example.com` failing was never
a puzzle.**

**The 2026-10-26 reading is confirmed, not superseded: these are two different
failures.** **`curl` resolves through the proxy and the proxy refuses CONNECT
with 403** — a policy refusal. **WebFetch never reaches the proxy because it
cannot resolve a name** — and its error text now carries the remedy, naming the
session's allowed network domains. **A momentary reading of `curl`'s
`http_code: 000` as "curl no longer reaches the proxy either" was wrong and is
not published as a finding** — the verbose error shows it reaches the proxy
exactly as before.

**What it costs this scan, stated as a ceiling rather than an excuse.** **The
command file requires validating the source and the deadline on the issuing
body's own page before scoring, and no page was opened.** Every factual
statement below is **`WebSearch`'s server-side synthesis of those pages**, which
is a real source and **is not the same as reading them.** **So source
reliability cannot score above 8 or 9 of 15 for anything here, by construction,
for the fifth consecutive scan.** **Nothing is mocked, estimated or filled in to
cover the gap**, and **no deadline below is stated as validated.**

**This is now fixable from inside the session, which is new.** **A-27 is raised:
it asks for five named hosts to be added to the environment's allowed-domains
list**, which the agent can then apply with a single `update_environment` call.
**That would lift the ceiling permanently for every future scan**, and it is the
first time T-98 has had a remedy an agent could execute rather than only
describe.

## Ranked candidates

| #   | Opportunity                                              | Type               | County    | Value                                                                    | Deadline           | Score      | Band                       | Owner effort                          | Next action                    | Task      |
| --- | -------------------------------------------------------- | ------------------ | --------- | ------------------------------------------------------------------------ | ------------------ | ---------- | -------------------------- | ------------------------------------- | ------------------------------ | --------- |
| 1   | **GA@WORK Marketplace supplier registration**            | Sales channel      | Statewide | **Unquantified** — a channel, not an award                               | **None**           | **64/100** | **Worth Investigating**    | One form, plus NIGP code choice       | **Owner: register, or say no** | **T-160** |
| 2   | **Georgia SSBCI — Credit Guaranty / Loan Participation** | Credit enhancement | Statewide | **50% guarantee**, or state purchase of **up to 25%** of a lender's loan | **None — rolling** | **40/100** | **Limited or Specialized** | A full loan application, via a lender | **None proposed**              | —         |

**Two candidates, and the ranking is not close.** **The gap between 64 and 40 is
the difference between a free channel and more debt**, and the second is listed
to be argued against as much as for.

## Candidate records

### 1. GA@WORK Marketplace for Suppliers — score 64/100 (Worth Investigating)

**Stated by source** — read at **2026-11-10T10:44Z** via `WebSearch`; **no page
fetched.**

- **The State of Georgia launched a new supplier registration system, GA@WORK
  Marketplace for Suppliers, on 2026-07-01**, replacing **Team Georgia
  Marketplace** as the registration route.
- **Registration requires:** a Tax ID or SSN, basic business information, key
  contacts, **NIGP codes** for the goods or services offered, and **gross annual
  receipts.**
- **DOAS's current registration pages do not list a registration fee.**
- **Registration questions go to DOAS procurement support** — contact details
  are published on DOAS's own pages and **are not reproduced here.**
- **DOAS's own material is internally inconsistent:** the **Georgia Procurement
  Manual V12, February 2026** and several DOAS pages **still refer to Team
  Georgia Marketplace.**
- **Vehicle-related statewide contracts exist and are near expiry** — see "Found
  and deliberately not scored".

**Assumed by Torque** — each labelled, with what would confirm it:

| Assumption                                                                                                                                                                                             | What would confirm it                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **DD84 is not currently registered.** Nothing in this record says it ever registered anywhere                                                                                                          | The owner saying so, or a GA@WORK login attempt |
| **Any pre-2026-07-01 registration would need redoing in the new system.** A platform replacement normally does not carry suppliers over automatically — **this is an inference, not a DOAS statement** | DOAS's migration notice, which was not reached  |
| **Remote ECU/EFI calibration maps onto an existing NIGP code.** Plausible under vehicle maintenance and repair services; **not verified**                                                              | The NIGP code list in GA@WORK                   |
| **Registration is free.** DOAS pages list no fee, which is **absence of a stated fee, not a stated absence of fee**                                                                                    | The registration flow itself                    |

**Score breakdown**

| Component           | Score       | Reasoning                                                                                                                                                                                                              |
| ------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Financial value     | **12 / 25** | **Neutral for lack of information, and labelled as such.** It is a channel, not an award: there is no value to quote. State and local agencies buy vehicle services; what DD84 would win is unknown and is not guessed |
| Accessibility       | **18 / 20** | **No competitive award, no window, no fee found, and DD84 holds every input** — Tax ID, contacts, receipts. The only unknown is the NIGP code                                                                          |
| Time sensitivity    | **3 / 15**  | **No deadline — a standing registration.** Scored 3 under the corrected direction, not high. **The expiring contracts are a separate matter and do not make this entry urgent**                                        |
| Source reliability  | **8 / 15**  | **DOAS's own pages appeared in results and none was fetched (T-98)** — and **DOAS's own Procurement Manual contradicts them on the system's name.** Capped, and the conflict is real rather than theoretical           |
| Capital requirement | **10 / 10** | **No fee found and no capital needed.** The cost is the owner's time                                                                                                                                                   |
| Complexity          | **8 / 10**  | A registration form. **The NIGP code choice is the only judgement in it**, and it determines which solicitations DD84 ever sees                                                                                        |
| Risk                | **5 / 5**   | **Registering commits nothing.** No obligation to bid, no fee, no exclusivity                                                                                                                                          |

**Total 64/100 — Worth Investigating.** **This equals the highest score this
routine has ever recorded** (Georgia SBDC advisory, 2026-10-12).

**Why it ranks here** — **it is the only candidate in five scans that costs
nothing, commits nothing, and opens a revenue channel rather than a liability.**
Every financing entry this routine has produced — 504, B&I, microloan, SSBCI —
is **debt against a business whose cash shape is the subject of T-71**, and each
has been correctly argued against on that ground. **This is the opposite shape:
the downside is wasted time.** It also **supersedes rather than duplicates** the
2026-10-19 entry "State and county supplier registration — 62/100": **that entry
named Team Georgia Marketplace, which stopped being the registration route on
2026-07-01**, so its next action pointed at a retired system. **The score moves
62 → 64 for one reason only: the capital-requirement and accessibility picture
is better understood, not because anything improved.** **Scores from 2026-11-02
and earlier are not comparable with this one on time sensitivity** (T-125).

**Next action** — **T-160, owner.** **Registering is an application, so the
agent does not do it** — and **this is deliberately a task and not an approval
packet**, because the form needs a Tax ID, a gross-receipts figure and an NIGP
code selection that **only the owner holds**, and **a packet whose approved
action the agent still could not execute is a worse instrument than a task.**
**What the agent can do and has done: establish that the portal changed, name
what the form asks for, and record that the prior entry's route is retired.**

### 2. Georgia SSBCI — Small Business Credit Guaranty and Loan Participation — score 40/100 (Limited or Specialized)

**Promoted from "scored but held" — the 2026-11-02 scan left this unscored
because only an aggregator had been seen. DCA's own documents appeared in
results this run, so it can be scored. They still could not be fetched.**

**Stated by source** — read at **2026-11-10T10:46Z** via `WebSearch`; **no page
fetched.** From DCA's SSBCI pages, DCA's lender flyer, DCA's SSBCI 2.0
regulations and the Georgia Administrative Code:

- **Georgia's SSBCI has five sub-programmes:** the **Georgia Loan Participation
  Program**, the **Georgia Small Business Credit Guarantee Program**, the
  **Georgia CDFI Program**, the **Georgia Venture Capital Program** and the
  **Georgia Equity Direct Program.**
- **DCA states the Georgia SSBCI programme does not offer a grant programme.**
  **These are repayable-financing instruments.**
- **Credit Guarantee:** the state **guarantees 50%** of a loan a participating
  lender originates to an eligible small-business borrower.
- **Loan Participation:** the state **purchases a participation of up to 25%**
  of an approved loan.
- **The programmes are lender-side.** **Lenders — banks, credit unions and CDFIs
  — must be vetted and approved by the state and sign a master agreement.** **A
  business does not apply.**
- **DCA publishes no roster of approved lenders**; its Approved Lenders section
  directs businesses to the SSBCI Program Manager to help locate one.
- **No deadline. Rolling.**

**Assumed by Torque**

| Assumption                                                                                                                                                                 | What would confirm it                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Automotive services are eligible.** Nothing found excludes them and nothing found includes them                                                                          | DCA's eligibility rules, unfetched         |
| **DD84 would fall below any loan-size floor that applies.** One DCA summary describes participation on loans **from $100,000**; DD84's borrowing need is nowhere near that | The actual programme terms                 |
| **A guarantee is the more relevant of the two for DD84**, because the obstacle is a lender's willingness rather than a lender's capacity                                   | A conversation with a participating lender |

**Score breakdown**

| Component           | Score       | Reasoning                                                                                                                                                                                                                                                     |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Financial value     | **14 / 25** | **It gives DD84 no money.** It makes a lender likelier to lend — which, for a business in T-71's shape, may be the binding constraint. Real, indirect, unquantified                                                                                           |
| Accessibility       | **7 / 20**  | **DD84 cannot apply at all.** A vetted lender applies, and **DCA publishes no lender list**, so step one is a phone call to a programme manager to find one                                                                                                   |
| Time sensitivity    | **3 / 15**  | **Rolling, no deadline** — 3 under the corrected direction                                                                                                                                                                                                    |
| Source reliability  | **7 / 15**  | DCA's flyer, DCA's regulations and the Administrative Code all appeared and **none was fetched.** Worse: **DCA's own materials conflict** — $100,000–$5m on a $20m maximum, versus a $250,000 participation cap, versus a legacy 50% guarantee up to $400,000 |
| Capital requirement | **5 / 10**  | **Unknown → neutral, and labelled.** It is debt: the capital requirement is whatever the lender demands, plus likely collateral and a personal guarantee                                                                                                      |
| Complexity          | **3 / 10**  | Five sub-programmes, lender vetting, master agreements, **and figures that disagree across the issuer's own documents**                                                                                                                                       |
| Risk                | **1 / 5**   | **The same objection as the microloan, and it has not weakened.** Fixed obligations against a business with an overdrawn cash shape (T-71), an unresolved charge-off clock (T-136) and **four payers whose money is still unattributed** (T-146, T-147)       |

**Total 40/100 — Limited or Specialized**, at the very bottom of the band.

**Why it ranks here** — **it is recorded so that a later run does not discover
it as news, and so the owner can see that the financing landscape has now been
swept four times without producing an instrument this business should use
today.** **This scan does not recommend it.** Its comparative value is the same
as the microloan entry's: **DD84 is reportedly pursuing SBA 504** (`CLAUDE.md`),
**and every financing instrument found in five scans has scored between 34 and
56 and has been argued against on the same ground** — borrowing before three or
four unattributed payments are even reconciled.

**Next action** — **none proposed, and no task created**, because it scores
below 55 and because the first step would be contacting a state programme
manager, which is Class C.

## Changed since last scan

| Item                                    | Old value                                                            | New value                                                                                                                                                                                                                                | Source                                      |
| --------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Supplier registration route**         | **Team Georgia Marketplace** (2026-10-19 entry, 62/100)              | **GA@WORK Marketplace for Suppliers, since 2026-07-01**                                                                                                                                                                                  | DOAS pages via `WebSearch`; **not fetched** |
| **Rural Zone — next designation cycle** | Treated as an annual cycle with a window to come                     | **The 2027 application closed 2026-08-14**, 88 days ago. **No later cycle's deadline is published**                                                                                                                                      | DCA document list via `WebSearch`           |
| **Rural Zone — programme continuity**   | Assumed to run to 2030-12-31                                         | **A north-Georgia local news report says the programme may not continue beyond the current cycle**                                                                                                                                       | `dadecountysentinel.com`, 2026-02-26        |
| **Rural Zone — DD84's own location**    | Not stated either way                                                | **No Jackson County or Jefferson, Georgia community appears on any Rural Zone list found.** Designated towns found: Alma, Barnesville, Blairsville, **Elberton**, Folkston, Grantville, Summerville (effective 2026-01-01 to 2030-12-31) | DCA press releases via `WebSearch`          |
| **SSBCI**                               | **Held, not scored** — aggregator only (2026-11-02)                  | **Scored 40/100** — DCA's own documents reached, though not fetched                                                                                                                                                                      | §2 above                                    |
| **SBA microloan intermediary**          | "Atlanta intermediaries include Access to Capital for Entrepreneurs" | **ACE is a CDFI lending from $15,000, open to owners banks turn down** — see below                                                                                                                                                       | `WebSearch`                                 |

### Why the Rural Zone entry is not re-scored, and why the location finding does not break it

**The 2026-10-26 entry scored Elberton Rural Zone credits at 55/100 and it holds
up.** It already stated that **the business must be located in the investment
property inside the zone** and that **two net new full-time-equivalent jobs are
the binding constraint**, and it already tied the entry to **T-78's buy-vs-build
decision on the Colbert parcel** rather than treating it as available where DD84
sits today. **So "Jefferson is not a designated zone" is not a correction to
that entry — it is the premise the entry was built on**, and a reading that
treated it as a correction was considered and rejected before publication.

**What is new is the two risks either side of it.** **A community cannot now get
designated for 2027** — the window shut on 2026-08-14 — so **waiting for
Jefferson to become a zone is not a strategy**, and **a local report questions
whether the programme continues at all**, which matters to an entry whose value
rests on a 2030-12-31 horizon. **Neither is confirmed from DCA, and neither
changes the score, because the score's limiting components were already
employment and capital.** **T-97 remains the owner's question and it has not
moved: would he ever hire two people?**

### Why the microloan entry is not re-scored either

**ACE lends from $15,000.** **That cuts both ways and the two effects roughly
offset**, so republishing 56/100 unchanged is a decision rather than an
oversight: **a $15,000 floor means the instrument cannot serve a small
working-capital need** — it is substantial debt or nothing, which argues the
risk score down, except that **risk is already at its floor of 1 out of 5** —
while **"open to owners banks turn down" genuinely improves accessibility.**
**Re-scoring to move a number by a point or two, on search-synthesis evidence,
would imply a precision this routine does not have.**

## Expired or withdrawn — kept, not deleted

### 1. Jackson County Chamber small-business grant — WITHDRAWN. The page is in Mississippi.

**This is the most consequential finding of the scan, and it is a correction of
a correction.**

**The 2026-11-02 scan scored this 42/100** and recorded its location as
**"Jefferson, Georgia — DD84's own county"**, its source as
`jcchamber.com/small-business-grant-application/`, and noted that **"no result
anywhere connects Chevron to this chamber"**, treating a Chevron sponsorship in
the first search as **"imported from a different programme."**

**Two targeted searches this run say the domain is not Georgia's.**

| Evidence found this run                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`jcchamber.com` is the Jackson County Chamber of Commerce in Pascagoula, Mississippi**, on the Mississippi Gulf Coast                                 |
| Its contact page gives a **Pascagoula, MS** post-office box                                                                                             |
| Its own member directory lists the chamber at **`business.jcchamber.com/list/member/jackson-county-chamber-of-commerce-pascagoula-2382`**               |
| **The grant programme is described as run with Chevron** — Chevron operates a refinery at Pascagoula                                                    |
| **No Jackson County chamber in Jefferson, Georgia appears under that domain.** Other Jackson County chambers found are in Florida, Indiana and Michigan |

**So the 2026-11-02 correction was half right and half wrong.** **It was right
that the "2026" in the first snippet was wrong** and right to refuse to publish
a deadline that did not exist. **It was wrong to reject Chevron — Chevron
appears to belong to this programme — and wrong to place the page in Georgia.**
**The $3,000 cap, the one-year membership rule and the October cycle are
probably all accurate; they are simply accurate about Mississippi.**

**The mechanism, because it will recur.** **An aggregator-style result gave a
county name without a state, and a county name that exists in at least five
states was resolved to the one the reader was already thinking about.** **The
11-02 scan's extended search found the page's content was the 2024 cycle and
stopped there** — it tested the _date_ and not the _place_. **The place was
never in the search result; it was supplied by the reader.** **A separate fact —
that a Jackson County chamber is registered as a public charity in Jefferson, GA
— is probably true and is about a different organisation at a different domain,
and it is what made the misreading feel confirmed.**

**What this costs and what it does not.** **T-124 tells the owner to make a
phone call** to establish whether there is a 2026 cycle and whether DD84 is a
member of a year's standing. **That call would have gone to Mississippi.**
**T-124 is closed No Action with the reason recorded** — not deleted, and the
11-02 entry stays in its brief with this annotation pointing at it. **Nothing
was spent and no one was contacted**, because the next action was always the
owner's and the owner has not acted on it.

**The real question survives the withdrawal and is raised fresh.** **Does
Jackson County, Georgia, or the City of Jefferson, run a small-business grant or
loan programme?** **This run found none** — the only local-sounding result was
the Mississippi chamber, and **no Jackson County, Georgia or City of Jefferson
programme appeared in any search.** **That is a negative finding, not a gap:
searched and not found.** **T-161 records it so the question is asked at the
right domain next time, and the honest next step is the Jackson County
Development Authority or the city offices, neither of which was reachable.**

### 2. Georgia Rural Zone 2027 designation application — CLOSED 2026-08-14

**Kept because the audit trail survives the opportunity.** **A community
application, not a business one** — DD84 could never have filed it. It is
recorded because **four prior scans treated the Rural Zone programme as an
annual cycle with a window to come**, and **for 2027 there is no window.**

## Already tracked, not re-scored

**Listed so that absence from the sections above is not read as resolution. None
was re-researched this run.**

| Candidate                                            | Score      | First scored | State                                                                                  |
| ---------------------------------------------------- | ---------- | ------------ | -------------------------------------------------------------------------------------- |
| **Georgia SBDC advisory**                            | **64/100** | 2026-10-12   | **Still live** — a monthly newsletter arrived 2026-11-03. Free consulting; no deadline |
| **Buy an existing shop on Hwy 72** rather than build | 56/100     | 2026-10-19   | **T-78**, Planned, past due                                                            |
| **SBA Microloan via a Georgia intermediary**         | 56/100     | 2026-11-02   | Updated above; **not re-scored**                                                       |
| **Elberton Rural Zone tax credits**                  | 55/100     | 2026-10-26   | **T-97** — the two-FTE question is the owner's                                         |
| **SecretSOS quarterly small-business grant**         | 53/100     | 2026-10-19   | Not re-checked this run                                                                |
| **Georgia DOAS fleet-provider enrollment**           | 60/100     | 2026-11-02   | **T-123** — does remote calibration count as fleet maintenance? **See the note below** |
| **State and county supplier registration**           | 62/100     | 2026-10-19   | **Superseded by candidate 1**, whose route is the current one                          |
| **SBA 504**                                          | 47/100     | 2026-10-12   | `CLAUDE.md` records DD84 pursuing it; **every scan has scored it low**                 |
| **USDA Business & Industry guaranteed loan**         | 44/100     | 2026-10-12   | Fell 50 → 44 on 2026-10-19                                                             |
| **TCSG High Demand Apprenticeship Program**          | 41/100     | 2026-10-12   | Not re-checked                                                                         |
| **Statewide fleet-maintenance vendor network**       | 40/100     | 2026-10-26   | Not re-checked                                                                         |
| **USDA REAP**                                        | 34/100     | 2026-10-12   | Not re-checked                                                                         |

**T-123 is the gate on candidate 1 as much as on its own entry.** **Whether
remote ECU and EFI calibration counts as a vehicle "maintenance or repair
service" decides which NIGP code DD84 registers under**, and therefore which
solicitations it ever sees. **It has been the owner's question since 2026-11-02
and is past due.** **Registering under the wrong code is worse than not
registering**, which is why T-160's next action names T-123.

## Found and deliberately not scored

| Found                                                                                                                                                                                                 | Why it is not scored                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Expiring statewide contracts** — "Motor Vehicle Maintenance & Inventory Management" (convenience level, listed through 2026-12-31) and "Equipment Maintenance Services" (listed through 2026-09-30) | **DD84 could not credibly bid to be a statewide fleet vendor** — `ventures.md` records no employees. **And the source document's own date is contradictory** (see Conflicts). **What matters here is the word "convenience": a convenience contract does not oblige agencies to use it**, which is the entire premise of candidate 1 |
| **The Georgia Opportunity Ledger's own alert emails**                                                                                                                                                 | **A different business's product, and not an issuing body.** Four alerts arrived 2026-11-06. **Read as DD84 mail — a listed source — and used for nothing.** See Conflicts                                                                                                                                                           |
| **Shophand Small Business Boost Grant** — US for-profit, under 50 employees, deadline **2026-11-30**                                                                                                  | **Not Georgia**, and its issuer could not be identified from an aggregator snippet. **It is the only near-term deadline this scan surfaced, so it is handed to the owner rather than dropped**: are national programmes in scope?                                                                                                    |
| **A $90,000 Georgia Department of Community Health grant, deadline 2026-11-13**                                                                                                                       | **Three days away and unverifiable.** The aggregator page was scrambled; the programme's name and whether it targets small businesses could not be read. **DCH funds healthcare**, so an automotive tuning business is very unlikely to be eligible — **but "very unlikely" is not "checked"**                                       |
| **Youth Placemaking Grant** (Georgia Forward / Georgia Cities Foundation), due 2026-11-13                                                                                                             | **Funds community public-space projects engaging young people.** Not a business grant                                                                                                                                                                                                                                                |
| **Georgia FAST Grant** (Georgia SBDC)                                                                                                                                                                 | **Deadline 2026-10-31 — already passed** when this scan ran. Recorded so it is looked for earlier next cycle                                                                                                                                                                                                                         |
| **Freelancer.com and Upwork marketplaces**                                                                                                                                                            | **Not Georgia opportunities and not this routine's business.** Noted only because a **Freelancer.com welcome email is dated 2026-11-06** and platform messages have been arriving since — which is context for the intake's findings, **not a scan candidate**                                                                       |
| **OneGeorgia Authority**                                                                                                                                                                              | **Grants to rural communities, not to businesses.** Same shape as Rural Zone designation                                                                                                                                                                                                                                             |
| **Invest Atlanta Small Business Improvement Grant**; **Georgia Rural Business Development Grants**                                                                                                    | **Closed** — ran January–May 2026 and to 2026-06-15 respectively                                                                                                                                                                                                                                                                     |

## Conflicts and doubts

### 1. The other business's product is scoring the same opportunities, and the numbers differ

**Four alerts from the Georgia Opportunity Ledger's own alert address arrived in
DD84's inbox on 2026-11-06.** **The address itself is withheld: the leak gate
stopped it, and it was right to** — §5 bars email addresses as a class and the
string is not in this repository today, so publishing it would add one. **The
thread IDs are the pointers, as A-19 Option C intends.** **They are read here as
DD84 mail — a source this routine is told to check — and nothing in them is used
as evidence for anything above.** **No Supabase tool was called, no Ledger
repository or deployment was touched, and nothing found anywhere in this scan
becomes a Ledger record.**

| The Ledger's alert                                   | Its score  | Its band                   | This register's score   |
| ---------------------------------------------------- | ---------- | -------------------------- | ----------------------- |
| SBA 504: fixed-asset financing through a CDC         | **41/100** | **Limited or Specialized** | **47/100** (2026-10-12) |
| SBA microloans through intermediaries                | **46/100** | **Limited or Specialized** | **56/100** (2026-11-02) |
| SBA 7(a): financing for Georgia operating businesses | **43/100** | **Limited or Specialized** | **never scored here**   |

**Two things follow, and only one of them is comfortable.**

**The comfortable one: it independently corroborates the band recovery.** **The
bands were recovered on 2026-11-09 from `CLASSIFICATION_BANDS` in the canonical
Ledger source**, and four consecutive scans had refused to invent them. **41, 43
and 46 are all labelled "Limited or Specialized", which is exactly the 40–54
band.** **That is the first evidence from outside this repository that the
recovered thresholds are the ones actually in use**, and it was not sought — it
arrived in the mail.

**The uncomfortable one: two runs of the same published method disagree by up to
ten points on the same opportunity.** **This scan does not adopt the Ledger's
numbers and does not re-score anything from them**, because **a competing
scoring run is not an issuing body** and **its evidence base is unknown.** **Two
differences are already known to be capable of causing this**: this register's
**time-sensitivity direction changed on 2026-11-02** (T-125) and **its source
reliability has been capped by T-98 for five scans**, neither of which need
apply to the other system. **What cannot be claimed is that either set of
numbers is right.** **It is recorded because a published score that moves with
the scorer is a fact about the method**, and the register should hold it.

### 2. Georgia DCA's own documents disagree on SSBCI loan limits

**Participation of up to 25% on loans of $100,000 to $5 million against a $20
million maximum**, versus **a current maximum participation of $250,000**,
versus a February 2026 legislative description of **a 50% guarantee on loans up
to $400,000 and participation up to 25% capped at $250,000.** **The newest is
not identifiable without opening the pages.** **Source reliability scored 7/15
for this reason, and the conflict is published rather than resolved by
preference.**

### 3. The statewide-contract report's own date contradicts itself

One snippet gives an effective date of **2026-05-08** while the document's URL
places it in **October 2024.** **So the contract expiry dates quoted above may
be two years stale**, which is precisely why they are in "not scored" rather
than in a candidate record.

### 4. Rural Zone programme continuity

**A local news report says the programme may not continue beyond the current
cycle. DCA has published no such statement that this run could find.** **A
report in a county paper is not DCA**, and the question is unresolved.

### 5. The registry's own revenue figure is 99 days old

**`docs/agents/ventures.md` records all-time revenue of `$3,507.86`, verified
2026-08-03.** **The standing rule re-verifies anything older than 30 days
against the live system before quoting it, and this is 99 days old.** **The
2026-10-26 scan used `$5,207.86`**, a later figure from this record. **Neither
is quoted above as a current figure**, and **no score depends on either** —
financial value was scored neutral for the candidate where revenue would have
mattered.

## Due-diligence tasks created

**The threshold is a score of 55 or above. One candidate clears it.**

| Task      | What                                                                                                                              | Owner | Due            |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ----- | -------------- |
| **T-160** | **Register DD84 in GA@WORK Marketplace for Suppliers** — or decide not to. **Depends on T-123's answer for the NIGP code**        | Owner | **2026-11-14** |
| **T-161** | **Does Jackson County, GA or the City of Jefferson run a small-business programme?** Replaces the withdrawn Mississippi candidate | Agent | **2026-11-16** |

**T-160 has no deadline, so the due date is a review date set before the next
scheduled scan on 2026-11-16**, not a deadline invented to look like one.
**T-161 is dated to the next scan so the question is asked there.**

**Two register rows are closed by this run and one is moved:**

| Row       | From            | To                       | Why                                                                                                                                                    |
| --------- | --------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **T-124** | Awaiting Owner  | **No Action (accepted)** | **The grant is in Mississippi.** The call it asked for would have been to the wrong state                                                              |
| **T-125** | In Verification | **Done**                 | **The bands were recovered 2026-11-09 and the direction corrected 2026-11-02; this is the first scan to apply both**, and OL-0096 carries the evidence |
| **T-98**  | Awaiting Owner  | **Awaiting Approval**    | **A-27** — it finally has a remedy an agent can execute                                                                                                |

## Not checked this run

| Source                                                      | Why                                                                                                                                                        |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Every primary source**                                    | **T-98.** No page was fetched by any tool. See §0                                                                                                          |
| **Google Drive**                                            | **Not read.** **So owner criteria, prior due diligence and financing assumptions are unconfirmed**, and nothing above is checked against them              |
| **The Georgia Procurement Registry**                        | **Needs a fetch.** Open solicitations and the fleet-maintenance eRFP's award status are unknown                                                            |
| **GA@WORK Marketplace itself**                              | **Needs a fetch and probably a login.** Whether DD84 is already registered is unknown                                                                      |
| **DCA's SSBCI pages**                                       | **Needs a fetch.** The conflicting loan limits stay conflicting                                                                                            |
| **Jackson County Development Authority; City of Jefferson** | **Needs a fetch.** **T-161**                                                                                                                               |
| **County surplus property and local RFP postings**          | **Not searched this run.** A whole source class the command file lists, and it was skipped in favour of validating what four prior scans had already found |
| **USDA, TCSG, SecretSOS, USDA REAP**                        | **Not re-checked.** Carried at their last scores                                                                                                           |

## What this run did not do

- **Called no `mcp__Supabase__*` tool.** **Not a read-only allowance — a flat
  prohibition**, and the only Supabase project on this account belongs to the
  other business.
- **Touched no part of the Georgia Opportunity Ledger's database, repository or
  deployment.** **Its product emailed DD84 four scored alerts and they were read
  as DD84's mail and used as evidence for nothing.** **The one thing taken from
  them is recorded as a corroboration of this repository's own band recovery,
  not as a source fact about any opportunity.**
- **Wrote nothing into `docs/growth/`.** **The divergence between the two
  scoring runs is commercially interesting to the Ledger as a business and that
  makes it Rev's**, raised here as a note and not written across the two
  records.
- **Contacted no source, agency, broker, lender or chamber.** **No application,
  expression of interest or offer was submitted. No capital was committed and
  nothing was signed.**
- **Did not call `update_environment`.** **The network fix is real and the agent
  could make the call — but this routine fired unattended, and a settings
  approval card shown to nobody is not a decision.** **A-27 is the durable
  instrument**; approving it authorises the call, which will itself ask for
  confirmation.
- **Did not score anything it could not open**, and **stated no deadline as
  validated.** Every entry carries a capped source-reliability component with
  the reason named.
- **Did not present an assumption as a source fact.** Every candidate has a
  separate **Stated by source** and **Assumed by Torque** block, and every
  neutral-for-unknown component says so.
- **Quoted no midpoint.** The SSBCI figures are published as the conflicting
  ranges they are.
- **Did not re-score the Rural Zone or microloan entries to look busy.** Both
  decisions are stated with reasons.
- **Did not delete the withdrawn candidate.** **The 2026-11-02 entry stays in
  its own brief** and this one annotates it.
- **Did not treat "Jefferson is not a designated Rural Zone" as a correction to
  the 2026-10-26 entry.** That reading was considered and rejected: **the entry
  was built on relocating into a zone, and it said so.**
- **Was refused by its own leak gate, once correctly and once not, and both are
  recorded.** The gate stopped **one real string** — the other venture's alert
  email address, which §5 bars as a class and which is not in this repository
  today — **and nineteen false positives on the words "Jackson County"**,
  because a pattern written to guard a withheld court-date notice had
  `jackson county` in it. **That is DD84's own county and this scan's central
  finding is about it.** **It is the same mistake as the Gmail thread-ID pattern
  on 2026-11-09: a term the record is required to publish does not belong in the
  gate.** The pattern was narrowed with a comment saying why, so a later run
  does not re-add it; the three phrases that actually distinguish the withheld
  notice remain, and are not reproduced here — a public brief that lists a leak
  gate's patterns works against the gate. **The address was removed rather than
  argued about.**
- **Did not ignore its own near-miss.** **A momentary misreading of `curl`'s
  `http_code: 000`** as evidence that curl no longer reaches the proxy **was
  caught by the verbose error before publication**, and §0 records the correct
  finding rather than the convenient one.
