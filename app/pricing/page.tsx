"use client";

import React from 'react';
import { siteImages } from "@/lib/images";

import Link from 'next/link';
import Image from 'next/image';

// Content
import { pricingContent } from '@/content/pricing';

// Visual Components
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { FloatingBlobs } from '@/components/visuals/FloatingBlobs';
import { CTAGlow } from '@/components/visuals/CTAGlow';

// UI Components
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import { SparklesIcon, InformationCircleIcon } from '@hugeicons/core-free-icons';

export default function Pricing() {
  return (
    <>
      {/* 1. Hero Intro */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden pt-20 border-b border-border bg-background">
        <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--muted)" className="opacity-40" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
           <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">
             {pricingContent.hero.heading}
           </h1>
           <p className="text-xl font-light text-muted-foreground">
             {pricingContent.hero.subheading}
           </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-background relative overflow-hidden">
        <DotMatrixGrid />
        <FloatingBlobs color1="bg-secondary/10" color2="bg-primary/5" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 space-y-24">

          {/* 2. Stitching Rates Table & 3. Fabric Cost Note */}
          <div className="space-y-8">
             <div className="flex items-center space-x-3 mb-8">
                <HugeiconsIcon icon={SparklesIcon} size={28} className="text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl">{pricingContent.stitchingRatesHeading}</h2>
             </div>

             <div className="bg-card border border-border shadow-sm overflow-hidden">
               <Table>
                 <TableHeader className="bg-muted/50">
                   <TableRow>
                     <TableHead className="w-[40%] font-medium uppercase tracking-widest text-xs">Garment Type</TableHead>
                     <TableHead className="w-[40%] font-medium uppercase tracking-widest text-xs">Details</TableHead>
                     <TableHead className="text-right font-medium uppercase tracking-widest text-xs">Starting Price</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                   {pricingContent.stitchingRates.map((rate, index) => (
                     <TableRow key={index} className="hover:bg-muted/20 transition-colors">
                       <TableCell className="font-medium text-base py-6">{rate.name}</TableCell>
                       <TableCell className="text-muted-foreground text-sm">{rate.description}</TableCell>
                       <TableCell className="text-right font-medium text-lg text-primary">{rate.basePrice}</TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </div>

             <div className="flex items-start space-x-3 bg-secondary/20 p-6 border-l-4 border-primary">
                <HugeiconsIcon icon={InformationCircleIcon} className="text-primary shrink-0 mt-0.5" size={24} />
                <p className="text-sm text-foreground/80 leading-relaxed italic font-serif">
                  {pricingContent.fabricNote}
                </p>
             </div>
          </div>

          {/* 4. Add-ons & Embellishments */}
          <div className="space-y-8">
             <h2 className="font-heading text-3xl md:text-4xl mb-8">{pricingContent.addonsHeading}</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingContent.addons.map((addon, index) => (
                  <Card key={index} className="border-border bg-card/50 backdrop-blur-sm shadow-sm hover:border-primary/50 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">{addon.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-heading text-primary">{addon.startingPrice}</p>
                    </CardContent>
                  </Card>
                ))}
             </div>
          </div>

          {/* 5. FAQ Snippet */}
          <div className="space-y-8 border-t border-border pt-24">
             <h2 className="font-heading text-3xl md:text-4xl mb-8">{pricingContent.faqHeading}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {pricingContent.faqSnippet.map((faq, index) => (
                 <div key={index} className="space-y-4">
                   <h3 className="font-medium text-lg">{faq.question}</h3>
                   <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      {/* 6. Contact/Book CTA */}
      <section className="py-32 bg-foreground text-background relative overflow-hidden text-center">
         <Image src={siteImages.customStitchingBanner} alt="Background" fill className="object-cover opacity-10 mix-blend-luminosity" />
         <div className="absolute inset-0 -z-10"></div>
         <div className="container mx-auto px-6 relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl mb-12">Ready to create something beautiful?</h2>
            <CTAGlow onClick={() => window.location.href = pricingContent.contactCta.href}>
               {pricingContent.contactCta.label}
            </CTAGlow>
         </div>
      </section>
    </>
  );
}
