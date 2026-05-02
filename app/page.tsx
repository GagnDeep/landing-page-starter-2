import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Visual Components
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { LogoMarquee } from "@/components/visuals/LogoMarquee";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { AnimatedChart } from "@/components/visuals/AnimatedChart";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { MicroIconSet } from "@/components/visuals/MicroIconSet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 2. Hero Expression */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <AnimatedGradientMesh className="absolute inset-0 z-0" />
        <DotMatrixGrid className="z-0" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground tracking-tight">
              {homeContent.hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              {homeContent.hero.subheading}
            </p>
            <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow" asChild>
              <Link href="/contact">{homeContent.hero.cta}</Link>
            </Button>
          </div>
          <div className="flex-1 relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            <AnimatedHeroIllustration className="relative z-10 w-full h-full" />
          </div>
        </div>
      </section>

      {/* 3. Brand Manifesto */}
      <section className="py-24 md:py-32 bg-secondary/30 relative">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto md:ml-auto md:mr-0 text-right space-y-6">
              <MicroIconSet className="justify-end mb-8" />
              <h2 className="font-serif text-3xl md:text-4xl text-primary">
                {homeContent.manifesto.heading}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light">
                &ldquo;{homeContent.manifesto.text}&rdquo;
              </p>
            </div>
         </div>
      </section>

      {/* 4. Trust Bar / Press */}
      <section className="border-y border-border/50 bg-background relative z-20">
        <LogoMarquee logos={homeContent.trustBar.logos} />
      </section>

      {/* 5. The Art of Embroidery (Visual Intro) */}
      <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
        <Image
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-16">
           <div className="max-w-xl text-white">
             <h2 className="font-serif text-3xl md:text-5xl mb-4">{homeContent.artOfEmbroidery.heading}</h2>
             <p className="text-lg md:text-xl font-light text-white/80">{homeContent.artOfEmbroidery.caption}</p>
           </div>
        </div>
      </section>

      {/* 6-8. Bespoke Process Steps */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <FloatingBlobs className="absolute -inset-1/2 -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              {homeContent.bespokeProcess.heading}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {homeContent.bespokeProcess.steps.map((step, idx) => (
              <div key={idx} className="flex flex-col space-y-4 group">
                <div className="text-6xl font-serif text-primary/20 group-hover:text-primary/40 transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="font-medium text-2xl text-foreground">
                  {step.title.replace(/^\d+\.\s*/, '')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Signature Collection Showcase */}
      <section className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
              {homeContent.signatureCollection.heading}
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {homeContent.signatureCollection.items.map((item, idx) => (
               <div key={idx} className="bg-background p-8 border border-border/50 hover:shadow-xl transition-shadow group relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 10. The Gift of Bespoke (CTA) */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary-foreground)_0%,_transparent_100%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">
            {homeContent.giftOfBespoke.heading}
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/90 font-light leading-relaxed">
            {homeContent.giftOfBespoke.text}
          </p>
          <Button variant="secondary" size="lg" className="rounded-full px-8 py-6 text-lg text-primary" asChild>
            <Link href="/features">{homeContent.giftOfBespoke.cta}</Link>
          </Button>
        </div>
      </section>

      {/* 11 & 12. Artisan Highlight & Material Library */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Artisan */}
            <div className="space-y-8">
               <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                  {homeContent.artisanHighlight.heading}
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                  {homeContent.artisanHighlight.text}
               </p>
               <div className="relative h-[400px] w-full rounded-sm overflow-hidden">
                 <Image
                    src={siteImages.about.hero.src}
                    alt={siteImages.about.hero.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000 ease-out-expo"
                 />
               </div>
            </div>

            {/* Materials */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="relative h-[300px] w-full rounded-sm overflow-hidden">
                 <Image
                    src={siteImages.pricing.hero.src}
                    alt={siteImages.pricing.hero.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000 ease-out-expo"
                 />
               </div>
               <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-8">
                  {homeContent.materialLibrary.heading}
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                  {homeContent.materialLibrary.text}
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* 13. Testimonial Grid */}
      <section className="py-24 bg-secondary/30 relative">
        <DotMatrixGrid />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            {homeContent.testimonials.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.testimonials.reviews.map((review, idx) => (
              <div key={idx} className={cn("bg-background p-8 shadow-sm border border-border/50", idx === 1 ? "md:translate-y-8" : "")}>
                <p className="text-lg font-serif italic text-foreground mb-6 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Video Tour / Ambience (Fallback to Code Typing for abstract designer vibe) */}
      <section className="py-32 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-4xl text-foreground">
              {homeContent.videoTour.heading}
            </h2>
            <p className="text-xl text-muted-foreground">
              {homeContent.videoTour.caption}
            </p>
          </div>
          <div className="flex-1 w-full">
            <CodeWindowTyping />
          </div>
        </div>
      </section>

      {/* 15 & 16. Blog Peek & FAQ */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl mb-8">
              {homeContent.faqHighlight.heading}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {homeContent.faqHighlight.questions.map((q, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                    {q.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {q.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Blog Peek & Chart Animation */}
          <div className="bg-background p-8 border border-border/50 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-3xl mb-4 text-primary">
                {homeContent.blogPeek.heading}
              </h2>
              <Link href="/blog" className="text-lg text-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-border hover:decoration-primary">
                {homeContent.blogPeek.linkText}
              </Link>
            </div>
            <div className="mt-12 opacity-50">
              <AnimatedChart />
            </div>
          </div>

        </div>
      </section>

      {/* 17. Location & 19. Newsletter */}
      <section className="py-24 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
             <h2 className="font-serif text-3xl mb-6">
              {homeContent.location.heading}
            </h2>
            <div className="space-y-2 text-muted-foreground">
              <p>{homeContent.location.address}</p>
              <p>{homeContent.location.hours}</p>
            </div>
            <div className="mt-8 relative h-64 w-full rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image
                  src={siteImages.contact.hero.src}
                  alt={siteImages.contact.hero.alt}
                  fill
                  className="object-cover"
               />
            </div>
          </div>

          <div className="flex flex-col justify-center bg-primary/5 p-8 md:p-12 border border-primary/10">
            <h2 className="font-serif text-3xl mb-4 text-foreground">
              Join the Inner Circle
            </h2>
            <p className="text-muted-foreground mb-8">
              {homeContent.newsletter.heading}
            </p>
            <form className="flex flex-col sm:flex-row gap-4" action="#">
              <input
                type="email"
                placeholder={homeContent.newsletter.placeholder}
                className="flex-1 bg-background border border-border px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
              />
              <Button type="button" className="px-8 py-3 rounded-sm">
                {homeContent.newsletter.buttonText}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* 18. Secondary CTA */}
      <section className="py-24 bg-secondary/30 text-center relative overflow-hidden">
         <AnimatedGradientMesh className="absolute inset-0 opacity-40 -z-10" />
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <h2 className="font-serif text-4xl md:text-5xl mb-8 text-foreground">
             {homeContent.secondaryCta.heading}
           </h2>
           <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow" asChild>
              <Link href="/contact">{homeContent.secondaryCta.cta}</Link>
            </Button>
         </div>
      </section>

    </div>
  );
}
