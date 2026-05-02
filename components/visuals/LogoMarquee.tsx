"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LogoMarqueeProps {
  items: string[];
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

export function LogoMarquee({ items, className, speed = 'slow' }: LogoMarqueeProps) {
  const speedClass = {
    slow: 'animate-[marquee_40s_linear_infinite]',
    normal: 'animate-[marquee_20s_linear_infinite]',
    fast: 'animate-[marquee_10s_linear_infinite]',
  }[speed];

  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap bg-background border-y border-border/50 py-4", className)}>
      <div className={cn("flex space-x-16 items-center motion-reduce:animate-none", speedClass)}>
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-muted-foreground uppercase tracking-widest text-sm font-sans"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
