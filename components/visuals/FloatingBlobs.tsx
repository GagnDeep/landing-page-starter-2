"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
    queueMicrotask(() => setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches));
  }, []);

  if (!mounted) return null;

  if (prefersReducedMotion) {
    return (
      <div className={cn("absolute inset-0 overflow-hidden opacity-30 pointer-events-none mix-blend-multiply dark:mix-blend-screen", className)} aria-hidden="true">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none mix-blend-multiply dark:mix-blend-screen", className)} aria-hidden="true">
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 15s infinite;
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>

      {/* Primary Color Blob */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />

      {/* Secondary/Accent Blob */}
      <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

      {/* Subtle Bottom Blob */}
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
    </div>
  );
}
