import Link from "next/link";
import { Button } from "@/components/ui/button";
import { pricingContent } from "@/content/pricing";
import { homeContent } from "@/content/home";
import { FadeIn } from "@/components/visuals/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger";
import { RevealText } from "@/components/visuals/reveal-text";

export const metadata = {
  title: pricingContent.meta.title,
  description: pricingContent.meta.description,
};

export default function PricingPage() {
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

      {/* 1. Pricing Hero */}
      <section className="py-24 px-4 md:px-8 bg-muted/20 text-center border-b border-border">
        <FadeIn className="max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-6xl mb-6">
            <RevealText text={pricingContent.hero.heading} />
          </h1>
          <p className="font-sans text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            {pricingContent.hero.subheading}
          </p>
        </FadeIn>
      </section>

      {/* 2. Category Tabs/Filter (Static layout per instructions) */}
      <section className="py-8 border-b border-border sticky top-20 z-40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center min-w-max gap-8 font-sans text-sm font-medium">
            {pricingContent.categoryTabs.map((tab, i) => (
              <span key={i} className="cursor-pointer hover:text-primary transition-colors text-muted-foreground">{tab}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-24 space-y-32">
        {/* Core Menu Grids (3, 4, 5, 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 3. Traditional Sweets */}
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl mb-2 text-primary">{pricingContent.traditionalSweets.heading}</h2>
            <p className="font-sans text-muted-foreground mb-8 text-sm">{pricingContent.traditionalSweets.description}</p>
            <StaggerContainer className="space-y-4">
              {pricingContent.traditionalSweets.items.map((item, i) => (
                <StaggerItem key={i} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-sans">{item.name}</span>
                  <span className="font-sans font-medium">{item.price}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* 4. Premium Sweets */}
          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-heading text-3xl mb-2 text-primary">{pricingContent.premiumSweets.heading}</h2>
            <p className="font-sans text-muted-foreground mb-8 text-sm">{pricingContent.premiumSweets.description}</p>
            <StaggerContainer className="space-y-4">
              {pricingContent.premiumSweets.items.map((item, i) => (
                <StaggerItem key={i} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-sans">{item.name}</span>
                  <span className="font-sans font-medium">{item.price}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* 5. Bakery Classics */}
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl mb-2 text-primary">{pricingContent.bakeryClassics.heading}</h2>
            <p className="font-sans text-muted-foreground mb-8 text-sm">{pricingContent.bakeryClassics.description}</p>
            <StaggerContainer className="space-y-4">
              {pricingContent.bakeryClassics.items.map((item, i) => (
                <StaggerItem key={i} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-sans">{item.name}</span>
                  <span className="font-sans font-medium">{item.price}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* 6. Namkeen & Savories */}
          <FadeIn direction="up" delay={0.1}>
            <h2 className="font-heading text-3xl mb-2 text-primary">{pricingContent.namkeen.heading}</h2>
            <p className="font-sans text-muted-foreground mb-8 text-sm">{pricingContent.namkeen.description}</p>
            <StaggerContainer className="space-y-4">
              {pricingContent.namkeen.items.map((item, i) => (
                <StaggerItem key={i} className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-sans">{item.name}</span>
                  <span className="font-sans font-medium">{item.price}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>

        {/* Specialized Services (7, 8, 9, 10) */}
        <div className="space-y-16">
          {/* 7. Wedding Box Packages */}
          <FadeIn>
            <h2 className="font-heading text-4xl mb-4 text-center">{pricingContent.weddingPackages.heading}</h2>
            <p className="font-sans text-center text-muted-foreground mb-12">{pricingContent.weddingPackages.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingContent.weddingPackages.tiers.map((tier, i) => (
                <div key={i} className="bg-card border border-border p-8 text-center flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-2xl mb-2 text-primary">{tier.name}</h3>
                  <p className="font-sans text-xl font-medium mb-6 pb-6 border-b border-border">{tier.price}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="font-sans text-sm text-muted-foreground">{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 8. Corporate */}
            <FadeIn className="bg-muted/30 p-8 border border-border text-center">
              <h3 className="font-heading text-2xl mb-2">{pricingContent.corporateTiers.heading}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">{pricingContent.corporateTiers.description}</p>
              <Button variant="outline" className="w-full rounded-none">{pricingContent.corporateTiers.cta}</Button>
            </FadeIn>

            {/* 9. Custom Cake Base */}
            <FadeIn delay={0.1} className="bg-muted/30 p-8 border border-border">
              <h3 className="font-heading text-2xl mb-2">{pricingContent.customCakeBase.heading}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">{pricingContent.customCakeBase.description}</p>
              <ul className="space-y-2">
                {pricingContent.customCakeBase.items.map((item, i) => (
                  <li key={i} className="flex justify-between font-sans text-sm">
                    <span>{item.name}</span>
                    <span className="font-medium text-primary">{item.price}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* 10. Live Catering */}
            <FadeIn delay={0.2} className="bg-muted/30 p-8 border border-border text-center">
              <h3 className="font-heading text-2xl mb-2">{pricingContent.liveCatering.heading}</h3>
              <p className="font-sans text-sm text-muted-foreground mb-6">{pricingContent.liveCatering.description}</p>
              <p className="font-sans font-medium text-primary mb-6">{pricingContent.liveCatering.price}</p>
              <Button variant="outline" className="w-full rounded-none">{pricingContent.liveCatering.cta}</Button>
            </FadeIn>
          </div>
        </div>

        {/* Detailed Logistics & Info (11 - 17) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-border pt-24">
           {/* 11. Bulk Discounts */}
           <FadeIn>
             <h3 className="font-heading text-2xl mb-6">{pricingContent.bulkDiscount.heading}</h3>
             <p className="font-sans text-muted-foreground mb-4">{pricingContent.bulkDiscount.description}</p>
             <table className="w-full text-left font-sans border-collapse">
               <tbody>
                 {pricingContent.bulkDiscount.table.map((row, i) => (
                   <tr key={i} className="border-b border-border/50">
                     <td className="py-3">{row.weight}</td>
                     <td className="py-3 text-right font-medium text-primary">{row.discount}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </FadeIn>

           <div className="space-y-10">
             {/* 12, 13, 14. Logistics */}
             <FadeIn>
               <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-2 text-primary">{pricingContent.shippingCosts.heading}</h4>
               <p className="font-sans text-sm text-muted-foreground mb-2"><span className="font-medium text-foreground">Local:</span> {pricingContent.shippingCosts.local}</p>
               <p className="font-sans text-sm text-muted-foreground"><span className="font-medium text-foreground">National:</span> {pricingContent.shippingCosts.national}</p>
             </FadeIn>
             <FadeIn>
               <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-2 text-primary">{pricingContent.packagingUpcharge.heading}</h4>
               <p className="font-sans text-sm text-muted-foreground">{pricingContent.packagingUpcharge.text}</p>
             </FadeIn>
             <FadeIn>
               <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-2 text-primary">{pricingContent.seasonalSurcharge.heading}</h4>
               <p className="font-sans text-sm text-muted-foreground">{pricingContent.seasonalSurcharge.text}</p>
             </FadeIn>
             {/* 15, 16, 17. Legal/Payment */}
             <FadeIn>
               <h4 className="font-sans font-bold text-sm tracking-widest uppercase mb-2 text-primary">Terms & Payment</h4>
               <p className="font-sans text-xs text-muted-foreground mb-2">{pricingContent.taxesDisclaimer.text}</p>
               <p className="font-sans text-xs text-muted-foreground mb-2">{pricingContent.paymentMethods.text}</p>
               <p className="font-sans text-xs text-muted-foreground">{pricingContent.refundPolicy.text}</p>
             </FadeIn>
           </div>
        </div>

        {/* Footer CTAs (18, 19, 20) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          <FadeIn className="bg-primary/5 p-8 text-center border border-primary/10">
            <h3 className="font-heading text-xl mb-4">{pricingContent.downloadMenu.heading}</h3>
            <Button variant="link" className="text-primary">{pricingContent.downloadMenu.cta} ⤓</Button>
          </FadeIn>
          <FadeIn delay={0.1} className="bg-primary text-primary-foreground p-8 text-center">
            <h3 className="font-heading text-xl mb-2">{pricingContent.customQuote.heading}</h3>
            <p className="font-sans text-sm text-primary-foreground/80 mb-6">{pricingContent.customQuote.text}</p>
            <Button variant="outline" className="rounded-none border-background text-background hover:bg-background hover:text-foreground">{pricingContent.customQuote.cta}</Button>
          </FadeIn>
          <FadeIn delay={0.2} className="bg-muted/30 p-8 text-center border border-border">
            <h3 className="font-heading text-xl mb-2">{pricingContent.faqPricing.heading}</h3>
            <p className="font-sans text-sm text-muted-foreground mb-6">{pricingContent.faqPricing.text}</p>
            <Button variant="link" className="text-primary">{pricingContent.faqPricing.cta} →</Button>
          </FadeIn>
        </div>
      </div>

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
