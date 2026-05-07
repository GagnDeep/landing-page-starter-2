"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function FaqTeaser() {
  const { faqTeaser } = homeContent

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        <div className="text-center mb-16">
          <TextFadeIn>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground">
              {faqTeaser.heading}
            </h2>
          </TextFadeIn>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqTeaser.questions.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}
