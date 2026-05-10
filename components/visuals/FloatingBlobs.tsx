"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  color?: string;
}

export function FloatingBlobs({
  count = 3,
  color = "var(--secondary)",
  className,
  ...props
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 dark:opacity-10 blur-3xl"
          style={{
            backgroundColor: color,
            width: `${Math.random() * 200 + 150}px`,
            height: `${Math.random() * 200 + 150}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, Math.random() * 100 - 50, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  scale: [1, Math.random() * 0.2 + 0.9, 1],
                }
          }
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      ))}
    </div>
  );
}
