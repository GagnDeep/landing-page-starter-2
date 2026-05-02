import { cn } from "@/lib/utils";

export function FloatingBlobs({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-full overflow-hidden blur-3xl opacity-50", className)}>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply motion-safe:animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/40 rounded-full mix-blend-multiply motion-safe:animate-blob motion-safe:animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply motion-safe:animate-blob motion-safe:animation-delay-4000" />
    </div>
  );
}
