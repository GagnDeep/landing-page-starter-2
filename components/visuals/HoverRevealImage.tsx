"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/images";

interface HoverRevealImageProps extends React.HTMLAttributes<HTMLDivElement> {
  image: ImageAsset;
  overlayText?: string;
  imageClassName?: string;
}

export function HoverRevealImage({ image, overlayText, className, imageClassName, ...props }: HoverRevealImageProps) {
  return (
    <div className={cn("group relative overflow-hidden bg-muted", className)} {...props}>
      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={cn(
          "object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          imageClassName
        )}
      />
      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none">
          <span className="text-white font-heading text-2xl tracking-wider translate-y-4 transition-transform duration-500 group-hover:translate-y-0 motion-reduce:transition-none motion-reduce:translate-y-0">
            {overlayText}
          </span>
        </div>
      )}
    </div>
  );
}
