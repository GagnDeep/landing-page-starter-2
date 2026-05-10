'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function SteamWaves({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-10 mix-blend-screen", className)}>
      <svg
        className="w-full h-full motion-reduce:animate-none animate-steam"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
          fill="var(--color-primary)"
          style={{ opacity: 0.1 }}
        />
        <path
          d="M0,60 Q30,40 60,60 T100,60 V100 H0 Z"
          fill="var(--color-accent)"
          style={{ opacity: 0.05 }}
        />
      </svg>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes steamFloat {
          0%, 100% { transform: translateY(10%) scaleY(1.1); }
          50% { transform: translateY(-5%) scaleY(0.9); }
        }
        .animate-steam path {
          animation: steamFloat 15s ease-in-out infinite alternate;
          transform-origin: bottom center;
        }
        .animate-steam path:nth-child(2) {
          animation-duration: 20s;
          animation-delay: -5s;
        }
      `}} />
    </div>
  );
}
