import React from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { globalContent } from "@/content/global";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Brand Name */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl md:text-2xl font-heading font-bold tracking-tight text-primary transition-colors group-hover:text-accent">
                {globalContent.brandName.split(" ")[0]}
              </span>
              <span className="hidden sm:inline-block text-sm text-muted-foreground ml-2 uppercase tracking-widest font-semibold mt-1">
                {globalContent.brandName.split(" ").slice(1).join(" ")}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {globalContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Mobile Nav Toggle */}
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            <div className="hidden sm:flex items-center">
              <span className="px-2 py-1 text-xs font-semibold bg-accent/20 text-accent-foreground rounded-full mr-4 whitespace-nowrap">
                {homeContent.global.header.badge}
              </span>
            </div>
            <ThemeToggle />
            <div className="hidden md:block">
              <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm hover:shadow-md">
                <Link href="/contact">{homeContent.global.header.cta}</Link>
              </Button>
            </div>
            <MobileNav />
          </div>

        </div>
      </div>
    </header>
  );
}
