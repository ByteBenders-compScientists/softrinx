"use client";

import { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Zap, Code2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useTheme } from '@/contexts/themeContext';

const CASE_STUDY_SVGS = [
  "/images/case_study_image1.svg",
  "/images/case_study_cooleaf_v1-1.svg",
  "/images/case_study_seatu_unique-1.svg",
];

// ─── Scroll reveal ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Facts() {
  const sectionRef = useRef(null);
  const { colors } = useTheme();
  const [svgIndex, setSvgIndex] = useState(0);

  // Slow auto-rotation for the SVGs on the right side
  useEffect(() => {
    const timer = setInterval(() => {
      setSvgIndex((prev) => (prev + 1) % CASE_STUDY_SVGS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pb-32 overflow-hidden"
      style={{ 
        background: "var(--color-surface)", 
        marginTop: "-4rem",
        paddingTop: "7rem",
        borderTopLeftRadius: "36px",
        borderTopRightRadius: "36px",
        zIndex: 20,
      }}
    >
      {/* Top ambient glow/fade for smooth blending */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 10 }}>
        <div style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, ${colors.emerald}30 20%, ${colors.emerald}80 50%, ${colors.emerald}30 80%, transparent 100%)`,
        }} />
        <div style={{
          height: "100px",
          background: `linear-gradient(180deg, ${colors.emeraldBg} 0%, transparent 100%)`,
        }} />
      </div>

      <div className="relative z-10 px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT — Completely unboxed editorial design */}
          <div className="relative">
            {/* Ghost text */}
            <div className="absolute top-0 overflow-hidden pointer-events-none select-none -left-8">
              <span className="font-black leading-none" style={{
                fontSize: "clamp(6rem, 18vw, 16rem)",
                color: "var(--color-text)",
                opacity: 0.025,
                letterSpacing: "-0.05em",
                whiteSpace: "nowrap",
              }}>
                Growth
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-8">
              <Reveal delay={0}>
                <div className="flex items-center gap-3">
                  <span className="block w-8 h-px" style={{ background: "var(--color-emerald)" }} />
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
                    Why Choose Softrinx
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="font-bold leading-tight" style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  color: "var(--color-text)",
                  letterSpacing: "-0.03em",
                }}>
                  Agile Development.<br />Real World Impact.
                </h2>
              </Reveal>

              {/* Unboxed Agency Header */}
              <Reveal delay={0.16}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 rounded-full w-12 h-12"
                    style={{ background: "var(--color-emerald)" }}>
                    <span className="text-lg font-black" style={{ color: "#040805" }}>S</span>
                  </div>
                  <div>
                    <h3 style={{ color: "var(--color-emerald)", fontWeight: 700, fontSize: "1.15rem" }}>Softrinx Agency</h3>
                    <p style={{ color: "var(--color-text-label)", fontSize: "0.82rem" }}>Full-Stack Web & Mobile Studio · Est. 2024</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p style={{ color: "var(--color-text-muted)", fontSize: "1.02rem", lineHeight: 1.75, maxWidth: "34rem" }}>
                  Since launching in 2024, we’ve successfully delivered over 15 high-performance web and mobile solutions. 
                  We take pride in our hands-on engineering approach, ensuring every client works directly with builders 
                  who care about clean code and rapid delivery.
                </p>
              </Reveal>

              {/* Unboxed Feature List: Icons float freely with zero background cards */}
              <div className="flex flex-col gap-6 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                {[
                  { 
                    icon: <Zap size={22} style={{ color: "var(--color-emerald)" }} />, 
                    label: "15+ Shipped Projects", 
                    desc: "Custom web apps, mobile platforms, and integrations delivered since 2024" 
                  },
                  { 
                    icon: <ShieldCheck size={22} style={{ color: "var(--color-emerald)" }} />, 
                    label: "Direct Engineer Access", 
                    desc: "No middle management—collaborate directly with the full-stack developers building your product" 
                  },
                  { 
                    icon: <Code2 size={22} style={{ color: "var(--color-emerald)" }} />, 
                    label: "Modern Tech Stack", 
                    desc: "Built with production-ready tools like Next.js, React Native, and robust cloud backends" 
                  },
                ].map((m, i) => (
                  <Reveal key={i} delay={0.24 + i * 0.1} y={16}>
                    <div className="flex items-start gap-4">
                      {/* Free-floating icon with no card box wrapper */}
                      <div className="flex-shrink-0 mt-1" style={{ color: "var(--color-emerald)" }}>
                        {m.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, color: "var(--color-text)", fontSize: "1rem" }} className="mb-0.5">
                          {m.label}
                        </p>
                        <p style={{ color: "var(--color-text-faint)", fontSize: "0.86rem", lineHeight: 1.6 }}>
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.5}>
                <div className="pt-2">
                  <Link 
                    href="/about" 
                    className="inline-flex items-center gap-2 font-bold transition-all duration-200 group hover:opacity-80"
                    style={{ color: "var(--color-emerald)", fontSize: "0.9rem" }}
                  >
                    Read our full story 
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* RIGHT — Raw SVGs with smooth rotation */}
          <Reveal delay={0.1} y={40}>
            <div className="relative flex items-center justify-center p-6">
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{
                background: `radial-gradient(ellipse at 50% 50%, ${colors.emeraldBg} 0%, transparent 75%)`,
              }} />
              
              <div className="relative w-full aspect-[16/11] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={svgIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={CASE_STUDY_SVGS[svgIndex]}
                      alt="Softrinx Case Study Graphic"
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}