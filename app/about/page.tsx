"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Linkedin, Github, Twitter, ExternalLink
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Hero Background Image ────────────────────────────────────────────────────
function BackgroundHeroImage() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <Image
        src="/images/footer.png"
        alt="About Softrinx"
        fill
        className="object-cover w-full h-full"
        style={{ filter: "blur(2px)", transform: "scale(1.05)" }}
        priority
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.6) 40%, rgba(5,5,5,0.95) 100%)" }} />
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-2 h-2" style={{ background: "var(--color-emerald)", boxShadow: "0 0 10px var(--color-emerald)" }} />
      <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
        {text}
      </span>
    </div>
  );
}

// ─── Timeline Data (Using Unsplash Placeholders) ──────────────────────────────
const TIMELINE = [
  {
    year: "2024",
    title: "The Genesis",
    desc: "Founded in Nairobi by a group of Computer Science graduates from Dedan Kimathi University of Technology. Five engineers with a shared conviction that world-class software can be built from anywhere.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop", 
  },
  {
    year: "2025",
    title: "Scaling Architecture",
    desc: "Transitioned from simple builds to complex architectural solutions. We began upgrading legacy systems and engineering robust payment integrations for growing enterprises.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop", 
  },
  {
    year: "2026",
    title: "The Tech Collective",
    desc: "Pushing the boundaries of what a streamlined agency can achieve. Integrating custom AI models directly into production, turning complex concepts into scalable products for global clients.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
];

function TimelineItem({ item, index }: { item: typeof TIMELINE[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${isEven ? "" : "lg:flex-row-reverse"}`}>
      {/* Center Node */}
      <div className="absolute left-[20px] lg:left-1/2 w-4 h-4 border-2 border-[var(--color-bg)] z-10 -translate-x-1/2 transition-all duration-500" 
           style={{ background: inView ? "var(--color-emerald)" : "var(--color-border-mid)", boxShadow: inView ? "0 0 15px var(--color-emerald)" : "none" }} />

      {/* Content */}
      <motion.div className="w-full lg:w-1/2 pl-12 lg:pl-0 flex flex-col" initial={{ opacity: 0, x: isEven ? -30 : 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }} style={{ textAlign: isEven ? "right" : "left" }}>
        <div className={`flex flex-col ${isEven ? "lg:items-end" : "lg:items-start"}`}>
          <span className="text-[var(--color-emerald)] font-black text-6xl md:text-8xl tracking-tighter opacity-10 leading-none mb-2 select-none">
            {item.year}
          </span>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[var(--color-text)] mb-4 leading-tight">
            {item.title}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed max-w-md">
            {item.desc}
          </p>
        </div>
      </motion.div>

      {/* Image Frame */}
      <motion.div className="w-full lg:w-1/2 pl-12 lg:pl-0 h-[300px] relative flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden" 
        initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </motion.div>
    </div>
  );
}

// ─── Notched SVG Cards (Rules We Build By) ────────────────────────────────────
const VALUES = [
  { num: "01", title: "Craft Over Output", body: "Quality is not a phase; it is the entire process. We write code designed to scale and built to last.", svg: "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { num: "02", title: "Speed via Systems", body: "Deadlines are absolute. We move rapidly through established architecture, never by cutting corners.", svg: "https://images.unsplash.com/photo-1782088589630-5401fafc4351?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { num: "03", title: "Radical Transparency", body: "You will always know exactly where your project stands. No surprises. Just honest, measurable progress.", svg: "https://images.unsplash.com/photo-1782723590689-05aef74f4f77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

function ValueCard({ v, index }: { v: typeof VALUES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} 
      className="group relative flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-emerald)] transition-colors duration-500"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)" }} 
    >
      <div className="h-48 w-full relative border-b border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-emerald)] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        
        {/* CHANGED: Wrapper is now w-full h-full, and Image uses object-cover to fully fill the space */}
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
          <Image src={v.svg} alt={v.title} fill className="object-cover" />
        </div>
      </div>
      
      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <span className="text-[var(--color-emerald)] font-mono font-bold text-sm mb-4 block">
          [{v.num}]
        </span>
        <h4 className="text-xl md:text-2xl font-black tracking-tight text-[var(--color-text)] mb-3">
          {v.title}
        </h4>
        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mt-auto">
          {v.body}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Playbook Data (Minimalist Text Grid) ─────────────────────────────────────
const PROCESS = [
  { num: "01", title: "Discovery & Mapping", body: "A rigorous deep dive into business goals, technical requirements, and system constraints. We map the entire problem space before writing a single line of code.", link: "Explore discovery phase" },
  { num: "02", title: "System Architecture", body: "Comprehensive system design, scalable technology stacks, and secure API contracts. Every structural decision is made upfront deliberately to ensure long-term stability.", link: "View architectural standards" },
  { num: "03", title: "Iterative Engineering", body: "Agile, transparent development sprints. You see functional, working progress delivered consistently to staging environments, not just a final reveal at the end.", link: "See our sprint flow" },
  { num: "04", title: "Deployment & Scale", body: "Automated CI/CD pipelines, rigorous pre-launch staging, and a strict go-live checklist. We actively monitor, maintain, and optimize post-launch.", link: "Learn about deployment" },
];

// ─── Floating Puzzle Tiles (Team) ─────────────────────────────────────────────
const TEAM_ACCENTS = ["#3B82F6", "#F09797", "#AB10B9", "#10B981", "#B9B310", "#EB8125", "#EC4899"];
const TEAM = [
  { name: "Clint Simiyu", role: "CEO, Founder & Software Engineer", domain: "Architecture & Strategy", bio: "Leads technical vision, client strategy, and the overall direction of Softrinx. Backend guru and problem solver.", image: "/images/images/clint3.png", website: null, linkedin: "https://linkedin.com/in/clint-simiyu/", github: "https://github.com/Clint171", twitter: "https://twitter.com" },
  { name: "Baruk Ali", role: "COO, Co-Founder & Software Engineer", domain: "Operations & Growth", bio: "Oversees technical operations, partnerships, and delivery. Ensures every project runs on time and to specification.", image: "/images/images/baruk2.png", website: null, linkedin: "https://www.linkedin.com/in/mohammed-ali-mbaruk-56785639b", github: "https://github.com/Baruk1-netizen", twitter: "https://x.com/Baruk_KE" },
  { name: "Brian Chege", role: "CTO, Co-Founder & Lead Mobile Dev", domain: "Web & Mobile", bio: "Builds seamless cross-platform experiences. Leads all mobile app development at Softrinx.", image: "/images/images/brian.png", website: "https://brianchege.vercel.app/", linkedin: "https://linkedin.com", github: "https://github.com/CHEGEBB", twitter: "https://twitter.com/chegephil24" },
  { name: "Walter Onyango", role: "Co-Founder & Lead Developer", domain: "Full-Stack Engineering", bio: "Architects robust, scalable systems. Our backbone on backend infrastructure and API design.", image: "/images/images/walter2.png", website: "https://waltertaya.pages.dev/", linkedin: "https://linkedin.com/in/walter-onyango", github: "https://github.com/waltertaya", twitter: "https://x.com/taya_dev" },
  { name: "Samwel Njuguna", role: "Co-Founder & Lead AI Engineer", domain: "AI / ML", bio: "Leads all AI and ML initiatives. Turns LLMs and intelligent automation into real, shipped products.", image: "/images/images/sam.png", website: null, linkedin: "https://www.linkedin.com/in/samwel-njuguna/", github: "https://github.com/lewmas9152", twitter: "https://x.com/Njuguna128801" },
  { name: "Elizabeth Muthoni", role: "Lead Marketer & Web Developer", domain: "Marketing & Web Development", bio: "Leads marketing strategy and brand growth, while contributing hands-on to web development work across the team.", image: "/images/images/elizabeth.png", website: null, linkedin: null, github: null, twitter: null },
  { name: "Dante Kadagi", role: "Mobile Developer", domain: "Mobile Development", bio: "Builds smooth, reliable mobile experiences across iOS and Android, working closely with design and backend.", image: "/images/images/dante.png", website: null, linkedin: null, github: null, twitter: null },
];

function TeamTile({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const accent = TEAM_ACCENTS[index % TEAM_ACCENTS.length];

  const socials = [{ href: member.linkedin, Icon: Linkedin, label: "LinkedIn" }, { href: member.github, Icon: Github, label: "GitHub" }, { href: member.twitter, Icon: Twitter, label: "Twitter" }].filter((s) => s.href);
  const offsetPattern = ["lg:mt-0", "lg:mt-16", "lg:mt-6"];
  const offsetClass = offsetPattern[index % offsetPattern.length];

  const floatY = 12 + (index % 3) * 4;
  const floatDuration = 4.2 + (index % 4) * 0.6;
  const floatDelay = (index * 0.35) % 1.4;
  const floatRotate = index % 2 === 0 ? 2.2 : -2.2;

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }} className={`flex flex-col h-full w-full max-w-[320px] mx-auto ${offsetClass}`}>
      <motion.div animate={{ y: [0, -floatY, 0], rotate: [0, floatRotate, 0] }} transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }} whileHover={{ y: -22, rotate: 0, scale: 1.06, transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] } }} className="relative flex flex-col h-full group cursor-default">
        <motion.div aria-hidden animate={{ opacity: [0.18, 0.32, 0.18] }} transition={{ duration: floatDuration * 1.4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-x-6 top-6 bottom-10 rounded-full blur-3xl pointer-events-none -z-10" style={{ background: accent }} />
        <div className="relative w-full aspect-square overflow-visible mb-6 transition-all duration-500 group-hover:drop-shadow-[0_20px_36px_rgba(0,0,0,0.35)]" style={{ filter: `drop-shadow(0 14px 26px ${accent}26)` }}>
          <Image src={member.image} alt={member.name} fill className="object-contain select-none" draggable={false} sizes="(max-width: 768px) 45vw, 300px" />
        </div>
        <div className="flex flex-col flex-grow px-2">
          <div className="flex items-center gap-2 mb-2">
            <span style={{ width: 5, height: 5, background: accent, flexShrink: 0 }} />
            <span style={{ fontSize: "0.64rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>{member.domain}</span>
          </div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, letterSpacing: "-0.03em", color: "var(--color-text)", lineHeight: 1.2 }}>{member.name}</h3>
          <p style={{ fontSize: "0.8rem", fontWeight: 700, color: accent, letterSpacing: "0.02em", marginTop: "0.25rem", marginBottom: "0.9rem" }}>{member.role}</p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>{member.bio}</p>
          <div className="mt-auto flex items-center justify-between pt-4" style={{ borderTop: "1px dashed var(--color-border-mid)" }}>
            <div className="flex gap-2">
              {socials.length > 0 ? (
                socials.map(({ href, Icon, label }) => (
                  <a key={label} href={href as string} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on ${label}`} className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1" style={{ width: 32, height: 32, border: "1px solid var(--color-border)", color: "var(--color-text-faint)", background: "var(--color-surface)" }} onMouseEnter={(e) => { e.currentTarget.style.background = accent; e.currentTarget.style.color = "#050505"; e.currentTarget.style.borderColor = accent; }} onMouseLeave={(e) => { e.currentTarget.style.background = "var(--color-surface)"; e.currentTarget.style.color = "var(--color-text-faint)"; e.currentTarget.style.borderColor = "var(--color-border)"; }}>
                    <Icon size={14} />
                  </a>
                ))
              ) : (<span style={{ fontSize: "0.68rem", color: "var(--color-text-faint)" }}>&nbsp;</span>)}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <main style={{ background: "var(--color-bg)" }}>
      <Navigation />

      {/* ══ HERO ═════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "92svh", background: "#050505", borderBottomLeftRadius: "clamp(24px, 4vw, 48px)", borderBottomRightRadius: "clamp(24px, 4vw, 48px)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "80px", zIndex: 10 }}>
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
          </div>
        </div>
      </section>

      {/* ══ TIMELINE (OUR STORY) ═══════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-bg)", paddingTop: "clamp(90px, 12vw, 160px)", paddingBottom: "clamp(90px, 12vw, 160px)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col items-center text-center mb-24">
            <SectionLabel text="Our Story" />
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>
              The <span style={{ color: "var(--color-emerald)" }}>Evolution.</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-[28px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--color-border)] -translate-x-1/2" />
            <div className="flex flex-col gap-20 lg:gap-32">
              {TIMELINE.map((item, i) => (
                <TimelineItem key={item.year} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES (SHARP NOTCHED CARDS) ═══════════════════════════════════════ */}
      <section style={{ paddingTop: "clamp(90px, 12vw, 160px)", paddingBottom: "clamp(90px, 12vw, 160px)", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", borderTop: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col gap-6 mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel text="Core Principles" />
              <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>
                The rules<br />we build by.
              </h2>
            </div>
            <p className="text-[var(--color-text-muted)] max-w-md text-sm md:text-base leading-relaxed">
              These are the actual principles that govern how we engineer solutions, how we collaborate, and how we deliver for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, i) => <ValueCard key={v.title} v={v} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ PLAYBOOK (MINIMALIST TEXT GRID) ════════════════════════════════════ */}
      <section style={{ paddingTop: "clamp(90px, 12vw, 160px)", paddingBottom: "clamp(90px, 12vw, 160px)", background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          
          <div className="mb-20">
            <SectionLabel text="Methodology" />
            <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>
              The Softrinx<br />playbook.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24 lg:gap-y-20">
            {PROCESS.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }} 
                className="flex flex-col group cursor-default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-[var(--color-emerald)] font-mono">{step.num}</span>
                  <h4 className="text-2xl font-black tracking-tight text-[var(--color-text)] group-hover:text-[var(--color-emerald)] transition-colors duration-300">
                    {step.title}
                  </h4>
                </div>
                <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed mb-6">
                  {step.body}
                </p>
                <a className="inline-flex items-center gap-2 self-start text-xs font-bold tracking-widest uppercase text-[var(--color-text)] border-b border-dashed border-[var(--color-emerald)] pb-1 transition-all duration-300 group-hover:text-[var(--color-emerald)]">
                  {step.link} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ TEAM (FLOATING PUZZLE TILES) ═══════════════════════════════════════ */}
      <section style={{ paddingTop: "clamp(90px, 12vw, 160px)", paddingBottom: "clamp(120px, 15vw, 180px)", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-20 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="The Team" />
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, color: "var(--color-text)" }}>
                Driven by <br />expertise.
              </h2>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "24rem" }}>
              A dedicated collective of software engineers, designers, and strategists. Everyone here builds production work and owns their domain completely.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-8">
            {TEAM.map((member, i) => <TeamTile key={member.name} member={member} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ FULL-WIDTH CTA ═════════════════════════════════════════════════════ */}
      <section ref={ctaRef} className="w-full relative overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        
        <div className="flex flex-col lg:flex-row w-full h-full">
          
          {/* LEFT: Shaped CTA Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={ctaInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }} 
            className="relative w-full lg:w-1/2 p-10 lg:p-20 xl:p-32 flex flex-col justify-center bg-[var(--color-surface)] border-r border-[var(--color-border)] z-10"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%)" }} 
          >
            <SectionLabel text="Initiate Project" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight leading-[1.05] mb-6">
              Ready to engineer <br/>
              your vision?
            </h2>
            <p className="text-[var(--color-text-muted)] text-sm md:text-base max-w-sm leading-relaxed mb-10">
              We partner with ambitious startups and established enterprises to build software that performs. No lock-ins, full source code ownership.
            </p>
            
            <Link href="/contact" className="inline-flex items-center gap-3 font-bold transition-all duration-300 group self-start border border-[var(--color-emerald)] hover:bg-[var(--color-emerald)] text-[var(--color-text)] hover:text-[#040805]" 
              style={{ padding: "1.2rem 2.5rem", fontSize: "1rem" }}>
              Start a Conversation
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* RIGHT: Full Bleed Image (No padding, original colors) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={ctaInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }} 
            className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full overflow-hidden"
          >
            <Image 
              src="/images/bgcta.svg" 
              alt="Architecture Graphic" 
              fill 
              className="object-cover transition-transform duration-700 hover:scale-105" 
            />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}