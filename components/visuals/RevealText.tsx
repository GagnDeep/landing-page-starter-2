"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ValidTags = "div" | "span" | "section" | "header" | "main";

interface RevealTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: ValidTags;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function RevealText({
  as = "div",
  children,
  delay = 0,
  duration = 0.8,
  className,
  ...props
}: RevealTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as] as React.ElementType;

  const variants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // "Deliberate and graceful" easing
      } as const
    }
  };

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
