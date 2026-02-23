"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const FORMSPREE_URL = "https://formspree.io/f/mvzbvbag"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch {
      window.location.href = `mailto:${COMPANY.email}?subject=Estimate Request`
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Give us a call or send a message. We&apos;ll get back to you with a
            free estimate, usually within a few hours.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <a
                href={COMPANY.phoneHref}
                className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary">
                  <Phone className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Call Us</h3>
                  <p className="text-primary font-semibold text-lg mt-1">
                    {COMPANY.phone}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Tap to call. We answer during business hours and return calls
                    promptly.
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary">
                  <Mail className="w-5 h-5 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Email Us</h3>
                  <p className="text-primary font-semibold mt-1">
                    {COMPANY.email}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Send us details about your project and we&apos;ll follow up
                    with a quote.
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Location</h3>
                  <p className="text-text-muted mt-1">
                    {COMPANY.address.full}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    Serving all of Lancaster County and surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text">Hours</h3>
                  <div className="text-text-muted text-sm mt-1 space-y-0.5">
                    <p>{COMPANY.hours.weekdays}</p>
                    <p>{COMPANY.hours.saturday}</p>
                    <p>{COMPANY.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white rounded-xl border border-border p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-text mb-2">
                Request a Free Estimate
              </h3>
              <p className="text-text-muted text-sm mb-6">
                Tell us about your project and we&apos;ll get back to you quickly.
              </p>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold text-text mb-2">
                    Request Sent!
                  </h4>
                  <p className="text-text-muted">
                    We&apos;ll get back to you within a few hours during business
                    hours. Thank you!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-primary font-medium hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 flex-1 flex flex-col"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-text mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        placeholder="(717) 555-0123"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="carpentry">Carpentry</option>
                      <option value="doors-windows">Doors & Windows</option>
                      <option value="drywall-painting">Drywall & Painting</option>
                      <option value="renovation">Full Renovation Project</option>
                      <option value="maintenance">Property Maintenance</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text mb-1.5"
                    >
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text placeholder:text-text-light text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                      placeholder="Describe what you need done..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-accent text-white font-semibold rounded-lg text-base transition-all duration-200 ease-out hover:scale-[1.01] hover:shadow-lg hover:shadow-accent/25 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {submitting ? "Sending..." : "Send Request"}
                  </button>
                  <p className="text-xs text-text-light text-center">
                    We&apos;ll respond within a few hours during business hours. Your
                    information is never shared.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
