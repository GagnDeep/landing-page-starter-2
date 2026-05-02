import { pricingContent } from "@/content/pricing";
import Link from "next/link";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";

export const metadata = pricingContent.meta;

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-24 bg-background border-b border-border text-center">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading text-foreground mb-6">{pricingContent.hero.title}</h1>
          <p className="text-xl text-muted-foreground font-serif">{pricingContent.hero.subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-24 max-w-4xl grid gap-24">

        {/* Starting Prices */}
        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">{pricingContent.startingPrices.heading}</h2>
          <p className="text-muted-foreground mb-12">{pricingContent.startingPrices.description}</p>
          <ul className="space-y-6">
            {pricingContent.startingPrices.items.map((item, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row justify-between items-baseline border-b border-border/50 pb-4">
                <span className="text-lg font-medium">{item.item}</span>
                <span className="text-primary font-mono">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Fabric Tiers */}
        <section className="bg-card p-8 md:p-12 rounded-lg border border-border">
          <h2 className="text-2xl font-heading text-primary mb-4">{pricingContent.fabricTiers.heading}</h2>
          <p className="text-muted-foreground mb-12">{pricingContent.fabricTiers.description}</p>
          <div className="grid gap-8">
            {pricingContent.fabricTiers.tiers.map((tier, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-primary font-mono text-xl pt-1 opacity-50">0{idx + 1}</div>
                <div>
                  <h3 className="font-heading text-xl mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alterations Menu */}
        <section>
          <h2 className="text-2xl font-heading text-primary mb-8">{pricingContent.alterationsMenu.heading}</h2>
          <ul className="space-y-4">
            {pricingContent.alterationsMenu.items.map((item, idx) => (
               <li key={idx} className="flex justify-between text-sm items-center">
                  <span className="text-muted-foreground">{item.service}</span>
                  <div className="flex-grow mx-4 border-t border-dotted border-border/50"></div>
                  <span className="font-mono">{item.price}</span>
               </li>
            ))}
          </ul>
        </section>

      </div>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading mb-6 text-primary">{pricingContent.cta.heading}</h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">{pricingContent.cta.text}</p>
          <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm inline-block hover:bg-primary/90 transition-colors">
            {pricingContent.cta.button}
          </Link>
        </div>
      </section>

    </div>
  );
}
