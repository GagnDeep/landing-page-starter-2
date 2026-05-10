"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  items: React.ReactNode[];
  className?: string;
  speed?: number; // duration in seconds
}

export function LogoMarquee({ items, className, speed = 40 }: LogoMarqueeProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, [items]);

  if (prefersReducedMotion) {
    return (
      <div className={cn("overflow-hidden flex flex-wrap justify-center gap-8 py-8", className)}>
        {items.map((item, i) => (
          <div key={i} className="flex-shrink-0 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            {item}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("overflow-hidden flex w-full relative py-8 mask-image-linear-gradient", className)}>
      <motion.div
        ref={containerRef}
        className="flex gap-16 pr-16 items-center whitespace-nowrap w-max"
        animate={{
          x: containerWidth ? [0, -containerWidth] : 0,
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Double the items to create a seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
