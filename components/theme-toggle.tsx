"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun03Icon, Moon02Icon } from "@hugeicons/core-free-icons";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-full w-9 h-9 border border-border bg-background hover:bg-muted transition-colors text-foreground"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <HugeiconsIcon icon={Sun03Icon} className="size-4" strokeWidth={2} />
      ) : (
        <HugeiconsIcon icon={Moon02Icon} className="size-4" strokeWidth={2} />
      )}
    </button>
  );
}
