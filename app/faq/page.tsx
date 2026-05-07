import { Metadata } from "next"
import { faqContent } from "@/content/faq"
import { RevealText } from "@/components/visuals/reveal-text"
import { FadeIn } from "@/components/visuals/fade-in"
import { SlideUp } from "@/components/visuals/slide-up"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: faqContent.seo.title,
  description: faqContent.seo.description,
}

export default function FaqPage() {
  return (
    <div className="bg-background pt-24 min-h-screen pb-32">
      {/* 1. Hero: Minimalist */}
      <section className="bg-muted py-24 md:py-32 border-b border-border/50 text-center px-6">
        <div className="mx-auto max-w-3xl">
            <RevealText
                as="h1"
                text={faqContent.hero.headline}
                className="font-heading text-5xl md:text-7xl mb-6 text-foreground"
            />
            <FadeIn delay={0.8}>
                <p className="font-sans text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                    {faqContent.hero.subheadline}
                </p>
            </FadeIn>
        </div>
      </section>

      {/* 2 & 3. Categories & Accordions */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12 flex flex-col gap-24">
            {faqContent.categories.map((category, catIndex) => (
                <div key={catIndex}>
                    <SlideUp>
                        <h2 className="font-sans text-xs tracking-widest uppercase text-primary font-semibold mb-8">
                            {category.name}
                        </h2>
                    </SlideUp>
                    <FadeIn delay={0.2}>
                         <Accordion type="single" collapsible className="w-full">
                            {category.questions.map((faq, qIndex) => (
                                <AccordionItem key={qIndex} value={`item-${catIndex}-${qIndex}`} className="border-border py-4">
                                    <AccordionTrigger className="font-sans text-left text-lg md:text-xl text-foreground hover:text-primary transition-colors data-[state=open]:text-primary font-medium">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-sans text-muted-foreground leading-relaxed text-base md:text-lg mt-2">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </FadeIn>
                </div>
            ))}
        </div>
      </section>

      {/* 4. Still Have Questions? */}
      <section className="py-24 bg-muted text-center px-6">
          <div className="mx-auto max-w-2xl">
              <SlideUp>
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                      {faqContent.cta.heading}
                  </h2>
                  <p className="font-sans text-muted-foreground text-sm md:text-base mb-10">
                      {faqContent.cta.description}
                  </p>
                  <Link
                      href="/contact"
                      className="inline-block border border-primary text-primary px-10 py-5 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                      {faqContent.cta.buttonText}
                  </Link>
              </SlideUp>
          </div>
      </section>
    </div>
  )
}