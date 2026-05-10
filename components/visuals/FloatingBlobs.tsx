"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps extends React.HTMLAttributes<HTMLDivElement> {
  blobCount?: number;
  baseColor?: string;
}

export function FloatingBlobs({
  className,
  blobCount = 3,
  baseColor = "var(--primary)",
  ...props
}: FloatingBlobsProps) {
  const prefersReducedMotion = useReducedMotion();

  const blobs = Array.from({ length: blobCount }).map((_, i) => {
    // Generate pseudo-random deterministic values based on index
    const size = 200 + (i * 50) % 150;
    const top = 10 + (i * 30) % 70;
    const left = 10 + (i * 40) % 70;
    const duration = prefersReducedMotion ? 0 : 15 + (i * 5) % 10;
    const delay = (i * 2) % 5;

    return { size, top, left, duration, delay };
  });

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)} {...props}>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10 mix-blend-multiply blur-[80px] dark:mix-blend-screen"
          style={{
            width: blob.size,
            height: blob.size,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            backgroundColor: baseColor,
          }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.1 }
              : {
                  y: [0, -50, 0],
                  x: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut" as const,
            delay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
