"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

/**
 * LogoMarquee
 * An infinitely scrolling row of text/logos. Great for social proof ("5.0 Stars", "Patiala's Best", etc).
 * Automatically stops scrolling when reduced-motion is preferred.
 */
export function LogoMarquee({ items, speed = "normal", className }: LogoMarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_60s_linear_infinite]",
    normal: "animate-[marquee_40s_linear_infinite]",
    fast: "animate-[marquee_20s_linear_infinite]",
  }[speed];

  return (
    <div className={cn("relative flex w-full overflow-hidden bg-secondary/30 py-4", className)}>
      <div
        className={cn(
          "flex w-max shrink-0 whitespace-nowrap motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8",
          speedClass
        )}
      >
        {/* Repeat array twice for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground/80 dark:text-muted-foreground/60"
            aria-hidden={index >= items.length ? "true" : "false"}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Tailwind config for this animation needs to be in globals.css, but we will rely on standard classes or inline styles if tw-animate doesn't have it.
          Let's use an inline style workaround for the keyframes to ensure it works without touching tailwind config directly for custom keyframes. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
