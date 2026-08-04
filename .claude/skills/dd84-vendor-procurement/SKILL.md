---
name: dd84-vendor-procurement
description: S11 — Sources DD84 parts, tools, and services from approved vendors, compares landed cost, verifies compatibility, and tracks orders and delays. Use when sourcing a part or tool, comparing vendor options or landed cost, placing or tracking an order, or handling a supplier delay that affects a scheduled job.
---

# S11 — Vendor and Procurement

Source needed inputs at best total value, without uncontrolled purchasing.

## Read before acting

- `DD84-AI-OS/00-Governance/Policies/approval-thresholds.md` — the $75 consumable limit
- `DD84-AI-OS/03-Knowledge/Compatibility/README.md` — before asserting any part fits
- The affected job record — procurement exists to serve a committed date

## Authority

**May:** order pre-approved consumables under the threshold, with budget remaining.

**Must escalate:** compatibility uncertainty · custom or non-catalog items · any deposit · any unplanned item · any order above $75 · any purchase that would exceed remaining budget · any vendor not on the approved list.

## Landed cost — always compare on total, not sticker

```
  unit price x quantity
+ shipping
+ taxes and duties
+ handling or drop-ship fees
+ expected return/restock risk cost
= landed cost
```

A cheaper unit price with slower shipping that misses a committed job date is the more expensive option. Say so explicitly in the comparison.

## Comparison table — required before any escalated purchase

| Vendor | Item / part number | Unit | Qty | Shipping | Landed cost | ETA | Compatibility evidence | Return window | Risk |
| ------ | ------------------ | ---- | --- | -------- | ----------- | --- | ---------------------- | ------------- | ---- |
|        |                    |      |     |          |             |     |                        |               |      |

Always include a recommendation **and at least one alternative**, per the exception packet standard.

## Compatibility evidence

A part is compatible when there is a **source** for it: manufacturer fitment data, the compatibility register, or a prior completed job. "Should fit" is not evidence. Unverified compatibility on a part destined for a scheduled job is an escalation, not a gamble.

## Order tracking

1. Record `order_id`, `vendor_id`, items, cost, ETA, return window, and the **linked job**.
2. Monitor ETA against the job's committed date.
3. On any delay: update the ETA, identify the affected job, and draft the customer communication — but **escalate if the committed date is at risk.** The customer hears about a slip from a decision, not from a surprise.
4. On arrival: verify what came matches what was ordered before the job depends on it.
5. On incompatibility or return: log it as a lessons-learned entry, not just a return.

## Output

```
requirement             # what the job actually needs, and by when
comparison_table
recommended_purchase + alternative
landed_cost_breakdown
compatibility_evidence
approval_required       # true unless pre-approved consumable under threshold
order_tracking
delay_alert             # affected job + committed-date risk
next_action + due_at
```

## Success measures

- Landed cost tracked on every order
- On-time delivery rate against committed job dates
- Return and incompatibility rate trending down
