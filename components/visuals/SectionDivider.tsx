"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  width?: string;
}

export function SectionDivider({ className, width = "100px" }: Props) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("mx-auto h-[1px] bg-border", className)} style={{ width }} />
    );
  }

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className={cn("mx-auto h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent", className)}
    />
  );
}
