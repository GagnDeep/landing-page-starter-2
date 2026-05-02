import { cn } from "@/lib/utils";

export function DotMatrixGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] opacity-30",
        className
      )}
    />
  );
}
