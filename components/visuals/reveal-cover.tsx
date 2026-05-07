"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<"div">>;

type RevealCoverProps = OmitFramerProps<React.ComponentProps<"div">> & {
  children: React.ReactNode;
  className?: string;
  coverColor?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
};

export function RevealCover({
  children,
  className,
  coverColor = "bg-primary", // Uses our Ruby Velvet token by default
  duration = 0.8,
  delay = 0,
  once = true,
  ...props
}: RevealCoverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.1, delay }} // Just to ensure content is hidden briefly
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* The Cover Block */}
      <motion.div
        className={cn("absolute inset-0 z-10", coverColor)}
        initial={{ originX: 0, scaleX: 1 }}
        animate={isInView ? { scaleX: 0, originX: 1 } : { scaleX: 1, originX: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
    </div>
  );
}
