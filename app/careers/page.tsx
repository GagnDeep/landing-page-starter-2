import { Metadata } from "next";
import { seo, hero, culture, openings, applicationProcess } from "@/content/careers";
import { AnimatedGradientMesh } from "@/components/visuals/AnimatedGradientMesh";
import { DotMatrixPattern } from "@/components/visuals/DotMatrixPattern";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-[40vh] flex items-center pt-24 pb-20 overflow-hidden bg-primary text-primary-foreground">
        <AnimatedGradientMesh speed={40} colors={["rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)", "transparent"]} className="absolute inset-0" />
        <DotMatrixPattern opacity={0.2} />
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
            {hero.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Culture & Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">{culture.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {culture.description}
          </p>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="py-24 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">{openings.title}</h2>
          </div>
          <div className="space-y-6">
            {openings.roles.map((role, idx) => (
              <Card key={idx} className="bg-background border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <CardTitle className="font-heading text-2xl mb-2">{role.title}</CardTitle>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary/10 text-secondary">
                        {role.type}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                  <div className="bg-muted/50 p-4 rounded-xl">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-foreground mb-2">Requirements</h4>
                    <p className="text-sm text-muted-foreground">{role.requirements}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto max-w-3xl px-4 text-center space-y-8">
          <h2 className="text-3xl font-heading font-bold">{applicationProcess.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {applicationProcess.description}
          </p>
          <div className="pt-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg">
              <a href={`mailto:${applicationProcess.email}`}>Email Us: {applicationProcess.email}</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-8 border-t border-border/50">{applicationProcess.note}</p>
        </div>
      </section>

    </div>
  );
}
