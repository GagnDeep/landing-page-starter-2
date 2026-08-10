import { buildMetadata } from "@/lib/site"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Prose } from "@/components/prose"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Target01Icon,
  Alert01Icon,
  LockKeyIcon,
  DocumentValidationIcon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Methodology",
  description:
    "Our strict compliance rules and verification methodology for the matrix.",
  path: "/methodology/",
})

export default function MethodologyPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <Breadcrumbs
            items={[{ label: "Methodology", href: "/methodology/" }]}
          />
          <h1 className="mb-8 text-display">Methodology & Compliance</h1>
          <Prose>
            <p>
              The value of the Institute of Humanoids matrix is its rigid
              adherence to verifiable truth. We do not aggregate rumors, and we
              do not publish confidential information.
            </p>
          </Prose>

          {/* Third SVG Graphic: Abstract Verification Logic Tree */}
          <div className="my-12 flex items-center justify-center rounded-xl border border-border bg-card p-8 shadow-sm">
            <svg
              viewBox="0 0 300 200"
              className="h-auto w-full max-w-sm"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="checkGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="100%" stopColor="var(--color-accent)" />
                </linearGradient>
              </defs>

              {/* Document Source */}
              <rect
                x="20"
                y="80"
                width="60"
                height="40"
                rx="4"
                fill="var(--color-background)"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <text
                x="50"
                y="105"
                textAnchor="middle"
                fill="var(--color-foreground)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                Source
              </text>

              <path
                d="M 80 100 L 130 100"
                stroke="var(--color-border)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Verification Gate */}
              <polygon
                points="155,70 180,100 155,130 130,100"
                fill="var(--color-background)"
                stroke="var(--color-primary)"
                strokeWidth="2"
              />
              <text
                x="155"
                y="104"
                textAnchor="middle"
                fill="var(--color-primary)"
                fontSize="18"
                fontFamily="var(--font-heading)"
                fontWeight="bold"
              >
                ?
              </text>

              {/* Confirmed Branch */}
              <path
                d="M 180 100 L 220 50 L 240 50"
                stroke="var(--color-primary)"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="250" cy="50" r="10" fill="url(#checkGrad)" />
              <text
                x="250"
                y="30"
                textAnchor="middle"
                fill="var(--color-foreground)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                Confirmed
              </text>

              {/* Unconfirmed Branch */}
              <path
                d="M 180 100 L 220 150 L 240 150"
                stroke="var(--color-muted)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="250"
                cy="150"
                r="10"
                fill="var(--color-background)"
                stroke="var(--color-border)"
                strokeWidth="2"
              />
              <text
                x="250"
                y="175"
                textAnchor="middle"
                fill="var(--color-muted-foreground)"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                Unconfirmed
              </text>
            </svg>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/10 py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-8">
            <p className="mb-4 flex items-center gap-2 font-heading text-sm font-semibold tracking-wider text-accent uppercase">
              <HugeiconsIcon icon={Target01Icon} className="size-4" />
              The Rule
            </p>
            <h2>The Compliance Rule</h2>
            <p className="mt-4 text-lead text-muted-foreground">
              A supplier relationship is fact <strong>only</strong> when
              publicly documented and dated by a filing, press release, or
              confirmed physical teardown.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <HugeiconsIcon
                icon={DocumentValidationIcon}
                className="size-6 text-primary"
              />
              <h3 className="text-lg text-h3">Confirmed</h3>
              <p className="text-sm text-muted-foreground">
                Backed by primary documentation (e.g., an SEC filing, official
                press release from the supplier or integrator).
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
              <HugeiconsIcon
                icon={Alert01Icon}
                className="size-6 text-muted-foreground"
              />
              <h3 className="text-lg text-h3">Unconfirmed</h3>
              <p className="text-sm text-muted-foreground">
                Links inferred from secondary observation but lacking explicit
                documentation wear an Unconfirmed badge, or do not ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
          <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-destructive/10">
            <HugeiconsIcon
              icon={LockKeyIcon}
              className="size-8 text-destructive"
            />
          </div>
          <h2 className="mb-4 text-h2">Leaked Bills of Materials</h2>
          <p className="text-lead text-muted-foreground">
            We explicitly do not utilize or publish leaked or confidential
            sourcing documents. If a component cannot be verified through public
            channels, it remains excluded from the index.
          </p>
        </div>
      </section>
    </main>
  )
}
