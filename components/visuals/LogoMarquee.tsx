"use client";

interface LogoMarqueeProps {
  items: string[];
}

export function LogoMarquee({ items }: LogoMarqueeProps) {
  return (
    <div className="relative flex overflow-x-hidden bg-card py-6">
      <div className="animate-marquee flex whitespace-nowrap motion-reduce:animate-none">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-8 text-lg font-serif text-muted-foreground transition-colors hover:text-primary"
          >
            {item}
          </span>
        ))}
      </div>
      {/* Add a fade to the edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-card to-transparent" />
    </div>
  );
}
