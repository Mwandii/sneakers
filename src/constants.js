// ─── PALETTE ─────────────────────────────────────────────────────────────────
export const C = {
  bg:      "#0A0A0A",   // pure near-black
  surface: "#111111",   // lifted dark
  card:    "#181818",   // cards / inputs
  ivory:   "#F5F0EB",   // warm off-white — primary text
  muted:   "rgba(245,240,235,0.4)",   // dimmed text
  faint:   "rgba(245,240,235,0.15)",  // very subtle text / borders
  border:  "rgba(255,255,255,0.07)",  // barely-there dividers
};

// ─── WHATSAPP ─────────────────────────────────────────────────────────────────
export const WHATSAPP = "254718525592";

export function waLink(productName, price) {
  const msg = encodeURIComponent(
    `Hi Mwandi! I'm interested in the *${productName}* (${price}). Is it available?`
  );
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

// ─── IMAGES ───────────────────────────────────────────────────────────────────
export const IMAGES = {
  heroBg: "https://images.unsplash.com/photo-1679284392448-e0812fbe3e8b?w=1600&q=100&auto=format",
  p1:     "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=700&q=80",
  p2:     "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=700&q=80",
  p3:     "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&q=80",
  p4:     "https://images.unsplash.com/photo-1584735175315-9d5df23be1da?w=700&q=80",
  t1:     "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&q=80",
  t2:     "https://images.unsplash.com/photo-1613987245117-e2f096e5e583?w=700&q=80",
  t3:     "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=700&q=80",
  feat1:  "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&q=80",
  feat2:  "https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?w=900&q=80",
  about:  "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=90&auto=format",
};

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Collection", id: "new-arrivals" },
  { label: "Trending",   id: "trending"     },
  { label: "Featured",   id: "featured"     },
  { label: "About",      id: "about"        },
  { label: "Contact",    id: "contact"      },
];

// ─── SECTION DATA ─────────────────────────────────────────────────────────────
export const newArrivals = [
  { id: 1, brand: "Nike",        name: "Air Jordan 1 Retro High OG",  price: "KSh 18,500", sizes: "EU 39–47", tag: "NEW",     img: IMAGES.p1 },
  { id: 2, brand: "Adidas",      name: "Yeezy Boost 350 V2 'Bone'",   price: "KSh 22,000", sizes: "EU 38–46", tag: "LIMITED", img: IMAGES.p2 },
  { id: 3, brand: "New Balance", name: "550 White Green",              price: "KSh 12,000", sizes: "EU 37–45", tag: "NEW",     img: IMAGES.p3 },
  { id: 4, brand: "Nike",        name: "Dunk Low Retro 'Panda'",       price: "KSh 15,000", sizes: "EU 39–47", tag: null,      img: IMAGES.p4 },
];

export const trending = [
  { id: 5, brand: "Nike",   name: "Air Force 1 '07 White", price: "KSh 10,500", img: IMAGES.t1, hot: true  },
  { id: 6, brand: "Adidas", name: "Forum Low Black",        price: "KSh 9,800",  img: IMAGES.t2, hot: false },
  { id: 7, brand: "Puma",   name: "Suede Classic XXI",      price: "KSh 8,200",  img: IMAGES.t3, hot: true  },
];

export const featured = [
  { id: 8, brand: "Nike",   name: "Jordan 4 Retro 'Thunder'", price: "KSh 28,000", tag: "EXCLUSIVE", img: IMAGES.feat1 },
  { id: 9, brand: "Adidas", name: "Yeezy 700 V3 'Alvah'",     price: "KSh 25,500", tag: "HOT DROP",  img: IMAGES.feat2 },
];

export const marqueeItems = [
  "Authentic Kicks", "Premium Quality", "Nairobi's Finest",
  "Step In Style",   "Fast Delivery",   "Exclusive Drops",
  "100% Verified",   "Street Culture",
];

export const whyUs = [
  { num: "01", title: "100% Authentic", body: "Every pair we sell is verified genuine — no reps, no fakes, ever." },
  { num: "02", title: "48hr Delivery",  body: "Order today, have your kicks tomorrow. Nairobi & beyond."         },
  { num: "03", title: "WhatsApp First", body: "Talk directly to us. Real people, real answers — no bots."        },
  { num: "04", title: "Easy Returns",   body: "Wrong size? Wrong fit? We make it right, no questions asked."     },
];