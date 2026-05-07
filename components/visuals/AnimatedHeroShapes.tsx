"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedHeroShapesProps {
  className?: string;
  fill?: string;
}

export function AnimatedHeroShapes({ className = "", fill = "currentColor" }: AnimatedHeroShapesProps) {
  const shouldReduceMotion = useReducedMotion();

  const rotateAnimation = shouldReduceMotion
    ? {}
    : {
        rotate: [0, 360],
        transition: {
          duration: 40,
          ease: "linear" as const,
          repeat: Infinity,
        },
      };

  const scaleAnimation = shouldReduceMotion
    ? {}
    : {
        scale: [1, 1.1, 1],
        transition: {
          duration: 8,
          ease: "easeInOut" as const,
          repeat: Infinity,
        },
      };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full opacity-10 blur-3xl"
        animate={rotateAnimation}
      >
        <motion.path
          fill={fill}
          d="M44.7,-76.4C58.3,-69.2,70,-56.9,78.8,-42.6C87.6,-28.3,93.5,-12,91.8,3.6C90.2,19.3,80.9,34.3,70.1,46.9C59.3,59.5,47,69.7,33.1,75.9C19.2,82.1,3.7,84.4,-11.2,81.9C-26.1,79.4,-40.4,72.1,-52.8,61.9C-65.2,51.7,-75.7,38.6,-81.9,23.5C-88.1,8.4,-90,-8.7,-84.9,-23.5C-79.8,-38.3,-67.7,-50.8,-53.8,-58.3C-39.9,-65.8,-24.2,-68.3,-8.6,-71C7.1,-73.7,24.2,-76.6,44.7,-76.4Z"
          transform="translate(100 100)"
          animate={scaleAnimation}
        />
      </motion.svg>
    </div>
  );
}
