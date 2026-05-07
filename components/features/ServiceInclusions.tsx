import React from "react";
import { featuresContent } from "@/content/features";
import { FadeUpStagger } from "@/components/visuals";

export function ServiceInclusions() {
  const { headline, description, items } = featuresContent.serviceInclusions;

  return (
    <section className="py-macro bg-background px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeUpStagger>
          <h2 className="font-heading text-3xl mb-4">{headline}</h2>
          <p className="font-sans text-muted-foreground mb-12">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-left">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <svg className="w-5 h-5 text-primary mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
