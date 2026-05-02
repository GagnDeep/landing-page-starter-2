import { cn } from "@/lib/utils";

export function AnimatedHeroIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full text-primary", className)}
    >
      <circle
        cx="200"
        cy="200"
        r="150"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 8"
        className="motion-safe:animate-[spin_60s_linear_infinite]"
      />
      <circle
        cx="200"
        cy="200"
        r="100"
        stroke="currentColor"
        strokeWidth="1"
        className="motion-safe:animate-[pulse_4s_ease-in-out_infinite]"
      />
      <path
        d="M200 50 Q250 200 200 350 Q150 200 200 50 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
}
