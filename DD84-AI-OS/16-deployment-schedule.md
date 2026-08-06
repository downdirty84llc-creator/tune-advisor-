# 30-Day Deployment Schedule

| Days      | Build focus                  | Concrete deliverables                                                                                         |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **1–3**   | Governance and scope         | Approve the 90/10 boundary, action classes, thresholds, risk policy, service catalog, current prices          |
| **4–6**   | Data foundation              | Canonical fields/statuses, CRM/job objects, ID rules, folder structure, retention classes                     |
| **7–9**   | Knowledge base               | Load FAQs, intake questions, quote rules, travel rules, preparation instructions, templates, escalation rules |
| **10–12** | Orchestrator                 | Event queue, priorities, assignments, approvals, audit log, daily exception report                            |
| **13–15** | Lead and sales               | Connect intake channels; build qualification, quote, follow-up, and lost-reason workflows                     |
| **16–18** | Scheduling and communication | Connect calendar and messaging; reminders, readiness checks, conflict rules                                   |
| **19–21** | Job and quality              | Job packets, file versioning, readiness, owner release, delivery, aftercare                                   |
| **22–23** | Payments and finance         | Payment matching, invoices, A/R workflow, daily cash and weekly margin reports                                |
| **24–25** | Marketing and ecommerce      | Campaign IDs, content workflow, listing standard, fulfillment and abandoned-inquiry recovery                  |
| **26–27** | Testing                      | Full test suite, permission tests, duplicate-event tests, failure drills, emergency stop                      |
| **28**    | Pilot                        | Limited segment or limited hours, with owner review of **every** external action                              |
| **29**    | Correct                      | Fix defects, tighten policies, update templates, repeat failed tests                                          |
| **30**    | Go live                      | Enable approved Class A/B actions, start the daily brief, log baseline KPIs, schedule the 7-day audit         |

---

## First deployment priority for DD84

Build in this order. Each one earns its keep before the next starts.

1. **Lead intake and immediate response** across website, email, Facebook/DM, and missed calls
2. **Standard quote creation** for core tuning, diagnostics, unlock, add-on, remote, mobile, and travel scenarios
3. **Calendar booking**, preparation reminders, and mobile dispatch packets
4. **File intake**, naming, version control, owner release, and customer delivery
5. **Payment matching**, daily revenue brief, and overdue follow-up
6. **Post-job review/referral sequence** and weekly marketing content repurposing
7. Only after these are stable: procurement, advanced ecommerce, partner CRM, continuous optimization

Items 1 and 5 give the fastest return: fast response wins jobs you are currently losing to silence, and payment matching finds money you have already earned.

---

## Immediate implementation sequence

1. Adopt this repository as the controlling specification and assign **version 1.0**.
2. Finalize the active DD84 **price book** and approval thresholds.
3. Build the canonical CRM/job records and statuses.
4. Deploy **S01 through S07** first, in read-only and draft mode, then controlled write mode.
5. Connect customer channels, calendar, files, payment status, website/store, and reporting — **one at a time**.
6. Run the acceptance tests and pilot on a limited set of new leads.
7. Enable only the Class A/B actions that have passed tests and have a reliable rollback.
8. Review the daily brief and exception log for **30 days** before expanding authority.

---

## The realistic caution

Days 1–9 are the ones that get skipped, and skipping them is why most deployments like this fail. An orchestrator routing events against an unapproved price book and an empty FAQ produces confident, fast, wrong answers. The boring governance and knowledge work is what makes the automation safe enough to trust later.
