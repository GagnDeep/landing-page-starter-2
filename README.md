# bro.tax — Tax Filing & Estimator for Freelancers & Creators

Next.js App Router + Tailwind CSS v4 + shadcn/ui application built for `bro.tax`: an irreverent, rigorous tax brand for 1099 self-employed workers, creators, and gig workers.

## Requirements

- Node.js 24.x (see `.nvmrc`)
- pnpm 10.x (`corepack enable`)

## Installed Dependencies & Justifications

- **`sharp` (`0.35.3`)**: High-performance image processing library used in build scripts to convert raw photography into optimized `.webp` formats stored in `/public/images/`.
- **`@hugeicons/react` (`1.1.9`)**: Clean, scalable SVG icon system strictly used across all components (`HugeiconsIcon`) to avoid informal emoji icons.

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

## Stack & Design System

Next.js (App Router, Turbopack) · React 19 · TypeScript strict · Tailwind CSS v4
(inline `@theme`, no config file) · shadcn/ui · HugeIcons · next-themes.

Exact versions live in `package.json`. TypeScript is pinned to 6.x and ESLint to 9.x; see `AGENTS.md` for why bumping either breaks the lint stack.

## Documentation

- [`PLAN.md`](PLAN.md): Market research, 20+ verbatim quotes, competitor teardown, 40+ keywords, official IRS tax rate table, positioning & route tree.
- [`DESIGN.md`](DESIGN.md): Palette selection (Electric Volt Lime + Obsidian Charcoal), contrast verification, typography rules, and image manifest.
- [`AGENTS.md`](AGENTS.md): Coding rules, frozen paths, conventions.
