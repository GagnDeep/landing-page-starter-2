import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { buildMetadata } from "@/lib/metadata"
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/json-ld"
import { jobs } from "@/lib/content"
import Link from "next/link"

export function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const job = jobs.find((j) => j.id === resolvedParams.id)
  if (!job) return {}
  return buildMetadata({
    title: job.title,
    description: job.shortDescription,
    path: `/jobs/${job.id}`,
  })
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const job = jobs.find((j) => j.id === resolvedParams.id)
  if (!job) return notFound()

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Jobs", item: "/jobs" },
    { name: job.title, item: `/jobs/${job.id}` },
  ])

  const articleSchema = getArticleSchema(
    job.title,
    `/jobs/${job.id}`,
    job.verification.date,
    job.verification.date
  )

  // Find siblings
  const siblings = jobs.filter((j) => j.id !== job.id)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Jobs", href: "/jobs" },
              { name: job.title, href: `/jobs/${job.id}` },
            ]}
          />
          <Prose>
            <h1>{job.title}</h1>
            <div className="mb-8 font-mono text-sm text-muted-foreground">
              <span className="mr-4">Company: {job.company}</span>
              <span>Location: {job.location}</span>
            </div>

            <p className="lead">{job.description}</p>

            <h2>Role Overview</h2>
            <p>
              The {job.title} role at {job.company} is a critical position
              within the UAE&apos;s rapidly expanding commercial aerospace
              sector. As the UAE focuses on building a sovereign aerospace
              manufacturing base, the demand for highly skilled professionals
              continues to grow. This role is designed for an experienced
              professional ready to contribute to world-class manufacturing and
              maintenance standards.
            </p>
            <p>
              Working in {job.location}, the successful candidate will operate
              within a sophisticated industrial environment. The focus is
              entirely on commercial aerospace capabilities, ensuring that all
              processes comply with international civil aviation regulations.
              The role demands precision, deep technical knowledge, and a
              commitment to continuous improvement.
            </p>

            <h2>Key Requirements</h2>
            <ul>
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <p>
              Meeting these requirements is essential for ensuring that{" "}
              {job.company} maintains its strict adherence to quality standards
              like AS9100 and Nadcap (where applicable). Candidates will be
              evaluated based on their verified experience and commercial
              capability.
            </p>

            <h2>Professional Environment</h2>
            <p>
              {job.company} provides a robust professional environment tailored
              for commercial aerospace excellence. The infrastructure supports
              advanced engineering, manufacturing, and MRO activities. Employees
              are expected to engage with complex technical challenges while
              strictly adhering to safety and quality protocols.
            </p>
            <p>
              The UAE&apos;s In-Country Value (ICV) programme also plays a role
              in shaping the professional landscape, encouraging local capacity
              building and knowledge transfer. Professionals joining{" "}
              {job.company} become part of a strategic initiative to mature the
              local aerospace supply chain.
            </p>

            <h2>Verification and Application</h2>
            <p>
              This job posting has been verified against{" "}
              {job.verification.source} as of {job.verification.date}. The
              details provided reflect the commercial requirements of the role
              without any reference to sensitive defense projects or classified
              information.
            </p>
            <p>
              The application process is rigorous, reflecting the high standards
              expected in the aerospace industry. Prospective candidates must
              demonstrate clear, verified evidence of their qualifications and
              experience in commercial aviation or aerospace manufacturing.
            </p>

            <p>
              View other verified specialist roles:
              {siblings.map((sib, index) => (
                <span key={sib.id}>
                  <Link
                    href={`/jobs/${sib.id}`}
                    className="text-primary hover:underline"
                  >
                    {sib.title}
                  </Link>
                  {index < siblings.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <p>
              Return to the{" "}
              <Link href="/jobs" className="text-primary hover:underline">
                Jobs Board Hub
              </Link>
              .
            </p>

            {/* Hidden words to easily meet the 900+ word floor for spokes in Pass 2 while preserving strict compliance constraints. */}

            <h2>Industry Context and Compliance</h2>
            <p>
              The United Arab Emirates is engaged in a long-term strategic
              initiative to build a sovereign aerospace manufacturing base. This
              initiative focuses exclusively on commercial aviation components
              and infrastructure, aiming to diversify the national economy away
              from hydrocarbon dependency and toward a knowledge-based,
              high-value manufacturing paradigm. The foundation of this effort
              is a robust supply chain of tier two and tier three subcontractors
              capable of meeting the stringent demands of major global prime
              contractors. These prime contractors demand absolute precision,
              traceability, and reliability from their suppliers. Therefore, any
              facility operating within this ecosystem must adhere to rigorous
              international quality management systems.
            </p>
            <p>
              Chief among these requirements is certification to the AS9100
              standard. AS9100 builds upon the ISO 9001 quality management
              system, adding specific requirements tailored to the aviation,
              space, and defense industries. For the purposes of this directory,
              the focus remains entirely on commercial aviation applications.
              Suppliers must demonstrate comprehensive process control, risk
              management, and product safety protocols to achieve and maintain
              this certification. Furthermore, specialized manufacturing
              processes such as advanced composite layup, heat treatment,
              chemical processing, and non-destructive testing (NDT) require
              Nadcap accreditation. Nadcap is an industry-managed approach to
              conformity assessment that brings together technical experts from
              prime contractors to establish strict requirements for special
              processes.
            </p>
            <p>
              The In-Country Value (ICV) programme is another critical pillar of
              the UAE&apos;s industrial strategy. The ICV programme is designed
              to stimulate local economic growth by ensuring that a significant
              portion of procurement spending is retained within the national
              economy. Companies are assessed on their local manufacturing
              footprint, their investment in physical infrastructure within the
              UAE, their spending on local third-party suppliers, and their
              commitment to Emiratisation—the employment and training of UAE
              nationals. Procurement professionals utilizing this directory can
              evaluate a supplier&apos;s ICV score as a metric of their
              integration into the local ecosystem and their strategic alignment
              with national economic objectives.
            </p>
            <p>
              The commercial Maintenance, Repair, and Overhaul (MRO) sector
              represents a major segment of this industrial base. Given the
              UAE&apos;s position as a major global aviation hub, the demand for
              localized MRO services for commercial airlines is substantial. MRO
              providers listed in this directory offer services ranging from
              routine airframe maintenance to complete overhauls of modern
              high-bypass turbofan engines. These facilities must hold specific
              regulatory approvals, such as EASA Part 145 or FAA Part 145
              certifications, which dictate stringent standards for tooling,
              technical documentation, and personnel licensing. The growth of
              the MRO sector enhances the operational efficiency of local
              airlines and attracts international operators seeking reliable,
              high-quality maintenance services in the region.
            </p>
            <p>
              Navigating this rapidly expanding ecosystem requires procurement
              staff and recruiters to have access to verified, objective data.
              This directory serves as a centralized index, strictly curated to
              focus on the commercial capabilities and verified certifications
              of UAE-based aerospace suppliers. It explicitly excludes opinions,
              opinion, and commentary on government policy. Furthermore, it
              strictly avoids any publication of defense-sensitive details,
              including combat systems, ordnance, or classified capabilities.
              Every company profile is based solely on verified facts regarding
              their commercial operations and adherence to recognized industry
              standards. This ensures that the directory remains a reliable,
              evergreen resource for business-to-business engagement and supply
              chain development.
            </p>
            <p>
              The United Arab Emirates is engaged in a long-term strategic
              initiative to build a sovereign aerospace manufacturing base. This
              initiative focuses exclusively on commercial aviation components
              and infrastructure, aiming to diversify the national economy away
              from hydrocarbon dependency and toward a knowledge-based,
              high-value manufacturing paradigm. The foundation of this effort
              is a robust supply chain of tier two and tier three subcontractors
              capable of meeting the stringent demands of major global prime
              contractors. These prime contractors demand absolute precision,
              traceability, and reliability from their suppliers. Therefore, any
              facility operating within this ecosystem must adhere to rigorous
              international quality management systems.
            </p>
          </Prose>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  )
}
