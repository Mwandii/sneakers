# Mwandi's Sneakers Place

> Premium sneaker catalogue with WhatsApp-powered ordering — built for Nairobi's most trusted sneaker destination.

---

## Overview

A production-grade frontend for **Mwandi's Sneakers Place**, a Nairobi-based sneaker boutique. The site functions as a premium catalogue where customers browse categories and styles, select their size, and are redirected to WhatsApp with a pre-filled order message — zero friction, straight to the seller.

Built with a clean component architecture that mirrors a real e-commerce setup: product data lives in a single source-of-truth file, pages fetch from it dynamically, and swapping in a real backend (Supabase, Firebase) requires touching only one file.

---

## Live Demo

> mwandissneakers.vercel.app

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Fonts | Playfair Display · DM Sans (Google Fonts) |
| Email / Contact | Resend (serverless via Vercel) |
| Deployment | Vercel |

---

## Features

- **Catalogue system** — browse by category (Jordan 1, Jordan 4, Yeezy, Air Force 1, etc.)
- **Size selector** — customers pick their EU size before ordering
- **WhatsApp order flow** — each product generates a pre-filled WhatsApp message with shoe name, colorway, size and price
- **Fully responsive** — mobile-first, tested across all screen sizes
- **Slide-in mobile drawer** — with body scroll lock, backdrop blur, Escape key support
- **Scroll-aware navbar** — glass blur effect kicks in on scroll
- **IntersectionObserver animations** — staggered fade-up on all sections, no animation library
- **Contact form** — connected to Resend for email delivery
- **Smart navigation** — nav links work from any page, navigating home first when needed

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Homepage.jsx
│   │   ├── CataloguePage.jsx
│   │   └── CategoryPage.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── Marquee.jsx
│       ├── NewArrivals.jsx
│       ├── Trending.jsx
│       ├── Featured.jsx
│       ├── WhyUs.jsx
│       ├── About.jsx
│       └── Contact.jsx
├── data/
│   └── products.js        # single source of truth for all stock
├── constants.js           # shared config, nav links, palette
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-mwandii/sneakers.git
cd sneakers

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Environment Variables

Create a `.env` file in the root:

```env
# Resend API key for contact form emails
RESEND_API_KEY=your_resend_api_key_here
```

> **Note:** `RESEND_API_KEY` is server-side only — never prefix it with `VITE_`.

---

## Adding / Updating Products

All stock lives in `src/data/products.js`. To add a new shoe:

```js
{
  id: "aj1-chicago",            // unique slug
  categoryId: "jordan-1",       // must match a category id
  brand: "Nike",
  name: "Air Jordan 1 Retro High OG",
  colorway: "Chicago",
  price: 22000,                 // in KSh, number only
  sizes: [40, 41, 42, 43, 44], // EU sizes available
  image: "/images/aj1-chicago.jpg",
  tag: "Limited",               // "New" | "Limited" | "Hot" | null
  inStock: true,
}
```

To add a new category, add an entry to the `categories` array in the same file and update the `count` field as you add products.

---

## WhatsApp Order Flow

When a customer orders, they receive a pre-filled WhatsApp message:

```
Hi Mwandi! I'd like to order:

*Air Jordan 1 Retro High OG — Chicago* — Size EU 42
Price: KSh 22,000

Is it available?
```

To update the WhatsApp number, change `WHATSAPP` in `src/constants.js`:

```js
export const WHATSAPP = "254718525592"; // format: country code + number, no +
```

---

## Deployment

The project is configured for **Vercel** with SPA routing and serverless API functions.

```bash
# Build for production
npm run build
```

Vercel picks up the `api/contact.js` serverless function automatically. Make sure `RESEND_API_KEY` is set in your Vercel environment variables.

---

## Roadmap

- [ ] Real product images (replace Unsplash placeholders)
- [ ] Instagram feed integration
- [ ] WhatsApp Business API integration
- [ ] Stock management via Supabase
- [ ] Order tracking page

---

## Author

**Athanas Muinde (Mwandi)**
Freelance Frontend Developer · Nairobi, Kenya

---

## License

This project is private and not open for redistribution.