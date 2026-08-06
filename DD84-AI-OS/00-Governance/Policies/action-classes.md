# Action Classes — The 90/10 Control Boundary

**Policy ID:** GOV-001
**Version:** 1.0.0
**Approver:** Owner (Down Dirty 84 LLC)
**Status:** Draft — requires owner signature on `00-Governance/Approvals/deployment-authorization.md`

Every proposed action must be classified into exactly one class **before** it is taken.
If a skill cannot confidently classify an action, it defaults to **Class C (approval required)**.

---

## The four classes

| Class                     | Meaning                                                           | AI authority                                                     | Examples                                                                                                             |
| ------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **A — Autonomous**        | Low-risk, reversible, policy-defined                              | Execute and log                                                  | Create/update records, send acknowledgments, reminders, status checks, internal reports                              |
| **B — Guardrailed**       | Moderate impact but policy-defined                                | Execute within fixed limits; escalate exceptions                 | Approved-price quotes, standard scheduling, standard follow-ups, approved social content                             |
| **C — Approval required** | Financial, reputational, technical, or contractual impact         | Prepare a complete action packet and **wait** for owner approval | Discounts, refunds, public complaint response, calibration release, purchase above threshold                         |
| **D — Human only**        | Legally or physically restricted; irreversible or safety-critical | **No execution.** Support the human only                         | Sign contracts, give legal advice, test drive, install parts, release an unsafe vehicle, move money between accounts |

---

## Classification test

Ask, in order. The first "yes" sets the class.

1. **Is it legally restricted, physically performed, or irreversible with safety consequences?** → **D**
2. **Does it move money, make a public claim, change a price, release a calibration, or delete data?** → **C**
3. **Does it exceed a published threshold in `approval-thresholds.md`?** → **C**
4. **Is it defined by an approved policy, template, or price book, with a known limit?** → **B**
5. **Is it internal, reversible, and record-keeping in nature?** → **A**
6. **Anything else / uncertain** → **C**

---

## Hard rules

- No skill may approve its own exception.
- No skill may reclassify an action downward (C → B, B → A) to avoid an approval gate.
- The Quality, Safety, and Risk skill (S07) may block any action in any class. A block is not overridable by another skill — only by the owner, in writing, in the job record.
- An approval is immutable once executed. Changing an approved action requires a **new** approval record.
- Uncertainty is not permission. When a tool result is ambiguous, treat the action as unexecuted and raise an exception task.

---

## Core principle

> **Automate preparation and execution. Escalate accountability.**
> AI may recommend; the owner remains the legal and technical principal.
