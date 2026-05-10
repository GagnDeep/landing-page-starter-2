import Image from "next/image";
import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedGradientMesh, LogoMarquee, DotMatrixGrid, FloatingBlobs } from "@/components/visuals";
import { CheckCircle2, Award, Users, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  const {
    hero, origin, mission, leadership,
    behindTheScenes, community, awards, cta
  } = aboutContent;

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary-foreground text-white">
        <div className="absolute inset-0 opacity-40">
           <Image
              src={IMAGES.about.hero.url}
              alt={IMAGES.about.hero.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-primary drop-shadow-sm">
            {hero.headline}
          </h1>
        </div>
      </section>

      {/* 2. The Origin Story */}
      <section className="py-24 relative overflow-hidden">
        <AnimatedGradientMesh className="opacity-20" />
        <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-heading font-semibold text-primary">{origin.heading}</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {origin.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-muted/30 border-y border-border relative">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-heading font-semibold text-center mb-16">{mission.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mission.values.map((value, i) => (
              <Card key={i} className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {i === 0 && <CheckCircle2 className="w-6 h-6" />}
                    {i === 1 && <Award className="w-6 h-6" />}
                    {i === 2 && <HeartHandshake className="w-6 h-6" />}
                  </div>
                  <CardTitle className="font-heading text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Leadership */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-heading font-semibold text-center mb-16">{leadership.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {leadership.profiles.map((profile, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6">
                <div className="w-64 h-64 rounded-t-full rounded-b-xl overflow-hidden relative border border-border shadow-lg">
                  <Image
                    src={IMAGES.about.founder.url}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-medium mb-1">{profile.name}</h3>
                  <p className="text-primary font-medium text-lg mb-4">{profile.role}</p>
                  <p className="text-muted-foreground">{profile.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Behind the Scenes */}
      <section className="py-24 bg-primary-foreground text-white relative overflow-hidden">
        <DotMatrixGrid className="absolute inset-0 opacity-10 pointer-events-none" rows={10} cols={15} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-16">
            <h2 className="text-4xl font-heading font-semibold text-primary">{behindTheScenes.heading}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{behindTheScenes.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {behindTheScenes.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm tracking-wider uppercase text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Community Impact */}
      <section className="py-24 bg-background relative overflow-hidden">
        <FloatingBlobs className="absolute inset-0 opacity-30 pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-heading font-semibold">{community.heading}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              {community.description}
            </p>
          </div>
          <div className="flex-1 w-full aspect-video rounded-2xl overflow-hidden relative shadow-xl border border-border">
             <Image
                src={IMAGES.home.caseStudy.url}
                alt="Community event catering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
          </div>
        </div>
      </section>

      {/* 7. Awards */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">{awards.heading}</p>
          <LogoMarquee logos={awards.badgesAlt} speed={40} className="py-4 max-w-3xl mx-auto" />
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container px-4 md:px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold max-w-2xl mx-auto">
            {cta.heading}
          </h2>
          <Button size="lg" variant="secondary" className="rounded-full shadow-glow text-lg h-16 px-12 font-semibold">
            {cta.button}
          </Button>
        </div>
      </section>

    </div>
  );
}
