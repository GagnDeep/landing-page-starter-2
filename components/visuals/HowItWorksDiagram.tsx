import React from "react";
import { cn } from "@/lib/utils";

interface HowItWorksDiagramProps {
  className?: string;
  activeStep?: 1 | 2 | 3;
}

export function HowItWorksDiagram({ className, activeStep = 1 }: HowItWorksDiagramProps) {
  return (
    <div className={cn("relative flex items-center justify-between w-full max-w-3xl mx-auto", className)} aria-hidden="true">
      {/* Connecting line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0" />
      <div
        className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out"
        style={{ width: activeStep === 1 ? '0%' : activeStep === 2 ? '50%' : '100%' }}
      />

      {/* Nodes */}
      {[1, 2, 3].map((step) => {
        const isActive = step <= activeStep;
        const isCurrent = step === activeStep;

        return (
          <div key={step} className="relative z-10 flex flex-col items-center">
            <div
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-500",
                isActive ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background text-muted-foreground",
                isCurrent && "ring-4 ring-primary/30 scale-110 shadow-lg"
              )}
            >
              <span className="text-lg font-bold font-heading">{step}</span>
            </div>
            {isCurrent && (
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-ping [animation-duration:3s] motion-reduce:animate-none pointer-events-none" />
            )}
          </div>
        );
      })}
    </div>
  );
}
