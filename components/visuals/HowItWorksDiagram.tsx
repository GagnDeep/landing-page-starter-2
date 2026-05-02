"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksDiagramProps {
  steps: Step[];
  className?: string;
}

export function HowItWorksDiagram({ steps, className }: HowItWorksDiagramProps) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className={cn("flex flex-col md:flex-row gap-8 relative", className)}>
      {steps.map((step, idx) => {
        const isActive = idx === activeStep;
        return (
          <div
            key={idx}
            className={cn(
              "flex-1 p-6 rounded-lg border transition-all duration-500 ease-out",
              isActive ? "border-[var(--primary)] bg-[var(--primary)]/5 shadow-lg transform -translate-y-2" : "border-border bg-transparent opacity-60"
            )}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-500",
                isActive ? "bg-[var(--primary)] text-[var(--primary-foreground)]" : "bg-muted text-muted-foreground"
              )}>
                {idx + 1}
              </div>
              <h3 className="font-heading text-lg">{step.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
