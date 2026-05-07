"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInUpProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeInUp({
  children,
  className,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  ...props
}: FadeInUpProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom slow ease out
      }}
      className={cn("w-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
