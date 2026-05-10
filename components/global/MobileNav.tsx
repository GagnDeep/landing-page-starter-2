"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { globalContent } from "@/content/global";
import { homeContent } from "@/content/home";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleOpen}
        className="text-foreground hover:bg-secondary rounded-full"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 mt-16 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
          <nav className="flex flex-col items-center justify-center h-full gap-8 p-6 pb-32">
            {globalContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-heading text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col items-center gap-4">
              <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                <Link href="/contact" onClick={() => setIsOpen(false)}>{homeContent.global.header.cta}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
