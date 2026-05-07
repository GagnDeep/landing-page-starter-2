"use client";

import Image from "next/image";
import { aboutContent } from "@/content/about";
import { SITE_IMAGES } from "@/lib/images";
import {
  AnimatedGradient,
  FadeInUp,
  ParallaxImage,
  AnimatedLine,
  HoverZoomImage,
  MagneticButton,
  TextReveal,
  ParticleField,
} from "@/components/visuals";

export default function AboutPage() {
  const {
    hero,
    founderLetter,
    teamGrid,
    coreValues,
    studioVibe,
    milestones,
    pressMentions,
    philanthropy,
    ctaSection,
  } = aboutContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 2. Hero Section (The Story Begins) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-background">
        <ParticleField particleCount={40} color="#e5e5e5" className="opacity-40" />
        <div className="absolute inset-0 -z-10">
          <Image
            src={SITE_IMAGES.heroAbout.src}
            alt={SITE_IMAGES.heroAbout.alt}
            fill
            priority
            className="object-cover brightness-[0.8] dark:brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <TextReveal
            text={hero.headline}
            as="h1"
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white max-w-4xl leading-tight mb-6 justify-center"
          />
          <FadeInUp delay={0.4} className="max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide">
              {hero.subtitle}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 3. Founder's Letter */}
      <section className="py-spacing-4xl bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeInUp>
            <p className="font-heading text-2xl italic mb-10 text-muted-foreground">{founderLetter.greeting}</p>
            <div className="space-y-8 text-lg text-foreground/80 leading-relaxed font-light">
              {founderLetter.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-16 text-right">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">{founderLetter.signOff}</p>
              <p className="font-heading text-4xl text-primary">{founderLetter.signatureName}</p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 4. The Team Grid */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <FadeInUp>
              <h2 className="font-heading text-4xl mb-4">{teamGrid.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{teamGrid.description}</p>
            </FadeInUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamGrid.members.map((member, idx) => (
              <FadeInUp key={member.name} delay={idx * 0.1}>
                {/* Fallback image logic for team grid as unassigned in lib/images */}
                <HoverZoomImage
                  src={idx === 0 ? SITE_IMAGES.founderPortrait.src : SITE_IMAGES.teamCollaboration.src}
                  alt={member.name}
                  aspectRatio="portrait"
                  className="mb-6 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-widest mt-1">{member.role}</p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Core Values */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-16 text-center">{coreValues.heading}</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {coreValues.values.map((value, idx) => (
              <FadeInUp key={value.title} delay={idx * 0.15} className="flex flex-col">
                <div className="font-heading text-5xl text-primary/20 mb-6">0{idx + 1}</div>
                <h3 className="font-heading text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {value.description}
                </p>
                <AnimatedLine className="mt-8" />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Studio / Office Vibe */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl mb-16">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-6">{studioVibe.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{studioVibe.description}</p>
          </FadeInUp>
        </div>
        <ParallaxImage
          src={SITE_IMAGES.studioVibe.src}
          alt={SITE_IMAGES.studioVibe.alt}
          className="h-[60vh] md:h-[80vh] w-full"
        />
      </section>

      {/* 7. Milestones / History Timeline */}
      <section className="py-32 bg-background relative overflow-hidden">
        <AnimatedGradient className="absolute inset-0 opacity-10" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <FadeInUp>
            <h2 className="font-heading text-4xl text-center mb-20">{milestones.heading}</h2>
          </FadeInUp>
          <div className="space-y-16">
            {milestones.timeline.map((item, idx) => (
              <FadeInUp key={item.year} delay={0.1} className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4 text-primary font-heading text-3xl shrink-0">
                  {item.year}
                </div>
                <div className="md:w-3/4 border-l pl-8 border-border">
                  <h3 className="text-xl font-medium mb-2">{item.event}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.details}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Press Mentions Grid */}
      <section className="py-32 bg-muted/20">
        <div className="container mx-auto px-6 md:px-12">
          <FadeInUp>
            <h2 className="font-heading text-4xl mb-16 text-center">{pressMentions.heading}</h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pressMentions.articles.map((article, idx) => (
              <FadeInUp key={article.publication} delay={idx * 0.2}>
                <div className="bg-background p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
                   <p className="font-heading text-2xl italic leading-relaxed text-foreground/90 mb-8">
                     {article.quote}
                   </p>
                   <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
                     — {article.publication}
                   </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Philanthropy */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <FadeInUp className="w-full md:w-1/2">
               <h2 className="font-heading text-4xl mb-6">{philanthropy.heading}</h2>
               <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                 {philanthropy.description}
               </p>
               <button className="text-sm uppercase tracking-widest font-medium border-b border-primary text-primary hover:text-foreground hover:border-foreground transition-colors pb-1">
                 {philanthropy.ctaText}
               </button>
            </FadeInUp>
            <FadeInUp className="w-full md:w-1/2" delay={0.2}>
               <HoverZoomImage
                 src={SITE_IMAGES.destBali.src}
                 alt="Philanthropy focus"
                 aspectRatio="video"
                 className="rounded-lg shadow-lg"
               />
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 10. Call to Action */}
      <section className="py-40 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-primary/5 dark:bg-primary/10" />
        <ParticleField particleCount={50} color="#8b8b8b" className="opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-foreground">
          <FadeInUp>
            <h2 className="font-heading text-5xl md:text-6xl mb-6">{ctaSection.heading}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              {ctaSection.description}
            </p>
            <MagneticButton className="px-10 py-4 text-lg">
              {ctaSection.buttonText}
            </MagneticButton>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
