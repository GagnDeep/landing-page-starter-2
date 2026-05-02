import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

interface AvatarStackProps {
  className?: string;
  limit?: number;
}

export function AvatarStack({ className, limit = 3 }: AvatarStackProps) {
  const avatars = [
    images.testimonialAvatar1,
    images.testimonialAvatar2,
    images.testimonialAvatar3,
  ].slice(0, limit);

  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-background shadow-sm hover:z-10 hover:scale-110 transition-transform duration-300 motion-reduce:transition-none"
          style={{ zIndex: limit - index }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      ))}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium text-muted-foreground shadow-sm hover:z-10 hover:scale-110 transition-transform duration-300 motion-reduce:transition-none">
        +500
      </div>
    </div>
  );
}
