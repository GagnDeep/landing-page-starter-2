import React from "react";
import { homeContent } from "@/content/home";
import { SectionDivider } from "@/components/visuals";

export function Process() {
  const content = homeContent.process;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {content.headline}
          </h2>
          <SectionDivider className="max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border z-0"></div>

          {content.steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 shadow-sm group-hover:border-accent transition-colors duration-500">
                <span className="text-3xl font-heading text-muted-foreground group-hover:text-accent transition-colors duration-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
