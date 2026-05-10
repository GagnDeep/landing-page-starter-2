"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ElegantTypingProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ElegantTyping({ text, className, delay = 0.5 }: ElegantTypingProps) {
  const [isTyping, setIsTyping] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  if (prefersReducedMotion) {
    return <span className={cn(className)}>{text}</span>;
  }

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isTyping ? "visible" : "hidden"}
      className={cn(className)}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-1.5 last:mr-0 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
