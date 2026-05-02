"use client";

import { useState } from "react";
import { bookingContent } from "@/content/booking";
import {
  FadeInScroll,
  CTAGlow,
} from "@/components/visuals";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Simplified state-driven form flow
export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [modality, setModality] = useState<"home" | "salon" | null>(null);

  const handleNext = () => setStep((s) => Math.min(s + 1, 4));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden bg-background">
      {/* 1. Hero */}
      <section className="w-full pt-48 pb-16 border-b border-border/40">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <FadeInScroll>
            <h1 className="text-4xl md:text-6xl font-heading text-primary mb-4 tracking-tight">
              {bookingContent.hero.heading}
            </h1>
            <p className="text-lg text-muted-foreground">
              {bookingContent.hero.subheading}
            </p>
          </FadeInScroll>
        </div>
      </section>

      {/* Main Funnel Area */}
      <section className="w-full py-16 flex-1 flex flex-col items-center">
        <div className="container mx-auto px-6 max-w-4xl w-full">

          <div className="flex gap-4 text-sm font-medium tracking-widest uppercase mb-16 text-muted-foreground justify-center">
            <span className={cn("transition-colors", step >= 1 && "text-primary")}>1. {bookingContent.steps.modality.heading.split(" ")[0]}</span>
            <span className="opacity-30">/</span>
            <span className={cn("transition-colors", step >= 2 && "text-primary")}>2. {bookingContent.steps.serviceSelection.heading.split(" ")[2]}</span>
            <span className="opacity-30">/</span>
            <span className={cn("transition-colors", step >= 3 && "text-primary")}>3. {bookingContent.steps.clientDetails.heading.split(" ")[1]}</span>
            <span className="opacity-30">/</span>
            <span className={cn("transition-colors", step >= 4 && "text-primary")}>4. {bookingContent.summary.heading.split(" ")[1]}</span>
          </div>

          <FadeInScroll key={step} direction="none" distance={0}>
            <div className="min-h-[400px]">

              {/* Step 1: Modality */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-3xl font-heading text-center mb-12">{bookingContent.steps.modality.heading}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                      onClick={() => setModality("home")}
                      className={cn(
                        "p-12 border text-center transition-all duration-300",
                        modality === "home" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      )}
                    >
                      <h3 className="text-2xl font-heading mb-4">{bookingContent.steps.modality.atHome.title}</h3>
                      <p className="text-muted-foreground">{bookingContent.steps.modality.atHome.description}</p>
                    </button>
                    <button
                      onClick={() => setModality("salon")}
                      className={cn(
                        "p-12 border text-center transition-all duration-300",
                        modality === "salon" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      )}
                    >
                      <h3 className="text-2xl font-heading mb-4">{bookingContent.steps.modality.inSalon.title}</h3>
                      <p className="text-muted-foreground">{bookingContent.steps.modality.inSalon.description}</p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Service Selection (Mocked) */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-heading text-center mb-12">{bookingContent.steps.category.heading}</h2>
                  <div className="space-y-4">
                    {bookingContent.steps.category.options.map((opt, i) => (
                      <button key={i} className="w-full p-6 border border-border text-left hover:border-primary/50 transition-colors flex justify-between items-center group">
                        <span className="text-lg text-foreground">{opt}</span>
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">Select +</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Details (Mocked Form) */}
              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl mx-auto">
                  <h2 className="text-3xl font-heading text-center mb-12">{bookingContent.steps.clientDetails.heading}</h2>
                  <div className="space-y-6">
                    <input type="text" placeholder={bookingContent.steps.clientDetails.name} className="w-full bg-transparent border-b border-border/50 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground" />
                    <input type="email" placeholder={bookingContent.steps.clientDetails.email} className="w-full bg-transparent border-b border-border/50 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground" />
                    <input type="tel" placeholder={bookingContent.steps.clientDetails.phone} className="w-full bg-transparent border-b border-border/50 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground" />

                    {modality === "home" && (
                      <div className="pt-8 space-y-6">
                        <h3 className="text-xl font-heading">{bookingContent.steps.addressInput.heading}</h3>
                        <input type="text" placeholder={bookingContent.steps.addressInput.street} className="w-full bg-transparent border-b border-border/50 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground" />
                        <div className="flex gap-6">
                          <input type="text" placeholder={bookingContent.steps.addressInput.city} className="w-1/2 bg-transparent border-b border-border/50 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground" />
                          <input type="text" placeholder={bookingContent.steps.addressInput.zip} className="w-1/2 bg-transparent border-b border-border/50 py-4 px-2 outline-none focus:border-primary transition-colors text-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 4: Confirm */}
              {step === 4 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-xl mx-auto text-center">
                  <h2 className="text-3xl font-heading">{bookingContent.summary.heading}</h2>

                  <div className="bg-muted/30 p-8 text-left space-y-6">
                    <div className="flex justify-between border-b border-border/40 pb-4">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium text-foreground">{modality === "home" ? "At My Home" : "In-Studio"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-4">
                      <span className="text-muted-foreground">Service</span>
                      <span className="font-medium text-foreground">Signature Haircut & Blowout</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-4">
                      <span className="text-muted-foreground">Date</span>
                      <span className="font-medium text-foreground">Select a date above</span>
                    </div>
                  </div>

                  <label className="flex items-center justify-center gap-3 text-sm text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="accent-primary w-4 h-4" />
                    <span>
                      {bookingContent.steps.policy.label}{" "}
                      <Link href="/terms" className="border-b border-muted-foreground/50 hover:text-foreground">
                        {bookingContent.steps.policy.linkText}
                      </Link>
                    </span>
                  </label>

                  <div>
                    <CTAGlow onClick={() => alert("This is a demo. Booking system would process here.")}>
                      {bookingContent.finalCta.buttonText}
                    </CTAGlow>
                    <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                      <span className="inline-block w-3 h-3 rounded-full border border-current opacity-50" />
                      {bookingContent.steps.payment.securityAssurance}
                    </p>
                  </div>
                </div>
              )}

            </div>
          </FadeInScroll>

          {/* Navigation */}
          <div className="flex justify-between mt-16 pt-8 border-t border-border/40 max-w-4xl mx-auto w-full">
            <button
              onClick={handlePrev}
              className={cn("text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors", step === 1 ? "opacity-0 pointer-events-none" : "opacity-100")}
            >
              ← Back
            </button>
            <button
              onClick={handleNext}
              disabled={step === 1 && !modality}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors",
                step === 4 ? "hidden" : "block",
                (step === 1 && !modality) ? "opacity-30 cursor-not-allowed" : "hover:text-primary"
              )}
            >
              Continue →
            </button>
          </div>

        </div>
      </section>

      <section className="w-full py-12 text-center">
        <p className="text-sm text-muted-foreground">
          {bookingContent.helpEscapeHatch.text}{" "}
          <Link href="/contact" className="text-primary hover:text-foreground transition-colors border-b border-primary/30">
            {bookingContent.helpEscapeHatch.linkText}
          </Link>
        </p>
      </section>
    </main>
  );
}
