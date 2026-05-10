# Current State

Phase 3 (Animated Visuals & Image Registry) is complete.

- Created `components/visuals/` directory and implemented the following prop-driven, responsive animated components:
  1. `AnimatedGradientMesh.tsx`: A slow, elegant background hero mesh using OKLCH variables.
  2. `LogoMarquee.tsx`: A seamless scrolling logo track for partners/venues.
  3. `AnimatedFloralSVG.tsx`: A path-drawing floral SVG metaphor.
  4. `DotMatrixGrid.tsx`: A subtle density-driven background texture.
  5. `FloatingBlobs.tsx`: Soft, blurred organic shapes for depth.
  6. `CodeWindowTyping.tsx`: A typing effect component adapted for the 'process' steps.
  7. `AnimatedStatCounter.tsx`: A numeric counter for reviews and years.
  8. `AvatarStack.tsx`: A stacked avatar component for testimonial social proof.
- Built a strongly-typed `lib/images.ts` registry referencing direct, optimized Unsplash URLs tailored specifically to the "Anand Karaj & floral artisan" aesthetic, removing all need for hardcoded `src` strings in future components.
- Configured `next.config.mjs` to accept `images.unsplash.com` in `remotePatterns`.

All components strictly honor `prefers-reduced-motion` to ensure WCAG accessibility.
