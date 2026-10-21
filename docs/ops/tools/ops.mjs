#!/usr/bin/env node
/**
 * ops.mjs — the operating record's arithmetic, done by a program.
 *
 *   node docs/ops/tools/ops.mjs verify-checkout   contract item 0, as code
 *   node docs/ops/tools/ops.mjs check             where the record disagrees with itself
 *   node docs/ops/tools/ops.mjs sync              rewrite every derived value from its source
 *   node docs/ops/tools/ops.mjs next-id OL        the next free ID, computed now
 *   node docs/ops/tools/ops.mjs queue             what is waiting on the owner, in order
 *   node docs/ops/tools/ops.mjs due               dates: hard deadlines apart from proposals
 *
 * Read-only except `sync`, which edits only derived values. No dependencies,
 * no package.json. See `docs/ops/tools/README.md`.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import {
  OPERATING_BRANCH,
  check,
  checkoutVerdict,
  daysBetween,
  describeClock,
  nextId,
  overdue,
  ownerQueue,
  parseApprovals,
  parseLog,
  parseRegister,
  sync,
} from "./record.mjs";

const FILES = {
  register: "docs/ops/TASK-REGISTER.md",
  approvals: "docs/ops/APPROVALS.md",
  log: "docs/ops/OPERATING-LOG.md",
};

function parseArgs(argv) {
  const options = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) options._.push(arg);
    else if (["--json", "--check", "--no-fetch"].includes(arg))
      options[arg.slice(2)] = true;
    else options[arg.slice(2)] = argv[(i += 1)];
  }
  return options;
}

function load(root) {
  const read = (path) => readFileSync(join(root, path), "utf8");
  return {
    register: parseRegister(read(FILES.register)),
    approvals: parseApprovals(read(FILES.approvals)),
    log: parseLog(read(FILES.log)),
  };
}

function today(options) {
  const value = options.today ?? new Date().toISOString().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`--today must be YYYY-MM-DD, got "${value}"`);
  }
  return value;
}

const git = (root, ...args) =>
  execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).trim();

// ── Commands ────────────────────────────────────────────────────────────────

function verifyCheckout(root, options) {
  const branch = options.branch ?? OPERATING_BRANCH;
  if (!options["no-fetch"]) {
    try {
      // An explicit refspec, so the remote-tracking ref is updated even in a
      // single-branch clone whose configured refspec does not cover `branch`.
      git(
        root,
        "fetch",
        "--quiet",
        "origin",
        `+refs/heads/${branch}:refs/remotes/origin/${branch}`,
      );
    } catch (error) {
      // A fetch that fails leaves the comparison against a stale remote ref,
      // which could pass for the wrong reason. Say so rather than guess.
      console.log(
        `UNVERIFIED: \`git fetch origin ${branch}\` failed — ${error.message.split("\n")[0]}`,
      );
      return 2;
    }
  }
  let remote = null;
  try {
    remote = git(root, "rev-parse", "--verify", "--quiet", `origin/${branch}`);
  } catch {
    remote = null;
  }
  const head = git(root, "rev-parse", "HEAD");
  const verdict = checkoutVerdict({
    head,
    remote,
    branch,
    hasSrc: existsSync(join(root, "src")),
    hasPackageJson: existsSync(join(root, "package.json")),
  });
  const stamp = new Date().toISOString().slice(0, 16);
  if (verdict.ok) {
    console.log(
      `Checkout verified ${stamp}Z: HEAD \`${head.slice(0, 7)}\` equals \`origin/${branch}\`; no \`src/\`, no \`package.json\`.`,
    );
    return 0;
  }
  console.log(`WRONG CHECKOUT ${stamp}Z: ${verdict.problems.join("; ")}.`);
  console.log(
    `Do not write anything. If this is the stale tree, run \`git reset --hard origin/${branch}\`, then re-run this check.`,
  );
  return 2;
}

function runCheck(root, options) {
  const findings = check(load(root));
  if (options.json) {
    console.log(JSON.stringify(findings, null, 2));
  } else if (findings.length === 0) {
    console.log("The operating record agrees with itself.");
  } else {
    for (const finding of findings) {
      const mark = finding.level === "error" ? "ERROR" : "warn ";
      console.log(
        `${mark} ${finding.code.padEnd(20)} ${finding.message}${finding.fixable ? "  (sync fixes)" : ""}`,
      );
    }
    const errors = findings.filter((finding) => finding.level === "error");
    const fixable = errors.filter((finding) => finding.fixable).length;
    console.log(
      `\n${errors.length} error(s), ${findings.length - errors.length} warning(s). ${fixable} fixed by \`ops.mjs sync\`; the rest need a person or an agent to correct the record.`,
    );
  }
  return findings.some((finding) => finding.level === "error") ? 1 : 0;
}

function runSync(root, options) {
  const result = sync(load(root));
  if (result.changes.length === 0) {
    console.log("Every derived value already matches its source.");
    return 0;
  }
  for (const change of result.changes) console.log(`- ${change}`);
  if (options.check) {
    console.log(
      "\nDerived values are stale. Run `node docs/ops/tools/ops.mjs sync`.",
    );
    return 1;
  }
  writeFileSync(join(root, FILES.register), result.register);
  writeFileSync(join(root, FILES.approvals), result.approvals);
  writeFileSync(join(root, FILES.log), result.log);
  console.log("\nWritten. Review with `git diff docs/ops/`.");
  return 0;
}

function runNextId(root, options) {
  const kind = (options._[1] ?? "").toUpperCase();
  console.log(nextId(kind, load(root)));
  return 0;
}

function waited(since, now) {
  if (!since) return "not recorded";
  const days = daysBetween(since, now);
  return `${since} (${days} day${days === 1 ? "" : "s"})`;
}

function cell(text) {
  return String(text).replace(/\|/g, "\\|");
}

function runQueue(root, options) {
  const now = today(options);
  const record = load(root);
  const { tasks, packets } = ownerQueue(record, now);
  if (options.json) {
    console.log(
      JSON.stringify(
        { today: now, packets, tasks },
        (key, value) => (key === "body" ? undefined : value),
        2,
      ),
    );
    return 0;
  }
  const limit = Number(options.limit ?? tasks.length);
  const hardSoon = tasks.filter((task) => task.band <= 1);
  const out = [
    `## Waiting on the owner — ${now}`,
    "",
    `Generated by \`node docs/ops/tools/ops.mjs queue\` from the register and the approvals file. **${packets.length} approval packet(s) and ${tasks.length} open task(s) are with the owner.** ${
      hardSoon.length
        ? `**Hard deadlines inside a week, or already passed: ${hardSoon.map((task) => `${task.id} ${task.due.hardDate}`).join(", ")}.**`
        : "No hard deadline falls inside the next week."
    }`,
    "",
    "### Packets — reply with APPROVE, APPROVE WITH CHANGES, DEFER or REJECT and the ID",
    "",
  ];
  if (packets.length === 0) out.push("None pending.");
  else {
    out.push("| Packet | Decision | Waiting since |", "| --- | --- | --- |");
    for (const packet of packets) {
      out.push(
        `| ${packet.id} | ${cell(packet.title)} | ${waited(packet.raisedOn, now)} |`,
      );
    }
  }
  out.push("", "### Tasks, in the order to take them", "");
  if (tasks.length === 0) out.push("Nothing open is with the owner.");
  else {
    out.push(
      "| # | Task | Priority | Status | Clock | Known since | Approval |",
      "| --- | --- | --- | --- | --- | --- | --- |",
    );
    tasks.slice(0, limit).forEach((task, index) => {
      out.push(
        `| ${index + 1} | ${task.id} ${cell(task.title)} | ${task.priority ?? task.priorityRaw} | ${task.status} | ${describeClock(task.due, now)} | ${waited(task.raisedOn, now)} | ${cell(task.approval)} |`,
      );
    });
    if (limit < tasks.length)
      out.push(
        "",
        `…and ${tasks.length - limit} more (\`--limit\` to show them).`,
      );
  }
  console.log(out.join("\n"));
  return 0;
}

function runDue(root, options) {
  const now = today(options);
  const { hard, proposed, upcomingHard } = overdue(load(root), now);
  if (options.json) {
    console.log(
      JSON.stringify({ today: now, hard, proposed, upcomingHard }, null, 2),
    );
    return 0;
  }
  const byOwner = (tasks, owner) =>
    tasks.filter((task) => task.owner === owner);
  const table = (tasks) =>
    tasks.length === 0
      ? ["None."]
      : [
          "| Task | Owner | Status | Clock |",
          "| --- | --- | --- | --- |",
          ...tasks.map(
            (task) =>
              `| ${task.id} ${cell(task.title)} | ${task.owner} | ${task.status} | ${describeClock(task.due, now)} |`,
          ),
        ];
  console.log(
    [
      `## Dates — ${now}`,
      "",
      `Generated by \`node docs/ops/tools/ops.mjs due\`. **Past a hard deadline: ${hard.length}.** Past a proposed date: ${proposed.length} (${byOwner(proposed, "Owner").length} owner, ${byOwner(proposed, "Agent").length} agent). A proposed date is Torque's suggestion that nobody agreed to: missing one is late against a plan, not against the world. A date something outside this record will enforce is recorded as \`**Hard deadline** YYYY-MM-DD — <who enforces it>\` in the task's section.`,
      "",
      "### Past a hard deadline",
      "",
      ...table(hard),
      "",
      "### Hard deadlines still ahead",
      "",
      ...table(upcomingHard),
      "",
      "### Past a proposed date",
      "",
      ...table(proposed),
    ].join("\n"),
  );
  return 0;
}

const HELP = `Usage: node docs/ops/tools/ops.mjs <command> [options]

  verify-checkout [--branch B] [--no-fetch]   Contract item 0. Exit 2 on the wrong tree.
  check [--json]                              Where the record disagrees with itself. Exit 1 on errors.
  sync [--check]                              Rewrite derived values. --check: exit 1 if stale.
  next-id T|A|S|OL                            The next free ID, computed from the headings.
  queue [--today YYYY-MM-DD] [--limit N] [--json]   What is waiting on the owner, in order.
  due [--today YYYY-MM-DD] [--json]                 Past-due work, hard deadlines apart from proposals.

  --root DIR   Repository root (default: three levels above this file).`;

const COMMANDS = {
  "verify-checkout": verifyCheckout,
  check: runCheck,
  sync: runSync,
  "next-id": runNextId,
  queue: runQueue,
  due: runDue,
};

export function main(argv) {
  const options = parseArgs(argv);
  const command = COMMANDS[options._[0]];
  if (!command) {
    console.log(HELP);
    return options._[0] && options._[0] !== "help" ? 1 : 0;
  }
  const root = resolve(
    options.root ?? fileURLToPath(new URL("../../../", import.meta.url)),
  );
  return command(root, options);
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (error) {
    console.error(`ops.mjs: ${error.message}`);
    process.exitCode = 1;
  }
}
