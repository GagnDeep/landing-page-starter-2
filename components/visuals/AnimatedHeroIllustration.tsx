"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const AnimatedHeroIllustration = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("w-full h-full max-w-md opacity-80", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 20 100 Q 60 20 100 100 T 180 100"
        className="animate-draw-line motion-reduce:animate-none motion-reduce:stroke-dashoffset-0"
        style={{ strokeDasharray: '400', strokeDashoffset: '400' }}
      />
      <circle cx="100" cy="100" r="4" fill="var(--accent)" className="animate-pulse [animation-delay:0.5s]" />
      <circle cx="20" cy="100" r="3" fill="var(--foreground)" />
      <circle cx="180" cy="100" r="3" fill="var(--foreground)" />
    </svg>
  );
};
