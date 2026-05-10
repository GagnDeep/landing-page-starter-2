# Next State: Armaan Driving School

**Target Phase:** 3/8 — Animated Visuals & Image Registry

## Goal
To establish the kinetic identity of the site and finalize asset sourcing before building full pages. This involves creating reusable, accessible Framer Motion wrappers and defining a strongly typed image registry that maps to the layout blueprints.

## Planned Actions
1.  **Image Registry:** Create `lib/images.ts` mapping specific Unsplash URLs to the layout blocks defined in Phase 1 (e.g., `hero.background`, `about.team`). Configure `next.config.mjs` to allow Unsplash domains.
2.  **Animation Skill Review:** Review `.agent/skills/animate/SKILL.md` to ensure animations are calm and purposeful, fitting the driving school brand.
3.  **Visual Components:** Create a `components/visuals/` directory.
4.  **Base Animations:** Build core Framer Motion wrappers (e.g., `FadeIn`, `SlideUp`, `StaggeredList`). Ensure strict adherence to `prefers-reduced-motion`.

## Constraints & Considerations
*   **No Full Pages Yet:** Do not build the `app/page.tsx` or other route pages yet. Focus purely on reusable visual primitives and asset mapping.
*   **Performance:** Images must rely on remote URLs (no local downloads). Animations must use `useRef` for intersection observers to avoid ESLint/hydration issues with state.