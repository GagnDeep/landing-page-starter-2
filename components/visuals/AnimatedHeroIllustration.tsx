import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export const AnimatedHeroIllustration: React.FC<AnimatedHeroIllustrationProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full aspect-square max-w-lg mx-auto", className)} aria-hidden="true">
      {/* Abstract arch/floral representation using SVG */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-primary"
      >
        {/* Background Arch */}
        <path
          d="M50 400 L50 200 C50 100 150 50 200 50 C250 50 350 100 350 200 L350 400"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.2"
          className="motion-safe:animate-pulse"
        />

        {/* Floating Ring 1 */}
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.5"
          className="motion-safe:animate-[spin_20s_linear_infinite] origin-center"
          strokeDasharray="4 4"
        />

        {/* Floating Ring 2 */}
        <circle
          cx="200"
          cy="200"
          r="90"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          className="motion-safe:animate-[spin_15s_linear_infinite_reverse] origin-center"
          strokeDasharray="10 5"
        />

        {/* Center Accent (Abstract Lotus/Knot) */}
        <path
          d="M200 160 C220 160 230 180 230 200 C230 220 220 240 200 240 C180 240 170 220 170 200 C170 180 180 160 200 160 Z"
          fill="currentColor"
          fillOpacity="0.1"
          stroke="currentColor"
          strokeWidth="2"
          className="motion-safe:animate-[bounce_4s_ease-in-out_infinite]"
        />

        {/* Decorative dots */}
        <circle cx="200" cy="80" r="3" fill="currentColor" />
        <circle cx="80" cy="200" r="3" fill="currentColor" />
        <circle cx="320" cy="200" r="3" fill="currentColor" />
      </svg>

      {/* Soft glow behind the illustration */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10 rounded-full" />
    </div>
  );
};
