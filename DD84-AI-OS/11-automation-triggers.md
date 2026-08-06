# Automation Trigger Library

Every automation must have: **trigger, conditions, action, owner, failure path, retry policy, logging, and test case.** An automation missing any of these does not go to production.

---

## Trigger table

| Trigger                         | Primary action                                                | Critical guardrail                                                  |
| ------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| **New form / email / DM**       | Create or merge lead; extract details; reply; set next action | Duplicate match; spam filter; unsupported request                   |
| **Missed call**                 | Send acknowledgment and intake link; create callback task     | Do not message opt-outs or blocked numbers                          |
| **Quote created**               | Validate price and scope; send or request approval            | Block custom scope or below-margin quote                            |
| **Quote viewed / no reply 24h** | Send first follow-up                                          | Stop if replied, declined, paid, or opted out                       |
| **Payment completed**           | Match invoice; create/update job; schedule next action        | Alert on unmatched or wrong amount                                  |
| **Payment failed**              | Send approved retry message; flag job                         | No work or file release until policy satisfied                      |
| **Appointment booked**          | Send confirmation, preparation list, calendar event           | Block conflicts and missing deposit                                 |
| **24h before appointment**      | Send reminder and readiness confirmation                      | Escalate no-confirmation on a mobile trip                           |
| **File uploaded**               | Validate naming/type/completeness; link to job                | Quarantine unknown or wrong-customer files                          |
| **Job status changed**          | Notify customer using approved template; schedule next step   | No completion notice before the release gate                        |
| **Owner approves file**         | Deliver the exact approved version and instructions           | Checksum and customer/job match required                            |
| **Job completed**               | Send receipt, aftercare, review request, referral prompt      | Delay the review request if any issue is unresolved                 |
| **Negative sentiment detected** | Pause autonomous replies; create escalation packet            | Immediate alert for safety or legal threats                         |
| **Invoice overdue**             | Run the age-based reminder workflow                           | Stop at the policy limit and escalate                               |
| **Product abandoned checkout**  | Send one or two policy-approved reminders                     | Respect consent and frequency limits                                |
| **Vendor order delayed**        | Update ETA, affected job, draft customer communication        | Escalate if a committed date is at risk                             |
| **Daily start**                 | Generate owner brief and readiness report                     | Alert on missing data sources                                       |
| **Weekly close**                | Generate scorecard, cash view, pipeline, improvement proposal | Mark source freshness and discrepancies                             |
| **Automation failure**          | Retry safe actions; log error; create manual task             | **Never** retry money movement, deletion, or duplicate send blindly |

---

## Retry policy

| Operation                                                  | Policy                                                                      |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Read-only**                                              | Retry up to 3 times with increasing delay                                   |
| **Record create / update**                                 | Retry **only** with an idempotency key that prevents duplicates             |
| **Message sending**                                        | Check the sent-log before retry. **Never blindly resend**                   |
| **Payments, refunds, purchases, deletions, file delivery** | **No automatic retry** after an uncertain outcome. Create an exception task |

After a final failure, preserve: the inputs, the error, the actions attempted, the affected records, and safe manual recovery steps.

---

## Why duplicates are the top risk

The most common way an automated business damages a customer relationship is not a wrong answer — it is the **same message four times**, a **double charge**, or a **file sent to the wrong person**. Every write path needs an idempotency key, and every send path needs a sent-log check, before that path is allowed anywhere near a customer.

---

## Per-automation spec — fill one per trigger

```
Automation ID:     AUTO-XXX
Trigger:           {event}
Conditions:        {all must be true}
Action:            {exactly what happens}
Action class:      A | B | C | D
Owning skill:      S0X
Guardrail:         {what stops it}
Failure path:      {what happens on error}
Retry policy:      {from the table above}
Idempotency key:   {field or composite}
Logging:           {what gets written to the audit log}
Test case:         TEST-XXX
Manual fallback:   {how a human does this if the automation is down}
```
