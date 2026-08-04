# Full Deployment Checklists and Definition of Done

---

## Governance

- [ ] Approved 90/10 boundary and action classes
- [ ] Approved price book, service catalog, travel, deposit, refund, reschedule, privacy, retention, and escalation policies
- [ ] Named owner for every system and skill
- [ ] Documented prohibited actions and human-only actions

## Data and systems

- [ ] Canonical customer, vehicle, opportunity, quote, job, payment, file, task, campaign, vendor, and metric objects
- [ ] Stable IDs and duplicate-prevention rules
- [ ] Allowed statuses implemented
- [ ] Every open record requires an owner, next action, and due date
- [ ] Exports/backups and a restoration procedure

## Skills

- [ ] Each skill has a manifest, prompt, input/output schema, authority, failure behavior, metrics, tests, version, and rollback
- [ ] Orchestrator is the **only** cross-domain router
- [ ] Quality/risk skill can block release
- [ ] No skill can approve its own exception

## Automations

- [ ] Triggers and conditions documented
- [ ] Idempotency keys on write actions
- [ ] Safe retry policy
- [ ] External messages use approved templates and log the send result
- [ ] Payment, refund, purchase, deletion, and file delivery have uncertainty safeguards

## Customer operations

- [ ] Lead intake and qualification complete
- [ ] Standard quotes and follow-up complete
- [ ] Booking and reminders complete
- [ ] Job readiness and status complete
- [ ] File release and delivery complete
- [ ] Complaint and recovery path complete
- [ ] Review/referral sequence complete

## Security and compliance

- [ ] Multi-factor authentication and separate service accounts
- [ ] Least privilege verified
- [ ] Secrets removed from prompts and documents
- [ ] Audit log active
- [ ] Emergency stop tested
- [ ] Privacy and consent controls active
- [ ] Legal/tax/safety boundaries documented

## Reporting

- [ ] Daily owner brief
- [ ] Weekly KPI scorecard
- [ ] Cash and receivables report
- [ ] Pipeline and forecast report
- [ ] Automation error report
- [ ] Monthly improvement report

## Go-live

- [ ] All acceptance tests pass
- [ ] Pilot completed
- [ ] Critical defects closed
- [ ] Fallbacks tested
- [ ] Owner has **one place** to approve, reject, edit, or defer
- [ ] Seven-day and 30-day audits scheduled

---

## Definition of done

> **FULL-SPEC COMPLETION:** The business is fully deployed when routine inquiries, quotes, scheduling, reminders, job preparation, status communication, payment matching, file routing, follow-up, reporting, marketing production, and continuous-improvement proposals operate through the system; high-risk actions stop at documented owner approval gates; every action is auditable; and **the owner can operate the business from a single daily decision brief.**

---

## The honest test

Not "is the automation running?" but:

1. Can the owner miss a day without the business stalling?
2. Did last week's exceptions get **fixed**, or just handled?
3. Are owner hours down while quality is flat or better?

If the answer to any of these is no, the deployment is incomplete regardless of how many boxes above are checked.
