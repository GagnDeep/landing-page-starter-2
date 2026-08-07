# Brief template

Copy this file, fill the slots, submit it as the whole session prompt. Drop a
slot only on purpose. **Never drop DONE.**

The bar: could a competent contractor with read access to this repo, no ability
to ask you a single question, and twenty minutes deliver the right thing from
this text alone? If not, the brief isn't finished — and neither is the session.

Everything that is true of the repo in general belongs in `AGENTS.md`, not here.
If you find yourself writing "use semantic tokens" in a brief, delete it: it is
already in `AGENTS.md` and enforced by `pnpm run check:conventions`.

---

```
GOAL
<One sentence. An outcome, not an activity. "Improve the hero" is not a goal;
 "/ renders a hero section with headline, subhead, primary and secondary CTA,
 and a product screenshot slot" is.>

CONTEXT
<One or two lines: why this exists, what already works, anything you know about
 the cause if this is a fix.>

ANCHORS
  app/<route>/page.tsx
  components/<name>.tsx           <- create
  components/ui/<primitive>.tsx   <- reuse, do not modify
  app/globals.css :: @theme       <- if a token is needed

DESIGN DIRECTION            (only for visual work — see the note below)
  Layout:      <the actual composition, in words>
  Type:        <scale and weight decisions>
  Density:     <generous / compact, and where>
  Motion:      <what animates, or "none">
  Reference:   <a real thing, or an attached screenshot>

CONSTRAINTS
- Reuse the primitives in components/ui/. List which ones you used in the PR.
- <invariant this change must not break>
- <anything the brief specifically allows that AGENTS.md forbids — say it here
  explicitly, e.g. "you MAY add a token to @theme">

NON-GOALS
- Do not modify anything outside <the paths listed in ANCHORS>.
- Do not add dependencies.
- Do not reformat files you aren't otherwise changing.
- Do not fix unrelated problems you notice — list them in the PR body instead.

DONE — all of these exit 0:
  pnpm install --frozen-lockfile
  pnpm run verify
  pnpm run check:guardrails
And these must be true:
  - <route> renders with zero console errors in both light and dark mode
  - <specific, checkable property of the result>

OUTPUT
Branch:    <type>/<slug>
PR title:  <type>(<scope>): <subject>
PR body:   every file changed and why; which ui/ primitives were reused;
           any {{VERIFY:}} markers left for a human.
```

---

## Notes on the slots that people get wrong

**ANCHORS.** The strongest signal in the whole brief. Real paths, real symbols.
If you don't know them, run `.jules/briefs/recon.md` first — one session from
quota, and it routinely saves a wasted run.

**DESIGN DIRECTION.** "Beautiful" is not a specification, and an agent handed it
returns the current house default. If the look matters, decide it yourself and
state it — layout concept, type scale, density, one signature element. Creative
decisions are yours at brief-writing time; execution is the agent's. A
screenshot beats three paragraphs (Jules accepts image attachments).

**NON-GOALS.** The most skipped and most valuable slot. Scope explosion, not
incompetence, is what turns a working session into an unreviewable 900-line
diff.

**DONE.** A command, never a description. "Make sure it looks good" gives the
agent no stopping condition, so it invents one. `pnpm run verify` gives it a
loop to close against, and turns the task from generation into search with a
termination test.

## Sizing

One PR a human reviews in one sitting. Decompose if the change would exceed
~1200 lines (`check:guardrails` will fail it anyway), touch more than three
areas, or require a decision you haven't made yet. That last one is the real
bar: size is survivable, size plus ambiguity is fatal.

For larger work, chain sessions — each one lands a merged PR, and the next
starts from the new `master`. Not one session with four follow-up messages.
