import React from "react";
import { homeContent } from "@/content/home";
import { AvatarStack } from "@/components/visuals";

export function Testimonials() {
  const content = homeContent.testimonials;

  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-12">
          The Sardaar G. Standard
        </h2>

        <div className="space-y-24">
          {content.map((t, index) => (
            <div key={index} className="flex flex-col items-center">
              <blockquote className="text-2xl md:text-3xl font-heading font-light leading-relaxed text-foreground mb-8">
                "{t.quote}"
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <span className="font-bold tracking-wide uppercase text-sm text-foreground">{t.author}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.event}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
