/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Quote, ArrowRight } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-white shadow-[0_0_10px_white]" : "bg-[var(--color-emerald)] shadow-[0_0_10px_var(--color-emerald)]"}`} />
      <span className={`text-[0.7rem] font-bold tracking-[0.18em] uppercase ${dark ? "text-white" : "text-[var(--color-emerald)]"}`}>
        {text}
      </span>
    </div>
  );
}

// ─── Data: Case Studies (Bento Grid Layout) ───────────────────────────────────
// The grid is 3 columns. Span classes ensure they lock together perfectly.
const CASES = [
  {
    id: "djafro",
    title: "DjAfro Cinema",
    description: "Movie streaming platform and mobile app for local cinema enthusiasts. Built from scratch and shipped to Google Play.",
    image: "/images/afro.png",
    link: "https://djafrocinema.com",
    // Large square: spans 2 cols, 2 rows
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "hmex",
    title: "HealthMaster (HMEX)",
    description: "Healthcare management and practitioner platform with AI risk assessment.",
    image: "/images/hmex2.png", // Or "/images/hmex.png"
    link: "https://hmex.healthmasterco.com/",
    // Small square: spans 1 col, 1 row
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "agrilens",
    title: "AgriLens",
    description: "Helping farmers make smarter, data-driven decisions with computer vision.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    link: "https://agrilens-farmer.vercel.app/",
    // Small square: spans 1 col, 1 row
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "memora",
    title: "Memora Visuals",
    description: "Digital presence and storytelling platform for a high-end creative studio.",
    image: "/images/memora.png", // Or the unsplash equivalent
    link: "https://memoravisuals.com/",
    // Wide rectangle: spans 2 cols, 1 row
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "intellimark",
    title: "IntelliMark",
    description: "AI University Assessment Platform automating grading and analytics.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    link: "https://intellimark.pages.dev/",
    // Tall rectangle: spans 1 col, 2 rows
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "werent",
    title: "WereNtOnline",
    description: "Tourists booking Kenya Coast rentals online with seamless mapping.",
    image: "/images/werent.png",
    link: "https://www.werentonline.com/",
    // Wide rectangle: spans 2 cols, 1 row
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "farmsense",
    title: "FarmSense",
    description: "IoT precision agriculture and dashboard analytics — without the hardware bill.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    link: "https://farm-sense-mu.vercel.app/",
    // Small square: spans 1 col, 1 row
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "explain",
    title: "Explain It to Me",
    description: "AI Text Simplifier Chrome Extension for rapid accessibility.",
    image: "/images/extension.png",
    link: "#",
    // Wide rectangle: spans 2 cols, 1 row
    span: "md:col-span-2 md:row-span-1",
  }
];

// ─── Data: Testimonials ───────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "The streaming architecture they built for us handles massive spikes without a hiccup. Our users love the offline downloads feature.",
    author: "BritechMedia",
    role: "DjAfro Cinema",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "They completely revamped our digital presence. The site is incredibly fast, and the visual hierarchy perfectly showcases our photography.",
    author: "Creative Director",
    role: "Memora Visuals",
    image: "https://images.unsplash.com/photo-1553514029-1318c9127859?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Softrinx brought clarity to complex problems, breaking down barriers and delivering an automated grading system that actually works.",
    author: "University Admin",
    role: "IntelliMark",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "We streamlined our property listings significantly. Clear map integrations and instant booking requests removed all internal confusion.",
    author: "Operations Lead",
    role: "WereNtOnline",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Their insight resolved difficult hurdles, opening new paths for our farmers. The machine learning model is shockingly accurate in the field.",
    author: "Agri Enterprise",
    role: "AgriLens & FarmSense",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── Single Bento Card Component ──────────────────────────────────────────────
function CaseCard({ c, index }: { c: (typeof CASES)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      // On mobile, force a fixed height. On desktop, let the grid auto-rows dictate height.
      className={`group relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] h-[400px] md:h-auto ${c.span}`}
    >
      <Link href={c.link} target={c.link.startsWith("http") ? "_blank" : "_self"} className="block w-full h-full relative z-10">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]">
          <Image
            src={c.image}
            alt={c.title}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          {/* Gradient overlay: gets darker on hover to make text pop */}
          <div className="absolute inset-0 transition-colors duration-700 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 group-hover:from-[#050505] group-hover:via-[#050505]/70" />
        </div>

        {/* Content Layer (Bottom aligned) */}
        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
          <div className="flex items-end justify-between gap-6">
            
            {/* Left: Text */}
            <div className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 transition-transform duration-500 origin-left">
                {c.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 line-clamp-2 max-w-[90%]">
                {c.description}
              </p>
            </div>

            {/* Right: Circular Arrow Button */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
              <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform duration-500 group-hover:rotate-45" />
            </div>

          </div>
        </div>

      </Link>
    </motion.div>
  );
}

// ─── Testimonials Marquee Component ───────────────────────────────────────────
function TestimonialMarquee() {
  // Duplicate the array so the loop is seamless
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="relative flex overflow-hidden py-10">
      {/* Left/Right Edge Fades */}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-20 md:w-40 bg-gradient-to-r from-[var(--color-bg)] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-20 md:w-40 bg-gradient-to-l from-[var(--color-bg)] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-6 md:gap-8 px-4 w-fit"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {duplicatedTestimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="flex flex-col flex-shrink-0 w-[300px] md:w-[380px] rounded-[2rem] overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Top Image Box */}
            <div className="relative w-full h-48 md:h-56 bg-[var(--color-border)]">
              <Image src={t.image} alt={t.author} fill className="object-cover" />
            </div>
            
            {/* Bottom Content Box */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
              <Quote size={32} className="text-[var(--color-emerald)] mb-4" />
              <p className="text-[var(--color-text)] font-medium leading-relaxed mb-8 flex-grow text-sm md:text-base">
                "{t.quote}"
              </p>
              
              <div className="flex flex-col items-end text-right border-t border-[var(--color-border)] pt-4 mt-auto">
                <span className="text-sm font-bold text-[var(--color-text)]">{t.author}</span>
                <span className="text-xs font-semibold text-[var(--color-text-faint)] uppercase tracking-wider mt-1">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });
  
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Navigation />

      {/* ══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "75svh", background: "#050505",
          borderBottomLeftRadius: "clamp(24px, 4vw, 48px)", borderBottomRightRadius: "clamp(24px, 4vw, 48px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "80px", zIndex: 10,
        }}>

        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image src="/images/cta5.jpg" alt="Softrinx engineering" fill priority className="object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.95) 100%)" }} />
        </div>

        <div className="relative z-10 w-full px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px", paddingTop: "140px" }}>
          <div className="flex flex-col items-start max-w-3xl gap-6 text-left">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}>
              <SectionLabel text="Case Studies" dark />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-[clamp(3rem,6.2vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
              <span className="block">Featured</span>
              <span className="block text-[var(--color-emerald)]">Projects.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}
              className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-white/70 max-w-[34rem]">
              Real products. Real users. From Kenya's coast to European markets — these are the platforms we've built, optimized, and shipped.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ══ BENTO GRID ═════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-bg)]">
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px" }}>
          
          <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <SectionLabel text="Selected Work" />
              <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] tracking-tight leading-[1.1]">
                Products we&apos;ve built.<br />
                <span className="text-[var(--color-emerald)]">Systems we own.</span>
              </h2>
            </motion.div>
          </div>

          {/* Grid setup: 1 column on mobile, 3 columns on desktop. Auto-rows keeps the height consistent for spans. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[300px]">
            {CASES.map((c, i) => (
              <CaseCard key={c.id} c={c} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ══ TESTIMONIALS (Photo-Top Marquee) ═══════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-bg)] border-y border-[var(--color-border)] overflow-hidden">
        <div className="px-6 mx-auto lg:px-16 mb-12" style={{ maxWidth: "1400px" }}>
          <div className="text-center flex flex-col items-center">
            <SectionLabel text="Client Feedback" />
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] tracking-tight leading-[1.1]">
              The impact we've made.
            </h2>
          </div>
        </div>

        <TestimonialMarquee />
      </section>

      {/* ══ CTA (Softly Blurred Video) ═════════════════════════════════════════ */}
      <section className="relative p-3 md:p-5 lg:p-6 bg-[var(--color-bg)] pb-20">
        <div ref={ctaRef} className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden min-h-[58vh] flex flex-col justify-end border border-[var(--color-border)] py-16 px-8 lg:px-16">

          <video autoPlay muted loop playsInline className="absolute inset-0 object-cover w-full h-full scale-105" style={{ filter: "blur(4px)" }}>
            <source src="/videos/features-cta.webm" type="video/webm" />
            <source src="/images/cta.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.3) 42%, rgba(5,5,5,0.95) 100%)" }} />

          <motion.div initial={{ opacity: 0, y: 24 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 max-w-2xl">

            <div className="flex items-center gap-3 mb-5 font-bold tracking-[0.2em] text-xs uppercase text-[var(--color-emerald)]">
              <span className="w-1.5 h-1.5 bg-[var(--color-emerald)] shadow-[0_0_10px_var(--color-emerald)] rounded-full" />
              Get Started
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
              Ready to build <br/> your own?
            </h2>

            <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
              Let's talk about your next project. We'll walk you through exactly how we'd approach it — a straight technical scoping conversation, no obligation.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="inline-flex items-center gap-3 font-bold transition-transform hover:-translate-y-1 tracking-[0.1em] text-[0.85rem] uppercase"
                style={{ background: "var(--color-emerald)", color: "#040805", padding: "0.8rem 1rem 0.8rem 1.8rem", borderRadius: "999px" }}>
                Start a Project
                <div style={{ background: "#040805", color: "var(--color-emerald)", padding: "0.5rem", borderRadius: "50%" }}>
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 font-bold transition-colors uppercase tracking-[0.1em] text-[0.85rem]"
                style={{ color: "rgba(255,255,255,0.9)", padding: "1rem 1.5rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.2)" }}>
                View Services <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}