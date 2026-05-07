"use client"

import { useState } from "react"
import { homeContent } from "@/content/home"
import { motion, AnimatePresence } from "framer-motion"
import { TextFadeIn } from "@/components/visuals"
import { cn } from "@/lib/utils"

export function MenuTeaser() {
  const { menuTeaser } = homeContent
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <TextFadeIn>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground">
              {menuTeaser.heading}
            </h2>
          </TextFadeIn>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 max-w-6xl mx-auto">

          {/* Tabs */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:w-1/3 border-b lg:border-b-0 lg:border-r border-border">
            {menuTeaser.categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl lg:rounded-r-none transition-all duration-300 font-heading text-xl whitespace-nowrap",
                  activeCategory === idx
                    ? "bg-primary/10 text-primary border-b-2 lg:border-b-0 lg:border-r-4 border-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {menuTeaser.categories[activeCategory].items.map((item, idx) => (
                  <div key={idx} className="group border-b border-border/50 pb-6 last:border-0">
                    <h3 className="text-2xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
