# DD84 inbox intake — 2026-11-26

Run 10:21:01Z–10:26:20Z (both read from the clock, T-116). Window:
`newer_than:1d` (since 2026-11-25 10:22Z), with three named diagnostic
widenings. Accounts scanned: Gmail, the business account. Not reached:
Superhuman Mail, Stripe (no MCP server exists), PayPal, Canva.

Threads reviewed: **46** distinct. **Actionable: 3. Mapped to existing rows and
verified unchanged: 14. No-action: 29.** **New leads: 0. New drafts: 0.** Drafts
enumerated: **52**.

Arithmetic: the window sweep returned 27; the two-day bank widening added 3 the
window did not reach; the two-day personal widening added 6; and **10 further
threads were opened one at a time to verify read state** (§1). **27 + 3 + 6 + 10
= 46**, and **3 + 14 + 29 = 46.**

**This is a quiet day on the mail and it is a real result.** No customer wrote,
no vendor wrote, no agency wrote, and **the owner sent nothing.** What is not
quiet is what was already in the inbox: **every item this register is tracking
is still unread.**

---

## 0. Checkout and the six queries

`HEAD` equals origin at **`0e79116`**, no `src/`, clean, **112 tracked files
against the prompt's 28 — sixtieth run reporting the drift** (A-10).

| #     | Query                                         | Returned                                     |
| ----- | --------------------------------------------- | -------------------------------------------- |
| 1     | `category:primary newer_than:1d`              | **0 — blind, T-238, fourth consecutive run** |
| 2     | `is:important newer_than:1d`                  | **0 — nothing was marked important in 24h**  |
| 3     | `in:sent newer_than:1d`                       | **0 — the owner sent nothing in 24h**        |
| 4     | `[Superhuman]/AI/Respond` + `/Waiting`        | 10 listed, all pre-existing, **none new**    |
| 5     | `list_drafts`                                 | **52**, paginated to exhaustion (50 + 2)     |
| 6     | `newer_than:1d -in:sent -category:promotions` | **27**                                       |
| diag. | `category:personal newer_than:2d`             | 9, **no new message on any customer thread** |
| diag. | the bank's alert address, `newer_than:2d`     | 7                                            |
| diag. | `is:unread newer_than:4d`                     | 50 of an estimated 207 — **see §2**          |

> **Why one query is described rather than quoted.** The verification pass
> caught DD84's bank by name inside a query string I had written into the table
> above. **It is not a new category and A-13 reaches it**: the bank is named in
> the 2026-10-08 intake, which is part of what the owner was shown when he
> accepted that this repository is public. **But the threat picture has moved
> since then** — two credential-phishing attempts are now on record, the second
> landing on 2026-11-24 — and **naming a specific business's bank in a
> world-readable file raises the quality of the next pretext against it.**
> Reducing exposure needs no approval, so the query is described instead.
>
> **What that does not achieve, stated plainly: the name is already in at least
> seventeen committed files here, including the approvals file, the append-only
> log and three register rows. Today's wording retracts none of that, and
> nothing a session does can un-publish it.** The change is only a decision to
> stop adding more. **T-256.**

**Queries 2 and 3 returning zero on the same day is new.** Query 2 returned six
yesterday; query 3 returned the sixth Ram calibration. **Today both are empty,
and that is a finding rather than a gap**, because query 6 still returned 27
threads, so the mailbox is being read correctly.

---

## 1. Nothing has been read — verified one thread at a time

**Every thread the register is tracking is still `UNREAD`**, checked by direct
read of each, not inferred:

| Row       | Thread                | Age as unread | What it is                                    |
| --------- | --------------------- | ------------- | --------------------------------------------- |
| **T-237** | `1a20a3a6463daace`    | **day 3**     | Processor sign-in from an unrecognised device |
| T-237 §2  | `1a20a45a28edef6d`    | **day 3**     | The second processor's device prompt          |
| **T-247** | `1a20d1a256cbfdb1`    | **day 2**     | A Windows sign-in on the Google account       |
| **T-245** | `1a20d276d1318ecd`    | **day 2**     | The database pause notice                     |
| **T-243** | `1a20e57c11cfe22e`    | **day 2**     | The phishing attempt                          |
| **T-244** | `1a2102b9147053cf`    | **day 1**     | The 20-items-to-zero channel drop             |
| **T-248** | `1a210cb19bb24468`    | **day 1**     | The 8% increase — **lock-in shuts 12-01**     |
| T-250     | `1a210049d6dcfdbc`    | day 1         | Third-party access default-on 12-09           |
| T-251     | `1a208cfc96f17ebf`    | day 3         | The vendor win-back                           |
| T-239     | two HP Tuners threads | day 3         | The credits purchase                          |

**Four of these are Critical. None needs an approval. All of them are reads.**

**The second processor is now identified: it is PayPal.** Yesterday's intake
could only call it "a second processor"; the sender address settles it. **Both
processor device notices are unread on day three.**

**T-248 is the one with a clock.** The 8% building increase takes effect
**2026-12-01 — five days** — and the message offering to lock the current price
first **has not been opened.** Gmail filed it under promotions, which is how a
dated commercial decision ends up looking like marketing.

---

## 2. The run's real finding: an unread list that omits unread mail

**This nearly produced a fabricated completion, and catching it is the most
useful thing this run did.**

To check what had been read, I ran `is:unread newer_than:4d`. It returned
**exactly 50 threads** with a `resultCountEstimate` of **207**. Several threads
I was tracking — the processor sign-in, the Google alert, the database notice,
the building vendor — **were absent from that list.** The natural reading is
that they had been read.

**That reading would have been false.** Two things went wrong and both matter:

1. **A full page is not the window.** 50 results is exactly the page size, so
   the page was filled, not exhausted — the same failure the command file's own
   warning describes for `in:inbox`, and the same family as **T-208**, where a
   `resultCountEstimate` of 201 was read as a count of ~15 threads.
2. **The pagination attempt silently failed.** I passed `pageToken: "1"` — a
   guess, not a token the API had issued. **It did not error. It returned the
   identical 50 threads.** So a run that trusted it would have "paginated" and
   seen the same page twice.

**What settled it was reading each thread directly**, and every one came back
`UNREAD`, including the processor notice that the unread list had omitted.

**The rule this establishes: absence from an `is:unread` page is not evidence
that anything was read. Only a direct read of the thread's labels is.** Had this
run reported "the owner has read the security notice", it would have been a
fabricated completion of the exact kind the operating protocol forbids — and it
would have closed the highest-consequence row on the board on false evidence.
**T-254.**

**A second lesson for every routine here: a page token must come from the API,
never from arithmetic.** Only the token the previous call returned advances the
page; the draft count in §0 was paginated with a real one and is sound.

---

## 2b. A second measurement defect — in this record's own headline figure

**Checking the register's arithmetic for this run turned up a defect in the
figure these briefs have led with for three days.**

Yesterday's brief said **52 of 217 open rows name a pending packet**, and that
**answering all fifteen packets would clear at most 52 rows.** Both numbers came
from matching any `A-NN` in the dependency column — and **that also matches
packets the owner has already answered**: A-03, A-05, A-06, A-08, A-13, A-15,
A-16, A-19 and A-26 among them.

| Measure (open rows)                    | As reported 11-25 | Counting pending packets only |
| -------------------------------------- | ----------------- | ----------------------------- |
| Name a packet still pending            | 52                | **42**                        |
| Name none                              | 165               | **179**                       |
| Critical rows naming no pending packet | 25                | **28**                        |

**So answering every pending packet clears at most 42 rows, not 52.**

**The direction of the error matters.** It **flattered the packet queue** — it
made the visible, answerable half of the backlog look bigger than it is and the
reading-list half look smaller. The brief's standing conclusion, that most of
this backlog waits on attention rather than judgement, **was right and is now
more right than it claimed.**

**Same family as T-208 and §2 above: a pattern that measured something adjacent
to what was being asserted.** Three of these have now been found in nineteen
days. **T-257.**

---

## 3. New leads

**None.** `category:personal` over two days returns nine threads and **not one
carries a new message** — they are the Ram job, the two identity-document scans,
the phishing attempt and four marketing mails. **No enquiry arrived.**

---

## 4. Existing customers — the live job went silent

**The Ram job has not moved in 33 hours.** Thread `1a1fc4063565f71a` read
directly: **still 19 messages, the last still DRAFT 6 sent
2026-11-25T01:08:23Z.** Nothing inbound, nothing outbound.

**That matters because of what preceded it.** Six revisions in four days, two of
them in the final 24 hours, the job at full-load validation — then a complete
stop. **No conclusion is drawn about why.** A customer testing a calibration
over a holiday week is entirely ordinary, and 2026-11-26 is a bank holiday. **It
is also what a stalled job looks like.** What is certain is that the thread is
quiet and **the work in the customer's hands is still unpriced and uninvoiced.**
A-21 row 1. **T-255.**

| Row                            | State today                                     |
| ------------------------------ | ----------------------------------------------- |
| **T-223** (Ram)                | **Silent 33h at DRAFT 6. Unpriced, uninvoiced** |
| T-206 / T-224 (Silverado)      | Unchanged. Delivered, unpriced, uninvoiced      |
| T-249 (the returning customer) | Unchanged. No rung, and no address to write to  |
| T-64, T-37, T-66, T-177, T-95  | Unchanged                                       |

---

## 5. Money

- **The card toggled again, and this time both halves are on the record.** **On
  at 2026-11-25T22:44:57Z (`1a214e234f53f51e`), off at 22:47:46Z
  (`1a214e4c409b4136`) — two minutes forty-nine seconds apart.** Both unread.
  **Per T-184 I looked for the pair rather than reporting half of one**, and
  this time the pair exists. **T-104 records the toggling as programmatic, in
  60-second windows, hourly. A 2m49s window is the same behaviour at a different
  interval**, so this is evidence for T-104 rather than a new fault. T-205
  updated; no new row. **Yesterday's brief said the card was off with no later
  "on". That was correct on what was readable at 10:53Z — the "on" arrived at
  22:44Z, eleven hours later. Today supersedes it; it does not correct it.**
- **Nothing came in.** No order, no customer payment, no deposit.
- **No bank notice of any account movement** in the two-day sweep — three card
  events and four personal stock alerts, nothing account-level. **An absence of
  notice, not evidence of no movement.**
- **The HP Tuners credits purchase (T-239) is still unread**, so the amount
  remains unread as well as withheld under A-30.

---

## 6. Conflicts found

**None new.** T-225's model-year conflict and T-249's catalogue gap are
unchanged; nothing in today's mail bears on either. **Query 1 still points at
nothing** (T-238) — fourth consecutive run, fix proposed and not applied.

---

## 7. Drafts prepared — NOT SENT

**No new draft was created, in this file or in the mail account**, and on a day
with no inbound mail there was nothing to draft against.

**The backlog is 52**, paginated to exhaustion with an API-issued token. **The
newest draft is still 2026-11-21T16:52:10Z — nothing created or cleared in five
days.** **A-31 remains unanswered.** T-228 stands.

The standing drafts for T-177 and T-95 remain **APPROVAL REQUIRED BEFORE SENDING
(Class C)** under A-29.

---

## 8. No action, with reason

- **Five vehicle-listing digests, three sourcing digests, two
  professional-network notices, two sports newsletters, two platform promotions,
  a freelance digest, a business-deals mail and a business-newsletter** —
  marketing. No action.
- **Two stock-price alerts** — personal investing. **No business account figures
  present**, so nothing is withheld.
- **Five app-install notices on two family devices** — personal, not business.
  Device names withheld.
- **An infrastructure advisory** about two image-processing libraries, unchanged
  from yesterday and still not DD84-specific. Noted, no row.

---

## 9. Proposed labels (not applied)

Labels remain Class B with no approved taxonomy. **Nothing was applied, moved,
archived or marked read.**

- **`DD84/Security`** → the four unread security notices. **Third run proposing
  it, and the case is now stronger**: two of them are on day three.
- **`DD84/Dated`** → T-248 (12-01) and T-250 (12-09). **T-248 sits under
  promotions**, which is why a five-day commercial deadline looks like
  marketing.
- `DD84/Job/Active` → the Ram thread.

---

## 10. Not checked this run

- **Stripe** — no MCP server exists. The sign-in notice was read from mail
  headers only; **whether that sign-in was legitimate cannot be established from
  here.**
- **PayPal, Superhuman Mail, Canva** — authorisation expired. **The second
  device notice was identified from its sender address, not from the account.**
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Shopify and Calendar** — not re-read; yesterday's brief read both live at
  10:53Z and today's daily brief will read them again.
- **The second storefront's Merchant Center account** — no connector. T-244's
  cause is still unreadable from here.
- **Supabase** — no tool called. The pause notice remains unread in mail.
- **The HP Tuners order amount** — not read; withheld under A-30 regardless.
- **Attachments** — **none downloaded, opened or described**, including the two
  identity documents, the building vendor's memo and chart, and every
  calibration file and datalog on the Ram thread.
- **Mail state** — nothing read, starred, labelled or marked. **Every unread
  item in §1 was left unread**, which is why §1 is a table and not a list of
  closures.
