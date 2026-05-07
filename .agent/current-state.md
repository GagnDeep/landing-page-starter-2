# Current State

**Phase:** 3/8 completed.
**Focus:** Animated Visuals & Image Registry.

## Achievements
- The `lib/images.ts` registry is fully established, mapping Unsplash URLs to specific page slots (hero, team, gallery, etc.) to keep image URLs centralized.
- `next.config.mjs` has been updated to allow `images.unsplash.com` as a remote pattern.
- A robust suite of 9 animated visual components has been created in `components/visuals/` using `framer-motion`: `AnimatedGradientMesh`, `CardHoverEffect`, `HeroReveal`, `ParallaxScroll`, `PatternOverlay`, `StaggeredGrid`, `SubtleScaleImage`, `TextFadeIn`, and `WarmthGlow`.
- These components are fully prop-driven, strictly obey `prefers-reduced-motion` for accessibility, and are designed to embody the warm, luxurious Punjabi catering aesthetic.
