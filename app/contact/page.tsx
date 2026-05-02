import { contactContent } from "@/content/contact";
import { IMAGE_REGISTRY } from "@/lib/images";
import {
  FadeInScroll,
  CTAGlow,
  KenBurnsImage,
  AnimatedGradientMesh
} from "@/components/visuals";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background">

      {/* 1. Hero & Form Split */}
      <section className="w-full flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-0">

        {/* Left: Form & Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 lg:py-32">
          <FadeInScroll>
            <h1 className="text-5xl md:text-7xl font-heading text-primary mb-6">
              {contactContent.hero.heading}
            </h1>
            <p className="text-xl text-muted-foreground mb-16 max-w-md">
              {contactContent.hero.subheading}
            </p>
          </FadeInScroll>

          <FadeInScroll delay={0.2} className="max-w-md w-full">
            <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="space-y-8">
                <input
                  type="text"
                  placeholder={contactContent.form.name}
                  className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/60"
                />
                <input
                  type="email"
                  placeholder={contactContent.form.email}
                  className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/60"
                />
                <input
                  type="tel"
                  placeholder={contactContent.form.phone}
                  className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/60"
                />
                <select defaultValue="" className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-primary transition-colors text-foreground appearance-none cursor-pointer">
                  <option value="" disabled className="text-muted-foreground/60">{contactContent.form.serviceInterest}</option>
                  {contactContent.form.serviceOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-background text-foreground">{opt}</option>
                  ))}
                </select>
                <textarea
                  placeholder={contactContent.form.message}
                  rows={4}
                  className="w-full bg-transparent border-b border-border/50 py-4 outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground/60 resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col items-start gap-6">
                <CTAGlow>{contactContent.form.submitButton}</CTAGlow>
                <p className="text-xs text-muted-foreground">{contactContent.form.privacyAssurance}</p>
              </div>
            </form>
          </FadeInScroll>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative hidden md:block">
          <KenBurnsImage src={IMAGE_REGISTRY.heroContact.src} alt={IMAGE_REGISTRY.heroContact.alt} priority />
        </div>
      </section>

      {/* Details Grid */}
      <section className="w-full py-32 bg-secondary/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            <FadeInScroll>
              <h3 className="text-2xl font-heading text-primary mb-6">{contactContent.directContact.heading}</h3>
              <div className="space-y-4 text-foreground/80">
                <p className="hover:text-primary transition-colors cursor-pointer">{contactContent.directContact.email}</p>
                <p className="hover:text-primary transition-colors cursor-pointer">{contactContent.directContact.phone}</p>
              </div>
              <div className="mt-12 p-6 border border-primary/20 bg-primary/5 rounded-sm">
                <p className="text-sm font-medium text-primary mb-2">{contactContent.immediateAssistance.heading}</p>
                <p className="text-sm text-foreground/70">{contactContent.immediateAssistance.description}</p>
                <p className="text-sm font-bold text-foreground mt-4">{contactContent.immediateAssistance.phoneLabel} {contactContent.directContact.phone}</p>
              </div>
            </FadeInScroll>

            <FadeInScroll delay={0.2}>
              <h3 className="text-2xl font-heading text-primary mb-6">{contactContent.hours.heading}</h3>
              <div className="space-y-8 text-sm">
                <div>
                  <p className="font-bold text-foreground mb-1">{contactContent.hours.inSalon.label}</p>
                  <p className="text-muted-foreground">{contactContent.hours.inSalon.times}</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">{contactContent.hours.atHome.label}</p>
                  <p className="text-muted-foreground">{contactContent.hours.atHome.times}</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">{contactContent.hours.support.label}</p>
                  <p className="text-muted-foreground">{contactContent.hours.support.times}</p>
                </div>
              </div>
              <p className="text-xs italic text-muted-foreground mt-8">{contactContent.responseTime.text}</p>
            </FadeInScroll>

            <FadeInScroll delay={0.4}>
              <h3 className="text-2xl font-heading text-primary mb-6">{contactContent.location.heading}</h3>
              <p className="text-foreground/80 whitespace-pre-line mb-4">{contactContent.location.address}</p>
              <a href="#" className="text-sm uppercase tracking-widest text-primary border-b border-primary hover:text-foreground transition-colors pb-1 inline-block mb-12">
                {contactContent.location.directionsLink}
              </a>

              <h3 className="text-2xl font-heading text-primary mb-6">{contactContent.social.heading}</h3>
              <div className="space-y-4 text-foreground/80">
                <p className="hover:text-primary transition-colors cursor-pointer">{contactContent.social.instagram}</p>
                <p className="hover:text-primary transition-colors cursor-pointer">{contactContent.social.whatsapp}</p>
              </div>
            </FadeInScroll>

          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="w-full py-40 relative overflow-hidden border-t border-border/40">
        <AnimatedGradientMesh className="absolute inset-0 z-0 opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <FadeInScroll>
            <h2 className="text-4xl md:text-6xl font-heading text-primary mb-4 max-w-2xl mx-auto leading-tight">
              {contactContent.bookNowAlternative.heading}
            </h2>
            <p className="text-muted-foreground mb-12">{contactContent.bookNowAlternative.description}</p>
            <Link href="/booking">
              <CTAGlow>{contactContent.bookNowAlternative.buttonText}</CTAGlow>
            </Link>
          </FadeInScroll>
        </div>
      </section>

    </main>
  );
}
