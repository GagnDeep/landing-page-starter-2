import { faqContent } from "@/content/faq";
import Link from "next/link";
import { ArrowRight01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-background">
      {/* 1. Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 pointer-events-none" />
        <DotMatrixGrid className="absolute inset-0 opacity-30 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            {faqContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            {faqContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Search/Filter (Static UI placeholder for Phase 6) */}
      <section className="px-6 -mt-8 relative z-20">
        <div className="container mx-auto max-w-2xl">
          <div className="relative shadow-xl rounded-full bg-background border border-border">
             <HugeiconsIcon icon={Search01Icon} strokeWidth={2} className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
             <Input
               type="text"
               placeholder={faqContent.searchPlaceholder}
               className="w-full h-16 pl-14 pr-6 rounded-full border-none bg-transparent text-lg shadow-none focus-visible:ring-primary focus-visible:ring-2"
             />
          </div>
        </div>
      </section>

      {/* 3, 4, 5. Categories & Accordions */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-24">
          {faqContent.categories.map((category, idx) => (
            <div key={idx} className="scroll-mt-32">
              <h2 className="font-heading text-3xl font-bold mb-8 text-foreground pb-4 border-b border-border/50">
                {category.title}
              </h2>
              <Accordion type="multiple" className="w-full space-y-4">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="bg-secondary/10 border border-border/50 rounded-xl px-6 data-[state=open]:bg-secondary/20 transition-colors">
                    <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:text-primary py-6 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Still Have Questions? CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden text-center px-6 border-t border-border">
        <AnimatedGradientMesh className="absolute inset-0 opacity-10 pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-background">
            {faqContent.cta.headline}
          </h2>
          <CTAGlow>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              {faqContent.cta.button}
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-5 h-5" />
            </Link>
          </CTAGlow>
        </div>
      </section>
    </div>
  );
}
