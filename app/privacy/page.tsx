import { privacyContent } from "@/content/privacy";
import { FadeIn, AnimatedText } from "@/components/visuals";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full bg-background pt-40 pb-32">
      {/* 1. Privacy Hero */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto mb-20 border-b border-border pb-10">
        <AnimatedText
          el="h1"
          text={privacyContent.hero.headline}
          className="text-4xl md:text-5xl font-heading text-foreground mb-4"
        />
        <FadeIn delay={0.4}>
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            {privacyContent.hero.lastUpdated}
          </p>
        </FadeIn>
      </section>

      {/* 2. Content Body */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto">
        <div className="space-y-12 text-muted-foreground leading-relaxed">
          {privacyContent.body.map((section, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.05}>
              <h2 className="text-xl font-heading text-foreground mb-4">
                {section.heading}
              </h2>
              <p className="font-light">{section.text}</p>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
