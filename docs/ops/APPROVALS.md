# DD84 approval log

Every decision put to the owner, in the packet format of
`docs/DD84-OPERATIONS-AGENT.md` §7, with the fields §9 requires of an approval
record: request, evidence, owner response, limits, expiration, affected records
and actual result.

**Rules.**

- A packet is appended, never rewritten. Only the **Response** and **Actual
  result** blocks are edited, and only once, when the owner answers and when
  execution completes.
- An approval authorises **exactly** what its Limits block says. Any variance —
  cost, scope, systems touched, customer impact — is a new packet, not a liberal
  reading of an old one.
- An expired approval is dead. Re-request rather than execute late.
- **Seeded 2026-08-06** from repository evidence and the owner's stated
  decisions. Response dates for A-01 to A-04 are taken from the commit dates of
  the work they authorised, because the conversations themselves were not
  recorded anywhere durable — which is the failure this file exists to end.

---

## Status board

| ID   | Decision                                                                    | Class | Status                      | Covers                             |
| ---- | --------------------------------------------------------------------------- | ----- | --------------------------- | ---------------------------------- |
| S-01 | Standing approval for local repository work                                 | A/B   | **Approved** (standing)     | T-08 T-09 T-10 T-15 T-16 T-24 T-25 |
| A-01 | Adopt the DD84 spec, CLAUDE.md and the Torque definition                    | B     | **Approved**                | T-01 T-02 T-03                     |
| A-02 | Correct drifted documentation and the legal-review flags                    | B     | **Approved**                | T-04 T-05                          |
| A-03 | Exclude demo accounts from owner-facing revenue reporting                   | E-adj | **Approved**                | T-06 T-12                          |
| A-04 | Correct the annual MRR arithmetic                                           | E-adj | **Approved**                | T-07                               |
| A-05 | Create Stripe products and prices; run the payment matrix                   | E + F | **Approved**                | T-11                               |
| A-06 | Commission legal review of the legal documents                              | G     | **Approved**                | T-13                               |
| A-07 | Subscribe to an upload virus-scanning service                               | E + F | **Pending**                 | T-14                               |
| A-08 | Build the operations control plane                                          | B     | **Approved**                | T-18 T-19 T-20 T-21 T-22           |
| A-09 | Merge the two agent branches and converge the schedule                      | B     | **Approved**                | T-23 T-24 T-25 T-26                |
| A-10 | Give the Routines a repository to write to                                  | B     | **Pending**                 | T-27                               |
| A-11 | Consolidate onto the Ledger repository                                      | F     | **Approved, narrowed**      | T-28 T-29                          |
| A-12 | Accept the unremovable send Routine as a recorded risk                      | C-adj | **Accepted**                | T-30                               |
| A-13 | Decide the visibility of a public repository holding DD84's revenue figures | G     | **Approved** (not executed) | T-32, blocks T-29                  |
| A-14 | Route the Routines through a repository-holding session                     | B     | **Approved**                | T-27                               |
| A-15 | Send two prepared replies — GDOT District 1, and the Georgia SBDC           | C     | **Pending**                 | T-38 T-39                          |
| A-16 | Redact customer identity from the append-only log and a sealed packet       | B     | **Approved** (executed)     | T-48                               |
| A-17 | Decide on twelve third-party people's contact details in a public repo      | G     | **Pending**                 | T-51                               |

**Four packets are with the owner: A-15, A-17, A-07 and A-10.**

> **Reconciled 2026-10-12 by the daily brief.** This board had **A-16 as
> Pending** when its own Response block records **APPROVE (Option A), owner,
> 2026-10-09**, executed the same day — and **A-17 had no row at all** though
> its packet exists and T-51 cites it. Both fixed. **That is the fifth and sixth
> time in five days that this board or the register's summary table has
> contradicted the record below it**, across three different sessions. The fix
> is structural, not another reminder: see OL-0034 and OL-0038.

- **A-15** — raised 2026-10-08 by the first intake run. Two drafts, written in
  full, neither sent, neither placed in the mail account. **The only packet with
  a human counterparty waiting**: a GDOT engineer since 2026-10-06T22:04Z.
  Answer this one first.
- **A-16** — raised 2026-10-09 by the scheduled intake. One customer's name,
  email and mobile number sit in the **append-only** log and in A-15's own body,
  and **an agent may not edit either without a decision.** The two files whose
  write modes allow it are already clean. **The only packet about a real
  person's data being world-readable.**
- **A-07** — open since 2026-08-06. Ledger scope; blocks accepting uploads
  safely, not launch.

**Answered, and worth not misreading:**

- **A-13 — CLOSED as Option 3**, 2026-10-08. The owner was asked twice: first
  chose Option 1 (make the repository private), then asked for the reasoning and
  **chose to accept the exposure instead**. Both answers are in the packet
  because the sequence is the useful part. **The repository stays public by
  decision**, which is what created the standing rule in `CLAUDE.md` §5 — and
  what A-16 now turns on.
- **A-14 — APPROVED and executed.** Four Routines bound to a host session
  holding the repository. **It is not a substitute for A-10**: one session, its
  context grows without bound, all four serialise, and it grants no standing
  scheduling authority. **A-10 stays open.**
- **A-10 — still open.** The real fix is recreating the Routines from the
  claude.ai UI with a repository attached. **A-14 narrows the damage; it does
  not close this.**

> **Three packets were raised and answered within one hour on 2026-10-08, by two
> sessions working the same record concurrently, and the numbering collided.**
> A-13 (this session's daily brief) and A-14 (the sibling session's Routine
> stopgap) were both minted as "A-13"; the drafts packet was both "A-14" and is
> now **A-15**. The collisions were resolved on landing, in favour of whichever
> reached the branch first, and every cross-reference was repointed. **Nothing
> was renumbered to suit a tidier story and no packet was merged into another.**
> If a fourth number looks skipped, it is not — see OL-0031.

- **A-07** — unanswered since 2026-08-06. Does not block launch; it blocks
  accepting uploads safely.

**A-05 and A-06 were answered on 2026-08-10** and read "awaiting owner" on this
branch until 2026-09-25, because the answers were recorded on the other branch.
That six-week gap is the clearest argument for the single record this
consolidation creates — two truthful logs still add up to a false one.

---

## S-01 — Standing approval: local repository work

**Decision requested** — Standing authority to perform Class A and Class B work
inside this repository without a per-task packet.

**Source and context** — `CLAUDE.md` §10 and §11, authored under A-01 and
approved by the owner. This packet records the standing approval those sections
create, so it can be cited by task rather than re-derived each time.

**Limits — this authorises exactly:**

- Research, analysis, review, drafting, local file edits, running tests and
  linters, and preparing changes.
- Commits and pushes **to the branch designated for the task only**.

**It does not authorise:** opening or merging a pull request; pushing to any
other branch; touching production Supabase or Stripe; running the seeder outside
a local environment; any deletion or irreversible change; anything in classes C
through H.

**Response** — Approved, standing, by authorship of CLAUDE.md §10/§11 (commit
`6468118`, 2026-07-31). **Expiration** — None; revised whenever CLAUDE.md §10 or
§11 is revised. **Affected records** — T-08, T-09, T-10, T-15 (prepare only),
T-16 (prepare only), T-24, T-25. **Actual result** — Used seven times to date.
Each use is recorded against its task in `TASK-REGISTER.md` and its commit in
`OPERATING-LOG.md`.

---

## A-01 — Adopt the DD84 specification, CLAUDE.md and the Torque definition

**Decision requested** — Commit the owner's operations specification, a
repository orientation guide and a Torque agent definition to the repository.
**Business objective** — Owner time saved: every future agent session starts
oriented instead of rediscovering the same constraints. **Source and context** —
Owner-supplied PDF specification, July 2026. **Recommended plan** — Transcribe
the spec to `docs/`, write `CLAUDE.md`, write `.claude/agents/torque.md`.
**Alternatives** — Leave the spec as a PDF outside the repository: rejected,
because a PDF is neither searchable nor diffable by an agent. **Cost and cash
impact** — None. **Risks and safeguards** — Transcription drift from the
authoritative PDF; mitigated by a header note naming the PDF as controlling.
**Systems affected** — This repository only. **Customer/public impact** — None.
The repository is not public-facing. **Success test** — A new session can answer
"what may I do without asking" from the repository alone.

**Response** — **APPROVED**, 2026-07-31. **Limits** — Documentation only; no
code behaviour changes. **Expiration** — Consumed on execution. **Affected
records** — T-01, T-02, T-03. **Actual result** — Executed and verified. Commit
`6468118`, three files, 1,106 lines added. Log `OL-0001`.

---

## A-02 — Correct drifted documentation and the legal-review flags

**Decision requested** — Correct claims in README, ARCHITECTURE, MILESTONES and
RUNBOOK that the code did not support, and set the legal-review flags
truthfully. **Business objective** — Risk control. Documentation that overstates
what is built produces launch decisions made on false information. **Source and
context** — Agent review of each documented claim against the implementation.
**Recommended plan** — Diff every claim; correct or delete the failures; state
the residual honestly in MILESTONES. **Alternatives** — Leave it and fix at
launch: rejected, since the drift was already being cited in planning. **Cost
and cash impact** — None. **Risks and safeguards** — Setting `requiresReview`
truthfully makes seven documents render an "awaiting legal review" banner, which
is a visible admission. That is the correct behaviour and is why it needed an
owner decision rather than a silent edit. **Systems affected** — Repository
documentation and `src/lib/legal/documents.ts`. **Customer/public impact** — The
banner is member-visible on `/legal/[slug]`. **Success test** — Every remaining
claim in the docs is verifiable against code.

**Response** — **APPROVED**, 2026-07-31, including the visible banner.
**Limits** — No change to document _text_; flags and documentation only. Torque
made no legal determination. **Expiration** — Consumed on execution. **Affected
records** — T-04, T-05. **Actual result** — Executed and verified. Commit
`a489144`, five files, +122/−57. The exemption claimed for three documents was
written down as an open question rather than resolved, and became T-13. Log
`OL-0002`.

---

## A-03 — Exclude demo accounts from owner-facing revenue reporting

**Decision requested** — Change what the admin dashboard, MRR and the analytics
aggregate count, so seeded demo accounts stop being reported as real business.
**Business objective** — Revenue accuracy. The subscriber count and MRR are
numbers the owner would make decisions on. **Source and context** — Agent
finding: `scripts/seed.ts` writes ten demo accounts, all flagged `is_sample`,
and the dashboard counted them. **Recommended plan** — A single exclusion
predicate in `src/lib/analytics/sample-data.ts`, applied to the subscriber,
revenue and analytics paths, badged in the UI, carried into CSV exports, with
unit tests. **Alternatives** — Stop seeding demo data: rejected, because the
demo accounts are needed to exercise every tier. Filter at read time in each
caller: rejected, because it drifts. **Cost and cash impact** — None. **Risks
and safeguards** — The two filter helpers must stay asymmetric:
`analytics_events.user_id` is nullable and a null means real anonymous traffic
that must be kept, while `subscriptions.user_id` is not null. Unifying them
would make one tile wrong. Tests pin the rendered filter shape. **Systems
affected** — Admin dashboard, `aggregate-analytics` job, CSV export. No
production system — nothing here has run against a live database.
**Customer/public impact** — None. Administrator-facing only. **Success test** —
With only demo accounts present, the subscriber count and MRR read zero.

**Response** — **APPROVED**, 2026-07-31. **Limits** — Reporting only. No change
to what the seeder writes, and no change to member-visible behaviour beyond the
sample badge. **Expiration** — Consumed on execution. **Affected records** —
T-06, T-12. **Actual result** — **Partially verified.** Code executed and
unit-tested (commits `1039582`, `8337e41`; 16 tests). The success test above has
**not** been run, because it needs a seeded database and nothing here has been
run against one. T-06 therefore stands at **In Verification**, not Done. Logs
`OL-0003`, `OL-0005`.

---

## A-04 — Correct the annual MRR arithmetic

**Decision requested** — Count an annual subscriber at a twelfth of the annual
price rather than at the monthly price. **Business objective** — Revenue
accuracy; the previous arithmetic overstated monthly recurring revenue. **Source
and context** — Agent review of the admin revenue tile against
`subscription_plans` intervals. **Recommended plan** — Extract the arithmetic to
`src/lib/billing/mrr.ts`, normalise every interval to monthly, cover with
fixtures. **Alternatives** — Report annual and monthly separately: rejected,
because MRR is a single comparable figure and splitting it moves the problem to
the reader. **Cost and cash impact** — None directly; it changes a figure the
owner plans against, downwards. **Risks and safeguards** — Cent-boundary
rounding; covered by 18 unit tests. **Systems affected** — Admin dashboard only.
**Customer/public impact** — None. **Success test** — The arithmetic matches
hand-calculated fixtures across every interval.

**Response** — **APPROVED**, 2026-07-31. **Limits** — Arithmetic only; no change
to pricing, plans or billing behaviour. **Expiration** — Consumed on execution.
**Affected records** — T-07. **Actual result** — Executed and verified against
the stated success test. Commit `5ae44fa`; 18 tests pass. Reconciliation against
live Stripe data is a different test and belongs to A-05. Log `OL-0004`.

---

## A-05 — Create Stripe products and prices; run the test-payment matrix

**Status: PENDING — with the owner since 2026-08-06.**

**Decision requested** — Authority to create four products and eight prices in
the DD84 Stripe account and run the tier-by-tier payment matrix, in test mode
first and then a read-only pass in live mode.

**Business objective** — Revenue. Nothing in the Ledger can be sold until this
exists. It is the first of two hard launch blockers.

**Source and context** — `docs/MILESTONES.md` milestone 3 and "what is still not
built" item 1. Everything on our side is ready: checkout, portal, plan change
with proration, cancel-at-period-end and an idempotent webhook are implemented;
`subscription_plans.stripe_monthly_price_id` and `stripe_annual_price_id` are
null.

**Recommended plan**

1. Create in **test mode**: four products (Free, Weekly, Detailed, Premium) and
   eight prices (monthly and annual each).
2. Populate the two price-ID columns on `subscription_plans`.
3. Run the matrix: checkout per paid tier; upgrade; downgrade; cancel at period
   end; past-due; reactivation.
4. Confirm each event writes exactly one `billing_events` row — the unique
   `stripe_event_id` is the idempotency lock — and that `effectiveAccessRank`
   resolves to the expected rank, including the three-day past-due grace window.
5. Repeat as a **read-only** verification in live mode. No live charge without a
   separate decision.

**Alternatives**

- Launch with manual invoicing: no self-service subscription, which is the
  product. Rejected.
- Do nothing: no revenue. Included only because it is the honest baseline.

**Cost and cash impact** — Test mode: none. Live-mode read-only verification:
none. If the owner also wants a real end-to-end live charge, that costs the
processing fee at whatever rate the DD84 Stripe account carries — **not recorded
here; confirm the account's actual rate before the live leg** rather than
assuming a published rate.

**Risks and safeguards** — A wrong price ID silently grants the wrong access
rank, which is a paid-content leak rather than a visible failure; step 4 exists
to catch it. Rollback: Stripe prices archive rather than delete, and the two
plan columns revert to null. Test mode is fully isolated from live.

**Systems affected** — Stripe (test, then live read-only); the
`subscription_plans` table in whichever environment the matrix is run against.

**Customer/public impact** — None while in test mode. Publishing live prices is
a **separate** decision and is not requested here.

**Success test** — Each paid tier purchasable in test mode; one `billing_events`
row per webhook; the granted rank matches the plan on every transition.

**Reply with: APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**

**Response** — **APPROVED**, 2026-08-10, owner ("finalize stripe and review
approved"). _Recorded on `claude/claude-md-docs-jjveuq` at the time; imported
here on consolidation 2026-09-25 (T-31), where this block still read "awaiting
owner" six weeks after the decision._

**Affected records** — T-11, and the webhook gap below.

**Actual result** — **Approved, and found already satisfied on inspection. No
object was created.** Reading the destination first — the execution standard in
§11 — showed the work already done in live account `acct_1QBl8ZINLKqe1c6g`: four
products with `plan_code` / `access_rank` metadata, six recurring prices
matching `seed.sql` to the cent (1500/15000, 3900/39000, 9900/99000), and all
six ids already on `public.subscription_plans`, verified in both directions.
Creating anything would have duplicated live products on a revenue-bearing
account. Full evidence in OL-0017.

**Two variances recorded rather than absorbed:**

1. **The connector is live-only** — every object reads `livemode: true` and no
   test-mode path is reachable from an agent session. The plan's "test mode
   first" sequence is therefore not executable by an agent at all, and the
   tier-by-tier payment matrix belongs to whoever holds test-mode keys.
2. **No webhook endpoint exists.** `GET /v1/webhook_endpoints` returned empty.
   Checkout would complete and the application would never learn of it — the
   customer is charged, `subscriptions` stays empty, and they have paid for
   nothing. That is the binding gap in the billing path, not the products.

**Limits** — covered creating products and prices and populating the plan
columns. Did **not** authorise a live charge, publishing prices to customers, or
registering a webhook against an unverified host.

**Scope note added on consolidation** — this is Ledger work, and the Ledger is
no longer maintained in this repository. Both variances belong with
`downdirty84llc-creator/georgia-opportunity-ledger`; they are kept here because
the approval was answered here and an approval record is not rewritten to suit a
later reorganisation.

---

## A-06 — Commission legal review of the ten legal and policy documents

**Status: PENDING — with the owner since 2026-08-06.**

**Decision requested** — Authority to engage counsel to review the ten documents
in `src/lib/legal/documents.ts`, and a budget for it.

**Business objective** — Risk control. This is the second hard launch blocker.
Seven documents currently render an "awaiting legal review" banner to members.

**Source and context** — `docs/MILESTONES.md` item 2, and T-05, which set the
flags truthfully rather than quietly clearing them. Seven carry
`requiresReview: true`: terms, privacy, subscription terms, refunds, cookies,
copyright, disclaimers. Three are marked `false`: editorial standards,
corrections policy and data source policy, on the reading that they describe our
own editorial practice rather than forming an agreement with the member. **That
reading is the agent's, and it is not a legal opinion.**

**Recommended plan**

1. Export the ten documents into a review pack.
2. Attach the specific question per document — for the seven, "is this fit to
   publish as written"; for the three, "is the exemption sound, or should these
   also be reviewed".
3. Record counsel's written answer per document in this log.
4. Flip `requiresReview` only against a recorded answer.

**Alternatives**

- Launch with the banners visible: legally exposed and commercially poor — the
  product sells trustworthy information.
- Clear the flags without review: **rejected outright.** That is fabricating a
  compliance state, which §11 of the spec forbids.

**Cost and cash impact** — **Not recorded.** Obtaining two or three quotes is
part of this approval. The platform is a Georgia subscription information
service that is explicitly not a brokerage, lender or investment adviser, and
the review needs to confirm that the copy holds that line.

**Risks and safeguards** — Publishing unreviewed terms is a legal and
reputational exposure. Torque will not make, and has not made, a legal
determination; the exemption for the three stays an open question until counsel
answers.

**Systems affected** — `src/lib/legal/documents.ts` and the member-visible
`/legal/[slug]` pages, after review.

**Customer/public impact** — Members currently see the banner on seven pages.
After review they see reviewed terms.

**Success test** — A written answer from counsel for all ten documents, recorded
here, before launch.

**Reply with: APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**

**Response** — **APPROVED**, 2026-08-10, owner ("finalize stripe and review
approved"). _Recorded on `claude/claude-md-docs-jjveuq` at the time; imported
here on consolidation 2026-09-25 (T-31), where this block still read "awaiting
owner" six weeks after the decision._

**Affected records** — T-13.

**Actual result** — **Approved; not executed, and not an agent task.** Engaging
counsel is Class C and Class G: it is external communication and it needs the
owner's signature. What approval unlocks for an agent is the briefing package —
each document mapped to the system behaviour it describes, so counsel verifies
drafting against real behaviour rather than drafting from scratch. **That
package was never built.** The session that would have written it hit an account
limit, and the work was not picked up again.

**Two corrections to this packet's own wording**, both found after it was
written:

1. **The document count in the title is wrong for the Ledger.** It says ten,
   with seven requiring review. That was read from the stale copy in this
   repository. The canonical Ledger carries **twelve documents, nine requiring
   review** — established while closing T-28 and pinned by
   `tests/unit/legal/documents.test.ts` there. The title is left as written
   because a packet is not rewritten after the fact; this note is the
   correction.
2. **No fee was ever quoted.** An earlier agent estimate of 6–12 hours of
   counsel time appeared in conversation and is **not** recorded as a cost here,
   because nobody asked a lawyer. Treat the cost as unknown.

**Scope note added on consolidation** — Ledger work, tracked in this repository
only because the approval was answered here. The documents themselves live in
`downdirty84llc-creator/georgia-opportunity-ledger`.

---

## A-07 — Subscribe to an upload virus-scanning service

**Status: PENDING — with the owner since 2026-08-06.**

**Decision requested** — Authority to select and subscribe to a file-scanning
service, and to wire it to `attachments.scan_status`.

**Business objective** — Risk control. The column exists and defaults to
`pending`; no scanner sets it, so today an uploaded file is never scanned.

**Source and context** — `docs/MILESTONES.md` item 3; specification section 20
requires scanning "where supported".

**Recommended plan**

1. Compare candidate services on price, file-size ceiling, latency, retention
   and whether the file leaves our storage.
2. Bring the comparison back as an addendum before subscribing — **this packet
   asks for authority to buy, not for a blank cheque on which vendor.**
3. Wire the storage hook to set `clean` or `infected`.
4. Gate download on `clean`; alert an administrator on `infected`.
5. Test with the EICAR test string.

**Alternatives**

- Do not accept uploads at all: safest, and it removes a feature.
- Scan asynchronously and allow download meanwhile: fast, and it distributes the
  file before the verdict. Rejected.

**Cost and cash impact** — Recurring, **not recorded** until step 1 completes.
This packet's ceiling is the one thing the owner needs to set.

**Risks and safeguards** — Distributing an infected file to a paying member is a
reputational and legal event. Current partial mitigation: storage objects are
namespaced by user id, so an upload is not addressable by another member.

**Systems affected** — Supabase Storage, the attachments table, the download
path, and a new third-party integration.

**Customer/public impact** — Members would see a short "scanning" state before a
download becomes available.

**Success test** — An EICAR upload is marked `infected` and blocked; a clean
file is marked `clean` and downloads.

**Reply with: APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**

**Response** — _awaiting owner._ **Affected records** — T-14. **Actual result**
— Not executed.

---

## A-08 — Build the operations control plane

**Decision requested** — Build the routines as runnable commands, stand up the
operating record on disk, extend the Torque definition, and add one additive
section to CLAUDE.md §10. **Business objective** — Owner capacity. The agent
currently carries operational state in conversation transcripts, which is the
"isolated conversations" failure the specification names in §3. **Source and
context** — Owner instruction, 2026-08-06. **Recommended plan** — Six command
files in `.claude/commands/`; `docs/ops/` with register, approvals and an
append-only execution log; the missing spec sections added to
`.claude/agents/torque.md`; a pointer added to CLAUDE.md §10. **Alternatives** —
Keep carrying state in transcripts: rejected, it is the problem. Build a
database-backed task system: rejected as disproportionate — markdown in the
repository is diffable, reviewable and needs no runtime. **Cost and cash
impact** — None. **Risks and safeguards** — Two real ones. A routine that
fabricates a section when a connector is missing would be worse than no routine,
so the degradation rule is stated in the shared contract and in every command
file. And a seeded register that is wrong is worse than an empty one, so
unsourceable fields read `not recorded` and T-19 stays In Verification until the
owner confirms it. **Systems affected** — This repository only. No connector is
written to. **Customer/public impact** — None. **Success test** — Six invocable
commands; three linked operating-record files;
`npm run typecheck && npm run lint && npm test` still green at 179 tests in 11
files; the branch pushed with no pull request opened.

**Response** — **APPROVED**, 2026-08-06. **Limits** — The CLAUDE.md edit is
**additive, §10 only**; §11 and the existing §10 protocol text are not to be
touched. No scheduled triggers are to be created by the agent — the owner holds
scheduling. No pull request. **Expiration** — Consumed on execution. **Affected
records** — T-18, T-19, T-20, T-21, T-22. **Actual result** — Executed.
Verification output and the commit hash are recorded in `OPERATING-LOG.md`. T-19
remains In Verification pending the owner's confirmation that the seeded
register matches their own record.

---

## A-09 — Merge the two agent branches and converge the schedule

**Decision requested** — Merge `claude/claude-md-docs-jjveuq` (Torque) into
`claude/claude-md-docs-cqvhy6` (Rev), repoint the four scheduled Torque routines
at the merged branch, and retire Rev's weekly Routine. **Business objective** —
One record. Two agents were built independently within minutes of each other,
each on its own branch, each holding code and documents the other lacked. Left
alone they produce two divergent accounts of the same business, and the
divergence is invisible until someone acts on the wrong one. **Source and
context** — Owner instruction, 2026-08-13: "resolve it", then "Approve" against
the plan below. **Recommended plan** — (1) `git merge` Torque's branch into
Rev's, resolving the two conflicting files by hand; (2) run the full
verification chain; (3) push; (4) `update_trigger` on the four Torque routines
so they check out and push to the merged branch, with an explicit instruction
not to write into the other agent's ledger; (5) `delete_trigger` on Rev's weekly
growth brief. **Alternatives** — Keep both branches and reconcile by hand each
week: rejected, it is manual work that grows. Retire Torque and keep Rev:
rejected, Torque holds the operating record and `mrr.ts`, and operations is the
larger remit. Keep Rev's Routine and merely move it off the Monday collision:
rejected — the fired session has no connectors, so it could not read live sales
anyway, and Torque's daily brief already reports money moved, approvals pending
and priorities. **Cost and cash impact** — None. **Risks and safeguards** —
Three. A bad merge could lose Torque's work, so the merge was taken with
`--no-ff` semantics and every conflicting hunk resolved by reading both sides
rather than taking one wholesale. Merging the two ledgers would destroy the
distinction between what was operated and what was proposed, so `docs/ops/` and
`docs/growth/` stay separate and each routine prompt now says so explicitly. And
deleting a Routine is not undoable, so Rev's prompt is preserved verbatim in
`docs/agents/README.md` for recreation. **Systems affected** — This repository,
and the account's scheduled Routines. No connector is written to; no
customer-facing system changes. **Customer/public impact** — None. **Success
test** — One branch carrying both agents' work;
`npm run typecheck && npm run lint && npm test` green; four routines pointing at
the merged branch; the overlapping Routine gone; no pull request opened.

**Response** — **APPROVED**, 2026-08-13. **Limits** — Supersedes the A-08 limit
"no scheduled triggers are to be created by the agent" **for these five specific
Routines only** — four updates and one deletion, all named above. It grants no
standing scheduling authority; creating a new Routine still goes back to the
owner. **Expiration** — Consumed on execution. **Affected records** — T-23,
T-27. **Actual result** — Executed 2026-08-13. Evidence in `OPERATING-LOG.md`
OL-0010 and OL-0011.

---

## A-10 — Give the Routines a repository to write to

**Decision requested** — Recreate the four Torque Routines from the claude.ai
Routines UI with the repository and branch attached, so their briefs survive the
session. **Business objective** — The operating record. Four Routines have fired
on schedule since 2026-08-07 and delivered nothing to the repository; the
schedule currently reads as coverage that does not exist. **Source and context**
— T-27, root cause confirmed 2026-08-28. The fired sessions carry no `sources`
and no `outcomes` — no repository, no push target. The one Routine that does
carry them is the only one created from the claude.ai UI rather than the MCP
tool. **Recommended plan** — In the claude.ai Routines UI, create four Routines
with the repository `downdirty84llc-creator/tune-advisor-` and branch
`claude/claude-md-docs-cqvhy6` attached, and the connectors the routine needs
(Gmail for intake; Stripe and Shopify for the cash review). Copy each prompt
verbatim from the existing Routine, then delete the MCP-created original so the
schedule is not doubled. The prompts are correct and tested; only the container
they run in is wrong. **Alternatives** — (1) Rebind to a persistent session with
`persistent_session_id`: inside the agent's reach, but it depends on one session
surviving indefinitely and its context grows without bound. (2) Change the
contract so routines report by notification only and abandon the written record:
rejected — `docs/ops/` exists precisely because operational state carried in
transcripts is the failure the specification names in §3. (3) Leave it:
rejected, it spends money on discarded work and misrepresents what is covered.
**Cost and cash impact** — Stops a recurring waste. Two sampled runs cost $2.63
between them for output that was discarded; the pattern has run since
2026-08-07. No total is claimed — only two runs were read. **Risks and
safeguards** — The recreated Routines will hold **live connectors**, which the
MCP-created ones never did. Every routine is Class A and says so in its own
prompt — observe, calculate, draft, report — but this is the first time those
prohibitions will be load-bearing rather than theoretical. Recommend reading the
first run of each before trusting the cadence. **Systems affected** — Scheduled
Routines only. No customer-facing system. **Customer/public impact** — None.
**Success test** — One scheduled run ends with a dated brief committed to
`docs/ops/briefs/` and an entry in `OPERATING-LOG.md`. That commit hash is also
the completion proof T-23 has been waiting on.

**Reply with: APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**

**Response** — _awaiting owner._ **Affected records** — T-23, T-27. **Actual
result** — Not executed. **The recommended option cannot be executed by the
agent at all**: `create_trigger` has no parameter for a git source, and
`update_trigger` cannot add one to an existing Routine. This one needs hands on
the claude.ai UI.

---

## A-11 — Consolidate onto the Ledger repository (APPROVED, then NARROWED)

**Decision requested** — Treat the Ledger's own repository as canonical, move
the DD84 agent platform into it, and retire this branch. **Source and context**
— Write access to `downdirty84llc-creator/georgia-opportunity-ledger` was
granted 2026-09-09. Inspection showed it ahead of this copy on the application,
and holding none of the agent platform. **Cost and cash impact** — None.
**Systems affected** — Two repositories. No connector, no production system.

**Response — first** — **APPROVED**, 2026-09-09, on the question "which of two
divergent copies of the Ledger is canonical".

**Response — revised** — **NARROWED**, 2026-09-16. The owner chose "split it":
the Ledger-only code fixes go across; the DD84 agent platform stays here.

**Why it was narrowed, recorded because the failure was in the asking.** The
question put to the owner was about two copies of the Ledger. It was **not**
about whether DD84's revenue and customer records belonged inside another
company's repository, which is what the change did. A CLAUDE.md added to the
Ledger's `main` on 2026-09-15 by another session stated that the two businesses
were separated deliberately and that the consolidation must not be merged
without the owner saying so in as many words. That was correct, and the approval
obtained did not meet it. **An approval is only as good as the question; this
one described a smaller change than it made.**

**Limits** — Ledger-only code may cross. DD84 material may not. Neither
repository's `main` is to be treated as the other's. **Expiration** — Consumed.
**Affected records** — T-28, T-29. **Actual result** — Executed as narrowed.
Ledger `main` at `a228f3d` carries the three modules; the agent platform never
left this repository. Evidence in `OPERATING-LOG.md` OL-0013 and OL-0015.

---

## A-12 — Accept the residual risk of the unremovable send Routine

> Originally **A-11** on `claude/claude-md-docs-jjveuq`. Renumbered on
> consolidation (T-31) because this branch already had a different A-11. Content
> unchanged; the task it points at is now **T-30**.

**Status: ACCEPTED, 2026-09-25, owner ("just note it as accepted risk").**

**Decision requested** — Whether to keep trying to remove the Routine "Weekly
Georgia Opportunity Ledger summary" (`trig_01FxDef9B5snYTW42FfcMEbD`), or accept
that it stays and record why.

**Business objective** — Stop spending owner attention on a control that cannot
currently be actuated, without letting the underlying exposure go unrecorded.

**Source and context** — OL-0020, OL-0021, T-30. The Routine fires Mondays 09:00
UTC with Gmail, Stripe, Shopify and PayPal attached, and its prompt ends with an
unconditional "email the summary to paid subscribers". Agents cannot disable or
delete it — both operations are refused for a Routine created via `http_api`.
Two owner attempts, reported as done, left `updated_at` identical to
`created_at`; nothing has modified it since 2026-07-30.

**What was accepted** — The Routine remains enabled and will keep firing weekly.

**Evidence the exposure is currently theoretical** — it has never sent anything.
Verified in OL-0020 against sent mail across four fire windows and against every
draft in the mailbox. The Ledger holds zero profiles, so the subscriber list is
empty and the send is a no-op.

**Limits of this acceptance — read these before treating it as settled:**

- It covers **only** the present state, in which the Ledger has **no
  subscribers**. It is not a standing approval to send.
- **The first real subscriber voids it.** T-30 reopens at that moment, at high
  priority, whether or not anyone re-raises it.
- It is not approval for the Routine's content, its July session link, or its
  connector grants — none of which has been reviewed.

**Rejected alternatives** — Revoking the Routine's OAuth token, or detaching the
Gmail connector. Both would work and both were left alone: revoking a credential
is irreversible for anything else holding it, which is an owner decision rather
than an agent's, and neither was asked for.

**Success test** — A future reader can tell from the register that this Routine
survives by decision rather than by oversight, and knows the one condition that
reopens it.

---

## A-13 — Decide the visibility of a public repository holding DD84's revenue figures

**Status: CLOSED 2026-10-08 — Option 3. The owner accepts the exposure on the
record. No action pending.**

**Decision requested** — Choose one of three dispositions for the fact that
`downdirty84llc-creator/tune-advisor-` is a **public** repository and
`docs/agents/ventures.md` on this branch carries DD84's financial position.

**Business objective** — Risk control, and getting a deliberate decision on the
record before a queued action makes the exposure more prominent. T-32 has been
waiting since this morning with no packet, which means it has been waiting
somewhere the owner does not look.

**Source and context** — T-32, found 2026-10-08 while checking whether the
default branch could be repointed for T-29. **The visibility was not what was
being looked for.** `gh api` reports `private: false` for both
`downdirty84llc-creator/tune-advisor-` and
`downdirty84llc-creator/georgia-opportunity-ledger`.

**What is actually exposed** — in one table each, in `ventures.md`: all-time
revenue, paid invoice count, distinct customer count, **customer concentration
as a percentage**, average and largest invoice, the date of the last payment,
the Stripe account id, the Supabase project ref, the Shopify store identifiers,
and the owner's email address.

**What is not exposed, stated as plainly** — **no credentials and no customer
names.** The registry was written under the §23 rule that keeps customer detail
out of version control, and that rule held. What a reader gets is the business's
own financial position and its concentration risk.

**Honest about the timing, because it changes how urgent this is** — the
repository has been public throughout and these figures have been readable since
2026-08-03. **This packet is not reporting a new leak.** What is new is that
T-29's queued repoint would move the file from findable to the public front
page, which is a difference of degree. That is the reason to decide now, not the
reason it matters.

**Recommended plan — Option 1: make `tune-advisor-` private.** One setting.
Nothing else changes, the registry keeps the figures the agents need, and both
T-29 and T-32 unblock immediately.

**Alternatives**

- **Option 2 — strip the revenue table and identifiers out of `ventures.md`**
  into something not version-controlled. **This costs real capability**: the
  registry exists so an agent does not re-derive or invent these numbers, and
  CLAUDE.md §5 turns on them being present and dated. It also makes T-36 worse,
  not better.
- **Option 3 — accept it on the record.** Defensible for a pre-revenue business
  with three customers, and it at least converts an oversight into a decision.
- **Rejected: do nothing.** That is Option 3 without the record, which is the
  state this packet exists to end.

**Cost and cash impact** — **None** for any of the three options. Repository
visibility is free on this account's plan.

**Risks and safeguards** — Option 1 has one consequence worth naming: **a
private repository cannot serve anything publicly**, so if anything is ever
intended to read this repository anonymously, that breaks. Nothing currently
does, as far as this register knows, and that qualifier is deliberate. Option 1
is reversible in one setting.

**Systems affected** — GitHub repository settings only. No connector, no
customer-facing system, no code.

**Customer/public impact** — Option 1 **reduces** public exposure. Option 2
changes nothing publicly today, since git history retains what was published.
**Note that for Option 2 specifically: deleting the table from the current file
does not unpublish it** — it stays in the history of a public repository, so
Option 2 without Option 1 is largely cosmetic. That is the single most important
thing to know before choosing it.

**Success test** — `gh api /repos/downdirty84llc-creator/tune-advisor-` reports
`private: true` (Option 1), or the chosen option is recorded here with its
reasoning and T-29 proceeds knowing what it exposes.

**Note on the other repository** — `georgia-opportunity-ledger` is also public
and is **a separate question not covered by this packet.** It holds no DD84
material. What it does hold is a product whose legal documents still carry
"awaiting legal review" banners, which is T-13's problem rather than this one's.

**An agent cannot execute Option 1.** `gh api -X PATCH … -f private=true`
returned **HTTP 403, "Repository settings writes are not permitted through this
proxy"**, verified unchanged afterwards — OL-0027. The permission is present on
the account; the proxy in front of it refuses. This needs the GitHub UI.

**Reply with: APPROVE (option 1) / APPROVE WITH CHANGES (option 2 or 3) / DEFER
/ REJECT**

**Response — final: APPROVE WITH CHANGES (option 3)**, owner, 2026-10-08: "dont
need to". The repository stays public and the exposure is accepted.

**The owner answered twice and both answers are kept**, because the sequence is
the useful part and overwriting it would hide a reversal. First Option 1, "make
it private", which could not be executed from a session — three routes refused,
see OL-0030. The owner then asked why it was needed, and on being given the case
without the urgency chose to accept it. The case, as put: **no credentials, no
API keys, no customer names, emails or payment details are exposed**; the one
argument that holds is **negotiating asymmetry**, since a supplier, partner or
acquirer can read the revenue position before talking to you; and going private
carried a real cost, being the only option that might break the host session's
ability to clone and push. Accepting is a reasonable reading — the figures are
small, nothing is secret, and a random public repository is unlikely to be read.

**Do not re-raise this.** It was raised twice, by two sessions independently,
and answered. Re-opening it needs a new fact, not the same heuristic. **Limits**
— Covers `tune-advisor-` only. `georgia-opportunity-ledger` is a separate
question and was not put to the owner. **Affected records** — T-32, and T-29
which it blocks. **Actual result** — **Approved but not executed, and not
executable from a session.**
`gh api -X PATCH /repos/downdirty84llc-creator/tune-advisor- -f private=true`
was attempted again immediately after the decision and returned **HTTP 403,
"Repository settings writes are not permitted through this proxy"**; visibility
re-read afterwards as `private: False`. The GitHub MCP server has no
repository-settings tool — `create_repository` takes a `private` flag but
creates a new repository, which is not this. Three distinct routes, all closed.
**The owner must flip it** at
https://github.com/downdirty84llc-creator/tune-advisor-/settings — "Change
repository visibility" at the foot of the page. **Not flipped, by decision.**
The check below is kept only because it names a risk the stopgap still carries
if visibility is ever revisited: verify the agents still work**, because this is
the one option with a mechanical consequence: the host session
`session_01MadzgqZSAWtvberqr3hMpN` and the four bound Routines clone and push
this repository through the session's GitHub proxy. A private repository should
remain reachable to a session already connected to it, but that is an
expectation, not a reading. The check is one scheduled firing landing a commit —
next opportunity **2026-10-09T10:20Z\*\*. If it fails, that is the cause to
suspect first, and the fix is a repository-access grant rather than anything in
`docs/ops/`.

---

## A-14 — Route the Routines through a repository-holding session

**Decision requested** — Stand up a dedicated session with the repository
attached and bind the four Torque Routines to it, as an interim measure while
A-10 remains outstanding. **Business objective** — Stop losing the work. Every
firing since 2026-08-07 produced a brief and discarded it; one sampled run cost
$1.77 for output nobody could read. **Source and context** — Offered to the
owner on 2026-10-08 with its downsides stated, after four owner-only actions
were confirmed unreachable (OL-0027). The owner asked for it in as many words.
**Recommended plan** — `create_session` with `source_url`, `source_revision` and
`outcome_branch`; four `create_trigger` calls with `persistent_session_id`; the
four originals disabled rather than deleted. **Alternatives** — Bind to the
owner's own session: rejected, twenty firings a week into the conversation they
work in. Leave the originals enabled too: rejected, every routine would run
twice and write two briefs. Keep waiting for A-10: rejected by the owner, and it
is 41 days outstanding. **Cost and cash impact** — A long-lived session consumes
usage. It replaces four fresh sessions a day rather than adding to them, and the
originals are off. **Risks and safeguards** — Stated in OL-0029 and not
softened: one session is a single point of failure, its context grows without
bound, and the four serialise. The safeguard is that **nothing was deleted** —
the originals are disabled with current prompts and a one-call rollback.
**Systems affected** — Scheduled Routines and one new session. No connector, no
customer-facing system, no repository content. **Customer/public impact** —
None. **Success test** — A dated brief in `docs/ops/briefs/` **from a scheduled
firing**, with a commit behind it. A hand-driven run does not satisfy it.

**Response** — **APPROVED**, 2026-10-08. **Limits** — Interim only. It does not
close A-10 and grants no standing scheduling authority; A-08 reserved that to
the owner and this is one named exception. **Expiration** — Superseded the
moment A-10 is done, at which point these four Routines should be deleted rather
than left beside the real ones. **Affected records** — T-27, A-10. **Actual
result** — Executed 2026-10-08; evidence in OL-0029. **The success test is not
yet met**: the first brief in `docs/ops/briefs/` came from a hand-driven run,
not a schedule. First scheduled test 2026-10-09T10:20Z.

---

## A-15 — Send two prepared replies: GDOT District 1, and the Georgia SBDC

**Status: PENDING — raised 2026-10-08 by the first `/dd84-inbox-intake` run.**

> **REDACTED 2026-10-09 — the body of this packet has been edited, which the
> packet rule normally forbids.** One site in the Alternatives list carried the
> C10 customer's full name; it now reads "the C10 customer". **Removed by:**
> Claude (agent), cqvhy6 session. **Under:** approval **A-16**, Option A,
> granted by the owner 2026-10-09. **Rule forced the conflict:** `CLAUDE.md` §5
> against `docs/ops/README.md`'s rule that a raised packet is appended to and
> only its **Response** and **Actual result** blocks are edited. **Commit:** the
> one carrying **OL-0036**. **The decision requested, the drafts, the reasoning
> and the alternatives are unchanged** — this packet is still pending and still
> says exactly what it said when it was raised. **The history is not touched.**

**Decision requested** — Authority to send **two** replies, written in full and
reproduced verbatim in `docs/ops/briefs/2026-10-08-inbox-intake.md`. Batched
into one packet so this is one decision rather than two.

**Business objective** — Keep a favourable state-agency permit review moving,
and recover a free advisory relationship that bears directly on financing the
shop building. Neither costs anything to send.

**Source and context** — Gmail threads `1a0cf82b91d1352c` (GDOT, 4 messages
since 2026-09-23) and `1a112caffaba4e6d` (Georgia SBDC, 2026-10-06). **The GDOT
message had been sitting unread for 42 hours** when the intake found it.

### Draft 1 — GDOT District 1 Traffic Operations

**To** `NNembhard@dot.ga.gov`, **cc** `HBoyle@dot.ga.gov`. Reply on message
`1a1133f549956cc3`, subject `Re: Driveway Concept Review`.

**What GDOT said** — the plan needs more detail for a full review; _"if the
plans… can meet all GDOT requirements we should not have any issues
permitting"_; and **due to the median on SR 72, right-in/right-out is the only
permittable driveway** for parcel 0059 038. A review checklist is attached.

**What the draft does** — thanks them, accepts the right-in/right-out constraint
as their stated position, confirms the checklist is in hand, and asks **three
questions whose answers determine what a surveyor is paid to produce**:
preferred throat width and radii; whether a boundary/topographic survey with
sight distance suffices or a traffic statement is also expected; and whether
railroad coordination must precede the driveway application or can run in
parallel. It restates that none of this is an access permit.

**What it does not do** — propose a design, make any engineering claim, commit
to a date, or commit a dollar.

### Draft 2 — Georgia SBDC

**To** `djones@georgiasbdc.org`. Reply on message `1a112caffaba4e6d`, subject
`Re: Meeting Today`.

**What the draft does** — apologises for missing the 2026-10-06 15:30 session,
says the owner will book a new slot through the adviser's own Calendly link, and
gives enough context for the session to be useful: the tuning business, the
owner-occupied shop with a dyno in Colbert, the live GDOT review, and that the
areas wanted are financing the building and what lenders will expect to see.

**What it does not do** — propose a time, book anything, or quote a figure.
**The calendar was read, never written.**

**Alternatives**

- **Send only the GDOT reply.** Defensible — it is the one with a counterparty
  waiting. The SBDC note costs nothing extra and the adviser has already chased
  once.
- **Owner rewrites both from scratch.** Always available, and the right choice
  if the voice is wrong. The drafts are a starting point, not a submission.
- **Send neither.** The GDOT thread then continues to age, having already lost
  42 hours. Included because it is the honest baseline, not as a straw man.
- **Rejected: adding a third draft replying to the C10 customer** (T-37). His
  thread is the most commercially live in the mailbox and was **deliberately
  left without a draft** — the next message must either send a revised tune file
  or resolve a contradiction between DD84's stated O2 diagnosis and the hardware
  the customer has since verified. Both are technical determinations about a
  running engine. `ventures.md` forbids fabricating a diagnosis or guaranteeing
  a result, so the blocker there is the owner's judgement, not a missing draft.

**Cost and cash impact** — **None.** Neither message commits money. What they
unblock does: the survey and civil design behind T-38 are Class **E** and have
no packet, and no figure has been quoted for either.

**Risks and safeguards**

- **Both counterparties are external and one is a state agency**, which is why
  this is Class C and why nothing was sent. Tone and factual accuracy were kept
  to what the threads themselves establish.
- **The GDOT draft accepts a constraint.** It agrees right-in/right-out is the
  permittable configuration. That is quoting GDOT back to GDOT, not conceding
  anything, and the layout consequences stay the owner's decision in T-38.
- **The checklist PDF is unread** — no attachment-download tool is loaded in
  this session. The draft therefore says the checklist is in hand and asks
  questions around it, and **makes no claim about what it contains.**
- **The SBDC draft discloses the shop plan and the GDOT review.** Both are
  already in a thread with a state agency and neither is confidential, but the
  owner should confirm they are happy for an SBDC adviser to hold that context.

**Systems affected** — Gmail outbound only. **No draft was created in the mail
account** — both live in the brief file, so there is nothing sitting in Gmail
that could be sent by accident. On approval they can either be sent by hand or
placed in the account as real drafts with their IDs recorded.

**Customer/public impact** — Neither recipient is a customer. One is a Georgia
DOT engineer, one a state-funded business adviser.

**Success test** — Both messages sent, and GDOT's answers to the three questions
recorded in T-38 so the surveyor's scope is set by the reviewer rather than
guessed.

**Reply with: APPROVE (both) / APPROVE WITH CHANGES (name which, and what) /
DEFER / REJECT**

**Response** — _awaiting owner._ **Affected records** — T-38, T-39. **Actual
result** — Not executed. Nothing sent.

---

## A-16 — Redact customer identity from the append-only log and a sealed packet

**Status: APPROVED (Option A) — owner, 2026-10-09. EXECUTED the same day.**

**Decision requested** — Authority to edit **`OPERATING-LOG.md`** and the body
of **packet A-15** to remove one customer's name, email address and mobile
number. **Both edits are forbidden by rules an agent must not override**, which
is the only reason this is a packet rather than a fix.

**Business objective** — Stop a real person's contact details being
world-readable in a public repository, without an agent quietly rewriting the
two records whose value is that they are not rewritten.

**Source and context** — T-48. On 2026-10-08 the first intake run wrote the C10
customer's full name, personal email and mobile number into four files. On
2026-10-08 at about 23:00Z, **A-13 closed as Option 3 and a standing rule landed
in `CLAUDE.md` §5**: this repository is public by decision, and "never add
customer names, email addresses, phone numbers or payment details … customer
identity is not [accepted], and the decision does not extend to it."

**What has already been done without asking** — the two files whose own write
modes permit it are **clean**:

| File                                | Write mode                  | State                          |
| ----------------------------------- | --------------------------- | ------------------------------ |
| `TASK-REGISTER.md`                  | Edit in place               | **Redacted**                   |
| `briefs/2026-10-08-inbox-intake.md` | Dated output                | **Redacted**                   |
| `OPERATING-LOG.md`                  | **Append-only**             | **Still carries name + email** |
| `APPROVALS.md`, A-15 body           | Append; Response block only | **Still carries name**         |

**The conflict, stated precisely** — `CLAUDE.md` §5 says never hold customer
identity here. `docs/ops/README.md` says the operating log is "**Append-only** —
never edit or delete an entry", and that an approval packet is appended with
"only the **Response** and **Actual result** blocks" edited. **Both are hard
rules. Satisfying either breaks the other.** The append-only rule exists to stop
audit trails being quietly rewritten, and a redaction is exactly a quiet rewrite
— which is why an agent should not make this call alone.

**Recommended plan — Option A: redact in place, visibly.** Replace the name and
email in OL-0031 and in A-15's body with "the C10 customer", and **leave a dated
inline note in each saying what was removed, by whom, under which rule and in
which commit.** The entry stays legible, its meaning is unchanged, and the
redaction itself becomes part of the record rather than a silent gap.

**Alternatives**

- **Option B — append a correction and change nothing.** Purest on append-only:
  OL-0033 already records the breach, so the log would carry both the identity
  and its correction. **It leaves the details readable**, which is the thing
  being complained about. Defensible if you value the audit trail above the
  exposure, and the exposure is one person's contact details, not credentials.
- **Option C — rewrite history and force-push**, removing the details from
  commits `dbd6c21`…`cb35580`. **Rejected, and not available anyway**: CLAUDE.md
  forbids history rewriting on this branch, and this environment's proxy refuses
  such pushes (OL-0026, OL-0027). Listed because it is the only option that
  actually unpublishes anything, and it is worth knowing that it is closed.
- **Option D — make the repository private.** This was A-13 Option 1 and **you
  already considered and declined it** on reasoning recorded in A-13. Raised
  again only because the facts have changed: A-13 was decided about revenue
  figures and system identifiers, and **a customer's mobile number is a
  different category** — which is precisely the case §5 says needs its own
  decision. **If the answer is still no, that is a complete answer** and this
  packet does not reopen it.

**Cost and cash impact** — **None** for any option.

**Risks and safeguards**

- **Option A's risk is precedent.** Once a log entry has been edited once, the
  append-only guarantee is weaker for every future reader. The visible inline
  note is the mitigation: an edit that announces itself is not the failure the
  rule guards against.
- **Option B's risk is that nothing changes.** The details stay indexable.
- **Whichever is chosen, the history is unaffected.** **No option on this list
  except C removes anything from the public history, and C is closed.** The
  honest end state is "current files clean, history not". **Do not let this
  packet read as if it fixes the exposure** — it fixes the current files and
  decides what the record says about it.

**Systems affected** — Two files in this repository. No connector, no live
system, no customer contact.

**Customer/public impact** — The customer has not been contacted and **must not
be** about this; nothing about it changes their job. Mentioning a data exposure
to a customer is Class C and a separate decision entirely, and the material at
risk is their own name and number, already known to them.

**Success test** — `grep` over the tracked tree finds no customer email address
or phone number, **and** the chosen option is recorded here with its reasoning,
so a later session does not re-litigate it.

**Reply with: APPROVE (option A) / APPROVE WITH CHANGES (option B or D) / DEFER
/ REJECT**

**Response** — **APPROVE (Option A)**, owner, 2026-10-09: "Approve A-16". A bare
approval is Option A by the packet's own reply format; the owner was not asked
to restate it. **Option D was not revisited** and does not need to be — A-13
settled it on 2026-10-08 and the owner declined to reopen it when asked directly
the same day.

**Affected records** — T-48, OL-0031, A-15, and — see below — `TASK-REGISTER.md`
and `briefs/2026-10-08-inbox-intake.md`, which this packet had recorded as
already clean and which were not.

**Actual result** — **Executed 2026-10-09, thirteen sites across four files**,
not the two the packet anticipated. Recorded in **OL-0036**.

| File                                | Sites | What was there                    |
| ----------------------------------- | ----: | --------------------------------- |
| `OPERATING-LOG.md` (OL-0031)        |     4 | First name ×3, **personal email** |
| `briefs/2026-10-08-inbox-intake.md` |     7 | First name ×7                     |
| `APPROVALS.md` (A-15 body)          |     1 | **Full name**                     |
| `TASK-REGISTER.md`                  |     1 | First name                        |

All thirteen now read "the C10 customer" or "the customer". The two protected
records each carry a dated inline note naming what was removed, by whom, under
which approval, which two rules collided, and that the history is untouched —
the Option A mitigation, so the edit announces itself rather than being a silent
gap.

### The packet was wrong about two files, and the reason generalises

**A-16's own table said `TASK-REGISTER.md` and the 2026-10-08 brief were
"Redacted". Both still carried the customer's first name** — eight sites between
them. The earlier pass removed the full name, the email address and the phone
number and left every bare first name standing.

**The cause is the success test.** A-16 tested for "no customer email address or
phone number" by `grep`. A first name is neither, so a grep-clean tree looked
like a finished redaction. **The test did not test for the thing the rule names
first** — §5 says "customer **names**, email addresses, phone numbers or payment
details", and names are the hardest of the four to grep for, because you must
already know the name to search for it. **A success test narrower than its rule
reports success early**, which is the same shape of defect as reading a green
routine run as a delivered brief (T-27).

Whether a bare first name is identifying is arguable. It was removed anyway: an
uncommon given name alongside an engine, a town, a fault and a thread subject is
not meaningfully anonymous, and §5 does not grade by how identifying a name is.

> **This paragraph had to be rewritten.** Its first draft quoted the name in
> order to argue that the name was identifying — **reintroducing it into the
> file the same commit was cleaning.** Caught by re-running the verification
> after the edits rather than before. **A redaction's own write-up is a place
> the redacted value gets put back**, which is not obvious until you do it.

### What this does not fix, stated plainly because the packet insisted on it

**The history still carries all of it.** Commits `dbd6c21`…`cb35580` hold the
full name, the email address and the phone number, and the only option that
would remove them — Option C, rewrite and force-push — is forbidden by
`CLAUDE.md` and refused by this environment's proxy (OL-0026, OL-0027). The end
state is **current files clean, history not.** T-48 stays open on that basis and
must not be closed as if the exposure were undone.

**The customer has not been contacted and must not be** about this. That would
be Class C and a separate decision; nothing about it changes their job.

---

## A-17 — Twelve third-party people's contact details are in this public repository

**Status: PENDING — raised 2026-10-09 while executing A-16.**

**Decision requested** — A decision on **non-customer** third-party contact
details: nine named individuals' work email addresses, five consumer free-mail
addresses belonging to inbound solicitors, and three phone numbers. **None is a
customer, so §5's customer rule does not reach them and A-16 did not cover
them.** §5's closing clause does reach them: "a new category of sensitive
material needs its own decision."

**Business objective** — Decide once whether third-party contact detail belongs
in a public operating record, so that every future intake run has a rule instead
of a judgement call. The intake routine will keep producing this material every
weekday it runs; without a decision it will keep accumulating.

**Source and context** — A full scan of the tracked tree while executing A-16.
A-16 was scoped to one customer; the scan was not, and found the rest. **This is
the scan A-16's grep-based success test would have passed**, because all of it
is correctly-formatted non-customer data.

| Category                                                                           | Count | Where                                     | Assessment                                                                                                                 |
| ---------------------------------------------------------------------------------- | ----: | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Named officials' work addresses** — GDOT ×2, Georgia SBDC, GREC, Georgia CDC ×2  |     6 | A-15 body, `TASK-REGISTER.md`, two briefs | Government staff in their official capacity. Mostly a matter of public record already                                      |
| **Named vendor staff addresses** — a steel-building supplier, a legal-plans seller |     2 | `TASK-REGISTER.md`, 2026-10-08 brief      | Commercial sales contacts who wrote to DD84 unsolicited                                                                    |
| **Consumer free-mail addresses of inbound solicitors**                             |     5 | `TASK-REGISTER.md`, 2026-10-08 brief      | **The T-42 set — five of these are assessed as likely loan fraud.** Private individuals' addresses, whatever their conduct |
| **A state agency's published information line** (GREC)                             |     1 | 2026-10-09 brief                          | Published by the agency for exactly this purpose. No concern                                                               |
| **A business office line** (GDOT District 1)                                       |     1 | `TASK-REGISTER.md`                        | Published. No concern                                                                                                      |
| **The owner's own mobile number**, in two draft email signatures                   |     1 | 2026-10-08 brief ×2                       | **The owner's own, so the owner's call** — listed for completeness, not flagged                                            |
| **Automated vendor senders** — Render, GitHub, PayPal, HP Tuners via NetSuite      |     4 | `TASK-REGISTER.md`, two briefs            | No-reply robots. No person behind them. No concern                                                                         |

**Recommended plan — Option A: redact the five solicitor addresses, keep the
rest, and write the rule into the routine.** The five consumer addresses are
private individuals' personal accounts and carry the least public-interest
justification; that two of them may be running a fraud does not make publishing
their addresses DD84's business, and it is the category most likely to be
regretted. Officials' work addresses, published agency lines and no-reply robots
stay, because they are either already public or not personal. Then **amend
`.claude/commands/dd84-inbox-intake.md`** so future runs record a solicitor as
"a consumer free-mail address" with the thread ID and nothing more.

**Alternatives**

- **Option B — redact every address of a named natural person**, officials
  included, leaving published agency lines and robots. Most conservative.
  **Cost:** A-15's drafts become harder to review, since you cannot see who they
  are addressed to without opening Gmail; the register gets vaguer about who
  said what. Defensible if you would rather not host anyone's address.
- **Option C — change nothing and record the decision.** Nothing here is a
  credential, a customer or a payment detail, and most is public already. The
  five solicitor addresses are the weak point. **Cheapest, and honest if you
  judge the exposure trivial** — but it must be recorded as a decision, or the
  next session reopens it, which is what A-13 was closed to stop.
- **Option D — make the repository private.** **Not recommended and not really
  live.** A-13 settled it, the owner declined to reopen it when asked directly
  on 2026-10-08, and nothing here is a stronger case than the customer mobile
  number that failed to move it. Listed so the record shows it was considered,
  not to reopen it.

**Cost and cash impact** — **None** for any option.

**Risks and safeguards**

- **The same limit as A-16 applies: no option removes anything from the git
  history.** Options A and B clean the current files only. Do not let any of
  them read as undoing publication.
- **Option A's risk is that the line is mine, not a rule's** — "private
  individual" versus "professional contact" is a judgement, and a future run
  will meet a case that sits between the two. The routine amendment is the
  mitigation: it makes the call once, in writing, where the next run will read
  it.
- **Doing nothing has a running cost.** The intake fires every weekday and this
  material accrues on each run. Three briefs have produced it so far.

**Systems affected** — Up to four files in this repository, plus one routine
prompt. No connector, no live system, no customer contact.

**Customer/public impact** — **Nobody is contacted under any option.** No
solicitor, official or adviser is told their address was published or removed;
raising it would be Class C and a separate decision, and for the suspected-fraud
set would additionally tip off a party DD84 may need to report rather than warn.

**Success test** — The chosen option is recorded here with its reasoning; the
tree matches it; and if Option A or B is chosen,
`.claude/commands/dd84-inbox-intake.md` states the rule so the next scheduled
run applies it without asking. **The test is not a grep** — that is what let
A-16 report success on two files that were not clean.

**Reply with: APPROVE (option A) / APPROVE WITH CHANGES (option B or C) / DEFER
/ REJECT**

**Response** — _awaiting owner._ **Affected records** — T-51. **Actual result**
— Not executed; nothing in this packet has been changed in the tree.

> **A numbering note, because this record keeps hitting it.** This packet first
> cited T-49. **T-49 and T-50 had been taken minutes earlier** by the scheduled
> cash review, which committed at 13:21:48Z while this work was in progress —
> the fourth numbering collision in this record, all four from two sessions
> appending concurrently. Corrected to **T-51** before the commit. The
> structural fix is A-10: one Routine per session instead of four serialising
> through one.

---

## A-18 — Send one technical follow-up to a live customer, 11 days silent

**Status: PENDING — raised 2026-10-13 by the first `/dd84-followup` run.**

**Decision requested** — Approval to send **one** message: a technical follow-up
to the customer on Gmail thread `1a0e402cdcf75731` (the 2018 Challenger R/T),
asking whether the tune revision DD84 sent on 2026-10-02 was flashed, how the
car now starts, and for a datalog of two or three start cycles. **The full body
is in `docs/ops/briefs/2026-10-13-followup.md` and is sent verbatim or not at
all.** This packet covers **one recipient and one message.**

**Business objective** — Recover a live job with work already delivered. DD84
sent at least two revised tune files over six days of iteration and has heard
nothing for eleven days. **At eleven days a follow-up reads as service; at a
month it reads as an afterthought.**

**Source and context** — The job was found by `/dd84-followup` **in Google
Drive, not in email**: three customer videos shared on 2026-10-02 that no task
in this register referenced. **This register did not know the job existed** — it
is now **T-64**. DD84 spoke last at **2026-10-02T20:06:05Z**. Against the
proposed ageing thresholds the job is **past the 7-day final threshold for
_waiting on a customer datalog_**; **those thresholds are Torque's proposal and
have never been owner-approved**, which is why this is a packet and not an
action.

**Recommended plan** — Send the drafted message as written, today. One message,
one recipient, no attachment.

**Alternatives considered**

1. **Send nothing and wait.** Rejected: eleven days is already past every
   threshold anyone has proposed, and the job has delivered work attached to it.
2. **Send a chase that also asks for payment.** **Rejected on the routine's own
   hard rule.** Stripe, PayPal, bookipay and Square were all unreachable, so
   **whether this job has been billed or paid is unknown.** Asking a customer
   for money he may already have paid costs more trust than the follow-up
   recovers.
3. **Send a chase that quotes a price.** Rejected: **this job has never been
   priced, and setting a first price is a pricing decision, not a follow-up.**
   The follow-up command file puts pricing outside this routine, and this
   routine respected that.
4. **Send a message offering a diagnosis of the no-start fault.** Rejected:
   **safety-adjacent**, the fault is not diagnosable from three videos and a
   description, and `ventures.md` forbids fabricating a diagnosis or
   guaranteeing a result. The message asks for data instead.

**Cost and cash impact** — **No cost to send.** No discount, extension or credit
is offered. **No revenue is promised**: the job is unpriced, so the upside is
unquantified and is deliberately not estimated here. Catalogue basis is
**$99–$650** and **the range stays a range.**

**Risks and safeguards** — The message commits DD84 to reviewing one more
datalog and making one more determination. **It commits to no timeline, no
result and no power figure**, and it explicitly offers the customer the option
of saying the project is parked, so it cannot read as pressure. The risk of
sending is low; **the risk of the alternatives — a payment chase or a price — is
what this packet exists to avoid.**

**Systems affected** — Gmail only, one thread. **No payment system, no calendar,
no Shopify, no live site.**

**Customer/public impact** — One customer receives one message. **Nothing
public.**

**Success test** — The customer replies with the car's starting behaviour, or
says the project is parked. **Either is a result**; eleven more days of silence
is not.

**What this packet does NOT cover, stated so approval is not read wider than it
is** — it does **not** authorise pricing either live job, sending anything to
the C10 customer (T-37, where DD84 spoke last 18 hours ago and no chase is due),
contacting any of the five Reddit candidates (T-41, blocked by T-60), contacting
the Shopify account holder (T-65, whose nature is unestablished), or any review
request (none is eligible, because **no job can be shown to be paid**).

**The separate decision the owner still owes, and it is worth more than this
one** — **both live jobs need a price.** A targeted search over every message to
or from both customers for
`invoice OR price OR pricing OR deposit OR quote OR payment OR paid OR cost OR charge OR "$"`
returned **zero messages for both.** 57 messages, tune files delivered on both
jobs, **no written mention of money anywhere.** That is not in this packet
because **pricing is not Torque's to move** — but approving this message and not
setting a price would recover the conversation and still leave the revenue on
the floor.

**Reply with: APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**

**Response** — _awaiting the owner._

**Actual result** — **not executed, and it must not be executed as written.**

> **SUPERSEDED 2026-10-14 by the facts it was built on.** The customer replied
> at **2026-10-13T15:39:45Z** — _"this is the log from a hour+ drive"_, with a
> 2.8 MB attachment — **four hours and five minutes after this packet was
> written.** The drafted message asks him to flash the revision, report how the
> car starts, and send a datalog. **He has done all three.** Sending it now
> would tell a customer who has just ended eleven days of silence that nobody
> read his reply.
>
> **Torque's recommendation is REJECT**, or APPROVE WITH CHANGES against a
> redraft that responds to the log instead of asking for it. **Only the Response
> and Actual-result blocks of a raised packet may be edited**
> (`docs/ops/README.md`), so the body above is left exactly as it was written
> rather than quietly corrected — **a packet that was right when raised and
> wrong four hours later is worth more as a record than as a tidy document.**
>
> **The separate decision this packet named still stands, undiminished: both
> live jobs are unpriced.** That was true when this was raised and is true now.
> The customer was never the reason it had not happened.\_

---

## A-19 — May DD84's cash position be recorded in this public repository?

**Status: PENDING — raised 2026-10-16 by `/dd84-inbox-intake`, within the hour
before the weekly cash review fires.**

**Decision requested** — A decision on a **new category of sensitive material**:
**DD84's bank balance, cash position, overdraft state and account-level
financial condition.** Four options below. **Until this is answered, the
routines will record that a figure exists and withhold the figure**, which is
what `/dd84-inbox-intake` did this morning (T-71).

**Business objective** — Make the operating record usable on cash without making
the business's financial condition searchable. **Right now it is neither**: the
cash review cannot state a position, and the intake had to publish a hole where
a number belongs.

**Source and context** — Wells Fargo alert **2026-10-15T17:06:44Z**, thread
`1a14087d5d2b6009`, subject **"Your balance is at or below zero"**, reporting a
**negative available balance** on the business account. **Unread at the time of
this packet.** The figure, the account's last four digits and the debit card's
last four digits were all read by the run and **none was written to the
repository.**

**Why this is a packet and not a judgement call** — `CLAUDE.md` §5: _"A new
category of sensitive material needs its own decision. A-13 covers what was
exposed on 2026-10-08, not whatever gets added later. If a routine wants to
write something that would be awkward in public, that is an approval packet, not
a judgement call."_

**A-13 accepted revenue figures and system identifiers.** It is silent on a cash
position, and the two are not the same thing: **$3,507.86 of all-time revenue
describes a small business; a negative balance describes a distressed one**, and
DD84 is **actively pursuing SBA 504 financing** (T-58) with a prescreened
personal-loan solicitation chasing it. **A public, searchable record of
insolvency risk is material to a lender in a way a revenue figure is not.**

**Why it cannot wait** — **the weekly cash and revenue review fires Fridays at
11:10 UTC**, and today is Friday. **Its entire purpose is to report revenue,
receivables and cash position.** With no answer here it must either withhold the
only number it has or publish it on an agent's judgement. **Neither is
acceptable, and the first is what will happen by default.**

**Recommended plan — Option C.**

|       | Option                                               | What the record would hold                                                                                           |
| ----- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **A** | **Record freely**, as A-13 does for revenue          | Exact balances, dates, overdraft state, in briefs and the log                                                        |
| **B** | **Record nothing** about cash                        | Briefs say "not available"; the cash review loses its subject                                                        |
| **C** | **Record the shape, not the figure** _(recommended)_ | "Overdrawn", "positive", "a declined payment", with **thread IDs** pointing to the owner's own mail for every number |
| **D** | **Record figures, make the repository private**      | Everything, but it reverses A-13 and is a separate decision                                                          |

**Why C.** It keeps every routine able to say the thing that drives action —
**an account is overdrawn, a payment declined, an auto-charge is pending** —
while **no figure a lender or competitor could use is published.** The owner
loses nothing: **a thread ID is one click from the exact number in his own
inbox**, which is where the authoritative figure lives anyway. It is the same
convention already proven on customer identity under A-16: **a stable pointer
instead of the sensitive value.**

**Alternatives considered**

1. **Option A.** Rejected as the default, **not as unthinkable** — it is the
   owner's business and his call. But it should be chosen deliberately, with the
   lender exposure in view, rather than inherited from A-13 by an agent's
   analogy.
2. **Option B.** Rejected: it makes the cash review pointless, and **"not
   available this run" would be false** — the figure was available, this run
   simply declined to publish it. **A degradation notice that misrepresents why
   is worse than the gap.**
3. **Option D.** Not rejected on merit — **it may be the right long-run answer**
   — but A-13 was raised twice and settled on the record, and reversing it is
   its own packet, not a rider on this one.

**Cost and cash impact** — **No cost to any option.** Option D would have
knock-on effects on the Ledger repository's visibility assumptions and is not
costed here.

**Risks and safeguards** — Under C the residual risk is that **"overdrawn" is
itself informative**, which is accepted: it is the minimum needed for the record
to be about the business at all. Under A the risk is a searchable record of
financial distress during a loan application. **Under B the risk is a cash
review that cannot do its job**, which is the risk this record already carries.

**Systems affected** — `docs/ops/` briefs, `OPERATING-LOG.md`, and the
`/dd84-cash-review` routine's output. **No live system, no money, no customer.**

**Customer/public impact** — **No customer impact.** The public impact is the
whole subject of the packet.

**Success test** — The next cash review states DD84's cash position **in
whatever form this decision permits**, with a source and a read time, **without
either a fabricated figure or an unexplained blank.**

**What this packet does not cover** — the **account number, card digits or any
credential**, which stay out under §5 regardless of the answer; and **customer
payment details**, which A-13 already excludes and A-16 removed.

**Reply with: APPROVE (name the option) / APPROVE WITH CHANGES / DEFER /
REJECT**

**Response** — _awaiting the owner._

**Actual result** — _not yet executed. The figure is withheld and T-71 carries
the finding without it. Deferring leaves the record as it is now, which is
Option C in practice but by an agent's choice rather than a decision._

## A-20 — Send three customer follow-ups: two live jobs and one stalled enquiry

**Status: PENDING — raised 2026-10-21 by `/dd84-followup`.**

**Decision requested** — Approval to send **three messages, as a batch**, to two
live customers and one stalled enquirer. The full text of all three is in
`docs/ops/briefs/2026-10-21-followup.md`. **APPROVE / APPROVE WITH CHANGES /
DEFER / REJECT**, per message or for the batch.

**None of the three asks for money**, and that is deliberate — see the
constraint below.

**Business objective** — Stop the only two delivered jobs in this record going
cold, and close or convert a lead that is thirteen days past its own threshold.
**All three are revenue-relevant and none can be sent by an agent.**

| #     | Recipient               | Thread             | Stage                                                                        | What it commits DD84 to                                                                                                |
| ----- | ----------------------- | ------------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **1** | The Challenger customer | `1a0e402cdcf75731` | **Complete, unpriced.** His requested datalog has been **unread ~187 hours** | **A substantive reply by a date the owner fills in.** The draft carries a `[DATE]` bracket; **no price, no diagnosis** |
| **2** | The C10 customer        | `1a1082503004a073` | **Complete, unpriced.** DD84 spoke last, **~207 hours**, no reply            | **Reviewing one further datalog.** No price, no turnaround, no claim the fault is fixed                                |
| **3** | The Lexus enquirer      | `1a0a565f802fc60b` | **Qualified, stalled ~13 days**, past the proposed 7-day close               | **A scope reply if he answers.** No price — **which catalogue line applies was never decided**                         |

**Source and context** — `/dd84-followup`, 2026-10-21, run at the owner's
explicit request. Eight candidates, three drafted, two held.

**The constraint that shaped all three** — the routine's hard rule: **a
follow-up that asks for money is not drafted unless a payment system confirmed
the item is genuinely open.** **Stripe has no MCP server and PayPal has needed
re-authentication since 2026-10-09**, so neither job's billing status could be
confirmed. **Shopify was reachable and reports 0 orders all-time**, which rules
out an order-based sale but says nothing about these two jobs.

**And a reachable payment system would not have helped**, which is the more
useful fact: **neither job was ever invoiced**, so there is no record for Stripe
or PayPal to return. **The blocker is upstream of the connector — nobody set a
price**, which has been T-37's and T-64's next action since 2026-10-13.

**Cost and cash impact** — **No cost to send.** No message quotes a price,
offers a discount, extends a deadline or grants a credit. **The cash upside is
indirect and real**: these are **the only two pieces of delivered work in this
record**, somewhere in **$198–$1,300 for the pair** against the catalogue (**a
range, never a midpoint, and not separable per job** because neither tier was
decided). **The downside of silence is that both become unbillable by age.**

**Risks and safeguards**

1. **Draft 1 names a date the owner must fill in.** Sent with the bracket
   unfilled it reads as unfinished. **Safeguard: it cannot be sent by this
   platform, and the bracket is the reason it is there** — an agent inventing a
   turnaround is inventing a commitment.
2. **Draft 2 offers to review another datalog**, which is unbilled work on a job
   that was never priced. **Safeguard: say so now rather than discover it later
   — if the owner wants that review billed, draft 2 should be deferred until
   T-37 has a price.**
3. **Draft 3 may reopen a lead DD84 cannot serve profitably.** The enquiry is
   for exhaust and idle character on a 2016 Lexus RC 350, **and no catalogue
   line was ever matched to it.** **Safeguard: it asks a qualifying question and
   quotes nothing.**
4. **All three go to real customers from the business address.** **Safeguard:
   none has been placed in the mail account's drafts folder; the count stands
   unchanged at 15.** There is nothing to send accidentally.

**Systems affected** — Gmail, send only, three messages. **No payment system, no
calendar, no live site, no pricing record.**

**Customer and public impact** — **Three real people.** Two are mid-job and one
has waited thirteen days. **Drafts 1 and 2 are overdue courtesies rather than
asks**; draft 3 is a final touch before closing a lead.

**Success test** — All three sent from the owner's own hand; **a reply from at
least one of the two live customers inside 72 hours**; and **T-37 and T-64
carrying a price** regardless of whether anyone replies, because that is the
blocker the sends do not remove.

**Alternatives considered**

1. **Send nothing until both jobs are priced.** Rejected: **pricing is the
   owner's and has been outstanding eight days**, and the customers' silence
   compounds meanwhile. **A courtesy reply costs nothing and is not a quote.**
2. **Include a payment request anyway.** Rejected outright — **the routine's
   rule, and there is no invoice to reference.** Chasing money on an uninvoiced
   job invites exactly the "what am I paying for?" exchange DD84 cannot answer.
3. **Draft a fourth to the supercharger supplier (T-82).** Rejected **as out of
   scope here, not as unimportant**: a supplier is not in the customer
   lifecycle. It is the most time-sensitive waiting counterparty in the record
   and **needs its own one-paragraph reply.**

**Decision — APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**, per draft or for
the batch.

**Response** — _awaiting owner._ **Affected records** — T-37, T-64, T-66.
**Actual result** — _not yet executed._
