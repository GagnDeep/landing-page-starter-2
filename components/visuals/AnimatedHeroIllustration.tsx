"use client";

export function AnimatedHeroIllustration() {
  return (
    <div className="relative h-64 w-64 md:h-96 md:w-96">
      {/* Abstract needle and thread */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full stroke-primary drop-shadow-md"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M 50 10 L 50 80"
          className="animate-[slide-up_3s_ease-in-out_infinite_alternate] motion-reduce:animate-none"
        />
        <circle cx="50" cy="85" r="2" fill="currentColor" className="stroke-none" />

        {/* Thread */}
        <path
          d="M 50 15 Q 70 30 40 50 T 60 90"
          className="animate-[dash_5s_linear_infinite] opacity-60 motion-reduce:animate-none"
          strokeDasharray="4 4"
        />
        <path
          d="M 50 15 Q 30 30 60 50 T 40 90"
          className="animate-[dash_5s_linear_infinite_reverse] opacity-40 motion-reduce:animate-none"
          strokeDasharray="2 6"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}
