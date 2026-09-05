"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform, animate } from "framer-motion";
import {
  Globe, Smartphone, Brain, Building2, Palette,
  GraduationCap, ArrowUpRight, ArrowRight,
  Check, Star, Flame, Code2, Users, Lock, Zap
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
    sell: "We engineer fast, scalable web applications. Whether it's a B2B SaaS, a high-traffic consumer platform, or complex internal tooling — we own the stack from database to deployment. No shortcuts, just robust engineering.",
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
    sell: "Polished, high-performance mobile applications that command engagement. We handle the complete lifecycle — from initial architecture and offline-first data sync to final App Store and Play Store publishing.",
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
    sell: "We integrate genuine machine learning capabilities into your products. From custom-trained computer vision models like AgriLens to sophisticated NLP pipelines — we build AI that solves actual business problems.",
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
    sell: "We digitize small and medium businesses to punch above their weight. Get professional digital storefronts coupled with bespoke internal tools for inventory, M-Pesa payments, and operations — integrated seamlessly.",
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
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/services-hero-poster.jpg"
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/videos/services-hero.webm" type="video/webm" />
        <source src="/images/services-hero.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.5) 38%, rgba(5,5,5,0.68) 72%, rgba(5,5,5,0.97) 100%)",
        }}
      />
    </motion.div>
  );
}

// ─── Clean Service Component (Typography + Photography, No SVGs) ──────────────
function ServiceSection({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reverse = index % 2 !== 0;

  return (
    <section 
      ref={ref} 
      className="relative py-24 lg:py-32 overflow-hidden bg-[#050505] border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        <div className={`flex flex-col gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
          
          {/* Content Side */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-black text-[#333333]">
                {service.number}
              </span>
              <h3 className="text-2xl lg:text-4xl font-black tracking-tight text-white">{service.title}</h3>
            </div>

            <h4 className="text-xl lg:text-2xl font-semibold mb-6 leading-tight text-[var(--color-emerald)]">
              {service.tagline}
            </h4>

            <p className="text-base lg:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
              {service.sell}
            </p>

            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8 mb-10">
              {service.features.map(f => (
                <div key={f} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--color-emerald)]" />
                  <span className="text-sm font-medium text-gray-300">{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Starting At</p>
                <p className="text-2xl font-bold text-white">{service.pricing}</p>
              </div>
              <Link href="/contact" className="group flex items-center gap-3 text-sm font-bold transition-all text-[var(--color-emerald)] uppercase tracking-widest">
                Request a quote 
                <span className="bg-white/5 p-2 rounded-full group-hover:bg-[var(--color-emerald)] group-hover:text-black transition-colors">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Photography Side (Replacing SVGs) */}
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3] max-w-[600px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Clean Pricing Card (Compacted to match reference) ────────────────────────
function PricingCard({ pkg, index, inView }: { pkg: typeof PACKAGES[0]; index: number; inView: boolean }) {
  const Icon = pkg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col p-6 lg:p-8 rounded-[1.5rem] relative z-10"
      style={{
        background: pkg.highlight ? "var(--color-emerald)" : "#ffffff",
        border: pkg.highlight ? "none" : "1px solid #E5E7EB",
        color: "#111827",
        boxShadow: pkg.highlight ? "0 20px 40px -15px var(--color-emerald)" : "0 10px 30px -10px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div 
          className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0" 
          style={{ background: pkg.highlight ? "#111827" : "var(--color-emerald)", color: pkg.highlight ? "var(--color-emerald)" : "#111827" }}
        >
          <Icon size={16} strokeWidth={2.5} />
        </div>
        <span className="text-sm font-bold tracking-[0.15em] uppercase">
          {pkg.name} PLAN
        </span>
      </div>

      <p className="text-sm leading-relaxed mb-4 min-h-[3rem]" style={{ color: pkg.highlight ? "#374151" : "#6B7280" }}>
        {pkg.description}
      </p>

      <div className="flex items-end gap-1 mb-6">
        <span className="text-4xl lg:text-5xl font-medium tracking-tighter leading-none">
          {pkg.price}
        </span>
        {pkg.price !== "Custom" && <span className="text-sm font-medium mb-1" style={{ color: pkg.highlight ? "#4B5563" : "#9CA3AF" }}>/project</span>}
      </div>

      <div className="flex flex-col gap-3 mb-8 flex-1">
        {pkg.features.map(f => (
          <div key={f} className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#111827" }}>
              <Check size={12} strokeWidth={4} style={{ color: pkg.highlight ? "var(--color-emerald)" : "#ffffff" }} />
            </div>
            <span className="text-sm font-medium">{f}</span>
          </div>
        ))}
      </div>

      <Link href="/contact"
        className="w-full py-3 rounded-full flex items-center justify-center font-bold transition-transform hover:-translate-y-1 tracking-[0.1em] text-[0.8rem]"
        style={{
          background: "#111827",
          color: "var(--color-emerald)",
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

      {/* ══ HERO ════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          minHeight: "100svh",
          background: "#050505",
          borderBottomLeftRadius: "clamp(24px, 4vw, 48px)",
          borderBottomRightRadius: "clamp(24px, 4vw, 48px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          paddingBottom: "80px",
          zIndex: 10,
        }}
      >
        <HeroVideoBackground videoScale={videoScale} videoY={videoY} />

        <div className="absolute top-0 bottom-0 z-[1] flex gap-4 pointer-events-none left-8">
          {[0, 1, 2].map(i => (
            <motion.div key={i} className="w-px" style={{ background: "rgba(255,255,255,0.12)" }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 1.3, delay: i * 0.13 }} />
          ))}
        </div>

        <motion.div
          className="relative z-10 w-full px-6 mx-auto lg:px-16"
          style={{ maxWidth: "1400px", paddingTop: "140px", y: contentY, opacity: contentOpacity }}
        >
          <div className="flex flex-col items-start max-w-4xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-[var(--color-emerald)]" />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] text-[var(--color-emerald)] uppercase">
                Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-[clamp(3rem,6.8vw,6.2rem)] font-black leading-[0.95] tracking-[-0.04em] text-white mb-6"
            >
              <span className="block">Every service</span>
              <span className="block text-[var(--color-emerald)]">your team</span>
              <span className="block">needs to win.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.75] text-white/70 max-w-[34rem] mb-8"
            >
              Four core domains. One unified team. Full-stack web, mobile apps, genuine AI/ML integration, and robust MSME solutions — built by software engineers who ship products to real users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-bold transition-transform hover:-translate-y-1 uppercase tracking-widest text-[0.85rem]"
                style={{ background: "var(--color-emerald)", color: "#000000", padding: "1rem 2rem", borderRadius: "999px" }}>
                Get a Free Quote
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══ METRICS / ABOUT (Exact Match to image_02068a.png style) ════════════ */}
      <section ref={metricsRef} className="py-24 lg:py-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6 text-black font-bold tracking-widest text-xs uppercase">
              <span className="w-1.5 h-1.5 bg-black" />
              About Us
            </div>
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight text-black max-w-4xl leading-[1.1]">
              A registered engineering partner dedicated to building <span className="bg-[#0EA5E9] text-white rounded-full px-2 py-0.5 inline-flex items-center justify-center align-middle mx-1"><Globe size={32} /></span> smarter and <span className="bg-[var(--color-emerald)] text-black rounded-full px-2 py-0.5 inline-flex items-center justify-center align-middle mx-1"><Zap size={32} /></span> more adaptive software.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Blue / Image (Spans 2 rows on desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:row-span-2 bg-[#0EA5E9] rounded-[2rem] p-4 flex flex-col relative overflow-hidden min-h-[400px] md:min-h-full"
            >
              <div className="absolute top-8 left-8 z-10 flex items-center gap-2 font-black text-white text-xl tracking-tighter">
                <Code2 size={24} /> SOFTRINX
              </div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering team"
                className="absolute inset-0 w-full h-1/2 md:h-[65%] object-cover rounded-t-[1.5rem]"
              />
              <div className="bg-white rounded-[1.5rem] p-8 mt-auto relative z-10 w-full shadow-xl">
                <h3 className="text-6xl lg:text-7xl font-medium tracking-tighter text-black mb-2">
                  <AnimatedCounter value={7} suffix="+" duration={2} />
                </h3>
                <p className="text-sm font-medium text-gray-800 leading-relaxed pr-4">
                  Proprietary products shipped in our first year, from AI platforms to consumer apps.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Grey */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F3F4F6] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between min-h-[280px]"
            >
              <p className="text-sm font-medium text-gray-900 mb-4">Commitment to code ownership</p>
              <h3 className="text-6xl lg:text-7xl font-medium tracking-tighter text-black mb-8">
                <AnimatedCounter value={100} suffix="%" duration={1.5} />
              </h3>
              <div className="mt-auto">
                <div className="flex -space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border-2 border-[#F3F4F6]"><Lock size={16} color="white" /></div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center border-2 border-[#F3F4F6]"><Code2 size={16} color="black" /></div>
                </div>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  "No lock-in. Full source code access from day one. You own the IP of everything we build."
                </p>
              </div>
            </motion.div>

            {/* Card 3: Theme Emerald */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[var(--color-emerald)] rounded-[2rem] p-8 lg:p-10 flex flex-col min-h-[280px]"
            >
              <p className="text-sm font-medium text-black mb-4">Engineers Dedicated</p>
              <h3 className="text-6xl lg:text-7xl font-medium tracking-tighter text-black mb-4">
                <AnimatedCounter value={5} suffix="+" duration={1} />
              </h3>
              <p className="text-sm font-medium text-black/80 leading-relaxed mt-auto">
                Direct access to the founders and developers writing your code. Zero account managers in the way.
              </p>
            </motion.div>

            {/* Card 4: Black (Spans bottom right) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2 bg-[#111827] rounded-[2rem] p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 min-h-[200px]"
            >
              <div>
                <p className="text-lg font-medium text-white/80 mb-2">Reach</p>
                <p className="text-sm font-medium text-gray-400 max-w-sm leading-relaxed">
                  Engineered in Westlands, Nairobi. Deployed for users across Kenya, Germany, and beyond.
                </p>
              </div>
              <h3 className="text-5xl lg:text-7xl font-medium tracking-tighter text-white leading-none">
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

      {/* ══ PRICING (Exact match to image_0bf6d4.png) ══════════════════════════ */}
      <section ref={packagesRef} className="py-32 bg-[#F9FAFB]">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-6 leading-tight">
              Flexible Plans Built for<br/>Every Stage of Growth
            </h2>
            <p className="text-base lg:text-lg text-[#6B7280] max-w-2xl mb-10">
              Whether you're validating an MVP or scaling enterprise architecture, we offer transparent, scope-based pricing that delivers value.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-3 font-bold transition-transform hover:-translate-y-1 tracking-widest text-[0.8rem]"
              style={{
                background: "#111827", color: "var(--color-emerald)",
                padding: "0.5rem 0.5rem 0.5rem 1.5rem", borderRadius: "999px"
              }}>
              GET STARTED
              <div style={{ background: "var(--color-emerald)", color: "#111827", padding: "0.5rem", borderRadius: "50%" }}>
                <ArrowUpRight size={16} strokeWidth={3} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="absolute inset-y-4 inset-x-[-1rem] bg-white rounded-[2rem] shadow-sm z-0 hidden md:block" />
            {PACKAGES.map((pkg, i) => <PricingCard key={pkg.name} pkg={pkg} index={i} inView={packagesInView} />)}
          </div>

        </div>
      </section>

      {/* ══ FULL WIDTH CTA (Exact match to image_0bf731.jpg) ═══════════════════ */}
      <section className="relative w-full overflow-hidden">
        {/* Full width container, no horizontal padding constraints on background */}
        <div className="relative w-full py-32 lg:py-48">
          <img 
            src="https://images.unsplash.com/photo-1506744626753-1436eba18f28?auto=format&fit=crop&w=2850&q=80" 
            alt="Beautiful landscape" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent" />
          
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-semibold text-white/90">Trusted by over 5,000+ users</span>
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar 1" className="w-8 h-8 rounded-full border-2 border-[#1E3A8A] object-cover" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar 2" className="w-8 h-8 rounded-full border-2 border-[#1E3A8A] object-cover" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar 3" className="w-8 h-8 rounded-full border-2 border-[#1E3A8A] object-cover" />
                </div>
              </div>

              <h2 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                We combine human insight with artificial intelligence
              </h2>
              
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
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