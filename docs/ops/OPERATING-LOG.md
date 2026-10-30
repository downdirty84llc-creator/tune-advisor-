# DD84 operating log

Append-only execution record, in the fields required by
`docs/DD84-OPERATIONS-AGENT.md` §9: timestamp, action, tool, source, operator,
before/after state, evidence, error and remediation.

**Rules.**

- **Append only.** No entry is ever edited or deleted, including one that
  records a mistake. A wrong entry is corrected by a later entry that references
  it — the same discipline the `audit_logs` table enforces in the product, where
  there is deliberately no update or delete policy for anyone.
- One entry per action that changed something, plus one per routine run — a run
  that found nothing still gets an entry. Silence in this file must mean "did
  not run", never "ran and found nothing".
- Evidence is a commit hash, a confirmation number, a URL, a query result or
  real command output. "Completed successfully" is not evidence.
- Timestamps are UTC.
- Entry IDs are sequential: `OL-nnnn`.

**Seeded 2026-08-06.** Entries OL-0001 to OL-0006 are reconstructed from
`git log` on `claude/claude-md-docs-jjveuq`; their timestamps are the real
commit timestamps and the evidence is verifiable with `git show`. The owner's
brief described five landed commits; the branch carries six since the platform
build. The sixth, `3d22acc`, was a small follow-up correcting the documentation
written in `8337e41`. It is logged as it is rather than as it was described.

---

## OL-0001 — Adopt the DD84 specification into the repository

- **Timestamp** 2026-07-31T10:55:18Z
- **Task** T-01, T-02, T-03 · **Approval** A-01
- **Action** Added `docs/DD84-OPERATIONS-AGENT.md`, `CLAUDE.md` and
  `.claude/agents/torque.md`.
- **Tool** Local file write; `git commit`
- **Source** Owner-supplied PDF specification, July 2026
- **Operator** Torque (agent)
- **Before** No governance documents in the repository; no agent definition.
- **After** Three files, 1,106 lines added.
- **Evidence** Commit `6468118`
- **Error** None
- **Remediation** n/a

## OL-0002 — Correct documentation that had drifted away from the code

- **Timestamp** 2026-07-31T11:17:45Z
- **Task** T-04, T-05 · **Approval** A-02
- **Action** Corrected README, ARCHITECTURE, MILESTONES and RUNBOOK; set the
  `requiresReview` flags truthfully in `src/lib/legal/documents.ts`.
- **Tool** Local file edit; `git commit`
- **Source** Agent review of documented claims against the implementation
- **Operator** Torque (agent)
- **Before** Documentation asserted behaviour the code did not have; legal
  documents did not declare their review state.
- **After** Five files, +122/−57. Seven legal documents now render the "awaiting
  legal review" banner.
- **Evidence** Commit `a489144`
- **Error** None
- **Remediation** The exemption claimed for three legal documents was recorded
  as an open question rather than resolved. Follow-up task T-13, packet A-06.

## OL-0003 — Exclude demo accounts from subscriber, revenue and analytics counts

- **Timestamp** 2026-07-31T17:00:01Z
- **Task** T-06, T-12 · **Approval** A-03
- **Action** Added `src/lib/analytics/sample-data.ts`; applied the exclusion to
  the admin dashboard subscriber and revenue tiles and to the
  `aggregate-analytics` job; documented the rule in CLAUDE.md.
- **Tool** Local file edit; Vitest; `git commit`
- **Source** Agent finding: `scripts/seed.ts` writes ten `is_sample` accounts
- **Operator** Torque (agent)
- **Before** Seeded demo accounts counted toward the subscriber total, MRR and
  the analytics aggregate.
- **After** Six files, +274/−27, including 13 new unit tests.
- **Evidence** Commit `1039582`; `tests/unit/analytics/sample-data.test.ts`
- **Error** None
- **Remediation** n/a. **The rendered dashboard numbers were not observed** —
  nothing here has run against a database. T-06 remains In Verification.

## OL-0004 — Normalise annual subscriptions in the MRR calculation

- **Timestamp** 2026-07-31T17:22:11Z
- **Task** T-07 · **Approval** A-04
- **Action** Extracted MRR arithmetic into `src/lib/billing/mrr.ts`; annual
  subscribers now count at a twelfth of the annual price.
- **Tool** Local file edit; Vitest; `git commit`
- **Source** Agent review of the admin revenue tile against plan intervals
- **Operator** Torque (agent)
- **Before** An annual subscriber was counted at the monthly price, overstating
  MRR.
- **After** Four files, +393/−15, including 18 unit tests.
- **Evidence** Commit `5ae44fa`; `tests/unit/billing/mrr.test.ts`
- **Error** None
- **Remediation** n/a

## OL-0005 — Security review of the API surface, and two fixes found by it

- **Timestamp** 2026-08-02T18:48:02Z
- **Task** T-09, T-08, T-06 · **Approval** S-01 (T-08, T-09), A-03 (T-06)
- **Action** Three things. (1) Replaced an interpolated PostgREST `.or()` filter
  in the opportunity detail fallback with a bound column match, exporting
  `isOpportunityId` so both lookups discriminate identically. (2) Extended the
  sample-account exclusion to the failed-payment tile. (3) Dropped the
  `tests/integration/**` glob from the Vitest include.
- **Tool** Local file edit; Vitest; `git commit`
- **Source** Agent security review of the API surface
- **Operator** Torque (agent)
- **Before** A crafted path segment was parsed as filter structure rather than
  as a value; the failed-payment tile counted sample accounts; the test config
  declared a directory that has never existed.
- **After** Seven files, +97/−14, three new tests pinning the rendered filter
  shape.
- **Evidence** Commit `8337e41`. The commit message also records which parts of
  the surface were reviewed and found correct — webhook signature verification,
  constant-time job auth, unsubscribe token length-checking, the error handler's
  opaque body, constant-message password reset, the PATCH column allowlist, the
  export rank cap and the audit-log grant chain — so they are not re-reviewed.
- **Error** None during execution.
- **Remediation** Risk of the injection was assessed and recorded as
  malformed-query rather than disclosure: the target view is already granted to
  anon, already restricted to published non-restricted rows, and carries no paid
  field. Fixed because the pattern gets copied, not because the blast radius was
  large.

## OL-0006 — Correct the test counts and integration-suite claim in CLAUDE.md

- **Timestamp** 2026-08-05T09:28:00Z
- **Task** T-10 · **Approval** S-01
- **Action** Ran the suite and wrote the real figures into CLAUDE.md; removed
  the claim of an integration suite.
- **Tool** `npm test`; local file edit; `git commit`
- **Source** Agent verification of CLAUDE.md against a real run
- **Operator** Torque (agent)
- **Before** CLAUDE.md stated counts that no longer matched, and implied
  integration coverage that does not exist.
- **After** CLAUDE.md states 179 tests in 11 files.
- **Evidence** Commit `3d22acc`
- **Error** None
- **Remediation** n/a

## OL-0007 — Build the operations control plane

- **Timestamp** 2026-08-06T19:18:00Z
- **Task** T-18, T-19, T-20, T-21 · **Approval** A-08
- **Action** Created six routine commands in `.claude/commands/`
  (`dd84-daily-brief`, `dd84-inbox-intake`, `dd84-followup`, `dd84-cash-review`,
  `dd84-opportunity-scan`, `dd84-site-monitor`); created `docs/ops/` with
  `README.md`, `TASK-REGISTER.md`, `APPROVALS.md`, `OPERATING-LOG.md` and
  `briefs/`; extended `.claude/agents/torque.md` with the §4 task fields, the
  §10 prioritisation factors and the §14 escalation table; added one additive
  subsection to CLAUDE.md §10.
- **Tool** Local file write; `npm run format`; `npm run typecheck`;
  `npm run lint`; `npm test`
- **Source** Owner instruction, 2026-08-06
- **Operator** Torque (agent)
- **Before** The agent had an identity but no runnable routines and no durable
  operating state; task and approval state lived in conversation transcripts.
- **After** Six commands and a four-file operating record on disk. **No
  connector was contacted and no live system was read or written** — this was
  entirely a repository change.
- **Evidence** The files themselves; verification output recorded in the next
  entry, **after** the commands were actually run. The register was seeded from
  `git log`, `docs/MILESTONES.md` and the owner's stated statuses; fields that
  could not be sourced from an artifact read `not recorded`.
- **Error** None
- **Remediation** T-19 is held at **In Verification**, not Done: Torque cannot
  confirm from inside the repository that the seeded register is complete. Work
  that was discussed but never touched a file leaves no trace here. Owner
  confirmation closes it.

## OL-0008 — Verify the operations control plane

- **Timestamp** 2026-08-06T19:24:49Z
- **Task** T-22 · **Approval** A-08
- **Action** Ran the verification chain over the change from OL-0007.
- **Tool** `npm run typecheck`, `npm run lint`, `npm test`,
  `npx prettier --check`
- **Source** T-22
- **Operator** Torque (agent)
- **Before** Suite green at `3d22acc`: 179 tests in 11 files.
- **After** Unchanged, as a markdown-only change should leave it.
- **Evidence** — real output:
  - `npm run typecheck` — `tsc --noEmit`, exit 0, no diagnostics.
  - `npm run lint` — `✔ No ESLint warnings or errors`. (Also emits a Next.js
    notice that `next lint` is deprecated and removed in Next.js 16 —
    pre-existing, unrelated to this change, and not acted on here.)
  - `npm test` — `Test Files 11 passed (11)`, `Tests 179 passed (179)`, duration
    1.67s.
  - `npx prettier --check` over the eleven added and modified markdown files —
    `All matched files use Prettier code style!`
- **Error** None from this change.
- **Remediation** `npm run format:check` across the whole repository fails on
  **105 pre-existing files** — the `src/` tree, the unit tests,
  `scripts/seed.ts` and `vercel.json`. Confirmed pre-existing by stashing this
  change and re-running the check against clean `3d22acc`, where
  `src/lib/scoring/score.ts` still fails. **Not fixed here** — reformatting 105
  unrelated files while landing this change is silent scope expansion. Raised as
  **T-26**.

## OL-0009 — Push the operations control plane to the working branch

- **Timestamp** 2026-08-06T19:31:00Z
- **Task** T-22 · **Approval** A-08, and CLAUDE.md §11 for the branch push
- **Action** Committed the thirteen files from OL-0007 and pushed to
  `claude/claude-md-docs-jjveuq`.
- **Tool** `git commit`, `git push`, `git fetch`, `git rev-parse`
- **Source** T-22
- **Operator** Torque (agent)
- **Before** Branch at `3d22acc`, local and remote.
- **After** Branch at `fd50a82`, local and remote. **No pull request was
  opened**, and no other branch was touched — that boundary was not crossed.
- **Evidence** — real output:
  - `git push` —
    `3d22acc..fd50a82  claude/claude-md-docs-jjveuq -> claude/claude-md-docs-jjveuq`
  - Verified in the destination rather than assumed from the push output: after
    `git fetch origin`, local `HEAD` and `origin/claude/claude-md-docs-jjveuq`
    both read `fd50a8245d5be6db8c8e928c41012b84eeb353d2`.
- **Error** None
- **Remediation** n/a. This entry itself lands in a follow-up commit, because a
  commit cannot contain its own hash — the alternative was writing the hash
  before the push and hoping, which is the exact habit this file exists to
  break.

---

## OL-0010 — Merge the Rev branch and the Torque branch into one

- **Timestamp** 2026-08-13T14:52:00Z
- **Task** T-23 · **Approval** A-09
- **Action** Merged `origin/claude/claude-md-docs-jjveuq` into
  `claude/claude-md-docs-cqvhy6`, resolved two conflicting files by hand, ran
  the verification chain, and pushed.
- **Tool** `git merge`, `git commit`, `git push`, `npm run typecheck`,
  `npm run lint`, `npm test`, `npx prettier --check`
- **Source** Owner instruction, 2026-08-13.
- **Operator** Claude (agent), acting on both agents' records
- **Before** Two divergent branches from merge base `90ba2f5`. Torque's branch
  carried `src/lib/billing/mrr.ts`, `src/lib/analytics/sample-data.ts`, admin
  fixes and 339 lines of tests that Rev's branch did not have. Rev's branch
  carried six recovered migrations, the public-client caching fix and the
  upgrade telemetry that Torque's did not.
- **After** One branch, `claude/claude-md-docs-cqvhy6`, at merge commit
  `8251ec3`, carrying both. `claude/claude-md-docs-jjveuq` is now stale and is
  an ancestor of the merged tip — nothing on it was lost.
- **Evidence** — real output:
  - Conflicts were confined to two files, `CLAUDE.md` (add/add) and
    `docs/MILESTONES.md`; all source files merged automatically.
  - `CLAUDE.md` resolved to Torque's version, then patched with the facts only
    Rev's side knew: 27 migrations rather than 21,
    `supabase/stripe-prices.live.sql`, the `docs/agents/` and `docs/growth/`
    trees, and the security note on migrations 0022–0027.
  - `docs/MILESTONES.md` resolved by combining both: Rev's Stripe-done and
    attachment-scanning items, with Torque's more precise finding that **ten**
    legal documents exist and **seven** carry `requiresReview: true`.
  - `npm run typecheck` — `tsc --noEmit`, exit 0, no diagnostics.
  - `npm run lint` — `✔ No ESLint warnings or errors`.
  - `npm test` — `Test Files 12 passed (12)`, `Tests 187 passed (187)`, duration
    1.50s. Both agents' suites run together and both pass.
  - `npx prettier --check CLAUDE.md docs/MILESTONES.md` —
    `All matched files use Prettier code style!`
  - `git push` —
    `5411c75..8251ec3  claude/claude-md-docs-cqvhy6 -> claude/claude-md-docs-cqvhy6`.
    No pull request was opened; no other branch was pushed to.
- **Error** None.
- **Remediation** The merged `CLAUDE.md` still claimed **179 tests in 11
  files**, which was true of Torque's branch alone and false of the merge.
  Corrected to **187 tests in 12 files** before committing, against the actual
  `npm test` output rather than by adding the two numbers.

## OL-0011 — Converge the schedule on one branch and retire the overlapping Routine

- **Timestamp** 2026-08-13T15:05:00Z
- **Task** T-23 · **Approval** A-09
- **Action** Updated the four Torque Routines to check out and push to the
  merged branch, and deleted Rev's weekly growth brief Routine.
- **Tool** `update_trigger` ×4, `delete_trigger` ×1, `list_triggers`
- **Source** A-09
- **Operator** Claude (agent)
- **Before** Five DD84 Routines. Four Torque Routines pulled and pushed
  `claude/claude-md-docs-jjveuq`; Rev's weekly brief pulled
  `claude/claude-md-docs-cqvhy6`. Rev's fired Mondays 11:00 UTC, 25 minutes
  before Torque's Monday opportunity scan, reporting much of the same ground.
- **After** Four Routines, all on `claude/claude-md-docs-cqvhy6`. Each prompt
  now carries a branch note explaining that jjveuq is stale, and an explicit
  instruction not to write into `docs/growth/` — the two ledgers stay separate
  on the shared branch.
- **Evidence** — real output. `list_triggers` after the change returns four DD84
  Routines, each with the merged branch in its prompt and `updated_at` on
  2026-08-10–13; `trig_014f6Hv1ccKeGHj8mZ59MB2v` returns
  `deleted trigger trig_014f6Hv1ccKeGHj8mZ59MB2v` and no longer appears. Rev's
  deleted prompt is preserved verbatim in `docs/agents/README.md` so the Routine
  can be recreated.
- **Error** None from the change itself.
- **Remediation** A separate finding, not caused here and not fixed here: the
  four Torque Routines have been firing since 2026-08-07 — most recently
  2026-08-13 at 10:25 and 10:50 UTC — and **`docs/ops/briefs/` still contains
  nothing but its README**. No routine run has ever committed a brief or an
  operating-log entry. This is precisely the failure T-23 named in advance: "a
  routine that fires but writes nothing looks like a routine that found
  nothing." Raised as **T-27**. The two firings that happened today ran against
  jjveuq, before the repoint, so the next scheduled run is the first real test.

---

## OL-0012 — Diagnose why the Routines deliver nothing

- **Timestamp** 2026-08-28T11:05:00Z
- **Task** T-27 · **Approval** none needed — Class A, reads only
- **Action** Established the root cause of four Routines firing on schedule and
  committing nothing, and raised the remedy as A-10. **Nothing was changed.**
- **Tool** `list_triggers`, `get_session` ×2, `git fetch`, `git log`
- **Source** T-27, opened 2026-08-13
- **Operator** Claude (agent)
- **Before** T-27 listed four candidate causes and confirmed none.
- **After** Root cause confirmed: the fired sessions have **no repository
  attached**. Blocked on the owner as A-10, because the fix is outside both the
  agent's authority and its tools.
- **Evidence** — real output:
  - `git log` — newest commit on `claude/claude-md-docs-cqvhy6` is `4e9342a`,
    hand-written. Nothing from any routine run, over three weeks.
  - `list_triggers` — all four fired recently and **all report
    `ROUTINE_RUN_STATUS_SUCCEEDED`**: inbox intake 2026-08-28T10:20, daily brief
    2026-08-27T10:50, opportunity scan 2026-08-24T11:25, cash review
    2026-08-21T11:21.
  - `get_session cse_01G1uzjS1oNsmD3ZCvVq8FQx` (2026-08-28 inbox intake) —
    `session_context` is `{autofix_on_pr_create, permission_mode}`. **No
    `sources`. No `outcomes`.** Usage: `cost_usd 1.7659456`,
    `output_tokens 22888`.
  - `get_session cse_01X8sfFM64UdniNEnDZJMMtx` (2026-08-27 daily brief) — same
    shape. `cost_usd 0.858726`, `output_tokens 13824`. Ran 10:50→18:25.
  - The control: `trig_01FxDef9B5snYTW42FfcMEbD`, the only Routine with
    `created_via: http_api`, **does** carry `sources` and `outcomes` — plus
    seven `mcp_connections`. The four that deliver nothing are all
    `created_via: meta_mcp`.
- **Error** None — the diagnosis completed.
- **Remediation** Not applied, and deliberately not attempted. `create_trigger`
  has no git-source parameter and `update_trigger` cannot add one, so the
  recommended fix is not merely unapproved but **outside the agent's tools**.
  Raised as A-10. Two prior hypotheses in T-27 are now dead and were struck
  rather than quietly dropped: it is not a permissions failure
  (`permission_mode: auto` on both sampled runs) and not a prompt failure (both
  runs produced a brief-sized body of work).

---

## OL-0013 — Consolidation onto the Ledger repository, and its reversal

- **Timestamp** 2026-09-09 to 2026-09-16 (recorded 2026-09-23)
- **Task** T-28 · **Approval** A-11, later narrowed by the owner
- **Action** The DD84 agent platform was copied into
  `downdirty84llc-creator/georgia-opportunity-ledger`, and then taken back out.
- **Tool** `add_repo`, `git clone`, `cp`, the verification gate, `git push`,
  `create_pull_request`, `update_pull_request`
- **Source** Owner decision 2026-09-09 that the Ledger repository was canonical;
  owner decision 2026-09-16 to split the change instead.
- **Operator** Claude (agent)
- **Before** DD84's platform here; the Ledger application ahead in its own
  repository; four modules present here and absent there.
- **After** **Unchanged here.** The platform never left. In the Ledger
  repository only the three Ledger-only modules landed.
- **Evidence** PR #2 (consolidation) closed unmerged; PR #3 (fixes) closed once
  its commit reached `main` as `a228f3d`.
- **Error** **The consolidation was the wrong call, and the error was in how it
  was put to the owner.** The question asked was which of two divergent copies
  of the Ledger was canonical. It never asked whether DD84's revenue and
  customer records belonged in another company's repository — which is what the
  change actually did. The owner approved the question that was asked. A
  CLAUDE.md added to the Ledger's `main` on 2026-09-15 by another session caught
  it, stating that the two businesses were separated deliberately and that the
  consolidation branch must not be merged without the owner saying so in as many
  words.
- **Remediation** Split and reversed on 2026-09-16 with the owner's decision.
  **This entry is being written on 2026-09-23, two weeks late**, because the
  original OL-0013 and OL-0014 were appended to the copy of `docs/ops/` inside
  the Ledger repository, on a branch that is now closed. They were never in
  DD84's own record. An operating log that lives on a branch nobody merges is
  not an operating log.

## OL-0014 — Repoint the Routines back to DD84

- **Timestamp** 2026-09-23T11:05:00Z
- **Task** T-27 · **Approval** none required — prompt text only, no schedule,
  authority or connector changed
- **Action** Corrected all four Routine prompts, which had been left pointing at
  the Ledger's repository after the consolidation was reversed.
- **Tool** `update_trigger` ×4, `git ls-tree`
- **Operator** Claude (agent)
- **Before** All four told Torque to check out the Ledger repository, read
  `.claude/agents/torque.md` and write to `docs/ops/`.
- **After** All four name `tune-advisor-`, branch
  `claude/claude-md-docs-cqvhy6`, and say explicitly not to clone, read or push
  the Ledger repository.
- **Evidence** `git ls-tree origin/main --name-only docs/` on the Ledger
  repository returns only `ACCESSIBILITY-AUDIT.md`, `ARCHITECTURE.md`,
  `MILESTONES.md`, `RUNBOOK.md`. No `docs/ops/`, no `.claude/`, no `dd84-*`
  commands. The prompts named a repository containing none of what they
  instructed the agent to read.
- **Error** **The agent's own defect, live for one week**, introduced when the
  prompts were repointed for the consolidation and not repointed back when it
  was reversed.
- **Remediation** Corrected. Two things worth keeping. It changed nothing
  observable, because the Routines cannot commit anywhere — **T-27 masked it
  completely**, and a defect visible only once another defect is fixed is the
  kind that ships. And had A-10 been completed during that week, four unattended
  sessions holding live connectors would have tried to write DD84 revenue and
  customer records into another company's repository. **The order these were
  fixed in mattered, and that was luck, not design.**

## OL-0015 — Land the Ledger-only fixes on the Ledger's main

- **Timestamp** 2026-09-23T10:58:00Z
- **Task** T-28 · **Approval** owner instruction 2026-09-23, plus the Ledger
  repository's own standing instruction to work directly on `main`
- **Action** Rebased the MRR and sample-data fixes onto the Ledger's `main`,
  which had moved 17 commits, and pushed.
- **Tool** `git rebase`, `npm ci`, the full gate, `git push`
- **Operator** Claude (agent)
- **Before** PR #3 open and conflicted.
- **After** Ledger `main` at `a228f3d`; PR #2 and #3 both closed.
- **Evidence** typecheck silent; lint clean; `format:check` clean;
  `schedules:check` 16 files match; `npm test` 312 passed in 28 files;
  `npm run build` compiled. `HEAD` and `origin/main` both
  `a228f3dedb255cf118146e1224c5302f59012c34`, checked in the destination.
- **Error** None. Two conflicts during the rebase were resolved by keeping both
  sides, not by taking one: an import block, and a test count that neither side
  had right afterwards (measured: 312).
- **Remediation** n/a. Recorded here because the work started as a DD84
  consolidation. **The Ledger keeps its own records; this does not substitute
  for them.**

---

## OL-0016 — Delete the stale Ledger source tree from this repository

- **Timestamp** 2026-09-25T10:30:00Z
- **Task** T-29 · **Approval** Owner instruction, 2026-09-25: move required
  information to the correct repository and delete it from the wrong one.
- **Action** Removed the Georgia Opportunity Ledger application from this
  branch, leaving the DD84 agent platform, and rewrote `CLAUDE.md` and
  `README.md` for what the repository now is.
- **Tool** `git ls-files`, `git ls-tree`, `diff`, `md5sum`, `git rm`
- **Operator** Claude (agent)
- **Before** 241 tracked files. 213 of them were the Ledger — `src/`,
  `supabase/`, `tests/`, `scripts/`, the build configuration, and
  `ARCHITECTURE.md`, `MILESTONES.md`, `RUNBOOK.md`.
- **After** 28 tracked files, all DD84: `docs/agents/`, `docs/ops/`,
  `docs/growth/`, the two DD84 specifications, `.claude/`, and the two rewritten
  top-level documents.
- **Evidence — the audit that came first, because deletion is not reversible by
  the next person who needs the file.** Eight files existed here and not in the
  canonical repository, and each was checked rather than assumed:
  - Six migrations, `...002200`–`...002700`, appeared absent but are **present
    under different numbers** — the canonical repository keeps the live version
    numbers so its history reconciles with production. Comparing the SQL with
    comments stripped: `repair_search_vector_trigger`, `function_privileges` and
    `revoke_privileged_function_grants` are **identical**. The other three
    differ **only inside `COMMENT ON` string literals** — line wrapping, one
    `->` versus `→`, and one that points at `scripts/stripe-setup.ts` instead of
    the older SQL file. **No functional SQL differs anywhere.** Both
    security-hardening migrations are in the identical group.
  - `src/components/site/member-header.tsx` — deliberately never ported. The
    canonical repository's `header-session.tsx` implements the same caching fix,
    reached independently.
  - `supabase/stripe-prices.live.sql` — superseded by `scripts/stripe-setup.ts`
    there. The live price ids it carried are in Stripe and in the production
    database, both of which outrank a SQL file.
- **Error** None in the deletion. Worth recording that the first audit query
  reported **zero** DD84 files in the canonical repository, which was wrong —
  the remote-tracking ref for the branch holding them was missing locally, so
  `git ls-tree` returned nothing and the pipeline counted it as clean. Re-run
  against a fetched ref it reported **24**, including `ventures.md`. **A query
  that silently returns nothing looks exactly like a clean result**, which is
  the same failure `smoke.sh` made against a server that was not running.
- **Remediation — two things are NOT done, both outside the agent's reach.**
  1. **The 24 DD84 files are still in the Ledger's repository**, on branch
     `claude/consolidate-agent-platform` — including `docs/agents/ventures.md`
     with DD84's revenue and customer counts. Deleting a branch is refused by
     this environment's git proxy ("the remote end hung up"), and no
     branch-deletion tool is available. **Owner action:** delete
     `claude/consolidate-agent-platform` and `claude/ledger-accuracy-fixes` in
     GitHub. Everything on both is reachable elsewhere — verified before asking:
     all 24 files are here, and the three modules are on the Ledger's `main` at
     `a228f3d`.
  2. **This repository's default branch still holds the old Ledger copy.**
     `claude/georgia-opportunity-ledger-kfpt4c` is the default, so the
     repository front page still shows a Next.js application no matter how clean
     this branch is. GitHub will not delete a default branch. **Owner action:**
     repoint the default at `claude/claude-md-docs-cqvhy6`, then delete the old
     one. Until that happens, T-29 is only half done and the trap it describes
     is still set for anyone who does not open `CLAUDE.md` first.

---

## Imported from `claude/claude-md-docs-jjveuq` — 2026-09-25

The six entries that follow were written on the other DD84 branch while both
branches were appending to this file independently. The owner chose this branch
as the single record on 2026-09-25 (T-31). They are reproduced here in their
original order, renumbered from OL-0010…OL-0015 to OL-0017…OL-0022, each keeping
a note of the number it had so the commits that reference it stay findable.

**Nothing was dropped, shortened or reworded to fit.** Two entries record
mistakes made on that branch and their corrections; those are exactly the
entries a consolidation is most tempted to lose, and they are the reason this
file is append-only.

---

## OL-0017 — 2026-08-10 · Verify the Stripe billing configuration

> Originally **OL-0010** on `claude/claude-md-docs-jjveuq`, renumbered here when
> the two records were consolidated (T-31). Content unchanged except
> cross-references.

- **Task** T-11 · **Approval** A-05, approved 2026-08-10
- **Action** Read the live Stripe account and the live Supabase project to
  establish the billing configuration's actual state before creating anything.
  **Nothing was created, updated or deleted.**
- **Tool** `mcp__Stripe__get_stripe_account_info`, `stripe_api_read`
  (`GetProducts`, `GetPrices`, `GetWebhookEndpoints`),
  `mcp__Supabase__list_projects`, `execute_sql` (select only)
- **Source** Owner instruction "finalize stripe and review approved"
- **Operator** Claude (coordinator), not the Torque subagent — the subagent
  terminated on an account session limit before it could record this, which is
  why the entry is written here directly.
- **Before** The register and `MILESTONES.md` both asserted the products did not
  exist and that `stripe_monthly_price_id` / `stripe_annual_price_id` were null.
  Both assertions were **stale**.
- **After** Unchanged — this was a read-only pass. The record now matches
  reality.
- **Evidence**
  - Account `acct_1QBl8ZINLKqe1c6g`, display name "Down Dirty 84 llc".
  - Four products created 2026-07-29 with `plan_code` / `access_rank` /
    `product_line` metadata, `livemode: true`.
  - Six recurring prices, `livemode: true`, amounts in cents:
    `gol_weekly_monthly` 1500 · `gol_weekly_annual` 15000 ·
    `gol_detailed_monthly` 3900 · `gol_detailed_annual` 39000 ·
    `gol_premium_monthly` 9900 · `gol_premium_annual` 99000. Every amount
    matches `supabase/seed.sql`.
  - Live project `bbgikfblcahhvrpxiqnd` (georgia-opportunity-ledger,
    ACTIVE_HEALTHY). `select` on `public.subscription_plans` returned all six
    price ids populated. Each was resolved back to its Stripe price and the
    amount confirmed — verified in both directions rather than trusting one.
  - `GetWebhookEndpoints` returned `{"data":[]}` — **no endpoint registered**.
- **Error** None.
- **Remediation** n/a. Two variances raised rather than worked around: the
  connector is live-only so the approved test-mode-first sequence cannot be run
  by an agent, and the absent webhook endpoint became **T-27**. Neither was
  silently absorbed into the approved scope.

---

## OL-0018 — 2026-09-09 · Attempt the Vercel deployment; blocked at the GitHub App

> Originally **OL-0011** on `claude/claude-md-docs-jjveuq`, renumbered here when
> the two records were consolidated (T-31). Content unchanged except
> cross-references.

- **Task** T-28 · **Approval** Owner instruction, "not blocked anymore"
- **Action** Attempted to create the Vercel project linked to the repository.
  **Refused by Vercel.** No project was created and nothing was deployed.
- **Tool** `mcp__Vercel__list_teams`, `list_projects`, `create_git_project`,
  `search_vercel_documentation`
- **Source** Owner instruction following the deployment package
- **Operator** Claude (coordinator)
- **Before** No Vercel projects on the account.
- **After** Unchanged. `create_git_project` returned HTTP 400 `bad_request`: "To
  link a GitHub repository, you need to install the GitHub integration first."
  The Vercel GitHub App is not installed on the repository owner.
- **Evidence**
  - Team `downdirty84llc-creators-projects` (`team_a5zEaV43TZGEAxcqY1GgilmG`),
    plan **hobby**.
  - `list_projects` returned `{"projects": []}` — nothing pre-existing.
  - Remedy recorded as step 0 of `DEPLOYMENT-PACKAGE.md`:
    https://github.com/apps/vercel
- **Error** Vercel API 400, quoted above. Not worked around.
- **Remediation** `deploy_to_vercel` would have bypassed the Git link by
  uploading a detached file tree. **Deliberately not used** — it deploys a copy
  with no connection to the repository, so nothing redeploys on push and the
  deployed code drifts from source immediately. Recorded as a rejected
  alternative rather than taken as a shortcut.

### Two findings from the same pass, both correcting the record

1. **`main` now exists, and the repository has nine branches.** It did not a
   month ago, and `CLAUDE.md` §0 still says there is no `main`. `main` points at
   `81c5a68` — the first commit, predating milestones 5–9 and this entire
   workstream. Vercel defaults to `main`, so an unattended import would have
   deployed a months-old application. The deployment package now says to set the
   production branch deliberately and check its head commit.
2. **Three commits landed on `claude/claude-md-docs-jjveuq` from outside this
   workstream** — `dbe7b4a`, `c6dbc38`, `ac799a0`. The branch head is `ac799a0`,
   not `5652e1e`. They have not been reviewed here.

Both are logged rather than fixed: correcting `CLAUDE.md` §0 needs the owner's
word, and consolidating nine branches is a decision, not a chore.

---

## OL-0019 — 2026-09-24 · Two owner decisions; flag the stale default branch

> Originally **OL-0012** on `claude/claude-md-docs-jjveuq`, renumbered here when
> the two records were consolidated (T-31). Content unchanged except
> cross-references.

- **Task** T-29, T-30 · **Approval** Owner instruction, "leave the agent
  platform in tune-advisor- and flag the stale main"
- **Action** Cloned the canonical Ledger repository to establish ground truth,
  then added a warning banner to `CLAUDE.md` and `README.md` on
  `tune-advisor-`'s `main`. **Additive documentation only — 59 insertions, zero
  deletions, no code touched.**
- **Tool** `add_repo`, `git clone`, `diff`, `git commit`, `git push`
- **Source** Owner instruction
- **Operator** Claude (coordinator)
- **Before** `tune-advisor-` `main` at `34b081b`, opening with the heading "This
  repository is canonical. Use only this one." — text written for the Ledger and
  copied here with the code.
- **After** `main` at `3e22f41`, warning first in both files. Verified in the
  destination: local `HEAD` and `origin/main` both read
  `3e22f41e0377684032275e87079980689d29ba4c`.
- **Evidence** — compared against the canonical repository
  `downdirty84llc-creator/georgia-opportunity-ledger` at `a228f3d`:
  - Both last committed **2026-09-16**; both carry **32 migrations**. This is a
    fork, not months of drift — it stopped immediately before the commit "Fix
    two wrong numbers on the admin dashboard".
  - 267 tracked files here against 290 there.
  - `src/lib/billing/mrr.ts` and `src/lib/analytics/sample-data.ts` absent here,
    present there.
  - `src/app/(admin)/admin/page.tsx:99` still reads
    `total + Number(plan.monthly_price ?? 0)` with no `billing_interval` in the
    select, and nothing filters `is_sample`.
- **Error** None.
- **Remediation** n/a. The defects were **not** fixed in place: they are already
  fixed in the canonical repository, and patching an abandoned branch would make
  it look maintained. Flagging is the correction; the branch survives only
  because GitHub will not delete a default branch.

### Correction to OL-0018 (originally OL-0011) and to that session's earlier reading

OL-0018 recorded `main` as carrying two live bugs. That was read inside
`tune-advisor-` and generalised too far. **The canonical Ledger has both fixes**
— `sample-data.ts` is byte-identical to the copy on this branch and `mrr.ts`
differs only by one Prettier line wrap. The bugs are real, but only on the
abandoned copy, which is a staleness problem rather than a product defect. The
proposed port of those fixes is therefore withdrawn: there was nothing to port.

---

## OL-0020 — 2026-09-25 · Audit the unattended send routine; disable refused

> Originally **OL-0013** on `claude/claude-md-docs-jjveuq`, renumbered here when
> the two records were consolidated (T-31). Content unchanged except
> cross-references.

- **Task** T-31 · **Approval** Owner instruction, "check what it's been
  sending", then "yes" to disabling it
- **Action** Audited what the Routine "Weekly Georgia Opportunity Ledger
  summary" (`trig_01FxDef9B5snYTW42FfcMEbD`) has actually sent, then attempted
  to disable it. **The audit completed; the disable was refused.**
- **Tool** `list_triggers`, `mcp__Gmail__search_threads`,
  `mcp__Gmail__list_drafts`, `update_trigger`
- **Source** Discovered during the 2026-09-25 update check. Created 2026-07-30
  via `http_api` — before the DD84 agent platform existed — with seven
  connectors attached (Gmail, Stripe, Shopify, PayPal, Canva, Calendar, Drive).
  Its prompt ends "…then email the summary to paid subscribers."
- **Operator** Claude (coordinator)
- **Finding — it has never sent anything.** Checked the four Monday fire windows
  against sent mail (the Routine fires 09:00 UTC):
  - **2026-09-21** — 8 sent messages, all owner-written DD84 facility
    correspondence at 14:22 and 15:21–15:22. Nothing near 09:00.
  - **2026-09-14, 2026-09-07, 2026-08-31** — zero sent messages on those days.
  - No drafts either. Every draft in the mailbox is accounted for and none is a
    Ledger summary; the four dated 2026-08-19 are DD84 Build Review
    **templates** addressed to the owner with `[First name]` / `[Vehicle]`
    placeholders intact.
- **Why it sent nothing** — the Ledger database holds **zero profiles**, so
  "paid subscribers" resolves to an empty list. Four runs reported SUCCEEDED by
  doing nothing. **That is luck, not design:** the first real subscriber turns
  this into an unattended external send, which the spec puts in Class C and
  which every other routine here is built to refuse.
- **Error** `update_trigger` refused: _"this routine was created via `http_api`,
  not by an agent. Agents can only update routines they created."_ No change was
  made; the Routine remains **enabled**.
- **Remediation — owner action, one click.** Disable it at
  https://claude.ai/code/routines/trig_01FxDef9B5snYTW42FfcMEbD. Disabling is
  reversible and loses nothing: it has produced no email and no committed brief.
  Not attempted by any other route — an agent working around a permission
  boundary deliberately placed in front of a sending tool would be the wrong
  instinct, whatever the intent.

---

## OL-0021 — 2026-09-25 · Verify the reported disable; delete also refused

> Originally **OL-0014** on `claude/claude-md-docs-jjveuq`, renumbered here when
> the two records were consolidated (T-31). Content unchanged except
> cross-references.

- **Task** T-31 · **Approval** Owner said "disabled it", then "just delete it"
- **Action** Verified the reported disable in the destination, then attempted to
  delete. **Both the disable and the delete are refused to agents; the Routine
  is unchanged and still enabled.**
- **Tool** `get_trigger`, `list_triggers`, `delete_trigger`
- **Operator** Claude (coordinator)
- **The disable did not take.** `get_trigger` on `trig_01FxDef9B5snYTW42FfcMEbD`
  returns `enabled: true`, `next_run_at: 2026-09-28T09:00:53Z`, and — decisively
  — `updated_at: 2026-07-30T16:31:25`, **identical to `created_at`**. Nothing
  has modified the Routine since creation; a saved change would have moved that
  timestamp. Reported as not done rather than accepted, because the timestamp is
  checkable and the report was not.
- **Nothing else was toggled by mistake** — all four DD84 Routines remain
  `enabled: true` with `updated_at` 2026-09-23, unchanged.
- **Error** `delete_trigger` refused with the same rule as `update_trigger`:
  _"this routine was created via `http_api`, not by an agent. Agents can only
  delete routines they created."_
- **Remediation — owner only, no agent path exists.** Delete or disable at
  https://claude.ai/code/routines/trig_01FxDef9B5snYTW42FfcMEbD, then confirm
  the state sticks after a refresh. If the UI will not save, the fallbacks are
  revoking the OAuth token the Routine runs on (`api_token_hint`
  `sk-ant-oat01-1o2fMrgy...OQAA`, issued 2026-07-30) or detaching the Gmail
  connector, either of which removes its ability to send.
- **Residual risk while it stands** — low but not zero. It fires Monday
  2026-09-28 at 09:00 UTC and sends nothing only because the Ledger has zero
  subscribers. The safeguard is an empty table, not a rule.

---

## OL-0022 — 2026-09-25 · Correction: the port was withdrawn on a false inference

> Originally **OL-0015** on `claude/claude-md-docs-jjveuq`, renumbered here when
> the two records were consolidated (T-31). Content unchanged except
> cross-references.

> **Numbering collision — resolved.** When written, this entry and five others
> carried numbers that already named different events on
> `claude/claude-md-docs-cqvhy6`. The owner chose this branch as the single
> record on 2026-09-25; those six entries were renumbered OL-0017…OL-0022 on
> consolidation, each keeping a note of the number it had. Nothing was dropped
> to tidy the sequence. See T-31.

- **Task** T-19, T-31 · **Approval** none needed; correcting this session's own
  record
- **Action** Verified a correction sent by the other DD84 session and found it
  right. **This corrects OL-0019 (originally OL-0012) and commit `74adc67`.**
- **Tool** `mcp__github__get_commit`, `git ls-tree`, `git show`
- **Operator** Claude (coordinator)

**What OL-0019 and `74adc67` claimed** — that cloning the canonical Ledger
showed both fixes already present, so "the proposed port is therefore withdrawn:
there was nothing to port", and that the bugs were "real, but only on the
abandoned copy".

**What is actually true.** The observation was right and the inference was
wrong. The fixes were present on 2026-09-24 **because the other session had
landed them the day before**, not because they had always been there. Verified
against the GitHub API rather than taken on report:

- Commit `a228f3d` in `downdirty84llc-creator/georgia-opportunity-ledger`, "Fix
  two wrong numbers on the admin dashboard".
- **Author date `2026-09-16T15:43:24Z`; committer date `2026-09-23T10:58:48Z`.**
  It was rebased before landing, which is why the author date reads a week
  earlier — and is what made it look pre-existing to a clone taken on the 24th.
- In that commit `src/lib/analytics/sample-data.ts` and `src/lib/billing/mrr.ts`
  are both `status: "added"`. **They did not exist in the canonical repository
  before it.** `admin/page.tsx` is modified +64/−16.

**Why this mattered enough to correct.** As written, the record told a future
session those defects were never real in the canonical repository. They were:
MRR overstated by roughly 17% per annual subscriber, and seeded demo accounts
moving four admin tiles including revenue, until 2026-09-23. A reader who
believed the old entry would conclude the canonical repo had never needed the
fix and might not check it again.

**The methodological error, stated plainly so it is not repeated.** A file being
present is evidence about the present, not about the past. `git log` on the
file, or the committer date rather than the author date, would have shown it.
The byte-identical `sample-data.ts` was the clue and was misread as coincidence:
it was identical _because it came from this platform_.

**Conduct note** — the other session did not edit this file, and said so. That
is correct: an append-only record belongs to the branch that writes it, and one
session rewriting another's log would destroy the property that makes it worth
keeping.

**Verified alongside it, both confirmed:** `cqvhy6` is down to 28 tracked files
with no `src/` at all, and the OL numbering collides as described.

**Open, and the owner's to settle — T-31** (numbered T-32 on the superseded
`jjveuq` branch, where this entry was written). Two branches are appending to
one append-only log. Whoever merges second hits a conflict in the file whose
whole purpose is that it cannot conflict. The other session proposes
consolidating onto `cqvhy6`. That is a reasonable proposal and is not an agent's
decision to take unilaterally; it is recorded as T-31 and put to the owner.

---

## OL-0023 — 2026-09-25 · Give the Routines a durable output path that needs no repository

- **Task** T-27 · **Approval** Owner instruction, "fix A-10"
- **Action** Re-verified why the Routines commit nothing, established that the
  repository half is still owner-only, then **removed the data loss** by giving
  all four an output path that does not need a repository. All four prompts
  updated and confirmed in the destination.
- **Tool** `get_session`, `update_trigger` ×4
- **Operator** Claude (coordinator)

**Diagnosis re-verified, not assumed.** A-10's root cause was recorded on
2026-08-28; it is a month old, so it was checked rather than repeated. Session
`session_01AVGZKmA9TpaePUTDatFWry` — the inbox intake that fired at 10:20 today
— carries **no `sources` field at all**. It ran in
`env_01JXSFPtHkXwcq1W3c9DWk8a`, the same environment as an interactive session
that does have repositories attached, which confirms the repository is a
property of the session and not of the environment. Its tool list is Bash,
Write, Edit, Read, Glob, Grep, Agent, NotebookEdit, WebFetch, WebSearch,
TaskStop, SearchMcpRegistry, SuggestConnectors, ListConnectors, **Artifact** —
no `add_repo`, so it cannot attach one itself, and no credentials to clone with.
**A-10's remedy stands: the repository must be attached at creation, from the
claude.ai Routines UI.**

**What was fixed instead, and why it is worth doing separately.** The run above
used 132k tokens and cost $1.11 to produce a brief that went nowhere. The loss
was never the missing repository; it was that the output had no second home.
Each of the four prompts now ends with an explicit three-step fallback: say in
the first sentence that the commit failed and do not report success; **publish
the output as an Artifact**, which survives the session where a reply does not;
and paste the full text into the reply as a third line of defence. The closing
line is "Never discard output because you could not commit it."

**Artifact was chosen because it is the only durable sink the fired sessions
actually have.** It is in their tool list; a repository is not.

- **Class check** — publishing an Artifact is internal reporting to the owner,
  not a Class D publication, and each prompt says so explicitly so no future run
  refuses the step for the wrong reason. The two routines that handle sensitive
  material carry an added instruction: the cash review and the intake mark their
  Artifacts private to the owner, and the intake is told to keep customer
  personal data out of the title.
- **Verified in the destination** — all four `update_trigger` calls returned
  `updated_at: 2026-09-25T11:1x`, moved from 2026-09-23. Prompts read back
  correct.
- **Error** None.
- **What this does not fix** — briefs still will not reach `docs/ops/briefs/`,
  and the routines still cannot update the register or this log themselves.
  **The operating record still only advances when a session with the repository
  writes to it.** T-27 stays open on A-10; this narrows the damage rather than
  closing the task.

---

## OL-0024 — Repair three task references the consolidation left dangling

- **Timestamp** 2026-09-25T11:15:00Z
- **Task** T-31 · **Approval** none needed — Class B, correcting pointers inside
  this repository's own record
- **Action** Changed three references to `T-32` into `T-31` in entries carried
  over from `jjveuq`, and noted the old number where the prose reads as history.
- **Tool** `grep`, `comm`, `git show`
- **Operator** Claude (agent), cqvhy6 session
- **Before** `docs/ops/` cited `T-32` three times. **No such task exists on this
  branch.** The consolidation renumbered `jjveuq`'s T-31 to T-30 and its T-32 to
  T-31, updated the headings, and updated one reference — the same entry reads
  "See T-31" two lines above a "**Task** T-19, T-32" field — but missed three.
- **After** Every `T-`, `A-` and `OL-` reference in `docs/ops/` resolves to a
  heading that exists.
- **Evidence** — the check was a set difference rather than a search, so it
  could not miss a number nobody thought to look for: every referenced id minus
  every heading id, per prefix. Before: `T-32` and `OL-0023` unmatched.
  `OL-0023` is the "Next entry" placeholder and correctly has no heading yet —
  **not a defect, and it would have been one to "fix"**. After the change the
  only unmatched id is that placeholder.
- **Error** None introduced. The underlying mistake was the consolidation's, and
  it is the ordinary failure mode of renumbering: headings are easy to find,
  references to them are not.
- **Remediation** Editing these lines is a deliberate exception to the
  append-only rule and is narrower than it looks. The consolidation had already
  rewritten these entries' numbers; this finishes that operation rather than
  revising history, and the alternative — appending a note saying "where these
  entries say T-32, read T-31" — leaves a pointer that resolves to nothing for
  anyone who does not read to the end. Where the surrounding prose reads as a
  record of what was decided, the old number is kept in parentheses so a
  citation from a `jjveuq` commit still lands.

---

- **Numbering** Written as OL-0023 and renumbered to OL-0024 on landing: the
  other session pushed its own OL-0023 fifteen minutes earlier. **That is this
  entry's own subject happening again** — two sessions appending live to one
  append-only file, which consolidating onto a single branch narrowed but did
  not remove. Recorded rather than quietly renumbered, because the collision is
  the evidence for T-31's remaining risk.

---

## OL-0025 — Correct two wrong claims in `main`'s stale-copy banner

- **Timestamp** 2026-10-08T10:40:00Z
- **Task** T-29 · **Approval** Owner, 2026-10-08, asked for the correction in as
  many words after being told it meant a commit to `main`
- **Action** Fixed two false statements in the stale-copy notice on
  `tune-advisor-` `main`, in `CLAUDE.md` and `README.md`.
- **Tool** `git ls-remote --symref`, `git diff`, `git push`
- **Operator** Claude (agent), cqvhy6 session
- **Before** The notice said (a) "It is the default branch, so Vercel and most
  import flows select it automatically", given as the reason the warning
  belonged on `main`, and (b) that the DD84 agent platform is on
  `claude/claude-md-docs-jjveuq`.
- **After** `main` at `b9aa4b3`. Both corrected, dated, and written as
  corrections rather than edited silently.
- **Evidence** — `git ls-remote --symref origin HEAD` returns
  `refs/heads/claude/georgia-opportunity-ledger-kfpt4c`. `main`'s parent is
  `34b081b`, which **is** `kfpt4c`, and `git diff kfpt4c main` shows only
  `CLAUDE.md` and `README.md` — so `main` is the default branch plus the notice
  and nothing else. That also explains why the notice's own comparison table
  cites `34b081b` rather than `main`'s hash: whoever wrote it measured `kfpt4c`
  and committed to `main`.
- **Error** Not this session's, but worth naming because it defeated the
  notice's purpose. **The warning was placed on the one branch nobody selects by
  accident, and the branch deploy tooling actually picks carries none.** A
  warning is only as useful as its location, and "this is the default branch" is
  a claim worth checking rather than assuming. The jjveuq pointer was true when
  written on 2026-09-24 and false the next day, once the records consolidated
  onto cqvhy6 — a reader following it lands on a dead record.
- **Remediation** The notice now says plainly that it cannot fix the real
  exposure. Pushing docs to `main` crosses this repository's own "that copy is
  not to be updated" rule; that rule exists to stop Ledger code being developed
  here, and the owner authorised this specific docs-only case. No source file
  was touched.

## OL-0026 — Option 1 is blocked: neither the default-branch repoint nor any branch deletion is reachable

- **Timestamp** 2026-10-08T10:50:00Z
- **Task** T-29, T-32 · **Approval** Owner chose Option 1 on 2026-10-08 —
  repoint the default at a clean branch, then delete the stale one
- **Action** Attempted both halves. **Neither was executed.** Recorded with the
  exact refusals so a later session does not repeat all four attempts.
- **Tool** `gh api` (PATCH and DELETE), `git push --delete`, GitHub MCP tool
  search
- **Operator** Claude (agent)
- **Before** Default branch `claude/georgia-opportunity-ledger-kfpt4c`; four
  branches queued for deletion across two repositories.
- **After** **Unchanged.** Default still `kfpt4c`; all four branches still
  exist.
- **Evidence** — four independent routes, each refused for its own stated
  reason:
  - `gh api -X PATCH /repos/.../tune-advisor- -f default_branch=…` → **HTTP
    403**, "Repository settings writes are not permitted through this proxy".
  - `gh api -X DELETE /repos/.../git/refs/heads/…` → **HTTP 403**, "Write access
    to this GitHub API path is not permitted through this proxy".
  - `git push origin --delete …` → `send-pack: unexpected disconnect`; the proxy
    itself reports healthy with no relay failures, so the relay does not carry
    zero-length pushes.
  - GitHub MCP server → has `create_branch` and `delete_file`; **no delete-ref
    tool exists.** Confirmed by search, not assumed.
  - `gh api /repos/.../tune-advisor-` reports `admin: true`. **The permission is
    present; the proxy in front of it refuses.** More access on the owner's side
    would not change this — it needs a person in the GitHub UI.
- **Error** None introduced. The ordering constraint is real and worth keeping:
  `kfpt4c` **cannot** be deleted while it is the default, so the repoint must
  come first.
- **Remediation** Handed back as a manual package: repoint the default to
  `claude/claude-md-docs-cqvhy6`, then delete `kfpt4c`, then delete
  `claude/consolidate-agent-platform` and `claude/ledger-accuracy-fixes` in the
  Ledger repository. Both of the latter were **re-verified spent on
  2026-10-08**, two weeks after the first check: `src/lib/billing/mrr.ts` is
  present on the Ledger's `main`, and all 24 DD84 files are on cqvhy6. **Do not
  do step 1 before reading T-32** — the repoint changes what a public front page
  shows.

---

## OL-0027 — Attempt all four queued owner actions first-hand; all four refused

- **Timestamp** 2026-10-08T11:05:00Z
- **Task** T-27, T-29, T-30, T-32 · **Approval** Owner, 2026-10-08: "complete
  the next four queues"
- **Action** Attempted each of the four outstanding items directly rather than
  repeating what an earlier session or an earlier turn had reported. **None
  completed.** Each refusal is recorded with the call that produced it.
- **Tool** `update_trigger`, `gh api` (PATCH ×2, DELETE), `git push --delete`
- **Operator** Claude (agent), cqvhy6 session
- **Why attempted at all** — two of the four had only ever been refused for
  _another_ session. `docs/ops/README.md` requires verifying in the destination,
  and "a different agent could not do it" is not the same evidence as "I could
  not do it". One of the attempts also returned something no previous entry had.
- **Results, each from this session's own call:**
  - **T-30 — disable the Monday 09:00 send Routine.**
    `update_trigger enabled=false` on `trig_01FxDef9B5snYTW42FfcMEbD` → refused:
    _"this routine was created via http_api, not by an agent. Agents can only
    update routines they created."_ **New detail worth having:** the refusal
    names the exact owner-facing URL,
    `https://claude.ai/code/routines/trig_01FxDef9B5snYTW42FfcMEbD`, and
    discloses that a routine's own fired session may disable itself
    (`enabled=false` only) — so the one agent that could switch it off is the
    one it starts each Monday, which no other session can reach.
  - **T-32 — make `tune-advisor-` private.** `gh api -X PATCH … -f private=true`
    → **HTTP 403**, "Repository settings writes are not permitted through this
    proxy". Verified after: `private: False`, unchanged.
  - **T-29 — repoint the default branch.**
    `gh api -X PATCH … -f default_branch=claude/claude-md-docs-cqvhy6` → the
    same 403. Verified after: default still
    `claude/georgia-opportunity-ledger-kfpt4c`.
  - **T-29 — delete the spent branches.** `gh api -X DELETE …/git/refs/heads/…`
    → **HTTP 403**, "Write access to this GitHub API path is not permitted";
    `git push --delete` → relay disconnect; GitHub MCP has no delete-ref tool.
  - **T-27 / A-10 — attach a repository to the four Routines.** Not attempted,
    because it is not refused so much as absent: `create_trigger` has **no
    `source_url` or `outcome_branch` parameter**, and `update_trigger` cannot
    add one to an existing Routine. There is no call to make. The alternative in
    A-10 — binding the Routines to a persistent session that already holds a
    checkout — **is** inside this session's tools and was deliberately not done:
    it is fragile by design, and scheduling authority is reserved to the owner
    by A-08 and never returned.
- **Error** None introduced; nothing was changed by any of the above.
- **Remediation** The deliverable for this instruction is therefore a manual
  package, not an execution. It is in T-32 and T-29 with the ordering, and the
  Routine URL above is the shortest path for T-30. **The Monday Routine fires
  again 2026-10-12T09:00Z**, and when it is switched off the setting should be
  re-read rather than trusted — it silently failed to persist once already
  (OL-0021).
- **Worth stating plainly** — four owner actions have now been outstanding since
  2026-09-16, 2026-09-25 and 2026-10-08. **This is not an agent capability gap
  that further attempts will close.** Every route has been tried and named. The
  record's job now is to stop a later session spending another turn
  rediscovering the same four refusals.

---

## OL-0028 — 2026-10-08 · First daily brief ever written to `docs/ops/briefs/`

- **Timestamp** 2026-10-08T15:42:00Z
- **Task** T-23, T-27, T-32, and T-33…T-36 created by this run · **Approval**
  S-01 (Class A routine, local repository work). Owner invoked
  `/dd84-daily-brief` directly in the host session.
- **Action** Ran the daily command brief end to end: read the operating record,
  read five connectors, reconciled the register, wrote the brief, created four
  tasks, raised one approval packet, corrected five register defects.
- **Tool** `Read`/`Write`/`Edit`; `mcp__Google_Calendar__list_calendars` and
  `list_events`; `mcp__Gmail__search_threads` ×2; `mcp__PayPal__list_invoices`
  and `list_transactions`; `mcp__Shopify__list-orders`;
  `mcp__github__list_pull_requests` and `actions_list`; `ToolSearch` to
  establish the absence of Stripe.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** `docs/ops/briefs/` contained nothing but its `README.md`, as it had
  since 2026-08-06. 31 tasks, 12 approval packets.
- **After** `docs/ops/briefs/2026-10-08-daily-brief.md` exists. 36 tasks, 13
  packets.

### What this run does and does not prove

**It does not close T-23 and it does not satisfy A-10.** A-10's success test is
"one **scheduled** run ends with a dated brief committed to `docs/ops/briefs/`",
and T-23 requires one `OL-` entry per routine's **first firing**. This was a
manual invocation in a session that already held the repository — the stopgap,
not the fix. **The scheduled Routines have still delivered nothing**, and a
reader who treats this entry as the proof T-23 waited for will be wrong.

**What it does prove, and it is worth having:** the routine itself works. Given
a checkout and the connectors, it produces the brief the contract specifies,
degrades the sections it cannot read, and writes to all four destinations. The
defect diagnosed in T-27 is entirely the container, not the prompt. That had
been asserted since 2026-08-28 on the strength of token counts; it is now
demonstrated.

### Connectors — read once each, as the contract requires

| Connector           | Result                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Google Calendar     | Reached. 3 calendars; **0 events** on `downdirty84llc@gmail.com` and `Family` for 2026-10-08 and 2026-10-09         |
| Gmail               | Reached. 25 threads read of an estimated 201 in the inbox, 2-day window                                             |
| PayPal              | Reached. **0 invoices** in any status; **0 transactions** 2026-09-08 → 2026-10-08T12:59:59Z                         |
| Shopify             | Reached. **0 orders**, `totalCount: 0`                                                                              |
| GitHub              | Reached. **3 open pull requests**; **0 workflow runs** on this branch — the branch has no `.github/workflows`       |
| **Stripe**          | **Absent.** No Stripe MCP server in this session. Established by searching the loaded servers, not by a failed call |
| **bookipay**        | **No API access**, by design and by record                                                                          |
| **Superhuman Mail** | **Requires OAuth**; non-interactive session cannot run the flow                                                     |

**The money section therefore degraded, and that is the single most important
thing in this entry.** The two systems that have ever carried DD84 revenue —
Stripe and bookipay — were both unreadable. PayPal and Shopify each read a true
zero, and PayPal is not even listed as a DD84 payment system. **No revenue
figure was estimated, carried forward or inferred.** That gap is now T-36.

### Findings, and what each became

1. **`dd84-api` is failing on Render** — two unread alerts, 00:27Z ("Exited with
   status 1") and 15:21Z ("deploy failed", commit "Merge pull request #25").
   **The service appears nowhere in `ventures.md` or this register.** →
   **T-33**.
2. **CI failed on `main` in `downdirty84llc-creator/downdirty84-ai-tuning`**
   (`914e171`, 15:12Z) — a third repository the register does not know about. →
   **T-34**. Any link to T-33 is a hypothesis, not a finding.
3. **PR #1 is open from `claude/claude-md-docs-jjveuq`**, the branch T-31
   superseded, targeting an unexplained `dd84/main`. Merging it would reverse
   T-29 and T-31 together. → **T-35**.
4. **`ventures.md`'s revenue figures are 66 days old** and unverifiable from
   here. → **T-36**.
5. **T-32 had no approval packet** despite being a live owner decision that
   blocks T-29. → raised as **A-13**.
6. **A law-firm client-portal invitation** (Hawkins Law, LLC, 13:39Z,
   unactivated) **may** relate to A-06 and T-13. Recorded as a question to the
   owner in both the brief and T-13. **Deliberately not asserted** — a plausible
   connection between a law firm and a pending legal review is exactly the kind
   of inference that becomes a fabricated fact two sessions later.

### Register corrections — the part worth reading

Reconciliation found **five** defects, two of them substantive:

- **T-11 and T-13 both read "Awaiting Approval" against packets the owner had
  APPROVED on 2026-08-10.** They had been wrong for **59 days**. Both corrected
  to **Blocked**, with what they actually wait on.
- T-23's and T-29's summary rows contradicted their own detail blocks.
- T-32 was missing from the summary table, and the counts line undercounted
  Awaiting Approval by one.

**This is T-31's failure recurring in a new place.** T-31 recorded that A-05
read "awaiting owner" for six weeks because the answer lived on another branch;
the fix was one record. One record was not sufficient — **the summary table is a
second record of approval state, and it drifted from the first.** The rule this
produces is in the register: when an approval is answered, its row in the
summary table is part of the write, not a follow-up.

- **Error** None introduced. **Nothing was written to any connector**: no email
  sent or drafted, no calendar event touched, no charge, invoice, refund or
  fulfilment action, no live system changed. Class A held.
- **Remediation** Not applicable — nothing failed. What remains outstanding is
  owner-side and unchanged: **A-10, A-13, A-07**, plus the four manual actions
  in OL-0026 and OL-0027 that no agent route can reach.

---

## OL-0029 — Stopgap for A-10: route the Routines through a session that holds the repository

- **Timestamp** 2026-10-08T15:45:00Z
- **Task** T-27 · **Approval** **A-14**, owner, 2026-10-08 (written as A-13;
  renumbered — the host's brief took A-13 for the public-repository decision,
  which is the same question as T-32)
- **Action** Created a dedicated host session with the repository attached,
  bound four new Routines to it, and disabled the four that fire into fresh
  sessions.
- **Tool** `create_session`, `create_trigger` ×4, `update_trigger` ×4
- **Operator** Claude (agent), cqvhy6 session
- **Numbering** Written as OL-0028; renumbered on landing because the host
  session took OL-0028 for the brief it wrote while this was being prepared.
  Second collision in two weeks, same cause — see OL-0024.
- **Before** Four Routines firing into fresh sessions with no `sources` and no
  `outcomes`, producing briefs that died with the session. Seven weeks of it.
- **After**
  - Host session `session_01MadzgqZSAWtvberqr3hMpN`. Confirmed `RUNNING`,
    `connected`, on `claude/claude-md-docs-cqvhy6`, and — the point of the
    exercise — its `session_context` carries **both** `sources` and `outcomes`.
  - Four Routines, `persist_session: true`, bound to it on the same cadences:
    daily brief `trig_01Uw62JeMqdK6DaLatfk3BXX`, intake
    `trig_01UdMtZvf1BdVuYoucd6UY7N`, cash review
    `trig_01Y9G9LUVQR752W4uop2jZfL`, scan `trig_01UPEmQbHN6vzC4PKse2zf23`.
  - The four originals **disabled** and renamed "(superseded — no repo
    attached)" so the reason shows in the Routines list, not only here:
    `trig_01HjWAenzqupA25xtHq4pAQ1`, `trig_01BVhKWk82BUsapTnqCRWUu8`,
    `trig_01MMB7e5vWPPpCf295CcUxgK`, `trig_013EAHBLcjpi7N8wyqo5SfAq`.
- **Why a separate session** — binding them to the owner's own conversation
  would have put roughly twenty firings a week into it. `create_session` accepts
  `source_url`, `source_revision` and `outcome_branch`, so a purpose-built host
  is both cleaner and closer in shape to what the real fix will be.
- **Each prompt carries the branch-pointer check from OL-0026**, because the
  host inherits the hazard that bit this session earlier today: a container
  reset left a branch of this name on a `main` commit holding the stale Ledger
  tree, with a **clean `git status`**. The prompts give the tell — 28 tracked
  files, no `src/` — and the recovery.
- **Three ways this is worse than the real fix, stated rather than glossed:** it
  depends on one session surviving; its context grows without bound; and all
  four serialise through it. **A-10 stays open.**
- **Evidence** Each `create_trigger` returned `enabled: true`,
  `persist_session: true` and the host's id; each `update_trigger` returned
  `enabled: false`. Read back from the calls, not assumed.
- **What happened next, and what it does and does not show** — the host session
  wrote the first brief ever to reach `docs/ops/briefs/` (`dbd6c21`, OL-0028)
  before this entry was finished. **That is proof the routine works when given a
  checkout. It is not proof the schedule delivers** — that run was driven by
  hand, and A-10's success test is a _scheduled_ firing that commits. The host
  said so itself, in the brief's own opening paragraph, which is the right place
  for it. The first scheduled test is the intake at **2026-10-09T10:20Z**. T-27
  stays In Verification until then.
- **One deviation worth recording.** The host's setup prompt told it to confirm
  the checkout, read the contract, and **stop** — explicitly not to run routines
  or write briefs. It ran the full brief anyway. The output is good and
  correctly labelled, so no harm done, but an unattended host that exceeds its
  brief on its first turn is worth knowing about before it is trusted with
  twenty firings a week.
- **Rollback, written down because whoever needs it will be in a hurry** — if
  the host dies, `update_trigger enabled=true` on the four original ids. They
  are intact, their prompts are current, and they publish Artifacts, so they
  degrade to not-losing-the-work rather than to nothing.

---

## OL-0030 — Owner approves Option 1 on A-13; the change itself is not reachable

- **Timestamp** 2026-10-08T16:05:00Z
- **Task** T-32, T-29 · **Approval** **A-13, answered** — the owner chose Option
  1, "make it private", on 2026-10-08
- **Action** Recorded the decision, then attempted it. **The decision is made;
  the change is not.**
- **Tool** `gh api` (PATCH, then GET to re-read), `ToolSearch`
- **Operator** Claude (agent), cqvhy6 session
- **Before** A-13 PENDING; `tune-advisor-` public, with DD84's revenue position,
  customer concentration and several system identifiers readable by anyone.
- **After** A-13 answered and T-32 moved from "awaiting owner" to "decided,
  awaiting the owner's hand". **Visibility unchanged: `private: False`.**
- **Evidence** — attempted immediately after the decision rather than deferred:
  - `gh api -X PATCH … -f private=true` → **HTTP 403**, "Repository settings
    writes are not permitted through this proxy".
  - Re-read after the attempt: `private: False`. Nothing changed.
  - `ToolSearch` for a repository-settings tool → the GitHub MCP server has
    `create_repository` (which takes a `private` flag but **creates a new
    repository**, not this one), `fork_repository`, collaborator and file tools.
    **No way to alter an existing repository's visibility.**
  - This is the third attempt at this exact call across two turns, and the
    fourth settings write refused in total (OL-0026, OL-0027). **It is a policy
    boundary, not a transient failure, and no further attempt will change it.**
- **Error** None. Worth being exact about what happened: the owner gave a clear
  instruction, it was attempted at once, and it could not be carried out. That
  is not the same as the instruction being refused, and it is not the same as it
  being done — **A-13 reads ANSWERED but NOT EXECUTED**, and the register says
  so in both places rather than in neither.
- **Remediation** The owner flips it at
  `https://github.com/downdirty84llc-creator/tune-advisor-/settings`, "Change
  repository visibility" at the foot of the page. **Then verify the agents still
  function**, because this is the one option with a mechanical consequence: the
  host session and the four bound Routines clone and push this repository
  through the session's GitHub proxy. A private repository ought to stay
  reachable to a session already connected to it — but that is an expectation,
  not a reading, and the honest test is one scheduled firing landing a commit.
  Next opportunity **2026-10-09T10:20Z**. If it breaks, suspect this first; the
  fix would be a repository-access grant, not anything in `docs/ops/`.
- **Not covered** — `georgia-opportunity-ledger` is also public. It holds no
  DD84 material, so it was never part of this packet and remains undecided.

---

## OL-0031 — 2026-10-08 · First inbox intake; the register had been blind to the actual business

> **REDACTED 2026-10-09 — this entry has been edited, which the append-only rule
> normally forbids.** Four sites in this entry carried the C10 customer's name
> and, in one case, his personal email address. They now read "the C10
> customer". **Removed by:** Claude (agent), cqvhy6 session. **Under:** approval
> **A-16**, Option A, granted by the owner 2026-10-09. **Rule forced the
> conflict:** `CLAUDE.md` §5 — "never add customer names, email addresses, phone
> numbers or payment details" — against `docs/ops/README.md`'s "append-only —
> never edit or delete an entry". **Both are hard rules and satisfying either
> breaks the other**, which is why it went to the owner rather than being fixed
> quietly. **Commit:** the one carrying **OL-0036**, which records the whole
> action. **Nothing else in this entry was altered** — no finding, figure,
> conclusion or timestamp. **The history is not touched**: these details remain
> readable in commits `dbd6c21`…`cb35580`, and no option available to this
> repository removes them from there. See **T-48**.

- **Timestamp** 2026-10-08T16:04:00Z
- **Task** T-37…T-44 created by this run; T-13 cross-referenced · **Approval**
  S-01 (Class A routine). Owner invoked `/dd84-inbox-intake` directly.
- **Action** Ran the inbox and lead intake. Reviewed 57 unique threads, created
  eight tasks, wrote two drafts, raised one Class C packet, named two conflicts.
- **Tool** `mcp__Gmail__search_threads` ×3, `get_thread` ×2, `list_drafts`,
  `list_labels`; `mcp__Shopify__list-customers`; `Read`/`Write`/`Bash`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 36 tasks. No `service`, `real estate` or `sales` task had ever
  existed. The register's own note said those workstreams were empty.
- **After** 44 tasks, three new workstreams,
  `docs/ops/briefs/ 2026-10-08-inbox-intake.md`, packet A-15 pending.
- **Window** `newer_than:2d`, the first-run default. **No prior intake entry
  exists in this log**, so there was no last-run timestamp to measure from.

### The finding that matters more than the eight tasks

**The first query returned 25 threads and not one was from a human.**
`in:inbox newer_than:2d`, sorted by recency, is entirely marketing on this
mailbox. A second query, `category:primary`, returned — **inside the same
two-day window** — an active customer tuning job and a state-agency permit
response, the two most valuable items in the inbox.

The mailbox holds **22,192 threads and 20,756 unread**;
`[Superhuman]/AI/Marketing` alone carries 1,627 messages. **A single-query
intake on this account will report an empty inbox while a customer waits.** That
is T-44, and it is a defect in the routine this run was executing. Had the run
stopped after its first query, it would have filed a clean, confident, wrong
report — which the routine's own contract calls worse than no routine at all.

### What was actually in there

| Thread                                         | What it is                                                                                                                             | Became   |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `C10 Terminator X Max - DL Files`, 22 messages | **Live customer job.** The C10 customer, LM7 C10, Terminator X Max V3 b110, AFR fault. DD84 has built a revised tune and is holding it | **T-37** |
| `Driveway Concept Review`, 4 messages          | **GDOT District 1 answered**: permit likely, but **right-in/right-out only** due to the SR 72 median. **Unread 42 hours**              | **T-38** |
| `Meeting Today`                                | Georgia SBDC session **missed** 2026-10-06; reschedule offered                                                                         | **T-39** |
| Play Console `[Action Needed]`                 | Developer account closes in 60 days                                                                                                    | **T-40** |
| r/LSSwapTheWorld ×2                            | Two people DD84 helped free; one said they'd be in touch                                                                               | **T-41** |
| `list_drafts`                                  | **14 unsent drafts**, incl. a state regulator today and an SBA 504 lender 9 days old                                                   | **T-42** |
| Search Console                                 | **`downdirty84llc.com`** indexing — a domain `ventures.md` does not contain                                                            | **T-43** |

### Two conflicts, both paused, neither resolved

1. **DD84 told the C10 customer his Bosch O2 sensor was the limiting factor and
   that an OEM Holley sensor was needed. He then verified the sensor _is_ the
   Holley Bosch 4.9 LSU.** The remedy no longer follows from the cause. **No
   replacement diagnosis was offered and no tune file was sent** — it is a
   technical determination about a customer's running engine, and `ventures.md`
   forbids fabricating one. Handed to the owner.
2. **`ventures.md` names `dd84tuning.com` as the front door; Search Console
   reports on `downdirty84llc.com`.** The live system is controlling. **Nothing
   was changed** — `ventures.md` is Rev's file and this record does not write
   across.

### Drafts — two, neither sent, neither placed in the account

GDOT (reply on `1a1133f549956cc3`) and Georgia SBDC (reply on
`1a112caffaba4e6d`), both reproduced in full in the brief. **Zero Gmail drafts
were created**: the routine prefers the output file, and a fifteenth draft would
have joined the T-42 backlog it had just found. Covered by **A-15**.

**No draft was written for the C10 customer's thread, deliberately.** That is
the most commercially live thread in the mailbox and the omission is the point —
see conflict 1.

### Identity, checked rather than assumed

Shopify holds **no customer** for the C10 customer's address. Stripe and
bookipay were unreachable. So **whether DD84's most active correspondent is one
of its three known customers is unknown**, and §9 forbids merging on less than
verified identity. He is recorded as an active correspondent of unknown purchase
history — not as a fourth customer, and not as one of the three. **Whether he
has paid for 22 messages of diagnostic work is also unknown**, and is flagged as
a question rather than asserted as unbilled.

- **Error** None introduced. **Class A held absolutely**: nothing sent,
  forwarded or replied to; no label applied; no thread moved, archived or
  trashed; no calendar event read beyond the daily brief's read and none created
  or changed; no customer record merged; no price quoted; no date promised; no
  draft in the account sent, edited or deleted. **No draft body in the T-42
  backlog was opened** — metadata only.
- **Remediation** Not applicable; nothing failed. Outstanding and owner-side:
  **A-15** (two sends, one counterparty waiting since 2026-10-06), the owner's
  O2 determination on T-37, the GDOT layout decision on T-38, and the five
  suspicious drafts in T-42.
- **Worth stating plainly** — the register described a business with no
  customers, no property work and no leads, because no routine had ever read the
  mailbox. One run against live Gmail found a customer mid-job, a permit review
  going well, a missed adviser meeting, a 60-day deadline and fourteen unsent
  letters. **The register was not wrong about what it held; it was wrong to be
  trusted as a picture of the business.** That is the connector gap in A-10,
  priced in operational terms rather than in discarded tokens.

### Landed late, after a sibling session had pushed — three numbering collisions

The push of this entry was **rejected**: `claude/claude-md-docs-cqvhy6` had
moved while the intake was running. Two commits from another session, `4efcf35`
and `a6aa97b`, had landed the A-10 stopgap and the owner's answer on A-13. **The
remote was read before anything was merged**, and the remote won every collision
because it arrived first:

| Minted here                | Landed as             | Why                                               |
| -------------------------- | --------------------- | ------------------------------------------------- |
| `OL-0029` (this entry)     | **`OL-0031`**         | The sibling took 0029 and 0030                    |
| `A-14` (the two drafts)    | **`A-15`**            | The sibling's stopgap packet took A-14            |
| `A-13` (public repository) | **`A-13`, unchanged** | Minted here first; the sibling renumbered its own |

**No entry was edited or merged into another, and nothing was renumbered to make
the sequence look tidier.** The log stays append-only: the sibling's two entries
sit above this one in arrival order, and every cross-reference in the register
and in `APPROVALS.md` was repointed from A-14 to A-15.

### Two reconciliations the merge exposed

Both are the **same defect this morning's daily brief recorded** — the summary
table drifting from `APPROVALS.md` — recurring within three hours, from the
other direction. That is worth more than the fixes.

1. **T-32's row still read `Awaiting Owner · A-13 pending`** after the sibling
   recorded the owner choosing Option 1. Corrected to **Decided — owner's
   hand**, because the decision is made and the repository is **still public**:
   the setting is unreachable from a session and needs the owner in the GitHub
   UI. **Answered is not done, and the row now says which.**
2. **T-27's row still read `Blocked`** while the sibling's own OL-0029 said it
   "stays In Verification". A-14 executed the stopgap, so Blocked was wrong.
   Corrected to **In Verification**, with the success test restated: **one
   scheduled firing landing a commit, first opportunity 2026-10-09T10:20Z.**

**The generalisable point:** two sessions appending to one record is the
divergence T-31 spent a day undoing, in miniature and within an hour. It was
survivable here only because both sessions wrote to the same branch and the
second one read before writing. **A third concurrent session would not be.**

### A correction to the sibling entry, offered rather than asserted

OL-0029 records that "the host exceeded its setup prompt, which told it to
verify the checkout and stop", and reasonably asks whether such a host should be
trusted with twenty firings a week. **The premise is wrong, and the record
should not carry it uncorrected.**

The setup prompt did say verify and stop, and this session did stop. **The owner
then invoked `/dd84-daily-brief` and `/dd84-inbox-intake` as explicit
instructions**, in that order, in their own words. Both briefs were directed
work, not self-started work. The sibling could not see those turns — it saw only
a brief appear from a session whose prompt said stop, and from that vantage the
inference was a fair one to draw and worth writing down.

**Neither entry is edited.** This note is the correction, and the trust question
it raised is still a good one — just not evidenced by this.

---

## OL-0032 — A-13 closed as Option 3; the exposure is accepted and becomes a rule

- **Timestamp** 2026-10-08T16:25:00Z
- **Task** T-32, T-29 · **Approval** **A-13, closed** — Option 3
- **Action** Recorded the owner's final answer, closed T-32, and turned the
  decision into a standing rule in `CLAUDE.md` §5.
- **Tool** `gh api` (two independent reads), `Edit`
- **Operator** Claude (agent), cqvhy6 session
- **Before** A-13 answered Option 1 ("make it private"), unexecutable from a
  session. The agent had raised it twice and was about to re-check it again on a
  scheduled wake.
- **After** A-13 **CLOSED, Option 3**: the repository stays public and the
  exposure is accepted. T-32 closed. `CLAUDE.md` §5 now states that this
  repository is public by decision, with what may never be added to it.
- **Both answers are kept rather than overwritten.** The owner said "make it
  private", then asked why it was needed, then said "dont need to". The reversal
  is the useful part of the record; flattening it to the final answer would hide
  that the question was examined.
- **What the owner was told, since the decision rests on it** — that **no
  credentials, API keys, customer names, emails or payment details are
  exposed**; that the one argument which holds is **negotiating asymmetry**, a
  supplier or acquirer being able to read the revenue position first; and that
  going private was the **only option with a mechanical cost**, being the one
  that might break the host session's clone and push. Three weaker arguments
  were named as weak and not leaned on.
- **Evidence that it is in fact public**, read twice by independent means before
  the decision: the authenticated API returns
  `private: false, visibility: public`, and an **unauthenticated** request to
  the same endpoint returns **HTTP 200** — a private repository returns 404
  there. `updated_at` reads 2026-09-16, three weeks before, so no settings write
  had landed at all.
- **Error** None, but one thing to own: the agent raised this with more urgency
  than the facts carried, twice, before being asked for the reasoning. **The
  finding was worth surfacing; the framing overstated it.** No credential or
  customer data was ever at risk, and that should have led the first telling
  rather than the third.
- **Remediation** The decision is now a rule rather than a closed ticket, which
  is the only part that persists usefully: A-13 covers **what was exposed on
  2026-10-08**, not whatever is added later. A new category of sensitive
  material needs its own packet. The scheduled wake for 2026-10-09T11:10Z has
  had the visibility re-check removed so it does not re-raise a settled
  question.

---

## OL-0033 — 2026-10-09 · The first scheduled routine run ever to commit

- **Timestamp** 2026-10-09T10:40:00Z
- **Task** T-23, T-27, T-41, T-45…T-48 · **Approval** S-01 (Class A routine),
  fired by Routine "DD84 Inbox and Lead Intake (repo-attached)",
  `trig_01UdMtZvf1BdVuYoucd6UY7N`, 10:20:15Z.
- **Action** Ran the inbox intake on schedule. Reviewed 26 threads, 9 of them
  new. Created four tasks, updated one, raised one packet, redacted customer
  identity from two files, named three conflicts.
- **Tool** `mcp__Gmail__search_threads` ×2, `get_thread` ×1; `git`;
  `Read`/`Write`/`Bash`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 44 tasks, 15 packets. No scheduled run had ever committed anything.
- **After** 48 tasks, 16 packets, `docs/ops/briefs/2026-10-09-inbox-intake.md`.

### This is the completion proof T-23 and A-10 have waited on since 2026-08-07

A-10's success test: "**one scheduled run ends with a dated brief committed to
`docs/ops/briefs/` and an entry in `OPERATING-LOG.md`**." T-23's: one `OL-`
entry per routine's first firing. **This entry and this commit are both.** The
2026-10-08 briefs were hand-driven and said so; this one was not.

**What it proves and what it does not.** It proves the A-14 stopgap works: a
Routine bound to a session that holds the repository delivers. **It does not
close A-10** — this is one of four Routines, on one session, whose context grows
with every firing and through which all four serialise. The daily brief at
10:50Z and the cash review on Friday are the next tests, and the real fix is
still recreating the Routines from the claude.ai UI.

### The checkout check, and a defect in the prompt that runs it

The firing prompt says to confirm "**28 tracked files and no `src/`**". The tree
has **30** — the two briefs committed yesterday. **The count is already stale
and will drift on every run.** It did not cause harm because the reset condition
the prompt actually names is the presence of `src/`, which was absent, and the
branch pointer matched after one fast-forward. **But a prompt that tells a
session to expect a number that changes daily will eventually make one panic or,
worse, reset.** The durable tell is `src/` and the absence of a `package.json`,
not a file count. → folded into **T-44**.

### What the window found

| Thread                           | What it is                                                                                                                                                                                | Became             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| GREC licensing reply, unread 15h | **A state commission declined to interpret its own licensing law**, cited three provisions the letter had not asked about, and **ignored the question about how to get a binding answer** | **T-45**           |
| r/LSSwapTheWorld, third handle   | 2000 Sierra, street 6.0, **Riyadh** — and an assumption that distance rules DD84 out                                                                                                      | **T-41**           |
| Webador annual invoice           | **Will auto-charge; amount in an unread PDF**                                                                                                                                             | **T-46**           |
| Google Business Profile ×2       | **Two listings, one business** — 4 views and 40 views                                                                                                                                     | **T-47**           |
| Yesterday's own output           | Customer identity in a public repository                                                                                                                                                  | **T-48**, **A-16** |

**No reply was drafted this run**, and that is a result rather than an empty
section: GREC needs a filing or a lawyer, the C10 job needs the owner's
technical determination, and Webador needs a decision about money. **A-15's two
drafts from yesterday are still unanswered.**

### The conflict this run had to resolve about its own predecessor

**`CLAUDE.md` §5, added overnight under A-13, forbids adding customer names,
emails or phone numbers to this repository. Yesterday's intake had added all
three.** The rule did not exist at the time, so it was not a violation then; it
is an exposure now, and §5 explicitly covers "whatever gets added later".

**Redacted** — `TASK-REGISTER.md` (edit-in-place by design) and
`briefs/2026-10-08-inbox-intake.md` (a dated output). The customer is now "the
C10 customer" against Gmail thread `1a1082503004a073`, which is a pointer and
not an identity.

**Deliberately not touched** — **this file**, which is append-only, and the body
of packet **A-15**, which may only be edited in its Response block. **Breaking
one hard rule to satisfy another is not an agent's call**, so both still carry
the details and **A-16** asks the owner. Options A to D are laid out there,
including the one already declined as A-13 Option 1, raised again only because a
customer's mobile number is a different category from a revenue figure — which
is the case §5 says needs its own decision.

**Stated plainly because it is the part that matters: none of this unpublishes
anything.** The name, email and number remain in the history of a public
repository at `dbd6c21`…`cb35580`. A history rewrite is forbidden on this branch
and refused by the proxy. **Current files clean, history not** is the honest end
state, and A-16 decides what the record says about it, not whether the exposure
happened.

### A fourth consecutive summary-table drift, and it is no longer a slip

**T-32's summary row read "Decided — owner's hand · A-13 approved" while its own
detail block read "Closed — Option 3, the owner accepts the exposure".** The
A-13 bullet on the approvals status board still described Option 1 as the
answer. Both corrected here.

That is the **fourth** time in two days the summary table or the status board
has lagged a decision recorded three hundred lines below it: T-11 and T-13 on
2026-10-08 (59 days stale), T-32 and T-27 later the same day, and T-32 again
plus the A-13 bullet today. **Two of the four were introduced by this session
and two by the sibling**, so this is not one agent being careless.

**The register's own rule — "when an approval is answered, the row in this table
is part of the write" — is not working, because it relies on remembering.** The
honest conclusion is that a summary table maintained by hand beside a 1,700-line
register will drift, and the fix is structural rather than exhortative: either
the summary stops carrying approval state and points at `APPROVALS.md` as the
single source, or something generates it. **Recorded here rather than turned
into another task, because inventing a fifth process to remember the first four
is the wrong instinct.** It belongs in the next revision of
`docs/ops/README.md`.

- **Error** None introduced. **Class A held**: nothing sent, forwarded or
  replied to; no label applied; no thread moved, archived or trashed; no
  calendar write; no customer contacted; no price quoted; no payment action; no
  statute read or interpreted. **No draft was created in the mail account.**
- **Remediation** Not applicable; nothing failed. Owner-side and open: **A-15**
  (two sends, GDOT waiting three days), **A-16** (the redactions), the C10
  technical determination (T-37), the Webador amount (T-46), whether Hawkins Law
  is engaged counsel (T-45), and **whether the card toggling on 10-07 to 10-09
  was the owner** — asked in the brief, deliberately not made a task until
  answered, because if it was not the owner it outranks everything here.

---

## OL-0034 — 2026-10-09 · Daily brief; T-27 closes on a scheduled-run commit

- **Timestamp** 2026-10-09T11:00:00Z
- **Task** T-27 (**closed**), T-23, T-46 · **Approval** S-01 (Class A routine),
  fired by Routine "DD84 Daily Command Brief (repo-attached)",
  `trig_01Uw62JeMqdK6DaLatfk3BXX`, 10:51:09Z.
- **Action** Ran the daily command brief. Read five sources, degraded three,
  closed T-27 on hard evidence, wrote the brief.
- **Tool** `mcp__Google_Calendar__list_events`, `mcp__PayPal__list_invoices` and
  `list_transactions`, `mcp__Shopify__list-orders`,
  `mcp__github__list_pull_requests`; `git`; `Read`/`Write`/`Bash`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 48 tasks, 16 packets, T-27 In Verification.
- **After** Same counts; **T-27 Done**,
  `docs/ops/briefs/ 2026-10-09-daily-brief.md` written.

### T-27 is closed, and this is the evidence

**Commit `ecd04da`**, the 2026-10-09 inbox intake, written and pushed by a
**scheduled** firing at 10:20:15Z and landed at 10:29:17Z. This brief is the
second scheduled firing of the day to commit. **Two for two**, against seven
weeks and roughly thirty firings that delivered nothing.

**What is deliberately not closed.** **A-10 stays pending** and T-23 stays In
Verification. What worked is the A-14 stopgap — one host session holding the
checkout with all four Routines bound to it — and its three weaknesses are
unchanged: single point of failure, unbounded context growth, four routines
serialising. **Only two of the four have fired since the binding**; follow-up
and site-monitor are still unscheduled entirely. **Closing T-27 records that the
diagnosis was right and the stopgap works. It is not a verdict that the problem
is solved.**

### Connectors — three of the eight sources degraded, and the same three as always

| Source                       | Result                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Google Calendar (primary)    | Reached. **0 events** for 2026-10-09 and 2026-10-10                                                                                                     |
| PayPal                       | Reached. **0 invoices**, **0 transactions** — but the API **truncated the window to 08:59:59Z**, its own last refresh, so two hours of today are unread |
| Shopify                      | Reached. **0 orders**                                                                                                                                   |
| GitHub                       | Reached. **3 open PRs**, all unchanged since 2026-10-08                                                                                                 |
| **Stripe**                   | **Absent** — no server in this session (T-36)                                                                                                           |
| **bookipay**                 | **No API**, by design (T-36)                                                                                                                            |
| **Superhuman Mail**          | **OAuth required**, non-interactive session                                                                                                             |
| `Family` / holiday calendars | **Not re-read this run.** Empty yesterday; that is yesterday's reading                                                                                  |

**The money section degraded for the third consecutive run**, and for the same
reason each time: the two systems that have ever carried DD84 revenue are both
unreadable. **No figure was estimated or carried forward.** A real expense is
also inbound — a Webador annual invoice that will auto-charge, **amount in a PDF
no session can open**, recorded as unknown (T-46).

### A note on the PayPal truncation, because it will recur

`list_transactions` silently narrowed the requested end time to its own
`last_refreshed_datetime`. **The response looked like a complete read of the
window asked for and was not.** Both PayPal reads this week did this. The lesson
generalises: **a connector that returns successfully has not necessarily
returned what was requested**, and the response's own echo of the window is the
thing to check. Worth adding to the cash review's contract, which leans on
PayPal harder than the daily brief does.

### The stale file count in the firing prompts, now twice observed

Both of today's prompts told the session to expect **28 tracked files**. The
tree had **30** at 10:20Z and **31** at 10:51Z — the briefs each run commits.
**The number is wrong by construction and drifts upward every day.** No harm
done, because the reset condition the prompts actually name is the presence of
`src/`, which was absent both times. **But a prompt that asserts a
daily-changing number will eventually make a session reset a correct checkout.**
The durable tells are `src/` and the absence of `package.json`. Already folded
into **T-44**.

- **Error** None introduced. **Class A held**: nothing sent, published, charged,
  booked or changed in any live system. No calendar write, no customer contact,
  no price quoted. **No connector was written to.**
- **Remediation** Not applicable. Owner-side and open: **A-15** (GDOT waiting
  three days), **A-16** (the redaction options), **A-07**, the C10 determination
  (T-37), the Webador amount (T-46), whether Hawkins Law is counsel (T-45), the
  four unreachable owner actions in OL-0026 and OL-0027, and **whether the card
  toggling across 10-07 to 10-09 was the owner** — still unanswered, still not
  made a task, and still the one item that would outrank everything if the
  answer is no.
- **Worth stating plainly** — the calendar is empty, no reachable system shows
  money moving, and no customer is waiting on a reply. **A quiet day is a real
  result.** What is outstanding is four decisions, three already written up and
  waiting on one word each.

---

## OL-0035 — 2026-10-09 · Weekly cash review; three for three, and a review that cannot state cash

- **Timestamp** 2026-10-09T11:28:00Z
- **Task** T-36, T-37, T-46, T-49 and T-50 (**created**) · **Approval** S-01
  (Class A routine), fired by Routine "DD84 Weekly Cash and Revenue Review
  (repo-attached)", `trig_01Y9G9LUVQR752W4uop2jZfL`, 11:11:21Z.
- **Action** Ran the weekly revenue and cash review for the seven days ending
  11:11Z. **Reported no revenue total**, because doing so would have spanned two
  unreadable systems. Created two tasks from mail nobody had opened.
- **Tool** `mcp__PayPal__list_transactions` (succeeded), `list_invoices` and
  `list_disputes` (**both failed**); `mcp__Shopify__get-shop-info`,
  `list-orders`, `run-analytics-query`; `mcp__Gmail__search_threads`;
  `mcp__Supermetrics_Marketing_Analytics__data_source_discovery`;
  `Read`/`Write`/`Bash`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 50 tasks after the intake and brief; 16 packets.
- **After** 52 rows — **T-49 and T-50 added** — and
  `docs/ops/briefs/2026-10-09-cash-review.md`. **No packet raised.**

### Three scheduled firings today, three commits

Intake `ecd04da` 10:29Z, daily brief `538d2d3` 11:00Z, and this review. **Three
for three**, against roughly thirty prior firings that delivered nothing. T-27
closed on the first; this entry is further evidence under the same stopgap, and
**A-10 remains the real fix.**

### The headline is a refusal, not a number

**No revenue total is reported for the week.** Stripe is absent from this
session and bookipay has no API — **the two systems that have ever carried DD84
revenue.** This routine's own contract forbids a total spanning a system that
could not be read, and that rule did real work today: it would have been easy,
and wrong, to write "$0.00 revenue this week" from two zeros that only cover
Shopify and PayPal.

**What was genuinely read:**

| System                    | Result                                                                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Shopify                   | **$0.00 and 0 orders**, confirmed twice — `list-orders` and a 30-day ShopifyQL aggregate on `49qz1e-0r.myshopify.com` |
| PayPal transactions       | **0**, but in a window the API **silently narrowed** to 08:59:59Z                                                     |
| PayPal invoices, disputes | **Failed** — connector dropped to "needs re-authentication" mid-run                                                   |
| Advertising, 32 sources   | **All `NOT_AUTHENTICATED`.** No spend readable                                                                        |
| Bank                      | **No connector exists.** Cash position unreadable                                                                     |

### Baseline: one of five figures re-verified, four still stale

`ventures.md` is **67 days old** against a 30-day rule. **Shopify's all-time 0
orders was re-confirmed** over the last 30 days. **All-time revenue, invoice
count, customer count and last-payment date could not be**, so they are quoted
with their 2026-08-03 date and **the change since is reported as not
computable.** That is the fourth consecutive degraded money section, same cause
each time — **T-36.**

**Three standing owner decisions were honoured rather than quietly worked
around:** the ten historic invoices were not chased and the numbering gaps not
raised (2026-08-07); Shopify figures were labelled as the back half of the
funnel (2026-08-13); and no Ledger revenue appears anywhere in the review
(2026-09-16).

### Two cash signals found in the mailbox, neither previously tracked

The command file's Gmail step — vendor invoices and renewal notices — was the
only source that produced new findings, and both were unread:

1. **A declined bank transfer**, PayPal, 2026-10-05T19:10Z. **Amount, direction
   and reason all unknown** and in an unopened message; no bank connector exists
   to ask. High priority because a declined ACH against a business with no
   verifiable revenue in thirteen months reads either as a bank block or as
   insufficient funds, **and an annual auto-charge is inbound on an unknown
   amount** (T-46). → **T-49**
2. **HP Tuners "Do Not Sell List"**, 2026-10-05T15:02Z, **effective the next day
   — so in force since 2026-10-06.** DD84 is an HP Tuners partner by its own
   capability list. **The attached list is unread**, so who is on it is unknown.
   Four days of unknown obligation. → **T-50**

### Margin and pipeline: both empty, and the reason is a record-keeping gap

**No job closed, so no margin is computable.** The one open job — the C10
Terminator X Max fault — **has no price attached after 22 messages, a diagnosis
and a built tune file.** Against the catalogue it falls between **$99 and
$650**, and **the range was left as a range**: picking the midpoint would have
been a pricing decision, and pricing authority is the owner's. Margin is
recorded **INCOMPLETE** with its three missing inputs named — revenue, software
credits, labour — **and no labour rate was assumed**, per §8.5.

- **Error** None introduced. **Class A held absolutely. No write tool was called
  on any payment system**: no charge, refund, invoice, payment link, transfer,
  subscription change or price change. Nothing was sent or published.
- **Remediation** Not applicable; nothing failed on this side. **The PayPal
  re-authentication is a live connector fault the owner must clear** — it joins
  Stripe and bookipay in T-36. Owner-side and open: **A-15** (GDOT waiting three
  days), **A-16**, **A-07**, the C10 price and technical determination (T-37),
  the declined transfer (T-49), the HP Tuners list (T-50), the Webador amount
  (T-46), and the unanswered card-toggling question from 10-08.
- **Worth stating plainly** — **this review could not state DD84's cash
  position.** Not because the week was quiet, but because no reachable system
  holds the answer. **That is a defect in the setup, not in the business**, and
  it is one connector away from being fixed.

---

## OL-0036 — 2026-10-09 · A-16 executed: thirteen redaction sites, four files, two of them protected

- **Timestamp** 2026-10-09T13:45:00Z
- **Task** T-48 (**In Verification**), T-51 (**new**) · **Approval** **A-16,
  APPROVED Option A** by the owner 2026-10-09 ("Approve A-16"). Raising
  **A-17**.
- **Action** Removed the C10 customer's name and personal email address from
  thirteen sites across four files; added a visible dated redaction note to the
  two records whose write modes forbid editing; scanned the whole tracked tree
  and raised a second packet for what the scan found outside A-16's scope.
- **Tool** `Bash` (`git`, `python3`), `Read`/`Edit`; `get_trigger` ×3,
  `get_session` ×2, `delete_trigger` ×1.
- **Operator** Claude (agent), cqvhy6 session `session_01J5Nz8tzpHNV4Z5TriQVecq`
- **Before** 50 tasks, 16 packets. Customer first name in four files; personal
  email in one; full name in two. A-16 pending.
- **After** 51 tasks, 17 packets. **No customer name, email address or phone
  number anywhere in the tracked tree.** A-16 closed as executed.

### The evidence

| File                                | Sites | Verification                       |
| ----------------------------------- | ----: | ---------------------------------- |
| `OPERATING-LOG.md` (OL-0031)        |     4 | 3 × first name, 1 × personal email |
| `briefs/2026-10-08-inbox-intake.md` |     7 | 7 × first name                     |
| `APPROVALS.md` (A-15 body)          |     1 | Full name                          |
| `TASK-REGISTER.md`                  |     1 | First name                         |

Each replacement was applied by a script asserting **exactly one** occurrence of
its target string before substituting, so a silent miss or a double-apply fails
loudly rather than passing. All thirteen asserted and applied. A
case-insensitive sweep for the name token across every tracked markdown file
returns **nothing**.

**The two protected records each carry an inline note** naming what was removed,
by whom, under which approval, which two rules collided, and that the history is
untouched. That note _is_ Option A: the mitigation for editing an append-only
record is that the edit announces itself. A reader of OL-0031 now sees that it
was changed, and why, without having to diff it.

### A-16's own table was wrong about two files, and the reason is worth keeping

**A-16 recorded `TASK-REGISTER.md` and the 2026-10-08 brief as "Redacted". They
were not** — eight sites between them still named the customer. The earlier pass
removed the full name, the email and the mobile number, and left every bare
first name standing.

**The success test caused it.** A-16's test was a `grep` for an email address
and a phone number. A first name matches neither, so the tree tested clean while
eight sites still named him. **§5 lists names first** of the four things it
forbids — and a name is the only one of the four you cannot grep for without
already knowing it, which is exactly why it got skipped.

**This is T-27's defect in different clothing.** There, a Routine reporting
`SUCCEEDED` was read as a brief delivered; the status was real and measured the
wrong thing. Here, a grep returning nothing was read as a tree with no customer
identity in it. **A test narrower than the rule it tests reports success
early**, and in both cases the gap survived weeks because the test kept passing.
T-51's packet carries a deliberately non-grep success test on that basis.

### What was deliberately not done

**Nothing was contacted, sent or published.** The customer has not been told and
must not be — Class C, separate decision, and the material at risk is his own
name and number, already known to him.

**The git history was not touched and cannot be.** Commits `dbd6c21`…`cb35580`
still carry the full name, email address and mobile number in a **public**
repository. Option C — rewrite and force-push — is forbidden by `CLAUDE.md` and
refused by this environment's proxy (OL-0026, OL-0027). **The end state is
current files clean, history not**, and T-48 stays **In Verification** on that
basis rather than Done. A-16 said in its own risk section not to let the packet
read as fixing the exposure; it does not, and neither does this entry.

**Option D (make the repository private) was not revisited.** A-13 settled it on
2026-10-08 and the owner declined to reopen it when asked directly the same day.
A-16 listed it only because a customer's mobile number is a different category
from the revenue figures A-13 was decided about; the owner's approval of Option
A answers it.

### The scan found more than the packet covered, so it became a second packet

A-16 was scoped to one customer. **The tree scan was not, and found nineteen
further contact items belonging to people who are not customers** — six named
officials' work addresses, two vendor-staff addresses, five consumer free-mail
addresses from inbound solicitors, two published agency phone lines, the owner's
own mobile in two draft signatures, and four no-reply robots.

**None of it is in breach of §5**, which is about customers. **All of it is
caught by §5's closing clause** — "a new category of sensitive material needs
its own decision." So it was **not** redacted on my own judgement, even though
most of it sits in files an agent may edit freely. **Raised as A-17 / T-51**,
with a recommendation (clean the five consumer addresses, keep the rest, write
the rule into the intake routine) rather than a question with no answer
attached.

**Scope was not expanded to execute it.** Thirteen sites were changed, all of
them inside what the owner approved.

### A fourth numbering collision, and the pattern is now the point

A-17 was first written citing **T-49**. **T-49 and T-50 had been taken 24
minutes earlier** by the scheduled cash review, which committed `18566cc` at
13:21:48Z while this work was in progress. Caught before the commit and
corrected to T-51.

**That is the fourth collision in this record** — OL-0023, OL-0028, A-13 and now
T-49 — **every one of them two sessions appending to the same register at the
same time.** Re-reading the tail before taking a number has caught all four, but
it is a habit standing in for a fix. **The fix is A-10**: four Routines in four
sessions instead of four serialising through one host. Worth noting that today's
three scheduled runs all succeeded _and_ produced a collision; the stopgap
working is not the same as the stopgap being right.

### One correction to this session's earlier reporting

At 13:20Z I told the owner the Friday cash review had been delivered but had not
committed, and that the host session's identical token counters across two reads
81 seconds apart were "consistent with a stalled session _and_ with a
turn-boundary snapshot", which I could not distinguish. **It was the snapshot.**
The cash review committed `18566cc` at **13:21:48Z**, 2h10m after its 11:11:22Z
firing, and `docs/ops/briefs/2026-10-09-cash-review.md` is in the tree. **Three
of three scheduled firings delivered today.** The scheduled re-check I had armed
for 14:31Z (`trig_015eubXSgqzNsYqwnULQvS7v`) was deleted as redundant.

Declining to call it either way was right — the two causes genuinely were
indistinguishable from the available readings. **But `external_metadata`
counters on another session are a turn-boundary snapshot and should not be read
as a liveness signal at all**, which is a cheaper lesson than waiting 70 minutes
for.

---

## OL-0037 — 2026-10-12 · Monday intake: a phishing attempt, and a mailbox that has sent nothing in three days

- **Timestamp** 2026-10-12T10:40:00Z
- **Task** T-30 (**verified**), T-37, T-42 (**updated**), T-52…T-55
  (**created**) · **Approval** S-01 (Class A routine), fired by Routine "DD84
  Inbox and Lead Intake (repo-attached)", `trig_01UdMtZvf1BdVuYoucd6UY7N`,
  10:20:26Z.
- **Action** Ran the inbox intake for the three days since OL-0033, including a
  weekend. Reviewed 48 threads across inbox, **sent** and drafts. Four tasks
  created, one retitled, one accepted risk re-verified. **No draft written and
  nothing sent.**
- **Tool** `mcp__Gmail__search_threads` ×3, `get_thread` ×2, `list_drafts`;
  `git`; `Read`/`Write`/`Bash`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 50 tasks, 17 packets.
- **After** 54 tasks, 17 packets, `docs/ops/briefs/ 2026-10-12-inbox-intake.md`.
  **No packet raised** — none of the four findings needs a decision that A-15,
  A-16 or A-17 does not already cover.
- **Fourth scheduled firing to commit.** Intake, daily brief and cash review on
  Friday; this is Monday's.

### The single most useful query was `in:sent`, and it returned nothing

**`in:sent newer_than:3d` is empty. Not one message has left this mailbox in
three days.** That one empty result settled three separate questions:

1. **T-30's Monday Routine fired at 09:00Z this morning and sent nothing.**
   Verified rather than assumed, the same way OL-0020 did it. **Fifth
   consecutive green no-op.** A-12's acceptance holds; its single voiding
   condition — the first real Ledger subscriber — has not triggered, since the
   Ledger still has zero profiles. Next fire 2026-10-19T09:00Z.
2. **A-15's two drafts are still unsent.** The GDOT engineer has now been
   waiting **six days**, the packet four. The favourable permit answer it
   responds to is going stale.
3. **The C10 customer has had no reply and sent none** — five days of silence on
   both sides (T-37).

**An empty result from the right query is worth more than a full one from the
wrong query.** This is T-44's lesson arriving from the other direction: last
Thursday a single broad inbox query hid a customer job, and today a narrow
targeted one proved a negative three ways at once.

### Urgent: a credential phish is in the inbox, classified IMPORTANT

Thread `1a120384795bc4cf`, received 2026-10-09T10:32Z and **unread for three
days.** It impersonates Meta — "finalize the system security check for
DOWNDIRTY84" — from **a consumer Gmail address**, with the login link pointing
at **a Google Forms page**. Four independent tells, all on the face of the
message.

**Gmail put it in the inbox as IMPORTANT and CATEGORY_PERSONAL — not spam, not
promotions.** That is why it is Critical: it looks like real mail. **The URL was
deliberately not recorded in the repository**, which is public under A-13;
reproducing a live phishing link here would republish the attack. Torque did not
click it and did not alter mail state. → **T-52**

Three other account notices landed in the same window — a Chime new login, two
Disney+ new-login notices with a passcode, and the fifth day of card toggling.
**No evidence links any of them to the phish and none is claimed.** They are
grouped because checking them is one task, not five.

### What else the window held

| Finding                                                                                                                                                      | Why it is in the register now                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **A purchase proposal on the shop parcel, no reply in 6 days** (`1a0f74adc1dbd49a`), with a follow-up draft created **9 minutes before this run** and unsent | T-38 tracked the **GDOT permit** for this parcel since 10-08. **Nobody had tracked whether DD84 can buy it.** → **T-53**            |
| **Three HP Tuners Universal Credits orders in three days**, amounts not in the previews                                                                      | OL-0035 marked T-37's margin INCOMPLETE for want of a software-credit figure. **These are that figure, unread.** → **T-54**         |
| **Money arrived via Chime**, a channel `ventures.md` does not list                                                                                           | OL-0035 could not state a cash position. **A fifth payment channel makes that a measured fact rather than a suspicion.** → **T-55** |
| **Drafts backlog 14 → 15**: one sent (GREC, which produced T-45), two added, both shop-building                                                              | **The five likely-loan-fraud drafts are untouched at 10–12 days.** T-42 retitled, not duplicated                                    |

### A correction I owe, from the sibling session's A-16 work

OL-0036 found the C10 customer's **first name** in **thirteen sites across four
files**, including the two files this session reported as redacted on
2026-10-09. **That report was wrong and the reason is worth keeping:** the
redaction script asserted that the full name, the email and the phone number
were absent, and **a bare first name matches none of those three patterns.** §5
lists names first among the four things it forbids, and a name is the one you
cannot grep for without already knowing it.

**The test was narrower than the rule it was testing, so it passed early.** That
is the same defect T-27 recorded — a success test that checks a proxy rather
than the thing — and it reappeared inside the very run that was fixing a
different instance of it. **Noted here because the lesson is the generalisable
part, not the eight missed strings**, which the sibling has since removed.

- **Error** None introduced this run. **Class A held**: nothing sent, forwarded
  or replied to; no label applied; no thread moved, archived, trashed or
  reported — **including the phishing mail, which was read and left in place for
  the owner**; no draft created, edited, sent or deleted; no calendar write; no
  price quoted; no payment action. **No customer name, email or phone number was
  written to this repository**; people are identified by thread ID throughout.
- **Remediation** Not applicable; nothing failed. **PayPal still needs
  re-authentication** since Friday — transactions, invoices and disputes all
  unreadable, joining Stripe and bookipay in T-36. Canva also now needs auth,
  which matters to nothing here.
- **Owner-side and open, oldest first** — **A-15** (two sends; a state engineer
  waiting six days), **A-07**, **A-17**, **T-52** (the phish, today), **T-53**
  (the property follow-up, drafted and unsent), the C10 determination (T-37),
  **T-49** (the declined transfer, still unread after three days), **T-50** (the
  HP Tuners do-not-sell list, now six days past its effective date), T-46, T-54,
  T-55, and **the card-toggling question, now five days unanswered.**
- **Worth stating plainly** — **no lead arrived and no customer wrote.** The
  mailbox's business content over three days was one attack, one unanswered
  property proposal, three credit purchases and one inbound payment nobody has
  classified. **A quiet weekend for sales is not a quiet weekend for risk.**

---

## OL-0038 — 2026-10-12 · Monday daily brief; PayPal joins the unreadable, and the board drifts for the sixth time

- **Timestamp** 2026-10-12T11:04:00Z
- **Task** T-23, T-30, T-36, T-37, T-46, T-49, T-52…T-55 · **Approval** S-01
  (Class A routine), fired by Routine "DD84 Daily Command Brief
  (repo-attached)", `trig_01Uw62JeMqdK6DaLatfk3BXX`, 10:50:58Z.
- **Action** Ran the daily command brief. Read three connectors, degraded four,
  reconciled two approvals-board defects, created no task — this morning's
  intake had already captured everything in the mail.
- **Tool** `mcp__Google_Calendar__list_events`, `mcp__Shopify__list-orders`,
  `mcp__github__list_pull_requests`, `ToolSearch` (to establish PayPal's
  absence); `git`; `Read`/`Write`/`Bash`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 54 tasks, 17 packets, A-16 shown Pending, A-17 absent from the
  board.
- **After** 54 tasks, 17 packets, `docs/ops/briefs/ 2026-10-12-daily-brief.md`.
  **No new task and no packet** — correctly, since OL-0037 had just covered the
  same window's mail.
- **Fifth scheduled firing to commit.** Four on Friday and Monday's two.

### PayPal is gone, which makes three of four payment systems unreadable

**PayPal's tools are no longer present in this session.** Not an error on call —
**absent.** `ToolSearch` for `list_transactions` at 10:58Z returned no match,
and the server is listed as requiring authentication. It dropped mid-run during
Friday's cash review and has not recovered.

| System     | State                                        | Since                      |
| ---------- | -------------------------------------------- | -------------------------- |
| Stripe     | **Absent from the session**                  | 2026-10-08, first observed |
| bookipay   | **No API**, by design                        | always                     |
| **PayPal** | **Requires re-authentication; tools absent** | **2026-10-09, new**        |
| Shopify    | Reachable. **0 orders**                      | —                          |

**The only payment system still answering has never carried a single order.**
That is the fifth consecutive degraded money section and the first one that got
_worse_ rather than staying level — **T-36.**

### Six transactions are known to have happened and not one amount is known

Every one surfaced through **mail**, not through a payment system: a **declined
bank transfer** (T-49, 10-05), **three HP Tuners credit orders** (T-54, 10-09 to
10-11), **money received via Chime** (T-55, 10-10), and the **Webador annual
auto-charge** (T-46, pending).

**Six events, six unknown amounts, none estimated.** This is what T-36 costs in
operational terms rather than in principle: **the business is visibly
transacting and no figure is readable.** An inbound payment nobody can size is
as much of a hole as an outbound one.

### A sixth board drift, and the count is now across three sessions

Reconciliation found the approvals status board contradicting its own packets:

1. **A-16 read `Pending`.** Its Response block records **APPROVE (Option A),
   owner, 2026-10-09**, and a sibling executed it the same day (OL-0036).
   Corrected to **Approved (executed)**.
2. **A-17 had no board row**, although the packet exists at line 1128 and T-51
   cites it as pending. Row added.

**The running count: T-11 and T-13 (59 days stale, found 10-08), T-23, T-29,
T-32 twice, and now A-16 and A-17.** Six instances in five days, **introduced by
three different sessions** — this one included. It is not carelessness in any
one run; it is that **a hand-maintained summary beside a 2,000-line register
will drift, and every session that writes to the record is equally likely to
leave it behind.**

**OL-0034 already reached the conclusion and nothing has acted on it:** the
summary should point at `APPROVALS.md` as the single source rather than restate
its state, or something should generate it. **Recorded again here only because
the count rose, not to propose a seventh process for remembering the first
six.** It belongs in the next revision of `docs/ops/README.md`.

### T-30 re-verified by this morning's intake, not re-checked here

The Monday 09:00Z send Routine fired and **sent nothing** — established in
OL-0037 by `in:sent newer_than:3d` returning empty, 80 minutes after the fire.
**Not re-asserted independently here**; this entry cites that read rather than
claiming a second one. Fifth consecutive no-op. Next fire **2026-10-19T09:00Z**.

- **Error** None introduced. **Class A held**: nothing sent, published, charged,
  booked or changed in any live system; no calendar write; no customer
  contacted; no price quoted; no connector written to.
- **Remediation** Not applicable. **PayPal needs the owner to re-authorise it**;
  that is now the third payment connector in T-36.
- **Owner-side and open** — **T-52** (the phish, dated today, unread four days),
  **A-15** (two written messages; a state engineer waiting six days), **T-53**
  (a third written message, unsent), **A-17**, **A-07** (67 days), **A-10**, the
  C10 determination (**T-37**, five days silent), **T-46** (dated today), T-42,
  T-49, T-50, T-54, T-55, T-29, T-30, T-45 — and **the card-toggling question,
  now in its sixth day.**
- **Worth stating plainly, and it is the useful observation of the run** — the
  calendar is empty and no reachable system shows money moving, which reads like
  a quiet Monday. It is not. There is a live phishing attempt in the inbox,
  **three messages written and none sent**, two counterparties waiting six days
  each, and six transactions nobody can price. **Almost nothing outstanding here
  is blocked on work; it is blocked on sending, reading or deciding things that
  are already prepared.**

---

## OL-0039 — 2026-10-12 · First opportunity scan: six real candidates, none validated

- **Timestamp** 2026-10-12T11:55:00Z
- **Task** T-39, T-42, T-53, T-56…T-59 (**created**) · **Approval** S-01 (Class
  A routine), fired by Routine "DD84 Weekly Georgia Opportunity Scan
  (repo-attached)", `trig_01UPEmQbHN6vzC4PKse2zf23`, 11:26:42Z.
- **Action** Ran the Georgia opportunity scan. **The first one this platform has
  ever run** — `docs/ops/briefs/` held no prior `*-opportunity-scan.md`. Found
  six candidates, scored and ranked all six, recorded seven closed programmes,
  created four tasks. **Contacted nobody, applied for nothing.**
- **Tool** `WebSearch` ×6, `WebFetch` ×2 (**both refused**), `Bash` (`curl` to
  measure the block), `read_documentation`; `Read`/`Write`.
- **Operator** Claude (agent), cqvhy6 host session
- **Before** 54 tasks, 17 packets, no opportunity scan on record.
- **After** 58 tasks, 17 packets,
  `docs/ops/briefs/ 2026-10-12-opportunity-scan.md`. **No packet raised** —
  nothing in the scan needs outreach approval that T-42 does not already cover.
- **Sixth scheduled firing to commit**, and the sixth of six routines fired
  since the A-14 stopgap. **All four scheduled routines have now delivered.**

### The routine's validation step is blocked, and that is the run's main finding

**Design: `WebSearch`, then `WebFetch` on the primary source. The second half
does not work here.** Every issuing body refused:

| Host              | Result                             |
| ----------------- | ---------------------------------- |
| `dca.georgia.gov` | **HTTP 403 CONNECT tunnel failed** |
| `www.sba.gov`     | **403**                            |
| `grants.gov`      | **403**                            |
| `www.rd.usda.gov` | **403**                            |

**Measured, not inferred.** `WebFetch` reported `ENOTFOUND`, which looks like
DNS; `curl` through the proxy returned **403 CONNECT** for all four, and
`$HTTPS_PROXY/__agentproxy/status` reports the proxy **healthy** —
`bundleCoversEveryHost: true`, `recentRelayFailures: []`. **So it is the
environment's network policy**, and the remedy is the owner's: Allowed domains,
or a broader access level.

**Applied honestly, the command file's own rules bite hard.** It says _never
state a deadline you have not seen on the issuing body's own page_ and _never
score an opportunity you could not open_. Its degradation clause permits listing
a candidate with **source reliability scored low for that reason** — which is
what was done. **Every one of the six carries 3–5 out of 15 on that component
purely because of the block**, and **no deadline in the brief is stated as
fact.** The ranking is a ranking of search summaries and says so in its own
header. → **T-59**

### A second defect: the scoring file is gone and the command file is stale

- **`src/lib/scoring/score.ts` does not exist on this branch** — it left with
  the Ledger tree on 2026-09-25 (OL-0016). The **components and maxima
  survived** in the command file's inline restatement and sum to 100, so scoring
  was possible. **The classification bands did not survive.** No bands were
  reported, the "worth investigating" gate could not be applied, and **no
  threshold was invented** — due-diligence tasks went to the top three by raw
  score, with the substitution stated.
- **The command file opens "This repository _is_ the Georgia Opportunity
  Ledger"** and directs a Supabase duplicate check against Ledger records.
  **That ended on 2026-09-23** (T-28). The Ledger database was **deliberately
  not queried**: it is another business's production data, and a duplicate check
  against its editorial records is meaningless for DD84's own opportunities.
  Deduplication was against the register and prior briefs — of which there are
  none. → also **T-59**

### The ranking, and the thing worth noticing about it

| #   | Candidate                  | Score  | Why it sits there                                                                              |
| --- | -------------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| 1   | **Georgia SBDC advisory**  | **64** | Free, confirmed, already offered — **and already missed once**                                 |
| 2   | USDA B&I guarantee         | 50     | 85% guarantee reportedly suits thin revenue history; **programme authority contested in FY27** |
| 3   | Georgia Rural Zone credits | 48     | **25% of purchase price, capped $125,000** — and largely unusable, see below                   |
| 4   | SBA 504                    | 47     | The conventional path, stalled on **one unsent email, 13 days old**                            |
| 5   | TCSG apprenticeship        | 41     | **Automotive is an explicit focus area** — premature by one hire                               |
| 6   | USDA REAP                  | 34     | Possibly 19 days out, **on the weakest source in the scan**                                    |

**The top-ranked opportunity is a free advisory session DD84 already stood up.**
That is not a quirk of the scoring — it is the honest result. It is the only
candidate that is confirmed, costless, already extended, and blocked by nothing
but a calendar booking, and it is **also the cheapest route to the knowledge
this scan could not obtain**: an SBDC adviser knows which of candidates 2 to 6
Georgia is actually operating this year.

**The Rural Zone entry is the one to read carefully.** It scores **24/25 on
financial value and 1/5 on risk**, and the reason is the same fact: the credits
are **non-refundable Georgia income tax credits**, and DD84's all-time revenue
is **$3,507.86** with nothing since 2025-09-12. **A $125,000 credit against
almost no tax liability is a headline, not a benefit.** Recording that was more
useful than recording the cap.

**Seven closed programmes were kept rather than dropped**, several of which
recur. Two independent sources said **Georgia's 2026 small-business grant
calendar has largely closed** — which is itself the strategic finding: **for a
business seeking building finance, the live paths are debt and tax credits, not
grants.** The one watch item is the **FedEx Entrepreneur Fund**, whose published
criteria DD84 appears to meet and whose 2026 window could not be confirmed.

- **Error** None introduced. **Class A held**: nobody contacted, nothing applied
  for, no capital committed, no agency or broker approached. **Nothing written
  to any Ledger database and no record moved through any editorial workflow.**
  `docs/growth/` untouched. **No deadline, award amount or eligibility rule was
  invented**, and every candidate separates a **Stated by source** block from an
  **Assumed by Torque** block, as §8.8 requires.
- **Remediation** The scan's own degradation was handled per the command file
  rather than worked around. **Two repairs are outstanding**: the owner's
  network policy, and Torque's amendment of the command file. Both in T-59.
- **Owner-side and open** — **T-52** (the phish, now four days unread), **A-15**
  (two written messages; GDOT waiting six days), **T-58 / T-42** (the GACDC
  draft, 13 days unsent), **T-53** (the property follow-up, drafted and unsent),
  **T-59** (network policy), **A-17**, **A-07** (67 days), **A-10**, the C10
  determination (**T-37**), T-46, T-49, T-50, T-54, T-55, T-29, T-30, T-45 — and
  **the card-toggling question, now in its sixth day.**
- **Worth stating plainly** — **the scan worked and its output is weaker than it
  looks.** Six candidates, a defensible ranking, and not one verified deadline.
  **The most actionable things it surfaced were not new opportunities at all:
  they were two messages already written and unsent, and a free meeting already
  offered.** That is the third routine this week to reach the same conclusion
  from a different direction.

---

## OL-0040 — 2026-10-13 · Tuesday intake: the most productive day in this record sent nothing

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled Routine "DD84 Inbox
  and Lead Intake"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-13T10:21:03Z**, into this host session. **Sixth scheduled firing to
  reach a session with the repository attached.** Class A throughout.
- **Checkout verified before writing** — HEAD `b0d926b`, equal to
  `origin/claude/claude-md-docs-cqvhy6`, **36 tracked files**, no `src/`, clean
  tree. **The firing prompt's "28 files" is stale and drifts upward every time a
  brief commits**; it is a constant in the prompt and a variable in the
  repository. Worth fixing in the prompt, which needs the Routines UI (A-10).
- **Window** Since OL-0037, **2026-10-12T10:40Z — 24 hours**, queried
  `newer_than:1d` with a two-day sent sweep. **27 threads reviewed, 8
  actionable, 19 no-action.**
- **Multi-query discovery held** — the T-44 fix is now proven five runs running.
  `category:primary`, `is:important`, `in:sent`, `list_drafts`. **A single
  `in:inbox` query would have buried the Reddit flag under newsletters again.**

### What the day actually contained

**The owner had his most productive day in this record and sent no business
correspondence.** He worked the live C10 job twice, coached two more people on
Reddit, and QA-tested his own website's contact form. **`in:sent newer_than:2d`
returned exactly one thread — the C10 job — and the drafts backlog is unchanged
at 15.** Both halves of that are findings, and the second one is the fourth
routine this week to reach it from a different direction.

### Three new tasks, and the first has a deadline the issuer set

- **T-60 — Reddit flagged the account for automated activity, seven days.**
  Thread `1a13111f99c61711`, 2026-10-12T17:03:43Z, IMPORTANT. Deadline
  **~2026-10-19**. **This is the only dated deadline in the run, and the only
  one this week that came from an issuer's own message** — the 2026-10-12
  opportunity scan produced six candidates and not one verified deadline.
  **Critical because r/LSSwapTheWorld has produced five lead candidates in six
  days and nothing else in this record has produced one**, while `ventures.md`
  still records the channel behind the three paying customers as `UNKNOWN`. **No
  cause for the flag is claimed**, and the Reddit threads themselves could not
  be read — they are on reddit.com and egress is blocked (T-59), **so this task
  cannot diagnose its own cause from a session.**
- **T-61 — Square turns offline payments on by default in ~2 days**, received
  **ten minutes before this run fired.** Two findings, and the second is bigger:
  a money setting changes by inaction, **and Square is the sixth payment channel
  absent from `ventures.md`** — Chime was the fifth, three days ago (T-55).
  **Two unrecorded ways money can reach this business, found in three days, by
  reading email.** That does not widen T-36's gap so much as make **the size of
  the gap unknown**, which is the retrospective justification for the 2026-10-09
  cash review declining to state a revenue total.
- **T-62 — Vercel reports three misconfigured domains across one project.** **A
  hosting platform the registry has never mentioned.** The count is the email's,
  **not a reading of Vercel**, and the domains are not named because they were
  not read. Sized as a registry gap, not an outage, and **the sizing will change
  the moment they are read.**

### Five existing tasks updated, and one of them was framed wrong

- **T-37 — the C10 job came back to life: 22 → 29 messages**, seven on
  2026-10-12 after five days of silence. Customer returned the checklist (oil
  **42–45 PSI**, fuel **33 PSI KOEO / 53 psi idle**, **91 octane**, wideband
  "appears to be functioning"), dropped IAC to **8–10%**; **the owner replied
  twice**, naming **iridium plugs** as the first problem and recommending **NGK
  TR5 copper**; the customer has a **second wideband inbound** to test. **The
  correction: this register recorded the blocker as a contradiction the owner
  owed a determination on, and it was resolved by not resolving it.** He moved
  to an independent finding and left the sensor hypothesis to be settled
  empirically with a spare part. **That is better than what the register was
  waiting for, and the register was wrong to frame a live diagnostic exchange as
  stalled on one owed answer.** Recorded as a correction, not a win. **What has
  still never happened in 29 messages: a price.** $99–$650 against the
  catalogue, **and the range stays a range.**
- **T-33 — `dd84-api` failed again**, 2026-10-12T14:00:40Z, same "Exited with
  status 1". **Three alerts in five days.** This **corrects yesterday's brief**,
  which read the quiet period as consistent with stabilisation **while
  explicitly refusing to call it evidence of that.** The brief was written at
  ~11:00Z and the alert came at 14:00Z: **accurate when written, overtaken three
  hours later.** The hedge is the reason this is an update and not a retraction.
  Service still unidentified; **three failures of an unidentified service is
  three times the unknown, not three times the information.**
- **T-43 — `downdirty84llc.com` has a working contact form, proven by the
  owner's own QA submission** (thread `1a130a7e1ee4d5f5`, 2026-10-12T15:07:49Z,
  "DD84-WEBSITE-QA-20261012-PHONE Owner-authorized website test only").
  **Evidence, not inference.** It upgrades the task from "a domain nobody
  recorded" to **"a lead-capture surface nobody recorded"** — and who watches
  those submissions is not established. **Status stays Planned, because the
  estate got longer and less complete the same day** (T-62).
- **T-41 — handles four and five**, u/combustable_lemons3 (shortened harness,
  **no-start, ~300 rpm on crank** — the closest thing to a qualified lead in
  this register, and **still down**) and u/Ill_Relationship_365 (**2WD truck,
  collecting quotes now**). **Nobody contacted. T-60 is now a prerequisite for
  this task, not a neighbour of it.**
- **T-52 — the phish is four days unread**, and the cluster gained a sixth item:
  **two GitHub device-verification emails**, both IMPORTANT. One week now holds
  a phishing attempt, a Reddit automation flag, a GitHub device prompt, Chime
  and Disney+ logins and six days of card toggling. **No linkage claimed, no
  cause asserted — the point is that it is one check, not six**, and that a
  reader seeing them one per brief would never see the density.

### The seventh instance of summary drift, found in this register's own tally

The Summary counts line **was wrong before this run touched it**: "3 In
Verification" against 4, and "58 tasks" against 59. **Recounted mechanically
from the table and corrected to 62, with the drift recorded in place rather than
quietly fixed.** That is **the seventh instance** (T-11, T-13, T-23, T-29, T-32
×2, A-16, A-17, now this). **OL-0034 and OL-0038 both concluded the fix is
structural, and this is the evidence for it:** a hand-maintained tally beside a
growing table is a defect generator, and every routine that writes a row must
recount or it lies. The open-items table was refreshed in the same pass — T-37
no longer "waiting on a customer on a work trip", T-52 at four days not three,
T-53 and A-15 at seven days not six.

### No draft written, and for the first time that was the right answer

**None of the four actionable items wanted a message.** Reddit verification is a
click. Square needs a decision about money. **The C10 thread is a live technical
exchange the owner is handling competently and at pace — drafting into it would
be interference**, and the diagnosis is safety-adjacent and his by rule. The
affiliate solicitation deserves no reply.

### Degradation, named

**PayPal** still requires re-authentication (unchanged since 2026-10-09).
**Stripe** absent, **bookipay** no API — **so the C10 job's billing status is
still unknown and is not asserted** (T-36). **Superhuman Mail and Canva** need
interactive authentication. **Square's current setting was not read** — no
connector exists, only the email about it. **Vercel's domain list not read.**
**The Reddit threads not read** — egress blocked (T-59). **Attachments** still
unreadable. **~20,700 unread remain unassessed** outside the window. **No
section became an estimate.**

### Class A held, and §5 held

Nothing sent, forwarded or replied to. No label applied, no thread moved,
archived, trashed or reported. No draft created, edited, sent or deleted. **No
Reddit action of any kind — notably not the human-verification click, which is
the owner's and which an agent performing would be the exact behaviour being
flagged.** No calendar write, no customer contacted, no price quoted, no payment
action, **no Square setting touched.** `docs/growth/` not written to, though two
items were flagged for hand-off (the Pinterest CSV with 31 failed rows, and the
web-estate question). **No customer name, email or phone entered this
repository** — everyone is identified by Gmail thread ID or public handle — and
**the affiliate solicitor's address was deliberately not recorded**, which is
the same category A-17 is already with the owner about.

- **Needs the owner today** — **T-60** (Reddit, ~6 days left), **T-61** (Square,
  ~2 days), **T-52** (the phish, 4 days unread), **A-15** (two written messages,
  GDOT 7 days), **T-58 / T-42** (the GACDC draft, **14 days unsent**), **T-53**
  (drafted, unsent, proposal unanswered 7 days), **T-37** (the price), **T-59**
  (network policy), **A-17**, **A-07** (68 days), **A-10** — and **the
  card-toggling question, now in its seventh day.**
- **Worth stating plainly** — **the business did real work yesterday and none of
  it left the building.** Two platform deadlines arrived in 24 hours, both
  self-executing if ignored, and **the only channel producing leads is the one
  with a clock on it.** Meanwhile four written messages sit unsent, the oldest
  for fourteen days. **The constraint is not finding work; it is sending what is
  already written.**

---

## OL-0041 — 2026-10-13 · Daily brief, thirty minutes after the intake: an empty calendar and an unexplained code

- **Routine** `/dd84-daily-brief`, **fired by the scheduled Routine "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-13T10:51:18Z**. **Seventh scheduled firing to reach a session with
  the repository attached.** Class A throughout.
- **Checkout verified before writing** — HEAD `54ffb7c`, equal to
  `origin/claude/claude-md-docs-cqvhy6`, **37 tracked files**, no `src/`, clean
  tree. The firing prompt again asserts 28 files; **it was 36 before this
  morning's intake committed and 37 after**, which is the point made in OL-0040
  — a file count hard-coded in a prompt is a constant checked against a
  variable. The substantive half of the check is sound and did its job: **no
  `src/` and the right branch pointer.**
- **Connectors reached** Google Calendar (2 calendars), Gmail, Shopify, GitHub.
  **Not reached** Stripe, PayPal, bookipay, Square, Chime, Render, Superhuman
  Mail, Canva. **Stripe and PayPal were confirmed absent by tool search
  returning no match, not assumed from the last run's memory.**

### Two things arrived in the thirty minutes since the intake

- **T-63 — two Shopify account-verification codes**, `mailer@shopify.com`,
  **10:33:35Z and 10:36:34Z**, three minutes apart, both IMPORTANT, second
  unread. **The codes are not recorded in this repository** — they are
  credentials and §5 forbids them here, and a ten-minute expiry does not make
  them a different category. **No cause is asserted.** Three explanations fit
  equally: the owner retrying, a connector re-authenticating, or someone else
  attempting entry — in which case the code landing in this mailbox is what
  stopped them. **What this session can rule out, precisely: it made no Shopify
  call between 10:21Z and 10:40Z**, the window both codes were issued in; the
  intake read Gmail only, and its own "not checked" list is the evidence. The
  first Shopify call from here was `list-orders` at **10:53Z, seventeen minutes
  after the second code.** **That rules this session out and rules nothing else
  in.** Scored **High, not Critical** — there is no evidence of compromise, and
  treating an unexplained code as a breach would be the same defect, inverted,
  as treating a quiet Render log as a fix.
- **Pinterest closed itself, and this record owed the closure.** Yesterday's
  intake flagged **50 rows loaded and 31 Video Pin rows failed**
  (10-12T18:12:22Z). At **10-13T10:30:53Z** Pinterest confirmed **"31 Pins were
  created"** — the failed rows were re-uploaded and succeeded. **The owner fixed
  it with no agent involvement.** It is marketing and therefore Rev's, and it is
  recorded here only because this record raised the failure.

### The empty calendar is a real read, and it is nine days long

Both calendars read at **10:52Z** for 2026-10-13 and 2026-10-14. **Zero
events.** Stated as a real empty read rather than an unavailable source, because
the distinction is the whole discipline: an unreachable calendar and an empty
one look identical in a brief that does not say which it was.

**Nine consecutive days with no calendar entry**, against a live customer job, a
state-agency permit review and a property proposal in flight. **Not a complaint
— an observation with a consequence**: this business runs in email and on
Reddit, so an empty calendar must not be read as a free day. Recorded so the
next brief does not rediscover it.

### No revenue total, for the fourth routine running

**Shopify: 0 orders, read 10:53Z — a real zero, because Shopify answered.**
Stripe, PayPal, bookipay, Square and Chime: **not available this run, named
individually.** Five of six payment channels unreadable, **two of them unknown
to this record eight days ago.**

**A total across one readable system and five unreadable ones is not a total**,
and none was offered. `ventures.md`'s last recorded payment (2025-09-12) is
quoted as a document, not a reading — **its verification date is 2026-08-03, now
71 days past the 30-day re-check rule**, so even the baseline is stale by this
record's own standard.

### What the top three displaced, said out loud

Chosen: **T-63** (ten minutes, the only item that could be an active
compromise), **T-61** (Square, ~2 days, self-executing), **T-60** (Reddit, ~6
days, the only evidenced lead channel). **All three have clocks.**

**Displaced: the four written-and-unsent messages** — A-15 ×2 at 7 days, the
GACDC draft at **14 days**, the realty follow-up. **They are almost certainly
the highest-value hour available to this business, and they were not picked,
because nothing forces them today.** That is recorded rather than smoothed over:
a prioritisation rule that always loses to a deadline will keep deprioritising
the backlog that has no deadline, which is exactly how a fourteen-day-old draft
gets to fourteen days.

### Overdue, split rather than counted

**Twenty open tasks past due.** Ten are DD84 operations from the last five days
and **all ten are the owner's**; ten are Ledger-era engineering from August and
early September, **five of those blocked on a pending packet and therefore
waiting correctly.** **None of the Ledger ten will produce DD84 revenue.**
Saying which half is which is more useful than reporting twenty, and **three of
the DD84 ten — T-38, T-39, T-42 — resolve the moment four already-written
messages leave the mailbox.**

### Six packets pending, four of them past two months

**A-15** (7 days, and the only one that costs money today), **A-17** (4 days),
**A-10** (66 days), **A-05**, **A-06**, **A-07** (68 days each, all
Ledger-side). **A-14 is APPROVED and is why this session exists**, which is also
why A-10 stays open: the interim fix serialises four routines through one
context and is not the repair.

### The register's own tally, recounted again

**63 tasks**, recounted mechanically after this write. OL-0040 recorded the
seventh drift instance and corrected 58→62; **this run adds T-63 and recounts
rather than incrementing**, and the Summary line now states that it is recounted
after every write with the times. **That is a convention, not a fix** — the
structural repair is still outstanding and still the right conclusion.

### Class A held

Nothing sent, replied to or forwarded. **No calendar event created, moved,
confirmed or declined — both calendars read only.** No label applied, no mail
state changed. No charge, refund, invoice, payout or fulfilment action. **No
Shopify verification code used, and neither code written to this repository.**
No Shopify, Vercel, Supabase or GitHub write of any kind. No task marked Done on
inference. `docs/growth/` untouched. No customer name, email or phone written
here — **including the phone number inside the owner's own QA contact-form
submission, which was read and deliberately not recorded.**

- **Needs the owner today** — **T-63** (ten minutes), **T-61** (~2 days),
  **T-60** (~6 days), **T-52** (4 days unread), **A-15** (7 days), **T-42 /
  T-58** (14 days unsent), **T-53**, **T-37** (the price, 29 messages),
  **T-49**, **T-46** (auto-charges itself), **T-50**, **A-17**, **T-59** — and
  **the card-toggling question, now in its seventh day.**
- **Worth stating plainly** — **this brief found two new things in thirty
  minutes and neither was work the business chose.** One was a verification code
  nobody has explained; the other was Pinterest closing a failure by itself. The
  calendar is empty, the storefront took no orders, five of six payment channels
  cannot be read, and **four written messages still have not been sent.** The
  constraint has not changed in four routines across three days, and **naming it
  a fourth time is the most honest thing this brief can do.**

---

## OL-0042 — 2026-10-13 · First follow-up run: a second live customer nobody recorded, and two jobs with no price

- **Routine** `/dd84-followup`, **invoked by the owner** at
  **2026-10-13T11:12Z** — the third routine of the day and **the first time this
  routine has ever run.** Class A throughout.
- **Checkout verified before writing** — HEAD `44b277d`, equal to
  `origin/claude/claude-md-docs-cqvhy6`, **38 tracked files**, no `src/`, clean
  tree.
- **Reached** Gmail, Google Calendar, Google Drive, Shopify (orders **and**
  customers). **Not reached** Stripe, PayPal, bookipay, Square, Chime — **so not
  one payment system was readable**, which decided most of what this run was
  allowed to do.
- **Candidates 6 · Drafted 1 · Held for payment confirmation 4.**

### The find, and how it was found

**There is a second live tuning job and this register had never mentioned it.**
Gmail thread **`1a0e402cdcf75731`** — a **2018 Dodge Challenger R/T**, **28
messages**, 2026-09-27T17:56:10Z → 2026-10-02T20:06:05Z, hard-cranking and
intermittent no-start, **at least two revised tune files delivered** (confirmed
from their own text), six days of iteration, **and silent for eleven days.** Now
**T-64**, raised Critical.

**It was found in Google Drive, not in email.** Three customer videos — 158 MB,
114 MB, 97 MB — shared with the business account on 2026-10-02 and viewed by the
owner on 2026-10-04, **which no task referenced.** The files led to the thread.
**That is worth recording as a method**: five routines had read this mailbox and
none had found this job, because **every one of them searched mail by recency
and this job's last message fell outside every window.** Drive had no such
window.

### The second finding, which outranks the first

A targeted Gmail search over **every message to or from each live customer** for
`invoice OR price OR pricing OR deposit OR quote OR payment OR paid OR cost OR charge OR "$"`:

- **The Challenger customer — zero messages.**
- **The C10 customer — zero messages.**

**Two live jobs. 57 messages. Tune files delivered on both. Not one written
mention of money in either.**

**This is a result, not an observation.** Every prior brief said "no price was
noticed in N messages", which is a statement about attention. **Two deliberate
empty search results are a statement about the mailbox.** The distinction is the
whole difference between a thing someone might have missed and a thing that is
not there.

**What it is not, and the limit is stated rather than glossed.** It reads
**written** mail only. **A price agreed by phone or text would not appear**, and
DD84 publishes a business number. Every payment system is unreadable (T-36). So
**the billing position of both jobs is unknown and is not asserted** — T-64 asks
the owner instead of concluding.

**Why it is the revenue leak rather than a slow payment.** An unpriced job
cannot be invoiced, cannot be chased, and **cannot appear in any cash review** —
which explains why three cash reviews found nothing to report against a business
doing visible work. **It is not a late payment. It is an absent one.**

### The routine's hard rule did the work it exists for

The command file forbids drafting a money chase unless a payment system
confirmed the item is genuinely open. **None was reachable, so four items that
could each have carried a chase carry none:** both jobs' billing positions, any
review request, and the question of whether either customer is one of the three
known paying ones. **Each is in the Held section, naming the system that was
missing and what would confirm it.**

**One draft was written: a technical chase asking whether the revision was
flashed, how the car starts, and for a datalog.** It asks for no money, quotes
no price, offers no diagnosis, and **explicitly offers the customer the option
of saying the project is parked**, so it cannot read as pressure. Packet
**A-18** covers it — **one recipient, one message, sent verbatim or not at all**
— and says in terms what it does _not_ authorise, so an approval cannot be read
wider than it is.

**No chase for the C10 customer, and the reason is positive.** **DD84 spoke
last, eighteen hours ago.** No threshold is reached, the ball is with the
customer, and a chase would interrupt an exchange the owner is running well.

**No review request for anyone — and that is a measurement failure, not a real
zero.** Eligibility is \*complete **and paid\***, and **paid cannot be
established for anybody.** DD84 has three paying customers and no testimonial
library; **two jobs in flight could each produce a first review, and the gate is
not the customers' willingness but DD84's inability to read its own payment
systems.** The clearest price T-36 has carried yet.

### Three corrections from live systems

1. **The missed SBDC session is now confirmed from the calendar, not inferred
   from a chasing email.** Google Calendar, read 11:15Z: a 30-minute Teams
   meeting, **2026-10-06 19:30–20:00Z**, booked via Calendly on 10-02, organised
   by the adviser, **both attendees `accepted`**, status `confirmed`. **Real,
   agreed, unattended** — which makes the seven-day-unsent reschedule reply
   worse than the register had it, not better. **The adviser's name, email and
   phone are in that entry and were deliberately not copied** (§5; A-17 covers
   the category).
2. **T-41's row said "Three" lead candidates against a body saying five.** The
   body was updated at 10:40Z and the row was not, **so the board disagreed with
   the record for three hours.** Corrected. **The eighth instance of summary
   drift, and the same shape as all seven before it** — a detail updated in one
   place and not the other.
3. **`ventures.md` is right about 0 Shopify orders and silent about a customer
   account.** Shopify confirms **0 orders** and returns **one customer**:
   created 2026-10-07T21:35:33Z, **0 orders, $0.00 spent**, names and phone
   `null`, an **email-masking alias** for an address. Unrecorded for six days →
   **T-65**. **Not contacted**, because it may equally be the owner's own test
   from the week he was QA-testing the contact form, and **nothing in the data
   separates that from a real visitor** — the two call for opposite actions.

### What was not established, listed rather than smoothed

**The bodies of all 57 messages were not read** — senders, dates and sizes were
read for every one. Six SENT messages in the Challenger thread are 1.88–1.92 MB,
the same size class as the two confirmed tune files, **and are not asserted to
be tune files.** **The three videos were not opened** and no diagnosis is drawn
from them. **The three 2025 customers cannot be followed up from here at all** —
their identity is deliberately absent from this record (§5, T-48), so a
reactivation campaign is Rev's and needs the owner's own records.

### Class A held

**Nothing sent.** No reply, forward, review request or collection notice. **No
Gmail draft created** — the drafted message exists only in the brief, so the
mailbox's draft count is unchanged at 15. No quote cancelled, no slot released,
no amount written off, **no discount, extension or goodwill credit offered, no
price set.** No invoice marked paid, no job marked complete, nothing passed to
collections. **Calendar read only.** No Shopify or Drive write. `docs/growth/`
untouched, though the storefront-conversion half of T-65 was flagged for Rev.
**No customer name, email or phone written here** — both live customers are
Gmail thread IDs, the Shopify account is a Shopify ID, the Reddit candidates are
public handles, the SBDC adviser is a role, and **the Drive sharer is "a third
party".**

- **Needs the owner today** — **A-18** (one message, 11 days late), **and a
  price on both live jobs, which is worth more than the message.** Then **T-63**
  (ten minutes), **T-61** (~2 days), **T-60** (~6 days), **T-52** (4 days
  unread), **A-15** (7 days), **T-42 / T-58** (14 days unsent), **T-53**,
  **T-65** (one word), **T-49**, **T-46**, **T-50**, **A-17**, **T-59**,
  **A-10**.
- **Worth stating plainly** — **this routine's first run found a customer the
  operating record did not know about, and then found that neither of the two
  live jobs has ever been given a price.** Three cash reviews reported no
  revenue to report; **the reason was not that the work is absent, it is that
  the work was never priced.** The follow-up queue's one draft asks for a
  datalog, because **asking for money is the one thing it was not allowed to
  do** — and on today's evidence, the thing nobody has done is name a number.

---

## OL-0043 — 2026-10-14 · Wednesday intake: the customer replied, and yesterday's approved draft went stale in four hours

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled Routine "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-14T10:20:14Z**. **Eighth scheduled firing to reach a session with
  the repository attached.** Class A throughout.
- **Checkout verified before writing** — HEAD `2b8fdd4`, equal to
  `origin/claude/claude-md-docs-cqvhy6`, **39 tracked files**, no `src/`, clean.
  The prompt's "28 files" is stale for the third run running; **the substantive
  half of the check — no `src/`, right branch pointer — is what matters and it
  passed.**
- **Window** since OL-0040, **2026-10-13T10:40Z — 24 hours.** `newer_than:1d`, a
  two-day sent sweep, and a full draft list. **30 threads, 11 actionable, 19
  no-action.**
- **Reached** Gmail. **Not reached** PayPal, Stripe, bookipay, Square,
  Superhuman Mail, Canva.

### The finding that had to come first: a pending packet went stale

**The Challenger customer replied at 2026-10-13T15:39:45Z** — _"this is the log
from a hour+ drive"_, a 2.8 MB attachment, **still unread.** He ended eleven
days of silence.

**Packet A-18, raised at 11:34Z the same morning, asks him to flash the
revision, say how the car starts, and send a datalog. He had done all three four
hours and five minutes later.** Sending it now would tell a customer who has
just broken a long silence that nobody read his reply. **Recommendation
recorded: REJECT, or APPROVE WITH CHANGES against a redraft that answers the log
instead of requesting it.**

**The body of A-18 was left exactly as written.** `docs/ops/README.md` permits
editing only the Response and Actual-result blocks of a raised packet, so the
supersession went in the Actual-result block. **That is also the better record:
a packet that was right when raised and wrong four hours later is worth more
intact than tidied.**

**The generalisable lesson, and it is new.** This is the second time in three
days that output was overtaken within hours — the 10-12 daily brief's Render
line went stale at 14:00Z the same afternoon. **Both times the hedging held, so
neither became a false claim. The lesson is not "hedge more".** It is that **a
drafted outbound message has a shelf life, and A-18's was four hours.** A packet
left pending overnight may no longer describe the world it was written about,
and **nothing in this record's process currently re-checks a packet's premises
before it is approved.**

### The week's headline finding was wrong, and the correction is good news

**Four routines across three days reported that nothing was leaving this
mailbox.** OL-0040, OL-0041 and OL-0042 all named it the binding constraint.
**It was true at 2026-10-13T10:40Z and stopped being true ninety minutes
later.**

**The owner sent five messages on 10-13, three of them new outreach:** Colbert
City Hall (12:27:45Z), **Piedmont Water (12:28:46Z, new)**, **the Georgia DPH
Lead Environmental Health Specialist (12:30:14Z, cc a second officer, new)**,
the realty agent (12:30:36Z), and a Ledger support-mailbox delivery test
(16:14:59Z).

**And the sequencing is better than it looks: Colbert City Hall replied at
14:55:43Z naming that same DPH officer as the person who would have to decide.
He had written to the right official two and a half hours before the city told
him who it was.**

**So the constraint is narrower than this record claimed, not absent.** The
property and permitting work moves under its own steam. **What is still unsent
is the customer and funding correspondence** — A-15 at 8 days, the GACDC draft
at 15. **That distinction is sharper and more useful than the blanket claim**,
and the blanket claim is corrected rather than quietly dropped.

### Three new tasks, and the first is a month-old lead nobody read

- **T-66 — a real Lexus enquiry sat 23 days, and the contact form was never
  read.** A **2016 Lexus RC 350 F Sport, 2GR-FSE**, wanting _"just a mild
  burble"_, from **New York**, delivered by the `downdirty84llc.com` contact
  form on **2026-09-15T14:08:37Z**. DD84 replied **2026-10-08T14:38:21Z** —
  twenty- three days later, opening _"Sorry for the delayed response"_ — and
  **has heard nothing in the six days since.** `ventures.md` prices Toyota/Lexus
  ECU tuning at **$400–$650**. **The 23-day delay is the probable cause of the
  silence and is labelled probable, not asserted.** **This forces a correction
  on T-43**, which recorded the form as a newly discovered surface, confirmed
  working by the owner's own QA test on 10-12. Both statements were true; **the
  conclusion was wrong in the way that mattered. The form was never broken and
  never new — it had been delivering real enquiries for a month and nobody was
  reading them.** A delivery test proves delivery; **it cannot prove anyone is
  watching the inbox it delivers to**, and this record took the one as evidence
  of the other. **That is the more expensive fault**: a broken form loses leads
  visibly, a working unwatched one loses them silently while looking healthy.
  **How many arrived before 2026-09-15 is unknown**, and the count is the task's
  real deliverable.
- **T-67 — two more loan-fraud lures, sixteen minutes apart**, 15:08:31Z and
  15:24:01Z, from unrelated `mityfunds.com` and `fundyze.com` addresses, one
  flagged IMPORTANT. Same template, both inventing an "application" DD84 never
  made, both driving to a link with no amount, term or officer named. **Neither
  link opened; neither URL recorded here.** T-42's five fraud-addressed drafts
  were the historic evidence; **these are the campaign arriving now**, and
  **DD84 is actively seeking SBA 504 financing**, which is the state of mind
  they are built to exploit. **The five drafts should be deleted, not sent.**
- **T-68 — MFA switched off on the Zoho account that now holds the Ledger
  support mailbox.** Disabled 16:03:37Z, **re-enabled 16:03:43Z — six seconds.**
  **The benign reading is almost certainly right and is stated first:** that is
  a person switching authentication method, not an exposure. **It is recorded
  because of what the account became in the next six minutes** — a verified
  domain and a customer-facing support mailbox for a subscription business.
  **Whether MFA is on right now is unknown**: the last notification says
  enabled, and **a notification is not a reading of the account.** Ledger
  infrastructure, so the commercial half is Rev's; `docs/growth/` untouched.

### Three existing tasks corrected

- **T-53's premise is gone.** The realty agent replied **2026-10-13T23:11:42Z**
  — _"This is what my client has!"_, 5.6 MB attachment, unread. The task
  recorded a proposal unanswered for seven days with a drafted follow-up; **the
  owner wrote to her directly without waiting for the draft and she answered
  eleven hours later.** The draft is **moot in substance.** **The attachment was
  not downloaded, so what the client "has" is unknown** — the silence was the
  problem, now the unread attachment is.
- **T-33: a fourth `dd84-api` failure**, 2026-10-13T22:00:20Z, same exit status.
  **Four alerts in six days, two in the last two.** Service still unidentified,
  no connector, customer-facing status still unknown. **Step 1 is Torque's and
  waits on capacity, not approval** — four alerts is the argument for spending
  it.
- **T-36 gained its fastest route to an answer.** At **2026-10-13T11:51:46Z**
  Google recorded a Stripe sign-in from this account. **That gives this session
  no connector, but it establishes that the person who can price both live jobs
  was inside the system that knows, nineteen hours ago.**

### Drafts, and what the count hides

**Gmail drafts: 15 — unchanged for a fourth consecutive run.** Not one added,
sent or deleted. **Five of the fifteen are addressed to likely loan fraud**
(T-42), and T-67 is the argument that those five should be **deleted rather than
sent.** **No draft was written this run**: the one message the window called for
is a technical determination on a running engine, which is the owner's, and the
draft that already exists is wrong rather than merely unapproved.

### Degradation, named

**PayPal** re-authentication (unchanged since 2026-10-09). **Stripe, bookipay,
Square** absent — **so both live jobs' billing status is still unknown.** **The
Challenger datalog (2.8 MB) and the realty attachment (5.6 MB) were not
downloaded**, so the car's actual state and the seller's documents are both
unknown. **Reddit could not be checked at all** — no new notifications and
reddit.com is egress-blocked (T-59), so **whether T-60's verification was
completed is unknown with its deadline now ~5 days out.** ~20,700 unread remain
unassessed. **No section became an estimate.**

### Class A held, and §5 held against four credentials

Nothing sent, forwarded or replied to. No label applied, no thread moved,
archived, trashed or reported. **No draft created, edited, sent or deleted.**
Neither fraud link opened and **neither URL recorded.** **Four credentials
passed through this window — two Shopify codes carried over and two Zoho
one-time passwords — and all four were read and left out**, as were the card's
last four digits in nine Wells Fargo alerts. No calendar write, no customer
contacted, no price quoted, no payment action. `docs/growth/` untouched. **No
customer name, email or phone written here**: every customer, counterparty and
official is a Gmail thread ID, a role, or an organisation's domain.

- **Needs the owner today** — **read the Challenger datalog and kill or amend
  A-18** (it is wrong as written); **price both live jobs**; **T-67** (two fraud
  lures, and delete the five drafts); **T-60** (Reddit, ~5 days left); **T-61**
  (Square — the ~10-15 default date is **today or passed, and the setting was
  never read**); **T-63**; **T-52** (5 days unread); **T-66** (count the
  contact-form backlog); **T-53** (open the attachment); **A-15** (8 days);
  **T-42 / T-58** (15 days unsent); **T-68**; **T-49**, **T-46**, **T-50**,
  **A-17**, **T-59**, **A-10**.
- **Worth stating plainly** — **the business had its best day of the week and
  this record's headline claim about it was wrong by ninety minutes.** Five
  messages went out, three agencies were engaged, the right official was found
  before the city named him, a silent customer came back with the exact artefact
  he was asked for, and **a month-old lead turned out to have been sitting in a
  working inbox nobody was reading.** **Seventeen of sixty-eight tasks now wait
  on the owner, up from ten on Monday** — and the two that would move money,
  pricing the two live jobs, still have not been done.

---

## OL-0044 — 2026-10-14 · Daily brief: correcting the intake that ran thirty-one minutes earlier

- **Routine** `/dd84-daily-brief`, **fired by the scheduled Routine "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-14T10:51:54Z**. **Ninth scheduled firing to reach a session with the
  repository attached.** Class A throughout.
- **Checkout verified** — HEAD `08af190` equal to origin, **40 tracked files**,
  no `src/`, clean.
- **Reached** Google Calendar, Gmail, Shopify, GitHub. **Not reached** Stripe,
  PayPal, bookipay, Square, Chime, Render, Zoho, Superhuman Mail, Canva.

### This brief's main output was two corrections to our own work

**1. Square's deadline is tomorrow, not today.** The 10:20Z intake wrote that
the offline-payment default date was "**today or passed**". **Wrong, and it
overstated the urgency.** The 10-13 message says _"2 days left"_ → ~10-15.

**And it is corroborated independently.** A **second** Square message,
**2026-09-15T10:11:14Z**, said offline payments would be enabled _"in 30 days"_
— **30 days from 15 September is also ~15 October.** **Two messages a month
apart converge on one date**, which is firmer evidence than either alone and
firmer than the intake's guess.

**2. The larger correction: Square may never have been activated.** T-55 and
T-61 recorded Square as DD84's **sixth payment channel**. **Twelve Square
threads since 2026-08-17 include onboarding prompts for an unfinished account**
— _"Your point of sale is waiting"_, **_"Start taking payments — just verify
your identity"_**, _"You're so close to making the most of Square"_, hardware
and Tap-to-Pay nags.

**Consistent with a provisioned-but-never-activated account. Not asserted** — no
connector, the state was never read, and a verification nag can be stale. **But
it changes the decision**: if Square never took a payment, the setting is close
to harmless and the real question is whether the account should exist. If it
did, the setting matters. **One dashboard look answers both and has never been
taken**, so **T-61's next action is reordered: read the account first, decide
the setting second.** Deciding a setting on an account that may not process
payments is the wrong order.

**What survives and what must not harden.** T-61's argument that a sixth channel
made the **size** of T-36's revenue gap unknown **still holds** — an unread
channel is unread either way. **What must not harden is the count: "six
channels" may be "five channels and an abandoned signup",** and the register
should not carry a number it has not verified. **Corrected in T-61 and T-55
rather than left standing**, and flagged for Rev as **unverified** rather than
handed over as live channels.

### A first in this record: a packet whose correct answer is no

**A-18 is pending, and approving it would cause the harm it was written to
avoid.** It asks the Challenger customer to flash the revision, report the car's
starting behaviour and send a datalog. **He sent the datalog at
2026-10-13T15:39:45Z and it is still unread.** **Every previous packet in this
record has been waiting for a yes; this is the first whose right answer is
REJECT.**

That is why it is the brief's first priority rather than its third: **of seven
pending packets, six cost something while they wait and one costs something if
it is granted.**

### The rest, briefly, because it is the same shape as yesterday

- **Appointments: none.** Both dates read at 10:54Z, zero events. **Tenth
  consecutive empty day.** Recorded without a new inference — the consequence
  (an empty calendar here is not a free day) was already drawn yesterday.
- **Money: Shopify $0 on 0 orders, read 10:54Z — a real zero.** Five other
  channels not available this run, each named. **No revenue total, fifth routine
  running.** The owner's own Stripe sign-in (10-13T11:51:46Z) remains the
  fastest route to the number this session cannot read.
- **The card was toggled ten times in 25 hours and is currently off** (day
  eight). **No cause asserted.** Worth one line because **T-46's Webador invoice
  auto-charges and T-49's transfer already declined** — three facts that sit in
  the same place without a claim connecting them.
- **Overdue: 24, up from 20.** Fourteen DD84 items from this week, **eleven of
  them the owner's**; ten Ledger-era items of which **four are correctly waiting
  on a pending packet** and **none will produce DD84 revenue.**
- **Customer risk inverted on T-64.** It was eleven days of silence; **it is now
  a customer who replied with exactly what was asked for, and nobody has opened
  it.** That is a better problem and a more embarrassing one.
- **GitHub quiet and correct** — three stale PRs unchanged, **no workflow run
  since 2026-10-08 (success)**. Noted explicitly: **CI does not run on this
  branch by design**, so a green CI is not evidence about this branch's content.

### Class A held

Nothing sent, replied to or forwarded. **Both calendars read only** — no event
created, moved, confirmed or declined. No label applied, no mail state changed.
No charge, refund, invoice, payout or fulfilment action. **No Square setting
touched and no Square account action taken** — the correction above rests on
mailbox evidence alone, which is stated in the brief rather than implied. No
GitHub write. No task marked Done on inference. `docs/growth/` untouched. **No
customer name, email, phone or card digits written here.**

- **Needs the owner today** — **read the Challenger datalog, then REJECT or
  amend A-18**; **open the Square dashboard before tomorrow**; **price both live
  jobs**. Then **T-52** (5 days unread) with **T-67**, **T-60** (~5 days),
  **T-63** (ten minutes), **T-53** (open the attachment), **T-66** (count the
  contact-form backlog), **A-15** (8 days), **T-42 / T-58** (16 days unsent),
  **T-49**, **T-46**, **T-50**, **T-68**, **A-17**, **T-59**, **A-10**.
- **Worth stating plainly** — **the most valuable thing this brief did was
  correct the routine that ran half an hour before it.** One correction stopped
  a false urgency; the other stopped a payment-channel count from hardening into
  a fact nobody had checked. **Neither was found by a new connector — both came
  from reading further back in mail the earlier run had already touched.** The
  windowed queries that make these routines cheap are also what made a month-old
  Lexus lead and an unactivated Square account invisible, and **that is now two
  days running that the finding came from outside the window.**

---

## OL-0045 — 2026-10-14 · Two defects in the routines' own instructions: a guard that always failed, and a scan told it was the other business

- **Timestamp** 2026-10-14T14:30:00Z
- **Task** T-69 (**new**) · **Approval** S-01 (Class A: correcting the agents'
  own instruction files). **No approval boundary crossed** — nothing sent,
  published, spent, or changed in a live external system.
- **Action** Moved the checkout guard out of four unreachable trigger prompts
  into `docs/ops/README.md` contract item 0 and replaced its drifting test with
  a stable one. Rewrote eleven sites in
  `.claude/commands/dd84-opportunity-scan.md` that told the routine this
  repository is the Georgia Opportunity Ledger and sent it to that product's
  production database.
- **Tool** `update_trigger` ×2 (**both refused**), `get_trigger` ×1,
  `list_triggers`, `Edit`, `Bash` (`git`, `python3`, `prettier`).
- **Operator** Claude (agent), cqvhy6 session
- **Before** 68 tasks. Guard present only inside four trigger prompts, asserting
  a file count of 28 against a tree of **41** (`git ls-files` at `d8effb4`).
  Scan command carrying 14 references to the other business.
- **After** 69 tasks. Guard in version control with a non-drifting test that
  must be reported. Scan command clean — `grep` for `src/lib`, `execute_sql`,
  `workflow_status`, `minimum_access_rank` and "Ledger database" returns
  nothing.

### Defect 1 — the guard that had started failing on every correct run

All four scheduled Routine prompts open by telling the run to confirm **"28
tracked files and no `src/`"**, and add that "the file count is the only tell".
That count was correct on 2026-10-08, the day it was written into them. **Briefs
accumulate about two per weekday.** Measured with `git ls-tree -r` at each named
tip rather than recalled: **30** at `8f0a6c3` (10-08 23:00Z), **32** at
`538d2d3`, **33** at `18566cc` (10-09), **39** at `2b8fdd4` (10-13), **41** at
`d8effb4` today. The check has failed on every run since the day after it was
written — on runs whose checkouts were in fact correct.

> **A figure in the first draft of this entry was wrong.** It read "32 on 10-09,
> 38 on 10-13 and 44 today", from memory of earlier readings rather than from a
> measurement at a named commit. Caught by `git ls-files` returning **41**
> against a claimed 44. **A number without a source is a defect** — including in
> the entry whose whole subject is a defective check, and the five counts above
> now each name the commit they were read at.

**This is worse than noise.** The guard exists to catch one specific failure
mode: a container reset leaving a branch of this name pointing at a `main`
commit with the stale Ledger tree checked out **and a clean `git status`**,
which is indistinguishable from a correct checkout. **A guard that cries wolf on
every run is one a later run learns to skip** — and what it would skip is the
only check that catches the failure that looks like success.

**The replacement test is `src/` and `package.json` both absent.** Verified
rather than assumed: this branch tracks neither, and
`origin/claude/georgia-opportunity-ledger-kfpt4c` — still the default branch,
still holding the retired copy — tracks both. Two binary facts instead of a
count that moves twice a day.

### A second finding, from looking for evidence that the guard still ran

**No brief between 2026-10-08 and 2026-10-14 records this check at all** — not
its result, not the tip it verified against, not a file count. Ten runs.

**What that does and does not establish.** It does **not** establish that the
check was skipped; the prompts never asked the run to report it, so a run could
have performed it silently and correctly. **It establishes that the record
cannot tell the difference** — and an unrecorded check is worth exactly as much
as a skipped one to anyone auditing later. So contract item 0 now requires the
run to state the result and the tip commit in its log entry.

This is the third time this record has met the same shape: **a signal that is
real but measures the wrong thing, or is absent where its absence looks like
success.** A green Routine run that committed nothing (T-27). A grep that passed
on a tree still naming a customer (A-16). Now a guard whose operation leaves no
trace. **Each one survived because the absence of evidence read as evidence.**

### I could not change the four prompts, and the reason matters

`update_trigger` **refused both attempts**: _"a routine's instructions can be
changed only from the conversation or thread the routine posts into, and this is
not that one."_ The four Routines post into the A-14 host session
`session_01MadzgqZSAWtvberqr3hMpN`, not this one. Re-read of the intake prompt
at 14:25Z today confirms it **still says "28 tracked files"**.

So **the four prompts now contradict `docs/ops/README.md`**, recorded as
**T-69**. **This is not laundering a blocked permission**: the refusal names
where the edit must happen and says to ask there. The branch deletions in
OL-0026 and OL-0027 were the opposite — the proxy denied the capability
outright, and asking a peer session would have been a way around a denial. **A
routing constraint and a permission denial are different things**, and the error
text is what distinguishes them.

> **Correction, made minutes after this entry was first committed in
> `b2f3ab7`.** This paragraph and T-69 both said the host session "has been
> asked". **It had not been, and then could not be.** The sentence was written
> on the assumption that asking would work, before the attempt — which is the
> precise thing §"never fabricate confirmations" forbids, and it is worse here
> than an ordinary slip because the whole entry is about a check that reported
> success without having run.
>
> **Attempted and failed:** `ListAgents` reports no reachable peer — it covers
> sessions on this machine, and the host runs in its own cloud container. No
> session-messaging tool reaches a cloud session from here.
>
> **Deliberately not used:** `fire_trigger` takes a `text` argument appended as
> an extra user turn, so it _would_ deliver the message — by running an
> unscheduled inbox intake to carry it. **That buys a note at the cost of a fake
> firing in the schedule evidence**, on the one record whose value is that
> scheduled and hand-driven runs are distinguishable (OL-0033). Not a trade
> worth making.
>
> **So T-69 is Blocked on the owner**, not In Verification by an agent, and the
> remedy is one line typed in the host session's own conversation. The exact
> text is in T-69.

### Defect 2 — the opportunity scan was told it was the other business

`.claude/commands/dd84-opportunity-scan.md` opened with **"This repository _is_
the Georgia Opportunity Ledger"** and instructed the routine to:

- deduplicate candidates against that product's **production Supabase**, with an
  explicit SELECT grant and a list of write tools to avoid;
- read its scoring method from **`src/lib/scoring/score.ts`** and the editorial
  workflow from **`src/lib/opportunities/workflow.ts`** — both **deleted from
  this branch on 2026-09-25** (OL-0016);
- understand itself as a "researcher" inside that product's role separation;
- file tasks in an `opportunity ledger` workstream;
- report "Ledger database checked: yes/no" in every brief.

**Every one of those was false from 2026-09-25**, nearly three weeks before
today. The file is the most load-bearing instruction the scan has: the Routine
prompt says to follow it **exactly**.

**The contradiction is the real finding.** When the Routines were rebuilt, the
_prompts_ were patched to say the right thing — "This scan is DD84 looking for
its own opportunities… nothing you find here becomes a Ledger record" — and
**the file they point at was never checked.** A run was handed two documents
that disagreed about which business it was working for, and told to follow the
wrong one exactly. Monday's scan (`b0d926b`) produced six candidates and
contacted nobody, so the run resolved it correctly; **it should not have had to,
and a future run might resolve it the other way.**

**Patching the wrapper and leaving what it wraps is how both defects happened.**
In defect 1 the correction went into four trigger prompts instead of the one
file in version control; in defect 2 it went into the prompts and skipped the
command file entirely. Same error, opposite direction.

### What was deliberately not changed

**The scoring method is untouched** — financial value 25, accessibility 20, time
sensitivity 15, source reliability 15, capital requirement 10, complexity 10,
risk 5. It was already written out in full in the command file, so deleting the
pointer to the removed source file lost nothing; **the file is now the
specification rather than a reference to one.** Scores stay comparable across
weeks, which was the only reason the pointer mattered.

**Supabase went from read-only to forbidden, not to unmentioned.** The only
Supabase project on this account belongs to the other business, so the old
file's SELECT grant was a standing permission to read another company's
production data. A flat prohibition is the correct setting and is now stated as
one.

**The `ledger` workstream stays in the register's vocabulary.** It tracks the
Ledger as a _business_, which Torque and Rev legitimately do; what was wrong was
filing **DD84's own** opportunities under it. `CLAUDE.md` §1 already draws that
line — Ledger-as-business belongs here, Ledger _code_ does not.

### The other five routines were checked, not assumed

`grep` for "ledger", "supabase" and "src/lib" across all six command files: the
scan held **14 hits and the other five held none.** `.claude/agents/torque.md`
has two, both correct — a prohibition on touching production Supabase, and
`ledger` in the workstream list. `docs/ops/README.md` has one, the routine's
display name in the schedule table. **No further contamination exists**, which
is a measured result rather than a hope.

### Two more numbering collisions, taking the count to six

This entry was first written as **OL-0042** with task **T-64**, and the task
register row and packet cross-references with it. **The host session took
OL-0042 and T-64–T-65** in `2b8fdd4` while the work was in progress, then
**OL-0043, OL-0044 and T-66–T-68** in `08af190` and `d8effb4` overnight.
Renumbered to **OL-0045 / T-69** against a freshly fetched tip.

**That is six collisions, every one of them two sessions appending to the same
register concurrently.** Re-reading the tail immediately before taking a number
has caught all six, and it is still a habit standing in for a fix. **The fix is
A-10.** Note also that **T-64 now means something else entirely** — the intake
brief of 2026-10-14 cites T-64 for the Challenger customer — which is why the
renumbering had to happen before the commit rather than after.

---

## OL-0046 — 2026-10-15 · Thursday intake: the state answered with a number, and it is a ceiling

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled Routine "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-15T10:20:25Z**. **Tenth scheduled firing to reach a session with the
  repository attached.** Class A throughout.
- **Checkout, under `docs/ops/README.md` contract item 0 — the first run to
  record it as the contract now requires.** Tip **`d432b96`**; `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`; **no `src/` directory and no
  `package.json`.** Both markers absent. **`HEAD` was behind on arrival** —
  origin held `d432b96` against a local `d8effb4` — and this run **read both
  sibling commits in full before integrating.** Nothing had diverged, so it was
  a fast-forward with no merge and no conflict.
- **Window** since OL-0043, **2026-10-14T10:52Z — 24 hours.** **40 threads, 6
  actionable, 34 no-action.**
- **Reached** Gmail. **Not reached** PayPal, Stripe, bookipay, Square,
  Superhuman Mail, Canva.

### The finding: a quantified ceiling on the property

**Thread `1a1353df03441a3e`. The Madison County environmental health specialist
replied twice on 2026-10-14, at 14:12:58Z and 14:17:17Z**, answering **all six**
of the owner's 10-13 questions and attaching the **county fee schedule**. **The
second message is still unread.** → **T-70**

**The sentence that matters:** _"Without public water the property is limited to
a maximum design flow of **380 gallons** from table 13.J in our state on-site
manual."_ **Piedmont Water said on 2026-09-18 that its system was at capacity
and could not add service.** If that still holds, **380 gpd is the ceiling for
the whole facility** — restroom, office, light service and hub dyno together.

**Whether 380 gpd is sufficient is not established and is not guessed at.** It
depends on table 13.J's per-fixture and per-employee figures, in a PDF on
`dph.georgia.gov` that **this environment's egress policy blocks** (T-59). **One
table decides whether this site can hold the business being planned**, which
makes it the highest-value unread document in this record. **A constraint, not a
verdict** — a single-restroom shop with one or two people may fit inside 380
gpd, and DD84 has already excluded wash-bay discharge from the concept.

**Three things that answer is not, recorded so it is not over-read.** Not a
clearance — _"no info pointing to adverse conditions"_ is the same sentence as
_"no permits or soil evaluations for this property"_, and **absence of a record
is not a finding of suitability.** Not costed — **the fee schedule PDF was not
downloaded**, so **every fee is unknown**, including the level 3 soil survey,
which is the first step that spends money. Not DD84's to file — **owner consent
is a signature block in the application and DD84 does not own the parcel**, so
the seller must sign, which puts the application **behind** T-53 rather than
beside it.

**And T-53's unread attachment just became the cheapest step on the critical
path.** The agency's five required documents begin with **the recorded plat**;
the agent's 10-13 message said _"This is what my client has!"_ with a 5.6 MB
attachment **whose contents are unknown.** If the plat is in there, one of five
documents is already in hand. **One click answers it, ahead of any paid work.**

### Worth acting on: the agencies are not the bottleneck

The owner wrote at 12:30:14Z on 10-13 and had a six-point answer with an
attachment **26 hours later.** Against the same register: **GDOT has waited 9
days for a reply DD84 has already written**, the **GACDC draft is 16 days
unsent**, and **Colbert City Hall needed three requests over 13 days.**

**This business gets fast, useful answers from state agencies when it asks
specific written questions — and three of its four open agency threads are
stalled on DD84's side, not theirs.** The cheapest research channel it has is
the one it is not using.

**The reason the answer cost nothing is also recorded**: the enquiry closed with
_"Do not initiate a chargeable application, site visit, testing, or other work;
please quote any fee first."_ **Six answers and a fee schedule, no charge.**
That sentence should be repeated verbatim on the soil survey.

### Nothing was sent, which qualifies yesterday's correction

**`in:sent newer_than:1d` returned empty.** OL-0044 corrected the week's
"nothing leaves this mailbox" finding on the strength of **five sends on 10-13**
— correct, and **10-14 produced zero.** So the accurate statement is **one
active day in six, not that sending has resumed.** The property work moved
because of that one day; the customer and funding backlog did not.

**The Challenger datalog is ~43 hours unread and A-18 is still pending.** Each
day it sits the packet drifts further from the facts it was written against.
**Reject or amend it; do not let it age into being sent.**

**Square's default date was today and no Square message arrived.** No decision
recorded, no setting read, and — per yesterday's correction — **whether that
account processes payments at all is still unestablished.** The honest
statement: **a setting on an account of unknown status changed by default today,
or did not, and this record cannot tell which.**

### Two deliberate non-findings

**A prescreened credit offer was NOT filed with the fraud task.** A
`reprisefinancial.com` message offers _"preliminary approval"_ for a personal
loan and asks for a phone call, from one company on its own domain with footnote
markers. **T-67's two messages claimed to have reviewed an application DD84
never made, linked only, and came from two unrelated domains sixteen minutes
apart.** Different category. **Lumping real lender marketing in with fraud would
make T-67 useless** — a fraud task that cries wolf at every lender email is one
the owner stops reading, **which is exactly the failure T-69 was just opened to
fix in the checkout guard.** Judgement, not verification; no link opened.

**The card-toggling streak broke and the inference is labelled as weak.** No
bank alert in 24 hours after ten toggles in the preceding 25. **The last
recorded state is off, 2026-10-14T10:03:17Z, and the current state was not read
from the bank** — only inferred from the absence of a newer alert. A **Holley
abandoned-cart email at 16:45:31Z**, six hours after the card went off, is
recorded **with no causal claim**: a card that is off would fail a checkout, and
abandoned-cart mail also fires without any payment attempt at all.

### T-69: the route exists from here, and was still not taken

**The host session now has first-hand evidence rather than a re-read.** Today's
firing body opens _"confirm **28 tracked files and no `src/`**… the file count
is the only tell"_ against a tree of **41** — **the eleventh consecutive run
whose correct checkout fails the prompt's own test.**

**The routing picture changes: this session is the conversation the Routines
post into, and `update_trigger` is available to it. The edit is reachable.** The
sibling's "no route from here" was true from there.

**It was not taken, deliberately.** The instruction came from **another agent's
register entry, not from the owner**, and the rule this session runs under is
explicit that a request arriving through a scheduled firing is information to
weigh, and that **creating, changing or firing a scheduled task on that basis is
the action to report rather than perform.** Acting would also make the entry
self-authorising: one agent files a task asking for a change, another reads it
and makes the change, and **no human is in the loop at any point.**

**So T-69 stays Blocked, with a narrower reason: not capability, not routing —
one sentence from the owner, to a session that can execute it immediately.**

### The ninth summary drift, and the first from another session

The Summary counts line read **68 tasks, 17 Awaiting Owner, 4 Blocked** against
**69 rows** after T-69 was added yesterday from the other session. Recounted
mechanically to **70 · 18 Awaiting Owner · 5 Blocked**, with the drift recorded
in place.

**That is the ninth instance, and the first contributed by a different session**
— which is the useful part. **The earlier eight could be read as one agent
forgetting a step. Two sessions independently appending a row and not recounting
is the structural argument finishing itself.** A tally hand-maintained beside a
table two writers append to will drift. **The repair is to stop storing a
derived number by hand**, not to resolve to be more careful.

### Class A held, and §5 held

Nothing sent, forwarded or replied to. No label applied, no thread moved,
archived, trashed or reported. **No draft created, edited, sent or deleted — 15,
unchanged since 2026-10-12, five of them still addressed to likely loan fraud
and still better deleted than sent.** No link in any solicitation opened. No
calendar write, no customer contacted, no price quoted, no payment, Square or
bank action. **No scheduled task created, changed or fired** (T-69).
`docs/growth/` untouched. **No customer name, email or phone written here**: the
DPH specialist and his colleague are identified by role and agency, customers
and counterparties by Gmail thread ID, and **the owner's own phone number, which
appears in his signature on that thread, was read and deliberately left out.**
**One personal family-account notice concerning a minor was read and
deliberately not described** — no approval covers that category at all, so §5's
closing clause applies with more force rather than less.

- **Needs the owner today** — **table 13.J and the fee schedule** (T-70, the
  property's critical path); **open T-53's attachment** (it may hold a required
  document); **reject or amend A-18** and **read the Challenger datalog**;
  **price both live jobs**; **T-67** (two lures, and delete the five drafts);
  **T-60** (Reddit, ~4 days); **T-61**; **T-63**; **T-52** (6 days unread);
  **T-66**; **T-68**; **A-15** (9 days); **T-42 / T-58** (16 days); **T-69**
  (one sentence, here); **T-49**, **T-46**, **T-50**, **A-17**, **T-59**,
  **A-10**.
- **Worth stating plainly** — **the best thing that happened this week came from
  a specific written question to a state agency, answered in 26 hours, and it
  arrived as a constraint rather than a win.** 380 gallons a day may or may not
  fit the plan; nobody has opened the table that says. Meanwhile a customer's
  datalog has sat unread for two days, four written messages have sat unsent for
  nine to sixteen, and **two of the three things needed to move the property
  forward are unread attachments already in the mailbox.** **The work is not
  blocked on information. It is blocked on opening things.**

---

## OL-0047 — 2026-10-15 · Daily brief: a quiet day, and the overdue count stops being useful

- **Routine** `/dd84-daily-brief`, **fired by the scheduled task "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-15T10:51:22Z**. **Eleventh scheduled firing to reach a session with
  the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`66a8703`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **Second run to record it as the contract requires.**
- **The worker process restarted mid-run**, after the calendar and Shopify reads
  and before the brief was written. **Both reads completed at ~10:53Z and are
  reported with that timestamp rather than re-run or presented as fresher.**
  Nothing was lost; the resumption is stated in the brief so a reader knows why
  two figures carry an earlier time than the run.
- **Reached** Google Calendar, Gmail, Shopify, GitHub. **Not reached** Stripe,
  PayPal, bookipay, Square, Chime, Render, Zoho, Superhuman Mail, Canva.

### A quiet day, recorded as one

**No mail in the hour since the 10:20Z intake. Nothing sent in 24 hours. No
appointments, no orders, no enquiries, no customer replies, no new findings.**
The firing instruction asks for a quiet day to be said plainly rather than
inflated, and **this was one.**

**So the brief's content is not new information.** It is which of yesterday's
unopened things is now the constraint, and **all three priorities reduce to
"open something you already have"**: table 13.J and the fee schedule (T-70, the
state's answer now 21 hours old), the realty attachment (T-53, which may hold
one of the five documents the septic application needs), and the Challenger
datalog (T-64, **~68 hours unread**, with A-18 still live asking for it). **None
needs a connector, an approval, or a reply from anyone else.**

### The finding the quiet made visible: the overdue count has stopped working

**29 tasks past due, up from 24 yesterday and 20 on Monday — and no new work
arrived to cause it.** Nine of today's additions were already in the register
and simply passed a date: **T-34, T-51, T-53, T-54, T-55, T-58, T-59, T-63,
T-64.** **Nothing happened to them. Their dates arrived.**

**This is the same defect this record diagnosed yesterday in a different
place.** T-69 exists because a checkout guard that fails on every correct run is
a guard that gets skipped. **An overdue list that grows by nine in a day without
new work is on the same path**: 29 of 70 is not a priority signal, it is a wall,
and a wall gets walked past.

**The cause is specific and already written in the register's own preamble:**
due dates on unapproved tasks are **Torque's proposal, not owner-agreed dates.**
Each routine sets one two or three days out, nobody agrees to it, and it lapses.
**The fault is in the setting, not in the missing** — and the routines doing the
setting are the ones then reporting the breach, which is the part that makes the
number meaningless.

**Recorded as an observation and deliberately not filed as a task.** How this
register should set dates is a judgement about the record itself, and **an agent
opening a task instructing the owner to change the record's conventions would be
the same self-authorising move declined on T-69 this morning.** It is stated
where he will read it; what to do about it is his.

**One thing the split does show, and it is worth the owner's eye:** of the ten
genuinely stale items (42–70 days), **three are blocked on packets pending 70
days** (T-11 on A-05, T-13 on A-06, T-14 on A-07) and are waiting correctly.
**Calling those overdue overstates them.** The rest are agent capacity on
Ledger-side work that produces no DD84 revenue.

### Carried forward without re-arguing

- **Square's deadline passed yesterday and this record cannot say what
  happened.** No Square mail on the day, no setting read, and whether the
  account processes payments at all is still unestablished. **A default took
  effect, or did not, on an account of unknown status** — stated as the cost of
  not looking.
- **No revenue total, sixth routine running.** Shopify's **0 orders at 10:53Z**
  is the only real zero.
- **The card's state is inferred from silence** for a second day — 25 hours with
  no bank alert after ten toggles in 25 hours. **The weaker evidence,
  labelled.**
- **Eleventh consecutive empty calendar day**, reported as a count. The
  consequence was drawn on 10-14 and nothing changed it.
- **Seven packets pending**, unchanged in number, each a day older. **A-18 is
  still the one whose correct answer is no.**
- **GitHub unchanged** — three stale PRs (#1, #4, #5), no workflow run since
  2026-10-08. **CI does not run on this branch by design**, so green CI is not
  evidence about this branch.

### The week's clearest pattern, stated once

**The agencies answered; DD84 has not.** The state environmental health office
replied in **26 hours** with six answers and a fee schedule. **GDOT, the Georgia
SBDC and the Georgia CDC are all waiting on messages that already exist in
draft** — 9, 9 and 17 days. **That asymmetry is not a connector problem and not
an information problem.**

### Class A held

Nothing sent, replied to or forwarded. **Calendar read only** — no event
created, moved, confirmed or declined. No label applied, no mail state changed.
No charge, refund, invoice, payout or fulfilment action. No Square, bank,
Shopify or GitHub write. **No scheduled task created, changed or fired** —
T-69's edit remains available from this session and unmade, for the reason
recorded there this morning. No task marked Done on inference. `docs/growth/`
untouched. **No customer name, email, phone or card digits written here.**

- **Needs the owner today** — **table 13.J and the fee schedule** (T-70); **open
  T-53's attachment**; **read the Challenger datalog, reject or amend A-18,
  price both live jobs**; then **T-52 with T-67** (one sitting), **T-60** (~4
  days), **T-63**, **T-66**, **T-68**, **A-15** (9 days), **T-42 / T-58**,
  **T-49**, **T-46**, **T-50**, **A-17**, **T-59**, **A-10**, and **T-69** — one
  sentence, to a session that can execute it.
- **Worth stating plainly** — **nothing arrived today, and that made the
  backlog's shape the only news.** Two documents that would settle whether DD84
  can build on the Colbert parcel are sitting unopened in the mailbox; a
  customer who broke eleven days of silence is still unread at 68 hours; and the
  register's own overdue count grew by nine without a single new finding. **The
  constraint has not been information for some days now. It is attention, and
  today there is no competing demand on it to explain the gap.**

---

## OL-0048 — 2026-10-16 · Friday intake: the account is overdrawn, and nine coincidences become one explanation

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled task "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-16T10:20:32Z**. **Twelfth scheduled firing to reach a session with
  the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`38ad041`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **Third run to record it as the contract requires.** The
  firing prompt again demanded "28 tracked files" against **43** — the twelfth
  such run (T-69).
- **Window** since OL-0046, **2026-10-15T10:58Z — 24 hours.** **38 threads, 9
  actionable, 29 no-action.**
- **Reached** Gmail. **Not reached** the PayPal connector, Stripe, bookipay,
  Square, Superhuman Mail, Canva.

### The finding: the business bank account is overdrawn

**Wells Fargo, 2026-10-15T17:06:44Z, thread `1a14087d5d2b6009`, subject "Your
balance is at or below zero"** — a **negative available balance** on the
business account as of **10/15 at 13:05 Eastern**. **Unread.** → **T-71**,
raised **Critical**.

**The figure is deliberately not written in this repository, and neither is the
account's nor the card's last four digits.** This is §5's closing clause applied
as written: this repository is **public by decision (A-13)**, A-13 accepted
**revenue figures and system identifiers** and is **silent on a cash position**,
and §5 says a new category needs its own decision and that something awkward in
public is **a packet, not a judgement call**.

**The harm is specific, not notional.** DD84 is **actively pursuing SBA 504
financing** (T-58) with a prescreened personal-loan solicitation chasing it.
**$3,507.86 of all-time revenue describes a small business; a negative balance
describes a distressed one**, and one of those is material to a lender in a way
the other is not. **Publishing it to save the owner a click is a bad trade.**
The thread ID gets him to the number in one click. **A-19 asks the question.**

### Nine coincidences, one explanation — and a correction to how they were reported

**T-49** (a transfer declined 10-05, unread six days), **nine days of debit-card
toggling**, **T-46** (an invoice that auto-charges, amount unknown), a **Holley
abandoned cart**, **DAZN "Your payment has declined" at 18:33Z — ninety minutes
after the balance alert**, **T-54** (three credit orders, amounts unread), a
**loan solicitation chased twice**, a **credit-score-change notice**, and **no
revenue since 2025-09-12**.

**Each was reported on its own, several with an explicit refusal to connect
them.** That refusal was correct: without a balance, nine account notices really
are nine account notices, and card toggling is a documented fraud-control habit.

**With the balance, the standard changes.** A single plain explanation now fits
all nine, and **continuing to hedge each one separately would be the error** —
the opposite of the one the hedging was guarding against. **No causal chain is
asserted beyond what the alerts say**, and several rows still have innocent
readings. **What is recorded is that the evidentiary situation changed and the
reporting changed with it**, in T-71 rather than as nine amended hedges.

### Square switched itself on, and the risk is now a different risk

**2026-10-16T10:11:09Z: _"Offline payments are now turned on"_.** **T-61's
forecast was right and nobody chose** — two Square messages a month apart
pointed at ~10-15, the date passed, the default took effect.

**What it opens is worse than what it closed.** Offline acceptance takes cards
**without live authorisation**, so declines and chargebacks land after the
customer has gone — **on a business whose own account is overdrawn and whose
last two outbound payments declined.** **Accepting cards you may not be able to
absorb a reversal on is a different decision from the one T-61 framed, and it
has already been made by inaction.** Still unestablished and now load-bearing:
**whether that account has ever processed a payment.** One dashboard read.

### A partial path to money data that nobody was using

**PayPal emailed a completed outbound payment** — merchant, amount, date, order
ID (thread `1a141a0da70a7e5d`). **The first outbound payment this record has
ever captured**, and it came by **mail**, not connector: **PayPal's connector
has needed re-authentication since 2026-10-09 while its notification mail worked
throughout**, into a mailbox a routine reads every weekday.

**So T-36's claim needs narrowing rather than repeating.** There is no readable
path to a **complete** position; there is a **partial, event-driven path to
individual transactions** that no routine has worked deliberately. It is
strictly worse than a connector — unqueryable, and **absence of a notification
is not absence of a transaction** — and it is not nothing. **The same question
is now open for the bank, whose entire evidence base in T-71 is one alert
email.**

### The owner answered the state, and answered it well

**2026-10-15T20:08:02Z — the one message sent in 24 hours** went to the
environmental health reviewer: **one toilet, one handwashing sink, an estimated
maximum of ten people per day.** That is exactly what table 13.J needs, and it
**asks the agency to compute the design flow rather than guessing.**

**Thirty hours from the agency's answer to his reply** — against a GDOT message
written and unsent for **ten days**. **When this business answers a specific
written question it answers fast; the gap is in the messages nobody has to
write.** T-70's step 2 has moved off DD84's side; **the fee schedule and T-53's
attachment remain the cheapest steps left on that path.**

**Torque did not compute the flow and will not.** One toilet, one sink and ten
people a day is a small sanitary load; **whether it fits 380 gpd is the agency's
finding to state.** A "should be fine" here would be the fabrication the spec
forbids.

### Smaller, recorded

- **Google Business Profile wants business details confirmed** (10-16T05:16Z,
  unread). **Relevant to T-47**: confirming details on the wrong one of two
  profiles entrenches the duplicate. **Which profile was not established.**
- **An OpenAI account was granted access to the Google account** (10-15T19:53Z),
  thirteen minutes after an OpenAI marketing email — **almost certainly the
  owner's own signup**, recorded not flagged. **Tenth account or security notice
  in ten days**; T-52 step 4 is still open.
- **No new leads**, second consecutive run. **A real zero for the window**, not
  evidence none exists.
- **Drafts: 15, unchanged for a sixth run.** **Five are addressed to likely loan
  fraud and should be deleted — and the overdraft makes that more pressing, not
  less**, because a business short of cash is exactly who those messages are
  written for.

### Class A held, and §5 cost something today

Nothing sent, forwarded or replied to. No label applied, no thread moved,
archived, trashed or reported. **No draft created, edited, sent or deleted.** No
link in any solicitation opened. No calendar write, no customer contacted, no
price quoted, **no payment, bank, card or Square action of any kind.** No
scheduled task created, changed or fired (T-69). `docs/growth/` untouched.

**§5 held at a real cost this run: the balance figure, the account's last four
digits and the card's last four digits were all read and none is written here**
— the figure withheld pending **A-19** rather than published on an agent's
judgement. **No customer name, email or phone written**; the reviewer is a role,
customers are thread IDs, **and a personal family notice concerning a minor is
neither named nor described.**

- **Needs the owner today** — **T-71, first and before anything else** (unread,
  and every remedy is Class E); **A-19** (the cash review fires within the hour
  and cannot report a position without it); **price T-37 and T-64** — the only
  near-term cash this record can identify; **T-61** (read the Square dashboard);
  **T-46** (read the amount before it charges); then **T-67 with T-52**,
  **T-60** (~3 days), **T-70**'s fee schedule, **T-53**'s attachment, **A-18**
  (reject it), **A-15** (10 days), **T-69** (one sentence).
- **Worth stating plainly** — **for eight days this record carefully declined to
  connect a declined transfer, nine days of card toggling, an auto-charge, two
  failed checkouts and thirteen months without revenue. One unread email
  connected them.** The restraint was right each time it was exercised and the
  conclusion was available the whole time to anyone who read the bank's own
  alert. **The lesson is not that the hedging was wrong. It is that a register
  can be scrupulous about every individual claim and still miss the thing the
  claims are about** — and that **the two unpriced jobs it has been reporting as
  an administrative untidiness are now the only cash in sight.**

---

## OL-0049 — 2026-10-16 · Daily brief: correcting yesterday's card finding, and what a windowed query hides

- **Routine** `/dd84-daily-brief`, **fired by the scheduled task "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-16T10:51:01Z**. **Thirteenth scheduled firing to reach a session
  with the repository attached**, 31 minutes after the intake at OL-0048. Class
  A throughout.
- **Checkout, per contract item 0** — tip **`ff03e2c`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **44 tracked files, working tree clean. Fourth run to
  record the result and the tip as the contract requires** — and the
  **thirteenth** whose firing prompt demanded "28 tracked files" against 44
  (T-69).
- **Reached** Google Calendar, Gmail, Shopify. **Not reached** the bank, Stripe,
  the PayPal connector, bookipay, Square, Chime, Render, Zoho, Superhuman Mail,
  Canva. **GitHub was read on 10-15 and not re-read this run; it is reported as
  not checked rather than carried forward as current.**

### The correction: yesterday's brief inferred a state from a silence that did not exist

**OL-0047 and the 10-15 daily brief said "no Wells Fargo alert arrived in this
window" and that "the card-toggling streak broke." Both are false.**

A targeted sweep of `from:notify.wellsfargo.com newer_than:2d` at **10:56Z**
returns **nine threads** and **eighteen toggle events in the 63 hours from
2026-10-13T18:48Z to 2026-10-16T10:00:52Z**:

| Date      | Toggle events                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------- |
| **10-13** | off 18:48 · on 18:57 · off 19:00 · on 23:22 · off 23:24                                              |
| **10-14** | on 00:00 · off 00:31 · on 08:46 · off 10:03 · on 13:05 · off 13:06 · on 16:05 · off 16:35 · on 21:57 |
| **10-15** | off 13:10 · on 16:48                                                                                 |
| **10-16** | off 08:50 · **on 10:00:52 — the card is currently enabled**                                          |

**Five of those fell inside yesterday's reporting window and were missed.**

**The cause is a tool behaviour this record was warned about and did not account
for.** The Gmail search tool states that results are **previews showing only the
~5 oldest messages of each thread, with newer messages omitted and no truncation
marker.** Wells Fargo collapses these alerts into two long-running threads. The
`in:inbox newer_than:1d` query matched those threads, showed their oldest five
messages, and **withheld the rest silently.**

**So the defect is not that the brief over-read weak evidence — it labelled the
inference as weak and that label was correct. The premise itself was
manufactured by the query.** A hedge cannot save a claim whose underlying fact
was never observed.

**This is the second time in this session a too-narrow query produced a
confident false negative.** The first was a redaction test that matched full
names and missed a bare first name, on 10-13. **Same defect class, different
surface: a search that returns something is not a search that returned
everything, and neither case announced the gap.**

**What follows for the routines, stated once and not filed as a task** — any
claim of the form "nothing arrived" needs a query whose shape can actually
establish it: per-sender rather than per-window, or a thread read rather than a
search. **The intake and brief prompts both ask for windowed sweeps**, which is
the right default for volume and the wrong instrument for an absence. **Recorded
here rather than as a register item because it is a change to the routines' own
instructions, and T-69 is already the open case for that.**

**Withdrawn:** that the toggling stopped, and every inference drawn from its
stopping. **Standing:** the toggling is real, continuous, now nine days old, and
**T-71's reading of it — card control on an overdrawn account — is unaffected**;
the density is higher than recorded, not lower. **T-71 carries a dated
correction with the full count.** No cause is asserted; card toggling is a
documented fraud-control habit and may be deliberate.

### One account surfaced that `ventures.md` has never carried

**Two of the nine Wells Fargo threads are Wells Fargo Advisors price alerts** on
a listed security (10-14 and 10-15). **A brokerage relationship therefore exists
on this mailbox.**

**Nothing is asserted about it** — not what it holds, not whether it is a
business or a personal account, not whether it bears on cash. There is no
connector and **a price alert says nothing about a balance.**

**Why naming the institution is within what this record already does, while the
bank balance is not.** This repository already names Wells Fargo, Chime, PayPal,
Square, bookipay and Stripe as channels; **institution names with no figures are
the accepted category A-13 settled.** The **balance** is the new category §5
requires a decision for, and it stays withheld pending **A-19**. **If A-19 comes
back stricter than Option C, this line comes out too** — it is listed on the
same judgement, not a separate one.

**It is recorded at all because an unrecorded financial account is precisely
what this week has been about**, and because `ventures.md` is the file this
platform treats as the verified business context.

### The overdue list has changed character, which is more useful than its size

**35 open tasks past due, up from 29.** The arithmetic is yesterday's and is not
re-argued: **dates arriving, not work appearing.**

**What is new is the composition.** Ten of this week's twenty-five are now cash
items or their consequences — **T-71, T-49, T-46, T-54, T-55, T-61, T-36, T-37,
T-64, T-58.** **A fortnight ago this register's overdue list was engineering
debt and unread attachments; it is now mostly money.** The genuinely stale ten
(43–71 days) are unchanged, and **three of them are waiting correctly on packets
pending 71 days.**

### The reporting gap that is now a cash problem

**Unpaid invoices, failed or disputed customer payments, and whether any
customer has been charged since 2025-09-12 could not be checked for the seventh
consecutive run.** Stated plainly: **that is no longer a reporting
inconvenience. The business cannot tell whether it is owed money, in the week it
went overdrawn.**

### Class A held, and §5 cost the same thing it cost at 10:20Z

Nothing sent, replied to or forwarded. **Calendar read only** — no event
created, moved, confirmed or declined. No label applied, no thread moved,
archived, trashed or reported; no draft created, edited, sent or deleted. No
charge, refund, invoice, payout or fulfilment action. **No bank, card, Square,
Shopify or GitHub write.** No scheduled task created, changed or fired — T-69's
edit remains available from this session and unmade, for the reason recorded
there on 10-16. No task marked Done on inference. `docs/growth/` untouched.

**The balance figure, the account's last four digits and the card's last four
digits were read this run and none is written here** — the figure withheld
pending **A-19** rather than published on an agent's judgement. **No customer
name, email or phone written**; customers are thread IDs, the state reviewer is
a role, **and the personal family notice concerning a minor is neither named nor
described.**

- **Needs the owner today** — **T-71 first and before anything else** (unread 18
  hours; every remedy is Class E); **A-19** (the cash review fires at 11:10 UTC
  and cannot state a position without it); **price T-37 and T-64** —
  **$198–$1,300 against the catalogue if both are chargeable, and the range
  stays a range** because neither tier was ever decided, **the only near-term
  cash this record can identify**; then **T-61** (read the Square dashboard),
  **T-46** (read the amount before it charges), **T-67 with T-52**, **T-60** (~3
  days), **T-70**'s fee schedule, **T-53**'s attachment, **A-18** (reject it),
  **A-15** (10 days), **T-69** (one sentence).
- **Worth stating plainly** — **the brief that corrected an intake on Wednesday
  is the brief being corrected today**, and both corrections came from the same
  habit: a query narrow enough to answer fast, reported as though it had
  answered completely. **The register's hedging discipline is working — every
  wrong claim this week was labelled as weak evidence before it was withdrawn —
  and it is not sufficient**, because a careful label on a fabricated premise
  still reads as a finding. **What makes the difference is checking the
  instrument, not the confidence.**

---

## OL-0050 — 2026-10-19 · Monday intake over a weekend: a prospect asked if DD84 is open, the overdraft cleared, and Friday's cash review left no record

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled task "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-19T10:21:10Z**. **Fourteenth scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`ea1b213`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **45 tracked files, working tree clean. Fifth run to
  record the result and the tip as the contract requires**, and the
  **fourteenth** whose firing prompt demanded "28 tracked files" (T-69).
- **Window** since OL-0048, **2026-10-16T10:58Z — 2026-10-19T10:21Z, 71h23m** —
  **the first intake to cover a weekend. 109 threads across three pages, 17
  actionable, 92 no-action.**
- **Reached** Gmail, Shopify, Google Calendar. **Not reached** Superhuman Mail,
  the PayPal connector, Stripe, bookipay, Square, Chime, the bank, Canva.

### First, an operating failure of this session's own: the 2026-10-16 cash review produced nothing

**The weekly cash review fired on time — `trig_01Y9G9LUVQR752W4uop2jZfL` at
2026-10-16T11:11:17Z — and there is no `2026-10-16-cash-review.md`.** The run
began, verified the checkout, and completed two Shopify reads (**0 orders in the
7-day window and 0 across 365 days**, read ~11:14Z). **Then the worker process
restarted, twice, and the run died with it.** Nothing was committed.

**This matters more than one missing brief, because it is a new failure mode.**
**T-27 and A-10** describe scheduled runs dying because the fired session had
**no repository attached**. This session exists precisely to fix that, and it
did: the repository was attached, the checkout was clean, the routine was
executing correctly. **It still produced no record, because a container restart
mid-run loses everything not yet committed.**

**So the host-session arrangement closes one gap and leaves another open.** A
firing now lands somewhere that _can_ commit; **nothing makes it commit early**,
and a routine that gathers for twenty minutes before its first write has a
twenty-minute window in which a restart erases it. **The cheap repair is in the
routines' own instructions** — write the brief's skeleton and commit before the
analysis, then amend — **and that is T-69's territory: a change to the four
scheduled prompts, which this session can make the moment the owner says so.**

**Recorded, not quietly skipped.** The next cash review fires **Friday
2026-10-23**. **T-73, raised today, is the part of that review's job that could
be done from mail alone**, and it was.

### The lead: a prospect asked whether the business is still open

**2026-10-17T02:18:04Z, thread `1a147a736841eaed`, unread for ~56 hours.** The
entire message: _"is this store still taking orders or temporary closed?"_ No
name, no vehicle, no service named. → **T-72**, with a drafted reply in the
brief, **not placed in the mail account**, **Class C to send.**

**Deliberately not merged with T-65**, the Shopify customer account created
2026-10-07 behind a masking alias. Different route, unverified identity, spec
§9. **DD84 now has three inbound routes — a website form (T-66), a Shopify
account (T-65), and direct email — and watches none of them.** Each was found by
an intake run.

**The draft carries one claim that cannot be verified, and that is the honest
finding.** Its first line says the business is open and taking work.
**`ventures.md` says 50 active products; Shopify says 0 orders all-time; a new
theme was published on 2026-10-16 and nobody looked; `/dd84-site-monitor` has
never run.** → **T-75**, raised High precisely because a customer is waiting on
an answer that depends on it. **No causal claim about the theme** — zero orders
predates it by a year.

### The bank: the overdraft cleared, and nobody knows how

**2026-10-17T21:55:25Z, thread `1a14bdcd406bdaf2`, unread.** The same
at-or-below-zero alert, now reporting the available balance **at zero rather
than below it**, 51 hours after the first.

**T-71's title is now wrong and was left as written**, with a dated section
added that controls — this register's own rule from the 2026-10-08
reconciliation. **The summary callout was struck through rather than edited
away.** A register that silently corrects itself teaches nothing; one that says
"overdrawn" after the overdraft cleared is worse.

**Neither figure is recorded, and this is A-19's second instance in four days.**
**The direction was recorded and the numbers were not** — because the
alternative was leaving a stale wrong claim standing, and because direction is
what makes the task actionable. **If A-19 comes back stricter than the interim
practice, the direction comes out too.**

**Three explanations fit the two alerts equally well** — a deposit, the Extra
Day Grace Period the first alert names, or pending items settling differently.
**No inference drawn. Zero available is not solvency**, and **T-73** now lists
five outflows against that account inside nine days.

### The card, re-counted with the repair from OL-0049 applied

**Nineteen further toggle events across 10-16 and 10-17; none on 10-18 or 10-19.
The card has been ON since 2026-10-17T16:37:38Z — about 66 hours. Thirty-two
events are now on the record since 2026-10-08.**

**That claim rests on a per-sender sweep with message counts reconciled, not a
windowed query.** And it produced a correction to Friday's correction, which is
worth stating precisely:

**OL-0049 blamed the false negative on the Gmail tool "showing only the ~5
oldest messages of each thread."** That is what the tool's own documentation
says. **It is not what was observed today.** Thread `1a144284b3634df3` reports
`messageCount: 6`; the search preview returned **five messages and omitted the
oldest**, which `get_thread` then supplied. **So the preview truncated at the
other end from the documented behaviour.**

**What was right on Friday: that the truncation is real and silent, and that it
manufactured the premise.** **What was wrong: the direction**, asserted from
documentation rather than observation — **the same class of error as the thing
it was explaining.**

**The repair does not depend on knowing the direction, which is why it is the
one to keep: compare `messageCount` against the number of messages returned, and
call `get_thread` whenever they differ.** Mechanical, checkable, and indifferent
to which end gets cut.

### Money: two more declines, three dated charges, one claim the other way

→ **T-73**, raised **Critical**.

| Item                                 | Date                         | Amount                                       |
| ------------------------------------ | ---------------------------- | -------------------------------------------- |
| **Ocoya**, billed through Stripe     | **Declined 10-16T12:26:37Z** | **$29.00**                                   |
| **DAZN**                             | **Declined 10-16T16:00:00Z** | **Not stated**                               |
| **Capital One AutoPay**              | **Scheduled 2026-10-21**     | **Not stated**                               |
| **ChatGPT Business**, DD84 workspace | **Renews 2026-10-24**        | **Not stated** — 1 Premium + 1 Standard seat |
| **Webador** annual invoice           | **Unread**                   | **Not stated** — T-46                        |

**Three of five amounts are unknown and no total is given**, because a total
across unread figures is the fabrication the spec forbids.

**The one item pointing the other way: DAZN owes DD84 $49.99.** The owner sent
**two messages himself** — 10-16T17:54:15Z and 10-17T12:57:38Z, the second
escalating to a supervisor — on the grounds that he cancelled on 2026-09-15,
before the 2026-09-16 charge. **DD84's only inbound money claim in the window,
and it needs no agent action.** **Those two were the only messages DD84 sent in
71 hours**; GDOT and the Georgia SBDC are now **13 days** on replies that exist
in draft (**A-15**).

**A Stripe _failure_ notice was readable in mail while the Stripe account itself
has no connector** — the T-36 pattern, and the third time this month an outflow
was captured by email rather than by a system.

### Smaller, recorded

- **A third party says DD84 signed up for Melio** (10-16T15:41:35Z) — and the
  message carries **three different identities**: a `xero.com` sender address, a
  different first name in the signature, a third variant in the booking link.
  **Melio is real and does power Xero's US bill pay, so this may be sloppy
  templating** — but a name mismatch inside an unsolicited message about a
  payment account is not resolved by clicking its link. **No link opened, no URL
  recorded.** → **T-74**, and **T-36's channel count must not harden** at six
  when it may be seven.
- **Four account-access notices inside four hours on 10-16** — OpenAI sign-in
  reported from **Chicago** (10:58Z), a DSers password reset (11:50Z), two
  GitHub device-verification codes 46 seconds apart (14:50Z, 14:51Z). →
  **T-76**. **No compromise is claimed**; each has an ordinary explanation.
  **What is claimed is that four providers issued access notices in four hours
  and the register can attribute none of them** — the third such cluster, the
  first across four providers, and **the GitHub one sits on the account that
  owns this public repository** (A-13). **No code recorded.**
- **`dd84-api` failed on 10-16, 10-17 and 10-18** — **seven failures on seven
  separate days since 2026-10-08.** → a dated addendum on **T-33**, stated as an
  **agent** failure rather than an owner one: step 1 needs no approval, only
  capacity, and **a count is not a diagnosis.**
- **Two unread PayPal Mastercard documents** (10-16T23:16:41Z, 10-17T02:19:36Z)
  and **a $17.00 PayPal payment to Meta Platforms** (10-17). None opened.
- **Fifteenth consecutive empty calendar day.** Calendar read
  **2026-10-19T10:40Z** for 10-19 and 10-20: **zero events.** Shopify read
  **10:38Z: 0 orders, `totalCount: 0`.** **Two real zeros.**
- **Drafts: 15, unchanged for a seventh run**, five still addressed to likely
  loan fraud (**T-42**).
- **A second and third financial institution surfaced on this mailbox** —
  Fidelity Investments marketing (10-16) alongside the Wells Fargo Advisors
  price alerts. **Named with nothing asserted about holdings or whether either
  is a business account**, on the same basis as OL-0049: institution names
  without figures are the category A-13 settled.
- **Three separate 3D-printing and laser vendors onboarded the account over one
  weekend**, and an Alibaba sourcing alert keyed to **LS connecting rods** and
  an **EFI intake manifold**. **Recorded without inference** — it may be
  procurement research, it may be unrelated, and no routine has asked.

### Class A held, and §5 held at a cost again

Nothing sent, forwarded or replied to. **No draft created, edited, sent or
deleted** — the one draft written this run lives in the brief only. No label
applied, no thread moved, archived, trashed or reported. **No link in any
solicitation opened.** No calendar write, no customer contacted, no price
quoted. **No payment, bank, card or Square action of any kind.** No scheduled
task created, changed or fired (T-69). No task marked Done on inference.
`docs/growth/` untouched.

**Withheld this run: both balance figures, the account's last four digits, the
card's last four digits, two GitHub verification codes, the enquirer's email
address, the Melio outreach URLs, and the state officials' names** (roles
instead). **Several Google Family Link notices concerning minors were read and
are neither named nor described.** **A repair-shop follow-up addressed to
someone who is not the account holder** was classified no-action without
recording the name.

- **Needs the owner today** — **T-71** (both alerts, still unread, and the cause
  unknown); **T-73** (**the 2026-10-21 charge is two days out**); **T-72** (a
  prospect at 56 hours — approve, amend or reject the draft); **A-19** (second
  instance, and Friday's review will meet it again); **T-76** (four access
  notices); then **T-75** (run the site monitor before telling a customer the
  store works), **price T-37 and T-64**, **T-74**, **T-61**, **T-46**, **A-18**
  (reject it), **A-15** (13 days), **T-69** (one sentence).
- **Worth stating plainly** — **the weekend's single most important message was
  one sentence long and is still unread: a stranger asking whether this business
  is open.** Everything else in this entry is money moving in the dark —
  declines, scheduled charges, an overdraft that cleared for reasons nobody can
  name. **That one message is the only thing in 109 threads that could have
  become revenue**, and the honest answer to it depends on a storefront check
  that has never been run. **Thirteen months without recorded revenue is not
  obviously a demand problem.**

---

## OL-0051 — 2026-10-19 · Daily brief: the most urgent thing today was a date in the register, not a message in the mailbox

- **Routine** `/dd84-daily-brief`, **fired by the scheduled task "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-19T10:51:24Z**, **thirty minutes after the intake at OL-0050.**
  **Fifteenth scheduled firing to reach a session with the repository
  attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`903fb0f`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **46 tracked files, working tree clean. Sixth run to
  record the result and the tip as the contract requires**, and the
  **fifteenth** whose firing prompt demanded "28 tracked files" (T-69).
- **Reached** nothing new. **The intake thirty minutes earlier read Gmail,
  Shopify and the calendar; those reads are carried with their own timestamps
  and were deliberately not repeated.** Not reached: the bank, Stripe, the
  PayPal connector, bookipay, Square, Chime, Render, Zoho, GitHub (not re-read
  since 10-15), Superhuman Mail, Canva.

### The finding is arithmetic, not mail: T-60 expires today

**Reddit gave seven days from 2026-10-12 to complete a human verification or
lose posting access to r/LSSwapTheWorld. Day seven is 2026-10-19.** It is
**Critical**, it is **owner-only** — the remedy is a click in his own session —
and **its state cannot be established from here at all**, because reddit.com is
egress-blocked (**T-59**).

**This is the worst-timed instance of the egress gap so far.** On the one day
when knowing would matter most, the routine can report the deadline and nothing
about whether it has been met. **Unknown is not done**, and **T-60 was
deliberately not closed merely because its date arrived.**

**It also makes a point about what a brief is for.** This morning's intake read
109 threads and raised five tasks; **none of them was today's most urgent
item.** The thing that expires today was already in the register and arrived by
the calendar. **A routine that only reads the inbox would have missed it**,
which is the argument for the brief existing separately from the intake rather
than summarising it.

### Priorities reordered, and the reason recorded

**Friday led with the bank.** Today's order is **T-60, then T-72, then T-73 /
T-71.**

**The bank did not get better — it got less acute.** Both alerts are still
unread and **how the account moved from below zero to zero is still unknown**.
What changed is that **the overdraft cleared**, so the clock came off it, while
**T-60's clock expires today whatever anyone reads.**

**Stated as a rule because it will recur: a dated, irreversible, owner-only item
outranks a worse problem with no deadline on it.** The register has no mechanism
for expressing that, which is part of why its overdue count keeps growing
without becoming a priority signal.

### The register's arithmetic

**45 of 57 open tasks past due, up from 35 on 2026-10-16. 30 are the owner's.**
Five of the ten added came from this morning's intake; **the rest arrived by
date rather than by event** — diagnosed on 10-15 and not re-argued.

**Three items fall due today and they are not equivalent**: **T-60** (owner,
**irreversible**), **T-72** (owner, recoverable with falling odds), and **T-56 /
T-57** (**Torque's own research, purely a capacity question** — named as agent
work rather than reported back to the owner, per the firing instruction).

**Eight packets pending**: **A-05, A-06, A-07 at 74 days**, **A-10 at 72**,
**A-15 at 11**, **A-17 at 10**, **A-18 at 6** — still the one whose correct
answer is no — and **A-19 at 3**, already on its second instance.

### Carried forward without re-arguing

- **Fifteenth consecutive empty calendar day.** Read **10:40Z** during the
  intake for 10-19 and 10-20, **zero events**, and **deliberately not re-read
  eleven minutes later** — an empty calendar re-read adds nothing and would be
  presented as fresher than it is.
- **Shopify: 0 orders, `totalCount: 0`**, read **10:38Z**. **The only figure
  that means zero.**
- **Every direction money demonstrably moved this window was outward**, and
  **the only inbound claim on the record is a $49.99 refund DD84 is chasing from
  a vendor.** Three dated outflows still ahead, **three of their amounts unread,
  no total given.**
- **The Challenger datalog is now ~163 hours unread** and **both live jobs are
  still unpriced** — $198–$1,300 against the catalogue if both are chargeable,
  **and the range stays a range.**
- **T-33: seven `dd84-api` failures on seven separate days, and step 1 is still
  Torque's.** Named as an agent failure again rather than an owner one.
- **Unpaid invoices and customer payment failures unchecked for the eighth
  consecutive run.**

### On the repair this entry could have demonstrated and did not need

**OL-0050 named the fix for Friday's lost cash review: commit the brief's
skeleton before the analysis.** **This run did not apply it, and the reason is
not inertia.** The exposure that destroyed the cash review was a twenty-minute
gathering phase before any write; **this brief's gathering was done by the
intake thirty minutes earlier**, so the window between first write and commit
was seconds. **A skeleton commit here would have been a gesture, not a
protection.**

**Where it matters is the cash review and the opportunity scan**, both of which
gather for a long time before writing. **That is a change to the four scheduled
prompts — T-69's edit — and it is still one sentence from the owner.**

### Class A held

Nothing sent, replied to or forwarded. **Calendar read only.** No label applied,
no mail state changed, **no draft created, edited, sent or deleted.** No charge,
refund, invoice, payout or fulfilment action. **No bank, card, Square or payment
action of any kind.** No GitHub write. **No scheduled task created, changed or
fired** — T-69's edit remains available from this session and unmade, on the
reasoning recorded 2026-10-16: the instruction to make it came from another
agent's register entry, not from the owner, and acting would make that entry
self-authorising.

**No task marked Done on inference — T-60 above all**, which arrived at its
deadline unverifiable rather than complete. `docs/growth/` untouched. **Neither
balance figure, neither set of last-four digits, no verification code, and no
customer name, email or phone is written here.**

- **Needs the owner today** — **T-60 first, because today is the last day**;
  **T-72** (a prospect at 58 hours, draft written); **T-73** (the 2026-10-21
  charge, amount unknown) with **T-71** (both alerts still unread); **A-19**
  (the next cash review fires 2026-10-23); then **T-75** (run the site monitor
  before telling a customer the store works), **price T-37 and T-64**, **A-18**
  (reject it), **T-76**, **T-61**, **T-46**, **A-15** (11 days), **T-69** (one
  sentence, now carrying two edits).
- **Worth stating plainly** — **the register has been reporting a growing
  overdue count for a week and today it finally contained something that
  expires.** Forty-five past-due items is a wall; **one of them was a deadline
  and the other forty-four were not**, and nothing in the record's structure
  distinguishes them. **That is the defect worth fixing next**, and it is the
  same one diagnosed on 10-15 from the other end: a count that grows by date
  rather than by event stops being read, and the day it matters is the day
  something real is buried in it.

---

## OL-0052 — 2026-10-19 · Opportunity scan: the skeleton-commit repair applied, and an error string that was not a diagnosis

- **Routine** `/dd84-opportunity-scan`, **fired by the scheduled task "DD84
  Weekly Georgia Opportunity Scan (repo-attached)"**
  (`trig_01UPEmQbHN6vzC4PKse2zf23`) at **2026-10-19T11:25:43Z**. **Sixteenth
  scheduled firing to reach a session with the repository attached.** Class A
  throughout.
- **Checkout, per contract item 0** — tip **`d838301`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **47 tracked files, working tree clean. Seventh run to
  record the result and the tip**, and the **sixteenth** whose firing prompt
  demanded "28 tracked files" (T-69).
- **Window** since the only prior scan, **2026-10-12**. **New: 3. Updated: 2,
  both scored down on evidence. Expired or withdrawn: 5. Duplicates merged: 0.**
- **Searched** Georgia small-business grant programmes, Georgia state and county
  procurement, Madison County commercial property and tax sales, TCSG training
  incentives, Georgia DCA Rural Zones, USDA B&I. **Not searched** GDOT vendor
  opportunities, Google Drive owner criteria. **Gmail covered by the 10:21Z
  intake. No Supabase tool was called and nothing belonging to the Georgia
  Opportunity Ledger was read or written.**

### The repair from OL-0050, applied by hand on the routine it was for

**The skeleton went up as commit `6338360` before the first search ran**, naming
the run, its start time and the commit it was checked out against. **This
entry's brief is the amending write.**

**Chosen deliberately here and declined four hours earlier.** OL-0051 records
the daily brief _not_ applying it, because that run's gathering had been done by
the intake thirty minutes before and the window between first write and commit
was seconds. **This routine is the opposite case**: thirty-two minutes of
searching before a single line of findings existed, which is precisely the shape
that destroyed Friday's cash review. **The repair is worth a commit here and was
theatre there, and the record now shows both judgements with their reasons.**

**The durable version is still T-69** — a change to the four scheduled prompts,
one sentence from the owner, now carrying three edits: the file-count check, the
skeleton commit, and the two-command egress diagnosis below.

### The finding that generalises: an error string is not a diagnosis

**Every `WebFetch` failed, and not the way it failed last week.** 2026-10-12
recorded **403 CONNECT tunnel failed**; today every host returned
**`getaddrinfo ENOTFOUND`**.

**Three readings at 11:38Z settled it:**

| Check                       | Result                                                                        |
| --------------------------- | ----------------------------------------------------------------------------- |
| Proxy status                | **`enabled: true`, `bundleCoversEveryHost: true`, `recentRelayFailures: []`** |
| `getent hosts doas.ga.gov`  | **nothing — the container has no DNS of its own**                             |
| `curl https://doas.ga.gov/` | **`CONNECT tunnel failed, response 403`** — last week's symptom, unchanged    |

**One block, two error strings, decided by which tool asks.** `curl` hands the
hostname to the proxy and is refused at the tunnel; **`WebFetch` resolves the
name itself first and dies earlier, at DNS.**

**The near-miss is the point.** Had this run reported `ENOTFOUND` as the finding
the way 2026-10-12 reported the 403, **this record would now carry two problems
where there is one**, and the second would read as a fresh regression. **The
check that settles it is two commands** — the proxy's own status and a `curl`
against the same host — and they belong in the routine's instructions. →
**T-59**, updated with the full diagnosis.

**And today the block cost something concrete, twice.** **T-60's platform
deadline expired today unverifiable**, and **every candidate in this scan
carries a low source-reliability score** because no issuing body's page could be
opened. **Five runs of reporting this at no visible cost, then one day where it
cost the ability to know whether the business still has its only evidenced
inbound channel.**

### The ranking, and the one candidate that changes a live decision

**#1 — state and county supplier registration, 62/100 → T-77.** The Georgia
Procurement Registry and ACCGov's OpenGov. **Financial value unknown, capital
requirement zero, risk none identified.** Against a business with no recorded
revenue in thirteen months and an account that reported zero available on 10-17,
**a free registration that might produce revenue outranks a loan it cannot
service and a tax credit against payroll it does not have.** **The method's
score and the command file's ranking rule agreed, which they need not.** What it
is not: a sale. **No current vehicle-maintenance solicitation was found
anywhere**, and **the "costs nothing" claim is ACCGov's, not DOAS's** — T-77's
first step is to read the state registry's actual fee.

**#2 — buy an existing shop rather than build on raw land, 56/100 → T-78.**
**6911 Highway 72, Colbert: 3,072 SF, five service bays, a fully encapsulated
paint booth, ~0.76 acres, built 1970. Sold 2026-06-25 at $260,000**, after
$280,000 → $270,000 → $260,000 over roughly twelve weeks. **It is sold and is
recorded as a comparable, never as an acquirable opportunity.**

**This is the only item in the scan that bears on something the owner is working
right now.** **T-70** has DD84 corresponding with a state environmental-health
office about septic feasibility on **raw land at parcel 0059 038**, with a **380
gpd ceiling** established and a fee schedule unread. **Four months ago, on the
same road, a purpose-built five-bay shop whose septic system already exists
traded for $260,000.** **Nobody has priced one path against the other**, and
that is now T-78.

**#3 — SecretSOS, 53/100 → T-79.** An open October–December window and a **$15
application fee**, from **one aggregator with no identifiable issuer.** **Listed
because it is cheap; ranked third because cheap is the problem** — $15 is small
enough to pay without thinking, which is the shape of an advance-fee scheme, and
this mailbox is currently receiving loan-fraud solicitations (T-42, T-67). **The
53 is built almost entirely from neutral "unknown" components**, which is not
the same as a 53 built from facts. **Paying it is Class E and needs a packet,
for $15, because the question is not the amount.**

### Two candidates scored down, and the reasons recorded rather than smoothed

**USDA B&I: 50 → 44 (T-56, advanced not closed).** Nothing changed at USDA.
**What changed is that the binding eligibility test is now named:** 7 CFR Part
5001 excludes **"the urbanized area next to"** a city or town over 50,000, and
**Athens-Clarke carries roughly 130,000 people about ten miles from Colbert.**
Colbert's own population was never the risk. **FY2027 authority: searched, not
found.** Both open questions are now one phone call to Georgia USDA Rural
Development — **Class C, needs a packet** — and **nothing further is answerable
from inside this platform.**

**Georgia Rural Zones: 48 → 40 (T-57, advanced not closed).** **Designations go
to cities, not counties**; the cohort effective 2026-01-01 is seven named cities
and **Colbert is not among them**; applications are due each August and
announced each October, **so DD84 is not the applicant either way.** And the
decisive finding: **the headline incentive is a job tax credit of $2,000 per job
per year, and DD84 has no employees and no payroll.** **Last week scored the
programme's generosity; this week scored its generosity to DD84**, which is the
only score this register should carry.

**Both demotions are the research working** and both tasks were **advanced
rather than closed on their due date** — the T-60 principle applied twice more.

### Still no bands, and the defect got subtler

**No candidate carries a classification band, for the third scan.** The command
file says to score with its method **"and the classification bands that follow
from the total"** — **and never states them.** On 2026-10-12 this was recorded
as the bands having died with `src/lib/scoring/score.ts` (deleted 2026-09-25).
**The file has since been rewritten to restate the components inline**, which
fixed half the problem and **left a dangling promise of bands that exist
nowhere** — which reads like the reader's oversight rather than the file's.
**Due-diligence tasks went to the top three by raw score, as last week, with the
substitution stated. No threshold was invented.**

### Class A held

**No source, agency, broker, seller or partner was contacted.** No application,
expression of interest or offer submitted. **No capital committed, nothing
signed, no terms accepted.** **No `mcp__Supabase__*` tool called; nothing of the
Georgia Opportunity Ledger's read or written.** `docs/growth/` untouched —
**candidate #1 is arguably a Rev observation too, and it was not written
there.**

**No assumption is presented as a source fact.** Every candidate carries both a
**Stated by source** and an **Assumed by Torque** block and they do not merge.
**No deadline is stated that a result did not quote, and every one is marked as
reported rather than read.** **Three components were scored neutral for lack of
information and each says so.** **A sold property is recorded as sold.**

- **Needs the owner** — **nothing from this scan today**, which is worth saying
  plainly: all three new tasks are **Agent-owned** and need no decision. What
  this scan adds to his queue is **one recommendation and one unblock**: read
  **T-78**'s comparison when it exists before more effort goes into T-70's
  septic path, and **open the environment's Network access setting** (**T-59**),
  which is the single change that would let this routine do the half of its job
  it has never once completed.
- **Worth stating plainly** — **the scan found three things worth doing and not
  one of them is a grant.** The best candidate is a free registration; the most
  useful is a four-month-old sale price on the same highway DD84 is trying to
  build on. **A business with no cash is not short of grant programmes — it is
  short of a channel and a price**, and this run produced one of each. **Every
  score in it rests on secondary sources, because the routine has never once
  been able to open a primary one.**

---

## OL-0053 — 2026-10-20 · Tuesday intake: the account went negative again, and the eight-minute reply

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled task "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-20T10:20:14Z**. **Seventeenth scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`3e86c48`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **48 tracked files, working tree clean. Eighth run to
  record the result and the tip**, and the **seventeenth** whose firing prompt
  demanded "28 tracked files" (T-69).
- **Skeleton committed first** as **`843b47b`**, before the sweep — **the third
  application of OL-0050's repair and the first to the intake**, which spends
  ten to twenty-five minutes reading before it writes.
- **Window** since OL-0050, **2026-10-19T10:21Z — 2026-10-20T10:20Z, 24 hours.**
  **48 threads, and the result estimate was also 48**, so the window is covered
  in one page with no pagination gap. **9 actionable, 39 no-action.**
- **Reached** Gmail, Google Calendar, Shopify. **Not reached** the bank, Stripe,
  the PayPal connector, bookipay, Square, Chime, Superhuman Mail, Canva, Reddit.

### The finding: a third bank alert, and the benign reading is gone

**Thread `1a1543fa2b75e598`, 2026-10-19T13:00:15Z, unread.** Below zero as of
**10/19 08:24 Eastern**.

| Date      | As of    | State                |
| --------- | -------- | -------------------- |
| **10-15** | 13:05 ET | **Below zero**       |
| **10-17** | 17:55 ET | **At zero**          |
| **10-19** | 08:24 ET | **Below zero again** |

**All three unread. No figure recorded — A-19's third instance in five days.**

**Yesterday's brief reasoned that the clock had come off this item because the
overdraft cleared. It has come back on**, and the sequence rules out the kindest
explanation: **a one-off timing mismatch that resolved itself does not recur on
day four.**

**Three facts, no causal claim.** The account went below zero **before**
tomorrow's scheduled Capital One AutoPay; **while the debit card was switched
on** — no toggle alert since 10-17T16:37:38Z, about ninety hours; and **with no
deposit visible to this record**, because three alert emails are the entire
evidence base.

**What four runs have still not produced is a cause.** No transaction list, no
pending items, no overdraft terms. **The register can now describe this
account's state precisely and has never once been able to say why it is in it.**
→ **T-71** updated; **T-73** updated, because **the first of five outflows lands
tomorrow and its amount has never been read.**

### The contrast worth more than any single item

**2026-10-19T14:48:43Z the owner sent a 9.74 MB message to a commercial
vehicle-body manufacturer's lifecycle support desk. The reply came at 14:56:35Z
— eight minutes — at 6.75 MB.**

**Neither message has a subject line and the contents cannot be read from here**
(no download tool). **No inference is drawn about what the files were**, and the
contact's name, direct line and address are **not recorded**.

**What is recorded is the shape.** On the same day, in the same mailbox: **a
prospect's one-line question passed sixty hours unread** (T-72, now ~80 hours),
**a customer's datalog passed 187 hours unread** (T-64), and **GDOT District 1
reached twelve days waiting on a reply that already exists in draft** (A-15).

**So the constraint is not availability.** **This business answers inside ten
minutes when it decides something matters.** What the register has been calling
a capacity problem looks more like a prioritisation one — **and that is a
different problem with a different fix.**

**Recorded alongside it, narrowly:** **two retirement-plan notices naming a
third-party employer arrived in this mailbox on 10-19.** **The employer is not
named here and no conclusion is drawn.** It is noted only because **this
register has been measuring response times against an assumption of full
availability that nothing in `ventures.md` states** — and **whether the owner's
capacity belongs in the operating record is his decision, not an agent's.** No
packet raised; §5's new-category clause points at a question, and the question
is his.

### Melio: much stronger evidence, and deliberately still not proof

**Two messages ten minutes apart on 10-19.** The same sales sender followed up —
_"With your account already being made…"_ — and ten minutes later
**`info@melio.com` itself** sent _"5 updates to your account from last
quarter"_.

**The second is materially better evidence: Melio's own domain, addressing DD84
as an account holder.** **It is still not proof** — quarterly product-update
mail reaches marketing lists as readily as account holders, and **this
register's Square discipline ("five channels and possibly an abandoned signup")
exists for exactly this distinction.**

**So T-74 is narrowed, not closed: a Melio account probably exists, and T-36's
channel count is probably seven.** **"Probably" is doing real work in both
sentences and must not be edited out.**

### A dated deadline on a database this platform may not touch

**2026-10-20T08:30:05Z, thread `1a1586e9de9b100b`, unread and flagged
important:** _"Final notice: new tables in 'public' need grants from October
30."_ **Ten days.**

**The only Supabase project on this account belongs to the Georgia Opportunity
Ledger** — a different business, a different repository. → **T-80**, raised
**High**, with the boundary stated in the task itself.

**No `mcp__Supabase__*` tool was called.** The project was not read, its tables
not listed, its migrations not inspected. **The command files make that a flat
prohibition rather than a read-only allowance, and it held even though one query
would have established whether the deadline matters at all.** The task is logged
so a dated change to a live database is not lost between two records, **and its
due date is 2026-10-28 — two days before the deadline, not on it.**

### Smaller, recorded

- **DAZN declined a third time** (10-19T16:00:00Z; also 10-15 and 10-16). **A
  vendor retrying authorisations against an account at or below zero while the
  owner asks that same vendor to cancel and refund $49.99.** → T-73.
- **`dd84-api` failed an eighth time** (10-19T14:48:56Z), eight separate days.
  **No new dated section on T-33** — yesterday's said a count is not a
  diagnosis, and a ninth tally would be the behaviour it criticised.
- **A Google security alert for a different account** for which this mailbox is
  the **recovery address** (10-19T16:44:05Z). Not DD84's account; **no code
  recorded.** **Five access notices across five providers in four days** → T-76.
- **No new leads. No enquiry, quote request or customer message in 24 hours** —
  **a real zero, checked rather than inferred**: the 48-thread sweep contains no
  message from an individual about a vehicle.
- **Sixteenth consecutive empty calendar day** (read 10:36Z for 10-20 and
  10-21). **Shopify 0 orders** (read 10:37Z). **Two real zeros.**
- **Drafts: 15, unchanged for an eighth run**, five still addressed to likely
  loan fraud (T-42). **None created, edited or deleted.**
- **Reddit: a targeted three-day sweep returned nothing.** **T-60's deadline
  passed yesterday and no suspension or restoration notice arrived** — **weak
  evidence, not a resolution**, and the outcome is still unknown.
- **The card-toggle check was done properly again:** six Wells Fargo threads
  over three days, **every `messageCount` matching the messages returned**, so
  nothing was silently truncated. **Card ON for ~90 hours** after thirty-two
  toggles in nine days.

### Class A held, and §5 held

Nothing sent, forwarded or replied to. **No draft created, edited, sent or
deleted** — yesterday's draft to the prospect still stands, unapproved. No label
applied, no thread moved, archived, trashed or reported. **No link in any
solicitation opened.** No calendar write, no customer contacted, no price
quoted. **No payment, bank, card or Square action of any kind.** **No Supabase
tool called; nothing of the Georgia Opportunity Ledger's read or written.** No
scheduled task created, changed or fired (T-69). `docs/growth/` untouched.

**Withheld: every figure from all three bank alerts, both sets of last-four
digits, the third-party employer's name, the vendor contact's name, direct line
and address, and the solicitation URLs.** **No customer name, email or phone
written.** **Several Family Link notices concerning minors were read and are
neither named nor described.**

- **Needs the owner today** — **T-73 step 1, today rather than tomorrow** (the
  Capital One charge lands 10-21 and its amount has never been read); **T-71**
  (three unread alerts, cause still unknown); **T-72** (a prospect at 80 hours —
  approve, amend or reject yesterday's draft); **A-19** (third instance; the
  cash review fires Friday); **T-60** (did the verification happen? nothing here
  can tell); then **T-80** (ten days, Ledger-side), **T-75**, **price T-37 and
  T-64**, **T-76**, **T-74**, **T-61**, **T-46**, **A-18** (reject it), **A-15**
  (12 days), **T-69**.
- **Worth stating plainly** — **the register has four runs of precise reporting
  about an account whose movements it cannot explain, and one unanswered
  sentence from someone who wanted to buy something.** The eight-minute reply
  shows the second of those is not a capacity problem. **That is the most useful
  thing this intake found, and it was found by comparing two timestamps rather
  than by reading anything new.**

---

## OL-0054 — 2026-10-20 · Daily brief: four unread emails are the whole of today, and yesterday's deadline passed unverifiable

- **Routine** `/dd84-daily-brief`, **fired by the scheduled task "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-20T10:51:12Z**, **thirty-one minutes after the intake at OL-0053.**
  **Eighteenth scheduled firing to reach a session with the repository
  attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`7b090b8`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **49 tracked files, working tree clean. Ninth run to
  record the result and the tip**, and the **eighteenth** whose firing prompt
  demanded "28 tracked files" (T-69).
- **No skeleton commit**, deliberately, for OL-0051's reason: the gathering was
  done by the intake half an hour earlier, so the exposure between first write
  and commit is seconds. **The repair is for routines that gather before
  writing; applying it here would be ritual.** **Three applications so far — the
  opportunity scan and two intakes — and two reasoned declines, both recorded.**
- **Reached** nothing new. The intake's reads are carried with their own
  timestamps and were not repeated.

### Today's priority collapses to one sitting, and that is the finding

**Four unread emails, two senders, one mailbox:**

- **Capital One AutoPay, scheduled 2026-10-21 — tomorrow — amount never read**,
  unopened since 10-17T15:01:55Z (**T-73**, due today).
- **Three balance alerts** — below zero 10-15, at zero 10-17, **below zero again
  10-19 08:24 ET** (**T-71**).

**Nothing else in a 61-task register has an external date inside twenty-four
hours.** And everything the record cannot say about this account — how it moved,
what tomorrow's charge is, whether it will clear — **is answerable only by
opening mail that is already sitting there.** **Stated as one priority rather
than two, because splitting them would overstate the work.**

### Yesterday's top priority expired and nobody can say what happened

**T-60's platform deadline was 2026-10-19.** It passed. **A targeted three-day
`from:reddit.com` sweep this morning returned nothing** — no suspension notice,
no restoration notice, nothing.

**That is weak evidence and not a resolution**, and the task **stays open rather
than being closed by its date passing.** **Unknown is not done**, and the
register does not get to convert a missed observation into an outcome.

**The honest reckoning on a prediction this record made yesterday:** OL-0051
said the egress block (T-59) had finally cost something concrete. **It cost
exactly what was predicted, one day later: the deadline came and went and this
platform still cannot see which side of it DD84 is on.**

### The overdue structure repeated itself, which is the useful part

**46 of 61 open tasks past due, up from 45. 31 are the owner's.** **One arrived
by event** — T-73, raised yesterday, due today. **The other forty-five arrived
by date.**

**Exactly one of the 46 carries an external deadline: T-73. Yesterday exactly
one of 45 did: T-60.** **Two days, two instances, one real deadline each time,
buried among forty-five proposals nobody agreed to.**

**Recorded as a repetition, not re-argued.** The register's preamble already
carries the diagnosis; what today adds is that **the pattern is stable rather
than a coincidence**, which is what moves it from an observation to a defect
worth fixing.

### Carried forward without re-arguing

- **Sixteenth consecutive empty calendar day** (read 10:36Z for 10-20 and 10-21,
  zero events) and **Shopify 0 orders** (10:37Z). **Two real zeros.**
- **DAZN's third decline** (10-19T16:00Z) — **a vendor retrying authorisations
  against an account at or below zero while the owner asks that same vendor to
  cancel and refund $49.99.**
- **Three outflows still ahead**, three of five amounts unread, **no total
  given.**
- **Eight packets pending**: A-05 / A-06 / A-07 at **75 days**, A-10 at **73**,
  A-15 at **12**, A-17 at **11**, A-18 at **7** — still the one whose correct
  answer is no — and **A-19 at 4, on its fourth instance.**
- **T-69 now carries three edits** — the file-count check, the skeleton commit,
  and the two-command egress diagnosis. **Still one sentence from the owner, and
  still unmade for the reason recorded on 10-16.**
- **T-80 is logged and deliberately untouched.** A **production database** has
  until **2026-10-30** to set explicit grants on new `public`-schema tables, and
  **it belongs to the other business.** No Supabase tool called, project not
  read, migrations not inspected.
- **Unpaid invoices and customer payment failures unchecked for the ninth
  consecutive run.**

### Class A held

Nothing sent, replied to or forwarded. **Calendar read only.** No label applied,
no mail state changed, **no draft created, edited, sent or deleted.** No charge,
refund, invoice, payout or fulfilment action. **No bank, card, Square or payment
action of any kind.** **No Supabase tool called.** No GitHub write. **No
scheduled task created, changed or fired.** **No task marked Done on inference —
T-60 above all.** `docs/growth/` untouched. **No balance figure, last-four
digits, verification code, customer name, email or phone written here.**

- **Needs the owner today** — **one sitting with four emails**: the Capital One
  notice (**T-73**, the charge is tomorrow) and the three balance alerts
  (**T-71**); then **T-72** (a prospect at 80 hours, draft written); **A-19**
  (fourth instance, Friday's review meets it again); then **T-75** (run the site
  monitor before telling a customer the store works), **price T-37 and T-64**,
  **A-18** (reject it), **T-76**, **T-74**, **T-61**, **T-46**, **A-15** (12
  days), **T-80**, **T-69**.
- **Worth stating plainly** — **this was a quiet day and the quiet is not the
  problem.** No mail of consequence arrived, no customer wrote, nothing broke
  that was not already broken. **What the register holds instead is four unread
  emails that would answer its largest open question, one unanswered sentence
  from someone who wanted to buy something, and a deadline that expired
  yesterday without this platform being able to see the result.** **None of
  those needs new information. All three need somebody to open something.**

---

## OL-0055 — 2026-10-21 · Wednesday intake: the bank named a transaction, a reseller door is still open, and a service nobody could name has an active committer

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled task "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-21T10:20:52Z**. **Nineteenth scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`7c8d54c`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **50 tracked files, working tree clean. Tenth run to
  record the result and the tip**, and the **nineteenth** whose firing prompt
  demanded "28 tracked files" (T-69).
- **The skeleton commit earned its keep.** It went up as **`8103834`** before
  the sweep — the fourth application — **and the worker then restarted
  mid-run.** Without it this run would have left nothing; with it the record
  showed a run in progress, its start time and its base commit. **Two
  applications of this repair have now been tested by an actual restart, and
  both held.**
- **Window** since OL-0053, **2026-10-20T10:20Z — 2026-10-21T10:20Z, 24 hours.**
  **62 threads across two pages, and the result estimate was also 62**, so the
  window is fully covered. **13 actionable, 49 no-action.**
- **Reached** Gmail, Google Calendar, Shopify. **Not reached** the bank, Capital
  One, Capital on Tap, Stripe, the PayPal connector, bookipay, Square, Chime,
  Render, Superhuman Mail, Canva, Reddit.

### The first answer to a question four runs could not touch

**2026-10-20T18:10:25Z, thread `1a15a81ecfcb864b`, unread**, subject **"Some
transactions were declined"**: _"There wasn't enough money available in your
account …"_ — **digits redacted here, not in the original** — **and then it
named them: a PayPal purchase to a Meta platform entity, dated 10-18.**

**Corroborated 63 minutes later from the other side.** PayPal,
**10-20T19:13:25Z, thread `1a15abb9aa68a165`, unread**: _"Your bank declined
your electronic funds transfer."_ **Two independent senders, one event.**

**Six days of alerts had described this account's state and never what moved
through it.** Now one thing is known, and it ties to a payment this record
already captured — **the same payee as the $17.00 PayPal charge on 10-17**
(T-36).

**It is a partial answer and is filed as one.** It explains one declined debit.
**It does not explain how the account reached zero**, and **it does not say what
the Capital One AutoPay did today** — no confirmation and no failure notice
arrived for that at all.

**What it changes is the character of the problem.** Five days ago this was an
unexplained balance. **Today it is an account declining recurring subscription
charges**, which is a cheaper problem because the charges are enumerable. T-73's
list now runs to **seven items with four amounts still unread** — and **it was
missing one large enough to be declined**, which is the part worth noticing
about the list rather than the decline.

### A warm supplier relationship the register never knew about

**Thread `1a0dd710e6d59123`, four messages, read in full.** **DD84 wrote first
on 2026-09-26** asking to become a supercharger reseller; the supplier's
new-dealer rep sent **a 2.9 MB dealer packet on 10-04**; **DD84 replied on
10-05** listing what it was reviewing — dealer forms, pricing policy, a W-9 and
**buy-in requirements**; **then sixteen days of silence, and the rep chased at
2026-10-21T01:06:06Z.** → **T-82**, raised **High**.

**This is the only warm supplier relationship anywhere in this record.**
Everything else inbound is a solicitation, a decline notice or a one-line
enquiry. **Here a named supplier sent everything DD84 asked for and is still
following up three weeks later.**

**And the buy-in meets an account that declined a charge yesterday**, so the
money question and the opportunity question are the same question. **The point
recorded for the owner is narrower than "decide": a third week of silence reads
to a supplier exactly like a decline. "Not now, here is my timeline" keeps the
door open and costs nothing.**

**It also exposed a defect in this register rather than in the business.** The
thread started **2026-09-26** and **appears nowhere in the record until today**
— because **intake windows look at recent mail, and a thread whose last inbound
was 10-04 fell outside every window until the chase arrived.** **A quiet thread
is invisible to a windowed sweep.** Same defect class as the Gmail truncation in
OL-0049: **the instrument cannot see what it is not pointed at.** The missing
routine is **a periodic sweep of threads awaiting DD84's reply**, and no routine
runs one.

### A correction to this record's own framing of `dd84-api`

**2026-10-20T16:24:55Z:** _"**deploy failed for dd84-api** … **Commit: Merge
pull request #29**"_, plus two more server failures. **Nine failures on nine
days, and now a failed deploy.**

**T-33 has called this service, for thirteen days, one that "nobody has named,
nobody has connected, and nothing in `ventures.md` mentions"** — language
implying orphaned infrastructure decaying by itself. **A merged PR #29 says the
opposite: it has an active repository and an active committer.**

**So the nine failures are not a forgotten thing rotting. They are a service
under active development whose deploys are failing** — a different problem, with
a different owner, and a far cheaper diagnosis.

**Why the record got it wrong is worth keeping.** **Every alert this task logged
was a failure notice, and failure notices look identical whether a service is
abandoned or actively broken.** The deploy notice is the first one carrying a
commit, and it only arrived because somebody finally deployed. **The inference
from silence was unsupported and is withdrawn.** **Step 1 is now one GitHub
query — find PR #29 — rather than an open-ended investigation.**

### Marketing work was happening while this record reported none

**Instagram login from Chrome Mobile, Atlanta, 10-20T15:08:24Z. Pinterest
connected to Instagram at 15:09:11Z. At 10-21T04:14:52Z: "18 Pins published
successfully … 10 Pins didn't publish"**, addressed to **"Down Dirty 84 |
Tuning, EFI & Performance"**.

**Not an agent action.** Recorded because **this record has been reporting zero
marketing activity for two weeks while marketing activity was taking place** —
and because the ten failed pins are a concrete, fixable thing. **Squarely Rev's
territory, which is exactly why it is reported here and written nowhere else:
`docs/growth/` stays untouched by this routine.**

### Smaller, recorded

- **A second business credit facility** — a monthly statement for 9/20–10/19,
  **unread, with an attached statement**, plus **an $8.00 gift-card reward
  issued in DD84's name**, so the card has spend on it. → **T-83**. **The
  balance figures are withheld — A-19's fifth instance, and the first where the
  withheld figure is a liability rather than a bank balance.** The conservative
  reading was taken because **it can be reversed later and the opposite
  cannot.**
- **A second one-line store enquiry in four days** — _"Ar u shping to London"_,
  **10-20T23:37:50Z, unread, no subject.** → **T-81**. **No draft, and the
  reason is substantive**: a reply must state a shipping policy and an
  international price, and **`ventures.md` has neither.** **Two readings this
  record cannot separate** — an unwatched route producing real low-quality
  traffic, or automated probes — **and characterising the route matters more
  than either lead.** It is the fourth unwatched inbound route found (T-65,
  T-66, T-72, T-81).
- **A law firm checked in unprompted** (10-20T16:16:56Z, flagged important).
  **T-13 has been blocked 54 days on "the owner engaging counsel", and counsel
  just made contact.** **No draft** — engaging counsel commits DD84 to a
  conversation about cost. **The name and address are not recorded.**
- **A third Melio chase** (10-20T13:07:50Z): _"Are you still interested… if not,
  no worries."_ **That closing is what a real sales sequence does before it
  stops — weak evidence against the pretext reading, and still no evidence the
  account exists.** T-74 unchanged in substance.
- **HP Tuners sent two dealer-only notices**, one headed _"intended for HP
  Tuners authorized dealers."_ **The first independent, supplier-side
  corroboration of any `ventures.md` capability claim this record has seen.**
- **Seventeenth consecutive empty calendar day** (read 10:41Z for 10-21 and
  10-22) and **Shopify 0 orders** (10:42Z). **Two real zeros.**
- **Drafts: 15, unchanged for a ninth run**, five still to likely loan fraud
  (T-42).
- **A Google security alert and a Family Link sign-in for a minor's account**
  for which this mailbox is the recovery address; a recovery phone was changed.
  **Not DD84's, not named, not described.** **Seven access notices across six
  providers in five days** (T-76).
- **Reddit: still nothing.** **T-60's outcome is two days past its deadline and
  remains unknown.**
- **Thread-truncation check held:** every multi-message thread this run — the
  reseller thread (4), Melio (3), the Render pair (2) — **returned a message
  count equal to the messages supplied.**

### Class A held, and §5 held

Nothing sent, forwarded or replied to. **No draft created, edited, sent or
deleted.** No label applied, no thread moved, archived, trashed or reported.
**No link in any solicitation opened, and the $8.00 gift-card redemption link
was not clicked.** No calendar write, no customer contacted, no price quoted.
**No payment, bank, card or Square action of any kind.** **No Supabase tool
called** — a Ledger-side notice reporting that _"people have been signing in to
your app"_ was recorded and not investigated. No scheduled task created, changed
or fired (T-69). `docs/growth/` untouched.

**Withheld: every bank figure, the card statement's balances, both sets of
last-four digits, both enquirers' addresses, the supplier rep's name, the law
firm's name and address, and every solicitation and redemption URL.** **No
customer name, email or phone written.** **No minor named or described.**

- **Needs the owner today** — **read the four unread bank messages as one
  sitting** (three balance alerts plus the declined-transactions notice, which
  is the most informative and arrived last) and **the Capital One notice, whose
  charge was due today with no outcome observed**; **T-82** (the supplier wrote
  nineteen hours ago — "not now" beats silence); **T-72** (a prospect at 104
  hours, draft written); **T-81** (one line: does DD84 ship abroad?); **A-19**
  (fifth instance); then **T-83**, **T-75**, **price T-37 and T-64**, **A-18**
  (reject it), **T-76**, **A-15** (13 days), **T-80**, **T-69**.
- **Worth stating plainly** — **three of today's findings are corrections to
  this record rather than news about the business.** The bank finally named a
  charge, so an "unexplained balance" becomes "declining subscriptions". A
  merged pull request turned an abandoned service into an actively broken one. A
  supplier's chase surfaced a sixteen-day-old opportunity **that no windowed
  sweep could ever have seen.** **The register has been describing this business
  accurately within the limits of what it pointed at, and today three of those
  limits moved.**

---

## OL-0056 — 2026-10-21 · Daily brief: five unread bank messages, a supplier waiting, and a task of mine that nothing can trigger

- **Routine** `/dd84-daily-brief`, **fired by the scheduled task "DD84 Daily
  Command Brief (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-21T10:51:12Z**, **thirty-one minutes after the intake at OL-0055.**
  **Twentieth scheduled firing to reach a session with the repository
  attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`4e87638`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **51 tracked files, working tree clean. Eleventh run to
  record the result and the tip**, and the **twentieth** whose firing prompt
  demanded "28 tracked files" (T-69).
- **No skeleton commit**, deliberately, for OL-0051's reason. **Three
  applications, two reasoned declines — and two of the three applications have
  now been tested by a real worker restart, both holding.**
- **Reached** nothing new; the intake's reads are carried with their own
  timestamps.

### The bank pile is now five messages, and the newest is the only one that explains anything

**Three balance alerts (10-15, 10-17, 10-19), the declined-transactions notice
(10-20), and the Capital One AutoPay notice whose charge was due yesterday — all
five unread.**

**The ordering is the finding.** Four runs reported this account's state and
none could say what moved through it. **The message that names a charge arrived
last**, and it is the only one of the five that converts anything from unknown
to known. **A reader working top-down through that mailbox would reach the
useful message fifth.**

**And yesterday's charge produced no confirmation and no failure notice.**
**Unknown is not paid.** If it failed the way the 10-20 PayPal debit did, a fee
may be accruing where nothing here can see it.

### A task of mine fell due today, I did not do it, and the reason is structural

**T-75 — run the site monitor — is Agent-owned, was due today, and is not
done.** Recorded plainly: **the firing instruction says not to report an owner
action as agent work, and the reverse obligation is identical.**

**The reason is not inattention.** This task's next action is to run
**`/dd84-site-monitor`**, and **that routine has no schedule.** Four of the six
routines fire on a timer; **`/dd84-site-monitor` and `/dd84-followup` run only
when somebody asks.**

**So the register can generate work for a routine it has no way to trigger** —
and this instance of it is **gating a reply to the only live prospect on the
record**, because T-72's drafted first line claims the store works and nothing
reachable confirms that.

**The due date was deliberately not moved.** Re-dating it would hide precisely
the thing worth seeing. → **T-75** carries the finding; **T-69 now carries a
fourth edit: give the site monitor a schedule.**

**Also mine and undone: T-33's step 1**, which shrank this morning from an
open-ended investigation to **one GitHub query** — find the repository holding
PR #29. **Eleven days overdue, no approval needed, and GitHub has not been
re-read since 2026-10-15.**

### Today's dates, and a second clean instance of the overdue defect

**48 of 64 open tasks past due, up from 46; 32 are the owner's.**

**Due today: T-75 and T-76 — and this agent set both dates on 2026-10-19.**
**Neither has an external deadline.** **Yesterday exactly one of 46 past-due
items carried a real clock; today none of the 48 does.**

**The two genuine dates in the whole register are both in the future** — the
ChatGPT Business renewal on **2026-10-24** and the Ledger's database deadline on
**2026-10-30** (T-80). **The pattern diagnosed on 10-19 and 10-20 now has a
third reading, and it is the cleanest: a register in which forty-eight items are
"overdue" and none is actually late.**

### Carried forward without re-arguing

- **T-82: a named supplier wrote nineteen hours ago.** The only warm supplier
  relationship on the record; **silence for a third week reads as a decline, and
  one paragraph prevents that.**
- **T-72 at ~104 hours** with a draft waiting, and **T-81** needing **one line**
  — does DD84 ship abroad? **No draft for either was written**; T-81's would
  require inventing a shipping policy `ventures.md` does not contain.
- **Seventeenth consecutive empty calendar day** (read 10:41Z) and **Shopify 0
  orders** (10:42Z). **Two real zeros.**
- **Seven items now draw on the account, four amounts unread, no total given.**
- **Eight packets pending**: A-05 / A-06 / A-07 at **76 days** — **and A-06's
  stated blocker, the owner engaging counsel, emailed unprompted yesterday** —
  A-10 at **74**, A-15 at **13**, A-17 at **12**, A-18 at **8**, **A-19 at 5,
  with Friday's cash review two days out.**
- **Unpaid invoices and customer payment failures unchecked for the tenth
  consecutive run.**

### Class A held

Nothing sent, replied to or forwarded. **Calendar read only.** No label applied,
no mail state changed, **no draft created, edited, sent or deleted.** No charge,
refund, invoice, payout or fulfilment action. **No bank, card, Square or payment
action of any kind.** **No Supabase tool called.** No GitHub write. **No
scheduled task created, changed or fired** — T-69's four edits remain available
from this session and unmade, on the 2026-10-16 reasoning.

**No task marked Done on inference.** **T-60 stays open two days past its
deadline; T-75 stays open as undone agent work rather than being re-dated.**
`docs/growth/` untouched. **No balance figure, card-statement figure, last-four
digits, verification code, customer name, email or phone written here.**

- **Needs the owner today** — **the five unread bank messages as one sitting**,
  **starting with the newest**, because it is the only one that names anything;
  **T-82** (a supplier wrote nineteen hours ago — one paragraph); **T-72**
  (approve the draft) and **T-81** (one line on shipping); **A-19** (fifth
  instance, Friday's review is in two days); then **T-83**, **price T-37 and
  T-64**, **A-18** (reject it), **T-76**, **A-15** (13 days), **T-80**, and
  **T-69** — now four edits, one of which is the only way T-75 ever closes.
- **Worth stating plainly** — **nothing arrived today; the brief's content is
  entirely about what is already sitting in the mailbox and the register.** Five
  unread bank messages where the useful one is last, a supplier waiting on a
  paragraph, two prospects waiting on a decision and a one-line policy, and **a
  task of mine that cannot close because nothing fires the routine it needs.**
  **None of it is an information problem. One of them is mine.**

---

## OL-0057 — 2026-10-21 · A-06's document count corrected at the top, where a reader reaches it first

- **Timestamp** 2026-10-21T12:15:00Z
- **Task** A-06, T-05 · **Approval** **owner, 2026-10-21 ("Fix A-06")**, after
  the option was put to them rather than assumed — the same packet rule that
  made A-16 an approval applies here.
- **Action** Verified the legal-document count against the canonical repository,
  found the existing correction was in the right words but the wrong place, and
  promoted it to a banner at the head of A-06 naming the two documents the
  packet omits.
- **Tool** `gh api` on
  `downdirty84llc-creator/georgia-opportunity-ledger/contents/src/lib/legal/documents.ts?ref=main`,
  `base64 -d`, `grep -c`; `Edit`; `git`.
- **Operator** Claude (agent), cqvhy6 session
- **Before** A-06's title, decision block and plan all say "ten documents, seven
  requiring review". Correction present but at the foot of the packet.
- **After** Same body, unchanged. Banner immediately under **Status**, with the
  verification date, the two missing slugs, and why the body was not rewritten.

### Verified first-hand, not carried forward

`src/lib/legal/documents.ts` on `main` in the canonical Ledger repository, read
today: **9 × `requiresReview: true`, 3 × `false`, 12 documents.** The nine are
terms, privacy, subscription-terms, refunds, cookies, copyright, disclaimers,
**acceptable-use** and **accessibility**. The three exempt are editorial
standards, corrections and data sources.

**A-06's body lists seven and names them**, and its three exempt documents match
exactly. **The delta is precisely `acceptable-use` and `accessibility`** — and
neither is incidental: acceptable use is a term of the agreement with the
member, accessibility is a compliance statement about the product. **A review
pack built from this packet would have been short by the two with the clearest
exposure.**

This is the "registry figures carry a verification date" rule doing its job. The
figure was 42 days old and came from closing T-28; it was re-read rather than
quoted.

### The defect was placement, not wording

The correction has been in A-06 since the consolidation, and it is well put. It
sits at the **foot** of the packet, below the decision, the objective, the
source, the plan, the alternatives and the cost section.

**The daily briefs quote the title.** 2026-10-14 and 2026-10-15 both reported
"A-06 — Commission legal review of ten legal documents" to the owner, with "Ten
documents nobody qualified has reviewed" as the consequence line. The correction
was present in the repository the whole time and reached nobody.

**A correction a reader meets after the error is not yet doing its job.** That
is the finding worth keeping, and it generalises past this packet: this record
is full of corrections, and their value depends entirely on being encountered
before the thing they correct.

### Why a banner and not a rewrite

`docs/ops/README.md` holds that a raised packet is appended to, with only its
**Response** and **Actual result** blocks edited. **The wrong figures therefore
stay exactly where they were written** — title, decision block and plan all
still say ten and seven. Only a dated banner was added, the same pattern A-16
established for the append-only log: **an edit that announces itself is not the
failure the rule guards against.**

**This was put to the owner rather than decided here.** On 2026-10-15 the option
was offered with the reasoning — defensible, because a banner corrects a
propagating factual error without touching the decision requested, but identical
in shape to the edit that needed approval a week earlier. The answer was "Fix
A-06" on 2026-10-21. **Asking twice about the same class of edit costs a
message; assuming the second answer costs the rule.**

### The miscount, which has now gone wrong in both directions

`grep -c "slug:"` on that file returns **14** — twelve documents, plus the
interface declaration at line 17 and the `findLegalDocument(slug: string)`
parameter at line 422. Earlier in this record the count was given as **13
entries, 9 requiring review**, from counting the interface as a document. A-06
says **ten and seven**, from reading the stale copy that used to live here.

**Three different counts from one file, none of them arrived at dishonestly.**
The reliable count is of `requiresReview`, because every document has exactly
one and nothing else does. **A count is only as good as the thing being
counted** — and "number of lines matching a field name" is not the same question
as "number of documents".

### What this does not change

**The decision A-06 asks for is unchanged** — authority to engage counsel, and a
budget. What changes is its **scope**: the review pack is two documents larger
than the packet describes, so **any quote obtained against "ten documents" is
for the wrong job.** Worth knowing before the packet is answered, which is the
whole reason the banner is at the top.

**No fee is recorded, still.** The packet's second correction stands: an earlier
agent estimate of 6–12 hours of counsel time appeared in conversation and is not
a quote. Treat the cost as unknown.

**A-06 remains PENDING**, 76 days with the owner, and Ledger-side.

## OL-0058 — 2026-10-21 · Second follow-up run: three drafts, two held, and an age this record had been overstating for four statements

- **Routine** `/dd84-followup`, **run at the owner's explicit request** —
  `run /dd84-followup`, the second genuine user instruction this session has
  received and the second time this routine has run. Class A throughout.
- **Checkout, per contract item 0** — tip **`0da4644`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent. **52 tracked files, working tree clean. Twelfth run to
  record the result and the tip.**
- **Candidates 8 · drafted 3 · held for payment confirmation 2 · review
  requests 0.**
- **Payment systems confirmed against: Shopify only** (0 orders all-time, read
  11:22Z; one customer record, 0 orders, $0.00). **Not reached: Stripe** (no MCP
  server), **PayPal** (re-auth since 2026-10-09), **bookipay**, **Square**, the
  **bank**.

### The correction first, because it is about this record rather than the business

**T-64's unread datalog arrived 2026-10-13T15:39:45Z. At this run that is ~187
hours.** **Four statements reported it a day too high** — the 10-20 intake and
daily brief said 187 (correct 163), the 10-21 intake and daily brief said 211
(correct 187).

**One error, carried four times**, because each run took the previous figure and
**added 24 hours instead of recomputing from the stored timestamp.**

**The direction is what makes it worth a log entry.** It **overstated** the
neglect — **the flattering direction for a routine whose whole purpose is to
make neglect visible.** A register that exaggerates the thing it exists to
detect is **less** trustworthy than one that understates it, because the
exaggeration is the part a reader will believe.

**Third instrument defect of one family.** **OL-0049:** a query that truncated
silently. **OL-0055:** a windowed sweep that cannot see a quiet thread.
**Today:** a number carried forward instead of recomputed. **Each is a tool or a
prior output trusted where a fresh computation was needed**, and the repair is
the same shape every time — **recompute from source, do not inherit.**

### What was drafted, and why none of the three asks for money

**Three drafts, all in the brief and none in the mail account.** The account's
draft count stands **unchanged at 15.** → packet **A-20**, one Class C decision
covering the batch.

| Draft | Who                                                | Stage                                                          | Commits DD84 to                                                                             |
| ----- | -------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **1** | The Challenger customer, thread `1a0e402cdcf75731` | **Complete, unpriced**; his file unread **~187h**              | A substantive reply **by a date the owner fills in** — the draft carries a `[DATE]` bracket |
| **2** | The C10 customer, thread `1a1082503004a073`        | **Complete, unpriced**; DD84 spoke last, **~207h**             | Reviewing **one further datalog**. No price, no turnaround                                  |
| **3** | The Lexus enquirer, thread `1a0a565f802fc60b`      | **Qualified, stalled ~13 days**, past the proposed 7-day close | A scope reply if he answers. **No price**                                                   |

**The rule bound and is recorded as having bound:** _a follow-up that asks for
money is not drafted unless a payment system confirmed the item is genuinely
open._ **Stripe and PayPal were both unreachable, so no money chase exists in
any of the three.**

**And the more useful fact: a reachable payment system would not have helped.**
**Neither job was ever invoiced**, so there is nothing for Stripe or PayPal to
return. **The blocker is upstream of the connector — nobody set a price** —
which has been T-37's and T-64's next action since 2026-10-13, nine days.

**The `[DATE]` bracket in draft 1 is deliberate and is named in the packet.**
The calendar is empty, so capacity exists; **an agent filling in a turnaround
would be inventing a commitment.** The bracket is the safeguard, not an
omission.

### The review-and-referral half of this routine has nothing to operate on

**Zero review requests, and the reason is structural rather than a dry spell.**
Its thresholds need **a paid job inside the last month**. `ventures.md` records
**all-time revenue of $3,507.86 across 10 invoices and 3 customers, last payment
2025-09-12** — **thirteen months ago, and the figure is itself stale under the
registry's own 30-day rule.** The two live jobs were **never invoiced at all.**

**Deliberately not filled in with the three historical customers.** The standing
decision of **2026-08-07 closes those ten invoices as a line of enquiry**, and a
review request on a 13-month-old job **is not a follow-up, it is a cold approach
to someone who once paid.** That needs its own approval and a different routine.

### At final threshold, with a recommendation the owner has to make

**T-66, the Lexus enquirer, is ~13 days past last contact and past the proposed
7-day close.** **Recommendation: send draft 3; if no reply within 7 days, close
the enquiry and record it as lost.**

**Not because the lead is worthless — because the register cannot currently tell
a live lead from a dead one.** It now holds **four inbound leads** (T-65, T-66,
T-72, T-81) **and no close rule.** An enquiry that stays open forever is
indistinguishable from one being worked.

**And the live issue was never that lead.** It is that **the website's contact
form went unread for 23 days**, which is still true and will produce the next
one.

### Clean reads, recorded as such

- **Google Calendar, 2026-10-07 → 2026-10-22, read 11:26Z: zero events across
  fifteen days.** **So no appointment was completed and left unclosed** — a real
  empty read, not an unavailable section.
- **Shopify, read 11:22Z: 0 orders all-time**; **one customer record, 0 orders,
  $0.00, created 2026-10-07**, unchanged since 2026-10-13. **Its masked alias is
  not recorded here.**
- **Both customer threads report 29 messages and returned 29.** Nothing
  truncated — **the check OL-0049 made standing practice, and the reason both
  ages above could be recomputed from source.**
- **Google Drive not read**, and the reason is specific: **the Challenger
  customer's file arrived as a 2.84 MB email attachment, not a Drive share.**
  **On 2026-10-13 Drive is where this job was found**; today it adds nothing.

### Out of scope and recorded anyway

**T-82, the supercharger supplier, is not a customer and this routine walks a
customer lifecycle.** Noted because **it is the most time-sensitive waiting
counterparty in the record** — DD84 asked to be a reseller on 09-26, got a
dealer packet, replied 10-05, went silent sixteen days, **and the rep chased at
2026-10-21T01:06:06Z.** **One paragraph holds that door, and this routine is not
the one to draft it.** Rejected as a fourth draft in A-20's alternatives, with
that reason stated.

### Class A held, and §5 held

**Nothing sent, forwarded or replied to.** **No draft created in the mail
account** — all three live in the brief only, and the count is **unchanged at
15, five still addressed to likely loan fraud** (T-42). No label applied, no
thread moved, archived, trashed or reported. **No quote cancelled, no slot
released, no amount written off, no discount, extension or goodwill credit
offered** — pricing is not this routine's to move. **No invoice marked paid, no
job marked complete.** **Nothing passed to collections.** No calendar write.
**No bank, card, Stripe, PayPal, Square or Shopify write.** `docs/growth/`
untouched.

**No customer name, email address or phone number is written anywhere in this
run's output.** Five customers and two enquirers are **thread IDs**; the Shopify
alias is omitted; the supplier's rep is a role. **No price was quoted**, and the
two jobs' value stays a **range — $198–$1,300 for the pair, never a midpoint,
and explicitly not separable per job** because neither tier was ever decided.

- **Needs the owner** — **A-20**, three drafts, approve or amend per message;
  **price T-37 and T-64**, which is the blocker the sends do not remove;
  **reject A-18**, which asks the Challenger customer for the file he already
  sent; **decide the close rule** for stalled leads (T-66); and separately
  **T-82's one paragraph**, which is not in this packet and should not wait for
  it.
- **Worth stating plainly** — **this run's most useful output is not the three
  drafts.** It is that **the two items with real money in them are the two with
  nothing confirming them, and that is not the connectors' fault** — neither job
  was ever invoiced, so no payment system could have helped. **Nine days of
  "held for payment confirmation" has been describing a connector gap when the
  actual gap is an unset price.** The held section was right every day and
  **pointed at the wrong thing.**

> **This entry was written as OL-0057 and renumbered.** A sibling session
> appended its own OL-0057 and reached the remote first, so **the remote holds
> the number and this one moved to OL-0058.** **Nothing prevents that
> collision:** two sessions reading "Next entry: OL-0057" both take it, and the
> append-only rule gives no tie-break. **Recorded as the first numbering
> collision in this log** — the ninth instance of summary drift on 2026-10-15
> was the first _content_ collision between sessions, and this is the first
> _structural_ one. **The durable fix is the same shape as the counts line: stop
> storing a derived value by hand.**

---

## OL-0059 — 2026-10-21 · A-15 executed: the first two external messages this platform has ever sent

- **Timestamp** 2026-10-21T12:11:00Z
- **Task** T-38, T-39 · **Approval** **A-15, APPROVED (both)** by the owner
  2026-10-21 ("Approve A-15"). **Class C — external send.**
- **Action** Re-read both threads, found neither had moved, corrected two
  statements that 13 days had made untrue, sent both replies, and verified each
  in its thread afterwards.
- **Tool** `mcp__Gmail__get_thread` ×4 (two before, two after),
  `mcp__Gmail__reply` ×2; `Edit`; `git`.
- **Operator** Claude (agent), cqvhy6 session
- **Before** A-15 pending 13 days. GDOT thread 4 messages, last reply unread
  since 2026-10-06. SBDC thread 1 message, no reply.
- **After** GDOT thread **5 messages**, SBDC thread **2**. Both sends verified
  by re-reading the threads.

### This is the first time either agent has sent anything outward

Every routine on this platform is Class A by construction, and the gate has held
since 2026-08-06: **drafts have been written, packets raised, and nothing has
ever left.** A-15 is the first approval of a send, and this entry is the first
record of one. Worth marking, because the safety model's whole claim is that the
boundary is real — **it is only demonstrated by an approval actually crossing
it, under a name and a timestamp.**

### Checked before sending, because a 13-day-old draft is a claim about the past

**Both threads were re-read first.** GDOT: still 4 messages, Nakia Nembhard's
2026-10-06T22:04:31Z reply still last and still unread. SBDC: still a single
message from 2026-10-06T19:56:11Z. **Nothing had arrived that the drafts did not
account for.**

That was the condition for sending at all. **Had either counterparty written
again, the drafts would have gone back to the owner rather than out** — an
approval is for a message in a context, and the context is checkable.

### Two words changed, and the reasoning for treating that as execution

| Draft | Was                               | Sent                                  | Why                                                                                                                    |
| ----- | --------------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| GDOT  | "Good **afternoon** Nakia"        | "Good **morning**"                    | Sent **08:10 EDT**. Nembhard's own messages in this thread open "Good afternoon" and "Good evening" to match the clock |
| SBDC  | "missing **Tuesday's** 3:30 slot" | "missing **the October 6** 3:30 slot" | **Last Tuesday was 2026-10-20.** The phrase had come to point at the wrong date                                        |

**The second one mattered.** Apologising to an adviser for "Tuesday's slot" when
their meeting was on the 6th reads as an apology for a different and more recent
no-show — worse than saying nothing. **A weekday reference is a figure that
drifts**, exactly like the tracked-file count in OL-0045, and it drifted into
being wrong in thirteen days.

**Nothing was added.** No sentence about the 13-day gap beyond the SBDC draft's
existing "and for the slow reply"; no new commitment, date or figure. **Adding
prose to an approved message to a state agency is customer-facing variance and
goes back to the owner; changing "afternoon" to "morning" at 8am is not.** The
line is drawn at whether the recipient's understanding of what DD84 has
committed to changes, and in both edits it does not.

### Verified in the destination, not from the return value

`reply` returned message IDs for both. **That was not treated as delivery.**
Both threads were re-read afterwards: GDOT `1a0cf82b91d1352c` now carries
`1a15e5f14b204202` at 12:10:51Z with `SENT`, to the reviewing engineer and cc
the second D1TO address; SBDC `1a112caffaba4e6d` now carries `1a15e5f48ed39b01`
at 12:11:05Z. **Message counts went 4 → 5 and 1 → 2.**

Recipients are named here by role rather than by address. They are already
written out in A-15's Draft 1 and Draft 2, and **A-17 — whether third-party
contact details belong in this public repository at all — is still pending.
Multiplying instances of the contested category while its decision is open would
be settling it by accretion.**

This record has been caught three times by a success signal that measured the
wrong thing — a green Routine that committed nothing, a grep that passed on an
uncleaned tree, a token counter read as liveness. **A send call returning an ID
is the same class of signal**, and it cost one extra read to not rely on it.

### What was deliberately not done

- **No attachment and no revised concept plan.** The GDOT reply asks three
  questions and makes no engineering claim, as approved.
- **The D1TO checklist PDF is still unread.** No attachment-download tool exists
  in this session, and **the message makes no claim about what the checklist
  contains** — it says it is in hand and asks questions around it.
- **No Calendly booking and no calendar write.** The SBDC reply says the owner
  will book. T-39 stays open until a booking exists.
- **No reply to the C10 customer.** A-15's rejected third draft stays rejected;
  that thread needs a technical determination about a running engine, which
  `ventures.md` puts beyond an agent.

### A seventh numbering collision, and theirs was the better fix

This entry was written as **OL-0058** and is **OL-0059**. The follow-up run
committed `43459f6` at **12:10:59Z** — eight seconds before the GDOT reply went
out — and took OL-0058 from the same "Next entry" line this session had read.

**That session's own entry proposes the durable fix**, and it is right: _stop
storing a derived value by hand._ "Next entry: OL-00NN" is a cached count of the
entries above it, and a cached count is what has now failed seven times. The
number should be computed from the headings at write time, not read from a
footer that two sessions can read simultaneously and both believe.

**Also worth adopting from that entry:** it found a figure it had been carrying
forward rather than recomputing, and flagged that the error ran in the
**flattering** direction — overstating the neglect a routine exists to detect.
**An exaggeration in the direction of the tool's own purpose is the one a reader
will believe**, which makes it worse than an understatement, not better.

### What the owner now owns

**T-38 waits on Nembhard**, and the three answers are what set a surveyor's
scope — throat width and radii, survey versus traffic statement, railroad
coordination sequencing. **No surveyor should be engaged before they arrive**,
which is the entire reason the questions were asked rather than assumed. Chase
date **2026-10-28**: the thread's own history shows a 12-day turnaround, so a
week's silence is not yet late.

**T-39 waits on the owner**, who has to click the Calendly link.

---

## OL-0060 — 2026-10-21 · Reconciling the approval board three ways, and withdrawing A-17's own argument for urgency

- **Timestamp** findings measured **2026-10-21T13:40Z** (approx.); **committed
  2026-10-22**, after a concurrent push forced the work to be rebuilt — see
  below. **The measurement dates are as measured and were not restamped to the
  commit date.**
- **Task** T-37, T-51, T-64, T-66, T-71 · **Approval** **S-01** (Class B —
  documentation inside this repository). **No packet was answered and none could
  be:** A-17, A-18, A-19 and A-20 are the owner's.
- **Action** Reconciled the approval status board against the packets below it,
  measured A-17's accumulation claim, and named two register rows to their
  packets.
- **Tool** `git`, `Read`, `Edit`, `python3` (regex scan), `prettier`.
- **Operator** Claude (agent), interactive session on the owner's instruction
  "continue".
- **Checkout** — base **`751564d`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  **52 tracked files.** No connector reached, **no GitHub write, no scheduled
  task touched.**

### Five things on the board were wrong at once

- **A-18, A-19 and A-20 had no row** — eight days, five days, and **the same
  hour**. All three with the owner.
- **A-15 read `Pending` two hours after it was approved and both replies were
  sent** — OL-0059, 12:11Z. **The session that executed it updated the packet
  and this log and not the board.**
- **A-16 was still in the open-packet bullet list**, twelve days after it was
  executed, describing a world-readable customer mobile number as a live concern
  while the board row three lines above read "Approved (executed)".
- **The summary line read "Four packets are with the owner"**, the set as it
  stood on 2026-10-12. It is **six**: A-17, A-18, A-19, A-20, A-07, A-10.

**That is the seventh through eleventh instance** of this board lagging the
packets below it. The note recording the fifth and sixth is still on the page,
four lines above the line that was wrong.

**A-20's absence is the sharpest of the five.** Nothing had time to go stale:
the packet and the missing row were written the same day by two sessions, and
**the board was already wrong about a decision raised within the hour.** Five of
the eleven instances are this board failing to notice a packet that exists,
which makes it **the least reliable surface in the record and the first one a
reader meets.** The 2026-10-12 note said the fix is structural rather than
another reminder; **this entry is another reminder, and that is worth admitting
rather than dressing up.** The structural fix would be generating the board from
the packet headings instead of maintaining it by hand — **not attempted here**,
because it is a tooling change in a repository with no build, and proposing it
is not the same as having it.

### The lag runs the other way too, and that half is left in place deliberately

**A-05, A-06 and A-07 all read
`Status: PENDING — with the owner since 2026-08-06` in their own packet headers.
A-05 and A-06 were answered on 2026-08-10** — their Response blocks on the same
page say so, and A-05's block _itself describes_ the header being stale after
the 2026-09-25 consolidation: the fix reached the block and never reached the
line above it.

**The two headers were not edited.** `APPROVALS.md` permits editing only the
Response and Actual-result blocks of a raised packet, and rewriting a header to
remove a contradiction is the habit that rule exists to stop. **The
contradiction is documented on the board instead**, with the instruction that
follows: trust the board and the Response blocks, never a Status header.

**This defect is being read, not sitting inert.** **OL-0056, today's daily
brief, reports "Eight packets pending: A-05 / A-06 / A-07 at 76 days"** — the
header count. **Five, not eight, and A-07 is the only packet genuinely 76 days
old.** The brief over-reported the owner's queue from a source that looks
authoritative and is not.

### A-17 measured, and its own urgency argument withdrawn

A-17's "Risks and safeguards" block predicts the material accrues on every
intake run. **A scan of every tracked `.md` file, classifying addresses by
domain rather than reading any out, says it has not:**

- **23 brief files committed 2026-10-09 → 2026-10-21**, and **zero** new
  consumer free-mail addresses in any of them.
- The five-address set Option A would redact is still in **the same two files**
  — `TASK-REGISTER.md` and `briefs/2026-10-08-inbox-intake.md`. All five arrived
  in one run on 2026-10-08.
- **Option A's blast radius is two files, not the "up to four" the packet
  states.** Cheaper than advertised.
- **What did grow is the classes the packet says to keep** — named business
  senders now in **seven** files, two of them committed 2026-10-20. **If the
  owner's instinct is Option B, that is the set that is moving.**

Recorded in A-17's Actual-result block **with the measurement's limit stated**:
it is a regex scan, so it shows the counted categories did not grow and shows
nothing about a person named without an address. **A-16 was once reported done
on a test that could not see what it missed; this one says what it cannot see.**

**The consequence is that the delay has cost nothing, and the packet's one
argument for speed is withdrawn rather than left standing.** → **T-51** carries
the same correction, and **its due date was deliberately not moved**: it is
overdue _and_ not urgent, and both being true at once is the thing worth seeing.

### Four register rows named no packet though packets exist for them

**T-71** read `A to report` five days after **A-19** was raised to cover it, and
**T-37, T-64 and T-66** read `A to prepare` / `C to send` / `C to contact` with
**A-20** raised the same day naming all three in its Affected-records block.
`docs/ops/README.md` requires a task above Class A to name the approval ID or
read `awaiting A-nn`. All four now name it.

**T-64 is named to A-20, not A-18**, although both packets reach it: A-18 is
superseded and A-20 carries the live redraft. **The row points at the packet an
answer would actually come through**, and A-18's relationship to it is stated in
the board's bullet rather than crammed into a table cell.

### A concurrent push, and what it changed

**This work was written against `0da4644`, and four commits landed on the branch
while it was in progress** — including A-15's execution and A-20's raising. The
push was rejected, and **the commit was rebuilt on `751564d` rather than
merged**, because the board edits themselves had to change:

- **A-15 was pending in the first draft of this entry and approved in the final
  one.**
- **A-20 did not exist in the first draft**, and its missing row became the
  fifth defect and the sharpest one.
- **The entry was numbered OL-0057 and is now OL-0060** — OL-0057 through
  OL-0059 were taken while this was being written. **Fifth numbering collision
  in this record.**

The superseded commit is kept locally on `recon-backup` and is not pushed.
**Fifth concurrency incident here, and the first where the other session's work
changed the finding rather than only the numbering** — a reconciliation of a
board went stale against that same board twice while being written, which is the
best evidence yet that the board should not be maintained by hand.

### What was deliberately not done

- **No packet answered, narrowed, or recommended into.** A-17's recommendation
  is unchanged at Option A; the measurement makes it cheaper, not chosen. **A-20
  was read in full and left untouched** beyond its board row — three customer
  messages are Class C and not this session's to send or alter.
- **`.claude/commands/dd84-inbox-intake.md` was not amended.** That amendment is
  **part of Option A**, and making it before the decision would commit half of
  one option while the packet still offers three.
- **A-05 and A-06 headers left as written** (above), and **A-18's body left as
  written** — its author's own note on being overtaken is worth more than a
  correction.
- **No redaction performed.** Nothing in A-17 or A-19 was removed from any file,
  and no git history was touched, which no option in either packet can do.
- **No routine prompt edited** — T-69's edits remain available from this session
  and unmade, on the 2026-10-16 reasoning.

### Class held

No mail read, sent, replied to, forwarded or labelled. **No draft created,
edited, sent or deleted.** No charge, refund, invoice, payout or fulfilment. No
bank, card, Square or payment action. **No Supabase tool called.** No GitHub
write. **No scheduled task created, changed, fired or deleted.** `docs/growth/`
untouched. **No balance figure, last-four digits, customer name, email address
or phone number written here** — the A-17 measurement is reported as counts and
domain classes, and **no address appears in this entry or in the packet block it
produced.**

- **Needs the owner** — **A-20** and **A-19** first, and they are a pair: A-20
  has **three people waiting on two delivered jobs and a stalled enquiry**, and
  **A-19 runs out of time on Friday 2026-10-23 at 11:10 UTC**, when the cash
  review fires and withholds the only figure it has by default. Then the five
  unread bank messages **newest first**, **T-82**, **T-72**, **A-18** (close it,
  A-20 carries its redraft), **A-17** at 12 days, and **A-07**, the one 76-day
  packet that is real. **A-15 is off this list for the first time since
  2026-10-08.**
- **And the thing none of these packets contains** — **neither delivered job has
  ever been priced.** A-18 said so on 2026-10-13, A-20 says so again, and
  **approving every message in A-20 would recover three conversations and still
  leave the revenue on the floor.** Pricing is not Torque's to move; it is the
  only item on this list with money directly attached.

---

## OL-0061 — 2026-10-22 · Two delivered jobs priced, and the ladder every run had been reading was wrong

- **Timestamp** 2026-10-22T09:47:25Z
- **Task** T-37, T-64 · **new** T-84 · **Approval** **none required to price.**
  Proposing and recording a price is Class A. **Adopting it and quoting it is
  the owner's — raised as A-21.** No live price was changed; **Shopify was read
  only.**
- **Action** Read the live catalogue, mapped both jobs onto ACTIVE SKUs,
  corrected the venture registry's price ladder against the store, re-verified
  both threads, recomputed both ages from their stored timestamps, and raised
  A-21 and T-84.
- **Tool** `mcp__Shopify__graphql_query` ×5, `mcp__Shopify__search_products`,
  `mcp__Gmail__search_threads` ×2 (one a deliberate control), `Edit`, `python3`,
  `git`.
- **Operator** Claude (agent), cqvhy6 session
- **Before** The pair carried at **$198–$1,300, explicitly not separable per
  job**, for nine days. `ventures.md` listed _Holley EFI Tuning & Diagnostics_
  at $350/$450/$650 as a Core rung.
- **After** **T-37 $349, T-64 $350 — $699 of delivered work, separable per
  job**, each traceable to a live ACTIVE variant. $997 with both determinations.

### Evidence

| Claim                                             | How it was established                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Holley EFI Tuning & Diagnostics_ is **ARCHIVED** | `status: "ARCHIVED"`, `updatedAt` 2026-08-06T15:05:54Z; its replacement was created 2026-08-06T15:05:32Z                                                |
| The replacement has **no diagnostic rung**        | `variantsCount: 6`, and all 6 read back: Startup $275 · Remote NA $349 · Remote Cam $399 · Remote E85 $499 · In-Person NA $550 · In-Person Boosted $599 |
| The ladder's **$650 ceiling** is wrong            | `DD84-TOYLEX-PERF-RENTAL` $749.00, ACTIVE                                                                                                               |
| The ladder's **$400 floor** is wrong              | `DD84-GM-TUNE-BASIC`, `DD84-FORD-TUNE-BASIC`, `DD84-MOPAR-TUNE-BASIC` all $350.00                                                                       |
| The **$149 file review cannot cover either job**  | Its own copy: "no calibration changes included"; "Not included: editing or delivering a tune, flashing, **tune revisions**"                             |
| The **Mopar rung boundary does not exist**        | Full description read untruncated: lists "Basic Tune: $350.00 Street Tune: $450.00 Performance Tune: $650.00" and **no scope difference**               |
| T-64's customer log is **unread**                 | Thread `1a0e402cdcf75731`, 29 messages, last from the customer 2026-10-13T15:39:45Z, ~2.8 MB, `labelIds` contains **`UNREAD`**                          |

### Three instrument checks, because two of these tools have lied before

1. **A Gmail empty result was not trusted.** `newer_than:5d` returned `{}`. The
   **same query without the date filter** returned both threads, so the empty
   result is a **true negative** and neither thread has moved. An unverified
   empty result is not evidence — OL-0049 and OL-0055 are why.
2. **A Shopify empty result was diagnosed, not believed.**
   `title:"Tune-or-Mechanical"` returned zero while the product is ACTIVE; the
   hyphens break the field filter. Found instead via `product_type`. **The tool
   documents this failure mode — invalid or unmatched filters return silently.**
3. **Both ages were recomputed from stored timestamps**, never carried forward.
   **OL-0058 is why**: an inherited age overstated T-64 by 24 hours in four
   consecutive statements.

### The finding that outranks the prices

**The money was never the blocker, and neither were the connectors.** Nine days
of runs reported these jobs as "held for payment confirmation" — Stripe
unreachable, PayPal unauthenticated. That was true and it was beside the point:
**neither job was ever invoiced, so no payment system could have confirmed
anything.** Yesterday's run got that far and named the unset price as the
blocker. **Today found why the price was unset: the document every run consulted
did not contain the rungs these jobs needed.**

`ventures.md` carried a ten-row summary ladder. The rungs that price a
**half-diagnosed** job — the $149 Tune-or-Mechanical determination with its
published GREEN/YELLOW/RED outcome, the $75 pre-tune deposit, the $99 written
datalog guidance — **were not in it.** They were in the store the whole time.
Six active service rungs were missing; four more are still to be added.

**This is the third member of the instrument-defect family, and the first where
the faulty instrument was a document in this repository rather than a
connector.** The repair is identical to the other two: **recompute from source,
never inherit.** CLAUDE.md already says it — "the live system always beats the
document, including this one" — and today is the first run that needed it.

### What was deliberately not done

- **No diagnosis was offered on either fault.** T-37's wideband contradiction
  stays open; the $149 SKU **prices the question without answering it**, which
  is the only honest way an agent can put a number on an undiagnosed car.
- **The Mopar $450/$650 boundary was not inferred.** T-84 Step 2.
- **The four unverified ladder rows were not re-checked.** The owner asked for
  two prices, not a catalogue audit. T-84 Step 1, marked Agent work.
- **Nothing was sent, and no price was quoted.** A-21.
- **No due date was moved.** T-37 (2026-10-10) and T-64 (2026-10-14) stay past
  due, because re-dating to hide lateness is the defect this register already
  names.

### Renumbered on a second collision

**This entry was written as OL-0060 and is OL-0061.** A sibling session took
OL-0060 for the approval-board reconciliation and pushed first, so **theirs
keeps the number and mine moved** — the same resolution as the first collision.

**That is now twice.** Two sessions read `## Next entry: OL-00NN`, both take it,
and the append-only rule offers no tie-break. **The first instance could be
called luck; the second makes it structural.** The fix is the same shape as the
one that session names for the approval board — derive the number instead of
reading it — and it is the same reason it is not attempted here: it is a tooling
change in a repository with no build. **Recorded so the third instance is not
diagnosed from scratch.**

### One cross-reference corrected

The 2026-10-21 register note on A-15 pointed a reader at **OL-0058** for the
send's record. **The A-15 send is OL-0059**; OL-0058 is the follow-up run.
Pointer corrected in `TASK-REGISTER.md`. **The sibling session's own reasoning
was not altered** — only the number a reader would follow.

### Unresolved

- **Whether either job is already paid.** Unreadable (T-36). **Unknown is not
  unbilled**, and the owner's own records are the only source that can settle it
  before an invoice goes out.
- **Cam and airflow status on the C10** — the $50 between $349 and $399.
- **How DD84 would actually collect** $699 if both were invoiced today. A price
  does not create a payment path.

---

## OL-0062 — 2026-10-22 · Intake: fifty-eight threads, no customer, and a switched-off card that may explain the declines

- **Routine** `/dd84-inbox-intake`, **fired by the scheduled task "DD84 Inbox
  and Lead Intake (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-22T10:20:24Z**. **Twentieth scheduled firing to reach a session with
  the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`751564d`** at the start,
  **`0ed7730`** after the skeleton commit; `HEAD` equal to origin; **no `src/`,
  no `package.json`**; clean status. **54 tracked files, not the 28 the prompt
  expects** — see T-85 step 3.
- **Window** since OL-0055, **2026-10-21T10:20Z → 2026-10-22T10:20Z**, Gmail
  `after:2026/10/21`. **Overlaps the previous run by ~10 hours on purpose**: an
  overlap deduplicates against the register, a gap does not.
- **Counts** 58 threads reviewed (50 + 8, both pages pulled against an estimate
  of 58, so the list is complete) · **7 actionable** · 51 no-action · **0 new
  leads** · 1 draft · **3 new tasks** (T-85, T-86, T-87) · 1 packet (A-22).
- **Sources reached** Gmail, Google Drive, Google Calendar. **Not reached**
  Superhuman Mail (needs re-authentication), Stripe, PayPal, bookipay, Square.
- **Operator** Claude (agent), cqvhy6 session

### The skeleton repair was tested again, and this time it mattered

**The brief was committed empty before gathering** (`0ed7730`) — the fifth
application of the OL-0050 repair. **A worker restart then hit this session
mid-run.** The 251-line finished brief survived on disk and the run was resumed
and completed rather than lost.

**That is three restarts in two days and two runs saved.** The repair's value is
no longer hypothetical: **OL-0050 records what the same event cost when the
repair did not exist — about twenty minutes of work and no record of it.**

### The finding: a card the owner turned off himself

| When                     | What the bank said                                                                                       |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| **2026-10-21T17:03:51Z** | Balance at or below zero on the business checking account. **Figure and digits withheld — A-19 pending** |
| **2026-10-22T02:06:35Z** | The business debit card **"remains off, as you requested in online or mobile banking on 10/07/2026"**    |

**T-71 says "the business bank account is overdrawn; two payments declined".** A
card switched off on 2026-10-07 declines every time it is used. **So the
declines may be the card obeying an instruction rather than a funding failure.**

**This is a hypothesis with two candidate causes and no evidence separating
them, and it is recorded as that.** Nothing in the mail says which instrument
the declines hit. **It is not reported as the cause of T-71** — but it changes
T-71's first step from "find money" to "find out which instrument declined", and
those have different fixes.

**A third decline arrived in the window** — a consumer subscription locked for a
declined payment at 2026-10-21T16:00Z. Recorded as pattern evidence, not as a
business item.

### Zero leads, for the fourth run running

**Fifty-eight threads and not one person asking about a car.** The register
already carries the reason as an unanswered question: `ventures.md` records the
channel producing DD84's customers as `UNKNOWN`, and **both live jobs have an
unknown origin.**

**An intake routine cannot create demand.** It can report that the top of the
funnel is empty, which it has now done four times, and it can stop that being
mistaken for a quiet inbox: **the inbox was busy. It was busy with nobody who
wants a tune.**

### One draft, and a reversal of yesterday's decision

**T-82, the supercharger reseller line, was due today with no draft.** The
2026-10-21 run declined to draft it because "the answer depends on the buy-in,
which is the owner's call."

**That was right about the buy-in and wrong about the silence.** The two are
separable: a holding reply that commits to nothing financial answers the
supplier without pre-empting the owner. **Seventeen days of silence on a
supplier who has chased twice costs the relationship whether or not the buy-in
is ever agreed** — and the account being overdrawn is a reason not to commit to
a stocking order, not a reason to stay silent. **A-22**, with a `[DATE]` bracket
for the only part the owner must fill.

### Two instrument checks, and one test that cries wolf

1. **The Gmail window was verified both ways.** The thread list was pulled to
   completion (two pages, 58 against an estimate of 58), and the earlier
   targeted query was run with and without its date filter so that an empty
   result could be read as a true negative rather than a silent miss. **Neither
   priced job's thread moved.**
2. **Pinterest contradicted itself and neither side was called controlling.**
   One notice headed **"Success!"** reports **0 Pins created**; another an hour
   later reports **1 of 12 rows uploaded**. Across three notices **19 of 50
   attempted items published.** T-86. **The defect is not the failure rate — it
   is that one failure announced itself as a win**, and that is the kind that
   gets filed and forgotten.
3. **The routine's own checkout test is stale and now false-alarms every run.**
   It asks for **28 tracked files** and calls the count "the only tell" for the
   2026-10-08 container reset. **There are 54**, none of it application code.
   **A test that cries wolf on every run trains its operator to skip the one
   check that would catch a real reset.** The durable form is "no `src/` and no
   `package.json`" — a property of the Ledger tree rather than a count that
   drifts. **Fixing it needs the claude.ai Routines UI, the same wall as A-10.**

### A third external message, and a phrase that will mislead

**OL-0059 calls the two A-15 replies "the first two external messages this
platform has ever sent."** A **third** left the account at **12:06:43Z** on the
same day — four minutes earlier — and **A-15 covers two.**

**This is not an allegation that an agent sent an unapproved message.** The
owner sends his own mail from this address, and **this log already records an
earlier send on 2026-10-08**, which predates A-15 — so "first ever" can only
mean _first by an agent_. **T-45 already names A-06 as the approval covering
that correspondence.**

**What needs correcting either way is the sentence.** A reader following it will
count two where three went out that minute. **Whether it needs one qualifying
word or is the most serious entry in this register depends on who pressed send,
and an agent must not settle a question about its own platform's sending history
by inference.** T-85 step 1, for the owner.

### Withheld, deliberately

The negative balance figure · the account's last four digits · the debit card's
last four digits · **six notices concerning a minor's accounts, recorded as
personal with no detail at all** · two customers' email addresses, which the
Drive and Gmail listings return and which §5 forbids here.

### Unresolved

- **Which instrument the declined payments hit** — the fix depends on it.
- **Whether the 2026-10-21 Stripe sign-in was the owner's.** Useful either way:
  **a human signed in successfully, so T-36's gap is the connector, not the
  account.**
- **Nothing is scheduled between 2026-10-22 and 2026-10-29.** The calendar was
  reachable and empty. Two priced jobs and an empty week.
- **The drafts folder is unchanged at 15**, five of them to the
  likely-loan-fraud addresses, oldest 64.0 days. **T-42 is accurate and nothing
  has moved.**

---

## OL-0063 — 2026-10-23 · Four hundred and five days without a payment, and then $450 with "tune" in the memo

- **Routine** `/dd84-inbox-intake`, fired by **"DD84 Inbox and Lead Intake
  (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-23T10:20:39Z**. **Twenty-first scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout, per contract item 0** — tip **`155e544`** at start, **`fc6bcbb`**
  after the skeleton commit; `HEAD` equal to origin; **no `src/`, no
  `package.json`**; clean. **54 tracked files, not 28** — third run reporting
  it, T-85 step 3.
- **Window** since OL-0062, **2026-10-22T10:20Z → 2026-10-23T10:20Z**.
- **Counts** **44 threads** (25 non-promotional + 19 promotional, two queries,
  no continuation token on either, so both complete) · **8 actionable** · 36
  no-action · **0 new leads** · **0 drafts** · **2 new tasks**, both Critical.
- **Sources reached** Gmail, **Shopify**. **Not reached** Superhuman Mail,
  Stripe, PayPal, bookipay, Square.
- **Operator** Claude (agent), cqvhy6 session

### The finding

**$450.00 arrived on 2026-10-22T20:46:58Z by Zelle, memo "tune".** `ventures.md`
records the previous payment as **2025-09-12**. **405 days.**

| Established                         | How                                                     |
| ----------------------------------- | ------------------------------------------------------- |
| $450.00, 2026-10-22, memo "tune"    | The bank's own notice                                   |
| **Not a storefront sale**           | Shopify `list-orders`: **0 orders all-time**, live read |
| **Payer is not a Shopify customer** | Name search of the customer list returned empty         |

**Withheld:** payer's name, account digits, confirmation code. **The amount and
memo are recorded** — A-13 accepts DD84's revenue figures; **the balance is not,
A-19 is pending.**

**$450.00 is exactly the Street Tune rung** on the GM, Ford and Dodge/Mopar
tuning services. **Suggestive, not asserted.**

**And it lands one rung above A-21, raised yesterday**, which proposes $349 for
T-37 and $350 for T-64. **A-21 is not withdrawn** — its rungs were argued from
each job's published scope, and this is a different transaction for an unknown
job. **But it is the first market evidence in thirteen months and it points
up.** T-88.

**Nobody here knows which job it paid for.** The payer's name corresponds to
neither live-job correspondent, which **is suggestive and is not
identification** — a legal name and an email handle are different things, and no
payment system is readable to settle it. **If it is a third job it is the second
unrecorded live job this register has found**, after T-64, and **the pattern
would then be the finding**: work reaches DD84 through a channel this register
cannot see.

### Two of this register's own readings were wrong, and both were its own

**1. T-71 conflates two failures.** The row says "overdrawn; two payments
declined". On **2026-10-22T12:45:11Z** the bank declined a card and stated its
reason: **"Declined as your card is off."**

**Yesterday's run raised precisely this as a two-candidate hypothesis and said
the mail did not say which instrument the declines hit. Today the bank said
it.** At least one decline is card state. **The overdraft stands on its own
evidence; the declines are not all evidence of it.** Status unchanged — **the
correction is to the reasoning that was setting the priority.**

**2. "The owner sends his own mail" no longer covers it.** T-85 step 1 concluded
yesterday that a third external send was most plausibly the owner's. Today:
**four substantive follow-ups to four different recipients at 13:40:03Z,
13:40:07Z, 13:40:10Z and 13:40:14Z.** **Eleven seconds.** A batching tool, a
scheduled automation or another agent would all explain it; **"he typed them"
would not.** T-85 step 1 is now a control question, **and the reading that
needed correcting was this register's own, reached one day earlier.**

### Two agencies said the land may not work — T-38, T-78

**Piedmont Water: "As of right now there is no more connection to the water
system in the Colbert area."** **Georgia DPH: "it might be quite difficult to
get everything to fit on the parcel: the shop, parking, and the septic system
(and replacement area)"** — on 0.638 acres.

**GDOT answered two of A-15's three questions**; the third, whether a traffic
study is needed, is **"I am unable to say as of now."**

**The 2026-10-21 note said not to engage a surveyor before those answers. Two
arrived and both point away from the site.** **No status was changed on the
owner's own project** — the finding is recorded, the spending decision is his.

### $39 with the largest blast radius

**Shopify billing failed at 2026-10-22T12:35:23Z — $39.00, "we'll try again".**
**Ten minutes before the card-declined notice.** The Shopify notice does not
name the instrument, so the shared cause is **plausible, not established** — but
if it holds, **the promised retry fails too.**

**The storefront holds the whole approved price ladder**, the digital products
and the payment links. **Yesterday's pricing was read out of it, and A-21
depends on those SKUs being live.** T-89. **Paying a bill or changing a payment
method is Class E; turning a card on is the owner's.**

### Why no draft was written

**Zero drafts, and the reasons are the content.**

- **The $450 deserves an acknowledgement and did not get one.** DD84 does not
  know what it paid for. **A receipt naming the wrong job, or implying work is
  finished, is worse than silence.** One line, after T-88 step 1.
- **The two agency threads were left alone** because something is sending into
  them on an eleven-second cadence, and **drafting into a thread another process
  is actively working risks a collision that lands on a state agency.**

**Six messages and two prices are now queued behind the owner** — A-20 (three),
A-21 (two prices), A-22 (one).

### Fifth run with no new lead

**Forty-four threads, no enquiry.** Money arrived, which is better than a lead,
**but nobody new asked about a car.** The channel producing DD84's customers is
still recorded as `UNKNOWN`, and **now three jobs may have come through it
unseen.**

### Withheld

Payer's name · account digits · confirmation code · card digits · the negative
balance · a credit score · **the window's promotional half was read in full and
contained nothing actionable**, so nothing from it is recorded beyond the count.

---

## OL-0064 — 2026-10-23 · Daily brief: the first real "money moved" section, and a board lag I committed myself

- **Routine** `/dd84-daily-brief`, fired by **"DD84 Daily Command Brief
  (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-23T10:51:43Z**. Class A throughout.
- **Checkout** tip **`2aee2a3`**, `HEAD` equal to origin, **no `src/`, no
  `package.json`**, clean. **54 tracked files, not 28** — T-85 step 3.
- **No skeleton commit, with a reason.** The repair protects a long gathering
  phase and this run has none: **today's intake finished 31 minutes earlier**
  and this brief reads the register, the approvals and that intake. **Declining
  the repair where it does not apply keeps it a judgement rather than a ritual**
  — the same call as 2026-10-20 and 2026-10-21.
- **Operator** Claude (agent), cqvhy6 session

### Yesterday's daily brief fired and was never written

**It fired at 2026-10-22T10:51:35Z and reached this session 23 hours 29 minutes
later**, after the day it covered had ended.

**It was not backfilled, and that is the decision.** A "today's brief" for a
finished day is not a brief, and **writing one now dated 2026-10-22 would put a
document in the record whose findings were gathered on the 23rd.** The
2026-10-22 intake covers that day's substance in full.

**This is a new failure mode for this record.** T-27 and A-10 are about runs
that cannot commit; OL-0050 is about a run erased before it committed. **This
one committed fine and arrived too late to be what it claimed to be.** Recorded
so the next late delivery is recognised rather than backfilled.

### The first real money-moved section

| Direction | Amount      | Status                                  |
| --------- | ----------- | --------------------------------------- |
| **IN**    | **$450.00** | Received 2026-10-22, memo "tune" — T-88 |
| **OUT**   | **$39.00**  | **FAILED**, Shopify billing — T-89      |
| OUT       | withheld    | A card payment reached its issuer. A-19 |

**Every payment system remains unreachable**, so the $450 is known only from the
bank's notification mail and **was reconciled against nothing. A mail notice is
not a ledger**, and this section says so rather than presenting it as booked
revenue.

### The board lag, and this time it was mine

**A-22 had no row on the approvals board.** This brief found it while counting
pending packets: **the summary said seven and the file held eight.**

**It was raised yesterday by a run that had, one screen earlier in its own
commit message, written that landing a packet without its row "would have made
this the twelfth instance by my own hand."** It then did exactly that.

**Recorded in `APPROVALS.md` as the thirteenth count of this failure, and as the
first committed by a session that had named it minutes before.** That is the
strongest available evidence for what the 2026-10-12 note already said:
**another reminder is not the fix.** The fix is generating the board from the
packet headings, and it is still unattempted because it is a tooling change in a
repository with no build. **Saying so for the fourth time is not progress, and
this entry does not pretend otherwise.**

### The state, counted rather than asserted

- **89 tasks · 32 Awaiting Owner · 9 Critical and open, 7 of them the owner's.**
- **49 of 89 open dated rows are past due** — a number this register has
  repeatedly flagged as overstating the problem, because most of those dates are
  **agent-proposed, not owner-approved service levels.**
- **Eight packets pending**, holding **six messages and two prices**.
- **Nothing on the Critical list is waiting on an agent.**

### Not available this run

Stripe, PayPal, bookipay, Square — no reachable connector. **Google Calendar was
not re-read**; the 2026-10-22 position (no events through 2026-10-29) is
**carried forward and labelled as carried**, because no booking notice appeared
in today's window. **The negative balance stays withheld — A-19, and the weekly
cash review fires today at 11:10 UTC into the same wall for the second Friday
running.**

---

## OL-0065 — 2026-10-23 · First surviving cash review: $450 in after 405 days, and a pattern the daily window had been hiding

- **Routine** `/dd84-cash-review`, fired by **"DD84 Weekly Cash and Revenue
  Review (repo-attached)"** (`trig_01Y9G9LUVQR752W4uop2jZfL`) at
  **2026-10-23T11:12:49Z**, scheduled 11:10:00Z. Class A. **No money moved.**
- **Checkout** tip **`a13d55a`** at start, **`2667ade`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **56
  tracked files, not 28** — T-85 step 3, fourth run reporting it.
- **Skeleton committed first — seventh application, against the routine that
  produced the repair.** **OL-0050 is this routine**: on 2026-10-16 it fired,
  ran about twenty minutes, completed two Shopify reads and **left no record at
  all** when the worker restarted. **This is the first weekly cash review since
  then to reach a session that could commit.**
- **Sources reached** Shopify. **Not reached** Stripe, PayPal, bookipay, Square,
  Chime, Melio, Capital on Tap, Capital One, Wells Fargo. **Every non-Shopify
  figure in the review comes from notification mail and is labelled as such.**
- **Operator** Claude (agent), cqvhy6 session

### A sampled sweep was caught and replaced

The first money-word sweep of the week **matched about 201 threads and
returned 40.** **A sample presented as a census is exactly the defect this
register exists to catch**, and a cash review built on it would have been wrong
without looking wrong.

**Replaced with a precise query against eleven named financial senders: 38
matched, 38 returned.** Every figure in the review rests on the second query.
**The first is reported anyway**, because the failure mode — a broad query that
silently truncates — is the reusable lesson.

### Revenue

**$450.00, 2026-10-22T20:46:58Z, memo "tune". The first payment in 405 days.**

**Not a storefront sale** (Shopify: 0 orders all-time, re-verified live; no
matching customer). **Not reconciled against anything** — no payment system is
reachable, so it rests on one bank notice. **A notification is not a ledger**
and the review says so in the row itself.

**`ventures.md` updated** where this run actually verified something: **last
payment 2025-09-12 → 2026-10-22**, Shopify orders re-verified at **0**,
**all-time payments $3,957.86 marked derived** from two sources that have never
been reconciled against each other. **The invoice count stays at 10 — a Zelle
transfer is not an invoice**, and this run declined to promote it to one.
**Average invoice, largest invoice and concentration were not re-checked and are
marked not current**, 81 days past the 30-day rule.

### The sentence this routine took nine days to be able to write

**The largest overdue receivable is $699, and it has never been overdue.**

T-37 and T-64 were delivered and never invoiced, so **nothing aged**. It could
not appear in a cash review, could not be chased, and **did not exist as a
number until 2026-10-22**. **It has been invisible rather than late**, and
"invisible" is the word nine days of "held for payment confirmation" was
reaching for.

### The weekly window saw what the daily window could not

**This morning's intake reported the card being toggled "four times in under
twelve hours" on 2026-10-22.** True for that day. **Not the pattern.**

The week shows **at least eleven off/on notices across 2026-10-16, 2026-10-17
and 2026-10-22**, and **six distinct payment failures across five providers** —
Stripe, PayPal ("your bank declined your electronic funds transfer"), Shopify
($39.00), a subscription twice, and a card decline the bank itself attributed to
card state — **plus two successes**, one of them the $450.

**The intake's 24-hour window could not see it.** **This is OL-0055's defect
again**: a windowed sweep reports its window, and a reader takes the window for
the phenomenon. **The difference today is that the longer window existed and
caught it** — the first time the weekly review has corrected the daily one, and
**the clearest argument yet for why both cadences exist.**

**T-71's "two payments declined" is now third-order wrong**: more than two,
across more than one instrument, over more than one day. **Not asserted:** that
the toggling is deliberate cash management. It is consistent with someone
controlling which charges land; **intent is not read off a notification log.**

### The cash position, stated as a shape

**The balance is withheld — A-19, second consecutive Friday review.** What is
sayable without it: **the account was reported at or below zero on 2026-10-17,
2026-10-19 and 2026-10-21**, three separate notices, and **$450.00 arrived on
the 22nd, the day after the third.**

**So the first job of the first money in 405 days was to cover a hole rather
than to fund operations.** That is the position. **Unknown is not zero, and
withheld is not unknown** — the bank and the owner both know the figure; it is
this document that may not carry it.

### Margin: none offered, for any job

Margin needs a price and a cost. **The prices arrived yesterday and are still
pending as A-21. The costs do not exist anywhere readable** — no time record, no
tuning-credit balance, no parts line. **T-36 and T-33 are the prerequisites and
both are open.** **The $450 job cannot be margined either, because nobody knows
which job it is.** **No figure was estimated. A number without a source is a
defect.**

### New work

**T-90** — a shop-building quote of DD84's own, referenced 2026-10-20T15:52Z
with "final Colbert planning dimensions", **sits outside the register and its
amount was not read.** It is committed intent on a site that **two agencies
questioned this week**. **A building quote for a site that may not be buildable
is the cheapest thing to check before the expensive decisions.**

### Standing decisions honoured

The ten invoices were **not** re-opened as a line of enquiry (2026-08-07).
Shopify is treated as **the back half of the funnel only** (2026-08-13). **The
Georgia Opportunity Ledger appears in no figure here** (2026-09-16). **Figures
older than 30 days are marked stale rather than quoted** (standing rule), and
three of them are.

---

## OL-0066 — 2026-10-26 · $1,700 in four days, a storefront that finally sold something, and a figure that went stale in seventeen minutes

- **Routine** `/dd84-inbox-intake`, fired by **"DD84 Inbox and Lead Intake
  (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-26T10:20:31Z**. **Twenty-second scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout** tip **`54b36ff`** at start, **`b2cb87c`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **57
  tracked files, not 28** — fifth run reporting it, T-85 step 3.
- **Window** since OL-0063, **2026-10-23T10:20Z → 2026-10-26T10:20Z — 72
  hours.** No routine fires at the weekend, so **this was the first look at
  three days of mail.**
- **Counts** **67 threads** (50 + 17, continuation exhausted) · **11
  actionable** · 56 no-action · **1 new lead** · **1 draft** · **6 new tasks** ·
  1 packet (**A-23**).
- **Sources reached** Gmail, **Shopify**. **Not reached** Superhuman Mail,
  Stripe, PayPal, bookipay, Square.
- **A worker restart hit this run mid-gather.** The skeleton was already
  committed, so **the run resumed rather than died. Fourth restart in five days;
  third run saved.**
- **Operator** Claude (agent), cqvhy6 session

### The money

| When                 | Amount        | Route                                 | Attributed             |
| -------------------- | ------------- | ------------------------------------- | ---------------------- |
| 2026-10-22T20:46:58Z | $450.00       | Zelle, "tune"                         | **No — T-88**          |
| 2026-10-23T11:56:43Z | **$550.00**   | **Shopify #1001**                     | **Yes**                |
| 2026-10-24T22:31:55Z | $700.00       | Zelle, "mecanic tune", from a company | **No — T-92**          |
| **Total**            | **$1,700.00** |                                       | **$1,150 unexplained** |

**48% of everything this business had ever collected, in four days**, after 405
days of nothing. **`ventures.md`: lifetime collections now $5,207.86, derived
and labelled derived from three sources that have never been reconciled against
each other.** **The invoice count stays at 10** — two bank transfers and a
storefront order, and **none of them is an invoice.**

**The register now holds more unexplained revenue than explained**, which is a
sentence worth sitting with.

### The storefront sold something, and a registry figure went stale in seventeen minutes

**Order #1001: $550.00, PAID, FULFILLED, two line items**, placed
2026-10-23T11:56:43Z. Verified live: `totalCount` is **1**. **The store has
never had another order.**

**The 2026-10-23 cash review re-verified "Shopify orders, all time: 0" between
11:13 and 11:40Z and stamped it 2026-10-23. The order landed at 11:56:43Z.**
**True when read. False about seventeen minutes later.**

**This is not a bad read, and it is not a vindication of the 30-day rule
either.** The rule worked: it caught an 81-day-old figure and replaced it with a
fresh one. **The fresh one still went stale inside the hour, because the claim
was the wrong shape.** "0 orders, all time" was carrying the weight of a
structural fact — _"100% of revenue came from invoiced service work, 0% from the
storefront"_ — **when it was a running total that one customer could change.**

**Corrected in `ventures.md`, with the seventeen minutes stated**, so a later
reader sees a claim that outgrew its evidence rather than a careless
verification.

**What survives:** **no digital product has ever sold.** The storefront turned
out to be **a viable order channel for services** — order #1001 is a PCM unlock
_service_ bought through checkout. **That is a better finding than the one it
replaced**, and it only exists because the figure was wrong.

### A prediction confirmed, which is rarer here than a correction

**T-89, written 2026-10-23:** _"a retry against a stopped card is not a second
chance."_

- **2026-10-24T12:11:22Z** — Shopify billing failed again, **$39.00**.
- **2026-10-24T12:20:23Z** — the bank declined the card again, **same stated
  reason: "Declined as your card is off."** Nine minutes apart.

**The store now holds $550 of settled revenue and two failed bills.** The
toggling continued through the weekend — off 2026-10-23T12:41, on 14:35 — **at
least thirteen off/on notices since 2026-10-16.**

### A third signal, and the one that actually worries me

**A message went to the store's first-ever customer on 2026-10-24T00:13:46Z,
sent from the Shopify store, introducing the sender by a first name "with Down
Dirty 84 LLC"** and asking them to confirm the service had been delivered.

**That name appears nowhere in this register, nowhere in `ventures.md`, and is
not the owner's.** Withheld here.

**It is not an allegation.** A nickname, a family member, a helper or a
contractor all explain it, and **a business asking its own customer to confirm
delivery is good practice.** **What it is, is the third signal in four days that
communication leaves this business from places this record cannot see** — after
the third external send and the four-messages-in-eleven-seconds burst.

**Individually unremarkable. Three in four days is a pattern**, and it matters
because **every draft, every Class C gate and every approval packet in this
system assumes the register knows who may speak for DD84.** **T-93.**

**The practical cost was paid this run:** no draft was written to the order
#1001 customer, because a second message from a different quarter about the same
order is worse than none. **So an unidentified sender is currently the only
party in contact with the store's first customer.**

### One lead, and it is the useful kind

**2026-10-25T17:57:58Z, one line: whether this is the business. Still unread.**
**The first new enquiry in five runs.**

Every §8.1 field is **missing** and none was invented. **It is worth more than
its length** because `ventures.md` records the customer-producing channel as
`UNKNOWN`, **three paying jobs this month came through it unseen, and this is
the first enquirer who can simply be asked.** **The draft asks. A-23**, and
**A-23's row went onto the approvals board in the same write as its packet** —
the first time since the 2026-10-12 note that those two have landed together.

### Withheld

Two payers' identities, one of them a company · a customer's name and address ·
the name signing store mail · card digits ×2 · account digits · two confirmation
codes · **about eight notices concerning minors' devices and app installs,
recorded as personal with no detail at all** · a law firm and an academic
contacted about Ledger licensing (A-17 pending) · the business's street address.

### Unresolved

- **What the $450 and the $700 bought.** Two sentences from the owner.
- **Whether order #1001's service was genuinely delivered.** **FULFILLED is a
  flag, not evidence**, and the only confirmation request came from an
  unidentified sender.
- **The second line item on order #1001** — truncated in the notification, **not
  reconstructed, not guessed.**
- **The HP Tuners purchase amount** — T-94, and **margin still cannot be
  computed for any job.**
- **Which site property has stopped indexing** — T-96.

---

## OL-0067 — 2026-10-26 · Daily brief: the business got better this week and the record of it got worse

- **Routine** `/dd84-daily-brief`, fired by **"DD84 Daily Command Brief
  (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-26T10:51:43Z**. Class A throughout.
- **Checkout** tip **`863b233`**, `HEAD` equal to origin, **no `src/`, no
  `package.json`**, clean. **58 tracked files, not 28** — sixth run reporting
  it, T-85 step 3.
- **No skeleton commit, with the reason stated in the brief**: today's intake
  finished 31 minutes earlier and this run has no gathering phase to protect.
  **Same judgement as 2026-10-20, 10-21 and 10-23.**
- **Operator** Claude (agent), cqvhy6 session

### Counted, not asserted

**96 tasks · 35 Awaiting Owner · 51 open and past due · 11 Critical and open —
the most there have ever been.** **Nine of the eleven are Awaiting Owner, two
are Blocked, and not one is waiting on an agent.** **Nine packets pending**,
holding **seven messages and two prices**.

**Money: $1,700.00 in across four days** — $450.00 (Zelle), **$550.00 (Shopify
order #1001, PAID and FULFILLED)**, $700.00 (Zelle, from a company). **$39.00
failed twice.** **$1,150.00 of the $1,700.00 cannot be attributed to a job.**

### The calendar is the finding

**Empty through 2026-11-02, read live rather than carried forward.**

**$1,700 was collected and a PCM unlock was marked fulfilled, and not one hour
of it appears in the diary.** The work is being done and scheduled nowhere, so
**this record cannot say when any of it happened, how long it took, or whether
it is finished.** **That is the same gap that makes margin uncomputable** — it
is not two problems, it is one problem reported from two directions.

### Seven people waiting, none of them on work

The order #1001 customer (**2.95d**, and the only party in contact with them is
unidentified) · the $700 payer (**1.52d**, unacknowledged) · the $450 payer
(**3.56d**, unacknowledged) · the Challenger customer (**12.80d**, his datalog
still unread) · the C10 customer (**13.59d**, waiting correctly) · the new
enquirer (**0.70d**, unread) · the supercharger supplier (**20.99d**).

**Every one of them has a drafted reply, a proposed price, or a one-sentence
question sitting behind an approval.** **None is waiting for work to be done**,
which is a different and more fixable problem than being behind.

### What this brief declined to do

- **No balance.** A-19, and this is the third routine in a row to withhold it.
- **No margin**, for any job, including the three paid this week. **The costs
  are not readable and the time is not recorded.**
- **No estimate for the HP Tuners outflow** — the amount was not in the
  notification. **T-94.**
- **No claim that order #1001 is complete.** It is marked FULFILLED in Shopify.
  **A flag is not evidence**, and the only confirmation request went out from a
  sender this register cannot identify.
- **No status changed on the owner's own Colbert project.** Two agencies
  questioned the site and a building quote sits unread (**T-90**); the spending
  decision is his.

### One sentence worth keeping

**The business got better this week and the record of it got worse.** Three
payments, a first storefront sale and a fulfilled order, against an empty
calendar, no computable margin, $39 failing twice into a stopped card, and an
unidentified person talking to the newest customer. **Nine of the eleven
Critical rows close with a sentence rather than a day's work**, and that is the
whole of what is being asked.

---

## OL-0068 — 2026-10-26 · Opportunity scan: a control test corrected the egress diagnosis, and a tax credit needs two employees

- **Routine** `/dd84-opportunity-scan`, fired by **"DD84 Weekly Georgia
  Opportunity Scan (repo-attached)"** (`trig_01UPEmQbHN6vzC4PKse2zf23`) at
  **2026-10-26T11:26:49Z**. Class A — **nobody contacted, nothing applied for,
  nothing committed.**
- **Checkout** tip **`1bdf284`** at start, **`81a9bf8`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **59
  tracked files, not 28** — seventh run reporting it, T-85 step 3.
- **Skeleton committed first — ninth application**, against **the routine with
  the longest gathering phase of the six.**
- **Method named**: financial value 25 · accessibility 20 · time sensitivity 15
  · source reliability 15 · capital requirement 10 · complexity 10 · risk 5.
  **The command file promises "bands that follow from the total" and never
  states them. No threshold was invented — third scan to report this.**
- **Counts** 2 scored entries · **0 with an open verified deadline** · 8 named
  and not scored · **3 new tasks** (T-97, T-98, T-99).
- **Operator** Claude (agent), cqvhy6 session

### The control test, and a correction to this log's own diagnosis

**OL-0049 and OL-0055 described the egress problem as "one block, two error
strings, decided by which tool asks."** That framing implied a **host-level
block on Georgia state sites.**

**This run ran the control that earlier runs did not.**

| Instrument   | Target                                                | Result                                    |
| ------------ | ----------------------------------------------------- | ----------------------------------------- |
| `curl`       | `doas.ga.gov`                                         | **`CONNECT tunnel failed, response 403`** |
| WebFetch     | `doas.ga.gov` · `www.rd.usda.gov` · `www.georgia.org` | `getaddrinfo ENOTFOUND`                   |
| **WebFetch** | **`example.com`**                                     | **`getaddrinfo ENOTFOUND`**               |
| WebSearch    | four queries                                          | **worked every time**                     |

**`example.com` fails, so the earlier framing was wrong.** There are **two
separate failures, not two views of one**:

- **`curl` resolves and reaches the proxy, which refuses CONNECT with 403** — a
  policy block.
- **WebFetch never reaches the proxy, because it has no name resolution at
  all.** **No host allow-listing would fix it.**

**The repair the earlier entries prescribed still worked** — run the two-command
proxy check — **but the diagnosis it produced was too narrow**, and a narrow
diagnosis sends the next session looking for a host to allow-list. **This is the
third time an instrument check has corrected something this record believed, and
the first time the thing corrected was a diagnosis rather than a figure.**

**What it costs the routine, stated in the scan itself.** The command file
requires _"validate the source and the deadline before scoring"_ and _"cite the
source URL for each."_ **The URLs are cited and not one was opened.** So
**"source reliability", 15 of the 100 points, cannot score top for anything, by
construction** — a ceiling this container imposes, not a judgement about
Georgia's websites. **T-98**, and **every future scan should carry the ceiling
in its own text.**

### What the scan found

**Ranked first, 55/100 — Elberton Rural Zone tax credits.** Designated
**2026-01-01 to 2030-12-31**. Three stackable credits: **$2,000/yr per new FTE**
up to five years (**DOR form caps $40,000/tax year**); **25% of purchase price**
in the zone, capped **$125,000**; **30% of rehabilitation costs**, capped
**$150,000**. **All three require at least two net new FTE**, the business
located in the investment property, maintained every year claimed.

**`ventures.md` records no employees, so the binding constraint is payroll, not
geography** — and that is why **T-97 is one word from the owner**: if he would
never hire two people, the entry scores zero and should never be looked at
again.

**Why it still ranked first despite 55** — **it changes an arithmetic already in
front of him.** **T-78** is buy-vs-build on the Colbert parcel, and 2026-10-22
brought **no public water connection in the area** and **a 0.638-acre lot that
may not fit shop, parking and septic.** **A designated zone 30 miles away
returns a quarter of a purchase price.** Not a new project — **a second
candidate for a decision that currently has one failing candidate.**

**Ranked second, 40/100 — the statewide fleet-maintenance vendor network**, the
only route found where DD84's capability reaches government spend without being
a prime contractor. **Raised as T-99 and opened as Blocked**, because the
Procurement Registry cannot be reached from here. **Marking it Blocked now is
better than letting it sit Planned and silently never move.**

### What was deliberately not scored

**Eight items named, none ranked.** Most 2026 Georgia cycles have genuinely
closed — the Helene block grant (ran 03-16 to 05-11), Go Global Georgia (09-01),
USDA Rural Business Development (June), a $4,000 building-improvement grant
(10-15). Invest Atlanta is **Atlanta-only and DD84 is in Jefferson**. **Rural
Zone _designation_ is applied for by communities, not businesses.**

**And one that is probably live today was still not scored:** an aggregator
lists a Tennessee/Georgia small-business contest with a **2026-10-26 deadline —
today.** **Unfetchable, eligibility unconfirmed.** **Scoring a listing on its
deadline day from a source that cannot be opened is precisely what the routine
forbids**, so it is named for the owner's five minutes and given no number. **An
unverified opportunity with a number beside it is worse than one without.**

### Honest note on the leak scan

**This scan's own §5 check will flag URLs, and that is expected here.** The
routine requires a cited source URL for every entry, and **public government
document links are the evidence, not a leak.** Earlier runs withheld
solicitation and redemption URLs from promotional mail; **that rule is about
third-party tracking links, not about citations**, and the distinction is
recorded so a later run does not strip the citations to satisfy a regex.

### Unresolved

- **Whether the owner would ever employ two people** — T-97. **One word decides
  the best thing this scan found.**
- **Whether this routine keeps its weekly slot** given the ceiling — T-98. The
  honest summary is **degraded, not useless**: it still produced two ranked
  entries and a correction.
- **The Elberton-to-Colbert distance** — asserted as roughly 30 miles **from
  general knowledge and labelled as the agent's assumption, not measured.**
- **Local Jefferson or Madison County incentives** — not searched this run.

---

## OL-0069 — 2026-10-27 · A customer answered the question we put to the owner, and the task counter silently undercounted itself

- **Routine** `/dd84-inbox-intake`, fired by **"DD84 Inbox and Lead Intake
  (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-27T10:20:17Z**. **Twenty-third scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout** tip **`3106cca`** at start, **`f2a2683`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **60
  tracked files, not 28** — eighth run reporting it, T-85 step 3.
- **Window** since OL-0066, **2026-10-26T10:20Z → 2026-10-27T10:20Z**.
- **Counts** **40 threads returned against an estimate of 43** · 8 actionable ·
  32 no-action · **0 new leads** · **0 drafts** · **3 new tasks** (T-100 to
  T-102) · **T-91 moved to In Verification.**
- **Sources reached** Gmail. **Not reached** Superhuman Mail, Stripe, PayPal,
  bookipay, Square.
- **Operator** Claude (agent), cqvhy6 session

### The customer answered T-91 himself

**Yesterday T-91 told the owner: "It is marked FULFILLED in Shopify … A
fulfilment flag is not evidence of delivered work."** It asked him to confirm
delivery. **The customer confirmed it first.**

**2026-10-26T10:55:07Z** — DD84 sent a corrected calibration file: _"Please try
unloading new file to see if that resolves the issues."_
**2026-10-26T20:33:19Z** — the customer replied **_"for sure feels better / i
could not push it too much due to traffic"_**, with a new datalog attached.

**Delivery confirmed. Completion not** — he could not load the car properly.
**The status moved to In Verification rather than Done, because the distinction
is the whole content of the finding.**

**And his confirming datalog is unread, 13.8 hours.** **T-64's log has sat
unread 13.8 days.** **Two customers, the same pattern — they do what is asked
and the reply waits.** Reporting it at 13.8 hours instead of 13.8 days is the
only version of this observation that is worth anything.

**Filenames withheld** — §5 forbids tune files here, and a calibration filename
carries both the vehicle and the work done.

### The task counter undercounted itself, and the rule caught it

**The register crossed into three-digit task IDs today.** The ID column was
sized for two digits, so **`T-100` filled it exactly and the row was written
`| T-100|` — no pad space.**

**Valid markdown. Parsed correctly by every reader. Invisible to the recount.**
The pattern every prior run has used, `^\| T-\d\d \|`, requires the trailing
space, so **the strict count said 99 where the tolerant count said 102.**

**It was caught only because the standing rule is to recount mechanically and
compare, never to increment by hand.** The disagreement between two counts is
the entire reason anyone looked. **Had the counts line been written from
arithmetic — 99 + 3 — it would have been right by luck and the broken pattern
would have shipped**, undercounting by one more every time a three-digit task
was added.

**Prettier re-padded the rows. The corrected pattern `^\| T-\d+\s*\|` is now
recorded in the register itself, beside the counts line**, which is where the
next session will reach for it. **The fix that matters is not the padding — it
is that the next run does not inherit the regex.**

### The fourth instrument defect, and the first to break fields rather than completeness

**The Gmail thread list returned no `date`, no `labelIds` and no `snippet`** for
most entries — **in both views**, including `THREAD_VIEW_METADATA_ONLY`, which
the tool documents as returning `date` and `label_ids`. **`get_thread` returned
both correctly for all four threads fetched. Yesterday's identical query
returned dates for every entry.**

**A sweep that returns every thread but no timestamps looks healthy.** The count
was right; only the fields were gone. **A routine reporting "unread for N hours"
would have had nothing to compute from and no error to notice.**

- **OL-0049** — silent truncation: results missing.
- **OL-0055** — a window that could not see a quiet thread: scope too narrow.
- **OL-0058** — an age carried forward instead of recomputed: stale arithmetic.
- **Today** — **everything returned except the part that makes it datable.**

**The repair applied: fetch what matters individually, and label the rest "not
re-verified this run."** **Four threads fetched; 36 not aged, and said so.**
**T-102.**

### Three findings and one non-finding

**Shopify billing has failed three times, 48 hours apart** — 10-22, 10-24,
**2026-10-26T12:38:57Z**, $39.00 each. **No decline notice was fetched for the
third, so whether it hit the stopped card is not asserted.** **The store holding
DD84's only settled storefront revenue cannot collect $39 from its owner.**

**TikTok Shop rejected the application — for a proof-of-address document.**
**T-100.** Not a judgement on the business; a missing bank statement, lease or
utility bill. **Those are exactly the materials §5 keeps out of this
repository**, so it is the owner's upload, not an agent's.

**A third DD84 repository exists.** `downdirty84-ai-tuning`, a failed PR CI run
about log comparisons over RPM and pressure bands. **`CLAUDE.md` names two
repositories and this is a third.** **Nothing was opened** — this session's
GitHub scope is `tune-advisor-` only, and **the register has twice been wrong
about DD84 infrastructure by inferring from notifications** (T-33's thirteen-day
mis-framing, T-87's Ledger deploys). **A third inference would be the pattern,
not the exception.** **T-101.**

**And the non-finding that matters:** **two website contact-form submissions
arrived and both are the owner's own tests**, labelled `DD84-FLOW-20261026-B`
and `-C` and explicitly saying _"This is not a customer inquiry … No reply or
service work is needed."_ **Counting them as leads would have been inventing
leads.** They are counted as no-action — **but the form itself is now verified
working end to end**, which **rules out a cause T-66 never actually
established**: the Lexus enquiry sat 23 days because nobody read the form, and
**whether the form was broken was never tested until the owner tested it.**

### Unresolved

- **Which job the $450 and the $700 paid for** — T-88, T-92, unchanged.
- **The second line item on order #1001**, and $550 reconciled to rungs — now
  **Agent work**, T-91 step 2.
- **Whether the list-payload defect is transient** — T-102 step 1, next run.
- **36 threads not aged this run.** Not estimated.

---

## OL-0070 — 2026-10-27 · Daily brief: a quiet money day, and a correction to this morning's own arithmetic

- **Routine** `/dd84-daily-brief`, fired by **"DD84 Daily Command Brief
  (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-27T10:51:32Z**. Class A throughout.
- **Checkout** tip **`f664b69`**, `HEAD` equal to origin, **no `src/`, no
  `package.json`**, clean. **61 tracked files, not 28** — ninth run reporting
  it, T-85 step 3.
- **No skeleton commit** — today's intake finished 31 minutes earlier and this
  run had no gathering phase to protect. Fifth time this judgement has been made
  and recorded rather than assumed.
- **Operator** Claude (agent), cqvhy6 session

### The correction, and it is this morning's own

**The register's counts line, written by today's intake, said "Ten rows are
Critical and open — one fewer than yesterday." There are eleven.**

**T-91 moved from Awaiting Owner to In Verification when the customer confirmed
delivery, and In Verification is not closed.** This register's own taxonomy says
so, and the recount excludes only _Done_, _No Action_ and _Accepted Risk_. **The
Critical-and-open count did not drop. Its composition changed.**

**The real improvement is better than the one claimed:** **one Critical row
stopped waiting on the owner and started waiting on an agent.** That is a
smaller number in front of the person who is the bottleneck, which is what
anyone reading the line actually wants to know — **and it was available without
overstating the count.**

**Why it happened is worth more than the fix.** The intake wrote "one fewer"
from the _reasoning_ that a row had moved, not from the recount it had just run.
**The recount was correct and was not consulted for that sentence.** **This is
the same failure as OL-0058's carried-forward age and this morning's undercount
regex: the arithmetic was available and the prose was written from
expectation.** Corrected in the register with the reasoning attached.

### A quiet money day, said plainly

**Nothing came in. The last payment was 60.3 hours ago.** The week's **$1,700
stands** — $450 Zelle, **$550 Shopify order #1001**, $700 Zelle.

**The only money event in the window was the third failed $39 Shopify bill**,
2026-10-26T12:38:57Z — **10-22, 10-24, 10-26, every 48 hours.** No decline
notice was fetched for the third, **so whether it hit the stopped card is not
asserted.**

**After a week that took 48% of the business's lifetime collections in four
days, today was ordinary. That is a real result and the brief says so** rather
than inflating it.

### The pattern that is now unmistakable

**Two customers have sent datalogs that are sitting unread — one at 14.3 hours,
one at 13.8 days.**

**Customers do exactly what DD84 asks, and the reply waits.** The order #1001
customer has already said the car _"feels better"_; the Challenger customer's
log has sat since 2026-10-13. **Neither can be opened from here — no session has
an attachment-download tool** — so both are the owner's.

**The 14.3-hour one is not a complaint. It is the 13.8-day one at an age where
it still costs nothing to fix**, and that is the only reason it is first in the
brief.

### The calendar, fourth consecutive empty check

**Empty through 2026-11-03**, read live. Across a week with **$1,700 collected,
a PCM unlock delivered and a customer confirming improvement**, **not one hour
appears in the diary.** **Still the reason no job can be margined**, and still
one problem rather than two.

### What this brief declined to do

- **No balance** — A-19, fourth routine running.
- **No margin** for any job.
- **No claim about which instrument the third Shopify failure hit** — not
  fetched, not inferred.
- **No status moved on the owner's own Colbert project**, and **no distance
  measured for the Elberton comparison** — T-97 still carries it as the agent's
  labelled assumption.
- **Nothing opened in the third repository** — T-101.

### Unresolved

- **$1,150 of the week's $1,700 remains unattributable** — T-88 at 5.5 days,
  T-92 at 2.51 days.
- **A-21 and A-20 are five and six days unanswered**, and **the brief asks for a
  deliberate answer rather than more waiting**: either the two priced jobs still
  matter, or the week's evidence says revenue arrives by other routes and the
  packets should be closed.
- **Eleven Critical rows, the same eleven**, with one having changed hands.

---

## OL-0071 — 2026-10-28 · The front door is on a backup card, and the card toggling turns out to be a schedule

- **Routine** `/dd84-inbox-intake`, fired by **"DD84 Inbox and Lead Intake
  (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-28T10:20:37Z**. **Twenty-fourth scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout** tip **`eff5161`** at start, **`f3c9c69`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **62
  tracked files, not 28** — tenth run reporting it, T-85 step 3.
- **Window** since OL-0069, **2026-10-27T10:20Z → 2026-10-28T10:20Z**.
- **Counts** **28 threads of an estimated 28** · 5 actionable · 23 no-action ·
  **0 new leads** (seventh consecutive run) · **0 drafts** · **2 new tasks** ·
  **1 task closed.**
- **Sources reached** Gmail. **Not reached** Superhuman Mail, Stripe, PayPal,
  bookipay, Square.
- **Operator** Claude (agent), cqvhy6 session

### The front door renewed on a backup card

**2026-10-28T09:52:22Z** — a Google Play receipt: **"Backup payment method used
on Oct 28, 2026 for Manus AI"**, with _"We weren't able to use the [primary
card] associated with your"_ subscription.

**The standing decision of 2026-08-13 is that `dd84tuning.com` is a Manus site
and is the front door**, Shopify being a checkout behind it. **So this is not a
software receipt — it is the subscription DD84's enquiries arrive through.** **A
backup absorbed this cycle. If the backup fails next cycle, the front door
lapses.** **The amount is not in the receipt and is not estimated.** T-103.

**This is the fifth instrument to fail or be locked in two weeks:** the business
debit card (declined twice, bank's own reason "card is off"), a second debit
card, a PayPal-branded card (locked 10-26), a PayPal electronic transfer
(declined by the bank 10-20), and this one. **T-71 still reads "two payments
declined." It has been wrong in the same direction for a week.**

### Four timestamps that reframe two weeks of reporting

| When                 | Card state                 |
| -------------------- | -------------------------- |
| 2026-10-27T22:53:33Z | **on**                     |
| 2026-10-27T22:54:33Z | **off** — 60 seconds later |
| 2026-10-27T23:53:46Z | **on**                     |
| 2026-10-27T23:54:47Z | **off** — 61 seconds later |

**Two one-minute windows, exactly an hour apart, 13 seconds of drift. A person
does not do that.**

**What is established: the toggling is automated or scripted.** **What is not,
and is not asserted: why.** A 60-second window in which a card works is
consistent with letting one charge through while blocking everything else —
**and equally consistent with a tool misbehaving.** **Nothing in the mail says
what the window was for, and intent is not read off a notification log.**

**The correction.** **OL-0065 wrote "consistent with someone controlling which
charges land."** The hedge on intent was right; **the assumption of a human
agent was not**, and it stood for two weeks across three briefs.

**Why it may be one cause behind five failures.** **If a schedule governs when
the card works, then every payment attempted outside those windows failed for a
mechanical reason** — **three Shopify bills at 48-hour intervals**, both card
declines the bank attributed to card state, **and possibly the Manus renewal.**
**That is testable, which is the difference between this and the last two weeks
of reporting it as erratic.** **T-104**, and **step 1 is one sentence from the
owner: did he set this up?** **If not, it is a security question and outranks
everything else here.**

### T-102 closed to Accepted Risk, by its own test

**T-102's step 1 was to re-test whether the Gmail thread list returns `date` and
`labelIds`.** **It came back negative a second time** — all 28 entries, on
`THREAD_VIEW_METADATA_ONLY`, which the tool documents as returning both.
`get_thread` returned both correctly for all five threads fetched.

**So the defect is not transient and there is nothing for an agent to fix.**
**Accepted Risk is the honest status**: the constraint is real, understood, and
not going away. **The intake's ageing now comes from `get_thread`, and the
routine costs more per run** — **five individual fetches today to age five
threads, where one list call used to do it.**

**A task that was opened to run a test, ran the test, got a negative answer, and
closed itself with the constraint written down.** That is what the status was
for.

### Seven days without a new lead, and seven without a new draft

**Zero new drafts, and it is the queue being full rather than idleness.** A-20
(three messages), A-22 (one), A-23 (one) **cover every person on the waiting
list who can be written to.** The two who cannot are **the $450 and $700 payers,
because nobody knows what either payment bought** — unchanged since 2026-10-23
and still two sentences from the owner.

**Seventh consecutive run with no new enquiry.** The channel producing DD84's
customers is still recorded as `UNKNOWN`, **and A-23 — the one message that
would ask a real enquirer directly — has been waiting 2.68 days.**

### Withheld

A primary card's digits · a second card's digits · a cold-outreach sender's
address (A-17 pending) · **one notice concerning a minor, recorded as personal
with no detail** · the Manus subscription amount, **because it was not in the
receipt rather than because it is sensitive.**

### Unresolved

- **What the 60-second card windows are for** — T-104. **Not knowable from
  mail.**
- **What the front door costs per cycle** — T-103, not in the receipt.
- **Whether the Shopify bill failed a fourth time** — **no billing notice in
  this window, and absence of a notice is not evidence the charge succeeded.**
  The three known failures were 48 hours apart and the next falls due today.
- **Read state for 23 of 28 threads** — the list payload omitted it; **five were
  fetched, the rest were not aged and are not estimated.**

---

## OL-0072 — 2026-10-28 · Daily brief: the queue is not neglect, it is a channel the owner is not using

- **Routine** `/dd84-daily-brief`, fired by **"DD84 Daily Command Brief
  (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-28T10:52:09Z**, scheduled 10:50:00Z. Class A throughout.
- **Checkout** tip **`3d32bbf`**, `HEAD` equal to origin, **no `src/`, no
  `package.json`**, clean. **63 tracked files, not 28** — eleventh run reporting
  it, T-85 step 3.
- **No skeleton commit** — the intake finished 31 minutes earlier and this run
  had no gathering phase to protect. Sixth time recorded.
- **Operator** Claude (agent), cqvhy6 session

### The observation this brief exists to make once

**Forty rows await the owner and the queue has grown every day for a week. The
reason is not that nothing is happening.**

**What the owner actually did in seven days, all of it from this record's own
observations:** approved A-15 and two replies went out (10-21) · four agency
follow-ups on the Colbert site (10-22) · changed Shopify settings twice,
verified identity, **took order #1001**, and contacted two legal advisers
(10-23) · **bought HP Tuners credits**, the store messaged the #1001 customer,
**$700 arrived** (10-24) · **tested the website contact form twice end to end**,
**sent the corrected tune file**, **submitted a TikTok Shop application**
(10-26) · the Manus subscription renewed and **the front door stayed up**
(10-28).

**That is a working week.** **Meanwhile Awaiting Owner went from 27 to 40.**

**So the finding is about the channel, not the person.** **The register asks for
decisions through a queue he is not reading, while he does the work by hand in
his inbox** — and the items losing that race are the ones that would cost **one
sentence**: what the $450 bought, what the $700 bought, **did he set up the card
schedule.**

**This is said once and will not be repeated daily.** Restating it every morning
would turn a finding into nagging, and **the register already has 56 past-due
rows to demonstrate the point without help.**

**The concrete consequence recorded:** **A-23 is the cheapest packet in the
register** — one reply, one enquirer, **no bracket, no price, nothing to fill
in** — and it has waited **2.70 days** behind packets that need real thought.
**If one thing moves, that is the one that costs least.**

### Money

**Nothing in for 84.3 hours.** **One outflow: the Manus subscription renewed on
a backup card at 09:52:22Z**, primary refused — **amount not in the receipt and
not estimated.** T-103.

**No Shopify billing notice in this window.** The three known failures were 48
hours apart and **the next falls due today.** **Absence of a notice is not
evidence the charge succeeded**, and the brief says so rather than reporting a
silence as a success.

### Counted

**104 rows · 40 Awaiting Owner · 12 Critical and open** (up one: **T-103**) ·
**56 open and past due.** **Ten of the twelve Critical rows await the owner, two
are Blocked, one is an agent's.** **Nine packets pending.**

**Fifth consecutive empty calendar check**, through 2026-11-04. **$1,700
collected this week and not one hour of it in the diary.**

### What this brief declined to do

- **No balance** — A-19, fifth routine running.
- **No margin**, for any job.
- **No Manus amount**, because the receipt did not carry one.
- **No claim that the fourth Shopify bill succeeded or failed** — no notice
  either way.
- **No read-state claim** on the two customer datalogs — **T-102 is now Accepted
  Risk and the list payload cannot supply it**; ages are computed from stored
  timestamps and read state is labelled unverified.

### Unresolved, and the shortest versions of each

- **Did the owner set up the card schedule?** One sentence. **Security question
  if not.** T-104.
- **What the front door costs, and on what card.** T-103.
- **What the $450 and $700 bought.** Two sentences. T-88, T-92.
- **A-23.** A yes.
- **Would DD84 ever employ two people?** One word, and it settles T-97 either
  way.

---

## OL-0073 — 2026-10-29 · Two packets answered: a cash rule written where routines read it, and three sends deferred behind a price

- **Timestamp** 2026-10-29, interactive session. **Not a routine.**
- **Task** T-37, T-64, T-66, T-71 · **Approvals** **A-19 — APPROVE, Option C**
  and **A-20 — DEFER**, both owner, 2026-10-29. Execution of A-19 is Class B
  (the agents' own instruction text and this record); **A-20 required no action
  and got none.**
- **Operator** Claude (agent), on the owner's answers to a direct two-question
  choice put to him on **2026-10-22**.
- **Checkout** — base **`6d0d224`**, `HEAD` equal to
  `origin/claude/claude-md-docs-cqvhy6`, **no `src/` and no `package.json`.**
  Both markers absent.
- **Reached** the local tree only. **No connector, no mail, no GitHub write, no
  scheduled task touched.**

### A-19 — APPROVED, Option C, and executed the same day

**The shape of a cash position may be recorded; the figure may not.** Overdrawn,
positive, a payment declined, an auto-charge pending — each with **the Gmail
thread ID and the read time**, so the owner is one click from the exact number
in his own inbox.

**Written where the routines read it, not only recorded here:**

- **`CLAUDE.md` §5**, beside A-13's standing rule, as a bullet in the list of
  rules that are easiest to lose.
- **`.claude/commands/dd84-cash-review.md`** — a `## Cash position` section in
  the output format, which the brief had been writing for two weeks **without
  the format asking for it**, plus the rule in full. This is the routine A-19's
  own success test names.
- **`.claude/commands/dd84-inbox-intake.md`** — which **carried no cash-handling
  rule at all**, despite being the routine that meets the bank alerts first and
  the one that raised this packet.

**What it changed in behaviour: almost nothing, and that is the finding.** The
2026-10-16 intake and the 2026-10-23 cash review had both already withheld the
figure and stated the shape — the 10-23 brief reads _"Not stateable, and that is
A-19… that is the cash position, stated as a shape"_ — which is precisely what
this packet's Actual-result block predicted a deferral would produce: **Option C
in practice, by an agent's choice rather than a decision.**

**So the work here was not changing conduct but giving it authority.** Thirteen
days of correct judgement lived only in the reasoning of the sessions that
exercised it; **an unwritten rule is one re-reading away from a run that never
saw the argument deciding differently.** It is now three files that cannot be
missed.

**Two things the decision deliberately did not do.** It does not touch
**revenue** figures, which A-13 already permits in full — the line is between
what DD84 earned and what is in its account. And **it does not advance T-71 by a
day**: an agent may now say "overdrawn, thread `1a14087d5d2b6009`", and still
cannot say why or stop the next charge declining. **T-71 stays Awaiting Owner at
the top of the register**, and its next action is unchanged: a person reads the
bank messages.

### A-20 — DEFERRED, "price the jobs first." Nothing sent

**No message went to any of the three** — the Challenger customer, the C10
customer, or the Lexus enquirer. The drafts stand as written in
`briefs/2026-10-21-followup.md`.

**The deferral names the blocker the packet had already identified and declined
to own.** A-20 said in its own body that approving it would "recover the
conversation and still leave the revenue on the floor", because **neither
delivered job has ever been priced** and pricing is not Torque's to move. The
owner's answer is that the price comes first.

**A-21 — raised 2026-10-22, the day after A-20 — is exactly that decision**, and
this deferral promotes it from one of nine pending packets to **the gate every
customer send now waits behind.** Recorded on three register rows: T-37 and T-64
now read `A-21 (A-20 deferred)`, and T-66 reads **`A-21 via T-84`** — flagged as
**a derived dependency, not a named one**: A-21's Affected-records block covers
T-37, T-64 and T-84, and **the Lexus reply waits on the price ladder through
T-84 rather than on A-21 directly.** Stating that as inference rather than as
the packet's own scope.

**The cost of the sequence is recorded rather than buried.** Three
counterparties stay silent while A-21 waits, including an enquirer now **~21
days stalled**, and the drafts were written to stop the jobs becoming unbillable
by age. **Deferring does not pause that clock. It accepts it in exchange for not
quoting twice**, which is a defensible trade and is not the same as a free one.

**And the drafts will need re-reading before any send**, on A-15's own evidence:
two statements in those drafts had gone untrue in thirteen days, and these are
now eight days old.

### A-18 was not disposed of, and that is worth saying

**A deferral of A-20 answers A-20.** A-18 — the superseded single follow-up —
**remains formally pending**, recommendation REJECT, and the board now says so
explicitly rather than implying that A-20's answer covered it. **It is the
cheapest item on that board: one word.**

### Board state after this entry

**Seven packets with the owner: A-07, A-10, A-17, A-18, A-21, A-22, A-23** —
down from nine. **A-21 is now the most expensive of them**, being the only one
with revenue directly attached and the only one blocking three waiting
counterparties. A-22 and A-23 are single replies that **do not** wait on it.

### What was deliberately not done

- **No cash figure was written anywhere** while recording a decision about cash
  figures. The one identifier in this entry is a **Gmail thread ID**, which is
  what Option C requires in place of a number.
- **No message sent, drafted, edited or deleted.** A-20's three drafts are
  untouched.
- **A-21 was not answered, argued for, or pre-empted.** The deferral makes it
  urgent; it does not make it decided, and proposing a price is not setting one.
- **A-17 untouched** — still pending, still the owner's, and the 2026-10-21
  measurement in its Actual-result block still stands.
- **No routine prompt in the claude.ai UI edited.** The three files changed are
  the version-controlled command definitions, which is T-69's distinction: the
  repository text is fixable from here, the scheduled-task prompts are not.

### Class held

No mail read, sent, replied to, forwarded or labelled. **No draft created,
edited, sent or deleted.** No charge, refund, invoice, payout or fulfilment. No
bank, card, Square or payment action. **No Supabase tool called.** No GitHub
write. **No scheduled task created, changed, fired or deleted.** `docs/growth/`
untouched. **No balance figure, overdraft amount, last-four digits, customer
name, email address or phone number written here.**

- **Needs the owner** — **A-21 first, and it is now in a different class from
  everything else on the board:** it holds three counterparties and the only
  unbilled revenue in the record. Then the unread bank messages **newest
  first**; **A-22** and **A-23**, two single replies that nothing blocks;
  **A-18** (one word, close it); **A-17** at twenty days; and **A-07**, the one
  76-day packet that is real.

---

## OL-0074 — 2026-10-29 · A supplier answered eight days ago, and the packet waiting to be sent would chase him anyway

> **Third numbering collision, and that makes it structural beyond argument.**
> **Both this entry and OL-0073 were written as OL-0073**, by two sessions that
> each read `## Next entry: OL-0073` and each took it. **The same thing happened
> at OL-0060 and once before that.** **Theirs is kept because it landed first;
> this one is renumbered.** **Two instances were a coincidence worth noting;
> three are a shared counter with no locking**, and **the convention is now
> settled: the session that loses the push renumbers, never the one on the
> remote.**

- **Routine** `/dd84-inbox-intake`, fired by **"DD84 Inbox and Lead Intake
  (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at **2026-10-29T10:20Z**.
  **Twenty-fifth scheduled firing to reach a session with the repository
  attached.** Class A throughout.
- **Checkout** tip **`94635e0`** at start, **`6d0d224`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **64
  tracked files, not 28** — twelfth run reporting it, T-85 step 3.
- **Window** since OL-0071, **2026-10-28T10:20Z → 2026-10-29T10:20Z**.
- **Counts** **28 threads of an estimated 28** · 7 actionable · 21 no-action ·
  **0 new leads** (eighth consecutive run) · **0 drafts** · **4 new tasks**
  (T-105 to T-108) · **5 task descriptions corrected** · **1 pending packet
  recommended for DEFER.**
- **Sources reached** Gmail; **Shopify, read live and controlling.** **Not
  reached** Superhuman Mail, Stripe, PayPal, bookipay, Square, and **Shopify
  Payments** (scope `read_shopify_payments` denied).
- **Eleven threads fetched individually** because T-102 is Accepted Risk and the
  list supplies neither dates nor read state.
- **Operator** Claude (agent), cqvhy6 session

### The finding: a reply nobody opened, and a chase drafted on its absence

The supplier thread, fetched this run rather than carried forward:

| When                     | Who          | State      |
| ------------------------ | ------------ | ---------- |
| 2026-09-26T11:19:29Z     | DD84 sent    | —          |
| **2026-10-04T20:33:02Z** | **Supplier** | **UNREAD** |
| 2026-10-05T11:11:48Z     | DD84 chased  | —          |
| **2026-10-21T01:06:06Z** | **Supplier** | **UNREAD** |

**The supplier has replied twice and neither reply has been opened** — 24.57
days and 8.39 days. **DD84's chase went out 14.65 hours after the first unread
reply.**

**For three weeks every run here aged this thread from DD84's own 2026-10-05
chase** (23.96 days today) **and reported escalating silence.** The age was
arithmetically correct and computed from the wrong message. **A-22 is a holding
reply whose entire premise is that nobody answered; the premise is false, and
sending it would follow up on correspondence sitting unread.** Recommended
**DEFER**, recorded as **T-105** (Critical).

**A-22's packet body was not edited** — `APPROVALS.md`'s rule is that an agent
writes only **Response** and **Actual result** — so the brief carries the
correction and the register carries the row. **The packet and its refutation now
sit in the same record, which is the point of the record.**

**Neither reply was opened by this run either.** Metadata establishes that the
messages exist, when they arrived and that they are unread; **what the supplier
said is not known and was not guessed at.** Reading it is the owner's, and
**drafting a reply to an unread message is precisely the error being
corrected.**

### Why this one was findable today and not last week

**T-102 is the reason it was ever missed.** The thread list used to return
`date` and `labelIds` for every entry, which is how a run would notice a newer
inbound message. **When that payload degraded, runs kept ageing from the
timestamps already in the register — and a stored timestamp cannot tell you a
newer message arrived.** The defect did not create a wrong number; **it removed
the only cheap way to discover the number was attached to the wrong message.**

**What changed today is method, not instrument:** eleven threads were fetched
individually instead of two to five. **It cost more and it found a Critical
error, which settles whether the extra cost is worth it.**

### Order #1001, traced end to end — the first DD84 sale whose economics are known

**The first Shopify payout landed at 2026-10-29T09:17:05Z: $530.31.** Read live
from the store, it reconciles to the cent:

| Line                              | Amount        |
| --------------------------------- | ------------- |
| Charged                           | **$550.00**   |
| Included GA 4% + county 2% tax    | **−$31.13**   |
| Processing fee                    | **−$19.69**   |
| **Paid out** (= $550.00 − $19.69) | **$530.31**   |
| **Retained**                      | **$499.18**   |
| Checkout → cash                   | **5.89 days** |

**The register has carried $550.00 in six briefs. The business keeps $499.18** —
**$50.82, or 9.24%, less.** Corrected in `ventures.md` this run, together with
the derived all-time figure, which is now stated three ways (**charged $5,207.86
· received $5,188.17 · retained $5,157.04**) with the explicit warning that
**all three rest on a 2026-08-03 baseline whose basis is not recorded
anywhere**, so **only the $499.18 has actually been traced.**

**The fee rate name is `paypal_domestic_card_not_present` at 3.49%**; 3.49% of
$550.00 is $19.195 against a $19.69 charge, **leaving $0.495 consistent with a
fixed component of about $0.49** — arithmetic from two live figures, labelled as
arithmetic. **Effective 3.58% gross**, where a standard 2.9% + $0.30 card rate
would have been $16.25. **$3.44 on this order; a structural per-order cost the
register has never had a number for until now.**

**Two further things the live store settled that the mail could not:**

- **The $100 `CREDITS100` discount landed entirely on the Mopar tune line**, so
  `DD84-MOPAR-TUNE-BASIC` **listed at $350 and sold at $250.** **A-21 recommends
  $350 for T-64 and is now a decision with a fact attached rather than without
  one.** **T-107.**
- **`FULFILLED` was set by automation 2 and 3 seconds after checkout** —
  fulfillments at 11:56:45Z and 11:56:46Z against an order created 11:56:43Z,
  while **the real delivery was the owner emailing a corrected file on
  2026-10-26.** **T-91's "FULFILLED is a flag, not evidence" is now verified
  with timestamps, and it generalises to every service SKU in the store.
  T-108.**

### Corrections this run made to its own side of the record

**Five register descriptions said something this run disproved.** All five
rewritten, none quietly:

| Task      | Said                                       | Says now                                              |
| --------- | ------------------------------------------ | ----------------------------------------------------- |
| **T-82**  | "supplier has chased twice"                | **the supplier replied 10-21 and nobody opened it**   |
| **T-64**  | "customer's log unread"                    | **log now READ, still unanswered** (15.78d)           |
| **T-89**  | "the retry will hit the same stopped card" | **primary method is PayPal, not a card** — 4 failures |
| **T-91**  | "rung unreconciled"                        | **$530.31 paid out; FULFILLED was automation**        |
| **T-104** | "60-second windows, hourly"                | **60s, 61s, 29s; not hourly, not fixed**              |

**T-89's is the one with teeth.** Shopify's fourth-failure notice names the
method for the first time: **"Primary payment method PayPal … failed."** Three
runs speculated about the stopped debit card and **yesterday's intake proposed a
card schedule as "a single cause behind five failures," three Shopify bills
among them.** **A card being off cannot fail a PayPal charge.** The hypothesis
was offered as testable, **it was tested inside a day, and it is wrong about the
Shopify bills.** The fifth attempt falls **2026-10-30**, tomorrow, the day of
the cash review.

**T-104's correction is the second in two days on the same evidence.** Today's
window was **29 seconds** (on 08:51:45Z, off 08:52:14Z), against 60 and 61
seconds yesterday, and **not on the hour.** Yesterday's "a person does not do
that" was drawn from two points; **the third does not fit, and a varying width
points toward a deliberate act each time rather than a script.** **What survives
is that the card is opened and shut inside a minute, repeatedly.** **What does
not is hourly, fixed-width, or necessarily automated** — and the earlier wording
is struck rather than softened.

### Two instrument notes

**Shopify's own fields disagree about the discount.** On the Mopar line,
`discountAllocations` reports **$100.00 allocated** and `discountedTotalSet`
reports **$350.00**. **Controlling source: `discountAllocations`, corroborated
independently by the tax allocation** — that line's tax is $14.15, which is 6%
inclusive of **$250.00**. **Recorded because `discountedTotalSet` is the obvious
field to read and it is the wrong one here.**

**The recount pattern's failure got louder.** `^\| T-\d\d \|` undercounted by
three on 2026-10-28; after T-105 to T-108 widened the ID column again, **it now
matches nothing at all** and would report an empty register. Noted in
`TASK-REGISTER.md` beside the counts.

### A-19 landed on this routine mid-run, and this entry got it wrong before OL-0075 fixed it

**A-19 Option C was approved and executed into this routine's own command file
while this run was gathering.** The rule: **record the shape of a cash position,
never the figure**, with the thread ID; **revenue figures stay reportable in
full under A-13**; and **say "withheld, A-19" rather than "not available"** when
a figure was read and not published.

**Everything in §2 of the brief is revenue and is reported in full** — charged,
fee, tax, payout, retained. **That part was right.**

~~**One figure is on the edge — the Shopify bill, a declined payment — and the
reading taken is that it is a vendor's list price rather than an account-level
figure, so it is published.**~~ **Struck. The reading was wrong and the figure
has been removed from this entry and from the brief by OL-0075, 51 minutes
later.**

**Why it was wrong.** It read the rule's four items as examples of the fourth —
"any account-level figure" — when **"a declined-payment amount" is named
separately.** The list is broader than an account-level test, not an
illustration of one, **and a failed bill payment's amount is the second item on
it regardless of who was being paid.** **The rule's own reason confirms it:**
A-19 exists because a negative balance **"describes a distressed"** business
while DD84 pursues SBA 504 financing, and **a subscription that has failed four
times in eight days reads as distress to that same reader — with the amount
doing the work.**

**What this entry claimed about its own care is the part that stings.** It said
the reading was **"stated rather than decided quietly"** and that **"narrowing a
fresh owner decision by an agent's judgement is precisely how its unwritten
version went wrong."** **Both sentences were true, and the entry then did the
thing they warn against** — it narrowed a one-day-old owner decision by an
agent's reading, announced that it had, and published the figure anyway.
**Flagging a judgement call is not the same as declining to make one**, and this
is the clearest instance of that distinction in this log.

**Scope of the fix, and what it does not reach.** **This entry and the brief are
corrected.** **Twelve earlier files carry the same figure** — nine briefs, the
register, this log and `ventures.md` — and **editing those is editing the
historical record, which A-16 established is an approval packet**, so **A-24 was
raised and nothing historical was touched.** **The removal is also partial by
construction: the repository is public and git retains every version**, so the
amount stays readable in commit `24cf441` and earlier. **Striking it changes
what the record says, not what it has already published.**

**Nothing was withheld under A-19 by this run as originally written** — the one
thing that should have been, was not. **The Wells Fargo statement is correctly
reported as needing a secure login rather than as withheld, because its contents
were never read.**

### What was withheld

Under §5: the storefront customer's name and address, two other customers' names
and addresses, the supplier's company and representative, **two card digit-sets
and an account number**, the contents of a monthly bank statement, credit-score
figures, a notice concerning a minor, and the store's admin identifiers. **The
tax jurisdictions are named** — Georgia and a county — because **the
collected-tax finding is unstateable without them**, and **nothing about the
customer is recorded.**

### Counts after this run

**108 tasks** · 43 Awaiting Owner · **13 Critical and open**, up one on T-105.

**This entry was written saying nine packets were pending. By the time it
committed, seven were.** OL-0073 landed first and disposed of **A-19 (approved,
Option C)** and **A-20 (deferred behind a price)**. **Corrected here and in the
brief rather than left to read as of its drafting time** — the brief is dated by
its window, not by when its arithmetic happened to be true.

**And the deferral makes this run's smallest finding its most expensive.** A-20
was deferred with "price the jobs first", which **promotes A-21 to the single
gate every customer send now waits behind** — three counterparties, one of them
stalled about 21 days. **This run then found that A-21's central number has only
ever transacted at $250**, after a $100 code, **and the packet was raised
without that fact.** **T-107 is one sentence from the owner and it is now in
front of everything A-20's deferral routed through A-21.**

---

## OL-0075 — 2026-10-29 · Daily brief: a payout lands, and the run strikes a figure its own last push should not have published

- **Routine** `/dd84-daily-brief`, fired by **"DD84 Daily Command Brief
  (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-29T10:51:49Z**. **Twenty-sixth scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout** tip **`24cf441`** at start, **`1bccef4`** after the protective
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **65
  tracked files, not 28** — **thirteenth run reporting it**, T-85 step 3.
- **Sources reached** Google Calendar, read live; the register and approvals
  file. **Not reached** Stripe, PayPal, bookipay, Square.
- **New tasks** T-109. **New packets** A-24.
- **Operator** Claude (agent), cqvhy6 session

### The protective commit carried the run's most valuable work

**OL-0050's repair is normally a skeleton: commit placeholders, then fill
them.** This run opened by finding a compliance defect in **its own session's
push from 51 minutes earlier**, and **a fix worth saving is better protection
than a placeholder**, so the fix went in first at `1bccef4` and the brief was
written on top. **Thirteenth application of the repair, and the first where the
protective commit was the point rather than the insurance.**

### A-19 reached CLAUDE.md, and OL-0074 had read it wrong

**`CLAUDE.md` §5 now carries A-19 Option C** and is more explicit than the
command file OL-0074 worked from: a **"balance, an overdraft amount, a
declined-payment amount or any account-level figure"** stays out of **every
file, including the append-only log.**

**OL-0074 published the failed Shopify bill's amount** on the reading that it
was a vendor's list price rather than an account-level figure. **Wrong, for a
reason visible in the text: "a declined-payment amount" is named separately from
"any account-level figure", so the list is broader than an account-level test
rather than an illustration of one.** A failed bill's amount is the second item
on that list **whoever was being paid.**

**The rule's stated reason confirms it rather than merely allowing it.** A-19
exists because such a figure **"describes a distressed"** business while DD84
pursues SBA 504 financing and this repository is public. **A subscription that
has failed four times in eight days reads as distress to exactly that reader,
and the amount is what makes it land.** "A bill payment failed" is neutral; the
2026-10-27 brief's sentence about the store being unable to collect its
subscription fee from its owner is not, **and it needed the number.**

**The sharpest part of this is what OL-0074 said about itself.** It wrote that
the reading was **"stated rather than decided quietly"** and that **"narrowing a
fresh owner decision by an agent's judgement is precisely how its unwritten
version went wrong."** **Both sentences were correct, and the entry then did the
thing they warn against.** **Flagging a judgement call is not declining to make
one** — and a run that announces its own risk and proceeds anyway has documented
itself, not restrained itself.

**Fixed:** the 2026-10-29 intake brief and OL-0074, with the figure replaced by
the shape and thread `1a18264480149222`, **the wrong reading struck rather than
deleted**, and the illustrative sentence **paraphrased rather than quoted**,
because quoting it would republish the figure while explaining why it must go.

**Not fixed, deliberately:** **twelve files that predate the rule** — nine
briefs, the register, this log and `ventures.md`, **38 occurrences**, counted
mechanically. **A-24's own first list was wrong** — it said six briefs and ten
files, named `APPROVALS.md`, which carries none, and missed `ventures.md`, which
carries two — **and was corrected within the hour.** **A-16 established that
redacting the historical record is an approval packet whoever is right about the
content**, so **A-24** is raised and nothing historical was touched. **T-109**
carries it. **The `$39.99–$399` digital-product range stays: those are revenue
figures and A-13 permits them in full.** **`docs/growth/` is not touched under
any outcome.**

**A-24 states the limit of what it can achieve.** **The repository is public and
git retains every version**, so the figure stays readable in `24cf441` and
earlier. **A redaction changes what the record says, not what it has already
published**, and the packet's cheapest alternative is **to rule A-19 prospective
and change nothing.**

### Money moved

| Direction | Amount                 | When                 | Status                                                      |
| --------- | ---------------------- | -------------------- | ----------------------------------------------------------- |
| **IN**    | **$530.31**            | 2026-10-29T09:17:05Z | **First Shopify payout ever** — T-91                        |
| **OUT**   | **withheld, A-19**     | 2026-10-28T12:02:51Z | Shopify bill, 4th failure — thread `1a18264480149222`, T-89 |
| **OUT**   | **not in the receipt** | 2026-10-28T09:52:22Z | Manus renewed on a backup card — T-103                      |

**First money in for 5.48 days**, and **it is money already earned on 10-23
finishing its journey rather than new work sold.** **Week to date: $1,700.00
charged, $1,680.31 received, $1,150 of it still unattributable to any job.**
**The fifth Shopify attempt falls 2026-10-30, the day of the cash review.**

### The diary, and a claim that is now half wrong

**Calendar read live: empty through 2026-11-06. Sixth consecutive empty check.**

**This brief has said five times that no job can be margined. That is now half
wrong.** Order #1001's **revenue side is fully known** — charged, fee, tax,
payout, retained, all read from the live store. **Its cost side is empty**: the
HP Tuners credit spend is unread (**T-94**) and **no calendar entry records how
long the work took.** **The first DD84 job with a verified top line still has no
bottom line, and the empty diary is why.**

### Counts, and a delta that is not what it looks like

**109 tasks** · 43 Awaiting Owner · **62 of 89 open rows past due** · **thirteen
Critical and open**, up one on T-105.

**Yesterday was 56 of 84 past due. All six of the increase came from the date
advancing** — **yesterday's register, scored mechanically against today's date,
also gives 62.** **None of this run's five new rows is overdue.** **The queue
did not get worse; the calendar moved.** Recorded because "overdue up six" would
have been true and misleading in the same breath.

### Eight packets, and two answered yesterday

**A-07, A-10, A-17, A-18, A-21, A-22, A-23, A-24.** **A-19 and A-20 were
answered by the owner on 2026-10-29** — the first decisions since 2026-10-21 —
and **A-20's deferral makes A-21 the single gate in front of three
counterparties.** **A-23 is the only one of the eight with nothing wrong with
it.**

### What was withheld

Under §5 and A-19: **the Shopify bill's amount** (shape and thread ID given
instead), the Manus charge (**not in the receipt, not estimated**), three
customers' names and addresses, the supplier's company and representative, card
digits and an account number, and the bank statement's contents — **reported as
needing a secure login rather than as withheld, because it was never read.**

### The leak scan reported a violation and the push went out anyway

**Worth recording because it is a process failure, not a content one.** The §5
leak scan was run **in the same shell chain as `git commit` and `git push`**.
The scan is a Python block that prints its findings and **exits zero whatever it
finds**, so `&&` carried straight on. **It printed a `declined-amt` finding and
the commit and push ran in the same breath.**

**What it caught was real but small:** A-24's corrected file list described its
own counting method as matching the figure, **which spells the amount while
explaining why the amount must go** — the same self-defeating move already
corrected once today in the intake brief's illustrative quotation. **Reworded to
name the bill amount by its thread ID instead**, and the success test with it.

**The fix is structural.** **A gate that cannot fail is not a gate.** The scan
now **exits non-zero on any finding and is run as its own step**, so a violation
stops the commit instead of being narrated past it. **Three runs have now
written "the leak scan caught it before commit" — that was true each time
because the finding happened to be in a draft, not because the scan was wired to
stop anything.**

**And the rewired gate immediately caught this very entry.** The paragraph above
originally **quoted the scan's own output line verbatim**, which spells the
amount inside a note about not spelling the amount. **Third instance today of
the same trap** — the intake brief's illustrative quotation, A-24's description
of its counting method, and now the log's account of the gate. **Each time the
figure arrived not as data but as an example of itself.** **The first two were
caught by reading; this one was caught by the gate refusing the commit**, which
is the whole difference the rewiring was meant to make.

### The honest summary

**Nothing this session did today earned DD84 a dollar or answered a customer.**
**$530.31 arrived on its own, from work sold six days ago.** **No new enquiry
has arrived in eight runs.** **What changed is that three claims this record had
been repeating turned out false** — the supplier was not silent, the datalog was
not unread, the Shopify instrument was not a card — **and all three were found
by fetching the thing instead of trusting the stored note.**

---

## OL-0076 — 2026-10-30 · The oldest unanswered thing in this register got answered, and the owner made his first sales approach

- **Routine** `/dd84-inbox-intake`, fired by **"DD84 Inbox and Lead Intake
  (repo-attached)"** (`trig_01UdMtZvf1BdVuYoucd6UY7N`) at
  **2026-10-30T10:20:50Z**. **Twenty-seventh scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout** tip **`da4be5f`** at start, **`cbbdaec`** after the skeleton
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **66
  tracked files, not 28** — **fourteenth run reporting it**, T-85 step 3.
- **Window** since OL-0074, **2026-10-29T10:20Z → 2026-10-30T10:20Z**.
- **Counts** **43 threads of an estimated 43** — up from 28 — · 9 actionable ·
  34 no-action · **1 new lead, outbound** · **0 drafts** (ninth run) · **6 new
  tasks** (T-110 to T-115) · **1 task answered by the owner.**
- **Nine items fetched individually** because T-102 is Accepted Risk.
- **A-19 observed**: no balance, overdraft or declined-payment amount in the
  brief or this entry; shape plus thread ID instead. **Revenue in full under
  A-13.**
- **Operator** Claude (agent), cqvhy6 session

### T-64 is answered, and the gate the owner set for himself is not recorded as met

**2026-10-29T14:14:56Z — DD84 replied to the Challenger customer with a new
calibration attached, after the customer had waited 15.94 days.** **The oldest
unanswered thing in this register, reported at the top of five briefs, is
closed** — and **closed by the owner, not by any packet.** **A-20 was drafted to
send exactly this follow-up and was deferred the day before; he wrote his own.**

**The qualification.** This thread contains the owner twice declining to add
power until a fault was cleared: on **2026-09-28**, _"I don't want to start
adding power yet… if the pressure warning is real or stays low, shut it down and
verify with a mechanical gauge before driving it hard"_; on **2026-10-01**,
_"**before the next power/throttle revision** … **confirm the oil-pressure issue
hasn't returned**."_ **The customer's 2026-10-13 reply says only "this is the
log from a hour+ drive."** **The 2026-10-29 calibration's filename carries a
power descriptor, and the message body is entirely quoted history — no new text
went with it.**

**So the gate exists, the clearance is not in the thread, and the revision has
gone.** **Nothing is asserted about the car or about the owner's diligence** —
he may have read the log and been satisfied, and **the log is the one artefact
no session here can open.** **Unknown is not zero and it is not a fault
either.** **It is first in the brief because `CLAUDE.md` requires escalating a
safety-critical fault rather than passing over it, and a dropping oil-pressure
reading on a car receiving added power is that category.** **One sentence closes
it. T-110.**

**The filename is withheld** under §5, which keeps tune files out of a public
repository; a calibration filename carries the vehicle and the work together.

### The first outbound sales message in this record, and the first channel anyone chose

**2026-10-29T21:31:54Z**, to someone this register has never seen: _"I saw your
**Reddit** post about your cammed/turbo 5.3. I offer remote HP Tuners tuning
through Down Dirty 84, **starting at $300**…"_ — then a request for the tune
file, matching startup/idle logs, cam specs, injector part number, fuel type,
base fuel pressure and wideband status, **with the final price withheld until
the files arrive.**

**`ventures.md` has carried the enquiry source as `UNKNOWN` since 2026-08-03**,
and four paying jobs this month arrived through it unseen. **Reddit is now
recorded as a channel with a date and the evidence** — **and recorded with its
limits: one message, no reply, no qualified lead, no revenue.** **The inbound
source for every paying job is still `UNKNOWN`; this is a new channel beside
that gap, not an answer to it. T-112.**

**The script is kept rather than critiqued.** It collects what the spec's lead
fields ask for in one paragraph.

### Three prices for one class of work in three days

| Source                               | Price    | Verified   |
| ------------------------------------ | -------- | ---------- |
| Published ladder, live store         | **$350** | 2026-10-29 |
| **Actually sold** — order #1001 line | **$250** | 2026-10-29 |
| **Owner's own outbound quote**       | **$300** | 2026-10-30 |

**A cammed/turbo 5.3 is GM, and the registry's GM/Ford/Mopar core rung is
$350.** **The routine's instruction is to flag a conflict with the approved
catalogue rather than resolve it silently, so it is flagged: no live price was
changed and no rung was rewritten.** **T-111.**

**Why it matters beyond bookkeeping.** **A-21 asks the owner to set a price on
two delivered jobs and, since A-20's deferral, is the gate every customer send
waits behind.** **He has now priced adjacent work at $300 in writing, having
sold the $350 rung at $250.** **That does not answer A-21 — different jobs,
different scope — but A-21 should be answered with all three numbers in view
rather than one.**

**And the deferral's own premise moved the wrong way.** A-20 was deferred on
2026-10-29 with "price the jobs first"; **a further revision was delivered on
one of those very jobs the same day, still unpriced.** **Not a criticism of the
sequence — the customer needed his answer — but the gap A-21 exists to close got
wider.**

### Money

**Revenue, reportable in full under A-13:**

| When       | Amount                            | Route                 | Attributed? |
| ---------- | --------------------------------- | --------------------- | ----------- |
| 2026-10-22 | **$450.00**                       | Zelle, "tune"         | No — T-88   |
| 2026-10-23 | **$550.00** charged / $530.31 net | Storefront #1001      | **Yes**     |
| 2026-10-24 | **$700.00**                       | Zelle, "mecanic tune" | No — T-92   |
| 2026-10-29 | **$400.00**                       | Zelle, "Tune"         | No — T-113  |

**$2,100.00 charged, $2,080.31 received, $1,550.00 of it unattributed to any
job.** Registry updated; the derived all-time figures move to **$5,607.86
charged · $5,588.17 received · $5,557.04 retained**, with the standing warning
that all three rest on an August baseline whose basis is recorded nowhere.

**$400.00 is exactly the floor of the Toyota/Lexus rung and T-66 is a stalled
Lexus enquiry.** **One rung matching one amount is a question, not
attribution**, and it is recorded as a question.

**$530.31 left Shopify Balance at 2026-10-30T09:33:34Z** — **yesterday's payout
moving one hop further, not new money, and not counted twice.**

**A business debit card declined, "card is off", at 2026-10-29T12:25:24Z** —
**three and a half hours after that morning's 29-second card window closed.**
Pattern evidence under T-71 and T-104. **Amount withheld under A-19; digits
under §5.**

### A third party now has bank access and the record does not know which

**2026-10-30T09:24:28Z, unread:** the bank reports a data-sharing authorisation
with **Plaid**. **Plaid is an aggregator, not an end service, and the notice
does not name the application behind it.** **A Plaid grant is ongoing read
access to a business account, not a one-off login.** It arrived **nine minutes
before the Balance transfer**, which is suggestive and **is not evidence**. **No
cash figure recorded, under A-19. T-114.**

### Two questions closed by looking at timestamps

**The TikTok notices are a pair, not a second rejection.** Both arrived at
**14:04:24Z and 14:04:25Z** on 2026-10-29, restating the same proof-of-address
and business-verification requirement. **Yesterday's run could not tell whether
a resubmission had been rejected again; one second apart settles it.** **T-100
unchanged, no new task.**

**The fifth Shopify bill attempt had not happened when this window closed.** All
four prior attempts landed between **12:02Z and 12:38Z**; this window ends at
**10:20Z**, and a targeted search of Shopify mail since 2026-10-29 returns only
the two payout confirmations. **So its absence is neither success nor failure**
— **the cash review at 11:10Z today is the run that will see it.**

### The other venture's infrastructure, and the one leg of it that is DD84's

**Vercel reports three misconfigured domains on the `georgia-opportunity-ledger`
project**, one of them a **subdomain of DD84's primary domain.** **Nothing was
opened** — not the dashboard, not the other repository — **because the Ledger's
operations are not this record's and A-07 is pending.** **Only the DD84-domain
leg is logged. T-115.**

### What was withheld

Under §5: the Challenger customer's and the new prospect's names and addresses,
the Zelle payer's name and the confirmation code, **the calibration's
filename**, card and account digits, a statement's contents, and **six notices
concerning two minors, with no names, devices or apps recorded.** Under A-19:
the declined card's amount and every account-level figure.

### Counts after this run

**115 tasks** · **14 Critical and open**, up one on T-110. **Eight approval
packets pending, unchanged** — **no packet was raised**, because every finding
is a correction, a flag, or a question only the owner can answer, and a ninth
proposing no executable action would be noise.

### The honest summary

**This is the best window in the record and it is not close.** **The oldest
unanswered customer got his answer, money came in, and the business made its
first deliberate approach to a stranger.** **None of it was agent work** — the
agent's contribution was to notice that the reply carried an uncleared safety
gate, that the quote undercuts the published floor, and that a third party
quietly acquired bank access.

---

## OL-0077 — 2026-10-30 · Daily brief: the record was overstating its own run times, and the one channel that works has an unanswered flag against it

- **Routine** `/dd84-daily-brief`, fired by **"DD84 Daily Command Brief
  (repo-attached)"** (`trig_01Uw62JeMqdK6DaLatfk3BXX`) at
  **2026-10-30T10:51:24Z**. **Twenty-eighth scheduled firing to reach a session
  with the repository attached.** Class A throughout.
- **Checkout** tip **`b27bdd6`** at start, **`cdd6e00`** after the protective
  commit; `HEAD` equal to origin; **no `src/`, no `package.json`**; clean. **67
  tracked files, not 28** — **fifteenth run reporting it**, T-85 step 3.
- **Sources reached** Google Calendar, read live; the register, the approvals
  file and git history. **Not reached** Stripe, PayPal, bookipay, Square.
- **New tasks** T-116. **New packets** none.
- **Start time from the trigger; end time is this entry's commit** — see below.
- **Operator** Claude (agent), cqvhy6 session

### Every brief in this record overstated how long it ran, for a week

**The 2026-10-30 intake said it ran 10:21–11:15Z. Its finishing commit is dated
10:29:27Z, and the clock read 10:51:33Z when this routine fired** — **so the
file was claiming a time that had not happened.** Checking all seven recent
briefs against the last commit that touched each:

| Brief            | Claimed end | Commit | Over by     |
| ---------------- | ----------- | ------ | ----------- |
| 10-27 intake     | 10:45Z      | 10:27Z | ~18 min     |
| 10-27 daily      | 11:05Z      | 10:54Z | ~11 min     |
| 10-28 intake     | 10:45Z      | 10:24Z | ~21 min     |
| 10-28 daily      | 11:05Z      | 10:54Z | ~11 min     |
| 10-29 intake     | 11:12Z      | 11:00Z | ~12 min     |
| **10-29 daily**  | **11:40Z**  | 11:00Z | **~40 min** |
| **10-30 intake** | **11:15Z**  | 10:29Z | **~46 min** |

**All seven. The two worst are the most recent.** **An end time was estimated
and presented as read** — the defect this register catches in connectors, in
counts and in other runs' claims, sitting in its own header line **for a week,
undetected because nothing downstream consumes it.**

**It is not harmless.** **The inflation is three to sixfold**, and **what a
Routine costs and how long it takes is an open question in this record** —
OL-0012 sampled one firing at $1.77 and 22,888 output tokens, and A-10 still
turns on whether these runs are worth their money. **A duration figure wrong by
that factor would corrupt exactly that argument.**

**Corrected:** the 2026-10-30 intake brief, this session's own output from 23
minutes earlier, now states the trigger's start time and takes its end from the
commit hash, **with the original wording quoted rather than deleted.**

**Not corrected, deliberately:** the six earlier briefs. **Editing another run's
dated output is the A-16 situation**, and the correction is better placed where
this register always puts corrections — **in today's brief and this entry, with
the whole table, so the wrong claims stay visible with the correction
attached.** **T-116** carries the rule for future runs: **start time from the
trigger, end time from the commit, and a brief that wants an end time before
committing states none.**

**No approval packet was raised for the six.** Unlike A-24's redaction, **this
correction is additive and nothing about it is sensitive** — the table above is
the whole of it, and a packet to append a note that is already appended would be
ceremony.

### The channel the business just started using is the one under a flag

**Today's intake found, correctly, that the owner made DD84's first outbound
sales approach on 2026-10-29, to a 5.3 owner he found on Reddit, and
`ventures.md` now records Reddit as the first identified acquisition channel.**
**The intake did not connect it to what this register already held.**

- **T-60: Reddit flagged the DD84 account for automated activity, seven-day
  deadline, expiring roughly 2026-10-19.** **Critical, Awaiting Owner, 11 days
  past its date.**
- **Five Reddit handles were produced in six days**, each by DD84 answering a
  technical question for free, and this register's own words are that **"nothing
  else in this record has produced a single inbound enquiry."**
- **The register's own standing instruction was "clear T-60 first", with "T-60
  is a prerequisite for this task, not a neighbour of it."**

**So the only demonstrable demand source has an unresolved account problem
against it, and the business has just begun sourcing from it harder.** **If the
account is actioned, the channel, the five handles and the new prospect go
together.**

**Two precisions, because overstating this would be easy and wrong.** **The
outreach went by email to the individual, not as a post in the forum**, so it
does **not** breach the register's own forum restriction, which governs posting.
**And the five identified handles remain uncontacted — the person approached was
a sixth.** **Both are the owner's calls.** **The finding is the account's
status, not his judgement**, and T-60 was already the register's own stated
prerequisite before any of this happened.

### Money, and a schedule that misses its own event

**IN: $400.00**, 2026-10-30T00:35:17Z, Zelle, memo "Tune" — **the third
unattributed payment; T-113.** **OUT: a business debit card declined, "card is
off", 2026-10-29T12:25:24Z — amount withheld under A-19.** **$530.31 left
Shopify Balance at 09:33:34Z and is yesterday's payout moving one hop, not new
money.**

**Nine-day revenue, in full under A-13: $2,100.00 charged, $2,080.31 received,
$1,550.00 unattributed across three payers — none of whom has been
acknowledged.**

**A scheduling finding worth more than the billing question itself.** All four
Shopify bill attempts landed between **12:02Z and 12:38Z**. **The intake runs at
10:20Z, this brief at 10:51Z, and the weekly cash review at 11:10Z — every
routine fires before the window in which the charge has always been attempted.**
**So the routine built to catch a billing failure reports it roughly 24 hours
late, every time**, and four briefs have now carefully hedged an absence that
**was never going to be present.** **The hedging was right and the schedule is
the actual defect.**

### The diary, seventh time

**Calendar read live: empty through 2026-11-07.** **$2,100 collected, two
calibrations delivered, a payout banked, and nothing scheduled anywhere.** Order
#1001 still has **a verified top line and no bottom line** — T-94's unread
spend, a supplier shipment with no purchase record, and **no entry recording how
long any job took.**

### Counts

**116 tasks** · 46 Awaiting Owner · **66 of 96 open rows past due** · **fourteen
Critical and open**, up one on T-110. **Eight approval packets pending,
unchanged; none raised today or yesterday.** **T-60 and T-71 descriptions
corrected** — T-71's "two payments declined" has been wrong in the same
direction for eleven days and now reads five or more.

### The honest summary

**This was the best week in the record and none of it was agent work.** The
owner answered his oldest unanswered customer, banked a first storefront payout,
took a third payment and made the business's first deliberate approach to a
stranger.

**The agent's contribution was three findings and one confession:** that the
reply carried an uncleared safety gate, that the new channel sits under an
eleven-day-old flag, that the billing routine fires 80 minutes before the event
it exists to catch — **and that this record had been overstating its own run
times every day for a week.**

---

## Next entry: OL-0078
