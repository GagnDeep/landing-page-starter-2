"use client";

import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-sans border-b",
        scrolled ? "bg-background/90 backdrop-blur-md border-border/50 py-4" : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl tracking-wide text-foreground">
          {homeContent.navigation.logo}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {homeContent.navigation.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-4 w-px bg-border mx-2"></div>
          <ThemeToggle />
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
          >
            {homeContent.navigation.cta}
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={cn("block h-0.5 bg-current transition-transform duration-300", mobileMenuOpen && "rotate-45 translate-y-2")}></span>
              <span className={cn("block h-0.5 bg-current transition-opacity duration-300", mobileMenuOpen && "opacity-0")}></span>
              <span className={cn("block h-0.5 bg-current transition-transform duration-300", mobileMenuOpen && "-rotate-45 -translate-y-2")}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {homeContent.navigation.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full text-center px-5 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
          >
            {homeContent.navigation.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
