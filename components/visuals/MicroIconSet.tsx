"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

type IconProps = {
  className?: string;
};

// Reusable hook for common stroke animation
function useStrokeAnimation() {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion
    ? { pathLength: 1, opacity: 1 }
    : {
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: { duration: 1.5, ease: "easeOut" as const },
      };
}

export function SteeringWheelIcon({ className }: IconProps) {
  const animation = useStrokeAnimation();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <motion.circle cx="12" cy="12" r="10" animate={animation} />
      <motion.path d="M12 12L12 22" animate={animation} />
      <motion.path d="M12 12L2.5 7" animate={animation} />
      <motion.path d="M12 12L21.5 7" animate={animation} />
      <motion.circle cx="12" cy="12" r="3" animate={animation} />
    </svg>
  );
}

export function Clock24Icon({ className }: IconProps) {
  const animation = useStrokeAnimation();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <motion.circle cx="12" cy="12" r="10" animate={animation} />
      <motion.path d="M12 6V12L16 14" animate={animation} />
      <motion.path d="M16 4L18 2" animate={animation} />
      <motion.path d="M8 4L6 2" animate={animation} />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  const animation = useStrokeAnimation();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <motion.path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" animate={animation} />
      <motion.path d="M9 12l2 2 4-4" animate={animation} />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  const animation = useStrokeAnimation();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <motion.path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" animate={animation} />
      <motion.circle cx="12" cy="10" r="3" animate={animation} />
    </svg>
  );
}

// Exported collection for easy iteration if needed
export const MicroIcons = {
  SteeringWheel: SteeringWheelIcon,
  Clock24: Clock24Icon,
  ShieldCheck: ShieldCheckIcon,
  MapPin: MapPinIcon,
};

export function HeartPulseIcon({ className }: IconProps) {
  const animation = useStrokeAnimation();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <motion.path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" animate={animation} />
      <motion.path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" animate={animation} />
    </svg>
  );
}

export function GraduationCapIcon({ className }: IconProps) {
  const animation = useStrokeAnimation();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <motion.path d="M21.42 10.922a2 2 0 0 1-.01 3.834L12 18.5 2.59 14.756a2 2 0 0 1-.01-3.834L12 5.5l9.42 5.422Z" animate={animation} />
      <motion.path d="M22 10v6" animate={animation} />
      <motion.path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" animate={animation} />
    </svg>
  );
}
