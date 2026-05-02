import { useEffect, useRef } from "react";
import { WHATSAPP, IMAGES } from "../../constants";

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

// ─── STAT BLOCK ───────────────────────────────────────────────────────────────
function StatBlock({ num, label }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="font-['Playfair_Display',serif] font-black text-white leading-none"
        style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
      >
        {num}
      </span>
      <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/25">
        {label}
      </span>
    </div>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export default function About() {
  const sectionRef  = useRef(null);
  const imageRef    = useRef(null);

  // Fade-up for text elements
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".ab-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ab-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Subtle parallax on scroll for the image
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const onScroll = () => {
      const rect = img.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const offset = (progress - 0.5) * 40; // max 20px shift up/down
      img.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .ab-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1),
                      transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .ab-in  { opacity: 1; transform: translateY(0); }
        .ab-d0  { transition-delay: 0.00s; }
        .ab-d1  { transition-delay: 0.12s; }
        .ab-d2  { transition-delay: 0.24s; }
        .ab-d3  { transition-delay: 0.36s; }
        .ab-d4  { transition-delay: 0.48s; }
        .ab-d5  { transition-delay: 0.60s; }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="bg-[#0A0A0A] border-t border-white/[0.06]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

          {/* ── Image column ─────────────────────────────────────────── */}
          <div className="relative overflow-hidden bg-[#111111] min-h-[400px] lg:min-h-0">
            <img
              ref={imageRef}
              src={IMAGES.about}
              alt="Sneaker shelf at Mwandi's"
              className="absolute inset-0 w-full h-[115%] object-cover opacity-70 will-change-transform"
              style={{ top: "-7.5%" }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent lg:hidden" />

            {/* Floating stat card */}
            <div className="absolute bottom-8 left-8 bg-[#0A0A0A] border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-end gap-2 mb-1">
                <span className="font-['Playfair_Display',serif] font-black text-white leading-none"
                  style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                  5+
                </span>
              </div>
              <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.2em] uppercase text-white/30">
                Years in the game
              </p>
            </div>

            {/* Corner accent line — decorative */}
            <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="absolute top-0 left-0 w-24 h-px bg-gradient-to-r from-white/20 to-transparent" />
          </div>

          {/* ── Text column ──────────────────────────────────────────── */}
          <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 py-20 md:py-28 bg-[#0A0A0A]">

            <div className="ab-animate ab-d0">
              <SectionLabel>Our Story</SectionLabel>
            </div>

            <h2
              className="ab-animate ab-d1 font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: "clamp(2.4rem, 3.5vw, 3.8rem)" }}
            >
              Nairobi's Premier<br />
              <span className="italic text-white/50">Sneaker Spot.</span>
            </h2>

            <p className="ab-animate ab-d2 font-['DM_Sans',sans-serif] font-light text-white/35 leading-[1.9] text-[0.93rem] mb-5">
              Born from a genuine love for sneaker culture, Mwandi's Sneakers Place started right here in Nairobi. We built this for the collector who refuses to settle, and the everyday wearer who knows quality when they see it.
            </p>

            <p className="ab-animate ab-d3 font-['DM_Sans',sans-serif] font-light text-white/35 leading-[1.9] text-[0.93rem] mb-12">
              Every pair is sourced from trusted suppliers, verified authentic, and delivered with care. No middlemen, no inflated prices — just clean kicks, straight to you.
            </p>

            {/* Stats row */}
            <div className="ab-animate ab-d4 flex flex-wrap gap-8 mb-12 pb-12 border-b border-white/[0.07]">
              <StatBlock num="500+"  label="Pairs Sold"       />
              <StatBlock num="100%"  label="Authentic"        />
              <StatBlock num="48hr"  label="Avg. Delivery"    />
            </div>

            {/* CTA */}
            <div className="ab-animate ab-d5 flex flex-wrap items-center gap-5">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi Mwandi! Tell me more about your sneaker collection."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="
                  bg-white text-[#0A0A0A]
                  font-['DM_Sans',sans-serif] text-[0.72rem] font-bold
                  tracking-[0.22em] uppercase px-9 py-4
                  hover:bg-[#F5F0EB] hover:-translate-y-0.5
                  transition-all duration-200
                "
              >
                Chat With Us
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Hi! Can you show me your full sneaker collection?"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="
                  font-['DM_Sans',sans-serif] text-[0.68rem] font-semibold
                  tracking-[0.2em] uppercase text-white/30
                  border-b border-white/15 pb-0.5
                  hover:text-white hover:border-white/50
                  transition-all duration-200
                "
              >
                Browse Collection →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}