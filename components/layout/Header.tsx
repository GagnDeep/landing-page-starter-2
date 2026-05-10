"use client";

import * as React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { CTAGlow, AnimatedSVGIllustration } from "@/components/visuals";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-background/0 border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 z-10 group" aria-label={homeContent.header.logoAlt}>
          <AnimatedSVGIllustration className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={2.5} />
          <span className="font-heading font-bold text-xl md:text-2xl text-foreground tracking-tight group-hover:text-primary transition-colors">
            Harbhajan&apos;s
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {homeContent.header.navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <CTAGlow glowOpacity={0.5}>
            <Button asChild className="rounded-full px-6 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">{homeContent.header.cta}</Link>
            </Button>
          </CTAGlow>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open Menu" className="rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col justify-between">
              <div>
                <SheetHeader className="text-left mb-8">
                  <SheetTitle className="font-heading text-2xl flex items-center gap-2">
                     <AnimatedSVGIllustration className="w-6 h-6 text-primary" />
                     Harbhajan&apos;s
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {homeContent.header.navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mb-6">
                <Button asChild className="w-full rounded-full py-6 text-lg shadow-md">
                  <Link href="/contact">{homeContent.header.cta}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
