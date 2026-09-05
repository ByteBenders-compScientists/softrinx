"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  Globe, Smartphone, Brain, Building2, Palette,
  GraduationCap, ArrowUpRight, ArrowRight,
  ExternalLink, CheckCircle2, Code2, Server,
  Database, Cloud, Zap, Lock, Users,
  Rocket, Star, Flame,
} from "lucide-react";
import { useTheme } from "@/contexts/themeContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────
// Six services. Cybersecurity is folded into the MSME/small-business offering
// below rather than sold as its own line item — security is a built-in feature
// of everything we ship, not a separate product most small clients ask for.
const SERVICES = [
  {
    id: "web",
    icon: Globe,
    number: "01",
    title: "Full-Stack Web Development",
    tagline: "From idea to deployed product — we own the whole stack.",
    accent: "#10B981",
    sell: "We engineer fast, scalable, production-grade web applications. Whether it's a SaaS, a consumer app, or an enterprise portal — we've shipped them all and we build them right. No shortcuts, no spaghetti.",
    features: [
      "Custom web application architecture",
      "REST & GraphQL API development",
      "Database design & optimisation",
      "Auth systems & role-based access",
      "Third-party API integrations",
      "CI/CD & cloud deployment",
    ],
    pricing: "From KES 10,000",
    pricingNote: "Basic package · scope-based pricing",
  },
  {
    id: "mobile",
    icon: Smartphone,
    number: "02",
    title: "Mobile App Development",
    tagline: "Native-quality apps. Every screen. Every platform.",
    accent: "#38BDF8",
    sell: "We build polished, performant mobile apps that users actually love. From Play Store to App Store — we've shipped StreamBox to Google Play and we handle the full mobile lifecycle end-to-end.",
    features: [
      "Cross-platform iOS & Android apps",
      "Custom UI/UX for mobile",
      "Offline-first architecture",
      "Push notifications",
      "In-app purchases & subscriptions",
      "Play Store & App Store publishing",
    ],
    pricing: "From KES 25,000",
    pricingNote: "Scope-based · cross-platform included",
  },
  {
    id: "ai",
    icon: Brain,
    number: "03",
    title: "AI & Machine Learning",
    tagline: "We build AI — not just wrap it.",
    accent: "#A78BFA",
    sell: "From custom-trained models to intelligent chatbots — we bring real AI into your product. AgriLens, our crop disease detection platform, is a trained computer vision model running in production for Kenyan farmers. That's what we build.",
    features: [
      "Custom ML model training",
      "LLM integration & fine-tuning",
      "Computer vision systems",
      "NLP & text analysis pipelines",
      "AI chatbots & assistants",
      "Model deployment & monitoring",
    ],
    pricing: "From KES 40,000",
    pricingNote: "Complexity-based pricing",
  },
  {
    id: "msme",
    icon: Building2,
    number: "04",
    title: "MSME & Small Business Solutions",
    tagline: "Look established. Run like one, too.",
    accent: "#FBBF24",
    sell: "Most small businesses and MSMEs lose customers before they even get a chance — a broken website, no online presence, or systems that don't talk to each other. We build affordable, professional web and mobile presence, plus the internal tools that help you run day-to-day — inventory, orders, payments — so you compete with businesses twice your size.",
    features: [
      "Professional business website",
      "M-Pesa & payment integration",
      "Inventory & order management",
      "WhatsApp Business automation",
      "Security & backups built in",
      "Ongoing support & updates",
    ],
    pricing: "From KES 8,000",
    pricingNote: "Tailored to your business size",
  },
  {
    id: "design",
    icon: Palette,
    number: "05",
    title: "UI/UX Design",
    tagline: "Design that converts. Interfaces users remember.",
    accent: "#F472B6",
    sell: "We craft interfaces that are not just beautiful — they're purposeful. Every interaction is intentional, every flow tested. The UI you're looking at right now? We built that too.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Design systems & components",
      "Responsive & mobile design",
      "Interactive prototypes",
    ],
    pricing: "From KES 8,000",
    pricingNote: "Per screen or full project pricing",
  },
  {
    id: "mentorship",
    icon: GraduationCap,
    number: "06",
    title: "Tech Mentorship",
    tagline: "We teach what we've actually shipped.",
    accent: "#22D3EE",
    sell: "Real engineers. Real curriculum. We mentor developers and students using the same skills and patterns we use in production — not textbook theory. Practical, focused, and honest about what the industry actually needs.",
    features: [
      "1-on-1 personalised sessions",
      "Project-based learning",
      "Live code reviews",
      "Career guidance & roadmaps",
      "Interview preparation",
      "Group cohort programmes",
    ],
    pricing: "From KES 2,000",
    pricingNote: "Per session · packages available",
  },
];

// Why-Softrinx cards. "span" controls how wide the card sits in the 3-col grid
// on desktop — one wide card up front (mirrors a hero-ish feature callout),
// the rest sit evenly beneath it.
const WHY_US = [
  {
    icon: Users,
    title: "You talk to the engineer",
    body: "No account managers. No middlemen. You reach out — you get the engineer building your product.",
    span: 2,
  },
  {
    icon: Zap,
    title: "7 products shipped in year one",
    body: "AgriLens, HealthMaster, StreamBox, Decluttr, IntelliMark — real users, real traction.",
    span: 1,
  },
  {
    icon: Lock,
    title: "Full source code. Always yours.",
    body: "Everything we build belongs to you. Walk away with the repo. No lock-in, ever.",
    span: 1,
  },
  {
    icon: Globe,
    title: "Built in Westlands, Nairobi. Used globally.",
    body: "Products used in Kenya and Germany. World-class engineering has no zip code requirement.",
    span: 1,
  },
  {
    icon: Code2,
    title: "We do it right or we fix it.",
    body: "If something isn't working post-launch, we fix it. No blame, no extra charge.",
    span: 1,
  },
];

// Pricing tiers. "unit" is shown right next to the price the way a monthly
// plan would show "/month" — ours are one-time, scope-priced packages, so we
// label the unit accordingly instead of inventing a subscription.
const PACKAGES = [
  {
    name: "Starter",
    icon: Rocket,
    price: "KES 10,000",
    unit: "one-time",
    tag: "MVPs & small sites",
    description: "For individuals, MVPs, and small business websites that need to look and work great without the enterprise budget.",
    features: [
      "Up to 5-page web application",
      "Responsive design included",
      "Basic auth & database",
      "Deployment to Vercel / Cloudflare",
      "1 round of revisions",
      "7-day delivery",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    icon: Star,
    price: "KES 35,000",
    unit: "one-time",
    tag: "Most popular",
    description: "For startups that need a full product — web or mobile — built properly and shipped on time.",
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
  },
  {
    name: "Enterprise",
    icon: Flame,
    price: "Custom",
    unit: "",
    tag: "Complex systems",
    description: "For complex systems, AI products, and ongoing contracts where quality and communication are non-negotiable.",
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
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionLabel({ text, accent, center }: { text: string; accent?: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}>
      <span className="block w-8 h-px" style={{ background: accent || "var(--color-emerald)" }} />
      <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", color: accent || "var(--color-emerald)", textTransform: "uppercase" }}>
        {text}
      </span>
    </div>
  );
}

// ─── Per-service SVG illustrations ─────────────────────────────────────────────
// Hand-built, brand-colored placeholders — one distinct composition per domain.
// Swap the <svg> markup inside any of these for a Figma/AI-generated graphic
// later; the component contract (accepts `accent`) stays the same.
function WebSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 260" className="w-full h-auto">
      <defs>
        <linearGradient id="webGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="280" height="190" rx="16" fill="#0d0f0d" stroke={accent} strokeOpacity="0.3" />
      <rect x="20" y="30" width="280" height="34" rx="16" fill="url(#webGrad)" opacity="0.15" />
      <circle cx="38" cy="47" r="4" fill="#ff5f56" />
      <circle cx="52" cy="47" r="4" fill="#ffbd2e" />
      <circle cx="66" cy="47" r="4" fill="#27c93f" />
      <rect x="44" y="86" width="120" height="10" rx="5" fill={accent} opacity="0.85" />
      <rect x="44" y="106" width="180" height="8" rx="4" fill="#ffffff" opacity="0.15" />
      <rect x="44" y="122" width="150" height="8" rx="4" fill="#ffffff" opacity="0.15" />
      <rect x="44" y="146" width="90" height="34" rx="8" fill={accent} opacity="0.9" />
      <circle cx="250" cy="160" r="30" fill={accent} opacity="0.12" />
      <circle cx="250" cy="160" r="16" fill={accent} opacity="0.35" />
    </svg>
  );
}

function MobileSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 260" className="w-full h-auto">
      <rect x="110" y="20" width="100" height="220" rx="20" fill="#0d0f0d" stroke={accent} strokeOpacity="0.35" />
      <rect x="120" y="40" width="80" height="150" rx="8" fill={accent} opacity="0.08" />
      <rect x="128" y="52" width="64" height="10" rx="5" fill={accent} opacity="0.75" />
      <rect x="128" y="70" width="44" height="8" rx="4" fill="#fff" opacity="0.15" />
      <rect x="128" y="86" width="64" height="30" rx="6" fill={accent} opacity="0.25" />
      <rect x="128" y="124" width="64" height="30" rx="6" fill="#fff" opacity="0.08" />
      <circle cx="160" cy="215" r="6" fill={accent} opacity="0.6" />
      <circle cx="70" cy="90" r="26" fill={accent} opacity="0.12" />
      <circle cx="250" cy="180" r="20" fill={accent} opacity="0.15" />
    </svg>
  );
}

function AISVG({ accent }: { accent: string }) {
  const nodes: [number, number][] = [[60, 60], [160, 40], [260, 70], [80, 150], [180, 140], [250, 170], [150, 220]];
  const edges: [number, number][] = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [4, 6], [3, 6]];
  return (
    <svg viewBox="0 0 320 260" className="w-full h-auto">
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={accent} strokeOpacity="0.35" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 4 ? 11 : 7} fill={accent} opacity={i === 4 ? 0.9 : 0.55} />
      ))}
    </svg>
  );
}

function MSMESVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 260" className="w-full h-auto">
      <rect x="60" y="110" width="200" height="110" rx="6" fill="#0d0f0d" stroke={accent} strokeOpacity="0.3" />
      <path d="M50 110 L160 60 L270 110 Z" fill={accent} opacity="0.85" />
      <rect x="80" y="150" width="50" height="70" rx="4" fill={accent} opacity="0.25" />
      <rect x="150" y="150" width="90" height="40" rx="4" fill="#fff" opacity="0.1" />
      <rect x="150" y="196" width="40" height="24" rx="4" fill={accent} opacity="0.5" />
      <circle cx="230" cy="70" r="18" fill={accent} opacity="0.18" />
      <path d="M40 230 h240" stroke={accent} strokeOpacity="0.2" strokeWidth="2" />
    </svg>
  );
}

function DesignSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 260" className="w-full h-auto">
      <rect x="50" y="40" width="150" height="110" rx="10" fill={accent} opacity="0.15" />
      <rect x="90" y="80" width="150" height="110" rx="10" fill="#0d0f0d" stroke={accent} strokeOpacity="0.4" />
      <circle cx="130" cy="120" r="14" fill={accent} opacity="0.75" />
      <rect x="160" y="112" width="60" height="8" rx="4" fill="#fff" opacity="0.2" />
      <rect x="160" y="128" width="40" height="8" rx="4" fill="#fff" opacity="0.15" />
      <circle cx="245" cy="60" r="10" fill={accent} opacity="0.6" />
      <circle cx="260" cy="90" r="6" fill={accent} opacity="0.4" />
    </svg>
  );
}

function MentorshipSVG({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 260" className="w-full h-auto">
      <path d="M160 60 L260 100 L160 140 L60 100 Z" fill={accent} opacity="0.8" />
      <path d="M100 112 v40 q60 30 120 0 v-40" fill="none" stroke={accent} strokeOpacity="0.4" strokeWidth="3" />
      <rect x="140" y="150" width="40" height="60" rx="4" fill="#0d0f0d" stroke={accent} strokeOpacity="0.3" />
      <circle cx="230" cy="180" r="20" fill={accent} opacity="0.15" />
      <circle cx="90" cy="170" r="14" fill={accent} opacity="0.2" />
    </svg>
  );
}

const SERVICE_SVGS: Record<string, React.FC<{ accent: string }>> = {
  web: WebSVG,
  mobile: MobileSVG,
  ai: AISVG,
  msme: MSMESVG,
  design: DesignSVG,
  mentorship: MentorshipSVG,
};

// Wraps the flat SVG in a soft glow + a slow, continuous float so the
// illustration feels alive even before scroll animation kicks in.
function ServiceGraphic({ variant, accent }: { variant: string; accent: string }) {
  const Graphic = SERVICE_SVGS[variant] || WebSVG;
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[380px] mx-auto"
    >
      <div className="absolute inset-0 rounded-full blur-3xl pointer-events-none" style={{ background: accent, opacity: 0.22 }} />
      <Graphic accent={accent} />
    </motion.div>
  );
}

// ─── Service story section (alternating text / graphic, full-bleed) ───────────
function ServiceStorySection({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);
  const inView = useInView(revealRef, { once: true, margin: "-100px" });
  const reverse = index % 2 === 1;
  const Icon = service.icon;

  // Scroll-driven parallax: the graphic drifts opposite to scroll direction,
  // independent of the text column, so the two layers move at different
  // speeds as the section passes through view.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const graphicParallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Each section gets a slightly different graphic entrance so the six
  // sections don't all feel like the same animation repeated.
  const entrance = [
    { initial: { opacity: 0, scale: 0.82 }, animate: { opacity: 1, scale: 1 } },
    { initial: { opacity: 0, rotate: -8, y: 40 }, animate: { opacity: 1, rotate: 0, y: 0 } },
    { initial: { opacity: 0, x: reverse ? -50 : 50 }, animate: { opacity: 1, x: 0 } },
  ][index % 3];

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "clamp(64px, 9vw, 104px)",
        paddingBottom: "clamp(64px, 9vw, 104px)",
        background: index % 2 === 0 ? "var(--color-bg)" : "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
      }}
    >
      <div ref={revealRef} className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
        <div className="grid items-center gap-12 lg:gap-24 lg:grid-cols-2">
          {/* Text */}
          <motion.div
            className={reverse ? "lg:order-2" : "lg:order-1"}
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div style={{
                width: 34, height: 34, borderRadius: "9px",
                background: `${service.accent}22`, border: `1px solid ${service.accent}55`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={15} style={{ color: service.accent }} />
              </div>
              <span style={{ fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: service.accent }}>
                {service.number} · {service.title}
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.7rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.08, color: "var(--color-text)", marginBottom: "1.1rem" }}>
              {service.tagline}
            </h2>

            <p style={{ fontSize: "0.92rem", lineHeight: 1.85, color: "var(--color-text-muted)", marginBottom: "1.6rem", maxWidth: "34rem" }}>
              {service.sell}
            </p>

            <div className="flex flex-col gap-2 mb-8">
              {service.features.slice(0, 4).map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} style={{ color: service.accent, flexShrink: 0, marginTop: "0.2rem" }} />
                  <span style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6" style={{ borderTop: "1px solid var(--color-border)" }}>
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text)" }}>{service.pricing}</div>
                <div style={{ fontSize: "0.65rem", color: "var(--color-text-faint)" }}>{service.pricingNote}</div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold transition-colors group" style={{ color: service.accent, fontSize: "0.85rem" }}>
                Need the details? Talk to us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Graphic */}
          <motion.div
            className={reverse ? "lg:order-1" : "lg:order-2"}
            initial={entrance.initial}
            animate={inView ? entrance.animate : {}}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            style={{ y: graphicParallaxY }}
          >
            <ServiceGraphic variant={service.id} accent={service.accent} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Hero background video (with scroll-driven parallax) ─────────────────────
// The video sits in its own motion layer so it can drift/scale at a different
// rate than the foreground content as the page scrolls — that's what actually
// reads as parallax rather than a static poster with a filter on it.
function HeroVideoBackground({
  videoScale,
  videoY,
}: {
  videoScale: any;
  videoY: any;
}) {
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
        {/* Drop your downloaded stock clip in /public/videos and point these at it.
            Two formats covers Safari (mp4/h264) + smaller webm elsewhere. */}
        <source src="/videos/services-hero.webm" type="video/webm" />
        <source src="/images/services-hero.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.5) 38%, rgba(5,5,5,0.68) 72%, rgba(5,5,5,0.97) 100%)",
        }}
      />
    </motion.div>
  );
}

// ─── Why-Softrinx feature card ─────────────────────────────────────────────────
function WhyCard({ item, index, inView, span }: { item: typeof WHY_US[0]; index: number; inView: boolean; span: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={span === 2 ? "md:col-span-2" : ""}
      style={{
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: "18px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
        minHeight: span === 2 ? "168px" : "auto",
        justifyContent: "space-between",
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: "11px",
        background: "var(--color-emerald-bg)", border: "1px solid var(--color-emerald-border)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <Icon size={17} style={{ color: "var(--color-emerald)" }} />
      </div>
      <div>
        <div style={{ fontSize: span === 2 ? "1.15rem" : "0.95rem", fontWeight: 800, letterSpacing: "-0.015em", color: "var(--color-text)", marginBottom: "0.4rem" }}>
          {item.title}
        </div>
        <div style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "var(--color-text-muted)", maxWidth: span === 2 ? "30rem" : "none" }}>
          {item.body}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Package card ─────────────────────────────────────────────────────────────
function PackageCard({ pkg, index, inView }: { pkg: typeof PACKAGES[0]; index: number; inView: boolean }) {
  const Icon = pkg.icon;
  const onColor = pkg.highlight ? "#040805" : "var(--color-text)";
  const onMuted = pkg.highlight ? "rgba(4,8,5,0.65)" : "var(--color-text-muted)";
  const onFaint = pkg.highlight ? "rgba(4,8,5,0.5)" : "var(--color-text-faint)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      style={{
        border: pkg.highlight ? "none" : "1px solid var(--color-border)",
        background: pkg.highlight ? "var(--color-emerald)" : "var(--color-bg)",
        borderRadius: "20px",
        boxShadow: pkg.highlight ? "0 0 40px var(--color-emerald-glow)" : "none",
        padding: "clamp(1.75rem, 3vw, 2.25rem)",
        display: "flex", flexDirection: "column",
      }}>
      {/* Icon badge + plan label */}
      <div className="flex items-center gap-2.5 mb-5">
        <div style={{
          width: 30, height: 30, borderRadius: "9px", flexShrink: 0,
          background: pkg.highlight ? "#040805" : "var(--color-emerald-bg)",
          border: pkg.highlight ? "none" : "1px solid var(--color-emerald-border)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon size={14} style={{ color: pkg.highlight ? "var(--color-emerald)" : "var(--color-emerald)" }} />
        </div>
        <span style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: onColor }}>
          {pkg.name} plan
        </span>
      </div>

      <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: onMuted, marginBottom: "1.4rem" }}>
        {pkg.description}
      </p>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-6">
        <span style={{ fontSize: "clamp(1.9rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: onColor, lineHeight: 1 }}>
          {pkg.price}
        </span>
        {pkg.unit && (
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: onFaint }}>
            / {pkg.unit}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2.5 flex-1 mb-7">
        {pkg.features.map(f => (
          <div key={f} className="flex items-start gap-2.5">
            <CheckCircle2 size={15} style={{ color: onColor, flexShrink: 0, marginTop: "0.1rem", opacity: pkg.highlight ? 0.85 : 1 }} />
            <span style={{ fontSize: "0.78rem", color: onMuted, lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>

      <Link href="/contact"
        className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 hover:-translate-y-px"
        style={{
          background: pkg.highlight ? "#040805" : "var(--color-text)",
          color: pkg.highlight ? "var(--color-emerald)" : "var(--color-bg)",
          padding: "0.8rem 1.5rem", fontSize: "0.78rem",
          letterSpacing: "0.06em", textTransform: "uppercase",
          borderRadius: "999px",
        }}>
        Get Started
      </Link>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const { colors } = useTheme();
  const heroRef = useRef(null);
  const packagesRef = useRef(null);
  const whyRef = useRef(null);
  const processRef = useRef(null);
  const packagesInView = useInView(packagesRef, { once: true, margin: "-60px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-60px" });
  const processInView = useInView(processRef, { once: true, margin: "-60px" });

  // Scroll-driven parallax for the hero: the video scales up and drifts down
  // slower than the page scroll, the foreground content drifts up faster and
  // fades — that speed mismatch between layers is what reads as parallax.
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(heroProgress, [0, 1], [1, 1.22]);
  const videoY = useTransform(heroProgress, [0, 1], [0, 110]);
  const contentY = useTransform(heroProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  return (
    <main style={{ background: "var(--color-bg)" }}>
      <Navigation />

      {/* ══ HERO — untouched ═══════════════════════════════════════════════════ */}
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

        {/* Signature vertical lines, carried over from the rest of the page */}
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
              <span className="block w-8 h-px" style={{ background: "var(--color-emerald)" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
                Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              style={{ fontSize: "clamp(3rem, 6.8vw, 6.2rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", color: "#ffffff", marginBottom: "1.5rem" }}
            >
              <span className="block">Every service</span>
              <span className="block" style={{ color: "var(--color-emerald)" }}>your team</span>
              <span className="block">needs to win.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", maxWidth: "34rem", marginBottom: "2rem" }}
            >
              Six domains. One team. Full-stack web, mobile apps, AI/ML, MSME &amp; small business solutions, UI/UX design, and mentorship — all from engineers who've shipped real products to real users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-9"
            >
              {SERVICES.map(s => (
                <button key={s.id}
                  onClick={() => document.getElementById(`service-${s.id}`)?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(6px)",
                    padding: "0.32rem 0.75rem",
                    borderRadius: "999px",
                    transition: "all 0.18s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = s.accent;
                    (e.currentTarget as HTMLElement).style.color = s.accent;
                    (e.currentTarget as HTMLElement).style.background = `${s.accent}18`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}>
                  {s.title.split(" ")[0]}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-bold transition-all duration-200 group hover:-translate-y-px"
                style={{ background: "var(--color-emerald)", color: "#040805", padding: "0.85rem 1.7rem", fontSize: "0.9rem", borderRadius: "999px", boxShadow: "0 0 30px var(--color-emerald-glow)" }}>
                Get a Free Quote
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.22)", padding: "0.85rem 1.7rem", fontSize: "0.9rem", borderRadius: "999px", background: "rgba(255,255,255,0.03)" }}>
                See Our Work <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══ WHY US — redesigned as a card grid ══════════════════════════════════ */}
      <section ref={whyRef} style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          {/* Centered header */}
          <div className="flex flex-col items-center max-w-2xl mx-auto mb-14 text-center">
            <SectionLabel text="Why Softrinx" center />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.02, color: "var(--color-text)", marginBottom: "1.25rem" }}>
              Engineers who <span style={{ color: "var(--color-emerald)" }}>actually ship.</span>
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-text-muted)", marginBottom: "1.75rem" }}>
              We're not a marketplace or an agency that passes your project to a stranger. We are the engineers who build it — five CS graduates from DeKUT, Westlands, Nairobi, who treat every project like it's our own startup.
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-2 font-bold transition-all duration-200 hover:-translate-y-px"
              style={{ background: "var(--color-text)", color: "var(--color-bg)", padding: "0.7rem 1.5rem", fontSize: "0.8rem", borderRadius: "999px" }}>
              Meet the team <ArrowRight size={14} />
            </Link>
          </div>

          {/* Card grid, inside a soft surface tray */}
          <div style={{ background: "var(--color-surface)", borderRadius: "26px", padding: "clamp(0.75rem, 2vw, 1rem)" }}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {WHY_US.map((item, i) => (
                <WhyCard key={item.title} item={item} index={i} inView={whyInView} span={item.span} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICE STORIES — one alternating section per service ══════════════ */}
      {SERVICES.map((service, i) => (
        <div key={service.id} id={`service-${service.id}`}>
          <ServiceStorySection service={service} index={i} />
        </div>
      ))}

      {/* ══ PRICING — redesigned to match the reference pricing UI ═════════════ */}
      <section ref={packagesRef} style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          {/* Centered header */}
          <div className="flex flex-col items-center max-w-2xl mx-auto mb-14 text-center">
            <SectionLabel text="Pricing" center />
            <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 1.02, color: "var(--color-text)", marginBottom: "1.25rem" }}>
              Transparent. <span style={{ color: "var(--color-emerald)" }}>No surprises.</span>
            </h2>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--color-text-muted)", marginBottom: "1.75rem" }}>
              Starting prices in Kenyan Shillings. Every project gets a detailed quote after a free 30-minute scoping call — no commitment.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 font-bold transition-all duration-200 hover:-translate-y-px"
              style={{ background: "var(--color-text)", color: "var(--color-bg)", padding: "0.7rem 1.5rem", fontSize: "0.8rem", borderRadius: "999px" }}>
              Get a Free Quote <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {PACKAGES.map((pkg, i) => <PackageCard key={pkg.name} pkg={pkg} index={i} inView={packagesInView} />)}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={packagesInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 mt-10"
            style={{ borderTop: "1px solid var(--color-border)" }}>
            {["All prices in KES", "Free scoping call", "No hidden fees", "Source code is yours", "Contract work available"].map(note => (
              <div key={note} className="flex items-center gap-2">
                <div style={{ width: 5, height: 5, background: "var(--color-emerald)" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--color-text-faint)", letterSpacing: "0.03em" }}>{note}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════════════════════════════════ */}
      <section ref={processRef} style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="mb-14">
            <SectionLabel text="How It Works" />
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, color: "var(--color-text)" }}>
              First message to
              <br />
              <span style={{ color: "var(--color-emerald)" }}>live product.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ background: "var(--color-border)" }}>
            {[
              { num: "01", title: "You reach out", body: "Tell us what you need. WhatsApp, email, contact form — we respond the same business day, always." },
              { num: "02", title: "Free scoping call", body: "30 minutes. We understand the project, ask the right questions, and tell you exactly how we'd build it." },
              { num: "03", title: "Clear proposal", body: "Written scope, fixed timeline, fixed price. No ambiguity, no hourly guesswork, no hidden fees." },
              { num: "04", title: "We build & ship", body: "Weekly updates. Real code, real progress. Launch — and we're here after it too." },
            ].map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                style={{ padding: "clamp(1.5rem, 2.5vw, 2.2rem)", background: "var(--color-surface)", borderRadius: "12px", position: "relative" }}>
                {i === 0 && <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "var(--color-emerald)" }} />}
                <span style={{ display: "block", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 1, color: "var(--color-border-mid)", marginBottom: "1rem", userSelect: "none" }}>
                  {step.num}
                </span>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-text)", marginBottom: "0.6rem" }}>{step.title}</h4>
                <p style={{ fontSize: "0.8rem", lineHeight: 1.72, color: "var(--color-text-muted)" }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═════════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
        <div className="absolute top-0 bottom-0 flex gap-4 pointer-events-none right-8">
          {[0, 1, 2].map(i => (
            <motion.div key={i} className="w-px" style={{ background: "var(--color-border)" }}
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.12 }} />
          ))}
        </div>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid grid-cols-1 gap-px lg:grid-cols-2" style={{ background: "var(--color-border)" }}>
            {/* Emerald */}
            <motion.div className="relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              style={{ padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.5rem, 4vw, 4rem)", background: "var(--color-emerald)", borderRadius: "20px" }}>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.07 }}>
                <defs>
                  <pattern id="diagsvc2" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="32" stroke="#000" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagsvc2)" />
              </svg>
              <div className="relative z-10">
                <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, color: "#040805", marginBottom: "1.5rem" }}>
                  Ready to start
                  <br />
                  your project?
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(4,8,5,0.65)", marginBottom: "2rem", maxWidth: "22rem" }}>
                  Tell us what you're building. We'll tell you exactly how we'd build it — and what it would cost.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 font-bold transition-all duration-200 group hover:-translate-y-px"
                  style={{ background: "#040805", color: "var(--color-emerald)", padding: "0.9rem 2rem", fontSize: "0.88rem", borderRadius: "999px" }}>
                  Get a Free Quote
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* Dark */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
              style={{ padding: "clamp(3.5rem, 7vw, 7rem) clamp(1.5rem, 4vw, 4rem)", background: "var(--color-surface)", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
              <div>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--color-emerald)", textTransform: "uppercase", marginBottom: "1rem" }}>
                  What to expect
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Response within 24 hours", body: "We don't ghost. You'll hear back the same business day." },
                    { title: "Free scoping call", body: "30 minutes to understand your project — no commitment, no pitch." },
                    { title: "Fixed price, clear scope", body: "A written proposal with timeline, cost, and deliverables. No guessing." },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-3">
                      <div style={{ width: 6, height: 6, background: "var(--color-emerald)", flexShrink: 0, marginTop: "0.42rem" }} />
                      <div>
                        <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--color-text)", marginBottom: "0.2rem" }}>{title}</div>
                        <div style={{ fontSize: "0.74rem", lineHeight: 1.6, color: "var(--color-text-muted)" }}>{body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                <Link href="/contact" className="inline-flex items-center gap-2 font-semibold transition-colors group"
                  style={{ color: "var(--color-emerald)", fontSize: "0.85rem" }}>
                  Go to contact page <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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