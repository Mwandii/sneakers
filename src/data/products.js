// ─────────────────────────────────────────────────────────────────────────────
// products.js
// Single source of truth for all catalogue data.
// When you move to a real backend (Supabase, Firebase, etc.) swap this file's
// exports for API calls — the rest of the app doesn't change at all.
// ─────────────────────────────────────────────────────────────────────────────

// ─── CATEGORIES ──────────────────────────────────────────────────────────────
// Each category shows as a card on the /catalogue page.
// cover: use your own image paths later — these are Unsplash placeholders.

export const categories = [
  {
    id: "jordan-1",
    label: "Jordan 1",
    brand: "Nike",
    cover: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80",
    count: 4, // update this as you add products
  },
  {
    id: "jordan-3",
    label: "Jordan 3",
    brand: "Nike",
    cover: "https://images.unsplash.com/photo-1584735175315-9d5df23be1da?w=800&q=80",
    count: 3,
  },
  {
    id: "jordan-4",
    label: "Jordan 4",
    brand: "Nike",
    cover: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    count: 3,
  },
  {
    id: "air-force-1",
    label: "Air Force 1",
    brand: "Nike",
    cover: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    count: 3,
  },
  {
    id: "yeezy",
    label: "Yeezy",
    brand: "Adidas",
    cover: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    count: 4,
  },
  {
    id: "new-balance",
    label: "New Balance",
    brand: "New Balance",
    cover: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    count: 3,
  },
  {
    id: "dunk",
    label: "Dunk",
    brand: "Nike",
    cover: "https://images.unsplash.com/photo-1613987245117-e2f096e5e583?w=800&q=80",
    count: 3,
  },
  {
    id: "puma",
    label: "Puma Classics",
    brand: "Puma",
    cover: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=800&q=80",
    count: 2,
  },
];

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
// Each product belongs to one category via the `categoryId` field.
// Add as many products as you want — the pages fetch by categoryId automatically.
//
// Field reference:
//   id         : unique slug used in URLs and WhatsApp messages
//   categoryId : must match a category id above
//   brand      : display brand name
//   name       : full product name shown on cards and in WhatsApp messages
//   colorway   : e.g. "Chicago" / "Bred" / "University Blue"
//   price      : number in KSh (formatted on render)
//   sizes      : array of EU sizes available
//   image      : primary product image URL (swap Unsplash for your own photos)
//   tag        : "New" | "Limited" | "Hot" | null
//   inStock    : true | false

export const products = [

  // ── Jordan 1 ──────────────────────────────────────────────────────────────
  {
    id: "aj1-chicago",
    categoryId: "jordan-1",
    brand: "Nike",
    name: "Air Jordan 1 Retro High OG",
    colorway: "Chicago",
    price: 22000,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80",
    tag: "Limited",
    inStock: true,
  },
  {
    id: "aj1-royal-toe",
    categoryId: "jordan-1",
    brand: "Nike",
    name: "Air Jordan 1 Retro High OG",
    colorway: "Royal Toe",
    price: 19500,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tag: "New",
    inStock: true,
  },
  {
    id: "aj1-shadow",
    categoryId: "jordan-1",
    brand: "Nike",
    name: "Air Jordan 1 Retro High OG",
    colorway: "Shadow 2.0",
    price: 18500,
    sizes: [41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1da?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "aj1-mid-smoke-grey",
    categoryId: "jordan-1",
    brand: "Nike",
    name: "Air Jordan 1 Mid",
    colorway: "Smoke Grey",
    price: 14500,
    sizes: [39, 40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    tag: null,
    inStock: true,
  },

  // ── Jordan 3 ──────────────────────────────────────────────────────────────
  {
    id: "aj3-white-cement",
    categoryId: "jordan-3",
    brand: "Nike",
    name: "Air Jordan 3 Retro",
    colorway: "White Cement Reimagined",
    price: 24000,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    tag: "New",
    inStock: true,
  },
  {
    id: "aj3-black-cement",
    categoryId: "jordan-3",
    brand: "Nike",
    name: "Air Jordan 3 Retro",
    colorway: "Black Cement",
    price: 22500,
    sizes: [41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "aj3-pine-green",
    categoryId: "jordan-3",
    brand: "Nike",
    name: "Air Jordan 3 Retro",
    colorway: "Pine Green",
    price: 21000,
    sizes: [39, 40, 41, 42, 43],
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80",
    tag: "Limited",
    inStock: true,
  },

  // ── Jordan 4 ──────────────────────────────────────────────────────────────
  {
    id: "aj4-thunder",
    categoryId: "jordan-4",
    brand: "Nike",
    name: "Air Jordan 4 Retro",
    colorway: "Thunder",
    price: 28000,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    tag: "Limited",
    inStock: true,
  },
  {
    id: "aj4-military-black",
    categoryId: "jordan-4",
    brand: "Nike",
    name: "Air Jordan 4 Retro",
    colorway: "Military Black",
    price: 26500,
    sizes: [39, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1613987245117-e2f096e5e583?w=800&q=80",
    tag: "New",
    inStock: true,
  },
  {
    id: "aj4-bred-reimagined",
    categoryId: "jordan-4",
    brand: "Nike",
    name: "Air Jordan 4 Retro",
    colorway: "Bred Reimagined",
    price: 27000,
    sizes: [40, 41, 42, 43],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tag: "Hot",
    inStock: true,
  },

  // ── Air Force 1 ───────────────────────────────────────────────────────────
  {
    id: "af1-white",
    categoryId: "air-force-1",
    brand: "Nike",
    name: "Air Force 1 '07",
    colorway: "Triple White",
    price: 10500,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "af1-black",
    categoryId: "air-force-1",
    brand: "Nike",
    name: "Air Force 1 '07",
    colorway: "Triple Black",
    price: 10500,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    image: "https://images.unsplash.com/photo-1613987245117-e2f096e5e583?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "af1-university-blue",
    categoryId: "air-force-1",
    brand: "Nike",
    name: "Air Force 1 '07",
    colorway: "University Blue",
    price: 12000,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80",
    tag: "New",
    inStock: true,
  },

  // ── Yeezy ─────────────────────────────────────────────────────────────────
  {
    id: "yeezy-350-bone",
    categoryId: "yeezy",
    brand: "Adidas",
    name: "Yeezy Boost 350 V2",
    colorway: "Bone",
    price: 22000,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
    tag: "Limited",
    inStock: true,
  },
  {
    id: "yeezy-350-zebra",
    categoryId: "yeezy",
    brand: "Adidas",
    name: "Yeezy Boost 350 V2",
    colorway: "Zebra",
    price: 24000,
    sizes: [40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    tag: "Hot",
    inStock: true,
  },
  {
    id: "yeezy-700-alvah",
    categoryId: "yeezy",
    brand: "Adidas",
    name: "Yeezy 700 V3",
    colorway: "Alvah",
    price: 25500,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=800&q=80",
    tag: "New",
    inStock: true,
  },
  {
    id: "yeezy-slide-pure",
    categoryId: "yeezy",
    brand: "Adidas",
    name: "Yeezy Slide",
    colorway: "Pure",
    price: 9500,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=800&q=80",
    tag: null,
    inStock: true,
  },

  // ── New Balance ───────────────────────────────────────────────────────────
  {
    id: "nb-550-white-green",
    categoryId: "new-balance",
    brand: "New Balance",
    name: "New Balance 550",
    colorway: "White Green",
    price: 12000,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    tag: "New",
    inStock: true,
  },
  {
    id: "nb-574-grey",
    categoryId: "new-balance",
    brand: "New Balance",
    name: "New Balance 574",
    colorway: "Grey",
    price: 10000,
    sizes: [39, 40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "nb-990v5-grey",
    categoryId: "new-balance",
    brand: "New Balance",
    name: "New Balance 990v5",
    colorway: "Grey",
    price: 18000,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1da?w=800&q=80",
    tag: "Limited",
    inStock: true,
  },

  // ── Dunk ──────────────────────────────────────────────────────────────────
  {
    id: "dunk-low-panda",
    categoryId: "dunk",
    brand: "Nike",
    name: "Nike Dunk Low",
    colorway: "Panda",
    price: 15000,
    sizes: [39, 40, 41, 42, 43, 44, 45, 46, 47],
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23be1da?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "dunk-low-grey-fog",
    categoryId: "dunk",
    brand: "Nike",
    name: "Nike Dunk Low",
    colorway: "Grey Fog",
    price: 14500,
    sizes: [40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1613987245117-e2f096e5e583?w=800&q=80",
    tag: "New",
    inStock: true,
  },
  {
    id: "dunk-high-varsity-maize",
    categoryId: "dunk",
    brand: "Nike",
    name: "Nike Dunk High",
    colorway: "Varsity Maize",
    price: 16000,
    sizes: [39, 40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80",
    tag: "Limited",
    inStock: true,
  },

  // ── Puma ──────────────────────────────────────────────────────────────────
  {
    id: "puma-suede-classic",
    categoryId: "puma",
    brand: "Puma",
    name: "Puma Suede Classic XXI",
    colorway: "Black / White",
    price: 8200,
    sizes: [39, 40, 41, 42, 43, 44, 45],
    image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=800&q=80",
    tag: null,
    inStock: true,
  },
  {
    id: "puma-rs-x",
    categoryId: "puma",
    brand: "Puma",
    name: "Puma RS-X",
    colorway: "White / Blue",
    price: 9800,
    sizes: [40, 41, 42, 43, 44],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    tag: "New",
    inStock: true,
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/** Get all products belonging to a category */
export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.categoryId === categoryId);
}

/** Get a single product by id */
export function getProductById(id) {
  return products.find((p) => p.id === id) ?? null;
}

/** Get a category object by id */
export function getCategoryById(id) {
  return categories.find((c) => c.id === id) ?? null;
}

/** Format price as KSh string */
export function formatPrice(price) {
  return `KSh ${price.toLocaleString("en-KE")}`;
}

/** Build a WhatsApp order link for a specific product and size */
export function buildWaLink(product, size) {
  const WHATSAPP = "254718525592";
  const sizeText = size ? ` — Size EU ${size}` : "";
  const msg = encodeURIComponent(
    `Hi Mwandi! I'd like to order:\n\n*${product.name} — ${product.colorway}*${sizeText}\nPrice: ${formatPrice(product.price)}\n\nIs it available?`
  );
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}