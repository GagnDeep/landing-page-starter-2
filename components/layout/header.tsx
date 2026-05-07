"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from "lucide-react"
import { globalContent } from "@/content/global"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex h-24 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative z-10 font-heading text-2xl tracking-wide uppercase">
          {globalContent.brand.shortName}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {globalContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${isScrolled ? "text-foreground/80" : "text-white/80"}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-6 py-3 text-sm tracking-widest uppercase border transition-colors ${
              isScrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-white/50 text-white hover:bg-white hover:text-black"
            }`}
          >
            {globalContent.buttons.inquire}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} className={isScrolled ? "text-foreground" : "text-white"} /> : <Menu size={28} className={isScrolled ? "text-foreground" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {globalContent.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading text-4xl text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
           <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase"
          >
            {globalContent.buttons.inquire}
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}