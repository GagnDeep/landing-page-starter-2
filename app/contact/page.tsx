import type { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { ContactForm } from "@/components/visuals/ContactForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, CallIcon, Mail01Icon, Clock01Icon } from "@hugeicons/core-free-icons";
import { SITE_IMAGES } from "@/lib/images";
import Image from "next/image";

export const metadata: Metadata = {
  title: contactContent.metadata.title,
  description: contactContent.metadata.description,
};

export default function ContactPage() {
  const getIconForType = (type: string) => {
    switch (type) {
      case "Address": return Location01Icon;
      case "Phone": return CallIcon;
      case "Email": return Mail01Icon;
      case "Hours": return Clock01Icon;
      default: return Location01Icon;
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <AnimatedGradientMesh variant="subtle" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 drop-shadow-sm max-w-4xl mx-auto">
            {contactContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {contactContent.hero.subheadline}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-card relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* 2. Contact Information Cards */}
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-display font-bold text-foreground">
                {contactContent.infoCards.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactContent.infoCards.cards.map((card, idx) => {
                  const Icon = getIconForType(card.type);
                  return (
                    <div key={idx} className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <HugeiconsIcon icon={Icon} className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">{card.type}</p>
                        <p className="text-foreground font-medium">{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 4. Location Map */}
              <div className="mt-8 bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {contactContent.map.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {contactContent.map.description}
                </p>
                <div className="w-full aspect-video bg-muted rounded-xl flex items-center justify-center overflow-hidden relative group">
                  {/* Conceptual map placeholder */}
                  <Image
                    src={SITE_IMAGES.contact.mapPlaceholder}
                    alt="Map location placeholder"
                    fill
                    className="object-cover opacity-50 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="relative z-10 bg-background/90 backdrop-blur px-6 py-3 rounded-full border border-border flex items-center gap-2 font-medium text-foreground">
                    <HugeiconsIcon icon={Location01Icon} className="w-5 h-5 text-primary" />
                    {contactContent.map.cta}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Direct Message Form */}
            <div className="bg-background border border-border shadow-xl rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
              {/* Decorative blob inside form container */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  {contactContent.form.title}
                </h2>
                <p className="text-muted-foreground mb-10">
                  {contactContent.form.description}
                </p>

                <ContactForm
                  fields={contactContent.form.fields}
                  ctaLabel={contactContent.form.cta}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
