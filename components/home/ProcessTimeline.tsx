import React from 'react';
import { MicroIcon } from '@/components/visuals/MicroIconSet';
import { processSteps, artisanalProcessHeading } from '@/content/home';

export function ProcessTimeline() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {artisanalProcessHeading}
          </h2>
        </div>

        {/* Home-11-ProcessTimeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border z-0" />

          {processSteps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-muted border-4 border-background flex items-center justify-center mb-6 text-primary shadow-sm">
                <MicroIcon name={step.icon} className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
