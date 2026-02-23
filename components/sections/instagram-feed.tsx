"use client"

import { useEffect } from "react"
import { Instagram } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const INSTAGRAM_POSTS = [
  "DU_g8NLjwcV",
  "DU38W_MDy3V",
  "DUtJpwBDpIC",
  "DUo0FTqjDbZ",
  "DUJ43EyjwQp",
  "DUBUWy1EfjP",
]

export function InstagramFeed() {
  useEffect(() => {
    const win = window as unknown as Record<string, Record<string, { init: () => void }>>
    if (!document.getElementById("ig-embed-script")) {
      const script = document.createElement("script")
      script.id = "ig-embed-script"
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    } else if (win.instgrm) {
      win.instgrm.Embeds.init()
    }
  }, [])

  return (
    <section id="instagram" className="py-24 lg:py-32 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Latest Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text tracking-tight">
            Follow Our Work on Instagram
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Real projects, real results. See what we&apos;ve been working on
            around Lancaster County.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTAGRAM_POSTS.map((shortcode) => (
              <div
                key={shortcode}
                className="bg-white rounded-xl border border-border overflow-hidden"
              >
                <iframe
                  src={`https://www.instagram.com/p/${shortcode}/embed/`}
                  className="w-full border-none"
                  height="480"
                  loading="lazy"
                  title={`Instagram post ${shortcode}`}
                  allow="encrypted-media"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-10">
          <a
            href={COMPANY.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Instagram className="w-5 h-5" />
            Follow @tricraft_handyman_llc
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
