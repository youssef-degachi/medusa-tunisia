export type HeadingEm = { pre: string; em: string; post?: string };

type ProductLabels = {
  category: string;
  material: string;
  craft: string;
  origin: string;
  availability: string;
  thePiece: string;
  gallery: string;
  plates: string;
  plate: string;
  detail: string;
  previous: string;
  next: string;
  index: string;
};

type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    shop: string;
    theHouse: string;
    contact: string;
    home: string;
    menuOpen: string;
    menuClose: string;
    tagline: string;
    bagLabel: string;
  };
  hero: {
    kicker: string;
    lines: string[][];
    paragraph: string;
    scroll: string;
  };
  featured: {
    eyebrow: string;
    heading: HeadingEm;
    shopAll: string;
  };
  philosophy: {
    eyebrow: string;
    heading: HeadingEm;
    intro: string;
    pillars: { n: string; title: string; body: string }[];
  };
  marquee: string[];
  cta: {
    eyebrow: string;
    line1: string;
    line2: string;
    linkLabel: string;
  };
  categories: {
    all: string;
    Jewelry: string;
    Eyewear: string;
    "Leather Goods": string;
    Silk: string;
  };
  availability: {
    "In stock": string;
    "Made to order": string;
    "Limited edition": string;
    "Sold out": string;
  };
  shop: {
    eyebrow: string;
    heading: HeadingEm;
    intro: string;
    showing: string;
    ctaEyebrow: string;
    ctaLine1: string;
    ctaLine2: string;
    ctaLinkLabel: string;
  };
  product: ProductLabels;
  addToBag: {
    add: string;
    soldOut: string;
    decrease: string;
    increase: string;
  };
  cart: {
    title: string;
    empty: string;
    browse: string;
    subtotal: string;
    shippingNote: string;
    checkout: string;
    remove: string;
    close: string;
    whatsappEmpty: string;
    whatsappIntro: string;
    whatsappTotal: string;
  };
  theHouse: {
    eyebrow: string;
    heading: HeadingEm;
    intro: string;
    atelierCaption1: string;
    atelierCaption2: string;
    teamEyebrow: string;
    teamHeading: string;
    timelineEyebrow: string;
    timelineHeading: HeadingEm;
    craftEyebrow: string;
    craftHeading: string;
    materialsEyebrow: string;
    materialsHeading: string;
    ctaEyebrow: string;
    ctaLine1: string;
    ctaLine2: string;
    ctaLinkLabel: string;
    team: { name: string; role: string; bio: string }[];
    timeline: { year: string; event: string }[];
    craftCategories: { name: string; note: string }[];
    materials: { title: string; detail: string }[];
  };
  contact: {
    eyebrow: string;
    heading: HeadingEm;
    workshops: string;
    hoursLabel: string;
    hoursValue: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      reasonLabel: string;
      reasonPlaceholder: string;
      reasons: string[];
      messageLabel: string;
      messagePlaceholder: string;
      privacy: string;
      submit: string;
      sentEyebrow: string;
      sentHeadingPre: string;
      sentBody: string;
      sendAnother: string;
      errors: { name: string; email: string; reason: string; message: string };
    };
  };
  care: {
    eyebrow: string;
    heading: HeadingEm;
    intro: string;
    careHeading: string;
    shippingHeading: string;
    care: { title: string; detail: string }[];
    shipping: { title: string; detail: string }[];
  };
  footer: {
    sitemap: string;
    elsewhere: string;
    instagram: string;
    whatsapp: string;
    youtube: string;
    temu: string;
    careShipping: string;
    rights: string;
  };
  notFound: {
    heading: HeadingEm;
    back: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "MEDUSA — Handcrafted Jewelry & Accessories, Tunisia",
    description:
      "MEDUSA is a Tunisian house of jewelry, eyewear, leather goods and silk — cast in Tunis, hammered in Djerba, tanned in Kairouan. Ancient myth, modern armour.",
  },
  nav: {
    shop: "Shop",
    theHouse: "The House",
    contact: "Contact",
    home: "Home",
    menuOpen: "Menu",
    menuClose: "Close",
    tagline: "Tunis · Est. 2021",
    bagLabel: "Bag",
  },
  hero: {
    kicker: "Handcrafted in Tunisia · Est. 2021",
    lines: [["Ancient", "myth,"], ["modern"], ["armour."]],
    paragraph:
      "Jewelry, eyewear, leather goods and silk, cast and hand-finished by small workshops across Tunis, Djerba and Kairouan. Medusa reclaimed — a protector, worn.",
    scroll: "Scroll",
  },
  featured: {
    eyebrow: "Featured pieces",
    heading: { pre: "Nine pieces,", em: "one", post: "house" },
    shopAll: "Shop all",
  },
  philosophy: {
    eyebrow: "Philosophy",
    heading: { pre: "Three", em: "quiet", post: "rules" },
    intro:
      "We are not a large house and we do not intend to become one. What we have instead is a short set of convictions that every piece is measured against before it ships.",
    pillars: [
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
    ],
  },
  marquee: [
    "HANDCRAFTED IN TUNISIA",
    "FREE SHIPPING OVER 250 TND",
    "LIMITED EDITION DROPS",
    "PAY ON DELIVERY AVAILABLE",
    "ANCIENT MYTH, MODERN ARMOUR",
    "DESIGNED IN TUNIS",
    "ORDER DIRECT ON WHATSAPP",
    "SMALL BATCH, HAND-FINISHED",
  ],
  cta: {
    eyebrow: "The shop",
    line1: "Wear the",
    line2: "myth.",
    linkLabel: "Shop the collection",
  },
  categories: {
    all: "All",
    Jewelry: "Jewelry",
    Eyewear: "Eyewear",
    "Leather Goods": "Leather Goods",
    Silk: "Silk",
  },
  availability: {
    "In stock": "In stock",
    "Made to order": "Made to order",
    "Limited edition": "Limited edition",
    "Sold out": "Sold out",
  },
  shop: {
    eyebrow: "The collection · 2026",
    heading: { pre: "Shop,", em: "selected" },
    intro:
      "Nine pieces made across three Tunisian workshops. We release in small batches; when a piece says limited edition, it means the run will not be repeated.",
    showing: "Showing {shown} of {total}",
    ctaEyebrow: "Custom orders",
    ctaLine1: "Want something",
    ctaLine2: "bespoke?",
    ctaLinkLabel: "Talk to the atelier",
  },
  product: {
    category: "Category",
    material: "Material",
    craft: "Craft",
    origin: "Origin",
    availability: "Availability",
    thePiece: "The piece",
    gallery: "Gallery",
    plates: "plates",
    plate: "Plate",
    detail: "Detail",
    previous: "Previous",
    next: "Next",
    index: "of",
  },
  addToBag: {
    add: "Add to bag",
    soldOut: "Sold out",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
  },
  cart: {
    title: "Your bag",
    empty: "Your bag is empty. The pieces are waiting.",
    browse: "Browse the shop",
    subtotal: "Subtotal",
    shippingNote: "Shipping and delivery timing are confirmed over WhatsApp.",
    checkout: "Checkout on WhatsApp",
    remove: "Remove",
    close: "Close bag",
    whatsappEmpty: "Hello MEDUSA, I'd like to place an order.",
    whatsappIntro: "Hello MEDUSA, I'd like to order:",
    whatsappTotal: "Total",
  },
  theHouse: {
    eyebrow: "The house",
    heading: { pre: "Three workshops,", em: "one", post: "myth." },
    intro:
      "MEDUSA started in 2021 with a single cast cuff, sold from a market table in Sidi Bou Said. Every piece is still made with small workshops in Tunis, Djerba and Kairouan — nothing is outsourced further than that.",
    atelierCaption1: "Sidi Bou Said, Tunis",
    atelierCaption2: "Where the house began",
    teamEyebrow: "The people",
    teamHeading: "The hands behind the pieces",
    timelineEyebrow: "Timeline",
    timelineHeading: { pre: "Five", em: "short", post: "years" },
    craftEyebrow: "What we make",
    craftHeading: "Four categories, plus custom",
    materialsEyebrow: "Materials & craft",
    materialsHeading: "What everything is made from",
    ctaEyebrow: "Work with us",
    ctaLine1: "Have a",
    ctaLine2: "commission in mind?",
    ctaLinkLabel: "Write to the atelier",
    team: [
      {
        name: "Founder & Designer",
        role: "Tunis",
        bio: "Started the house with a single cast cuff and a table at a Sidi Bou Said market. Designs every piece before it goes anywhere near a workshop.",
      },
      {
        name: "Atelier Lead",
        role: "Tunis workshop",
        bio: "Runs the small foundry that casts and finishes every brass and vermeil piece, and signs off on nothing that isn't right the first time.",
      },
      {
        name: "Silversmith",
        role: "Djerba workshop",
        bio: "Trained in the island's filigree tradition and hand-hammers every piece in the silver line — no two runs are ever quite identical.",
      },
    ],
    timeline: [
      { year: "2021", event: "MEDUSA begins as a single cuff design, sold from a table at the Sidi Bou Said weekend market." },
      { year: "2022", event: "First workshop partnership with a brass foundry in Tunis; the jewellery line grows to a dozen pieces." },
      { year: "2023", event: "Djerba silversmiths join to hand-forge the hammered silver line." },
      { year: "2024", event: "Leather goods launch, tanned in Kairouan and stitched in Tunis." },
      { year: "2025", event: "First eyewear drop; the Gorgoneion sells out in eleven days." },
      { year: "2026", event: "MEDUSA opens online, so the pieces can travel further than the market table ever could." },
    ],
    craftCategories: [
      { name: "Jewelry", note: "Cast brass, gold vermeil, hand-hammered silver" },
      { name: "Eyewear", note: "Milled acetate, cast brass medallions" },
      { name: "Leather Goods", note: "Vegetable-tanned leather, saddle-stitched" },
      { name: "Silk", note: "Silk twill, digitally printed, hand-rolled hem" },
      { name: "Custom pieces", note: "Bespoke commissions on request" },
    ],
    materials: [
      { title: "Brass & 24k gold vermeil", detail: "Lost-wax cast in Tunis, hand-polished, then plated to resist tarnish for years of daily wear." },
      { title: "Sterling silver", detail: "Hand-hammered and filigreed in Djerba using a technique local silversmiths have kept for generations." },
      { title: "Vegetable-tanned leather", detail: "Tanned in Kairouan without chrome, so it darkens and softens naturally the more it's used." },
      { title: "Silk twill", detail: "Printed and hand-rolled in Tunis; each hem is finished by hand, never machine-sewn." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: { pre: "Tell us what you", em: "need", post: "." },
    workshops: "Workshop",
    hoursLabel: "Hours",
    hoursValue: "Open daily, no appointment needed · 10:00 – 19:30",
    form: {
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      reasonLabel: "How can we help?",
      reasonPlaceholder: "Select a reason",
      reasons: ["Order help", "Wholesale & stockists", "Custom / bespoke piece", "Press & collaborations", "Something else"],
      messageLabel: "Message",
      messagePlaceholder: "Order number, piece you're after, or anything else we should know.",
      privacy: "We reply within a couple of days. Nothing you write here is shared beyond the atelier.",
      submit: "Send message",
      sentEyebrow: "Received",
      sentHeadingPre: "Thank you,",
      sentBody:
        "We read every message ourselves and reply within a couple of days. For anything urgent about an order, WhatsApp is faster — use the number in the footer.",
      sendAnother: "Send another",
      errors: {
        name: "Please tell us your name.",
        email: "That email doesn't look right.",
        reason: "Choose the closest fit.",
        message: "A few sentences helps us understand what you need.",
      },
    },
  },
  care: {
    eyebrow: "Colophon",
    heading: { pre: "Care &", em: "shipping" },
    intro:
      "Everything here is handmade, so it ages with a little more character than something mass-produced. Here's how to keep each material at its best, and how delivery works.",
    careHeading: "Caring for your piece",
    shippingHeading: "Shipping & returns",
    care: [
      { title: "Brass & gold vermeil", detail: "Keep dry and away from perfume or salt water. Wipe with a soft cloth after wearing; store in the pouch provided to slow tarnish." },
      { title: "Sterling silver", detail: "Oxidised areas are meant to stay dark — polish only the raised surfaces with a silver cloth, never the recessed pattern." },
      { title: "Leather goods", detail: "Condition every few months with a neutral leather balm. Avoid direct sun for long periods; the leather will darken naturally with handling." },
      { title: "Silk", detail: "Hand wash cold or dry clean only. Iron on the reverse, low heat, with a cloth between the iron and the silk." },
    ],
    shipping: [
      { title: "Processing time", detail: "In-stock pieces ship within 2–4 working days. Made-to-order leather pieces take 10–14 days before dispatch." },
      { title: "Delivery", detail: "Tunisia-wide delivery in 2–5 working days. Delivery cost and international shipping are confirmed over WhatsApp when you check out." },
      { title: "Payment", detail: "Pay on delivery is available within Tunisia. Orders are confirmed by message before anything ships." },
      { title: "Returns", detail: "Unworn pieces in original packaging can be returned within 7 days of delivery. Custom and made-to-order pieces are final sale." },
    ],
  },
  footer: {
    sitemap: "Sitemap",
    elsewhere: "Elsewhere",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    youtube: "YouTube",
    temu: "Temu — free gift",
    careShipping: "Care & shipping",
    rights: "© 2026 MEDUSA",
  },
  notFound: {
    heading: { pre: "No relic", em: "found", post: "here." },
    back: "Back to the shop",
  },
};

const fr: Dictionary = {
  meta: {
    title: "MEDUSA — Bijoux & Accessoires Artisanaux, Tunisie",
    description:
      "MEDUSA est une maison tunisienne de bijoux, lunettes, maroquinerie et soie — coulée à Tunis, martelée à Djerba, tannée à Kairouan. Mythe ancien, armure moderne.",
  },
  nav: {
    shop: "Boutique",
    theHouse: "La Maison",
    contact: "Contact",
    home: "Accueil",
    menuOpen: "Menu",
    menuClose: "Fermer",
    tagline: "Tunis · Depuis 2021",
    bagLabel: "Panier",
  },
  hero: {
    kicker: "Fait main en Tunisie · Depuis 2021",
    lines: [["Mythe", "ancien,"], ["armure"], ["moderne."]],
    paragraph:
      "Bijoux, lunettes, maroquinerie et soie, coulés et finis à la main par de petits ateliers à Tunis, Djerba et Kairouan. Méduse réinventée — une protectrice, portée.",
    scroll: "Défiler",
  },
  featured: {
    eyebrow: "Pièces phares",
    heading: { pre: "Neuf pièces,", em: "une seule", post: "maison" },
    shopAll: "Voir tout",
  },
  philosophy: {
    eyebrow: "Philosophie",
    heading: { pre: "Trois", em: "règles", post: "discrètes" },
    intro:
      "Nous ne sommes pas une grande maison et n'avons pas l'intention de le devenir. Nous avons en revanche quelques convictions auxquelles chaque pièce est confrontée avant d'être expédiée.",
    pillars: [
      {
        n: "01",
        title: "Le mythe, réinventé",
        body: "Méduse était une protectrice avant d'être un monstre — portée sur les boucliers, non redoutée dans les miroirs. Chaque pièce ici repose sur cette lecture plus ancienne.",
      },
      {
        n: "02",
        title: "Fait main, en Tunisie",
        body: "Coulé à Tunis, martelé à Djerba, tanné à Kairouan. Nous travaillons avec de petits ateliers qui font encore l'étape lente à la main, et nous le disons sur chaque fiche produit.",
      },
      {
        n: "03",
        title: "Moins de pièces, plus de caractère",
        body: "Nous préférons sortir quatre pièces par saison qui durent plutôt que quarante qui ne durent pas. Petites séries, éditions limitées, rien de réapprovisionné juste pour remplir une étagère.",
      },
    ],
  },
  marquee: [
    "FAIT MAIN EN TUNISIE",
    "LIVRAISON GRATUITE DÈS 250 TND",
    "ÉDITIONS LIMITÉES",
    "PAIEMENT À LA LIVRAISON",
    "MYTHE ANCIEN, ARMURE MODERNE",
    "CONÇU À TUNIS",
    "COMMANDE DIRECTE SUR WHATSAPP",
    "PETITE SÉRIE, FINITION MAIN",
  ],
  cta: {
    eyebrow: "La boutique",
    line1: "Portez le",
    line2: "mythe.",
    linkLabel: "Voir la collection",
  },
  categories: {
    all: "Tout",
    Jewelry: "Bijoux",
    Eyewear: "Lunettes",
    "Leather Goods": "Maroquinerie",
    Silk: "Soie",
  },
  availability: {
    "In stock": "En stock",
    "Made to order": "Sur commande",
    "Limited edition": "Édition limitée",
    "Sold out": "Épuisé",
  },
  shop: {
    eyebrow: "La collection · 2026",
    heading: { pre: "Boutique,", em: "sélection" },
    intro:
      "Neuf pièces fabriquées dans trois ateliers tunisiens. Nous sortons de petites séries ; quand une pièce est en édition limitée, la série ne sera pas reproduite.",
    showing: "{shown} sur {total} pièces",
    ctaEyebrow: "Commandes sur mesure",
    ctaLine1: "Une envie de",
    ctaLine2: "pièce unique ?",
    ctaLinkLabel: "Contacter l'atelier",
  },
  product: {
    category: "Catégorie",
    material: "Matière",
    craft: "Façon",
    origin: "Origine",
    availability: "Disponibilité",
    thePiece: "La pièce",
    gallery: "Galerie",
    plates: "planches",
    plate: "Planche",
    detail: "Détail",
    previous: "Précédent",
    next: "Suivant",
    index: "sur",
  },
  addToBag: {
    add: "Ajouter au panier",
    soldOut: "Épuisé",
    decrease: "Diminuer la quantité",
    increase: "Augmenter la quantité",
  },
  cart: {
    title: "Votre panier",
    empty: "Votre panier est vide. Les pièces vous attendent.",
    browse: "Découvrir la boutique",
    subtotal: "Sous-total",
    shippingNote: "La livraison et ses délais sont confirmés sur WhatsApp.",
    checkout: "Commander sur WhatsApp",
    remove: "Retirer",
    close: "Fermer le panier",
    whatsappEmpty: "Bonjour MEDUSA, je souhaite passer une commande.",
    whatsappIntro: "Bonjour MEDUSA, je souhaite commander :",
    whatsappTotal: "Total",
  },
  theHouse: {
    eyebrow: "La maison",
    heading: { pre: "Trois ateliers,", em: "un seul", post: "mythe." },
    intro:
      "MEDUSA a commencé en 2021 avec un seul bracelet coulé, vendu sur une table de marché à Sidi Bou Saïd. Chaque pièce est encore fabriquée avec de petits ateliers à Tunis, Djerba et Kairouan — rien n'est sous-traité au-delà.",
    atelierCaption1: "Sidi Bou Saïd, Tunis",
    atelierCaption2: "Où tout a commencé",
    teamEyebrow: "Les gens",
    teamHeading: "Les mains derrière les pièces",
    timelineEyebrow: "Chronologie",
    timelineHeading: { pre: "Cinq", em: "courtes", post: "années" },
    craftEyebrow: "Ce que nous fabriquons",
    craftHeading: "Quatre catégories, et le sur-mesure",
    materialsEyebrow: "Matières & façon",
    materialsHeading: "Ce dont tout est fait",
    ctaEyebrow: "Travaillons ensemble",
    ctaLine1: "Une pièce",
    ctaLine2: "sur mesure en tête ?",
    ctaLinkLabel: "Écrire à l'atelier",
    team: [
      {
        name: "Fondatrice & Designer",
        role: "Tunis",
        bio: "A lancé la maison avec un seul bracelet coulé et une table au marché de Sidi Bou Saïd. Dessine chaque pièce avant qu'elle n'approche un atelier.",
      },
      {
        name: "Responsable d'atelier",
        role: "Atelier de Tunis",
        bio: "Dirige la petite fonderie qui coule et finit chaque pièce en laiton et en vermeil, et ne valide rien qui ne soit pas juste du premier coup.",
      },
      {
        name: "Orfèvre",
        role: "Atelier de Djerba",
        bio: "Formé à la tradition de filigrane de l'île, martèle à la main chaque pièce de la ligne argent — deux séries ne sont jamais tout à fait identiques.",
      },
    ],
    timeline: [
      { year: "2021", event: "MEDUSA débute avec un seul modèle de bracelet, vendu sur une table au marché du week-end de Sidi Bou Saïd." },
      { year: "2022", event: "Premier partenariat avec une fonderie de laiton à Tunis ; la ligne de bijoux passe à une douzaine de pièces." },
      { year: "2023", event: "Des orfèvres de Djerba rejoignent l'aventure pour forger à la main la ligne en argent martelé." },
      { year: "2024", event: "Lancement de la maroquinerie, tannée à Kairouan et cousue à Tunis." },
      { year: "2025", event: "Première collection de lunettes ; la Gorgoneion se vend en onze jours." },
      { year: "2026", event: "MEDUSA ouvre en ligne, pour que les pièces voyagent plus loin que la table de marché." },
    ],
    craftCategories: [
      { name: "Bijoux", note: "Laiton coulé, vermeil, argent martelé main" },
      { name: "Lunettes", note: "Acétate usiné, médaillons en laiton coulé" },
      { name: "Maroquinerie", note: "Cuir tanné végétal, cousu-sellier" },
      { name: "Soie", note: "Twill de soie, impression numérique, ourlet roulé main" },
      { name: "Pièces sur mesure", note: "Commandes personnalisées sur demande" },
    ],
    materials: [
      { title: "Laiton & vermeil 24 carats", detail: "Coulé à la cire perdue à Tunis, poli à la main, puis plaqué pour résister au ternissement pendant des années." },
      { title: "Argent massif", detail: "Martelé et filigrané à la main à Djerba selon une technique conservée par les orfèvres locaux depuis des générations." },
      { title: "Cuir tanné végétal", detail: "Tanné à Kairouan sans chrome, il fonce et s'assouplit naturellement avec l'usage." },
      { title: "Twill de soie", detail: "Imprimé et roulé main à Tunis ; chaque ourlet est fini à la main, jamais à la machine." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: { pre: "Dites-nous ce qu'il", em: "vous faut", post: "." },
    workshops: "Atelier",
    hoursLabel: "Horaires",
    hoursValue: "Ouvert tous les jours, sans rendez-vous · 10h00 – 19h30",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom complet",
      email: "Email",
      emailPlaceholder: "vous@exemple.com",
      reasonLabel: "Comment pouvons-nous vous aider ?",
      reasonPlaceholder: "Choisissez un motif",
      reasons: ["Aide sur une commande", "Vente en gros & revendeurs", "Pièce sur mesure", "Presse & collaborations", "Autre chose"],
      messageLabel: "Message",
      messagePlaceholder: "Numéro de commande, pièce recherchée, ou tout ce que nous devrions savoir.",
      privacy: "Nous répondons sous quelques jours. Rien de ce que vous écrivez ici n'est partagé au-delà de l'atelier.",
      submit: "Envoyer le message",
      sentEyebrow: "Reçu",
      sentHeadingPre: "Merci,",
      sentBody:
        "Nous lisons chaque message nous-mêmes et répondons sous quelques jours. Pour toute urgence liée à une commande, WhatsApp est plus rapide — utilisez le numéro indiqué en pied de page.",
      sendAnother: "Envoyer un autre message",
      errors: {
        name: "Merci de nous indiquer votre nom.",
        email: "Cette adresse email ne semble pas correcte.",
        reason: "Choisissez le motif le plus proche.",
        message: "Quelques phrases nous aident à comprendre votre besoin.",
      },
    },
  },
  care: {
    eyebrow: "Colophon",
    heading: { pre: "Entretien &", em: "livraison" },
    intro:
      "Tout ici est fait main, et prend donc un peu plus de caractère qu'un produit fabriqué en série. Voici comment garder chaque matière au mieux, et comment fonctionne la livraison.",
    careHeading: "Entretenir votre pièce",
    shippingHeading: "Livraison & retours",
    care: [
      { title: "Laiton & vermeil", detail: "Gardez au sec, loin du parfum et de l'eau salée. Essuyez avec un chiffon doux après le port ; rangez dans la pochette fournie pour ralentir le ternissement." },
      { title: "Argent massif", detail: "Les zones oxydées doivent rester foncées — ne polissez que les surfaces en relief avec un chiffon à argent, jamais le motif en creux." },
      { title: "Maroquinerie", detail: "Nourrissez tous les quelques mois avec un baume neutre. Évitez le soleil direct prolongé ; le cuir foncera naturellement avec l'usage." },
      { title: "Soie", detail: "Lavage à froid à la main ou nettoyage à sec uniquement. Repassez à l'envers, à basse température, avec un linge entre le fer et la soie." },
    ],
    shipping: [
      { title: "Délai de préparation", detail: "Les pièces en stock partent sous 2 à 4 jours ouvrés. Les pièces en cuir sur commande prennent 10 à 14 jours avant expédition." },
      { title: "Livraison", detail: "Livraison partout en Tunisie sous 2 à 5 jours ouvrés. Le coût de livraison et l'envoi international sont confirmés sur WhatsApp lors de la commande." },
      { title: "Paiement", detail: "Le paiement à la livraison est disponible en Tunisie. Les commandes sont confirmées par message avant tout envoi." },
      { title: "Retours", detail: "Les pièces non portées, dans leur emballage d'origine, peuvent être retournées sous 7 jours après livraison. Les pièces personnalisées ou sur commande sont définitives." },
    ],
  },
  footer: {
    sitemap: "Plan du site",
    elsewhere: "Ailleurs",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    youtube: "YouTube",
    temu: "Temu — cadeau gratuit",
    careShipping: "Entretien & livraison",
    rights: "© 2026 MEDUSA",
  },
  notFound: {
    heading: { pre: "Aucune relique", em: "trouvée", post: "ici." },
    back: "Retour à la boutique",
  },
};

const ar: Dictionary = {
  meta: {
    title: "ميدوسا — مجوهرات وإكسسوارات يدوية الصنع، تونس",
    description:
      "ميدوسا دار تونسية للمجوهرات والنظارات والمنتجات الجلدية والحرير — تُصب في تونس، وتُطرق في جربة، وتُدبغ في القيروان. أسطورة قديمة، درع حديث.",
  },
  nav: {
    shop: "المتجر",
    theHouse: "الدار",
    contact: "تواصل",
    home: "الرئيسية",
    menuOpen: "القائمة",
    menuClose: "إغلاق",
    tagline: "تونس · تأسست 2021",
    bagLabel: "السلة",
  },
  hero: {
    kicker: "صناعة يدوية في تونس · تأسست 2021",
    lines: [["أسطورة", "قديمة،"], ["درع"], ["حديث."]],
    paragraph:
      "مجوهرات ونظارات ومنتجات جلدية وحرير، تُصب وتُشطّب يدويًا في ورشات صغيرة بين تونس وجربة والقيروان. ميدوسا من جديد — حامية تُرتدى.",
    scroll: "مرّر للأسفل",
  },
  featured: {
    eyebrow: "قطع مختارة",
    heading: { pre: "تسع قطع،", em: "دار", post: "واحدة" },
    shopAll: "تسوّق الكل",
  },
  philosophy: {
    eyebrow: "فلسفتنا",
    heading: { pre: "ثلاث قواعد", em: "هادئة" },
    intro:
      "لسنا دارًا كبيرة ولا ننوي أن نصبح كذلك. ما نملكه هو مجموعة قناعات قصيرة تُقاس عليها كل قطعة قبل أن تُشحن.",
    pillars: [
      {
        n: "01",
        title: "الأسطورة، من جديد",
        body: "كانت ميدوسا حامية قبل أن تكون وحشًا — تُحمل على الدروع ولا يُخشى منها في المرايا. كل قطعة هنا مبنية على هذه القراءة الأقدم.",
      },
      {
        n: "02",
        title: "صناعة يدوية، في تونس",
        body: "تُصب في تونس، وتُطرق في جربة، وتُدبغ في القيروان. نعمل مع ورشات صغيرة ما زالت تنجز الخطوة البطيئة يدويًا، ونذكر ذلك في كل صفحة منتج.",
      },
      {
        n: "03",
        title: "قطع أقل، بقيمة أكبر",
        body: "نفضّل إصدار أربع قطع في الموسم تدوم طويلًا على أربعين لا تدوم. سلسلات صغيرة، إصدارات محدودة، ولا شيء يُعاد إنتاجه فقط لملء رفّ.",
      },
    ],
  },
  marquee: [
    "صناعة يدوية في تونس",
    "توصيل مجاني فوق 250 دينار",
    "إصدارات محدودة",
    "الدفع عند الاستلام متاح",
    "أسطورة قديمة، درع حديث",
    "صُمم في تونس",
    "اطلب مباشرة عبر واتساب",
    "سلسلات صغيرة، تشطيب يدوي",
  ],
  cta: {
    eyebrow: "المتجر",
    line1: "ارتدِ",
    line2: "الأسطورة.",
    linkLabel: "تسوّق المجموعة",
  },
  categories: {
    all: "الكل",
    Jewelry: "مجوهرات",
    Eyewear: "نظارات",
    "Leather Goods": "منتجات جلدية",
    Silk: "حرير",
  },
  availability: {
    "In stock": "متوفر",
    "Made to order": "حسب الطلب",
    "Limited edition": "إصدار محدود",
    "Sold out": "نفدت الكمية",
  },
  shop: {
    eyebrow: "المجموعة · 2026",
    heading: { pre: "المتجر،", em: "مختارات" },
    intro:
      "تسع قطع صُنعت في ثلاث ورشات تونسية. نُصدر بسلسلات صغيرة؛ وعندما تحمل قطعة عبارة إصدار محدود، فهذا يعني أن الدفعة لن تتكرر.",
    showing: "عرض {shown} من {total}",
    ctaEyebrow: "طلبات خاصة",
    ctaLine1: "تريد قطعة",
    ctaLine2: "على مقاسك؟",
    ctaLinkLabel: "تواصل مع المشغل",
  },
  product: {
    category: "الفئة",
    material: "الخامة",
    craft: "الصنعة",
    origin: "المنشأ",
    availability: "التوفر",
    thePiece: "القطعة",
    gallery: "معرض الصور",
    plates: "لوحات",
    plate: "لوحة",
    detail: "تفصيل",
    previous: "السابق",
    next: "التالي",
    index: "من",
  },
  addToBag: {
    add: "أضف إلى السلة",
    soldOut: "نفدت الكمية",
    decrease: "إنقاص الكمية",
    increase: "زيادة الكمية",
  },
  cart: {
    title: "سلتك",
    empty: "سلتك فارغة. القطع بانتظارك.",
    browse: "تصفّح المتجر",
    subtotal: "المجموع الفرعي",
    shippingNote: "يتم تأكيد الشحن ووقت التوصيل عبر واتساب.",
    checkout: "أتمم الطلب عبر واتساب",
    remove: "إزالة",
    close: "إغلاق السلة",
    whatsappEmpty: "مرحبًا ميدوسا، أرغب في تقديم طلب.",
    whatsappIntro: "مرحبًا ميدوسا، أرغب في طلب:",
    whatsappTotal: "المجموع",
  },
  theHouse: {
    eyebrow: "الدار",
    heading: { pre: "ثلاث ورشات،", em: "أسطورة", post: "واحدة." },
    intro:
      "بدأت ميدوسا سنة 2021 بسوار واحد مصبوب، بيع على طاولة في سوق سيدي بوسعيد. وما زالت كل قطعة تُصنع في ورشات صغيرة بتونس وجربة والقيروان — لا شيء يُصنع خارج هذا الإطار.",
    atelierCaption1: "سيدي بوسعيد، تونس",
    atelierCaption2: "حيث بدأت الدار",
    teamEyebrow: "الفريق",
    teamHeading: "الأيادي وراء القطع",
    timelineEyebrow: "المسار الزمني",
    timelineHeading: { pre: "خمس سنوات", em: "قصيرة" },
    craftEyebrow: "ما نصنعه",
    craftHeading: "أربع فئات، وقطع حسب الطلب",
    materialsEyebrow: "الخامات والصنعة",
    materialsHeading: "مما تُصنع كل قطعة",
    ctaEyebrow: "اعملوا معنا",
    ctaLine1: "تفكر في",
    ctaLine2: "طلب خاص؟",
    ctaLinkLabel: "راسل المشغل",
    team: [
      {
        name: "المؤسّسة والمصمّمة",
        role: "تونس",
        bio: "أطلقت الدار بسوار واحد مصبوب وطاولة في سوق سيدي بوسعيد. تصمم كل قطعة قبل أن تصل إلى أي ورشة.",
      },
      {
        name: "مسؤول المشغل",
        role: "ورشة تونس",
        bio: "يدير المسبك الصغير الذي يصب ويشطّب كل قطعة من النحاس الأصفر والفرميل، ولا يعتمد شيئًا لا يكون صحيحًا من المحاولة الأولى.",
      },
      {
        name: "الصائغ",
        role: "ورشة جربة",
        bio: "تدرّب على تقنية الفتلة (الفيليغران) المحلية للجزيرة، ويطرق يدويًا كل قطعة من خط الفضة — لا تتشابه دفعتان تمامًا أبدًا.",
      },
    ],
    timeline: [
      { year: "2021", event: "انطلقت ميدوسا بتصميم سوار واحد، بيع على طاولة في سوق نهاية الأسبوع بسيدي بوسعيد." },
      { year: "2022", event: "أول شراكة مع مسبك نحاس أصفر في تونس؛ توسّع خط المجوهرات إلى اثنتي عشرة قطعة." },
      { year: "2023", event: "انضمّ صاغة جربة لطرق خط الفضة المطروق يدويًا." },
      { year: "2024", event: "إطلاق المنتجات الجلدية، المدبوغة في القيروان والمخيطة في تونس." },
      { year: "2025", event: "أول إصدار من النظارات؛ نفدت كمية الغورغونيون خلال أحد عشر يومًا." },
      { year: "2026", event: "افتتحت ميدوسا متجرها الإلكتروني، لتصل القطع أبعد مما وصلت إليه طاولة السوق يومًا." },
    ],
    craftCategories: [
      { name: "مجوهرات", note: "نحاس أصفر مصبوب، فرميل ذهبي، فضة مطروقة يدويًا" },
      { name: "نظارات", note: "أسيتات مشغولة، ميداليات نحاسية مصبوبة" },
      { name: "منتجات جلدية", note: "جلد مدبوغ نباتيًا، مخيط يدويًا" },
      { name: "حرير", note: "تويل حرير، طباعة رقمية، حاشية ملفوفة يدويًا" },
      { name: "قطع حسب الطلب", note: "طلبات خاصة عند الرغبة" },
    ],
    materials: [
      { title: "نحاس أصفر وفرميل ذهبي عيار 24", detail: "يُصب بتقنية الشمع المفقود في تونس، ويُلمّع يدويًا، ثم يُطلى ليقاوم الاسوداد لسنوات من الاستعمال اليومي." },
      { title: "فضة إسترليني", detail: "تُطرق وتُشغل بتقنية الفتلة يدويًا في جربة، بتقنية حافظ عليها صاغة الجزيرة لأجيال." },
      { title: "جلد مدبوغ نباتيًا", detail: "يُدبغ في القيروان دون كروم، فيغمق ويلين طبيعيًا كلما استُعمل أكثر." },
      { title: "تويل حرير", detail: "يُطبع ويُلفّ يدويًا في تونس؛ تُنجز كل حاشية يدويًا، دون أي خياطة آلية." },
    ],
  },
  contact: {
    eyebrow: "تواصل",
    heading: { pre: "أخبرنا بما", em: "تحتاجه", post: "." },
    workshops: "المشغل",
    hoursLabel: "أوقات العمل",
    hoursValue: "مفتوح يوميًا، دون موعد مسبق · من 10:00 إلى 19:30",
    form: {
      name: "الاسم",
      namePlaceholder: "اسمك الكامل",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      reasonLabel: "كيف يمكننا مساعدتك؟",
      reasonPlaceholder: "اختر السبب",
      reasons: ["مساعدة بخصوص طلب", "بيع بالجملة ونقاط بيع", "قطعة حسب الطلب", "صحافة وتعاون", "أمر آخر"],
      messageLabel: "الرسالة",
      messagePlaceholder: "رقم الطلب، القطعة التي تبحث عنها، أو أي شيء يجب أن نعرفه.",
      privacy: "نرد خلال يومين تقريبًا. لا يُشارك ما تكتبه هنا خارج المشغل.",
      submit: "إرسال الرسالة",
      sentEyebrow: "تم الاستلام",
      sentHeadingPre: "شكرًا لك،",
      sentBody:
        "نقرأ كل رسالة بأنفسنا ونرد خلال يومين تقريبًا. لأي أمر عاجل بخصوص طلب، واتساب أسرع — استعمل الرقم الموجود في أسفل الصفحة.",
      sendAnother: "إرسال رسالة أخرى",
      errors: {
        name: "من فضلك أخبرنا باسمك.",
        email: "هذا البريد الإلكتروني لا يبدو صحيحًا.",
        reason: "اختر السبب الأقرب.",
        message: "بضع جمل تساعدنا على فهم ما تحتاجه.",
      },
    },
  },
  care: {
    eyebrow: "معلومات",
    heading: { pre: "العناية", em: "والتوصيل" },
    intro:
      "كل قطعة هنا مصنوعة يدويًا، لذا تكتسب مع الوقت طابعًا أكثر من المنتجات المصنّعة آليًا. إليك كيفية العناية بكل خامة، وكيف يعمل التوصيل.",
    careHeading: "العناية بقطعتك",
    shippingHeading: "التوصيل والإرجاع",
    care: [
      { title: "النحاس الأصفر والفرميل", detail: "احفظه جافًا وبعيدًا عن العطور والماء المالح. امسحه بقطعة قماش ناعمة بعد الاستعمال، واحفظه في الكيس المرفق لإبطاء الاسوداد." },
      { title: "الفضة الإسترليني", detail: "المناطق المؤكسدة يجب أن تبقى داكنة — لمّع فقط الأسطح البارزة بقطعة قماش خاصة بالفضة، ولا تلمّع النقش الغائر أبدًا." },
      { title: "المنتجات الجلدية", detail: "غذّها كل بضعة أشهر بمرطب جلد محايد. تجنب أشعة الشمس المباشرة لفترات طويلة؛ سيغمق الجلد طبيعيًا مع الاستعمال." },
      { title: "الحرير", detail: "يُغسل يدويًا بماء بارد أو يُنظّف جافًا فقط. يُكوى من الخلف على حرارة منخفضة، مع وضع قطعة قماش بين المكواة والحرير." },
    ],
    shipping: [
      { title: "مدة التحضير", detail: "القطع المتوفرة تُشحن خلال 2 إلى 4 أيام عمل. القطع الجلدية حسب الطلب تستغرق 10 إلى 14 يومًا قبل الشحن." },
      { title: "التوصيل", detail: "توصيل لكل تونس خلال 2 إلى 5 أيام عمل. تكلفة التوصيل والشحن الدولي تُؤكَّد عبر واتساب عند إتمام الطلب." },
      { title: "الدفع", detail: "الدفع عند الاستلام متاح داخل تونس. تُؤكَّد الطلبات برسالة قبل أي شحن." },
      { title: "الإرجاع", detail: "يمكن إرجاع القطع غير المستعملة وبتغليفها الأصلي خلال 7 أيام من التوصيل. القطع المخصصة أو حسب الطلب نهائية البيع." },
    ],
  },
  footer: {
    sitemap: "خريطة الموقع",
    elsewhere: "تابعونا",
    instagram: "إنستغرام",
    whatsapp: "واتساب",
    youtube: "يوتيوب",
    temu: "تيمو — هدية مجانية",
    careShipping: "العناية والتوصيل",
    rights: "© 2026 ميدوسا",
  },
  notFound: {
    heading: { pre: "لا أثر", em: "موجود", post: "هنا." },
    back: "العودة إلى المتجر",
  },
};

export const dict = { en, fr, ar };
export type { Dictionary };
