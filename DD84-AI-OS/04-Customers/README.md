# Customer Records and Job Files

Live customer data lives here in production. This repository holds only the **structure** — no real customer data is committed.

---

## Structure

```
04-Customers/
  [customer_id]/
    [vehicle_id]/
      [job_id]/
        01-Intake/            Inquiry, quote, accepted scope, acknowledgments
        02-Original-Files/    Customer-supplied reads, tunes, logs — NEVER modified in place
        03-Work-In-Progress/  Revisions being built. NEVER delivered from here
        04-Owner-Released/    The only source for customer delivery
        05-Logs-Evidence/     Return logs, scan results, photos, timestamps
        06-Closeout/          Receipt, aftercare, outstanding risks, verification schedule
```

---

## The folder rules are safety controls

- **`02-Original-Files` is immutable.** If you need the customer's original read again after something goes wrong, it has to still exist unaltered.
- **`03-Work-In-Progress` never touches a customer.** Delivery from a work-in-progress folder is how the wrong file reaches the wrong vehicle.
- **`04-Owner-Released` is the only delivery source**, and a file arrives there only when the owner records the release. Checksum and customer/job must match at delivery.
- **Every file is versioned.** Revisions are new versions, never overwrites.
- **Unknown or mismatched files are quarantined**, never guessed into a folder.

---

## Retention and access

| Class                | Examples                            | Access                           | Retention                       |
| -------------------- | ----------------------------------- | -------------------------------- | ------------------------------- |
| Customer             | Contact, vehicle, job history       | Assigned skills                  | Per policy                      |
| Restricted           | Full VIN, payment details, disputes | Finance + owner                  | Per policy                      |
| Technical-restricted | Read files, calibrations, revisions | S06/S07 read; **owner releases** | Per policy                      |
| Evidence             | Logs, photos, scan results          | Assigned skills                  | Through warranty/dispute window |

Retention classes are defined in `00-Governance/Policies/security-and-continuity.md`. Deletion is owner-only, with a retention check — no skill may delete customer, financial, or job data.

---

## Not committed to git

Real customer data, files, calibrations, and logs do not belong in version control. Production storage is the business cloud storage defined in `13-deployment-stack.md`, with access controls, versioning, and backup.
