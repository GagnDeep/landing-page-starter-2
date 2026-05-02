"use client";

export function HowItWorksDiagram() {
  return (
    <div className="flex w-full max-w-3xl items-center justify-between gap-4 py-8 relative">
      {/* Connecting line */}
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-border overflow-hidden z-0">
         <div className="h-full w-full bg-primary origin-left animate-[scale-x_2s_ease-out_forwards] motion-reduce:animate-none" />
      </div>

      {/* Nodes */}
      {[1, 2, 3, 4].map((step, index) => (
        <div
          key={step}
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card border-2 border-primary text-primary font-serif font-bold shadow-sm animate-[fade-in-up_0.5s_ease-out_forwards] motion-reduce:animate-none opacity-0"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          {step}
          <div className="absolute -bottom-8 whitespace-nowrap text-xs font-medium text-muted-foreground opacity-0 animate-[fade-in_0.5s_ease-out_forwards] motion-reduce:animate-none" style={{ animationDelay: `${(index * 0.5) + 0.3}s` }}>
            {index === 0 && "Consult"}
            {index === 1 && "Measure"}
            {index === 2 && "Stitch"}
            {index === 3 && "Deliver"}
          </div>
        </div>
      ))}
    </div>
  );
}
