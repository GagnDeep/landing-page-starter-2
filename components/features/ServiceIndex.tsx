import React from "react";
import Link from "next/link";
import { featuresContent } from "@/content/features";
import { FadeUpStagger } from "@/components/visuals";

export function ServiceIndex() {
  const { categories } = featuresContent.serviceIndex;

  return (
    <section className="py-8 bg-secondary border-b border-border/50 sticky top-[72px] z-40 backdrop-blur-md bg-secondary/90">
      <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
        <FadeUpStagger className="flex items-center justify-start md:justify-center gap-8 min-w-max">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="font-sans text-sm tracking-widest uppercase text-secondary-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {cat.label}
            </Link>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}
