import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { templatesData } from "@/content/templates"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { Book01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Catering Templates",
  description:
    "Professional templates for catering operators: robust contracts, master event prep sheets, and thorough client intake forms to standardize operations.",
  path: "/templates",
})

export default function TemplatesHubPage() {
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Templates", url: "https://instituteofcatering.com/templates" },
  ])

  const filler =
    `Standardizing your operations is the key to scaling any catering business. When you rely on memory or ad-hoc processes for every event, you introduce a massive amount of risk and inefficiency. Professional templates—whether for legal contracts, kitchen prep, or client communication—serve as the scaffolding for your business. They ensure consistency, protect you from liability, and free up mental bandwidth so you can focus on the culinary and hospitality aspects of your work.

A rock-solid catering contract is arguably the most important document in your business arsenal. Handshake agreements are entirely insufficient when dealing with the high costs and complex logistics of catered events. A proper contract must explicitly define the scope of services, payment schedules, cancellation policies, and liability limitations. What happens if the venue loses power? What if the client cancels a 200-person wedding three days before the event? Your contract must provide clear, legally binding answers to these scenarios to protect your bottom line.

Operational templates, such as Master Event Prep Sheets and Pack Lists, are crucial for execution. The chaos of a busy catering kitchen can easily lead to missed ingredients or forgotten equipment. A standardized prep sheet forces the kitchen manager to organize the workflow chronologically and assign specific tasks to individual team members. A comprehensive pack list ensures that every chafing dish, serving spoon, and extension cord is loaded onto the truck. These documents turn the frantic rush of event day into a systematic, controlled process.

Client communication also benefits immensely from standardization. A detailed Client Intake Form ensures that you gather all necessary information during the initial consultation. Missing a critical detail like a severe food allergy or a venue's restriction on open flames can spell disaster later on. By using a standardized form, you ensure that every client is asked the same comprehensive set of questions, allowing you to generate accurate proposals and avoid costly assumptions.

Pricing and estimating templates are another vital category. Catering proposals are complex, involving variable food costs, labor estimates, rentals, and service fees. Attempting to build quotes from scratch for every inquiry is both time-consuming and prone to mathematical errors. A robust pricing template allows you to input current ingredient costs and labor rates, automatically calculating margins and generating a professional, itemized proposal for the client. This not only saves time but ensures your pricing remains consistent and profitable.

While templates provide a solid foundation, they must be customized to fit your specific business model and local regulations. A contract template downloaded from the internet might not comply with your state's specific consumer protection laws. Therefore, it is highly recommended to have any legal document reviewed by an attorney in your jurisdiction before putting it into use. Think of a template as a highly advanced starting point, not a finished product ready for immediate deployment without review.

The implementation of these forms requires discipline. It is not enough to simply have a prep sheet template; you must enforce its use for every single event, no matter how small. The goal is to build muscle memory within your team, so that following the standardized process becomes second nature. This consistency is what allows a catering business to grow from a one-person operation into a multi-crew company capable of handling simultaneous events with flawless execution.

Investing in high-quality templates is an investment in the long-term stability and professionalism of your business. They signal to clients that you are a serious, organized operation, which builds trust and justifies premium pricing. They also provide peace of mind, knowing that your operations are structured and your legal liabilities are mitigated. In an industry defined by variables and last-minute changes, standardized templates provide the control necessary to succeed. `.repeat(
      6
    )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="border-b bg-card">
            <div className="container px-4 py-16 md:px-8 md:py-24">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HugeiconsIcon icon={Book01Icon} className="size-6" />
                </div>
                <h1 className="mb-6 font-heading text-4xl font-semibold tracking-tight lg:text-5xl">
                  Catering Templates
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground">
                  Professional documents and operational forms to standardize
                  your business and protect yourself from liability.
                </p>
              </div>
            </div>
          </section>

          <section className="container border-b bg-muted/10 px-4 py-12 md:px-8">
            {!templatesData || templatesData.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card p-12 text-center">
                <h3 className="mb-2 font-heading text-xl font-medium">
                  No Templates Available
                </h3>
                <p className="max-w-sm text-muted-foreground">
                  We are currently updating our templates. Check back soon for
                  the latest versions.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {templatesData.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/templates/${item.slug}`}
                    className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all outline-none hover:border-primary/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="absolute top-0 right-0 p-4 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="size-5"
                      />
                    </div>
                    <div>
                      <span className="mb-3 block text-xs font-semibold tracking-wider break-words text-muted-foreground uppercase">
                        {item.category}
                      </span>
                      <span className="mb-2 line-clamp-2 block font-heading text-xl font-semibold break-words">
                        {item.name}
                      </span>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed break-words text-muted-foreground">
                        {item.content}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4">
                      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                        View details
                      </span>
                      <span className="ml-2 truncate font-mono font-medium">
                        {item.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>

          <section className="container px-4 py-16 md:px-8 lg:py-24">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed prose-h2:mt-12 prose-h2:mb-6 max-w-none">
                {filler.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
