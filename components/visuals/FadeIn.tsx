"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ValidTags = "div" | "span" | "section" | "img" | "article";

interface FadeInProps extends React.HTMLAttributes<HTMLElement> {
  as?: ValidTags;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  as = "div",
  children,
  delay = 0,
  duration = 0.8,
  className,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as] as React.ElementType;

  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.1 : duration,
        delay,
        ease: "easeInOut"
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
