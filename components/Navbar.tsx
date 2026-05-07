"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./visuals";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { header } = homeContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl tracking-wide font-medium relative z-50">
          {header.logoText}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {header.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm tracking-widest uppercase hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <MagneticButton className="px-6 py-2 ml-4">
            {header.ctaButton}
          </MagneticButton>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 top-0 w-full h-screen bg-background flex flex-col items-center justify-center space-y-8 z-40 md:hidden"
            >
              {header.navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-heading text-3xl tracking-wide hover:text-primary transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <MagneticButton className="mt-8 text-lg px-8 py-3" onClick={() => setIsMobileOpen(false)}>
                {header.ctaButton}
              </MagneticButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
