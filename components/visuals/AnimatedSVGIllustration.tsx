"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedSVGIllustrationProps {
  className?: string;
}

export function AnimatedSVGIllustration({ className }: AnimatedSVGIllustrationProps) {
  return (
    <svg
      className={cn("w-full h-full stroke-primary motion-safe:animate-[pulse_4s_ease-in-out_infinite] motion-reduce:animate-none", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" strokeWidth="0.5" className="opacity-20" />
      <path d="M20 50 Q 50 20 80 50 T 20 50" strokeWidth="1" fill="transparent" className="opacity-60" />
      <path d="M20 50 Q 50 80 80 50 T 20 50" strokeWidth="1" fill="transparent" className="opacity-60" />
      <circle cx="50" cy="50" r="4" fill="currentColor" className="text-accent" />
    </svg>
  );
}
