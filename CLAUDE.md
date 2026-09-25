# CLAUDE.md

Guidance for AI assistants working in this repository.

---

## 0. What this repository is

**The DD84 agent platform.** Two agents — Torque (operations) and Rev (marketing
and revenue) — their specifications, their definitions, and the operating record
they write to. It is markdown and configuration. **There is no application here,
nothing to build, and nothing to deploy.**

Down Dirty 84 LLC is an automotive performance-tuning business: ECU and EFI
calibration, diagnostics, PCM services, digital tuning tools and merchandise.
`docs/agents/ventures.md` is the verified business context and is the file to
read before making any claim about the business.

### It used to hold something else

This repository was where the **Georgia Opportunity Ledger** — a separate
business, a subscription intelligence platform for Georgia commercial property
and funding — was originally built. That application now lives in
**`downdirty84llc-creator/georgia-opportunity-ledger`** on `main`, which is the
only maintained copy.

**The Ledger source tree was deleted from this branch on 2026-09-25.** It had
fallen behind the real one — no attachment scanner, no super-administrator MFA
reset, four fewer migrations — and a stale copy that still looks like an
application is a trap. Before deleting it, every file was compared against the
canonical repository: the six recovered migrations differ only inside
`COMMENT ON` string literals, with identical SQL, and the two security-hardening
ones are byte-identical once comments are stripped. Nothing was lost. The
evidence is in `docs/ops/OPERATING-LOG.md` OL-0017.

> **The repository's default branch still carries the old Ledger copy.**
> `claude/georgia-opportunity-ledger-kfpt4c` is the default and cannot be
> deleted while it holds that position, so a visitor landing on the repository
> root still sees a Next.js application. Only this branch is clean. Changing the
> default branch is an owner action — see `docs/ops/` T-29.

**Do not push Ledger code here, and do not push DD84 material there.** The two
businesses are separate and the separation is deliberate. The Ledger
repository's own `CLAUDE.md` says the same thing from the other side.

---

## 1. Layout

```
docs/
  DD84-OPERATIONS-AGENT.md   Torque's owner-approved specification
  DD84-GROWTH-AGENT.md       Rev's specification
  agents/
    ventures.md              THE VENTURE REGISTRY — verified business facts
    README.md                How Rev fits together
  ops/                       Torque's control plane
    TASK-REGISTER.md         The live register of operational work
    APPROVALS.md             Every approval packet, its response and result
    OPERATING-LOG.md         Append-only execution log
    briefs/                  Dated routine output
  growth/                    Rev's record: registers, campaign kits
    briefs/
.claude/
  agents/torque.md, rev.md   Agent definitions
  commands/dd84-*.md         Torque's six routines
  skills/rev-*/SKILL.md      Rev's two skills
  settings.json              Permissions: reads run, mutations ask
```

There is no `package.json`. Format markdown with `npx prettier --write` if you
change it; `.prettierrc` is kept for that reason alone.

**`docs/growth/` and `ventures.md` both discuss the Ledger as a _business_.**
That is correct and is not stray Ledger material — Rev tracks both ventures
commercially. What does not belong here is Ledger _code_.

---

## 2. Two agents, two ledgers

**Torque** — operations. Daily brief, inbox intake, cash review, opportunity
scan, follow-up, site monitor. Record: `docs/ops/`. Routines:
`.claude/commands/dd84-*`.

**Rev** — marketing and revenue. Growth discovery, offers, campaigns, funnel and
storefront work. Record: `docs/growth/`. Runs on demand (`@rev`,
`/rev-discovery`, `/rev-daily-brief`); it has no schedule, its weekly brief
having been retired as duplicative of Torque's daily one.

**Read across the two records freely; never write across them.** `docs/ops/` is
what was operated, `docs/growth/` is what was proposed. Merging them loses
exactly the distinction that makes either useful.

Both agents stop at an approval gate before anything that spends money,
publishes, or reaches a customer.

---

## 3. The scheduled Routines — and why they have never worked

Four Routines fire against this repository and branch:

| Routine                              | Schedule           |
| ------------------------------------ | ------------------ |
| DD84 Inbox and Lead Intake           | Weekdays 10:20 UTC |
| DD84 Daily Command Brief             | Weekdays 10:50 UTC |
| DD84 Weekly Cash and Revenue Review  | Fridays 11:10 UTC  |
| DD84 Weekly Georgia Opportunity Scan | Mondays 11:25 UTC  |

**None of them has ever committed a brief.** `docs/ops/briefs/` holds nothing
but its README. They fire on schedule, report `SUCCEEDED`, produce a brief-sized
body of work — one sampled run spent $1.77 and 22,888 output tokens — and it
dies with the session, because **the fired sessions are created with no
repository attached**. Diagnosed in `docs/ops/` T-27 and OL-0012. The fix is
approval **A-10** and needs the claude.ai Routines UI, which no tool in a
session can reach.

**Treat the cadence above as scheduled, not as coverage.** Nothing in
`docs/ops/briefs/` means nothing was found.

If you move this platform, **the four Routine prompts are part of the move.**
They were left pointing at the Ledger's repository for a week in September after
the consolidation was reversed — see OL-0014, which is the cautionary tale.

---

## 4. Torque — the operating protocol

`docs/DD84-OPERATIONS-AGENT.md` is the full owner-approved specification. Torque
is precise, dependable, technical, action-oriented: a shop foreman who plans the
job, confirms approval, creates the tasks, then executes them in order.

> **DISCOVER → VALIDATE → ORGANIZE → PLAN → GET APPROVAL → EXECUTE → VERIFY →
> DOCUMENT → FOLLOW UP**

- **Automatic without being uncontrolled.** Research, analysis, planning, task
  creation, drafting and local edits need no approval. Crossing a boundary does.
- **Approval boundaries** (classes C–G): sending customer or external
  communication, publishing, changing live pricing, any financial action, and
  changing production websites, accounts, integrations, permissions or customer
  data. In practice here: pushing to any branch but the designated one, opening
  a pull request, touching the other repository, or anything that reaches a
  customer.
- **Never stop at a recommendation once approved.** If approval is given and the
  tools can do the work, do the work. If a tool blocks you, say exactly what was
  not completed and hand back the smallest manual package that finishes it,
  clearly marked as not executed.
- **Verify in the destination.** Do not assume a tool succeeded because it
  returned. Check the thing itself.
- **Never fabricate** completion, confirmations, approvals, results or file
  states. Uncertain completion stays _In Verification_, never _Done_.
- **Do not silently expand scope.** Cost, risk, deadline or customer-facing
  variance goes back for approval.
- **Protect secrets and proprietary material.** Credentials, customer data, tune
  files, bench pinouts and internal procedures never go into commit messages,
  public content or artifacts.

Approvals use the spec's packet format, not a vague question: decision requested
· business objective · source and context · recommended plan · alternatives ·
cost and cash impact · risks and safeguards · systems affected · customer/public
impact · success test · **APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**.

| Command                  | Purpose                                                    |
| ------------------------ | ---------------------------------------------------------- |
| `/dd84-daily-brief`      | Appointments, money moved, overdue work, risks, decisions  |
| `/dd84-inbox-intake`     | Email into leads, tasks and drafts — drafts only           |
| `/dd84-followup`         | Quotes, deposits, waiting customers, reviews, referrals    |
| `/dd84-cash-review`      | Revenue, pipeline, receivables, margin, upcoming spend     |
| `/dd84-opportunity-scan` | Find, validate, score and rank Georgia opportunities       |
| `/dd84-site-monitor`     | Pages, forms, uploads, products, payment links, fulfilment |

All six are Class A: they observe, calculate, draft and report, and none sends,
publishes, charges or changes a live system. That is what makes them safe to run
unattended.

---

## 5. The rules that are easiest to lose

**A task is Done only when `OPERATING-LOG.md` carries evidence.** Otherwise it
is In Verification. A commit hash, a command's real output, a figure read from a
live system — not an assertion that it worked.

**A missing connector degrades a section to "not available this run". It never
becomes an estimate.** Unknown is not zero, and a number without a source is a
defect.

**Ranges stay ranges.** Never present a midpoint as a figure.

**Never fabricate a customer, review, dyno figure, result or endorsement.** DD84
has three paying customers and no testimonial library; inventing one is
disqualifying.

**Never guarantee a power figure or a result**, never market emissions-equipment
defeat, and stop and escalate on any safety-critical fault before publishing
anything.

**Corrections are the deliverable, not an embarrassment.** Every register here
carries the claims that turned out wrong, struck through with the reasoning that
drove them. Read those first — they are the most useful part of the record.

**Registry figures carry a verification date.** Anything older than 30 days gets
re-checked against the live system before it is quoted. **The live system always
beats the document, including this one.**

---

## 6. Git

Work on `claude/claude-md-docs-cqvhy6`; push with
`git push -u origin claude/claude-md-docs-cqvhy6`. Do not open a pull request
unless asked. Do not push to the default branch, which still holds the retired
Ledger copy.

Commit messages describe what changed and why, in plain prose. Say what a change
cost or risked, and record the alternative that was rejected.
