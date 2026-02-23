"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"
import { COMPANY, NAV_LINKS } from "@/lib/constants"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-primary-dark/80 backdrop-blur-sm py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <Image
              src={scrolled ? "/images/logos/logo-color.png" : "/images/logos/logo-white.png"}
              alt="TriCraft Handyman Services"
              width={200}
              height={64}
              className="h-14 w-auto lg:h-16"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-text hover:text-primary after:bg-primary"
                    : "text-white/90 hover:text-white after:bg-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={COMPANY.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Free Estimate
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className={`flex items-center gap-1.5 text-sm font-semibold ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{COMPANY.phone}</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-text hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <Image
                  src="/images/logos/logo-color.png"
                  alt="TriCraft Handyman Services"
                  width={200}
                  height={64}
                  className="h-14 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-text hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-8 gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-text py-3 px-4 rounded-lg hover:bg-bg-alt transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-8 space-y-4">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-3 text-lg font-semibold text-primary"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 bg-accent text-white text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
                >
                  Get a Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
