import { AnimatedGradientMesh } from "@/components/visuals";
import { homeContent } from "@/content/home";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-88px)] flex items-center justify-center">
      <AnimatedGradientMesh className="absolute inset-0" />
      <div className="container relative z-10 px-4 py-32 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">
          {homeContent.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-sans mb-10">
          {homeContent.hero.subheadline}
        </p>
      </div>
    </div>
  );
}
