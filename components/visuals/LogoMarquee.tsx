"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface LogoMarqueeProps {
  className?: string;
  items: string[];
  speed?: "slow" | "fast";
}

/**
 * LogoMarquee
 * An infinitely scrolling marquee intended for the "Awards & Recognition" or "Partner Venues" section.
 * Renders elegant typography (or ideally SVG logos) in a seamless loop.
 * Respects prefers-reduced-motion by halting the animation.
 */
export function LogoMarquee({ className, items, speed = "slow" }: LogoMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const speedClass = speed === "slow" ? "duration-[60s]" : "duration-[30s]";

  // Only animate if mounted (SSR safe) and motion is not reduced
  const isAnimated = mounted && !shouldReduceMotion;

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden border-y border-border/40 bg-background/50 py-8 backdrop-blur-sm",
        className
      )}
      aria-label="Partner Logos"
    >
      <div
        className={cn(
          "flex w-max min-w-full shrink-0 items-center gap-16 px-8",
          isAnimated ? `animate-marquee ${speedClass} linear infinite` : ""
        )}
        style={{
          animationName: isAnimated ? "marquee" : "none",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {items.map((item, index) => (
          <span
            key={`marquee-item-${index}`}
            className="font-heading text-2xl tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Duplicate for seamless loop only if animating */}
      {isAnimated && (
        <div
          className={cn(
            "flex w-max min-w-full shrink-0 items-center gap-16 px-8",
            `animate-marquee ${speedClass} linear infinite`
          )}
          style={{
            animationName: "marquee",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <span
              key={`marquee-dup-${index}`}
              className="font-heading text-2xl tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `
      }} />
    </div>
  );
}