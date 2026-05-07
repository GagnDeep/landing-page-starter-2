"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<"div">>;

type StaggerContainerProps = OmitFramerProps<React.ComponentProps<"div">> & {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
};

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className,
  once = true,
  ...props
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  const variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = OmitFramerProps<React.ComponentProps<"div">> & {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
  duration = 0.8,
  ...props
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} {...props}>{children}</div>;
  }

  const getHiddenState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getVisibleState = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const variants = {
    hidden: getHiddenState(),
    show: {
      ...getVisibleState(),
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={variants} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}
