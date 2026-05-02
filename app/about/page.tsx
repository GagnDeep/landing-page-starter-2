"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Content
import { aboutContent } from '@/content/about';

// Images
import { siteImages } from '@/lib/images';

// Visual Components
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs';
import { CTAGlow } from '@/components/visuals/CTAGlow';

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Diamond01Icon,
  RulerIcon,
  SparklesIcon
} from '@hugeicons/core-free-icons';

export default function About() {
  const getValueIcon = (idx: number) => {
    switch(idx) {
      case 0: return <HugeiconsIcon icon={Diamond01Icon} size={32} className="text-primary" />;
      case 1: return <HugeiconsIcon icon={RulerIcon} size={32} className="text-primary" />;
      case 2: return <HugeiconsIcon icon={SparklesIcon} size={32} className="text-primary" />;
      default: return null;
    }
  };

  return (
    <>
      {/* 1. Hero Intro */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--secondary)" className="opacity-70" />
        <DotMatrixGrid />
        <div className="absolute inset-0 -z-20">
           <Image
             src={siteImages.aboutHero}
             alt="Aura Boutique Heritage"
             fill
             className="object-cover opacity-50 mix-blend-overlay"
             priority
           />
           <div className="absolute inset-0 bg-background/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-sm">
             {aboutContent.hero.heading}
           </h1>
           <p className="text-xl md:text-2xl font-light text-foreground/80">
             {aboutContent.hero.subheading}
           </p>
        </div>
      </section>

      {/* 2. The Brand Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
           <p className="text-lg md:text-xl leading-loose text-muted-foreground font-serif">
             {aboutContent.story}
           </p>
        </div>
      </section>

      {/* 3. The Designer Focus */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <FloatingBlobs color1="bg-primary/5" color2="bg-secondary/10" />
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 w-full overflow-hidden shadow-lg">
                 <Image src={siteImages.founderPortrait} alt={aboutContent.designer.name} fill className="object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
              <div className="max-w-lg space-y-8 text-center md:text-left">
                 <h2 className="font-heading text-4xl">Meet {aboutContent.designer.name}</h2>
                 <div className="w-12 h-[1px] bg-primary mx-auto md:mx-0"></div>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   {aboutContent.designer.bio}
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Our Craftsmanship */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 max-w-lg">
                 <h2 className="font-heading text-4xl">{aboutContent.craftsmanship.heading}</h2>
                 <p className="text-lg text-background/80 leading-relaxed">
                   {aboutContent.craftsmanship.description}
                 </p>
              </div>
              <div className="relative aspect-square md:aspect-auto md:h-[600px] w-full">
                 <Image src={siteImages.aboutGallery1} alt="Craftsmanship" fill className="object-cover opacity-80" />
              </div>
           </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {aboutContent.values.map((value, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-6">
                   <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center">
                     {getValueIcon(idx)}
                   </div>
                   <h3 className="font-heading text-2xl">{value.title}</h3>
                   <p className="text-muted-foreground leading-relaxed max-w-xs">{value.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. Boutique Gallery */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
           <h2 className="font-heading text-4xl text-center mb-16">{aboutContent.galleryHeading}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image src={siteImages.aboutGallery1} alt="Studio Interior" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden group md:-translate-y-8">
                <Image src={siteImages.aboutGallery2} alt="Fabric Selection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden group md:-translate-y-16">
                <Image src={siteImages.aboutGallery3} alt="Tailoring Details" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
           </div>
        </div>
      </section>

      {/* 7. Call to Action */}
      <section className="py-32 bg-background relative overflow-hidden text-center">
         <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--accent)" className="opacity-30" />
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl mb-12">Experience the Aura Difference</h2>
            <CTAGlow onClick={() => window.location.href = aboutContent.bottomCta.href}>
               {aboutContent.bottomCta.label}
            </CTAGlow>
         </div>
      </section>
    </>
  );
}
