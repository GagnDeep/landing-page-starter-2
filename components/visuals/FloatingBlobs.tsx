"use client";

import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
  count?: number;
}

import { useEffect, useState } from "react";

export function FloatingBlobs({ className, count = 3 }: FloatingBlobsProps) {
  const [blobs, setBlobs] = useState<Array<{ id: number; top: string; left: string; animationDelay: string; scale: number }>>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      setBlobs(
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`,
          animationDelay: `${i * 2}s`,
          scale: 0.8 + Math.random() * 0.5,
        }))
      );
    }, 0);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-[-1]", className)}>
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full bg-accent/20 blur-3xl animate-float mix-blend-multiply dark:mix-blend-screen"
          style={{
            top: blob.top,
            left: blob.left,
            width: `${300 * blob.scale}px`,
            height: `${300 * blob.scale}px`,
            animationDelay: blob.animationDelay,
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-float {
          animation: floatBlob 20s ease-in-out infinite;
        }
        @media (prefers-reduced-motion) {
          .animate-float { animation: none !important; }
        }
      `}} />
    </div>
  );
}
