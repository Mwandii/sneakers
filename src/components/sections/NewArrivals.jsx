import { useEffect, useRef } from "react";
import { newArrivals, WHATSAPP, waLink } from "../../constants";

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

// ─── TAG PILL ─────────────────────────────────────────────────────────────────
function Tag({ children }) {
  return (
    <span className="inline-block bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.55rem] font-black tracking-[0.2em] uppercase px-2.5 py-1 leading-none">
      {children}
    </span>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product, large }) {
  return (
    <a
      href={waLink(product.name, product.price)}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col bg-[#111111] overflow-hidden border border-white/[0.05] hover:border-white/20 transition-all duration-500 h-full"
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-[#181818] flex-shrink-0 ${large ? "h-[340px] md:h-[440px]" : "h-[240px] md:h-[280px]"}`}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent" />

        {product.tag && (
          <div className="absolute top-4 left-4">
            <Tag>{product.tag}</Tag>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.65rem] font-black tracking-[0.22em] uppercase px-6 py-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Order via WhatsApp
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.26em] uppercase text-white/30 mb-2">
          {product.brand}
        </p>
        <p className="font-['DM_Sans',sans-serif] text-[0.95rem] font-semibold text-white/70 leading-snug mb-auto group-hover:text-white transition-colors duration-300">
          {product.name}
        </p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/[0.06]">
          <span className="font-['Playfair_Display',serif] text-[1.2rem] font-bold text-white">
            {product.price}
          </span>
          <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-medium tracking-[0.14em] text-white/25">
            {product.sizes}
          </span>
        </div>
      </div>
    </a>
  );
}

// ─── NEW ARRIVALS ─────────────────────────────────────────────────────────────
export default function NewArrivals() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".na-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("na-in");
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
        .na-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1),
                      transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .na-in   { opacity: 1; transform: translateY(0); }
        .na-d0   { transition-delay: 0.00s; }
        .na-d1   { transition-delay: 0.10s; }
        .na-d2   { transition-delay: 0.20s; }
        .na-d3   { transition-delay: 0.30s; }
        .na-d4   { transition-delay: 0.40s; }
        .na-d5   { transition-delay: 0.50s; }
      `}</style>

      <section
        id="new-arrivals"
        ref={sectionRef}
        className="bg-[#0A0A0A] px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32"
      >
        {/* Header */}
        <div className="na-animate na-d0 flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <SectionLabel>Just Dropped</SectionLabel>
            <h2
              className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
            >
              New Arrivals
            </h2>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi! Can you show me all available sneakers?")}`}
            target="_blank"
            rel="noreferrer"
            className="self-start sm:self-auto font-['DM_Sans',sans-serif] text-[0.65rem] font-bold tracking-[0.22em] uppercase text-white/35 border-b border-white/15 pb-0.5 hover:text-white hover:border-white/50 transition-all duration-200 whitespace-nowrap"
          >
            View All →
          </a>
        </div>

        {/* Grid
            Mobile  : 1 col
            Tablet  : 2 col equal
            Desktop : [large spans 2] [card] [card] — row 1
                      [card spans 2] [cta]           — row 2
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">

          {/* Card 0 — large, spans 2 cols on desktop */}
          <div className="na-animate na-d1 bg-[#0A0A0A] sm:col-span-2 lg:col-span-2">
            <ProductCard product={newArrivals[0]} large={true} />
          </div>

          {/* Card 1 */}
          <div className="na-animate na-d2 bg-[#0A0A0A] sm:col-span-1 lg:col-span-1">
            <ProductCard product={newArrivals[1]} large={false} />
          </div>

          {/* Card 2 */}
          <div className="na-animate na-d3 bg-[#0A0A0A] sm:col-span-1 lg:col-span-1">
            <ProductCard product={newArrivals[2]} large={false} />
          </div>

          {/* Card 3 */}
          <div className="na-animate na-d4 bg-[#0A0A0A] sm:col-span-1 lg:col-span-1">
            <ProductCard product={newArrivals[3]} large={false} />
          </div>

          {/* CTA tile — desktop only, fills last slot */}
          <div className="na-animate na-d5 bg-[#0A0A0A] hidden lg:block">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi! Can you show me your full sneaker collection?")}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center w-full h-full bg-[#111111] border border-white/[0.05] hover:bg-[#181818] hover:border-white/15 transition-all duration-500 p-10 min-h-[260px]"
            >
              <span
                className="font-['Playfair_Display',serif] font-black text-white/15 group-hover:text-white/30 text-center leading-tight mb-4 transition-colors duration-300"
                style={{ fontSize: "clamp(1.6rem, 2.2vw, 2.2rem)" }}
              >
                View Full<br />Catalogue
              </span>
              <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.24em] uppercase text-white/20 group-hover:text-white/40 transition-colors duration-300">
                50+ Styles →
              </span>
            </a>
          </div>
        </div>

        {/* Mobile — view all button */}
        <div className="mt-10 flex justify-center lg:hidden">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi! Can you show me your full sneaker collection?")}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#0A0A0A] font-['DM_Sans',sans-serif] text-[0.7rem] font-bold tracking-[0.22em] uppercase px-10 py-4 hover:bg-[#F5F0EB] transition-colors duration-200"
          >
            View Full Catalogue
          </a>
        </div>
      </section>
    </>
  );
}