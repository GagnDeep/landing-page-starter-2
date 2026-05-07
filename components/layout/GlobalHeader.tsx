"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle"; // Might need to create or verify this exists, let's create it if not.

export const GlobalHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const { globalHeader } = homeContent;

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
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-semibold tracking-wide">
          {globalHeader.logo}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {globalHeader.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex rounded-none" size="lg">
            {globalHeader.cta}
          </Button>
        </div>
      </div>
    </header>
  );
};
