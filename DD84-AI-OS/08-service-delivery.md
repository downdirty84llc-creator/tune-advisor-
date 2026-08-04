# Service Delivery and Quality Workflows

---

## Job readiness gate

| Check | Pass condition | Block condition |
|---|---|---|
| **Scope** | Accepted quote matches the job record | Scope ambiguous, or changed without a revision |
| **Payment** | Required deposit/payment status met | Payment missing, failed, or disputed |
| **Vehicle/build data** | Required fields and files complete | Unknown engine, transmission, software, or modification state |
| **Tools/access** | Required hardware, credits, software, cables, adapters, and access available | Missing tool, unsupported controller, locked module, or access uncertainty |
| **Location/time** | Address, arrival window, travel buffer, and customer availability confirmed | Conflict, unsafe site, excessive travel, or no access |
| **Risk** | No unresolved safety, legal, or compliance block | Unsafe condition, prohibited request, or incomplete diagnosis |

---

## Remote tuning workflow

1. Verify supported platform, required hardware/interface, software version, fuel, modifications, and customer capability.
2. Collect the read file, current tune information, diagnostic codes, logs, and a signed/accepted service acknowledgment.
3. Create a versioned job folder using customer ID, vehicle ID, job ID, and file status.
4. AI validates naming, completeness, obvious log anomalies, and the requested changes. **It does not independently release a calibration.**
5. Owner / authorized tuner reviews, builds or approves the revision, and marks it released.
6. AI delivers the correct released file with exact flashing, logging, safety, and next-step instructions.
7. AI tracks the customer response, requests the next log, and prevents duplicate or out-of-order revisions.
8. Close only after final confirmation, documented outstanding risks, and aftercare instructions sent.

---

## Mobile service workflow

1. Confirm address, parking/workspace, weather contingency, vehicle access, battery condition, required fuel, and an adult contact on site.
2. Generate route, travel fee, arrival window, and a checklist of tools, cables, chargers, parts, and files.
3. Send the automated arrival reminder and preparation instructions.
4. **At arrival, the owner verifies** vehicle identity, scope, condition, and any pre-existing issues before work begins.
5. AI records notes, photos, scan results, timestamps, and customer-approved scope changes.
6. No safety-critical or calibration file is released until owner approval is recorded.
7. After completion, AI sends invoice/receipt, care instructions, review request, and the scheduled follow-up.

---

## Complaint and service recovery workflow

| Stage | AI action | Owner involvement |
|---|---|---|
| **Receive** | Acknowledge, preserve the exact message, identify job and urgency | Immediate alert for safety, legal, payment dispute, or public escalation |
| **Stabilize** | Ask the customer to stop driving/using **only** when an approved safety protocol applies; avoid admitting liability | Owner decides technical instructions and liability-sensitive wording |
| **Investigate** | Collect timeline, files, codes, photos, prior promises, and payment record | Owner reviews facts and test plan |
| **Resolve** | Prepare options: inspection, correction, partial credit, refund request, or denial with evidence | **Owner approves all money and high-conflict responses** |
| **Learn** | Record root cause and propose an SOP/template change | Owner approves policy change |

A complaint that ends without a lessons-learned entry will arrive again.

---

## Release checklist

- Correct customer, vehicle, job, and file version.
- All required evidence attached and reviewed.
- No unresolved safety, legality, compatibility, or payment block.
- Owner release status explicitly recorded.
- Delivery instructions match the exact service and hardware.
- Rollback/recovery instructions exist when applicable.
- Next log or verification step scheduled.
- Customer-facing claims do not exceed measured or supportable results.
