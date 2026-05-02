"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FloatingBlobsProps {
  className?: string;
}

export function FloatingBlobs({ className }: FloatingBlobsProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none opacity-20", className)}>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl motion-safe:animate-[blob_7s_infinite] motion-reduce:animate-none"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl motion-safe:animate-[blob_7s_infinite_2s] motion-reduce:animate-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl motion-safe:animate-[blob_7s_infinite_4s] motion-reduce:animate-none"></div>
    </div>
  );
}
