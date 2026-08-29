"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CASES = [
  {
    id: "djafro",
    stack: "(React Native, Node.js, AWS)",
    title: "Djafro Cinema",
    description: "Movie streaming platform and mobile app for local cinema enthusiasts.",
    pills: ["1,000+ Downloads", "Live on Play Store"],
    image: "/images/afro.png",
    link: "https://djafrocinema.com",
    span: "col-span-1 md:col-span-3", // Full width
    aspect: "aspect-[16/10] md:aspect-[21/9]", 
  },
  {
    id: "hmex",
    stack: "(Next.js, Supabase, Tailwind)",
    title: "HealthMaster (HMEX)",
    description: "Healthcare management and practitioner platform.",
    pills: ["Active Beta", "Real Users Onboarded"],
    image: "/images/hmex2.png",
    link: "https://hmex.healthmasterco.com/",
    span: "col-span-1 md:col-span-1", // 1/3 width (keeps height reasonable)
    aspect: "aspect-[4/3] md:aspect-[4/5]", // Portrait
  },
  {
    id: "agrilens",
    stack: "(React, Python, Machine Learning)",
    title: "AgriLens",
    description: "Helping farmers make smarter, data-driven decisions.",
    pills: ["Field-Tested", "Daily Usage"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&h=600&fit=crop",
    link: "#",
    span: "col-span-1 md:col-span-2", // 2/3 width
    aspect: "aspect-[4/3] md:aspect-[16/9]", // Landscape
  },
  {
    id: "memora",
    stack: "(Next.js, Framer Motion, Vercel)",
    title: "Memora Visuals",
    description: "Digital presence for a high-end creative studio.",
    pills: ["Live & Converting", "Brand Established"],
    image: "/images/memora.png",
    link: "https://memoravisuals.com/",
    span: "col-span-1 md:col-span-2", // 2/3 width
    aspect: "aspect-[4/3] md:aspect-[16/9]", // Landscape
  },
  {
    id: "explain",
    stack: "(Chrome API, OpenAI, React)",
    title: "Explain It to Me",
    description: "AI Text Simplifier Chrome Extension.",
    pills: ["AI Powered", "Accessibility"],
    image: "/images/extension.png",
    link: "#",
    span: "col-span-1 md:col-span-1", // 1/3 width (keeps height reasonable)
    aspect: "aspect-[4/3] md:aspect-[4/5]", // Portrait
  },
  {
    id: "werent",
    stack: "(Next.js, Stripe, Contentful)",
    title: "WereNtOnline",
    description: "Tourists booking Kenya Coast rentals online.",
    pills: ["Active Bookings", "Kenya Coast Market"],
    image: "/images/werent.png",
    link: "https://www.werentonline.com/",
    span: "col-span-1 md:col-span-3", // Full width
    aspect: "aspect-[16/10] md:aspect-[21/9]",
  }
];

// ─── Single Card ──────────────────────────────────────────────────────────────
function CaseCard({ c, index }: { c: (typeof CASES)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
      className={`group ${c.span} flex flex-col`}
    >
      <Link href={c.link} target={c.link.startsWith("http") ? "_blank" : "_self"} className="block w-full h-full cursor-pointer">
        
        {/* Stack/Category Label */}
        <p style={{
          fontSize: "0.75rem",
          color: "var(--color-text-muted)",
          marginBottom: "0.75rem",
          fontWeight: 500
        }}>
          {c.stack}
        </p>

        {/* Image Container */}
        <div 
          className={`relative w-full overflow-hidden mb-5 ${c.aspect}`}
          style={{ 
            borderRadius: "1.5rem",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)"
          }}
        >
          <motion.img
            src={c.image}
            alt={c.title}
            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          <div className="absolute inset-0 transition-colors duration-500 bg-black/5 group-hover:bg-black/20" />

          {/* Stat Pills */}
          <div className="absolute flex flex-wrap gap-2 bottom-4 left-4 right-4">
            {c.pills.map((pill, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 text-[0.7rem] sm:text-xs font-semibold tracking-wide text-black bg-white rounded-full shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Content Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              color: "var(--color-text)",
            }}>
              {c.title}
            </h3>
            <p className="mt-1" style={{
              fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
              color: "var(--color-text-muted)",
              lineHeight: 1.5,
            }}>
              {c.description}
            </p>
          </div>

          {/* Animated Arrow Button */}
          <div 
            className="flex items-center justify-center flex-shrink-0 transition-all duration-300 rounded-full"
            style={{
              width: "44px",
              height: "44px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="flex items-center justify-center w-full h-full text-[var(--color-text)] transition-colors duration-300 rounded-full group-hover:bg-[#2DD4BF] group-hover:text-[#040805] group-hover:border-[#2DD4BF]">
              <ArrowUpRight 
                size={20} 
                className="transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </div>
          </div>
        </div>
        
      </Link>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function CaseStudy() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  return (
    <section style={{
      background: "var(--color-bg)",
      paddingTop: "clamp(80px,12vw,120px)",
      paddingBottom: "clamp(80px,12vw,120px)",
      borderTop: `1px solid var(--color-border)`,
    }}>
      <div className="px-6 mx-auto lg:px-12" style={{ maxWidth: "1400px" }}>

        {/* Header */}
        <div ref={headerRef} className="flex flex-col justify-between gap-8 mb-16 lg:flex-row lg:items-end">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -12 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="block w-8 h-px" style={{ background: "var(--color-emerald)" }} />
              <span style={{
                fontSize: "0.7rem", fontWeight: 600,
                letterSpacing: "0.15em", color: "var(--color-emerald)",
                textTransform: "uppercase",
              }}>
                Case Studies
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.07, ease: [0.32, 0.72, 0, 1] }}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                color: "var(--color-text)",
              }}
            >
              Featured<br />Projects
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex flex-col items-start gap-4 lg:items-end"
          >
            <p style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
              lineHeight: 1.75,
              color: "var(--color-text-muted)",
              maxWidth: "24rem",
              textAlign: "left",
            }} className="lg:text-right">
              Real products. Real users. From Kenya&apos;s coast to European markets — these are the platforms we&apos;ve built and shipped.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-bold transition-colors duration-200 group"
              style={{ color: "var(--color-emerald)", fontSize: "0.95rem" }}
            >
              View all work
              <motion.span animate={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <ArrowUpRight size={18} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Switched to md:grid-cols-3 for perfect masonry scaling */}
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-16 md:grid-cols-3">
          {CASES.map((c, i) => (
            <CaseCard key={c.id} c={c} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}