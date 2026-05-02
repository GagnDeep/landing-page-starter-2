"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps {
  className?: string;
  value: number;
  label: string;
  suffix?: string;
}

export function AnimatedStatCounter({ className, value, label, suffix = "" }: AnimatedStatCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-muted-foreground font-sans">
        {label}
      </div>
    </div>
  );
}
