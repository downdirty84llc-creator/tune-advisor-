# DD84 AI Business Operating System

**Down Dirty 84 LLC** · Version 1.0 · **Stage 0 — Draft only, no connected tools**

> **Mission:** Build a business in which AI captures, organizes, prepares, executes, follows up, reports, and improves routine work — while the owner retains control of safety, money, legal exposure, reputation, and final high-risk decisions.

This repository is the deployable form of the DD84 90% AI-Ran Business Skill Package. It contains 12 version-controlled agent skills, the governance that constrains them, the knowledge they read from, and the tests they must pass before touching anything real.

---

## Start here

| If you want to…                       | Read                                                  |
| ------------------------------------- | ----------------------------------------------------- |
| Understand what AI may and may not do | `00-Governance/Policies/action-classes.md`            |
| See the numeric limits                | `00-Governance/Policies/approval-thresholds.md`       |
| Authorize deployment                  | `00-Governance/Approvals/deployment-authorization.md` |
| Know what to build first              | `16-deployment-schedule.md`                           |
| Know when it's safe to go live        | `15-testing-and-go-live.md`                           |

---

## The 90/10 boundary

**AI owns:** lead intake (95%) · quoting (90%) · scheduling (90%) · customer communication (90%) · marketing (85%) · ecommerce (90%) · finance operations (85%) · management reporting (95%)

**The owner retains:**

- Final release of safety-critical vehicle calibration or diagnostic conclusions
- Discounts outside policy, refunds, chargebacks, financing, contracts, major spend
- Legal, tax, insurance, employment, and regulatory decisions
- High-conflict customer conversations and reputation-sensitive responses
- Physical shop work, test drives, inspections, installations — anything requiring licensed or insured human performance
- Strategic direction, pricing policy, hiring, capital allocation, risk tolerance

> **Core principle:** Automate preparation and execution. Escalate accountability.
> AI may recommend; the owner remains the legal and technical principal.

---

## The 12 skills

| ID  | Skill                   | Invoke                        | Does                                                                      |
| --- | ----------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| S01 | Ops Orchestrator        | `/dd84-ops-orchestrator`      | Routes every event, assigns action class and priority, enforces approvals |
| S02 | Lead Intake             | `/dd84-lead-intake`           | Inquiry → complete scored opportunity, or documented disqualification     |
| S03 | Quote Builder           | `/dd84-quote-builder`         | Policy-compliant quotes from the approved price book                      |
| S04 | Scheduling & Dispatch   | `/dd84-scheduling-dispatch`   | Eligible slots, travel buffers, reminders, mobile packets                 |
| S05 | Customer Communication  | `/dd84-customer-comms`        | Routine replies, updates, aftercare — escalates the sensitive             |
| S06 | Service Delivery        | `/dd84-service-delivery`      | Readiness, file versioning, evidence, closeout                            |
| S07 | Quality, Safety & Risk  | `/dd84-quality-safety-risk`   | **Blocks** unsafe, illegal, or unevidenced work                           |
| S08 | Marketing & Growth      | `/dd84-marketing-growth`      | Campaigns, content, referral outreach, attribution                        |
| S09 | Website & Ecommerce     | `/dd84-web-ecommerce`         | Listings, digital fulfillment, conversion                                 |
| S10 | Finance & KPI           | `/dd84-finance-kpi`           | Payment matching, margin, cash brief, scorecard                           |
| S11 | Vendor & Procurement    | `/dd84-vendor-procurement`    | Sourcing, landed cost, order tracking                                     |
| S12 | Knowledge & Improvement | `/dd84-knowledge-improvement` | Turns cases and failures into better SOPs                                 |

Skills live in `.claude/skills/`. Manifests, versions, and rollback records are in `01-Skills/manifests.md`.

S01 is the only cross-domain router. S07 can block anything and nothing but an owner decision clears it.

---

## Repository map

The package lives in `DD84-AI-OS/`. The skills sit at the repository root in
`.claude/skills/`, because that is where Claude Code loads them from.

```
.claude/skills/          The 12 deployable skills (repo root)

DD84-AI-OS/
00-Governance/           Action classes, thresholds, permissions, escalation, security, audit
01-Skills/               Manifests, versions, change control
02-Templates/            Approval packets, quotes, customer messages, checklists, marketing
03-Knowledge/            Data model, statuses, price book, service catalog, compatibility, FAQ, brand voice
04-Customers/            Per-customer/vehicle/job folder structure
05-Reports/              Daily brief, weekly scorecard, monthly review formats
06-Backups-and-Exports/  Export and restoration
07-lead-to-cash.md       Inquiry → qualified → quoted → paid → booked; A/R and lost-lead recovery
08-service-delivery.md   Readiness gate, remote tuning, mobile service, complaint recovery
10-finance-and-kpi.md    Daily brief, scorecard, margin, weekly review
11-automation-triggers.md  Trigger library and retry policy
13-deployment-stack.md   Capability map and integration contract
15-testing-and-go-live.md  Acceptance tests and rollout stages
16-deployment-schedule.md  The 30-day plan
17-operating-cadence.md  Daily / weekly / monthly rhythm
18-deployment-checklists.md  Full checklists and definition of done
```

---

## Before anything connects to a real system

> **DEPLOYMENT RULE:** Do not give an AI agent access to send, spend, publish, delete, refund, sign, or release safety-critical work until it passes the permission and acceptance tests in `15-testing-and-go-live.md`.

Three items block Stage 1, and they are the owner's to complete:

1. **`03-Knowledge/Price-Book/`** is empty. Until it holds approved prices, no quote can be issued autonomously.
2. **`03-Knowledge/Service-Catalog/`** and **`03-Knowledge/Compatibility/`** are templates. Until filled, every scope and compatibility claim escalates.
3. **`00-Governance/Approvals/deployment-authorization.md`** is unsigned. Until signed, the system stays at Stage 0.

This is by design. An orchestrator running fast against an unapproved price book and an empty FAQ produces confident, wrong answers at speed.

---

## Owner operating rule

> **Do not become the router again.** When a workflow fails, repair the workflow, the permission, the data, or the policy. The owner should handle true exceptions — not silently absorb recurring administrative work.

---

**CONFIDENTIAL OPERATING DOCUMENT**
