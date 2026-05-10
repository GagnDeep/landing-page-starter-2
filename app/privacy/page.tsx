import { privacyContent } from "@/content/privacy";
import { FadeIn } from "@/components/visuals/FadeIn";
import { RevealText } from "@/components/visuals/RevealText";

export const metadata = {
  title: privacyContent.seo.title,
  description: privacyContent.seo.description,
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <header className="mb-16 border-b border-border pb-8">
          <RevealText as="h1" className="text-4xl md:text-6xl font-heading text-foreground mb-4">
            {privacyContent.hero.headline}
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              Last Updated: {privacyContent.lastUpdated}
            </p>
          </FadeIn>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-headings:font-medium prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
          {privacyContent.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <RevealText as="h2" delay={0.1} className="text-2xl font-heading text-foreground mb-4">
                {section.heading}
              </RevealText>
              <FadeIn delay={0.2}>
                <p>{section.content}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}