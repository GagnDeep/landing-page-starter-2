"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoverScaleCardProps {
  children: ReactNode;
  className?: string;
  scaleAmount?: number;
}

export const HoverScaleCard = ({ children, className, scaleAmount = 1.03 }: HoverScaleCardProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { scale: scaleAmount }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("overflow-hidden block", className)}
    >
      {children}
    </motion.div>
  );
};
