---
name: dd84-scheduling-dispatch
description: S04 — Books DD84 work into eligible calendar slots with correct travel buffers, prerequisites, and reminders, and builds mobile dispatch packets. Use when scheduling or rescheduling an appointment, checking availability, planning a route or travel window, or preparing a technician job packet for a mobile or in-shop visit.
---

# S04 — Scheduling and Dispatch

Book the right work in the right slot with correct travel, prerequisites, and reminders.

## Read before acting

- `DD84-AI-OS/03-Knowledge/Service-Catalog/README.md` — service durations and prerequisites
- `DD84-AI-OS/03-Knowledge/Price-Book/README.md` — travel radius, travel buffer, deposit rules
- `DD84-AI-OS/08-service-delivery.md` — the job readiness gate

## Preconditions — check every time

A booking may proceed only when **all** of these hold:

- [ ] Quote is `Accepted`
- [ ] Required deposit or payment status is met
- [ ] Service duration is known from the catalog
- [ ] Slot is within published availability
- [ ] Location is within travel radius, or the service is remote
- [ ] Travel buffer before and after is available and uncompressed
- [ ] No conflicting appointment
- [ ] No unresolved safety, compatibility, or payment block

Any unchecked box → escalate rather than book.

## Process

1. Confirm exact **time zone**, address, contact method, vehicle access, prerequisites, and payment status.
2. Offer only eligible slots. Never surface a slot you cannot honor.
3. Book, then immediately create: the calendar event, the travel plan, the preparation instructions, and the technician packet.
4. Send confirmation with preparation list and what the customer must have ready.
5. Schedule the reminder sequence, including the 24-hour readiness confirmation.
6. For mobile work, escalate if no confirmation is received before the trip — an unconfirmed mobile trip is a wasted day.

## Never

- Double-book
- Compress a required travel buffer
- Schedule a job that is `Blocked`
- Commit to overtime, a rush window, an unusual distance, or a special location without approval
- Book against an unpaid deposit where policy requires one

## Mobile dispatch packet

| Section              | Contents                                                              |
| -------------------- | --------------------------------------------------------------------- |
| Customer and vehicle | IDs, contact, arrival window                                          |
| Site                 | Address, parking/workspace, access, adult contact on site             |
| Conditions           | Weather contingency, battery condition, required fuel level           |
| Route                | Distance, travel time, buffer, tolls                                  |
| Scope                | Exact work from the accepted quote                                    |
| Tools                | Cables, adapters, chargers, hardware, credits                         |
| Files                | Which files must be on hand, and their versions                       |
| Checks               | Vehicle identity, condition, pre-existing issues to verify on arrival |
| Prerequisites        | Anything the customer was told to have ready                          |

## Reminder sequence

| Timing                              | Message                                            |
| ----------------------------------- | -------------------------------------------------- |
| On booking                          | Confirmation + preparation list + prerequisites    |
| 48h before (mobile)                 | Readiness check + site conditions confirmation     |
| 24h before                          | Reminder + explicit readiness confirmation request |
| Morning of                          | Arrival window                                     |
| No 24h confirmation on a mobile job | **Escalate** — do not roll the truck on silence    |

## Output

```
appointment_action      # booked | rescheduled | blocked | escalated
slot_eligibility_check
travel_plan             # distance, time, buffer, fee
prerequisites
technician_packet
reminder_sequence
conflicts_or_blockers
next_action + due_at
```

## Success measures

- **Zero** double bookings
- Travel buffer compliance above **98%**
- No-show rate monitored and trending down
