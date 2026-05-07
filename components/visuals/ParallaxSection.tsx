"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number; // 0 to 1
  children: React.ReactNode;
}

export function ParallaxSection({ speed = 0.5, children, className, ...props }: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate how far the element is from the center of the viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrolled = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        // Map scrolled (0 to 1) to a translation value
        const yPos = (scrolled - 0.5) * 100 * speed;
        contentRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} {...props}>
      <div ref={contentRef} className="w-full h-[120%] -mt-[10%] will-change-transform">
        {children}
      </div>
    </div>
  );
}
