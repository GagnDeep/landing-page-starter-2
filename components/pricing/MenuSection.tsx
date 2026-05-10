'use client';

import React, { useState } from 'react';
import { menuCategories, menuItems } from '@/content/pricing';
import { cn } from '@/lib/utils';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('signature');

  // Pricing-03-CategoryFilter & Pricing-04-MenuSectionHeader & Pricing-05-MenuItemList
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* Category Nav */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full border text-sm font-bold tracking-wide uppercase transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-transparent border-border text-foreground hover:border-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {menuCategories.map(cat => {
            if (activeCategory !== cat.id) return null;

            const items = menuItems[cat.id as keyof typeof menuItems];
            if (!items) return null;

            return (
              <div key={cat.id}>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-8 pb-4 border-b border-border/50 text-center md:text-left">
                  {cat.label}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {items.map((item, i) => (
                    <div key={i} className="flex flex-col relative group">
                      <div className="flex items-baseline justify-between w-full mb-1">
                        <h4 className="font-bold text-foreground text-lg bg-background pr-2 relative z-10">{item.name}</h4>
                        {/* Dotted Leader Line */}
                        <div className="flex-1 border-b-[2px] border-dotted border-border/60 mx-2 relative -top-[6px]" />
                        <span className="font-bold text-primary bg-background pl-2 relative z-10">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground pr-12">{item.description}</p>

                      {item.featured && (
                         <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                           Signature
                         </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
