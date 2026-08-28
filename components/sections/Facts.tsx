"use client";

import { useRef } from 'react';
import { TrendingUp, ShieldCheck, Zap, Code2 } from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@/contexts/themeContext';

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

  return (
    <section
      ref={sectionRef}
      className="relative pb-32 overflow-hidden"
      style={{ 
        background: "var(--color-surface)", 
        // Negative margin pulls this section slightly up to nest smoothly with the hero's bottom curve
        marginTop: "-4rem",
        paddingTop: "7rem",
        // Soft rounded top corners to mirror or complement smooth curved transitions
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

          {/* LEFT */}
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

              <Reveal delay={0.16}>
                <div className="p-6 rounded-2xl" style={{
                  background: "var(--color-card)",
                  border: `1px solid var(--color-border)`,
                }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center flex-shrink-0 rounded-full w-11 h-11"
                      style={{ background: "var(--color-emerald)" }}>
                      <span className="text-lg font-black" style={{ color: "#040805" }}>S</span>
                    </div>
                    <div>
                      <h3 style={{ color: "var(--color-emerald)", fontWeight: 700, fontSize: "1.1rem" }}>Softrinx Agency</h3>
                      <p style={{ color: "var(--color-text-label)", fontSize: "0.8rem" }}>Full-Stack Web & Mobile Studio · Est. 2024</p>
                    </div>
                  </div>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: 1.75 }}>
                    Since launching in 2024, we’ve successfully delivered over 15 high-performance web and mobile solutions. 
                    We take pride in our hands-on engineering approach, ensuring every client works directly with builders 
                    who care about clean code and rapid delivery.
                  </p>
                  <div className="flex items-center gap-4 mt-5">
                    <div className="flex items-center justify-center px-4 h-14 rounded-xl"
                      style={{ background: "var(--color-emerald-bg)", border: `1px solid var(--color-emerald-border)` }}>
                      <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--color-text)" }}>15+ Projects Shipped</span>
                    </div>
                    <a href="/about"
                      className="transition-all duration-200"
                      style={{
                        padding: "0.6rem 1.4rem",
                        border: `1px solid var(--color-border-mid)`,
                        color: "var(--color-text-muted)",
                        borderRadius: "99px",
                        fontSize: "0.78rem", fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}>
                      Our Story
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Realistic & Credible Metrics (True to 2024 start & ~15 projects) */}
              <div className="flex flex-col gap-5">
                {[
                  { icon: <Zap size={22} style={{ color: "var(--color-emerald)" }} />, label: "15+ Shipped Projects", desc: "Custom web apps, mobile platforms, and integrations delivered since 2024" },
                  { icon: <ShieldCheck size={22} style={{ color: "var(--color-emerald)" }} />, label: "Direct Engineer Access", desc: "No middle management—collaborate directly with the full-stack developers building your product" },
                  { icon: <Code2 size={22} style={{ color: "var(--color-emerald)" }} />, label: "Modern Tech Stack", desc: "Built with production-ready tools like Next.js, React Native, and robust cloud backends" },
                ].map((m, i) => (
                  <Reveal key={i} delay={0.22 + i * 0.1} y={16}>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-xl"
                        style={{ background: "var(--color-card)", border: `1px solid var(--color-border)` }}>
                        {m.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, color: "var(--color-text)", fontSize: "0.95rem" }}>{m.label}</p>
                        <p style={{ color: "var(--color-text-faint)", fontSize: "0.82rem", marginTop: "2px" }}>{m.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Image */}
          <Reveal delay={0.1} y={40}>
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{
                background: `radial-gradient(ellipse at 60% 40%, ${colors.emeraldBg} 0%, transparent 70%)`,
              }} />
              <div className="relative overflow-hidden rounded-2xl shadow-xl"
                style={{ border: `1px solid var(--color-border)` }}>
                <Image
                  src="/images/images/homee.png"
                  alt="Team collaboration"
                  width={600} height={800}
                  className="object-cover w-full"
                  style={{ height: "clamp(400px, 55vw, 620px)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{ height: "30%", background: `linear-gradient(to top, var(--color-surface), transparent)` }} />
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none" style={{
                borderTop: `2px solid var(--color-emerald-border)`,
                borderRight: `2px solid var(--color-emerald-border)`,
                borderRadius: "0 16px 0 0",
              }} />
              <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none" style={{
                borderBottom: `2px solid var(--color-emerald-border)`,
                borderLeft: `2px solid var(--color-emerald-border)`,
                borderRadius: "0 0 0 16px",
              }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}