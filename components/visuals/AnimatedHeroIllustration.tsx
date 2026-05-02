"use client";

import { cn } from "@/lib/utils";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  // A minimalist SVG abstraction of flowing hair/organic beauty lines
  return (
    <div className={cn("relative w-full aspect-square max-w-md mx-auto", className)}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <path
          className="hero-line hero-line-1 stroke-primary"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M20,100 Q60,20 100,100 T180,100"
        />
        <path
          className="hero-line hero-line-2 stroke-accent"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          d="M30,120 Q80,50 120,120 T190,120"
        />
        <path
          className="hero-line hero-line-3 stroke-foreground/50"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          d="M10,80 Q50,-10 90,80 T170,80"
        />
      </svg>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
        }
        .hero-line-1 { animation: drawLine 3s ease-in-out forwards 0.2s; }
        .hero-line-2 { animation: drawLine 3.5s ease-in-out forwards 0.5s; }
        .hero-line-3 { animation: drawLine 4s ease-in-out forwards 0.8s; }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        @media (prefers-reduced-motion) {
          .hero-line { stroke-dashoffset: 0; animation: none; }
        }
      `}} />
    </div>
  );
}
