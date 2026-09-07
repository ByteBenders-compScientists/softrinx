"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Code2, Smartphone, Brain, Globe, Network,
  Cloud, Terminal, Eye, GitBranch, Shield, BarChart3, Layers, Target,
  Database, Zap, Check,
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1.5 h-1.5 bg-[var(--color-emerald)] shadow-[0_0_10px_var(--color-emerald)]" />
      <span className="text-[0.7rem] font-bold tracking-[0.18em] text-[var(--color-emerald)] uppercase">
        {text}
      </span>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CORE_FEATURES = [
  {
    icon: Code2, tag: "Software", title: "Full-Stack Engineering",
    description: "End-to-end software development from architecture to deployment. APIs, microservices, monoliths — systems that scale with your ambition.",
    points: ["React, Next.js, Vue", "Node.js, Django, FastAPI", "REST & GraphQL APIs"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Brain, tag: "AI/ML", title: "AI & Machine Learning",
    description: "Real ML products, not demos — LLM integration, computer vision, and predictive analytics shipped into production.",
    points: ["LLM fine-tuning & RAG", "Computer vision pipelines", "Intelligent automation"],
    emerald: true,
  },
  {
    icon: Smartphone, tag: "Mobile", title: "Mobile Development",
    description: "Native iOS, Android, and cross-platform apps with pixel-perfect UIs and reliable performance.",
    points: ["React Native & Flutter", "Native Swift & Kotlin", "Store releases handled"],
  },
  {
    icon: Globe, tag: "Web", title: "Web Platforms",
    description: "High-performance, SEO-optimised web platforms — from marketing sites to complex web apps.",
    points: ["Next.js SSR/SSG", "CMS integrations", "Accessibility & SEO baked in"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    wide: true,
  },
  {
    icon: Network, tag: "Infrastructure", title: "Networking & IT",
    description: "Enterprise networking, IT infrastructure setup, and managed services.",
    points: ["Network design & setup", "VPN & firewall config"],
    accentDots: true,
  },
  {
    icon: Cloud, tag: "DevOps", title: "Cloud & DevOps",
    description: "Cloud-native deployments, CI/CD pipelines, and infrastructure as code.",
    points: ["AWS, GCP, Azure", "Docker & Kubernetes"],
    accentDots: true,
  },
];

const DIFFERENTIATORS = [
  { num: "01", icon: Terminal, title: "Engineers, not account managers", body: "You talk directly to the person writing your code. No middlemen, no game of telephone." },
  { num: "02", icon: Eye, title: "Full visibility, always", body: "Real-time progress on your board, weekly demos, and a Slack channel that's actually active." },
  { num: "03", icon: GitBranch, title: "Your code. Forever.", body: "Full source ownership from day one. No lock-in, no hostage code — it's yours the moment it's written." },
  { num: "04", icon: Shield, title: "Security by default", body: "Security isn't a post-launch thought. It's built into every layer, from database schema to API design." },
  { num: "05", icon: BarChart3, title: "Measurable outcomes", body: "We define success metrics before writing a line of code. Every sprint points at a business outcome." },
  { num: "06", icon: Layers, title: "One team, full stack", body: "Backend, frontend, mobile, AI, DevOps — under one roof. No coordination tax across fragmented vendors." },
];

const PROCESS_STEPS = [
  { num: "01", label: "Discover", title: "We map your world before touching the keyboard.", body: "Deep stakeholder interviews, technical audits, and competitive landscape analysis. We surface the real problem — not just the stated one.", icon: Target, image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" },
  { num: "02", label: "Architect", title: "Every structural decision made deliberately.", body: "System design docs, API contracts, data models, tech stack selection. We write the blueprint before laying a single brick.", icon: Database, image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { num: "03", label: "Build", title: "Real progress every week, not just at the end.", body: "Two-week sprints with live demos. You see working software, not status updates. Bugs caught early, feedback loops tight.", icon: Code2, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
  { num: "04", label: "Ship", title: "Go-live is the beginning, not the end.", body: "Staging environments, load testing, production monitoring. We stay on for the first weeks post-launch to squash anything that surfaces.", icon: Zap, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
];

// Real SVG logos — drop the files into /public/images/ with these exact names.
const TECH_STACK_ROW_1 = [
  { name: "React", icon: "/images/react.svg" },
  { name: "Next.js", icon: "/images/nextjs.svg" },
  { name: "TypeScript", icon: "/images/typescript.svg" },
  { name: "Node.js", icon: "/images/nodejs.svg" },
  { name: "Python", icon: "/images/python.svg" },
  { name: "Flutter", icon: "/images/flutter.svg" },
  { name: "React Native", icon: "/images/reactnative.svg" },
  { name: "Tailwind", icon: "/images/tailwind.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
];

const TECH_STACK_ROW_2 = [
  { name: "PostgreSQL", icon: "/images/postgresql.svg" },
  { name: "MongoDB", icon: "/images/mongodb.svg" },
  { name: "AWS", icon: "/images/aws.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "Kubernetes", icon: "/images/kubernetes.svg" },
  { name: "TensorFlow", icon: "/images/tensorflow.svg" },
  { name: "FastAPI", icon: "/images/fastapi.svg" },
  { name: "Redis", icon: "/images/redis.svg" },
  { name: "GraphQL", icon: "/images/graphql.svg" },
];

// ─── Core feature bento tile ───────────────────────────────────────────────────
function FeatureTile({ f, index, className = "" }: { f: typeof CORE_FEATURES[0]; index: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = f.icon;

  if (f.image) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
        className={`relative overflow-hidden rounded-[2rem] flex flex-col justify-end min-h-[280px] ${className}`}
      >
        <Image src={f.image} alt={f.title} fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.9) 88%)" }} />
        <div className="relative z-10 p-7 lg:p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: "rgba(45,212,191,0.16)", border: "1px solid rgba(45,212,191,0.35)" }}>
              <Icon size={16} style={{ color: "var(--color-emerald)" }} />
            </div>
            <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-emerald)" }}>{f.tag}</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-black tracking-tight text-white mb-2">{f.title}</h3>
          <p className="text-sm leading-relaxed text-white/70 max-w-md mb-4">{f.description}</p>
          <div className="flex flex-wrap gap-2">
            {f.points.map((p) => (
              <span key={p} className="px-3 py-1 text-xs font-medium rounded-full" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.12)" }}>{p}</span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (f.emerald) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
        className={`relative overflow-hidden rounded-[2rem] p-7 lg:p-8 flex flex-col ${className}`}
        style={{ background: "var(--color-emerald)" }}
      >
        <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-6" style={{ background: "#040805" }}>
          <Icon size={19} style={{ color: "var(--color-emerald)" }} />
        </div>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(4,8,5,0.6)", marginBottom: "0.5rem" }}>{f.tag}</span>
        <h3 className="text-xl lg:text-2xl font-black tracking-tight mb-2" style={{ color: "#040805" }}>{f.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(4,8,5,0.72)" }}>{f.description}</p>
        <div className="flex flex-col gap-2 mt-auto">
          {f.points.map((p) => (
            <div key={p} className="flex items-center gap-2">
              <Check size={12} strokeWidth={3} style={{ color: "#040805" }} />
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "rgba(4,8,5,0.78)" }}>{p}</span>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Plain surface tile — Networking & IT / Cloud & DevOps opt into a dotted
  // accent border + a subtle radial dot texture + a bit of hover motion.
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className={`relative overflow-hidden rounded-[2rem] p-7 lg:p-8 flex flex-col ${className}`}
      style={{
        background: "var(--color-surface)",
        border: f.accentDots ? "1.5px dashed var(--color-border-mid)" : "1px solid var(--color-border)",
      }}
    >
      {f.accentDots && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: 0, right: 0, width: 120, height: 120,
            backgroundImage: "radial-gradient(var(--color-border-mid) 1.5px, transparent 1.5px)",
            backgroundSize: "14px 14px",
            maskImage: "radial-gradient(circle at top right, black 15%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(circle at top right, black 15%, transparent 72%)",
          }}
        />
      )}
      <motion.div
        className="flex items-center justify-center w-11 h-11 rounded-xl mb-6"
        style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)" }}
        whileHover={{ rotate: 8, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <Icon size={19} style={{ color: "var(--color-emerald)" }} />
      </motion.div>
      <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-faint)", marginBottom: "0.5rem" }}>{f.tag}</span>
      <h3 className="text-xl lg:text-2xl font-black tracking-tight mb-2" style={{ color: "var(--color-text)" }}>{f.title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-muted)" }}>{f.description}</p>
      <div className="flex flex-col gap-2 mt-auto">
        {f.points.map((p) => (
          <div key={p} className="flex items-center gap-2">
            <Check size={12} strokeWidth={3} style={{ color: "var(--color-emerald)" }} />
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--color-text-muted)" }}>{p}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Differentiator row (editorial, not a card) ───────────────────────────────
function DiffRow({ d, index, inView }: { d: typeof DIFFERENTIATORS[0]; index: number; inView: boolean }) {
  const Icon = d.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex flex-col group"
      style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.6rem" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-emerald)", fontFamily: "monospace" }}>{d.num}</span>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-300" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <Icon size={14} style={{ color: "var(--color-text-faint)" }} className="transition-colors group-hover:text-[var(--color-emerald)]" />
        </div>
      </div>
      <h4 className="text-lg font-black tracking-tight mb-2" style={{ color: "var(--color-text)" }}>{d.title}</h4>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{d.body}</p>
    </motion.div>
  );
}

// ─── Tech marquee row ───────────────────────────────────────────────────────
function TechRow({ items, direction, speed }: { items: { name: string; icon: string }[]; direction: "left" | "right"; speed: number }) {
  return (
    <div className="relative flex overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-[var(--color-surface)] to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-[var(--color-surface)] to-transparent pointer-events-none" />
      <div
        className="flex w-fit"
        style={{ animation: `${direction === "left" ? "ticker-left" : "ticker-right"} ${speed}s linear infinite` }}
      >
        {[0, 1].map((pass) => (
          <div key={pass} className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {items.map((tech) => (
              <div key={`${pass}-${tech.name}`} className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap" style={{ color: "var(--color-text-muted)" }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const diffRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const diffInView = useInView(diffRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const [activeProcess, setActiveProcess] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveProcess((i) => (i + 1) % PROCESS_STEPS.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Navigation />

      {/* ══ HERO — dark, rounded bottom, background photo (matches services/about) ══ */}
      <section className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "100svh", background: "#050505",
          borderBottomLeftRadius: "clamp(24px, 4vw, 48px)", borderBottomRightRadius: "clamp(24px, 4vw, 48px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "80px", zIndex: 10,
        }}>

        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image src="/images/cta3.png" alt="Softrinx engineering" fill priority className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.55) 38%, rgba(5,5,5,0.72) 72%, rgba(5,5,5,0.97) 100%)" }} />
        </div>

        <div className="relative z-10 w-full px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px", paddingTop: "140px" }}>
          <div className="flex flex-col items-start max-w-3xl gap-6 text-left">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-[clamp(3rem,6.2vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
              <span className="block">Every layer.</span>
              <span className="block text-[var(--color-emerald)]">Every stack.</span>
              <span className="block">One team.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}
              className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-white/70 max-w-[34rem]">
              Softrinx covers the full technology surface — software, web, mobile, AI/ML, networking and cloud. One small team, based in Nairobi, that owns the build end to end.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.48 }} className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="inline-flex items-center gap-3 font-bold transition-transform hover:-translate-y-1 uppercase tracking-widest text-[0.85rem]"
                style={{ background: "var(--color-emerald)", color: "#040805", padding: "1rem 2rem", borderRadius: "999px" }}>
                Start a Project
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 font-bold transition-colors uppercase tracking-widest text-[0.85rem]"
                style={{ color: "rgba(255,255,255,0.7)", padding: "1rem 1.5rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.15)" }}>
                See Our Work <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CORE CAPABILITIES (Bento, mixed image/text/accent tiles) ══════════ */}
      <section className="py-24 lg:py-32 bg-[var(--color-bg)] border-t border-b border-[var(--color-border)]">
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
             
              <h2 className="text-4xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight leading-[1.1]">
                We cover six domains.<br />
                <span className="text-[var(--color-emerald)]">With Zero gaps.</span>
              </h2>
            </div>
            <p className="text-base lg:text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed">
              From full-stack software to AI/ML, mobile, web, networking and cloud we own the build end to end. No handoffs, no finger-pointing, no gaps in coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureTile f={CORE_FEATURES[0]} index={0} className="md:col-span-2" />
            <FeatureTile f={CORE_FEATURES[1]} index={1} />
            <FeatureTile f={CORE_FEATURES[2]} index={2} />
            <FeatureTile f={CORE_FEATURES[3]} index={3} className="md:col-span-2" />
            {/* Networking & IT + Cloud & DevOps now sit side by side (1 + 2 cols),
                matching the Mobile/Web row above instead of stacking full-width. */}
            <FeatureTile f={CORE_FEATURES[4]} index={4} className="md:col-span-1" />
            <FeatureTile f={CORE_FEATURES[5]} index={5} className="md:col-span-2" />
          </div>
        </div>
      </section>

      {/* ══ HOW WE WORK — timeline + progress card ════════════════════════════ */}
      <section ref={processRef} className="py-24 lg:py-32 bg-[var(--color-surface)] relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute pointer-events-none select-none bottom-[-5%] right-[-2%] text-[clamp(8rem,18vw,20rem)] font-black leading-none text-[var(--color-border)] opacity-30">
          HOW
        </div>

        <div className="relative px-6 mx-auto lg:px-16 z-10" style={{ maxWidth: "1400px" }}>
          <div className="mb-16">
            <SectionLabel text="How We Work" />
            <h2 className="text-4xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight leading-[1.1]">
              The Softrinx<br />playbook.
            </h2>
          </div>

          <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-stretch">
            {/* Vertical timeline */}
            <div className="relative flex flex-col justify-between">
              <div className="absolute left-[23px] top-6 bottom-6 w-[2px] rounded-full" style={{ background: "var(--color-border)" }} />
              <motion.div
                className="absolute left-[23px] top-6 w-[2px] rounded-full"
                style={{ background: "var(--color-emerald)", boxShadow: "0 0 12px rgba(45,212,191,0.5)" }}
                animate={{ height: `${(activeProcess / (PROCESS_STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              />
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = activeProcess === i;
                return (
                  <button
                    key={step.num}
                    onClick={() => setActiveProcess(i)}
                    className="relative flex items-start gap-5 py-4 lg:py-5 text-left group"
                  >
                    <motion.div
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16 }}
                      className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300"
                      style={{
                        background: isActive ? "var(--color-emerald)" : "var(--color-bg)",
                        borderColor: isActive ? "var(--color-emerald)" : "var(--color-border)",
                        boxShadow: isActive ? "0 0 20px rgba(45,212,191,0.35)" : "none",
                      }}
                    >
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} style={{ color: isActive ? "#040805" : "var(--color-text-faint)" }} />
                    </motion.div>
                    <div className="pt-2">
                      <div className="text-xs font-bold tracking-widest uppercase mb-1 transition-colors duration-300" style={{ color: isActive ? "var(--color-emerald)" : "var(--color-text-faint)" }}>
                        {step.num} — {step.label}
                      </div>
                      <div className="text-base lg:text-lg font-bold tracking-tight transition-colors duration-300" style={{ color: isActive ? "var(--color-text)" : "var(--color-text-muted)" }}>
                        {step.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active step content card */}
            <div className="relative min-h-[380px] lg:min-h-[480px] rounded-[2rem] lg:rounded-[3rem] border overflow-hidden" style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}>
              <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ background: "var(--color-border)" }}>
                <motion.div
                  className="h-full"
                  style={{ background: "var(--color-emerald)" }}
                  animate={{ width: `${((activeProcess + 1) / PROCESS_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                />
              </div>
              <AnimatePresence mode="wait">
                {PROCESS_STEPS.map((step, i) => {
                  if (i !== activeProcess) return null;
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0 p-8 lg:p-14 flex flex-col justify-center"
                    >
                      <div className="relative w-full h-40 lg:h-56 rounded-2xl overflow-hidden mb-8 border" style={{ borderColor: "var(--color-border)" }}>
                        <Image src={step.image} alt={step.label} fill className="object-cover" />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 45%, rgba(5,5,5,0.65) 100%)" }} />
                      </div>
                      <div className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-emerald)" }}>
                        Phase {step.num} — {step.label}
                      </div>
                      <h3 className="text-2xl lg:text-4xl font-black tracking-tight mb-4 leading-tight" style={{ color: "var(--color-text)" }}>
                        {step.title}
                      </h3>
                      <p className="text-base lg:text-lg leading-relaxed max-w-lg" style={{ color: "var(--color-text-muted)" }}>
                        {step.body}
                      </p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY SOFTRINX (editorial list, not another card grid) ══════════════ */}
      <section ref={diffRef} className="py-24 lg:py-32 bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <SectionLabel text="Why Softrinx" />
              <h2 className="text-4xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight leading-[1.1]">
                The difference<br />
                <span className="text-[var(--color-emerald)]">you&apos;ll actually feel.</span>
              </h2>
            </div>
            <p className="text-base lg:text-lg text-[var(--color-text-muted)] max-w-md leading-relaxed">
              Principles that govern how we operate — not marketing copy. Ask any of our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {DIFFERENTIATORS.map((d, i) => <DiffRow key={d.title} d={d} index={i} inView={diffInView} />)}
          </div>
        </div>
      </section>

      {/* ══ TECH STRIP — real logos, two rows drifting opposite directions ═══ */}
      <section className="py-16 bg-[var(--color-surface)] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="px-6 mx-auto mb-10 lg:px-16" style={{ maxWidth: "1400px" }}>
          <div className="flex items-center gap-3 mb-2 font-bold tracking-widest text-xs uppercase text-[var(--color-text)]">
            <span className="w-1.5 h-1.5 bg-[var(--color-text)]" /> Tech We Use
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[var(--color-text)] tracking-tight">
            Best tools for the job.
          </h2>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          <TechRow items={TECH_STACK_ROW_1} direction="left" speed={30} />
          <TechRow items={TECH_STACK_ROW_2} direction="right" speed={34} />
        </div>

        <style>{`
          @keyframes ticker-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes ticker-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        `}</style>
      </section>

      {/* ══ CTA — rounded, small margin, softly blurred video ═════════════════ */}
      <section className="relative p-3 md:p-5 lg:p-6 bg-[var(--color-bg)] pb-20">
        <div ref={ctaRef} className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden min-h-[58vh] flex flex-col justify-end border border-[var(--color-border)] py-16 px-8 lg:px-16">

          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 object-cover w-full h-full scale-105"
            style={{ filter: "blur(2.5px)" }}
          >
            <source src="/videos/features-cta.webm" type="video/webm" />
            <source src="/images/cta.mp4" type="video/mp4" />
          </video>

          {/* Slightly stronger gradient than before so the softened video still leaves text crisp */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.3) 42%, rgba(5,5,5,0.88) 100%)" }} />

          <motion.div initial={{ opacity: 0, y: 24 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="relative z-10 max-w-2xl">

            <div className="flex items-center gap-3 mb-5 font-bold tracking-[0.2em] text-xs uppercase text-[var(--color-emerald)]">
              <span className="w-1.5 h-1.5 bg-[var(--color-emerald)] shadow-[0_0_10px_var(--color-emerald)]" />
              Get Started
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
              Have a feature in mind?
            </h2>

            <p className="text-white/75 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
              Tell us what you&apos;re building. We&apos;ll walk you through exactly how we&apos;d approach it — a straight technical scoping conversation, no obligation.
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
                style={{ color: "rgba(255,255,255,0.8)", padding: "1rem 1.5rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)" }}>
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