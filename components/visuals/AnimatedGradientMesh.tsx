"use client";

export function AnimatedGradientMesh() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-background">
      <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-primary/20 blur-[100px] animate-pulse [animation-duration:8s] [animation-timing-function:ease-in-out]" />
      <div className="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-secondary/30 blur-[100px] animate-pulse [animation-duration:10s] [animation-timing-function:ease-in-out] [animation-delay:2s]" />
      <div className="absolute top-[40%] left-[60%] h-[30%] w-[30%] rounded-full bg-muted/40 blur-[80px] animate-pulse [animation-duration:12s] [animation-timing-function:ease-in-out] [animation-delay:4s]" />
    </div>
  );
}
