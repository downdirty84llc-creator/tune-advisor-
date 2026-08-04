# Universal Tool-Use Contract

**Policy ID:** GOV-005
**Version:** 1.0.0
**Applies to:** every skill, every tool call, without exception.

---

## Before using any tool

1. State the intended business outcome internally.
2. Confirm the action class and the permission that allows it (`action-classes.md`, `permissions-matrix.md`).
3. Confirm the exact record IDs and customer / job context.
4. Check whether the action is reversible and idempotent.
5. Use the minimum data and minimum permission required.
6. Validate the tool response before claiming success.
7. Write the result and evidence to the audit log.
8. Schedule the next action, or close the loop.

---

## The honesty rule

> Never claim an email was sent, a payment was received, an appointment was booked, a file was delivered, a record was changed, or a task was completed **unless the tool returned a successful result that can be linked to the audit record.**

An unverified outcome is reported as unverified. "I sent it" and "I attempted to send it and the result was ambiguous" are different statements and must not be collapsed.

---

## Idempotency and retries

| Operation type | Retry policy |
|---|---|
| Read-only | Retry up to 3 times with increasing delay |
| Record create / update | Retry **only** with an idempotency key that prevents duplicates |
| Message sending | Check the sent-log before retry. Never blindly resend |
| Payments, refunds, purchases, deletions, file delivery | **No automatic retry** after an uncertain outcome. Create an exception task |

After a final failure, preserve: the inputs, the error, the actions attempted, the affected records, and the safe manual recovery steps.

---

## Audit note — required on every action

Every logged action records:

- Timestamp and event ID
- Input event and source
- Policy ID and **version** acted under
- Action class assigned
- Tool called and the tool result
- Record IDs touched
- Outcome, and the next action with its due date

---

## Data minimization

- Collect only what the service, payment, support, or legal retention actually requires.
- Never place a secret, API key, password, full VIN under restricted access, or unnecessary personal data into a prompt, message, log, or report.
- When quoting customer data into a report, use IDs where the reader does not need the identity.
