"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FAQ_ITEMS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 lg:py-32 bg-bg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Quick answers about our handyman services in Ephrata and Lancaster County.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="border border-border rounded-xl bg-white overflow-hidden transition-all duration-300 hover:border-primary/20">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-semibold text-text pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-text-muted leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
