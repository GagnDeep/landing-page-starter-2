import React from "react";
import { homeContent } from "@/content/home";
import { MapPin } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <MapPin className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
          {homeContent.location.heading}
        </h2>
        <p className="text-xl font-medium text-foreground mb-2">
          {homeContent.location.address}
        </p>
        <p className="text-muted-foreground max-w-md mx-auto">
          {homeContent.location.deliveryText}
        </p>
      </div>
    </section>
  );
}
