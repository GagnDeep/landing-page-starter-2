"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { globalContent } from "@/content/global";
import { cn } from "@/lib/utils";
import { MenuIcon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    queueMicrotask(() => setMobileMenuOpen(false));
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent border-transparent py-6 text-foreground"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight">
          Sangam
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {globalContent.nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-border pl-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {globalContent.nav.cta}
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            <HugeiconsIcon icon={mobileMenuOpen ? Cancel01Icon : MenuIcon} strokeWidth={2} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {globalContent.nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-lg font-medium py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 w-full px-5 py-3 bg-primary text-primary-foreground text-center rounded-full text-base font-medium"
          >
            {globalContent.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
