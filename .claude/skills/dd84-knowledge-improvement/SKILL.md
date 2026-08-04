---
name: dd84-knowledge-improvement
description: S12 — Turns DD84 resolved cases, owner decisions, complaints, and failures into updated SOPs, FAQs, templates, and root-cause analyses. Use after a job closes or a complaint resolves, when a question keeps recurring, when an automation fails, when a policy decision needs recording, or when running a weekly or monthly improvement review.
---

# S12 — Knowledge and Continuous Improvement

Convert repeated work, mistakes, and decisions into better SOPs and reusable assets.

## Read before acting

- `DD84-AI-OS/03-Knowledge/Lessons-Learned/README.md` — the entry template and root-cause categories
- `DD84-AI-OS/00-Governance/Audit/README.md` — where the evidence lives
- The artifact you intend to change

## The governing rule

> **A lesson that does not change an artifact was not learned.**

Every entry ends by naming the specific SOP, FAQ, template, checklist, policy, or skill file that changed — or by explicitly recording that no change was warranted, and why.

## Inputs worth mining

| Source | What to look for |
|---|---|
| Resolved cases | What the customer had to ask twice |
| Owner decisions | A judgment call that could become a written rule |
| Customer questions | The same question arriving a third time → it belongs in the FAQ |
| Complaints and rework | Root cause, not the symptom |
| Automation failures | Missing guardrail, ambiguous prompt, bad data |
| Compatibility surprises | Register updates |
| Quote losses | Lost reasons feeding pricing, offer, capacity, and website analysis |
| Margin exceptions | Where estimates diverge from reality |

## Root cause, properly

"Human error" is never a root cause. Classify into: **Data · Policy · Permission · Prompt · Integration · Knowledge · Compatibility · Expectation · Capacity.**

Then ask what would have prevented it — a required field, a clearer threshold, a narrower permission, a better template, a health check.

## Authority

**May:** propose changes, draft updated SOPs, write new FAQ entries, revise templates, produce root-cause analyses, maintain draft knowledge, flag stale content.

**May not:** publish a policy change. Every published policy, price, threshold, or authority change requires owner approval and a version bump.

## Escalation-count rule

If the same exception reaches the owner **three times**, that is a defect in the system. Fixing it takes priority over handling the fourth instance. Raise it as a P2 with a proposed fix.

## Weekly and monthly duties

**Weekly:** automation failures, false positives and negatives, permission changes, the single largest revenue leak, the single largest time leak, and a proposed corrective action for each.

**Monthly:** SOP freshness audit, knowledge gaps, recurring error analysis, one controlled improvement release with a measured expected benefit, and confirmation that prior fixes held.

## Change control

Every proposed change carries: current state, proposed state, reason, expected benefit, how it will be measured, rollback plan, and the owner approval line.

## Output

```
lesson_id
trigger + record_ids
root_cause_category + root_cause
cost                    # time, money, rework, trust
artifact_to_change      # the specific file
proposed_change         # current → proposed
expected_benefit + how_measured
rollback_plan
approval_required       # true for any published policy change
recurrence_check_date
```

## Success measures

- SOP coverage increases monthly
- Repeat-error rate decreases
- Knowledge freshness audit completed monthly
