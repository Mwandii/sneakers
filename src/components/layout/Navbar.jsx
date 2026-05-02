import { useState, useEffect, useCallback } from "react";
import { WHATSAPP, NAV_LINKS } from "../../constants";

// ─── ANNOUNCEMENT BAR ────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div className="bg-white py-2.5 px-6 text-center">
      <p className="font-['DM_Sans',sans-serif] text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#0A0A0A]">
        Free delivery within Nairobi and its environs&nbsp;&nbsp;·&nbsp;&nbsp;
        100% Authentic Guaranteed
      </p>
    </div>
  );
}

// ─── LOGO ────────────────────────────────────────────────────────────────────
function Logo({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Go to top"
      className="flex items-center gap-2.5 p-0 bg-transparent border-none cursor-pointer group"
    >
      <div className="w-[30px] h-[30px] bg-white flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#F5F0EB]">
        <span className="font-['Playfair_Display',serif] text-[0.85rem] font-extrabold text-[#0A0A0A] leading-none select-none">
          M
        </span>
      </div>
      <span className="font-['Playfair_Display',serif] text-[1.1rem] font-bold tracking-wider text-[#F5F0EB] leading-none whitespace-nowrap hidden sm:inline">
        Mwandi's <span className="text-white font-black">Sneakers</span>
      </span>
    </button>
  );
}

// ─── DESKTOP NAV LINKS ───────────────────────────────────────────────────────
function DesktopLinks({ onNav }) {
  return (
    <ul className="hidden md:flex gap-8 list-none m-0 p-0">
      {NAV_LINKS.map(({ label, id }) => (
        <li key={id}>
          <button
            onClick={() => onNav(id)}
            className="
              relative bg-transparent border-none cursor-pointer pb-1
              font-['DM_Sans',sans-serif] text-[0.75rem] font-medium
              tracking-[0.14em] uppercase text-white/40
              hover:text-white transition-colors duration-200
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0
              after:h-px after:bg-white
              after:scale-x-0 after:origin-left
              after:transition-transform after:duration-250
              hover:after:scale-x-100
            "
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

// ─── WHATSAPP CTA ────────────────────────────────────────────────────────────
function WhatsAppCTA({ className = "", fullWidth = false }) {
  const href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi Mwandi! I'd like to enquire about your sneakers."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`
        inline-block border border-white text-white bg-transparent
        font-['DM_Sans',sans-serif] text-[0.68rem] font-bold
        tracking-[0.18em] uppercase px-5 py-2.5
        hover:bg-white hover:text-[#0A0A0A]
        hover:-translate-y-px
        transition-all duration-200 whitespace-nowrap
        ${fullWidth ? "w-full text-center py-3.5 block" : ""}
        ${className}
      `}
    >
      WhatsApp Us
    </a>
  );
}

// ─── HAMBURGER ───────────────────────────────────────────────────────────────
function Hamburger({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex md:hidden flex-col justify-center items-end gap-1.5 w-9 h-9 bg-transparent border-none cursor-pointer p-1"
    >
      <span
        className={`block h-px bg-[#F5F0EB] rounded-full transition-all duration-300 ease-in-out origin-center ${
          open ? "w-[22px] rotate-45 translate-y-[7px]" : "w-[22px]"
        }`}
      />
      <span
        className={`block h-px bg-[#F5F0EB] rounded-full transition-all duration-300 ease-in-out ${
          open ? "opacity-0 w-0" : "opacity-100 w-[14px]"
        }`}
      />
      <span
        className={`block h-px bg-[#F5F0EB] rounded-full transition-all duration-300 ease-in-out origin-center ${
          open ? "w-[22px] -rotate-45 -translate-y-[7px]" : "w-[22px]"
        }`}
      />
    </button>
  );
}

// ─── MOBILE DRAWER ───────────────────────────────────────────────────────────
function MobileDrawer({ open, onNav }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => onNav(null)}
        className={`
          fixed inset-0 z-[38] bg-black/80 backdrop-blur-sm
          transition-opacity duration-350
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer panel */}
      <div
        className={`
          fixed top-0 right-0 bottom-0 z-[39]
          w-[min(320px,85vw)] bg-[#0A0A0A]
          border-l border-white/10
          flex flex-col
          pt-[88px] pb-12 px-9
          overflow-y-auto
          transition-transform duration-400 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close label */}
        <button
          onClick={() => onNav(null)}
          className="absolute top-6 right-6 bg-transparent border-none cursor-pointer font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/25 hover:text-white transition-colors duration-200"
        >
          Close
        </button>

        {/* Nav links */}
        <nav className="flex flex-col mb-10 border-t border-white/10">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => onNav(id)}
              className="
                bg-transparent border-none border-b border-white/10
                cursor-pointer py-[18px] text-left
                font-['Playfair_Display',serif] text-[1.35rem] font-bold
                text-white/50 tracking-[0.02em]
                hover:text-white hover:pl-1.5
                transition-all duration-200
              "
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-9" />

        {/* Contact info */}
        <div className="flex flex-col gap-1.5 mb-8">
          <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.2em] uppercase text-white/40">
            WhatsApp
          </span>
          <span className="font-['DM_Sans',sans-serif] text-[0.9rem] font-medium text-white/60">
            +254 718 525 592
          </span>
        </div>

        {/* CTA */}
        <WhatsAppCTA fullWidth />

        {/* Tagline */}
        <p className="mt-auto pt-10 font-['DM_Sans',sans-serif] text-[0.72rem] font-light leading-[1.7] text-white/15">
          Nairobi's most trusted sneaker destination. Authentic kicks, real service.
        </p>
      </div>
    </>
  );
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNav = useCallback((id) => {
    setMenuOpen(false);
    if (id) setTimeout(() => scrollTo(id), 50);
  }, []);

  return (
    <>
      <AnnouncementBar />

      <header
        className={`
          sticky top-0 z-40 border-b
          transition-all duration-300
          ${scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.8)]"
            : "bg-[#0A0A0A] border-white/6"
          }
        `}
      >
        <div className="flex items-center justify-between px-5 md:px-12 h-15.5 max-w-[1440px] mx-auto w-full">
          <Logo onClick={() => scrollTo("hero")} />
          <DesktopLinks onNav={scrollTo} />
          <div className="hidden md:block">
            <WhatsAppCTA />
          </div>
          <Hamburger open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
        </div>
      </header>

      {isMobile && <MobileDrawer open={menuOpen} onNav={handleNav} />}
    </>
  );
}