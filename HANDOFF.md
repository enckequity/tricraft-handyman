# TriCraft Handyman Services — Website Handoff

## What Was Built
A complete, production-ready website for TriCraft Handyman Services featuring:
- Responsive single-page design optimized for mobile and desktop
- Professional brand system with custom typography and color palette
- Real project photo gallery with lightbox viewer
- Full SEO optimization with structured data, FAQ schema, and service area targeting
- Contact form and click-to-call functionality
- 404 error page
- Zero external dependencies (no database, no CMS, no API keys)

## Live URL
[To be added after Vercel deployment]

## GitHub Repository
[To be added after repo creation]

## How to Update Content

### Company info, services, testimonials:
Open `/lib/constants.ts` — all business data lives in one file:
- `COMPANY` — phone, email, hours, address
- `SERVICES` — service names, descriptions, icons
- `TESTIMONIALS` — customer reviews
- `FAQ_ITEMS` — frequently asked questions
- `SERVICE_AREAS` — list of towns served

Edit the file, save, commit, and push. The site auto-deploys in ~60 seconds.

### Images:
- **Work photos**: Replace files in `/public/images/work/` and update references in `GALLERY_IMAGES` in constants.ts
- **Logos**: Replace files in `/public/images/logos/`
- Supported formats: .jpg, .jpeg, .png, .webp

### SEO metadata:
- Title tags and meta descriptions: Edit in `/app/layout.tsx` under `metadata`
- Structured data (Google Business schema): Edit the `StructuredData` component in `/app/layout.tsx`

## How to Run Locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## How to Deploy
The site auto-deploys when you push to the `main` branch on GitHub (via Vercel).

Manual deploy: Run `vercel` from the project root.

## How to Add a Custom Domain
1. Go to vercel.com → Your Project → Settings → Domains
2. Add your domain (e.g., tricrafthandyman.com)
3. Update your DNS records as instructed by Vercel
4. SSL is automatic

## Brand Guide
See `brand-guide.md` in the project root for colors, fonts, and design guidelines.

## Tech Stack
- Next.js 16 (React framework)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- Hosted on Vercel (free tier)
