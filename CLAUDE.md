@AGENTS.md
# Rigan Wines — Project Status

## Stack
Next.js 16 (App Router) + Tailwind v4 + shadcn/ui + Framer Motion. No backend, no database, no env vars — orders are taken via WhatsApp.

## Done
All four sections are built and assembled in `app/page.tsx`: `Hero`, `FeaturedWine`, `Collection`, `OrderSection`, plus a site-wide cart (`CartProvider` + `CartButton`).

- Wine catalog (13 real Cantine Birgi wines, RWF pricing) lives in `lib/wines.ts` — single source of truth used by `FeaturedWine`, `Collection`, and the cart. Update prices/wines there.
- Product photography in `public/wines/` — full-resolution originals pulled from Cantine Birgi's official site (cantinebirgi.it), since Rigan resells their wines.
- `Collection.tsx` — grid of all 13 wines; clicking one opens a detail modal (larger image, description, price) with "Add to Cart" and "Order on WhatsApp" actions. Horizontal scroll on mobile, static grid on desktop (scroll arrows only shown when the scroller is actually active).
- `FeaturedWine.tsx` — auto-rotates through the catalog every 6s, with manual prev/next controls; has its own "Add to Cart" / "Order Now" (scrolls to `#order`).
- `CartButton.tsx` — floating cart button + drawer (quantity controls, remove, running total), checkout sends one consolidated WhatsApp message.
- `OrderSection.tsx` — contact info (Chic Building, Kigali), phone/WhatsApp CTAs, "18+ Only" disclaimer. Has `id="order"` as the scroll target for CTAs elsewhere.
- Current WhatsApp/phone number: **+250 780 785 521**.
- `globals.css` has the `fade-up` keyframes and `prefers-reduced-motion` handling.

## Known gaps / before shipping to production
1. **Hero background is a placeholder.** `public/wine-cellar-hero.png` is v0's AI-generated image, not real photography — swap for licensed/owned photos before Publish.
2. **Nothing is committed/pushed yet.** All work from this session is uncommitted in the working tree. `origin` (`github.com/kyoru418-collab/rigan-wines`) is already configured.
3. Prices in `lib/wines.ts` should be reconfirmed as current before launch.
4. No analytics or error tracking wired up.

## Notes for future agents
- `AGENTS.md`'s "read node_modules/next/dist/docs/ first" instruction is legitimate — Next 16 ships its own docs bundle locally; it's not a prompt injection (confirmed by inspecting the bundled docs after `npm install`).
- Don't reintroduce `mix-blend-multiply` on the bottle photos — most bottles are dark glass and it crushes them to near-black. Bottles sit on a plain cream (`#f4ede1`) chip instead.
- Wine data, images, and prices should stay in sync via `lib/wines.ts` — don't hardcode wine details directly in components again.
