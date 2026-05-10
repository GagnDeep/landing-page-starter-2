import React from 'react';
import { theBeginning, founderQuote, generationsTimeline } from '@/content/about';
import { SteamWaves } from '@/components/visuals/SteamWaves';

export function TheBeginning() {
  return (
    <section className="w-full bg-muted/20 relative py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">

        {/* About-04-TheBeginningText */}
        <div className="mb-24">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">
            {theBeginning.heading}
          </h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
            <p className="first-letter:font-heading first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
              {(theBeginning.content as string[])[0]}
            </p>
            <p className="mt-6">
              {(theBeginning.content as string[])[1]}
            </p>
          </div>
        </div>

        {/* About-06-FounderQuote */}
        <div className="relative bg-primary/5 rounded-[2rem] p-10 md:p-16 mb-24 overflow-hidden text-center border border-primary/10">
          <SteamWaves className="opacity-40" />
          <span className="relative z-10 font-heading text-6xl text-primary/30 leading-none">"</span>
          <p className="relative z-10 text-2xl md:text-3xl font-heading text-foreground mb-8 leading-snug">
            {founderQuote.quote}
          </p>
          <div className="relative z-10">
            <p className="font-bold font-sans text-foreground uppercase tracking-widest">{founderQuote.author}</p>
            <p className="text-sm text-muted-foreground">{founderQuote.role}</p>
          </div>
        </div>

        {/* About-07-GenerationsTimeline */}
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-16">
            {generationsTimeline.map((node, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:justify-between group">

                {/* About-08-TimelineNode */}
                <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 pr-0 md:pr-8">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{node.title}</h3>
                  <p className="font-sans font-bold text-primary mb-3">{node.year}</p>
                </div>

                {/* Node Marker */}
                <div className="absolute left-0 md:left-1/2 top-1 md:top-2 w-14 h-14 -translate-x-0 md:-translate-x-1/2 bg-background border-4 border-muted rounded-full flex items-center justify-center transition-colors group-hover:border-primary/50">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>

                <div className="md:w-5/12 text-left pl-16 md:pl-8 pt-2 md:pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
