import {
  Wrench,
  Zap,
  Hammer,
  DoorOpen,
  PaintBucket,
  ClipboardCheck,
  Building2,
  Home,
  type LucideIcon,
} from "lucide-react"

export const COMPANY = {
  name: "TriCraft Handyman Services",
  legalName: "TriCraft Handyman Services LLC",
  tagline: "Carpentry \u00B7 Plumbing \u00B7 Electrical Contracting",
  phone: "(717) 799-9304",
  phoneHref: "tel:+17177999304",
  email: "tricraft.handyman@gmail.com",
  address: {
    street: "Ephrata",
    city: "Ephrata",
    state: "PA",
    zip: "17522",
    full: "Ephrata, PA 17522",
  },
  hours: {
    weekdays: "Mon\u2013Fri: 8:00 AM \u2013 6:00 PM",
    saturday: "24/7 Emergency Plumbing",
    sunday: "24/7 Emergency Plumbing",
  },
  social: {
    facebook: "https://www.facebook.com/people/TriCraft-Handyman-Services-LLC/100083411621322/",
    instagram: "https://www.instagram.com/tricraft_handyman_llc/",
    google: "#",
  },
  founded: "2020",
  yearsInBusiness: 5,
} as const

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  slug: string
}

export const SERVICES: Service[] = [
  {
    title: "Plumbing",
    description:
      "Fixture replacements, water heater installs, faucet and toilet repairs, pipe work, and drain clearing. From a dripping kitchen faucet to a full water heater swap, we handle it right the first time.",
    icon: Wrench,
    slug: "plumbing",
  },
  {
    title: "Electrical",
    description:
      "Wiring upgrades, lighting installation, outlets and switches, ceiling fan installs, and panel upgrades. Safe, code-compliant electrical work you can trust.",
    icon: Zap,
    slug: "electrical",
  },
  {
    title: "Carpentry",
    description:
      "Trim and molding, framing, shelving, custom woodwork, and deck repairs. Precision cuts and solid builds that last for years.",
    icon: Hammer,
    slug: "carpentry",
  },
  {
    title: "Doors & Windows",
    description:
      "Full door and window installation, replacement, weatherstripping, and hardware upgrades. Keep your home secure, efficient, and looking sharp.",
    icon: DoorOpen,
    slug: "doors-windows",
  },
  {
    title: "Drywall & Painting",
    description:
      "Drywall repair, patching, skim coating, and interior or exterior touch-up painting. Clean finishes that make rooms look new again.",
    icon: PaintBucket,
    slug: "drywall-painting",
  },
  {
    title: "Property Maintenance",
    description:
      "Ongoing maintenance for landlords, property managers, and homeowners. Seasonal checks, small repairs, and preventive upkeep that saves you money long-term.",
    icon: ClipboardCheck,
    slug: "property-maintenance",
  },
  {
    title: "Light Commercial",
    description:
      "Maintenance and repair work for offices, retail spaces, and rental properties. We keep your commercial property running smoothly and looking professional.",
    icon: Building2,
    slug: "light-commercial",
  },
  {
    title: "Full Improvement Projects",
    description:
      "Kitchen and bath updates, basement finishing, room refreshes, and multi-trade renovation projects. One contractor, one plan, one invoice.",
    icon: Home,
    slug: "improvement-projects",
  },
]

export interface GalleryImage {
  src: string
  alt: string
  category: string
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/work/IMG_7875.jpeg",
    alt: "Craftsman-style front door installation in Ephrata, PA",
    category: "Doors & Windows",
  },
  {
    src: "/images/work/IMG_5009.jpeg",
    alt: "Navy blue bathroom vanity installation with new faucet",
    category: "Plumbing",
  },
  {
    src: "/images/work/IMG_3197.jpeg",
    alt: "Pressure-treated wood deck and walkway construction",
    category: "Carpentry",
  },
  {
    src: "/images/work/IMG_4601.jpeg",
    alt: "Rheem water heater installation with copper piping",
    category: "Plumbing",
  },
  {
    src: "/images/work/IMG_4811.jpeg",
    alt: "Complete room renovation with new flooring and trim",
    category: "Full Renovation",
  },
  {
    src: "/images/work/IMG_5082.jpeg",
    alt: "Kitchen sink and faucet installation",
    category: "Plumbing",
  },
  {
    src: "/images/work/IMG_3199.jpeg",
    alt: "New wood deck build alongside residential property",
    category: "Carpentry",
  },
  {
    src: "/images/work/IMG_4835.jpeg",
    alt: "Ceiling fan installation and drywall finishing",
    category: "Electrical",
  },
  {
    src: "/images/work/IMG_3932.jpeg",
    alt: "Luxury vinyl plank flooring installation",
    category: "Flooring",
  },
  {
    src: "/images/work/IMG_5114.jpeg",
    alt: "Bathroom flooring with wood plank tile and trim transition",
    category: "Flooring",
  },
]

export const SERVICE_AREAS = [
  "Ephrata",
  "Lititz",
  "Akron",
  "Denver",
  "New Holland",
  "Terre Hill",
  "Stevens",
  "Adamstown",
  "Brownstown",
  "East Earl",
  "West Earl",
  "Clay",
  "Reamstown",
  "Lincoln",
  "Brickerville",
  "Rothsville",
  "Manheim",
  "Mount Joy",
  "Columbia",
  "Lancaster",
  "Leola",
  "Bird-in-Hand",
  "Gap",
  "Intercourse",
  "Paradise",
  "Strasburg",
  "Quarryville",
  "Elizabethtown",
] as const

export const STATS = [
  { value: 5, suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 3, suffix: "", label: "Trades Under One Roof" },
  { value: 100, suffix: "%", label: "Satisfaction Guaranteed" },
] as const

export const FAQ_ITEMS = [
  {
    question: "How much does a handyman charge per hour in Ephrata?",
    answer:
      "Our rates depend on the type and scope of work. We provide free, upfront estimates before starting any job \u2014 no hourly surprises. Most small repairs run between $150\u2013$350, and larger projects are quoted per job so you know the total cost before we begin.",
  },
  {
    question: "Can you handle both plumbing and electrical in one visit?",
    answer:
      "Absolutely \u2014 that\u2019s our specialty. Most handymen only do one trade. We\u2019re licensed to handle plumbing, electrical, and carpentry, which means one call, one visit, one invoice. No need to schedule three different contractors.",
  },
  {
    question: "Do you do small jobs or only big projects?",
    answer:
      "We do both. Whether it\u2019s a dripping faucet, a single outlet that\u2019s not working, or a full basement renovation, no job is too small or too large. We treat every job with the same level of care.",
  },
  {
    question: "Are you licensed and insured in Pennsylvania?",
    answer:
      "Yes. TriCraft Handyman Services LLC is fully licensed and insured to operate in Pennsylvania. We carry general liability insurance and workers\u2019 compensation coverage for your protection.",
  },
  {
    question: "What areas do you serve near Ephrata and Lancaster?",
    answer:
      "We serve all of Lancaster County including Ephrata, Lititz, Akron, Denver, New Holland, Terre Hill, Manheim, Mount Joy, Columbia, Lancaster city, and surrounding communities. If you\u2019re in Lancaster County, we can get to you.",
  },
  {
    question: "How quickly can you schedule a repair?",
    answer:
      "Most standard repairs can be scheduled within a few days. For urgent issues like a burst pipe or electrical hazard, we do our best to respond same-day or next-day. Call us and we\u2019ll work with your schedule.",
  },
  {
    question: "Do you work on rental properties and commercial buildings?",
    answer:
      "Yes. We work with landlords, property managers, and commercial building owners throughout Lancaster County. We can set up recurring maintenance schedules or handle one-off repairs as needed.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free estimates for all work. We\u2019ll come out, assess the job, and give you an honest quote before any work begins. No pressure, no obligation.",
  },
] as const

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const
