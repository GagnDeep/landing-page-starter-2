"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";

interface AnimatedStatCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function AnimatedStatCounter({
  value,
  duration = 2,
  delay = 0,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedStatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: "some" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      if (shouldReduceMotion) {
         // To avoid synchronous state update in effect, we use a small timeout
         const timer = setTimeout(() => setDisplayValue(value), 0);
         return () => clearTimeout(timer);
      } else {
        const controls = animate(0, value, {
          duration,
          delay,
          ease: "easeOut" as const,
          onUpdate(v) {
            setDisplayValue(Math.round(v));
          },
        });
        return () => controls.stop();
      }
    }
  }, [inView, value, duration, delay, shouldReduceMotion]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}
