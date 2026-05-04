import { useEffect, useRef } from "react";
import { WHATSAPP, IMAGES } from "../../constants";

// ─── STATS ───────────────────────────────────────────────────────────────────
const STATS = [
  { num: "500+", label: "Pairs Sold" },
  { num: "100%", label: "Authentic"  },
  { num: "48hr", label: "Delivery"   },
  { num: "5 ★",  label: "Rated"      },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef(null);

  // Staggered fade-up via IntersectionObserver — no library needed
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".hu");
    if (!els) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hu-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        /* ── Fade-up animation ── */
        .hu {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1),
                      transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .hu-in  { opacity: 1; transform: translateY(0); }
        .hu-d1  { transition-delay: 0.08s; }
        .hu-d2  { transition-delay: 0.20s; }
        .hu-d3  { transition-delay: 0.32s; }
        .hu-d4  { transition-delay: 0.44s; }
        .hu-d5  { transition-delay: 0.58s; }
        .hu-d6  { transition-delay: 0.70s; }

        /* ── Slow Ken-Burns on bg image ── */
        @keyframes ken-burns {
          from { transform: scale(1);    }
          to   { transform: scale(1.06); }
        }
        .hero-img {
          animation: ken-burns 16s ease-in-out infinite alternate;
        }

        /* ── Scroll indicator pulse ── */
        @keyframes scroll-drop {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 0;   }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0;   }
        }
        .scroll-drop {
          animation: scroll-drop 2.4s cubic-bezier(.4,0,.6,1) infinite;
        }

        /* ── Subtle horizontal scan line on headline ── */
        @keyframes scan {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .headline-scan {
          background: linear-gradient(
            105deg,
            #ffffff 0%,
            #ffffff 40%,
            rgba(255,255,255,0.55) 50%,
            #ffffff 60%,
            #ffffff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: scan 6s linear infinite;
          animation-play-state: paused;
        }
        .hu-in .headline-scan {
          animation-play-state: running;
        }
      `}</style>

      <section
        id="hero"
        ref={sectionRef}
        className="relative min-h-[92vh] flex items-center py-6 md:py-10 overflow-hidden bg-[#0A0A0A]"
      >

        {/* ── Background image ─────────────────────────────────────── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={IMAGES.heroBg}
            alt=""
            className="hero-img w-full h-full object-cover object-center opacity-[0.74]"
          />
          {/* Directional fades */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/88 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
        </div>

        {/* ── Left accent line ─────────────────────────────────────── */}
        <div className="absolute left-0 top-[12%] bottom-[12%] w-px z-10 bg-linear-to-b from-transparent via-white/25 to-transparent" />

        {/* ── Content ──────────────────────────────────────────────── */}
        <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-20 max-w-245">

          {/* Eyebrow */}
          <div className="hu hu-d1 flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-white/30 shrink-0" />
            <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-bold tracking-[0.3em] uppercase text-white/40">
              New Season Drop — 2025
            </span>
          </div>

          {/* Headline */}
          <h1 className="hu hu-d2 mb-3" style={{ fontSize: "clamp(3.8rem, 10vw, 9.5rem)" }}>
            <span className="headline-scan font-['Playfair_Display',serif] font-black leading-[0.88] tracking-tight block">
              Step Into
            </span>
            <span className="font-['Playfair_Display',serif] font-black leading-[0.88] tracking-tight text-white/90 italic block">
              Greatness.
            </span>
          </h1>

          {/* Editorial sub-line */}
          <div className="hu hu-d3 flex items-center gap-4 mb-7">
            <div className="h-px bg-white/10 w-16 shrink-0" />
            <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-semibold tracking-[0.28em] uppercase text-white/20">
              Est. Nairobi · Premium Footwear
            </span>
          </div>

          {/* Body */}
          <p className="hu hu-d3 font-['DM_Sans',sans-serif] font-light text-white/35 leading-[1.9] max-w-100 mb-10 text-[0.95rem] md:text-base">
            Nairobi's most trusted sneaker destination. Authentic, exclusive, and delivered to your door in 48 hours.
          </p>

          {/* CTAs */}
          <div className="hu hu-d4 flex flex-wrap gap-4 mb-16">
            {/* Primary */}
            <button
              onClick={() => scrollTo("new-arrivals")}
              className="
                bg-white text-[#0A0A0A]
                font-['DM_Sans',sans-serif] text-[0.72rem] font-bold
                tracking-[0.22em] uppercase px-10 py-4
                hover:bg-[#F5F0EB] hover:-translate-y-0.5
                transition-all duration-200 cursor-pointer border-none
              "
            >
              Shop Collection
            </button>

            {/* Secondary */}
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Mwandi! I'd like to enquire about your sneakers.")}`}
              target="_blank"
              rel="noreferrer"
              className="
                bg-transparent text-white
                font-['DM_Sans',sans-serif] text-[0.72rem] font-medium
                tracking-[0.22em] uppercase px-10 py-4
                border border-white/20
                hover:border-white/70 hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div className="hu hu-d5 flex flex-wrap gap-0 border-t border-white/[0.07]">
            {STATS.map(({ num, label }, i) => (
              <div
                key={label}
                className={`
                  flex flex-col gap-1 pt-6 pr-10
                  ${i !== 0 ? "pl-10 border-l border-white/[0.07]" : ""}
                `}
              >
                <span
                  className="font-['Playfair_Display',serif] font-black text-white leading-none"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                >
                  {num}
                </span>
                <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-white/25">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom-left editorial stamp ───────────────────────────── */}
        <div className="hu hu-d6 absolute bottom-8 left-8 sm:left-12 md:left-16 lg:left-20 z-10">
          <p className="font-['DM_Sans',sans-serif] text-[0.52rem] font-semibold tracking-[0.26em] uppercase text-white/12">
            Authentic · Exclusive · Nairobi
          </p>
        </div>

        {/* ── Scroll hint ───────────────────────────────────────────── */}
        <div className="absolute bottom-8 right-8 md:right-14 z-10 flex flex-col items-center gap-2">
          <span
            className="font-['DM_Sans',sans-serif] text-[0.5rem] tracking-[0.26em] uppercase text-white/18"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 bg-white/8 overflow-hidden relative">
            <div className="absolute inset-0 bg-white scroll-drop" />
          </div>
        </div>

      </section>
    </>
  );
}