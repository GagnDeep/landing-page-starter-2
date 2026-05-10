"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").SVGMotionProps<SVGSVGElement>> & { className?: string };

interface AnimatedFloralSVGProps extends OmitFramerProps<React.SVGProps<SVGSVGElement>> {
  duration?: number;
}

export function AnimatedFloralSVG({
  className,
  duration = 4,
  ...props
}: AnimatedFloralSVGProps) {
  const shouldReduceMotion = useReducedMotion();

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn("w-16 h-16 stroke-primary", className)}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      aria-hidden="true"
      {...props}
    >
      {/* A simple elegant abstract floral motif */}
      <motion.path
        variants={pathVariants}
        d="M50 80 C 30 70, 20 40, 50 10 C 80 40, 70 70, 50 80 Z"
      />
      <motion.path
        variants={pathVariants}
        d="M50 80 C 10 60, 20 20, 50 40 C 80 20, 90 60, 50 80 Z"
      />
      <motion.circle variants={pathVariants} cx="50" cy="50" r="5" />
    </motion.svg>
  );
}
