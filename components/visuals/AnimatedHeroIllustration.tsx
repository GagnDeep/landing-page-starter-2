"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeroIllustrationProps {
  className?: string;
  delay?: number;
}

export function AnimatedHeroIllustration({ className, delay = 0 }: AnimatedHeroIllustrationProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setIsMounted(true));
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);

  if (!isMounted) return <div className={cn("w-full h-full min-h-[300px]", className)} />;

  const pathClass = prefersReducedMotion
    ? "stroke-primary/40"
    : "stroke-primary/40 animate-dash [stroke-dasharray:1000] [stroke-dashoffset:1000]";

  return (
    <div className={cn("relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden", className)}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-lg"
      >
        <style>
          {`
            @keyframes drawLine {
              to { stroke-dashoffset: 0; }
            }
            .animate-dash {
              animation: drawLine 3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}
        </style>

        {/* Abstract elegant curves representing tailoring and fabric drape */}
        <g className={prefersReducedMotion ? "" : "animate-float"} style={{ animationDelay: `${delay}ms` }}>
          <path
            d="M50 250 C 100 150, 150 50, 250 50 C 350 50, 300 200, 350 250"
            strokeWidth="2"
            strokeLinecap="round"
            className={pathClass}
            style={{ animationDelay: `${delay + 200}ms` }}
          />
          <path
            d="M80 250 C 130 180, 180 80, 250 80 C 320 80, 280 220, 320 250"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={pathClass}
            style={{ animationDelay: `${delay + 600}ms` }}
          />
          <path
            d="M120 220 C 160 160, 210 110, 250 110 C 290 110, 260 200, 290 220"
            strokeWidth="1"
            strokeLinecap="round"
            className={pathClass}
            style={{ animationDelay: `${delay + 1000}ms` }}
          />

          {/* Subtle accent circles / "pearls" */}
          <circle cx="250" cy="50" r="3" fill="currentColor" className="text-accent/60 animate-pulse" />
          <circle cx="250" cy="80" r="2" fill="currentColor" className="text-accent/60 animate-pulse" style={{ animationDelay: "1s" }} />
          <circle cx="250" cy="110" r="1.5" fill="currentColor" className="text-accent/60 animate-pulse" style={{ animationDelay: "2s" }} />
        </g>
      </svg>
    </div>
  );
}
