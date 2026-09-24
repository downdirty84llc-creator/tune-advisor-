# DD84 operating log

Append-only execution record, in the fields required by
`docs/DD84-OPERATIONS-AGENT.md` §9: timestamp, action, tool, source, operator,
before/after state, evidence, error and remediation.

**Rules.**

- **Append only.** No entry is ever edited or deleted, including one that records
  a mistake. A wrong entry is corrected by a later entry that references it —
  the same discipline the `audit_logs` table enforces in the product, where
  there is deliberately no update or delete policy for anyone.
- One entry per action that changed something, plus one per routine run — a run
  that found nothing still gets an entry. Silence in this file must mean "did not
  run", never "ran and found nothing".
- Evidence is a commit hash, a confirmation number, a URL, a query result or
  real command output. "Completed successfully" is not evidence.
- Timestamps are UTC.
- Entry IDs are sequential: `OL-nnnn`.

**Seeded 2026-08-06.** Entries OL-0001 to OL-0006 are reconstructed from
`git log` on `claude/claude-md-docs-jjveuq`; their timestamps are the real commit
timestamps and the evidence is verifiable with `git show`. The owner's brief
described five landed commits; the branch carries six since the platform build.
The sixth, `3d22acc`, was a small follow-up correcting the documentation written
in `8337e41`. It is logged as it is rather than as it was described.

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
- **Remediation** The exemption claimed for three legal documents was recorded as
  an open question rather than resolved. Follow-up task T-13, packet A-06.

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
- **Before** A crafted path segment was parsed as filter structure rather than as
  a value; the failed-payment tile counted sample accounts; the test config
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
- **Action** Ran the suite and wrote the real figures into CLAUDE.md; removed the
  claim of an integration suite.
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
  entry, **after** the commands were actually run. The register was seeded
  from `git log`, `docs/MILESTONES.md` and the owner's stated statuses; fields
  that could not be sourced from an artifact read `not recorded`.
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
    notice that `next lint` is deprecated and removed in Next.js 16 — pre-existing,
    unrelated to this change, and not acted on here.)
  - `npm test` — `Test Files 11 passed (11)`, `Tests 179 passed (179)`,
    duration 1.67s.
  - `npx prettier --check` over the eleven added and modified markdown files —
    `All matched files use Prettier code style!`
- **Error** None from this change.
- **Remediation** `npm run format:check` across the whole repository fails on
  **105 pre-existing files** — the `src/` tree, the unit tests, `scripts/seed.ts`
  and `vercel.json`. Confirmed pre-existing by stashing this change and
  re-running the check against clean `3d22acc`, where `src/lib/scoring/score.ts`
  still fails. **Not fixed here** — reformatting 105 unrelated files while
  landing this change is silent scope expansion. Raised as **T-26**.

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
  - `git push` — `3d22acc..fd50a82  claude/claude-md-docs-jjveuq -> claude/claude-md-docs-jjveuq`
  - Verified in the destination rather than assumed from the push output: after
    `git fetch origin`, local `HEAD` and `origin/claude/claude-md-docs-jjveuq`
    both read `fd50a8245d5be6db8c8e928c41012b84eeb353d2`.
- **Error** None
- **Remediation** n/a. This entry itself lands in a follow-up commit, because
  a commit cannot contain its own hash — the alternative was writing the hash
  before the push and hoping, which is the exact habit this file exists to break.

---

## OL-0010 — 2026-08-10 · Verify the Stripe billing configuration

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

## Next entry: OL-0011

The next routine run or executed action appends here. If you are a routine: your
run entry goes at the bottom of this file and nothing above it is touched.

---

## OL-0011 — 2026-09-09 · Attempt the Vercel deployment; blocked at the GitHub App

- **Task** T-28 · **Approval** Owner instruction, "not blocked anymore"
- **Action** Attempted to create the Vercel project linked to the repository.
  **Refused by Vercel.** No project was created and nothing was deployed.
- **Tool** `mcp__Vercel__list_teams`, `list_projects`, `create_git_project`,
  `search_vercel_documentation`
- **Source** Owner instruction following the deployment package
- **Operator** Claude (coordinator)
- **Before** No Vercel projects on the account.
- **After** Unchanged. `create_git_project` returned HTTP 400 `bad_request`:
  "To link a GitHub repository, you need to install the GitHub integration
  first." The Vercel GitHub App is not installed on the repository owner.
- **Evidence**
  - Team `downdirty84llc-creators-projects`
    (`team_a5zEaV43TZGEAxcqY1GgilmG`), plan **hobby**.
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

## OL-0012 — 2026-09-24 · Two owner decisions; flag the stale default branch

- **Task** T-29, T-30 · **Approval** Owner instruction, "leave the agent platform
  in tune-advisor- and flag the stale main"
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

### Correction to OL-0011 and to this session's earlier reading

OL-0011 recorded `main` as carrying two live bugs. That was read inside
`tune-advisor-` and generalised too far. **The canonical Ledger has both fixes**
— `sample-data.ts` is byte-identical to the copy on this branch and `mrr.ts`
differs only by one Prettier line wrap. The bugs are real, but only on the
abandoned copy, which is a staleness problem rather than a product defect. The
proposed port of those fixes is therefore withdrawn: there was nothing to port.
