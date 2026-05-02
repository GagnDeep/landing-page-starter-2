"use client";
import React from "react";
import { homeContent } from "@/content/home";
import { CTAGlow } from "@/components/visuals";

export function Newsletter() {
  const content = homeContent.newsletter;

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1583316174577-7434fa5b3c58?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          {content.headline}
        </h2>
        <p className="text-lg opacity-90 mb-8 font-light">
          {content.subheadline}
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-background/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-sm px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent"
            required
          />
          <CTAGlow>
            <button type="submit" className="w-full sm:w-auto h-full px-8 py-3 bg-accent text-accent-foreground font-bold tracking-widest uppercase text-sm rounded-sm hover:bg-accent/90 transition-colors">
              {content.cta}
            </button>
          </CTAGlow>
        </form>
      </div>
    </section>
  );
}
