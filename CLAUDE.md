@AGENTS.md
# Rigan Wines — Project Status

## Stack
Next.js (App Router) + Tailwind v4 + shadcn/ui + Framer Motion.
Components generated in v0.dev, one v0 chat per section, under project "rigan" (subchats: hero, featuredwine, collection, "Order contact...").

## Done
- `components/Hero.tsx` — built, verified, zero TS errors. Confirm "Discover Collection" text is present in the CTA `<a>` before trusting it — it's been dropped once already during a manual paste.
- `public/wine-cellar-hero.png` — hero background image, already copied from the v0 export.

## To do
1. Get code for the remaining three sections from v0 (project "rigan", subchats "featuredwine", "collection", "Order contact..."):
   - `components/FeaturedWine.tsx`
   - `components/Collection.tsx`
   - `components/OrderSection.tsx`
   Prefer the "Add to codebase" CLI command from each chat (`npx shadcn@latest add "<url>"`) over manual copy-paste — copy-paste has silently dropped opening tags (e.g. `<a`) twice on this project already. If only "Download ZIP" is available, extract OUTSIDE this repo, pull just the component JSX + any new assets from `public/`, and verify tag-by-tag rather than trusting it wholesale.
2. If any component imports `@/components/ui/*` (e.g. `Button`), check whether `components.json` already exists in this repo before running `npx shadcn@latest init` again — don't re-init if it's already set up.
3. Assemble `app/page.tsx`:
```tsx
   import Hero from '@/components/Hero'
   import FeaturedWine from '@/components/FeaturedWine'
   import Collection from '@/components/Collection'
   import OrderSection from '@/components/OrderSection'

   export default function Home() {
     return (
       <main className="bg-black text-white">
         <Hero />
         <FeaturedWine />
         <Collection />
         <OrderSection />
         <footer className="bg-black border-t border-yellow-700 py-8 text-center text-sm text-gray-400">
           © 2026 Rigan Business Company Ltd. All rights reserved.
         </footer>
       </main>
     )
   }
```
4. Add to `app/globals.css` if not already there:
```css
   @keyframes fade-up {
     from { opacity: 0; transform: translateY(18px); }
     to { opacity: 1; transform: translateY(0); }
   }
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       scroll-behavior: auto !important;
       transition-duration: 0.01ms !important;
     }
   }
```
5. Run `npm run dev`, check all four sections render, no console errors.
6. Known non-issue: `globals.css` may show "Unknown at rule @theme / @custom-variant / @apply" warnings in the VS Code CSS linter — that's the linter not recognizing Tailwind v4 syntax, not a real error. Confirm `tailwindcss` is `^4.x` in `package.json` and ignore.
7. Placeholder check: the hero background is v0's AI-generated "wine cellar" image, not real photography. Flag before shipping to production — swap for licensed/owned photos before Publish.
8. WhatsApp order number to wire into OrderSection: +250 788 301 773. Include an "18+ Only" disclaimer near the order CTA.