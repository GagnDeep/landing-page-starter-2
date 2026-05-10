import { termsContent } from "@/content/terms";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";
import { RevealText } from "@/components/visuals/RevealText";

export const metadata = {
  title: termsContent.metadata.title,
  description: termsContent.metadata.description,
};

export default function TermsPage() {
  const { header, sections, contactInfo } = termsContent;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden pt-24 pb-16 bg-muted/20 border-b border-border text-center">
        <DotMatrixGrid />
        <div className="container relative z-10 px-4 mx-auto">
          <RevealText as="h1" className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {header.headline}
          </RevealText>
          <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            {header.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary max-w-none">
            {sections.map((section, i) => (
              <div key={i} className="mb-12 last:mb-0">
                <h2>{section.title}</h2>
                <div className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
                  {section.content}
                </div>
              </div>
            ))}

            <hr className="my-12 border-border" />

            <p className="text-muted-foreground">
              {contactInfo.text} <a href={`mailto:${contactInfo.email}`} className="font-bold text-foreground">{contactInfo.email}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
