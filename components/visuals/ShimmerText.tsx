import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function ShimmerText({ children, className, ...props }: ShimmerTextProps) {
  return (
    <span
      className={cn(
        "inline-flex animate-shimmer bg-[linear-gradient(110deg,var(--foreground),45%,var(--primary),55%,var(--foreground))] bg-[length:200%_100%] bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 4s infinite linear;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-shimmer {
            animation: none;
            background: none;
            color: var(--foreground);
          }
        }
      `}} />
    </span>
  );
}
