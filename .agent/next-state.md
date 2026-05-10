# Next State: Armaan Driving School

**Target Phase:** 4/8 — Core Layout & Home Page Implementation

## Goal
To build the global shell (Header, Footer) and construct the primary landing page (`app/page.tsx`) by integrating the content objects (`content/home.ts`), visual components (`components/visuals/`), and the image registry (`lib/images.ts`) according to the layout blueprint (`.agent/layout-home.md`).

## Planned Actions
1.  **Global Shell:** Implement the global Navigation (Header) and Footer components.
2.  **Home Page Assembly:** Build out the 20 distinct section blocks defined in `.agent/layout-home.md`.
3.  **Component Integration:** Wire up the `AnimatedGradientMesh` for the hero, `LogoMarquee` for the trust bar, etc.
4.  **Content Hydration:** Pass data from `content/home.ts` into the respective UI sections.

## Constraints & Considerations
*   **SSR Awareness:** Ensure Framer Motion components and client-side logic don't cause hydration errors (e.g., using `use client` where necessary, checking `mounted` state if needed).
*   **Accessibility:** Maintain semantic HTML and ensure contrast ratios defined in the design system are met. Ensure `prefers-reduced-motion` is respected across all new UI assemblies.
*   **No other pages:** Focus *only* on the Home page and global layout shell. Other pages (About, Features, etc.) belong in subsequent phases.