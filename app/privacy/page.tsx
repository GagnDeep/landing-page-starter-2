import { privacyContent } from "@/content/privacy"

export const metadata = {
  title: privacyContent.meta.title,
  description: privacyContent.meta.description,
}

export default function PrivacyPage() {
  const { legalHeader, legalContentBody } = privacyContent

  return (
    <div className="bg-background min-h-svh pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-3xl">
         <header className="mb-16 border-b border-border pb-8">
            <h1 className="font-heading text-4xl md:text-5xl mb-4">{legalHeader.title}</h1>
            <p className="text-sm tracking-widest uppercase text-muted-foreground">{legalHeader.lastUpdated}</p>
         </header>

         <div className="prose prose-neutral dark:prose-invert max-w-none font-sans font-light text-foreground/80 leading-relaxed space-y-12">
            {legalContentBody.sections.map((section, i) => (
               <div key={i}>
                  <h2 className="font-heading text-2xl text-foreground mb-4">{section.heading}</h2>
                  <p>{section.text}</p>
               </div>
            ))}
         </div>
      </div>
    </div>
  )
}
