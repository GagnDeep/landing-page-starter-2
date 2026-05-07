import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { FadeIn } from "@/components/visuals/fade-in";
import { ParallaxImage } from "@/components/visuals/parallax-image";
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger";
import { DecorativeLine } from "@/components/visuals/decorative-line";

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Shared Navigation (Simplified for layout blueprint) */}
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

      {/* 1. About Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-primary/5">
        <FadeIn className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            {aboutContent.hero.heading}
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground font-light">
            {aboutContent.hero.subheading}
          </p>
        </FadeIn>
      </section>

      {/* 2. Our Story - The Beginning */}
      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <FadeIn>
          <DecorativeLine className="mx-auto mb-8 bg-primary/30" width="w-16" />
          <h2 className="font-heading text-4xl mb-6">{aboutContent.ourStory.heading}</h2>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground font-light">
            {aboutContent.ourStory.text}
          </p>
        </FadeIn>
      </section>

      {/* 3. Founder Profile & 16. Photo Gallery - Historic (Combined visually) */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <FadeIn direction="right" className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={imageRegistry.founder.src}
                  alt={imageRegistry.founder.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center mt-4 font-sans text-sm text-muted-foreground italic">
                {aboutContent.galleryHistoric.heading}
              </p>
            </FadeIn>
            <div className="w-full md:w-1/2">
              <FadeIn direction="left">
                <h2 className="font-heading text-4xl mb-2">{aboutContent.founderProfile.heading}</h2>
                <h3 className="font-sans text-xl text-primary mb-6">{aboutContent.founderProfile.name}</h3>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground font-light">
                  {aboutContent.founderProfile.text}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Generations Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl">{aboutContent.generationsTimeline.heading}</h2>
          </FadeIn>
          <StaggerContainer className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {aboutContent.generationsTimeline.events.map((event, index) => (
              <StaggerItem key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                   <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-border bg-card shadow-sm">
                  <span className="font-sans text-primary font-bold tracking-wide text-sm mb-1 block">{event.year}</span>
                  <h3 className="font-heading text-xl mb-1">{event.title}</h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. The Philosophy */}
      <section className="py-32 bg-primary text-primary-foreground text-center px-4 md:px-8">
        <FadeIn className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl mb-6">{aboutContent.philosophy.heading}</h2>
          <p className="font-sans text-xl md:text-2xl font-light leading-relaxed">
            &quot;{aboutContent.philosophy.text}&quot;
          </p>
        </FadeIn>
      </section>

      {/* 6. Kitchen Workspace & 17. Modern Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl mb-6">{aboutContent.kitchenWorkspace.heading}</h2>
            <p className="font-sans text-lg text-muted-foreground font-light">{aboutContent.kitchenWorkspace.text}</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn direction="up">
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
                <Image src={imageRegistry.teamWorking.src} alt={imageRegistry.teamWorking.alt} fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-md">
                <Image src={imageRegistry.blogKitchen.src} alt={imageRegistry.blogKitchen.alt} fill className="object-cover" />
              </div>
            </FadeIn>
          </div>
           <p className="text-center mt-6 font-sans text-sm text-muted-foreground italic">
             {aboutContent.galleryModern.heading}
           </p>
        </div>
      </section>

      {/* 7. Core Family & 8. Head Chefs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn direction="up" className="bg-background p-10 shadow-sm border border-border/50">
               <h2 className="font-heading text-3xl mb-4 text-primary">{aboutContent.teamCoreFamily.heading}</h2>
               <p className="font-sans text-lg text-muted-foreground leading-relaxed">{aboutContent.teamCoreFamily.text}</p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="bg-background p-10 shadow-sm border border-border/50">
               <h2 className="font-heading text-3xl mb-4 text-primary">{aboutContent.teamChefs.heading}</h2>
               <p className="font-sans text-lg text-muted-foreground leading-relaxed">{aboutContent.teamChefs.text}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. Sourcing Ingredients & 10. Pure Ghee Promise */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <FadeIn direction="left" className="w-full md:w-1/2">
              <div className="relative aspect-square w-full overflow-hidden shadow-lg rounded-full">
                <Image
                  src={imageRegistry.gheePour.src}
                  alt={imageRegistry.gheePour.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div className="w-full md:w-1/2 space-y-12">
              <FadeIn direction="right">
                <h2 className="font-heading text-4xl mb-4">{aboutContent.sourcing.heading}</h2>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground font-light">
                  {aboutContent.sourcing.text}
                </p>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <h2 className="font-heading text-4xl mb-4">{aboutContent.pureGheePromise.heading}</h2>
                <p className="font-sans text-lg leading-relaxed text-muted-foreground font-light">
                  {aboutContent.pureGheePromise.text}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Community Impact & 14. Customer Generations & 15. Sustainability */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <StaggerItem>
               <h3 className="font-heading text-2xl mb-4">{aboutContent.communityImpact.heading}</h3>
               <p className="font-sans font-light leading-relaxed opacity-90">{aboutContent.communityImpact.text}</p>
             </StaggerItem>
             <StaggerItem>
               <h3 className="font-heading text-2xl mb-4">{aboutContent.customerGenerations.heading}</h3>
               <p className="font-sans font-light leading-relaxed opacity-90">{aboutContent.customerGenerations.text}</p>
             </StaggerItem>
             <StaggerItem>
               <h3 className="font-heading text-2xl mb-4">{aboutContent.sustainability.heading}</h3>
               <p className="font-sans font-light leading-relaxed opacity-90">{aboutContent.sustainability.text}</p>
             </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 12. Awards & 18. Press Mentions */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              <FadeIn className="w-full lg:w-1/3">
                 <h2 className="font-heading text-3xl mb-6">{aboutContent.awardsMilestones.heading}</h2>
                 <ul className="space-y-4">
                   {aboutContent.awardsMilestones.items.map((award, i) => (
                     <li key={i} className="flex items-center gap-3 font-sans text-muted-foreground">
                        <span className="text-primary text-xl">★</span> {award}
                     </li>
                   ))}
                 </ul>
              </FadeIn>
              <FadeIn className="w-full lg:w-2/3" delay={0.2}>
                 <h2 className="font-heading text-3xl mb-6">{aboutContent.pressMedia.heading}</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   {aboutContent.pressMedia.quotes.map((quote, i) => (
                     <div key={i} className="bg-muted/20 p-6 border-l-2 border-primary">
                       <p className="font-sans italic mb-4">&quot;{quote.text}&quot;</p>
                       <p className="font-heading font-medium text-primary">— {quote.source}</p>
                     </div>
                   ))}
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* 13. Evolution of Recipes */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-4xl mb-6">{aboutContent.evolutionRecipes.heading}</h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">{aboutContent.evolutionRecipes.text}</p>
          </FadeIn>
        </div>
      </section>

      {/* 19. Careers Teaser & 20. Contact CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction="up" className="bg-primary/5 p-12 text-center border border-primary/10">
               <h2 className="font-heading text-3xl mb-4">{aboutContent.careersTeaser.heading}</h2>
               <p className="font-sans text-muted-foreground mb-8">{aboutContent.careersTeaser.text}</p>
               <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8">
                  {aboutContent.careersTeaser.cta}
               </Button>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="bg-primary text-primary-foreground p-12 text-center">
               <h2 className="font-heading text-3xl mb-4">{aboutContent.contactCta.heading}</h2>
               <p className="font-sans text-primary-foreground/80 mb-8">{aboutContent.contactCta.text}</p>
               <Button variant="outline" className="rounded-none border-background text-background hover:bg-background hover:text-foreground h-12 px-8">
                  {aboutContent.contactCta.cta}
               </Button>
            </FadeIn>
          </div>
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
