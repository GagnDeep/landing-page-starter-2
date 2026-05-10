import React from "react";
import { featuresContent } from "@/content/features";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function FeaturesHero() {
  return (
    <section className="relative py-32 overflow-hidden border-b border-border/50">
      <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-80" intensity="low" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 tracking-tight">
          {featuresContent.hero.heading}
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {featuresContent.hero.subheading}
        </p>
      </div>
    </section>
  );
}
