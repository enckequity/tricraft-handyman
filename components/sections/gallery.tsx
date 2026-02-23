"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GALLERY_IMAGES } from "@/lib/constants"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      )
    }
  }

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-accent uppercase">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
            Real Projects. Real Results.
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Every photo here is from an actual TriCraft project in Lancaster
            County. No stock images &mdash; just honest work we&apos;re proud of.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <ScrollReveal
              key={image.src}
              delay={index * 0.06}
              direction="up"
              className={
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }
            >
              <button
                onClick={() => openLightbox(index)}
                className="group relative w-full overflow-hidden rounded-xl aspect-square cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-white/90 text-text text-xs font-semibold rounded-full">
                    {image.category}
                  </span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div
              className="relative w-full max-w-4xl max-h-[85vh] mx-4 aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white/90 text-sm font-medium">
                {GALLERY_IMAGES[lightboxIndex].alt}
              </p>
              <p className="text-white/50 text-xs mt-1">
                {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
