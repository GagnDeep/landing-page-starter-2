import React from "react";
import { homeContent } from "@/content/home";

export function FaqSnippets() {
  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          {homeContent.faq.heading}
        </h2>
        <div className="space-y-6">
          {homeContent.faq.questions.map((faq, idx) => (
            <div key={idx} className="p-6 bg-secondary/10 rounded-xl">
              <h3 className="font-bold text-foreground text-lg mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
