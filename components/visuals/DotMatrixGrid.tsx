"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  dotColor?: string;
}

export function DotMatrixGrid({ className, dotColor = "currentColor" }: Props) {
  const shouldReduceMotion = useReducedMotion();

  const gridBackground = `radial-gradient(${dotColor} 1px, transparent 1px)`;
  const backgroundSize = "24px 24px";

  if (shouldReduceMotion) {
    return (
      <div
        className={cn("w-full h-full opacity-10", className)}
        style={{ backgroundImage: gridBackground, backgroundSize }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.1 }}
      transition={{ duration: 1.5 }}
      className={cn("w-full h-full", className)}
      style={{ backgroundImage: gridBackground, backgroundSize }}
    />
  );
}
