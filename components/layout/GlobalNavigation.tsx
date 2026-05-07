"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { homeContent } from "@/content/home";
import { AnimatedMonogram } from "@/components/visuals";

export function GlobalNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { logoText, links } = homeContent.globalNavigation;

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <AnimatedMonogram size={40} className="text-primary group-hover:scale-110 transition-transform duration-500" />
          <span className="font-heading text-xl md:text-2xl font-semibold tracking-widest uppercase">
            {logoText}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wider uppercase transition-colors hover:text-primary relative group",
                pathname === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-6 h-[2px] bg-foreground block"></span>
          <span className="w-6 h-[2px] bg-foreground block"></span>
          <span className="w-4 h-[2px] bg-foreground block"></span>
        </button>
      </div>
    </header>
  );
}
