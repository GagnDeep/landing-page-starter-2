"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/visuals";
import { homeContent } from "@/content/home";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { nav } = homeContent;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use absolute paths instead of anchors since it's global
  const navLinks = [
    { label: "Cakes", href: "/pricing" },
    { label: "Gifts & Flowers", href: "/features" },
    { label: "About Us", href: "/about" },
    { label: "Journal", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl font-bold tracking-tight text-primary">
          {nav.logo}
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium hover:text-primary transition-colors mix-blend-difference">
              {link.label}
            </Link>
          ))}
        </nav>
        <MagneticButton>
          <Link href="/contact">
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              {nav.cta}
            </Button>
          </Link>
        </MagneticButton>
      </div>
    </header>
  );
}
