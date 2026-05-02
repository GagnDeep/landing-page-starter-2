"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Avatar {
  id: string;
  url: string;
  alt: string;
}

interface AvatarStackProps {
  avatars: Avatar[];
  className?: string;
  limit?: number;
}

export function AvatarStack({ avatars, className, limit = 3 }: AvatarStackProps) {
  const displayAvatars = avatars.slice(0, limit);
  const remaining = avatars.length - limit;

  return (
    <div className={cn("flex items-center -space-x-4", className)}>
      {displayAvatars.map((avatar, idx) => (
        <div
          key={avatar.id}
          className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background transform transition-transform duration-300 hover:scale-110 hover:z-10 focus:z-10"
          style={{ zIndex: displayAvatars.length - idx }}
        >
          <Image
            src={avatar.url}
            alt={avatar.alt}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
      ))}
      {remaining > 0 && (
        <div
          className="relative w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground z-0 transform transition-transform duration-300 hover:scale-110"
        >
          +{remaining}
        </div>
      )}
    </div>
  );
}
