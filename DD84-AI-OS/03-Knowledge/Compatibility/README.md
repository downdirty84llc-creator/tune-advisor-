# Compatibility Register

**Version:** 0.1.0 — draft

The authoritative record of what the business can actually service. Skills check here before promising anything, and a platform that is absent from this register is **unverified**, not "probably fine."

---

## Register template

| Platform | Years | Engine | Transmission | Controller / ECU | Supported operations | Required hardware | Required software | Known limitations | Verified on job | Last verified |
| -------- | ----- | ------ | ------------ | ---------------- | -------------------- | ----------------- | ----------------- | ----------------- | --------------- | ------------- |
|          |       |        |              |                  |                      |                   |                   |                   |                 |               |

---

## Status values

| Status                   | Meaning                                                          | What skills may say                                          |
| ------------------------ | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| **Verified**             | Completed successfully on a real job, evidence in the job record | May quote and schedule normally                              |
| **Supported — untested** | Vendor/tooling says yes, no completed job yet                    | Quote with an explicit verification step; flag elevated risk |
| **Limited**              | Works with documented constraints                                | Quote only with the constraints stated in writing            |
| **Not supported**        | Known incompatible or out of scope                               | Decline politely, offer an alternative path                  |
| **Unknown**              | Absent from this register                                        | **Escalate.** No autonomous quote, no compatibility claim    |

---

## Rules

- Compatibility claims in quotes, listings, and marketing copy come from this file only.
- "Unknown" is a legitimate and expected answer. It triggers an owner review, not a guess.
- Locked modules, unsupported controllers, and access uncertainty are job-readiness blockers (see `08-service-delivery.md`).
- Every completed job updates this register: what worked, what did not, what surprised us. That update is S12's responsibility.
- A compatibility failure discovered mid-job is a root-cause item, not just a refund conversation.
