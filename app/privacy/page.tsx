import { privacyContent } from "@/content/privacy";
import { DotMatrixGrid } from "@/components/visuals/DotMatrixGrid";

export const metadata = privacyContent.meta;

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full relative min-h-screen">
      <DotMatrixGrid className="opacity-10 fixed inset-0 z-[-1]" />

      <div className="container mx-auto px-6 py-24 max-w-3xl">
        <header className="mb-16 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-foreground">{privacyContent.heading}</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-widest">{privacyContent.lastUpdated}</p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none font-serif leading-loose text-muted-foreground prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
          {privacyContent.content.split('\n').map((paragraph, index) => {
             if (paragraph.trim() === '') return null;
             // Check if it's a heading (starts with a number and a dot)
             if (/^\d+\./.test(paragraph.trim())) {
                return <h2 key={index} className="text-2xl mt-12 mb-4">{paragraph}</h2>;
             }
             // Check if it's a list item
             if (paragraph.trim().startsWith('-')) {
                return <ul key={index} className="list-disc pl-6 my-2"><li>{paragraph.replace('-', '').trim()}</li></ul>;
             }
             return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
