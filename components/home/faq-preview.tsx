import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import { CTAGlow } from "@/components/visuals/cta-glow"
import { homeContent } from "@/content/home"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQPreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left Col: Secondary CTA */}
        <div className="flex flex-col justify-center">
          <SlideUp>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
              {homeContent.secondaryCta.heading}
            </h2>
            <p className="font-sans text-muted-foreground text-lg mb-10 max-w-md">
              Discover the breadth of our offerings, from intimate pre-wedding rituals to monumental grand receptions.
            </p>
            <CTAGlow>
              <Link
                href="/pricing"
                className="inline-block px-8 py-4 border border-primary text-primary font-sans text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {homeContent.secondaryCta.buttonText}
              </Link>
            </CTAGlow>
          </SlideUp>
        </div>

        {/* Right Col: FAQ Accordion */}
        <div>
          <FadeIn delay={0.2}>
            <h3 className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-8">
              {homeContent.faqPreview.heading}
            </h3>

            <Accordion type="single" collapsible className="w-full">
              {homeContent.faqPreview.questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border py-2">
                  <AccordionTrigger className="font-sans text-left text-lg text-foreground hover:text-primary transition-colors data-[state=open]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground leading-relaxed text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 pt-6 border-t border-border">
              <Link href="/faq" className="text-sm font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                Read All FAQs <span className="text-primary">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}