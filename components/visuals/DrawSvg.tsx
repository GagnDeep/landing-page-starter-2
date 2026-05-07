"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface DrawSvgProps extends Omit<ComponentPropsWithoutRef<typeof motion.svg>, "onDrag" | "onAnimationStart"> {
  className?: string;
  delay?: number;
  duration?: number;
}

export const DrawSvg = ({ children, className, delay = 0, duration = 1.5, ...props }: DrawSvgProps) => {
  const shouldReduceMotion = useReducedMotion();

  const svgVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
        when: "beforeChildren",
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.3 : duration,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      variants={svgVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn(className)}
      {...props}
    >
      {/* We assume children are <motion.path> elements using the pathVariants */}
      {children}
    </motion.svg>
  );
};
