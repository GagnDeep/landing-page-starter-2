import { homeContent } from "@/content/home";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FaqTeaser() {
  const { faqTeaser } = homeContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            {faqTeaser.title}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mb-12">
          {faqTeaser.questions.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left font-heading text-xl font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="rounded-full px-8 text-lg font-semibold hover:text-primary">
            <Link href="/faq">{faqTeaser.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
