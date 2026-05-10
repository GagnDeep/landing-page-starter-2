"use client";

import React, { useState } from "react";
import { CTAGlowButton } from "./CTAGlowButton";
import { cn } from "@/lib/utils";
import { blogContent } from "@/content/blog";

export function NewsletterForm({
  placeholder,
  ctaLabel,
  className
}: {
  placeholder: string,
  ctaLabel: string,
  className?: string
}) {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className={cn("p-4 rounded-xl bg-primary/20 border border-primary/30 text-primary font-medium text-center", className)}>
        {blogContent.newsletter.successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row gap-3", className)}>
      <input
        type="email"
        placeholder={placeholder}
        required
        className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary min-w-[250px]"
      />
      <CTAGlowButton as="button" type="submit" className="py-4 px-8 whitespace-nowrap">
        {ctaLabel}
      </CTAGlowButton>
    </form>
  );
}
