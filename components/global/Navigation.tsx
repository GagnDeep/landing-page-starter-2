"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const linkContainerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled || isOpen
            ? "bg-background/90 backdrop-blur-md py-4 border-b border-border/50"
            : "bg-transparent py-8"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            href="/"
            className={cn(
              "font-heading text-xl md:text-2xl tracking-widest uppercase transition-colors relative z-[60]",
              (scrolled || isOpen || pathname !== "/") ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsOpen(false)}
          >
            {homeContent.navigation.logoText}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "relative z-[60] flex flex-col justify-center items-center w-8 h-8 focus:outline-none",
              (scrolled || isOpen || pathname !== "/") ? "text-foreground" : "text-white"
            )}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <span
              className={cn(
                "block w-6 h-[1px] transition-all duration-300",
                (scrolled || isOpen || pathname !== "/") ? "bg-foreground" : "bg-white",
                isOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[1px] transition-all duration-300",
                (scrolled || isOpen || pathname !== "/") ? "bg-foreground" : "bg-white",
                isOpen ? "-rotate-45 -translate-y-[1px]" : "translate-y-1"
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : "closed"}
            animate={shouldReduceMotion ? { opacity: 1 } : "open"}
            exit={shouldReduceMotion ? { opacity: 0 } : "closed"}
            variants={shouldReduceMotion ? {} : menuVariants}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center items-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary/30 pointer-events-none" />

            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-10 flex flex-col items-center space-y-8"
            >
              {[
                { label: "Home", href: "/" },
                ...homeContent.navigation.links
              ].map((link) => (
                <motion.div key={link.label} variants={linkVariants}>
                  <Link
                    href={link.href}
                    className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground hover:text-muted-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute bottom-12 text-center text-sm tracking-widest uppercase text-muted-foreground"
            >
              <p>{homeContent.footer.brandName}</p>
              <p className="opacity-60">{homeContent.footer.tagline}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
