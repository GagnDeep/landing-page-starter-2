import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingBlobsProps {
  className?: string;
}

export const FloatingBlobs: React.FC<FloatingBlobsProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none -z-10", className)} aria-hidden="true">
      {/* Blob 1 */}
      <div
        className={cn(
          "absolute top-[-10%] left-[-10%] w-1/2 h-1/2 rounded-full",
          "bg-primary/10 blur-3xl",
          "motion-safe:animate-blob"
        )}
      />

      {/* Blob 2 */}
      <div
        className={cn(
          "absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 rounded-full",
          "bg-accent/10 blur-3xl",
          "motion-safe:animate-blob [animation-duration:20s] [animation-direction:alternate-reverse]"
        )}
      />

      {/* Blob 3 */}
      <div
        className={cn(
          "absolute top-[20%] right-[10%] w-1/3 h-1/3 rounded-full",
          "bg-secondary/15 blur-3xl",
          "motion-safe:animate-blob [animation-duration:18s]"
        )}
      />

      {/* Tailwind config for blob animation (requires adding to globals.css or tailwind config):
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
      */}
    </div>
  );
};
