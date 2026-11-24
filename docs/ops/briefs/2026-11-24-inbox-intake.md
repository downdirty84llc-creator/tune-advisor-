# DD84 inbox intake — 2026-11-24

Run 10:21:32Z–10:26:12Z. Window: `newer_than:1d` (since 2026-11-23 10:21Z).
Accounts scanned: Gmail, the business account. Not reached: Superhuman Mail,
Stripe (no MCP server exists), PayPal.

Threads reviewed: **42** distinct across five queries. Drafts enumerated:
**52**. **Actionable: 15. No-action: 18. Mapped to existing rows: 9.** **New
leads: 0.**

Arithmetic: query 6 returned 30 (14 actionable), `in:sent` 2 (one overlapping),
a `category:personal` diagnostic 6 (four overlapping), query 4 ten of about 65
(one overlapping). **15 + 18 + 9 = 42.**

## 0. Checkout

`HEAD` equals origin at **`e58806d`**, no `src/`, clean, **108 tracked files
against the prompt's 28 — fifty-sixth run reporting the drift** (A-10). Skeleton
committed at **`352d4fd`**: **twenty-sixth application of OL-0050**, and this
one carried a security notice.

---

## 1. Urgent — read first

### 1. A payment processor reports a sign-in it does not recognise, and nobody has read it

**Thread `1a20a3a6463daace`, 2026-11-23T21:05:28Z, UNREAD.** A Chrome Mobile
browser on Android, located in **Atlanta, Georgia**, signed in at **2026-11-23
16:05:25 EST**.

**No conclusion is drawn, in either direction.** An Android phone in Georgia is
entirely consistent with the owner's own handset, and he was demonstrably
working that weekend — he sent calibrations on the 20th and 21st. **It is also
exactly what an unauthorised sign-in would look like if it came from the same
metro area.** What is certain is that **the notice is unread**, so nobody has
confirmed it either way, and **it lands on the account whose secret-key values
T-171 says stopped being readable on 2026-11-20.**

**Withheld, and this one matters:** the originating **IP address** and the **"I
don't recognise this device" link**. That link carries an authentication token
in its query string — **publishing it would put a live, single-click security
action into a world-readable repository.** The IP is a location identifier no
approval covers.

**No approval is needed to read an email.** T-237, due today.

### 2. A second processor sent a device prompt the same day

**Thread `1a20a45a28edef6d`** — "Stay logged in on this trusted device." **Two
payment-processor device events within one day.** Consistent with one person on
one phone; **not confirmed, and worth one minute alongside item 1.**

### 3. Today's outflow, and a bank holiday two days out

**T-202's second scheduled outflow falls today, 2026-11-24.** A notice arrived
(`1a2094ec0c671aaf`) that **2026-11-26 is a bank holiday and deposits may be
delayed** — which matters because **the vendor charge has now failed seven
times** and the vendor started chasing in person today (§4). **T-242.**

---

## 2. The routine's own customer-finding query is blind

This is the run's largest finding and it is a correction to my own earlier work.

| Query               | Window              | Result                                          |
| ------------------- | ------------------- | ----------------------------------------------- |
| `category:primary`  | `newer_than:1d`     | **zero**                                        |
| `category:primary`  | **`newer_than:7d`** | **zero**                                        |
| `category:personal` | `newer_than:2d`     | **6 threads — including the live Ram customer** |

**`category:primary` matches nothing in this mailbox across a full week.** The
command file's own table calls query 1 "**This is the one that finds
customers**", and cites 2026-10-08, when it surfaced a live tuning job and a
state-agency reply. **Whatever was true then, it is not true now:
`category:personal` is where the human mail lives.**

**I reported its zeros as real findings, twice.** On 2026-11-20: "a real zero
from the right query, not a missing connector." On 2026-11-23: "a real zero from
the query that exists to find humans." **Both were wrong.** The query returned
zero because it matches nothing, not because nothing arrived.

**What saved the conclusions was query 6.** The two live jobs on 11-23 were
found by the general sweep, which the command file ranks last and describes as
"only to catch what the five missed". **It is currently doing the work query 1
is credited with.**

**Proposed fix, not applied:** query 1 becomes `category:personal` — or, more
robustly,
`newer_than:<window> -category:promotions -category:social -category:forums`,
which does not depend on Gmail's category assignment being stable. **Not
applied, because changing what an unattended routine does is the owner's call,
and because the two candidate fixes are not equivalent** — one trusts a
category, the other distrusts all of them.

**What this run changes immediately, without needing anyone:** **query 6 is
treated as the customer-finding query, and these briefs will say so** until the
command file is changed. **T-238.**

**T-216 already records four intakes that skipped query 5. This is a second and
worse defect in the same six-query set** — and unlike T-216 it was not a run
failing to follow the spec, it is the spec pointing at the wrong thing.

---

## 3. New leads

**None.** And this time that statement is backed by the right query:
`category:personal` over two days returns six threads and **none is a new
enquiry** — they are the existing Ram job, two vendor threads and three
marketing mails.

---

## 4. Existing customers and jobs

| Row                           | State today                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **T-223** (Ram, Stage 2)      | **Customer wrote again; the owner replied.** Thread `1a1fc4063565f71a`. **Still unpriced and uninvoiced**         |
| **T-206 / T-224** (Silverado) | **The owner replied** — `in:sent` shows a message on thread `1a1ff54f9108b119`. **Still unpriced and uninvoiced** |
| **T-226**                     | **CLOSED.** The customer who had waited 36 hours was answered                                                     |
| T-64, T-37, T-66, T-177, T-95 | Unchanged                                                                                                         |

**Both live jobs are being worked and answered. Neither has a price or an
invoice. A-21 row 1 is the reason, and it is unchanged.**

---

## 5. Money

- **A tooling-or-credits purchase was placed and completed** — threads
  `1a20a53dbde17409` ("order has been received") and `1a20a53dd733468f` ("order
  is now complete"), from the tuning-tool vendor. **This is the first observable
  parts-or-credits purchase anywhere in this record**, and it is a direct input
  to **T-186**, which says no job carries parts, credits or hours so no margin
  can be computed. **The amount was not read and is withheld under A-30
  regardless.** **T-239.**
- **DD84 is on that vendor's dealer list** — a dealer product notice arrived
  (`1a2094d867fbc59a`). Recorded because dealer status bears on cost base.
- **The vendor whose charge has failed seven times is following up personally**
  — thread `1a208cfc96f17ebf`, "Just following up", from a named person at the
  vendor rather than a billing robot. **The relationship, not just the payment,
  is now at stake.** **T-240.**
- **A second "Credits" reply** from the performance vendor (`1a209401ce51e02b`),
  two days running. **Credits are the only cost input this record has ever had**
  (T-107), so this thread matters more than its subject line suggests. Not read
  this run.
- **The debit card was switched on and off again** (`1a20966de81cc90f`,
  `1a20967ebcd55067`). **T-205 and T-184 unchanged; no new row.**

**Nothing came in.** No order, no customer payment, no deposit.

---

## 6. A sales channel was rejected

**Thread `1a2091606403fa40`: a marketplace seller application was REJECTED**,
with a second message (`1a20958bff1b2724`) demanding business verification.

**Two things make this worth a row rather than a line.** T-201 records that
Merry Market has a live site and a processor account, so **DD84 is actively
opening retail channels**; and **T-231 records that a merchant platform is
already blocking on the business address T-164 says is absent.** A verification
rejection is the same failure mode arriving on a second platform. **T-241.**

---

## 7. Two things the owner closed himself

- **The class-action claim was filed.** Thread `1a2082e760e284f9`, "Claim Form
  Confirmation". **T-232 asked for exactly this. Closed on evidence.**
- **T-226 answered**, per §4. **Closed on evidence.**

**Two closures in one run is the most this register has recorded in weeks, and
both were the owner acting rather than a packet being answered.**

---

## 8. Drafts prepared — NOT SENT

**No new draft was written and none should have been.** Both live jobs are in
the owner's hands and he is answering in them directly.

**No draft was created in the mail account.** **The backlog is 52, paginated to
exhaustion, unchanged from 2026-11-23, and the newest is still
2026-11-21T16:52:10Z — nothing created or cleared in three days.** **A-31 is
unanswered.** T-228 stands.

The standing drafts for T-177 and T-95 remain **APPROVAL REQUIRED BEFORE SENDING
(Class C)** under A-29.

---

## 9. Conflicts found — paused, not resolved

**One, and it is mine rather than the mailbox's:** the command file says query 1
finds customers and it does not. **Named in §2, proposed, not applied.**

**T-225's model-year conflict is unchanged** — the register says 2014, the
delivered calibration's naming says 15. **Still unresolved, still due.** Nothing
in today's mail bears on it.

---

## 10. No action, with reason

- **Six saved-search vehicle digests, two sourcing digests, a freelance-project
  digest, a video-service promotion, a professional-network notice, a
  prediction-market mail and a sports newsletter** — marketing. No action.
- **Two stock-price alerts and a brokerage trade confirmation** — personal
  investing. **No business account figures present**, so nothing is withheld.
- **A family-account app-install notice** — personal, not business material.
- **Three older sourcing digests** picked up by the two-day diagnostic window —
  same category.

---

## 11. Proposed labels (not applied)

Labels remain Class B with no approved taxonomy. **Nothing was applied, moved,
archived or marked read.**

- **`DD84/Security`** → the two device notices. **This is the one to act on.** A
  processor security notice sitting unread in a promotions-shaped inbox is the
  worst possible place for it.
- `DD84/Job/Active` → the two live job threads, as proposed on 11-23.
- `DD84/Money/Declined` → the failure notices.

---

## 12. Not checked this run

- **Stripe** — no MCP server exists. **The security notice was read from mail,
  not from the account.** Whether the sign-in was legitimate **cannot be checked
  from here at all**; it needs the dashboard.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector. The
  bank-holiday notice was read from mail.
- **Shopify and Calendar** — not re-read; yesterday's brief read both live.
- **The HP Tuners order amount** — not read. Withheld under A-30 regardless.
- **The "Credits" thread body** — not read, two days running. **Named as a
  gap**: it is the only cost input in the record and it deserves a read in the
  next run.
- **Attachments** — none downloaded, opened or described.
- **Mail state** — nothing read, starred, labelled or marked. **The security
  notice was left unread**, which is why it is §1 item 1 rather than a closed
  item.
