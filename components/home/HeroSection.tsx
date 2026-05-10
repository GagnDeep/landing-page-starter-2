import { homeContent } from "@/content/home";
import { siteImages } from "@/lib/images";
import { AnimatedHeroAurora, FloatingBlobs, CTAGlow } from "@/components/visuals";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative w-full min-h-[90svh] flex items-center justify-center overflow-hidden pt-20">
      <AnimatedHeroAurora className="absolute inset-0" />
      <FloatingBlobs blobCount={4} className="absolute inset-0" />

      {/* Background Image Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/40 dark:bg-black/60">
        <Image
          src={siteImages.heroCatering.src}
          alt={siteImages.heroCatering.alt}
          fill
          priority
          className="object-cover opacity-60 mix-blend-overlay"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-4xl">
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-lg leading-tight">
          {hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow-md leading-relaxed">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <CTAGlow glowColor="var(--primary)" glowOpacity={0.6}>
            <Button size="lg" asChild className="rounded-full px-8 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl border border-primary/50">
              <Link href="/contact">{hero.primaryCta}</Link>
            </Button>
          </CTAGlow>
          <Button size="lg" variant="outline" asChild className="rounded-full px-8 text-lg font-semibold bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-md">
            <Link href="/pricing">{hero.secondaryCta}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
