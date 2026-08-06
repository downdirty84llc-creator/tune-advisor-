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
  cost, scope, systems touched, customer impact — is a new packet, not a
  liberal reading of an old one.
- An expired approval is dead. Re-request rather than execute late.
- **Seeded 2026-08-06** from repository evidence and the owner's stated
  decisions. Response dates for A-01 to A-04 are taken from the commit dates of
  the work they authorised, because the conversations themselves were not
  recorded anywhere durable — which is the failure this file exists to end.

---

## Status board

| ID   | Decision                                                  | Class | Status                  | Covers                             |
| ---- | --------------------------------------------------------- | ----- | ----------------------- | ---------------------------------- |
| S-01 | Standing approval for local repository work               | A/B   | **Approved** (standing) | T-08 T-09 T-10 T-15 T-16 T-24 T-25 |
| A-01 | Adopt the DD84 spec, CLAUDE.md and the Torque definition  | B     | **Approved**            | T-01 T-02 T-03                     |
| A-02 | Correct drifted documentation and the legal-review flags  | B     | **Approved**            | T-04 T-05                          |
| A-03 | Exclude demo accounts from owner-facing revenue reporting | E-adj | **Approved**            | T-06 T-12                          |
| A-04 | Correct the annual MRR arithmetic                         | E-adj | **Approved**            | T-07                               |
| A-05 | Create Stripe products and prices; run the payment matrix | E + F | **Pending**             | T-11                               |
| A-06 | Commission legal review of the ten legal documents        | G     | **Pending**             | T-13                               |
| A-07 | Subscribe to an upload virus-scanning service             | E + F | **Pending**             | T-14                               |
| A-08 | Build the operations control plane                        | B     | **Approved**            | T-18 T-19 T-20 T-21 T-22           |

**Three packets are with the owner: A-05, A-06, A-07.** A-05 and A-06 both block
launch. A-07 does not block launch but does block accepting uploads safely.

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

**Response** — Approved, standing, by authorship of CLAUDE.md §10/§11
(commit `6468118`, 2026-07-31).
**Expiration** — None; revised whenever CLAUDE.md §10 or §11 is revised.
**Affected records** — T-08, T-09, T-10, T-15 (prepare only), T-16 (prepare
only), T-24, T-25.
**Actual result** — Used seven times to date. Each use is recorded against its
task in `TASK-REGISTER.md` and its commit in `OPERATING-LOG.md`.

---

## A-01 — Adopt the DD84 specification, CLAUDE.md and the Torque definition

**Decision requested** — Commit the owner's operations specification, a
repository orientation guide and a Torque agent definition to the repository.
**Business objective** — Owner time saved: every future agent session starts
oriented instead of rediscovering the same constraints.
**Source and context** — Owner-supplied PDF specification, July 2026.
**Recommended plan** — Transcribe the spec to `docs/`, write `CLAUDE.md`, write
`.claude/agents/torque.md`.
**Alternatives** — Leave the spec as a PDF outside the repository: rejected,
because a PDF is neither searchable nor diffable by an agent.
**Cost and cash impact** — None.
**Risks and safeguards** — Transcription drift from the authoritative PDF;
mitigated by a header note naming the PDF as controlling.
**Systems affected** — This repository only.
**Customer/public impact** — None. The repository is not public-facing.
**Success test** — A new session can answer "what may I do without asking" from
the repository alone.

**Response** — **APPROVED**, 2026-07-31.
**Limits** — Documentation only; no code behaviour changes.
**Expiration** — Consumed on execution.
**Affected records** — T-01, T-02, T-03.
**Actual result** — Executed and verified. Commit `6468118`, three files, 1,106
lines added. Log `OL-0001`.

---

## A-02 — Correct drifted documentation and the legal-review flags

**Decision requested** — Correct claims in README, ARCHITECTURE, MILESTONES and
RUNBOOK that the code did not support, and set the legal-review flags truthfully.
**Business objective** — Risk control. Documentation that overstates what is
built produces launch decisions made on false information.
**Source and context** — Agent review of each documented claim against the
implementation.
**Recommended plan** — Diff every claim; correct or delete the failures; state
the residual honestly in MILESTONES.
**Alternatives** — Leave it and fix at launch: rejected, since the drift was
already being cited in planning.
**Cost and cash impact** — None.
**Risks and safeguards** — Setting `requiresReview` truthfully makes seven
documents render an "awaiting legal review" banner, which is a visible admission.
That is the correct behaviour and is why it needed an owner decision rather than
a silent edit.
**Systems affected** — Repository documentation and
`src/lib/legal/documents.ts`.
**Customer/public impact** — The banner is member-visible on `/legal/[slug]`.
**Success test** — Every remaining claim in the docs is verifiable against code.

**Response** — **APPROVED**, 2026-07-31, including the visible banner.
**Limits** — No change to document _text_; flags and documentation only. Torque
made no legal determination.
**Expiration** — Consumed on execution.
**Affected records** — T-04, T-05.
**Actual result** — Executed and verified. Commit `a489144`, five files,
+122/−57. The exemption claimed for three documents was written down as an open
question rather than resolved, and became T-13. Log `OL-0002`.

---

## A-03 — Exclude demo accounts from owner-facing revenue reporting

**Decision requested** — Change what the admin dashboard, MRR and the analytics
aggregate count, so seeded demo accounts stop being reported as real business.
**Business objective** — Revenue accuracy. The subscriber count and MRR are
numbers the owner would make decisions on.
**Source and context** — Agent finding: `scripts/seed.ts` writes ten demo
accounts, all flagged `is_sample`, and the dashboard counted them.
**Recommended plan** — A single exclusion predicate in
`src/lib/analytics/sample-data.ts`, applied to the subscriber, revenue and
analytics paths, badged in the UI, carried into CSV exports, with unit tests.
**Alternatives** — Stop seeding demo data: rejected, because the demo accounts
are needed to exercise every tier. Filter at read time in each caller: rejected,
because it drifts.
**Cost and cash impact** — None.
**Risks and safeguards** — The two filter helpers must stay asymmetric:
`analytics_events.user_id` is nullable and a null means real anonymous traffic
that must be kept, while `subscriptions.user_id` is not null. Unifying them
would make one tile wrong. Tests pin the rendered filter shape.
**Systems affected** — Admin dashboard, `aggregate-analytics` job, CSV export.
No production system — nothing here has run against a live database.
**Customer/public impact** — None. Administrator-facing only.
**Success test** — With only demo accounts present, the subscriber count and MRR
read zero.

**Response** — **APPROVED**, 2026-07-31.
**Limits** — Reporting only. No change to what the seeder writes, and no change
to member-visible behaviour beyond the sample badge.
**Expiration** — Consumed on execution.
**Affected records** — T-06, T-12.
**Actual result** — **Partially verified.** Code executed and unit-tested
(commits `1039582`, `8337e41`; 16 tests). The success test above has **not** been
run, because it needs a seeded database and nothing here has been run against
one. T-06 therefore stands at **In Verification**, not Done. Logs `OL-0003`,
`OL-0005`.

---

## A-04 — Correct the annual MRR arithmetic

**Decision requested** — Count an annual subscriber at a twelfth of the annual
price rather than at the monthly price.
**Business objective** — Revenue accuracy; the previous arithmetic overstated
monthly recurring revenue.
**Source and context** — Agent review of the admin revenue tile against
`subscription_plans` intervals.
**Recommended plan** — Extract the arithmetic to `src/lib/billing/mrr.ts`,
normalise every interval to monthly, cover with fixtures.
**Alternatives** — Report annual and monthly separately: rejected, because MRR
is a single comparable figure and splitting it moves the problem to the reader.
**Cost and cash impact** — None directly; it changes a figure the owner plans
against, downwards.
**Risks and safeguards** — Cent-boundary rounding; covered by 18 unit tests.
**Systems affected** — Admin dashboard only.
**Customer/public impact** — None.
**Success test** — The arithmetic matches hand-calculated fixtures across every
interval.

**Response** — **APPROVED**, 2026-07-31.
**Limits** — Arithmetic only; no change to pricing, plans or billing behaviour.
**Expiration** — Consumed on execution.
**Affected records** — T-07.
**Actual result** — Executed and verified against the stated success test.
Commit `5ae44fa`; 18 tests pass. Reconciliation against live Stripe data is a
different test and belongs to A-05. Log `OL-0004`.

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
processing fee at whatever rate the DD84 Stripe account carries — **not
recorded here; confirm the account's actual rate before the live leg** rather
than assuming a published rate.

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

**Response** — _awaiting owner._
**Affected records** — T-11.
**Actual result** — Not executed.

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

**Response** — _awaiting owner._
**Affected records** — T-13, and by dependency the launch checklist in
`docs/RUNBOOK.md`.
**Actual result** — Not executed.

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

**Success test** — An EICAR upload is marked `infected` and blocked; a clean file
is marked `clean` and downloads.

**Reply with: APPROVE / APPROVE WITH CHANGES / DEFER / REJECT**

**Response** — _awaiting owner._
**Affected records** — T-14.
**Actual result** — Not executed.

---

## A-08 — Build the operations control plane

**Decision requested** — Build the routines as runnable commands, stand up the
operating record on disk, extend the Torque definition, and add one additive
section to CLAUDE.md §10.
**Business objective** — Owner capacity. The agent currently carries operational
state in conversation transcripts, which is the "isolated conversations" failure
the specification names in §3.
**Source and context** — Owner instruction, 2026-08-06.
**Recommended plan** — Six command files in `.claude/commands/`; `docs/ops/`
with register, approvals and an append-only execution log; the missing spec
sections added to `.claude/agents/torque.md`; a pointer added to CLAUDE.md §10.
**Alternatives** — Keep carrying state in transcripts: rejected, it is the
problem. Build a database-backed task system: rejected as disproportionate —
markdown in the repository is diffable, reviewable and needs no runtime.
**Cost and cash impact** — None.
**Risks and safeguards** — Two real ones. A routine that fabricates a section
when a connector is missing would be worse than no routine, so the degradation
rule is stated in the shared contract and in every command file. And a seeded
register that is wrong is worse than an empty one, so unsourceable fields read
`not recorded` and T-19 stays In Verification until the owner confirms it.
**Systems affected** — This repository only. No connector is written to.
**Customer/public impact** — None.
**Success test** — Six invocable commands; three linked operating-record files;
`npm run typecheck && npm run lint && npm test` still green at 179 tests in 11
files; the branch pushed with no pull request opened.

**Response** — **APPROVED**, 2026-08-06.
**Limits** — The CLAUDE.md edit is **additive, §10 only**; §11 and the existing
§10 protocol text are not to be touched. No scheduled triggers are to be created
by the agent — the owner holds scheduling. No pull request.
**Expiration** — Consumed on execution.
**Affected records** — T-18, T-19, T-20, T-21, T-22.
**Actual result** — Executed. Verification output and the commit hash are
recorded in `OPERATING-LOG.md`. T-19 remains In Verification pending the owner's
confirmation that the seeded register matches their own record.
