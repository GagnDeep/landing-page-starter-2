"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { globalAnnouncement, globalNavLinks } from "@/content/home";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col bg-background/90 backdrop-blur-md border-b border-border">
      {/* Home-01-GlobalAnnouncementBar */}
      <div className="w-full bg-primary text-primary-foreground py-2 text-center text-xs font-medium tracking-wide uppercase">
        {globalAnnouncement.text}
      </div>

      {/* Home-02-HeritageHeader */}
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -ml-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav Left */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {globalNavLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex-1 text-center md:flex-none">
          <Link href="/" className="inline-block">
            <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              VERMA'S
              <span className="block text-xs font-sans font-normal tracking-widest text-muted-foreground mt-1">
                BAKERY & SWEETS
              </span>
            </h1>
          </Link>
        </div>

        {/* Desktop Nav Right & Theme Toggle */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <nav className="hidden md:flex items-center gap-8">
            {globalNavLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-muted/50 text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && (
              theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
            )}
            {!mounted && <div className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-4 shadow-lg flex flex-col gap-4">
          {globalNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
