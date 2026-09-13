# Rigan Wines

Marketing site for **Rigan Business Company Ltd**, a Cantine Birgi wine reseller based in Kigali, Rwanda. Built with Next.js (App Router), Tailwind v4, shadcn/ui, and Framer Motion.

Orders are taken over WhatsApp — there is no payment processing or backend; the site is fully static/client-rendered.

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4
- shadcn/ui + Framer Motion
- No database, no API routes, no environment variables

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (Next.js will pick the next free port if 3000 is taken).

## Project structure

- `app/page.tsx` — assembles the page: Hero, FeaturedWine, Collection, OrderSection, footer.
- `components/Hero.tsx` — landing hero with parallax background.
- `components/FeaturedWine.tsx` — auto-rotating carousel through the wine catalog.
- `components/Collection.tsx` — full wine grid; click a bottle for a detail modal.
- `components/OrderSection.tsx` — contact info and WhatsApp/phone CTAs.
- `components/CartProvider.tsx` / `components/CartButton.tsx` — client-side cart (React Context), checkout via a single WhatsApp message.
- `lib/wines.ts` — single source of truth for the wine catalog (name, type, price, image, description). Update prices/wines here.
- `public/wines/` — product photography, sourced from Cantine Birgi's official site (cantinebirgi.it) since Rigan resells their wines.

## Before shipping to production

- The Hero background (`public/wine-cellar-hero.png`) is an AI-generated placeholder from the original v0 design — swap it for licensed/owned photography.
- Confirm all prices in `lib/wines.ts` are current before launch.
- No analytics/error tracking is wired up yet.

## Deploying

No environment variables or backend services are required — this is a static Next.js site with client-side interactivity only. See the deployment report for hosting recommendations.
