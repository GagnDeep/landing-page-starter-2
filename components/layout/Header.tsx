"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { globalContent } from "@/content/global";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Section 1: Top Announcement Bar */}
      <div className="w-full bg-primary py-2 px-4 text-center">
        <p className="text-primary-foreground text-xs md:text-sm tracking-wide font-sans">
          {homeContent.announcement.text}{" "}
          <Link href={homeContent.announcement.href} className="underline underline-offset-4 hover:text-white transition-colors">
            {homeContent.announcement.linkText}
          </Link>
        </p>
      </div>

      {/* Section 2: Main Navigation Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/90 backdrop-blur-md border-border shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold tracking-tight text-foreground">
              {globalContent.header.logo}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {globalContent.header.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-sans tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href={globalContent.header.cta.href}
              className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-sans tracking-widest uppercase transition-all bg-foreground text-background rounded-full hover:bg-primary hover:text-primary-foreground"
            >
              {globalContent.header.cta.label}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
