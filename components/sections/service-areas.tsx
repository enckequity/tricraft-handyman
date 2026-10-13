"use client"

import { SERVICE_AREAS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function ServiceAreas() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-text tracking-tight">
            Serving All of Lancaster County
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Based in Ephrata, we provide professional handyman services throughout
            Lancaster County and surrounding communities. If you&apos;re in the 717,
            we can get to you.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <p className="max-w-4xl mx-auto text-center text-text-muted leading-relaxed">
            {SERVICE_AREAS.join(", ")}
          </p>
          <p className="mt-8 text-center text-text-muted text-sm">
            Don&apos;t see your town? Call us. If you&apos;re in Lancaster County
            or within 30 minutes of Ephrata, we likely serve your area.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
