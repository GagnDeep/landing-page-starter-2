import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { SITE_IMAGES } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { CakeHeroIllustration } from "@/components/visuals/CakeHeroIllustration";
import { CTAGlowButton } from "@/components/visuals/CTAGlowButton";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { CakeFlavorChart } from "@/components/visuals/CakeFlavorChart";
import { OrderFlowDiagram } from "@/components/visuals/OrderFlowDiagram";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, Tick02Icon, QuoteUpIcon } from "@hugeicons/core-free-icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export default function HomePage() {
  return (
    <>
      <AnimatedGradientMesh variant="hero" />

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left z-10">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight drop-shadow-sm">
                {homeContent.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {homeContent.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                <Link href="/pricing" tabIndex={-1} className="w-full sm:w-auto outline-none block">
                  <CTAGlowButton as="div" className="w-full sm:w-auto flex justify-center">
                    {homeContent.hero.ctaPrimary}
                  </CTAGlowButton>
                </Link>
                <Link href="/features" className="w-full sm:w-auto px-8 py-4 font-heading font-semibold text-primary hover:text-primary/80 transition-colors text-center border-2 border-transparent hover:border-primary/20 rounded-full">
                  {homeContent.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="relative z-10 hidden md:block">
              <CakeHeroIllustration className="w-[120%] max-w-[600px] -ml-10 drop-shadow-2xl text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="border-y border-border/50 bg-background/50 backdrop-blur-sm relative z-10">
        <LogoMarquee
          speed="slow"
          items={homeContent.trustBar.items.map((item, i) => (
            <div key={item.id} className="flex items-center gap-3">
              {i === 0 ? (
                <HugeiconsIcon icon={StarIcon} className="w-6 h-6 fill-primary text-primary" />
              ) : (
                <HugeiconsIcon icon={Tick02Icon} className="w-6 h-6 text-accent" />
              )}
              <span className="font-heading font-semibold text-lg text-foreground whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        />
      </section>

      {/* 4. Themed Gallery Preview */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {homeContent.themedGallery.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {homeContent.themedGallery.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden group shadow-lg">
              <Image src={SITE_IMAGES.gallery.superhero} alt={`${homeContent.themedGallery.themes[0].label} theme cake`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-heading font-semibold text-xl">{homeContent.themedGallery.themes[0].label}</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-lg lg:-translate-y-8">
              <Image src={SITE_IMAGES.gallery.unicorn} alt={`${homeContent.themedGallery.themes[1].label} theme cake`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-heading font-semibold text-xl">{homeContent.themedGallery.themes[1].label}</span>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group shadow-lg">
              <Image src={SITE_IMAGES.gallery.floral} alt={`${homeContent.themedGallery.themes[2].label} theme cake`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-heading font-semibold text-xl">{homeContent.themedGallery.themes[2].label}</span>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden group shadow-lg lg:-translate-y-8">
              <Image src={SITE_IMAGES.gallery.wedding} alt={`${homeContent.themedGallery.themes[3].label} theme cake`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-heading font-semibold text-xl">{homeContent.themedGallery.themes[3].label}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/features" tabIndex={-1} className="outline-none inline-block">
              <CTAGlowButton as="span" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {homeContent.themedGallery.cta}
              </CTAGlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Flavor Spotlight */}
      <section className="py-24 bg-muted/30 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                {homeContent.flavorSpotlight.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                {homeContent.flavorSpotlight.description}
              </p>

              <div className="flex flex-col gap-8">
                {homeContent.flavorSpotlight.flavors.map((flavor) => (
                  <div key={flavor.id} className="flex flex-col gap-2">
                    <h3 className="font-heading font-bold text-2xl text-foreground flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      {flavor.name}
                    </h3>
                    <p className="text-muted-foreground pl-7">{flavor.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <CakeFlavorChart
                flavors={[
                  { id: "layer1", name: homeContent.flavorSpotlight.flavors[2].name, colorClass: "bg-primary" },
                  { id: "layer2", name: homeContent.flavorSpotlight.flavors[1].name, colorClass: "bg-secondary" },
                  { id: "layer3", name: homeContent.flavorSpotlight.flavors[0].name, colorClass: "bg-foreground" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {homeContent.howItWorks.title}
            </h2>
          </div>

          <OrderFlowDiagram labels={[
            homeContent.howItWorks.steps[0].title.split(" ")[0], // "Choose"
            homeContent.howItWorks.steps[1].title.split(" ")[0], // "Select"
            homeContent.howItWorks.steps[2].title.split(" ")[0] // "Pick"
          ]} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {homeContent.howItWorks.steps.map((step) => (
              <div key={step.step} className="text-center px-4">
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Social Proof */}
      <section className="py-24 bg-muted/50 relative z-10 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {homeContent.socialProof.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {homeContent.socialProof.reviews.map((review) => (
              <div key={review.id} className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col gap-6">
                <HugeiconsIcon icon={QuoteUpIcon} className="w-10 h-10 text-primary/40" />
                <p className="text-lg text-foreground font-medium leading-relaxed italic flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-xl">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">{review.author}</p>
                    <div className="flex text-primary">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <HugeiconsIcon key={star} icon={StarIcon} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Last-Minute Rescues */}
      <section className="relative py-32 overflow-hidden z-10 bg-background">
        <FloatingBlobs />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-xl border border-border shadow-2xl rounded-[3rem] p-8 md:p-16 text-center flex flex-col items-center gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-destructive drop-shadow-sm">
              {homeContent.lastMinuteRescues.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {homeContent.lastMinuteRescues.description}
            </p>
            <Link href="/contact" tabIndex={-1} className="outline-none block w-full sm:w-auto mt-4">
              <CTAGlowButton as="div" className="bg-destructive hover:bg-destructive/90 text-white w-full sm:w-auto flex justify-center text-lg py-4 px-10 shadow-lg shadow-destructive/20">
                {homeContent.lastMinuteRescues.cta}
              </CTAGlowButton>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Pricing Teaser & 10. FAQ Preview */}
      <section className="py-24 bg-muted/30 relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Pricing Teaser */}
            <div className="flex flex-col justify-center items-start gap-6 bg-background rounded-[2.5rem] p-10 md:p-12 border border-border shadow-sm">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {homeContent.pricingTeaser.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {homeContent.pricingTeaser.description}
              </p>
              <Link href="/pricing" className="mt-4 font-heading font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-lg group">
                {homeContent.pricingTeaser.cta}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* FAQ Preview */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {homeContent.faqPreview.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {homeContent.faqPreview.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                      <AccordionTrigger className="text-left font-heading font-medium text-lg text-foreground hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <Link href="/faq" className="font-heading font-semibold text-muted-foreground hover:text-primary transition-colors text-lg">
                {homeContent.faqPreview.cta} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="py-32 bg-primary relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557925923-33b2512ea2aa?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col gap-8 items-center">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground drop-shadow-md">
              {homeContent.finalCta.headline}
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium max-w-2xl">
              {homeContent.finalCta.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
              <Link href="/contact" tabIndex={-1} className="w-full sm:w-auto outline-none block">
                <CTAGlowButton as="div" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto flex justify-center text-lg py-5 px-10">
                  {homeContent.finalCta.ctaPrimary}
                </CTAGlowButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
