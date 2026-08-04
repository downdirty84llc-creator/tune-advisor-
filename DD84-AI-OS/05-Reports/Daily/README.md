# Daily Owner Brief

Generated at the start of each business day by S01, with finance blocks from S10.

**Design goal:** the owner can run the business from this one page. If a decision is not in it, it is not needed today. If a decision is in it, it is genuinely the owner's.

---

## Format

```
DD84 DAILY BRIEF — {date}                        Mode: {Normal | Degraded | Manual-only | Emergency stop}

━━━ DECISIONS NEEDED ({n}) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Only approvals. Each with: amount, deadline, recommendation, risk, exact next action.

  1. [{risk}] {one-sentence decision}
     {customer} · ${amount} · due {deadline}
     Recommend: {recommendation}    Alternative: {alternative}
     If no decision: {fallback}
     → {link to full packet}

━━━ REVENUE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Collected today: ${x}    Deposits: ${x}    Pending invoices: ${x} ({n})
Failed payments: {n}     Refunds/disputes: {n}

━━━ PIPELINE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
New leads: {n}    Quotes sent: {n}    Quotes accepted: {n}
Stalled high-value opportunities: {list with age and next action}

━━━ OPERATIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Today's appointments: {list with readiness status}
Readiness blocks: {job} — {exact blocker} — {correction required}
Overdue jobs: {list}
File delivery queue: {n} awaiting owner release

━━━ CUSTOMERS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Negative sentiment: {list}
Safety concerns: {list}
Missed promises: {list}
VIP / partner issues: {list}

━━━ CASH AND SPEND ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Available operating cash: ${x}  (as of {freshness timestamp})
Planned purchases: {list}    Budget exceptions: {list}

━━━ TOP THREE ACTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The highest-value things only the owner can do today.
  1. {action}
  2. {action}
  3. {action}

━━━ SYSTEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Automation failures: {n}    Unassigned events > 15 min: {n}
Data source freshness: {any stale source, named}
```

---

## Rules

- **Decisions needed** contains only genuine approvals. Informational items belong in their own block.
- Every decision line is self-contained — the owner should not need to open another system to decide.
- Stale data is labeled stale. A brief that hides a broken integration is worse than no brief.
- If **Decisions needed** is routinely long, that is a system defect: the thresholds are too tight or a workflow is broken. S12 investigates.

## End-of-day companion

Open loops · overdue tasks · unmatched payments · tomorrow's readiness · critical blockers to clear tonight.
