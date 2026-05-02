"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AvatarStackProps {
  className?: string;
  images: string[];
}

export function AvatarStack({ className, images }: AvatarStackProps) {
  return (
    <div className={cn("flex -space-x-4", className)}>
      {images.map((src, i) => (
        <div
          key={i}
          className="relative w-12 h-12 rounded-full border-2 border-background overflow-hidden motion-safe:transition-transform motion-safe:hover:-translate-y-2 motion-safe:hover:z-10 duration-300 ease-out"
          style={{ zIndex: images.length - i }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="Avatar" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
