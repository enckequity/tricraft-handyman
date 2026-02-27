"use client"

import { motion } from "framer-motion"
import { Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import { COMPANY } from "@/lib/constants"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/work/hero-front-door.png"
        alt="Professional front door and entryway by TriCraft Handyman Services in Ephrata PA"
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/75 to-primary-dark/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              Serving Ephrata &amp; All of Lancaster County
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Plumbing, Electrical &amp;{" "}
            <span className="text-secondary">Carpentry</span>
            <br />
            Under One Roof
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-xl"
          >
            One call. One contractor. One invoice. TriCraft handles the jobs most
            handymen can&apos;t &mdash; from a leaky faucet to a full renovation, done
            right the first time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg text-base transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/30 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Get a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg text-base transition-all duration-200 ease-out hover:bg-white hover:text-primary-dark hover:border-white active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="mt-10 flex items-center gap-6 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Licensed &amp; Insured (HIPCA #T000697)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              24/7 Emergency Plumbing
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
