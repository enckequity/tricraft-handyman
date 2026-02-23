# TriCraft Handyman Services — Website Handoff

## What Was Built
A complete, production-ready website for TriCraft Handyman Services featuring:
- Responsive single-page design optimized for mobile and desktop
- Professional brand system with custom typography and color palette
- Real project photo gallery with lightbox viewer
- Full SEO optimization with structured data, FAQ schema, and service area targeting
- Working contact form (submissions go to email via Formspree)
- Click-to-call functionality
- 404 error page
- Zero external dependencies (no database, no CMS, no API keys to expire)
- Dynamic years-in-business counter (auto-updates every year)

## Live URL
https://tricraft-handyman.vercel.app

## GitHub Repository
https://github.com/enckequity/tricraft-handyman

## Contact Form
The contact form uses **Formspree** (free tier, 50 submissions/month).
- Dashboard: https://formspree.io/forms/mvzbvbag/submissions
- Submissions are emailed to: denck@enckeg.com
- To change the receiving email: Log in at formspree.io > Account > Linked Emails
- Login: denck@enckeg.com

## How to Update Content

### Company info, services, FAQs:
Open `/lib/constants.ts` — all business data lives in one file:
- `COMPANY` — phone, email, hours, address, social links
- `SERVICES` — service names, descriptions, icons
- `FAQ_ITEMS` — frequently asked questions
- `SERVICE_AREAS` — list of towns served
- `STATS` — homepage statistics (years in business auto-calculates)

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
The site auto-deploys when you push to the `master` branch on GitHub (via Vercel).

Manual deploy: Run `vercel` from the project root.

## How to Add a Custom Domain
1. Go to vercel.com > Your Project > Settings > Domains
2. Add your domain (e.g., tricrafthandyman.com)
3. Update your DNS records as instructed by Vercel
4. SSL is automatic

## Google Business Profile
The "Review on Google" button links to a placeholder URL. Once the client has a Google Business Profile:
1. Get the review link from Google Business dashboard
2. Update `COMPANY.social.google` in `/lib/constants.ts`

## Brand Guide
See `brand-guide.md` in the project root for colors, fonts, and design guidelines.

## Tech Stack
- Next.js 16 (React framework)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- Lucide React (icons)
- Formspree (contact form)
- Hosted on Vercel (free tier)

## Built By
[Enck Equity Group](https://enckeg.com)
