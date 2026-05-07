import { contactContent } from "@/content/contact";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { FadeIn, RevealText, MagneticButton } from "@/components/visuals";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: contactContent.meta.title,
  description: contactContent.meta.description,
};

export default function ContactPage() {
  const c = contactContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen bg-background flex flex-col lg:flex-row">
        {/* Left Column - Info */}
        <section className="w-full lg:w-1/2 pt-32 pb-24 px-6 lg:px-24 flex flex-col justify-center border-r border-border bg-secondary/10 relative">
          <FadeIn direction="right" className="max-w-xl mx-auto lg:mx-0 w-full">
            <h1 className="font-heading text-5xl md:text-6xl font-medium mb-8 leading-tight">
              <RevealText text={c.leftColumn.greeting} />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-16">
              {c.leftColumn.description}
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Direct Inquiry</h3>
                <div className="flex flex-col space-y-2">
                  <a href={`mailto:${c.leftColumn.contactDetails.email}`} className="text-xl font-heading hover:text-primary transition-colors">
                    {c.leftColumn.contactDetails.email}
                  </a>
                  <a href={`tel:${c.leftColumn.contactDetails.phone.replace(/[^0-9+]/g, '')}`} className="text-xl font-heading hover:text-primary transition-colors">
                    {c.leftColumn.contactDetails.phone}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Global Offices</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {c.leftColumn.locations.map((loc, i) => (
                    <div key={i}>
                      <h4 className="font-heading text-2xl font-medium mb-2">{loc.city}</h4>
                      <p className="text-muted-foreground">{loc.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Right Column - Form */}
        <section className="w-full lg:w-1/2 pt-32 pb-24 px-6 lg:px-24 flex items-center bg-background">
          <FadeIn direction="up" className="max-w-xl mx-auto w-full">
            <h2 className="font-heading text-4xl font-medium mb-10">{c.form.title}</h2>

            <form className="space-y-8" action="/">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm tracking-wide text-foreground/80">{c.form.fields.name}</Label>
                  <Input id="name" type="text" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" required />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm tracking-wide text-foreground/80">{c.form.fields.email}</Label>
                  <Input id="email" type="email" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-sm tracking-wide text-foreground/80">{c.form.fields.phone}</Label>
                  <Input id="phone" type="tel" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="eventDate" className="text-sm tracking-wide text-foreground/80">{c.form.fields.eventDate}</Label>
                  <Input id="eventDate" type="date" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg text-foreground/60" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="guestCount" className="text-sm tracking-wide text-foreground/80">{c.form.fields.guestCount}</Label>
                  <Input id="guestCount" type="text" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-sm tracking-wide text-foreground/80">{c.form.fields.location}</Label>
                  <Input id="location" type="text" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="eventType" className="text-sm tracking-wide text-foreground/80">{c.form.fields.eventType}</Label>
                <Input id="eventType" type="text" className="h-12 rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm tracking-wide text-foreground/80">{c.form.fields.message}</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="rounded-none bg-transparent border-0 border-b border-border focus-visible:ring-0 focus-visible:border-primary px-0 text-lg resize-none"
                />
              </div>

              <div className="pt-6">
                <MagneticButton type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90 py-5 text-sm uppercase tracking-widest font-bold">
                  {c.form.submitButton}
                </MagneticButton>
              </div>
            </form>
          </FadeIn>
        </section>
      </main>

      <GlobalFooter />
    </>
  );
}
