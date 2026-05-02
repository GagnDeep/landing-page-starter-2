"use client";

import { privacyContent } from "@/content/privacy";
import { FadeInScroll } from "@/components/visuals";
import Link from "next/link";

export default function PrivacyPage() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-background">

      {/* Hero */}
      <section className="w-full pt-48 pb-24 border-b border-border/40">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeInScroll>
            <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-4">
              {privacyContent.hero.heading}
            </h1>
            <p className="text-sm italic text-muted-foreground">
              {privacyContent.hero.lastUpdated}
            </p>
          </FadeInScroll>
        </div>
      </section>

      <section className="w-full py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative">

          {/* Table of Contents (Sticky) */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-32 space-y-3">
              {privacyContent.sections.map((section, i) => (
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
              <div className="mb-16">
                <p className="text-lg font-heading text-primary leading-relaxed">
                  {privacyContent.commitment}
                </p>
              </div>

              {privacyContent.sections.map((section, i) => (
                <div key={i} id={section.id} className="mb-16 scroll-mt-32">
                  <h2 className="text-2xl font-heading text-foreground mb-6">{section.title}</h2>
                  <div className="text-foreground/80 leading-relaxed whitespace-pre-wrap prose prose-neutral dark:prose-invert max-w-none">
                    {/* Convert simple markdown to basic elements for this static content block */}
                    {section.content.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('-')) {
                        return (
                          <ul key={pIndex} className="list-disc pl-5 space-y-2 mt-4 mb-6">
                            {paragraph.split('\n').map((item, lIndex) => {
                              // basic bold parsing for " - **Text:** "
                              const match = item.match(/^- \*\*(.*?)\*\*(.*)/);
                              if (match) {
                                return <li key={lIndex}><strong>{match[1]}</strong>{match[2]}</li>;
                              }
                              return <li key={lIndex}>{item.replace(/^- /, '')}</li>;
                            })}
                          </ul>
                        );
                      }
                      return <p key={pIndex} className="mb-4">{paragraph}</p>;
                    })}
                  </div>
                  {i < privacyContent.sections.length - 1 && (
                    <div className="mt-16 w-full h-[1px] bg-border/40" />
                  )}
                </div>
              ))}
            </FadeInScroll>

            {/* Footer Utilities */}
            <FadeInScroll className="mt-24 pt-12 border-t border-border/40 flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <button className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-primary transition-colors" onClick={() => alert("Cookie modal would open here.")}>
                  {privacyContent.cookieTrigger}
                </button>
                <div className="flex gap-6 items-center">
                  <button className="text-sm uppercase tracking-widest font-medium text-foreground hover:text-primary transition-colors" onClick={() => window.print()}>
                    {privacyContent.printButton}
                  </button>
                  <Link href={privacyContent.crossLink.href} className="text-sm uppercase tracking-widest font-medium text-primary hover:text-foreground transition-colors border-b border-primary pb-1">
                    {privacyContent.crossLink.text}
                  </Link>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                {privacyContent.disclaimers}
              </p>
            </FadeInScroll>
          </div>

        </div>
      </section>

    </main>
  );
}
