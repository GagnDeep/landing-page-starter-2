import { aboutContent } from "@/content/about";
import { images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { AnimatedHeroIllustration } from "@/components/visuals/AnimatedHeroIllustration";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { SectionDivider } from "@/components/visuals/SectionDivider";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* 1. Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <DotMatrixGrid className="absolute inset-0 opacity-30 pointer-events-none" />
        <FloatingBlobs className="opacity-50" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            {aboutContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            {aboutContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. The Heritage */}
      <section className="py-24 px-6 bg-secondary/20 border-y border-border">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
           <div>
             <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Roots & Legacy</span>
             <h2 className="font-heading text-4xl font-bold mb-8">{aboutContent.heritage.title}</h2>
             <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
               <p>{aboutContent.heritage.body1}</p>
               <p>{aboutContent.heritage.body2}</p>
             </div>
           </div>
           <AnimatedHeroIllustration
             imageSrc={images.hero.about}
             alt="Sangam Caterer Heritage"
             className="aspect-square md:aspect-[4/5]"
           />
        </div>
      </section>

      {/* 3. The Founders / Team (Using images.team) */}
      <section className="py-32 px-6 bg-background text-center">
        <div className="container mx-auto">
          <h2 className="font-heading text-4xl font-bold mb-16">The Leadership</h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
               <div className="w-48 h-48 rounded-full overflow-hidden relative mb-6 border-4 border-secondary shadow-lg">
                 <Image src={images.team.chef1} alt="Executive Chef" fill sizes="192px" className="object-cover" />
               </div>
               <h3 className="font-heading text-2xl font-bold mb-2">Rajiv Singh</h3>
               <p className="text-primary font-medium uppercase tracking-wider text-sm">Executive Chef</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-48 h-48 rounded-full overflow-hidden relative mb-6 border-4 border-secondary shadow-lg">
                 <Image src={images.team.chef2} alt="Head Chef" fill sizes="192px" className="object-cover" />
               </div>
               <h3 className="font-heading text-2xl font-bold mb-2">Amanpreet Kaur</h3>
               <p className="text-primary font-medium uppercase tracking-wider text-sm">Head of Operations</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-48 h-48 rounded-full overflow-hidden relative mb-6 border-4 border-secondary shadow-lg">
                 <Image src={images.team.chef3} alt="Pastry Chef" fill sizes="192px" className="object-cover" />
               </div>
               <h3 className="font-heading text-2xl font-bold mb-2">Dev Sharma</h3>
               <p className="text-primary font-medium uppercase tracking-wider text-sm">Pastry Chef</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider width="200px" />

      {/* 4. Our Philosophy */}
      <section className="py-32 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl font-bold">{aboutContent.philosophy.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {aboutContent.philosophy.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-secondary/10 p-10 rounded-2xl border border-border/50 text-center hover:bg-secondary/20 transition-colors">
                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 font-bold">
                   0{idx + 1}
                 </div>
                 <h3 className="font-heading text-2xl font-bold mb-4">{pillar.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Timeline (simplified vertical for aesthetics) */}
      <section className="py-24 px-6 bg-secondary/10 border-y border-border">
         <div className="container mx-auto max-w-3xl">
           <h2 className="font-heading text-4xl font-bold mb-16 text-center">Our Journey</h2>
           <div className="space-y-12 pl-8 border-l-2 border-primary/20 relative">
             <div className="relative">
               <div className="absolute -left-[41px] top-1 w-5 h-5 bg-background border-4 border-primary rounded-full" />
               <h3 className="text-xl font-bold text-primary mb-2">2003</h3>
               <h4 className="font-heading text-2xl font-bold mb-2">The Beginning</h4>
               <p className="text-muted-foreground">Sangam Caterer opens its first small kitchen in Patiala, focusing entirely on authentic Punjabi weddings.</p>
             </div>
             <div className="relative">
               <div className="absolute -left-[41px] top-1 w-5 h-5 bg-background border-4 border-primary rounded-full" />
               <h3 className="text-xl font-bold text-primary mb-2">2010</h3>
               <h4 className="font-heading text-2xl font-bold mb-2">Expanding Horizons</h4>
               <p className="text-muted-foreground">We introduce our international multi-cuisine division, bringing global flavors to local celebrations.</p>
             </div>
             <div className="relative">
               <div className="absolute -left-[41px] top-1 w-5 h-5 bg-background border-4 border-primary rounded-full" />
               <h3 className="text-xl font-bold text-primary mb-2">2023</h3>
               <h4 className="font-heading text-2xl font-bold mb-2">A Premier Standard</h4>
               <p className="text-muted-foreground">Recognized as Patiala&apos;s premier high-end catering service, serving over 5000 events with a 4.6-star reputation.</p>
             </div>
           </div>
         </div>
      </section>

      {/* 6. Behind the Scenes (Gallery) */}
      <section className="py-32 px-6 bg-background">
         <div className="container mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center">Behind The Scenes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               <div className="relative aspect-square rounded-xl overflow-hidden"><Image src={images.gallery.g1} alt="Behind the scenes" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" /></div>
               <div className="relative aspect-square rounded-xl overflow-hidden"><Image src={images.gallery.g5} alt="Behind the scenes" fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" /></div>
               <div className="relative aspect-square rounded-xl overflow-hidden hidden md:block"><Image src={images.gallery.g6} alt="Behind the scenes" fill sizes="33vw" className="object-cover hover:scale-105 transition-transform duration-500" /></div>
            </div>
         </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-background">
            {aboutContent.cta.headline}
          </h2>
          <CTAGlow>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all inline-flex items-center gap-2"
            >
              {aboutContent.cta.button}
              <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} className="w-5 h-5" />
            </Link>
          </CTAGlow>
        </div>
      </section>
    </div>
  );
}
