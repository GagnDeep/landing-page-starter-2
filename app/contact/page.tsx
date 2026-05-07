import { contactContent } from "@/content/contact";
import { FadeIn, RevealCover, MagneticButton } from "@/components/visuals";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const { hero, form, info } = contactContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-20">
      {/* 1. Hero */}
      <section className="py-24 bg-card border-b border-border/50">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <RevealCover duration={1}>
            <h1 className="text-5xl md:text-7xl font-heading mb-6">{hero.headline}</h1>
          </RevealCover>
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">{hero.subheadline}</p>
          </FadeIn>
        </div>
      </section>

      {/* 2 & 3. Form and Info Split */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {/* The Form */}
            <FadeIn direction="right">
              <div>
                <h2 className="font-heading text-3xl mb-8">{form.heading}</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">{form.fields.name}</label>
                      <input id="name" type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">{form.fields.email}</label>
                      <input id="email" type="email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">{form.fields.subject}</label>
                    <input id="subject" type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">{form.fields.message}</label>
                    <textarea id="message" rows={5} className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <MagneticButton className="mt-8">
                    <Button type="button" size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
                      {form.cta}
                    </Button>
                  </MagneticButton>
                </form>
              </div>
            </FadeIn>

            {/* Direct Info */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-muted p-10 h-full flex flex-col justify-center">
                <h2 className="font-heading text-3xl mb-10">{info.heading}</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Phone</h3>
                    <p className="font-heading text-2xl text-primary">{info.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Email</h3>
                    <p className="font-heading text-2xl">{info.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Address</h3>
                    <p className="text-lg">{info.address}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Hours</h3>
                    <p className="text-lg">{info.hours}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Map (Placeholder aesthetic) */}
      <section className="h-[40vh] w-full bg-zinc-200 dark:bg-zinc-900 relative">
        {/* Intentionally abstract map representation matching design system */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <p className="tracking-widest uppercase text-sm">[ Interactive Map Slot ]</p>
        </div>
      </section>
    </main>
  );
}
