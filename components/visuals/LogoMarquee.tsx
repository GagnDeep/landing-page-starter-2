import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items: string[];
  speed?: "slow" | "fast";
}

export function LogoMarquee({ className, items, speed = "slow" }: LogoMarqueeProps) {
  const speedClass = speed === "slow" ? "[animation-duration:40s]" : "[animation-duration:20s]";

  return (
    <div className={cn("flex w-full overflow-hidden bg-background py-6", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee space-x-12 motion-reduce:animate-none",
          speedClass
        )}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center whitespace-nowrap text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
