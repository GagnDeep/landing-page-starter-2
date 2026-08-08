export type ImageSlot =
  | "hero"
  | "feature-1"
  | "feature-2"
  | "feature-3"
  | "testimonial-avatar-1"
  | "testimonial-avatar-2"
  | "testimonial-avatar-3"
  | "cta-background"

export const images: Record<ImageSlot, string> = {
  hero: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop",
  "feature-1":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop",
  "feature-2":
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop",
  "feature-3":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
  "testimonial-avatar-1":
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  "testimonial-avatar-2":
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop",
  "testimonial-avatar-3":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  "cta-background":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
}
