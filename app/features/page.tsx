"use client";

import React from 'react';
import Image from 'next/image';

// Content
import { featuresContent } from '@/content/features';

// Images
import { siteImages } from '@/lib/images';

// Visual Components
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs';
import { CTAGlow } from '@/components/visuals/CTAGlow';
import { AnimatedStatCounter } from '@/components/visuals/AnimatedStatCounter';

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Scissor01Icon,
  ShoppingBag01Icon,
  Diamond01Icon,
  DeliveryTruck02Icon,
  Tick01Icon
} from '@hugeicons/core-free-icons';

export default function Features() {
  const getServiceIcon = (idx: number) => {
    switch(idx) {
      case 0: return <HugeiconsIcon icon={Scissor01Icon} size={48} className="text-primary mb-6" />;
      case 1: return <HugeiconsIcon icon={ShoppingBag01Icon} size={48} className="text-primary mb-6" />;
      case 2: return <HugeiconsIcon icon={Diamond01Icon} size={48} className="text-primary mb-6" />;
      case 3: return <HugeiconsIcon icon={DeliveryTruck02Icon} size={48} className="text-primary mb-6" />;
      default: return null;
    }
  };

  const serviceImages = [
    siteImages.customStitchingBanner,
    siteImages.featuredCollection,
    siteImages.lookbook1,
    siteImages.lookbook4
  ];

  return (
    <>
      {/* 1. Hero Intro */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20 border-b border-border bg-background">
        <DotMatrixGrid />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
           <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
             {featuresContent.hero.heading}
           </h1>
           <p className="text-xl md:text-2xl font-light text-muted-foreground">
             {featuresContent.hero.subheading}
           </p>
        </div>
      </section>

      {/* 2-5. Services Loop */}
      <div className="bg-background">
        {featuresContent.services.map((service, idx) => {
           const isEven = idx % 2 === 0;
           return (
             <section key={idx} className={`py-24 ${isEven ? 'bg-background' : 'bg-muted/20'}`}>
                <div className="container mx-auto px-6">
                   <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      {/* Text Column */}
                      <div className={`space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                         {getServiceIcon(idx)}
                         <h2 className="font-heading text-4xl">{service.title}</h2>
                         <p className="text-lg text-muted-foreground leading-relaxed">
                           {service.description}
                         </p>

                         {service.details && (
                           <ul className="space-y-4 pt-4">
                             {service.details.map((detail, dIdx) => (
                               <li key={dIdx} className="flex items-center space-x-3">
                                 <HugeiconsIcon icon={Tick01Icon} className="text-primary" size={20} />
                                 <span className="font-medium text-foreground/80">{detail}</span>
                               </li>
                             ))}
                           </ul>
                         )}

                         {/* Specific accent for Express Delivery */}
                         {idx === 3 && (
                            <div className="pt-8">
                               <AnimatedStatCounter end={4} suffix="-Day" className="text-5xl md:text-7xl font-bold text-accent" />
                               <span className="uppercase tracking-widest text-sm font-medium">Pan-India Dispatch</span>
                            </div>
                         )}
                      </div>

                      {/* Image Column */}
                      <div className={`relative w-full aspect-[4/5] md:aspect-square ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                         <div className="absolute inset-0 bg-primary/5 -translate-x-4 translate-y-4"></div>
                         <Image src={serviceImages[idx]} alt={service.title} fill className="object-cover shadow-sm" />
                      </div>
                   </div>
                </div>
             </section>
           );
        })}
      </div>

      {/* 6. Book an Appointment CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden text-center">
         <FloatingBlobs color1="bg-primary/20" color2="bg-accent/20" className="mix-blend-overlay" />
         <div className="container mx-auto px-6 relative z-10 max-w-2xl flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">{featuresContent.bookingCta.heading}</h2>
            <p className="text-xl text-background/80 mb-12 leading-relaxed">
               {featuresContent.bookingCta.description}
            </p>
            <CTAGlow onClick={() => window.location.href = featuresContent.bookingCta.cta.href}>
               {featuresContent.bookingCta.cta.label}
            </CTAGlow>
         </div>
      </section>
    </>
  );
}
