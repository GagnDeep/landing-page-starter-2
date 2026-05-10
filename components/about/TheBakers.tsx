import React from "react";
import Image from "next/image";
import { aboutContent } from "@/content/about";
import { SITE_IMAGES } from "@/lib/images";

export function TheBakers() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            {aboutContent.team.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {aboutContent.team.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutContent.team.members.map((member, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative border-4 border-secondary group-hover:border-primary transition-colors">
                <Image
                  src={idx % 2 === 0 ? SITE_IMAGES.teamMember1.url : SITE_IMAGES.bakeryProcess.url}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
