# Next Project State
Verma's Bakery & Sweets

## Phase 3 Handoff: Animated Visuals & Image Registry

### Objective
Establish the foundational visual components, motion wrappers, and a centralized, strongly-typed image registry necessary before building out the full page layouts.

### Required Actions
1. **Image Registry:** Create a centralized file (e.g., `lib/images.ts`) mapping specific page slots to direct Unsplash URLs, ensuring a curated, high-quality visual aesthetic. Configure `images.remotePatterns` in `next.config.mjs` accordingly.
2. **Motion Components:** Build reusable, accessible Framer Motion components in a `components/visuals/` directory (e.g., fade-in wrappers, scroll-triggered reveals, interactive hover states).
3. **Accessibility:** Ensure all animations respect the `prefers-reduced-motion` media query using Framer Motion's `useReducedMotion`.
4. **Integration Prep:** Ensure these visual primitives are ready to consume the content strings generated in Phase 2 during the upcoming layout implementation phases.

### Acceptance Criteria
- A centralized image registry exists with curated, high-quality Unsplash URLs mapped to page sections.
- `next.config.mjs` is configured to allow the specified remote image patterns.
- Reusable, accessible animated visual components (using Framer Motion) are created and ready for integration.
- The project memory files (`.agent/current-state.md`, `.agent/next-state.md`, `.agent/agent.md`) are updated to reflect the completion of Phase 3.
