import Image from "next/image"
import { Phone, ArrowLeft } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-4">
      <div className="text-center max-w-md">
        <Image
          src="/images/logos/logo-color.png"
          alt="TriCraft Handyman Services"
          width={180}
          height={64}
          className="mx-auto h-16 w-auto mb-8"
        />
        <h1 className="text-6xl font-bold text-primary mb-4 font-heading">
          404
        </h1>
        <h2 className="text-2xl font-bold text-text mb-3">
          Page Not Found
        </h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          This page doesn&apos;t exist &mdash; but we do! TriCraft Handyman
          Services is here for all your plumbing, electrical, and carpentry
          needs in Ephrata and Lancaster County.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-200 hover:bg-primary hover:text-white active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
