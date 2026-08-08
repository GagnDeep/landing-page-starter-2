import { notFound } from "next/navigation"

import { buildMetadata, buildJsonLd } from "@/lib/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { vendors } from "@/content/vendors/data"
import Link from "next/link"

const categories = {
  pos: {
    title: "Point of Sale (POS) Systems",
    description: "The definitive guide to restaurant POS systems.",
  },
  payroll: {
    title: "Payroll & HR",
    description: "Navigating restaurant payroll solutions.",
  },
  reservations: {
    title: "Reservation Systems",
    description: "Comparison of restaurant reservation platforms.",
  },
  "online-ordering": {
    title: "Online Ordering",
    description: "First-party and third-party delivery stacks.",
  },
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories]
  if (!category) return notFound()
  return buildMetadata({
    title: category.title,
    description: category.description,
  })
}

export default function CategoryHubPage({
  params,
}: {
  params: { slug: string }
}) {
  const category = categories[params.slug as keyof typeof categories]
  if (!category) return notFound()

  const categoryVendors = vendors.filter((v) => v.category === params.slug)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: category.title,
    datePublished: "2024-08-08T00:00:00.000Z",
    dateModified: "2024-08-08T00:00:00.000Z",
    author: [
      {
        "@type": "Organization",
        name: "Institute of Restaurants",
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, buildJsonLd()]),
        }}
      />
      <Header />
      <main className="container mx-auto max-w-4xl flex-1 px-4 py-12">
        <Breadcrumbs
          segments={[
            { title: category.title, href: `/category/${params.slug}` },
          ]}
        />
        <Prose className="mt-8">
          <h1>{category.title}</h1>
          <p className="lead font-bold">{category.description}</p>
          <p>
            This hub page aggregates the detailed, verified options for your
            restaurant&apos;s {category.title.toLowerCase()}. We have stripped
            away the marketing jargon and compiled exactly what you need to
            know: the monthly cost, the true transaction fee, and how long they
            will lock you into their ecosystem.
          </p>

          <div className="my-12 overflow-x-auto">
            <table className="w-full border-collapse text-left font-mono text-sm">
              <thead className="border-b-2 border-foreground">
                <tr>
                  <th className="py-4 pr-4 font-bold tracking-widest text-muted-foreground uppercase">
                    Vendor
                  </th>
                  <th className="py-4 pr-4 font-bold tracking-widest text-muted-foreground uppercase">
                    Monthly
                  </th>
                  <th className="py-4 pr-4 font-bold tracking-widest text-muted-foreground uppercase">
                    Transaction
                  </th>
                  <th className="py-4 font-bold tracking-widest text-muted-foreground uppercase">
                    Term
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {categoryVendors.length > 0 ? (
                  categoryVendors.map((vendor) => (
                    <tr key={vendor.id}>
                      <td className="py-4 pr-4">
                        <Link
                          href={`/vendors/${vendor.slug}`}
                          className="font-bold text-primary underline decoration-1 underline-offset-4 hover:text-accent"
                        >
                          {vendor.name}
                        </Link>
                      </td>
                      <td className="py-4 pr-4 tabular-nums">
                        {vendor.monthlyCost.value}
                      </td>
                      <td className="py-4 pr-4 tabular-nums">
                        {vendor.transactionFee.value}
                      </td>
                      <td className="py-4 tabular-nums">
                        {vendor.contractTerm.value}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-8 text-center text-muted-foreground italic"
                    >
                      {"{{VERIFY: Vendor data for this category}}"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h2>How to Choose</h2>
          <p>
            Buying a {category.title.toLowerCase()} system is not like buying
            consumer software. The listed price is almost never the final price,
            and the revenue lost to opaque processing fees dwarfs the monthly
            subscription cost over a three-year term.
          </p>
          <p>
            {
              "{{VERIFY: Hub page 1800-word floor body content explaining the nuances of buying this category of software, contract traps to watch out for, and negotiation leverage points.}}"
            }
          </p>
        </Prose>
      </main>
      <Footer />
    </div>
  )
}
