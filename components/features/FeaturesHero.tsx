import React from "react";
import { featuresContent } from "@/content/features";
import { FadeUpStagger, AnimatedGradientBackground } from "@/components/visuals";

export function FeaturesHero() {
  const { headline, subheadline } = featuresContent.featuresHero;

  return (
    <AnimatedGradientBackground className="pt-40 pb-24 px-6 text-center border-b border-border/50">
      <div className="container mx-auto max-w-3xl relative z-10">
        <FadeUpStagger>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">
            {headline}
          </h1>
          <p className="font-sans text-xl text-muted-foreground font-light">
            {subheadline}
          </p>
        </FadeUpStagger>
      </div>
    </AnimatedGradientBackground>
  );
}
