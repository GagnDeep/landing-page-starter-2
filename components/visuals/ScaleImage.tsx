"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScaleImageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleImage({ children, className, delay = 0, ...props }: ScaleImageProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: {
      scale: prefersReducedMotion ? 1 : 1.05,
      opacity: 0,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(4px)"
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      } as const
    }
  };

  return (
    <div className={cn("overflow-hidden rounded-xl", className)} {...props}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
