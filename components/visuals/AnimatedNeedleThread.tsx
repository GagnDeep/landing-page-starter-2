"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function AnimatedNeedleThread({ className }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
       path.style.strokeDasharray = "none";
       return;
    }

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length} ${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Simple CSS animation via JS to ensure exact length
    const animate = () => {
      path.animate(
        [
          { strokeDashoffset: length },
          { strokeDashoffset: 0 }
        ],
        {
          duration: 3000,
          easing: "ease-in-out",
          iterations: Infinity,
          direction: "alternate"
        }
      );
    };

    animate();
  }, []);

  return (
    <div className={cn("flex justify-center items-center opacity-50", className)}>
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={pathRef} d="M10 50 C 40 10, 60 90, 100 50 C 140 10, 160 90, 190 50" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="50" r="3" fill="var(--primary)" />
        <path d="M190 50 L 195 45 L 195 55 Z" fill="var(--primary)" />
      </svg>
    </div>
  );
}
