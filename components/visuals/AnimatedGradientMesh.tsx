"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  speed?: number;
}

export function AnimatedGradientMesh({
  className,
  colors = ["var(--primary)", "var(--secondary)", "var(--muted)"],
  speed = 15,
  ...props
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn("relative overflow-hidden w-full h-full bg-background", className)}
      {...props}
    >
      <div className="absolute inset-0 opacity-40 blur-[100px] mix-blend-normal">
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.5 }
              : {
                  x: [0, 100, 0, -100, 0],
                  y: [0, 50, 100, 50, 0],
                  scale: [1, 1.2, 1, 1.1, 1],
                }
          }
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear" as const,
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ backgroundColor: colors[0] }}
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: 0.5 }
              : {
                  x: [0, -100, 0, 100, 0],
                  y: [0, -50, -100, -50, 0],
                  scale: [1, 1.1, 1, 1.2, 1],
                }
          }
          transition={{
            duration: speed * 1.2,
            repeat: Infinity,
            ease: "linear" as const,
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ backgroundColor: colors[1] }}
        />
      </div>
    </div>
  );
}
