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
- [ ] Session 5 — Contact API route + JSON-LD schema
- [ ] Session 6 — Sitemap, robots.txt, SEO metadata audit
- [ ] Session 7 — Real content, Nathan's data, launch prep

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

## Notes
- MLS/Pillar 9 feed to be integrated in Session 7 via iframe embed from Nathan
- Lead form emails via Resend — API key stored in .env.local as RESEND_API_KEY
- BCC all lead emails to [GAVIN_EMAIL] — replace before launch
- Nathan's real data needed for Session 7: license number, phone, headshot, reviews
