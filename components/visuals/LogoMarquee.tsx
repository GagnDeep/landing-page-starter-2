import { cn } from "@/lib/utils";

export function LogoMarquee({
  logos,
  className,
}: {
  logos: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden bg-background py-8",
        className
      )}
    >
      <div className="flex w-max min-w-full shrink-0 motion-safe:animate-marquee">
        {logos.map((logo, index) => (
          <div
            key={`logo1-${index}`}
            className="flex w-64 items-center justify-center font-serif text-2xl text-muted-foreground opacity-60"
          >
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={`logo2-${index}`}
            className="flex w-64 items-center justify-center font-serif text-2xl text-muted-foreground opacity-60"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
