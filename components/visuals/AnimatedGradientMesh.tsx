"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof import("framer-motion").HTMLMotionProps<"div">> & { className?: string };

interface AnimatedGradientMeshProps extends OmitFramerProps<React.HTMLAttributes<HTMLDivElement>> {
  duration?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export function AnimatedGradientMesh({
  className,
  duration = 20,
  primaryColor = "var(--primary)",
  secondaryColor = "var(--accent)",
  ...props
}: AnimatedGradientMeshProps) {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        animate: {
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        },
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear" as const,
        },
      };

  return (
    <motion.div
      className={cn(
        "absolute inset-0 z-0 opacity-20 pointer-events-none",
        "bg-[length:200%_200%]",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
      }}
      {...animationProps}
      {...props}
    />
  );
}
