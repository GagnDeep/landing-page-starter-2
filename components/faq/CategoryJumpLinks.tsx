import React from "react";
import Link from "next/link";
import { faqContent } from "@/content/faq";
import { FadeUpStagger } from "@/components/visuals";

export function CategoryJumpLinks() {
  const { links } = faqContent.categoryJumpLinks;

  return (
    <section className="py-8 bg-secondary border-b border-border/50">
      <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
        <FadeUpStagger className="flex flex-wrap justify-center gap-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="px-6 py-2 rounded-full border border-border bg-background hover:border-primary transition-colors font-sans text-sm tracking-widest uppercase"
            >
              {link.label}
            </Link>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}
