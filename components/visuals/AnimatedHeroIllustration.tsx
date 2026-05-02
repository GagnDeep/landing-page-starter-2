"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      className={cn("w-full h-full", className)}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="200" cy="200" r="180"
        stroke="var(--border)" strokeWidth="1"
        strokeDasharray="4 4"
        className={cn("origin-center motion-reduce:animate-none", mounted ? "animate-[spin_60s_linear_infinite]" : "")}
      />
      <circle
        cx="200" cy="200" r="120"
        stroke="var(--primary)" strokeWidth="2"
        className={cn("origin-center motion-reduce:animate-none opacity-50", mounted ? "animate-[spin_40s_linear_infinite_reverse]" : "")}
      />
      <path
        d="M200 60 L340 200 L200 340 L60 200 Z"
        stroke="var(--accent)" strokeWidth="1"
        fill="var(--secondary)" fillOpacity="0.1"
        className={cn("origin-center motion-reduce:animate-none", mounted ? "animate-[pulse_4s_ease-in-out_infinite]" : "")}
      />
      <circle cx="200" cy="200" r="40" fill="var(--primary)" fillOpacity="0.8" />
    </svg>
  );
}
