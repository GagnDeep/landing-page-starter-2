"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradientBackground({ className, children, ...props }: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, var(--primary), transparent 60%)",
          filter: "blur(60px)",
          animation: "pulse-slow 8s ease-in-out infinite alternate"
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-slow {
          0% { transform: scale(1); opacity: 0.15; }
          100% { transform: scale(1.2); opacity: 0.25; }
        }
      `}} />
    </div>
  );
}
