import React from "react";
import { aboutContent } from "@/content/about";
import { FadeUpStagger } from "@/components/visuals";

export function HeritageTimeline() {
  const { headline, milestones } = aboutContent.heritageTimeline;

  return (
    <section className="py-macro bg-secondary text-secondary-foreground px-6 border-y border-border/50">
      <div className="container mx-auto max-w-3xl">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl text-center mb-16">{headline}</h2>

          <div className="space-y-12 border-l border-primary/30 pl-8 ml-4 md:ml-0 relative">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <h3 className="font-heading text-2xl mb-2 text-primary">{milestone.year}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {milestone.event}
                </p>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
