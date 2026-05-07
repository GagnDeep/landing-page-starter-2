"use client"

import { homeContent } from "@/content/home"
import { TextFadeIn } from "@/components/visuals"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlayCircle02Icon } from "@hugeicons/core-free-icons"

export function VideoTeaser() {
  const { videoTeaser } = homeContent

  return (
    <section className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 text-center">
        <TextFadeIn>
          <button
            aria-label={videoTeaser.ariaLabel}
            className="group inline-flex flex-col items-center gap-6 text-white hover:text-primary transition-colors"
          >
            <div className="w-24 h-24 rounded-full border-2 border-current flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <HugeiconsIcon icon={PlayCircle02Icon} className="size-12 ml-1" strokeWidth={1.5} />
            </div>
            <span className="text-2xl md:text-3xl font-heading tracking-wide">
              {videoTeaser.heading}
            </span>
          </button>
        </TextFadeIn>
      </div>
    </section>
  )
}
