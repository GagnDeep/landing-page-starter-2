import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function FeaturedDestinations() {
  const { headline, destinations } = homeContent.featuredDestinations;

  return (
    <section className="py-grand bg-secondary text-secondary-foreground px-6 overflow-hidden">
      <div className="container mx-auto">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl mb-12 text-center">{headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <div key={idx} className="p-8 border border-border/50 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                <h3 className="font-heading text-2xl mb-4 text-primary">{dest.name}</h3>
                <p className="font-sans text-muted-foreground">{dest.description}</p>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
