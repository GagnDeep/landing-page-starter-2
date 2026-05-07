import { faqContent } from "@/content/faq";
import {
  FadeIn,
  AnimatedText,
  SmoothAccordion,
  ScrollReveal,
} from "@/components/visuals";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-32 pb-32">
      {/* 1. FAQ Hero */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center min-h-[40vh] flex flex-col justify-center items-center">
        <AnimatedText
          el="h1"
          text={faqContent.hero.headline}
          className="text-5xl md:text-7xl font-heading text-foreground mb-6"
        />
        <FadeIn delay={0.4}>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            {faqContent.hero.subheadline}
          </p>
        </FadeIn>
      </section>

      {/* 2. Category Anchors (Sticky Navigation Placeholder) */}
      <div className="sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border mb-16">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center space-x-6 overflow-x-auto no-scrollbar">
          {faqContent.categories.map((cat, i) => (
            <a
              key={i}
              href={`#cat-${i}`}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-32">
        {/* 3. Accordion Section 1: The Process */}
        <section id="cat-0" className="scroll-mt-40">
          <ScrollReveal>
            <h2 className="text-2xl tracking-widest uppercase border-b border-border pb-4 mb-8 text-foreground">
              {faqContent.process.heading}
            </h2>
          </ScrollReveal>
          <FadeIn direction="up">
            <SmoothAccordion items={faqContent.process.questions} />
          </FadeIn>
        </section>

        {/* 4. Accordion Section 2: Destinations & Travel */}
        <section id="cat-1" className="scroll-mt-40">
          <ScrollReveal>
            <h2 className="text-2xl tracking-widest uppercase border-b border-border pb-4 mb-8 text-foreground">
              {faqContent.destinations.heading}
            </h2>
          </ScrollReveal>
          <FadeIn direction="up">
            <SmoothAccordion items={faqContent.destinations.questions} />
          </FadeIn>
        </section>

        {/* 5. Accordion Section 3: Investment */}
        <section id="cat-2" className="scroll-mt-40">
          <ScrollReveal>
            <h2 className="text-2xl tracking-widest uppercase border-b border-border pb-4 mb-8 text-foreground">
              {faqContent.investment.heading}
            </h2>
          </ScrollReveal>
          <FadeIn direction="up">
            <SmoothAccordion items={faqContent.investment.questions} />
          </FadeIn>
        </section>
      </div>

      {/* 6. Still Have Questions? */}
      <section className="py-40 px-6 text-center mt-20 border-t border-border">
        <FadeIn className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading mb-6 text-foreground">{faqContent.finalCta.heading}</h2>
          <p className="text-lg text-muted-foreground mb-10">{faqContent.finalCta.subheading}</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 text-foreground border-b border-foreground pb-1 hover:text-muted-foreground transition-all uppercase tracking-widest text-sm"
          >
            <span>{faqContent.finalCta.ctaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
