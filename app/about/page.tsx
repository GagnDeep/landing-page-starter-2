import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";
import { CTAGlow } from "@/components/visuals/CTAGlow";
import { CodeWindowTyping } from "@/components/visuals/CodeWindowTyping";

export const metadata = {
  title: aboutContent.metadata.title,
  description: aboutContent.metadata.description,
  openGraph: {
    title: aboutContent.metadata.title,
    description: aboutContent.metadata.description,
  }
};

export default function AboutPage() {
  const {
    hero,
    originStory,
    missionVision,
    govtRegistration,
    philosophy,
    leadInstructor,
    teamGrid,
    vehicles,
    facility,
    communityImpact,
    milestones,
    behindTheScenes,
    testimonialFocus,
    joinTeamCta,
    finalCta
  } = aboutContent;

  const images = siteImages.about;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 bg-primary text-primary-foreground">
        <AnimatedGradientMesh className="opacity-50 mix-blend-screen" />
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            {hero.headline}
          </RevealText>
          <RevealText as="p" className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {hero.subheadline}
          </RevealText>
        </div>
      </section>

      {/* The Origin Story & Mission/Vision */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                {originStory.headline}
              </RevealText>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {originStory.body}
              </p>
            </div>
            <div className="space-y-12">
              <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                <h3 className="font-heading text-2xl font-bold mb-4">{missionVision.mission.headline}</h3>
                <p className="text-muted-foreground">{missionVision.mission.body}</p>
              </div>
              <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="font-heading text-2xl font-bold mb-4 text-primary">{missionVision.vision.headline}</h3>
                <p className="text-muted-foreground">{missionVision.vision.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Govt Registration & Philosophy */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <RevealText as="h2" className="font-heading text-3xl font-bold">
                {govtRegistration.headline}
              </RevealText>
              <p className="text-muted-foreground leading-relaxed">{govtRegistration.body}</p>
            </div>
            <div className="space-y-6">
              <RevealText as="h2" className="font-heading text-3xl font-bold">
                {philosophy.headline}
              </RevealText>
              <p className="text-muted-foreground leading-relaxed">{philosophy.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Instructor */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images.teamLead.src}
                alt={images.teamLead.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-8">
              <div>
                <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-2">
                  {leadInstructor.headline}
                </RevealText>
                <h3 className="text-2xl font-semibold text-primary">{leadInstructor.name}</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {leadInstructor.bio}
              </p>
              <div className="space-y-3">
                {leadInstructor.credentials.map((cred, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-medium">{cred}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid & Vehicles */}
      <section className="py-24 bg-muted/20 border-t border-border">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl mb-16">
          <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {teamGrid.headline}
          </RevealText>
          <p className="text-lg text-muted-foreground">{teamGrid.description}</p>
        </div>

        <div className="container px-4 md:px-6 mx-auto mt-24">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <DotMatrixGrid />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
                  {vehicles.headline}
                </RevealText>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  {vehicles.body}
                </p>
              </div>
              <div className="space-y-6">
                 <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
                  {facility.headline}
                </RevealText>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  {facility.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact & Milestones */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
             <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
              {communityImpact.headline}
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {communityImpact.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-2xl border border-border">
                <span className="text-5xl font-bold text-primary mb-2 font-heading">{stat.number}</span>
                <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
             <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center">
              {milestones.headline}
            </RevealText>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {milestones.events.map((event, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-card border border-border shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-accent">{event.year}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes & Testimonial */}
      <section className="py-24 bg-muted/20 border-y border-border">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <RevealText as="h2" className="font-heading text-3xl md:text-4xl font-bold">
                {behindTheScenes.headline}
              </RevealText>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {behindTheScenes.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image src={images.behindTheScenes1.src} alt={images.behindTheScenes1.alt} fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-8">
                <Image src={images.behindTheScenes2.src} alt={images.behindTheScenes2.alt} fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-24">
            <CodeWindowTyping
                codeString={`"${testimonialFocus.quote}"\n\n— ${testimonialFocus.author}, ${testimonialFocus.role}`}
                className="bg-card shadow-xl"
              />
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24 bg-background text-center relative overflow-hidden">
        <FloatingBlobs />
        <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-3xl space-y-16">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-bold">{joinTeamCta.headline}</h3>
            <Link href={joinTeamCta.cta.href} className="inline-flex items-center text-primary font-medium hover:underline">
              {joinTeamCta.cta.label} &rarr;
            </Link>
          </div>

          <div className="pt-16 border-t border-border space-y-8">
            <RevealText as="h2" className="font-heading text-4xl md:text-5xl font-bold">
              {finalCta.headline}
            </RevealText>
            <p className="text-xl text-muted-foreground">
              {finalCta.subheadline}
            </p>
            <div className="pt-4">
              <CTAGlow>
                <Link
                  href={finalCta.primaryCta.href}
                  className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-10 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  {finalCta.primaryCta.label}
                </Link>
              </CTAGlow>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
