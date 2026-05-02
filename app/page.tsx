import React from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { globalContent } from "@/content/global";
import { faqContent } from "@/content/faq";
import { images } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { HowItWorksDiagram } from "@/components/visuals/HowItWorksDiagram";
import { AvatarStack } from "@/components/visuals/AvatarStack";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <>
      {/* 1. Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        {homeContent.announcementBar.message}
      </div>

      {/* 3. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        <AnimatedGradientMesh intensity="light" />
        <DotMatrixGrid spacing={40} className="opacity-50" />
        <div className="container relative z-10 px-4 py-32 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <AnimatedHeroIllustration className="mb-8" />
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl">
            {homeContent.hero.headline}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl font-light">
            {homeContent.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer">
              <CTAGlow>{homeContent.hero.primaryCta}</CTAGlow>
            </a>
            <Link href="/about" className="px-8 py-3 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {homeContent.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Trust Bar */}
      <LogoMarquee
        items={[homeContent.trustBar.rating, homeContent.trustBar.heritage, homeContent.trustBar.trusted]}
        className="border-y border-border/50"
      />

      {/* 5. Signature Services (Grid) */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">{homeContent.services.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.services.items.map((service, idx) => (
              <div key={idx} className="group relative bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading text-xl font-bold mb-4 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground relative z-10">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Purba Difference */}
      <section className="py-24 relative overflow-hidden">
        <FloatingBlobs variant="accent" className="opacity-20 absolute inset-0 -z-10" />
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="font-heading text-4xl font-bold">{homeContent.valueProposition.headline}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{homeContent.valueProposition.description}</p>
              <Link href="/about" className="inline-block text-primary font-medium hover:underline underline-offset-4">Read our story &rarr;</Link>
            </div>
            <div className="flex-1 relative aspect-square w-full max-w-md rounded-2xl overflow-hidden shadow-editorial">
              <Image src={images.tailoringProcess.src} alt={images.tailoringProcess.alt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Fabric Collections */}
      <section className="py-24 bg-foreground text-background">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16">{homeContent.featuredFabrics.headline}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.featuredFabrics.items.map((fabric, idx) => (
              <div key={idx} className="border border-background/20 p-8 rounded-xl text-left hover:bg-background/5 transition-colors">
                <span className="text-xs uppercase tracking-widest text-muted">{fabric.composition}</span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-4 text-background">{fabric.name}</h3>
                <p className="text-muted/80">{fabric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WhatsApp Ordering Process */}
      <section className="py-24 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-24">{homeContent.howItWorks.headline}</h2>
          <div className="relative mb-24 hidden md:block">
             <HowItWorksDiagram activeStep={3} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {homeContent.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="space-y-4">
                <div className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold font-heading mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Customer Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8">{homeContent.testimonials.headline}</h2>
          <div className="flex justify-center mb-12">
            <AvatarStack />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {homeContent.testimonials.reviews.map((review, idx) => (
              <div key={idx} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <p className="text-lg text-foreground italic mb-6">"{review.quote}"</p>
                <p className="font-semibold text-sm text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Bespoke Gallery & 11. Video/Process (Combined representation via images) */}
      <section className="py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden hidden md:block"><Image src={images.kurtaDetail.src} alt={images.kurtaDetail.alt} fill className="object-cover" /></div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden col-span-2"><Image src={images.nehruJacket.src} alt={images.nehruJacket.alt} fill className="object-cover" /></div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden"><Image src={images.fabricRolls.src} alt={images.fabricRolls.alt} fill className="object-cover" /></div>
        </div>
      </section>

      {/* 12. Gifting & Occasions Banner */}
      <section className="py-16 bg-secondary text-secondary-foreground text-center">
        <div className="container px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">{homeContent.gifting.headline}</h2>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">{homeContent.gifting.description}</p>
          <Link href="/pricing" className="inline-block border border-secondary-foreground px-6 py-2 rounded-md hover:bg-secondary-foreground hover:text-secondary transition-colors text-sm font-semibold">{homeContent.gifting.button}</Link>
        </div>
      </section>

      {/* 14. In-Store Experience */}
      <section className="py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-muted/20 p-8 md:p-12 rounded-3xl">
            <div className="flex-1 space-y-6">
              <h2 className="font-heading text-3xl font-bold">{homeContent.inStore.headline}</h2>
              <p className="text-muted-foreground">{homeContent.inStore.description}</p>
              <p className="font-semibold">{globalContent.footer.address}</p>
              <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">{homeContent.inStore.cta}</a>
            </div>
            <div className="flex-1 w-full h-64 relative rounded-xl overflow-hidden shadow-inner bg-muted">
               <DotMatrixGrid spacing={10} className="opacity-20" />
               <div className="absolute inset-0 flex items-center justify-center font-heading text-muted-foreground text-lg italic">{homeContent.inStore.studioImageAlt}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ Snippet */}
      <section className="py-24 bg-background">
        <div className="container max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">{homeContent.faqSnippet.headline}</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqContent.questions.slice(0, 3).map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-8">
             <Link href="/faq" className="text-sm font-medium text-primary hover:underline">{homeContent.faqSnippet.cta}</Link>
          </div>
        </div>
      </section>

      {/* 16. Newsletter */}
      <section className="py-24 bg-muted/30 border-y border-border/50 text-center">
        <div className="container px-4 max-w-xl mx-auto">
           <h2 className="font-heading text-2xl font-bold mb-4">{homeContent.newsletter.headline}</h2>
           <p className="text-muted-foreground mb-8">{homeContent.newsletter.description}</p>
           <form className="flex gap-2 max-w-md mx-auto" action="#">
             <input type="email" placeholder={homeContent.newsletter.placeholder} className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required />
             <button type="submit" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors">{homeContent.newsletter.button}</button>
           </form>
        </div>
      </section>

      {/* 17. Final High-Impact CTA */}
      <section className="py-32 relative overflow-hidden text-center flex items-center justify-center min-h-[50vh]">
        <AnimatedGradientMesh intensity="heavy" />
        <div className="relative z-10 container px-4">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-10">{homeContent.cta.headline}</h2>
          <a href={globalContent.navigation.cta.href} target="_blank" rel="noopener noreferrer">
            <CTAGlow className="px-8 py-4 text-base">{homeContent.cta.button}</CTAGlow>
          </a>
        </div>
      </section>
    </>
  );
}
