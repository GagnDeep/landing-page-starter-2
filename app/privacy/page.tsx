import { Metadata } from "next";
import { seo, content } from "@/content/privacy";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-16 border-b border-border/50 pb-8">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            {content.title}
          </h1>
          <p className="text-muted-foreground">{content.lastUpdated}</p>
        </header>

        <div className="prose prose-slate prose-lg max-w-none text-muted-foreground">
          {content.sections.map((section, idx) => (
            <div key={idx} className="mb-12">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{section.heading}</h2>
              <p className="leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
