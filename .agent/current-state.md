# Current State

Phase 3: Animated Visuals & Image Registry has been completed.
- `lib/images.ts` created, mapping remote Unsplash URLs to site slots.
- `next.config.mjs` updated to configure `images.remotePatterns`.
- 8 reusable, animated Framer Motion components built in `components/visuals/`:
  - `AnimatedHeroAurora`
  - `FloatingBlobs`
  - `SectionDivider`
  - `MicroIcon`
  - `LogoMarquee`
  - `AnimatedSVGIllustration`
  - `CTAGlow`
  - `AnimatedStatCounter`
- All visual components support `prefers-reduced-motion` and read OKLCH CSS variables.
