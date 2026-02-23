"use client"

import { SERVICES } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Three Trades. One Contractor.
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Most handymen specialize in one thing. We handle plumbing, electrical,
            and carpentry &mdash; plus everything in between. That means fewer
            calls, faster timelines, and one team you can trust.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal
                key={service.slug}
                delay={index * 0.08}
                className="group"
              >
                <div className="relative h-full p-6 rounded-xl bg-bg border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <Icon className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
