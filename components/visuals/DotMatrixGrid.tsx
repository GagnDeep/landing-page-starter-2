import { cn } from "@/lib/utils";

export function DotMatrixGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none z-0", className)}
      style={{
        backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
      aria-hidden="true"
    />
  );
}
