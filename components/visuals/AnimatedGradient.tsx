"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  duration?: number;
}

export function AnimatedGradient({
  className,
  colors = ["var(--primary)", "var(--secondary)", "var(--accent)"],
  duration = 10,
  ...props
}: AnimatedGradientProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20 blur-[100px]"
        animate={
          prefersReducedMotion
            ? { background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]})` }
            : {
                background: [
                  `linear-gradient(0deg, ${colors[0]}, ${colors[1]})`,
                  `linear-gradient(120deg, ${colors[1]}, ${colors[2]})`,
                  `linear-gradient(240deg, ${colors[2]}, ${colors[0]})`,
                  `linear-gradient(360deg, ${colors[0]}, ${colors[1]})`,
                ],
              }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 w-full h-full">{props.children}</div>
    </div>
  );
}
