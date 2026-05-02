import { useRef, useEffect } from "react";
import { marqueeItems } from "../../constants";

// ─── MARQUEE ──────────────────────────────────────────────────────────────────
export default function Marquee() {
  const trackRef = useRef(null);

  // Pause on hover — pure DOM, no state re-render
  const pause  = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused";  };
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; };

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
        className="relative overflow-hidden bg-[#111111] border-y border-white/[0.06] select-none"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Left + right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#111111] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#111111] to-transparent" />

        {/* Track — duplicated so it loops seamlessly */}
        <div
          ref={trackRef}
          className="marquee-track flex whitespace-nowrap py-4"
        >
          {/* Render twice for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 px-8"
            >
              {/* Text */}
              <span className="font-['DM_Sans',sans-serif] text-[0.68rem] font-semibold tracking-[0.28em] uppercase text-white/25 whitespace-nowrap">
                {item}
              </span>

              {/* Dot separator */}
              <span className="w-[3px] h-[3px] rounded-full bg-white/20 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}