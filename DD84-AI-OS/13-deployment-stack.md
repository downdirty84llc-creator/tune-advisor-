# Deployment Stack and Integration Map

Use the tools already central to the business where possible. **The system design matters more than the vendor.** Every component must support stable IDs, audit logs, least-privilege access, export, and a manual fallback.

---

## Capability map

| Capability             | Required function                                                | Implementation category                      | Chosen tool | Owner | Health check |
| ---------------------- | ---------------------------------------------------------------- | -------------------------------------------- | ----------- | ----- | ------------ |
| **Orchestration**      | Receive events, route tasks, call tools, enforce approval states | Agent platform + workflow automation engine  |             |       |              |
| **CRM**                | Customer, vehicle, opportunity, quote, activity, next action     | CRM or structured database                   |             |       |              |
| **Job operations**     | Job status, readiness, checklists, evidence, release state       | Field service / job management, or custom DB |             |       |              |
| **Communication**      | Email, SMS/DM where permitted, templates, thread history         | Business email and messaging integrations    |             |       |              |
| **Calendar**           | Availability, travel buffers, appointments, reminders            | Shared business calendar                     |             |       |              |
| **Files**              | Versioned customer/job folders, access controls, retention       | Business cloud storage                       |             |       |              |
| **Payments**           | Checkout, invoice, deposit, payment status, dispute status       | Payment processor + ecommerce platform       |             |       |              |
| **Accounting prep**    | Transaction feed, categorization, reconciliation queue, reports  | Accounting platform or reporting DB          |             |       |              |
| **Website / intake**   | Structured forms, authentication, uploads, status, payment links | Current DD84 website/portal                  |             |       |              |
| **Ecommerce**          | Products, digital fulfillment, order status, support             | Current store platform                       |             |       |              |
| **Analytics**          | Event tracking, dashboards, attribution, KPI history             | BI/dashboard or database reports             |             |       |              |
| **Secrets and access** | Credential vault, service accounts, rotation, least privilege    | Password/secrets manager                     |             |       |              |

**Fill in the last three columns before go-live.** An integration with no named owner, no health check, and no documented fallback is an outage waiting to happen.

---

## Integration contract

- Every inbound event receives a unique event ID and source timestamp.
- Every write uses a stable external ID to prevent duplicate records.
- Every automated message stores channel, template version, recipient, related record IDs, send result, and next action.
- Every payment or order event is **verified from the source system** before the business state changes.
- Every file is linked by file ID and version; customer-facing delivery is allowed only for released versions.
- Every approval is immutable after execution; later changes create a new approval record.
- Every integration has a health check, an error queue, and a documented manual fallback.

---

## Connect one at a time

The order matters. Each integration is connected, tested, and observed before the next one goes in — so that when something breaks, you know what broke it.

1. Files and folder structure
2. CRM / records
3. Calendar
4. Communication channels
5. Payment status (read-only first)
6. Website / intake forms
7. Ecommerce
8. Accounting prep
9. Analytics

---

## Folder structure

```
/DD84-AI-OS
  /00-Governance
    /Policies
    /Approvals
    /Audit
  /01-Skills                 → implemented as .claude/skills/dd84-*
    /S01-Ops-Orchestrator
    /S02-Lead-Intake
    ...
  /02-Templates
    /Customer-Messages
    /Quotes
    /Job-Checklists
    /Marketing
  /03-Knowledge
    /Price-Book
    /Service-Catalog
    /Compatibility
    /FAQ
    /Lessons-Learned
  /04-Customers
    /[customer_id]
      /[vehicle_id]
        /[job_id]
          /01-Intake
          /02-Original-Files
          /03-Work-In-Progress
          /04-Owner-Released
          /05-Logs-Evidence
          /06-Closeout
  /05-Reports
    /Daily
    /Weekly
    /Monthly
  /06-Backups-and-Exports
```

The `04-Owner-Released` folder is the **only** source for customer file delivery. Nothing is delivered from `03-Work-In-Progress`, ever — that separation is a safety control, not filing preference.
