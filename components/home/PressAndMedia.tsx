import React from "react";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";

export function PressAndMedia() {
  const { headline, articles } = homeContent.pressAndMedia;

  return (
    <section className="py-grand bg-secondary text-secondary-foreground px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl mb-12">{headline}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 divide-y md:divide-y-0 md:divide-x divide-border/50">
            {articles.map((article, idx) => (
              <div key={idx} className="flex flex-col pt-8 md:pt-0 md:px-12 first:pt-0 first:px-0 first:pl-0">
                <span className="font-sans text-xs tracking-widest uppercase text-primary mb-4">{article.publication}</span>
                <p className="font-heading text-xl lg:text-2xl leading-relaxed">&quot;{article.title}&quot;</p>
              </div>
            ))}
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
