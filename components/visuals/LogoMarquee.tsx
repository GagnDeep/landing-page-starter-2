"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  items: string[];
  speed?: number;
}

export function LogoMarquee({ items, speed = 40, className, ...props }: Props) {
  const shouldReduceMotion = useReducedMotion();
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "flex overflow-hidden w-full bg-muted/30 py-6 border-y border-border/50",
        className
      )}
      {...props}
    >
      <motion.div
        className="flex w-max items-center gap-16 pr-16"
        animate={
          shouldReduceMotion
            ? { x: 0 }
            : { x: ["0%", "-33.33%"] }
        }
        transition={{
          duration: speed,
          ease: "linear" as const,
          repeat: Infinity,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <span
            key={idx}
            className="text-lg font-heading text-muted-foreground font-semibold whitespace-nowrap opacity-70 transition-opacity hover:opacity-100"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
