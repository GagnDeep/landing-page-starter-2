"use client";

import { cn } from "@/lib/utils";

export function DotMatrixGrid({ className }: { className?: string }) {
  // Using standard CSS background pattern for performance over hundreds of SVG elements.
  // The animation is achieved via a slow background-position shift.
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none -z-20 overflow-hidden",
        "bg-[radial-gradient(var(--color-border)_1px,transparent_1px)]",
        "bg-[length:24px_24px]", // Controls the spacing of the dots
        // Add a subtle fade out to the edges
        "[mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]",
        className
      )}
      style={{
        // We use a CSS class for animation to easily support prefers-reduced-motion via Tailwind or custom CSS
        animation: "slide-bg 60s linear infinite",
      }}
    >
      <style suppressHydrationWarning>{`
        @keyframes slide-bg {
          0% { background-position: 0 0; }
          100% { background-position: -24px -24px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .absolute {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
