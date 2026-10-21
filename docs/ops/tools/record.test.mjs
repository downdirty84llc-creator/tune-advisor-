/**
 * Tests for the operating-record tool. Run with `node --test docs/ops/tools/`.
 *
 * The fixtures copy the real files' shapes — bold status cells, a stale
 * `**Status: PENDING` line above an APPROVED response, a log heading with no
 * date — because those are what the parser meets in the record.
 */

import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import { main } from "./ops.mjs";
import {
  LOG_FOOTER,
  check,
  checkoutVerdict,
  countByStatus,
  describeClock,
  firstLogged,
  formatTable,
  nextId,
  normalizeTaskStatus,
  overdue,
  ownerQueue,
  packetStatus,
  parseApprovals,
  parseDue,
  parseLog,
  parseRegister,
  plain,
  renderOwnerLine,
  splitRow,
  sync,
  wrap,
} from "./record.mjs";

// ── Fixtures ────────────────────────────────────────────────────────────────

const REGISTER = `# DD84 task register

## Summary

| ID   | Title             | Workstream | Priority     | Status                   | Owner | Approval    | Due                          |
| ---- | ----------------- | ---------- | ------------ | ------------------------ | ----- | ----------- | ---------------------------- |
| T-01 | Adopt the spec    | ops        | High         | Done                     | Agent | A-01        | 2026-07-31                   |
| T-02 | Chase a live lead | sales      | **Critical** | **Awaiting Owner**       | Owner | C to send   | 2026-10-14                   |
| T-03 | A renewal lands   | finance    | High         | **Awaiting Owner**       | Owner | A to report | 2026-10-20 · hard 2026-10-24 |
| T-04 | Fix a routine     | ops        | Normal       | Planned                  | Agent | S-01        | not set                      |
| T-05 | An old risk       | ops        | High         | **No Action** (accepted) | Owner | A-01        | not recorded                 |
| T-06 | Read a statement  | finance    | Normal       | Planned                  | Owner | A to read   | 2026-10-25                   |

Counts: **1 Done** · 1 No Action · 0 Accepted Risk · 0 In Verification · 0 In
Progress · 0 Awaiting Approval · **2 Awaiting Owner** · 0 Blocked · 2 Planned · 0
Backlog. **6 tasks.** Recounted by hand.

> A dated note that is not the counts line.

## T-01 — Adopt the spec

- **Status** Done

## T-02 — Chase a live lead

- **Status** **Awaiting Owner**

## T-03 — A renewal lands

- **Status** **Awaiting Owner**

## T-04 — Fix a routine

- **Status** Planned

## T-05 — An old risk

- **Status** No Action

## T-06 — Read a statement

- **Status** Planned
`;

const APPROVALS = `# DD84 approval log

## Status board

| ID   | Decision       | Class | Status                  | Covers |
| ---- | -------------- | ----- | ----------------------- | ------ |
| S-01 | Standing local | A/B   | **Approved** (standing) | T-04   |
| A-01 | Adopt the spec | B     | **Approved**            | T-01   |
| A-02 | Send replies   | C     | **Pending**             | T-02   |

**Two packets are with the owner: A-02 and A-03.**

---

## S-01 — Standing approval: local repository work

**Response** — Approved, standing, by authorship of CLAUDE.md.

## A-01 — Adopt the spec

**Status: PENDING — with the owner since 2026-07-30.**

**Response** — **APPROVED**, 2026-07-31. **Limits** — Docs only.

## A-02 — Send replies

**Status: APPROVED (both) — owner, 2026-10-21. SENT the same day.**

**Response** — **APPROVE (both)**, owner, 2026-10-21.

## A-03 — Send one follow-up

**Status: PENDING — raised 2026-10-13 by the first \`/dd84-followup\` run.**

**Decision requested** — Approval to send one message.

**Response** — _awaiting the owner._ **Affected records** — T-02, T-03.
`;

const LOG = `# DD84 operating log

## OL-0001 — Adopt the DD84 specification into the repository

- **Timestamp** 2026-07-31T10:55:18Z
- **Task** T-01 · **Approval** A-01

## OL-0002 — 2026-10-13 · Intake raised T-02 and A-03

The intake found a live lead.

## OL-0003 — 2026-10-16 · A renewal notice

T-03 raised.

## Next entry: OL-0004
`;

function record(register = REGISTER, approvals = APPROVALS, log = LOG) {
  return {
    register: parseRegister(register),
    approvals: parseApprovals(approvals),
    log: parseLog(log),
  };
}

const codes = (findings) => findings.map((finding) => finding.code).sort();

// ── Markdown helpers ────────────────────────────────────────────────────────

test("splitRow keeps escaped pipes inside a cell", () => {
  assert.deepEqual(splitRow("| a | b \\| c | d |"), ["a", "b \\| c", "d"]);
});

test("formatTable pads every column to its widest cell, as Prettier does", () => {
  assert.equal(
    formatTable(["ID", "Status"], [["A-1", "**Pending**"]]),
    [
      "| ID  | Status      |",
      "| --- | ----------- |",
      "| A-1 | **Pending** |",
    ].join("\n"),
  );
});

test("wrap breaks greedily at 80 columns and never inside a code span", () => {
  const text = `${"word ".repeat(14)}run \`node docs/ops/tools/ops.mjs sync\` now`;
  const lines = wrap(text).split("\n");
  assert.ok(lines.every((line) => line.length <= 80));
  assert.ok(
    lines.some((line) => line.includes("`node docs/ops/tools/ops.mjs sync`")),
  );
});

test("plain strips emphasis and code markers", () => {
  assert.equal(plain("**Awaiting Owner** `x`"), "Awaiting Owner x");
});

// ── Register ────────────────────────────────────────────────────────────────

test("statuses normalise from the forms the register actually uses", () => {
  assert.equal(normalizeTaskStatus("**No Action** (accepted)"), "No Action");
  assert.equal(normalizeTaskStatus("**Awaiting Owner**"), "Awaiting Owner");
  assert.equal(normalizeTaskStatus("In Verification"), "In Verification");
  assert.equal(normalizeTaskStatus("Closed"), null);
});

test("a bare date is a proposal; `hard` marks a date the world enforces", () => {
  assert.deepEqual(parseDue("2026-10-14"), {
    raw: "2026-10-14",
    date: "2026-10-14",
    hardDate: null,
  });
  assert.deepEqual(parseDue("hard 2026-12-06"), {
    raw: "hard 2026-12-06",
    date: null,
    hardDate: "2026-12-06",
  });
  const both = parseDue("2026-10-28 · hard 2026-10-30");
  assert.equal(both.date, "2026-10-28");
  assert.equal(both.hardDate, "2026-10-30");
  assert.deepEqual(parseDue("not set"), {
    raw: "not set",
    date: null,
    hardDate: null,
  });
});

test("a hard deadline in the task section counts, without touching the table", () => {
  const register = REGISTER.replace(
    "## T-06 — Read a statement\n\n",
    "## T-06 — Read a statement\n\n- **Hard deadline** 2026-10-23 — the bank closes the dispute window.\n",
  );
  const task = parseRegister(register).tasks.find((t) => t.id === "T-06");
  assert.equal(task.due.date, "2026-10-25");
  assert.equal(task.due.hardDate, "2026-10-23");
  const queue = ownerQueue(record(register), "2026-10-21");
  assert.deepEqual(
    queue.tasks.map((t) => t.id).slice(0, 2),
    ["T-06", "T-03"],
    "earliest hard date first",
  );
});

test("parseRegister reads the summary table, details and stated counts", () => {
  const { register } = record();
  assert.equal(register.tasks.length, 6);
  assert.equal(register.tasks[1].priority, "Critical");
  assert.equal(register.tasks[4].status, "No Action");
  assert.equal(register.details.length, 6);
  assert.equal(register.counts.stated["Awaiting Owner"], 2);
  assert.equal(
    register.counts.stated["In Progress"],
    0,
    "a count split across a line break still parses",
  );
  assert.equal(register.counts.statedTotal, 6);
  assert.deepEqual(countByStatus(register.tasks).Planned, 2);
});

// ── Approvals ───────────────────────────────────────────────────────────────

test("the Response block decides a packet, not a stale status line above it", () => {
  assert.equal(
    packetStatus(
      "**Status: PENDING — with the owner.**\n\n**Response** — **APPROVED**, 2026-08-10.",
    ),
    "Approved",
  );
  assert.equal(
    packetStatus(
      "**Response** — _awaiting owner._ **Affected records** — T-14.",
    ),
    "Pending",
  );
  assert.equal(
    packetStatus(
      "**Response — first** — **APPROVED**, 09-09.\n\n**Response — revised** — **NARROWED**, 09-16.",
    ),
    "Approved",
  );
  assert.equal(
    packetStatus("**Status: ACCEPTED, 2026-09-25, owner.**"),
    "Accepted",
  );
  assert.equal(
    packetStatus("**Status: CLOSED 2026-10-08 — Option 3.**"),
    "Closed",
  );
  assert.equal(packetStatus("**Response** — **REJECT**, owner."), "Rejected");
});

test("parseApprovals reads the board, the packets and when a packet was raised", () => {
  const { approvals } = record();
  assert.deepEqual(
    approvals.board.map((row) => [row.id, row.status]),
    [
      ["S-01", "Approved"],
      ["A-01", "Approved"],
      ["A-02", "Pending"],
    ],
  );
  const a03 = approvals.packets.find((packet) => packet.id === "A-03");
  assert.equal(a03.status, "Pending");
  assert.equal(a03.raisedOn, "2026-10-13");
  assert.deepEqual(a03.covers, ["T-02", "T-03"]);
});

test("a wrapped owner line is read and rewritten as one paragraph", () => {
  // Seven pending IDs push the sentence past 80 columns; Prettier wraps it.
  const extra = [4, 5, 6, 7, 8, 9]
    .map(
      (n) => `\n## A-0${n} — Packet ${n}\n\n**Response** — _awaiting owner._\n`,
    )
    .join("");
  const approvals = APPROVALS.replace(
    "**Two packets are with the owner: A-02 and A-03.**",
    "**Seven packets are with the owner: A-02, A-03, A-04, A-05, A-06, A-07 and\nA-08.**",
  ).concat(extra);
  const result = sync(record(REGISTER, approvals));
  const after = parseApprovals(result.approvals);
  assert.equal(
    after.owner.text,
    "**Seven packets are with the owner: A-03, A-04, A-05, A-06, A-07, A-08 and\nA-09.**",
  );
  assert.ok(
    !result.approvals.includes("\nA-08.**\n\n"),
    "no fragment left behind",
  );
  const synced = record(result.register, result.approvals, result.log);
  assert.ok(!check(synced).some((f) => f.code === "APR-OWNER-LINE"));
  assert.deepEqual(sync(synced).changes, [], "a wrapped paragraph is stable");
});

test('the "with the owner" line is generated from the pending packets', () => {
  const { approvals } = record();
  assert.equal(
    renderOwnerLine(approvals.packets),
    "**One packet is with the owner: A-03.**",
  );
  assert.equal(renderOwnerLine([]), "**No packets are with the owner.**");
});

// ── Check ───────────────────────────────────────────────────────────────────

test("check finds every planted inconsistency, and nothing else", () => {
  // The fixture's counts, references, details and log are right; its board,
  // owner line and footer are wrong in the ways the real record has been.
  assert.deepEqual(codes(check(record())), [
    "APR-BOARD-MISSING", // A-03 has a packet and no row
    "APR-BOARD-STATUS", // A-02: board Pending, packet Approved
    "APR-OWNER-LINE",
    "LOG-FOOTER",
  ]);
});

test("check reports structural defects that sync cannot fix", () => {
  const register = REGISTER.replace(
    "| T-06 | Read a statement  |",
    "| T-04 | Read a statement  |",
  )
    .replace("| A to read   |", "| A-09        |")
    .replace(
      "| **Critical** | **Awaiting Owner**  ",
      "| **Critical** | Closed              ",
    )
    .replace("## T-05 — An old risk\n\n- **Status** No Action\n\n", "")
    .concat("\n## T-07 — A section with no row\n");
  const log = LOG.replace(
    "## OL-0003 — 2026-10-16",
    "## OL-0005 — 2026-10-16",
  ).concat("\n## OL-0005 — 2026-10-22 · A collision\n\nNothing.\n");
  const findings = check(record(register, APPROVALS, log));
  const found = new Set(codes(findings));
  for (const code of [
    "REG-DUPLICATE", // T-04 twice
    "REG-STATUS", // "Closed" is not a task status
    "REG-NO-DETAIL", // T-05 lost its section
    "REG-NO-ROW", // T-06 and T-07 have sections and no row
    "REG-APPROVAL-REF", // A-09 does not exist
    "LOG-DUPLICATE", // OL-0005 twice
  ]) {
    assert.ok(found.has(code), `expected ${code}`);
  }
  const gaps = findings.filter((f) => f.code === "LOG-GAP");
  assert.deepEqual(
    gaps.map((f) => [f.level, f.message]),
    [
      ["warn", "OL-0003 is missing from the sequence."],
      ["warn", "OL-0004 is missing from the sequence."],
    ],
    "a gap is a warning, not an error",
  );
  assert.ok(
    findings.filter((f) => !f.fixable && f.level === "error").length >= 6,
    "none of these is something sync may paper over",
  );
});

test("Done without a log entry is not Done", () => {
  const register = REGISTER.replace(
    "| T-04 | Fix a routine     | ops        | Normal       | Planned  ",
    "| T-04 | Fix a routine     | ops        | Normal       | Done     ",
  );
  const findings = check(record(register));
  assert.ok(
    findings.some(
      (f) => f.code === "REG-DONE-NO-EVIDENCE" && f.message.startsWith("T-04"),
    ),
  );
  assert.ok(
    !findings.some(
      (f) => f.code === "REG-DONE-NO-EVIDENCE" && f.message.startsWith("T-01"),
    ),
  );
});

test("a closed packet and an approved board row agree; pending against decided does not", () => {
  const approvals = APPROVALS.replace(
    "**Status: APPROVED (both) — owner, 2026-10-21. SENT the same day.**\n\n**Response** — **APPROVE (both)**, owner, 2026-10-21.",
    "**Status: CLOSED 2026-10-08 — Option 3.**",
  ).replace(
    "| A-02 | Send replies   | C     | **Pending**             |",
    "| A-02 | Send replies   | C     | **Approved** (not executed) |",
  );
  const findings = check(record(REGISTER, approvals));
  assert.ok(!findings.some((f) => f.code === "APR-BOARD-STATUS"));
});

// ── Sync ────────────────────────────────────────────────────────────────────

test("sync fixes every fixable finding, and running it twice changes nothing", () => {
  const result = sync(record());
  assert.ok(result.changes.length > 0);
  const after = record(result.register, result.approvals, result.log);
  assert.deepEqual(
    check(after).filter((finding) => finding.fixable),
    [],
  );
  assert.deepEqual(sync(after).changes, []);
});

test("sync adds a missing packet to the board with unsourced fields marked", () => {
  const result = sync(record());
  const board = parseApprovals(result.approvals).board;
  assert.deepEqual(
    board.map((row) => row.id),
    ["S-01", "A-01", "A-02", "A-03"],
  );
  const a03 = board.find((row) => row.id === "A-03");
  assert.equal(plain(a03.cells[2]), "not recorded", "class is not guessed");
  assert.equal(plain(a03.cells[4]), "T-02 T-03");
  assert.match(
    result.approvals,
    /\*\*One packet is with the owner: A-03\.\*\*/,
  );
  assert.ok(result.log.includes(LOG_FOOTER));
});

test("sync writes counts that match the table, and keeps the note below them", () => {
  const result = sync(record());
  const register = parseRegister(result.register);
  assert.equal(register.counts.statedTotal, 6);
  assert.equal(register.counts.stated["Awaiting Owner"], 2);
  assert.match(result.register, /Open 4: 3 with the owner, 1 with the agent\./);
  assert.match(result.register, /> A dated note that is not the counts line\./);
});

// ── IDs, dates and the queue ────────────────────────────────────────────────

test("next IDs are computed from the headings, never from the footer", () => {
  const data = record();
  assert.equal(nextId("T", data), "T-07");
  assert.equal(nextId("A", data), "A-04");
  assert.equal(nextId("S", data), "S-02");
  assert.equal(nextId("OL", data), "OL-0004");
  assert.throws(() => nextId("X", data), /Unknown ID kind/);
});

test("firstLogged finds the earliest entry, including one dated only in its body", () => {
  const { log } = record();
  assert.equal(firstLogged("T-01", log), "2026-07-31");
  assert.equal(firstLogged("T-02", log), "2026-10-13");
  assert.equal(firstLogged("A-03", log), "2026-10-13");
  assert.equal(firstLogged("T-06", log), null);
});

test("the owner queue puts a near hard deadline first, then decisions, then the rest", () => {
  const queue = ownerQueue(record(), "2026-10-21");
  assert.deepEqual(
    queue.tasks.map((task) => task.id),
    ["T-03", "T-02", "T-06"],
    "T-03 has a hard date in 3 days; T-02 is a Critical decision; T-06 is the owner’s plain task; agent and closed tasks are excluded",
  );
  assert.deepEqual(
    queue.packets.map((packet) => packet.id),
    ["A-03"],
  );
});

test("a deadline still ahead outranks one already passed", () => {
  const register = REGISTER.replace(
    "## T-06 — Read a statement\n\n",
    "## T-06 — Read a statement\n\n- **Hard deadline** 2026-10-27 — a renewal charges.\n",
  );
  const queue = ownerQueue(record(register), "2026-10-26");
  assert.deepEqual(
    queue.tasks.map((task) => [task.id, task.band]),
    [
      ["T-06", 0], // tomorrow: still preventable
      ["T-03", 1], // passed two days ago: find out what it did
      ["T-02", 2], // a decision with no external clock
    ],
  );
});

test("overdue separates hard deadlines from proposals and counts each once", () => {
  const late = overdue(record(), "2026-10-26");
  assert.deepEqual(
    late.hard.map((task) => task.id),
    ["T-03"],
  );
  assert.deepEqual(
    late.proposed.map((task) => task.id),
    ["T-02", "T-06"],
  );
  const early = overdue(record(), "2026-10-21");
  assert.deepEqual(early.hard, []);
  assert.deepEqual(
    early.proposed.map((task) => task.id),
    ["T-02", "T-03"],
  );
  assert.deepEqual(
    early.upcomingHard.map((task) => task.id),
    ["T-03"],
  );
});

test("describeClock says which kind of date it is", () => {
  assert.equal(
    describeClock(parseDue("2026-10-14"), "2026-10-21"),
    "proposed 2026-10-14 (7 days ago)",
  );
  assert.equal(
    describeClock(parseDue("2026-10-20 · hard 2026-10-24"), "2026-10-21"),
    "hard 2026-10-24 (in 3 days) · target 2026-10-20 (1 day ago)",
  );
  assert.equal(
    describeClock(parseDue("2026-10-19 · hard 2026-10-19"), "2026-10-21"),
    "hard 2026-10-19 (2 days ago)",
    "a target equal to the deadline is not repeated",
  );
  assert.equal(describeClock(parseDue("not set"), "2026-10-21"), "no date");
  assert.equal(
    describeClock(parseDue("2026-10-21"), "2026-10-21"),
    "proposed 2026-10-21 (today)",
  );
});

// ── Checkout guard ──────────────────────────────────────────────────────────

test("the checkout guard passes a clean checkout and names each wrong one", () => {
  const base = {
    head: "a".repeat(40),
    remote: "a".repeat(40),
    hasSrc: false,
    hasPackageJson: false,
    branch: "b",
  };
  assert.deepEqual(checkoutVerdict(base), { ok: true, problems: [] });
  assert.match(
    checkoutVerdict({ ...base, hasSrc: true }).problems.join(),
    /src/,
  );
  assert.match(
    checkoutVerdict({ ...base, hasPackageJson: true }).problems.join(),
    /package\.json/,
  );
  assert.match(
    checkoutVerdict({ ...base, remote: "b".repeat(40) }).problems.join(),
    /is not/,
  );
  assert.match(
    checkoutVerdict({ ...base, remote: null }).problems.join(),
    /could not be resolved/,
  );
});

// ── The CLI, end to end, on a temporary copy ────────────────────────────────

function capture(argv) {
  const lines = [];
  const original = console.log;
  console.log = (...args) => lines.push(args.join(" "));
  try {
    return { code: main(argv), output: lines.join("\n") };
  } finally {
    console.log = original;
  }
}

test("check fails, sync repairs, and check then passes — through the CLI", () => {
  const root = mkdtempSync(join(tmpdir(), "ops-record-"));
  mkdirSync(join(root, "docs/ops"), { recursive: true });
  writeFileSync(join(root, "docs/ops/TASK-REGISTER.md"), REGISTER);
  writeFileSync(join(root, "docs/ops/APPROVALS.md"), APPROVALS);
  writeFileSync(join(root, "docs/ops/OPERATING-LOG.md"), LOG);

  assert.equal(capture(["check", "--root", root]).code, 1);
  assert.equal(capture(["sync", "--check", "--root", root]).code, 1);
  const before = readFileSync(join(root, "docs/ops/APPROVALS.md"), "utf8");
  assert.equal(before, APPROVALS, "--check writes nothing");

  assert.equal(capture(["sync", "--root", root]).code, 0);
  const after = capture(["check", "--root", root]);
  assert.equal(after.code, 0, after.output);
  assert.equal(capture(["sync", "--check", "--root", root]).code, 0);
  assert.equal(capture(["next-id", "OL", "--root", root]).output, "OL-0004");

  const queue = capture(["queue", "--today", "2026-10-21", "--root", root]);
  assert.match(
    queue.output,
    /Hard deadlines inside a week, or already passed: T-03 2026-10-24/,
  );
  assert.match(
    queue.output,
    /\| A-03 \| Send one follow-up \| 2026-10-13 \(8 days\) \|/,
  );
});

test("the real operating record parses", () => {
  const root = new URL("../../../", import.meta.url);
  const data = {
    register: parseRegister(
      readFileSync(new URL("docs/ops/TASK-REGISTER.md", root), "utf8"),
    ),
    approvals: parseApprovals(
      readFileSync(new URL("docs/ops/APPROVALS.md", root), "utf8"),
    ),
    log: parseLog(
      readFileSync(new URL("docs/ops/OPERATING-LOG.md", root), "utf8"),
    ),
  };
  assert.ok(data.register.tasks.length > 0, "tasks found");
  assert.ok(
    data.register.tasks.every((task) => task.status),
    "every status is a known one",
  );
  assert.ok(data.approvals.packets.length > 0, "packets found");
  assert.ok(data.log.entries.length > 0, "log entries found");
});
