import type { Locale } from "@/lib/i18n";

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

type LocalizedText = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type Product = {
  slug: string;
  price: number;
  currency: "TND";
  category: Category;
  availability: Availability;
  motif: Motif;
  /** duotone pair: deep tone, light tone */
  tones: [string, string];
  title: LocalizedText;
  material: LocalizedText;
  craft: LocalizedText;
  origin: LocalizedText;
  summary: LocalizedText;
  narrative: LocalizedList;
  gallery: { motif: Motif; ratio: string; flip?: boolean }[];
};

export const categoryKeys: ("All" | Category)[] = ["All", "Jewelry", "Eyewear", "Leather Goods", "Silk"];

export const products: Product[] = [
  {
    slug: "gorgon-cuff",
    price: 245,
    currency: "TND",
    category: "Jewelry",
    availability: "Limited edition",
    motif: "coil",
    tones: ["#151109", "#b48a52"],
    title: { en: "Gorgon Cuff", fr: "Manchette Gorgone", ar: "سوار الغورغون" },
    material: {
      en: "Brass, 24k gold vermeil",
      fr: "Laiton, vermeil or 24 carats",
      ar: "نحاس أصفر، فرميل ذهبي عيار 24",
    },
    craft: { en: "Lost-wax cast, hand-finished", fr: "Coulé à la cire perdue, fini à la main", ar: "مصبوب بتقنية الشمع المفقود، مشطّب يدويًا" },
    origin: { en: "Cast in Tunis", fr: "Coulé à Tunis", ar: "يُصب في تونس" },
    summary: {
      en: "A single coiled serpent, cast heavy enough to feel like armour and worn open at the wrist like a cuff should be.",
      fr: "Un unique serpent enroulé, coulé assez lourd pour se porter comme une armure, ouvert au poignet comme il se doit pour une manchette.",
      ar: "أفعى واحدة ملتفة، تُصب بثقل كافٍ لتُشعرك بأنها درع، وتُلبس مفتوحة عند المعصم كما يجب لأي سوار.",
    },
    narrative: {
      en: [
        "The Gorgon Cuff started as a sketch of a single line — the moment a snake's body becomes a spiral rather than a path. We kept redrawing it until the coil closed on itself with no beginning we could find, which felt like the right amount of myth for a piece of jewellery to carry.",
        "Each cuff is lost-wax cast in brass at a small foundry in Tunis, then hand-finished and plated in 24k gold vermeil. The inner band is left slightly rough where the mould meets skin — a decision, not an oversight — so the piece keeps the memory of being made by hand.",
        "It opens at the back to fit most wrists and is heavier than it looks. We think that's correct: a gorgon should have some weight to her.",
      ],
      fr: [
        "La Manchette Gorgone a commencé comme le croquis d'une seule ligne — l'instant où le corps d'un serpent devient une spirale plutôt qu'un chemin. Nous l'avons redessinée jusqu'à ce que la boucle se referme sur elle-même, sans début que nous puissions trouver — la juste dose de mythe pour un bijou.",
        "Chaque manchette est coulée à la cire perdue en laiton dans une petite fonderie à Tunis, puis finie à la main et plaquée en vermeil or 24 carats. La face intérieure, là où le moule touche la peau, est laissée légèrement brute — un choix, non un oubli — pour que la pièce garde la mémoire du geste manuel.",
        "Elle s'ouvre à l'arrière pour s'adapter à la plupart des poignets et pèse plus qu'il n'y paraît. Nous trouvons cela juste : une gorgone doit avoir un peu de poids.",
      ],
      ar: [
        "بدأت سوار الغورغون كرسمة لخط واحد — اللحظة التي يتحول فيها جسد الأفعى من مسار إلى لولب. أعدنا رسمها مرارًا حتى انغلقت الحلقة على نفسها دون بداية يمكن إيجادها، وهو ما بدا القدر المناسب من الأسطورة الذي تحمله قطعة مجوهرات.",
        "تُصب كل سوار بتقنية الشمع المفقود من النحاس الأصفر في مسبك صغير بتونس، ثم تُشطّب يدويًا وتُطلى بفرميل ذهبي عيار 24. تُترك الحلقة الداخلية، حيث يلامس القالب الجلد، خشنة قليلًا — وهذا قرار لا إغفال — لتحتفظ القطعة بذاكرة صنعها اليدوي.",
        "تُفتح من الخلف لتناسب معظم المعاصم، وهي أثقل مما تبدو عليه. ونظن أن هذا صحيح: يجب أن يكون للغورغون بعض الثقل.",
      ],
    },
    gallery: [
      { motif: "coil", ratio: "4 / 5" },
      { motif: "scales", ratio: "1 / 1", flip: true },
      { motif: "medallion", ratio: "3 / 4" },
    ],
  },
  {
    slug: "serpent-drop-earrings",
    price: 189,
    currency: "TND",
    category: "Jewelry",
    availability: "In stock",
    motif: "scales",
    tones: ["#141008", "#d8bd8c"],
    title: { en: "Serpent Drop Earrings", fr: "Boucles d'oreilles Serpent", ar: "أقراط الأفعى المتدلية" },
    material: { en: "Brass, 24k gold vermeil", fr: "Laiton, vermeil or 24 carats", ar: "نحاس أصفر، فرميل ذهبي عيار 24" },
    craft: { en: "Cast, hand-set ear wires", fr: "Coulées, monture main", ar: "مصبوبة، تركيب يدوي للخطاف" },
    origin: { en: "Made in Tunis", fr: "Fabriquées à Tunis", ar: "صُنعت في تونس" },
    summary: {
      en: "A pair of articulated drops, each scale catching light a little differently as they move.",
      fr: "Une paire de pendants articulés, dont chaque écaille capte la lumière différemment en mouvement.",
      ar: "زوج من الأقراط المفصلية، حيث تعكس كل حرشفة الضوء بشكل مختلف قليلًا مع الحركة.",
    },
    narrative: {
      en: [
        "We wanted an earring that was never quite still. Each drop is built from five hinged scales that shift independently, so the piece keeps catching new light through the day rather than settling into one fixed glint.",
        "The scales are cast individually, gold-vermeil plated, then linked by hand — a slow step that a machine could not do without flattening the movement we were after.",
        "Light enough for daily wear, bold enough that you will be asked where they're from more than once.",
      ],
      fr: [
        "Nous voulions un bijou d'oreille qui ne soit jamais tout à fait immobile. Chaque pendant est composé de cinq écailles articulées qui bougent indépendamment, si bien que la pièce capte sans cesse une lumière nouvelle plutôt qu'un seul éclat figé.",
        "Les écailles sont coulées individuellement, plaquées vermeil or, puis assemblées à la main — une étape lente qu'une machine ne saurait accomplir sans aplatir le mouvement recherché.",
        "Assez légères pour un port quotidien, assez affirmées pour qu'on vous en demande l'origine plus d'une fois.",
      ],
      ar: [
        "أردنا قرطًا لا يهدأ تمامًا أبدًا. يتكون كل قرط من خمس حراشف مفصلية تتحرك بشكل مستقل، فتظل القطعة تعكس ضوءًا جديدًا طوال اليوم بدلًا من بريق واحد ثابت.",
        "تُصب كل حرشفة على حدة، وتُطلى بالفرميل الذهبي، ثم تُربط يدويًا — خطوة بطيئة لا يمكن لآلة إنجازها دون أن تُفقد الحركة التي نسعى إليها.",
        "خفيفة بما يكفي للاستعمال اليومي، وجريئة بما يكفي ليُسأل عن مصدرها أكثر من مرة.",
      ],
    },
    gallery: [
      { motif: "scales", ratio: "4 / 5" },
      { motif: "coil", ratio: "1 / 1", flip: true },
      { motif: "fang", ratio: "3 / 4" },
    ],
  },
  {
    slug: "aegis-pendant",
    price: 320,
    currency: "TND",
    category: "Jewelry",
    availability: "In stock",
    motif: "medallion",
    tones: ["#100f0d", "#c8a45c"],
    title: { en: "Aegis Pendant", fr: "Pendentif Égide", ar: "قلادة إيجيس" },
    material: { en: "Brass, gold vermeil, onyx", fr: "Laiton, vermeil or, onyx", ar: "نحاس أصفر، فرميل ذهبي، عقيق أسود (أونيكس)" },
    craft: { en: "Cast medallion, hand-set stone", fr: "Médaillon coulé, pierre sertie main", ar: "ميدالية مصبوبة، حجر مُرصّع يدويًا" },
    origin: { en: "Cast in Tunis", fr: "Coulé à Tunis", ar: "يُصب في تونس" },
    summary: {
      en: "A medallion pendant on a fine chain, the gorgon's face turned outward as a shield rather than a threat.",
      fr: "Un pendentif médaillon sur une fine chaîne, le visage de la gorgone tourné vers l'extérieur comme un bouclier plutôt qu'une menace.",
      ar: "قلادة على شكل ميدالية بسلسلة رفيعة، ووجه الغورغون موجّه للخارج كدرع لا كتهديد.",
    },
    narrative: {
      en: [
        "In the oldest tellings, Medusa's face was carried on a shield to protect, not to frighten — that is the reading we built this pendant around. The medallion sits face-out, deliberately, on a fine 45cm brass chain.",
        "A single hand-set black onyx cabochon sits at the centre, cut slightly domed so it catches a highlight even in low light.",
        "Comes on an adjustable chain with a 5cm extender, so it can sit at the collarbone or lower, depending on the neckline.",
      ],
      fr: [
        "Dans les récits les plus anciens, le visage de Méduse était porté sur un bouclier pour protéger, non pour effrayer — c'est cette lecture qui a inspiré ce pendentif. Le médaillon est délibérément tourné vers l'extérieur, sur une fine chaîne en laiton de 45 cm.",
        "Un unique cabochon d'onyx noir, serti à la main, occupe le centre, taillé légèrement bombé pour accrocher la lumière même dans la pénombre.",
        "Livré avec une chaîne réglable et une extension de 5 cm, pour se porter au niveau de la clavicule ou plus bas, selon l'encolure.",
      ],
      ar: [
        "في أقدم الروايات، كان وجه ميدوسا يُحمل على الدرع للحماية لا للترويع — وهذه هي القراءة التي بُنيت عليها هذه القلادة. تُوضع الميدالية عمدًا موجّهة للخارج، على سلسلة رفيعة من النحاس الأصفر طولها 45 سم.",
        "تتوسطها قطعة واحدة من العقيق الأسود المصقول ومُركّبة يدويًا، مقطوعة بتحدّب خفيف لتعكس بريقًا حتى في الإضاءة الخافتة.",
        "تأتي بسلسلة قابلة للتعديل مع امتداد بطول 5 سم، لتُلبس عند عظمة الترقوة أو أسفل منها حسب فتحة الرقبة.",
      ],
    },
    gallery: [
      { motif: "medallion", ratio: "1 / 1" },
      { motif: "aegis", ratio: "4 / 5", flip: true },
      { motif: "coil", ratio: "3 / 4" },
    ],
  },
  {
    slug: "medusa-signet-ring",
    price: 165,
    currency: "TND",
    category: "Jewelry",
    availability: "In stock",
    motif: "fang",
    tones: ["#13110c", "#b48a52"],
    title: { en: "Medusa Signet Ring", fr: "Bague Chevalière Méduse", ar: "خاتم ميدوسا" },
    material: { en: "Solid brass", fr: "Laiton massif", ar: "نحاس أصفر خالص" },
    craft: { en: "Cast, hand-polished", fr: "Coulée, polie à la main", ar: "مصبوب، مصقول يدويًا" },
    origin: { en: "Cast in Tunis", fr: "Coulée à Tunis", ar: "يُصب في تونس" },
    summary: {
      en: "A heavy signet with a gorgon face engraved into the face, worn like a seal rather than a decoration.",
      fr: "Une lourde chevalière au visage de gorgone gravé, portée comme un sceau plutôt qu'un simple ornement.",
      ar: "خاتم ثقيل منقوش عليه وجه الغورغون، يُرتدى كخاتم ختم لا كمجرد زينة.",
    },
    narrative: {
      en: [
        "Signets are meant to mark something as yours. Ours carries a stylised gorgon face, engraved deep enough that the ring will keep its edges for years of wear rather than months.",
        "Solid cast brass, left unplated so it develops its own patina — a deliberate choice for anyone who wants a ring that ages rather than one that stays showroom-new.",
        "Made in five sizes; if you're between sizes, we recommend sizing up.",
      ],
      fr: [
        "Une chevalière est faite pour marquer ce qui vous appartient. La nôtre porte un visage de gorgone stylisé, gravé assez profondément pour que la bague garde ses reliefs des années durant, et non quelques mois.",
        "Laiton massif coulé, laissé non plaqué pour développer sa propre patine — un choix délibéré pour qui souhaite une bague qui vieillit plutôt qu'une bague qui reste neuve en vitrine.",
        "Disponible en cinq tailles ; si vous hésitez entre deux tailles, nous recommandons de prendre la taille au-dessus.",
      ],
      ar: [
        "خواتم الختم صُنعت لتضع بصمتك على ما هو لك. خاتمنا يحمل وجه غورغون مُبسّطًا، منقوشًا بعمق كافٍ ليحافظ على حوافه لسنوات من الاستعمال لا لأشهر فقط.",
        "نحاس أصفر مصبوب وخالص، تُرك دون طلاء ليكوّن طبقة أكسدة خاصة به — خيار مقصود لمن يريد خاتمًا يشيخ بجمال بدلًا من أن يبقى بمظهر جديد دائمًا.",
        "متوفر بخمس مقاسات؛ وإن كنت متردّدًا بين مقاسين، ننصح باختيار المقاس الأكبر.",
      ],
    },
    gallery: [
      { motif: "fang", ratio: "1 / 1" },
      { motif: "medallion", ratio: "3 / 4", flip: true },
      { motif: "scales", ratio: "4 / 5" },
    ],
  },
  {
    slug: "djerba-drop-hoops",
    price: 210,
    currency: "TND",
    category: "Jewelry",
    availability: "Limited edition",
    motif: "coil",
    tones: ["#101214", "#9fa8ab"],
    title: { en: "Djerba Drop Hoops", fr: "Créoles de Djerba", ar: "حلقات جربة" },
    material: { en: "Oxidised sterling silver", fr: "Argent massif oxydé", ar: "فضة إسترليني مؤكسدة" },
    craft: { en: "Hand-hammered, filigree technique", fr: "Martelées main, technique filigrane", ar: "مطروقة يدويًا، بتقنية الفتلة" },
    origin: { en: "Hand-forged in Djerba", fr: "Forgées à la main à Djerba", ar: "تُطرق يدويًا في جربة" },
    summary: {
      en: "Hammered silver hoops made with a filigree technique passed down through Djerba's silversmiths.",
      fr: "Des créoles en argent martelé, réalisées avec une technique de filigrane transmise par les orfèvres de Djerba.",
      ar: "حلقات فضية مطروقة، صُنعت بتقنية الفتلة المتوارثة بين صاغة جربة.",
    },
    narrative: {
      en: [
        "Djerba has one of the oldest silversmithing traditions on the Tunisian coast, and this hoop is made with a workshop there that still hand-hammers and files every piece rather than casting it.",
        "Each hoop is oxidised in the recessed lines and polished on the raised surfaces, so the pattern reads clearly even from across a room.",
        "Only 40 pairs are made per run — when a batch sells out, the next one is a slightly different pattern, never an exact repeat.",
      ],
      fr: [
        "Djerba possède l'une des plus anciennes traditions d'orfèvrerie du littoral tunisien, et cette créole est réalisée avec un atelier qui martèle et lime encore chaque pièce à la main plutôt que de la couler.",
        "Chaque créole est oxydée dans les lignes creuses et polie sur les reliefs, afin que le motif se lise clairement même à distance.",
        "Seules 40 paires sont produites par série — une fois une série épuisée, la suivante arbore un motif légèrement différent, jamais une reproduction exacte.",
      ],
      ar: [
        "تمتلك جربة واحدة من أعرق تقاليد صياغة الفضة على الساحل التونسي، وهذه الحلقة تُصنع في ورشة ما زالت تطرق وتبرد كل قطعة يدويًا بدلًا من صبّها.",
        "تُؤكسد كل حلقة في الخطوط الغائرة وتُصقل الأسطح البارزة، بحيث يظهر النقش بوضوح حتى من بعيد.",
        "تُصنع 40 زوجًا فقط في كل دفعة — وعند نفاد إحداها، تأتي التالية بنقش مختلف قليلًا، دون تكرار مطابق أبدًا.",
      ],
    },
    gallery: [
      { motif: "coil", ratio: "4 / 5" },
      { motif: "wave", ratio: "1 / 1", flip: true },
      { motif: "scales", ratio: "3 / 4" },
    ],
  },
  {
    slug: "gorgoneion-sunglasses",
    price: 410,
    currency: "TND",
    category: "Eyewear",
    availability: "In stock",
    motif: "aegis",
    tones: ["#0e0d0c", "#c7a15a"],
    title: { en: "Gorgoneion Sunglasses", fr: "Lunettes de soleil Gorgoneion", ar: "نظارات الغورغونيون" },
    material: { en: "Italian acetate, brass hardware", fr: "Acétate italien, ferrures en laiton", ar: "أسيتات إيطالي، تركيبات نحاسية" },
    craft: { en: "Milled acetate, cast temple medallion", fr: "Acétate usiné, médaillon coulé sur la branche", ar: "أسيتات مشغول، ميدالية مصبوبة على الذراع" },
    origin: { en: "Assembled in Tunis", fr: "Assemblées à Tunis", ar: "تُجمّع في تونس" },
    summary: {
      en: "An oversized shield-shaped frame with a cast gorgon medallion set into each temple.",
      fr: "Une monture surdimensionnée en forme de bouclier, avec un médaillon de gorgone coulé sur chaque branche.",
      ar: "إطار كبير على شكل درع، مع ميدالية غورغون مصبوبة على كل ذراع.",
    },
    narrative: {
      en: [
        "The frame shape came first — wide enough to read as a shield, which is where the name comes from. The lens is a warm smoke that keeps colour honest rather than the near-black tint most sunglasses default to.",
        "Each temple carries a small cast-brass medallion, set by hand after the acetate is milled and polished. It's the one part of the piece a machine never touches.",
        "Includes a branded case and a cleaning cloth. UV400 lenses, 100% protection.",
      ],
      fr: [
        "La forme de la monture est venue en premier — assez large pour évoquer un bouclier, d'où le nom. Le verre est un fumé chaud qui restitue les couleurs fidèlement, loin de la teinte presque noire par défaut de la plupart des lunettes de soleil.",
        "Chaque branche porte une petite médaille en laiton coulé, fixée à la main une fois l'acétate usiné et poli. C'est la seule partie de la pièce qu'une machine ne touche jamais.",
        "Livrées avec un étui de la marque et un chiffon de nettoyage. Verres UV400, protection à 100%.",
      ],
      ar: [
        "جاء شكل الإطار أولًا — واسع بما يكفي ليُقرأ كدرع، ومن هنا جاء الاسم. العدسة بلون دخاني دافئ يحافظ على صدق الألوان، بدلًا من اللون الأسود شبه الكامل الذي تعتمده معظم النظارات الشمسية.",
        "تحمل كل ذراع ميدالية صغيرة من النحاس الأصفر المصبوب، تُثبَّت يدويًا بعد تشغيل الأسيتات وتلميعه. وهي الجزء الوحيد من القطعة الذي لا تلمسه آلة أبدًا.",
        "تأتي مع علبة تحمل شعار الدار وقطعة قماش للتنظيف. عدسات UV400 بحماية 100%.",
      ],
    },
    gallery: [
      { motif: "aegis", ratio: "4 / 5" },
      { motif: "medallion", ratio: "1 / 1", flip: true },
      { motif: "fang", ratio: "16 / 10" },
    ],
  },
  {
    slug: "kairouan-tote",
    price: 590,
    currency: "TND",
    category: "Leather Goods",
    availability: "Made to order",
    motif: "wave",
    tones: ["#141210", "#a1784a"],
    title: { en: "Kairouan Tote", fr: "Cabas Kairouan", ar: "حقيبة القيروان" },
    material: { en: "Vegetable-tanned leather, brass hardware", fr: "Cuir tanné végétal, ferrures en laiton", ar: "جلد مدبوغ نباتيًا، تركيبات نحاسية" },
    craft: { en: "Hand-cut, saddle-stitched", fr: "Coupé main, cousu-sellier", ar: "مقصوص يدويًا، مخيط بغرزة السروج" },
    origin: { en: "Tanned in Kairouan, stitched in Tunis", fr: "Tanné à Kairouan, cousu à Tunis", ar: "يُدبغ في القيروان، ويُخاط في تونس" },
    summary: {
      en: "A structured everyday tote in vegetable-tanned leather that darkens and softens with use.",
      fr: "Un cabas structuré du quotidien en cuir tanné végétal, qui fonce et s'assouplit avec l'usage.",
      ar: "حقيبة يومية بهيكل ثابت من جلد مدبوغ نباتيًا، تغمق وتلين مع الاستعمال.",
    },
    narrative: {
      en: [
        "The leather comes from a tannery in Kairouan that still vegetable-tans by hand, which is why every hide takes on colour a little differently — no two totes will age quite the same way.",
        "Saddle-stitched rather than machine-sewn along every load-bearing seam, so the bag can be repaired rather than replaced if a thread ever gives.",
        "Because each one is cut and stitched to order, please allow 10–14 days before it ships.",
      ],
      fr: [
        "Le cuir provient d'une tannerie de Kairouan qui pratique encore le tannage végétal à la main, d'où le fait que chaque peau prend une teinte légèrement différente — deux cabas ne vieilliront jamais tout à fait de la même façon.",
        "Cousue main façon sellier plutôt qu'à la machine sur chaque couture porteuse, afin que le sac puisse être réparé plutôt que remplacé si un fil venait à céder.",
        "Chaque cabas étant coupé et cousu sur commande, prévoyez 10 à 14 jours avant l'expédition.",
      ],
      ar: [
        "يأتي الجلد من مدبغة في القيروان ما زالت تدبغ نباتيًا يدويًا، ولهذا يكتسب كل جلد لونًا مختلفًا قليلًا — لن تشيخ حقيبتان بالطريقة نفسها تمامًا.",
        "تُخاط بغرزة السروج اليدوية لا الآلية على كل خياطة حاملة للوزن، بحيث يمكن إصلاح الحقيبة بدلًا من استبدالها إن انفكّ خيط ما.",
        "بما أن كل حقيبة تُقص وتُخاط حسب الطلب، يُرجى احتساب 10 إلى 14 يومًا قبل الشحن.",
      ],
    },
    gallery: [
      { motif: "wave", ratio: "16 / 10" },
      { motif: "laurel", ratio: "1 / 1", flip: true },
      { motif: "coil", ratio: "4 / 5" },
    ],
  },
  {
    slug: "sidi-bou-clutch",
    price: 380,
    currency: "TND",
    category: "Leather Goods",
    availability: "In stock",
    motif: "laurel",
    tones: ["#121110", "#8f6a42"],
    title: { en: "Sidi Bou Clutch", fr: "Pochette Sidi Bou", ar: "حقيبة سيدي بو" },
    material: { en: "Full-grain leather, gold-vermeil clasp", fr: "Cuir pleine fleur, fermoir en vermeil", ar: "جلد كامل الحبيبات، مشبك فرميل ذهبي" },
    craft: { en: "Hand-cut, hand-stitched", fr: "Coupée et cousue à la main", ar: "مقصوصة ومخيطة يدويًا" },
    origin: { en: "Made in Tunis", fr: "Fabriquée à Tunis", ar: "صُنعت في تونس" },
    summary: {
      en: "A fold-over evening clutch closed with a single cast serpent clasp.",
      fr: "Une pochette de soirée à rabat, fermée par un unique fermoir serpent coulé.",
      ar: "حقيبة سهرة بغطاء مطوي، تُغلق بمشبك أفعى واحد مصبوب.",
    },
    narrative: {
      en: [
        "Named for the blue-and-white town outside Tunis, this clutch is cut from a single piece of full-grain leather folded to need almost no seams at all.",
        "The clasp is a cast gorgon coil, plated in gold vermeil, that doubles as the only hardware the bag needs.",
        "Fits a phone, cards, keys and very little else — which is the point.",
      ],
      fr: [
        "Nommée d'après la ville bleu et blanc aux portes de Tunis, cette pochette est taillée dans une seule pièce de cuir pleine fleur, pliée de façon à ne presque nécessiter aucune couture.",
        "Le fermoir est une spirale de gorgone coulée, plaquée vermeil or, qui fait aussi office de seule quincaillerie nécessaire au sac.",
        "Contient un téléphone, des cartes, des clés et très peu d'autres choses — c'est précisément le principe.",
      ],
      ar: [
        "سُمّيت على اسم المدينة الزرقاء والبيضاء قرب تونس، وتُقص هذه الحقيبة من قطعة واحدة من الجلد كامل الحبيبات، تُطوى بحيث لا تحتاج تقريبًا لأي خياطة.",
        "المشبك عبارة عن لولب غورغون مصبوب، مطلي بالفرميل الذهبي، ويؤدي دور القطعة المعدنية الوحيدة التي تحتاجها الحقيبة.",
        "تتّسع لهاتف وبطاقات ومفاتيح وأشياء قليلة أخرى فقط — وهذا هو المقصود بالضبط.",
      ],
    },
    gallery: [
      { motif: "laurel", ratio: "4 / 5" },
      { motif: "coil", ratio: "1 / 1", flip: true },
      { motif: "medallion", ratio: "3 / 4" },
    ],
  },
  {
    slug: "serpent-silk-scarf",
    price: 220,
    currency: "TND",
    category: "Silk",
    availability: "In stock",
    motif: "obsidian",
    tones: ["#100e14", "#7f6aa3"],
    title: { en: "Serpent Silk Scarf", fr: "Foulard en soie Serpent", ar: "وشاح حرير الأفعى" },
    material: { en: "100% silk twill", fr: "Twill de soie 100%", ar: "حرير تويل 100%" },
    craft: { en: "Digitally printed, hand-rolled hem", fr: "Impression numérique, ourlet roulé main", ar: "طباعة رقمية، حاشية ملفوفة يدويًا" },
    origin: { en: "Printed and finished in Tunis", fr: "Imprimé et fini à Tunis", ar: "يُطبع ويُشطّب في تونس" },
    summary: {
      en: "A 90cm silk twill square printed with an all-over coiled-serpent pattern, hand-rolled at the edge.",
      fr: "Un carré de 90 cm en twill de soie, imprimé d'un motif de serpents enroulés sur toute la surface, à l'ourlet roulé main.",
      ar: "وشاح مربع من الحرير التويل بمقاس 90 سم، مطبوع بنقش أفاعٍ ملتفة يغطي كامل السطح، بحاشية ملفوفة يدويًا.",
    },
    narrative: {
      en: [
        "The print repeats a single coiled motif at three different scales, so it reads as an abstract pattern from a distance and as a field of small serpents up close.",
        "Printed on silk twill and finished with a hand-rolled hem — a slow, visibly imperfect edge that machine hemming can't fake.",
        "Ninety centimetres square: worn at the neck, tied to a bag, or framed. All three happen often.",
      ],
      fr: [
        "L'impression répète un unique motif enroulé à trois échelles différentes, de sorte qu'elle se lit comme un motif abstrait de loin et comme un champ de petits serpents de près.",
        "Imprimé sur twill de soie et fini par un ourlet roulé main — un bord lent, visiblement imparfait, qu'un ourlet à la machine ne peut imiter.",
        "Un carré de quatre-vingt-dix centimètres : porté au cou, noué à un sac, ou encadré. Les trois usages sont fréquents.",
      ],
      ar: [
        "يكرر الطباعة نقشًا واحدًا ملتفًا بثلاثة أحجام مختلفة، فيظهر كنقش تجريدي من بعيد وكحقل من أفاعٍ صغيرة عن قرب.",
        "يُطبع على حرير تويل وتُنجز حاشيته بلفّ يدوي — حافة بطيئة الإنجاز وغير كاملة بوضوح، لا يمكن للحياكة الآلية تقليدها.",
        "مربع بمقاس تسعين سنتيمترًا: يُلبس حول الرقبة، أو يُربط بحقيبة، أو يُؤطَّر. الاستعمالات الثلاثة شائعة جدًا.",
      ],
    },
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

/** WhatsApp number used for cart checkout and the WhatsApp link — digits only, country code included. */
export const whatsappNumber = "21692081677";
export const phoneDisplay = "+216 92 081 677";
export const email = "ihebmrabti@yahoo.com";

export const instagramUrl = "https://www.instagram.com/medusa_tunisia/";
export const youtubeUrl = "https://youtu.be/oNfUCm3zn-k?is=7ozCw7Zwm1DFQhqh";
export const temuUrl = "https://app.temu.com/k/eil8u4a8ttw";
export const temuCode = "kmh9242";

export const addressCity: LocalizedText = { en: "Tunis, Tunisia", fr: "Tunis, Tunisie", ar: "تونس" };

export const navLinks: { href: string; key: "shop" | "theHouse" | "contact" }[] = [
  { href: "/shop", key: "shop" },
  { href: "/the-house", key: "theHouse" },
  { href: "/contact", key: "contact" },
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
