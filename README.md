# DD84 agent platform

The operating system for **Down Dirty 84 LLC**'s two agents — Torque and Rev —
and the record they write to. Markdown and configuration. There is no
application here, nothing to build, nothing to deploy.

DD84 is an automotive performance-tuning business: ECU and EFI calibration,
diagnostics, PCM services, digital tuning tools and merchandise.

> ### The Georgia Opportunity Ledger is no longer here
>
> That application — a separate business — was originally built in this
> repository and now lives in
> [`georgia-opportunity-ledger`](https://github.com/downdirty84llc-creator/georgia-opportunity-ledger)
> on `main`. **Its source tree was deleted from this branch on 2026-09-25**
> after every file was compared against the canonical copy; nothing was lost.
>
> **The repository's default branch still holds the old copy.** Only this branch
> (`claude/claude-md-docs-cqvhy6`) is clean, so the repository's front page
> still shows a Next.js application. That is a pending owner action, not an
> oversight.

---

## The two agents

|               | **Torque**                         | **Rev**                                      |
| ------------- | ---------------------------------- | -------------------------------------------- |
| Remit         | Operations                         | Marketing and revenue                        |
| Specification | `docs/DD84-OPERATIONS-AGENT.md`    | `docs/DD84-GROWTH-AGENT.md`                  |
| Definition    | `.claude/agents/torque.md`         | `.claude/agents/rev.md`                      |
| Record        | `docs/ops/`                        | `docs/growth/`                               |
| Invoked by    | `/dd84-*` commands, four schedules | `@rev`, `/rev-discovery`, `/rev-daily-brief` |

**Read across the two records freely; never write across them.** `docs/ops/` is
what was operated; `docs/growth/` is what was proposed.

Both stop at an approval gate before anything that spends money, publishes, or
reaches a customer. `.claude/settings.json` enforces it mechanically — reads run
unattended, anything that costs money or reaches a customer asks first — and the
agent definitions enforce it again in instructions.

## Start here

1. **`docs/agents/ventures.md`** — the verified business context. Read it before
   making any claim about the business. Every figure carries a verification
   date; anything older than 30 days gets re-checked against the live system.
2. **`docs/ops/TASK-REGISTER.md`** — what is outstanding and who it waits on.
3. **`docs/ops/APPROVALS.md`** — every packet, its response, its limits and what
   actually happened.
4. **`docs/ops/OPERATING-LOG.md`** — the append-only execution log. A task is
   Done only when this file carries evidence.

## The scheduled routines do not work yet

Four Routines fire on a weekday and weekly cadence. **None has ever committed a
brief.** They run, report success, produce real work, and lose it — the fired
sessions are created with no repository attached. Diagnosed in `docs/ops/` T-27;
the fix is approval **A-10** and needs a person in the claude.ai Routines UI.

Treat the schedule as scheduled, not as coverage. An empty `docs/ops/briefs/`
does not mean nothing was found.

## What this platform is for

Finding revenue and telling the truth about it. In practice that has meant
discovering that a product could not take payment at all, that DD84's revenue
stopped eleven months ago, that a funnel event had never once fired, and that a
dashboard was overstating recurring revenue by about 17% per annual subscriber.
None of those were in the brief that started the work.

**Corrections are the deliverable, not an embarrassment.** Every register here
carries the claims that turned out wrong, struck through with the reasoning that
drove them. Read those first.
