"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/logos/logo-white.png"
              alt="TriCraft Handyman Services"
              width={400}
              height={400}
              className="h-32 w-auto mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional plumbing, electrical, and carpentry services for
              homeowners and businesses in Lancaster County, PA.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.social.facebook}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={COMPANY.social.instagram}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.slice(0, 8).map((area) => (
                <li key={area} className="text-sm text-white/60">
                  {area}, PA
                </li>
              ))}
              <li className="text-sm text-white/40">
                + all of Lancaster County
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0" />
                {COMPANY.address.full}
              </li>
            </ul>

            <div className="mt-6 text-sm text-white/60 space-y-1">
              <p>{COMPANY.hours.weekdays}</p>
              <p>{COMPANY.hours.emergency}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <p className="text-sm text-white/40">
            Licensed &amp; Insured &middot; Ephrata, PA
          </p>
          <p className="text-sm text-white/30">
            Built by{" "}
            <a
              href="https://enckeg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 transition-colors"
            >
              enckeg.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
