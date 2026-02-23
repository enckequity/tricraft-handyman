"use client"

import { Star, Facebook, MessageSquare } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Reviews() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-secondary uppercase">
            Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Worked With Us? Let Us Know
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We take pride in every job. If we&apos;ve done work for you, a quick
            review helps other homeowners find a contractor they can trust.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Your honest feedback means the world to us. Leave a review on
                Facebook or Google and help us grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Facebook className="w-5 h-5" />
                  Review on Facebook
                </a>
                <a
                  href={COMPANY.social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-text font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Review on Google
                </a>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a
                href={COMPANY.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center shrink-0">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Follow on Facebook</p>
                  <p className="text-white/50 text-xs">Project updates & photos</p>
                </div>
              </a>
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Follow on Instagram</p>
                  <p className="text-white/50 text-xs">@tricraft_handyman_llc</p>
                </div>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
