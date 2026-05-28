import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WHATSAPP, NAV_LINKS } from "../../constants";

// ─── ANNOUNCEMENT BAR ────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div className="bg-white py-2.5 px-6 text-center">
      <p className="font-['DM_Sans',sans-serif] text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#0A0A0A]">
        Free delivery within Nairobi CBD&nbsp;&nbsp;·&nbsp;&nbsp;
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
      <div className="w-7.5 h-7.5 bg-white flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-[#F5F0EB]">
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
function WhatsAppCTA({ fullWidth = false, className = "" }) {
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
        hover:bg-white hover:text-[#0A0A0A] hover:-translate-y-px
        transition-all duration-200 whitespace-nowrap
        ${fullWidth ? "w-full text-center py-4 block" : ""}
        ${className}
      `}
    >
      Contact Us
    </a>
  );
}

// ─── HAMBURGER ───────────────────────────────────────────────────────────────
function Hamburger({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="flex md:hidden flex-col justify-center items-end gap-1.5 w-9 h-9 bg-transparent border-none cursor-pointer p-1 shrink-0"
    >
      <span className="block w-5.5 h-px bg-[#F5F0EB] rounded-full" />
      <span className="block w-3.5 h-px bg-[#F5F0EB] rounded-full" />
      <span className="block w-5.5 h-px bg-[#F5F0EB] rounded-full" />
    </button>
  );
}

// ─── MOBILE DRAWER ───────────────────────────────────────────────────────────
function MobileDrawer({ open, onClose, onNav }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-48 bg-black/80 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer panel */}
      <div
        className={`
          fixed inset-y-0 right-0 z-49
          w-[min(320px,85vw)] bg-[#0A0A0A]
          border-l border-white/10
          flex flex-col overflow-y-auto
          transition-transform duration-380 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-7 h-15.5 border-b border-white/[0.07] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-white flex items-center justify-center shrink-0">
              <span className="font-['Playfair_Display',serif] text-[0.72rem] font-black text-[#0A0A0A] leading-none">
                M
              </span>
            </div>
            <span className="font-['Playfair_Display',serif] text-[0.9rem] font-bold text-white/50 leading-none">
              Mwandi's
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex items-center gap-2 bg-transparent border-none cursor-pointer group"
          >
            <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.2em] uppercase text-white/25 group-hover:text-white/60 transition-colors duration-200">
              Close
            </span>
            <svg className="w-4 h-4 text-white/25 group-hover:text-white/60 transition-colors duration-200"
              fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-7 pt-2 pb-6 border-b border-white/6">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => onNav(id)}
              className="
                bg-transparent border-none border-b border-white/[0.07]
                cursor-pointer py-4.5 text-left
                font-['Playfair_Display',serif] text-[1.3rem] font-bold
                text-white/50 tracking-[0.02em]
                hover:text-white hover:pl-1.5
                transition-all duration-200
              "
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Contact info */}
        <div className="flex flex-col gap-1.5 px-7 pt-7 pb-5">
          <span className="font-['DM_Sans',sans-serif] text-[0.56rem] font-bold tracking-[0.22em] uppercase text-white/25">
            WhatsApp
          </span>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="font-['DM_Sans',sans-serif] text-[0.9rem] font-medium text-white/50 hover:text-white transition-colors duration-200"
          >
            +254 718 525 592
          </a>
        </div>

        {/* CTA */}
        <div className="px-7 pb-4">
          <WhatsAppCTA fullWidth />
        </div>

        {/* Tagline */}
        <p className="mt-auto px-7 pb-8 pt-6 font-['DM_Sans',sans-serif] text-[0.68rem] font-light leading-[1.8] text-white/15">
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

  const navigate = useNavigate();
  const location = useLocation();

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

  // ── Core nav function ──
  // On homepage: smooth scroll to section
  // On any other page: navigate to homepage, then scroll after render
  const scrollTo = useCallback((id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    }
  }, [location.pathname, navigate]);

  // Logo click — go home and scroll to top
  const goHome = useCallback(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  }, [location.pathname, navigate]);

  const handleNav = useCallback((id) => {
    setMenuOpen(false);
    if (id) setTimeout(() => scrollTo(id), 50);
  }, [scrollTo]);

  const closeDrawer = useCallback(() => setMenuOpen(false), []);

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
        <div className="flex items-center justify-between px-5 md:px-12 h-15.5 max-w-360 mx-auto w-full">
          <Logo onClick={goHome} />
          <DesktopLinks onNav={scrollTo} />
          <div className="hidden md:block">
            <WhatsAppCTA />
          </div>
          {!menuOpen && (
            <Hamburger onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </header>

      {isMobile && (
        <MobileDrawer
          open={menuOpen}
          onClose={closeDrawer}
          onNav={handleNav}
        />
      )}
    </>
  );
}