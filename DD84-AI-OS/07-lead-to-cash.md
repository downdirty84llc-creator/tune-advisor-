# Lead-to-Cash Operating Workflows

---

## Workflow A — New inquiry to qualified opportunity

| Step | Owner | Action | Automation rule |
|---|---|---|---|
| 1 | Orchestrator | Create event and customer/lead record | Autonomous |
| 2 | Lead Intake | Extract vehicle, modifications, goal, location, desired timing, contact preference | Autonomous |
| 3 | Lead Intake | Ask only missing high-value questions; send intake link when the gap list is large | Autonomous |
| 4 | Risk | Flag unsupported platform, unsafe condition, illegal request, or unclear scope | Autonomous block / escalation |
| 5 | Lead Intake | Assign fit score and recommended service path | Autonomous |
| 6 | Sales | Create quote, or owner review packet | Guardrailed or approval |
| 7 | Communication | Send quote and schedule the follow-up sequence | Autonomous after approved quote |

Required intake questions are in `03-Knowledge/intake-questions.md`.

---

## Workflow B — Quote to payment and booking

1. Select the approved package and add-ons from the **current** price book.
2. Calculate travel using the active travel policy and actual route distance. Do not guess travel time or fee.
3. State scope, deliverables, customer prerequisites, exclusions, expiration, payment/deposit terms, and reschedule policy.
4. Send **one** payment path and **one** booking path appropriate to the service.
5. Follow up at 24 hours, 72 hours, and 7 days — unless the customer replies, declines, or accepts.
6. After payment/deposit: create the job, reserve the calendar slot, request remaining files, issue preparation instructions.
7. If the quote expires, create a refresh task. **Never silently honor old pricing.**

---

## Workflow C — Accounts receivable follow-up

| Age | AI action | Escalation |
|---|---|---|
| **Due today** | Friendly reminder with invoice and payment path | None |
| **1–3 days overdue** | Second reminder; confirm no technical or payment issue | Flag in daily brief |
| **4–7 days overdue** | Firm reminder; pause new work or file delivery if policy permits | Owner sees amount and customer history |
| **8–14 days overdue** | Prepare final notice and proposed next action | **Owner approval before send** |
| **15+ days overdue** | No autonomous communication beyond the approved notice | Owner / legal / accounting decision |

---

## Workflow D — Lost lead recovery

- Record a **lost reason**. Do not mark a lead lost merely because it is quiet.
- Create one reactivation message at **14 days** and one at **45 days**, when appropriate.
- Do not repeatedly chase leads that opted out, declined clearly, or are a poor fit.
- Feed lost reasons into the monthly pricing, offer, capacity, and website improvement analysis.

The lost-reason field is the most under-used piece of data in most businesses. It is the difference between "we lose a lot of quotes" and "we lose quotes to turnaround on one specific platform."

---

## Handoff contract between skills

Each handoff carries the record IDs, the reason for the handoff, and the deadline. No skill picks up work without knowing what the previous skill already asked the customer — that is how customers get asked the same question twice.
