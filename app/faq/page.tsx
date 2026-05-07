import { faqContent } from "@/content/faq";
import { FadeIn, RevealCover, StaggerContainer, StaggerItem, MagneticButton } from "@/components/visuals";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function FAQPage() {
  const { hero, search, categories, list, contactCta } = faqContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-20">
      {/* 1. Hero */}
      <section className="py-24 bg-card border-b border-border/50 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <RevealCover duration={1}>
            <h1 className="text-5xl md:text-7xl font-heading mb-6">{hero.headline}</h1>
          </RevealCover>
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">{hero.subheadline}</p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Search */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn direction="up">
            <div className="relative">
              <HugeiconsIcon icon={Search01Icon} strokeWidth={2} className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <input
                type="text"
                placeholder={search.placeholder}
                className="w-full h-20 pl-16 pr-6 text-xl bg-muted border border-border rounded-full focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Categories */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <StaggerContainer className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <StaggerItem key={i} direction="up">
                <Button variant="outline" className="rounded-full px-6 border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                  {cat}
                </Button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Accordion Lists */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl space-y-24">
          {list.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <FadeIn direction="up">
                <h2 className="font-heading text-4xl mb-10 text-primary">{section.category}</h2>
              </FadeIn>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, itemIdx) => (
                  <AccordionItem key={itemIdx} value={`item-${sectionIdx}-${itemIdx}`}>
                    <AccordionTrigger className="text-xl font-medium hover:text-primary py-6 text-left">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="py-32 bg-muted text-center border-t border-border/50">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl mb-4">{contactCta.heading}</h2>
            <p className="text-lg text-muted-foreground mb-10">{contactCta.body}</p>
            <MagneticButton intensity={0.3}>
              <Link href="/contact">
                <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg">
                  {contactCta.cta}
                </Button>
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
