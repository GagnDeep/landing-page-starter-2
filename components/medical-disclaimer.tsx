import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlertCircleIcon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

interface MedicalDisclaimerProps {
  className?: string
  variant?: "standard" | "compact" | "urgent"
  lastReviewed?: string
}

export function MedicalDisclaimer({
  className,
  variant = "standard",
  lastReviewed,
}: MedicalDisclaimerProps) {
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-2.5 text-xs text-muted-foreground",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <HugeiconsIcon
            icon={InformationCircleIcon}
            className="size-4 shrink-0 text-accent"
          />
          <span>Educational Material — Not Individual Medical Advice</span>
        </div>
        {lastReviewed && (
          <span className="font-mono text-[11px]">
            Medically Reviewed: {lastReviewed} by Dr. Ameena Patel, MD, FACP
          </span>
        )}
      </div>
    )
  }

  if (variant === "urgent") {
    return (
      <div
        className={cn(
          "rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs leading-relaxed text-foreground",
          className
        )}
      >
        <div className="flex items-start gap-3">
          <HugeiconsIcon
            icon={AlertCircleIcon}
            className="mt-0.5 size-5 shrink-0 text-destructive"
          />
          <div className="space-y-1">
            <h4 className="font-semibold text-destructive">
              Emergency & Urgent Medical Guidance
            </h4>
            <p>
              If you are experiencing severe chest pain, sudden difficulty
              breathing, sudden severe headache, high fever with stiff neck, or
              acute medical emergency, call 911 or proceed immediately to the
              nearest hospital emergency department. Do not rely on email or
              form submissions for urgent medical concerns.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "space-y-3 rounded-xl border border-border bg-card p-5 text-xs leading-relaxed text-muted-foreground",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex items-center gap-2 font-medium text-foreground">
          <HugeiconsIcon
            icon={InformationCircleIcon}
            className="size-4 text-accent"
          />
          <span>Medical Accuracy & Educational Disclaimer</span>
        </div>
        {lastReviewed && (
          <span className="font-mono text-[11px] text-muted-foreground">
            Reviewed: {lastReviewed} by Dr. Ameena Patel, MD, FACP
          </span>
        )}
      </div>
      <p>
        The health and medical information published on doctorameena.com is
        created for educational and informational purposes only. Accessing this
        material, submitting contact forms, or reading condition guides does not
        establish a physician-patient relationship.
      </p>
      <p>
        Always consult with a qualified, licensed medical doctor or healthcare
        provider for specific medical advice, clinical diagnosis, or
        personalized treatment plans. Never disregard professional medical
        guidance or delay seeking medical evaluation due to content read on this
        website.
      </p>
    </div>
  )
}
