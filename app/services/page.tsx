"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import {
  Globe, Smartphone, Brain, Building2,
  ArrowUpRight, ArrowRight, Check, Star, 
  Flame, Code2, Lock, Zap, Search
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => {
          setCount(Math.floor(v).toString() + suffix);
        }
      });
      return controls.stop;
    }
  }, [inView, value, suffix, duration]);

  return <span ref={ref}>{count}</span>;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "web",
    icon: Globe,
    number: "01",
    title: "Full-Stack Web Development",
    tagline: "Production-grade architectures.",
    sell: "We engineer fast, scalable web applications. Whether it's a B2B SaaS, a high-traffic consumer platform, or complex internal tooling — we own the stack from database to deployment.",
    features: [
      "Custom application architecture",
      "REST & GraphQL API design",
      "PostgreSQL & NoSQL optimization",
      "Secure auth & role-based access",
      "Third-party API integrations",
      "CI/CD pipeline configuration",
    ],
    pricing: "From KES 10,000",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mobile",
    icon: Smartphone,
    number: "02",
    title: "Mobile App Development",
    tagline: "Native performance. Every platform.",
    sell: "Polished, high-performance mobile applications that command engagement. We handle the complete lifecycle — from initial architecture to final App Store publishing.",
    features: [
      "Cross-platform iOS & Android",
      "Fluid, responsive mobile UI/UX",
      "Offline-first local storage",
      "Push notification systems",
      "Secure in-app transactions",
      "Automated store deployments",
    ],
    pricing: "From KES 25,000",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ai",
    icon: Brain,
    number: "03",
    title: "AI & Machine Learning",
    tagline: "Applied intelligence, not just wrappers.",
    sell: "We integrate genuine machine learning capabilities into your products. From custom-trained computer vision models like AgriLens to sophisticated NLP pipelines.",
    features: [
      "Custom ML model training",
      "LLM integration & fine-tuning",
      "Computer vision systems",
      "NLP & text analysis pipelines",
      "Predictive data modeling",
      "Production model monitoring",
    ],
    pricing: "From KES 40,000",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "msme",
    icon: Building2,
    number: "04",
    title: "MSME Enterprise Solutions",
    tagline: "Run like a tier-one company.",
    sell: "We digitize small and medium businesses to punch above their weight. Get professional digital storefronts coupled with bespoke internal tools for inventory and M-Pesa payments.",
    features: [
      "Professional corporate presence",
      "M-Pesa Daraja API integration",
      "Custom inventory management",
      "Automated client reporting",
      "Built-in security & backups",
      "Ongoing system maintenance",
    ],
    pricing: "From KES 8,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "seo",
    icon: Search,
    number: "05",
    title: "SEO & Performance Optimization",
    tagline: "Be seen. Load instantly.",
    sell: "We ensure your MSME or enterprise platform ranks high and loads fast. From technical SEO audits to Core Web Vitals optimization, we build software that search engines and users love.",
    features: [
      "Technical SEO implementation",
      "Core Web Vitals optimization",
      "Schema markup & structured data",
      "Performance & speed auditing",
      "On-page content strategy",
      "Analytics & rank tracking setup",
    ],
    pricing: "From KES 15,000",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "KES 10,000",
    description: "Perfect for individuals and small teams beginning to build their digital presence.",
    features: [
      "Up to 5-page web application",
      "Responsive design included",
      "Basic auth & database",
      "Deployment to Vercel / Cloudflare",
      "1 round of revisions",
      "7-day delivery",
    ],
    highlight: false,
    icon: Building2,
  },
  {
    name: "Growth",
    price: "KES 35,000",
    description: "Designed for growing companies ready to integrate scalable software into their operations.",
    features: [
      "Full-stack web or mobile app",
      "Custom UI/UX design",
      "API integrations",
      "Auth + role-based access",
      "Database design & optimisation",
      "3 rounds of revisions",
      "14–21 day delivery",
      "30-day post-launch support",
    ],
    highlight: true,
    icon: Star,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom-built for enterprises seeking full-scale digital transformation and ongoing support.",
    features: [
      "Full system architecture design",
      "AI / ML integration",
      "Microservices & cloud infra",
      "Security hardening",
      "Dedicated point of contact",
      "Weekly progress reports",
      "Unlimited revisions",
      "Ongoing retainer available",
    ],
    highlight: false,
    icon: Flame,
  },
];

// ─── Hero background video ────────────────────────────────────────────────────
function HeroVideoBackground({ videoScale, videoY }: { videoScale: any; videoY: any; }) {
  return (
    <motion.div className="absolute inset-0" style={{ scale: videoScale, y: videoY, zIndex: 0 }}>
      <video autoPlay muted loop playsInline poster="/images/services-hero-poster.jpg" className="absolute inset-0 object-cover w-full h-full">
        <source src="/videos/services-hero.webm" type="video/webm" />
        <source src="/images/heroo3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.5) 38%, rgba(5,5,5,0.68) 72%, rgba(5,5,5,0.97) 100%)" }} />
    </motion.div>
  );
}

// ─── Clean Service Component ──────────────────────────────────────────────────
function ServiceSection({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reverse = index % 2 !== 0;

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        <div className={`flex flex-col gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-black text-[var(--color-border-bright)]">
                {service.number}
              </span>
              <h3 className="text-2xl lg:text-4xl font-black tracking-tight text-[var(--color-text)]">{service.title}</h3>
            </div>

            <h4 className="text-xl lg:text-2xl font-semibold mb-6 leading-tight text-[var(--color-emerald)]">
              {service.tagline}
            </h4>

            <p className="text-base lg:text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-2xl">
              {service.sell}
            </p>

            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">
              {service.features.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--color-emerald)]" />
                  <span className="text-sm font-medium text-[var(--color-text-muted)]">{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-[var(--color-border)] flex flex-wrap items-center gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-faint)] mb-1">Starting At</p>
                <p className="text-2xl font-bold text-[var(--color-text)]">{service.pricing}</p>
              </div>
              <Link href="/contact" className="group flex items-center gap-3 text-sm font-bold transition-all text-[var(--color-emerald)] uppercase tracking-widest">
                Request a quote 
                <span className="bg-[var(--color-surface)] p-2 rounded-full group-hover:bg-[var(--color-emerald)] group-hover:text-[#111827] transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] max-w-[600px] mx-auto rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Perfect Fit Pricing Card ─────────────────────────────────────────────────
function PricingCard({ pkg, index, inView }: { pkg: typeof PACKAGES[0]; index: number; inView: boolean }) {
  const Icon = pkg.icon;
  const isHighlight = pkg.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col p-8 lg:p-10 relative z-10 w-full rounded-[2rem] md:rounded-none md:bg-transparent ${
        isHighlight 
          ? "bg-[var(--color-emerald)] shadow-2xl md:scale-[1.05] md:rounded-[2.5rem] my-4 md:my-0" 
          : "bg-[var(--color-card)] md:shadow-none"
      }`}
      style={{
        color: isHighlight ? "#111827" : "var(--color-text)",
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" 
          style={{ 
            background: isHighlight ? "#111827" : "var(--color-emerald)", 
            color: isHighlight ? "var(--color-emerald)" : "#111827" 
          }}
        >
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <span className="text-sm font-bold tracking-[0.15em] uppercase">
          {pkg.name} PLAN
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-6 min-h-[3rem]" style={{ color: isHighlight ? "#374151" : "var(--color-text-muted)" }}>
        {pkg.description}
      </p>

      <div className="flex items-end gap-1 mb-8">
        <span className="text-4xl lg:text-5xl font-medium tracking-tighter leading-none">
          {pkg.price}
        </span>
        {pkg.price !== "Custom" && <span className="text-sm font-medium mb-1" style={{ color: isHighlight ? "#4B5563" : "var(--color-text-faint)" }}>/project</span>}
      </div>

      <div className="flex flex-col gap-4 mb-10 flex-1">
        {pkg.features.map(f => (
          <div key={f} className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#111827" }}>
              <Check size={12} strokeWidth={4} style={{ color: isHighlight ? "var(--color-emerald)" : "#ffffff" }} />
            </div>
            <span className="text-sm font-medium">{f}</span>
          </div>
        ))}
      </div>

      <Link href="/contact"
        className="w-full py-4 rounded-full flex items-center justify-center font-bold transition-transform hover:-translate-y-1 tracking-[0.1em] text-[0.85rem]"
        style={{
          background: isHighlight ? "#111827" : "var(--color-text)",
          color: isHighlight ? "var(--color-emerald)" : "var(--color-bg)",
        }}>
        GET STARTED
      </Link>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const heroRef = useRef(null);
  const metricsRef = useRef(null);
  const packagesRef = useRef(null);
  
  const metricsInView = useInView(metricsRef, { once: true, margin: "-50px" });
  const packagesInView = useInView(packagesRef, { once: true, margin: "-100px" });

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(heroProgress, [0, 1], [1, 1.22]);
  const videoY = useTransform(heroProgress, [0, 1], [0, 110]);
  const contentY = useTransform(heroProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Navigation />

      {/* ══ HERO (Strictly Dark to support Video readability) ══════════════════ */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "100svh", background: "#050505",
          borderBottomLeftRadius: "clamp(24px, 4vw, 48px)", borderBottomRightRadius: "clamp(24px, 4vw, 48px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "80px", zIndex: 10,
        }}>
        <HeroVideoBackground videoScale={videoScale} videoY={videoY} />

        <div className="absolute top-0 bottom-0 z-[1] flex gap-4 pointer-events-none left-8">
          {[0, 1, 2].map(i => (
            <motion.div key={i} className="w-px" style={{ background: "rgba(255,255,255,0.12)" }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.3, delay: i * 0.13 }} />
          ))}
        </div>

        <motion.div className="relative z-10 w-full px-6 mx-auto lg:px-16"
          style={{ maxWidth: "1400px", paddingTop: "140px", y: contentY, opacity: contentOpacity }}>
          <div className="flex flex-col items-start max-w-4xl text-left">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }} className="flex items-center gap-3 mb-6">
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }} className="text-[clamp(3rem,6.8vw,6.2rem)] font-black leading-[0.95] tracking-[-0.04em] text-white mb-6">
              <span className="block">Every service</span>
              <span className="block text-[var(--color-emerald)]">your team</span>
              <span className="block">needs to win.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }} className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-white/70 max-w-[34rem] mb-8">
              Five core domains. One unified team. Full-stack web, mobile apps, genuine AI integration, optimized SEO, and robust MSME solutions — built by engineers who ship to real users.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.48 }} className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 font-bold transition-transform hover:-translate-y-1 uppercase tracking-widest text-[0.85rem]"
                style={{ background: "var(--color-emerald)", color: "#000000", padding: "1rem 2rem", borderRadius: "999px" }}>
                Get a Free Quote
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══ ABOUT (Theme Aware) ════════════════════════════════════════════════ */}
      <section ref={metricsRef} className="py-24 lg:py-32 bg-[var(--color-bg)]">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={metricsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
            <div className="flex items-center gap-3 mb-6 font-bold tracking-widest text-xs uppercase text-[var(--color-text)]">
              <span className="w-1.5 h-1.5 bg-[var(--color-text)]" />
              About Us
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-[var(--color-text)] max-w-4xl leading-[1.1]">
              A registered engineering partner dedicated to building <span className="bg-[#0EA5E9] text-white rounded-full px-2 py-0.5 inline-flex items-center justify-center align-middle mx-1"><Globe size={32} /></span> smarter and <span className="bg-[var(--color-emerald)] text-[#111827] rounded-full px-2 py-0.5 inline-flex items-center justify-center align-middle mx-1"><Zap size={32} /></span> more adaptive software.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={metricsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="md:row-span-2 bg-[#0EA5E9] rounded-[2rem] p-4 flex flex-col relative overflow-hidden min-h-[400px] md:min-h-full">
              <div className="absolute top-8 left-8 z-10 flex items-center gap-2 font-black text-white text-xl tracking-tighter">
                <Code2 size={24} /> SOFTRINX
              </div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Engineering team" className="absolute inset-0 w-full h-1/2 md:h-[65%] object-cover rounded-t-[1.5rem]" />
              <div className="bg-[var(--color-card)] rounded-[1.5rem] p-8 mt-auto relative z-10 w-full shadow-xl">
                <h3 className="text-6xl lg:text-7xl font-medium tracking-tighter text-[var(--color-text)] mb-2">
                  <AnimatedCounter value={7} suffix="+" duration={2} />
                </h3>
                <p className="text-sm font-medium text-[var(--color-text-muted)] leading-relaxed pr-4">
                  Proprietary products shipped in our first year, from AI platforms to consumer apps.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={metricsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
              <p className="text-sm font-medium text-[var(--color-text)] mb-4">Commitment to code ownership</p>
              <h3 className="text-6xl lg:text-7xl font-medium tracking-tighter text-[var(--color-text)] mb-8">
                <AnimatedCounter value={100} suffix="%" duration={1.5} />
              </h3>
              <div className="mt-auto">
                <div className="flex -space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-text)] flex items-center justify-center border-2 border-[var(--color-surface)]"><Lock size={16} color="var(--color-bg)" /></div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-text-faint)] flex items-center justify-center border-2 border-[var(--color-surface)]"><Code2 size={16} color="var(--color-text)" /></div>
                </div>
                <p className="text-sm font-medium text-[var(--color-text-muted)] leading-relaxed">
                  "No lock-in. Full source code access from day one. You own the IP of everything we build."
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={metricsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="bg-[var(--color-emerald)] rounded-[2rem] p-8 lg:p-10 flex flex-col min-h-[280px]">
              <p className="text-sm font-medium text-[#111827] mb-4">Engineers Dedicated</p>
              <h3 className="text-6xl lg:text-7xl font-medium tracking-tighter text-[#111827] mb-4">
                <AnimatedCounter value={5} suffix="+" duration={1} />
              </h3>
              <p className="text-sm font-medium text-[#111827]/80 leading-relaxed mt-auto">
                Direct access to the founders and developers writing your code. Zero account managers in the way.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={metricsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="md:col-span-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2rem] p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 min-h-[200px]">
              <div>
                <p className="text-lg font-medium text-[var(--color-text)] mb-2">Reach</p>
                <p className="text-sm font-medium text-[var(--color-text-muted)] max-w-sm leading-relaxed">
                  Engineered in Westlands, Nairobi. Deployed for users across Kenya, Germany, and beyond.
                </p>
              </div>
              <h3 className="text-5xl lg:text-7xl font-medium tracking-tighter text-[var(--color-text)] leading-none">
                Global
              </h3>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ SERVICE STORIES ════════════════════════════════════════════════════ */}
      {SERVICES.map((service, i) => (
        <div key={service.id} id={`service-${service.id}`}>
          <ServiceSection service={service} index={i} />
        </div>
      ))}

      {/* ══ PRICING (Exact Fit Container matching image_0ceecf.png) ════════════ */}
      <section ref={packagesRef} className="py-32 bg-[var(--color-bg)]">
        <div className="w-full max-w-[1250px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-black text-[var(--color-text)] tracking-tight mb-6 leading-tight">
              Flexible Plans Built for<br/>Every Stage of Growth
            </h2>
            <p className="text-base lg:text-lg text-[var(--color-text-muted)] max-w-2xl mb-10">
              Whether you're validating an MVP or scaling enterprise architecture, we offer transparent, scope-based pricing that delivers value.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-3 font-bold transition-transform hover:-translate-y-1 tracking-widest text-[0.8rem]"
              style={{
                background: "var(--color-text)", color: "var(--color-bg)",
                padding: "0.5rem 0.5rem 0.5rem 1.5rem", borderRadius: "999px"
              }}>
              GET STARTED
              <div style={{ background: "var(--color-bg)", color: "var(--color-text)", padding: "0.5rem", borderRadius: "50%" }}>
                <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </Link>
          </div>

          <div className="relative mx-auto w-full">
            {/* Master background block mapping exact structure of the reference image */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[var(--color-card)] border border-[var(--color-border)] rounded-[2.5rem] shadow-sm hidden md:block z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative z-10 items-stretch md:items-center">
              {PACKAGES.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} inView={packagesInView} />)}
            </div>
          </div>

        </div>
      </section>

      {/* ══ FULL WIDTH CTA (Theme Aware + Dev Image) ═══════════════════════════ */}
      <section className="relative w-full overflow-hidden border-t border-[var(--color-border)]">
        <div className="relative w-full py-32 lg:py-48 bg-[var(--color-bg)]">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Development Team" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Theme-aware overlay blending */}
          <div className="absolute inset-0 bg-[var(--color-surface)] opacity-[0.3] mix-blend-normal" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface)]/80 to-transparent" />
          
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-semibold text-[var(--color-text)]">Trusted by over 5,000+ users</span>
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar 1" className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)] object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar 2" className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)] object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar 3" className="w-8 h-8 rounded-full border-2 border-[var(--color-surface)] object-cover" />
                </div>
              </div>

              <h2 className="text-4xl lg:text-6xl font-medium text-[var(--color-text)] tracking-tight leading-[1.1] mb-6">
                We combine human insight with artificial intelligence
              </h2>
              
              <p className="text-lg lg:text-xl text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-2xl">
                Our engineering team bridges strategic thinking and advanced technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.
              </p>

              <Link href="/contact"
                className="inline-flex items-center gap-3 font-bold transition-transform hover:-translate-y-1 tracking-[0.1em] text-[0.8rem] uppercase"
                style={{
                  background: "var(--color-emerald)", color: "#111827",
                  padding: "0.5rem 0.5rem 0.5rem 1.5rem", borderRadius: "999px"
                }}>
                GET STARTED
                <div style={{ background: "#111827", color: "var(--color-emerald)", padding: "0.5rem", borderRadius: "50%" }}>
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}