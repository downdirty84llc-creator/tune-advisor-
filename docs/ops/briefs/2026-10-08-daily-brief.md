# DD84 daily command brief — 2026-10-08

Run at 2026-10-08T15:31–15:42Z. Connectors reached: Google Calendar, Gmail,
PayPal, Shopify, GitHub. Not reached: **Stripe, bookipay, Superhuman Mail**.

> **This is the first brief in `docs/ops/briefs/`.** It does **not** close T-23
> or A-10. It was produced by a manually invoked host session that holds the
> repository, not by a scheduled Routine. A-10's success test is "one
> **scheduled** run ends with a dated brief committed", and that has still never
> happened. Treat this file as proof that the routine works when given a
> checkout — not as proof the schedule delivers.

## Top three today

1. **Establish what `dd84-api` is, then decide whether its outage matters** —
   the only thing confirmed broken today, and the venture registry has never
   heard of it — **T-33**
2. **Answer A-10 in the claude.ai Routines UI** — pending 41 days; every day it
   waits, four Routines keep firing and discarding paid work, and the operating
   record only advances when a session like this one is driven by hand —
   **T-27**
3. **Read the r/LSSwapTheWorld thread and decide whether it is an inbound
   enquiry** — nothing has been collected in 13 months, so one real enquiry
   outranks most of this register — **T-36**

## Appointments

**None scheduled.** `downdirty84llc@gmail.com` and `Family` both returned zero
events for 2026-10-08 and 2026-10-09, read 15:33Z. The "Holidays in United
States" calendar was not read — it carries observances, not appointments.

## Money moved since the last brief

**There is no previous brief**, so the window is stated per system rather than
inherited.

| System       | In                         | Out                        | Notes                                                                                                                                                  |
| ------------ | -------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Stripe**   | **Not available this run** | **Not available this run** | No Stripe connector exists in this session's tool list. Confirmed by tool search, not assumed. Account `acct_1QBl8ZINLKqe1c6g` was **not** read.       |
| **bookipay** | **Not available this run** | **Not available this run** | No API access, by design (`ventures.md`). **100% of DD84's historic revenue came through it**, so this is the gap that matters most.                   |
| PayPal       | $0.00                      | $0.00                      | 0 transactions 2026-09-08T00:00Z → 2026-10-08T12:59:59Z (the API truncated the window to its own last refresh); 0 invoices in any status. Read 15:36Z. |
| Shopify      | $0.00                      | —                          | 0 orders, `totalCount: 0`, read 15:36Z. Consistent with the all-time figure of 0 Shopify orders.                                                       |

**Do not read this table as "no money moved."** The two systems that have ever
carried DD84 revenue were both unreadable this run. PayPal is not listed as a
DD84 payment system in `ventures.md` at all, so its zero is a true read of an
account that may be irrelevant.

## Needs a decision from you

| Packet   | Decision                                                                                                                       | Deadline                           | Consequence of waiting                                                                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **A-10** | Recreate the four Routines from the claude.ai UI with this repository and branch attached                                      | Overdue — pending since 2026-08-28 | Four Routines keep firing, producing briefs and discarding them. Sampled cost $2.63 across two runs; no total is claimed.                                          |
| **A-13** | Repository visibility: `tune-advisor-` is public and carries DD84's revenue figures, concentration risk and system identifiers | Before T-29 step 1                 | The figures stay publicly readable, and the queued default-branch repoint would move them from findable to first-read. **New packet, written this run** from T-32. |
| **A-07** | Select and subscribe to an upload virus-scanning service                                                                       | No date set                        | Ledger scope. Uploads land in a column that reads `pending` forever. Does not block launch; blocks accepting uploads safely.                                       |

Four owner actions outside the packet format are also still open and have each
been attempted and refused from a session — T-29 (default-branch repoint, four
branch deletions), T-30 (disable the Monday 09:00 send Routine), T-32 (make the
repository private). OL-0026 and OL-0027 name every refusal. **Further agent
attempts will not close these**; they need hands in the GitHub and claude.ai
UIs.

## Overdue

| Task     | Title                                                        | Days overdue | What unblocks it                                                                        |
| -------- | ------------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------- |
| **T-19** | Stand up the operating record and seed it with current state | 63           | One owner read of the register's summary table, confirming it or naming what's missing  |
| **T-06** | Exclude demo accounts from revenue counts                    | 61           | A seeded database. Ledger scope — the code is done, the rendered numbers never observed |
| **T-23** | Schedule the six routines and confirm the first firing       | 61           | A-10. Follow-up and site-monitor are also still unscheduled                             |
| **T-27** | Routines fire but commit nothing                             | 54           | A-10. Root cause confirmed twice; nothing left to diagnose                              |
| **T-11** | Stripe products and prices; run the payment matrix           | 49           | Test-mode keys. **A-05 is approved, not pending** — see corrections below               |
| **T-13** | Commission legal review of the legal documents               | 42           | Owner engaging counsel. **A-06 is approved, not pending** — see corrections below       |
| **T-14** | Wire virus scanning to `attachments.scan_status`             | 35           | A-07                                                                                    |

T-15, T-24, T-25 and T-26 are also past their dates (35–56 days). Their dates
are **Torque's proposals, not owner commitments** — the register header says so
— and all four are waiting on agent execution capacity, not on a decision.

## Customer risk

**No customer thread was found at risk, and the check was narrower than it
looks.** 25 inbox threads from the last two days were read as previews; not one
is from a customer. The traffic is notifications, marketing and lending offers.

Three items that are not customer risk but are the only business signals in the
mailbox:

- **`dd84-api` is failing.** Render reported "Server failure detected — Exited
  with status 1" at 00:27Z and "deploy failed" at 15:21Z, the latter against
  commit "Merge pull request #25". Both unread. **No task, no register entry and
  no mention in `ventures.md` existed for this service** → now **T-33**.
- **CI failed on `main` in `downdirty84llc-creator/downdirty84-ai-tuning`**
  (`914e171`, 15:12Z). A third repository the register does not know about →
  **T-34**. Whether it is the same failure as `dd84-api` is a hypothesis; the
  Render commit message is suggestive and is not evidence.
- **A law firm client-portal invitation**, "Please activate your account with
  Hawkins Law, LLC", 13:39Z, opened and not activated. **If** this is the
  counsel engagement A-06 authorised, T-13 is further along than the register
  shows and activation is the next step. Torque is not asserting the connection
  — it is one question to the owner: is this T-13's counsel?

**Not checkable this run:** unpaid invoices and payment disputes. Stripe and
bookipay were both unreadable, so **the honest statement is that unpaid invoices
were not checked** — not that none exist.

## Watching

- **PR #1 is open from `claude/claude-md-docs-jjveuq`**, the branch T-31
  declared superseded, targeting `dd84/main`. Merging it would reinstate the
  retired operating record and the 241-file Ledger tree. Two more PRs (#4, #5)
  are also open against `dd84/main`, a branch that is neither the default nor
  this one → **T-35**.
- **The venture registry's money is 66 days stale.** Every revenue figure in
  `ventures.md` was verified 2026-08-03, past the 30-day re-check rule in
  CLAUDE.md §5, and **cannot be re-verified from this session** — the two
  systems holding it are the two that were unreachable → **T-36** covers
  establishing a readable path.

## Corrections to the register, made this run

Reconciliation found the register contradicting the approvals log and itself.
Recorded rather than silently fixed:

1. **T-11 read "Awaiting Approval · A-05 pending". A-05 was APPROVED
   2026-08-10** and its result block records the work already satisfied on
   inspection. Status corrected to **Blocked**; what remains is test-mode keys
   and the missing webhook, both Ledger scope.
2. **T-13 read "Awaiting Approval · A-06 pending". A-06 was APPROVED
   2026-08-10.** Status corrected to **Blocked** — it waits on the owner
   engaging counsel, not on a decision.
3. **T-23's summary row said Blocked; its own detail said In Verification.**
   Detail is later and controlling; summary corrected.
4. **T-29's summary row said Partly Done; its detail says Blocked (on owner),
   re-confirmed today.** Summary corrected.
5. **T-32 was missing from the summary table entirely**, and the counts line was
   wrong in two places — it read "2 Awaiting Approval" where the table showed
   three. Both fixed.

These five had been true for up to 59 days. A register that disagrees with its
own approval log is the failure `docs/ops/` exists to prevent, and it was found
by reading both rather than by trusting the summary.

## Not checked this run

| Source               | Reason                                                                                                                                                                             |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Stripe**           | No Stripe MCP server in this session. Confirmed by tool search across the loaded servers, not inferred from a failed call.                                                         |
| **bookipay**         | No API access exists, by design. Recorded in `ventures.md`.                                                                                                                        |
| **Superhuman Mail**  | Requires OAuth authorization; this session is non-interactive and cannot run the flow. Gmail covered the mailbox instead.                                                          |
| **Unpaid invoices**  | Not checked — depends on Stripe and bookipay, both above. Unknown, not zero.                                                                                                       |
| **Disputes**         | Not checked for Stripe. PayPal disputes were not read either; with zero PayPal transactions in 31 days there was nothing to dispute, which is an inference and is labelled as one. |
| GitHub Actions       | Read and genuinely empty: 0 workflow runs on `claude/claude-md-docs-cqvhy6`, because the branch carries no `.github/workflows` at all.                                             |
| `dd84tuning.com`     | Blocked by this environment's network egress proxy; no Manus connector. The highest-value unknown in `ventures.md`, unchanged.                                                     |
| Gmail, beyond 2 days | 25 threads read of an estimated 201 in the inbox. The window was deliberate; older unanswered mail was not examined.                                                               |
