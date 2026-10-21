# DD84 operating record

This directory is the operating record for **Torque**, the DD84 operations
execution agent defined in `.claude/agents/torque.md` and specified in
`docs/DD84-OPERATIONS-AGENT.md`.

It exists because of one failure mode the specification names directly: agent
output that stays in a conversation is not operational. Section 3 requires agent
findings to be converted into "traceable tasks rather than isolated
conversations", and section 9 requires "one authoritative operating record even
when information originates in multiple systems". A chat transcript is neither.
These files are.

---

## The three files

| File               | Spec section       | Answers                                                             | Write mode                                      |
| ------------------ | ------------------ | ------------------------------------------------------------------- | ----------------------------------------------- |
| `TASK-REGISTER.md` | §4 task standard   | What work exists, who owns it, what it is waiting on, what it costs | Live document — statuses are edited in place    |
| `APPROVALS.md`     | §9 approval record | What the owner was asked, what they answered, and what limits apply | Append a packet; edit only the response block   |
| `OPERATING-LOG.md` | §9 execution log   | What was actually done, by which tool, with what evidence           | **Append-only** — never edit or delete an entry |

They are deliberately three files rather than one. A task changes status many
times; an approval is answered once and then becomes history; an execution
record must never change at all. Mixing those write modes in one file is how
audit trails get quietly rewritten.

### How they link

```
TASK-REGISTER  T-06 ──approval class E──►  APPROVALS  A-03  ──authorises──┐
      ▲                                                                   │
      └────────────evidence: OL-0003, OL-0004 ◄──── OPERATING-LOG ◄───────┘
```

- Every task with an approval class above **A** names the approval ID that
  authorised it, or reads `awaiting A-nn`.
- Every approval names the task IDs it covers and the actual result once
  executed.
- Every log entry names the task ID it advanced and the evidence — a commit
  hash, a confirmation number, a URL, a test output.

A task may not move to **Done** unless there is a log entry with evidence. If
the evidence cannot be obtained, the status is **In Verification**, never Done.
That is spec §14, and it is the rule these files exist to make enforceable.

---

## Statuses

Task statuses, in the order a task normally travels:

| Status                | Means                                                                               |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Backlog**           | Captured and real, not yet scheduled.                                               |
| **Planned**           | Scoped with steps, tools and a success test; ready to start.                        |
| **Awaiting Approval** | Packet submitted; execution is blocked until the owner answers.                     |
| **Awaiting Owner**    | Waiting on something only the owner can do or say that is not a packet.             |
| **Blocked**           | Blocked by a dependency that is not an approval — access, a payment, a third party. |
| **In Progress**       | Being executed now.                                                                 |
| **In Verification**   | Executed, but the result has not been confirmed in the destination system.          |
| **Done**              | Verified in the destination system, with evidence recorded in the operating log.    |
| **No Action**         | Deliberately not doing it, with the reason recorded. Not deleted.                   |
| **Accepted Risk**     | The owner accepted the exposure, in a recorded decision. Nothing further to do.     |

Done, No Action and Accepted Risk are terminal; every other status is open work.
`docs/ops/tools/ops.mjs check` rejects a status not in this table.

Approval statuses: **Pending**, **Approved**, **Approved with changes**,
**Deferred**, **Rejected**, **Expired**, and — as A-12 and A-13 record —
**Accepted** and **Closed**.

---

## The routine contract

Every routine in `.claude/commands/dd84-*.md` obeys the same contract. The
individual command files restate the parts specific to them; this is the shared
core, and it is what makes the routines safe to run unattended.

0. **Confirm the checkout before writing anything.** Run
   `node docs/ops/tools/ops.mjs verify-checkout`. It fetches
   `claude/claude-md-docs-cqvhy6` and confirms all three: `HEAD` equals
   `origin/claude/claude-md-docs-cqvhy6`, **no `src/` directory exists**, and
   **no `package.json` exists**. It prints one line and exits 0. Exit 2 means
   the wrong tree: write nothing, run the `git reset --hard` it prints, and run
   the check again. Where `node` is unavailable, make the same three checks by
   hand.

   On 2026-10-08 a container reset left a branch of this exact name pointing at
   a `main` commit with the whole stale Georgia Opportunity Ledger tree checked
   out, **and a clean `git status`** — which is indistinguishable from a correct
   checkout. `src/` and `package.json` are in that tree and in no clean checkout
   of this branch, so their absence is the test.

   **State the result in the run's `OPERATING-LOG.md` entry** — paste the line
   the check prints, which names the tip commit and both absent markers. **An
   unrecorded check is indistinguishable from a skipped one.** No brief between
   2026-10-08 and 2026-10-14 recorded this check in either form, so whether any
   of them performed it cannot be established from the record, which is the same
   defect in miniature as a green Routine run that committed nothing (T-27).

   **Do not test this with a tracked-file count.** The four scheduled Routine
   prompts said "28 tracked files" from 2026-10-08; briefs accumulate about two
   per weekday and the count passed 38 by 2026-10-13, so the check failed on
   every run that was in fact correct. **A guard that always fails is a guard
   that gets ignored** — and this one exists to catch the one failure mode that
   looks like success. The guard belongs here, in version control, rather than
   duplicated across four trigger prompts that only the host session can edit.

1. **Class A only.** Every routine observes, calculates, drafts and reports. No
   routine sends, publishes, charges, refunds, deploys, deletes or changes a
   live system. Anything a routine finds that requires such an action becomes an
   approval packet in `APPROVALS.md`, not an action.
2. **A missing connector degrades a section; it never invents one.** If a
   connector is absent from the session, errors, or returns nothing, the routine
   writes `Not available this run — <connector>: <reason>` in that section and
   continues. It does not estimate, does not carry forward a previous run's
   number as if it were current, and does not infer a figure from another source
   without labelling it an inference.
3. **Numbers carry their source.** Every figure in a routine output names the
   system it came from and the timestamp of the read. A number without a source
   is a defect.
4. **Every run writes.** A routine that produces no output file still appends a
   run entry to `OPERATING-LOG.md`, including a run that found nothing. "Nothing
   to report" is a finding; silence is a gap.
5. **Every run reconciles.** Before reporting, a routine reads the current
   `TASK-REGISTER.md` so that it neither duplicates an existing task nor reports
   an item already closed.
6. **Uncertainty is stated, not smoothed.** Where a routine is unsure whether an
   item is a duplicate, whether a payment cleared, or whether a page is
   genuinely broken, it says so and proposes the check that would resolve it.
7. **Derived numbers are generated, never typed.** The register's counts line,
   the approvals status board and its "with the owner" line are computed by
   `docs/ops/tools/ops.mjs`, and so is every new ID: take it from
   `ops.mjs next-id T`, `next-id A` or `next-id OL` at the moment the heading is
   written — never from a footer, a previous run or memory. **Before committing,
   run `ops.mjs sync`, then `ops.mjs check`.** Commit when the check reports no
   errors; an error this run cannot fix is named in the run's log entry, not
   left for the next reader to find. Hand-kept tallies drifted nine times and
   log IDs collided seven times before this rule existed (OL-0034, OL-0038,
   OL-0059).
8. **A date is a proposal unless the world enforces it.** A due date Torque sets
   is a proposal, and nobody has agreed to it. A deadline something outside this
   record will act on — a platform's notice, a renewal, an agency's cut-off — is
   written in the task's own section as
   `**Hard deadline** YYYY-MM-DD — <who enforces it>`, from the source that
   states it. **Never mark a proposal hard.** `ops.mjs due` and `ops.mjs queue`
   read both kinds, so the dated items stop being buried under the proposals.

### Where routine output goes

| Output                      | Destination                                 |
| --------------------------- | ------------------------------------------- |
| The report itself           | `docs/ops/briefs/YYYY-MM-DD-<routine>.md`   |
| New or changed tasks        | `TASK-REGISTER.md`                          |
| Anything needing a decision | `APPROVALS.md` as a packet in the §7 format |
| The record of the run       | `OPERATING-LOG.md`, appended                |

Routine reports in `briefs/` are outputs, not sources. When a brief and the
register disagree, the register is controlling — spec §3 source hierarchy.

---

## Scheduling

Routines are invoked as slash commands (`/dd84-daily-brief`) or fired by a
scheduled trigger the **owner** configures. Torque does not create its own
schedules; an agent that can schedule its own recurring execution has escaped
the approval boundary in a way the spec does not contemplate.

Suggested cadence, from spec §16 — the owner sets the actual schedule:

| Routine                  | Cadence                 | Spec §16 routine                  |
| ------------------------ | ----------------------- | --------------------------------- |
| `/dd84-daily-brief`      | Each business morning   | Daily command brief               |
| `/dd84-inbox-intake`     | Twice each business day | Daily inbox and lead intake       |
| `/dd84-followup`         | Each business day       | Customer follow-up engine         |
| `/dd84-site-monitor`     | Daily                   | Website and checkout monitor      |
| `/dd84-cash-review`      | Weekly                  | Weekly revenue and cash review    |
| `/dd84-opportunity-scan` | Weekly                  | Weekly Georgia Opportunity Ledger |

Spec §16 lists two further routines — the weekly marketing opportunity scan and
project status control — that are **not yet built as commands**. They are
tracked as T-24 and T-25 in the register rather than left implied.

**What actually fires, as of 2026-10-21:** the daily brief and one intake run
each weekday, the cash review on Fridays and the opportunity scan on Mondays.
`/dd84-followup` and `/dd84-site-monitor` have no schedule, and intake runs once
a day rather than twice — T-23 carries the proposed additions for the owner.

---

## The tool

`docs/ops/tools/ops.mjs` does the record's arithmetic. It has no dependencies
and needs no `package.json` — whose absence is the checkout guard's marker.

| Command                | Answers                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `verify-checkout`      | Contract item 0. Exit 2 on the wrong tree                      |
| `check`                | Where the three files disagree with themselves or each other   |
| `sync`                 | Rewrites every derived value; `--check` only reports staleness |
| `next-id T`, `A`, `OL` | The next free ID, computed from the headings right now         |
| `queue`                | What is waiting on the owner, in the order to take it          |
| `due`                  | Past-due work, with hard deadlines kept apart from proposals   |

Run as `node docs/ops/tools/ops.mjs <command>`. Its tests:
`node --test docs/ops/tools/record.test.mjs`. Details in `tools/README.md`.
