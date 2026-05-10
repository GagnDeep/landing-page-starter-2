# Next State: Blinking Eye Events

**Upcoming Phase:** Phase 3 - Animated Visuals & Image Registry

## Immediate Objectives
- Create a centralized, type-safe image registry in `lib/images.ts` using high-quality remote Unsplash assets that align with the brand.
- Develop SSR-safe, highly accessible visual and animated components (e.g., Parallax images, smooth fade-ins, or subtle background video placeholders) that respect `prefers-reduced-motion`.
- Update `next.config.mjs` to allow remote images from `images.unsplash.com`.

## Technical Requirements for Next Phase
- Ensure all animations use CSS variables for themeing and follow the principles defined in `design-system.md`.
- No local images in the `public/` directory for content (only UI icons/logos if absolutely necessary, but prefer remote or inline SVGs).
- Components must be robust and ready to be imported into the page layouts in Phase 4.

## Blockers / Considerations
- We must ensure the `next.config.mjs` is correctly configured *before* building any `next/image` components to prevent build errors.