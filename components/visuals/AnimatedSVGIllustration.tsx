"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSVGIllustrationProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  strokeWidth?: number;
}

export function AnimatedSVGIllustration({
  className,
  color = "var(--primary)",
  strokeWidth = 2,
  ...props
}: AnimatedSVGIllustrationProps) {
  const prefersReducedMotion = useReducedMotion();

  // A stylized abstract culinary motif (e.g. a stylized pot with steam or spice leaf)
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring" as const, duration: 2, bounce: 0 },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <div className={cn("flex justify-center items-center", className)} {...props}>
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.path
          d="M20 60 C 20 80, 80 80, 80 60 L 80 40 C 80 20, 20 20, 20 40 Z"
          stroke={color}
          strokeWidth={strokeWidth}
          variants={drawVariants}
        />
        <motion.path
          d="M40 20 Q 50 10 60 20 T 40 0"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          variants={drawVariants}
        />
         <motion.path
          d="M60 20 Q 70 10 80 20 T 60 0"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          variants={drawVariants}
        />
      </motion.svg>
    </div>
  );
}
