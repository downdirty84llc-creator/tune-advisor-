# DD84 Georgia opportunity scan — 2026-11-16

**Run started 2026-11-16T11:26:01Z, read from the clock.** Fired 11:25:43Z
against an 11:25Z schedule. **Finish time in §8, also read.**

> **A correction made before this file was pushed, and worth keeping.** The
> first draft of this line said the run was "11:26Z–11:48Z". **11:48 was a
> prediction, not a reading** — exactly the defect T-116 records in every brief
> from 2026-08-06 to 2026-11-03. **The per-search timestamps in §1 went the same
> way and are corrected below.** **One read time is worth more than a plausible
> span.** Class A. **Nobody was contacted, nothing was applied for, nothing was
> committed.**

**Scoring method: the published 100-point method in
`.claude/commands/dd84-opportunity-scan.md`** — financial value 25 ·
accessibility 20 · time sensitivity 15 · source reliability 15 · capital
requirement 10 · complexity 10 · risk 5. **Bands as recovered 2026-11-09.**
**Time sensitivity reads "higher means more urgent"**, so a rolling programme
scores 3; **scores from 2026-11-02 and earlier are not comparable on that
axis.**

**No skeleton.** The expensive part — four web searches — completed before any
file was written, and their results are in this run's context. **Seventeenth "no
skeleton" judgement recorded with its reason.**

## 0. Checkout and instruments

`HEAD` equals origin at **`c05a940`**. **No `src/`, no `package.json`, clean, 95
tracked files against the prompt's 28 — forty-third run reporting that drift.**

**T-98 re-tested live this run and it holds, with the distinction the record
already draws.** `get_environment` returns `allowed_hosts: []` — **still
empty.** **`WebSearch` works and returned real results; no page was fetched by
anything.** That is the same split A-27 was raised against: **discovery is
possible, validation at source is not.** **Sixth consecutive scan capped on
source reliability for that reason**, and every score below says so in its
breakdown.

**Four searches, all `standard` mode**, run between the start time above and
11:29:55Z, both read: statewide small business grants with open deadlines ·
Athens-Clarke and Madison County local programmes · Georgia apprenticeship
incentives for automotive employers · Georgia public-fleet diagnostic and
calibration solicitations. **No per-search time is given, because the clock was
not read between them and inventing four would be the T-116 defect in
miniature.**

## 1. Ranked — new this week

| #   | Opportunity                                | Type          | County            | Value                          | Deadline          | Score      | Band                       | Owner effort       | Next action                      | Task      |
| --- | ------------------------------------------ | ------------- | ----------------- | ------------------------------ | ----------------- | ---------- | -------------------------- | ------------------ | -------------------------------- | --------- |
| 1   | **JDA Turntable Revolving Loan Fund**      | Debt          | **Athens-Clarke** | **$3,001 – $25,000 at 2% APR** | **Not confirmed** | **55/100** | **Worth Investigating**    | One application    | **Answer T-164 first**           | **T-191** |
| 2   | **Georgia's Own Foundation Grant**         | Grant         | Statewide         | **$1,000 – $10,000**           | **2026-11-30**    | **53/100** | **Limited or Specialized** | One application    | **Verify eligibility at source** | **T-194** |
| 3   | **TCSG apprenticeship employer incentive** | Reimbursement | Statewide         | **Not established**            | **Not confirmed** | **36/100** | **Information Only**       | Hire an apprentice | None proposed                    | —         |

**The highest-scoring opportunity on DD84's books is still last week's**, not
anything above: **GA@WORK Marketplace supplier registration at 64/100 (T-160)**.
**This scan did not manufacture a new leader and will not.** What it did do is
make that one more actionable — see §4.

---

### 1. JDA Turntable Revolving Loan Fund — score 55/100 (Worth Investigating)

**Stated by source** — read in this run's search window (§0) via `WebSearch`;
**no page fetched.** From an Athens-Clarke County government notice, the Joint
Development Authority's own programme pages, and a regional news report.

- **2% APR, 30-month term, $3,001 to $25,000.** Minimum credit score **650**.
- **Eligibility, as published:** a business **physical address inside the legal
  boundary of Athens-Clarke County** (the City of Winterville is covered under a
  separate listing); **registered and in good standing with the Georgia
  Secretary of State**; the applicant **owns** the business receiving the loan;
  and **current plus the previous three years of occupation tax paid** to the
  local government for the business's physical location.
- **Status:** the most recent item found is an **August 2025** report that
  applications had opened, and **September 2025 meeting minutes** referring to a
  new fully compliant revolving loan fund request. **No 2026 notice was found.**

**My assumptions, labelled as mine** — that a revolving fund, if open, is likely
rolling rather than windowed; that 2% over 30 months on ≤$25,000 is materially
cheaper than any other credit a business in DD84's position could get. **Neither
is sourced.**

**Why this is ranked first and what stops it being higher.**

**It is the first opportunity this scan has ever found whose eligibility turns
on an open question already in the register.** **T-164 has asked since
2026-11-12 what county DD84 is in**, because **`ventures.md` records no location
at all** and the register once asserted one without a source. **The owner's own
words, in a 2026-11-10 reply to an enquirer, are "the Hull, GA area."** **Hull's
post office is in Madison County, not Athens-Clarke** — **and that is an
observation about a place name, not a finding about where DD84 operates from,
which this record still does not know.**

**So a bookkeeping question became a money question this week.** If the business
address is inside Athens-Clarke County, this is live. If it is in Madison
County, it is not — and **the record cannot say which.**

**A second gate nobody has checked.** The occupation-tax requirement means DD84
must have **paid occupation tax to a local government for its physical location
for the current year and the three before it.** **Nothing in this record says
DD84 has an occupation tax account with any jurisdiction.** **T-192 raised** —
and it is a question worth answering whatever happens to this loan.

**Score breakdown**

| Component           | Score       | Why                                                                                                                                                                       |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Financial value     | **16 / 25** | $3,001–$25,000 at 2% is real working capital for a business with no receivables. **It is debt, not an award** — and a range, kept as a range                              |
| Accessibility       | **8 / 20**  | **Two independent gates, each unknown and each of which must pass.** Not punished for being unknown — **neutral for one unknown is 10; two is genuinely less accessible** |
| Time sensitivity    | **7 / 15**  | **Neutral, for lack of information.** No current-year window was confirmed either way. **Unknown is not zero**                                                            |
| Source reliability  | **6 / 15**  | Terms from a government notice dated **2023** and a programme page, via search synthesis; **nothing fetched (T-98)**; most recent status evidence is **2025**             |
| Capital requirement | **9 / 10**  | Applying costs time and documents, not money                                                                                                                              |
| Complexity          | **7 / 10**  | One application, plus Secretary of State standing, three years of tax history and a credit check                                                                          |
| Risk                | **2 / 5**   | **This is borrowing into a cash position that was at or below zero on 2026-11-09**, by a business with **$699 of work it has never invoiced** (T-185)                     |
| **Total**           | **55/100**  | **Worth Investigating**                                                                                                                                                   |

**Next action: answer T-164, not apply.** **The application cannot be assessed —
by anyone, including the owner — until the business's physical address is
established.** **Nothing here should be submitted first and checked
afterwards.**

---

### 2. Georgia's Own Foundation Grant Program — score 53/100 (Limited or Specialized)

**Stated by source** — read in this run's search window (§0) via `WebSearch`;
**no page fetched.** From a **grant-aggregator listing**, not the foundation's
own site.

- **Deadline 2026-11-30.** **$1,000 to $10,000.**
- **The listing does not say whether businesses are eligible.**

**My assumption, labelled as mine** — a foundation attached to a financial
institution more commonly funds nonprofits than for-profit businesses. **That is
an inference from the name and nothing else, it is not sourced, and it is not
scored against the opportunity.**

**Why the source reliability is scored so low, deliberately.** **This is exactly
the shape of the 2026-11-02 failure**: an aggregator listing, taken without the
granting body's own page, **produced a "Georgia" grant that was actually in
Pascagoula, Mississippi** (T-124, withdrawn). **An aggregator is where that
error comes from**, and the score says so rather than the brief apologising for
it afterwards.

**Score breakdown**

| Component           | Score       | Why                                                                                                           |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| Financial value     | **9 / 25**  | **$1,000–$10,000**, kept as a range. Free money, but small against DD84's needs                               |
| Accessibility       | **10 / 20** | **Neutral.** Eligibility genuinely unknown; **the adverse inference above is an inference and is not scored** |
| Time sensitivity    | **13 / 15** | **A closing deadline fourteen days out.** The only near deadline this scan found                              |
| Source reliability  | **3 / 15**  | **A single aggregator listing. Not the foundation's own page. Not fetched.** The 11-02 failure mode exactly   |
| Capital requirement | **9 / 10**  | An application                                                                                                |
| Complexity          | **5 / 10**  | **Neutral** — the application's requirements were not found                                                   |
| Risk                | **4 / 5**   | Worst case is wasted time                                                                                     |
| **Total**           | **53/100**  | **Limited or Specialized**                                                                                    |

**Next action: establish from the foundation's own page whether a for-profit may
apply, before anything else.** **That is a fetch, which T-98 blocks and A-27
would unblock** — **so this is the first scan where a pending approval has a
dated cost attached: fourteen days.**

---

### 3. TCSG apprenticeship employer incentive — score 36/100 (Information Only)

**Stated by source** — read in this run's search window (§0) via `WebSearch`;
**no page fetched.** From the Technical College System of Georgia's own pages, a
grant manual, and a regional chamber alert.

- **January 2026:** employers invited to apply for an apprenticeship incentive
  funded by a federal labour grant, supporting expansion of **Registered
  Apprenticeship Programs** in high-demand industries.
- **Eligible costs:** classroom or online training, on-the-job learning costs
  **excluding wages**, train-the-trainer, training equipment, curriculum
  development. **Priority to new programmes.**
- **A separate announcement lists automotive among target sectors.**
- **The grant manual says those funds run through 2026-06-30**, and the
  successor programme was **renamed and expanded effective July 2026**. **Its
  current window was not established.**
- **A separate federal programme** pays employers in two instalments when a new
  technician reaches **90 and 270 days** on the job.

**Why it scores as information only, despite fitting DD84's trade.** **DD84 has
no employees.** A Registered Apprenticeship Program requires an apprentice to
employ. **That is a known gate, not an unknown one**, and the accessibility
score reflects a fact rather than a gap.

**It is recorded rather than dropped for one reason:** **T-166 records that
"staff training as a named service" is one of four capabilities DD84 has offered
in writing to thirty-two companies and has never priced.** **A programme that
funds curriculum development and train-the-trainer activity points at that
unpriced capability from the other direction.** **No claim is made that the two
connect** — only that both are on the record and nobody has looked at them
together.

**Score breakdown**

| Component           | Score       | Why                                                                                                                                  |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Financial value     | **12 / 25** | **Neutral.** Per-employer amount not established for the current programme                                                           |
| Accessibility       | **3 / 20**  | **DD84 has no employees and the programme requires an apprentice.** A known gate                                                     |
| Time sensitivity    | **7 / 15**  | **Neutral.** Predecessor funds expired 2026-06-30; successor window unconfirmed                                                      |
| Source reliability  | **6 / 15**  | TCSG's own pages appeared and **none was fetched**; the automotive-sector fact came from search synthesis of a separate announcement |
| Capital requirement | **3 / 10**  | Requires hiring a person                                                                                                             |
| Complexity          | **3 / 10**  | Registering an apprenticeship programme is a multi-step process with a federal department                                            |
| Risk                | **2 / 5**   | Committing to employ somebody on a grant's timing                                                                                    |
| **Total**           | **36/100**  | **Information Only**                                                                                                                 |

## 2. Found and NOT scored, with reasons

| Candidate                                                             | Why not scored                                                                                                                                                                      |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Invest Atlanta small-business grant**, up to $50,000 rolling        | **Geography.** It is an Atlanta city programme; DD84 is roughly seventy miles east of it on the owner's own account                                                                 |
| **Go Global Georgia export grant**                                    | **Closed 2026-09-01**                                                                                                                                                               |
| **A Decatur downtown business grant**                                 | **Closed 2026-08-30**                                                                                                                                                               |
| **A Georgia–Tennessee competition**                                   | **Closed 2026-10-26**                                                                                                                                                               |
| **Federal women's business centre modernisation grant**               | **DD84 is not a women's business centre.** Not an eligibility judgement about the owner — the applicant must _be_ such a centre                                                     |
| **A county small-business grant surfaced by the county-level search** | **It is in New York.** Excluded by the search itself, and recorded here because **this is the second scan running in which a county-name search returned the wrong state** — see §5 |
| **NIGP code 99219**                                                   | **Not an opportunity. It is a classification code** — see §4                                                                                                                        |

## 3. Carried forward — status this week

| Entry                                | Last score    | Status this run                                                                                                |
| ------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------- |
| **GA@WORK Marketplace registration** | **64/100**    | **Unchanged and still the highest on the books. Materially more actionable — §4.** T-160 still with the owner  |
| **Georgia SSBCI credit guaranty**    | **40/100**    | **Not re-scored.** Nothing new found; DCA's own documents still conflict on limits and still cannot be fetched |
| **Rural Zone 2027 designation**      | —             | **Still closed** (2026-08-14). No later cycle published                                                        |
| **SBA microloan via a CDFI**         | —             | **Not re-searched this run.** Carried, not refreshed — said plainly rather than implied current                |
| **Jackson County Chamber grant**     | **WITHDRAWN** | Remains withdrawn. **The page was in Mississippi** (T-124)                                                     |

## 4. The most useful thing this scan found is a five-digit number

**NIGP code 99219 — "Automotive and Road Equipment Testing and Calibration
Services."** Found in a City of Atlanta solicitation's classification codes
(read in this run's search window via `WebSearch`; not fetched).

**It matters because T-160 has been waiting on exactly this.** The GA@WORK
Marketplace supplier registration — **the highest-scoring opportunity DD84 has**
— carries a sub-decision the 2026-11-10 scan recorded as open: **which NIGP
codes to register under.** **There is a code that names DD84's trade almost
exactly**, and until today the record did not know it existed.

**This does not re-score T-160** — the code does not change the opportunity's
value, only the cost of acting on it. **T-193 raised** to carry the code to
whoever fills the form.

## 5. Two negative findings worth as much as the positive ones

**Every Georgia public-fleet solicitation this scan found has already closed.**
Heavy-duty fire-rescue fleet maintenance and diagnostics, due **2026-04-30**;
light-duty fleet repair, **2026-04-24**; a county fleet maintenance bid with an
**engine-diagnostic labour-rate line item**, **2026-04-10**; fleet asset
maintenance and repair, **2026-06-03**; police fleet automotive repair,
**2026-09-15**.

**That is five Georgia public bodies buying vehicle diagnostics between April
and September 2026, and DD84 saw none of them.** **None was found to mention ECU
calibration specifically** — that is a real limit on the fit and is not
overstated here. **But a line item for engine-diagnostic labour rates is the
business DD84 is in**, and the channel that would have surfaced these is the one
sitting unactioned as T-160.

**T-195 raised.** **This is the argument for T-160 that T-160 has been missing:
not "registration is generally worthwhile" but "five of them went past this
year."**

**And a second scan in a row returned another state for a county-name query.**
The 11-02 scan scored a Mississippi grant as Georgia's (T-124). This run's
county search surfaced a programme in New York. **It was caught by the search
layer and never reached scoring** — **but the lesson is that county names are
not unique and a county-level query needs the state asserted in the result, not
in the question.** **The method already holds; this run records that it was
tested again and held.**

## 6. What this scan could not do

| Limit                                                          | Effect                                                                                                                              |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **No page could be fetched** — `allowed_hosts` is empty (T-98) | **Every source-reliability score is capped.** Sixth consecutive scan. **A-27 pending**                                              |
| **No primary deadline could be read at source**                | **Georgia's Own at 2026-11-30 is fourteen days away and unverifiable from here**                                                    |
| **DD84's own county is not recorded anywhere** (T-161, T-164)  | **The top-ranked opportunity cannot be assessed for eligibility**                                                                   |
| **No Supabase tool was called**                                | **A flat prohibition for this routine**, and separately **T-187's project must not be touched: reading it would count as activity** |
| **Nothing in `docs/growth/` was read or written**              | Rev's registers are marketing proposals, not this scan                                                                              |
| **Nothing here becomes a Ledger record**                       | **This is DD84 looking for DD84's opportunities.** The Ledger is a separate business in a separate repository                       |

## 7. Top three, deadlines, and the decision

**1. JDA Turntable Revolving Loan Fund — 55/100. Deadline: not confirmed.**
**$3,001–$25,000 at 2% over 30 months.** **Blocked on T-164: nobody can say
which county DD84's business address is in, and that is the first eligibility
rule.**

**2. Georgia's Own Foundation Grant — 53/100. Deadline: 2026-11-30, fourteen
days.** **$1,000–$10,000.** **Eligibility for a for-profit is unverified and
cannot be verified from here.**

**3. TCSG apprenticeship employer incentive — 36/100. Deadline: not confirmed.**
**Recorded, not recommended** — DD84 has no employees and the programme needs an
apprentice.

**The decision the owner needs before the next scan: what county is DD84's
business address in?** **T-164 has asked since 2026-11-12.** It looked like
bookkeeping. **This week it became the gate on the best-scoring new opportunity
of the month**, and **it is one sentence to answer.**

## 8. Run times

**Started 2026-11-16T11:26:01Z. Finished 2026-11-16T11:30:15Z.** **Both read
from the clock, neither estimated (T-116).** The searches ran inside that span;
**no per-search time is claimed.**
