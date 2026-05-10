"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeContent } from "@/content/home";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
  const { logo, links, cta } = homeContent.navigation;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl text-primary tracking-tight">
          {logo}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CTAGlow>
            <Link
              href={cta.href}
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {cta.label}
            </Link>
          </CTAGlow>
        </div>
      </div>
    </header>
  );
};
