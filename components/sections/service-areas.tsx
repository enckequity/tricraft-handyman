"use client"

import { MapPin } from "lucide-react"
import { SERVICE_AREAS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function ServiceAreas() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Service Areas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text tracking-tight">
            Serving All of Lancaster County
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Based in Ephrata, we provide professional handyman services throughout
            Lancaster County and surrounding communities. If you&apos;re in the 717,
            we can get to you.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-bg border border-border rounded-full text-sm font-medium text-text-muted transition-all duration-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
              >
                <MapPin className="w-3.5 h-3.5" />
                {area}, PA
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Don&apos;t see your town listed? Give us a call &mdash; if you&apos;re
            in Lancaster County or within 30 minutes of Ephrata, we likely serve
            your area.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
