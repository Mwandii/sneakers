import { useEffect, useRef } from "react";
import { WHATSAPP, IMAGES } from "../../constants";

// ─── SECTION LABEL ───────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="block w-7 h-px bg-[#E8854A] shrink-0" />
      <span className="font-['DM_Sans',sans-serif] text-[0.68rem] font-bold tracking-[0.22em] uppercase text-[#E8854A]">
        {children}
      </span>
    </div>
  );
}

// ─── STATS ───────────────────────────────────────────────────────────────────
const STATS = [
  { num: "500+", label: "Pairs Sold"  },
  { num: "100%", label: "Authentic"   },
  { num: "48hr", label: "Delivery"    },
  { num: "5 ★",  label: "Rated"       },
];

// ─── HERO ────────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef(null);

  // Trigger CSS animations on mount via IntersectionObserver
  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".hero-animate");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hero-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── keyframes injected once ── */}
      <style>{`
        .hero-animate {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .hero-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.10s; }
        .delay-2 { transition-delay: 0.22s; }
        .delay-3 { transition-delay: 0.34s; }
        .delay-4 { transition-delay: 0.46s; }
        .delay-5 { transition-delay: 0.58s; }

        @keyframes scroll-line {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
        }
        .scroll-line-anim {
          animation: scroll-line 2s ease-in-out infinite;
        }
      `}</style>

      <section
        id="hero"
        ref={sectionRef}
        className="relative min-h-[91vh] flex items-center overflow-hidden bg-[#0F0E0D] md:py-12"
      >
        {/* ── Background image ── */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBg}
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.18]"
          />
          {/* Left-to-right fade */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0F0E0D] via-[#0F0E0D]/85 to-[#0F0E0D]/20" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0F0E0D] via-transparent to-transparent" />
        </div>

        {/* ── Left amber accent line ── */}
        <div className="absolute left-0 top-[10%] bottom-[10%] w-0.75 z-10 bg-linear-to-b from-transparent via-[#E8854A] to-transparent" />

        {/* ── Main content ── */}
        <div className="relative z-10 w-full px-8 md:px-16 max-w-225">

          {/* Label */}
          <div className="hero-animate delay-1">
            <SectionLabel>New Season Drop — 2025</SectionLabel>
          </div>

          {/* Headline */}
          <h1
            className="hero-animate delay-2 font-['Playfair_Display',serif] font-black text-[#F0EAE0] leading-[0.88] mb-6 tracking-tight"
            style={{ fontSize: "clamp(4rem, 10vw, 9rem)" }}
          >
            Step Into
            <br />
            <em className="text-[#E8854A] italic" style={{ fontStyle: "italic" }}>
              Greatness.
            </em>
          </h1>

          {/* Body copy */}
          <p className="hero-animate delay-3 font-['DM_Sans',sans-serif] font-light text-[#7A7068] leading-[1.8] max-w-105 mb-10 text-base md:text-lg">
            Nairobi's most trusted sneaker destination. Authentic, exclusive, and delivered to your door in 48 hours.
          </p>

          {/* CTAs */}
          <div className="hero-animate delay-4 flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("new-arrivals")}
              className="
                bg-[#E8854A] text-[#0F0E0D]
                font-['DM_Sans',sans-serif] text-sm font-bold
                tracking-[0.18em] uppercase px-10 py-4
                hover:bg-[#d4733a] hover:-translate-y-0.5
                transition-all duration-200 cursor-pointer border-none
              "
            >
              Shop Collection
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="
                bg-transparent text-[#F0EAE0]
                font-['DM_Sans',sans-serif] text-sm font-semibold
                tracking-[0.18em] uppercase px-10 py-4
                border border-white/10
                hover:border-[#E8854A] hover:text-[#E8854A] hover:-translate-y-0.5
                transition-all duration-200 cursor-pointer
              "
            >
              Our Story
            </button>
          </div>

          {/* Stats */}
          <div
            className="hero-animate delay-5 flex flex-wrap gap-8 md:gap-10 pt-8 border-t border-white/[0.07]"
          >
            {STATS.map(({ num, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span
                  className="font-['Playfair_Display',serif] font-extrabold text-[#E8854A] leading-none"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  {num}
                </span>
                <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-semibold tracking-[0.16em] uppercase text-[#4A4440] leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div className="absolute bottom-10 right-10 md:right-14 z-10 flex flex-col items-center gap-2">
          <span
            className="font-['DM_Sans',sans-serif] text-[0.56rem] tracking-[0.22em] uppercase text-[#3A3430]"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 overflow-hidden">
            <div className="w-full h-full bg-[#3A3430] scroll-line-anim" />
          </div>
        </div>
      </section>
    </>
  );
}