#!/usr/bin/env node
// Fails when a branch touches files it was told not to touch, or grows past a
// size a human will actually review.
//
// Why this exists: "do not modify package.json" in a prompt is advice. Here it
// is a red check on the PR — which is the only form of the rule that survives
// an agent working while nobody is watching.
//
// Usage:  node scripts/check-guardrails.mjs [baseRef]
//         BASE_REF=origin/master node scripts/check-guardrails.mjs
//         MAX_DIFF_LINES=1200 node scripts/check-guardrails.mjs
//         ALLOW_TOUCH="package.json,pnpm-lock.yaml" node scripts/check-guardrails.mjs
//
// ALLOW_TOUCH is the deliberate escape hatch: a dependency-upgrade task is
// supposed to edit the lockfile. It must be stated up front, in the brief.

import { execFileSync } from "node:child_process"

const BASE = process.argv[2] || process.env.BASE_REF || "origin/master"
const MAX_DIFF_LINES = Number(process.env.MAX_DIFF_LINES || 1200)
const ALLOWED = new Set(
  (process.env.ALLOW_TOUCH || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
)

// path pattern -> why it is frozen, and what to do instead
const FROZEN = [
  ["package.json", "Dependency set is pinned. Changing it is its own task."],
  ["pnpm-lock.yaml", "Regenerated only by a deliberate dependency task."],
  [
    "pnpm-workspace.yaml",
    "Build-script allowlist. Removing it breaks installs.",
  ],
  ["tsconfig.json", "Compiler config is pinned to the toolchain."],
  [
    "next.config.mjs",
    "Split dev/prod distDir is intentional — do not collapse it.",
  ],
  ["eslint.config.mjs", "Lint config is the contract, not a variable."],
  ["postcss.config.mjs", "Tailwind pipeline."],
  [".prettierrc", "Formatting is settled."],
  ["ecosystem.config.cjs", "Deployment config."],
  [
    "components/ui/",
    "Vendored from the shadcn registry. Regenerate with the CLI.",
  ],
  [".agents/", "Agent tooling, not application source."],
  [".agent/", "Agent tooling, not application source."],
  [".claude/", "Agent tooling, not application source."],
  [".github/workflows/", "CI is the referee. It does not get edited to pass."],
  [
    "scripts/check-",
    "The checks are the contract. Fix the code, not the check.",
  ],
]

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim()
}

let mergeBase
try {
  mergeBase = git(["merge-base", BASE, "HEAD"])
} catch {
  console.error(
    `check-guardrails: cannot resolve base ref "${BASE}".\n` +
      `  In CI, fetch the base branch first (actions/checkout with fetch-depth: 0).\n` +
      `  Locally, pass one: node scripts/check-guardrails.mjs origin/master`
  )
  process.exit(1)
}

// Compare base against the working tree: in CI that equals HEAD, and locally
// it also catches changes an agent has made but not yet committed.
const changed = git(["diff", "--name-only", mergeBase])
  .split("\n")
  .filter(Boolean)

if (changed.length === 0) {
  console.log(`check-guardrails: no changes against ${BASE}`)
  process.exit(0)
}

const violations = []
for (const file of changed) {
  if (ALLOWED.has(file)) continue
  for (const [pattern, reason] of FROZEN) {
    const hit = pattern.endsWith("/")
      ? file.startsWith(pattern)
      : file === pattern
    if (hit && !ALLOWED.has(pattern)) violations.push({ file, reason })
  }
}

const numstat = git(["diff", "--numstat", mergeBase])
  .split("\n")
  .filter(Boolean)
let churn = 0
for (const row of numstat) {
  const [added, removed] = row.split("\t")
  if (added === "-" || removed === "-") continue // binary
  churn += Number(added) + Number(removed)
}

let failed = false

if (violations.length) {
  failed = true
  console.error(
    `check-guardrails: ${violations.length} frozen file(s) modified\n`
  )
  for (const v of violations) {
    console.error(`  ${v.file}\n      ${v.reason}`)
  }
  console.error(
    "\nIf the task genuinely requires one of these, say so in the brief and run with\n" +
      '  ALLOW_TOUCH="<paths>" pnpm run check:guardrails\n'
  )
}

if (churn > MAX_DIFF_LINES) {
  failed = true
  console.error(
    `check-guardrails: diff is ${churn} lines against ${BASE} (limit ${MAX_DIFF_LINES}).\n` +
      "  A PR nobody can review is not a finished PR. Split it into a chain of\n" +
      "  smaller PRs, each landing on its own.\n"
  )
}

if (failed) process.exit(1)

console.log(
  `check-guardrails: clean — ${changed.length} file(s), ${churn} lines changed against ${BASE}`
)
