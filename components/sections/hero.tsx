import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { content } from "@/content"
import { images } from "@/lib/images"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt={content.hero.heading}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle overlay for text legibility in both light and dark themes */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] transition-colors duration-300" />
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          {content.hero.heading}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
          {content.hero.subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
          <Button asChild size="lg" className="rounded-full">
            <Link href={content.hero.cta.href}>{content.hero.cta.label}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm">
            <Link href={content.hero.secondaryCta.href}>{content.hero.secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
