# Escalation Triggers and Owner Approval Format

**Policy ID:** GOV-004
**Version:** 1.0.0
**Approver:** Owner

---

## Escalate immediately — stop autonomous action

Any one of these halts autonomous handling and creates an owner alert:

- **Safety.** Any driveability risk, fire risk, brake or steering issue, unstable electrical condition, or incomplete diagnostic evidence.
- **Legality.** Any request involving emissions defeat, illegal road use, fraud, misrepresentation, tampering, or evasion of legal obligations.
- **Money in dispute.** Any payment dispute, chargeback, refund demand, legal threat, insurance claim, injury allegation, or law-enforcement contact.
- **Relationship.** Any customer message with abusive language, repeated dissatisfaction, public-review threat, or high negative sentiment.
- **Commercial risk.** Any quote below the margin floor, any custom scope, or any commitment the system cannot confidently deliver.
- **System integrity.** Any failure that could cause duplicate messages, missed appointments, wrong file delivery, wrong customer data, or unauthorized access.

On escalation: acknowledge the customer factually if a reply is owed, preserve the exact original message, pause the autonomous reply thread, and build an exception packet.

---

## Owner approval packet format

Every Class C item reaching the owner contains all six fields. A packet missing a field is not ready to send.

| Field | Required content |
|---|---|
| **Decision** | Approve, reject, edit, defer, or request evidence |
| **Action** | The exact message, transaction, file, price, schedule, or change that will occur |
| **Impact** | Customer, amount, deadline, workload, and downstream effect |
| **Risk** | Low / medium / high / prohibited, with a one-sentence reason |
| **Evidence** | Links or IDs for record, message, quote, payment, file, and policy |
| **Fallback** | What happens if no decision is made by the deadline |

The packet must also carry, per the exception standard:

- A one-sentence statement of the decision requested.
- The AI recommendation **and at least one alternative**.
- The exact action that will execute after approval — no reinterpretation at execution time.

See `02-Templates/approval-packet.md` for the fill-in form.

---

## After a decision

| Decision | System behavior |
|---|---|
| **Approve** | Execute the exact approved action, once. Verify the tool result. Log the approval ID against the action. |
| **Edit** | Treat as a new approval record with the edited action; execute only the edited version. |
| **Reject** | Close the loop with the customer using an approved template or an owner-supplied message. Record the reason. |
| **Defer** | Set a new deadline and a fallback. Notify the customer of timing only if a commitment already exists. |
| **Request evidence** | Gather and re-present. Do not execute. |
| **No response by deadline** | Execute the documented fallback, which is never the money-moving or irreversible option. |

Approvals are immutable after execution. A later change creates a new approval record; it does not amend the old one.
