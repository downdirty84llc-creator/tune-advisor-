# `docs/ops/tools` — the operating record's arithmetic

`ops.mjs` reads `TASK-REGISTER.md`, `APPROVALS.md` and `OPERATING-LOG.md` and
does the work that sessions used to do by hand and get wrong: counting,
numbering, checking cross-references, and telling a real deadline from a
proposed one. It has no dependencies and needs no `package.json`, so it runs in
any session that has `node`, and it does not trip the checkout guard.

**Why it exists.** Every derived value in the record was typed by a person or an
agent and every one drifted: the register's counts line nine times, log IDs
seven times, and the approvals board carried packets as Pending after the owner
had answered them. The record's own conclusion, three times over (OL-0034,
OL-0038, OL-0059), was that the fix had to be structural — stop storing a
derived value by hand. This is that fix.

---

## Commands

```bash
node docs/ops/tools/ops.mjs verify-checkout   # contract item 0; exit 2 on the wrong tree
node docs/ops/tools/ops.mjs check             # where the record disagrees with itself; exit 1 on errors
node docs/ops/tools/ops.mjs sync              # rewrite the derived values; --check to only report
node docs/ops/tools/ops.mjs next-id OL        # also T, A, S
node docs/ops/tools/ops.mjs queue             # what waits on the owner, in order
node docs/ops/tools/ops.mjs due               # past-due work, hard deadlines apart
```

`queue` and `due` take `--today YYYY-MM-DD` (default: today, UTC) and `--json`.
`queue` takes `--limit N`. Everything takes `--root DIR`.

Only `sync` writes, and it writes only derived values: the counts paragraph
under the register's summary table, the approvals board's Status column and any
missing rows, the "packets are with the owner" line, and the log footer — which
no longer stores a next ID at all.

## What `check` checks

| Code                   | Meaning                                             | `sync` fixes |
| ---------------------- | --------------------------------------------------- | ------------ |
| `REG-DUPLICATE`        | A task ID appears twice in the summary table        | no           |
| `REG-STATUS`           | A status that is not in `docs/ops/README.md`        | no           |
| `REG-NO-DETAIL`        | A summary row without a `## T-nn —` section         | no           |
| `REG-NO-ROW`           | A `## T-nn —` section without a summary row         | no           |
| `REG-COUNTS`           | The counts line disagrees with the table            | yes          |
| `REG-APPROVAL-REF`     | A task cites an `A-nn` or `S-nn` with no packet     | no           |
| `REG-DONE-NO-EVIDENCE` | A Done task no log entry mentions (spec §14)        | no           |
| `APR-BOARD-MISSING`    | A packet with no row on the status board            | yes          |
| `APR-BOARD-ORPHAN`     | A board row with no packet                          | no           |
| `APR-BOARD-STATUS`     | Board and packet disagree on pending versus decided | yes          |
| `APR-OWNER-LINE`       | The "with the owner" line names the wrong packets   | yes          |
| `LOG-DUPLICATE`        | Two log entries share an ID                         | no           |
| `LOG-GAP`              | A missing log ID — a warning, not an error          | no           |
| `LOG-FOOTER`           | The log footer stores a next ID                     | yes          |

The checks are narrow on purpose. A guard that fires on a correct record gets
ignored, which is the lesson of the 28-file checkout check (T-69). So a packet
recorded as Closed and a board row saying Approved are not flagged — both mean
decided — but Pending against Approved is, because that is the drift that kept
A-05 "awaiting owner" for six weeks after he answered.

A packet's status comes from its **Response** block, the one block the rules let
an answer edit. Some older packets keep a stale `**Status: PENDING` line above
an APPROVED response; the response wins. A packet with no response block falls
back to its status line.

## Conventions the tool reads

- **Statuses** are the ones in `docs/ops/README.md`. Bold and a parenthetical
  are fine: `**No Action** (accepted)` reads as No Action.
- **A hard deadline** — a date something outside this record will enforce — is
  written in the task's own section, from the source that states it:

  ```
  - **Hard deadline** 2026-10-30 — Supabase's final notice of 2026-10-20.
  ```

  A bare date in the summary table's Due column is Torque's proposal.
  `hard YYYY-MM-DD` in the Due cell also works, but rewrites the table's
  padding, so the section form is preferred.

- **"Known since"** in `queue` is the date of the first log entry that mentions
  the item — the register stores no creation date, and this is the earliest date
  the record can prove.

## Tests

```bash
node --test docs/ops/tools/record.test.mjs
```

The fixtures copy the real files' awkward shapes — a count split across a line
break, a stale status line above an approved response, a log heading with no
date. One test parses the live record and asserts only that it parses: whether
the record is _consistent_ is `check`'s job, not a test's, so a drifted record
never turns the test suite red.

Each guard was shown to fail before it was trusted: six deliberate bugs planted
in a copy of `record.mjs` — reading the status line before the response,
counting a passed hard deadline twice, ignoring `package.json`, treating a log
gap as an error, letting the agent's tasks into the owner's queue, reading a
wrapped "with the owner" line as one line — were each caught by at least one
test (OL-0060). The last of those was a real bug first, found when Prettier
wrapped the line on this record.
