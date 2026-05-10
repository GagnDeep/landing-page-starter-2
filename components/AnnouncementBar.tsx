import { homeContent } from "@/content/home";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground sm:px-6 lg:px-8">
      <span>{homeContent.announcementBar.text}</span>
      <Link
        href="/contact"
        className="ml-2 inline-block underline underline-offset-2 hover:text-primary-foreground/80"
      >
        {homeContent.announcementBar.ctaLabel}
      </Link>
    </div>
  );
}
