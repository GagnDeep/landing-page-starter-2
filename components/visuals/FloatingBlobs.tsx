"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  color?: string;
}

export function FloatingBlobs({
  count = 3,
  color = "var(--secondary)",
  className,
  ...props
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const [blobs, setBlobs] = useState<Array<{ w: number; h: number; l: number; t: number; dy: number; dx: number; ds: number; dur: number }>>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const generatedBlobs = Array.from({ length: count }).map(() => ({
        w: Math.random() * 200 + 150,
        h: Math.random() * 200 + 150,
        l: Math.random() * 100,
        t: Math.random() * 100,
        dy: Math.random() * 100 - 50,
        dx: Math.random() * 100 - 50,
        ds: Math.random() * 0.2 + 0.9,
        dur: Math.random() * 10 + 10,
      }));
      setBlobs(generatedBlobs);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [count]);

  if (!blobs.length) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} {...props}>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen opacity-20 dark:opacity-10 blur-3xl"
          style={{
            backgroundColor: color,
            width: `${blob.w}px`,
            height: `${blob.h}px`,
            left: `${blob.l}%`,
            top: `${blob.t}%`,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, blob.dy, 0],
                  x: [0, blob.dx, 0],
                  scale: [1, blob.ds, 1],
                }
          }
          transition={{
            duration: blob.dur,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      ))}
    </div>
  );
}
