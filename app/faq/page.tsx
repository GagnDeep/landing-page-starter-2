import { faqContent } from "@/content/faq";
import { RevealText } from "@/components/visuals/RevealText";
import { FadeIn } from "@/components/visuals/FadeIn";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description,
};

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden border-b border-border">
        <DotMatrixGrid className="opacity-40" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <RevealText as="h1" className="text-5xl md:text-7xl font-heading font-medium text-foreground">
            {faqContent.hero.headline}
          </RevealText>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          {faqContent.categories.map((category, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <RevealText as="h2" delay={0.1} className="text-3xl font-heading text-primary mb-8 border-b border-border pb-4">
                {category.name}
              </RevealText>

              <FadeIn delay={0.2}>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((q, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border-border">
                      <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-6">
                        {q.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 pr-8">
                        {q.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <RevealText as="h2" className="text-4xl md:text-5xl font-heading text-foreground mb-6">
            {faqContent.ctaSection.headline}
          </RevealText>
          <RevealText as="p" delay={0.2} className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {faqContent.ctaSection.body}
          </RevealText>
          <FadeIn delay={0.4}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-8 text-xl tracking-wide group" asChild>
              <Link href={faqContent.ctaSection.cta.href}>
                {faqContent.ctaSection.cta.label}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}