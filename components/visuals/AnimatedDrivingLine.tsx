"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedDrivingLineProps {
  className?: string;
}

export const AnimatedDrivingLine = ({ className = "" }: AnimatedDrivingLineProps) => {
  const prefersReducedMotion = useReducedMotion();

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
          ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 hidden md:block ${className}`}>
      <svg
        className="w-full h-full text-accent/30"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 100,0 C 100,300 900,300 900,600 C 900,900 100,900 100,1000"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="8 8"
          strokeLinecap="round"
          variants={prefersReducedMotion ? {} : pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        />
        <motion.circle
          cx="100"
          cy="0"
          r="8"
          fill="currentColor"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </svg>
    </div>
  );
};
