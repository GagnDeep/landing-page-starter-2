import { contactContent } from "@/content/contact";
import { images } from "@/lib/images";
import {
  FadeIn,
  StaggerReveal,
  StaggerItem,
  AnimatedText,
} from "@/components/visuals";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-24 pb-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left Column: Hero & Visuals */}
        <div className="flex flex-col h-full relative">
          <div className="sticky top-32">
            <AnimatedText
              el="h1"
              text={contactContent.hero.headline}
              className="text-5xl md:text-7xl font-heading text-foreground mb-6"
            />
            <FadeIn delay={0.4}>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-md mb-16">
                {contactContent.hero.subheadline}
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.6} className="relative aspect-[4/5] w-full max-w-md hidden lg:block">
              <Image src={images.contactHero.url} alt={images.contactHero.alt} fill className="object-cover" priority />
            </FadeIn>
          </div>
        </div>

        {/* Right Column: The Form & Info */}
        <div className="pt-8 lg:pt-32">
          {/* 2. The Form (Intake) */}
          <FadeIn direction="up" className="mb-24">
            <form className="space-y-16">

              {/* Personal Details */}
              <div className="space-y-8">
                <h2 className="text-sm tracking-widest uppercase text-muted-foreground border-b border-border pb-4">
                  {contactContent.form.personalDetails.heading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contactContent.form.personalDetails.fields.map((field) => (
                    <div key={field.name} className="relative group">
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-border pb-2 pt-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                      />
                      <label
                        htmlFor={field.name}
                        className="absolute left-0 top-4 text-muted-foreground/50 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-muted-foreground uppercase tracking-widest"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Parameters */}
              <div className="space-y-8">
                <h2 className="text-sm tracking-widest uppercase text-muted-foreground border-b border-border pb-4">
                  {contactContent.form.eventDetails.heading}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contactContent.form.eventDetails.fields.map((field) => (
                    <div key={field.name} className="relative group">
                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          className="peer w-full bg-transparent border-b border-border pb-2 pt-4 text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none uppercase tracking-widest text-sm"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-muted-foreground/50">
                            {/* @ts-ignore - placeholder added to specific field type dynamically */}
                            {field.placeholder || "Select Option"}
                          </option>
                          {field.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder=" "
                          className="peer w-full bg-transparent border-b border-border pb-2 pt-4 text-foreground focus:outline-none focus:border-foreground transition-colors"
                        />
                      )}
                      <label
                        htmlFor={field.name}
                        className="absolute left-0 top-4 text-muted-foreground/50 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-muted-foreground uppercase tracking-widest pointer-events-none"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Vision */}
              <div className="space-y-8">
                <h2 className="text-sm tracking-widest uppercase text-muted-foreground border-b border-border pb-4">
                  {contactContent.form.vision.heading}
                </h2>
                {contactContent.form.vision.fields.map((field) => (
                  <div key={field.name} className="relative group">
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder=" "
                      rows={4}
                      className="peer w-full bg-transparent border-b border-border pb-2 pt-4 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                    <label
                      htmlFor={field.name}
                      className="absolute left-0 top-4 text-muted-foreground/50 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-muted-foreground peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-muted-foreground uppercase tracking-widest pointer-events-none"
                    >
                      {field.label}
                    </label>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="w-full py-5 bg-foreground text-background uppercase tracking-widest text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                {contactContent.form.submitLabel}
              </button>
            </form>
          </FadeIn>

          {/* 3. Direct Contact Info & 4. Office Locations */}
          <FadeIn direction="up" delay={0.2} className="border-t border-border pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">{contactContent.directContact.heading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{contactContent.directContact.description}</p>
              <div className="space-y-2">
                <a href={`mailto:${contactContent.directContact.email}`} className="block text-foreground hover:opacity-70 transition-opacity">
                  {contactContent.directContact.email}
                </a>
                <a href={`tel:${contactContent.directContact.phone}`} className="block text-foreground hover:opacity-70 transition-opacity">
                  {contactContent.directContact.phone}
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">{contactContent.officeLocations.heading}</h3>
              <ul className="space-y-6">
                {contactContent.officeLocations.locations.map((loc, i) => (
                  <li key={i}>
                    <p className="text-lg font-heading text-foreground mb-1">{loc.city}</p>
                    <p className="text-sm text-muted-foreground">{loc.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

      </div>
    </main>
  );
}
