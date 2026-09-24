export type Category = "Jewelry" | "Eyewear" | "Leather Goods" | "Silk";

export type Motif =
  | "coil"
  | "scales"
  | "medallion"
  | "fang"
  | "aegis"
  | "laurel"
  | "wave"
  | "obsidian";

export type Availability = "In stock" | "Made to order" | "Limited edition" | "Sold out";

export type Product = {
  slug: string;
  title: string;
  price: number;
  currency: "TND";
  category: Category;
  material: string;
  craft: string;
  origin: string;
  availability: Availability;
  motif: Motif;
  /** duotone pair: deep tone, light tone */
  tones: [string, string];
  summary: string;
  narrative: string[];
  gallery: { motif: Motif; ratio: string; flip?: boolean }[];
};

export const categories: ("All" | Category)[] = ["All", "Jewelry", "Eyewear", "Leather Goods", "Silk"];

export const products: Product[] = [
  {
    slug: "gorgon-cuff",
    title: "Gorgon Cuff",
    price: 245,
    currency: "TND",
    category: "Jewelry",
    material: "Brass, 24k gold vermeil",
    craft: "Lost-wax cast, hand-finished",
    origin: "Cast in Tunis",
    availability: "Limited edition",
    motif: "coil",
    tones: ["#151109", "#b48a52"],
    summary:
      "A single coiled serpent, cast heavy enough to feel like armour and worn open at the wrist like a cuff should be.",
    narrative: [
      "The Gorgon Cuff started as a sketch of a single line — the moment a snake's body becomes a spiral rather than a path. We kept redrawing it until the coil closed on itself with no beginning we could find, which felt like the right amount of myth for a piece of jewellery to carry.",
      "Each cuff is lost-wax cast in brass at a small foundry in Tunis, then hand-finished and plated in 24k gold vermeil. The inner band is left slightly rough where the mould meets skin — a decision, not an oversight — so the piece keeps the memory of being made by hand.",
      "It opens at the back to fit most wrists and is heavier than it looks. We think that's correct: a gorgon should have some weight to her.",
    ],
    gallery: [
      { motif: "coil", ratio: "4 / 5" },
      { motif: "scales", ratio: "1 / 1", flip: true },
      { motif: "medallion", ratio: "3 / 4" },
    ],
  },
  {
    slug: "serpent-drop-earrings",
    title: "Serpent Drop Earrings",
    price: 189,
    currency: "TND",
    category: "Jewelry",
    material: "Brass, 24k gold vermeil",
    craft: "Cast, hand-set ear wires",
    origin: "Made in Tunis",
    availability: "In stock",
    motif: "scales",
    tones: ["#141008", "#d8bd8c"],
    summary: "A pair of articulated drops, each scale catching light a little differently as they move.",
    narrative: [
      "We wanted an earring that was never quite still. Each drop is built from five hinged scales that shift independently, so the piece keeps catching new light through the day rather than settling into one fixed glint.",
      "The scales are cast individually, gold-vermeil plated, then linked by hand — a slow step that a machine could not do without flattening the movement we were after.",
      "Light enough for daily wear, bold enough that you will be asked where they're from more than once.",
    ],
    gallery: [
      { motif: "scales", ratio: "4 / 5" },
      { motif: "coil", ratio: "1 / 1", flip: true },
      { motif: "fang", ratio: "3 / 4" },
    ],
  },
  {
    slug: "aegis-pendant",
    title: "Aegis Pendant",
    price: 320,
    currency: "TND",
    category: "Jewelry",
    material: "Brass, gold vermeil, onyx",
    craft: "Cast medallion, hand-set stone",
    origin: "Cast in Tunis",
    availability: "In stock",
    motif: "medallion",
    tones: ["#100f0d", "#c8a45c"],
    summary: "A medallion pendant on a fine chain, the gorgon's face turned outward as a shield rather than a threat.",
    narrative: [
      "In the oldest tellings, Medusa's face was carried on a shield to protect, not to frighten — that is the reading we built this pendant around. The medallion sits face-out, deliberately, on a fine 45cm brass chain.",
      "A single hand-set black onyx cabochon sits at the centre, cut slightly domed so it catches a highlight even in low light.",
      "Comes on an adjustable chain with a 5cm extender, so it can sit at the collarbone or lower, depending on the neckline.",
    ],
    gallery: [
      { motif: "medallion", ratio: "1 / 1" },
      { motif: "aegis", ratio: "4 / 5", flip: true },
      { motif: "coil", ratio: "3 / 4" },
    ],
  },
  {
    slug: "medusa-signet-ring",
    title: "Medusa Signet Ring",
    price: 165,
    currency: "TND",
    category: "Jewelry",
    material: "Solid brass",
    craft: "Cast, hand-polished",
    origin: "Cast in Tunis",
    availability: "In stock",
    motif: "fang",
    tones: ["#13110c", "#b48a52"],
    summary: "A heavy signet with a gorgon face engraved into the face, worn like a seal rather than a decoration.",
    narrative: [
      "Signets are meant to mark something as yours. Ours carries a stylised gorgon face, engraved deep enough that the ring will keep its edges for years of wear rather than months.",
      "Solid cast brass, left unplated so it develops its own patina — a deliberate choice for anyone who wants a ring that ages rather than one that stays showroom-new.",
      "Made in five sizes; if you're between sizes, we recommend sizing up.",
    ],
    gallery: [
      { motif: "fang", ratio: "1 / 1" },
      { motif: "medallion", ratio: "3 / 4", flip: true },
      { motif: "scales", ratio: "4 / 5" },
    ],
  },
  {
    slug: "djerba-drop-hoops",
    title: "Djerba Drop Hoops",
    price: 210,
    currency: "TND",
    category: "Jewelry",
    material: "Oxidised sterling silver",
    craft: "Hand-hammered, filigree technique",
    origin: "Hand-forged in Djerba",
    availability: "Limited edition",
    motif: "coil",
    tones: ["#101214", "#9fa8ab"],
    summary: "Hammered silver hoops made with a filigree technique passed down through Djerba's silversmiths.",
    narrative: [
      "Djerba has one of the oldest silversmithing traditions on the Tunisian coast, and this hoop is made with a workshop there that still hand-hammers and files every piece rather than casting it.",
      "Each hoop is oxidised in the recessed lines and polished on the raised surfaces, so the pattern reads clearly even from across a room.",
      "Only 40 pairs are made per run — when a batch sells out, the next one is a slightly different pattern, never an exact repeat.",
    ],
    gallery: [
      { motif: "coil", ratio: "4 / 5" },
      { motif: "wave", ratio: "1 / 1", flip: true },
      { motif: "scales", ratio: "3 / 4" },
    ],
  },
  {
    slug: "gorgoneion-sunglasses",
    title: "Gorgoneion Sunglasses",
    price: 410,
    currency: "TND",
    category: "Eyewear",
    material: "Italian acetate, brass hardware",
    craft: "Milled acetate, cast temple medallion",
    origin: "Assembled in Tunis",
    availability: "In stock",
    motif: "aegis",
    tones: ["#0e0d0c", "#c7a15a"],
    summary: "An oversized shield-shaped frame with a cast gorgon medallion set into each temple.",
    narrative: [
      "The frame shape came first — wide enough to read as a shield, which is where the name comes from. The lens is a warm smoke that keeps colour honest rather than the near-black tint most sunglasses default to.",
      "Each temple carries a small cast-brass medallion, set by hand after the acetate is milled and polished. It's the one part of the piece a machine never touches.",
      "Includes a branded case and a cleaning cloth. UV400 lenses, 100% protection.",
    ],
    gallery: [
      { motif: "aegis", ratio: "4 / 5" },
      { motif: "medallion", ratio: "1 / 1", flip: true },
      { motif: "fang", ratio: "16 / 10" },
    ],
  },
  {
    slug: "kairouan-tote",
    title: "Kairouan Tote",
    price: 590,
    currency: "TND",
    category: "Leather Goods",
    material: "Vegetable-tanned leather, brass hardware",
    craft: "Hand-cut, saddle-stitched",
    origin: "Tanned in Kairouan, stitched in Tunis",
    availability: "Made to order",
    motif: "wave",
    tones: ["#141210", "#a1784a"],
    summary: "A structured everyday tote in vegetable-tanned leather that darkens and softens with use.",
    narrative: [
      "The leather comes from a tannery in Kairouan that still vegetable-tans by hand, which is why every hide takes on colour a little differently — no two totes will age quite the same way.",
      "Saddle-stitched rather than machine-sewn along every load-bearing seam, so the bag can be repaired rather than replaced if a thread ever gives.",
      "Because each one is cut and stitched to order, please allow 10–14 days before it ships.",
    ],
    gallery: [
      { motif: "wave", ratio: "16 / 10" },
      { motif: "laurel", ratio: "1 / 1", flip: true },
      { motif: "coil", ratio: "4 / 5" },
    ],
  },
  {
    slug: "sidi-bou-clutch",
    title: "Sidi Bou Clutch",
    price: 380,
    currency: "TND",
    category: "Leather Goods",
    material: "Full-grain leather, gold-vermeil clasp",
    craft: "Hand-cut, hand-stitched",
    origin: "Made in Tunis",
    availability: "In stock",
    motif: "laurel",
    tones: ["#121110", "#8f6a42"],
    narrative: [
      "Named for the blue-and-white town outside Tunis, this clutch is cut from a single piece of full-grain leather folded to need almost no seams at all.",
      "The clasp is a cast gorgon coil, plated in gold vermeil, that doubles as the only hardware the bag needs.",
      "Fits a phone, cards, keys and very little else — which is the point.",
    ],
    summary: "A fold-over evening clutch closed with a single cast serpent clasp.",
    gallery: [
      { motif: "laurel", ratio: "4 / 5" },
      { motif: "coil", ratio: "1 / 1", flip: true },
      { motif: "medallion", ratio: "3 / 4" },
    ],
  },
  {
    slug: "serpent-silk-scarf",
    title: "Serpent Silk Scarf",
    price: 220,
    currency: "TND",
    category: "Silk",
    material: "100% silk twill",
    craft: "Digitally printed, hand-rolled hem",
    origin: "Printed and finished in Tunis",
    availability: "In stock",
    motif: "obsidian",
    tones: ["#100e14", "#7f6aa3"],
    summary: "A 90cm silk twill square printed with an all-over coiled-serpent pattern, hand-rolled at the edge.",
    narrative: [
      "The print repeats a single coiled motif at three different scales, so it reads as an abstract pattern from a distance and as a field of small serpents up close.",
      "Printed on silk twill and finished with a hand-rolled hem — a slow, visibly imperfect edge that machine hemming can't fake.",
      "Ninety centimetres square: worn at the neck, tied to a bag, or framed. All three happen often.",
    ],
    gallery: [
      { motif: "obsidian", ratio: "1 / 1" },
      { motif: "scales", ratio: "4 / 5", flip: true },
      { motif: "wave", ratio: "16 / 10" },
    ],
  },
];

export const selectedProductSlugs = [
  "gorgon-cuff",
  "kairouan-tote",
  "aegis-pendant",
  "gorgoneion-sunglasses",
  "serpent-silk-scarf",
];

export const pillars = [
  {
    n: "01",
    title: "Myth, reclaimed",
    body: "Medusa was a protector before she was a monster — carried on shields, not feared in mirrors. Every piece here is built on that older reading of her.",
  },
  {
    n: "02",
    title: "Made by hand, in Tunisia",
    body: "Cast in Tunis, hammered in Djerba, tanned in Kairouan. We work with small workshops that still do the slow step by hand, and we say so on every product page.",
  },
  {
    n: "03",
    title: "Fewer, heavier pieces",
    body: "We would rather release four pieces a season that last than forty that don't. Small batches, limited editions, and nothing reordered just to fill a shelf.",
  },
];

export const taglines = [
  "HANDCRAFTED IN TUNISIA",
  "FREE SHIPPING OVER 250 TND",
  "LIMITED EDITION DROPS",
  "PAY ON DELIVERY AVAILABLE",
  "ANCIENT MYTH, MODERN ARMOUR",
  "DESIGNED IN TUNIS",
  "ORDER DIRECT ON WHATSAPP",
  "SMALL BATCH, HAND-FINISHED",
];

export const team = [
  {
    name: "Founder & Designer",
    role: "Tunis",
    initials: "MT",
    bio: "Started the house with a single cast cuff and a table at a Sidi Bou Said market. Designs every piece before it goes anywhere near a workshop.",
  },
  {
    name: "Atelier Lead",
    role: "Tunis workshop",
    initials: "AL",
    bio: "Runs the small foundry that casts and finishes every brass and vermeil piece, and signs off on nothing that isn't right the first time.",
  },
  {
    name: "Silversmith",
    role: "Djerba workshop",
    initials: "DS",
    bio: "Trained in the island's filigree tradition and hand-hammers every piece in the silver line — no two runs are ever quite identical.",
  },
];

export const timeline = [
  { year: "2021", event: "MEDUSA begins as a single cuff design, sold from a table at the Sidi Bou Said weekend market." },
  { year: "2022", event: "First workshop partnership with a brass foundry in Tunis; the jewellery line grows to a dozen pieces." },
  { year: "2023", event: "Djerba silversmiths join to hand-forge the hammered silver line." },
  { year: "2024", event: "Leather goods launch, tanned in Kairouan and stitched in Tunis." },
  { year: "2025", event: "First eyewear drop; the Gorgoneion sells out in eleven days." },
  { year: "2026", event: "MEDUSA opens online, so the pieces can travel further than the market table ever could." },
];

export const craftCategories = [
  { name: "Jewelry", note: "Cast brass, gold vermeil, hand-hammered silver" },
  { name: "Eyewear", note: "Milled acetate, cast brass medallions" },
  { name: "Leather Goods", note: "Vegetable-tanned leather, saddle-stitched" },
  { name: "Silk", note: "Silk twill, digitally printed, hand-rolled hem" },
  { name: "Custom pieces", note: "Bespoke commissions on request" },
];

export const materials = [
  { title: "Brass & 24k gold vermeil", detail: "Lost-wax cast in Tunis, hand-polished, then plated to resist tarnish for years of daily wear." },
  { title: "Sterling silver", detail: "Hand-hammered and filigreed in Djerba using a technique local silversmiths have kept for generations." },
  { title: "Vegetable-tanned leather", detail: "Tanned in Kairouan without chrome, so it darkens and softens naturally the more it's used." },
  { title: "Silk twill", detail: "Printed and hand-rolled in Tunis; each hem is finished by hand, never machine-sewn." },
];

export const addresses = [
  {
    city: "Tunis — Atelier",
    lines: ["Sidi Bou Said", "2026 La Marsa", "Tunisia"],
    phone: "+216 00 000 000",
    email: "hello@medusatunisia.com",
  },
  {
    city: "Djerba — Workshop",
    lines: ["Houmt Souk", "4180 Djerba", "Tunisia"],
    phone: "+216 00 000 001",
    email: "atelier@medusatunisia.com",
  },
];

/** WhatsApp number used for cart checkout — replace with the real business number before launch. */
export const whatsappNumber = "21600000000";

export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/the-house", label: "The House" },
  { href: "/contact", label: "Contact" },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string) {
  const i = products.findIndex((p) => p.slug === slug);
  const prev = products[(i - 1 + products.length) % products.length];
  const next = products[(i + 1) % products.length];
  return { prev, next };
}

export function formatPrice(price: number, currency: Product["currency"]) {
  return `${price.toFixed(0)} ${currency}`;
}
