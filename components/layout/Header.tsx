"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";
import { globalContent } from "@/content/global";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    queueMicrotask(() => setIsMobileMenuOpen(false));
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center gap-2 group">
          <span className="font-heading font-semibold text-2xl tracking-wide text-foreground">
            Sanjay Arts
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {globalContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-sans tracking-wide transition-colors hover:text-primary",
                pathname === item.href ? "text-primary font-medium" : "text-foreground/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted text-foreground/80 transition-colors h-9 w-9 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted && (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <HugeiconsIcon icon={theme === "dark" ? Sun01Icon : Moon02Icon} strokeWidth={1.5 as any} className="size-5" />
            )}
          </button>
          <Link
            href={globalContent.cta.href}
            className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-sans font-medium hover:opacity-90 transition-opacity"
          >
            {globalContent.cta.label}
          </Link>
        </div>

        <button
          className="md:hidden relative z-50 p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <HugeiconsIcon icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon} strokeWidth={1.5 as any} className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {globalContent.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-heading tracking-wide",
                    pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-3 text-sm font-sans text-muted-foreground min-w-32"
                >
                  {mounted && (
                    <>
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      <HugeiconsIcon icon={theme === "dark" ? Sun01Icon : Moon02Icon} strokeWidth={1.5 as any} className="size-5" />
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </>
                  )}
                </button>
                <Link
                  href={globalContent.cta.href}
                  className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-sans font-medium text-center"
                >
                  {globalContent.cta.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
