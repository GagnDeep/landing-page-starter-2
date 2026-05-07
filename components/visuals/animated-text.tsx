"use client";

import React, { useRef, useMemo } from "react";
import { motion, useInView, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"> & {
  text: string;
  as?: React.ElementType;
  className?: string;
  once?: boolean;
  staggerDelay?: number;
  wordMode?: boolean;
};

export function AnimatedText({
  text,
  as: Component = "p",
  className,
  once = true,
  staggerDelay = 0.05,
  wordMode = true,
  ...props
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  // Memoize the dynamic motion component to prevent remounting on every render
  const MotionComponent = useMemo(() => motion(Component as React.ElementType) as React.ElementType, [Component]);

  // Split by words or characters
  const segments = wordMode ? text.split(" ") : Array.from(text);

  if (shouldReduceMotion) {
    return (
      <Component className={cn("flex flex-wrap", className)} {...props}>
        {text}
      </Component>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // Expo out
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <MotionComponent
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("flex flex-wrap", className)}
      {...props}
    >
      {segments.map((segment, index) => (
        <motion.span
          variants={childVariants}
          key={index}
          className="inline-block whitespace-pre"
        >
          {segment}
          {wordMode && index < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
