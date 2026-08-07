GOAL
Replace the default neutral theme with the design foundation described below,
and prove it with one page that exercises every token.

CONTEXT
The repo currently ships shadcn's stock neutral palette and no layout
primitives. This is session 1 of a chain: it establishes the tokens and the
shell that every later page is built from. Later sessions add pages through
this machinery — they must not re-decide any of it.

ANCHORS
  app/globals.css          :: @theme inline, :root, .dark   <- edit
  app/layout.tsx                                            <- reuse as-is
  app/page.tsx                                              <- rewrite
  components/site-header.tsx                                <- create
  components/site-footer.tsx                                <- create
  components/section.tsx                                    <- create
  components/ui/button.tsx, card.tsx, badge.tsx             <- reuse, frozen

DESIGN DIRECTION — this is a specification, not a suggestion
  Concept:    <one sentence naming the feel and where it comes from>
  Palette:    background / foreground / primary / muted / accent / border,
              given as OKLCh values for both :root and .dark.
              <state the actual values — do not leave this to the agent>
  Type:       Figtree throughout. Display 3.5rem/1.05 semibold, tightened
              tracking; body 1.0625rem/1.65; small caps label 0.75rem with
              0.08em tracking. Max measure 68ch on prose.
  Radius:     --radius <value>; the derived scale in @theme stays as-is.
  Density:    Sections 6rem vertical on desktop, 3.5rem on mobile.
              Content max-width 72rem, gutter 1.5rem.
  Motion:     None beyond what the primitives already do.
  Signature:  <the one element that makes this look like a decision — a rule
              above section headings, an offset grid, a specific card treatment.
              Name exactly one.>

CONSTRAINTS
- You MAY edit app/globals.css. It is the only file in the frozen list this
  brief unfreezes. Extend @theme; do not remove existing token names — the 55
  vendored primitives read them.
- Both light and dark must be complete. Every token defined in :root gets a
  .dark counterpart.
- Body text must meet WCAG AA contrast in both themes.
- components/section.tsx is the layout primitive every later page uses:
  it owns section padding, max-width and gutter. Pages must not re-declare
  those values.
- Header and footer use real navigation labels for a product landing page
  (Product, Pricing, Docs, Blog, Sign in, Get started). No placeholder links —
  point them at "#" and note it in the PR body.

NON-GOALS
- Do not build routes other than /.
- Do not add dependencies. No animation library.
- Do not modify anything in components/ui/.
- Do not touch package.json, pnpm-lock.yaml, tsconfig.json or any config file.
- Do not add analytics, cookie banners, or third-party embeds.
- Do not invent statistics, testimonials, customer names or logos. If the page
  wants social proof, render an empty state with a comment naming what real
  content goes there.

DONE — all of these exit 0:
  pnpm install --frozen-lockfile
  pnpm run verify
  ALLOW_TOUCH="app/globals.css" pnpm run check:guardrails
And these must be true:
  - / renders with no console errors in light and in dark mode
  - every token referenced anywhere in app/ and components/ is defined in
    @theme in app/globals.css
  - the page uses at least Button, Card and Badge from components/ui/

OUTPUT
Branch:   feat/design-foundation
PR title: feat(design): establish design foundation and layout shell
PR body:  every file changed and why; the final token table (name, light, dark);
          which ui/ primitives were reused; any {{VERIFY:}} markers left.

---

Session settings: `requirePlanApproval: true`. This is brand-defining and
ambiguous by nature — the plan is the cheapest possible place to catch a misread
of the design direction. Read the plan before approving.

Fill in every `<...>` before submitting. The angle brackets are decisions you
have to make; leaving them for the agent is how you get the house default back.
