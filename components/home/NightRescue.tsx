import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function NightRescue() {
  const codeLines = homeContent.nightRescue.codeLines;

  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Subtle night texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHBhdGggZD0iTTAgMGg0djRIMEptNCA0aDR2NEg0eiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight text-background">
              {homeContent.nightRescue.heading}
            </h2>
            <CTAGlow active={true}>
              <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg font-bold">
                <Link href="/contact">{homeContent.nightRescue.cta}</Link>
              </Button>
            </CTAGlow>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
            <CodeWindowTyping
              lines={codeLines}
              className="bg-black/80 border-white/10 text-green-400 font-mono"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
