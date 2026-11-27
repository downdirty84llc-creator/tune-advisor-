# DD84 inbox intake — 2026-11-27

Run 10:20:45Z–10:25:20Z (both read from the clock, T-116). Window:
`newer_than:1d` (since 2026-11-26 10:21Z), with one diagnostic widening to two
days. Accounts scanned: Gmail, the business account. Not reached: Superhuman
Mail, Stripe (no MCP server exists), PayPal, Canva.

Threads reviewed: **38** distinct. **Actionable: 4. Mapped to existing rows and
verified unchanged: 4. No-action: 30.** **New leads: 0. New drafts: 0.** Drafts
enumerated: **52**.

Arithmetic: the window sweep returned 31; the two-day personal widening added 3
the window did not reach; **4 tracked threads were opened one at a time to
verify read state.** **31 + 3 + 4 = 38**, and **4 + 4 + 30 = 38**.

---

## 0. First: yesterday's daily brief does not exist

**The 2026-11-26 daily command brief produced no output.** It is not a late file
or an unpushed commit — **there is no brief, no log entry and no commit.**
`docs/ops/briefs/` holds the 11-26 intake and nothing else for that date, and
`OPERATING-LOG.md` runs OL-0126 (the 11-26 intake) straight to the OL-0127
marker.

**What happened, as far as this session can establish it:** the run verified the
checkout, read Google Calendar live for 2026-11-26 to 2026-12-04 and got **zero
events**, then issued a Shopify analytics query. **A worker restart landed while
that call was still awaiting approval.** The call never ran, and the restart
ended the turn before anything was written.

**This is a lost run, and it belongs in the same family as A-10 and T-27** —
seven weeks of scheduled output that died with its session — **with a different
cause.** A-10 is about fired sessions having no repository attached; this
session has one, which is why every other run this fortnight committed. **The
new failure mode is a restart inside a single turn**, and the defence against it
is the skeleton rule (OL-0050), which the daily brief had judged it did not need
because its inputs were already on the remote.

**The judgement that cost the run was defensible and still wrong.** The daily
brief's "no skeleton" judgement has been correct for twenty-odd runs because its
inputs are all in the register and the morning's intake. **What it did not
account for is that the brief's own reasoning is the output** — and reasoning is
destroyed by a restart whether or not its inputs survive. **T-259.**

**The calendar reading is the one thing worth salvaging: zero events for
2026-11-26 through 2026-12-04, read live at 10:51Z on 11-26.** Recorded here
because it was genuinely read; it is not re-reported as today's reading.

---

## 1. Urgent — a credit card is over its limit, and nobody has read it

**Thread `1a2178c8651933a2`, 2026-11-26T11:10:14Z, UNREAD.** The card issuer
reports that **a card is over its credit limit.** The issuer **approved the
purchase that crossed the line anyway**, and states that it **charges no
over-limit fee.**

**Withheld, and the list matters:** the credit limit, the current balance and
pending charges, the amount over the limit, the card's last four digits, and the
merchant and amount of the purchase that crossed it. **The first three are
account-level figures (A-19 Option C), the last is an outflow amount (A-30,
pending), and card digits are excluded by §5 regardless.** The thread ID above
is one click from all of it in the owner's own inbox.

**"Withheld, A-19" — not "not available".** Every figure was read.

**Why this is the run's lead.** Set beside what the register already holds, it
is not an isolated event:

| Row     | What it records                                                     |
| ------- | ------------------------------------------------------------------- |
| T-153   | A card declined for insufficient funds — **not** for being off      |
| T-205   | The debit card toggling on and off, most recently 11-25 22:44→22:47 |
| T-227   | A vendor charge that has failed **seven consecutive times**         |
| T-202   | Dated outflows, the second of which fell 2026-11-24                 |
| T-242   | 2026-11-26 was a bank holiday; deposits may be delayed              |
| **new** | **A credit card is now over its limit**                             |

**The shape, with no figures: this is a business operating at the edge of its
available credit, and the notice saying so is unread.** **T-258, Critical.**

**Two statements also arrived and are unread** — a card statement
(`1a219194473f8e1a`) and a bank statement notice (`1a21a364db9f590a`). **The
bank's subject line carries masked account digits, which are withheld under
§5.** **Both are direct inputs to the weekly cash review, which falls today.**

---

## 2. Still unread, verified one thread at a time

**Per T-254, read state was checked by opening each thread, never by absence
from a list.**

| Row       | Thread             | Unread since | Note                                              |
| --------- | ------------------ | ------------ | ------------------------------------------------- |
| **T-237** | `1a20a3a6463daace` | **day 4**    | The processor sign-in from an unrecognised device |
| **T-243** | `1a20e57c11cfe22e` | day 3        | The phishing attempt                              |
| **T-244** | `1a2102b9147053cf` | day 2        | The 20-items-to-zero channel drop                 |
| **T-248** | `1a210cb19bb24468` | day 2        | **The 8% rise — lock-in shuts in 4 days**         |

**T-248 is the one with a clock that is now short.** The increase takes effect
**2026-12-01**, the message offering to lock the current price first is still
unopened, and it sits under promotions.

**The flip side of T-254, worth recording because it is the useful half.**
Yesterday established that absence from a _full_ page proves nothing. Today's
two-day personal query **returned 7 threads against an estimate of 7 — not a
full page — so its window is genuinely covered**, and the Ram thread's absence
from it is sound evidence rather than an artefact. **A non-full page is evidence
of absence; a full one is not.**

---

## 3. New leads

**None.** `category:primary` returned zero for the **fifth consecutive run**
(T-238), and the queries that actually find humans returned no enquiry: the
two-day personal sweep is seven threads, six of them a marketplace's marketing
and one a family-account notice.

---

## 4. Existing customers — a second day of silence

**`in:sent` returned zero for the second consecutive 24-hour period.** The last
message the owner sent on the live job was **DRAFT 6 at 2026-11-25T01:08:23Z**,
so the Ram job has now been **silent for about 57 hours**, and no inbound
message has arrived either.

**Still no conclusion about why**, and the holiday reading is now weaker than it
was yesterday rather than stronger: a bank holiday explains one quiet day more
easily than two and a half. **What is unchanged is that six revisions of
delivered work carry no price and no invoice.** A-21 row 1. T-255 updated.

| Row                            | State today                                      |
| ------------------------------ | ------------------------------------------------ |
| **T-223 / T-255** (Ram)        | **Silent ~57h at DRAFT 6. Unpriced, uninvoiced** |
| T-206 / T-224 (Silverado)      | Unchanged. Delivered, unpriced, uninvoiced       |
| T-249 (the returning customer) | Unchanged. No catalogue rung, and no address     |
| T-64, T-37, T-66, T-177, T-95  | Unchanged                                        |

---

## 5. An account-recovery sequence, routed here, personal

Six messages inside two minutes on 2026-11-27, all **UNREAD**, all to the
business address because it is the recovery address on a **family member's**
Google account: a password change, a sign-in on a named device, a security
alert, **"Your Google Account was recovered successfully" at 01:43:01Z and a
second notice at 01:44:33Z**, and a verification code.

**Classified personal, not business**, consistent with how this record has
treated family-device notices throughout. **Recorded anyway, for one reason:
account recovery plus a verification code landing in the business mailbox is
either entirely routine or the signature of a takeover, and nobody has looked.**

**No conclusion is drawn in either direction.** **Withheld:** the third party's
email address, the device name, and the verification code — the code especially,
because publishing a live authentication value into a world-readable repository
would be indefensible whatever its age. **T-260**, Normal priority, because the
likeliest reading is a child resetting a forgotten password.

---

## 6. Money

- **The over-limit notice and two statements** — §1.
- **No order, no customer payment, no deposit.** Nothing came in.
- **No new debit-card toggle** in the window; the 11-25 22:44→22:47 pair remains
  the latest, per T-205.
- **The credits purchase (T-239) is still unread**, so its amount is still
  unread as well as withheld under A-30.

---

## 7. Conflicts found

**None new.** T-225's model-year conflict and T-249's catalogue gap are
unchanged, and nothing in today's mail bears on either. **Query 1 still matches
nothing** (T-238) — fifth run, fix proposed and not applied, because changing
what an unattended routine does is the owner's call.

---

## 8. Drafts prepared — NOT SENT

**No new draft was created, in this file or in the mail account.** No inbound
message asked for a reply, and the three items that could attract one should not
get one: **the over-limit notice is from a no-reply address**, the phishing
attempt's reply _is_ the attack, and the account-recovery sequence is personal.

**The backlog is 52**, paginated to exhaustion with an API-issued token. **The
newest draft is still 2026-11-21T16:52:10Z — nothing created or cleared in six
days.** **A-31 remains unanswered.** T-228 stands.

The standing drafts for T-177 and T-95 remain **APPROVAL REQUIRED BEFORE SENDING
(Class C)** under A-29.

---

## 9. No action, with reason

- **Six vehicle-listing digests, six marketplace promotions, two freelance
  digests, a sports newsletter, a prediction-market mail, a business-newsletter,
  an idea newsletter and a professional-network notice** — marketing. No action.
- **Seven family-device app-install and sign-in notices** — personal, not
  business. Device and account names withheld. The security-shaped ones among
  them are at §5.
- **The other venture's weekly source digest arrived here** (`1a2183a46bf3360a`,
  covering 2026-11-19 to 2026-11-25). **Recorded as a one-line observation and
  nothing more.** It is evidence that the Georgia Opportunity Ledger platform is
  running and sending, which is worth knowing — **but the two businesses are
  separate by the owner's decision, so nothing in that digest becomes a DD84
  record, no row is created for it, and nothing was written into
  `docs/growth/`.**

---

## 10. Proposed labels (not applied)

Labels remain Class B with no approved taxonomy. **Nothing was applied, moved,
archived or marked read.**

- **`DD84/Money/Urgent`** → the over-limit notice and the two statements. **New
  today and the one to act on**, because an over-limit notice filed under
  updates looks like a statement.
- **`DD84/Security`** → the four unread security notices. **Fourth run proposing
  it**, and T-237 is now on day four.
- **`DD84/Dated`** → T-248 (12-01) and T-250 (12-09).
- `DD84/Personal` → the family-account sequence, so it stops competing with
  business mail for attention.

---

## 11. Not checked this run

- **Stripe** — no MCP server exists. The sign-in notice was read from mail
  headers only.
- **PayPal, Superhuman Mail, Canva** — authorisation expired.
- **Bank, Square, Chime, Melio, Capital on Tap, the card issuer** — **no
  connector.** **Every figure in §1 was read from a mail body, not from an
  account**, and the balance cannot be confirmed from here.
- **Shopify and Calendar** — not read this run. **The 11-26 daily brief's
  calendar reading is quoted at §0 and labelled as that run's, not this one's.**
  Today's daily brief should read both live.
- **The second storefront's Merchant Center account** — no connector. T-244's
  cause is still unreadable from here.
- **Supabase** — no tool called.
- **Attachments** — **none downloaded, opened or described.**
- **Links** — **none followed**, including the payment and sign-in links in the
  over-limit notice.
- **Mail state** — nothing read, starred, labelled or marked. **Every item in
  §1, §2 and §5 was left unread.**
