import type { Metadata } from "next";
import Link from "next/link";
import { faqContent } from "@/content/faq";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { AnimatedGradientMesh } from "@/components/visuals";

export const metadata: Metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
};

export default function FAQPage() {
  const { hero, categories, contactPrompt } = faqContent;

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero & 2. Search */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden bg-muted/50 border-b border-border text-center">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container px-4 md:px-6 relative z-10 space-y-8 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm">
            {hero.headline}
          </h1>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full h-14 pl-12 pr-4 rounded-full bg-background border-border shadow-sm text-lg focus-visible:ring-primary"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto space-y-20">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-8">
              <h2 className="text-3xl font-heading font-semibold border-b border-border pb-4">{category.name}</h2>
              <Accordion type="multiple" className="w-full">
                {category.questions.map((question, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`}>
                    <AccordionTrigger className="text-left font-medium text-lg hover:text-primary">
                      {question.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {question.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact Prompt */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-heading font-semibold">{contactPrompt.heading}</h2>
          <p className="text-lg text-muted-foreground">{contactPrompt.description}</p>
          <Button asChild size="lg" className="rounded-full shadow-glow h-14 px-8 text-lg">
            <Link href="/contact">{contactPrompt.button}</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
