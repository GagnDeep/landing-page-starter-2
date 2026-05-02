import React from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
  variant?: "primary" | "secondary" | "accent";
}

export function FloatingBlobs({ className, variant = "primary" }: FloatingBlobsProps) {
  const colorMap = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} aria-hidden="true">
      <div
        className={cn(
          "absolute -left-1/4 -top-1/4 h-1/2 w-1/2 rounded-full mix-blend-multiply blur-3xl opacity-30 dark:mix-blend-screen animate-pulse [animation-duration:8s] motion-reduce:animate-none",
          colorMap[variant]
        )}
      />
      <div
        className={cn(
          "absolute -right-1/4 -bottom-1/4 h-1/2 w-1/2 rounded-full mix-blend-multiply blur-3xl opacity-20 dark:mix-blend-screen animate-pulse [animation-duration:12s] motion-reduce:animate-none delay-1000",
          colorMap[variant === "primary" ? "secondary" : "primary"]
        )}
      />
    </div>
  );
}
