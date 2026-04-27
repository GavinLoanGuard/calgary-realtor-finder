# Calgary Realtor Finder — Build Plan

## Site
Domain: calgaryrealtorfinder.ca
Stack: Next.js 14 App Router, Tailwind CSS, shadcn/ui, Resend, Vercel
Partner realtor: Nathan Koenigsberg, RE/MAX First, Calgary AB
Purpose: Realtor directory and lead generation. Leads route to Nathan via email.

## Session Tracker
- [x] Session 1 — Scaffold, folder structure, design tokens, fonts
- [x] Session 2 — Navbar, Footer, LeadForm components
- [x] Session 3 — Homepage sections
- [x] Session 4 — All inner page routes with metadata
- [x] Session 5 — Contact API route + JSON-LD schema + SEO audit
- [x] Session 6 — Performance optimization, OG tags, GTM, Vercel config
- [x] Session 7 — Real content, Nathan's data, full page content, launch ready

## Colour Tokens
- primary: #1B2B4B
- background: #FAF8F5
- accent: #C9963E
- charcoal: #2D2D2D

## Target Keywords
- Homepage: realtors in calgary alberta (22,200/mo)
- /calgary-realtors/: best realtor calgary (320/mo)
- /edmonton-realtors/: best realtor edmonton (480/mo)
- /red-deer-realtors/: red deer realtors (1,900/mo)
- /lethbridge-realtors/: lethbridge real estate agents (1,500/mo)
- /grande-prairie-realtors/: grande prairie realtors (1,300/mo)

## Do Not Touch (completed files — locked)
None yet.

## Pre-Launch Checklist (Session 7)
- [ ] Replace `[NATHAN_PHONE]` placeholder in `src/data/schema.ts`
- [ ] Replace `[NATHAN_LICENSE_NUMBER]` placeholder in `src/components/Footer.tsx`
- [ ] Add Nathan's real headshot to `public/images/nathan.jpg` and wire into RealtorProfile
- [ ] Populate 3 real client reviews in `src/components/RealtorProfile.tsx`
- [ ] Replace placeholder listings (PropertyCard) with real MLS/Pillar 9 embed from Nathan
- [ ] Add real RECA license number to `nathanSchema` in `src/data/schema.ts`
- [ ] Set real `RESEND_API_KEY` in production environment (Vercel env vars)
- [ ] Set real `NATHAN_EMAIL` in production environment
- [ ] Set real `GAVIN_EMAIL` in production environment
- [ ] Point DNS for `calgaryrealtorfinder.ca` to Vercel deployment
- [ ] Verify `NEXT_PUBLIC_SITE_URL` is set to `https://calgaryrealtorfinder.ca` in Vercel
- [ ] Test contact form end-to-end: submit → confirm Nathan receives lead email, user receives confirmation
- [ ] Submit sitemap `https://calgaryrealtorfinder.ca/sitemap.xml` to Google Search Console
- [ ] Verify all 15 inner pages have unique H1 and description in Search Console coverage report
- [ ] Fill in placeholder content sections (all pages currently show `[ Full content coming in Session 7 ]`)
- [ ] Add real Open Graph / social share images to `public/og/` and wire into metadata
- [ ] Review RECA advertising standards compliance for all copy before go-live

## Post-Deploy Checklist
- [ ] Vercel deployment live and accessible
- [ ] Custom domain connected with SSL
- [ ] All environment variables set in Vercel dashboard
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Search Console verification token added to layout.tsx metadata
- [ ] GTM container created and ID added to env vars
- [ ] GA4 tag configured in GTM
- [ ] Lead form tested end-to-end on production (real email send)
- [ ] OG images created and uploaded to /public
- [ ] Google Search Console showing pages indexed
- [ ] robots.txt accessible at /robots.txt on production
- [ ] 404 page tested
- [ ] Redirects tested (/calgary → /calgary-realtors etc)

## Notes
- MLS/Pillar 9 feed to be integrated in Session 7 via iframe embed from Nathan
- Lead form emails via Resend — API key stored in .env.local as RESEND_API_KEY
- BCC all lead emails to [GAVIN_EMAIL] — replace before launch
- Nathan's real data needed for Session 7: license number, phone, headshot, reviews
- Vercel region: iad1 (US East) — acceptable for launch; monitor if Canadian region becomes available
- GTM renders nothing if NEXT_PUBLIC_GTM_ID env var is empty (safe for dev)
