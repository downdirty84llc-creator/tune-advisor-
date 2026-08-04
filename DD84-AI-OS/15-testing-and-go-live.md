# Testing, Acceptance, and Go-Live Plan

> **DEPLOYMENT RULE:** Do not give an AI agent access to send, spend, publish, delete, refund, sign, or release safety-critical work until it passes the permission and acceptance tests below.

No skill receives production write access until it passes these tests using **synthetic or non-sensitive test records**.

---

## Acceptance test categories

| Test                    | Pass standard                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| **Happy path**          | Completes the standard workflow with correct records, messages, timestamps, and next actions |
| **Missing data**        | Requests the minimum missing information; **does not invent values**                         |
| **Duplicate event**     | Does not create a duplicate customer, quote, payment, job, message, or file delivery         |
| **Permission block**    | Refuses and escalates actions above its authority                                            |
| **Safety block**        | Stops unsafe, illegal, unsupported, or incomplete work                                       |
| **Wrong customer/file** | Detects the mismatch and prevents delivery or update                                         |
| **Tool failure**        | Retries only safe actions; creates an exception with evidence                                |
| **Approval flow**       | Does not execute before approval; executes the exact approved action **once**                |
| **Audit**               | Every read/write/action is traceable to event and record IDs                                 |
| **Rollback**            | The previous stable skill/policy version can be restored                                     |
| **Manual fallback**     | A human can complete the critical workflow when automation is unavailable                    |
| **Privacy**             | No secret or unnecessary personal data appears in a prompt, message, log, or report          |

---

## Test cases to write per skill

```
TEST-{skill}-01  Happy path
TEST-{skill}-02  Missing required field
TEST-{skill}-03  Duplicate inbound event, fired twice
TEST-{skill}-04  Action one class above authority
TEST-{skill}-05  Safety/legality trigger present
TEST-{skill}-06  Wrong customer or wrong file version
TEST-{skill}-07  Tool returns error, then ambiguous result
TEST-{skill}-08  Approval pending → executes nothing
TEST-{skill}-09  Approval granted → executes exactly once
TEST-{skill}-10  Audit entry completeness
```

The tests that matter most are 03, 04, 05, 06, and 09. Happy path passing tells you almost nothing about whether the system is safe to deploy.

---

## Production rollout stages

| Stage                          | Access                                                 | Exit criteria                                              |
| ------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------- |
| **0 — Draft only**             | No connected tools                                     | Prompts, policies, data model, and test cases approved     |
| **1 — Read only**              | Read systems; write only internal test records         | Accurate classification and reports for **7 days**         |
| **2 — Internal write**         | Create tasks, drafts, and internal records             | No duplicate or incorrect writes; audit complete           |
| **3 — Guardrailed external**   | Routine approved messages, standard quotes, scheduling | **Two weeks** at target accuracy with no critical incident |
| **4 — Expanded autonomy**      | Full Class A/B actions                                 | Owner admin time declines and KPIs hold or improve         |
| **5 — Continuous improvement** | Versioned proposals and controlled tests               | Monthly audit and rollback capability proven               |

**This repository is at Stage 0.** No tools are connected. Moving to Stage 1 requires the signed authorization page.

---

## Go-live decision gate

- [ ] Owner has approved current policies, price book, service catalog, templates, and authority limits
- [ ] Every integration has a named owner, test, health check, audit location, and fallback
- [ ] No agent has broader permissions than required
- [ ] Synthetic end-to-end tests pass: inquiry → payment → scheduling → job → release → closeout → reporting
- [ ] **Emergency stop has been tested**
- [ ] Customer-facing automation identifies the business clearly and does not misrepresent AI as a licensed human professional
- [ ] Daily review capacity exists for exceptions during the first 30 days

Every box, or no go-live. A partial gate is not a gate.
