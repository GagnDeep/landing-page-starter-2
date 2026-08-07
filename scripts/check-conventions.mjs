#!/usr/bin/env node
// Turns the conventions in AGENTS.md into a command that exits non-zero.
//
// Why this exists: an async agent cannot be told "use semantic tokens" and be
// trusted to have done it — nobody is watching. A rule that isn't executable is
// a rule that silently decays. Everything asserted here is also stated in
// AGENTS.md; if you change one, change the other.
//
// Scope: files WE write. components/ui/** is vendored from the shadcn registry
// and is deliberately exempt.

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"

const ROOT = process.cwd()
const SCAN_DIRS = ["app", "components", "hooks", "lib"]
const EXEMPT = [/^components\/ui\//]
const CODE_EXT = /\.(tsx|ts)$/

/** @type {{file:string,line:number,rule:string,message:string,excerpt:string}[]} */
const failures = []

function walk(dir) {
  const out = []
  let entries
  try {
    entries = readdirSync(dir)
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      out.push(...walk(full))
    } else if (CODE_EXT.test(entry)) {
      out.push(full)
    }
  }
  return out
}

function fail(file, index, source, rule, message) {
  const line = source.slice(0, index).split("\n").length
  const excerpt = source.split("\n")[line - 1].trim().slice(0, 100)
  failures.push({ file, line, rule, message, excerpt })
}

// Strip line/block comments so a rule explained in a comment isn't a violation.
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(
      /(^|[^:])\/\/[^\n]*/g,
      (m, p) => p + m.slice(p.length).replace(/./g, " ")
    )
}

const RULES = [
  {
    id: "raw-color",
    // Hex colors and rgb()/hsl() literals anywhere in a component.
    pattern: /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(/g,
    message:
      "Raw color literal. Colors come from the semantic tokens in app/globals.css " +
      "(bg-background, text-foreground, border-border, bg-primary, …). If a token " +
      "is genuinely missing, add it to @theme in app/globals.css first.",
  },
  {
    id: "tailwind-palette-color",
    // bg-red-500, text-slate-200, border-zinc-800 … the default palette bypasses theming.
    pattern:
      /\b(?:bg|text|border|ring|fill|stroke|from|via|to|outline|decoration|shadow|accent|caret|divide|placeholder)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|\d{3})\b/g,
    message:
      "Tailwind default-palette color. It does not respond to light/dark theming. " +
      "Use a semantic token instead (bg-muted, text-muted-foreground, bg-accent, …).",
  },
  {
    id: "raw-img",
    pattern: /<img\s/g,
    message:
      "Raw <img>. Use next/image so the build enforces width/height and lazy loading.",
  },
  {
    id: "wrong-icon-import",
    // The export really is HugeiconsIcon. `HugeIcon` does not exist and fails to build.
    pattern: /\bHugeIcon\b(?!s)/g,
    message:
      'There is no "HugeIcon" export. The component is HugeiconsIcon: ' +
      'import { HugeiconsIcon } from "@hugeicons/react".',
  },
  {
    id: "placeholder-copy",
    pattern: /lorem ipsum|dolor sit amet/gi,
    message:
      "Placeholder copy. Every string ships as real, final copy — write the actual words.",
  },
  {
    id: "unfinished-marker",
    pattern: /\b(?:TODO|FIXME|XXX)\b/g,
    message:
      "Unfinished-work marker. Either finish it, or leave {{VERIFY: what is needed}} " +
      "and call it out in the PR body so a human resolves it.",
  },
  {
    id: "inline-color-style",
    pattern: /style=\{\{[^}]*(?:color|background|border-?[Cc]olor)\s*:/g,
    message:
      "Inline color style. Style with Tailwind classes bound to semantic tokens.",
  },
  {
    id: "hardcoded-font",
    pattern: /font-family\s*:|fontFamily\s*:/g,
    message:
      "Hardcoded font-family. Fonts are wired in app/layout.tsx via next/font and " +
      "exposed as --font-sans / --font-mono. Use font-sans / font-mono.",
  },
  {
    id: "manual-class-concat",
    // className={"a " + x} or className={`a ${x}`} — must go through cn().
    pattern: /className=\{(?:[^}]*?["'`][^}]*?\+|`[^`]*\$\{)/g,
    message:
      "Hand-built className string. Compose classes with cn() from @/lib/utils so " +
      "Tailwind conflicts resolve correctly.",
    skip: (match) => match.includes("cn("),
  },
]

for (const dir of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dir))) {
    const rel = relative(ROOT, file).split("\\").join("/")
    if (EXEMPT.some((re) => re.test(rel))) continue

    const raw = readFileSync(file, "utf8")
    const source = stripComments(raw)

    for (const rule of RULES) {
      rule.pattern.lastIndex = 0
      let match
      while ((match = rule.pattern.exec(source)) !== null) {
        if (rule.skip?.(match[0])) continue
        fail(rel, match.index, raw, rule.id, rule.message)
      }
    }
  }
}

// Route entry points stay Server Components — push "use client" down to leaves.
for (const file of walk(join(ROOT, "app"))) {
  const rel = relative(ROOT, file).split("\\").join("/")
  if (!/\/(page|layout)\.tsx$/.test(rel)) continue
  const raw = readFileSync(file, "utf8")
  if (/^\s*["']use client["']/m.test(raw)) {
    failures.push({
      file: rel,
      line: 1,
      rule: "client-route-entry",
      message:
        'Route entry marked "use client". Keep page.tsx / layout.tsx as Server ' +
        "Components and move the interactive part into its own client component.",
      excerpt: '"use client"',
    })
  }
}

if (failures.length === 0) {
  console.log("check-conventions: clean")
  process.exit(0)
}

const byRule = new Map()
for (const f of failures) {
  if (!byRule.has(f.rule)) byRule.set(f.rule, [])
  byRule.get(f.rule).push(f)
}

console.error(
  `check-conventions: ${failures.length} violation(s) across ${byRule.size} rule(s)\n`
)
for (const [rule, items] of byRule) {
  console.error(`  ${rule} — ${items[0].message}`)
  for (const item of items) {
    console.error(`      ${item.file}:${item.line}  ${item.excerpt}`)
  }
  console.error("")
}
console.error(
  "These rules are documented in AGENTS.md. Fix the code, not the check."
)
process.exit(1)
