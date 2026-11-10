---
description:
  DD84 Georgia opportunity scan — find, validate, score and rank real estate,
  funding, commercial, partnership and small-business opportunities. Scores
  candidates; publishes nothing.
---

# /dd84-opportunity-scan

You are **Torque**. Run the weekly **DD84** Georgia opportunity scan from
`docs/DD84-OPERATIONS-AGENT.md` §16, against §8.8. Read
`.claude/agents/torque.md` and `docs/ops/README.md` first.

**Routine class: A — observe and prepare.** It researches, validates and scores.
**It does not publish a record, contact a source, submit an application, or
commit any capital.**

## Objective

Produce a ranked, validated list of Georgia opportunities with an honest score
and a next action for each — realistic revenue and cash preservation first,
strategic fit second.

## The hard boundary with the other business

> **Corrected 2026-10-13.** This section used to open "This repository _is_ the
> Georgia Opportunity Ledger" and sent the routine to the Ledger's production
> Supabase to deduplicate. **Both were false from 2026-09-25**, when the Ledger
> source tree was deleted from this branch and the application moved to
> `downdirty84llc-creator/georgia-opportunity-ledger` — see `CLAUDE.md` §0 and
> OL-0016. The four scheduled Routine prompts had been patched to say the
> opposite, so **the prompt and the file a run is told to "follow exactly"
> contradicted each other**, and the file was the one in version control.

**This scan is DD84 looking for its own opportunities.** The Georgia Opportunity
Ledger is a **different business, in a different repository**, which happens to
sell Georgia opportunity intelligence as a product. The two are deliberately
separate (`CLAUDE.md` §0).

- **Nothing this scan finds becomes a Ledger record.** It is not editorial input
  for that product, not a draft for its workflow, and not a row for its
  database.
- **Do not read or write the Ledger's database, repository or deployment.**
  There is no deduplication step against it. Deduplicate against
  `docs/ops/TASK-REGISTER.md` and prior briefs in this repository, which is the
  whole of the universe this routine knows.
- **If a candidate looks commercially interesting to the Ledger as a business**,
  that is a growth observation and belongs to Rev in `docs/growth/`, raised as a
  note — never written there by this routine, which must not write across the
  two records.

**This routine finds; it never commits.** It produces candidate records in a
markdown brief and stops. Turning a candidate into an application, an offer or a
spend is a separate, human act behind an approval packet — an agent that could
both find an opportunity and commit to it would make the scan unsafe to run
unattended, which is the one property that matters here.

## Sources and exact tools

| Source                 | Reads                                                                                                     | Tools                                                                     | If unavailable                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------ |
| Public Georgia sources | Grants, RFPs, funding programs, surplus property, economic development notices, county and state postings | `WebSearch`, then `WebFetch` on the primary source                        | Report which source classes went unchecked |
| Operating record       | Prior candidates, prior decisions, prior no-actions — **the only duplicate check there is**               | Read `docs/ops/TASK-REGISTER.md`, `docs/ops/briefs/*-opportunity-scan.md` | Stop                                       |
| Scoring method         | The published 100-point method, so scores are comparable                                                  | **The Scoring section below.** This file is the specification             | Never unavailable — it is in this file     |
| Gmail                  | Opportunity notices, newsletters, broker and agency mail                                                  | `mcp__Gmail__search_threads`                                              | Note as unchecked                          |
| Google Drive           | Owner criteria, prior due diligence, financing assumptions                                                | `mcp__Google_Drive__search_files`, `read_file_content`                    | State that criteria could not be confirmed |

**Never call any `mcp__Supabase__*` tool in this routine.** The only Supabase
project on this account belongs to the Georgia Opportunity Ledger, a different
business; this scan has no business reading it and no business writing it. That
is a flat prohibition, not a read-only allowance — **an earlier version of this
file granted SELECT access and it should not have.**

## Scoring

Use the method below exactly. **The components and maxima are fixed here**,
because scores are compared across candidates and across weeks and a method that
drifts makes every past score meaningless:

financial value 25 · accessibility 20 · time sensitivity 15 · source reliability
15 · capital requirement 10 · complexity 10 · risk 5 — total 100.

### The classification bands

| Total  | Band                       |
| ------ | -------------------------- |
| 85–100 | **Immediate Action**       |
| 70–84  | **Strong Opportunity**     |
| 55–69  | **Worth Investigating**    |
| 40–54  | **Limited or Specialized** |
| 0–39   | **Information Only**       |

> **Recovered 2026-11-09, not invented.** Until today this file said "and the
> classification bands that follow from the total" and never stated them. **Four
> consecutive scans reported the gap and correctly refused to invent a
> threshold**, ranking entries by total and leaving them unlabelled.
>
> **The gap was made by the 2026-10-14 edit to this file** (OL-0045). That edit
> removed the pointer to `src/lib/scoring/score.ts`, which had defined the
> bands, and declared this file the specification — **cutting the source while
> keeping the promise.** The thresholds above are read from
> `CLASSIFICATION_BANDS` in that same file on `main` in
> `downdirty84llc-creator/georgia-opportunity-ledger`, today.
>
> **Why taking them from there is consistent and not a cross-business leak.**
> The components and maxima in this file already came from that method; this
> completes the method from the same place rather than guessing. **No Ledger
> data was read and none is read by this routine** — a published scoring formula
> is not the other business's records. **The owner may overrule any threshold**;
> until then these are the bands.

### Time sensitivity — higher means more urgent

**15 is a closing deadline, limited supply, or first-come-first-served. 3 is a
rolling programme with no deadline** — not 0, because an evergreen programme is
still actionable and zeroing it would push genuinely useful finds below their
real worth.

> **This overturns the reading used on 2026-11-02**, which took higher to mean
> "the window better favours acting now" — under which a rolling programme
> scored **high**. Under this rule it scores **3 of 15**. That scan **stated its
> reading explicitly so it could be overruled** (T-125), which is why the
> correction is cheap. **Scores from 2026-11-02 and earlier are not comparable
> with scores from today on this axis**, and the next scan should say so rather
> than rank old and new entries against each other as though they were.
> Direction read from `scoreTimeSensitivity` in the canonical file, same source
> as the bands.

Three rules this routine holds to:

- **Unknown is not zero.** An unresearched capital requirement scores the
  neutral middle, not zero. A zero is a claim that the value is bad; a neutral
  score is a claim that it is unknown. They are different, and the difference
  changes the ranking.
- **Ranges stay ranges.** Report "$250,000 – $400,000", never a midpoint. A
  midpoint implies a precision nobody has.
- **Separate source fact from agent assumption.** Spec §8.8 requires it. Every
  candidate's record has a **Stated by source** block and an **Assumed by
  Torque** block, and they never merge.

## Procedure

1. **Discover.** Search the source classes above for anything new or changed
   since the last scan. Note the date of the last scan from the operating log.
2. **Validate — the step this routine lives or dies on.**
   - Fetch the **primary** source. A newsletter mentioning a grant is not the
     grant; find the issuing body's own page.
   - Confirm the deadline on that primary source, and record the date you read
     it. A deadline from a secondary source is an assumption.
   - Confirm eligibility against DD84's actual profile — entity type, county,
     industry, size, prior awards.
   - Check it is not already in `TASK-REGISTER.md` or a prior scan brief. **That
     is the whole duplicate check** — there is no database to query. A duplicate
     merges only on verified identity, and never destroys the earlier record.
   - If the source is dead, expired or contradicts itself, that is the finding.
3. **Organize.** One candidate record per opportunity, in the shape §9 requires:
   source, value, probability, deadline, requirements, cost, score, owner
   decision, next action.
4. **Score** with the method above. Show the component breakdown, not just the
   total — a total nobody can audit is a number nobody should act on.
5. **Rank** by realistic revenue and cash preservation, then strategic fit, then
   owner effort. State what each candidate would actually take from the owner.
6. **Create due diligence tasks** for anything scoring **55 or above** — the
   Worth Investigating band and up — with the deadline as the due date and a
   reminder set earlier than the deadline, not on it. **The threshold is stated
   as a number because the old wording, "above the 'worth investigating' band",
   read either as 55 or as 70** depending on whether "above" included the band
   itself.
7. **Prepare a packet** for anything requiring outreach, an application, a
   commitment or a spend. That is where this routine stops.
8. **Document.** Update the register, append the run entry.

## Output format

Write to `docs/ops/briefs/YYYY-MM-DD-opportunity-scan.md` and print in the
reply:

```
# DD84 Georgia opportunity scan — <date>
Run <UTC start, read> to <UTC finish, read>. Since: <date of last scan>. Sources searched: <list>.
Not searched: <list>.
New: <n>. Updated: <n>. Expired or withdrawn: <n>. Duplicates merged: <n>.

## Ranked candidates
| # | Opportunity | Type | County | Value | Deadline | Score | Band | Owner effort | Next action | Task |

## Candidate records
For each, in rank order:

### <name> — score <n>/100 (<band>)
**Stated by source** — issuer, primary URL, deadline as published, eligibility
as published, stated value or range, requirements. Read at <UTC>.
**Assumed by Torque** — every inference, each labelled, with what would confirm it.
**Score breakdown** — financial value n/25, accessibility n/20, time sensitivity
n/15, source reliability n/15, capital requirement n/10, complexity n/10,
risk n/5. Any component scored neutral for lack of information says so.
**Why it ranks here** — one paragraph.
**Next action** — the specific due diligence step, its task ID, and whether
proceeding needs a packet.

## Changed since last scan
Deadline moved, terms changed, programme closed. Old value → new value → source.

## Expired or withdrawn
Kept, not deleted. The audit trail survives the opportunity.

## Conflicts and doubts
Where two sources disagree, or where the primary source could not be reached.

## Not checked this run
```

> **Both timestamps are read, never estimated.** Take the start time from the
> clock (`date -u`) at the start of the run and the finish time from the clock
> when the output file is written. **Do not state a range whose second half you
> did not read**, and do not infer a finish time from how long the run felt.
> Every brief from 2026-08-06 to 2026-11-03 stated a run-end time it had
> estimated (T-116). **One read timestamp is worth more than a plausible span**:
> if only the start was read, print only the start.

## Where it writes

- `docs/ops/briefs/YYYY-MM-DD-opportunity-scan.md`
- `docs/ops/TASK-REGISTER.md` — a due diligence task per qualifying candidate,
  in the `real estate`, `finance` or `ops` workstream, with the deadline as the
  due date. **Not the `ledger` workstream** — that one tracks the Georgia
  Opportunity Ledger as a business, and these are DD84's own opportunities.
- `docs/ops/APPROVALS.md` — a packet for any outreach, application, offer,
  commitment or spend.
- `docs/ops/OPERATING-LOG.md` — the run entry, naming the source classes
  searched, so the next run knows what was and was not covered.

## Never without approval

- Contacting a source, agency, broker, seller or partner. Class C.
- Submitting an application, expression of interest or offer. Class E and G.
- Committing capital, signing anything, or accepting terms. Class E and G.
- Touching the Georgia Opportunity Ledger's database, repository or deployment.
  **Not an approval question — a different business, and out of bounds for this
  routine entirely.**
- Presenting an assumption as a source fact. Not an approval question — simply
  never do it.

## When a connector is unavailable

Name it. If a **primary source** could not be fetched, the candidate is still
listed but its source reliability component is scored low **for that reason**,
stated in the breakdown, rather than being scored as if the source had been
read.

Never score an opportunity you could not open. Never state a deadline you have
not seen on the issuing body's own page.

## Done test

Every candidate separates stated fact from assumption; every score shows its
components and its neutrals; every deadline names the page and time it was read
from; no Supabase tool was called and nothing touched the other business;
qualifying candidates have tasks with the deadline as the due date.
