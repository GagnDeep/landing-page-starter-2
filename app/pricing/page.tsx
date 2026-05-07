import { pricingContent } from "@/content/pricing";
import { FadeIn, RevealCover, StaggerContainer, StaggerItem, MagneticButton } from "@/components/visuals";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function PricingPage() {
  const { hero, classic, signature, custom, addons, faq } = pricingContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-20">
      {/* 1. Hero */}
      <section className="py-24 bg-card border-b border-border/50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <RevealCover duration={1}>
            <h1 className="text-5xl md:text-7xl font-heading mb-6">{hero.headline}</h1>
          </RevealCover>
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">{hero.subheadline}</p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Tier 1: Classic Cakes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn direction="up">
            <div className="mb-12 border-b border-border pb-6">
              <h2 className="font-heading text-4xl mb-4">{classic.heading}</h2>
              <p className="text-lg text-muted-foreground">{classic.description}</p>
            </div>
          </FadeIn>
          <StaggerContainer className="space-y-6">
            {classic.items.map((item, i) => (
              <StaggerItem key={i} direction="up" className="flex flex-col md:flex-row justify-between items-baseline border-b border-border/30 pb-6 group hover:border-primary/50 transition-colors">
                <div>
                  <h3 className="text-2xl font-heading mb-1">{item.name}</h3>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">Serves {item.serves}</span>
                </div>
                <div className="text-2xl font-medium mt-4 md:mt-0 group-hover:text-primary transition-colors">
                  {item.price}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Tier 2: Signature Creations */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-5xl mb-4">{signature.heading}</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{signature.description}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signature.items.map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} direction="up">
                <div className="bg-zinc-900 border border-zinc-800 p-10 h-full flex flex-col justify-between hover:border-primary/50 transition-colors group">
                  <div>
                    <h3 className="font-heading text-3xl mb-4">{item.name}</h3>
                    <p className="text-zinc-400 mb-8">{item.detail}</p>
                  </div>
                  <div>
                    <span className="text-sm text-zinc-500 uppercase tracking-widest block mb-2">Serves {item.serves}</span>
                    <span className="text-4xl font-medium group-hover:text-primary transition-colors">{item.price}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tier 3: Custom & Wedding */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-5xl md:text-7xl mb-6">{custom.heading}</h2>
            <p className="text-xl text-primary-foreground/90 mb-6 font-light">{custom.description}</p>
            <p className="font-heading text-3xl mb-12">{custom.startingPrice}</p>
            <MagneticButton intensity={0.3}>
              <Button size="lg" className="rounded-none bg-background text-foreground hover:bg-background/90 h-14 px-8 text-lg">
                {custom.cta}
              </Button>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* 5. Add-ons & Gifts */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-4xl mb-12 text-center">{addons.heading}</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {addons.items.map((item, i) => (
              <StaggerItem key={i} direction="up" className="bg-background border border-border p-6 text-center">
                <h3 className="font-heading text-xl mb-4">{item.name}</h3>
                <span className="text-lg text-muted-foreground">{item.price}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. FAQ Mini */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl mb-10 text-center">{faq.heading}</h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg font-medium hover:text-primary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-12 text-center">
              <Link href="/faq">
                <Button variant="link" className="text-primary hover:text-primary/80 text-lg">
                  View Full FAQ &rarr;
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
