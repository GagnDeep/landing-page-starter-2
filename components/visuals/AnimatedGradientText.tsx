"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationDuration?: number;
}

export function AnimatedGradientText({
  children,
  className,
  colors = ["#f87171", "#fb923c", "#facc15", "#f87171"], // Default to warm, celebratory colors
  animationDuration = 8,
}: AnimatedGradientTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const backgroundGradient = `linear-gradient(to right, ${colors.join(", ")})`;

  return (
    <motion.span
      className={cn(
        "bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundImage: backgroundGradient,
        backgroundSize: "300% 100%",
      }}
      animate={
        shouldReduceMotion
          ? {}
          : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
      }
      transition={{
        duration: animationDuration,
        ease: "linear" as const,
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
}
