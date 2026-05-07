import React from "react";
import { homeContent } from "@/content/home";
import { AnimatedGradientBackground, FadeUpStagger } from "@/components/visuals";

export function TestimonialShowcase() {
  const { quote, author, location } = homeContent.testimonialShowcase;

  return (
    <AnimatedGradientBackground className="py-grand px-6 bg-accent text-accent-foreground text-center">
      <div className="container mx-auto max-w-4xl relative z-10">
        <FadeUpStagger>
          <p className="font-heading text-2xl md:text-4xl lg:text-5xl leading-tight mb-8">
            {quote}
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="font-sans font-semibold tracking-wider uppercase text-sm">{author}</span>
            <span className="font-sans text-xs tracking-widest opacity-70 uppercase">{location}</span>
          </div>
        </FadeUpStagger>
      </div>
    </AnimatedGradientBackground>
  );
}
