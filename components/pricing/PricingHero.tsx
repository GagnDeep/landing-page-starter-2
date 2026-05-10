import React from 'react';
import { pricingHero } from '@/content/pricing';
import { WarmGradientMesh } from '@/components/visuals/WarmGradientMesh';

export function PricingHero() {
  return (
    <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background border-b border-border text-center">
      <WarmGradientMesh className="opacity-30" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
          {pricingHero.heading}
        </h1>
        <p className="text-xl text-muted-foreground font-medium">
          {pricingHero.subheading}
        </p>
      </div>
    </section>
  );
}
