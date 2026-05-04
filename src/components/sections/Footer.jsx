import { useEffect, useRef } from "react";
import { WHATSAPP, NAV_LINKS } from "../../constants";

// ─── FOOTER LINK ──────────────────────────────────────────────────────────────
function FooterNavLink({ label, id, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      className="
        block bg-transparent border-none cursor-pointer text-left
        font-['DM_Sans',sans-serif] text-[0.82rem] font-light
        text-white/25 hover:text-white/70
        transition-colors duration-200
      "
    >
      {label}
    </button>
  );
}

// ─── SOCIAL BUTTON ────────────────────────────────────────────────────────────
function SocialBtn({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        w-9 h-9 flex items-center justify-center
        border border-white/[0.08]
        font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-wider
        text-white/20 uppercase
        hover:border-white/30 hover:text-white/60
        transition-all duration-200
      "
    >
      {label}
    </a>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const els = footerRef.current?.querySelectorAll(".fo-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fo-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .fo-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1),
                      transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .fo-in  { opacity: 1; transform: translateY(0); }
        .fo-d0  { transition-delay: 0.00s; }
        .fo-d1  { transition-delay: 0.10s; }
        .fo-d2  { transition-delay: 0.20s; }
        .fo-d3  { transition-delay: 0.30s; }
        .fo-d4  { transition-delay: 0.40s; }

        @keyframes marquee-footer {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .footer-ticker {
          animation: marquee-footer 20s linear infinite;
          will-change: transform;
        }
      `}</style>

      <footer
        ref={footerRef}
        className="bg-[#0A0A0A] border-t border-white/[0.06]"
      >
        {/* ── Large editorial headline ticker ──────────────────────── */}
        <div className="overflow-hidden border-b border-white/[0.04] py-6 select-none">
          <div className="footer-ticker flex whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-8 px-6"
              >
                <span
                  className="font-['Playfair_Display',serif] font-black text-white/[0.04] whitespace-nowrap italic"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  Mwandi's Sneakers
                </span>
                <span className="w-2 h-2 rounded-full bg-white/[0.04] flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* ── Main footer grid ─────────────────────────────────────── */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16 pt-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Col 1 — Brand ── */}
            <div className="fo-animate fo-d0 lg:col-span-1">
              {/* Logo */}
              <button
                onClick={() => scrollTo("hero")}
                className="flex items-center gap-2.5 mb-5 bg-transparent border-none cursor-pointer group p-0"
              >
                <div className="w-7 h-7 bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5F0EB] transition-colors duration-200">
                  <span className="font-['Playfair_Display',serif] text-[0.78rem] font-black text-[#0A0A0A] leading-none select-none">
                    M
                  </span>
                </div>
                <span className="font-['Playfair_Display',serif] text-[1rem] font-bold tracking-[0.05em] text-white/70 leading-none">
                  Mwandi's <span className="text-white font-black">Sneakers</span>
                </span>
              </button>

              <p className="font-['DM_Sans',sans-serif] text-[0.82rem] font-light text-white/20 leading-[1.85] max-w-[220px]">
                Nairobi's most trusted sneaker destination. Authentic kicks, real service.
              </p>

              {/* Socials */}
              <div className="flex gap-2 mt-8">
                <SocialBtn label="IG" href="#" />
                <SocialBtn label="TK" href="#" />
                <SocialBtn label="WA" href={`https://wa.me/${WHATSAPP}`} />
                <SocialBtn label="TW" href="#" />
              </div>
            </div>

            {/* Col 2 — Quick links ── */}
            <div className="fo-animate fo-d1">
              <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.26em] uppercase text-white/20 mb-5">
                Navigation
              </p>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map(({ label, id }) => (
                  <FooterNavLink key={id} label={label} id={id} onClick={scrollTo} />
                ))}
              </div>
            </div>

            {/* Col 3 — Info ── */}
            <div className="fo-animate fo-d2">
              <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.26em] uppercase text-white/20 mb-5">
                Contact
              </p>
              <div className="flex flex-col gap-4">
                {[
                  ["Thika Road, Nairobi, Kenya"],
                  ["+254 718 525 592", `https://wa.me/${WHATSAPP}`],
                  ["hello@mwandisneakers.co.ke", "mailto:hello@mwandisneakers.co.ke"],
                  ["Mon – Sat · 8 am – 8 pm"],
                ].map(([text, href], i) => href ? (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-['DM_Sans',sans-serif] text-[0.82rem] font-light text-white/25 hover:text-white/60 transition-colors duration-200"
                  >
                    {text}
                  </a>
                ) : (
                  <span
                    key={i}
                    className="font-['DM_Sans',sans-serif] text-[0.82rem] font-light text-white/25"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Col 4 — CTA ── */}
            <div className="fo-animate fo-d3 flex flex-col gap-5">
              <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.26em] uppercase text-white/20">
                Get In Touch
              </p>
              <p className="font-['DM_Sans',sans-serif] text-[0.82rem] font-light text-white/20 leading-[1.85]">
                The fastest way to reach us is WhatsApp. We're online every day.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Mwandi! I'd like to enquire about your sneakers.")}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block border border-white/20 text-white/50
                  font-['DM_Sans',sans-serif] text-[0.68rem] font-bold
                  tracking-[0.2em] uppercase px-6 py-3.5
                  hover:bg-white hover:text-[#0A0A0A] hover:border-white
                  hover:-translate-y-0.5
                  transition-all duration-200 self-start
                "
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="fo-animate fo-d4 h-px bg-white/[0.06] mb-8" />

          {/* ── Bottom bar ── */}
          <div className="fo-animate fo-d4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-medium tracking-[0.16em] uppercase text-white/15">
              © {year} Mwandi's Sneakers Place · All rights reserved
            </span>

            <div className="flex items-center gap-6">
              <span className="font-['DM_Sans',sans-serif] text-[0.6rem] font-medium tracking-[0.16em] uppercase text-white/15">
                Nairobi, Kenya
              </span>
              {/* Back to top */}
              <button
                onClick={() => scrollTo("hero")}
                className="
                  flex items-center gap-2 bg-transparent border-none cursor-pointer
                  font-['DM_Sans',sans-serif] text-[0.6rem] font-bold
                  tracking-[0.16em] uppercase text-white/15
                  hover:text-white/40 transition-colors duration-200
                "
              >
                Back to top
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}