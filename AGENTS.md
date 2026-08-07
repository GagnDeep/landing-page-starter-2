# AGENTS.md

Next.js App Router landing-page starter. Read this before changing anything.
Every line here is a fact you would otherwise get wrong.

## Commands

```
Setup:        pnpm install --frozen-lockfile
Dev server:   pnpm run dev          # port 7811
Build:        pnpm run build
Types:        pnpm run typecheck
Lint:         pnpm run lint
Format:       pnpm run format       # pnpm run format:check to verify only
Conventions:  pnpm run check:conventions
Guardrails:   pnpm run check:guardrails
```

**Definition of done for every task: `pnpm run verify` exits 0.**
It runs typecheck → lint → format:check → check:conventions → build. Run it
before you finish. If it does not pass, the task is not done.

On a branch, also run `pnpm run verify:pr` — it adds `check:guardrails`, which
fails if you touched a frozen file or produced a diff too large to review.

## Do not touch

| Path | Why |
|---|---|
| `components/ui/**` | Vendored verbatim from the shadcn registry. Regenerate with `pnpm dlx shadcn@latest add <name> --overwrite`; never hand-edit. |
| `package.json`, `pnpm-lock.yaml` | Dependency set is pinned. See "Pins" below. |
| `tsconfig.json`, `next.config.mjs`, `eslint.config.mjs`, `postcss.config.mjs`, `.prettierrc` | Toolchain config is settled and load-bearing. |
| `pnpm-workspace.yaml` | Build-script allowlist. Deleting it breaks `pnpm install`. |
| `ecosystem.config.cjs` | Deployment config. |
| `scripts/check-*.mjs`, `.github/workflows/**` | The checks are the contract. Fix the code, not the check. |
| `.agents/`, `.agent/`, `.claude/` | Agent tooling, not application source. |

If a task genuinely requires one of these, the brief must say so explicitly.

## Pins — do not "upgrade" these

- **TypeScript stays on 6.x.** TS 7 is unsupported by typescript-eslint, and
  `pnpm run lint` becomes a hard crash the moment you bump it.
- **ESLint stays on 9.x.** ESLint 10 breaks `eslint-plugin-react` 7.37.5, which
  `eslint-config-next` depends on.
- **No new runtime dependencies.** This repo ships with 55+ shadcn primitives,
  Radix, Embla, Recharts, Sonner and date-fns. Build from those. Adding a
  package (animation libraries especially) is its own task, with its own brief.

A red `pnpm run lint` is never a reason to change a dependency version. It is a
reason to fix the code.

## Layout

```
app/                  App Router routes. Server Components by default.
app/globals.css       Tailwind v4 @theme — every design token lives here.
app/layout.tsx        Fonts (next/font) + ThemeProvider. Already wired.
components/           Components we write.
components/ui/        Vendored shadcn primitives. Frozen — see above.
hooks/                Custom hooks.
lib/utils.ts          cn() — the only class-merging helper.
scripts/              Repo checks. Frozen.
.jules/               Jules briefs, setup script and session tooling.
.next-dev/            Dev build output (gitignored).
.next-prod/           Production build output (gitignored).
```

The split `.next-dev` / `.next-prod` output dirs are deliberate — running the
dev server must not clobber a production build. Do not collapse them back to
`.next`.

## Conventions

These are enforced by `pnpm run check:conventions`, which prints the offending
file and line. They are not style preferences; they are build failures.

- **Semantic color tokens only.** `bg-background`, `text-muted-foreground`,
  `border-border`, `bg-primary`. Never a hex/`rgb()`/`hsl()` literal, never a
  Tailwind palette color (`bg-zinc-800`, `text-blue-600`) — those ignore theming
  and break dark mode. A missing token gets added to `@theme` in
  `app/globals.css` first, then used by name.
- **Compose classes with `cn()`** from `@/lib/utils`. No string concatenation,
  no template literals in `className`. Variants use `cva` from
  `class-variance-authority`.
- **Icons:** the component is `HugeiconsIcon` — not `HugeIcon`.
  ```tsx
  import { HugeiconsIcon } from "@hugeicons/react"
  import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

  <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
  ```
- **`app/**/page.tsx` and `layout.tsx` stay Server Components.** Push
  `"use client"` down into the smallest leaf that needs interactivity.
- **Images go through `next/image`.** No raw `<img>`.
- **Fonts are already configured** in `app/layout.tsx` via `next/font`
  (`--font-sans` Figtree, `--font-mono` Geist Mono). Use `font-sans` /
  `font-mono`. Never import a font anywhere else or set `font-family` by hand.
- **No placeholder content.** No lorem ipsum, no `TODO`/`FIXME`. Every string
  ships as real, final copy. If you need a fact you were not given, write
  `{{VERIFY: what is needed}}` and list it in the PR body — never invent a
  statistic, price, testimonial, customer name or logo.
- **Both themes must work.** Dark mode is the `.dark` class via next-themes;
  press `d` in dev to toggle. Anything that only looks right in one theme is a
  bug, and using semantic tokens is what prevents it.
- **Reuse before building.** The 55+ primitives in `components/ui/` cover
  accordion, carousel, command menu, dialog, drawer, chart, calendar, sidebar
  and more. `ls components/ui/` before writing a primitive from scratch.
- Accessibility floor: visible keyboard focus, one `<h1>` per page, semantic
  landmarks, no `div` acting as a button, `prefers-reduced-motion` honoured.

## Code style

No semicolons, double quotes, 2-space indent, trailing commas (es5), 80-char
width, LF. Prettier owns this — run `pnpm run format`, don't hand-align.
Prettier also sorts Tailwind classes; keep its ordering.

## PRs

- Conventional commits: `feat|fix|chore|refactor|docs(scope): subject`.
- **Under 1200 lines of diff.** `check:guardrails` enforces it. A bigger change
  is a chain of PRs, each one landing on its own.
- PR body lists every file changed and why, plus any `{{VERIFY:}}` markers left.
- Do not reformat files you are not otherwise changing.
- Report problems you noticed but were not asked to fix in the PR body. Do not
  fix them in the same PR.
