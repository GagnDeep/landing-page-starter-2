"use client";

interface AvatarStackProps {
  images: string[];
}

export function AvatarStack({ images }: AvatarStackProps) {
  return (
    <div className="flex items-center -space-x-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative inline-block h-12 w-12 rounded-full ring-2 ring-background overflow-hidden animate-[slide-in-right_0.5s_ease-out_forwards] motion-reduce:animate-none opacity-0"
          style={{ animationDelay: `${i * 0.15}s`, zIndex: images.length - i }}
        >
          <img
            src={src}
            alt={`Avatar ${i + 1}`}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
      <div
        className="relative z-0 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground ring-2 ring-background animate-[slide-in-right_0.5s_ease-out_forwards] motion-reduce:animate-none opacity-0"
        style={{ animationDelay: `${images.length * 0.15}s` }}
      >
        +100
      </div>
    </div>
  );
}
