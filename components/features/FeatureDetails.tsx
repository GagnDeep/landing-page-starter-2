import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  packagingDesign,
  corporateGifting,
  comparisonTable,
  customerTestimonial,
  faqPreview,
  tasteTheDifferenceCTA,
  eventCatering
} from '@/content/features';
import { images } from '@/lib/images';
import { SteamWaves } from '@/components/visuals/SteamWaves';

export function FeatureDetails() {
  return (
    <section className="w-full pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">

        {/* Features-09-DetailZoomGrid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[images.pastryDetails, images.swissRoll, images.rusticBread, images.ingredients].map((img, i) => (
            <div key={i} className="aspect-square relative rounded-[1rem] md:rounded-[2rem] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Features-11-PackagingDesign & Features-13-CorporateGifting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-start">
          <div className="bg-muted/30 p-10 rounded-[2rem] border border-border">
            <h3 className="font-heading text-3xl font-bold mb-4">{packagingDesign.heading}</h3>
            <p className="text-muted-foreground">{packagingDesign.content}</p>
          </div>
          <div className="bg-primary/5 p-10 rounded-[2rem] border border-primary/10">
            <h3 className="font-heading text-3xl font-bold mb-4">{corporateGifting.heading}</h3>
            <p className="text-muted-foreground">{corporateGifting.content}</p>
          </div>
        </div>

        {/* Features-14-EventCatering */}
        <div className="relative rounded-[2rem] overflow-hidden mb-24">
           <div className="aspect-[21/9] w-full relative">
              <Image src={images.eventCatering.src} alt={images.eventCatering.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-background/60 flex flex-col items-center justify-center text-center p-8">
                 <h3 className="font-heading text-4xl font-bold text-foreground mb-4">{eventCatering.heading}</h3>
                 <p className="text-lg text-foreground/80 max-w-2xl">{eventCatering.content}</p>
              </div>
           </div>
        </div>

        {/* Features-15-ComparisonTable */}
        <div className="max-w-4xl mx-auto mb-24">
          <h3 className="font-heading text-3xl font-bold text-center mb-10">{comparisonTable.heading}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {comparisonTable.columns.map((col, i) => (
                    <th key={i} className="py-4 px-6 font-sans text-sm tracking-wider uppercase text-muted-foreground">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                    <td className="py-6 px-6 font-bold text-foreground">{row[0]}</td>
                    <td className="py-6 px-6 text-primary font-medium">{row[1]}</td>
                    <td className="py-6 px-6 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Features-16-CustomerTestimonial */}
        <div className="relative bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-20 text-center mb-24 overflow-hidden">
           <SteamWaves className="opacity-20" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <span className="font-heading text-6xl text-primary-foreground/30 leading-none">"</span>
             <p className="font-heading text-2xl md:text-3xl font-bold mb-6">
               {customerTestimonial.quote}
             </p>
             <p className="font-sans font-bold tracking-widest uppercase">{customerTestimonial.author}</p>
             <p className="text-sm opacity-80">{customerTestimonial.role}</p>
           </div>
        </div>

        {/* Features-17-FAQPreview & Features-18-TasteTheDifferenceCTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="font-heading text-3xl font-bold mb-8">{faqPreview.heading}</h3>
            <div className="space-y-6">
              {faqPreview.questions.map((q, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h4 className="font-bold text-foreground mb-2">{q.q}</h4>
                  <p className="text-muted-foreground">{q.a}</p>
                </div>
              ))}
            </div>
            <Link href="/faq" className="inline-block mt-6 text-primary font-bold hover:underline">View all FAQs &rarr;</Link>
          </div>

          <div className="bg-muted/30 p-12 rounded-[2rem] text-center border border-border">
            <h3 className="font-heading text-3xl font-bold mb-6">{tasteTheDifferenceCTA.heading}</h3>
            <Link href={tasteTheDifferenceCTA.cta.href} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all">
              {tasteTheDifferenceCTA.cta.label}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
