import React from "react";
import { pricingContent } from "@/content/pricing";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export function PricingHero() {
  return (
    <section className="relative py-24 bg-background border-b border-border overflow-hidden">
      <DotMatrixGrid className="opacity-60" />
      <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground">
          {pricingContent.hero.heading}
        </h1>
        <p className="text-xl text-muted-foreground">
          {pricingContent.hero.subheading}
        </p>
      </div>
    </section>
  );
}
