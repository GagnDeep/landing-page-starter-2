"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

// Content
import { homeContent } from '@/content/home';

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShoppingBag01Icon,
  UserCircleIcon,
  Search01Icon,
  Moon02Icon,
  Sun01Icon,
  Menu01Icon
} from '@hugeicons/core-free-icons';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Global Notice Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium z-50 relative">
        {homeContent.noticeBar}
      </div>

      {/* 2. Editorial Header/Navigation */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm top-0' : 'bg-transparent top-9'}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-heading text-2xl font-bold tracking-widest text-foreground">
            AURA
          </Link>

          {/* Center Nav (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider">Shop</Link>
            <Link href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider">Collections</Link>
            <Link href="/features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider">Custom Stitching</Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wider">About</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-foreground/80 hover:text-foreground hidden sm:block"><HugeiconsIcon icon={Search01Icon} size={20} /></button>
            <button className="text-foreground/80 hover:text-foreground hidden sm:block"><HugeiconsIcon icon={UserCircleIcon} size={20} /></button>
            <button className="text-foreground/80 hover:text-foreground"><HugeiconsIcon icon={ShoppingBag01Icon} size={20} /></button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-foreground/80 hover:text-foreground ml-2"
                aria-label="Toggle Dark Mode"
              >
                <HugeiconsIcon icon={theme === 'dark' ? Sun01Icon : Moon02Icon} size={20} />
              </button>
            )}

            <button className="text-foreground/80 hover:text-foreground md:hidden ml-4"><HugeiconsIcon icon={Menu01Icon} size={24} /></button>
          </div>
        </div>
      </header>
    </>
  );
};
