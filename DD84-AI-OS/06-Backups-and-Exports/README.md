# Backups and Exports

---

## What must be exportable

Every system in the stack must support export. A tool you cannot get your data out of is a tool that owns your business.

| Data                        | Source system          | Export format | Frequency    | Verified |
| --------------------------- | ---------------------- | ------------- | ------------ | -------- |
| Customers and vehicles      | CRM                    |               |              |          |
| Opportunities and quotes    | CRM                    |               |              |          |
| Jobs, status, evidence      | Job system             |               |              |          |
| Customer files and versions | File storage           |               |              |          |
| Payments and invoices       | Payment processor      |               |              |          |
| Accounting records          | Accounting platform    |               |              |          |
| Messages and threads        | Communication platform |               |              |          |
| Audit log                   | Orchestration platform |               |              |          |
| Policies and knowledge      | This repository        | git           | Every commit | ✅       |

---

## Monthly restoration test

An untested backup is not a backup. Each month, actually restore into a scratch location and confirm:

- [ ] Customer records restore intact, with relationships preserved
- [ ] Job files restore with correct versions **and release status**
- [ ] Financial records reconcile to the same totals
- [ ] The audit log is complete and unaltered
- [ ] Time to restore is recorded

Record the result and the restore time. If restore time is growing, that is a finding.

---

## Why release status matters in a restore

A restore that brings back files but loses which ones were owner-released is worse than no restore — it reintroduces unreleased calibrations into a delivery-eligible state. Release status is part of the backup's integrity check, not a nice-to-have.

---

## Retention

Retention classes are defined in `00-Governance/Policies/security-and-continuity.md`. Backups follow the same retention as the source data, and deletion from backup follows the same owner-only rule as deletion from production.
