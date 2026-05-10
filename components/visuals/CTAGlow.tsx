"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string;
  glowOpacity?: number;
}

export function CTAGlow({
  className,
  glowColor = "var(--primary)",
  glowOpacity = 0.4,
  children,
  ...props
}: CTAGlowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative inline-block group", className)} {...props}>
      <motion.div
        className="absolute inset-0 rounded-full blur-md -z-10"
        style={{ backgroundColor: glowColor, opacity: glowOpacity }}
        animate={
          prefersReducedMotion
            ? { scale: 1 }
            : {
                scale: [1, 1.05, 1],
                opacity: [glowOpacity, glowOpacity * 1.5, glowOpacity],
              }
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />
      {children}
    </div>
  );
}
