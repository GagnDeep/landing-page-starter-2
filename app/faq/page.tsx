import { faqContent } from "@/content/faq";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { FadeIn, RevealText } from "@/components/visuals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
};

export default function FAQPage() {
  const c = faqContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        {/* 1. Header */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6 max-w-3xl">
            <FadeIn direction="up">
              <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6 leading-tight">
                <RevealText text={c.header.title} />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {c.header.subtitle}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 2. Categories & Accordions */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row gap-16">

            {/* Sidebar Jump Links (Desktop) */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <FadeIn direction="right" className="sticky top-32">
                <h3 className="font-heading text-xl font-medium mb-6 uppercase tracking-widest text-muted-foreground">Topics</h3>
                <nav className="flex flex-col gap-4">
                  {c.categories.map((cat, i) => (
                    <Link
                      key={i}
                      href={`#category-${i}`}
                      className="text-lg font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </nav>
              </FadeIn>
            </aside>

            {/* Accordion Content */}
            <div className="flex-1 space-y-24">
              {c.categories.map((cat, i) => (
                <div key={i} id={`category-${i}`} className="scroll-mt-32">
                  <FadeIn direction="up">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium mb-8 pb-4 border-b border-border">
                      {cat.title}
                    </h2>
                  </FadeIn>

                  <FadeIn direction="up" delay={0.1}>
                    <Accordion type="single" collapsible className="w-full">
                      {cat.items.map((item, j) => (
                        <AccordionItem key={j} value={`item-${i}-${j}`} className="border-border">
                          <AccordionTrigger className="text-left font-medium text-xl hover:text-primary hover:no-underline py-6">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 pr-8">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
