# DD84 inbox intake — 2026-11-20

Run 10:21:25Z–<!--FINISH-->. Window: `newer_than:1d` (since 2026-11-19 10:21Z,
the previous intake). Accounts scanned: Gmail, the business account. Not
reached: Superhuman Mail (authorisation expired), Stripe (no MCP server exists),
PayPal (authorisation expired).

**SKELETON — evidence captured, analysis being written.**

## Evidence captured, before analysis

### The six queries

| #   | Query                                        | Returned |
| --- | -------------------------------------------- | -------- |
| 1   | `category:primary newer_than:1d`             | **ZERO** |
| 2   | `is:important newer_than:1d`                 | 3, all machine-generated |
| 3   | `in:sent newer_than:1d`                      | **ZERO** |
| 4   | `label:[Superhuman]/AI/Respond` + `/Waiting` | 20 shown, ~65 estimated |
| 5   | `list_drafts`                                | **51 drafts, paginated to exhaustion** |
| 6   | `newer_than:1d -in:sent`                     | 30 shown, ~61 estimated |

### Facts read, with thread IDs and times

- **Draft backlog: 51 unsent drafts.** Two pages, second page returned no
  continuation token, so 51 is the complete count. **33 were created on
  2026-11-16 between 16:49:37Z and 16:53:11Z** — thirty-three messages to
  performance-industry suppliers, dyno vendors and tuning firms, written inside
  four minutes, none sent. **One was created 2026-11-19 at 08:29:19Z**, about
  two hours before yesterday's intake ran.
- **T-42 recorded fifteen unsent drafts on 2026-10-10 and is 41 days past due.
  The backlog is now 51.**
- **Five drafts are still addressed to the counterparties T-42 called likely
  loan fraud**, dated 2026-09-30 and 2026-10-02.
- **That counterparty is active again**: two inbound messages titled "Down Dirty
  84 LLC Store", both sitting in the Respond/Waiting label.
- **Vendor charge failed a fourth consecutive day.** Thread
  `1a1f6241c4a4f7a8`, **2026-11-19T23:28:44Z**, unread. Stripe failed-payment
  notice for the vendor Ocoya, subject says "unsuccessful **again**". Prior
  failures 11-16, 11-17, 11-18 (T-198). **Amount withheld, A-19** — it is a
  declined-payment amount, and A-30 is the pending question.
- **The SBA 504 enquiry bounced.** Thread `1a0a6326f2f63525`, sent
  **2026-09-15T17:51:58Z** to a lender; a delivery-failure notice arrived
  **2026-09-15T17:52:03Z, five seconds later**. No redelivery in the thread.
- **A second prospective site, in a second county.** That same SBA thread names
  a "30x50 Dyno Facility in **Jefferson, GA**" (Jackson County). The register
  tracks a Colbert site (Madison County) across T-38, T-53, T-57, T-70, T-90.
  **Jefferson appears nowhere in the register or `ventures.md`.** The Colbert
  financing thread is titled "final corrected … Colbert scope" and the Jefferson
  thread predates it by weeks.
- **Printify removed product variants.** Thread `1a1f83cf3247452f`,
  **2026-11-20T09:15:04Z**, unread, flagged important — about an hour before
  this run. Upstream variant removal on a print-on-demand supplier.
- **Merry Market is live in Google Merchant Center** — a store-ratings prompt
  arrived for "Merry Market by DD84" (reinforces T-201).
- **The Georgia Opportunity Ledger platform is emailing weekly digests** to this
  inbox. That is the other venture; no DD84 action, and nothing crosses over.
- **Nothing left the business for a third consecutive day.** With yesterday's
  measurement: last outbound to any outside party 2026-11-13T16:41:57Z
  (**6d 18h**); last to a performance-industry counterparty or customer
  2026-11-10T17:54:55Z (**9d 17h**).
- **The last four intake briefs carry no draft-backlog section.** Query 5 went
  unreported while the backlog more than tripled.

### Sections still to write

- Urgent — read first
- New leads
- Existing customers needing a reply
- Drafts prepared — NOT SENT
- Conflicts found
- No action, with reason
- Proposed labels (not applied)
- Not checked this run
