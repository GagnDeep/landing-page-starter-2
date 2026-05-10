# Next State Intent

## Target Phase
Phase 3 — Animated Visuals & Image Registry

## Objectives for Phase 3
- Create the image registry (`lib/images.ts`) mapping to specific page slots, relying strictly on Unsplash URLs configured via `images.remotePatterns` in `next.config.mjs`.
- Create Reusable animated Framer Motion components in `components/visuals/` (e.g., `RevealText.tsx`, `FadeIn.tsx`, `ParallaxImage.tsx`).
- Ensure all animations respect `prefers-reduced-motion`.
- Add necessary types for Framer Motion components to avoid TypeScript index signature errors.

## Dependencies / Requirements Before Starting
- The layout intent documents and the newly created content files must be referenced to determine which components need specific animated treatments or image placements.
- Ensure `framer-motion` is installed if not already present.
