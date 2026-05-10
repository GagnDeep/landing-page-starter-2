"use client";

import { motion, useInView, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedStatCounter({
  className,
  value,
  label,
  prefix = "",
  suffix = "",
  duration = 2,
  ...props
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      if (shouldReduceMotion) {
         springValue.set(value);
      } else {
         springValue.set(value);
      }
    }
  }, [isInView, value, springValue, shouldReduceMotion]);

  return (
    <div ref={ref} className={cn("flex flex-col items-center", className)} {...props}>
      <div className="flex items-center text-4xl md:text-5xl font-heading text-primary font-bold">
        {prefix && <span>{prefix}</span>}
        <motion.span>{shouldReduceMotion ? value : displayValue}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <span className="mt-2 text-sm text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
