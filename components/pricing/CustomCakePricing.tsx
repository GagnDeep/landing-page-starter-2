import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  customCakePricing,
  orderingProcess,
  dietaryInfo,
  tieredCakeGraphic,
  bulkOrderDiscount,
  paymentMethods,
  termsOfOrder
} from '@/content/pricing';
import { images } from '@/lib/images';

export function CustomCakePricing() {
  return (
    <section className="w-full bg-muted/20 pb-24 border-t border-border">
      {/* Pricing-08-MenuImageBreak */}
      <div className="w-full h-48 md:h-64 relative mb-24 overflow-hidden">
        <Image src={images.eventCatering.src} alt={images.eventCatering.alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">

        {/* Pricing-09-CustomCakePricing */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{customCakePricing.heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{customCakePricing.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

          {/* Base Pricing Table */}
          <div className="bg-background p-8 md:p-10 rounded-[2rem] border border-border shadow-sm">
            <h3 className="font-heading text-2xl font-bold mb-8 text-center border-b border-border/50 pb-4">Base Pricing Guide</h3>
            <div className="space-y-6">
              {customCakePricing.basePricing.map((tier, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-bold text-foreground">{tier.tier}</span>
                    <span className="font-bold text-primary">{tier.startingPrice}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tier.servings}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-8 text-center italic">{customCakePricing.addons}</p>
          </div>

          {/* Pricing-11-FlavorOptionsList & Pricing-10-TieredCakeGraphic */}
          <div className="flex flex-col justify-center">

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Signature Sponges</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {customCakePricing.flavors.sponges.map((flavor, i) => (
                    <li key={i} className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />{flavor}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Premium Fillings</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {customCakePricing.flavors.fillings.map((filling, i) => (
                    <li key={i} className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />{filling}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="font-heading text-lg font-bold mb-4">{tieredCakeGraphic.heading}</h3>
              <div className="space-y-3">
                {tieredCakeGraphic.tiers.map((t, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="font-bold text-foreground">{t.name} <span className="font-normal text-muted-foreground">({t.size})</span></span>
                    <span className="text-muted-foreground text-right">{t.description}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Pricing-13-BulkOrderDiscount */}
        <div className="bg-muted p-8 text-center rounded-[2rem] border border-border mb-24 max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-bold mb-3">{bulkOrderDiscount.heading}</h3>
          <p className="text-muted-foreground">{bulkOrderDiscount.content}</p>
        </div>

        {/* Pricing-15-OrderingProcess */}
        <div className="mb-24">
           <h3 className="font-heading text-3xl font-bold text-center mb-12">{orderingProcess.heading}</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {orderingProcess.steps.map((step, i) => (
               <div key={i} className="flex flex-col items-center px-4">
                 <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-6 shadow-md">{i + 1}</div>
                 <h4 className="font-bold text-foreground mb-3">{step.title}</h4>
                 <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Pricing-18-StartOrderCTA & Pricing-14-DietarySurchargeInfo */}
        <div className="text-center bg-primary/5 rounded-[2rem] p-12 border border-primary/10 mb-16">
          <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto italic">{dietaryInfo.text}</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold tracking-wide hover:bg-primary/90 transition-all hover:scale-105">
            Start Your Order
          </Link>
        </div>

        {/* Pricing-16-PaymentMethods & Pricing-17-TermsOfOrder */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-border gap-8">
          <div>
            <h4 className="font-bold text-sm text-foreground mb-2">{paymentMethods.heading}</h4>
            <p className="text-xs text-muted-foreground">{paymentMethods.methods.join(" • ")}</p>
          </div>
          <div className="md:text-right max-w-md">
            <h4 className="font-bold text-sm text-foreground mb-2">{termsOfOrder.heading}</h4>
            <p className="text-xs text-muted-foreground">{termsOfOrder.content}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
