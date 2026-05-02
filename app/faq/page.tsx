"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Content
import { faqContent } from '@/content/faq';

// Visual Components
import { AnimatedGradientMesh } from '@/components/visuals/AnimatedGradientMesh';
import { DotMatrixGrid } from '@/components/visuals/DotMatrixGrid';
import { CTAGlow } from '@/components/visuals/CTAGlow';

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

// Icons
import { HugeiconsIcon } from '@hugeicons/react';
import { Search01Icon } from '@hugeicons/core-free-icons';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredCategories = faqContent.categories.map(category => {
    const filteredQuestions = category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, questions: filteredQuestions };
  }).filter(category => category.questions.length > 0);

  return (
    <>
      {/* 1. Hero Intro & 2. Search Bar */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden pt-20 border-b border-border bg-background">
        <AnimatedGradientMesh baseColor="var(--background)" overlayColor="var(--secondary)" className="opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl flex flex-col items-center">
           <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6">
             {faqContent.hero.heading}
           </h1>
           <p className="text-xl font-light text-muted-foreground mb-12">
             {faqContent.hero.subheading}
           </p>

           <div className="relative w-full max-w-md">
              <HugeiconsIcon icon={Search01Icon} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder={faqContent.searchPlaceholder}
                className="pl-12 py-6 text-lg bg-background/80 backdrop-blur-sm border-border shadow-sm focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
           </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-background relative">
        <DotMatrixGrid className="opacity-20" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

             {/* 3. Categories Sidebar (Desktop) */}
             <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32 space-y-6">
                   <h3 className="font-medium uppercase tracking-widest text-xs text-muted-foreground mb-6">Categories</h3>
                   <ul className="space-y-4">
                     {faqContent.categories.map((cat, idx) => (
                       <li key={idx}>
                         <a href={`#cat-${idx}`} className="text-sm hover:text-primary transition-colors">
                           {cat.categoryName}
                         </a>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* 4. Accordion List */}
             <div className="lg:col-span-9 space-y-24">
                {filteredCategories.length === 0 ? (
                   <div className="text-center py-12 text-muted-foreground">
                      No results found for "{searchQuery}".
                   </div>
                ) : (
                   filteredCategories.map((category, catIdx) => (
                     <div key={catIdx} id={`cat-${catIdx}`} className="scroll-mt-32">
                        <h2 className="font-heading text-3xl mb-8 pb-4 border-b border-border">{category.categoryName}</h2>
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((item, qIdx) => (
                            <AccordionItem key={qIdx} value={`item-${catIdx}-${qIdx}`} className="border-border">
                              <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors py-6">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                                {item.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                     </div>
                   ))
                )}
             </div>

          </div>
        </div>
      </section>

      {/* 5. Still Need Help? CTA */}
      <section className="py-24 bg-muted/20 text-center border-t border-border">
         <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl mb-4">{faqContent.supportCTA.heading}</h2>
            <p className="text-muted-foreground mb-12">{faqContent.supportCTA.description}</p>
            <CTAGlow onClick={() => window.location.href = faqContent.supportCTA.ctaHref}>
               {faqContent.supportCTA.ctaLabel}
            </CTAGlow>
         </div>
      </section>
    </>
  );
}
