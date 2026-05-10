import React from "react";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";

export function Newsletter() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-xl text-center">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
          {homeContent.newsletter.heading}
        </h2>
        <form className="flex flex-col sm:flex-row gap-4" aria-label="Newsletter signup form">
          <input
            type="email"
            placeholder={homeContent.newsletter.placeholder}
            className="flex-1 h-12 px-4 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            required
            aria-label="Email address"
          />
          <Button type="button" size="lg" className="rounded-full h-12 px-8">
            {homeContent.newsletter.cta}
          </Button>
        </form>
      </div>
    </section>
  );
}
