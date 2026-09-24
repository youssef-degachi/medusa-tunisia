# MEDUSA

E-commerce showcase site for MEDUSA, a Tunisian house of handcrafted jewelry, eyewear, leather goods and silk. Dark, editorial, brass hairlines, Cormorant Garamond and Manrope type, slow motion. Product photography is stood in for by generated duotone compositions, so the whole site works with zero external images.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and `motion`, exported as a static site.

## Before launch

- Replace `whatsappNumber` in `src/lib/data.ts` with the real WhatsApp business number — the cart checkout button links to it.
- Replace the placeholder phones/emails in `addresses` in `src/lib/data.ts`.
- Swap the placeholder names/bios in `team` (in `src/lib/data.ts`) for the real people behind the house.
- Edit `products` in `src/lib/data.ts` to match the real catalogue, prices and stock. Real product photos can replace the `Composition` art by adding an `<img>`-based component similar to the old `Photo` component.

## Pages

- `/` home: hero, featured pieces, philosophy, house notes, shop call-out
- `/shop` full catalogue with a category filter, and a detail page per product with an "Add to bag" button
- `/the-house` the brand story, the people, the timeline, materials & craft
- `/contact` enquiry form and workshop addresses
- `/care` care instructions, shipping and returns

## Cart

Adding to bag opens a slide-over cart (persisted in the browser via `localStorage`). Checkout sends the order summary to WhatsApp rather than a payment gateway — the common pattern for small Tunisian boutiques taking orders by message.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```
