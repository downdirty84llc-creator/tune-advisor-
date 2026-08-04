# Skill Manifests

Each skill in `.claude/skills/dd84-*` has a machine-readable manifest below. Manifests are the change-control record: version, authority, metrics, tests, and rollback.

---

## Manifest template

```yaml
skill_id: SXX
name: 'Skill Name'
version: '1.0.0'
owner: 'Down Dirty 84 LLC'
purpose: 'One measurable business outcome'
triggers:
  - event_type
required_inputs:
  - field_name
systems_read:
  - system_name
systems_write:
  - system_name
autonomous_actions:
  - action_name
guardrailed_actions:
  - action_name
approval_required:
  - action_name
human_only:
  - action_name
policies:
  - policy_id_and_version
output_schema:
  - field_name
failure_behavior:
  - 'Stop, preserve evidence, create exception task'
metrics:
  - metric_name
tests:
  - test_case_id
change_control:
  approver: 'Owner'
  rollback: 'Previous skill version'
```

---

## Skill register

| ID  | Skill                         | Directory                    | Version | Stage     | Primary outcome                                                  |
| --- | ----------------------------- | ---------------------------- | ------- | --------- | ---------------------------------------------------------------- |
| S01 | Ops Orchestrator              | `dd84-ops-orchestrator`      | 1.0.0   | 0 — Draft | Routes all events, enforces priority and approvals, closes loops |
| S02 | Lead Intake and Qualification | `dd84-lead-intake`           | 1.0.0   | 0 — Draft | Turns inquiries into complete, scored opportunities              |
| S03 | Sales and Quote Builder       | `dd84-quote-builder`         | 1.0.0   | 0 — Draft | Creates accurate offers using approved price logic               |
| S04 | Scheduling and Dispatch       | `dd84-scheduling-dispatch`   | 1.0.0   | 0 — Draft | Books eligible work and prepares job packets                     |
| S05 | Customer Communication        | `dd84-customer-comms`        | 1.0.0   | 0 — Draft | Handles routine messages, updates, reminders, aftercare          |
| S06 | Service Delivery Coordinator  | `dd84-service-delivery`      | 1.0.0   | 0 — Draft | Maintains job status, prerequisites, checklists, handoff         |
| S07 | Quality, Safety, and Risk     | `dd84-quality-safety-risk`   | 1.0.0   | 0 — Draft | Blocks unsafe or incomplete actions; audits release readiness    |
| S08 | Marketing and Growth          | `dd84-marketing-growth`      | 1.0.0   | 0 — Draft | Builds campaigns, content, referral outreach, attribution        |
| S09 | Website and Ecommerce         | `dd84-web-ecommerce`         | 1.0.0   | 0 — Draft | Maintains listings, digital delivery, conversion                 |
| S10 | Finance and KPI Controller    | `dd84-finance-kpi`           | 1.0.0   | 0 — Draft | Prepares invoices, reconciles payments, monitors margin and cash |
| S11 | Vendor and Procurement        | `dd84-vendor-procurement`    | 1.0.0   | 0 — Draft | Sources approved parts, compares landed cost, tracks orders      |
| S12 | Knowledge and Improvement     | `dd84-knowledge-improvement` | 1.0.0   | 0 — Draft | Maintains SOPs, FAQs, decisions, templates, lessons learned      |

---

## S01 — Ops Orchestrator

```yaml
skill_id: S01
name: 'Ops Orchestrator'
version: '1.0.0'
purpose: 'Every business event ends with a documented, owned next action'
triggers: [any_channel_event, record_change, owner_approval, scheduled_review]
systems_read: [crm, jobs, calendar, payments, files, policies]
systems_write: [tasks, records, internal_alerts, audit_log]
autonomous_actions:
  [create_record, update_record, assign_task, internal_alert, schedule_followup]
approval_required: [any_class_c_action]
human_only:
  [
    money_movement,
    refund,
    deletion,
    contract,
    calibration_release,
    legal_tax_decision,
  ]
policies: [GOV-001@1.0.0, GOV-002@1.0.0, GOV-004@1.0.0, GOV-005@1.0.0]
failure_behavior: ['Stop, preserve evidence, create exception task']
metrics: [unassigned_event_age, overdue_p1_count, logged_action_rate]
tests: [TEST-S01-01 .. TEST-S01-10]
change_control: { approver: Owner, rollback: previous_version }
```

## S02 — Lead Intake

```yaml
skill_id: S02
version: '1.0.0'
purpose: 'Every legitimate inquiry becomes a complete opportunity or a documented disqualification'
triggers: [form_submission, inbound_email, dm, missed_call, referral]
systems_read: [crm, compatibility_register, service_catalog]
systems_write: [customer, vehicle, opportunity, task]
autonomous_actions:
  [
    extract_details,
    dedupe,
    ask_approved_questions,
    send_intake_link,
    assign_fit_score,
  ]
approval_required: [any_promise_outside_policy]
human_only: [compatibility_ruling_on_unknown_platform]
policies: [GOV-001@1.0.0, GOV-005@1.0.0]
metrics: [first_response_time, record_completeness, duplicate_rate]
tests: [TEST-S02-01 .. TEST-S02-10]
```

## S03 — Quote Builder

```yaml
skill_id: S03
version: '1.0.0'
purpose: 'Policy-compliant quotes that are easy to approve, pay, and schedule'
triggers: [opportunity_qualified, quote_refresh_due]
systems_read:
  [price_book, service_catalog, compatibility_register, calendar_capacity]
systems_write: [quote, task, followup_sequence]
guardrailed_actions: [issue_standard_quote_within_price_book]
approval_required:
  [custom_scope, below_margin_floor, discount_exception, unknown_compatibility]
policies: [GOV-002@1.0.0, GOV-007@1.0.0]
metrics: [quote_cycle_time, margin_floor_compliance, followup_completion]
tests: [TEST-S03-01 .. TEST-S03-10]
```

## S04 — Scheduling and Dispatch

```yaml
skill_id: S04
version: '1.0.0'
purpose: 'Right work, right slot, correct travel and prerequisites'
triggers: [quote_accepted, deposit_paid, reschedule_request]
systems_read: [calendar, service_catalog, travel_policy, payment_status]
systems_write: [calendar_event, job, technician_packet, reminders]
guardrailed_actions: [book_eligible_slot, send_reminders]
approval_required:
  [overtime, rush, unusual_distance, special_location, unpaid_deposit_booking]
metrics: [double_booking_count, travel_buffer_compliance, no_show_rate]
tests: [TEST-S04-01 .. TEST-S04-10]
```

## S05 — Customer Communication

```yaml
skill_id: S05
version: '1.0.0'
purpose: 'Customers informed without owner attention on routine communication'
triggers: [inbound_message, job_status_change, scheduled_followup]
systems_read: [threads, jobs, faq, templates, policies]
systems_write: [message, commitment_record, task]
autonomous_actions:
  [approved_faq_reply, status_update, file_request, reminder, aftercare]
approval_required: [non_template_reply, any_promise, liability_wording]
human_only: [liability_admission, technical_conclusion, complaint_resolution]
metrics:
  [routine_response_time, undocumented_promise_count, escalation_ack_time]
tests: [TEST-S05-01 .. TEST-S05-10]
```

## S06 — Service Delivery

```yaml
skill_id: S06
version: '1.0.0'
purpose: 'Every job has prerequisites, scope, status, evidence, and closeout'
triggers: [job_created, file_uploaded, job_status_change, appointment_completed]
systems_read: [jobs, files, quotes, payments, service_catalog]
systems_write: [job_status, file_metadata, checklist, closeout_packet]
autonomous_actions:
  [validate_files, maintain_status, build_readiness_checklist, report_blockers]
human_only: [declare_technical_completion, release_calibration]
metrics: [job_readiness_rate, cycle_time_variance, closeout_completeness]
tests: [TEST-S06-01 .. TEST-S06-10]
```

## S07 — Quality, Safety, and Risk

```yaml
skill_id: S07
version: '1.0.0'
purpose: 'No unsafe, illegal, incomplete, or unevidenced work reaches a customer'
triggers: [any_proposed_customer_facing_action, release_request, complaint]
systems_read: [job_packet, logs, checklists, policies, compatibility_register]
systems_write: [verdict, block_record, correction_request]
autonomous_actions: [block_any_action]
human_only: [override_a_block, approve_a_release]
policies: [GOV-006@1.0.0]
metrics:
  [unapproved_release_count, documented_block_rate, recurring_defect_trend]
tests: [TEST-S07-01 .. TEST-S07-10]
```

## S08 — Marketing and Growth

```yaml
skill_id: S08
version: '1.0.0'
purpose: 'Measurable pipeline from approved offers and brand voice'
triggers: [weekly_campaign_cycle, completed_job_proof, partner_followup_due]
systems_read: [offers, segments, content_library, results, price_book]
systems_write: [campaign, content_asset, lead_list, attribution_report]
guardrailed_actions: [publish_preapproved_evergreen_content]
approval_required:
  [
    new_claim,
    customer_likeness,
    testimonial,
    discount,
    new_offer,
    sensitive_topic,
  ]
metrics: [lead_cost, conversion, content_cadence, referral_followup_completion]
tests: [TEST-S08-01 .. TEST-S08-10]
```

## S09 — Website and Ecommerce

```yaml
skill_id: S09
version: '1.0.0'
purpose: 'Accurate, conversion-focused storefronts and reliable automated delivery'
triggers: [product_change, order_placed, abandoned_checkout, support_question]
systems_read: [catalog, price_book, compatibility_register, analytics, faq]
systems_write: [listing, seo_fields, delivery_queue, support_response]
guardrailed_actions: [update_approved_factual_content, routine_inventory_status]
approval_required: [price_change, policy_change, new_promise, new_claim]
human_only: [release_file_for_delivery]
metrics:
  [checkout_delivery_path_health, listing_completeness, abandoned_recovery_rate]
tests: [TEST-S09-01 .. TEST-S09-10]
```

## S10 — Finance and KPI Controller

```yaml
skill_id: S10
version: '1.0.0'
purpose: 'Daily cash and profitability view with clean prepared records'
triggers:
  [payment_event, invoice_due, expense_recorded, daily_close, weekly_close]
systems_read: [payments, invoices, expenses, jobs, subscriptions, budgets]
systems_write: [reconciliation_queue, cash_brief, ar_followup, kpi_packet]
autonomous_actions:
  [
    match_payments,
    classify_with_evidence,
    prepare_invoice,
    approved_payment_reminder,
  ]
human_only:
  [move_money, refund, borrow, file_taxes, change_books, tax_or_legal_advice]
metrics:
  [unmatched_payment_aging, cash_report_delivery, margin_exception_escalation]
tests: [TEST-S10-01 .. TEST-S10-10]
```

## S11 — Vendor and Procurement

```yaml
skill_id: S11
version: '1.0.0'
purpose: 'Best total value on inputs without uncontrolled purchasing'
triggers: [parts_needed, order_placed, eta_change, delivery_exception]
systems_read:
  [parts_list, approved_vendors, budget, job_dates, compatibility_register]
systems_write: [comparison_table, order_record, delay_alert]
autonomous_actions: [order_preapproved_consumable_under_threshold]
approval_required:
  [above_threshold, custom_item, deposit, compatibility_uncertainty, new_vendor]
metrics:
  [landed_cost_tracking, on_time_delivery_rate, return_incompatibility_rate]
tests: [TEST-S11-01 .. TEST-S11-10]
```

## S12 — Knowledge and Continuous Improvement

```yaml
skill_id: S12
version: '1.0.0'
purpose: 'Repeated work, mistakes, and decisions become better SOPs and assets'
triggers:
  [
    case_resolved,
    owner_decision,
    complaint_closed,
    automation_failure,
    weekly_close,
    monthly_close,
  ]
systems_read:
  [resolved_cases, decisions, questions, failures, metrics, policies]
systems_write: [sop_draft, faq_draft, template_revision, root_cause_analysis]
autonomous_actions: [propose_change, update_draft_knowledge, flag_stale_content]
approval_required: [publish_policy_change, publish_price_change, publish_faq]
metrics: [sop_coverage, repeat_error_rate, knowledge_freshness]
tests: [TEST-S12-01 .. TEST-S12-10]
```
