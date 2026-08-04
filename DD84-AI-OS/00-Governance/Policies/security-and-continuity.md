# Security, Compliance, and Business Continuity

**Policy ID:** GOV-006
**Version:** 1.0.0
**Approver:** Owner

---

## Minimum security controls

| Control               | Full-spec requirement                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| **Identity**          | Individual accounts; no shared owner password; multi-factor authentication                               |
| **Service accounts**  | Separate credentials per integration; least privilege; no personal master credentials in prompts         |
| **Secrets**           | Stored in a secrets manager; never pasted into knowledge documents or logs                               |
| **Access**            | Role-based access to customer, financial, vehicle, and calibration data                                  |
| **Data minimization** | Collect only data needed for service, payment, support, and legal retention                              |
| **Encryption**        | Encrypted transport and storage through selected platforms                                               |
| **Audit**             | Immutable log of reads/writes, messages, approvals, file release, payment events, and permission changes |
| **Backups**           | Automated export/backup with periodic restoration test                                                   |
| **Retention**         | Defined retention by customer, job, financial, marketing, and technical file class                       |
| **Incident response** | Disable agent access, rotate credentials, preserve evidence, notify affected parties as legally required |

---

## Safety and compliance policy

- The system must not assist with illegal activity, fraud, odometer or VIN misrepresentation, theft-related immobilizer bypass, or emissions defeat for unlawful road use.
- Technical guidance and customer-facing instructions must state their mechanical-condition, fuel, testing, and environment dependencies.
- No AI output substitutes for physical inspection, qualified diagnosis, owner / authorized tuner review, legal counsel, a tax professional, an insurance professional, or licensed trade work.
- Customer consent and permission must be recorded **before** using identifying content, testimonials, photos, videos, or vehicle information in marketing.
- Financial records prepared by AI remain subject to owner / accountant review before any tax or legal filing.
- Customer-facing automation identifies the business clearly and does not misrepresent AI as a licensed human professional.

---

## Business continuity modes

| Mode                     | When used                                                                                  | Behavior                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| **Normal**               | All integrations healthy                                                                   | Full autonomous / guardrailed execution                            |
| **Degraded**             | One noncritical integration unavailable                                                    | Continue safe work; queue writes; label data stale                 |
| **Manual approval only** | Audit, messaging, payment, or record state is uncertain                                    | No autonomous external writes; prepare tasks and drafts only       |
| **Emergency stop**       | Security incident, duplicate sends, wrong file delivery, unsafe release, or corrupted data | Disable agents and tokens; preserve evidence; switch to manual SOP |

Mode changes are announced by S01 in the daily brief and recorded in the audit log. Any skill that detects a mode-triggering condition raises it immediately rather than working around it.

---

## Emergency stop checklist

1. Disable orchestration schedules and revoke agent service-account tokens.
2. Stop outbound messaging, file delivery, purchasing, and record deletion.
3. Preserve logs, event IDs, affected records, and screenshots / exports.
4. Identify the last known good state and the scope of affected customers and jobs.
5. Notify the owner and required professional support; communicate factually to affected customers when approved.
6. Correct data through controlled manual actions. **Do not mass-retry uncertain events.**
7. Complete root-cause review, permission change, test, and owner approval before restart.

The emergency stop must be **tested** before go-live. An untested stop is not a control.
