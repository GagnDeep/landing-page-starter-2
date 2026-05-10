import type { Metadata } from "next";
import Image from "next/image";
import { contactContent } from "@/content/contact";
import { IMAGES } from "@/lib/images";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { AnimatedGradientMesh } from "@/components/visuals";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
};

export default function ContactPage() {
  const { hero, form, info } = contactContent;

  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-muted/50 border-b border-border">
        <AnimatedGradientMesh className="opacity-30" />
        <div className="container px-4 md:px-6 relative z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground drop-shadow-sm max-w-4xl mx-auto">
            {hero.headline}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

            {/* 2. Contact Form */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <Card className="border-border shadow-md bg-card">
                <CardContent className="p-6 md:p-10">
                  <h2 className="text-3xl font-heading font-semibold mb-8 text-primary">{info.heading}</h2>
                  <ContactForm content={form} />
                </CardContent>
              </Card>
            </div>

            {/* 3. Direct Contact Info & 4. Map & 5. Hours */}
            <div className="lg:col-span-1 order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-semibold">{info.heading}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <a href={`tel:${info.phone.replace(/\s+/g, '')}`} className="text-lg font-medium hover:text-primary transition-colors">
                        {info.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <a href={`mailto:${info.email}`} className="text-lg font-medium hover:text-primary transition-colors break-all">
                        {info.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">{info.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">{info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Map Placeholder */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-muted border border-border overflow-hidden relative group">
                <Image
                  src={IMAGES.contact.mapPlaceholder.url}
                  alt={IMAGES.contact.mapPlaceholder.alt}
                  fill
                  className="object-cover opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-[2px] group-hover:bg-transparent group-hover:backdrop-blur-none transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
