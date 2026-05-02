"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  className?: string;
  items?: string[];
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
}

export function LogoMarquee({
  className,
  items = ["BESPOKE", "CHANDIGARH", "CRAFT", "ELEGANCE", "ATELIER", "HERITAGE"],
  speed = "normal",
  direction = "left"
}: LogoMarqueeProps) {
  const durationClass =
    speed === "slow" ? "duration-[60s]" :
    speed === "normal" ? "duration-[40s]" :
    "duration-[20s]";

  const directionClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex py-8 bg-muted/30 border-y border-border", className)}>
      <div className={cn("flex w-max motion-safe:animate-marquee motion-reduce:animate-none", durationClass, directionClass)}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-16 px-8 items-center" aria-hidden={i !== 0}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-xl md:text-2xl font-heading text-foreground/60 tracking-widest uppercase">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-accent/40" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
