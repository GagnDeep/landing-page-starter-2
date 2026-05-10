"use client";

import React from "react";
import { motion, useInView, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedStatCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedStatCounter({
  className,
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  ...props
}: AnimatedStatCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  const springValue = useSpring(0, {
    duration: prefersReducedMotion ? 0 : duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (current) => {
    return Math.floor(current).toLocaleString();
  });

  React.useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  if (prefersReducedMotion) {
    return (
      <span className={cn("font-heading font-bold tabular-nums", className)} {...props}>
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("font-heading font-bold tabular-nums inline-flex", className)} {...props}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
