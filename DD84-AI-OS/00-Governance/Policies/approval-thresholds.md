# Approval Thresholds

**Policy ID:** GOV-002
**Version:** 1.0.0
**Approver:** Owner
**Status:** Draft — values below are the spec defaults. Confirm each one before go-live.

These are the numeric limits that separate Class B (guardrailed execution) from Class C (approval required).
A skill that is about to cross a limit stops and produces an approval packet instead.

---

## Default thresholds

| Decision              | Autonomous limit                                                  | Approval trigger                                                             |
| --------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Customer discount** | Up to **5%**, and only when a published promotion applies         | Any custom discount, or stacking of promotions                               |
| **Refund**            | **None**                                                          | Every refund, credit, or write-off                                           |
| **Purchase**          | Up to **$75** for pre-approved consumables, with budget remaining | Any unplanned item; any order above $75                                      |
| **Quote**             | Approved package prices and formulas only                         | Custom fabrication, unknown labor, risk, or price exception                  |
| **Scheduling**        | Eligible slots within published availability and travel radius    | Overtime, double-booking, special location, or rush commitment               |
| **Marketing publish** | Pre-approved campaign templates and factual claims                | Customer likeness, performance claim, controversy, legal claim, or new offer |
| **File delivery**     | Approved digital product, or an owner-released customer file      | Any tune/calibration not explicitly released                                 |
| **Data deletion**     | **None**                                                          | Every permanent deletion of customer, financial, or job data                 |

---

## Margin floor

- No quote may be sent below the approved **contribution margin floor** without owner approval.
- Floor value: `TBD — set during Days 1–3 of deployment` (see `03-Knowledge/Price-Book/README.md`).
- Margin is calculated per `03-Knowledge/margin-formula.md`. If any input is unknown, the margin is _unknown_, not _acceptable_ — escalate.

---

## Time-based limits

| Limit                                                   | Value                                                                        |
| ------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Max age of an unassigned event during business coverage | 15 minutes                                                                   |
| Approval packet default deadline                        | 24 hours, or the customer-facing deadline, whichever is sooner               |
| Quote expiration                                        | Per price book; expired quotes require a refresh task, never silent honoring |
| A/R autonomous communication ceiling                    | 14 days overdue (see `07-lead-to-cash` Workflow C)                           |

---

## Changing a threshold

A threshold change is itself a Class C action. It requires:

1. A written proposal with the current value, proposed value, and reason.
2. Owner approval recorded in `00-Governance/Approvals/`.
3. A version bump on this file.
4. Notification to every skill that reads it (S01 broadcasts the new policy version).

Skills must reference the policy **version** they acted under in their audit note.
