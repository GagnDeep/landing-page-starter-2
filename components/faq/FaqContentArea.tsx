import React from "react";
import { faqContent } from "@/content/faq";
import { FaqAccordion } from "./FaqAccordion";

export function FaqContentArea() {
  const categories = Object.values(faqContent.categories);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <h3 className="font-heading font-bold text-lg mb-6 text-foreground">{faqContent.quickLinks.heading}</h3>
              <ul className="space-y-3">
                {faqContent.quickLinks.links.map((link, i) => (
                  <li key={i}>
                    <a href={`#category-${i}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 max-w-3xl">
            {categories.map((category, idx) => (
              <div key={idx} id={`category-${idx}`} className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-heading font-bold mb-8 text-foreground">{category.title}</h2>
                <FaqAccordion questions={category.questions} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
