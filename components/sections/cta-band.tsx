"use client"

import { Phone, ArrowRight } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function CtaBand() {
  return (
    <section className="py-20 lg:py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Stop Letting Your To-Do List Pile Up
          </h2>
          <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
            That leaky faucet, the flickering light, the door that won&apos;t
            close right &mdash; we&apos;ll knock it all out in one visit. Call
            today for a free estimate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-accent font-bold rounded-lg text-base transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              Get Your Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg text-base transition-all duration-200 ease-out hover:bg-white/10 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
