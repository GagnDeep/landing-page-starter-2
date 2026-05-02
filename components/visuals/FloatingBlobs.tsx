"use client";

export function FloatingBlobs() {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none opacity-40">
      <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-secondary mix-blend-multiply blur-3xl animate-[blob_7s_infinite] motion-reduce:animate-none dark:mix-blend-screen" />
      <div className="absolute right-[10%] top-[30%] h-72 w-72 rounded-full bg-primary mix-blend-multiply blur-3xl animate-[blob_7s_infinite_2s] motion-reduce:animate-none dark:mix-blend-screen" />
      <div className="absolute bottom-[20%] left-[40%] h-80 w-80 rounded-full bg-muted mix-blend-multiply blur-3xl animate-[blob_7s_infinite_4s] motion-reduce:animate-none dark:mix-blend-screen" />
    </div>
  );
}
