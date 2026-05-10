"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { AnimatedFloralSVG } from "@/components/visuals/AnimatedFloralSVG";
import { homeContent } from "@/content/home";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Journal", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Avoid hydration mismatch for theme toggle
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setMobileMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <AnimatedFloralSVG className="w-6 h-6" duration={2} />
          </div>
          <span className="font-heading font-semibold text-lg md:text-xl tracking-wide text-foreground">
            {homeContent.global.brandName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative py-2",
                      isActive ? "text-primary" : "text-foreground/80"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        transition={{ type: "spring" as const, bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-foreground/70 hover:text-primary transition-colors rounded-full hover:bg-muted"
                aria-label="Toggle theme"
              >
                <HugeiconsIcon icon={theme === "dark" ? Sun01Icon : Moon02Icon} className="w-5 h-5 text-current fill-current" strokeWidth={1.5} />
              </button>
            )}
            <Button asChild className="rounded-full px-6 font-medium">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-foreground/70 hover:text-primary transition-colors rounded-full"
              aria-label="Toggle theme"
            >
              <HugeiconsIcon icon={theme === "dark" ? Sun01Icon : Moon02Icon} className="w-5 h-5 text-current fill-current" strokeWidth={1.5} />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-foreground"
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu01Icon} className="w-6 h-6 text-current fill-current" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between p-4 md:px-6 border-b border-border">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <AnimatedFloralSVG className="w-6 h-6" duration={0} />
                </div>
                <span className="font-heading font-semibold text-lg tracking-wide">{homeContent.global.brandName}</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground bg-muted rounded-full"
                aria-label="Close menu"
              >
                <HugeiconsIcon icon={Cancel01Icon} className="w-6 h-6 text-current fill-current" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-2xl font-heading font-medium block transition-colors",
                          isActive ? "text-primary" : "text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-8 border-t border-border flex flex-col gap-4">
                <Button asChild size="lg" className="w-full rounded-full text-lg">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <p className="text-center text-muted-foreground text-sm mt-4">
                  {homeContent.global.contactPhone} <br /> {homeContent.global.location}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
