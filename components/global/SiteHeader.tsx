"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { globalContent } from "@/content/global";
import { Menu, X, ShoppingBag, Search, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-editorial-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {globalContent.navigation.links.slice(0, 3).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-heading text-2xl tracking-widest text-primary text-center">
          YAVA<br/><span className="text-[10px] tracking-[0.2em] font-sans text-foreground/60 uppercase">Designs</span>
        </Link>

        {/* Desktop Right Nav & Actions */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {globalContent.navigation.links.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 pl-4 border-l border-border/50">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors relative" aria-label="Cart">
              <ShoppingBag size={18} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
            </button>
          </div>
        </div>

        {/* Mobile Actions (Cart only) */}
        <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="text-foreground/80 hover:text-foreground transition-colors relative" aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-editorial-md animate-in slide-in-from-top-4 fade-in duration-300">
          <nav className="flex flex-col py-6 px-6 gap-6">
            {globalContent.navigation.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-heading text-foreground/90 hover:text-primary transition-colors border-b border-border/50 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
