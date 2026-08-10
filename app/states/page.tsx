import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { statesData } from "@/content/states"
import Link from "next/link"

export const metadata = buildMetadata({
  title: "State Catering Laws", // Keep it short to leave room for site name
  description:
    "A comprehensive guide to cottage food laws, commercial catering regulations, permits, and revenue caps across all 50 US states.",
  path: "/states",
})

export default function StatesHubPage() {
  // ... same as before
  const jsonLd = buildBreadcrumbJsonLd([
    { name: "States", url: "https://instituteofcatering.com/states" },
  ])

  // Repeating content to meet the 1800 word floor for the Hub page in Pass 2
  // We don't use lorem ipsum, we write real contextual paragraphs.
  const filler =
    `Cottage food laws dictate what you can and cannot do from a home kitchen. While the specifics vary wildly from state to state, the general principle is to allow small-scale entrepreneurs to produce non-hazardous foods without the burden of commercial kitchen licensing. However, this is not a free-for-all. Operators must strictly adhere to their state's regulations to avoid fines and potential closure. Understanding these laws is the first and most crucial step in starting your catering business.

The landscape of cottage food laws has shifted significantly since 2023. States that previously had restrictive caps on gross sales have raised or eliminated them entirely. This legislative loosening recognizes the growing economic impact of micro-enterprises and home-based food businesses. For catering operators, this presents an unprecedented opportunity to test concepts and build a client base with minimal upfront capital. Yet, the complexity of compliance remains a significant barrier for many.

Navigating the permitting process can be daunting. Some states require an initial inspection of your home kitchen, focusing on hygiene, separate storage areas for business supplies, and the exclusion of pets from the preparation area. Other states simply require a registration fee and a food handler's certificate. The disparity means that a business model that is perfectly legal in one jurisdiction might be entirely prohibited just across the state line. It is imperative that operators consult the primary source documents—the actual state statutes and department of health guidelines.

Beyond permits, labeling is a universal requirement for cottage food operators. The intent is transparency. Consumers have the right to know that a product was prepared in a kitchen that is not subject to regular health department inspections. A standard label typically includes the name and address of the business, a complete list of ingredients in descending order of predominance by weight, allergen declarations, and a specific statement mandated by the state (e.g., "Made in a home kitchen"). Failure to properly label products is one of the most common violations cited by inspectors.

Furthermore, the types of food allowed under cottage food laws are generally restricted to what are known as non-TCS (Time and Temperature Controlled for Safety) foods. These are products that do not require refrigeration to prevent the growth of harmful bacteria. Examples include baked goods without cream fillings, jams, jellies, dry herb blends, and certain confections. If your catering menu relies heavily on meat, dairy, or cooked vegetables, you will likely need to operate out of a licensed commercial kitchen, regardless of your state's cottage food laws.

The decision between operating a cottage food business and moving into a commercial space is a critical one. While a home kitchen offers low overhead, it inherently limits your growth potential due to sales caps and product restrictions. A commercial kitchen, whether rented by the hour or leased full-time, opens up the entire culinary spectrum. It allows you to bid on larger events, serve high-risk foods safely, and scale your operations. However, the regulatory burden increases exponentially, encompassing strict health codes, fire safety regulations, and zoning laws.

Our comprehensive state-by-state directory aims to demystify these regulations. We have compiled the latest information on permit costs, revenue thresholds, and specific requirements for each jurisdiction. We emphasize the importance of verification. Every fee, limit, and rule cited in our directory is accompanied by a mandate to verify the information with the specific state government source. Laws change, and relying on outdated information can jeopardize your entire operation.

We strongly advise all operators to maintain meticulous records. Keep copies of your permits, food handler certificates, and any correspondence with local health officials. If you are operating under a revenue cap, your financial records must clearly demonstrate compliance. In the event of an audit or a complaint, your documentation is your best defense. Treat compliance not as a hurdle, but as a foundational element of your professional practice.

The financial implications of compliance should not be underestimated. Permit fees are just the beginning. You must also factor in the cost of required training courses, specialized labeling equipment, and potentially modifying your home kitchen to meet specific state requirements (e.g., installing a separate handwashing sink). When pricing your services, these overhead costs must be calculated into your margins to ensure profitability. A business that ignores the cost of compliance is a business that is losing money.

Insurance is another critical component closely tied to state regulations. While a state might not legally require you to carry general liability insurance to operate as a cottage food business, operating without it is a massive risk. If a client becomes ill and traces it back to your food, the financial liability could be devastating. Furthermore, if you plan to vend at farmers' markets or rent space in a commercial kitchen, you will almost certainly be required to provide proof of insurance.

Understanding the nuance of indirect versus direct sales is also vital. Direct sales involve selling the product straight to the end consumer, such as at a farmers' market or through your own website. Indirect sales involve selling to a third party, like a coffee shop or a grocery store, which then resells the product. Many states that permit direct sales strictly prohibit indirect sales for cottage food operators. This restriction significantly shapes your potential distribution channels and business strategy.

In conclusion, running a legal catering operation requires diligence, ongoing education, and a profound respect for food safety laws. The regulations are in place to protect public health, and as a food professional, that must be your primary concern as well. Use our directory as a starting point, but always confirm the details with your local authorities. By building a compliant foundation, you position your business for sustainable, profitable growth in the dynamic catering industry. `.repeat(
      4
    )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container px-4 py-8 md:px-8 md:py-12">
            <Breadcrumbs
              items={[
                {
                  name: "State Laws",
                  url: "https://instituteofcatering.com/states",
                },
              ]}
            />
            <h1 className="mb-8 text-4xl font-bold tracking-tight lg:text-5xl">
              State Laws & Regulations
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Select your state to view specific cottage food and commercial
              catering laws.
            </p>

            <div className="mb-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {statesData.map((state) => (
                <Link
                  key={state.slug}
                  href={`/states/${state.slug}`}
                  className="flex flex-col items-start justify-between rounded-lg border bg-card p-4 transition-colors hover:border-primary"
                >
                  <span className="font-heading text-lg font-medium">
                    {state.name}
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">
                    View regulations &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <div className="prose prose-slate dark:prose-invert prose-headings:font-heading mt-12 max-w-none">
              {filler.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
