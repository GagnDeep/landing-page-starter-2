export type ImageSlot = "hero" | "about" | "service1" | "service2" | "service3"

export const images: Record<ImageSlot, string> = {
  hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920",
  about:
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1080",
  service1:
    "https://images.unsplash.com/photo-1516975080661-460d3d526e3c?auto=format&fit=crop&q=80&w=800",
  service2:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=800",
  service3:
    "https://images.unsplash.com/photo-1600124317765-b73373466fbf?auto=format&fit=crop&q=80&w=800",
}
