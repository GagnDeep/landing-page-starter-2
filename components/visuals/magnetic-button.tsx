"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type OmitFramerProps<T> = Omit<T, keyof HTMLMotionProps<"button">>;

type MagneticButtonProps = OmitFramerProps<React.ComponentProps<"button">> & {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

export function MagneticButton({
  children,
  className,
  intensity = 0.2, // How far it pulls toward the mouse
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <button className={className} {...props}>{children}</button>;
  }

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (clientX - centerX) * intensity;
      const y = (clientY - centerY) * intensity;
      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
