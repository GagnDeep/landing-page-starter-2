"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  amount?: number | "some" | "all";
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className = "",
  amount = "some",
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 30 };
      case "down": return { y: -30 };
      case "left": return { x: 30 };
      case "right": return { x: -30 };
      default: return { y: 30 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...(shouldReduceMotion ? {} : getDirectionOffset())
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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
