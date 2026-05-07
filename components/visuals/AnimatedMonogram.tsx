import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedMonogramProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function AnimatedMonogram({ size = 48, className, ...props }: AnimatedMonogramProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary stroke-current", className)}
      {...props}
    >
      <path
        d="M20 80 L50 20 L80 80 M35 50 L65 50"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw-path"
      />
      <circle cx="50" cy="50" r="45" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow opacity-50" />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes draw-path {
          from { stroke-dasharray: 200; stroke-dashoffset: 200; }
          to { stroke-dasharray: 200; stroke-dashoffset: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); transform-origin: 50% 50%; }
          to { transform: rotate(360deg); transform-origin: 50% 50%; }
        }
        .animate-draw-path {
          animation: draw-path 2s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-draw-path, .animate-spin-slow {
            animation: none !important;
            stroke-dashoffset: 0 !important;
          }
        }
      `}} />
    </svg>
  );
}
