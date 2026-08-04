# Customer Message Templates

**Used by:** S05 Customer Communication, S04 Scheduling, S10 Finance

Each template carries a version. S05 logs which template version was sent. Templates marked **[APPROVED]** may send autonomously; templates marked **[DRAFT]** require owner approval until reviewed.

---

## Template format

```
ID:        MSG-XXX
Version:   1.0
Status:    [APPROVED] | [DRAFT]
Trigger:   when this sends
Channel:   email | SMS | DM
Variables: {customer_name}, {job_id}, ...
Never use when: [conditions that require escalation instead]
```

---

## Intake and qualification

### `MSG-001` — Inquiry acknowledgment **[DRAFT]**
Trigger: new inquiry received. Confirms receipt, sets response expectation, asks nothing yet.

### `MSG-002` — Missing information request **[DRAFT]**
Trigger: qualification gaps identified. **Batched** — all gaps in one message, never a drip.

### `MSG-003` — Intake link **[DRAFT]**
Trigger: gap list is long enough that a form beats a message.

### `MSG-004` — Not a fit / decline **[DRAFT]**
Trigger: unsupported platform or out of scope. Polite, specific reason, alternative path if one exists.

---

## Quote and follow-up

### `MSG-010` — Quote delivery **[DRAFT]**
### `MSG-011` — Follow-up, 24 hours **[DRAFT]**
### `MSG-012` — Follow-up, 72 hours **[DRAFT]**
### `MSG-013` — Follow-up, 7 days (final) **[DRAFT]**
### `MSG-014` — Quote expiring **[DRAFT]**
### `MSG-015` — Reactivation, 14 days **[DRAFT]**
### `MSG-016` — Reactivation, 45 days **[DRAFT]**

> All follow-ups stop immediately on reply, decline, payment, or opt-out. Never chase a customer who opted out, declined clearly, or is a documented poor fit.

---

## Scheduling

### `MSG-020` — Booking confirmation + preparation list **[DRAFT]**
### `MSG-021` — 48-hour mobile readiness check **[DRAFT]**
### `MSG-022` — 24-hour reminder + confirmation request **[DRAFT]**
### `MSG-023` — Arrival window, morning of **[DRAFT]**
### `MSG-024` — Reschedule confirmation **[DRAFT]**

---

## Job and files

### `MSG-030` — File request **[DRAFT]**
### `MSG-031` — File received, validation result **[DRAFT]**
### `MSG-032` — Status update, in progress **[DRAFT]**
### `MSG-033` — Blocked, action needed from customer **[DRAFT]**
### `MSG-034` — Released file delivery + instructions **[DRAFT — owner release required first]**
### `MSG-035` — Next log request **[DRAFT]**

---

## Closeout and aftercare

### `MSG-040` — Receipt and closeout **[DRAFT]**
### `MSG-041` — Aftercare instructions **[DRAFT]**
### `MSG-042` — Review request **[DRAFT]** — *held if any issue is unresolved*
### `MSG-043` — Referral prompt **[DRAFT]**

---

## Payments

### `MSG-050` — Invoice / payment due today **[DRAFT]**
### `MSG-051` — 1–3 days overdue **[DRAFT]**
### `MSG-052` — 4–7 days overdue, firm **[DRAFT]**
### `MSG-053` — 8–14 days final notice **[DRAFT — owner approval before send]**
### `MSG-054` — Payment failed, retry **[DRAFT]**

---

## Escalation holding messages

### `MSG-060` — Complaint acknowledgment **[DRAFT]**
Acknowledges receipt and commits to a response time. **Does not admit or deny liability.** Does not offer remedy.

### `MSG-061` — "Let me confirm that for you" **[DRAFT]**
For questions with no approved answer. Buys time honestly, creates a task.

> Escalation templates never contain: liability language, technical conclusions, remedy offers, or money. Those are owner decisions.
