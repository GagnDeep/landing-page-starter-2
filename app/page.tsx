import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <Services />
    </div>
  )
}
