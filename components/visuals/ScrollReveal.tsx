"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  offset?: ["start end", "end start"] | ["start end", "center center"];
}

export function ScrollReveal({
  children,
  className,
  offset = ["start end", "center center"],
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? {} : { opacity, y }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
