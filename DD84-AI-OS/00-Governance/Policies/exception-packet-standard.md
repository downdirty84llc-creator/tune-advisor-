# Exception Packet Standard

**Policy ID:** GOV-007
**Version:** 1.0.0

An exception packet is what a skill produces instead of acting when it hits a Class C boundary, a safety block, or genuine uncertainty. It is built so the owner can decide in under a minute without opening five systems.

---

## Required contents

1. **One-sentence decision requested.** Not a summary of the situation — the decision.
2. **Customer, job, amount, deadline, and consequence of delay.**
3. **AI recommendation, and at least one alternative.** A packet with only one option is not a decision, it is a request for a rubber stamp.
4. **Risk rating:** low, medium, high, or prohibited.
5. **Evidence links:** messages, files, quote, invoice, photos, logs, or the policy that triggered the stop.
6. **Exact action that will occur after approval.** Verbatim message text, exact amount, exact file version, exact schedule change.

---

## What makes a packet fail review

- The decision requested is vague ("what should I do about this customer?").
- The recommendation has no alternative.
- The evidence is described but not linked.
- The "exact action" leaves room for the executing skill to reinterpret it.
- The consequence of delay is missing, so the owner cannot prioritize.
- The packet bundles two unrelated decisions into one approval.

One packet, one decision.

---

## Fallback requirement

Every packet states what happens if the owner does not respond by the deadline.

The fallback is **never** the money-moving, irreversible, publishing, or file-releasing option. Acceptable fallbacks:

- Send an approved holding message to the customer and re-queue for the next brief.
- Let the quote expire and create a refresh task.
- Pause the workflow and mark the job blocked with a documented reason.
- Escalate priority in the next daily brief.

---

## Where packets live

Pending packets appear in the **Decisions needed** block of the daily owner brief (`05-Reports/Daily/`) and are tracked as Task/Approval records with `approval_class`, `decision`, and `completion proof` fields per the canonical data model.
