"use client";

import React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<"div">>;

type HoverScaleProps = OmitFramerProps<React.ComponentProps<"div">> & {
  children: React.ReactNode;
  className?: string;
  scaleAmount?: number;
  duration?: number;
};

export function HoverScale({
  children,
  className,
  scaleAmount = 1.05,
  duration = 0.4,
  ...props
}: HoverScaleProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      whileHover={{ scale: scaleAmount }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HoverImageScale({
  children,
  className,
  scaleAmount = 1.05,
  duration = 0.6,
  ...props
}: HoverScaleProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={cn("overflow-hidden", className)} {...props}><div className="w-full h-full">{children}</div></div>;
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        whileHover={{ scale: scaleAmount }}
        transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
