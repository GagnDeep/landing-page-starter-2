"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedStatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedStatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      let start = 0;
      const end = value;
      // if value is large, we increment in larger steps to finish in 'duration' seconds
      const totalSteps = 60 * duration; // 60fps
      const stepValue = end / totalSteps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        start += stepValue;
        if (currentStep >= totalSteps || start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          // Add some easing (simple ease-out by slowing down near the end)
          const progress = currentStep / totalSteps;
          const easeOutQuad = 1 - (1 - progress) * (1 - progress);
          setCount(Math.round(end * easeOutQuad));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView, prefersReducedMotion]);

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums font-bold", className)}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
