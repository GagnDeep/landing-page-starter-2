"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LineDrawingIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
  // Allows passing a standard lucide icon or any SVG path
  pathData: string;
}

export function LineDrawingIcon({
  className,
  size = 24,
  strokeWidth = 1.5,
  pathData,
}: LineDrawingIconProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("text-primary inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d={pathData}
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            opacity: { duration: 0.2 },
          }}
        />
      </svg>
    </div>
  );
}
