---
name: dd84-quote-builder
description: S03 — Builds policy-compliant DD84 quotes from the approved price book, with scope, exclusions, travel, deposit terms, and expiration. Use when a qualified lead needs an offer or estimate, when pricing a service or add-on, when calculating a travel fee, or when checking whether a proposed price clears the margin floor.
---

# S03 — Sales and Quote Builder

Produce policy-compliant quotes that are easy to approve, pay, and schedule.

## Read before acting

- `DD84-AI-OS/03-Knowledge/Price-Book/README.md` — **the only source of prices.** A price not in this file does not exist.
- `DD84-AI-OS/03-Knowledge/Service-Catalog/README.md` — scope, inclusions, exclusions, prerequisites
- `DD84-AI-OS/03-Knowledge/margin-formula.md` — the margin check and the floor
- `DD84-AI-OS/03-Knowledge/Compatibility/README.md` — before any compatibility statement
- `DD84-AI-OS/00-Governance/Policies/approval-thresholds.md` — discount and exception limits

> **Current state:** the price book is not yet approved. Until it is, every quote is an approval packet, not an autonomous send.

## Process

1. Confirm the opportunity is qualified and the record is complete enough to price.
2. Select the approved package and add-ons from the current price book. **Never invent a discount, horsepower result, completion date, or compatibility claim.**
3. Calculate travel using the active travel policy and actual route distance. Never guess travel time or fee.
4. Run the margin check. Below the floor → approval packet, not a send.
5. Present the **best-fit package first**, then relevant alternatives or add-ons. Good–better–best where the catalog supports it.
6. State scope, deliverables, customer prerequisites, exclusions, expiration, payment and deposit terms, turnaround language, and reschedule policy.
7. Provide **one** payment path and **one** booking path appropriate to the service.
8. Schedule the follow-up sequence: 24 hours, 72 hours, 7 days — stopping immediately on reply, decline, payment, or opt-out.
9. On expiration, create a refresh task. Never silently honor old pricing.

## Escalate instead of sending

- Custom fabrication or non-catalog scope
- Unclear diagnostic scope, or unknown labor
- Any discount beyond 5% on a published promotion, or any stacking
- Projected margin below the floor
- Platform status **Unknown** or **Limited** in the compatibility register
- Any commitment the business cannot confidently deliver

The packet states the projected margin, the shortfall or exception, the recommendation, and at least one alternative — different package, reduced scope, adjusted travel, or a clean decline.

## Quote must contain

| Section | Requirement |
|---|---|
| Scope | Exactly what is done, from the service catalog |
| Deliverables | Files, revisions, support window, delivery method |
| Exclusions | What is explicitly not included |
| Prerequisites | What the customer must supply or do, and by when |
| Price | Package + add-ons + travel + tax, itemized |
| Deposit and terms | Amount, when due, what it reserves |
| Turnaround | Range with conditions, never a guarantee |
| Expiration | Date, with a stated consequence |
| Next step | One payment path, one booking path |

## Output

```
recommended_offer
quote_line_items
scope / exclusions / prerequisites
travel_calculation      # distance, rate, fee — show the math
gross_margin_estimate
risk_flags
approval_status         # Not required | Pending | Approved | ...
customer_message
expiration_date
next_follow_up + due_at
```

## Success measures

- Quote cycle under **15 minutes** for standard work; same day for custom
- Gross margin floor preserved on every sent quote
- Follow-up completion above **95%**
