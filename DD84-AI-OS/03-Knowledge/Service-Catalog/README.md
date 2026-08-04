# Service Catalog

**Version:** 0.1.0 — draft, requires owner approval

Defines what Down Dirty 84 LLC sells, what each service includes and excludes, and what has to be true before the work can start. S03 quotes from it, S04 schedules from it, S06 builds job packets from it, S09 lists from it.

---

## Entry template — copy per service

### `SERVICE-ID` — Service name

| Field | Value |
|---|---|
| **Delivery mode** | Remote / mobile / in-shop |
| **Outcome** | What the customer actually gets |
| **Included** | Exact files, service steps, revision count, support window, delivery method |
| **Excluded** | Explicitly not included |
| **Prerequisites** | Hardware, credits, software, cables, adapters, fuel, mechanical condition, access |
| **Customer requirements** | What the customer must supply or do, and by when |
| **Typical duration** | Working time, used for scheduling |
| **Turnaround** | Policy-based range, never a guarantee when workload or customer response affects it |
| **Supported platforms** | Cross-reference `03-Knowledge/Compatibility/` |
| **Risk class** | Routine / elevated / safety-critical |
| **Release gate** | Does this require owner release? (Any calibration: **yes**) |
| **Evidence required at closeout** | Logs, photos, scan results, confirmations |
| **Aftercare** | Instructions sent after completion |

---

## Services to document

Fill one entry per line item below before go-live:

- [ ] Performance tuning — remote
- [ ] Performance tuning — in person
- [ ] Diagnostics — remote data review
- [ ] Diagnostics — mobile on-site
- [ ] Module unlock / access services
- [ ] Datalog review and revision
- [ ] Mobile service call-out
- [ ] Digital products (files, guides, downloads)
- [ ] Ecommerce physical goods, if applicable
- [ ] Consultation / build planning

---

## Rules

- A service with no catalog entry cannot be quoted autonomously.
- Every customer-facing description of scope comes from this catalog, so the quote, the listing, and the job packet cannot drift apart.
- Turnaround language is a **range with conditions**, never a promise.
- Safety-critical services carry an owner release gate that no automation can satisfy.
