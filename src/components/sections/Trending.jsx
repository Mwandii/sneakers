import { useEffect, useRef } from "react";
import { trending, waLink } from "../../constants";

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

// ─── TRENDING CARD ────────────────────────────────────────────────────────────
function TrendingCard({ product, index }) {
  return (
    <a
      href={waLink(product.name, product.price)}
      target="_blank"
      rel="noreferrer"
      className="group block bg-[#111111] border border-white/[0.05] hover:border-white/20 overflow-hidden transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#181818] h-[300px] md:h-[360px]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.06]"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

        {/* Index number — large editorial watermark */}
        <div className="absolute top-4 right-5 font-['Playfair_Display',serif] font-black text-white/8 leading-none select-none"
          style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hot badge */}
        {product.hot && (
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.55rem] font-black tracking-[0.2em] uppercase px-2.5 py-1 leading-none">
              Trending
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.65rem] font-black tracking-[0.22em] uppercase px-6 py-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Order via WhatsApp
          </span>
        </div>
      </div>

      {/* Info row */}
      <div className="px-5 md:px-6 py-5 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5 min-w-0">
          <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.26em] uppercase text-white/30">
            {product.brand}
          </p>
          <p className="font-['DM_Sans',sans-serif] text-[0.95rem] font-semibold text-white/70 leading-snug group-hover:text-white transition-colors duration-300 truncate">
            {product.name}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 flex-shrink-0">
          <span className="font-['Playfair_Display',serif] text-[1.15rem] font-bold text-white whitespace-nowrap">
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

// ─── TRENDING ─────────────────────────────────────────────────────────────────
export default function Trending() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".tr-animate");
    if (!els) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tr-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tr-animate {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1),
                      transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .tr-in  { opacity: 1; transform: translateY(0); }
        .tr-d1  { transition-delay: 0.00s; }
        .tr-d2  { transition-delay: 0.12s; }
        .tr-d3  { transition-delay: 0.24s; }
        .tr-d4  { transition-delay: 0.36s; }
      `}</style>

      <section
        id="trending"
        ref={sectionRef}
        className="bg-[#111111] border-t border-white/[0.06] px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32"
      >
        {/* ── Header ── */}
        <div className="tr-animate tr-d1 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel>What's Hot Right Now</SectionLabel>
            <h2
              className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
            >
              Trending
            </h2>
          </div>

          {/* Editorial pull-quote */}
          <p className="font-['DM_Sans',sans-serif] text-[0.72rem] font-light text-white/20 max-w-[220px] leading-relaxed hidden md:block">
            The pairs everyone's asking about right now.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {trending.map((product, i) => (
            <div
              key={product.id}
              className={`tr-animate bg-[#111111] tr-d${i + 2}`}
            >
              <TrendingCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* ── Bottom rule + rank strip ── */}
        <div className="tr-animate tr-d4 mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-6">
          {/* Rank labels */}
          <div className="flex items-center gap-6">
            {trending.map((p, i) => (
              <div key={p.id} className="flex items-center gap-2.5">
                <span className="font-['Playfair_Display',serif] text-[0.7rem] font-black text-white/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.16em] uppercase text-white/20 hidden sm:inline">
                  {p.name.split(" ").slice(0, 2).join(" ")}
                </span>
                {i < trending.length - 1 && (
                  <span className="w-px h-3 bg-white/10 ml-2" />
                )}
              </div>
            ))}
          </div>

          {/* Updated label */}
          <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-white/15">
            Updated weekly
          </span>
        </div>
      </section>
    </>
  );
}