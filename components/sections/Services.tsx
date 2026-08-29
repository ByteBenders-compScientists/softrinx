"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Code, Smartphone, Server, BrainCircuit, Database, Shield,
  ArrowRight, ArrowUpRight,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
// hover = the fill color this specific card gets on hover — not just emerald
// for every card, a distinct accent per service so the grid feels alive.
const SERVICES = [
  {
    number: "01", icon: Code, title: "Custom Software", titleLine2: "Development",
    description: "End-to-end engineering of web platforms, SaaS products, and internal tools — built to your exact specifications with clean, maintainable code.",
    hover: "#34D399",
  },
  {
    number: "02", icon: Smartphone, title: "Mobile App", titleLine2: "Development",
    description: "Native iOS & Android and cross-platform apps with polished UX. We build for performance, offline-first resilience, and App Store success.",
    hover: "#38BDF8",
  },
  {
    number: "03", icon: Server, title: "Cloud", titleLine2: "Infrastructure",
    description: "Scalable, cost-efficient cloud architecture on AWS, GCP, or Azure. CI/CD pipelines, containerisation, and zero-downtime deployments.",
    hover: "#FBBF24",
  },
  {
    number: "04", icon: BrainCircuit, title: "AI & Machine", titleLine2: "Learning",
    description: "Custom model integration, LLM fine-tuning, and intelligent automation that gives your product a measurable edge over competitors.",
    hover: "#F472B6",
  },
  {
    number: "05", icon: Database, title: "Database", titleLine2: "Architecture",
    description: "Robust schema design, query optimisation, and migration strategies for relational and NoSQL databases at any scale.",
    hover: "#A78BFA",
  },
  {
    number: "06", icon: Shield, title: "Cyber", titleLine2: "Security",
    description: "Penetration testing, security audits, and hardening of your stack — so your data and your clients' trust stay protected.",
    hover: "#F87171",
  },
];

// ─── Scroll-reveal ────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Parallax image column ────────────────────────────────────────────────────
function ParallaxImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden" style={{ minHeight: "320px" }}>
      <motion.div className="absolute inset-0" style={{ y, height: "116%", top: "-8%" }}>
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fm=jpg&q=80&w=1600&auto=format&fit=crop"
          alt="Software developer's laptop with code on screen"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </motion.div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)" }} />
    </div>
  );
}

// ─── Vertical hover card ───────────────────────────────────────────────────────
// Hover tracked in JS state (not CSS :hover) so inline colors update reliably.
function ServiceCard({ service, index, last, glass }: {
  service: typeof SERVICES[number]; index: number; last: boolean; glass?: boolean;
}) {
  const Icon = service.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const ink = "#040805";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col justify-between cursor-default flex-1 ${
        last ? "" : "border-b lg:border-b-0 lg:border-r"
      }`}
      style={{
        borderColor: glass ? "rgba(255,255,255,0.18)" : "var(--color-border)",
        minHeight: "clamp(240px, 20vw, 340px)",
        padding: "clamp(1.75rem, 2.2vw, 2.5rem)",
        // The glass card physically overlaps the image column so the photo
        // bleeds through the blur — "image behind the cards" effect.
        marginRight: glass ? "clamp(-48px, -4vw, -80px)" : undefined,
        zIndex: glass ? 30 : undefined,
        backdropFilter: glass ? "blur(18px)" : undefined,
        WebkitBackdropFilter: glass ? "blur(18px)" : undefined,
        background: glass ? "rgba(4,8,5,0.45)" : undefined,
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: service.hover }}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <span className="font-black leading-none tabular-nums" style={{
            fontSize: "0.75rem",
            color: hovered ? "rgba(4,8,5,0.55)" : glass ? "rgba(255,255,255,0.65)" : "var(--color-text-faint)",
            transition: "color 0.3s",
          }}>
            {service.number}
          </span>
          <div className="flex items-center justify-center w-9 h-9 border rounded-full" style={{
            borderColor: hovered ? "rgba(4,8,5,0.3)" : glass ? "rgba(255,255,255,0.35)" : "var(--color-border)",
            transition: "border-color 0.3s",
          }}>
            <Icon size={16} style={{ color: hovered ? ink : "var(--color-emerald)", transition: "color 0.3s" }} />
          </div>
        </div>

        <h3 className="mt-7 font-bold" style={{
          fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)", lineHeight: 1.15, letterSpacing: "-0.02em",
          color: hovered ? ink : glass ? "#fff" : "var(--color-text)", transition: "color 0.3s",
        }}>
          {service.title}<br />{service.titleLine2}
        </h3>

        <p className="mt-auto pt-6" style={{
          fontSize: "0.82rem", lineHeight: 1.65,
          color: hovered ? "rgba(4,8,5,0.7)" : glass ? "rgba(255,255,255,0.78)" : "var(--color-text-muted)",
          transition: "color 0.3s",
        }}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
export default function Services() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--color-bg)", paddingTop: 0, paddingBottom: 0 }}
    >
      {/* ── Full-bleed block: "Our Services" now lives INSIDE the row as a
          vertical spine label — no separate strip sitting above it, so the
          cards+image genuinely are the whole section from the top down. ── */}
      <div className="w-full" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="relative flex flex-col lg:flex-row lg:min-h-[min(60vh,560px)]">

          {/* Vertical spine label */}
          <div
            className="items-center justify-center flex-shrink-0 hidden border-r lg:flex"
            style={{ width: "56px", borderColor: "var(--color-border)" }}
          >
            <span
              style={{
                fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.2em",
                color: "var(--color-emerald)", textTransform: "uppercase",
                writingMode: "vertical-rl", transform: "rotate(180deg)", whiteSpace: "nowrap",
              }}
            >
              — Our Services
            </span>
          </div>
          {/* Mobile equivalent — simple horizontal label above the stack */}
          <div className="order-first lg:order-none flex items-center gap-3 px-6 py-5 border-b lg:hidden" style={{ borderColor: "var(--color-border)" }}>
            <span className="block w-8 h-px" style={{ background: "var(--color-emerald)" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
              Our Services
            </span>
          </div>

          {/* Image — mobile: full width, second (after the label). Desktop: sits at the end of the row */}
          <div className="w-full lg:order-last lg:w-[32%] flex-shrink-0 relative">
            <ParallaxImage />
          </div>

          <div className="flex flex-col flex-1 lg:flex-row">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.number}
                service={s}
                index={i}
                last={i === SERVICES.length - 1}
                glass={i === SERVICES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA — split sharp panel ── */}
      <Reveal y={24}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ borderTop: `1px solid var(--color-border)` }}>
          <div className="relative flex flex-col justify-between overflow-hidden" style={{
            background: "var(--color-emerald)", padding: "clamp(2.5rem, 5vw, 4rem)",
            borderRight: `1px solid rgba(255,255,255,0.12)`,
          }}>
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 8px)",
            }} />
            <div className="relative z-10">
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(0,0,0,0.5)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Start a Project
              </p>
              <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "#040805", marginBottom: "2.5rem" }}>
                Ready to Build<br />Something Real?
              </h3>
              <Link href="/contact" className="inline-flex items-center gap-3 font-bold transition-all duration-200 group" style={{
                background: "#040805", color: "var(--color-emerald)", padding: "0.85rem 1.75rem", fontSize: "0.88rem", letterSpacing: "0.02em",
              }}>
                Get A Quote
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between" style={{ background: "var(--color-surface)", padding: "clamp(2.5rem, 5vw, 4rem)" }}>
            <div>
              <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-faint)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Or Learn More
              </p>
              <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--color-text)", marginBottom: "1rem" }}>
                Explore how we&apos;ve helped companies ship faster and grow smarter.
              </h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "22rem" }}>
                Our portfolio spans fintech, healthtech, e-commerce, and enterprise SaaS. Real work. Real results.
              </p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 mt-8 font-semibold transition-colors duration-200 group" style={{
              color: "var(--color-emerald)", fontSize: "0.88rem",
            }}>
              View Our Work
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}