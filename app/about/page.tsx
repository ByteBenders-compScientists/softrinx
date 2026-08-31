"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Linkedin, Github, Twitter,
  MapPin, Mail, Code2, Zap, Globe, Shield, Target, ExternalLink,
} from "lucide-react";
import { useTheme } from "@/contexts/themeContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Lottie ───────────────────────────────────────────────────────────────────
function LottieAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let anim: any, cancelled = false;
    import("lottie-web").then((lottie) => {
      if (cancelled || !containerRef.current) return;
      anim = lottie.default.loadAnimation({
        container: containerRef.current!,
        renderer: "svg", loop: true, autoplay: true,
        path: "/animations/services.json",
      });
      anim.addEventListener("DOMLoaded", () => { if (!cancelled) setLoaded(true); });
    });
    return () => { cancelled = true; anim?.destroy(); };
  }, []);
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 rounded-full animate-spin"
            style={{ borderColor: "rgba(255,255,255,0.1)", borderTopColor: "var(--color-emerald)" }} />
        </div>
      )}
      <div ref={containerRef} className="w-full h-full"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }} />
    </div>
  );
}

// ─── Hero Background Image ────────────────────────────────────────────────────
function BackgroundHeroImage() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Image
        src="/images/abouthero.png"
        alt="About Softrinx"
        fill
        className="object-cover w-full h-full"
        priority
      />
      {/* Dark overlay for text legibility, mimicking the homepage video feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionLabel({ text, dark = false }: { text: string, dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="block w-8 h-px" style={{ background: "var(--color-emerald)" }} />
      <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
        {text}
      </span>
    </div>
  );
}

function VerticalLines({ side = "right" }: { side?: "left" | "right" }) {
  return (
    <div className="absolute top-0 bottom-0 flex gap-3 pointer-events-none"
      style={{ [side]: "clamp(8px, 2.5vw, 32px)" }}>
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="w-px" style={{ background: "var(--color-border)" }}
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: i * 0.15, ease: [0.32, 0.72, 0, 1] }} />
      ))}
    </div>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────
const TEAM = [
  {
    name: "Clint Simiyu", role: "CEO , founder and software engineer", domain: "Architecture & Strategy",
    bio: "Leads technical vision, client strategy, and the overall direction of Softrinx.Backend guru and problem solver",
    image: "/images/images/clint.png",
    website: null,
    linkedin: "https://linkedin.com/in/clint-simiyu/", github: "https://github.com/Clint171", twitter: "https://twitter.com",
  },
  {
    name: "Baruk Ali", role: "COO, co-founder & software engineer", domain: "Operations & Growth",
    bio: "Oversees technical operations, partnerships, and delivery. Ensures every project runs on time and to specification.",
    image: "/images/images/baruk2.png",
    website: null,
    linkedin: "https://www.linkedin.com/in/mohammed-ali-mbaruk-56785639b", github: "https://github.com/Baruk1-netizen", twitter: "https://x.com/Baruk_KE",
  },
  {
    name: "Walter Onyango", role: "Co-Founder & Lead Developer", domain: "Full-Stack Engineering",
    bio: "Architects robust, scalable systems. Our backbone on backend infrastructure and API design.",
    image: "/images/images/walter.png",
    website: "https://waltertaya.pages.dev/",
    linkedin: "https://linkedin.com/in/walter-onyango", github: "https://github.com/waltertaya", twitter: "https://x.com/taya_dev",
  },
  {
    name: "Brian Chege", role: "CTO , Co-Founder & Lead Mobile Dev", domain: "Web & Mobile",
    bio: "Builds seamless cross-platform experiences. Leads all mobile app development at Softrinx.",
    image: "/images/images/brian.jpeg",
    website: "https://www.brianchege.me",
    linkedin: "https://linkedin.com", github: "https://github.com/CHEGEBB", twitter: "https://twitter.com/chegephil24",
  },
  {
    name: "Samwel Njuguna", role: "Co-Founder & Lead AI Engineer", domain: "AI / ML",
    bio: "Leads all AI and ML initiatives. Turns LLMs and intelligent automation into real, shipped products.",
    image: "/images/images/sam2.png",
    website: null,
    linkedin: "https://www.linkedin.com/in/samwel-njuguna/", github: "https://github.com/lewmas9152", twitter: "https://x.com/Njuguna128801",
  },
];

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", position: "relative", overflow: "hidden", cursor: "default" }}>
      <div className="relative overflow-hidden" style={{ height: "clamp(200px, 24vw, 275px)" }}>
        <motion.div className="w-full h-full" animate={{ scale: hovered ? 1.03 : 1 }} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}>
          <Image src={member.image} alt={member.name} fill className="object-contain object-top"
            style={{ filter: hovered ? "grayscale(0%)" : "grayscale(15%)", transition: "filter 0.5s" }} />
        </motion.div>
        <motion.div className="absolute inset-0"
          animate={{ background: hovered ? "linear-gradient(to top,rgba(8,11,9,0.8) 0%,rgba(8,11,9,0.05) 55%)" : "linear-gradient(to top,rgba(8,11,9,0.45) 0%,transparent 50%)" }}
          transition={{ duration: 0.35 }} />
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5"
          style={{ background: "rgba(8,11,9,0.85)", border: "1px solid var(--color-emerald-border)", padding: "0.2rem 0.55rem" }}>
          <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-emerald)" }}>{member.domain}</span>
        </div>

        {/* Website pill — slides up on hover, only shown if member has a website */}
        {member.website && (
          <motion.a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            onClick={e => e.stopPropagation()}
            style={{
              position: "absolute", bottom: "clamp(2.2rem,4vw,2.8rem)", right: "0.75rem",
              display: "flex", alignItems: "center", gap: "0.35rem",
              background: "var(--color-emerald)",
              color: "#040805",
              padding: "0.25rem 0.65rem",
              fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em",
              textDecoration: "none", textTransform: "uppercase",
              pointerEvents: hovered ? "auto" : "none",
            }}
          >
            <Globe size={10} />
            Portfolio
            <ArrowUpRight size={10} />
          </motion.a>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-text)", lineHeight: 1.2 }}>{member.name}</h3>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "var(--color-emerald)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{member.role}</span>
          </div>
          <div className="flex gap-1.5 shrink-0">
            {[{ href: member.linkedin, Icon: Linkedin }, { href: member.github, Icon: Github }, { href: member.twitter, Icon: Twitter }].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center transition-all duration-200"
                style={{ width: 26, height: 26, border: "1px solid var(--color-border)", color: "var(--color-text-faint)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-emerald)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)"; (e.currentTarget as HTMLElement).style.color = "var(--color-text-faint)"; }}>
                <Icon size={11} />
              </a>
            ))}
          </div>
        </div>
        <p style={{ fontSize: "0.77rem", lineHeight: 1.68, color: "var(--color-text-muted)" }}>{member.bio}</p>
      </div>
      <motion.div className="absolute bottom-0 left-0 h-[2px]"
        animate={{ width: hovered ? "100%" : "0%" }} transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        style={{ background: "var(--color-emerald)" }} />
    </motion.div>
  );
}

// ─── Real client work ─────────────────────────────────────────────────────────
const WORK = [
  {
    client: "Irenee", product: "HealthMaster", category: "Health · Mobile & Web",
    description: "A dual-platform health app helping patients adhere to medication schedules through smart reminders, progress tracking, and physician dashboards.",
    result: "Improved medication adherence across patient base",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
  },
  {
    client: "BritechMedia", product: "Brand & Digital Platform", category: "Media · Web",
    description: "Full digital presence and brand platform for BritechMedia — designed, built, and shipped end-to-end by Softrinx.",
    result: "Complete digital identity delivered",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
  },
  {
    client: "DjAfro", product: "StreamBox", category: "Entertainment · Mobile",
    description: "A full-featured movies and content streaming mobile app — custom player, offline downloads, and subscription management built from scratch.",
    result: "End-to-end streaming app shipped",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
  },
  {
    client: "Mercy", product: "Decluttr", category: "Marketplace · Web & Mobile",
    description: "A donation and resale platform where users list items they no longer need — connecting givers and buyers in a clean, purposeful flow.",
    result: "Peer-to-peer marketplace live",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
  },
];

function WorkCard({ w, index }: { w: typeof WORK[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", position: "relative", overflow: "hidden", cursor: "default" }}>
      <div className="relative overflow-hidden" style={{ height: "clamp(150px, 18vw, 210px)" }}>
        <motion.img src={w.image} alt={w.product} className="object-cover w-full h-full"
          animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} />
        <motion.div className="absolute inset-0"
          animate={{ background: hovered ? "rgba(8,11,9,0.55)" : "rgba(8,11,9,0.28)" }} transition={{ duration: 0.35 }} />
        <div className="absolute top-3 left-3">
          <span style={{ fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-emerald)", background: "rgba(8,11,9,0.8)", padding: "0.2rem 0.55rem", border: "1px solid var(--color-emerald-border)" }}>
            {w.category}
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 p-5">
        <div className="flex-1 min-w-0">
          <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-faint)", textTransform: "uppercase", marginBottom: "0.25rem" }}>{w.client}</div>
          <h3 style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--color-text)", marginBottom: "0.5rem" }}>{w.product}</h3>
          <p style={{ fontSize: "0.74rem", lineHeight: 1.65, color: "var(--color-text-muted)", marginBottom: "0.6rem" }}>{w.description}</p>
          <span style={{ fontSize: "0.67rem", fontWeight: 700, color: "var(--color-emerald)", letterSpacing: "0.04em" }}>{w.result}</span>
        </div>
        <motion.div animate={{ x: hovered ? 0 : -4, y: hovered ? 0 : 4, opacity: hovered ? 1 : 0.3 }} transition={{ duration: 0.25 }}
          style={{ width: 32, height: 32, border: "1px solid var(--color-emerald-border)", background: hovered ? "var(--color-emerald)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.25s" }}>
          <ArrowUpRight size={13} style={{ color: hovered ? "#040805" : "var(--color-emerald)" }} />
        </motion.div>
      </div>
      <motion.div className="absolute bottom-0 left-0 h-[2px]"
        animate={{ width: hovered ? "100%" : "0%" }} transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        style={{ background: "var(--color-emerald)" }} />
    </motion.div>
  );
}

// ─── Values ───────────────────────────────────────────────────────────────────
const VALUES = [
  { icon: Code2, title: "Craft over output", body: "We write code we're proud to put our names on. Quality isn't a phase — it's the whole process." },
  { icon: Zap, title: "Speed without shortcuts", body: "Deadlines are real. We move fast through clear systems, not by cutting corners." },
  { icon: Shield, title: "Radical transparency", body: "You always know where your project stands. No surprises, no excuses — just honest progress." },
  { icon: Globe, title: "Built in Africa, for the world", body: "We build From Vision. For Everyone. with global standards. Context-aware, globally competitive." },
];

function ValueCard({ v, index, inView }: { v: typeof VALUES[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const Icon = v.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ padding: "clamp(1.5rem, 2.5vw, 2rem)", border: "1px solid var(--color-border)", background: hovered ? "var(--color-card-hover)" : "var(--color-card)", position: "relative", overflow: "hidden", transition: "background 0.25s", cursor: "default" }}>
      <div className="flex items-center justify-center mb-5"
        style={{ width: 38, height: 38, border: hovered ? "1px solid var(--color-emerald-border)" : "1px solid var(--color-border)", background: hovered ? "var(--color-emerald-bg)" : "transparent", transition: "all 0.25s" }}>
        <Icon size={16} style={{ color: hovered ? "var(--color-emerald)" : "var(--color-text-faint)" }} />
      </div>
      <h4 style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-text)", marginBottom: "0.5rem" }}>{v.title}</h4>
      <p style={{ fontSize: "0.78rem", lineHeight: 1.72, color: "var(--color-text-muted)" }}>{v.body}</p>
      <motion.div className="absolute bottom-0 left-0 h-[2px]"
        animate={{ width: hovered ? "100%" : "0%" }} transition={{ duration: 0.35 }}
        style={{ background: "var(--color-emerald)" }} />
    </motion.div>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { text: "The HealthMaster app completely changed how our patients manage their medication. Softrinx understood the clinical requirements and delivered beyond what we expected.", author: "Irenee", role: "Client — HealthMaster", initial: "I" },
  { text: "Working with Softrinx on our brand platform was seamless. They took our vision seriously and built something we're genuinely proud to show the world.", author: "BritechMedia", role: "Client — Brand & Digital Platform", initial: "B" },
  { text: "Decluttr came to life exactly as we imagined it. The team was communicative, fast, and delivered a polished product that our users love.", author: "Mercy", role: "Client — Decluttr", initial: "M" },
];

// ─── Process ──────────────────────────────────────────────────────────────────
const PROCESS = [
  { num: "01", title: "Discover", body: "Deep dive into goals, users, and constraints. We map the problem before touching the keyboard." },
  { num: "02", title: "Architect", body: "System design, tech stack, API contracts. Every structural decision made upfront, deliberately." },
  { num: "03", title: "Build", body: "Iterative sprints. You see real working progress every week — not just at the end." },
  { num: "04", title: "Ship", body: "CI/CD, staging, go-live checklist. We monitor and iterate after launch, not disappear." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { colors } = useTheme();

  const valuesRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-60px" });
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ background: "var(--color-bg)" }}>
      <Navigation />

      {/* ══ AWESOME HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-between overflow-hidden"
        style={{
          minHeight: "110svh",
          background: "#050505",
          paddingBottom: "100px",
        }}>
        
        <BackgroundHeroImage />

        {/* Hero Core Content Layout */}
        <div className="relative z-10 w-full px-6 mx-auto lg:px-16"
          style={{ maxWidth: "1600px", paddingTop: "160px" }}>
          
          <div className="flex flex-col-reverse gap-12 lg:grid lg:items-center"
            style={{ gridTemplateColumns: "45fr 55fr" }}>

            {/* Left side: Lottie Animation (retained for layout, floating over the dark image) */}
            <motion.div className="flex items-center justify-center"
              initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
              style={{ height: "clamp(280px, 36vw, 500px)" }}>
              <LottieAnimation />
            </motion.div>

            {/* Right side: Text Block */}
            <div className="flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.20, ease: [0.32, 0.72, 0, 1] }}
              >
                <SectionLabel text="About Softrinx" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24, ease: [0.32, 0.72, 0, 1] }}
                style={{
                  fontSize: "clamp(2.6rem, 6vw, 5.8rem)",
                  fontWeight: 900,
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em",
                  color: "#fff", // Forced white because of dark image background
                  marginBottom: "1.5rem"
                }}
              >
                <span className="block">The engineers</span>
                <span className="block" style={{ color: "var(--color-emerald)" }}>behind</span>
                <span className="block">the work.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.36 }}
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.72)",
                  maxWidth: "34rem",
                  marginBottom: "2rem"
                }}
              >
                Softrinx is a full-spectrum tech solutions company built by engineers — covering software, web, mobile, AI/ML, networking and IT. Whether you're a startup, enterprise, or individual, we deliver the expertise you need, all in one place.
              </motion.p>

              {/* Glassmorphic Badges */}
              <motion.div
                className="flex flex-wrap items-center gap-3 mb-8"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.42 }}
              >
                {[{ label: "Westlands, Nairobi, Kenya", icon: MapPin }, { label: "Founded 2024", icon: Target }, { label: "info@softrinx.com", icon: Mail }]
                  .map(({ label, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-2 backdrop-blur-md"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        borderRadius: "9999px",
                        padding: "0.35rem 0.8rem",
                      }}>
                      <Icon size={12} style={{ color: "var(--color-emerald)" }} />
                      <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff" }}>{label}</span>
                    </div>
                  ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-3"
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
                  Work With Us
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
                  View Portfolio
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fading edge to blend into the next section based on active theme */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ height: 120, background: "linear-gradient(to top, var(--color-surface), transparent)" }} />
      </section>

      {/* ══ WHO WE ARE + MISSION + VISION ══════════════════════════════════════ */}
      <section style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)",
        paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid mb-20 gap-14 lg:grid-cols-2 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}>
              <SectionLabel text="Who We Are" />
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>
                From Vision. For Everyone..
                <br />
                <span style={{ color: "var(--color-emerald)" }}>For everywhere.</span>
              </h2>
            </motion.div>

            <motion.div className="flex flex-col" style={{ gap: "1.2rem" }}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              <p style={{ fontSize: "clamp(0.88rem, 1.3vw, 0.97rem)", lineHeight: 1.85, color: "var(--color-text-muted)" }}>
                Softrinx is a full-spectrum tech solutions company built by engineers, developers, and specialists across tech. From software engineering, web development, mobile apps, AI/ML, networking and IT — we bring a complete team to solve any tech challenge.
              </p>
              <p style={{ fontSize: "clamp(0.88rem, 1.3vw, 0.97rem)", lineHeight: 1.85, color: "var(--color-text-muted)" }}>
                We started in 2024 as a group of Computer Science graduates from Dedan Kimathi University of Technology in Westlands, Nairobi. Five engineers who believed world-class software can be built from anywhere. Whether you're a startup, an enterprise scaling fast, or an individual with a bold idea — Softrinx delivers the expertise you need, all in one place.
              </p>
              <div className="flex items-center gap-4 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                <span className="block w-12 h-px" style={{ background: "var(--color-emerald)" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>
                  DeKUT alumni · Nyeri-built · globally ready
                </span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-px lg:grid-cols-2" style={{ background: "var(--color-border)" }}>
            {[
              { label: "Mission", icon: Target, heading: "Empowering through technology.", body: "To empower startups, enterprises, individuals, businesses and companies with accessible, reliable technology solutions that transform challenges into opportunities." },
              { label: "Vision", icon: Globe, heading: "The world's go-to tech partner.", body: "To be the trusted go-to technology partner globally — where any tech issue finds a solution and every digital ambition becomes reality." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  style={{ padding: "clamp(2rem, 3.5vw, 3rem)", background: "var(--color-surface)", position: "relative" }}>
                  {i === 0 && <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "var(--color-emerald)" }} />}
                  <div className="flex items-center gap-3 mb-5">
                    <div style={{ width: 36, height: 36, border: "1px solid var(--color-emerald-border)", background: "var(--color-emerald-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} style={{ color: "var(--color-emerald)" }} />
                    </div>
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-emerald)", textTransform: "uppercase" }}>{item.label}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--color-text)", marginBottom: "1rem", lineHeight: 1.2 }}>{item.heading}</h3>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.78, color: "var(--color-text-muted)" }}>{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ VALUES ═════════════════════════════════════════════════════════════ */}
      <section ref={valuesRef} style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)", background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-14 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="Our Values" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>What we<br />stand for.</h2>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "22rem" }}>
              Not corporate platitudes. These are the actual principles that govern how we hire, how we build, and how we treat every client.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--color-border)" }}>
            {VALUES.map((v, i) => <ValueCard key={v.title} v={v} index={i} inView={valuesInView} />)}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ════════════════════════════════════════════════════════════ */}
      <section ref={processRef} style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="mb-14">
            <SectionLabel text="How We Work" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>The Softrinx<br />playbook.</h2>
          </div>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--color-border)" }}>
            {PROCESS.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 20 }} animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: "clamp(1.5rem, 2.5vw, 2rem)", background: "var(--color-surface)", position: "relative" }}>
                {i === 0 && <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "var(--color-emerald)" }} />}
                <span style={{ display: "block", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1, color: "var(--color-border-mid)", marginBottom: "1rem", userSelect: "none" }}>{step.num}</span>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-text)", marginBottom: "0.6rem" }}>{step.title}</h4>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.72, color: "var(--color-text-muted)" }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ═══════════════════════════════════════════════════════════════ */}
      <section ref={teamRef} style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)", background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-14 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="The Team" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>Five engineers.<br />One standard.</h2>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "22rem" }}>
              Everyone here ships production code, talks to clients, and owns their domain completely. No silos, no middlemen.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--color-border)" }}>
            {TEAM.map((member, i) => <TeamCard key={member.name} member={member} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ CLIENT WORK ════════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-14 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="Work We've Done" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>Real clients.<br />Real products.</h2>
            </div>
            <Link href="/portfolio" className="inline-flex items-center self-start gap-2 font-semibold transition-colors duration-200 group lg:self-auto"
              style={{ color: "var(--color-emerald)", fontSize: "0.85rem" }}>
              Full portfolio <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--color-border)" }}>
            {WORK.map((w, i) => <WorkCard key={w.product} w={w} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═══════════════════════════════════════════════════════ */}
      <section ref={testimonialRef} style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)", background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <div className="absolute pointer-events-none select-none" style={{ top: "8%", right: "-2%", fontSize: "clamp(12rem, 22vw, 22rem)", fontWeight: 900, lineHeight: 1, color: "var(--color-border)", userSelect: "none" }}>"</div>
        <div className="relative px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="mb-14"><SectionLabel text="What Clients Say" /></div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24" style={{ alignItems: "center" }}>
            <div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTestimonial}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <div key={i} style={{ width: 6, height: 6, background: "var(--color-emerald)" }} />)}
                  </div>
                  <blockquote style={{ fontSize: "clamp(1.05rem, 2vw, 1.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.38, color: "var(--color-text)", marginBottom: "2rem" }}>
                    "{TESTIMONIALS[activeTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center font-black"
                      style={{ width: 40, height: 40, background: "var(--color-emerald-bg)", border: "1px solid var(--color-emerald-border)", color: "var(--color-emerald)", fontSize: "0.9rem", flexShrink: 0 }}>
                      {TESTIMONIALS[activeTestimonial].initial}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--color-text)", letterSpacing: "-0.01em" }}>{TESTIMONIALS[activeTestimonial].author}</div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 500, color: "var(--color-text-faint)" }}>{TESTIMONIALS[activeTestimonial].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="flex gap-2 mt-8">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 28 : 6, height: 6, border: "none", cursor: "pointer", padding: 0, background: i === activeTestimonial ? "var(--color-emerald)" : "var(--color-border-mid)", transition: "all 0.3s ease" }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-px" style={{ background: "var(--color-border)" }}>
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 16 }} animate={testimonialInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setActiveTestimonial(i)}
                  style={{ padding: "1.25rem 1.5rem", cursor: "pointer", transition: "all 0.25s", background: i === activeTestimonial ? "var(--color-emerald-bg)" : "var(--color-surface)", borderLeft: `3px solid ${i === activeTestimonial ? "var(--color-emerald)" : "transparent"}` }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 800, letterSpacing: "-0.01em", marginBottom: "0.2rem", color: i === activeTestimonial ? "var(--color-text)" : "var(--color-text-muted)" }}>{t.author}</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--color-text-faint)" }}>{t.role}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════════════════ */}
      <section ref={ctaRef} style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", position: "relative", overflow: "hidden" }}>
        <VerticalLines side="left" />
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid grid-cols-1 gap-px lg:grid-cols-2" style={{ background: "var(--color-border)" }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="relative overflow-hidden"
              style={{ padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)", background: "var(--color-emerald)" }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }}>
                <defs>
                  <pattern id="diag" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="32" stroke="#000" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diag)" />
              </svg>
              <div className="relative z-10">
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "#040805", marginBottom: "1.5rem" }}>
                  Ready to build<br />something real?
                </h2>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-bold transition-all duration-200 group hover:-translate-y-px"
                  style={{ background: "#040805", color: "var(--color-emerald)", padding: "0.85rem 1.8rem", fontSize: "0.88rem" }}>
                  Start a project
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={ctaInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
              style={{ padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4rem)", background: "var(--color-bg)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
              <p style={{ fontSize: "clamp(0.88rem, 1.4vw, 1rem)", lineHeight: 1.82, color: "var(--color-text-muted)", maxWidth: "28rem" }}>
                We work with funded startups, established enterprises, and ambitious teams who want software that performs — not just software that exists.
              </p>
              <div className="flex flex-col gap-3">
                {["No retainer lock-ins", "Fixed-price or T&M — your call", "Full source code, always yours"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div style={{ width: 6, height: 6, background: "var(--color-emerald)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold transition-colors duration-200 group"
                  style={{ color: "var(--color-emerald)", fontSize: "0.85rem" }}>
                  Get in touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="mailto:info@softrinx.com" className="inline-flex items-center gap-2 font-semibold"
                  style={{ color: "var(--color-text-faint)", fontSize: "0.82rem" }}>
                  info@softrinx.com <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}