"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Content
import { homeContent } from '@/content/home';

// Images
import { siteImages } from '@/lib/images';

// Visual Components
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { LogoMarquee } from '@/components/visuals/LogoMarquee';
import { AnimatedHeroIllustration } from '@/components/visuals/AnimatedHeroIllustration';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs';
import { CTAGlow } from '@/components/visuals/CTAGlow';
import { AnimatedStatCounter } from '@/components/visuals/AnimatedStatCounter';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import {
  ShoppingBag01Icon,
  MessageMultiple01Icon,
  RulerIcon,
  Scissor01Icon,
  ArrowRight01Icon,
  Location01Icon,
  Clock01Icon
} from '@hugeicons/core-free-icons';

export default function Home() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageCircle': return <HugeiconsIcon icon={MessageMultiple01Icon} size={32} className="text-primary" />;
      case 'Ruler': return <HugeiconsIcon icon={RulerIcon} size={32} className="text-primary" />;
      case 'Scissors': return <HugeiconsIcon icon={Scissor01Icon} size={32} className="text-primary" />;
      default: return null;
    }
  };

  return (
    <>
        {/* 3. Hero Video Splash */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--muted)" />
          <DotMatrixGrid />

          <div className="absolute inset-0 -z-20">
             <Image
               src={siteImages.heroVideoPoster}
               alt="Aura Boutique Fashion"
               fill
               className="object-cover opacity-40 mix-blend-overlay scale-105 animate-[pulse_10s_ease-in-out_infinite]"
               priority
             />
             <div className="absolute inset-0 bg-background/60"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
             <AnimatedHeroIllustration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10 opacity-20" />

             <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl mx-auto drop-shadow-sm">
                {homeContent.hero.heading}
             </h1>
             <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light">
                {homeContent.hero.subheading}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {Array.isArray(homeContent.hero.cta) && homeContent.hero.cta.map((cta, i) => (
                  <CTAGlow key={i} onClick={() => window.location.href = cta.href}>
                    {cta.label}
                  </CTAGlow>
                ))}
             </div>
          </div>
        </section>

        {/* 4. Brand Essence Statement */}
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
           <FloatingBlobs color1="bg-secondary/30" color2="bg-primary/10" />
           <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
              <h2 className="font-heading text-3xl md:text-5xl leading-tight text-foreground font-medium">
                "{homeContent.brandEssence}"
              </h2>
           </div>
        </section>

        {/* 5. Featured Collection - Carousel Intro */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                <div className="inline-flex items-center space-x-2 text-primary font-medium tracking-widest uppercase text-xs mb-4">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  <span>Featured</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold">{homeContent.featuredCollection.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {homeContent.featuredCollection.description}
                </p>
                <div className="pt-4">
                  <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 uppercase tracking-widest text-xs">
                     {homeContent.featuredCollection.cta.label}
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-8 overflow-hidden">
                 <div className="flex space-x-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
                    <div className="min-w-[80%] md:min-w-[60%] snap-center relative aspect-[3/4]">
                       <Image src={siteImages.featuredCollection} alt="Collection Item" fill className="object-cover" />
                    </div>
                    <div className="min-w-[80%] md:min-w-[60%] snap-center relative aspect-[3/4] bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground uppercase tracking-widest text-sm">More looks</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. "The Art of Custom Stitching" Banner & 7. Steps */}
        <section className="bg-foreground text-background">
          <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
             <Image src={siteImages.customStitchingBanner} alt="Tailoring" fill className="object-cover opacity-40 mix-blend-luminosity scale-105" />
             <div className="relative z-10 text-center px-6 max-w-3xl">
                <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4">{homeContent.customStitchingBanner.heading}</h2>
                <p className="text-lg md:text-xl font-light text-background/80">{homeContent.customStitchingBanner.subheading}</p>
             </div>
          </div>

          <div className="container mx-auto px-6 py-24">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                {homeContent.customStitchingSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors duration-500">
                       {getIcon(step.icon)}
                    </div>
                    <h3 className="font-heading text-2xl mb-4">{step.title}</h3>
                    <p className="text-background/70 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 8. Lookbook Grid - Asymmetrical */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
               <h2 className="font-heading text-4xl md:text-5xl font-bold">{homeContent.lookbook.title}</h2>
               <Link href={homeContent.lookbook.cta.href} className="hidden md:flex items-center space-x-2 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                  <span>{homeContent.lookbook.cta.label}</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
               <div className="md:col-span-7 relative aspect-[4/5] md:aspect-auto md:h-[800px] group overflow-hidden">
                  <Image src={siteImages.lookbook1} alt="Lookbook 1" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
               </div>
               <div className="md:col-span-5 flex flex-col gap-8">
                  <div className="relative aspect-square group overflow-hidden">
                     <Image src={siteImages.lookbook2} alt="Lookbook 2" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="relative flex-grow aspect-square md:aspect-auto group overflow-hidden">
                     <Image src={siteImages.lookbook3} alt="Lookbook 3" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 9. Category Navigation - Visual */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {homeContent.categories.map((cat, idx) => {
                  const imageMap: Record<string, string> = {
                    "Ethnic Wear": siteImages.categoryEthnic,
                    "Western Wear": siteImages.categoryWestern,
                    "Indo-Western Fusion": siteImages.categoryFusion,
                    "Accessories": siteImages.categoryAccessories
                  };
                  return (
                    <Link key={idx} href={cat.href} className="group text-center block">
                      <div className="relative aspect-square rounded-full overflow-hidden mb-6 mx-auto w-full max-w-[250px]">
                        <Image src={imageMap[cat.name] || siteImages.categoryEthnic} alt={cat.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-500"></div>
                      </div>
                      <h3 className="font-heading text-lg md:text-xl font-medium">{cat.name}</h3>
                    </Link>
                  );
                })}
             </div>
          </div>
        </section>

        {/* 10. Boutique Favorites - Curated List */}
        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-heading text-4xl mb-16 text-center">Boutique Favorites</h2>
            <div className="space-y-24">
              {homeContent.boutiqueFavorites.map((fav, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   <div className="relative w-full md:w-1/2 aspect-square">
                      <Image src={idx === 0 ? siteImages.lookbook1 : siteImages.lookbook4} alt={fav.title} fill className="object-cover" />
                   </div>
                   <div className="w-full md:w-1/2 space-y-6">
                      <h3 className="font-heading text-3xl font-medium">{fav.title}</h3>
                      <p className="text-lg text-muted-foreground">{fav.description}</p>
                      <Button variant="outline" className="uppercase tracking-widest text-xs rounded-none border-foreground">{fav.cta.label}</Button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Founder's Note / The Designer */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full">
                <div className="absolute inset-4 bg-secondary -z-10 translate-x-4 translate-y-4"></div>
                <Image src={siteImages.founderPortrait} alt="Deepika, Founder" fill className="object-cover" />
              </div>
              <div className="max-w-xl mx-auto lg:mx-0">
                 <h2 className="font-heading text-4xl mb-8">{homeContent.founderNote.heading}</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-serif italic">
                   "{homeContent.founderNote.message}"
                 </p>
                 <div className="font-signature text-3xl text-foreground">
                   {homeContent.founderNote.signature}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. New Arrivals - Marquee */}
        <LogoMarquee
          logos={[
            <span key="1" className="text-2xl font-heading tracking-widest">{homeContent.newArrivals.marquee}</span>
          ]}
          speed="fast"
          className="bg-primary text-primary-foreground py-4 border-none"
        />

        {/* 13. New Arrivals - Product Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
             <div className="flex justify-between items-end mb-16">
               <h2 className="font-heading text-4xl font-bold">{homeContent.newArrivals.title}</h2>
               <Link href={homeContent.newArrivals.cta.href} className="hidden md:flex items-center space-x-2 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                  <span>{homeContent.newArrivals.cta.label}</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
               </Link>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-[3/4] overflow-hidden mb-4">
                      <Image src={siteImages.lookbook3} alt="New Arrival" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                         <Button variant="secondary" className="uppercase text-xs tracking-widest rounded-none">Quick View</Button>
                      </div>
                    </div>
                    <h4 className="font-medium">Designer Silhouette {i}</h4>
                    <p className="text-muted-foreground text-sm">₹{3500 + i * 500}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 14. Customer Stories / Testimonials & Stat Counter */}
        <section className="py-24 bg-secondary/20 relative overflow-hidden">
          <DotMatrixGrid color="var(--primary)" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="flex flex-col justify-center space-y-12">
                 <div className="space-y-4">
                   <p className="text-sm uppercase tracking-widest text-primary font-medium">The Aura Experience</p>
                   <AnimatedStatCounter end={5000} suffix="+" duration={2500} className="text-6xl md:text-8xl" />
                   <p className="text-xl text-muted-foreground font-heading italic">Happy clients across India</p>
                 </div>
                 <div className="space-y-4">
                   <AnimatedStatCounter end={4} suffix=" Days" duration={1500} className="text-5xl md:text-6xl" />
                   <p className="text-lg text-muted-foreground">Average express delivery time</p>
                 </div>
              </div>

              <div className="flex items-center">
                <Card className="bg-background border-none shadow-xl rounded-none p-8 md:p-12 relative">
                   <div className="absolute top-8 left-8 text-6xl text-primary/20 font-serif leading-none">"</div>
                   <CardContent className="pt-8 relative z-10">
                      <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                        {homeContent.testimonials[0].quote}
                      </p>
                      <p className="font-medium uppercase tracking-widest text-sm text-muted-foreground">
                        — {homeContent.testimonials[0].author}
                      </p>
                   </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 15. Instagram Shop Feed */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-2">{homeContent.instagramShop.title}</h2>
              <p className="text-muted-foreground">{homeContent.instagramShop.handle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[siteImages.lookbook1, siteImages.categoryWestern, siteImages.featuredCollection, siteImages.lookbook4].map((src, i) => (
                <div key={i} className="relative aspect-square group overflow-hidden bg-muted">
                  <Image src={src} alt="Instagram Post" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <HugeiconsIcon icon={ShoppingBag01Icon} className="text-background" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 16. Boutique Location Spotlight */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-sm">
                <div className="bg-background p-12 md:p-24 flex flex-col justify-center">
                   <h2 className="font-heading text-4xl mb-8">{homeContent.location.title}</h2>
                   <div className="space-y-6 mb-12">
                     <div className="flex items-start space-x-4">
                       <HugeiconsIcon icon={Location01Icon} className="text-primary mt-1" />
                       <p className="text-lg">{homeContent.location.address}</p>
                     </div>
                     <div className="flex items-start space-x-4">
                       <HugeiconsIcon icon={Clock01Icon} className="text-primary mt-1" />
                       <p className="text-lg">{homeContent.location.hours}</p>
                     </div>
                   </div>
                   <Button className="w-fit uppercase tracking-widest text-xs rounded-none px-8 py-6">{homeContent.location.cta.label}</Button>
                </div>
                <div className="relative min-h-[400px]">
                   <Image src={siteImages.aboutGallery1} alt="Boutique Location" fill className="object-cover" />
                </div>
             </div>
          </div>
        </section>

        {/* 17. Sustainable/Quality Promise */}
        <section className="py-24 border-y border-border bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl mb-16">{homeContent.sustainablePromise.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {homeContent.sustainablePromise.points.map((point, idx) => (
                 <div key={idx} className="space-y-4 max-w-xs mx-auto">
                    <h3 className="font-medium uppercase tracking-widest text-sm">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 18. Newsletter Signup */}
        <section className="py-32 bg-background relative overflow-hidden">
          <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--secondary)" className="opacity-50" />
          <div className="container mx-auto px-6 text-center max-w-2xl relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">{homeContent.newsletter.heading}</h2>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-end border-b border-foreground pb-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={homeContent.newsletter.placeholder}
                className="bg-transparent w-full outline-none text-lg placeholder:text-muted-foreground/60 py-2"
                required
              />
              <button type="submit" className="font-medium uppercase tracking-widest text-sm whitespace-nowrap hover:text-primary transition-colors py-2">
                {homeContent.newsletter.buttonLabel}
              </button>
            </form>
          </div>
        </section>
    </>
  );
}
