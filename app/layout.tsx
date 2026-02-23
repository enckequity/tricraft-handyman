import type { Metadata } from "next"
import { Bitter, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tricrafthandyman.com"),
  title:
    "Handyman Services in Ephrata, PA | TriCraft Handyman \u2014 Plumbing, Electrical & Carpentry",
  description:
    "Professional handyman services in Ephrata, PA. Plumbing, electrical, carpentry & more \u2014 one call covers it all. Licensed, insured, honest pricing. Free estimates. Serving all of Lancaster County.",
  keywords: [
    "handyman Ephrata PA",
    "handyman services Lancaster County",
    "plumber Ephrata PA",
    "electrician Ephrata PA",
    "carpenter Ephrata PA",
    "home repair Ephrata",
    "handyman near me",
    "TriCraft Handyman Services",
  ],
  openGraph: {
    title:
      "TriCraft Handyman Services \u2014 Plumbing, Electrical & Carpentry in Ephrata, PA",
    description:
      "One call covers plumbing, electrical & carpentry. Professional handyman services for Ephrata and all of Lancaster County. Free estimates.",
    url: "https://tricrafthandyman.com",
    siteName: "TriCraft Handyman Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/work/IMG_7875.jpeg",
        width: 1200,
        height: 630,
        alt: "TriCraft Handyman Services - Professional door installation in Ephrata PA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TriCraft Handyman Services \u2014 Ephrata, PA",
    description:
      "Plumbing, electrical & carpentry under one roof. Serving Ephrata and Lancaster County.",
    images: ["/images/work/IMG_7875.jpeg"],
  },
  alternates: {
    canonical: "https://tricrafthandyman.com",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logos/logo-color.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <StructuredData />
      </head>
      <body className={`${bitter.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}

function StructuredData() {
  const localBusiness = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "TriCraft Handyman Services LLC",
    description:
      "Professional plumbing, electrical, and carpentry services for residential and light commercial properties in Ephrata, PA and Lancaster County.",
    url: "https://tricrafthandyman.com",
    telephone: "+1-717-799-9304",
    email: "info@tricrafthandyman.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ephrata",
      addressRegion: "PA",
      postalCode: "17522",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.1799,
      longitude: -76.1788,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    image: "/images/logos/logo-color.png",
    areaServed: [
      "Ephrata, PA",
      "Lititz, PA",
      "Lancaster, PA",
      "Akron, PA",
      "Denver, PA",
      "New Holland, PA",
      "Manheim, PA",
      "Mount Joy, PA",
      "Columbia, PA",
      "Lancaster County, PA",
    ],
  })

  const faqPage = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a handyman charge per hour in Ephrata?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our rates depend on the type and scope of work. We provide free, upfront estimates before starting any job. Most small repairs run between $150\u2013$350, and larger projects are quoted per job.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle both plumbing and electrical in one visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely \u2014 that\u2019s our specialty. We handle plumbing, electrical, and carpentry, which means one call, one visit, one invoice.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed and insured in Pennsylvania?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TriCraft Handyman Services LLC is fully licensed and insured to operate in Pennsylvania with general liability and workers\u2019 compensation coverage.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve near Ephrata and Lancaster?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve all of Lancaster County including Ephrata, Lititz, Akron, Denver, New Holland, Manheim, Mount Joy, Columbia, Lancaster city, and surrounding communities.",
        },
      },
    ],
  })

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning>{localBusiness}</script>
      <script type="application/ld+json" suppressHydrationWarning>{faqPage}</script>
    </>
  )
}
