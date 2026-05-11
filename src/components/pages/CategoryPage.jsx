import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getProductsByCategory,
  getCategoryById,
  formatPrice,
  buildWaLink,
} from "../../data/products";

// ─── TAG PILL ─────────────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span className="inline-block bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.52rem] font-black tracking-[0.18em] uppercase px-2 py-1 leading-none">
      {children}
    </span>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizes, setShowSizes]       = useState(false);

  const orderLink = buildWaLink(product, selectedSize);

  return (
    <div className="group flex flex-col bg-[#111111] border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden">

      {/* ── Image ── */}
      <div className="relative overflow-hidden bg-[#181818] h-70 md:h-80">
        <img
          src={product.image}
          alt={`${product.name} — ${product.colorway}`}
          className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#111111]/70 via-transparent to-transparent" />

        {product.tag && (
          <div className="absolute top-4 left-4">
            <Tag>{product.tag}</Tag>
          </div>
        )}

        {/* Hover — show "Select Size" prompt */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setShowSizes((v) => !v)}
            className="bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.65rem] font-black tracking-[0.22em] uppercase px-6 py-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 border-none cursor-pointer hover:bg-[#F5F0EB]"
          >
            {showSizes ? "Hide Sizes" : "Select Size"}
          </button>
        </div>
      </div>

      {/* ── Size picker — slides open ── */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showSizes ? "max-h-32 border-b border-white/6" : "max-h-0"
        }`}
      >
        <div className="px-5 pt-4 pb-3">
          <p className="font-['DM_Sans',sans-serif] text-[0.56rem] font-bold tracking-[0.22em] uppercase text-white/30 mb-3">
            EU Size
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                className={`
                  w-10 h-9 font-['DM_Sans',sans-serif] text-[0.72rem] font-semibold
                  border transition-all duration-150 cursor-pointer
                  ${selectedSize === size
                    ? "bg-white text-[#0A0A0A] border-white"
                    : "bg-transparent text-white/40 border-white/15 hover:border-white/40 hover:text-white/70"
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Info ── */}
      <div className="flex flex-col flex-1 p-5">
        <p className="font-['DM_Sans',sans-serif] text-[0.56rem] font-bold tracking-[0.24em] uppercase text-white/25 mb-1.5">
          {product.brand}
        </p>
        <p className="font-['DM_Sans',sans-serif] text-[0.95rem] font-semibold text-white/70 leading-snug mb-1 group-hover:text-white transition-colors duration-300">
          {product.name}
        </p>
        <p className="font-['DM_Sans',sans-serif] text-[0.78rem] font-light text-white/30 mb-4">
          {product.colorway}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/6">
          <span className="font-['Playfair_Display',serif] text-[1.15rem] font-bold text-white">
            {formatPrice(product.price)}
          </span>

          {/* Order button */}
          <a
            href={orderLink}
            target="_blank"
            rel="noreferrer"
            className={`
              font-['DM_Sans',sans-serif] text-[0.62rem] font-bold
              tracking-[0.18em] uppercase px-4 py-2.5
              transition-all duration-200
              ${selectedSize
                ? "bg-white text-[#0A0A0A] hover:bg-[#F5F0EB]"
                : "border border-white/20 text-white/35 hover:border-white/40 hover:text-white/60"
              }
            `}
            onClick={(e) => {
              if (!selectedSize) {
                e.preventDefault();
                setShowSizes(true);
              }
            }}
          >
            {selectedSize ? `Order EU ${selectedSize}` : "Order →"}
          </a>
        </div>

        {!selectedSize && showSizes && (
          <p className="mt-2 font-['DM_Sans',sans-serif] text-[0.58rem] text-white/20">
            Select a size above to order
          </p>
        )}
      </div>
    </div>
  );
}

// ─── CATEGORY PAGE ────────────────────────────────────────────────────────────
export default function CategoryPage() {
  const { categoryId } = useParams();
  const pageRef        = useRef(null);

  const category = getCategoryById(categoryId);
  const products = getProductsByCategory(categoryId);

  // Scroll to top on mount / category change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [categoryId]);

  // Fade-up cards
  useEffect(() => {
    const els = pageRef.current?.querySelectorAll(".cat-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cat-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [categoryId]);

  // 404 — category not found
  if (!category) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center gap-6 px-8">
        <h1 className="font-['Playfair_Display',serif] font-black text-white text-4xl">
          Category not found.
        </h1>
        <Link
          to="/catalogue"
          className="font-['DM_Sans',sans-serif] text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white/40 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/50 transition-all duration-200"
        >
          ← Back to catalogue
        </Link>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .cat-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1),
                      transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .cat-in { opacity: 1; transform: translateY(0); }
        .cat-d0 { transition-delay: 0.00s; }
        .cat-d1 { transition-delay: 0.08s; }
        .cat-d2 { transition-delay: 0.16s; }
        .cat-d3 { transition-delay: 0.24s; }
        .cat-d4 { transition-delay: 0.32s; }
        .cat-d5 { transition-delay: 0.40s; }
      `}</style>

      <div
        ref={pageRef}
        className="min-h-screen bg-[#0A0A0A] px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24"
      >
        {/* ── Header ── */}
        <div className="cat-animate cat-d0 mb-14 md:mb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/"
              className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-white/15 text-[0.6rem]">/</span>
            <Link
              to="/catalogue"
              className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors duration-200"
            >
              Catalogue
            </Link>
            <span className="text-white/15 text-[0.6rem]">/</span>
            <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/40">
              {category.label}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-px bg-white/30 shrink-0" />
            <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-bold tracking-[0.28em] uppercase text-white/35">
              {category.brand}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1
              className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              {category.label}
            </h1>
            <div className="flex items-center gap-4">
              <span className="font-['DM_Sans',sans-serif] text-[0.65rem] font-medium text-white/25">
                {products.length} styles available
              </span>
              <Link
                to="/catalogue"
                className="font-['DM_Sans',sans-serif] text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/30 border-b border-white/15 pb-0.5 hover:text-white/60 hover:border-white/40 transition-all duration-200"
              >
                ← All Categories
              </Link>
            </div>
          </div>
        </div>

        {/* ── How to order tip ── */}
        <div className="cat-animate cat-d1 mb-10 p-4 border border-white/6 bg-[#111111]">
          <p className="font-['DM_Sans',sans-serif] text-[0.72rem] font-light text-white/30 leading-relaxed">
            <span className="font-semibold text-white/50">How to order:</span>
            &nbsp; Hover a shoe → click <em>Select Size</em> → pick your EU size → hit <em>Order</em>. We'll confirm availability on WhatsApp within the hour.
          </p>
        </div>

        {/* ── Product grid ── */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/4">
            {products.map((product, i) => (
              <div
                key={product.id}
                className={`cat-animate cat-d${Math.min(i + 2, 5)} bg-[#0A0A0A]`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="font-['Playfair_Display',serif] text-2xl font-bold text-white/20">
              No styles available yet.
            </p>
            <a
              href={`https://wa.me/254718525592?text=${encodeURIComponent(`Hi Mwandi! Do you have any ${category.label} in stock?`)}`}
              target="_blank"
              rel="noreferrer"
              className="font-['DM_Sans',sans-serif] text-[0.68rem] font-bold tracking-[0.2em] uppercase text-white/30 border-b border-white/15 pb-0.5 hover:text-white/60 transition-all duration-200"
            >
              Ask us on WhatsApp
            </a>
          </div>
        )}

        {/* ── Bottom note ── */}
        <div className="cat-animate cat-d5 mt-16 pt-8 border-t border-white/6">
          <p className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/15 text-center">
            Don't see your size? &nbsp;
            <a
              href={`https://wa.me/254718525592?text=${encodeURIComponent(`Hi Mwandi! I'm looking for a ${category.label} in a size that isn't listed.`)}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/30 border-b border-white/15 pb-px hover:text-white/60 hover:border-white/40 transition-all duration-200"
            >
              Message us — we'll source it
            </a>
          </p>
        </div>
      </div>
    </>
  );
}