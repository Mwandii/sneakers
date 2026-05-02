import { useEffect, useRef } from "react";
import { featured, waLink } from "../../constants";

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-7 h-px bg-white/30 flex-shrink-0" />
      <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-bold tracking-[0.28em] uppercase text-white/35">
        {children}
      </span>
    </div>
  );
}

// ─── FEATURED CARD ────────────────────────────────────────────────────────────
function FeaturedCard({ product, index }) {
  const isEven = index % 2 === 0;

  return (
    <a
      href={waLink(product.name, product.price)}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col bg-[#111111] overflow-hidden border border-white/[0.05] hover:border-white/20 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#181818] h-[380px] md:h-[480px] lg:h-[560px]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover opacity-80 transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.05]"
        />

        {/* Gradient — stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />

        {/* Tag */}
        <div className="absolute top-5 left-5">
          <span className="inline-block bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.55rem] font-black tracking-[0.2em] uppercase px-2.5 py-1 leading-none">
            {product.tag}
          </span>
        </div>

        {/* Large editorial index */}
        <div
          className="absolute bottom-4 right-5 font-['Playfair_Display',serif] font-black text-white/6 leading-none select-none"
          style={{ fontSize: "clamp(5rem, 10vw, 8rem)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.65rem] font-black tracking-[0.22em] uppercase px-6 py-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Order via WhatsApp
          </span>
        </div>
      </div>

      {/* Info bar */}
      <div className="flex items-end justify-between gap-4 px-6 py-6 border-t border-white/[0.06]">
        <div className="flex flex-col gap-1.5 min-w-0">
          <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.26em] uppercase text-white/30">
            {product.brand}
          </p>
          <p className="font-['DM_Sans',sans-serif] text-[1rem] font-semibold text-white/70 leading-snug group-hover:text-white transition-colors duration-300">
            {product.name}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className="font-['Playfair_Display',serif] text-[1.25rem] font-bold text-white whitespace-nowrap">
            {product.price}
          </span>
          <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-white/20 group-hover:text-white/50 transition-colors duration-300">
            Order →
          </span>
        </div>
      </div>
    </a>
  );
}

// ─── FEATURED ─────────────────────────────────────────────────────────────────
export default function Featured() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".fe-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fe-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .fe-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.85s cubic-bezier(.16,1,.3,1),
                      transform 0.85s cubic-bezier(.16,1,.3,1);
        }
        .fe-in  { opacity: 1; transform: translateY(0); }
        .fe-d0  { transition-delay: 0.00s; }
        .fe-d1  { transition-delay: 0.14s; }
        .fe-d2  { transition-delay: 0.28s; }
        .fe-d3  { transition-delay: 0.42s; }
      `}</style>

      <section
        id="featured"
        ref={sectionRef}
        className="bg-[#0A0A0A] border-t border-white/[0.06] px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32"
      >
        {/* ── Header ── */}
        <div className="fe-animate fe-d0 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel>Curated Picks</SectionLabel>
            <h2
              className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
            >
              Featured Drops
            </h2>
          </div>

          {/* Right side — editorial descriptor */}
          <p className="hidden md:block font-['DM_Sans',sans-serif] text-[0.72rem] font-light text-white/20 max-w-[200px] leading-relaxed text-right">
            Handpicked by us.<br />Coveted by everyone.
          </p>
        </div>

        {/* ── Two-column card grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className={`fe-animate fe-d${i + 1} bg-[#0A0A0A]`}
            >
              <FeaturedCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* ── Bottom editorial strip ── */}
        <div className="fe-animate fe-d3 mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
          {/* Left — tagline */}
          <p className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.24em] uppercase text-white/15">
            Limited availability &nbsp;·&nbsp; First come, first served
          </p>

          {/* Right — indicator dots */}
          <div className="flex items-center gap-2">
            {featured.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  i === 0
                    ? "w-4 h-px bg-white/40"
                    : "w-1.5 h-px bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}