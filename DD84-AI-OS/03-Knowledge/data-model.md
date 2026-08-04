# Canonical Data Model

**Version:** 1.0.0

Automation fails when every tool uses different names and statuses. These objects and fields are standardized across the CRM, calendar, job system, payments, files, and reporting layer. A skill that needs a field not listed here proposes an addition rather than inventing one.

---

## Objects and minimum fields

| Object                 | Minimum fields                                                                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Customer**           | `customer_id`, name, phones, emails, preferred channel, location, consent, source, tags, lifetime value, risk notes                            |
| **Vehicle / Build**    | `vehicle_id`, year, make, model, engine, transmission, VIN last 8 (or full VIN under restricted access), modifications, fuel, tire size, goals |
| **Lead / Opportunity** | `opportunity_id`, source, requested service, qualification status, fit score, value, probability, next action, lost reason                     |
| **Quote**              | `quote_id`, version, scope, exclusions, package, add-ons, travel, tax, deposit, total, expiration, approval status                             |
| **Job**                | `job_id`, service type, location, scheduled time, assigned person, prerequisites, status, risk class, blockers, evidence, release status       |
| **Message**            | `message_id`, channel, thread, sender, timestamp, intent, sentiment, commitment, response status                                               |
| **Payment / Invoice**  | `payment_id`, `invoice_id`, amount, status, method, fees, matched job, deposit balance, refund status                                          |
| **File / Artifact**    | `file_id`, type, owner, job, version, checksum, release status, retention class, access level                                                  |
| **Task / Approval**    | `task_id`, owner, priority, due date, action, evidence, approval class, decision, completion proof                                             |
| **Campaign**           | `campaign_id`, audience, offer, channels, spend, content, leads, attributed revenue, result, next test                                         |
| **Vendor / Order**     | `vendor_id`, `order_id`, items, compatibility, cost, shipping, ETA, status, return window, linked job                                          |
| **Metric**             | `metric_id`, date, definition, value, source system, target, variance, owner                                                                   |

---

## ID rules

- Every ID is stable and externally referenceable. IDs are never reused after deletion or archival.
- Every write to an external system carries a **stable external ID** so a retry cannot create a duplicate record.
- Every inbound event receives a unique `event_id` plus the source timestamp, preserved alongside any normalized version.
- Relationships are by ID, never by name matching. "John's truck" is not a join key.

---

## The two universal rules

> **DATA RULE 1 — Never use free-text status when an allowed status exists.** See `status-standards.md`.
>
> **DATA RULE 2 — Every record must have an owner, a next action, and a next-action due date until it is closed.**

A record with no next action and no closure is invisible work. S01 sweeps for these and assigns them.

---

## Duplicate prevention

Before creating any customer, vehicle, opportunity, or job:

1. Match on phone, email, and `vehicle_id` / VIN fragment.
2. Fuzzy-match on name plus location as a secondary signal only — never as the sole basis for a merge.
3. On a probable match, link and enrich the existing record. Do not create.
4. On an ambiguous match, create a review task rather than guessing in either direction.

Target duplicate rate: **under 2%**.

---

## Access classes

| Class                | Examples                                          | Who reads it                                |
| -------------------- | ------------------------------------------------- | ------------------------------------------- |
| Open                 | Service catalog, published FAQ, listing copy      | Any skill                                   |
| Customer             | Contact, vehicle, job, message history            | Assigned skills only                        |
| Restricted           | Full VIN, payment method details, dispute history | Finance skill and owner only                |
| Technical-restricted | Calibration files, read files, tune revisions     | S06/S07 read; **owner alone releases**      |
| Secret               | Credentials, API keys, tokens                     | Secrets manager only — never a record field |
