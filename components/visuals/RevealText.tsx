"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ElementType } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  el?: ElementType;
  delay?: number;
  duration?: number;
  type?: "words" | "characters";
}

export function RevealText({
  text,
  className,
  el: Wrapper = "span",
  delay = 0,
  duration = 0.5,
  type = "words",
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: type === "words" ? 0.05 : 0.02, delayChildren: delay },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.01 : duration, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const elements = type === "words" ? text.split(" ") : text.split("");

  return (
    <Wrapper className={cn("inline-block", className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        variants={containerVariants}
        className="inline-block"
      >
        {elements.map((item, index) => (
          <span key={`${item}-${index}`} className="inline-block overflow-hidden">
            <motion.span variants={itemVariants} className="inline-block">
              {item === " " ? "\u00A0" : item}
            </motion.span>
            {type === "words" && index < elements.length - 1 && "\u00A0"}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
