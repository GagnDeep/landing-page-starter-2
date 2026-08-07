# CLAUDE.md

**Read [AGENTS.md](AGENTS.md) first — it is the single source of truth** for
commands, frozen paths, design-system rules and PR conventions in this repo.
Nothing is duplicated here, because two copies of a fact drift and the stale one
gets trusted.

This file holds only what is specific to working in Claude Code.

## Definition of done

`pnpm run verify` exits 0. On a branch, `pnpm run verify:pr`.

## Version facts

Never state dependency versions in documentation — read `package.json`.
Stale version numbers in docs get treated as instructions: an agent previously
rewrote `package.json` to match versions written in this file, downgrading the
whole toolchain to do it.

## Skills

- `shadcn` — component docs, registry usage, CLI
- `next-best-practices` — RSC boundaries, async APIs, file conventions
- `frontend-design` — visual direction and design quality
- `brainstorming` — run before building anything new

## Delegating to Jules

`.jules/` holds the briefs, the environment setup script and the session
tooling. When you write a Jules brief, follow `.jules/briefs/TEMPLATE.md` and
end it with a done-condition that is a command, never a description.
