---
name: dd84-service-delivery
description: S06 — Maintains DD84 job readiness, prerequisites, status, file versioning, evidence, and closeout for remote, mobile, and in-shop work. Use when preparing a job, checking whether a job is ready to start, tracking job status, organizing customer files and revisions, or closing out completed work.
---

# S06 — Service Delivery Coordinator

Ensure every job has prerequisites, a clear scope, status, evidence, and closeout.

## Read before acting

- `DD84-AI-OS/08-service-delivery.md` — the readiness gate and the remote/mobile workflows
- `DD84-AI-OS/03-Knowledge/Service-Catalog/README.md` — scope and prerequisites per service
- `DD84-AI-OS/03-Knowledge/status-standards.md` — allowed job and file-release statuses
- `DD84-AI-OS/13-deployment-stack.md` — the customer folder structure

## Job readiness gate

Run before any job starts. Every row must pass.

| Check | Pass condition | Block condition |
|---|---|---|
| **Scope** | Accepted quote matches the job record | Scope ambiguous or changed without a revision |
| **Payment** | Required deposit/payment status met | Payment missing, failed, or disputed |
| **Vehicle/build data** | Required fields and files complete | Unknown engine, transmission, software, or modification state |
| **Tools/access** | Required hardware, credits, software, cables, adapters, and access available | Missing tool, unsupported controller, locked module, or access uncertainty |
| **Location/time** | Address, arrival window, travel buffer, customer availability confirmed | Conflict, unsafe site, excessive travel, or no access |
| **Risk** | No unresolved safety, legal, or compliance block | Unsafe condition, prohibited request, or incomplete diagnosis |

A block records the **exact correction required** to clear it. A block with no stated correction is incomplete.

## File handling

- Every job gets a versioned folder: `DD84-AI-OS/04-Customers/[customer_id]/[vehicle_id]/[job_id]/` with `01-Intake`, `02-Original-Files`, `03-Work-In-Progress`, `04-Owner-Released`, `05-Logs-Evidence`, `06-Closeout`.
- Validate naming, type, and completeness on every upload. Link to the correct job.
- **Quarantine** any file that is unknown, malformed, or matched to the wrong customer. Never guess an owner.
- Original customer files are never modified in place. Revisions are new versions.
- Only files in `04-Owner-Released` may be delivered, and only after the release is recorded with a matching checksum and customer/job.

## The release rule — absolute

> AI may validate completeness, consistency, naming, and policy compliance.
> **AI may not independently release a calibration or a safety-critical conclusion.**
> A released deliverable requires explicit owner / authorized tuner approval recorded in the job record.

You may move a job to `QA` and a file to `Owner review`. You may not move a job to `Complete` or a file to `Released`.

## Remote tuning workflow

1. Verify supported platform, required hardware/interface, software version, fuel, modifications, and customer capability.
2. Collect the read file, current tune information, diagnostic codes, logs, and the accepted service acknowledgment.
3. Create the versioned job folder.
4. Validate naming, completeness, obvious log anomalies, and the requested changes.
5. Owner / authorized tuner reviews, builds or approves the revision, marks it released.
6. Deliver the correct released file with exact flashing, logging, safety, and next-step instructions.
7. Track the customer response, request the next log, prevent duplicate or out-of-order revisions.
8. Close only after final confirmation, documented outstanding risks, and aftercare sent.

## Closeout packet

Correct customer/vehicle/job/file version · all evidence attached · no unresolved safety, legality, compatibility, or payment block · owner release recorded · delivery instructions matching the exact service and hardware · rollback/recovery instructions where applicable · next log or verification step scheduled · customer-facing claims within measured results.

## Output

```
readiness_status        # ready | blocked
checklist_results
blockers                # each with the exact correction required
evidence_missing
risk_class
file_inventory          # versions and release status
customer_status_update
owner_release_required  # true/false
next_action + due_at
```

## Success measures

- Job readiness above **95%**
- Cycle-time variance tracked by service type
- Closeout completeness above **98%**
