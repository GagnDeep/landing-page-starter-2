# Running Jules against this repo

Jules is not a chat agent. You hand it a brief, it clones this repo into a
throwaway VM, plans, executes, and opens a PR — usually while you are doing
something else. So every fact it needs has to already be written down. That is
what `AGENTS.md`, the checks in `scripts/`, and this directory are for.

## One-time setup

1. Connect this repo in the Jules web app (there is no API for adding a source).
2. Repo → **Configuration** → **Environment setup script**: paste
   [`setup.sh`](setup.sh).
3. Press **Validate**, then **Run and Snapshot**. Every later session then
   starts from an identical known-good environment instead of re-deriving one.
4. `export JULES_API_KEY=...` from jules.google.com/settings if you want to
   drive sessions from the terminal.

## Running one

```bash
cp .jules/briefs/TEMPLATE.md .jules/briefs/my-task.md
$EDITOR .jules/briefs/my-task.md

.jules/session.sh new .jules/briefs/my-task.md --approve   # judgment lane
.jules/session.sh new .jules/briefs/my-task.md             # batch lane
.jules/session.sh status
.jules/session.sh watch <session-id>
```

`--approve` sets `requirePlanApproval: true`. Use it whenever the task is
ambiguous or brand-defining — reading a plan takes 30 seconds and is the only
check on *intent* in the entire system. Jules' own Planning Critic reviews
whether a plan is coherent; it cannot know whether the plan is the thing you
wanted.

Leave it off for mechanical, machine-checkable work: a component built from a
named spec, a codemod, a test, a copy change.

## What this repo gives Jules that a bare repo doesn't

| Artifact | What it removes |
|---|---|
| `AGENTS.md` | Questions about commands, conventions, and what is off-limits. |
| `components/ui/AGENTS.md` | Hand-edits to vendored primitives. Nearest file wins for the code being edited. |
| `pnpm run verify` | "Looks plausible to me" as a stopping condition. |
| `pnpm run check:conventions` | Raw hex colors, palette classes, `<img>`, the wrong icon import, lorem ipsum, `"use client"` on route entries. |
| `pnpm run check:guardrails` | Toolchain drift and 4000-line unreviewable PRs. |
| `.github/workflows/verify.yml` | You having to run any of it by hand to know if a PR is good. |
| `setup.sh` + snapshot | Environment failures, and sessions spent repairing the build. |

## Rules that carry most of the weight

**Every done-condition is a command that exits 0.** `pnpm run verify` is the
one. A checkable condition turns the task from generation into search with a
termination test — the agent can run it, see failure, iterate, and know when to
stop. Without it the agent's only stopping condition is its own taste.

**One self-contained brief per session.** The plan is generated once, from the
prompt you submitted. Information sent later cannot improve the plan; it can
only ask the agent to deviate from one it has already committed to.

**If the plan misunderstands the goal, kill the session — never correct it.**
Misframing is contagious: everything downstream is conditioned on the wrong
frame, and a correction layers on top rather than replacing it. Rewrite the
brief. The plan just told you exactly which sentence was ambiguous.

**Two corrective messages and the session is burned.** After that the context is
a transcript of disagreement rather than a spec. Merge your brief plus the
corrections into a new brief and resubmit — it is strictly better than what you
started with.

**Every stall is a bug in your inputs.** When a session ends up waiting on a
question, answer it, then ask where that answer should have lived: if it is true
of the repo it goes in `AGENTS.md`; if it is true of this task it goes in the
brief template. Fix it there and it can never be asked again. That loop is the
only part of this that compounds.

**Chain sessions, don't extend one.** Multi-step work is a sequence of merged
PRs, each starting from the new `master`. Each gets a fresh plan, a clean
context, and its own review. The VM is thrown away anyway — you preserve nothing
by staying in one session.

## A chain that fits this repo

Each row is one session, one PR, merged before the next starts.

| # | Session | Approval |
|---|---|---|
| 1 | Design foundation — tokens in `@theme`, header/footer/section primitives, `/` proving them | yes |
| 2 | Hero + social-proof section on `/` | yes, first time |
| 3 | Features and how-it-works sections | no |
| 4 | Pricing page from the token set | no |
| 5 | FAQ + final CTA + footer nav fill-out | no |
| 6 | Metadata, Open Graph, sitemap, 404 | no |

Session 1 is the one to get right; everything later is built through machinery
it establishes. [`briefs/example-01-design-foundation.md`](briefs/example-01-design-foundation.md)
is that brief, with the decisions left as `<...>` for you to fill in.

## When it goes wrong

| Symptom | Real cause | Fix |
|---|---|---|
| Huge diff, half of it unrelated | No NON-GOALS | Add them; `check:guardrails` catches the rest |
| Toolchain got "upgraded" | Versions stated in docs, or a red baseline | Never put versions in docs; keep `master` green |
| Clean code, wrong thing | Ambiguous GOAL | `--approve` and read the plan |
| Session stalled on a question | Brief left a gap | Answer, then move the answer into `AGENTS.md` |
| Setup failed | Environment not snapshotted | Re-run **Run and Snapshot** with `setup.sh` |
| Generic-looking output | "Beautiful" was left to the agent | Fill in DESIGN DIRECTION yourself |
