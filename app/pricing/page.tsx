import { pricingContent } from "@/content/pricing";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { FadeIn, RevealText, StaggerContainer, StaggerItem, MagneticButton } from "@/components/visuals";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
  const c = pricingContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        {/* 1. Hero */}
        <section className="py-16 text-center border-b border-border">
          <div className="container mx-auto px-6 max-w-3xl">
            <FadeIn direction="up">
              <h1 className="font-heading text-5xl md:text-6xl font-medium mb-6 leading-tight">
                <RevealText text={c.hero.title} />
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed italic font-heading">
                {c.hero.subtitle}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 2. Pricing Cards */}
        <section className="py-32 bg-secondary/10">
          <div className="container mx-auto px-6">
            <FadeIn direction="up" className="text-center mb-16">
               <h2 className="font-heading text-4xl font-medium">{c.packages.title}</h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto items-stretch">
              {c.packages.items.map((pkg, i) => (
                <StaggerItem key={i} className="flex h-full">
                  <div className={`flex flex-col h-full w-full bg-background border p-10 md:p-12 transition-colors ${pkg.isPopular ? "border-primary shadow-xl scale-100 md:scale-105 z-10" : "border-border hover:border-primary/50"}`}>
                    {pkg.isPopular && (
                      <span className="text-xs uppercase tracking-widest text-primary font-bold mb-4 block">Most Popular</span>
                    )}
                    <h3 className="font-heading text-3xl font-medium mb-4">{pkg.name}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-8">{pkg.description}</p>

                    <div className="mb-10 pb-10 border-b border-border">
                      <span className="text-2xl font-medium font-heading">{pkg.price}</span>
                    </div>

                    <ul className="space-y-4 mb-12">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-4">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="mt-auto w-full">
                      <MagneticButton className={`w-full py-4 text-sm tracking-widest uppercase font-semibold ${pkg.isPopular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"}`}>
                        Inquire Now
                      </MagneticButton>
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 3. Add-ons */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <FadeIn direction="up" className="mb-16">
              <h2 className="font-heading text-4xl font-medium border-b border-border pb-6">{c.addons.title}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {c.addons.items.map((addon, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                  <div className="group">
                    <h3 className="font-heading text-2xl font-medium mb-3 group-hover:text-primary transition-colors">{addon.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{addon.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FAQ Teaser */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6">
            <FadeIn direction="up">
              <p className="font-heading text-3xl md:text-4xl font-medium mb-8 leading-relaxed">
                {c.faqTeaser.text}
              </p>
              <Link href={c.faqTeaser.ctaLink}>
                <MagneticButton className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-medium">
                  {c.faqTeaser.ctaText}
                </MagneticButton>
              </Link>
            </FadeIn>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
