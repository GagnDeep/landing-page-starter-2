"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps {
  endValue: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedStatCounter({
  endValue,
  label,
  prefix = "",
  suffix = "",
  className,
}: AnimatedStatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(endValue);
      return;
    }

    if (hasAnimated) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = endValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [hasAnimated, endValue, shouldReduceMotion]);

  return (
    <motion.div
      className={cn("flex flex-col items-center justify-center text-center", className)}
      onViewportEnter={() => {
        if (!hasAnimated) setHasAnimated(true);
      }}
      viewport={{ once: true }}
    >
      <div className="text-4xl md:text-5xl font-heading text-primary mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}
