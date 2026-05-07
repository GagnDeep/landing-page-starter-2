import { privacyContent } from "@/content/privacy";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { FadeIn, RevealText } from "@/components/visuals";

export const metadata = {
  title: privacyContent.meta.title,
  description: privacyContent.meta.description,
};

export default function PrivacyPage() {
  const c = privacyContent;

  return (
    <>
      <GlobalHeader />

      <main className="min-h-screen pt-40 pb-32 bg-background">
        <article className="container mx-auto px-6 max-w-3xl">
          <FadeIn direction="up">
            <header className="mb-16 pb-8 border-b border-border text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-medium mb-4">
                <RevealText text={c.header.title} />
              </h1>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">
                {c.header.lastUpdated}
              </p>
            </header>

            <div className="space-y-12">
              {c.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="font-heading text-2xl font-medium mb-4 text-foreground/90">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </FadeIn>
        </article>
      </main>

      <GlobalFooter />
    </>
  );
}
