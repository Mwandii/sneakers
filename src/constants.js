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
  p2:     "https://images.unsplash.com/photo-1656335362192-2bc9051b1824?w=1000&q=80&auto=format&fit=crop",
  p3:     "https://images.unsplash.com/photo-1665517464780-ab4f42d8af95?w=1000&q=85&auto=format&fit=crop",
  p4:     "https://images.unsplash.com/photo-1679111513962-762e14317937?w=1000&q=85&auto=format&fit=crop",
  t1:     "https://images.unsplash.com/photo-1709258228137-19a8c193be39?w=1000&q=85&auto=format&fit=crop",
  t2:     "https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?w=1000&q=85&auto=format&fit=crop",
  t3:     "https://images.unsplash.com/photo-1718220130188-428c7dc27fd2?w=1000&q=85&auto=format&fit=crop",
  feat1:  "https://images.unsplash.com/photo-1684918725924-ab55e49de549?w=1000&q=85&auto=format&fit=crop",
  feat2:  "https://images.unsplash.com/photo-1626298038175-e9f383124e1f?w=1000&q=85&auto=format&fit=crop",
  about:  "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=90&auto=format",
};

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "New Arrivals", id: "new-arrivals" },
  { label: "Trending",   id: "trending"     },
  { label: "Featured",   id: "featured"     },
  { label: "About",      id: "about"        },
  { label: "Contact",    id: "contact"      },
];

// ─── SECTION DATA ─────────────────────────────────────────────────────────────
export const newArrivals = [
  { id: 1, brand: "Nike",        name: "Air Force 1 White Plain",  price: "KSh 2,500", sizes: "EU 36–45", tag: "NEW",     img: IMAGES.p1 },
  { id: 2, brand: "Jordan",      name: "Air Jordan 4 White Cement",   price: "KSh 3,500", sizes: "EU 36–45", tag: "LIMITED", img: IMAGES.p2 },
  { id: 3, brand: "New Balance", name: "550 White Green",              price: "KSh 3,500", sizes: "EU 36–45", tag: "NEW",     img: IMAGES.p3 },
  { id: 4, brand: "Nike",        name: "Dunk Low x Concepts 'Orange Lobster'",       price: "KSh 3,500", sizes: "EU 36–45", tag: null,      img: IMAGES.p4 },
];

export const trending = [
  { id: 5, brand: "Asics",   name: "Asics Gel-Kayano 14", price: "KSh 3,800", img: IMAGES.t1, hot: true  },
  { id: 6, brand: "Nike", name: "SB Dunks Low Panda",        price: "KSh 3,500",  img: IMAGES.t2, hot: false },
  { id: 7, brand: "Adidas",   name: "Samba Single Sole",      price: "KSh 2,800",  img: IMAGES.t3, hot: true  },
];

export const featured = [
  { id: 9, brand: "Puma", name: "Suede XL",     price: "KSh 3,500", tag: "HOT DROP",  img: IMAGES.feat2 },
  { id: 8, brand: "Nike",   name: "Jordan 4 Pine Green", price: "KSh 3,500", tag: "EXCLUSIVE", img: IMAGES.feat1 },
];

export const marqueeItems = [
  "Authentic Kicks", "Premium Quality", "Nairobi's Finest",
  "Step In Style",   "Fast Delivery",   "Exclusive Drops",
  "100% Verified",   "Street Culture",
];

export const whyUs = [
  { num: "01", title: "100% Authentic", body: "Every pair we sell is verified genuine — no reps, no fakes, ever." },
  { num: "02", title: "Same Day Delivery",  body: "Order today, have your kicks within 24hrs. Nairobi & beyond."         },
  { num: "03", title: "WhatsApp First", body: "Talk directly to us. Real people, real answers — no bots."        },
  { num: "04", title: "Easy Returns",   body: "Wrong size? Wrong fit? We make it right, no questions asked."     },
];