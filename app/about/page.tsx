import { buildMetadata } from "@/lib/site"
import { Prose } from "@/components/prose"

export const metadata = buildMetadata({
  title: "About",
  description: "About the Institute of Humanoids.",
  path: "/about/",
})

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-24">
      <h1 className="mb-8 text-h1">About</h1>
      <Prose>
        <p>
          The Institute of Humanoids tracks the supply chain underneath the
          humanoid robotics ecosystem. We focus on the actuators, harmonic
          drives, force-torque sensors, cells, and hands that power the
          platforms.
        </p>
        <p>
          Our methodology is strict: a supplier relationship is fact only when
          publicly documented and dated by filing, press release, or teardown.
        </p>
      </Prose>
    </main>
  )
}
