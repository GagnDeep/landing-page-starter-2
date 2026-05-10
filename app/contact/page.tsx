import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { seo, hero, contactInfo, form, mapDetails } from "@/content/contact";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";
import { HugeiconsIcon } from "@hugeicons/react";
import { Location01Icon, CallIcon, Mail01Icon, Clock01Icon } from "@hugeicons/core-free-icons";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[35vh] flex items-center pt-24 pb-16 overflow-hidden bg-primary/5">
        <AnimatedGradientMesh speed={30} className="absolute inset-0 opacity-20" />
        <DotMatrixPattern opacity={0.1} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left: Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-8">{contactInfo.title}</h2>
                <div className="space-y-8">

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <HugeiconsIcon icon={Location01Icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{contactInfo.address.label}</h3>
                      <p className="text-muted-foreground leading-relaxed">{contactInfo.address.value}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <HugeiconsIcon icon={CallIcon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{contactInfo.phone.label}</h3>
                      <p className="text-muted-foreground leading-relaxed">{contactInfo.phone.value}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <HugeiconsIcon icon={Mail01Icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{contactInfo.email.label}</h3>
                      <p className="text-muted-foreground leading-relaxed">{contactInfo.email.value}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <HugeiconsIcon icon={Clock01Icon} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{contactInfo.hours.label}</h3>
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{contactInfo.hours.value}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-xl shadow-primary/5">
              <h2 className="text-2xl font-heading font-bold mb-8">{form.title}</h2>
              {/* Note: In Next App Router, form actions would typically use Server Actions. We use standard HTML form attributes for layout representation. */}
              <form action="/" method="GET" className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{form.fields.name}</Label>
                  <Input id="name" name="name" required className="h-12 bg-background" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">{form.fields.email}</Label>
                    <Input id="email" name="email" type="email" required className="h-12 bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{form.fields.phone}</Label>
                    <Input id="phone" name="phone" type="tel" required className="h-12 bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">{form.fields.service}</Label>
                  <Input id="service" name="service" className="h-12 bg-background" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{form.fields.message}</Label>
                  <Textarea id="message" name="message" required className="min-h-[150px] bg-background resize-y" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-lg font-bold">
                  {form.submitButton}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map & Directions */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">{mapDetails.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{mapDetails.description}</p>
          </div>
          <div className="w-full h-[500px] bg-muted border border-border/50 rounded-3xl overflow-hidden relative flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/5 pattern-grid-lg text-primary/10">
               {/* Decorative grid pattern fallback */}
             </div>
             <p className="text-muted-foreground font-medium z-10 bg-background/80 px-6 py-3 rounded-full backdrop-blur-sm border border-border">Interactive Map Integration</p>
          </div>
        </div>
      </section>

    </div>
  );
}
