# Midasis Technologies — Marketing Site PRD

## Original Problem Statement
Build a clean, modern, professional single-page website for Midasis Technologies
(tagline: "Where Technology Meets Talent") — a global IT staffing & consulting
firm with operations in USA and India. Strict brand color system (#2478C5 blue,
#E87722 orange accent only, #EBF4FB tint, #0D2B4E navy), Montserrat + Poppins
typography, alternating white/light-blue sections, fully responsive.

## Architecture
- **Frontend**: React 19 (CRA + craco), TailwindCSS, shadcn/ui, lucide-react,
  axios, sonner. Single page (`/`) with smooth-scroll anchor navigation.
- **Backend**: FastAPI + Motor (Mongo). Two domains: status checks (template)
  and contact form submissions.
- **Database**: MongoDB collection `contact_submissions`.

## Key Components
- `Navbar` — sticky, glassmorph on scroll, hamburger Sheet on mobile
- `Hero` — animated SVG tech globe + orbiting rings + trust bar (6 clients)
- `About` — 4 stat cards (orange bottom border)
- `USStaffing` — 3 model cards + 15 role chips + 6 work-auth badges
- `IndiaStaffing` — 3 model cards + 14 role chips + 6 city badges
- `WhyChoose` — 6 icon cards (3-col grid, orange hover top border)
- `Services` — 6 icon cards
- `Vision` — solid blue bg, centered white copy
- `Clients` — 7 styled name badge cards
- `Contact` — 3 office cards (orange left border) + form with Select dropdown
- `Footer` — dark navy with Logo / Quick Links / Staffing / Reach Us columns

## Backend API
- `GET  /api/` — health
- `POST /api/contact` — body { name, email, subject, requirement_type, message }
  where requirement_type ∈ {US IT Staffing, India IT Staffing, IT Consulting, General Inquiry}
- `GET  /api/contact` — list submissions

## What's Implemented (Dec 2025)
- All 11 sections fully built per spec
- Brand colors strictly enforced (orange = accent only)
- Animated SVG globe with orbits + connection paths
- Custom CSS card-hover with orange top-border, stat-card with orange bottom-border, contact-card with orange left-border
- Contact form: validation, MongoDB persistence, sonner toast feedback
- Smooth-scroll anchor navigation
- Fully mobile responsive with hamburger Sheet
- 100% backend + frontend test coverage (testing_agent_v3 iteration 1)

## Backlog / Next
### P1
- Replace name-only client badges with real (licensed) client logos when available
- Add Resend/SendGrid integration so contact submissions email santosh.j@midasis.com
- Add `/admin` route to view contact submissions (basic auth)

### P2
- Add a careers / job listings page (currently just landing page)
- Add case studies / testimonials section
- SEO meta tags + OpenGraph + sitemap.xml
- Google Analytics / Plausible
- Blog / insights section

## User Personas
1. Hiring manager from Fortune 500 / mid-market US enterprise looking for IT contractors
2. India-based enterprise looking for offshore staffing or BOT model
3. Job seeker / IT professional (browses to learn about Midasis)
