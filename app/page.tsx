import { homeContent } from "@/content/home";
import { images } from "@/lib/images";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { HowItWorksDiagram } from "@/components/visuals/HowItWorksDiagram";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export const metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-6">
        <AnimatedGradientMesh className="absolute inset-0 z-0" />
        <DotMatrixGrid className="absolute inset-0 z-0 opacity-40 mix-blend-overlay" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-tight">
            {homeContent.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            {homeContent.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <CTAGlow>
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                {homeContent.hero.ctaPrimary}
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-5 h-5" />
              </Link>
            </CTAGlow>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-transparent border-2 border-foreground text-foreground rounded-full text-base font-medium hover:bg-foreground hover:text-background transition-all"
            >
              {homeContent.hero.ctaSecondary}
            </Link>
          </div>
        </div>
        <FloatingBlobs className="z-0" />
      </section>

      {/* 2. Brand Ethos / Intro */}
      <section className="py-24 md:py-32 px-6 bg-background relative z-10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 text-foreground">
            {homeContent.ethos.headline}
          </h2>
          <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-light">
            {homeContent.ethos.body}
          </p>
        </div>
      </section>

      <SectionDivider width="150px" />

      {/* Featured Services (3, 4, 5) */}
      <section className="py-24 md:py-32 bg-background relative z-10">
        <div className="container mx-auto px-6 space-y-32">

          {/* 3. Weddings */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedHeroIllustration
              imageSrc={images.services.weddings}
              alt={homeContent.services.weddings.title}
              className="aspect-[4/5] md:aspect-square"
            />
            <div className="flex flex-col items-start max-w-lg">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Service</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {homeContent.services.weddings.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {homeContent.services.weddings.description}
              </p>
              <Link href="/features#wedding" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                {homeContent.services.weddings.link}
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4. Corporate */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start max-w-lg order-2 md:order-1 md:ml-auto">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Service</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {homeContent.services.corporate.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {homeContent.services.corporate.description}
              </p>
              <Link href="/features#corporate" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                {homeContent.services.corporate.link}
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4" />
              </Link>
            </div>
            <AnimatedHeroIllustration
              imageSrc={images.services.corporate}
              alt={homeContent.services.corporate.title}
              className="aspect-[4/5] md:aspect-square order-1 md:order-2"
            />
          </div>

          {/* 5. Intimate Gatherings */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedHeroIllustration
              imageSrc={images.services.bespoke}
              alt={homeContent.services.intimate.title}
              className="aspect-[4/5] md:aspect-square"
            />
            <div className="flex flex-col items-start max-w-lg">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Service</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
                {homeContent.services.intimate.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {homeContent.services.intimate.description}
              </p>
              <Link href="/features#bespoke" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                {homeContent.services.intimate.link}
                <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. The Culinary Experience Intro */}
      <section className="py-24 bg-secondary/30 relative">
        <DotMatrixGrid className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10 mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            {homeContent.highlights.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {homeContent.highlights.description}
          </p>
        </div>

        {/* 7, 8, 9. Menu Highlights Grid */}
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image src={images.food.starters} alt={homeContent.highlights.starters} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <h3 className="text-white font-heading text-2xl font-bold">{homeContent.highlights.starters}</h3>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] md:translate-y-12">
              <Image src={images.food.mains} alt={homeContent.highlights.mains} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <h3 className="text-white font-heading text-2xl font-bold">{homeContent.highlights.mains}</h3>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image src={images.food.desserts} alt={homeContent.highlights.desserts} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <h3 className="text-white font-heading text-2xl font-bold">{homeContent.highlights.desserts}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-8 block">
            {homeContent.testimonials.title}
          </span>
          <div className="relative overflow-hidden w-full flex snap-x snap-mandatory overflow-x-auto pb-8 hide-scrollbar">
            {homeContent.testimonials.quotes.map((quote, idx) => (
              <div key={idx} className="min-w-full snap-center px-4">
                <blockquote className="font-heading text-3xl md:text-5xl leading-tight text-foreground mb-8">
                  &quot;{quote.text}&quot;
                </blockquote>
                <cite className="text-lg text-muted-foreground font-medium not-italic">
                  — {quote.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Statistics & Scale */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
            <div className="pt-8 md:pt-0">
              <p className="text-5xl md:text-7xl font-heading font-bold mb-4">{homeContent.stats.years.value}</p>
              <p className="text-lg opacity-90">{homeContent.stats.years.label}</p>
            </div>
            <div className="pt-8 md:pt-0">
              <p className="text-5xl md:text-7xl font-heading font-bold mb-4">{homeContent.stats.events.value}</p>
              <p className="text-lg opacity-90">{homeContent.stats.events.label}</p>
            </div>
            <div className="pt-8 md:pt-0">
              <p className="text-5xl md:text-7xl font-heading font-bold mb-4">{homeContent.stats.guests.value}</p>
              <p className="text-lg opacity-90">{homeContent.stats.guests.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. The Team/Chefs (Teaser) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl font-bold mb-16">{homeContent.team.title}</h2>
          <div className="flex justify-center -space-x-8">
             <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden relative z-10 shadow-xl">
               <Image src={images.team.chef1} alt={homeContent.team.roles[0]} fill sizes="128px" className="object-cover" />
             </div>
             <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden relative z-20 shadow-xl scale-110">
               <Image src={images.team.chef2} alt={homeContent.team.roles[1]} fill sizes="128px" className="object-cover" />
             </div>
             <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden relative z-10 shadow-xl">
               <Image src={images.team.chef3} alt={homeContent.team.roles[2]} fill sizes="128px" className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* 13. Venue Partnerships (Marquee) */}
      <section className="py-16 border-y border-border overflow-hidden bg-secondary/10">
        <div className="container mx-auto px-6 text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{homeContent.partnerships.title}</p>
        </div>
        <LogoMarquee
          speed={30}
          items={homeContent.partnerships.venues.map((venue, idx) => (
            <div key={idx} className="text-2xl font-heading font-bold text-foreground/40">{venue}</div>
          ))}
        />
      </section>

      {/* 14. Process */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">{homeContent.process.title}</h2>
          </div>
          <HowItWorksDiagram steps={homeContent.process.steps} />
        </div>
      </section>

      {/* 15. Gallery Teaser */}
      <section className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="relative aspect-square"><Image src={images.gallery.g1} alt={homeContent.gallery.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" /></div>
          <div className="relative aspect-square"><Image src={images.gallery.g2} alt={homeContent.gallery.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" /></div>
          <div className="relative aspect-square"><Image src={images.gallery.g3} alt={homeContent.gallery.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" /></div>
          <div className="relative aspect-square"><Image src={images.gallery.g4} alt={homeContent.gallery.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" /></div>
        </div>
      </section>

      {/* 16. FAQ & 17. Blog Teaser */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
             <h2 className="font-heading text-3xl font-bold mb-8">{homeContent.faq.title}</h2>
             <div className="space-y-6">
               <div className="p-6 bg-background rounded-xl shadow-sm border border-border/50">
                 <h4 className="font-bold mb-2">{homeContent.faq.preview.q}</h4>
                 <p className="text-muted-foreground text-sm">{homeContent.faq.preview.a}</p>
               </div>
               <Link href="/faq" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                  {homeContent.faq.link}
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4" />
                </Link>
             </div>
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-8">{homeContent.journal.title}</h2>
             <div className="space-y-6">
               <div className="group flex gap-6 items-center">
                 <div className="w-24 h-24 rounded-lg bg-muted relative overflow-hidden shrink-0">
                    <Image src={images.gallery.g5} alt={homeContent.journal.preview.title} fill sizes="96px" className="object-cover" />
                 </div>
                 <div>
                   <p className="text-xs text-primary font-semibold mb-1">{homeContent.journal.preview.category}</p>
                   <h4 className="font-bold group-hover:text-primary transition-colors">{homeContent.journal.preview.title}</h4>
                 </div>
               </div>
               <Link href="/blog" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                  {homeContent.journal.link}
                  <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-4 h-4" />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* 18. Awards */}
      <section className="py-16 bg-background text-center">
         <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">{homeContent.awards.title}</p>
         <div className="flex flex-wrap justify-center gap-4 md:gap-12 text-foreground/40 font-heading text-xl">
           {homeContent.awards.items.map((item, idx) => (
             <React.Fragment key={idx}>
               <span>{item}</span>
               {idx < homeContent.awards.items.length - 1 && <span className="hidden md:inline">|</span>}
             </React.Fragment>
           ))}
         </div>
      </section>

      {/* 19. Final CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-background">
            {homeContent.cta.headline}
          </h2>
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-10">
            {homeContent.cta.body}
          </p>
          <CTAGlow>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all inline-block"
            >
              {homeContent.cta.button}
            </Link>
          </CTAGlow>
        </div>
      </section>

    </div>
  );
}
