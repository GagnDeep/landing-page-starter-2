import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ourPhilosophy, kitchenStats, meetTheBakers, communityInvolvement, awardsAndRecognition, joinOurFamilyCTA } from '@/content/about';
import { images } from '@/lib/images';
import { MicroIcon } from '@/components/visuals/MicroIconSet';
import { OrganicSectionDivider } from '@/components/visuals/OrganicSectionDivider';

export function PhilosophyAndTeam() {
  const philosophyIcons = ["wheat", "oven", "bread"] as const;

  return (
    <section className="w-full relative pb-24 bg-background">
      <div className="absolute top-0 left-0 w-full -translate-y-[99%] text-muted/20 z-10">
        <OrganicSectionDivider className="fill-current" />
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-16">

        {/* About-09-OurPhilosophySection */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-12">{ourPhilosophy.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {ourPhilosophy.values.map((value, i) => (
              <div key={i} className="flex flex-col items-center">
                {/* About-10-PhilosophyCard */}
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 text-primary">
                  <MicroIcon name={philosophyIcons[i]} className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About-11-TheKitchenTour & About-12-KitchenStats */}
        <div className="relative rounded-[2rem] overflow-hidden bg-foreground text-background my-24">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
            <Image src={images.doughKneading.src} alt={images.doughKneading.alt} fill className="object-cover" />
          </div>
          <div className="relative z-10 p-12 md:p-24 bg-foreground/60">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {kitchenStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-background/20 last:border-0">
                  <span className="font-heading text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</span>
                  <span className="font-sans font-medium tracking-wider uppercase text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About-13-MeetTheBakersHeader & About-14-BakerProfileGrid */}
        <div className="text-center mb-24">
          <h2 className="font-heading text-4xl font-bold text-foreground mb-12">{meetTheBakers.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {meetTheBakers.profiles.map((profile, i) => (
              <div key={i} className="flex flex-col group">
                {/* About-15-BakerProfileCard */}
                <div className="aspect-[3/4] relative rounded-[2rem] overflow-hidden mb-6 bg-muted">
                  <Image src={images.bakerPortrait.src} alt={images.bakerPortrait.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 border border-border/20 rounded-[2rem] pointer-events-none z-10" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">{profile.name}</h3>
                <p className="font-sans text-sm font-bold text-primary uppercase tracking-wider mb-3">{profile.role}</p>
                <p className="text-muted-foreground text-sm italic">"{profile.specialty}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* About-16-CommunityInvolvement */}
        <div className="bg-primary/5 rounded-[2rem] p-10 md:p-16 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-primary/10">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">{communityInvolvement.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {communityInvolvement.content}
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-[1rem] overflow-hidden">
             <Image src={images.storefront.src} alt={images.storefront.alt} fill className="object-cover" />
          </div>
        </div>

        {/* About-17-AwardsAndRecognition */}
        <div className="text-center mb-24 border-y border-border/50 py-12">
           <h3 className="font-sans text-sm font-bold text-primary uppercase tracking-wider mb-8">Recognized for Excellence</h3>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <span className="font-heading text-lg font-bold text-foreground max-w-xs">{awardsAndRecognition[0]}</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/30" />
              <span className="font-heading text-lg font-bold text-foreground max-w-xs">{awardsAndRecognition[1]}</span>
           </div>
        </div>

        {/* About-18-JoinOurFamilyCTA */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">{joinOurFamilyCTA.heading}</h2>
          <Link href={joinOurFamilyCTA.cta.href} className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border text-foreground font-bold hover:border-primary hover:text-primary transition-colors">
            {joinOurFamilyCTA.cta.label}
          </Link>
        </div>

      </div>
    </section>
  );
}
