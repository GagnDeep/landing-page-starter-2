"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FadeUpStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerDelay?: number;
}

export function FadeUpStagger({ children, staggerDelay = 100, className, ...props }: FadeUpStaggerProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cn("group", className)} {...props}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className="opacity-0 translate-y-4 animate-fade-in-up"
          style={{
            animationDelay: `${index * staggerDelay}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {child}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation-name: fade-in-up;
          animation-duration: 700ms;
          animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}} />
    </div>
  );
}
