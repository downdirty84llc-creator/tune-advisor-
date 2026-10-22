/**
 * The operating record, read as data.
 *
 * `TASK-REGISTER.md`, `APPROVALS.md` and `OPERATING-LOG.md` are written by
 * several sessions, and every number derived from them — the counts line, the
 * approvals board, the next log ID — has been typed by hand and has drifted:
 * nine times for the summary counts, seven times for log IDs, and the board
 * has carried packets as Pending weeks after the owner answered them. The
 * record's own conclusion (OL-0034, OL-0038, OL-0059) was that the fix is
 * structural: stop storing a derived value by hand.
 *
 * This module is that fix. It parses the three files, computes what used to be
 * counted, and reports where the stored values disagree with the source. It has
 * no dependencies, so it runs anywhere `node` does, and it never needs a
 * `package.json` — whose absence is the checkout guard's marker.
 *
 * Everything here is a pure function of the file text plus, where a date
 * matters, an explicit `today`. Nothing reads the clock implicitly.
 */

// ── Vocabulary ──────────────────────────────────────────────────────────────

/** Task statuses, in the order the counts line has always listed them. */
export const TASK_STATUSES = [
  "Done",
  "No Action",
  "Accepted Risk",
  "In Verification",
  "In Progress",
  "Awaiting Approval",
  "Awaiting Owner",
  "Blocked",
  "Planned",
  "Backlog",
];

/** Statuses that need no further action. Everything else is open work. */
export const TERMINAL_STATUSES = new Set([
  "Done",
  "No Action",
  "Accepted Risk",
]);

/** Statuses that mean the owner has to answer before anything moves. */
export const DECISION_STATUSES = new Set([
  "Awaiting Owner",
  "Awaiting Approval",
]);

export const PRIORITIES = ["Critical", "High", "Normal", "Low"];

/** The branch the operating record lives on (`docs/ops/README.md` item 0). */
export const OPERATING_BRANCH = "claude/claude-md-docs-cqvhy6";

// ── Markdown helpers ────────────────────────────────────────────────────────

/** Strip emphasis and code markers, leaving the words a reader sees. */
export function plain(text) {
  return text
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Split one table row into trimmed cells, honouring `\|` escapes. */
export function splitRow(line) {
  const inner = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  const cells = [];
  let cell = "";
  for (let i = 0; i < inner.length; i += 1) {
    if (inner[i] === "\\" && inner[i + 1] === "|") {
      cell += "\\|";
      i += 1;
    } else if (inner[i] === "|") {
      cells.push(cell.trim());
      cell = "";
    } else {
      cell += inner[i];
    }
  }
  cells.push(cell.trim());
  return cells;
}

/**
 * Render rows as a padded table, the way Prettier lays one out, so a file this
 * tool rewrites still passes `prettier --check`.
 */
export function formatTable(header, rows) {
  const widths = header.map((cell, column) =>
    Math.max(3, cell.length, ...rows.map((row) => (row[column] ?? "").length)),
  );
  const line = (cells) =>
    `| ${cells.map((cell, column) => (cell ?? "").padEnd(widths[column])).join(" | ")} |`;
  return [
    line(header),
    `| ${widths.map((width) => "-".repeat(width)).join(" | ")} |`,
    ...rows.map(line),
  ].join("\n");
}

/**
 * Greedy word wrap at Prettier's `printWidth`, as `proseWrap: always` does.
 * An inline code span is one word: Prettier never breaks inside one.
 */
export function wrap(text, width = 80) {
  const words = text.match(/(?:`[^`]*`|[^\s`])+/g) ?? [];
  const lines = [];
  let current = "";
  for (const word of words) {
    if (current && current.length + 1 + word.length > width) {
      lines.push(current);
      current = word;
    } else {
      current = current ? `${current} ${word}` : word;
    }
  }
  if (current) lines.push(current);
  return lines.join("\n");
}

/**
 * Find a table that starts after `fromLine`, identified by its header. Returns
 * the header cells, the row lines and their positions so the caller can
 * rewrite the table in place.
 */
function findTable(lines, fromLine, isHeader) {
  for (let i = fromLine; i < lines.length; i += 1) {
    if (!lines[i].startsWith("|") || !isHeader(splitRow(lines[i]))) continue;
    const header = splitRow(lines[i]);
    let end = i + 2;
    while (end < lines.length && lines[end].startsWith("|")) end += 1;
    return {
      header,
      start: i,
      end,
      rows: lines.slice(i + 2, end).map((text, index) => ({
        cells: splitRow(text),
        line: i + 2 + index,
      })),
    };
  }
  return null;
}

/** Split a file into `## ` sections keyed by the ID their heading opens with. */
function sections(lines, idPattern) {
  const found = [];
  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(new RegExp(`^## (${idPattern}) — (.*)$`));
    if (!match) continue;
    let end = i + 1;
    while (end < lines.length && !lines[end].startsWith("## ")) end += 1;
    found.push({
      id: match[1],
      title: match[2].trim(),
      line: i,
      body: lines.slice(i + 1, end).join("\n"),
    });
  }
  return found;
}

/** Every `T-nn`, `A-nn`, `S-nn` or `OL-nnnn` mentioned in a piece of text. */
export function idsIn(text, prefix) {
  const pattern = new RegExp(`(?<![\\w-])${prefix}-\\d+(?!\\d)`, "g");
  return [...new Set(text.match(pattern) ?? [])];
}

export function idNumber(id) {
  return Number(id.split("-")[1]);
}

const DATE = /\b(\d{4}-\d{2}-\d{2})\b/;

export function daysBetween(from, to) {
  return Math.round((Date.parse(to) - Date.parse(from)) / 86_400_000);
}

// ── Task register ───────────────────────────────────────────────────────────

/** Map a status cell such as `**No Action** (accepted)` to its canonical name. */
export function normalizeTaskStatus(cell) {
  const text = plain(cell)
    .replace(/\(.*?\)/g, "")
    .trim()
    .toLowerCase();
  return TASK_STATUSES.find((status) => status.toLowerCase() === text) ?? null;
}

export function normalizePriority(cell) {
  const text = plain(cell).toLowerCase();
  return PRIORITIES.find((priority) => priority.toLowerCase() === text) ?? null;
}

/**
 * A due cell holds a proposed date, a hard date, both, or a phrase such as
 * `not set`. A bare date is Torque's proposal, which nobody has agreed to. A
 * date something outside this record will enforce — a platform closing an
 * account, a renewal charging, an agency's cut-off — is written
 * `hard YYYY-MM-DD`. A cell can carry both: `2026-10-28 · hard 2026-10-30` is a
 * target set two days ahead of the real deadline.
 *
 * The register could not tell the two apart, which is how 48 "past due" items
 * came to bury the one with a real clock on it.
 */
export function parseDue(cell) {
  const text = plain(cell);
  const hard = text.match(/\bhard (\d{4}-\d{2}-\d{2})\b/i);
  const proposed = (hard ? text.replace(hard[0], "") : text).match(DATE);
  return {
    raw: text,
    date: proposed ? proposed[1] : null,
    hardDate: hard ? hard[1] : null,
  };
}

export function parseRegister(text) {
  const lines = text.split("\n");
  const summaryAt = lines.findIndex((line) => /^## Summary\s*$/.test(line));
  const table = findTable(lines, Math.max(summaryAt, 0), (cells) =>
    ["ID", "Status", "Owner", "Due"].every((name) => cells.includes(name)),
  );
  const column = (name) => table?.header.indexOf(name) ?? -1;

  const tasks = (table?.rows ?? [])
    .filter((row) => /^T-\d+$/.test(plain(row.cells[0] ?? "")))
    .map((row) => {
      const cell = (name) => row.cells[column(name)] ?? "";
      const id = plain(cell("ID"));
      return {
        id,
        title: plain(cell("Title")),
        workstream: plain(cell("Workstream")),
        priority: normalizePriority(cell("Priority")),
        priorityRaw: plain(cell("Priority")),
        status: normalizeTaskStatus(cell("Status")),
        statusRaw: plain(cell("Status")),
        owner: plain(cell("Owner")),
        approval: plain(cell("Approval")),
        due: parseDue(cell("Due")),
        line: row.line,
      };
    });

  // The counts paragraph runs from `Counts:` to the next blank line.
  let counts = null;
  const countsAt = lines.findIndex((line) => line.startsWith("Counts:"));
  if (countsAt !== -1) {
    let end = countsAt;
    while (end < lines.length && lines[end].trim() !== "") end += 1;
    const paragraph = lines.slice(countsAt, end).join(" ");
    const stated = {};
    const head = paragraph.match(/^Counts:(.*?)\*{0,2}(\d+) tasks\b/);
    if (head) {
      for (const part of head[1].split("·")) {
        const pair = plain(part)
          .replace(/\.$/, "")
          .match(/^(\d+) (.+)$/);
        if (pair) stated[pair[2].trim()] = Number(pair[1]);
      }
    }
    counts = {
      start: countsAt,
      end,
      stated,
      statedTotal: head ? Number(head[2]) : null,
    };
  }

  // A hard deadline can also be recorded in the task's own section, as
  // `**Hard deadline** YYYY-MM-DD — <who enforces it>`. That keeps the summary
  // table's columns, and every routine's edits to them, untouched.
  const details = sections(lines, "T-\\d+");
  for (const task of tasks) {
    const detail = details.find((section) => section.id === task.id);
    const hard = detail?.body.match(
      /\*\*Hard deadline\*\* (\d{4}-\d{2}-\d{2})/,
    );
    if (hard && !task.due.hardDate) task.due.hardDate = hard[1];
  }

  return { lines, table, tasks, details, counts };
}

/** Count tasks by status, in `TASK_STATUSES` order. */
export function countByStatus(tasks) {
  const counts = Object.fromEntries(TASK_STATUSES.map((status) => [status, 0]));
  for (const task of tasks) {
    if (task.status) counts[task.status] += 1;
  }
  return counts;
}

/** The counts paragraph, generated. Time-independent on purpose: a figure that
 *  changes with the date goes stale overnight even when nobody writes. */
export function renderCountsParagraph(tasks) {
  const counts = countByStatus(tasks);
  const open = tasks.filter((task) => !TERMINAL_STATUSES.has(task.status));
  const owners = open.filter((task) => task.owner === "Owner").length;
  const parts = TASK_STATUSES.map((status) => {
    const text = `${counts[status]} ${status}`;
    return status === "Done" || status === "Awaiting Owner"
      ? `**${text}**`
      : text;
  });
  return wrap(
    `Counts: ${parts.join(" · ")}. **${tasks.length} tasks.** Open ${open.length}: ` +
      `${owners} with the owner, ${open.length - owners} with the agent. ` +
      "Generated from the table above by `node docs/ops/tools/ops.mjs sync` — " +
      "never edit these numbers by hand. Overdue and deadline figures change " +
      "with the date, so they are not stored here: run `ops.mjs due`.",
  );
}

// ── Approvals ───────────────────────────────────────────────────────────────

export const PACKET_STATUSES = [
  "Pending",
  "Approved",
  "Accepted",
  "Rejected",
  "Deferred",
  "Expired",
  "Closed",
];

/** Read a decision phrase — `_awaiting owner._`, `**APPROVE (both)**`. */
export function normalizePacketStatus(text) {
  const words = plain(text).toUpperCase();
  if (/^_?AWAITING|^PENDING/.test(words)) return "Pending";
  if (/^REJECT/.test(words)) return "Rejected";
  if (/^DEFER/.test(words)) return "Deferred";
  if (/^EXPIRE/.test(words)) return "Expired";
  if (/^CLOSED/.test(words)) return "Closed";
  if (/^ACCEPT/.test(words)) return "Accepted";
  // A narrowed approval is still an approval; the board says so in words.
  if (/^APPROVE|^NARROWED/.test(words)) return "Approved";
  return null;
}

/**
 * The status a packet records for itself.
 *
 * The **Response** block is controlling: the file's rules say it is the one
 * block edited when the owner answers, and older packets kept a stale
 * `**Status: PENDING` line above an APPROVED response (A-05, A-06). Where a
 * packet has several responses (A-11: first, revised) the last one stands. A
 * packet with no response block falls back to its own status line.
 */
export function packetStatus(body) {
  const responses = [
    ...body.matchAll(/\*\*Response(?: — [^*]+)?\*\* — ([^\n]*)/g),
  ];
  for (const response of responses.reverse()) {
    const status = normalizePacketStatus(response[1]);
    if (status) return status;
  }
  const line = body.match(/\*\*Status: ([^*\n]+)/);
  return line ? normalizePacketStatus(line[1]) : null;
}

/** Collapse statuses that agree in substance, so only real drift is flagged. */
function packetDirection(status) {
  if (status === "Pending") return "pending";
  if (status === "Rejected") return "rejected";
  return "decided";
}

export function parseApprovals(text) {
  const lines = text.split("\n");
  const boardAt = lines.findIndex((line) => /^## Status board\s*$/.test(line));
  const table =
    boardAt === -1
      ? null
      : findTable(lines, boardAt, (cells) =>
          ["ID", "Decision", "Status"].every((name) => cells.includes(name)),
        );
  const column = (name) => table?.header.indexOf(name) ?? -1;
  const board = (table?.rows ?? []).map((row) => ({
    id: plain(row.cells[column("ID")] ?? ""),
    cells: row.cells,
    status: normalizePacketStatus(
      plain(row.cells[column("Status")] ?? "").replace(/[(,].*$/, ""),
    ),
    statusRaw: plain(row.cells[column("Status")] ?? ""),
    line: row.line,
  }));

  const packets = sections(lines, "[AS]-\\d+").map((section) => {
    const raised =
      section.body.match(/\*\*Status: PENDING — [^*\n]*?(\d{4}-\d{2}-\d{2})/) ??
      null;
    const decision = section.body.match(
      /\*\*Decision requested\*\* — ([\s\S]*?)(?:\n\n|$)/,
    );
    const affected = section.body.match(/\*\*Affected records\*\* — ([^*]*)/);
    const cls = section.body.match(/\bClass ([A-H](?: ?\+ ?[A-H])*)\b/);
    return {
      id: section.id,
      title: section.title,
      line: section.line,
      body: section.body,
      status: packetStatus(section.body),
      raisedOn: raised ? raised[1] : null,
      decision: decision ? plain(decision[1]) : null,
      covers: affected ? idsIn(affected[1], "T") : [],
      cls: cls ? cls[1] : null,
    };
  });

  return { lines, table, board, packets, owner: ownerParagraph(lines) };
}

const OWNER_SENTENCE =
  /\*\*(\w+) packets? (?:is|are) with the owner(?:: ([^*]*?))?\.\*\*/;

/**
 * The paragraph that opens with "**N packets are with the owner: …**".
 *
 * Only that bold sentence is derived. Prettier wraps it once the list passes 80
 * columns, and a session may follow it with prose of its own in the same
 * paragraph — why one of the packets is superseded, say — so the paragraph runs
 * to the next blank line and only the sentence is ever rewritten.
 */
function ownerParagraph(lines) {
  const start = lines.findIndex((line) =>
    /^\*\*\w+ packets? (?:is|are) with the owner/.test(line),
  );
  if (start === -1) return null;
  let end = start;
  while (end < lines.length && lines[end].trim() !== "") end += 1;
  const text = lines.slice(start, end).join("\n");
  const flat = text.replace(/\s*\n\s*/g, " ");
  const match = flat.match(OWNER_SENTENCE);
  return {
    start,
    end,
    text,
    flat,
    sentence: match?.[0] ?? null,
    countWord: match?.[1] ?? null,
    ids: match?.[2] ? [...idsIn(match[2], "A"), ...idsIn(match[2], "S")] : [],
  };
}

function pendingIds(packets) {
  return packets
    .filter((packet) => packet.status === "Pending")
    .map((packet) => packet.id);
}

/**
 * Whether the stated sentence names exactly the pending packets, with the right
 * count. Order is the writer's choice — most urgent first, say — and is not a
 * defect.
 */
function ownerSentenceAgrees(owner, packets) {
  const pending = pendingIds(packets);
  const word = NUMBER_WORDS[pending.length] ?? String(pending.length);
  return (
    Boolean(owner.sentence) &&
    owner.countWord.toLowerCase() === word.toLowerCase() &&
    owner.ids.length === pending.length &&
    pending.every((id) => owner.ids.includes(id))
  );
}

const NUMBER_WORDS = [
  "No",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
];

function sortIds(ids) {
  return [...ids].sort(
    (a, b) => a[0].localeCompare(b[0]) || idNumber(a) - idNumber(b),
  );
}

function listIds(ids) {
  if (ids.length <= 1) return ids.join("");
  return `${ids.slice(0, -1).join(", ")} and ${ids.at(-1)}`;
}

/**
 * The sentence, generated. IDs keep the order of `previous` — the sentence as a
 * writer last left it — for those still pending; resolved ones drop out, and
 * newly pending ones follow in ID order.
 */
export function renderOwnerLine(packets, previous = []) {
  const pending = pendingIds(packets);
  const kept = previous.filter((id) => pending.includes(id));
  const ordered = [
    ...kept,
    ...sortIds(pending.filter((id) => !kept.includes(id))),
  ];
  const count = NUMBER_WORDS[ordered.length] ?? String(ordered.length);
  if (ordered.length === 0) return "**No packets are with the owner.**";
  const noun = ordered.length === 1 ? "packet is" : "packets are";
  return `**${count} ${noun} with the owner: ${listIds(ordered)}.**`;
}

// ── Operating log ───────────────────────────────────────────────────────────

export const LOG_FOOTER =
  "## Next entry: never stored — take it from `node docs/ops/tools/ops.mjs next-id OL`";

export function parseLog(text) {
  const lines = text.split("\n");
  const entries = sections(lines, "OL-\\d+").map((section) => {
    const date =
      section.title.match(DATE)?.[1] ??
      section.body.match(/\*\*Timestamp\*\* (\d{4}-\d{2}-\d{2})/)?.[1] ??
      null;
    return { ...section, date };
  });
  const footerAt = lines.findIndex((line) => line.startsWith("## Next entry"));
  return { lines, entries, footerAt };
}

// ── Next free IDs ───────────────────────────────────────────────────────────

/**
 * The next free ID, computed from the headings at the moment it is asked for.
 * Never read it from a footer: two sessions reading the same cached number is
 * how seven log entries collided.
 */
export function nextId(kind, { register, approvals, log }) {
  const pad = (n, width) => String(n).padStart(width, "0");
  if (kind === "T") {
    const used = [
      ...register.tasks.map((task) => task.id),
      ...register.details.map((detail) => detail.id),
    ].map(idNumber);
    return `T-${pad(Math.max(0, ...used) + 1, 2)}`;
  }
  if (kind === "A" || kind === "S") {
    const used = approvals.packets
      .filter((packet) => packet.id.startsWith(`${kind}-`))
      .map((packet) => idNumber(packet.id));
    return `${kind}-${pad(Math.max(0, ...used) + 1, 2)}`;
  }
  if (kind === "OL") {
    const used = log.entries.map((entry) => idNumber(entry.id));
    return `OL-${pad(Math.max(0, ...used) + 1, 4)}`;
  }
  throw new Error(`Unknown ID kind "${kind}". Use T, A, S or OL.`);
}

// ── Consistency check ───────────────────────────────────────────────────────

/**
 * Every place the record disagrees with itself.
 *
 * Each finding is `error` when the record is wrong and `warn` when it is merely
 * worth a look. A finding marked `fixable` is one `sync` corrects. The checks
 * are deliberately narrow: a guard that cries wolf gets skipped, which is the
 * lesson of the 28-file checkout check (T-69).
 */
export function check({ register, approvals, log }) {
  const findings = [];
  const add = (level, code, message, fixable = false) =>
    findings.push({ level, code, message, fixable });

  // Register: the summary table against itself and its detail sections.
  const seen = new Set();
  for (const task of register.tasks) {
    if (seen.has(task.id)) {
      add(
        "error",
        "REG-DUPLICATE",
        `${task.id} appears twice in the summary table.`,
      );
    }
    seen.add(task.id);
    if (!task.status) {
      add(
        "error",
        "REG-STATUS",
        `${task.id} has status "${task.statusRaw}", which is not one of: ${TASK_STATUSES.join(", ")}.`,
      );
    }
  }
  const detailIds = new Set(register.details.map((detail) => detail.id));
  for (const task of register.tasks) {
    if (!detailIds.has(task.id)) {
      add(
        "error",
        "REG-NO-DETAIL",
        `${task.id} has a summary row but no "## ${task.id} —" section.`,
      );
    }
  }
  for (const detail of register.details) {
    if (!seen.has(detail.id)) {
      add(
        "error",
        "REG-NO-ROW",
        `${detail.id} has a detail section but no summary row.`,
      );
    }
  }

  // Register: the stored counts against the table.
  if (register.counts) {
    const actual = countByStatus(register.tasks);
    const wrong = TASK_STATUSES.filter(
      (status) => (register.counts.stated[status] ?? 0) !== actual[status],
    ).map(
      (status) =>
        `${status} says ${register.counts.stated[status] ?? 0}, table has ${actual[status]}`,
    );
    if (register.counts.statedTotal !== register.tasks.length) {
      wrong.push(
        `total says ${register.counts.statedTotal}, table has ${register.tasks.length}`,
      );
    }
    if (wrong.length > 0) {
      add(
        "error",
        "REG-COUNTS",
        `The counts line has drifted: ${wrong.join("; ")}.`,
        true,
      );
    }
  } else {
    add(
      "warn",
      "REG-COUNTS",
      'No "Counts:" paragraph found under the summary table.',
    );
  }

  // Register: approval IDs cited by tasks must exist.
  const packetIds = new Set(approvals.packets.map((packet) => packet.id));
  for (const task of register.tasks) {
    for (const id of [
      ...idsIn(task.approval, "A"),
      ...idsIn(task.approval, "S"),
    ]) {
      if (!packetIds.has(id)) {
        add(
          "error",
          "REG-APPROVAL-REF",
          `${task.id} cites ${id}, which has no packet in APPROVALS.md.`,
        );
      }
    }
  }

  // Register: Done needs evidence in the log (README, spec §14).
  const logText = log.entries.map((entry) => `${entry.title}\n${entry.body}`);
  for (const task of register.tasks.filter((task) => task.status === "Done")) {
    if (!logText.some((text) => idsIn(text, "T").includes(task.id))) {
      add(
        "error",
        "REG-DONE-NO-EVIDENCE",
        `${task.id} is Done but no OPERATING-LOG entry mentions it. Done requires evidence; otherwise it is In Verification.`,
      );
    }
  }

  // Approvals: the board against the packets.
  const boardIds = new Set(approvals.board.map((row) => row.id));
  for (const packet of approvals.packets) {
    if (!boardIds.has(packet.id)) {
      add(
        "error",
        "APR-BOARD-MISSING",
        `${packet.id} has a packet but no row on the status board.`,
        true,
      );
    }
  }
  for (const row of approvals.board) {
    const packet = approvals.packets.find((p) => p.id === row.id);
    if (!packet) {
      add(
        "error",
        "APR-BOARD-ORPHAN",
        `${row.id} is on the status board but has no packet.`,
      );
      continue;
    }
    if (
      packet.status &&
      row.status &&
      packetDirection(packet.status) !== packetDirection(row.status)
    ) {
      add(
        "error",
        "APR-BOARD-STATUS",
        `${row.id}: the board says "${row.statusRaw}", the packet records ${packet.status}.`,
        true,
      );
    }
  }
  if (
    approvals.owner &&
    !ownerSentenceAgrees(approvals.owner, approvals.packets)
  ) {
    const stated = approvals.owner.sentence ?? approvals.owner.flat;
    const expected = renderOwnerLine(approvals.packets, approvals.owner.ids);
    add(
      "error",
      "APR-OWNER-LINE",
      `The "with the owner" line reads "${plain(stated)}"; the packets say "${plain(expected)}".`,
      true,
    );
  }

  // Log: unique, contiguous IDs and no cached next number.
  const logIds = log.entries.map((entry) => idNumber(entry.id));
  const counted = new Map();
  for (const n of logIds) counted.set(n, (counted.get(n) ?? 0) + 1);
  for (const [n, times] of counted) {
    if (times > 1) {
      add(
        "error",
        "LOG-DUPLICATE",
        `OL-${String(n).padStart(4, "0")} is used by ${times} entries.`,
      );
    }
  }
  const highest = Math.max(0, ...logIds);
  for (let n = 1; n <= highest; n += 1) {
    if (!counted.has(n)) {
      add(
        "warn",
        "LOG-GAP",
        `OL-${String(n).padStart(4, "0")} is missing from the sequence.`,
      );
    }
  }
  if (log.footerAt !== -1 && log.lines[log.footerAt] !== LOG_FOOTER) {
    add(
      "error",
      "LOG-FOOTER",
      `The log footer stores a next ID ("${plain(log.lines[log.footerAt])}"). A cached number is what collided seven times.`,
      true,
    );
  }

  return findings;
}

// ── Sync: rewrite the derived values ────────────────────────────────────────

/**
 * Recompute every stored derived value and return the new file texts. Only the
 * derived parts change: the counts paragraph, the board's status column and
 * any missing board rows, the "with the owner" line, and the log footer.
 */
export function sync({ register, approvals, log }) {
  const changes = [];

  // Register counts paragraph.
  const registerLines = [...register.lines];
  if (register.counts) {
    const fresh = renderCountsParagraph(register.tasks).split("\n");
    const old = registerLines.slice(register.counts.start, register.counts.end);
    if (old.join("\n") !== fresh.join("\n")) {
      registerLines.splice(
        register.counts.start,
        register.counts.end - register.counts.start,
        ...fresh,
      );
      changes.push("TASK-REGISTER.md: counts paragraph regenerated");
    }
  }

  // Approvals board.
  const approvalLines = [...approvals.lines];
  if (approvals.table) {
    const { header } = approvals.table;
    const at = (name) => header.indexOf(name);
    const rows = approvals.board.map((row) => [...row.cells]);
    for (const row of rows) {
      const id = plain(row[at("ID")]);
      const packet = approvals.packets.find((p) => p.id === id);
      const boardStatus = normalizePacketStatus(
        plain(row[at("Status")]).replace(/[(,].*$/, ""),
      );
      if (
        packet?.status &&
        boardStatus &&
        packetDirection(packet.status) !== packetDirection(boardStatus)
      ) {
        row[at("Status")] = `**${packet.status}**`;
        changes.push(
          `APPROVALS.md: ${id} board status ${boardStatus} → ${packet.status}`,
        );
      }
    }
    const listed = new Set(rows.map((row) => plain(row[at("ID")])));
    for (const packet of approvals.packets) {
      if (listed.has(packet.id)) continue;
      const row = header.map(() => "");
      row[at("ID")] = packet.id;
      row[at("Decision")] = packet.title;
      if (at("Class") !== -1) row[at("Class")] = packet.cls ?? "not recorded";
      row[at("Status")] = `**${packet.status ?? "not recorded"}**`;
      if (at("Covers") !== -1)
        row[at("Covers")] = packet.covers.join(" ") || "—";
      rows.push(row);
      changes.push(`APPROVALS.md: ${packet.id} added to the board`);
    }
    rows.sort((a, b) => {
      const x = plain(a[at("ID")]);
      const y = plain(b[at("ID")]);
      // S- rows first, as the board has always listed them.
      return y[0].localeCompare(x[0]) || idNumber(x) - idNumber(y);
    });
    const table = formatTable(header, rows).split("\n");
    const old = approvalLines.slice(approvals.table.start, approvals.table.end);
    if (old.join("\n") !== table.join("\n")) {
      approvalLines.splice(
        approvals.table.start,
        approvals.table.end - approvals.table.start,
        ...table,
      );
      if (!changes.some((change) => change.startsWith("APPROVALS.md"))) {
        changes.push("APPROVALS.md: board re-padded");
      }
    }
  }
  // Re-find the owner paragraph: the board above it may have grown. Only the
  // bold sentence is replaced; prose after it in the paragraph is kept.
  const owner = ownerParagraph(approvalLines);
  if (owner && !ownerSentenceAgrees(owner, approvals.packets)) {
    const sentence = renderOwnerLine(approvals.packets, owner.ids);
    const paragraph = owner.sentence
      ? owner.flat.replace(owner.sentence, () => sentence)
      : sentence;
    approvalLines.splice(
      owner.start,
      owner.end - owner.start,
      ...wrap(paragraph).split("\n"),
    );
    changes.push('APPROVALS.md: "with the owner" line regenerated');
  }

  // Log footer.
  const logLines = [...log.lines];
  if (log.footerAt !== -1 && logLines[log.footerAt] !== LOG_FOOTER) {
    logLines[log.footerAt] = LOG_FOOTER;
    changes.push("OPERATING-LOG.md: footer no longer stores a next ID");
  }

  return {
    changes,
    register: registerLines.join("\n"),
    approvals: approvalLines.join("\n"),
    log: logLines.join("\n"),
  };
}

// ── When things happened ────────────────────────────────────────────────────

/**
 * The date a task or packet first appears in the operating log. This is when
 * the record first knew about it — the honest basis for "how long has this
 * been waiting", since the register stores no creation date.
 */
export function firstLogged(id, log) {
  const prefix = id.split("-")[0];
  const dates = log.entries
    .filter((entry) =>
      idsIn(`${entry.title}\n${entry.body}`, prefix).includes(id),
    )
    .map((entry) => entry.date)
    .filter(Boolean)
    .sort();
  return dates[0] ?? null;
}

// ── Owner queue and deadlines ───────────────────────────────────────────────

const PRIORITY_RANK = Object.fromEntries(
  PRIORITIES.map((priority, index) => [priority, index]),
);

/**
 * Everything waiting on the owner, in the order to take it.
 *
 * 0. A hard deadline inside the next week — something outside this record
 *    acts on that date whether or not anyone decides, and there is still time.
 * 1. A hard deadline already passed — the event has landed; what is left is
 *    finding out what it did.
 * 2. Decisions (Awaiting Owner / Awaiting Approval) by priority.
 * 3. The owner's other open tasks.
 *
 * Within a band: the nearest deadline, then priority, then the longest wait.
 */
export function ownerQueue({ register, approvals, log }, today) {
  const open = register.tasks.filter(
    (task) => task.owner === "Owner" && !TERMINAL_STATUSES.has(task.status),
  );
  const band = (task) => {
    const days = task.due.hardDate
      ? daysBetween(today, task.due.hardDate)
      : null;
    if (days !== null && days >= 0 && days <= 7) return 0;
    if (days !== null && days < 0) return 1;
    if (DECISION_STATUSES.has(task.status)) return 2;
    return 3;
  };
  const nearness = (task) =>
    task.due.hardDate
      ? Math.abs(daysBetween(today, task.due.hardDate))
      : Infinity;
  const tasks = open
    .map((task) => ({
      ...task,
      band: band(task),
      raisedOn: firstLogged(task.id, log),
    }))
    .sort(
      (a, b) =>
        a.band - b.band ||
        nearness(a) - nearness(b) ||
        (PRIORITY_RANK[a.priority] ?? 9) - (PRIORITY_RANK[b.priority] ?? 9) ||
        (a.raisedOn ?? "9999").localeCompare(b.raisedOn ?? "9999") ||
        idNumber(a.id) - idNumber(b.id),
    );

  const packets = approvals.packets
    .filter((packet) => packet.status === "Pending")
    .map((packet) => ({
      ...packet,
      raisedOn: packet.raisedOn ?? firstLogged(packet.id, log),
    }))
    .sort((a, b) => (a.raisedOn ?? "9999").localeCompare(b.raisedOn ?? "9999"));

  return { tasks, packets };
}

/**
 * Open tasks past their date, split by whether the date is real. A task past
 * its hard deadline is counted there only, not again as past its proposal.
 */
export function overdue({ register }, today) {
  const open = register.tasks.filter(
    (task) => !TERMINAL_STATUSES.has(task.status),
  );
  const hard = open.filter(
    (task) => task.due.hardDate && task.due.hardDate < today,
  );
  return {
    hard,
    proposed: open.filter(
      (task) => task.due.date && task.due.date < today && !hard.includes(task),
    ),
    upcomingHard: open
      .filter((task) => task.due.hardDate && task.due.hardDate >= today)
      .sort((a, b) => a.due.hardDate.localeCompare(b.due.hardDate)),
  };
}

function relative(date, today) {
  const days = daysBetween(today, date);
  if (days === 0) return "today";
  const count = `${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"}`;
  return days > 0 ? `in ${count}` : `${count} ago`;
}

/** A due cell in words, relative to today: the hard date leads when there is one. */
export function describeClock(due, today) {
  const parts = [];
  if (due.hardDate) {
    parts.push(`hard ${due.hardDate} (${relative(due.hardDate, today)})`);
  }
  if (due.date && due.date !== due.hardDate) {
    parts.push(
      `${due.hardDate ? "target" : "proposed"} ${due.date} (${relative(due.date, today)})`,
    );
  }
  return parts.join(" · ") || "no date";
}

// ── Checkout guard ──────────────────────────────────────────────────────────

/**
 * Contract item 0, as a decision on facts the caller gathered. The markers are
 * `src/` and `package.json`: both are in the stale Ledger tree a container
 * reset once served under this branch name with a clean `git status`, and
 * neither is in any clean checkout of the operating record. A tracked-file
 * count is not used — it grows by two briefs a weekday and failed every
 * correct run once it passed 28.
 */
export function checkoutVerdict({
  head,
  remote,
  hasSrc,
  hasPackageJson,
  branch,
}) {
  const problems = [];
  if (hasSrc) problems.push("`src/` exists");
  if (hasPackageJson) problems.push("`package.json` exists");
  if (!remote) problems.push(`\`origin/${branch}\` could not be resolved`);
  else if (head !== remote) {
    problems.push(
      `HEAD \`${head.slice(0, 7)}\` is not \`origin/${branch}\` (\`${remote.slice(0, 7)}\`)`,
    );
  }
  return { ok: problems.length === 0, problems };
}
