"use client"

import Image from "next/image"
import { Shield, Clock, DollarSign, Users } from "lucide-react"
import { STATS } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { CountUp } from "@/components/ui/count-up"

const trustPoints = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "On-Time, Every Time" },
  { icon: DollarSign, label: "Honest Pricing" },
  { icon: Users, label: "Residential & Commercial" },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/work/IMG_4811.jpeg"
                  alt="Complete room renovation with new flooring, paint, and trim work by TriCraft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl hidden sm:block">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-white/80">Years Serving<br />Lancaster County</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <span className="text-sm font-semibold tracking-widest text-accent uppercase">
              Why TriCraft
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text tracking-tight">
              Ephrata&apos;s Multi-Trade Handyman You Can Count On
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              TriCraft Handyman Services was built on a simple idea: homeowners
              shouldn&apos;t need to call three different contractors for one project.
              Based in Ephrata, Pennsylvania, we bring professional-grade plumbing,
              electrical, and carpentry skills to every job &mdash; big or small.
            </p>
            <p className="mt-3 text-text-muted leading-relaxed">
              We&apos;re not a franchise and we&apos;re not a national chain. We&apos;re
              your neighbors in Lancaster County. When we quote a price, that&apos;s
              the price. When we say we&apos;ll be there at 8 AM, we&apos;re there at
              8 AM. That&apos;s how business should work.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {trustPoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-text">
                      {point.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 0.1}
              direction="up"
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-text-muted">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
