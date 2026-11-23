# DD84 inbox intake — 2026-11-23

Run 10:21:34Z–<!--FINISH-->. Window: `newer_than:3d` (since 2026-11-20 10:21Z,
the previous intake — this covers the weekend). Accounts scanned: Gmail, the
business account. Not reached: Superhuman Mail, Stripe (no MCP server exists),
PayPal — all three unauthorised or absent.

**SKELETON — evidence captured, analysis being written.**

**The week's picture reversed over the weekend. DD84 did the work.**

## 0. Checkout

`HEAD` equals origin at **`ba3dfc5`**, no `src/`, no `package.json`, clean,
**105 tracked files against the prompt's 28 — fifty-third run reporting the
drift.** Skeleton committed before the analysis: **twenty-fourth application of
OL-0050**, and the largest evidence set any run here has gathered.

## Evidence captured, before analysis

### The six queries

| #   | Query | Returned |
| --- | ----- | -------- |
| 1   | `category:primary newer_than:3d` | **ZERO** — no new human inbound |
| 2   | money and payment sweep, 3d | 17 threads |
| 3   | **`in:sent newer_than:3d`** | **SIX threads — the silence broke** |
| 5   | `list_drafts`, paginated to exhaustion | **52 drafts** (was 51) |

### 1. The owner delivered two tuning jobs over the weekend

**Job A — the enquiry that arrived 2026-11-18 (T-206) is no longer a lead. It
is delivered work.** Thread `1a1f064bc8bd2fdc`, now three messages:

- 2026-11-18T20:41:23Z — inbound, starred, with the customer's stock
  calibration attached.
- **2026-11-20T13:33:56Z — SENT.** A completed DD84 calibration plus a scanner
  layout, with instructions to load the layout before data logging.
- **2026-11-21T16:58:52Z — SENT.** Scanner channels plus **a revised
  calibration for idle corrections.**

**Enquiry to delivered calibration in under 41 hours.** That is the fastest
turnaround in this record by a wide margin.

**Job B — a second live job this register has never recorded.** Thread
`1a1fc4063565f71a`, **twelve messages**, all on 2026-11-21 between 03:57Z and
23:02Z. **A 2016 Ram, supercharged, a Stage 2 calibration, marked as a first
draft in the file naming.**

- **DD84 initiated it** at 03:57:32Z by sending the calibration.
- Five messages out, six in, across nineteen hours.
- **A third party is in the loop** — the customer forwards messages from
  another address, so the calibration is being reviewed by someone who is not
  the customer.
- The owner wrote that his phone was dead and he would follow up.
- **The last message, 2026-11-21T23:02:19Z, is UNREAD.**

**Nothing in `TASK-REGISTER.md` or `ventures.md` matches this job**: "TSP",
"Stage 2" and this customer return zero, and the only Ram or Dodge references
are catalogue price rungs and the 2018 Challenger of T-64, a different vehicle
and a different customer.

### 2. A model-year conflict on a delivered calibration

**The register records T-206's vehicle as a 2014 Chevrolet Silverado High
Country** (register line 276, and the 2026-11-19 intake). **The delivered
calibration's own file naming says 15.**

One of those is wrong. **Nothing is resolved here** — a filename is not
authoritative and neither is a register row transcribed from an enquiry. But a
model year selects the calibration base, so this is **one check that must happen
before any further revision**, and it is flagged rather than reconciled.

### 3. Both delivered jobs are unpriced and uninvoiced

Neither thread contains a price, a quote or an invoice. **A-21 row 1 has been
held since October on exactly the question of what these rungs cost**, so no
rung was picked here either — that is Class E.

**DD84 has now delivered work on four jobs with no invoice issued**: T-37,
T-64, T-206 and the Ram job. The invoice count has stood at 10 since August.

### 4. Money movement over the weekend

- **Three more vendor failure notices** — `1a1fb81698225ad3`,
  `1a20070e4750f15a`, `1a20484ac171bb9e`. With the four already recorded, **that
  is seven consecutive failures** for one subscription. **Amount withheld,
  A-19.**
- **A payment to a card issuer was received**, 2026-11-22, thread
  `1a204ba540224cf9`. **Amount withheld, A-19 / A-30.**
- **A lender's monthly statement arrived** — thread `1a1fb5c6a51714cd`.
  **Amount withheld.**
- **The debit card was switched off, on, on and off again across the weekend**
  (`1a1fdc497df8d1d5`, `1a1fea414ab230ac`, `1a20412b79dc9d87`,
  `1a2041333c98da41`) plus **one decline carrying a stated reason**
  (`1a1f9241699fee57`). This reinforces T-205 and T-184 rather than adding to
  them.
- **A consumer class-action settlement notice**, 2026-11-22T04:59:53Z, unread,
  thread `1a201a08313ba050`: **eligible for a payment, claim form required.**
  **Potential money in.** The deadline was not read and the category may be
  personal — A-32 adjacency.

### 5. The draft backlog grew

**52 drafts, paginated to exhaustion** (50 + 2). It was 51 on Friday. **The
2026-11-16 batch of 33 supplier enquiries is untouched**, and the new one is a
draft to the Job A customer, created 2026-11-21T16:52:10Z in the sibling thread
— **six minutes before the owner sent the revision in the main thread instead.**
**A-31 is unanswered.**

### 6. What the Class C gate prevented

**A reply to the Job A customer was drafted on 2026-11-18 and held for A-29.**
By 2026-11-20 the owner had delivered a finished calibration. **Had that draft
been sent, it would have asked a customer for details about a job that was
already being tuned.** The gate was right.

### Sections still to write

- Urgent — read first
- New leads · Existing customers
- Drafts prepared — NOT SENT
- Conflicts found
- No action, with reason
- Proposed labels · Not checked this run
