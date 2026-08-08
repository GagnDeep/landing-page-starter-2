import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbLd, buildArticleLd } from "@/lib/json-ld"
import { stateLaws, stateSlugs } from "@/lib/content"
import Link from "next/link"

export async function generateStaticParams() {
  return stateSlugs.map((state) => ({
    state,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ state: string }>
}) {
  const params = await props.params
  const stateData = stateLaws[params.state]
  if (!stateData) return {}

  return buildMetadata({
    title: `${stateData.name} Cottage Food Laws & Permits`,
    description: `A complete guide to ${stateData.name} cottage food laws, commercial kitchen requirements, permits, and sales limits for independent catering businesses.`,
    path: `/${params.state}/`,
  })
}

export default async function StatePage(props: {
  params: Promise<{ state: string }>
}) {
  const params = await props.params
  const stateData = stateLaws[params.state]

  if (!stateData) {
    notFound()
  }

  // Cross-linking to siblings
  const siblings = stateSlugs
    .filter((s) => s !== params.state)
    .slice(0, 2)
    .map((s) => stateLaws[s])

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildBreadcrumbLd([
                { name: stateData.name, url: `/${params.state}/` },
              ])
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildArticleLd({
                headline: `${stateData.name} Cottage Food Laws & Permits`,
                description: `A complete guide to ${stateData.name} cottage food laws, commercial kitchen requirements, permits, and sales limits for independent catering businesses.`,
                url: `/${params.state}/`,
                datePublished: "2024-01-01T00:00:00Z",
                dateModified: "2024-01-01T00:00:00Z",
              })
            ),
          }}
        />

        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ name: stateData.name, url: `/${params.state}/` }]}
          />

          <Prose>
            <h1>{stateData.name} Cottage Food Laws & Permits</h1>

            <p>
              Navigating the regulatory landscape for a catering business in{" "}
              {stateData.name} is a crucial first step for any operator running
              events out of a commercial or legal home kitchen. Because
              cottage-food law varies enormously and changes frequently, having
              the right practical, cash-conscious information can save you from
              costly mistakes.
            </p>

            <h2>Overview of Sales Limits</h2>
            <p>
              In {stateData.name}, the sales limit for cottage food operations
              is{" "}
              <strong>
                <span className="font-mono">{stateData.salesLimit}</span>
              </strong>
              .
              <br />
              <span className="text-sm text-muted-foreground">
                Source: {stateData.salesLimitSource}
              </span>
            </p>

            <h2>Permit Requirements and Costs</h2>
            <p>
              A common question for operators is whether a formal permit is
              required. In {stateData.name}, a permit is{" "}
              <strong>
                {stateData.permitRequired ? "required" : "not required"}
              </strong>
              .
              <br />
              <span className="text-sm text-muted-foreground">
                Source: {stateData.permitRequiredSource}
              </span>
            </p>
            <p>
              The cost for this permit or related licensing is generally{" "}
              <strong>
                <span className="font-mono">{stateData.permitCost}</span>
              </strong>
              .
              <br />
              <span className="text-sm text-muted-foreground">
                Source: {stateData.permitCostSource}
              </span>
            </p>

            <p className="mt-8 text-sm text-muted-foreground italic">
              Data last verified: {stateData.verificationDate}
            </p>

            <hr className="my-8" />

            <h3>Related States</h3>
            <ul className="m-0 flex list-none gap-4 p-0">
              {siblings.map((sib) => (
                <li key={sib.id} className="m-0 p-0">
                  <Link
                    href={`/${sib.id}/`}
                    className="text-primary hover:underline"
                  >
                    {sib.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  )
}
