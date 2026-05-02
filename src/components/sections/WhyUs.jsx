import { useEffect, useRef } from "react";
import { whyUs } from "../../constants";

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

// ─── PROMISE CARD ─────────────────────────────────────────────────────────────
function PromiseCard({ item, index }) {
  return (
    <div className="group flex flex-col gap-6 p-7 md:p-9 bg-[#111111] border border-white/[0.05] hover:border-white/15 transition-all duration-500">
      {/* Number */}
      <span className="font-['Playfair_Display',serif] font-black text-white/10 leading-none group-hover:text-white/20 transition-colors duration-500"
        style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
        {item.num}
      </span>

      {/* Divider */}
      <div className="w-8 h-px bg-white/15 group-hover:w-12 group-hover:bg-white/35 transition-all duration-500" />

      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3 className="font-['DM_Sans',sans-serif] text-[0.82rem] font-bold tracking-[0.1em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">
          {item.title}
        </h3>
        <p className="font-['DM_Sans',sans-serif] text-[0.88rem] font-light leading-[1.8] text-white/30">
          {item.body}
        </p>
      </div>
    </div>
  );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────
export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".wu-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wu-in");
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
        .wu-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.85s cubic-bezier(.16,1,.3,1),
                      transform 0.85s cubic-bezier(.16,1,.3,1);
        }
        .wu-in  { opacity: 1; transform: translateY(0); }
        .wu-d0  { transition-delay: 0.00s; }
        .wu-d1  { transition-delay: 0.10s; }
        .wu-d2  { transition-delay: 0.20s; }
        .wu-d3  { transition-delay: 0.30s; }
        .wu-d4  { transition-delay: 0.40s; }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-[#111111] border-t border-white/[0.06] px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32"
      >
        {/* ── Header ── */}
        <div className="wu-animate wu-d0 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-xl">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2
              className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
            >
              The Mwandi's<br />
              <span className="italic text-white/60">Promise.</span>
            </h2>
          </div>

          {/* Right — supporting statement */}
          <p className="font-['DM_Sans',sans-serif] text-[0.88rem] font-light text-white/25 max-w-[280px] leading-[1.85] hidden md:block">
            Every decision we make — from sourcing to delivery — is built around one thing: your trust.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {whyUs.map((item, i) => (
            <div
              key={item.num}
              className={`wu-animate wu-d${i + 1} bg-[#111111]`}
            >
              <PromiseCard item={item} index={i} />
            </div>
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <div className="wu-animate wu-d4 mt-12 md:mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-['DM_Sans',sans-serif] text-[0.6rem] font-semibold tracking-[0.24em] uppercase text-white/15">
            Trusted by hundreds of customers across Nairobi
          </p>
          {/* Five star row */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-3 h-3 text-white/20 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
            <span className="ml-2 font-['DM_Sans',sans-serif] text-[0.58rem] font-semibold tracking-[0.16em] uppercase text-white/15">
              5.0
            </span>
          </div>
        </div>
      </section>
    </>
  );
}