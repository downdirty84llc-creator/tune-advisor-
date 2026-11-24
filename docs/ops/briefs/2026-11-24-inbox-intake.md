# DD84 inbox intake — 2026-11-24

Run 10:21:32Z–<!--FINISH-->. Window: `newer_than:1d` (since 2026-11-23 10:21Z).
Accounts scanned: Gmail, the business account. Not reached: Superhuman Mail,
Stripe (no MCP server), PayPal.

**SKELETON — evidence captured, analysis being written.**

## 0. Checkout

`HEAD` equals origin at **`e58806d`**, no `src/`, clean, **108 tracked files
against the prompt's 28 — fifty-sixth run reporting the drift.** Skeleton
committed before the analysis: **twenty-sixth application of OL-0050**, and this
one carries a security notice.

## Evidence captured

### 1. A payment-processor security notice, unread

**Thread `1a20a3a6463daace`, 2026-11-23T21:05:28Z, UNREAD.** The payment
processor reports **a sign-in from a device it does not recognise**: a Chrome
Mobile browser on Android, located in **Atlanta, Georgia**, at **2026-11-23
16:05:25 EST**.

**No conclusion is drawn.** An Android phone in Georgia is entirely consistent
with the owner's own handset, and he was working that weekend. **But the notice
is unread, so nobody has confirmed it**, and it lands on the same account whose
secret keys T-171 says became unreadable on 2026-11-20.

**The originating IP address and the "I don't recognise this device" link are
withheld.** The link carries an authentication token in its query string and
**publishing it here would put a live security action in a world-readable
file.** The IP is a location identifier no approval covers.

### 2. A second device event on a second processor, same day

**Thread `1a20a45a28edef6d`** — the other payment processor sent **"Stay logged
in on this trusted device."** **Two payment-processor device events in one day.**
Again consistent with one person signing in on one phone; **again not
confirmed.**

### 3. The routine's own customer-finding query is blind

| Query | Window | Result |
| ----- | ------ | ------ |
| `category:primary` | `newer_than:1d` | **zero** |
| `category:primary` | **`newer_than:7d`** | **zero** |
| `category:personal` | `newer_than:2d` | **6 threads, including the live Ram customer** |

**`category:primary` matches nothing in this mailbox over a full week.** The
command file calls query 1 "the one that finds customers". **It is not finding
them; `category:personal` holds them.**

**I reported its zeros as real findings on 2026-11-20 and 2026-11-23** — "a real
zero from the right query, not a missing connector". **That was wrong.** What
found the two live jobs on 11-23 was query 6, the general sweep.

### 4. Money

- **An HP Tuners order was received and completed** — threads
  `1a20a53dbde17409` and `1a20a53dd733468f`. **The first observable
  tooling-or-credits purchase in this record**, and a direct input to T-186,
  which says no job carries parts, credits or hours. **Amount not read, and
  withheld under A-30 regardless.**
- **A dealer product notice from the same vendor** (`1a2094d867fbc59a`) —
  DD84 is on that vendor's **dealer** list.
- **The vendor whose charge has failed seven times is now following up
  personally** — thread `1a208cfc96f17ebf`, "Just following up".
- **A bank holiday notice: 2026-11-26, deposits may be delayed**
  (`1a2094ec0c671aaf`). **T-202's second scheduled outflow is today.**
- **The debit card was switched on and off again** (`1a20966de81cc90f`,
  `1a20967ebcd55067`). T-205 and T-184 unchanged.
- **A second "Credits" reply** from the performance vendor
  (`1a209401ce51e02b`), two days running.

### 5. A sales channel was rejected

**Thread `1a2091606403fa40` — a marketplace application was REJECTED**, with a
second message demanding business verification (`1a20958bff1b2724`). **New.**

### 6. Two things the owner closed himself

- **The class-action claim was FILED** — thread `1a2082e760e284f9`, "Claim Form
  Confirmation". **T-232 asked for this and it is done.**
- **T-226 was answered.** `in:sent` shows replies to both live-job customers.

### 7. Drafts

**52, paginated to exhaustion, unchanged from 2026-11-23. The newest is still
2026-11-21T16:52:10Z — no draft created or cleared in three days. A-31 is
unanswered.**

### Sections still to write

Urgent · New leads · Existing customers · Drafts NOT SENT · Conflicts ·
No action · Proposed labels · Not checked
