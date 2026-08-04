# Audit Log

Every automated action lands here, or in the audit store this folder points to. The audit trail exists to answer three questions: **what ran, why it ran, and what changed.**

## Required fields per entry

| Field                    | Notes                                                                    |
| ------------------------ | ------------------------------------------------------------------------ |
| `timestamp`              | Source system time, with time zone                                       |
| `event_id`               | The originating event                                                    |
| `source`                 | Channel or scheduled trigger that produced the event                     |
| `skill_id`               | Which skill acted (S01–S12)                                              |
| `action_class`           | A, B, C, or D as assigned before acting                                  |
| `policy_version`         | Which policy version the decision was made under                         |
| `tool_called`            | Tool or integration invoked                                              |
| `tool_result`            | Raw success/failure, not a paraphrase                                    |
| `record_ids`             | Every record read or written                                             |
| `approval_id`            | Present for every Class C execution; absent means it should not have run |
| `outcome`                | What actually changed                                                    |
| `next_action` + `due_at` | Or an explicit close-the-loop marker                                     |

## Rules

- The log is **immutable**. Corrections are appended, never overwritten.
- An action with no audit entry is treated as an incident, not as a success.
- Approvals, file releases, payment events, and permission changes are logged at the same fidelity as customer messages.
- Secrets, API keys, passwords, and unnecessary personal data never appear in an entry.
- Log retention follows the retention classes in `00-Governance/Policies/security-and-continuity.md` and survives skill version changes.

## Reviews

| Cadence                        | What is reviewed                                                               |
| ------------------------------ | ------------------------------------------------------------------------------ |
| Daily                          | Exceptions, failures, blocked actions, unassigned events older than 15 minutes |
| Weekly                         | Automation failures, false positives/negatives, permission changes             |
| Monthly                        | Credential/access review, backup restoration test, full audit sample           |
| Day 7 and Day 30 after go-live | Scheduled formal audits (see `15-testing-and-go-live.md`)                      |
