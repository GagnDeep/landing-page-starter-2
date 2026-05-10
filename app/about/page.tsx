import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  AnimatedGradientMesh,
  DotMatrixGrid,
  FloatingBlobs
} from "@/components/visuals";

export const metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 border-b border-border bg-muted/20">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight text-foreground mb-6">
            {aboutContent.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
            {aboutContent.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. The Studio's Origin */}
      <section className="py-24 md:py-32 relative">
        <FloatingBlobs className="opacity-50" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl font-heading text-foreground mb-4">
                {aboutContent.origin.title}
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                {aboutContent.origin.story}
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                {aboutContent.origin.expansion}
              </p>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={siteImages.about.hero.url}
                alt={siteImages.about.hero.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Philosophy */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-heading leading-snug text-primary mb-16">
            {aboutContent.philosophy.pullQuote}
          </blockquote>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {aboutContent.philosophy.details.map((detail, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-xl font-heading font-medium text-foreground border-b border-border pb-2">
                  {detail.heading}
                </h3>
                <p className="text-muted-foreground font-sans leading-relaxed text-sm">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet the Founder */}
      <section className="py-24 md:py-32 relative">
        <DotMatrixGrid opacity={0.1} />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12 relative aspect-square rounded-full overflow-hidden shadow-xl max-w-sm mx-auto">
              <Image
                src={siteImages.home.founderPortrait.url} // Reusing home portrait as specified
                alt={siteImages.home.founderPortrait.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full lg:w-7/12 flex flex-col gap-6 text-center lg:text-left">
              <h2 className="text-4xl font-heading text-foreground">
                {aboutContent.founder.name}
              </h2>
              <p className="text-primary font-sans font-medium uppercase tracking-widest text-sm">
                {aboutContent.founder.title}
              </p>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl">
                {aboutContent.founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Team */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading text-foreground mb-4">
              {aboutContent.team.title}
            </h2>
            <p className="text-muted-foreground font-sans text-lg">
              {aboutContent.team.description}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {aboutContent.team.members.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4 group">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm bg-card">
                  <Image
                    src={siteImages.about.teamGrid[idx]?.url || siteImages.about.hero.url} // Fallback if missing
                    alt={siteImages.about.teamGrid[idx]?.alt || member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Signature Style & 7. Awards */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-heading text-foreground">
                {aboutContent.signatureStyle.title}
              </h2>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                {aboutContent.signatureStyle.description}
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:border-l lg:border-border lg:pl-16">
              <h2 className="text-3xl font-heading text-foreground">
                {aboutContent.awards.title}
              </h2>
              <ul className="flex flex-col gap-4 font-sans text-muted-foreground text-lg">
                {aboutContent.awards.list.map((award, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-32 bg-foreground text-background text-center relative overflow-hidden">
        <AnimatedGradientMesh className="absolute inset-0 opacity-20 mix-blend-screen" fallbackColor="bg-transparent" />
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-heading font-medium">
            {aboutContent.cta.headline}
          </h2>
          <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90 rounded-none px-10 text-lg">
            <Link href="/contact">{aboutContent.cta.button}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
