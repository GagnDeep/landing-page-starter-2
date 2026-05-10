import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { seo, hero, categories, finalCta } from "@/content/faq";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-24 pb-20 overflow-hidden bg-muted/10 border-b border-border/50">
        <AnimatedGradientMesh speed={25} colors={["var(--muted)", "var(--primary)", "transparent"]} className="absolute inset-0 opacity-20" />
        <DotMatrixPattern opacity={0.15} />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Categorized Accordions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-primary/50" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{category.title}</h2>
              </div>
              <Accordion type="single" collapsible className="w-full bg-background rounded-2xl border border-border/50 px-6 shadow-sm">
                {category.items.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${catIdx}-${idx}`} className="border-b-border/50 last:border-0">
                    <AccordionTrigger className="text-left font-medium text-lg hover:text-primary py-6">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
        <DotMatrixPattern opacity={0.2} />
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">{finalCta.title}</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {finalCta.description}
          </p>
          <div className="pt-8">
             <Button size="lg" variant="secondary" asChild className="rounded-full h-14 px-10 text-lg shadow-2xl">
               <Link href={finalCta.cta.href}>{finalCta.cta.label}</Link>
             </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
