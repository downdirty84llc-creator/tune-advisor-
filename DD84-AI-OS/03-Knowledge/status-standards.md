# Status Standards

**Version:** 1.0.0

These are the **only** allowed status values. Free-text status is prohibited wherever a value below exists.

---

## Allowed statuses

| Object           | Allowed statuses                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Lead**         | New \| Contacted \| Awaiting customer \| Qualified \| Quoted \| Won \| Lost \| Disqualified                              |
| **Quote**        | Draft \| Pending approval \| Sent \| Viewed \| Accepted \| Expired \| Declined \| Superseded                             |
| **Job**          | Unscheduled \| Awaiting deposit \| Scheduled \| Preparing \| Ready \| In progress \| Blocked \| QA \| Complete \| Closed |
| **Payment**      | Pending \| Authorized \| Paid \| Partially paid \| Failed \| Disputed \| Refunded \| Written off                         |
| **Approval**     | Not required \| Pending \| Approved \| Rejected \| Edited \| Deferred \| Expired                                         |
| **File release** | Draft \| QA blocked \| Owner review \| Released \| Delivered \| Superseded \| Archived                                   |

---

## Transition rules that matter

**Job → Complete** is not an AI-assignable status. Only the owner confirms technical completion. AI may move a job to `QA` and prepare the closeout, no further.

**File release → Released** is owner-only. AI may move a file to `Owner review` and may move it to `Delivered` _after_ a release is recorded, matching checksum and customer/job. Nothing else.

**Lead → Lost** requires a recorded lost reason. Silence is not a lost reason; a quiet lead stays `Awaiting customer` with a reactivation task.

**Quote → Expired** creates a refresh task. Old pricing is never silently honored.

**Payment → Written off** is owner-only, like a refund.

**Job → Blocked** must carry the exact blocker and the correction required to clear it. A block with no stated correction is an incomplete block.

---

## Status hygiene

- A status change always records: who changed it, when, why, and the resulting next action.
- A record cannot sit in a non-terminal status past its next-action due date without appearing in the daily brief.
- Terminal statuses: `Closed`, `Lost`, `Disqualified`, `Written off`, `Archived`, `Declined`. Everything else needs a live next action.
