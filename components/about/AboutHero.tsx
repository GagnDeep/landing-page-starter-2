import React from "react";
import { aboutContent } from "@/content/about";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export function AboutHero() {
  return (
    <section className="relative py-32 overflow-hidden border-b border-border/50">
      <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-70" intensity="low" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 tracking-tight">
          {aboutContent.hero.heading}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          {aboutContent.hero.subheading}
        </p>
      </div>
    </section>
  );
}
