"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onAnimationStart" | "onDragStart" | "onDragEnd"> {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export const MagneticButton = ({ children, strength = 20, className, ...props }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (shouldReduceMotion || !buttonRef.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * strength;
    const y = ((clientY - top) / height - 0.5) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};
