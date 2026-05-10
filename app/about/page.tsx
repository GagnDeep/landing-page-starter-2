import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { SITE_IMAGES } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { CTAGlowButton } from "@/components/visuals/CTAGlowButton";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home01Icon, UserGroupIcon, FavouriteIcon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <AnimatedGradientMesh variant="subtle" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-sm max-w-4xl mx-auto">
            {aboutContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {aboutContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 bg-card relative z-10 border-y border-border/50 overflow-hidden">
        <FloatingBlobs className="opacity-50" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-border">
              <Image
                src={SITE_IMAGES.hero.about}
                alt="CakeDelights Bakery"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                <HugeiconsIcon icon={Home01Icon} className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                {aboutContent.ourStory.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {aboutContent.ourStory.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Team */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
              <HugeiconsIcon icon={UserGroupIcon} className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {aboutContent.team.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {aboutContent.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Baker 1 */}
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:border-primary transition-colors">
                <Image src={SITE_IMAGES.team.baker1} alt={aboutContent.team.members[0].name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">{aboutContent.team.members[0].name}</h3>
                <p className="text-primary font-medium mb-3">{aboutContent.team.members[0].role}</p>
                <p className="text-muted-foreground">{aboutContent.team.members[0].bio}</p>
              </div>
            </div>

            {/* Baker 2 */}
            <div className="flex flex-col items-center text-center gap-6 group">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-xl group-hover:border-secondary transition-colors">
                <Image src={SITE_IMAGES.team.baker2} alt={aboutContent.team.members[1].name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">{aboutContent.team.members[1].name}</h3>
                <p className="text-secondary font-medium mb-3">{aboutContent.team.members[1].role}</p>
                <p className="text-muted-foreground">{aboutContent.team.members[1].bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Community Focus */}
      <section className="py-24 bg-secondary/20 relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <HugeiconsIcon icon={FavouriteIcon} className="w-12 h-12 text-secondary fill-secondary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              {aboutContent.community.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.community.description}
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-primary relative z-10 overflow-hidden">
        <Image
          src={SITE_IMAGES.hero.bgPattern}
          alt="Decorative Background"
          fill
          className="object-cover opacity-10 mix-blend-overlay"
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-10 drop-shadow-md">
            {aboutContent.cta.headline}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" tabIndex={-1} className="w-full sm:w-auto outline-none block">
              <CTAGlowButton as="div" className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto flex justify-center text-lg py-4 px-8">
                {aboutContent.cta.ctaPrimary}
              </CTAGlowButton>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 font-heading font-semibold text-primary-foreground hover:text-white transition-colors text-center border-2 border-primary-foreground/30 hover:border-primary-foreground/60 rounded-full">
              {aboutContent.cta.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
