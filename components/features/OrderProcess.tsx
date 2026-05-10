import React from "react";
import { featuresContent } from "@/content/features";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export function OrderProcess() {
  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      <FloatingBlobs className="opacity-20 mix-blend-screen" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-background mb-16">
          {featuresContent.process.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresContent.process.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mb-6 font-heading z-10 relative">
                {idx + 1}
              </div>
              {idx < 2 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-accent/30" />
              )}
              <h3 className="text-xl font-bold text-background mb-3">{step.title}</h3>
              <p className="text-muted/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
