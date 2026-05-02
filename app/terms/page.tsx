"use client";

import { termsContent } from "@/content/terms";
import { FadeInScroll } from "@/components/visuals";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TermsPage() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background">

      {/* 1 & 2. Hero */}
      <section className="w-full pt-48 pb-24 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeInScroll>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-4">
              {termsContent.hero.heading}
            </h1>
            <p className="text-sm italic text-muted-foreground">
              {termsContent.hero.lastUpdated}
            </p>
          </FadeInScroll>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative">

          {/* 3. Table of Contents (Sticky) */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-3">
              {termsContent.sections.map((section, i) => (
                <a
                  key={i}
                  href={`#${section.id}`}
                  onClick={(e) => handleScroll(e, section.id)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="lg:w-3/4 max-w-3xl">
            <FadeInScroll>
              {termsContent.sections.map((section, i) => (
                <div key={i} id={section.id} className="mb-16 scroll-mt-32">
                  <h2 className="text-2xl font-heading text-foreground mb-6">{section.title}</h2>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                  {i < termsContent.sections.length - 1 && (
                    <div className="mt-16 w-full h-[1px] bg-border/40" />
                  )}
                </div>
              ))}
            </FadeInScroll>

            {/* Footer Utilities */}
            <FadeInScroll className="mt-24 pt-12 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground text-center sm:text-left max-w-sm">
                {termsContent.acknowledgment}
              </p>
              <div className="flex gap-6 items-center">
                <button className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-primary transition-colors" onClick={() => window.print()}>
                  {termsContent.printButton}
                </button>
                <Link href={termsContent.crossLink.href} className="text-sm uppercase tracking-widest font-medium text-primary hover:text-foreground transition-colors border-b border-primary pb-1">
                  {termsContent.crossLink.text}
                </Link>
              </div>
            </FadeInScroll>
          </div>

        </div>
      </section>

    </main>
  );
}
