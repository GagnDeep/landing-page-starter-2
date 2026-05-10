"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number;
  pauseOnHover?: boolean;
}

export function LogoMarquee({
  className,
  speed = 30,
  pauseOnHover = true,
  children,
  ...props
}: LogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  const marqueeVariants = {
    animate: {
      x: [0, -1000], // Adjust based on content width if needed, or use % for relative
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: speed,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div
      className={cn("w-full overflow-hidden flex", className)}
      {...props}
    >
      <motion.div
        className="flex min-w-full items-center gap-12 px-6"
        variants={prefersReducedMotion ? undefined : marqueeVariants}
        animate="animate"
        whileHover={pauseOnHover && !prefersReducedMotion ? { animationPlayState: "paused" } : {}}
      >
        {children}
        {/* Duplicate children for seamless looping */}
        {children}
      </motion.div>
    </div>
  );
}
