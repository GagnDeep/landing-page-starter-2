import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function TheProcess() {
  const { headline, steps } = homeContent.theProcess;

  return (
    <section className="py-grand bg-secondary text-secondary-foreground px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl text-center mb-16">{headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col text-center items-center">
                <span className="font-heading text-2xl mb-4 text-primary">{step.title}</span>
                <p className="font-sans text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
