# Margin Calculation

**Version:** 1.0.0
**Used by:** S03 Quote Builder, S10 Finance and KPI Controller

---

## Standard job margin formula

```
  Collected revenue
- payment processing fees
- software credits / licenses consumed
- direct parts and shipping
- direct subcontractor cost
- travel cost (miles x internal cost rate + tolls)
- direct labor cost allocation
= contribution margin

contribution margin / collected revenue = contribution margin percentage
```

---

## Rules

- Use **collected** revenue, not invoiced revenue. An unpaid invoice has no margin yet.
- Every deduction must trace to a real cost record. An estimated cost is labeled as estimated in the output.
- If any input is unknown, the margin is **unknown**, not zero and not acceptable. Escalate rather than reporting a margin built on a guess.
- Travel cost uses the active travel policy rate and actual route distance. Never guess travel time or fee.
- Software credits consumed count against the job that consumed them, even when purchased in a bundle.

---

## Margin floor

- Floor value: `TBD — set during Days 1–3 of deployment`
- A quote projected below the floor is **Class C**: it is not sent, it becomes an approval packet stating the projected margin, the shortfall, and at least one alternative (different package, reduced scope, adjusted travel, or decline).
- A _completed_ job that lands below the floor is a margin exception and appears in the daily brief with its root cause.

---

## Related metrics

| Metric                | Definition                                               |
| --------------------- | -------------------------------------------------------- |
| Average order value   | Collected revenue / paid jobs                            |
| Contribution margin % | Per formula above                                        |
| Effective travel cost | Travel cost / collected revenue, tracked by service type |
| Credit burn           | Software credits consumed per job type, trended monthly  |

Service-level margin is reviewed monthly against the price book (`17-operating-cadence.md`).
