import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { categories, products, getCategoriesWithCounts } from "../../data/products";

// ─── CATEGORY CARD ────────────────────────────────────────────────────────────
function CategoryCard({ category }) {
  return (
    <Link
      to={`/catalogue/${category.id}`}
      className="group block relative overflow-hidden bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-70 md:h-85 overflow-hidden bg-[#181818]">
        <img
          src={category.cover}
          alt={category.label}
          className="w-full h-full object-cover  transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.06]"
        />
        
      </div>

      {/* Info */}
      <div className="p-6 flex items-end justify-between border-t border-white/5">
        <div className="flex flex-col gap-1">
          <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.24em] uppercase text-white/30">
            {category.brand}
          </span>
          <span className="font-['Playfair_Display',serif] text-[1.3rem] font-black text-white group-hover:text-white/80 transition-colors duration-300">
            {category.label}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-white/20">
            {category.count} styles
          </span>
          <span className="font-['DM_Sans',sans-serif] text-[0.65rem] font-bold tracking-[0.16em] uppercase text-white/25 group-hover:text-white/60 transition-colors duration-300">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── CATALOGUE PAGE ───────────────────────────────────────────────────────────
export default function CataloguePage() {
  const pageRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Fade-up animation
  useEffect(() => {
    const els = pageRef.current?.querySelectorAll(".cp-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cp-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const updatedCategories = getCategoriesWithCounts(categories, products);

  return (
    <>
      <style>{`
        .cp-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1),
                      transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .cp-in { opacity: 1; transform: translateY(0); }
        .cp-d0 { transition-delay: 0.00s; }
        .cp-d1 { transition-delay: 0.08s; }
        .cp-d2 { transition-delay: 0.16s; }
        .cp-d3 { transition-delay: 0.24s; }
        .cp-d4 { transition-delay: 0.32s; }
        .cp-d5 { transition-delay: 0.40s; }
        .cp-d6 { transition-delay: 0.48s; }
        .cp-d7 { transition-delay: 0.56s; }
      `}</style>

      <div
        ref={pageRef}
        className="min-h-screen bg-[#0A0A0A] px-5 sm:px-8 md:px-12 lg:px-16 py-16 md:py-24"
      >
        {/* ── Page header ── */}
        <div className="cp-animate cp-d0 mb-14 md:mb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link
              to="/"
              className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/20 hover:text-white/50 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-white/15 text-[0.6rem]">/</span>
            <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/40">
              Catalogue
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="block w-7 h-px bg-white/30 shrink-0" />
            <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-bold tracking-[0.28em] uppercase text-white/35">
              Full Collection
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1
              className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
            >
              All Categories
            </h1>
            <p className="font-['DM_Sans',sans-serif] text-[0.8rem] font-light text-white/25 max-w-60 leading-relaxed hidden sm:block">
              Select a category to browse available styles.
            </p>
          </div>
        </div>

        {/* ── Category grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/4">
          {updatedCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`cp-animate cp-d${Math.min(i, 7)} bg-[#0A0A0A]`}
            >
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <div className="cp-animate cp-d7 mt-16 pt-8 border-t border-white/6">
          <p className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/15 text-center">
            Can't find what you're looking for? &nbsp;
            <a
              href={`https://wa.me/254718525592?text=${encodeURIComponent("Hi Mwandi! I'm looking for a specific sneaker that isn't on your catalogue.")}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/30 border-b border-white/15 pb-px hover:text-white/60 hover:border-white/40 transition-all duration-200"
            >
              Ask us on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </>
  );
}