import React from "react";
import { homeContent } from "@/content/home";

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          {homeContent.testimonials.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {homeContent.testimonials.quotes.map((quote, idx) => (
            <div key={idx} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <p className="text-lg italic text-muted-foreground mb-4">"{quote.text}"</p>
              <p className="font-bold text-foreground">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
