import { NinetyDayTimeline } from "./timeline-tool"

export function PrepSteps() {
  return (
    <div className="w-full">
      {/* Server-rendered static fallback for crawlers without JS */}
      <noscript>
        <NinetyDayTimeline fallback />
      </noscript>
      {/* Client-side interactive version */}
      <div className="client-only">
        <NinetyDayTimeline />
      </div>
    </div>
  )
}
