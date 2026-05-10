import Link from "next/link";
import { faqContent } from "@/content/faq";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AnimatedGradientMesh,
  FloatingBlobs
} from "@/components/visuals";

export const metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
};

export default function FaqPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center border-b border-border text-center overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-20" fallbackColor="bg-muted/10" />
        <div className="container relative z-10 px-4 md:px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight text-foreground mb-6">
            {faqContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans">
            {faqContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2 & 3. Category Navigation and Accordions */}
      <section className="py-24 relative bg-card">
        <FloatingBlobs className="opacity-30" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 hidden md:block">
              <nav className="flex flex-col gap-2">
                <h4 className="font-sans font-semibold tracking-wider uppercase text-foreground mb-4 text-sm">
                  Categories
                </h4>
                {faqContent.categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="text-lg font-heading text-muted-foreground hover:text-primary transition-colors py-2 border-l-2 border-transparent hover:border-primary pl-4"
                  >
                    {cat.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-8 flex flex-col gap-20">
              {faqContent.sections.map((section) => (
                <div key={section.categoryId} id={section.categoryId} className="scroll-mt-32">
                  <h2 className="text-3xl font-heading text-foreground mb-8 border-b border-border pb-4">
                    {section.title}
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {section.faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`${section.categoryId}-${idx}`} className="border-border">
                        <AccordionTrigger className="font-sans font-medium text-lg text-left hover:text-primary leading-snug">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground font-sans leading-relaxed text-base pt-2 pb-6">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Still have questions? */}
      <section className="py-24 bg-foreground text-background text-center border-t border-border">
        <div className="container px-4 md:px-6 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-heading font-medium">
            {faqContent.closing.title}
          </h2>
          <p className="text-background/80 font-sans text-lg mb-4">
            {faqContent.closing.description}
          </p>
          <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 text-base">
            <Link href="/contact">{faqContent.closing.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
