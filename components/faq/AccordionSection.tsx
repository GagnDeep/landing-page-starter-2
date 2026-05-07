import React from "react";
import { FadeUpStagger } from "@/components/visuals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionSectionProps {
  id: string;
  headline: string;
  questions: { q: string; a: string }[];
}

export function AccordionSection({ id, headline, questions }: AccordionSectionProps) {
  return (
    <section id={id} className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <FadeUpStagger>
          <h2 className="font-heading text-3xl mb-8 text-primary">{headline}</h2>
          <Accordion type="single" collapsible className="w-full">
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
        </FadeUpStagger>
      </div>
    </section>
  );
}
