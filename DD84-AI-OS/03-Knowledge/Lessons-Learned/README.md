# Lessons Learned

**Maintained by:** S12 Knowledge and Continuous Improvement

Every repeated question, mistake, near-miss, and owner decision becomes an entry here, and then becomes a change to an SOP, FAQ, template, checklist, or policy. A lesson that does not change an artifact was not learned.

---

## Entry template

### `LL-YYYY-NNN` — Short title

| Field                | Content                                                                      |
| -------------------- | ---------------------------------------------------------------------------- |
| **Date**             |                                                                              |
| **Trigger**          | The job, complaint, failure, or decision that surfaced it                    |
| **What happened**    | Factual sequence, with record IDs                                            |
| **Root cause**       | Not "human error" — the process, data, policy, or permission that allowed it |
| **Cost**             | Time, money, rework, customer trust                                          |
| **Artifact changed** | Which SOP / FAQ / template / checklist / policy was updated                  |
| **Change status**    | Proposed / approved / deployed                                               |
| **Verification**     | How we will know it worked                                                   |
| **Recurrence check** | Date to confirm it has not repeated                                          |

---

## Root cause categories

Track which category dominates — that tells you where to invest.

| Category      | Meaning                                             |
| ------------- | --------------------------------------------------- |
| Data          | Missing, wrong, or ambiguous record data            |
| Policy        | Policy was absent, unclear, or wrong                |
| Permission    | A skill had too much or too little authority        |
| Prompt        | A skill's instructions were ambiguous               |
| Integration   | A tool failed, timed out, or returned ambiguously   |
| Knowledge     | The right answer was not written down anywhere      |
| Compatibility | Platform reality differed from the register         |
| Expectation   | Customer expected something never actually promised |
| Capacity      | The commitment exceeded real capacity               |

---

## The owner's rule

> **Do not become the router again.** When a workflow fails, repair the workflow, the permission, the data, or the policy.
> The owner should handle true exceptions, not silently absorb recurring administrative work.

If the same exception reaches the owner three times, that is a defect in the system, and fixing it takes priority over handling the fourth instance.
