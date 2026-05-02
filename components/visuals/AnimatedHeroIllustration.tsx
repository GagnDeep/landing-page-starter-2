import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedHeroIllustrationProps {
  className?: string;
}

export function AnimatedHeroIllustration({ className }: AnimatedHeroIllustrationProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)} aria-hidden="true">
      {/* Background glow */}
      <div className="absolute inset-0 scale-150 rounded-full bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_60%)] opacity-20 blur-2xl animate-pulse [animation-duration:4s] motion-reduce:animate-none" />

      <svg
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 text-primary motion-safe:animate-bounce [animation-duration:6s]"
      >
        <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" className="stroke-primary" />
        <path d="M12 3v18" strokeDasharray="2 2" className="stroke-secondary" />
        <path d="M9 7h6" className="stroke-accent" />
        <path d="M9 11h6" className="stroke-accent" />
        <circle cx="12" cy="7" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}
