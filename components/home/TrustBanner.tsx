import { homeContent } from "@/content/home";
import { LogoMarquee } from "@/components/visuals";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon, CrownIcon, Shield01Icon } from "@hugeicons/core-free-icons";

export function TrustBanner() {
  const { trustBanner } = homeContent;

  return (
    <div className="w-full bg-primary/5 border-y border-border/50 py-6 overflow-hidden">
      <LogoMarquee speed={40} pauseOnHover={false} className="opacity-90">

        {/* Rating Item */}
        <div className="flex items-center gap-3 shrink-0 mx-8">
          <div className="flex text-primary">
            {[...Array(5)].map((_, i) => (
              <HugeiconsIcon key={i} icon={StarIcon} size={20} className="fill-primary" strokeWidth={1} />
            ))}
          </div>
          <span className="font-heading font-bold text-xl">{trustBanner.rating}</span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{trustBanner.ratingText}</span>
        </div>

        <div className="w-2 h-2 rounded-full bg-border shrink-0 mx-4" />

        {/* Years Item */}
        <div className="flex items-center gap-3 shrink-0 mx-8">
          <HugeiconsIcon icon={CrownIcon} size={24} className="text-primary" strokeWidth={1.5} />
          <span className="font-heading font-bold text-lg">{trustBanner.yearsText}</span>
        </div>

        <div className="w-2 h-2 rounded-full bg-border shrink-0 mx-4" />

        {/* Badge Item */}
        <div className="flex items-center gap-3 shrink-0 mx-8">
          <HugeiconsIcon icon={Shield01Icon} size={24} className="text-primary" strokeWidth={1.5} />
          <span className="text-sm font-semibold uppercase tracking-wider text-foreground/80">{trustBanner.badge}</span>
        </div>

        <div className="w-2 h-2 rounded-full bg-border shrink-0 mx-4" />

      </LogoMarquee>
    </div>
  );
}
