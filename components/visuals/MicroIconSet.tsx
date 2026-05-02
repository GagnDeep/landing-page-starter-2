"use client";

import { cn } from "@/lib/utils";

interface MicroIconSetProps {
  icon: "sparkle" | "leaf" | "scissors" | "drop";
  className?: string;
  animated?: boolean;
}

export function MicroIconSet({ icon, className, animated = true }: MicroIconSetProps) {
  const baseClasses = cn(
    "w-6 h-6 stroke-primary fill-none stroke-[1.5] stroke-linecap-round stroke-linejoin-round",
    className
  );

  const icons = {
    sparkle: (
      <svg viewBox="0 0 24 24" className={cn(baseClasses, animated && "animate-spin-slow")}>
        <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 24 24" className={cn(baseClasses, animated && "animate-sway")}>
        <path d="M12 22C12 22 4 16 4 10C4 6 7 3 11 3C15 3 18 6 18 10C18 16 12 22 12 22Z" />
        <path d="M12 22V12" />
      </svg>
    ),
    scissors: (
      <svg viewBox="0 0 24 24" className={cn(baseClasses)}>
        <circle cx="6" cy="6" r="3" className={cn(animated && "animate-pulse-slow")} />
        <circle cx="6" cy="18" r="3" className={cn(animated && "animate-pulse-slow")} />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    drop: (
      <svg viewBox="0 0 24 24" className={cn(baseClasses, animated && "animate-bounce-slow")}>
        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 12 2 12 2C12 2 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" />
      </svg>
    ),
  };

  return (
    <>
      {icons[icon]}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes sway { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        @keyframes pulseSlow { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

        .animate-spin-slow { animation: spinSlow 8s linear infinite; }
        .animate-sway { animation: sway 4s ease-in-out infinite; transform-origin: bottom center; }
        .animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 3s ease-in-out infinite; }

        @media (prefers-reduced-motion) {
          .animate-spin-slow, .animate-sway, .animate-pulse-slow, .animate-bounce-slow {
            animation: none !important;
          }
        }
      `}} />
    </>
  );
}
