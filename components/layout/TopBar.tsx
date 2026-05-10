import { homeContent } from "@/content/home"
import { PhoneIcon, MailIcon, ClockIcon } from "lucide-react"

export function TopBar() {
  const { phone, email, availability } = homeContent.topBar

  return (
    <div className="w-full bg-primary text-primary-foreground py-2 px-4 text-sm font-medium border-b border-primary/20 hidden md:block">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
            <PhoneIcon className="w-4 h-4" aria-hidden="true" />
            <span>{phone}</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
            <MailIcon className="w-4 h-4" aria-hidden="true" />
            <span>{email}</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-4 h-4 text-accent" aria-hidden="true" />
          <span>{availability}</span>
        </div>
      </div>
    </div>
  )
}
