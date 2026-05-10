"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCakeIllustrationProps {
  className?: string;
}

/**
 * AnimatedCakeIllustration
 * A stylized SVG representing a premium 6-pound cake.
 * The steam/sparkles gently animate.
 */
export function AnimatedCakeIllustration({ className }: AnimatedCakeIllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full max-w-xs mx-auto", className)}
      aria-label="Illustration of a premium custom cake"
      role="img"
    >
      {/* Plate */}
      <ellipse cx="100" cy="160" rx="70" ry="15" fill="var(--color-secondary)" />

      {/* Bottom Tier */}
      <rect x="45" y="110" width="110" height="50" rx="4" fill="var(--color-primary)" opacity="0.9" />
      <path d="M45 110 Q 100 130 155 110" stroke="var(--color-background)" strokeWidth="3" fill="none" />
      <path d="M45 135 Q 100 155 155 135" stroke="var(--color-background)" strokeWidth="3" fill="none" />

      {/* Top Tier */}
      <rect x="65" y="70" width="70" height="40" rx="4" fill="var(--color-primary)" opacity="0.7" />
      <path d="M65 70 Q 100 85 135 70" stroke="var(--color-background)" strokeWidth="3" fill="none" />

      {/* Frosting drips */}
      <path d="M65 70 C 65 80 70 85 75 70 C 80 85 85 90 90 70 C 95 80 100 85 105 70 C 110 85 115 80 120 70 C 125 90 130 85 135 70" fill="var(--color-accent)" />

      {/* Animated Sparkles / Steam */}
      <g className="motion-reduce:animate-none animate-pulse origin-center">
        <circle cx="100" cy="30" r="4" fill="var(--color-accent)" />
        <path d="M100 20 L100 10 M100 40 L100 50 M90 30 L80 30 M110 30 L120 30" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </g>

      <g className="motion-reduce:animate-none animate-pulse origin-center delay-150" style={{ animationDelay: '0.5s' }}>
        <circle cx="70" cy="45" r="3" fill="var(--color-accent)" />
      </g>

      <g className="motion-reduce:animate-none animate-pulse origin-center delay-300" style={{ animationDelay: '1s' }}>
        <circle cx="130" cy="40" r="2.5" fill="var(--color-accent)" />
      </g>
    </svg>
  );
}
