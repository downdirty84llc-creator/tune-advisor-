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

> **Known limitation: the Routine has no connectors.** It was created from a
> session that could not pass its MCP grants through, so the fired session runs
> **without** the Shopify, Stripe and Supabase tools. It can read the repository
> and compare records, but **it cannot pull live sales, session or charge data**
> — which is most of the value.
>
> **The fix:** recreate the Routine from the claude.ai Routines UI, or from a
> session that holds those connectors, so the grant is stored with it. Until
> then, treat the weekly brief as a repository digest rather than a live report,
> and run `/rev-daily-brief` by hand when you want real numbers.

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
