"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Linkedin, Github, Twitter,
  MapPin, Mail, Code2, Zap, Globe, Shield, Target, ExternalLink,
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Hero Background Image (Unchanged) ────────────────────────────────────────
function BackgroundHeroImage() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <Image
        src="/images/about.png"
        alt="About Softrinx"
        fill
        className="object-cover w-full h-full"
        style={{
          filter: "blur(2px)",
          transform: "scale(1.05)"
        }}
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.6) 40%, rgba(5,5,5,0.95) 100%)",
        }}
      />
    </div>
  );
}

// ─── Helpers (Unchanged) ──────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
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

// ─── Team Data ────────────────────────────────────────────────────────────────
// Accent palette — cycles per team member so each tile's details echo its own
// color (mirrors the distinct color per puzzle tile in the Figma export).
const TEAM_ACCENTS = [
  "#3B82F6", // blue
  "#F09797", 
  "#AB10B9", 
  "#10B981", 
  "#B9B310", 
  "#EB8125", 
  "#EC4899", // pink
];

const TEAM = [
  {
    name: "Clint Simiyu", role: "CEO, Founder & Software Engineer", domain: "Architecture & Strategy",
    bio: "Leads technical vision, client strategy, and the overall direction of Softrinx. Backend guru and problem solver.",
    image: "/images/images/clint3.png", website: null,
    linkedin: "https://linkedin.com/in/clint-simiyu/", github: "https://github.com/Clint171", twitter: "https://twitter.com",
  },
  {
    name: "Baruk Ali", role: "COO, Co-Founder & Software Engineer", domain: "Operations & Growth",
    bio: "Oversees technical operations, partnerships, and delivery. Ensures every project runs on time and to specification.",
    image: "/images/images/baruk2.png", website: null,
    linkedin: "https://www.linkedin.com/in/mohammed-ali-mbaruk-56785639b", github: "https://github.com/Baruk1-netizen", twitter: "https://x.com/Baruk_KE",
  },
  {
    name: "Brian Chege", role: "CTO, Co-Founder & Lead Mobile Dev", domain: "Web & Mobile",
    bio: "Builds seamless cross-platform experiences. Leads all mobile app development at Softrinx.",
    image: "/images/images/brian.png", website: "https://brianchege.vercel.app/",
    linkedin: "https://linkedin.com", github: "https://github.com/CHEGEBB", twitter: "https://twitter.com/chegephil24",
  },
  {
    name: "Walter Onyango", role: "Co-Founder & Lead Developer", domain: "Full-Stack Engineering",
    bio: "Architects robust, scalable systems. Our backbone on backend infrastructure and API design.",
    image: "/images/images/walter2.png", website: "https://waltertaya.pages.dev/",
    linkedin: "https://linkedin.com/in/walter-onyango", github: "https://github.com/waltertaya", twitter: "https://x.com/taya_dev",
  },
  {
    name: "Samwel Njuguna", role: "Co-Founder & Lead AI Engineer", domain: "AI / ML",
    bio: "Leads all AI and ML initiatives. Turns LLMs and intelligent automation into real, shipped products.",
    image: "/images/images/sam.png", website: null,
    linkedin: "https://www.linkedin.com/in/samwel-njuguna/", github: "https://github.com/lewmas9152", twitter: "https://x.com/Njuguna128801",
  },
  {
    name: "Elizabeth Muthoni", role: "Lead Marketer & Web Developer", domain: "Marketing & Web Development",
    bio: "Leads marketing strategy and brand growth, while contributing hands-on to web development work across the team.",
    image: "/images/images/elizabeth.png", website: null,
    linkedin: null, github: null, twitter: null,
  },
  {
    name: "Dante Kadagi", role: "Mobile Developer", domain: "Mobile Development",
    bio: "Builds smooth, reliable mobile experiences across iOS and Android, working closely with design and backend.",
    image: "/images/images/dante.png", website: null,
    linkedin: null, github: null, twitter: null,
  },
];

// ─── Floating Team Tile (Figma image = the entire tile, nothing wraps it) ─────
function TeamTile({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const accent = TEAM_ACCENTS[index % TEAM_ACCENTS.length];

  const socials = [
    { href: member.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: member.github, Icon: Github, label: "GitHub" },
    { href: member.twitter, Icon: Twitter, label: "Twitter" },
  ].filter((s) => s.href);

  // True scatter offset across a 3-col grid instead of a boring even/odd zigzag —
  // three distinct vertical resting positions cycling through the row.
  const offsetPattern = ["lg:mt-0", "lg:mt-16", "lg:mt-6"];
  const offsetClass = offsetPattern[index % offsetPattern.length];

  // Each tile gets its own float signature — amplitude, duration, rotation
  // direction and delay all vary by index so nothing moves in lockstep.
  const floatY = 12 + (index % 3) * 4;          // 12 / 16 / 20 px
  const floatDuration = 4.2 + (index % 4) * 0.6; // 4.2s – 6.0s
  const floatDelay = (index * 0.35) % 1.4;
  const floatRotate = index % 2 === 0 ? 2.2 : -2.2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      className={`flex flex-col h-full w-full max-w-[320px] mx-auto ${offsetClass}`}
    >
      {/* INFINITE FLOATING WRAPPER — unique per tile, settles flat on hover */}
      <motion.div
        animate={{
          y: [0, -floatY, 0],
          rotate: [0, floatRotate, 0],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
        whileHover={{
          y: -22,
          rotate: 0,
          scale: 1.06,
          transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
        }}
        className="relative flex flex-col h-full group cursor-default"
      >
        {/* Ambient color glow — gives the tile depth instead of floating flat
            against the page. Breathes subtly with a slower independent pulse. */}
        <motion.div
          aria-hidden
          animate={{ opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: floatDuration * 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-6 top-6 bottom-10 rounded-full blur-3xl pointer-events-none -z-10"
          style={{ background: accent }}
        />

        {/* THE TILE — raw Figma image, no CSS shapes, no crop */}
        <div
          className="relative w-full aspect-square overflow-visible mb-6 transition-all duration-500 group-hover:drop-shadow-[0_20px_36px_rgba(0,0,0,0.35)]"
          style={{ filter: `drop-shadow(0 14px 26px ${accent}26)` }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain select-none"
            draggable={false}
            sizes="(max-width: 768px) 45vw, 300px"
          />
        </div>

        {/* THE DETAILS */}
        <div className="flex flex-col flex-grow px-2">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ width: 5, height: 5, borderRadius: "999px", background: accent, flexShrink: 0 }} />
            <span style={{ fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>
              {member.domain}
            </span>
          </div>

          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--color-text)", lineHeight: 1.2 }}>
            {member.name}
          </h3>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: accent, letterSpacing: "0.02em", marginTop: "0.25rem", marginBottom: "0.9rem" }}>
            {member.role}
          </p>

          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
            {member.bio}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4" style={{ borderTop: "1px dashed rgba(255,255,255,0.1)" }}>
            <div className="flex gap-2">
              {socials.length > 0 ? (
                socials.map(({ href, Icon, label }) => (
                  <a
                    key={label} href={href as string} target="_blank" rel="noopener noreferrer"
                    aria-label={`${member.name} on ${label}`}
                    className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      width: 32, height: 32, borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "var(--color-text-faint)",
                      background: "rgba(255,255,255,0.02)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = accent;
                      e.currentTarget.style.color = "#050505";
                      e.currentTarget.style.borderColor = accent;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.color = "var(--color-text-faint)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    }}
                  >
                    <Icon size={14} />
                  </a>
                ))
              ) : (
                <span style={{ fontSize: "0.68rem", color: "var(--color-text-faint)" }}>&nbsp;</span>
              )}
            </div>

            {member.website && (
              <a href={member.website} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-all duration-200 hover:opacity-80"
                style={{ fontSize: "0.75rem", fontWeight: 700, color: accent }}
              >
                Portfolio <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Real client work (Unchanged) ─────────────────────────────────────────────
const WORK = [
  { client: "Irenee", product: "HealthMaster", category: "Health · Mobile & Web", description: "A dual-platform health app helping patients adhere to medication schedules through smart reminders, progress tracking, and physician dashboards.", result: "Improved medication adherence across patient base", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop" },
  { client: "BritechMedia", product: "Brand & Digital Platform", category: "Media · Web", description: "Full digital presence and brand platform for BritechMedia — designed, built, and shipped end-to-end by Softrinx.", result: "Complete digital identity delivered", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop" },
  { client: "DjAfro", product: "StreamBox", category: "Entertainment · Mobile", description: "A full-featured movies and content streaming mobile app — custom player, offline downloads, and subscription management built from scratch.", result: "End-to-end streaming app shipped", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop" },
  { client: "Mercy", product: "Decluttr", category: "Marketplace · Web & Mobile", description: "A donation and resale platform where users list items they no longer need — connecting givers and buyers in a clean, purposeful flow.", result: "Peer-to-peer marketplace live", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop" },
];

function ParallaxWorkImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden", height: "100%" }}>
      <motion.img src={src} alt={alt} style={{ position: "absolute", top: "-8%", left: 0, width: "100%", height: "116%", objectFit: "cover", y }} />
    </div>
  );
}

function WorkCard({ w, index }: { w: typeof WORK[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.07, ease: [0.32, 0.72, 0, 1] }} style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "1.25rem", overflow: "hidden" }}>
      <div style={{ height: "clamp(150px, 18vw, 210px)" }}>
        <ParallaxWorkImage src={w.image} alt={w.product} />
      </div>
      <div style={{ padding: "1.4rem" }}>
        <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-emerald)", textTransform: "uppercase", marginBottom: "0.4rem" }}>{w.category}</div>
        <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--color-text-faint)", textTransform: "uppercase", marginBottom: "0.3rem" }}>{w.client}</div>
        <h3 style={{ fontSize: "1.02rem", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--color-text)", marginBottom: "0.55rem" }}>{w.product}</h3>
        <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--color-text-muted)", marginBottom: "0.7rem" }}>{w.description}</p>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-emerald)" }}>{w.result}</span>
      </div>
    </motion.div>
  );
}

// ─── Values (Unchanged) ───────────────────────────────────────────────────────
const VALUES = [
  { icon: Code2, title: "Craft over output", body: "We write code we're proud to put our names on. Quality isn't a phase — it's the whole process." },
  { icon: Zap, title: "Speed without shortcuts", body: "Deadlines are real. We move fast through clear systems, not by cutting corners." },
  { icon: Shield, title: "Radical transparency", body: "You always know where your project stands. No surprises, no excuses — just honest progress." },
  { icon: Globe, title: "Built in Africa, for the world", body: "We build From Vision. For Everyone. with global standards. Context-aware, globally competitive." },
];

function ValueCard({ v, index, inView }: { v: typeof VALUES[0]; index: number; inView: boolean }) {
  const Icon = v.icon;
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }} style={{ padding: "clamp(1.5rem, 2.5vw, 2rem)", border: "1px solid var(--color-border)", borderRadius: "1.25rem", background: "var(--color-card, var(--color-surface))" }}>
      <div className="flex items-center justify-center mb-5" style={{ width: 40, height: 40, borderRadius: "0.75rem", border: "1px solid var(--color-border)" }}>
        <Icon size={17} style={{ color: "var(--color-emerald)" }} />
      </div>
      <h4 style={{ fontSize: "0.92rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-text)", marginBottom: "0.5rem" }}>{v.title}</h4>
      <p style={{ fontSize: "0.8rem", lineHeight: 1.7, color: "var(--color-text-muted)" }}>{v.body}</p>
    </motion.div>
  );
}

// ─── Process (Unchanged) ──────────────────────────────────────────────────────
const PROCESS = [
  { num: "01", title: "Discover", body: "Deep dive into goals, users, and constraints. We map the problem before touching the keyboard." },
  { num: "02", title: "Architect", body: "System design, tech stack, API contracts. Every structural decision made upfront, deliberately." },
  { num: "03", title: "Build", body: "Iterative sprints. You see real working progress every week — not just at the end." },
  { num: "04", title: "Ship", body: "CI/CD, staging, go-live checklist. We monitor and iterate after launch, not disappear." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const valuesRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const testimonialInView = useInView(testimonialRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  const TESTIMONIALS = [
    { text: "The HealthMaster app completely changed how our patients manage their medication. Softrinx understood the clinical requirements and delivered beyond what we expected.", author: "Irenee", role: "Client — HealthMaster", initial: "I" },
    { text: "Working with Softrinx on our brand platform was seamless. They took our vision seriously and built something we're genuinely proud to show the world.", author: "BritechMedia", role: "Client — Brand & Digital Platform", initial: "B" },
    { text: "Decluttr came to life exactly as we imagined it. The team was communicative, fast, and delivered a polished product that our users love.", author: "Mercy", role: "Client — Decluttr", initial: "M" },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <main style={{ background: "var(--color-bg)" }}>
      <Navigation />

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "92svh", background: "#050505", borderBottomLeftRadius: "clamp(24px, 4vw, 48px)", borderBottomRightRadius: "clamp(24px, 4vw, 48px)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "80px" }}>
        <BackgroundHeroImage />
        <div className="relative z-10 w-full px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px", paddingTop: "140px" }}>
          <div className="flex flex-col items-start max-w-4xl text-left">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}>
              <SectionLabel text="About Softrinx" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.20, ease: [0.32, 0.72, 0, 1] }}
              style={{ fontSize: "clamp(3.2rem, 7vw, 6.5rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", color: "#ffffff", marginBottom: "1.5rem" }}>
              <span className="block">The engineers</span>
              <span className="block" style={{ color: "var(--color-emerald)" }}>behind</span>
              <span className="block">the work.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.30 }}
              style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.7)", maxWidth: "36rem", marginBottom: "2.5rem" }}>
              We are a collective of engineers and strategists building scalable software for ambitious brands. No fluff, just shipped products.
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.40 }}>
              <Link href="/contact" className="group inline-flex items-center gap-2 font-bold transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
                style={{ background: "var(--color-emerald)", color: "#040805", padding: "1rem 2.2rem", fontSize: "clamp(0.9rem, 1.15vw, 1rem)", boxShadow: "0 0 28px var(--color-emerald-glow)", borderRadius: "9999px" }}>
                Work With Us
                <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-2 font-semibold transition-all duration-200 group backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.12)", padding: "1rem 2.2rem", fontSize: "clamp(0.9rem, 1.15vw, 1rem)", borderRadius: "9999px" }}>
                View Portfolio
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE + MISSION + VISION ══════════════════════════════════════ */}
      <section style={{ background: "var(--color-surface)", paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid mb-20 gap-14 lg:grid-cols-2 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}>
              <SectionLabel text="Who We Are" />
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>
                From Vision. For Everyone.<br /><span style={{ color: "var(--color-emerald)" }}>For everywhere.</span>
              </h2>
            </motion.div>
            <motion.div className="flex flex-col" style={{ gap: "1.2rem" }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
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
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { label: "Mission", icon: Target, heading: "Empowering through technology.", body: "To empower startups, enterprises, individuals, businesses and companies with accessible, reliable technology solutions that transform challenges into opportunities." },
              { label: "Vision", icon: Globe, heading: "The world's go-to tech partner.", body: "To be the trusted go-to technology partner globally — where any tech issue finds a solution and every digital ambition becomes reality." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
                  style={{ padding: "clamp(2rem, 3.5vw, 3rem)", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "1.5rem" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div style={{ width: 38, height: 38, borderRadius: "0.75rem", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
      <section ref={valuesRef} style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(72px, 10vw, 112px)", background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", borderTop: "1px solid var(--color-border)" }}>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} animate={processInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} style={{ padding: "clamp(1.5rem, 2.5vw, 2rem)", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "1.25rem" }}>
                <span style={{ display: "block", fontSize: "clamp(2.5rem, 4vw, 3.6rem)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1, color: "var(--color-border-mid, var(--color-border))", marginBottom: "1rem", userSelect: "none" }}>{step.num}</span>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-text)", marginBottom: "0.6rem" }}>{step.title}</h4>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.72, color: "var(--color-text-muted)" }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM (FLOATING PUZZLE TILES) ═══════════════════════════════════════ */}
      <section ref={teamRef} style={{ paddingTop: "clamp(72px, 10vw, 112px)", paddingBottom: "clamp(120px, 15vw, 180px)", background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-20 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="The Team" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>Seven people.<br />One standard.</h2>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "22rem" }}>
              Everyone here ships production work, talks to clients, and owns their domain completely. No silos, no middlemen.
            </p>
          </div>

          {/* SCATTERED PUZZLE GRID */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-8">
            {TEAM.map((member, i) => <TeamTile key={member.name} member={member} index={i} />)}
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
            <Link href="/portfolio" className="inline-flex items-center self-start gap-2 font-semibold transition-colors duration-200 group lg:self-auto" style={{ color: "var(--color-emerald)", fontSize: "0.85rem" }}>
              Full portfolio <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: "999px", background: "var(--color-emerald)" }} />)}
                  </div>
                  <blockquote style={{ fontSize: "clamp(1.05rem, 2vw, 1.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.38, color: "var(--color-text)", marginBottom: "2rem" }}>
                    "{TESTIMONIALS[activeTestimonial].text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center font-black" style={{ width: 40, height: 40, borderRadius: "0.75rem", background: "var(--color-emerald-bg, var(--color-surface))", border: "1px solid var(--color-border)", color: "var(--color-emerald)", fontSize: "0.9rem", flexShrink: 0 }}>
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
                  <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 28 : 6, height: 6, borderRadius: "999px", border: "none", cursor: "pointer", padding: 0, background: i === activeTestimonial ? "var(--color-emerald)" : "var(--color-border-mid, var(--color-border))", transition: "all 0.3s ease" }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 16 }} animate={testimonialInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} onClick={() => setActiveTestimonial(i)}
                  style={{ padding: "1.1rem 1.4rem", cursor: "pointer", borderRadius: "1rem", border: `1px solid ${i === activeTestimonial ? "var(--color-emerald)" : "var(--color-border)"}`, background: i === activeTestimonial ? "var(--color-emerald-bg, var(--color-surface))" : "var(--color-surface)" }}>
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
          <div className="grid grid-cols-1 gap-6 py-16 lg:grid-cols-2 lg:py-24">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={ctaInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} className="relative overflow-hidden"
              style={{ padding: "clamp(2.5rem, 5vw, 4rem)", background: "var(--color-emerald)", borderRadius: "1.5rem" }}>
              <div className="relative z-10">
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "#040805", marginBottom: "1.5rem" }}>
                  Ready to build<br />something real?
                </h2>
                <Link href="/contact" className="inline-flex items-center gap-2 font-bold transition-all duration-200 group hover:-translate-y-px" style={{ background: "#040805", color: "var(--color-emerald)", padding: "0.85rem 1.8rem", fontSize: "0.88rem", borderRadius: "0.75rem" }}>
                  Start a project
                  <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={ctaInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
              style={{ padding: "clamp(2.5rem, 5vw, 4rem)", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
              <p style={{ fontSize: "clamp(0.88rem, 1.4vw, 1rem)", lineHeight: 1.82, color: "var(--color-text-muted)", maxWidth: "28rem" }}>
                We work with funded startups, established enterprises, and ambitious teams who want software that performs — not just software that exists.
              </p>
              <div className="flex flex-col gap-3">
                {["No retainer lock-ins", "Fixed-price or T&M — your call", "Full source code, always yours"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div style={{ width: 6, height: 6, borderRadius: "999px", background: "var(--color-emerald)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold transition-colors duration-200 group" style={{ color: "var(--color-emerald)", fontSize: "0.85rem" }}>
                  Get in touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a href="mailto:info@softrinx.com" className="inline-flex items-center gap-2 font-semibold" style={{ color: "var(--color-text-faint)", fontSize: "0.82rem" }}>
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