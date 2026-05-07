import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuresContent } from "@/content/features";
import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { FadeIn } from "@/components/visuals/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger";
import { ScaleHover } from "@/components/visuals/scale-hover";
import { RevealText } from "@/components/visuals/reveal-text";

export const metadata = {
  title: featuresContent.meta.title,
  description: featuresContent.meta.description,
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Shared Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" className="font-heading text-2xl font-semibold tracking-tight text-primary">
            Verma&apos;s
          </Link>
          <div className="hidden md:flex gap-8 font-sans text-sm font-medium">
            {homeContent.navigation.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <Button variant="default" className="font-sans font-medium rounded-none">
            {homeContent.navigation.cta}
          </Button>
        </div>
      </nav>

      {/* 1. Features Hero */}
      <section className="py-32 px-4 md:px-8 bg-muted/20 text-center border-b border-border">
        <FadeIn className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl mb-6">
            <RevealText text={featuresContent.hero.heading} />
          </h1>
          <p className="font-sans text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {featuresContent.hero.subheading}
          </p>
        </FadeIn>
      </section>

      {/* 2. Authentic Recipes */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-4xl mb-6">{featuresContent.authenticRecipes.heading}</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              {featuresContent.authenticRecipes.text}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. Custom Wedding Boxes & 4. Corporate Gifting */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <FadeIn direction="right">
                <ScaleHover>
                  <div className="relative aspect-[4/3] w-full shadow-lg">
                    <Image src={imageRegistry.weddingBox.src} alt={imageRegistry.weddingBox.alt} fill className="object-cover" />
                  </div>
                </ScaleHover>
             </FadeIn>
             <div className="space-y-16">
               <FadeIn direction="left">
                 <h2 className="font-heading text-4xl mb-4">{featuresContent.weddingBoxes.heading}</h2>
                 <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">{featuresContent.weddingBoxes.text}</p>
                 <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground">{featuresContent.weddingBoxes.cta}</Button>
               </FadeIn>
               <FadeIn direction="left" delay={0.2}>
                 <h2 className="font-heading text-4xl mb-4">{featuresContent.corporateGifting.heading}</h2>
                 <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">{featuresContent.corporateGifting.text}</p>
                 <Button variant="link" className="p-0 text-primary">{featuresContent.corporateGifting.cta} →</Button>
               </FadeIn>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Live Counter / Catering */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FadeIn>
                 <h2 className="font-heading text-4xl mb-6">{featuresContent.liveCatering.heading}</h2>
                 <p className="font-sans text-lg leading-relaxed font-light opacity-90">{featuresContent.liveCatering.text}</p>
              </FadeIn>
            </div>
            <FadeIn direction="up" className="w-full md:w-1/2 relative aspect-video shadow-2xl border-4 border-primary-foreground/20">
               <Image src={imageRegistry.cateringEvent.src} alt={imageRegistry.cateringEvent.alt} fill className="object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. Custom Cake Design */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <FadeIn direction="left" className="w-full md:w-1/2">
                 <div className="relative aspect-[3/4] w-full shadow-lg">
                    <Image src={imageRegistry.customCake.src} alt={imageRegistry.customCake.alt} fill className="object-cover" />
                 </div>
              </FadeIn>
              <div className="w-full md:w-1/2">
                <FadeIn direction="right">
                   <h2 className="font-heading text-4xl mb-6">{featuresContent.customCakes.heading}</h2>
                   <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">{featuresContent.customCakes.text}</p>
                   <Button className="rounded-none bg-primary text-primary-foreground h-12 px-8">{featuresContent.customCakes.cta}</Button>
                </FadeIn>
              </div>
           </div>
        </div>
      </section>

      {/* Services Grid (6, 7, 8, 10, 11) */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-8">
           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                featuresContent.dietConscious,
                featuresContent.sameDayDelivery,
                featuresContent.nationwideShipping,
                featuresContent.festivePreOrders,
                featuresContent.bulkDiscounts,
                featuresContent.tastingExperience
              ].map((feature, i) => (
                <StaggerItem key={i} className="bg-background p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-2xl mb-4 text-primary">{feature.heading}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">{feature.text}</p>
                </StaggerItem>
              ))}
           </StaggerContainer>
        </div>
      </section>

      {/* 13. Packaging Options & 14. Quality & 15. Allergens */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
             <FadeIn direction="up">
                <h3 className="font-heading text-3xl mb-4">{featuresContent.premiumPackaging.heading}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{featuresContent.premiumPackaging.text}</p>
             </FadeIn>
             <FadeIn direction="up" delay={0.2}>
                <h3 className="font-heading text-3xl mb-4">{featuresContent.qualityControl.heading}</h3>
                <p className="font-sans text-muted-foreground leading-relaxed">{featuresContent.qualityControl.text}</p>
             </FadeIn>
             <FadeIn direction="up" delay={0.4} className="bg-secondary p-8 text-secondary-foreground">
                <h3 className="font-heading text-3xl mb-4">{featuresContent.allergenMatrix.heading}</h3>
                <p className="font-sans mb-6 opacity-90 leading-relaxed">{featuresContent.allergenMatrix.text}</p>
                <Button variant="outline" className="rounded-none border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">{featuresContent.allergenMatrix.cta}</Button>
             </FadeIn>
           </div>
        </div>
      </section>

      {/* 16. Portal & 17. Loyalty & 18. Interactive Selector */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <FadeIn>
                 <h2 className="font-heading text-3xl mb-4">{featuresContent.customerPortal.heading}</h2>
                 <p className="font-sans text-muted-foreground leading-relaxed mb-10">{featuresContent.customerPortal.text}</p>
                 <h2 className="font-heading text-3xl mb-4">{featuresContent.loyaltyProgram.heading}</h2>
                 <p className="font-sans text-muted-foreground leading-relaxed">{featuresContent.loyaltyProgram.text}</p>
              </FadeIn>
              <FadeIn delay={0.2} className="bg-background border border-border p-10 text-center flex flex-col justify-center items-center">
                 <h2 className="font-heading text-3xl mb-4">{featuresContent.interactiveSelector.heading}</h2>
                 <p className="font-sans text-muted-foreground leading-relaxed mb-8">{featuresContent.interactiveSelector.text}</p>
                 <Button className="rounded-none w-full max-w-xs">{featuresContent.interactiveSelector.cta}</Button>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* 19. FAQ & 20. CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
           <FadeIn>
              <h2 className="font-heading text-3xl mb-4">{featuresContent.faqServices.heading}</h2>
              <p className="font-sans text-muted-foreground mb-6">{featuresContent.faqServices.text}</p>
              <Button variant="link" className="text-primary mb-16">{featuresContent.faqServices.cta} →</Button>

              <div className="h-px w-full bg-border mb-16" />

              <h2 className="font-heading text-4xl mb-6">{featuresContent.startOrderCta.heading}</h2>
              <p className="font-sans text-xl text-muted-foreground mb-8">{featuresContent.startOrderCta.text}</p>
              <Button size="lg" className="rounded-none h-14 px-10 text-lg">{featuresContent.startOrderCta.cta}</Button>
           </FadeIn>
        </div>
      </section>

      {/* 21. Standard Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="border-t border-background/20 pt-8 text-center font-sans text-xs text-background/50">
            {homeContent.footer.copyright}
          </div>
        </div>
      </footer>
    </main>
  );
}
