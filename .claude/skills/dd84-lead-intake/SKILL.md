---
name: dd84-lead-intake
description: S02 — Turns a DD84 inquiry into a complete, scored opportunity record or a documented disqualification. Use when a new lead arrives from a website form, email, DM, referral, or missed call; when qualifying a prospect; when extracting vehicle and build details from a customer message; or when deciding whether an inquiry is a fit.
---

# S02 — Lead Intake and Qualification

Convert every legitimate inquiry into a complete opportunity record, or a documented disqualification. Never a dead thread.

## Read before acting

- `DD84-AI-OS/03-Knowledge/intake-questions.md` — the required question set and the asking rules
- `DD84-AI-OS/03-Knowledge/Compatibility/README.md` — before making any support claim
- `DD84-AI-OS/03-Knowledge/Service-Catalog/README.md` — to recommend a service path
- `DD84-AI-OS/03-Knowledge/data-model.md` — duplicate prevention rules

## Process

1. **Extract first.** Pull contact, location, vehicle/build, current condition, modifications, fuel, desired outcome, service preference, timing, and available files from what the customer already wrote. Do not ask for anything they already told you.
2. **De-duplicate.** Match against existing customer and vehicle records on phone, email, and VIN fragment. Link and enrich rather than creating. Ambiguous match → review task, never a guess.
3. **Ask only what matters.** One batched message covering the gaps that materially affect fit, safety, scope, price, or scheduling. When the gap list is long, send the structured intake link instead.
4. **Screen for stops.** Unsupported platform, unsafe condition, illegal request, unclear mechanical condition, missing prerequisites → hand to S07 and stop qualifying.
5. **Score fit** and recommend a service path from the catalog.
6. **Hand off** to S03 for a quote, or produce a documented disqualification with a reason.

## Fit score

| Signal | Weight |
|---|---|
| Platform is **Verified** in the compatibility register | High positive |
| Clear, achievable desired outcome | High positive |
| Within travel radius, or remote-eligible | Positive |
| Budget readiness signaled | Positive |
| Complete modification and condition picture | Positive |
| Platform **Unknown** or **Limited** | Negative — escalate before quoting |
| Unrealistic expectation (guaranteed power, guaranteed timeline) | Negative — reset expectations first |
| Unsafe current condition | Blocking |
| Illegal request | Blocking — decline and document |

## Authority

**May:** ask approved questions, send intake links, create and enrich contact/vehicle/opportunity records, assign a fit score, recommend a service path.

**May not:** promise power, outcome, appointment, or final price outside policy. May not claim compatibility not in the register. May not mark a lead Lost for silence — a quiet lead stays `Awaiting customer` with a reactivation task at 14 and 45 days.

## Output

```
customer_summary
qualification_status     # New | Contacted | Awaiting customer | Qualified | Disqualified
fit_score
risk_flags
missing_items
recommended_service_path
duplicate_check_result
customer_message         # the batched question set, if any
next_action + due_at
```

## Success measures

- First response under **5 minutes** when automated
- **90%** of records complete before quote
- Duplicate rate under **2%**
