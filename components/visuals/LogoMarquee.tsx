"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logos: React.ReactNode[];
  speed?: 'slow' | 'fast';
}

export const LogoMarquee: React.FC<Props> = ({ logos, speed = 'slow', className, ...props }) => {
  const speedClass = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee-fast';

  return (
    <div className={cn("flex w-full overflow-hidden bg-background py-8 border-y border-border", className)} {...props}>
      <div className={cn("flex w-max space-x-16 px-8 motion-reduce:animate-none", speedClass)}>
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
};
