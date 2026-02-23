"use client"

import { Facebook, Instagram, Star } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function SocialFeed() {
  return (
    <section id="social" className="py-24 lg:py-32 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Follow Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text tracking-tight">
            See What We&apos;re Working On
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Follow us on social media for project updates, before-and-after
            photos, and tips for keeping your home in top shape.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text text-sm">
                    TriCraft Handyman Services LLC
                  </h3>
                  <p className="text-xs text-text-muted">Facebook</p>
                </div>
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-sm font-semibold text-[#1877F2] hover:underline"
                >
                  Follow
                </a>
              </div>
              <div className="flex justify-center p-4 min-h-[400px]">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpeople%2FTriCraft-Handyman-Services-LLC%2F100083411621322%2F&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="400"
                  height="500"
                  className="border-none overflow-hidden max-w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="TriCraft Handyman Services LLC Facebook Feed"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6">
              <a
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text text-sm">
                      @tricraft_handyman_llc
                    </h3>
                    <p className="text-xs text-text-muted">Instagram</p>
                  </div>
                  <span className="ml-auto text-sm font-semibold text-[#833AB4] group-hover:underline">
                    Follow
                  </span>
                </div>
                <div className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[3px]">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-[#833AB4]" />
                    </div>
                  </div>
                  <p className="text-text font-semibold mb-1">
                    Follow us on Instagram
                  </p>
                  <p className="text-text-muted text-sm">
                    Project photos, behind-the-scenes, and home improvement tips
                  </p>
                </div>
              </a>

              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-text">
                    5-Star Service
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  We&apos;re building our online review presence. If you&apos;ve
                  worked with us, we&apos;d love to hear from you! Leave us a
                  review on Facebook or Google.
                </p>
                <div className="flex gap-3">
                  <a
                    href={COMPANY.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Facebook className="w-4 h-4" />
                    Review on Facebook
                  </a>
                  <a
                    href={COMPANY.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border text-text text-sm font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
