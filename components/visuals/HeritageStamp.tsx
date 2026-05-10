'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function HeritageStamp({ className }: { className?: string }) {
  const text = "BAKED FRESH DAILY • PATIALA HERITAGE • ";

  return (
    <div className={cn("relative flex items-center justify-center w-32 h-32 opacity-80", className)}>
      <div className="absolute inset-0 motion-reduce:animate-none animate-[spin_15s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
          <defs>
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text fontSize="11" fontWeight="bold" letterSpacing="2.5" className="uppercase font-sans">
            <textPath href="#circlePath">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-primary/50 text-primary">
        <span className="text-xl font-heading">V</span>
      </div>
    </div>
  );
}
