"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | "some" | "all";
  initialScale?: number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  amount = "some",
  initialScale = 0.9,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: {
        opacity: 0,
        scale: shouldReduceMotion ? 1 : initialScale
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const // ease-out-expo
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
