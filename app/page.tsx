import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { About } from "@/components/sections/about"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { CtaBand } from "@/components/sections/cta-band"
import { SocialFeed } from "@/components/sections/social-feed"
import { FAQ } from "@/components/sections/faq"
import { ServiceAreas } from "@/components/sections/service-areas"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <CtaBand />
        <Testimonials />
        <SocialFeed />
        <FAQ />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
