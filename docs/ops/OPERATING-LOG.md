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

## Next entry: OL-0030

The next routine run or executed action appends here. If you are a routine: your
run entry goes at the bottom of this file and nothing above it is touched.

**One record now.** `claude/claude-md-docs-jjveuq` is superseded and must not be
appended to — see T-31.
