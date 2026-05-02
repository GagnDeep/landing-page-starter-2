"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function FadeInScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
}: FadeInScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  const getAxisAndSign = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return {};
    }
  };

  const initialHidden = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...getAxisAndSign() };

  return (
    <motion.div
      initial={initialHidden}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 1, 0.5, 1], // Cinematic easing from design system
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
