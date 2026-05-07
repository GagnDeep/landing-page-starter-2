import React from "react";
import { aboutContent } from "@/content/about";
import { FadeUpStagger } from "@/components/visuals";

export function OurValues() {
  const { headline, values } = aboutContent.ourValues;

  return (
    <section className="py-macro bg-secondary text-secondary-foreground px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl text-center">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl mb-16">{headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="p-8 border border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                <h3 className="font-heading text-2xl mb-4 text-primary">{value.title}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
