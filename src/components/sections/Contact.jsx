import { useEffect, useRef, useState } from "react";
import { WHATSAPP } from "../../constants";

// ─── SECTION LABEL ────────────────────────────────────────────────────────────
function SectionLabel({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
      <span className="block w-7 h-px bg-white/30 flex-shrink-0" />
      <span className="font-['DM_Sans',sans-serif] text-[0.62rem] font-bold tracking-[0.28em] uppercase text-white/35">
        {children}
      </span>
    </div>
  );
}

// ─── FORM INPUT ───────────────────────────────────────────────────────────────
function FormField({ label, id, type = "text", placeholder, required = true, as = "input", rows = 4 }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/30"
      >
        {label} {required && <span className="text-white/20">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          placeholder={placeholder}
          required={required}
          className="
            w-full bg-[#181818] border border-white/[0.07]
            text-[#F5F0EB] text-[0.88rem] font-['DM_Sans',sans-serif] font-light
            px-4 py-3.5 outline-none resize-none
            placeholder:text-white/15
            focus:border-white/30
            transition-colors duration-200
          "
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="
            w-full bg-[#181818] border border-white/[0.07]
            text-[#F5F0EB] text-[0.88rem] font-['DM_Sans',sans-serif] font-light
            px-4 py-3.5 outline-none
            placeholder:text-white/15
            focus:border-white/30
            transition-colors duration-200
          "
        />
      )}
    </div>
  );
}

// ─── CONTACT INFO ROW ─────────────────────────────────────────────────────────
function InfoRow({ label, value, href }) {
  return (
    <div className="flex flex-col gap-1.5 py-5 border-b border-white/[0.06]">
      <span className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.24em] uppercase text-white/25">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="font-['DM_Sans',sans-serif] text-[0.95rem] font-medium text-white/60 hover:text-white transition-colors duration-200"
        >
          {value}
        </a>
      ) : (
        <span className="font-['DM_Sans',sans-serif] text-[0.95rem] font-medium text-white/60">
          {value}
        </span>
      )}
    </div>
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
        w-10 h-10 flex items-center justify-center
        border border-white/[0.08] bg-[#181818]
        font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-wider
        text-white/25 uppercase
        hover:border-white/30 hover:text-white
        transition-all duration-200
      "
    >
      {label}
    </a>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export default function Contact() {
  const sectionRef = useRef(null);
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error
  const [formData, setFormData] = useState({
    name: "", phone: "", sneaker: "", message: "",
  });

  // IntersectionObserver fade-up
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".co-animate");
    if (!els || els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("co-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Sends message to your Resend serverless function at /api/contact
  // Swap this out for your actual endpoint when ready
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", phone: "", sneaker: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <style>{`
        .co-animate {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1),
                      transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .co-in  { opacity: 1; transform: translateY(0); }
        .co-d0  { transition-delay: 0.00s; }
        .co-d1  { transition-delay: 0.12s; }
        .co-d2  { transition-delay: 0.22s; }
        .co-d3  { transition-delay: 0.32s; }
        .co-d4  { transition-delay: 0.42s; }
        .co-d5  { transition-delay: 0.52s; }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="bg-[#111111] border-t border-white/[0.06] px-5 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32"
      >
        {/* ── Section header ── */}
        <div className="co-animate co-d0 mb-14 md:mb-20 max-w-xl">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2
            className="font-['Playfair_Display',serif] font-black text-white leading-[0.92] tracking-tight mb-4"
            style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
          >
            Find Your<br />
            <span className="italic text-white/50">Next Pair.</span>
          </h2>
          <p className="font-['DM_Sans',sans-serif] font-light text-white/30 text-[0.9rem] leading-[1.85]">
            Hit us on WhatsApp for the fastest response, or fill in the form — we get back to you within the hour.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — contact info ── */}
          <div className="co-animate co-d1 flex flex-col">

            {/* Info rows */}
            <div className="border-t border-white/[0.06]">
              <InfoRow label="Location"         value="Thika Road, Nairobi, Kenya" />
              <InfoRow
                label="Phone / WhatsApp"
                value="+254 718 525 592"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Mwandi! I'd like to enquire about your sneakers.")}`}
              />
              <InfoRow
                label="Email"
                value="hello@mwandisneakers.co.ke"
                href="mailto:hello@mwandisneakers.co.ke"
              />
              <InfoRow label="Hours" value="Mon – Sat · 8 am – 8 pm" />
            </div>

            {/* Socials */}
            <div className="mt-8">
              <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-bold tracking-[0.24em] uppercase text-white/25 mb-4">
                Follow Us
              </p>
              <div className="flex gap-2.5">
                <SocialBtn label="IG" href="#" />
                <SocialBtn label="TK" href="#" />
                <SocialBtn label="WA" href={`https://wa.me/${WHATSAPP}`} />
                <SocialBtn label="TW" href="#" />
              </div>
            </div>

            {/* WhatsApp direct CTA */}
            <div className="mt-10 pt-10 border-t border-white/[0.06]">
              <p className="font-['DM_Sans',sans-serif] text-[0.78rem] font-light text-white/25 leading-[1.8] mb-5 max-w-[300px]">
                Fastest way to reach us — click below and we'll respond immediately.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi Mwandi! I'd like to enquire about your sneakers.")}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block bg-white text-[#0A0A0A]
                  font-['DM_Sans',sans-serif] text-[0.7rem] font-bold
                  tracking-[0.22em] uppercase px-8 py-4
                  hover:bg-[#F5F0EB] hover:-translate-y-0.5
                  transition-all duration-200
                "
              >
                Open WhatsApp →
              </a>
            </div>
          </div>

          {/* Right — form ── */}
          <div className="co-animate co-d2">
            {status === "success" ? (
              /* Success state */
              <div className="flex flex-col items-start justify-center h-full gap-5 py-12">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['Playfair_Display',serif] text-[1.6rem] font-black text-white leading-tight">
                  Message received.
                </h3>
                <p className="font-['DM_Sans',sans-serif] text-[0.88rem] font-light text-white/35 leading-[1.85] max-w-sm">
                  We'll get back to you within the hour. You can also reach us directly on WhatsApp for a faster response.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 font-['DM_Sans',sans-serif] text-[0.65rem] font-bold tracking-[0.2em] uppercase text-white/30 border-b border-white/15 pb-0.5 hover:text-white hover:border-white/40 transition-all duration-200 bg-transparent border-x-0 border-t-0 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/30">
                      Full Name <span className="text-white/20">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#181818] border border-white/[0.07] text-[#F5F0EB] text-[0.88rem] font-['DM_Sans',sans-serif] font-light px-4 py-3.5 outline-none placeholder:text-white/15 focus:border-white/30 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/30">
                      Phone <span className="text-white/20">*</span>
                    </label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#181818] border border-white/[0.07] text-[#F5F0EB] text-[0.88rem] font-['DM_Sans',sans-serif] font-light px-4 py-3.5 outline-none placeholder:text-white/15 focus:border-white/30 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Sneaker interest */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="sneaker" className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/30">
                    Sneaker You Want
                  </label>
                  <input
                    id="sneaker" name="sneaker" type="text"
                    placeholder="e.g. Jordan 1, Yeezy 350, Dunk Low..."
                    value={formData.sneaker}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-white/[0.07] text-[#F5F0EB] text-[0.88rem] font-['DM_Sans',sans-serif] font-light px-4 py-3.5 outline-none placeholder:text-white/15 focus:border-white/30 transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-['DM_Sans',sans-serif] text-[0.6rem] font-bold tracking-[0.22em] uppercase text-white/30">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Ask about sizing, availability, custom orders..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#181818] border border-white/[0.07] text-[#F5F0EB] text-[0.88rem] font-['DM_Sans',sans-serif] font-light px-4 py-3.5 outline-none resize-none placeholder:text-white/15 focus:border-white/30 transition-colors duration-200"
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <p className="font-['DM_Sans',sans-serif] text-[0.75rem] text-white/40 border-l-2 border-white/20 pl-3">
                    Something went wrong. Try WhatsApp instead — it's faster anyway.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="
                    w-full mt-2 bg-white text-[#0A0A0A]
                    font-['DM_Sans',sans-serif] text-[0.72rem] font-bold
                    tracking-[0.22em] uppercase py-4
                    hover:bg-[#F5F0EB] hover:-translate-y-0.5
                    disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0
                    transition-all duration-200 cursor-pointer border-none
                  "
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>

                {/* Disclaimer */}
                <p className="font-['DM_Sans',sans-serif] text-[0.58rem] font-light text-white/15 text-center leading-relaxed">
                  We don't spam. Your info is only used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}