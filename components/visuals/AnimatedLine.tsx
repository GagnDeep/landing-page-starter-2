"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLineProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  delay?: number;
  duration?: number;
}

export function AnimatedLine({
  orientation = "horizontal",
  delay = 0,
  duration = 0.8,
  className,
  ...props
}: AnimatedLineProps) {
  const prefersReducedMotion = useReducedMotion();

  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "bg-border overflow-hidden origin-left",
        isHorizontal ? "h-px w-full" : "w-px h-full origin-top",
        className
      )}
      {...props}
    >
      <motion.div
        className="w-full h-full bg-foreground/20 dark:bg-foreground/40"
        initial={
          isHorizontal
            ? { scaleX: prefersReducedMotion ? 1 : 0 }
            : { scaleY: prefersReducedMotion ? 1 : 0 }
        }
        whileInView={isHorizontal ? { scaleX: 1 } : { scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: isHorizontal ? 0 : 0.5, originY: isHorizontal ? 0.5 : 0 }}
      />
    </div>
  );
}
