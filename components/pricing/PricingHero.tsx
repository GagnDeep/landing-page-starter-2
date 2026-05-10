import { pricingContent } from "@/content/pricing";

export function PricingHero() {
  const { hero, philosophy } = pricingContent;

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          {hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
          {hero.subheadline}
        </p>
        <div className="p-8 md:p-12 bg-muted/30 rounded-[2rem] border border-border/50 text-left md:text-center shadow-inner">
          <p className="text-lg leading-relaxed text-foreground/80 font-medium">
            &quot;{philosophy.body}&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
