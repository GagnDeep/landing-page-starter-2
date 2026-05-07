# Next Phase Readiness

**Target Phase:** Phase 3 - Animated Visuals & Image Registry

## Objective
To build the foundational visual primitives that will bring the design system and layout blueprints to life. This phase focuses on creating reusable animated components (using Framer Motion) and establishing a centralized image registry to manage all photography assets before composing the full pages.

## Required Tasks for Phase 3
1.  **Image Registry:** Create `lib/images.ts` to map Unsplash URLs to specific page slots (e.g., Hero backgrounds, Gallery images, Chef portraits), ensuring strict typing. Update `next.config.mjs` to allow Unsplash remote patterns.
2.  **Visual Components (`components/visuals/`):**
    *   Create reusable animation wrappers (e.g., `FadeIn`, `SlideUp`, `StaggerContainer`) using Framer Motion.
    *   Implement complex visual primitives (e.g., `ParallaxImage`, `KenBurnsHero`) that adhere to the slow, graceful motion principles defined in the design system.
    *   Ensure all animations respect accessibility guidelines (`useReducedMotion`).

## Prerequisites Met
*   [x] Design System established (`.agent/design-system.md`)
*   [x] Layout blueprints finalized (`.agent/layout-*.md`)
*   [x] All textual content finalized and structured (`content/*.ts`)

The project is ready to proceed to Phase 3.