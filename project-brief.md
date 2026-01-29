# Asia Supply Trade - Project Brief

## Project Overview
Build a professional B2B website for Asia Supply Trade, a company that connects Canadian agricultural commodity suppliers with Asian buyers. The site serves two distinct audiences: buyers (food manufacturers, feed mills, pet food companies) and suppliers (Canadian farmers, exporters, producers).

## Business Model
- Facilitator model (not a trading company)
- No inventory/warehousing
- Connects direct Canadian suppliers with Asian buyers
- Works with established importer/distributor partners in Asia
- Focus on long-term relationships over transactions

## Target Audiences

### Primary: Asian Buyers (70%)
- Food manufacturing companies
- Animal feed manufacturers
- Pet food companies
- Food ingredient distributors
- Agricultural importers

### Secondary: Canadian Suppliers (30%)
- Direct producers/farmers
- Agricultural exporters
- Processing facilities
- Grain handlers

## Products
- Oats (primary focus currently)
- Wheat
- Barley
- Pulses (peas, lentils)
- Canola

## Applications/Segments
- Food Grade
- Animal Feed
- Pet Food

## Key Features Required

### Two-Audience Balance
- Homepage speaks to both buyers and suppliers
- Dedicated "For Suppliers" page
- Supplier callouts on commodity pages
- Dual contact forms (buyer/supplier)

### Product Pages
- 5 commodity pages (Oats, Wheat, Barley, Pulses, Canola)
- Segment badges (Food Grade / Animal Feed / Pet Food)
- Specifications with downloadable spec sheets
- Gated downloads (light form: name, company, email, intended use)
- Applications by segment
- Origin, packaging, lead times
- Quality & traceability info
- Request quote CTA

### Navigation
- Home | About Us | Products (dropdown) | For Suppliers | Contact
- Messaging app icons in header (WhatsApp, Line, Zalo, Viber, Kakao Talk)

### Homepage Elements
- Hero with segment switcher (Food Grade / Animal Feed / Pet Food)
- Commodity cards grid (5 products)
- Supplier callout section
- Trust/credibility section (Canadian origin, quality, established network)
- Contact CTA

### About Page
- Company story (10+ years experience in Asian markets)
- Founder profile (Kelly Cailes)
- How we work (B2B focus, partner networks, quality focus)
- Geographic focus (Canada → Asia)
- Values and differentiators

### For Suppliers Page
- Value proposition for suppliers
- Requirements (direct sources only)
- How it works (4-step process)
- Supplier inquiry form with commodity checkboxes
- Important note about intermediaries/trading companies

### Contact Page
- Tab switcher: "I'm a Buyer" / "I'm a Supplier"
- Separate forms for each audience
- Prominent messaging app buttons
- Business information

## Tech Stack
- **Framework:** Next.js (App Router)
- **CMS:** Sanity (headless CMS for content management)
- **Styling:** Tailwind CSS (core utility classes only)
- **Hosting:** Vercel (free tier)
- **Domain:** asiasupplytrade.com
- **Email:** Google Workspace

## Design Guidelines
- Brand colors: Aqua (#4BA196), Gold (#CFA42E), Cream (#F2EEDE), Charcoal (#35322C)
- Each commodity gets its own accent color (from brand system)
- Sans-serif typography, clean and modern
- Light, unsaturated agriculture photography
- Warm, credible, professional tone
- Plenty of whitespace
- B2B professional feel (not consumer-retail)

## Content Strategy
- Web-friendly: shorter, scannable content
- Detailed content in downloadable PDF spec sheets
- Clear CTAs throughout
- Trust signals (Canadian origin, quality, experience)
- No localStorage/sessionStorage (not supported in Claude.ai)
- Use React state for any interactive features

## Development Priorities
1. Homepage (with segment switcher)
2. Commodity page template (start with Oats)
3. For Suppliers page
4. About page
5. Contact page
6. Products dropdown navigation
7. Responsive design for mobile/tablet

## Timeline Goal
- Basic landing page by end of week (for trade mission)
- Full site launch within 6-8 weeks

## Notes
- Kelly needs email operational ASAP for trade mission
- Site should feel established and professional
- Emphasize 10+ years of market experience
- Two-audience focus throughout (buyers AND suppliers)
- Mobile-responsive critical (Asian buyers often browse on mobile)
- Messaging apps are primary contact method in Asia