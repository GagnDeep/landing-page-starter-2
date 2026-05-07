"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/images";

interface KenBurnsImageProps {
  image: ImageAsset;
  className?: string;
  priority?: boolean;
}

export function KenBurnsImage({ image, className, priority = false }: KenBurnsImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("overflow-hidden relative w-full h-full", className)}>
      <Image
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        className={cn(
          "object-cover w-full h-full transition-transform duration-[20s] ease-out",
          isLoaded ? "scale-110" : "scale-100 blur-sm",
          "motion-reduce:transition-none motion-reduce:scale-100"
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
