"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  progress?: number;
  label?: string;
  delay?: number;
}

export function ClinicalProgressChart({
  progress = 85,
  label = "Recovery Metric",
  delay = 0,
  className,
  ...props
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("flex flex-col gap-2 w-full", className)} {...props}>
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground font-mono">{progress}%</span>
      </div>
      <div className="h-3 w-full bg-muted rounded-full overflow-hidden border border-border/50">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.33, 1, 0.68, 1], // Soft ease out
          }}
          className="h-full bg-primary rounded-full relative"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}
