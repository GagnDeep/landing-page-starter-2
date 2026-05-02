"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { globalContent } from "@/content/global";
import { ThemeToggle } from "@/components/theme-toggle";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex shrink-0 items-center justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                {globalContent.brand.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {globalContent.navigation.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions (Theme + CTA) */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="hidden sm:block">
              <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer">
                <CTAGlow className="px-4 py-2 text-sm">{globalContent.navigation.cta.label}</CTAGlow>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 pb-3 pt-2">
            {globalContent.navigation.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                  pathname === link.href
                    ? "border-primary bg-muted/50 text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/30 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4 sm:hidden">
              <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer" className="block w-full">
                <CTAGlow className="w-full justify-center">{globalContent.navigation.cta.label}</CTAGlow>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
