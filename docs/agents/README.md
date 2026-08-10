# Rev — the DD84 Marketing & Revenue agent

Rev is a working agent, not a document. This is how the pieces fit and how to
run it.

## The parts

| File                              | What it is                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------- |
| `docs/DD84-GROWTH-AGENT.md`       | The specification. Rev's constitution; §n references point here                                   |
| `docs/agents/ventures.md`         | **The venture registry.** Verified business facts, systems, pricing, restrictions, open questions |
| `.claude/agents/rev.md`           | The agent definition — voice, control loop, authority limits, prohibitions                        |
| `.claude/skills/rev-daily-brief/` | Daily operating brief (§26). **Read-only**                                                        |
| `.claude/skills/rev-discovery/`   | Full discovery pass → scored register + approval briefs                                           |
| `.claude/settings.json`           | Permissions. Reads run unattended; anything that spends, publishes or charges asks first          |
| `docs/growth/`                    | The record: registers, campaign kits, completion records                                          |
| `docs/growth/briefs/`             | Daily briefs                                                                                      |

## Running it

**Ask for it by name.** `@rev` or "get Rev to look at …" routes to the agent.

**Slash commands:**

```
/rev-daily-brief      # today's operating brief across ventures
/rev-discovery        # full discovery pass for a venture
```

**Unattended.** A Routine — _Rev — weekly growth brief (DD84)_,
`trig_014f6Hv1ccKeGHj8mZ59MB2v` — fires Mondays at 11:00 UTC (7am EDT) into a
fresh session, with push and email notification. It is read-only by design: it
can write a brief and commit it, and nothing else. An agent that runs while
nobody is watching should not be able to spend money or publish.

**Weekly, not daily, on purpose.** §26 specifies a daily operating brief. At the
current activity level — about one visitor a day and no orders — a daily brief
would say "nothing changed" almost every time, and the skill itself warns that
an inflated brief trains the owner to ignore it. Move it to daily the moment
there is real order flow.

> **Known limitation: the Routine has no connectors.** The fired session runs
> **without** Shopify, Stripe and Supabase, so it can read the repository and
> compare records but **cannot pull live sales, session or charge data** — which
> is most of the value.
>
> **Retried 2026-08-07 and confirmed unfixable from here.** Passing `connectors`
> to `create_trigger` returns _"the connectors parameter is not available for
> this organization"_. It is not a session-grant problem; the parameter is
> closed to this tool entirely.
>
> **It is fixable, and there is proof.** An older Routine on this account —
> _Weekly Georgia Opportunity Ledger summary_, `created_via: http_api` — does
> carry connectors (Canva, Gmail, Google Calendar, Google Drive, PayPal, Shopify,
> Stripe). Routines created through the **claude.ai Routines UI** hold their
> grants; ones created through this MCP tool do not.
>
> **The fix:** recreate the weekly brief from the claude.ai Routines UI. Until
> then it is a repository digest, and `/rev-daily-brief` run by hand is the way
> to get real numbers.

## Overlap with Torque — read before adding more automation

**There is a second agent system on this account**, created within minutes of
Rev and running on a different branch:

| Routine                              | Schedule              | Agent   |
| ------------------------------------ | --------------------- | ------- |
| DD84 Daily Command Brief             | Weekdays 10:50 UTC    | Torque  |
| DD84 Inbox and Lead Intake           | Weekdays 10:20 UTC    | Torque  |
| DD84 Weekly Cash and Revenue Review  | Fridays 11:10 UTC     | Torque  |
| DD84 Weekly Georgia Opportunity Scan | Mondays 11:25 UTC     | Torque  |
| **Rev — weekly growth brief**        | **Mondays 11:00 UTC** | **Rev** |

Torque is the _Operations Execution Agent_. It works on branch
`claude/claude-md-docs-jjveuq` with its own structure — `docs/ops/`,
`TASK-REGISTER.md`, `APPROVALS.md`, `OPERATING-LOG.md` — and its own class-based
authority model. Rev works on `claude/claude-md-docs-cqvhy6` with `docs/growth/`.

**They do not know about each other, and they overlap.** Torque's daily command
brief already reports money moved, approvals pending and priorities; Rev's
weekly brief reports much of the same. Rev's Monday 11:00 sits 25 minutes before
Torque's Monday scan.

This was not a deliberate design — Rev was built without knowledge of Torque.
**Before adding any further automation, decide whether these merge, divide by
remit, or one is retired.** Two agents writing overlapping briefs to two
branches will produce contradictory records, and the contradiction will not be
obvious until someone acts on the wrong one.

## The safety model, in one line

**Rev prepares everything and commits nothing outward.**

`.claude/settings.json` enforces the boundary mechanically — every read is
allowed, every write that costs money or reaches a customer is on `ask`. The
agent definition enforces it again in instructions. Two layers, because the
first one only covers tools that exist today.

What Rev may do alone: research, analyse, score, write briefs and copy, prepare
assets, update internal records, and change repository files.

What always needs a human: spending anything, changing a price, creating or
modifying a Stripe object, sending outreach, publishing to any channel,
committing partner compensation, issuing refunds.

## The loop

```
discover → validate → plan → REQUEST APPROVAL → execute → verify → operate → optimise → document
                                     ▲
                            the gate. always.
```

Approval is a gate, not a dead end (§5). Rev prepares the work so approval
immediately unlocks execution, and one approval covers everything needed to
finish that scope — no going back for permission on each caption.

## What Rev is for

Finding revenue and telling the truth about it. In practice that has meant
discovering that the Ledger could not take payment at all, that DD84 Tuning's
revenue stopped eleven months ago, and that a funnel event had never once fired.
None of those were in the brief that started the work.

**Corrections are the deliverable, not an embarrassment.** Every register
carries the claims that turned out wrong, struck through with the reasoning that
drove them. Read those first.

## Before trusting a number

Registry figures carry a verification date. Anything older than 30 days gets
re-checked against the live system before it is quoted. **The live system always
beats the document, including this one.**
