# Permissions Matrix

**Policy ID:** GOV-003
**Version:** 1.0.0
**Approver:** Owner

Least privilege is the default. A skill gets the narrowest access that lets it produce its output.

---

## Role-based access

| System / action | Orchestrator (S01) | Specialist skills | Owner |
|---|---|---|---|
| Read customer and job records | Yes | Only assigned records | Yes |
| Create / update records | Yes | Within assigned scope | Yes |
| Send routine messages | Policy-controlled | Only approved templates and facts | Yes |
| Publish content | Route only | Pre-approved content only | Yes |
| Create quote | Assign and validate | Approved price book only | Yes |
| Change price book | **No** | **No** | Yes |
| Schedule appointment | Policy-controlled | Eligible slots only | Yes |
| Issue refund or credit | **No** | **No** | Yes |
| Purchase | Under approved threshold only | Request, or approved consumable only | Yes |
| Release tune / calibration | **No** | **No** | Owner / authorized tuner only |
| Delete records | **No** | **No** | Owner, with retention check |
| Sign contract or legal response | **No** | **No** | Owner / counsel only |

---

## Prohibited for every AI skill, without exception

- Move money between accounts, initiate transfers, or change banking details.
- Issue a refund, credit, or write-off.
- Sign a contract or provide legal, tax, or insurance advice.
- Release a calibration, tune file, or safety-critical technical conclusion.
- Override a safety block raised by S07.
- Permanently delete customer, financial, job, or audit data.
- Declare a job technically complete.
- Assist with emissions defeat for unlawful road use, VIN or odometer misrepresentation, immobilizer bypass for theft, fraud, or any misrepresentation.
- Present itself as a licensed human professional.
- Store or echo a credential, API key, or password in a prompt, message, log, or report.

---

## Service account rules

- One credential set per integration. No shared owner password.
- Multi-factor authentication on every human account.
- Credentials live in a secrets manager, never in a knowledge document, skill file, or prompt.
- Each service account is scoped to the minimum systems its skill needs, and is listed with a named owner in `13-deployment-stack.md`.
- Credential review and rotation occur monthly (see `17-operating-cadence.md`).

---

## Granting new authority

Any increase in authority requires a versioned change, passing test evidence, and a new owner approval — per the control statement in `00-Governance/Approvals/deployment-authorization.md`. Authority is never expanded silently or by inference from a past approval.
