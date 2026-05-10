import { faqContent } from "@/content/faq"
import FaqClient from "./faq-client"

export const metadata = {
  title: faqContent.meta.title,
  description: faqContent.meta.description,
}

export default function Page() {
  return <FaqClient />
}
