"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Higher number = more movement
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // If reduced motion is preferred, don't move. Otherwise, move vertically based on speed.
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : [`-${speed * 10}%`, `${speed * 10}%`]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="w-full h-full relative">
        {children}
      </motion.div>
    </div>
  );
}
