import React from "react";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { FadeUpStagger } from "@/components/visuals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQTeaser() {
  const { headline, questions, cta, ctaHref } = homeContent.faqTeaser;

  return (
    <section className="py-grand bg-background px-6 border-t border-border/50">
      <div className="container mx-auto max-w-3xl">
        <FadeUpStagger>
          <h2 className="font-heading text-4xl text-center mb-12">{headline}</h2>
          <Accordion type="single" collapsible className="w-full mb-12">
            {questions.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border/50">
                <AccordionTrigger className="font-sans text-lg text-left hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center">
            <Link href={ctaHref} className="font-sans text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors inline-block border-b border-primary pb-1">
              {cta}
            </Link>
          </div>
        </FadeUpStagger>
      </div>
    </section>
  );
}
