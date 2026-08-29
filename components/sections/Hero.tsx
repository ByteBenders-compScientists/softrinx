/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight, ArrowRight, Star } from "lucide-react";

// ─── Background video ───────────────────────────────────────────────────────
function BackgroundVideo() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero2-poster.jpg"
      >
        <source src="/images/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.75) 100%)",
        }}
      />
    </div>
  );
}

// ─── Google "G" mark ────────────────────────────────────────────────────────
function GoogleIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.7 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.5 0 10.5-2.1 14.3-5.5l-6.6-5.6C29.6 34.9 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.3 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.6C41.7 36.2 44 30.6 44 24c0-1.3-.1-2.7-.4-3.5z"/>
    </svg>
  );
}

// ─── Cycling word ─────────────────────────────────────────────────────────
const WORDS = ["Build.", "Ship.", "Scale.", "Deliver."];
function CyclingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block overflow-hidden" style={{ verticalAlign: "bottom", height: "1.05em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          className="block whitespace-nowrap"
          style={{ color: "var(--color-emerald)" }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── Hero Section with Clean Curved Bottom Edge (Numbers Removed) ───────────
export function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "#050505",
        // Clean bottom-left and bottom-right corner rounding for mobile and desktop
    
        paddingBottom: "100px",
      }}
    >
      <BackgroundVideo />

      {/* Hero Core Content */}
      <div
        className="relative z-10 flex flex-col justify-center flex-1 gap-16 lg:gap-20 px-6 sm:px-10 lg:px-16 mx-auto w-full"
        style={{ maxWidth: "1600px", paddingTop: "160px" }}
      >
        {/* Top-left block */}
        <div className="flex flex-col items-start text-left">
        

          <motion.h1
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.32, 0.72, 0, 1] }}
            style={{
              fontSize: "clamp(2.6rem, 7vw, 6.8rem)",
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              color: "#fff",
            }}
          >
            <span className="block">We <CyclingWord /></span>
            <span className="block">Software.</span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-3 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {["Google"].map((name) => (
              <div key={name} className="flex items-center gap-2 px-3 py-1.5 backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "9999px" }}>
                <GoogleIcon size={14} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff" }}>{name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={9} style={{ color: "#facc15", fill: "#facc15" }} />
                  ))}
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>5.0</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Description + CTA buttons */}
        <div className="flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.36 }}
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.72)",
              maxWidth: "32rem",
            }}
          >
            No bloated timelines, no cookie-cutter templates. We design, build,
            and ship web platforms, mobile apps, and AI-powered products that
            hold up under real users — fast enough to launch this quarter,
            solid enough to scale for years.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 mt-7"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-bold transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
              style={{
                background: "var(--color-emerald)", color: "#040805",
                padding: "1rem 2.1rem", fontSize: "clamp(0.9rem, 1.15vw, 1rem)",
                boxShadow: "0 0 28px var(--color-emerald-glow)",
                borderRadius: "9999px",
              }}
            >
              Get A Quote
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group backdrop-blur-md"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.16)",
                padding: "1rem 2.1rem",
                fontSize: "clamp(0.9rem, 1.15vw, 1rem)",
                borderRadius: "9999px",
              }}
            >
              View Work
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;