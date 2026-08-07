# Landing Page Starter

Next.js App Router + shadcn/ui starter for building production landing pages.

## Requirements

- Node.js 24.x (see `.nvmrc`)
- pnpm 10.x (`corepack enable`)

## Quick start

```bash
pnpm install --frozen-lockfile
pnpm run dev          # http://localhost:7811
```

## Commands

| Command | What it does |
|---|---|
| `pnpm run dev` | Dev server on port 7811 (Turbopack, output in `.next-dev/`) |
| `pnpm run build` | Production build (output in `.next-prod/`) |
| `pnpm run start` | Serve the production build on port 7822 |
| `pnpm run typecheck` | `tsc --noEmit` |
| `pnpm run lint` | ESLint |
| `pnpm run format` | Prettier write · `format:check` to verify only |
| `pnpm run check:conventions` | Design-system rules (tokens, icons, RSC boundaries) |
| `pnpm run check:guardrails` | Frozen-file and diff-size check for a branch |
| **`pnpm run verify`** | **typecheck + lint + format:check + conventions + build** |
| `pnpm run verify:pr` | `verify` plus `check:guardrails` |

`pnpm run verify` is the definition of done. Nothing merges without it.

## Stack

Next.js (App Router, Turbopack) · React 19 · TypeScript strict · Tailwind CSS v4
(inline `@theme`, no config file) · shadcn/ui (`radix-maia`, neutral) ·
HugeIcons · next-themes.

Exact versions live in `package.json` — that is the only place they are stated,
on purpose. TypeScript is pinned to 6.x and ESLint to 9.x; see `AGENTS.md` for
why bumping either breaks the lint stack.

## Working in this repo

Read [`AGENTS.md`](AGENTS.md) first. It is the contract for humans and coding
agents alike: commands, frozen paths, design-system rules, PR conventions.

For delegating work to [Jules](https://jules.google), see
[`.jules/README.md`](.jules/README.md) — brief templates, the environment setup
script, and session tooling.

## Adding UI primitives

```bash
pnpm dlx shadcn@latest add <component>
```

They land in `components/ui/`, which is vendored and never hand-edited.
