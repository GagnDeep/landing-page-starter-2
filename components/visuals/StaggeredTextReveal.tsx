"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface StaggeredTextRevealProps {
  text: string;
  className?: string;
  elementType?: React.ElementType;
}

export function StaggeredTextReveal({
  text,
  className,
  elementType: Component = "h2",
}: StaggeredTextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={cn("flex flex-wrap", className)}
      // Cast the custom component to div for Framer Motion, but keep semantic tag if needed,
      // however Framer Motion requires specific types. Using a div wrapper is safer.
    >
      <Component className={cn("flex flex-wrap", className)}>
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
