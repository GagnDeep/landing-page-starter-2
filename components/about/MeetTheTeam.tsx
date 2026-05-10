import { aboutContent } from "@/content/about";
import { siteImages } from "@/lib/images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamImages = [
  siteImages.founderStory,
  siteImages.liveCounters, // Placeholder for other team members
  siteImages.kitchenAction, // Placeholder
];

export function MeetTheTeam() {
  const { team } = aboutContent;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          {team.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.members.map((member, index) => (
            <Card key={index} className="overflow-hidden border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] group">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={teamImages[index % teamImages.length].src}
                  alt={member.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                   <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
                   <p className="text-primary font-medium">{member.role}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {member.bio}
                </p>
                {member.quote && (
                  <blockquote className="italic border-l-2 border-primary pl-4 text-foreground/80 font-medium">
                    &quot;{member.quote}&quot;
                  </blockquote>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
