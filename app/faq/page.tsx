import Link from "next/link";
import type { Metadata } from "next";
import { faqContent } from "@/content/faq";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CTAGlowButton } from "@/components/visuals/CTAGlowButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export const metadata: Metadata = {
  title: faqContent.metadata.title,
  description: faqContent.metadata.description,
};

export default function FaqPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <AnimatedGradientMesh variant="subtle" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-sm max-w-4xl mx-auto">
            {faqContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {faqContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-card relative z-10 border-y border-border/50">
        <FloatingBlobs className="opacity-30" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col gap-16">

            {/* 2. Categorized Accordions */}
            {faqContent.categories.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col gap-6">
                <h2 className="text-3xl font-heading font-bold text-primary flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                    {catIdx + 1}
                  </span>
                  {category.title}
                </h2>

                <Accordion type="single" collapsible className="w-full bg-background border border-border/50 rounded-2xl px-6 py-2 shadow-sm">
                  {category.faqs.map((faq, faqIdx) => (
                    <AccordionItem key={faqIdx} value={`item-${catIdx}-${faqIdx}`} className="border-border/50 last:border-0">
                      <AccordionTrigger className="text-left font-heading font-medium text-lg text-foreground hover:text-primary py-6">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Still Have Questions? (Contact CTA) */}
      <section className="py-32 bg-background relative z-10 text-center border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            {faqContent.supportCta.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {faqContent.supportCta.description}
          </p>
          <Link href="/contact" tabIndex={-1} className="outline-none block w-full sm:w-auto mt-4">
            <CTAGlowButton as="div" className="bg-primary text-primary-foreground w-full sm:w-auto flex justify-center text-lg py-4 px-10">
              {faqContent.supportCta.cta}
            </CTAGlowButton>
          </Link>
        </div>
      </section>
    </>
  );
}
