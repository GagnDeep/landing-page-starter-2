"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

/**
 * FloatingBlobs
 * Slow-moving background shapes that evoke the organic feeling of dough or frosting.
 */
export function FloatingBlobs({ className }: FloatingBlobsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)} aria-hidden="true">
      <div
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-primary/10 mix-blend-multiply dark:mix-blend-screen motion-reduce:animate-none"
        style={{
          animation: 'blob-spin 20s infinite alternate linear',
        }}
      />
      <div
        className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-[60%_40%_30%_70%_/_50%_60%_40%_50%] bg-accent/10 mix-blend-multiply dark:mix-blend-screen motion-reduce:animate-none"
        style={{
          animation: 'blob-spin 25s infinite alternate-reverse linear',
        }}
      />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
      `}} />
    </div>
  );
}
