"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function TextReveal({
  text,
  delay = 0,
  as: Component = "h2",
  className,
  ...props
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20,
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden flex flex-wrap gap-x-2 gap-y-1", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props as any}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
