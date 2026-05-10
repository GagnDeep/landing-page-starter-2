import { pricingContent } from "@/content/pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkBadge01Icon, Money02Icon } from "@hugeicons/core-free-icons";

export function PricingLogistics() {
  const { paymentTerms, tastingInfo, faqTeaser } = pricingContent;

  return (
    <section className="py-24 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Col: Payment & Tasting */}
          <div className="space-y-16">
             {/* Payment Terms */}
             <div className="bg-card p-8 md:p-12 rounded-[2rem] border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                     <HugeiconsIcon icon={Money02Icon} size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold">{paymentTerms.title}</h3>
                </div>
                <ul className="space-y-4">
                  {paymentTerms.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <HugeiconsIcon icon={CheckmarkBadge01Icon} size={20} className="text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground text-lg leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Tasting Info */}
             <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-[2rem] shadow-xl text-center">
                <h3 className="font-heading text-3xl font-bold mb-4">{tastingInfo.title}</h3>
                <p className="text-white/90 text-lg mb-8">{tastingInfo.description}</p>
                <Button asChild variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white text-lg h-12 px-8">
                  <Link href="/contact">{tastingInfo.cta}</Link>
                </Button>
             </div>
          </div>

          {/* Right Col: FAQ */}
          <div>
            <h3 className="font-heading text-4xl font-bold mb-10">{faqTeaser.title}</h3>
            <Accordion type="single" collapsible className="w-full">
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
          </div>

        </div>
      </div>
    </section>
  );
}
