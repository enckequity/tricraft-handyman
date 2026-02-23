"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Testimonials() {
  const [active, setActive] = useState(0)

  const goNext = () => setActive((active + 1) % TESTIMONIALS.length)
  const goPrev = () =>
    setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-secondary uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What Our Customers Say
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
              <Quote className="w-10 h-10 text-secondary/40 mb-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 min-h-[100px]">
                &ldquo;{TESTIMONIALS[active].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">
                    {TESTIMONIALS[active].name}
                  </div>
                  <div className="text-white/50 text-sm">
                    {TESTIMONIALS[active].location} &middot;{" "}
                    {TESTIMONIALS[active].service}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={goPrev}
                    className="p-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="p-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-secondary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
