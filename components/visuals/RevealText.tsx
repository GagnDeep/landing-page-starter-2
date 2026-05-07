"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export const RevealText = ({ text, className, delay = 0, as: Component = "span" }: RevealTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const lines = text.split("\n");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("flex flex-col", className)}
    >
      {lines.map((line, i) => (
        <span key={i} className="overflow-hidden block">
          <motion.span
            variants={childVariants}
            className="block"
          >
            {line === "" ? "\u00A0" : line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};
