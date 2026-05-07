import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { imageRegistry } from "@/lib/images";
import { FadeIn } from "@/components/visuals/fade-in";
import { ParallaxImage } from "@/components/visuals/parallax-image";
import { StaggerContainer, StaggerItem } from "@/components/visuals/stagger";
import { DecorativeLine } from "@/components/visuals/decorative-line";
import { ScaleHover } from "@/components/visuals/scale-hover";
import { RevealText } from "@/components/visuals/reveal-text";

export const metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* 1. Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-sans">
        {homeContent.announcementBar}
      </div>

      {/* 2. Main Navigation (Simplified for layout blueprint) */}
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

      {/* 3. Hero Section (Full Bleed) */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src={imageRegistry.heroFallback.src}
          alt={imageRegistry.heroFallback.alt}
          className="absolute inset-0 w-full h-full"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        <FadeIn className="relative z-10 text-center max-w-4xl px-4" delay={0.2}>
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 drop-shadow-md leading-tight">
             <RevealText text={homeContent.hero.heading} />
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-sm font-light">
            {homeContent.hero.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-base px-8 h-14">
              {homeContent.hero.cta1}
            </Button>
            <Button size="lg" variant="outline" className="rounded-none bg-transparent border-white text-white hover:bg-white hover:text-black font-sans text-base px-8 h-14 backdrop-blur-sm">
              {homeContent.hero.cta2}
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* 4. Heritage Intro */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <FadeIn>
          <DecorativeLine className="mx-auto mb-8 bg-primary/30" width="w-16" />
          <h2 className="font-heading text-4xl mb-6 text-foreground">{homeContent.heritageIntro.heading}</h2>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
            {homeContent.heritageIntro.text}
          </p>
        </FadeIn>
      </section>

      {/* 5. Featured Category 1 - Traditional Sweets */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <FadeIn direction="right" className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg">
                <Image
                  src={imageRegistry.traditionalSweets.src}
                  alt={imageRegistry.traditionalSweets.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div className="w-full md:w-1/2">
              <FadeIn direction="left">
                <h2 className="font-heading text-4xl mb-4">{homeContent.featuredSweets.heading}</h2>
                <p className="font-sans text-muted-foreground mb-8 text-lg">{homeContent.featuredSweets.subheading}</p>

                <StaggerContainer className="space-y-6 mb-10">
                  {homeContent.featuredSweets.items.map((item) => (
                    <StaggerItem key={item.name} className="border-b border-border/50 pb-4">
                      <h3 className="font-heading text-2xl text-primary">{item.name}</h3>
                      <p className="font-sans text-muted-foreground text-sm mt-1">{item.description}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <Button variant="link" className="p-0 text-primary font-sans text-base hover:no-underline hover:text-primary/80 group">
                  {homeContent.featuredSweets.cta}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Category 2 - Fresh Bakery */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <FadeIn direction="left" className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg">
                <Image
                  src={imageRegistry.freshBakery.src}
                  alt={imageRegistry.freshBakery.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div className="w-full md:w-1/2">
              <FadeIn direction="right">
                <h2 className="font-heading text-4xl mb-4">{homeContent.featuredBakery.heading}</h2>
                <p className="font-sans text-muted-foreground mb-8 text-lg">{homeContent.featuredBakery.subheading}</p>

                <StaggerContainer className="space-y-6 mb-10">
                  {homeContent.featuredBakery.items.map((item) => (
                    <StaggerItem key={item.name} className="border-b border-border/50 pb-4">
                      <h3 className="font-heading text-2xl text-primary">{item.name}</h3>
                      <p className="font-sans text-muted-foreground text-sm mt-1">{item.description}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <Button variant="link" className="p-0 text-primary font-sans text-base hover:no-underline hover:text-primary/80 group">
                  {homeContent.featuredBakery.cta}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Artisanal Process Spotlight */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <ParallaxImage
            src={imageRegistry.artisanalProcess.src}
            alt={imageRegistry.artisanalProcess.alt}
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            speed={0.1}
        />
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
           <FadeIn>
             <h2 className="font-heading text-4xl md:text-5xl mb-8">{homeContent.artisanalProcess.heading}</h2>
             <p className="font-sans text-lg md:text-xl font-light leading-relaxed">
               {homeContent.artisanalProcess.text}
             </p>
           </FadeIn>
        </div>
      </section>

      {/* 11. Gifting & Occasions */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-4xl mb-6">{homeContent.gifting.heading}</h2>
            <p className="font-sans text-muted-foreground text-lg mb-10">
              {homeContent.gifting.text}
            </p>
            <ScaleHover>
              <div className="relative w-full aspect-[21/9] overflow-hidden shadow-md mb-8">
                 <Image
                    src={imageRegistry.weddingBox.src}
                    alt={imageRegistry.weddingBox.alt}
                    fill
                    className="object-cover"
                 />
              </div>
            </ScaleHover>
            <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8">
              {homeContent.gifting.cta}
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 12. Ingredient Quality Highlight */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <FadeIn direction="up">
               <h2 className="font-heading text-4xl mb-6">{homeContent.ingredientQuality.heading}</h2>
               <p className="font-sans text-lg font-light leading-relaxed">
                 {homeContent.ingredientQuality.text}
               </p>
             </FadeIn>
             <FadeIn direction="left" delay={0.2} className="relative h-64 md:h-96 w-full">
                <Image
                  src={imageRegistry.ingredients.src}
                  alt={imageRegistry.ingredients.alt}
                  fill
                  className="object-cover shadow-sm"
                />
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-24 bg-background">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <FadeIn>
              <h2 className="font-heading text-4xl mb-16">{homeContent.testimonials.heading}</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               {homeContent.testimonials.reviews.map((review, i) => (
                 <StaggerItem key={i} className="bg-muted/20 p-10 shadow-sm relative">
                    <div className="text-6xl text-primary/20 font-heading absolute top-4 left-4">&quot;</div>
                    <p className="font-sans text-lg italic text-muted-foreground relative z-10 mb-6">
                      {review.quote}
                    </p>
                    <p className="font-heading text-xl text-primary font-medium">
                      — {review.author}
                    </p>
                 </StaggerItem>
               ))}
            </StaggerContainer>
         </div>
      </section>

      {/* 15. Newsletter Signup */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <FadeIn>
            <h2 className="font-heading text-4xl mb-4">{homeContent.newsletter.heading}</h2>
            <p className="font-sans text-muted-foreground mb-8">{homeContent.newsletter.subheading}</p>
            <form className="flex flex-col sm:flex-row gap-0 justify-center w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder={homeContent.newsletter.placeholder}
                className="h-12 px-4 w-full border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary rounded-none font-sans"
              />
              <Button type="submit" className="h-12 rounded-none bg-primary text-primary-foreground px-8 font-sans mt-2 sm:mt-0">
                {homeContent.newsletter.cta}
              </Button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* 21. Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
             <div>
               <h3 className="font-heading text-2xl text-primary mb-6">Verma&apos;s</h3>
               <p className="font-sans text-sm text-background/70 font-light">
                 {homeContent.visitUs.address}<br />
                 {homeContent.visitUs.hours}
               </p>
             </div>
             <div>
               <h4 className="font-sans font-medium mb-6 tracking-wider uppercase text-sm">Shop</h4>
               <ul className="space-y-3 font-sans text-sm text-background/70">
                 {homeContent.preFooter.shopLinks.map(link => (
                   <li key={link}><Link href="#" className="hover:text-primary transition-colors">{link}</Link></li>
                 ))}
               </ul>
             </div>
             <div>
               <h4 className="font-sans font-medium mb-6 tracking-wider uppercase text-sm">About</h4>
               <ul className="space-y-3 font-sans text-sm text-background/70">
                 {homeContent.preFooter.aboutLinks.map(link => (
                   <li key={link}><Link href="#" className="hover:text-primary transition-colors">{link}</Link></li>
                 ))}
               </ul>
             </div>
             <div>
               <h4 className="font-sans font-medium mb-6 tracking-wider uppercase text-sm">Legal</h4>
               <ul className="space-y-3 font-sans text-sm text-background/70">
                 {homeContent.preFooter.legalLinks.map(link => (
                   <li key={link}><Link href="#" className="hover:text-primary transition-colors">{link}</Link></li>
                 ))}
               </ul>
             </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center font-sans text-xs text-background/50">
            {homeContent.footer.copyright}
          </div>
        </div>
      </footer>
    </main>
  );
}
