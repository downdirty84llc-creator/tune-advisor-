# DD84 cash and revenue review — week ending 2026-10-09

Period: **2026-10-02T11:11Z → 2026-10-09T11:11Z** (the seven days ending at the
run timestamp). Run at 2026-10-09T11:11–11:26Z.

Systems reached: **Shopify** (orders + ShopifyQL), **PayPal transactions only**,
Gmail, the operating record. Not reached: **Stripe**, **bookipay**, **PayPal
invoices and disputes**, **every advertising account**.

**Every figure below names its system and a read time. A system not reached
produces "not available" — never an estimate.**

> **Read this before any number.** The two systems that have ever carried DD84
> revenue — **Stripe and bookipay** — were both unreadable this run. **This
> review cannot tell you what came in.** It can tell you what did not come in
> through Shopify and PayPal, what is about to go out, and two cash signals in
> the mailbox that nobody has opened.

## Closed in period

| Source system | Gross                      | Refunds       | Disputes          | Net                | Read at |
| ------------- | -------------------------- | ------------- | ----------------- | ------------------ | ------- |
| **Stripe**    | **Not available this run** | Not available | Not available     | **Not available**  | —       |
| **bookipay**  | **Not available this run** | Not available | Not available     | **Not available**  | —       |
| PayPal        | $0.00                      | $0.00         | **Not available** | **$0.00, partial** | 11:11Z  |
| Shopify       | $0.00                      | $0.00         | $0.00             | **$0.00**          | 11:12Z  |

**TOTAL: not stated. It would span two systems that could not be read**, and
reporting a total across an unread system is forbidden by this routine's own
contract.

**What each line actually means:**

- **Stripe** — no Stripe MCP server exists in this session. Account
  `acct_1QBl8ZINLKqe1c6g` was **not read**. Third consecutive run. **T-36.**
- **bookipay** — no API access, by design and by record. **`ventures.md` states
  every historic DD84 payment came through it**, so this is the single most
  important gap in this document.
- **PayPal** — `list_transactions` returned **0 transactions**, but **narrowed
  the window to 2026-10-09T08:59:59Z**, its own last refresh. Two hours of today
  are unread. `list_invoices` and `list_disputes` then failed outright: **the
  connector dropped to "needs re-authentication" mid-run.** So PayPal is
  **零 transactions in a truncated window, and receivables and disputes entirely
  unchecked.**
- **Shopify** — a genuine zero, confirmed two ways: `list-orders` returned
  `totalCount: 0`, and ShopifyQL over the last 30 days returned
  `orders 0, gross_sales 0, discounts 0, sales_reversals 0, net_sales 0, total_sales 0`
  on `49qz1e-0r.myshopify.com`. Store confirmed as **Down Dirty 84 LLC**,
  `shop.downdirty84llc.com`, Basic plan, USD, EDT.

**No double-counting risk this period.** Reconciliation between Shopify and
Stripe is the usual hazard; with Shopify at a verified zero there is nothing to
match, and nothing to overlap.

## Against the verified baseline

`ventures.md`, **verified 2026-08-03 — now 67 days old.** The standing rule says
anything past 30 days is re-verified before being quoted. **It cannot be
re-verified from this session**, so it is quoted with its date attached and
**the change since cannot be computed.**

| Baseline metric          | Value          | Verified   | Re-verifiable today?                             |
| ------------------------ | -------------- | ---------- | ------------------------------------------------ |
| All-time revenue         | $3,507.86      | 2026-08-03 | **No** — Stripe and bookipay unreadable          |
| Paid invoices            | 10             | 2026-08-03 | **No**                                           |
| Distinct customers       | 3              | 2026-08-03 | **No**                                           |
| Last payment received    | **2025-09-12** | 2026-08-03 | **No**                                           |
| Shopify orders, all time | 0              | 2026-08-03 | **Yes — still 0.** Confirmed 11:12Z over 30 days |

**One of the five is confirmed and four are stale.** The one confirmed is the
zero. **Change in all-time revenue since 2026-08-03: not computable this run.**

**Ledger revenue is not in this document and never will be.** Standing owner
decision, 2026-09-16: the two businesses stay separate. The Ledger has zero
subscribers in any case.

## Recurring vs one-off

**Recurring revenue: $0.00, and the basis is structural rather than a reading.**
DD84 has no subscription product live. The catalogue's recurring rung is the
shop-to-shop support session ($150/$250/$350) and the Professional Shop Licence
($399); **neither has a recorded sale.** The Ledger's $15/$39/$99 tiers are the
other venture and are excluded.

**One-off revenue: not available** — see above.

## Pipeline — quoted but not closed

| Customer / opportunity                        | Value            | Stage                                                      | Age                       | Probability basis                                        | Task     |
| --------------------------------------------- | ---------------- | ---------------------------------------------------------- | ------------------------- | -------------------------------------------------------- | -------- |
| The C10 customer — Terminator X Max AFR fault | **not recorded** | Diagnostic work done; revised tune built and held          | 5 days (since 2026-10-04) | **None. No quote, no deposit, no price was ever stated** | **T-37** |
| r/LSSwapTheWorld — three handles              | **not recorded** | No contact made                                            | 1–3 days                  | **None** — unweighted                                    | **T-41** |
| GDOT shop site access review                  | **not revenue**  | Favourable concept response; right-in/right-out constraint | 16 days                   | n/a — a capital project, not a sale                      | **T-38** |

**Pipeline value: $0 recorded, and that is a finding about record-keeping rather
than about demand.** The one live job has had 22 messages, a diagnosis and a
built tune file **with no price attached at any point.** Against the catalogue
it sits between $99 and $650 depending on which service it is, and **Torque will
not pick a number** — that is a pricing decision and pricing authority is the
owner's.

## Owed to DD84

| Customer                   | Amount | Invoice | Days past due | System confirming | Action |
| -------------------------- | ------ | ------- | ------------- | ----------------- | ------ |
| **Not checkable this run** | —      | —       | —             | **None**          | T-36   |

**Receivables were not checked, and that is not the same as none outstanding.**
Stripe was absent, bookipay has no API, and PayPal's invoice endpoint failed
with a re-authentication error. **Largest overdue receivable: unknown.**

**The one thing that can be said:** `ventures.md` records the last payment as
**2025-09-12, thirteen months ago**, and the 2026-08-07 owner decision closed
the ten historic invoices as a line of enquiry. **That decision is respected
here** — the gaps in invoice numbering are not raised and the line items are not
chased.

## Owed by DD84 — next 30 days

| Payee                | Amount                   | Due                                              | Recurring? | Source of this figure                                                                                  |
| -------------------- | ------------------------ | ------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------ |
| **Webador**          | **UNKNOWN**              | **Not stated — "will be charged automatically"** | Annual     | Invoice email `2026-1408429`, 2026-10-09T04:16Z. **Amount is in a PDF attachment no session can open** |
| Google Play (Roblox) | Charged, amount not read | Already taken 2026-10-09T13:12 EDT               | No         | Receipt email, order `GPA.3303-8060-8105-36366`. **Appears personal, not business**                    |
| Shopify Basic plan   | **not recorded**         | **not recorded**                                 | Monthly    | Plan confirmed as Basic 11:12Z; **no invoice or renewal date was read**                                |
| Everything else      | **not recorded**         | —                                                | —          | **No vendor invoice or renewal notice other than Webador's was found in 14 days of mail**              |

**Committed spend from approved packets: $0.** No approved packet carries a cash
commitment. A-05 (Stripe products) and A-06 (legal review) are approved but
**neither has a recorded cost** — A-06's fee was never quoted, and that is
recorded in the packet rather than estimated.

**Upcoming spend is materially incomplete and the reason is simple:** the only
way an agent can see DD84's recurring costs is a renewal email landing in the
window. Software subscriptions billed silently to a card are invisible here.

## Job and product margin

| Job / product      | Revenue          | Parts                  | Software credits | Travel      | Labour           | Margin             | Complete?      |
| ------------------ | ---------------- | ---------------------- | ---------------- | ----------- | ---------------- | ------------------ | -------------- |
| The C10 job (T-37) | **not recorded** | $0 (customer-supplied) | **not recorded** | $0 — remote | **not recorded** | **Not computable** | **INCOMPLETE** |

**Missing inputs, named:** the revenue (no price was ever quoted), any HP Tuners
or Holley software credits consumed, and labour — **and no labour rate is
assumed, because the spec forbids assuming one.**

**No job closed in the period, so no margin is computable for the week.** The
one open job cannot be costed because its price does not exist yet, which is the
finding.

## Advertising spend

**Not available this run — and specifically not zero.**

`data_source_discovery` returned **32 advertising and CRM sources, every one
`NOT_AUTHENTICATED`** — Google Ads, Meta, Microsoft, TikTok, LinkedIn, Reddit,
Pinterest, Amazon, Snapchat and the rest. **No account is connected, so no spend
figure can be read from any of them.**

`ventures.md` records paid advertising as never used, with no account and no
budget. **That is consistent with what Supermetrics shows, and it is still not a
reading of zero spend** — an unconnected account and an account with no spend
are indistinguishable from here. The honest statement is: **no advertising spend
was verified, in either direction.**

## Two cash signals in the mailbox that nobody has opened

Both found by searching 14 days of mail for invoice and renewal terms. **Neither
is in the register.**

**1. A bank transfer was declined.** `service@paypal.com`, 2026-10-05T19:10:17Z,
**unread**: _"Your bank declined your electronic funds transfer. You recently
attempted to transfer funds from your bank account. Your bank has…"_ (the
snippet truncates).

**Why this matters more than its size.** A declined ACH pull is one of two
things: a bank-side block, or insufficient funds. **Torque cannot tell which and
will not guess** — the transfer amount, the direction and the reason are all in
the unread message, and no bank connector exists on this account. **For a
business with no verifiable revenue in thirteen months, a declined transfer is
worth opening today.** → **T-49**

**2. HP Tuners has issued a "Do Not Sell List".**
`system@sent-via.netsuite.com`, 2026-10-05T15:02:24Z: _"Dear Valued HP Tuners
Partner, Please find attached HP Tuners Do Not Sell List. This list becomes
effective **NEXT DAY FROM RECEIPT at 12:01:00 AM**. The entities on the attached
files are in violation of…"_

**This is a supplier compliance obligation with a same-day effective date, now
four days past.** HP Tuners is in DD84's stated capability list, so DD84 is a
partner this binds. **The attached list is unread** — no attachment-download
tool in this session — so **who is on it is unknown.** If DD84 has sold, or is
about to sell, to a listed entity, that is a vendor-relationship risk. Not a
cash figure, which is why it is reported here as a finding and not a number. →
**T-50**

## Corrective actions

Ranked by money at stake and reversibility.

1. **Open the declined-transfer email.** Money at stake: **unknown and that is
   the problem** — it could be a $20 test or a payroll-sized failure. Action:
   read it, establish amount, direction and reason. **No packet needed to read
   it**; any remedial transfer is Class E. → **T-49**
2. **Restore a readable path to revenue.** Money at stake: **the entire revenue
   picture.** Three consecutive runs have been unable to state what came in.
   Action: connect Stripe to this account, and agree a bookipay export the agent
   can read. **Owner action; no packet needed to connect a connector.** →
   **T-36**
3. **Price the C10 job.** Money at stake: **$99–$650 against the catalogue**,
   and **the range stays a range** — Torque will not pick the midpoint. Action:
   the owner sets the price and whether it is already billed. **Pricing is Class
   E and is the owner's alone.** → **T-37**
4. **Read the Webador invoice before it charges.** Money at stake: unknown,
   annual, and already in flight. Action: open the PDF, record the amount and
   renewal date, decide keep or cancel. **Cancelling is Class E and needs a
   packet.** → **T-46**
5. **Read the HP Tuners list.** Money at stake: not quantifiable; the risk is
   partner standing, not cash. Action: open the attachment and check it against
   DD84's customers. → **T-50**
6. **Re-verify the five baseline figures and re-date them.** Four of five are 67
   days stale and quotable only with a caveat. Blocked on action 2. → **T-36**

**No packet is raised by this review.** Every action above is either a read, or
a decision that already has a task. **Nothing here needs a new approval to
investigate** — and the three that would spend or move money are flagged as
Class E so they cannot be done quietly.

## Not checked this run

| Source                           | Reason                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Stripe — everything**          | No Stripe MCP server in this session. Charges, refunds, disputes, invoices, subscriptions, **balance and payouts** all unread. |
| **bookipay — everything**        | No API access by design. The system that carries 100% of historic revenue.                                                     |
| **PayPal invoices and disputes** | Connector dropped to **"needs re-authentication"** mid-run, after the transaction read succeeded.                              |
| **PayPal, 08:59:59Z → 11:11Z**   | The API silently narrowed the requested window to its own last refresh.                                                        |
| **Bank accounts**                | **No bank connector exists on this account.** Cash position cannot be read at all — see below.                                 |
| **Advertising spend**            | 32 sources, all `NOT_AUTHENTICATED`. **Not available, not zero.**                                                              |
| **Webador invoice amount**       | PDF attachment; no download tool. **Not estimated.**                                                                           |
| **HP Tuners list contents**      | Same. **Who is on it is unknown.**                                                                                             |
| Recurring software costs         | Only visible via a renewal email in the window. Anything billed silently to a card is invisible.                               |
| `dd84tuning.com`                 | Blocked by this environment's egress proxy; no Manus connector.                                                                |

---

## Cash position, and the honest answer

**DD84's cash position cannot be stated.** There is no bank connector on this
account, Stripe is absent, bookipay has no API, and PayPal's balance was not
reachable before it dropped. **Reporting a cash position here would require
inventing one.**

**Largest overdue receivable: unknown** — receivables were not checked, which is
not the same as there being none.

**What is known, and it is thin:** $0.00 came in through Shopify over the last
30 days and $0.00 through PayPal over the last 7, both read from the live
systems. One annual charge is inbound with an unknown amount. One bank transfer
was declined four days ago and nobody has opened the email.

**A cash review that cannot state cash is a defect in the setup, not in the
week.** The fix is action 2 and it is one connector away.
