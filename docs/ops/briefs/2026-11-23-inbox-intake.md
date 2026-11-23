# DD84 inbox intake — 2026-11-23

Run 10:21:34Z–10:28:15Z. Window: `newer_than:3d` (since 2026-11-20 10:21Z, the
previous intake — this covers the weekend). Accounts scanned: Gmail, the
business account. Not reached: Superhuman Mail, Stripe (no MCP server exists at
all), PayPal.

Threads reviewed: **50** distinct across four list queries, **four read in
full**. Drafts enumerated: **52**. **Actionable: 21. No-action: 17. Mapped to
existing rows without change: 12.** **New leads: 0 — and that is not the
story.**

Arithmetic, so it can be checked: query 1 returned 0, query 2 (money) 17, query
3 (`in:sent`) 6, query 4 (labels, unwindowed) 10 of about 65, query 6 (general
sweep) 30 of about 68. **Twenty of those appear in more than one query**, so the
union is 50, and 21 + 17 + 12 = 50.

## 0. Checkout

`HEAD` equals origin at **`ba3dfc5`**, no `src/`, no `package.json`, clean,
**105 tracked files against the prompt's 28 — fifty-third run reporting the
drift.** Skeleton committed at `8a521d1`: **twenty-fourth application of
OL-0050**, on the largest evidence set any run here has gathered.

---

## The headline: DD84 did the work

**`in:sent` returned six threads. The three previous intakes returned zero.**

For a week this record reported that nothing was leaving the business and
measured the silence at ten days. **Over the weekend the owner delivered two
tuning jobs**, one of them on an enquiry that had arrived forty-one hours
earlier, and the other on a vehicle **this register has never heard of.**

**The bottleneck this record identified was real and it has partly cleared — by
the owner doing the work directly, not by any approval being answered.** Every
packet that was pending on Friday is still pending.

---

## 1. Urgent — read first

**1. Two customer messages are unread and the customer is waiting.** Thread
`1a1fc4063565f71a`, last message **2026-11-21T23:02:19Z**, unread — **1 day 11
hours**. The owner had already written in that thread that his phone was dead
and he would follow up. **A customer who was told "I'll follow up" and then
heard nothing for 36 hours is the most losable thing on this board.** No
approval needed to read it. T-226.

**2. The Supabase project will be paused, and the warning fired 14 minutes
before this run.** Thread `1a207e003cb5860e`, **2026-11-23T10:07:30Z**, unread.
Project **`dd84-ai-tuning`**. It is **not paused yet**; the trigger is "not seen
sufficient activity for more than 7 days" and no pause date is given. **Once
paused there are 90 days to unpause; after that the project cannot be unpaused,
only its data downloaded.** T-229.

**3. Seven consecutive vendor failures.** Three more over the weekend
(`1a1fb81698225ad3`, `1a20070e4750f15a`, `1a20484ac171bb9e`) on top of four.
**Amount withheld, A-19.** T-227, under A-30.

**4. A model year disagrees with a delivered calibration.** The register records
a 2014; the delivered file naming says 15. **A model year selects the
calibration base.** T-225 — details in §5.

---

## 2. New leads

**None.** Query 1 — `category:primary newer_than:3d` — returned **zero**.

**No new enquiry arrived over a three-day window including a weekend.** That is
a real zero from the query built to find humans. What arrived instead was
_follow-through_ on work already in hand.

---

## 3. The two jobs

### Job A — T-206 is no longer a lead. It is delivered work.

Thread `1a1f064bc8bd2fdc`, three messages:

| When                     | Direction | What                                                                                                    |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------- |
| 2026-11-18T20:41:23Z     | in        | The enquiry, with the customer's stock calibration attached                                             |
| **2026-11-20T13:33:56Z** | **out**   | **A completed DD84 calibration**, plus a scanner layout and instructions to load it before data logging |
| **2026-11-21T16:58:52Z** | **out**   | Scanner channels, plus **a revised calibration for idle corrections**                                   |

**Enquiry to delivered calibration in under 41 hours** — by a wide margin the
fastest turnaround in this record.

The customer has since sent **datalogs back** — threads `1a1fb0b420e23540`,
`1a1fee2091bf910b`, `1a1ff54f9108b119`, `1a1fb0cfda28337f`. **The job is in
active revision.**

**T-206's register row said "Awaiting Approval · A-29 first". That is now
wrong** and is corrected to In Verification under A-21 row 1. **T-224.**

### Job B — a live job that was never on this register

Thread `1a1fc4063565f71a`, **twelve messages**, all 2026-11-21 between 03:57Z
and 23:02Z. **A 2016 Ram, supercharged, a Stage 2 calibration, marked as a first
draft in the file naming.**

- **DD84 initiated it** at 03:57:32Z by sending the calibration — so this job
  predates the thread and existed somewhere outside the record.
- Five messages out, six in, across nineteen hours.
- **A third party is reviewing the calibration** — the customer forwards
  messages from another address. **Who that third party is, and in what
  capacity, is not established.**
- **The last message is unread.**

**Nothing in `TASK-REGISTER.md` or `ventures.md` matches it**: "TSP", "Stage 2",
"1500" and this customer all return zero, and the only Ram or Dodge entries are
catalogue price rungs and the 2018 Challenger of T-64 — a different vehicle and
a different customer. **T-223.**

### Both jobs are unpriced and uninvoiced

Neither thread contains a price, a quote or an invoice. **No rung was picked
here: that is Class E, and A-21 row 1 has been held since October on exactly
this question.**

**DD84 has now delivered work on four jobs with no invoice issued** — T-37,
T-64, T-206 and Job B. **The invoice count has stood at 10 since August.** The
Mopar catalogue does carry a rung that could price Job B, which is precisely why
picking one is not this routine's to do.

---

## 4. What the Class C gate prevented

**A reply to the Job A customer was drafted on 2026-11-18 and held for A-29.**
By 2026-11-20 the owner had delivered a finished calibration.

**Had that draft been sent, it would have asked a customer for qualifying
details about a job that was already being tuned.** It would have read as a
business that does not know what its own shop is doing.

**The gate was right, and it was right for a reason worth keeping:** the agent
had the better information about what the inbox contained and the owner had the
better information about what was actually happening. **A-29 is still pending
and should not be closed on this** — it still gates T-177 and T-95 — but its
premise for T-206 is now moot, the same shape as A-26 row 1 and T-152.

---

## 5. Conflicts found — paused, not resolved

**1. A model year disagrees with a delivered calibration.** The register records
Job A's vehicle as a **2014** (register line 276 and the 2026-11-19 intake). The
**delivered calibration's own file naming says 15.**

Nothing is resolved here. **A filename is not authoritative and neither is a row
transcribed from an enquiry.** But the model year selects the calibration base,
so **this is one check that must happen before the next revision**, and it is
named rather than reconciled. **T-225.**

**2. My own recorded reason for not opening Supabase was backwards.** This
record states that the project was deliberately not opened because **"reading it
counts as activity against its own pause clock."**

**The notice says the opposite.** The pause is triggered by **insufficient**
activity. Activity is what prevents it; abstaining is what brings it on.

**The boundary was right and the reason was wrong.** Not touching a live system
without approval is correct. But the justification recorded alongside it was a
misreading of the mechanism, and **it has been repeated in several briefs.**
Whether `dd84-ai-tuning` should be kept alive — by use, or by upgrading off the
free plan, which is a spend decision — **is the owner's call and is now dated.**
Logged with **T-229**. Nothing was called on Supabase this run.

---

## 6. Money over the weekend

| What                                                                                                                | Thread                                                                                             | Amount                                                                     |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **A platform bill was PAID** — the storefront's monthly charge, settled through the payment processor on 2026-11-21 | `1a1fd224ce1837ad`, `1a1fd21afadd9030`                                                             | **Withheld, A-30**                                                         |
| Three more vendor failure notices — **seven consecutive**                                                           | `1a1fb81698225ad3`, `1a20070e4750f15a`, `1a20484ac171bb9e`                                         | **Withheld, A-19**                                                         |
| A payment to a card issuer was received                                                                             | `1a204ba540224cf9`                                                                                 | **Withheld, A-19 / A-30**                                                  |
| A lender's monthly statement                                                                                        | `1a1fb5c6a51714cd`                                                                                 | **Withheld**                                                               |
| A notice from a consumer lender                                                                                     | `1a1ffd41d86d1e4d`                                                                                 | **Withheld** — bears on A-25                                               |
| Debit card switched **off, on, on, off** across the weekend, plus one decline carrying a stated reason              | `1a1fdc497df8d1d5`, `1a1fea414ab230ac`, `1a20412b79dc9d87`, `1a2041333c98da41`, `1a1f9241699fee57` | **Withheld, A-19**                                                         |
| **A consumer class-action settlement** — eligible for a payment, **claim form required**                            | `1a201a08313ba050`                                                                                 | **Potential money IN.** Deadline not read; category may be personal — A-32 |

**The successful payment is the notable one.** This record has catalogued
failures for two weeks — seven on one subscription alone — and **one outflow
actually completed on 2026-11-21.** A failure generates a notice and a success
usually does not, so the cost base is visible mainly where it breaks; **this is
the exception, and it means the account was able to pay something.** T-230.

**Nothing came in.** No order, no customer payment, no deposit.

---

## 7. Also found

- **An external system now demands the business address.** A merchant-platform
  notice titled "Action required: Add your business address", thread
  `1a1f94e0e5adeb97`. **T-164 has said for eleven days that no location is on
  record.** It is no longer only an internal gap — **a live system is blocking
  on it**, and T-213 recorded that DD84's own correspondence names two candidate
  counties. **T-231.**
- **The credits thread got a reply** — thread `19d7e991a1648bbe`, inbound
  2026-11-21, and the owner answered. Credits are the only cost input anywhere
  in the record (T-107) and **T-186 says no job carries parts, credits or
  hours**, so this reply may be the first real margin input. Not read this run.
- **Query 4's Respond/Waiting backlog is unchanged at about 65 threads**, same
  ten sampled as Friday. The three facility-quote threads outside the register
  (T-217) are still there.
- **The draft backlog grew to 52**, paginated to exhaustion. The 2026-11-16
  batch of 33 supplier enquiries is **untouched**. The new draft is to the Job A
  customer, created 2026-11-21T16:52:10Z in the sibling thread — **six minutes
  before the owner sent the revision in the main thread instead.** **A-31 is
  unanswered.** T-228.

---

## 8. Drafts prepared — NOT SENT

**No new draft was written this run, and none should have been.** The two jobs
are live in the owner's own hands and he is answering in them directly; **a
second voice in a thread mid-calibration would do damage, not good.**

**No draft was created in the mail account.** With 52 already there, adding one
would make A-31 worse.

The standing drafts for T-177 and T-95 are unchanged and remain **APPROVAL
REQUIRED BEFORE SENDING (Class C)** under A-29. **The T-206 draft is withdrawn
as overtaken** — see §4.

---

## 9. No action, with reason

- **Nine Alibaba sourcing, CarGurus, Freelancer and Shopify marketing mails** —
  no action.
- **A banking "cleaner, simpler experience" notice and two stock-price alerts**
  — marketing and personal investing. No account figures present.
- **A law firm's holiday-driving newsletter** — marketing.
- **A semiconductor vendor's software release notice** — no addressee on the
  record. **The vendor is not named here: the leak gate flagged it, correctly,
  as falling in the bench-and-ECU-tooling class `CLAUDE.md` keeps out of this
  public repository.** No action.
- **Family-account app-install notices** — personal, not business material, not
  recorded further.

---

## 10. Proposed labels (not applied)

Labels remain Class B with no approved taxonomy. **Nothing was applied, moved,
archived or marked read.**

- `DD84/Job/Active` → the two live job threads. **This is the one to act on**:
  the register did not know about Job B, and a label on live work is how that
  stops happening.
- `DD84/Money/Declined` → the seven failure notices.
- `DD84/Deadline` → the Supabase notice and the address demand.

---

## 11. Not checked this run

- **Stripe** — no MCP server exists. Permanent gap. **Mail proves the account is
  live**: it sent the failure notices.
- **PayPal** — authorisation expired. **Mail proves it processed a payment on
  2026-11-21**, so the account is live and unreadable at once.
- **Supabase** — **no tool was called.** The pause notice was read from mail,
  and the project itself was not opened. §5 corrects the reason previously
  recorded for that.
- **Bank, Square, Chime, Melio, Capital on Tap** — no connector.
- **Shopify and Calendar** — not re-read; Friday's cash review read both live.
- **Attachments** — **none downloaded, opened or described.** Both job threads
  carry calibration files and datalogs; **filenames are withheld with the
  files.**
- **The settlement deadline** — not read beyond the subject and sender.
- **Mail state** — nothing read, starred, labelled, archived or marked. The six
  full reads were plain-text and metadata only; **the two unread customer
  messages were left unread**, which is why they are §1 item 1 rather than a
  closed item.
