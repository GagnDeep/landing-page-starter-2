"use client";

import { faqContent } from "@/content/faq";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col w-full relative">
      <DotMatrixGrid className="opacity-20 fixed inset-0 z-[-1]" />

      {/* Hero */}
      <section className="pt-24 pb-16 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6">{faqContent.hero.title}</h1>
          <p className="text-xl text-muted-foreground font-serif">{faqContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Search */}
      <section className="pb-16">
         <div className="container mx-auto px-6 max-w-2xl">
            <div className="relative">
               <input
                  type="text"
                  placeholder={faqContent.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-card border border-border rounded-lg shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 text-foreground"
               />
            </div>
         </div>
      </section>

      {/* FAQ Accordions */}
      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-3xl space-y-16">
          {faqContent.categories.map((category, catIdx) => {
             // Filter questions based on search query
             const filteredQuestions = category.questions.filter(q =>
               q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
               q.a.toLowerCase().includes(searchQuery.toLowerCase())
             );

             if (filteredQuestions.length === 0) return null;

             return (
               <div key={catIdx} className="space-y-6">
                 <h2 className="text-2xl font-heading text-primary border-b border-border pb-4">{category.title}</h2>
                 <div className="space-y-4">
                   {filteredQuestions.map((item, qIdx) => {
                     const id = `${catIdx}-${qIdx}`;
                     const isOpen = openItems.includes(id);
                     return (
                       <div key={qIdx} className="border border-border/50 rounded-lg bg-card overflow-hidden transition-colors hover:border-border">
                         <button
                           onClick={() => toggleItem(id)}
                           className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-muted/50"
                           aria-expanded={isOpen}
                         >
                           <span className="font-medium text-lg pr-8">{item.q}</span>
                           <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0", isOpen && "rotate-180")} />
                         </button>
                         <div
                           className={cn(
                             "overflow-hidden transition-all duration-300 ease-in-out",
                             isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                           )}
                         >
                           <p className="p-6 pt-0 text-muted-foreground leading-relaxed font-serif">
                             {item.a}
                           </p>
                         </div>
                       </div>
                     );
                   })}
                 </div>
               </div>
             );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground text-center border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading mb-4 text-primary">{faqContent.cta.heading}</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">{faqContent.cta.text}</p>
          <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm inline-block hover:bg-primary/90 transition-colors">
            {faqContent.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
