"use client";

import React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<"div">>;

type GradientMeshProps = OmitFramerProps<React.ComponentProps<"div">> & {
  className?: string;
  colors?: [string, string, string]; // Default to our tokens
};

export function GradientMesh({
  className,
  colors = ["var(--primary)", "var(--secondary)", "var(--accent)"],
  ...props
}: GradientMeshProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("relative overflow-hidden w-full h-full opacity-60", className)} {...props}>
        <div style={{ backgroundColor: colors[0] }} className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
        <div style={{ backgroundColor: colors[1] }} className="absolute top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
      </div>
    );
  }

  // We use CSS variables to allow the gradient to adapt to light/dark mode
  return (
    <div className={cn("relative overflow-hidden w-full h-full opacity-60", className)} {...props}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{ backgroundColor: colors[0] }}
        className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{ backgroundColor: colors[1] }}
        className="absolute top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{ backgroundColor: colors[2] }}
        className="absolute -bottom-1/4 left-1/4 w-3/4 h-3/4 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"
      />
    </div>
  );
}
