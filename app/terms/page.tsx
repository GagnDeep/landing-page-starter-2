import { termsContent } from "@/content/terms";
import { FadeIn, RevealCover, StaggerContainer, StaggerItem } from "@/components/visuals";

export default function TermsPage() {
  const { header, body } = termsContent;

  return (
    <main className="flex-1 bg-background text-foreground overflow-hidden pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* TOC / Sidebar (Desktop) */}
          <aside className="hidden md:block md:col-span-3">
            <div className="sticky top-32">
              <FadeIn direction="right">
                <h3 className="font-medium uppercase tracking-widest text-sm text-muted-foreground mb-6">Contents</h3>
                <nav className="space-y-4">
                  {body.sections.map((section, i) => (
                    <a key={i} href={`#section-${i}`} className="block text-sm hover:text-primary transition-colors line-clamp-1">
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </FadeIn>
            </div>
          </aside>

          {/* Content Body */}
          <article className="md:col-span-9 max-w-3xl">
            {/* Header */}
            <div className="mb-16 border-b border-border pb-8">
              <RevealCover duration={1}>
                <h1 className="text-4xl md:text-5xl font-heading mb-4">{header.headline}</h1>
              </RevealCover>
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground">{header.subheadline}</p>
              </FadeIn>
            </div>

            {/* Sections */}
            <StaggerContainer className="space-y-12">
              {body.sections.map((section, i) => (
                <StaggerItem key={i} direction="up" id={`section-${i}`} className="scroll-mt-32">
                  <h2 className="text-2xl font-heading mb-4 text-foreground">{section.heading}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </article>
        </div>
      </div>
    </main>
  );
}
