"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").HTMLMotionProps<"div">> & { className?: string };

interface FloatingBlobsProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  color?: string;
  size?: number;
  blur?: number;
  delay?: number;
}

export function FloatingBlobs({
  className,
  color = "var(--primary)",
  size = 300,
  blur = 100,
  delay = 0,
  ...props
}: FloatingBlobsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("absolute rounded-full pointer-events-none opacity-20", className)}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
      }}
      animate={
        shouldReduceMotion
          ? {}
          : {
              x: [0, 50, -20, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.1, 0.9, 1],
            }
      }
      transition={
        shouldReduceMotion
          ? {}
          : {
              duration: 15,
              repeat: Infinity,
              ease: "linear" as const,
              delay,
            }
      }
      {...props}
    />
  );
}
