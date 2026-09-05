"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import {
  Globe, Smartphone, Brain, Shield, Palette,
  GraduationCap, ArrowUpRight, ArrowRight,
  ExternalLink, CheckCircle2, Code2, Server,
  Database, Cloud, Zap, Lock, Users,
} from "lucide-react";
import { useTheme } from "@/contexts/themeContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "web",
    icon: Globe,
    number: "01",
    title: "Full-Stack Web Development",
    tagline: "From idea to deployed product — we own the whole stack.",
    sell: "We engineer fast, scalable, production-grade web applications. Whether it's a SaaS, a consumer app, or an enterprise portal — we've shipped them all and we build them right. No shortcuts, no spaghetti.",
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript", "JavaScript", "Vue.js", "Angular", "Vite", "CRA"] },
      { label: "Styling", items: ["Tailwind CSS", "shadcn/ui", "SASS", "CSS Modules", "HTML5"] },
      { label: "Backend", items: ["Node.js / Express", "Nitro.js", "Django", "Flask", "Golang"] },
      { label: "Database", items: ["PostgreSQL", "MongoDB", "Supabase", "Appwrite BaaS", "Neon"] },
      { label: "Deployment", items: ["AWS", "Azure", "Cloudflare", "Vercel", "Railway"] },
      { label: "APIs", items: ["REST APIs", "GraphQL", "WebSockets", "Third-party Integrations"] },
    ],
    features: [
      "Custom web application architecture",
      "REST & GraphQL API development",
      "Database design & optimisation",
      "Auth systems & role-based access",
      "Third-party API integrations",
      "CI/CD & cloud deployment",
      "Debugging & contract work",
      "Code reviews & refactoring",
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
    sell: "We build polished, performant mobile apps that users actually love. From Play Store to App Store — we've shipped StreamBox to Google Play and we handle the full mobile lifecycle end-to-end.",
    stack: [
      { label: "Cross-platform", items: ["React Native", "Flutter / Dart"] },
      { label: "Platforms", items: ["Android", "iOS"] },
      { label: "Backend", items: ["Node.js", "Firebase", "Supabase", "Appwrite"] },
      { label: "Distribution", items: ["Google Play Store", "Apple App Store"] },
    ],
    features: [
      "Cross-platform iOS & Android apps",
      "Custom UI/UX for mobile",
      "Offline-first architecture",
      "Push notifications",
      "In-app purchases & subscriptions",
      "Play Store & App Store publishing",
      "Performance optimisation",
      "Post-launch maintenance",
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
    sell: "From custom-trained models to intelligent chatbots — we bring real AI into your product. AgriLens, our crop disease detection platform, is a trained computer vision model running in production for Kenyan farmers. That's what we build.",
    stack: [
      { label: "ML / DL", items: ["PyTorch", "TensorFlow", "Scikit-learn"] },
      { label: "LLMs", items: ["OpenAI", "LangChain", "Hugging Face", "Ollama"] },
      { label: "Vision", items: ["Computer Vision", "Image Classification", "Object Detection"] },
      { label: "NLP", items: ["Text Classification", "Sentiment Analysis", "NER"] },
      { label: "Deployment", items: ["FastAPI", "Docker", "AWS SageMaker", "GCP Vertex AI"] },
    ],
    features: [
      "Custom ML model training",
      "LLM integration & fine-tuning",
      "Computer vision systems",
      "NLP & text analysis pipelines",
      "AI chatbots & assistants",
      "Predictive analytics",
      "AI feature integration",
      "Model deployment & monitoring",
    ],
    pricing: "From KES 40,000",
    pricingNote: "Complexity-based pricing",
  },
  {
    id: "cyber",
    icon: Shield,
    number: "04",
    title: "Cybersecurity",
    tagline: "Build secure. Stay secure.",
    sell: "Security baked into every project we deliver — and dedicated hardening for existing systems. We don't bolt security on at the end. We architect it in from line one.",
    stack: [
      { label: "Assessment", items: ["Penetration Testing", "Vulnerability Scanning", "Security Audits"] },
      { label: "Implementation", items: ["Auth & OAuth2", "Encryption", "Zero-trust Architecture"] },
      { label: "Tools", items: ["OWASP", "Burp Suite", "Nmap"] },
    ],
    features: [
      "Security architecture review",
      "Penetration testing",
      "Vulnerability assessments",
      "Auth & authorisation hardening",
      "Data encryption implementation",
      "Security monitoring setup",
      "OWASP compliance",
      "Incident response planning",
    ],
    pricing: "From KES 20,000",
    pricingNote: "Per assessment or ongoing retainer",
  },
  {
    id: "design",
    icon: Palette,
    number: "05",
    title: "UI/UX Design",
    tagline: "Design that converts. Interfaces users remember.",
    sell: "We craft interfaces that are not just beautiful — they're purposeful. Every interaction is intentional, every flow tested. The UI you're looking at right now? We built that too.",
    stack: [
      { label: "Design", items: ["Figma", "Adobe XD", "Framer", "Prototyping"] },
      { label: "Research", items: ["User Research", "Usability Testing", "A/B Testing"] },
      { label: "Delivery", items: ["Design Systems", "Component Libraries", "Dev Handoff"] },
    ],
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Design systems & components",
      "Responsive & mobile design",
      "Accessibility (WCAG 2.1)",
      "Interactive prototypes",
      "Developer handoff via Figma",
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
    sell: "Real engineers. Real curriculum. We mentor developers and students using the same skills and patterns we use in production — not textbook theory. Practical, focused, and honest about what the industry actually needs.",
    stack: [
      { label: "Topics", items: ["Web Development", "Mobile Development", "AI/ML", "System Design"] },
      { label: "Format", items: ["1-on-1 sessions", "Group cohorts", "Live code reviews"] },
      { label: "Level", items: ["Beginner", "Intermediate", "Advanced"] },
    ],
    features: [
      "1-on-1 personalised sessions",
      "Project-based learning",
      "Live code reviews",
      "Career guidance & roadmaps",
      "CV & portfolio review",
      "Interview preparation",
      "Weekly accountability",
      "Group cohort programmes",
    ],
    pricing: "From KES 2,000",
    pricingNote: "Per session · packages available",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "KES 10,000",
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
    price: "KES 35,000",
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
    price: "Custom",
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

// ─── Hero interactive graphic ─────────────────────────────────────────────────
// A live terminal-style code block that types through service keywords.
// Not used in the hero anymore now that the hero has a video background —
// kept here in case you want to drop it into another section (e.g. the
// "Why Us" or "Process" section) later.
function HeroGraphic() {
  const { colors } = useTheme();
  const lines = [
    { prefix: "service", key: "web", value: "Full-Stack Web Development", color: colors.emerald },
    { prefix: "stack", key: "frontend", value: "Next.js · React · TypeScript", color: colors.textMuted },
    { prefix: "stack", key: "backend", value: "Node.js · Django · Golang", color: colors.textMuted },
    { prefix: "service", key: "mobile", value: "Flutter · React Native", color: colors.emerald },
    { prefix: "service", key: "ai", value: "Computer Vision · LLMs · ML", color: colors.emerald },
    { prefix: "deploy", key: "cloud", value: "AWS · Azure · Cloudflare", color: colors.textMuted },
    { prefix: "service", key: "cyber", value: "Penetration Testing · OWASP", color: colors.emerald },
    { prefix: "service", key: "design", value: "UI/UX · Figma · Design Systems", color: colors.emerald },
    { prefix: "pricing", key: "start", value: "from KES 10,000", color: colors.emerald },
    { prefix: "service", key: "mentor", value: "Tech Mentorship · 1-on-1", color: colors.emerald },
    { prefix: "status", key: "ready", value: "ready to build →", color: colors.emerald },
  ];
  const [visibleLines, setVisibleLines] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 260);
      return () => clearTimeout(t);
    }
  }, [visibleLines, lines.length]);

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      position: "relative",
      overflow: "hidden",
      borderRadius: "14px",
    }}>
      {/* Window bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: "0.5rem",
        padding: "0.75rem 1rem",
        borderBottom: "1px solid var(--color-border)",
        background: "var(--color-bg)",
      }}>
        {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <span style={{ marginLeft: "0.5rem", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>
          softrinx · services.config
        </span>
      </div>

      {/* Code lines */}
      <div style={{ padding: "1.5rem", fontFamily: "monospace", minHeight: "clamp(280px, 32vw, 420px)" }}>
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", gap: "0.75rem", marginBottom: "0.55rem", alignItems: "baseline" }}>
            <span style={{ fontSize: "0.62rem", color: "var(--color-text-faint)", minWidth: "52px", textAlign: "right", userSelect: "none" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ fontSize: "clamp(0.65rem, 1vw, 0.78rem)", lineHeight: 1.5 }}>
              <span style={{ color: "var(--color-text-faint)" }}>{line.prefix}</span>
              <span style={{ color: colors.emerald }}> · </span>
              <span style={{ color: "var(--color-text-muted)" }}>{line.key}</span>
              <span style={{ color: "var(--color-text-faint)" }}> = </span>
              <span style={{ color: line.color, fontWeight: 700 }}>"{line.value}"</span>
            </span>
          </motion.div>
        ))}
        {/* Cursor */}
        {visibleLines <= lines.length && (
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.62rem", color: "var(--color-text-faint)", minWidth: "52px", textAlign: "right" }}>
              {String(visibleLines + 1).padStart(2, "0")}
            </span>
            <span style={{
              display: "inline-block", width: "8px", height: "1.1em",
              background: blink ? colors.emerald : "transparent",
              transition: "background 0.1s",
              verticalAlign: "middle",
            }} />
          </div>
        )}
      </div>

      {/* Bottom label */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "0.6rem 1rem",
        borderTop: "1px solid var(--color-border)",
        background: "var(--color-bg)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-faint)", textTransform: "uppercase" }}>
          services · Built to scale
        </span>
        <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.06em", color: colors.emerald }}>
          ● live
        </span>
      </div>
    </div>
  );
}

// ─── Service accordion card ───────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState(false);
  const [stackTab, setStackTab] = useState(0);
  const Icon = service.icon;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
      style={{
        border: "1px solid var(--color-border)",
        background: open ? "var(--color-surface)" : "var(--color-bg)",
        position: "relative", overflow: "hidden",
        borderRadius: "14px",
        transition: "background 0.25s",
      }}>

      {/* Emerald top bar on open */}
      <motion.div className="absolute top-0 left-0 h-[2px]"
        animate={{ width: open ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        style={{ background: "var(--color-emerald)" }} />

      {/* ── Header ── */}
      <button onClick={() => { setOpen(o => !o); setStackTab(0); }}
        className="w-full text-left"
        style={{ padding: "clamp(1.25rem, 2vw, 1.75rem) clamp(1rem, 2vw, 1.75rem)", background: "transparent", border: "none", cursor: "pointer" }}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center flex-1 min-w-0 gap-4">
            {/* Number */}
            <span style={{ fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--color-text-faint)", flexShrink: 0, display: "none" }} className="sm:block">
              {service.number}
            </span>
            {/* Icon */}
            <div style={{
              width: 42, height: 42, flexShrink: 0,
              border: open ? "1px solid var(--color-emerald-border)" : "1px solid var(--color-border)",
              background: open ? "var(--color-emerald-bg)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "10px",
              transition: "all 0.25s",
            }}>
              <Icon size={17} style={{ color: open ? "var(--color-emerald)" : "var(--color-text-faint)" }} />
            </div>
            {/* Title */}
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)", fontWeight: 900, letterSpacing: "-0.025em", color: "var(--color-text)", lineHeight: 1.15 }}>
                {service.title}
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--color-text-faint)", marginTop: "0.18rem", fontStyle: "italic" }}>
                {service.tagline}
              </div>
            </div>
          </div>

          {/* Right side: pricing + toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden text-right sm:block">
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--color-emerald)" }}>
                {service.pricing}
              </div>
              <div style={{ fontSize: "0.57rem", color: "var(--color-text-faint)", letterSpacing: "0.03em" }}>
                {service.pricingNote}
              </div>
            </div>
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}
              style={{
                width: 30, height: 30,
                border: "1px solid var(--color-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-text-muted)", flexShrink: 0,
                borderRadius: "8px",
              }}>
              <ArrowUpRight size={13} />
            </motion.div>
          </div>
        </div>
      </button>

      {/* ── Expanded body ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            style={{ overflow: "hidden" }}>
            <div style={{ borderTop: "1px solid var(--color-border)", padding: "clamp(1.25rem, 2vw, 2rem) clamp(1rem, 2vw, 1.75rem)" }}>

              {/* Mobile pricing */}
              <div className="flex items-center gap-2 mb-4 sm:hidden">
                <div style={{ width: 6, height: 6, background: "var(--color-emerald)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "var(--color-emerald)" }}>{service.pricing}</span>
                <span style={{ fontSize: "0.65rem", color: "var(--color-text-faint)" }}>· {service.pricingNote}</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left: sell copy + features */}
                <div>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.82, color: "var(--color-text-muted)", marginBottom: "1.4rem", fontStyle: "italic" }}>
                    "{service.sell}"
                  </p>
                  <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-emerald)", marginBottom: "0.65rem" }}>
                    What's included
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {service.features.map(f => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={12} style={{ color: "var(--color-emerald)", flexShrink: 0, marginTop: "0.15rem" }} />
                        <span style={{ fontSize: "0.76rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: stack tabs */}
                <div className="lg:col-span-2">
                  <div style={{ fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-emerald)", marginBottom: "0.65rem" }}>
                    Tech stack
                  </div>
                  {/* Tab bar */}
                  <div className="flex flex-wrap" style={{ border: "1px solid var(--color-border)", borderRadius: "8px", overflow: "hidden", marginBottom: "1rem" }}>
                    {service.stack.map((s, i) => (
                      <button key={s.label} onClick={() => setStackTab(i)}
                        style={{
                          padding: "0.4rem 0.85rem",
                          fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                          border: "none", borderRight: "1px solid var(--color-border)", cursor: "pointer",
                          background: stackTab === i ? "var(--color-emerald-bg)" : "transparent",
                          color: stackTab === i ? "var(--color-emerald)" : "var(--color-text-faint)",
                          transition: "all 0.18s", position: "relative",
                        }}>
                        {s.label}
                        {stackTab === i && (
                          <motion.div layoutId={`stab-${service.id}`}
                            className="absolute bottom-0 left-0 w-full h-[2px]"
                            style={{ background: "var(--color-emerald)" }}
                            transition={{ type: "spring", stiffness: 500, damping: 40 }} />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Tech pills */}
                  <AnimatePresence mode="wait">
                    <motion.div key={stackTab}
                      initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-2 mb-6">
                      {service.stack[stackTab]?.items.map(item => (
                        <span key={item} style={{
                          fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.04em",
                          color: "var(--color-text-muted)",
                          border: "1px solid var(--color-border)",
                          background: "var(--color-card)",
                          padding: "0.3rem 0.7rem",
                          borderRadius: "999px",
                        }}>
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                  {/* CTA strip */}
                  <div className="flex items-center justify-between gap-4 pt-5"
                    style={{ borderTop: "1px solid var(--color-border)" }}>
                    <div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 900, letterSpacing: "-0.02em", color: "var(--color-text)" }}>
                        {service.pricing}
                      </div>
                      <div style={{ fontSize: "0.65rem", color: "var(--color-text-faint)" }}>
                        {service.pricingNote}
                      </div>
                    </div>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 font-bold transition-all duration-200 group hover:-translate-y-px"
                      style={{ background: "var(--color-emerald)", color: "#040805", padding: "0.6rem 1.25rem", fontSize: "0.75rem", borderRadius: "999px", boxShadow: "0 0 18px var(--color-emerald-glow)" }}>
                      Get a Quote
                      <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Package card ─────────────────────────────────────────────────────────────
function PackageCard({ pkg, index, inView }: { pkg: typeof PACKAGES[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: pkg.highlight ? "1px solid var(--color-emerald-border)" : "1px solid var(--color-border)",
        background: pkg.highlight ? "var(--color-emerald-bg)" : hovered ? "var(--color-surface)" : "var(--color-bg)",
        position: "relative", overflow: "hidden",
        borderRadius: "14px",
        transition: "background 0.25s",
        padding: "clamp(1.75rem, 3vw, 2.5rem)",
        display: "flex", flexDirection: "column",
      }}>
      {pkg.highlight && (
        <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "var(--color-emerald)" }} />
      )}
      {/* Tag */}
      <div style={{
        fontSize: "0.57rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase",
        color: pkg.highlight ? "var(--color-emerald)" : "var(--color-text-faint)",
        marginBottom: "0.5rem",
      }}>
        {pkg.tag}
      </div>
      {/* Plan name */}
      <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-faint)", marginBottom: "0.35rem" }}>
        {pkg.name}
      </div>
      {/* Price */}
      <div style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--color-text)", lineHeight: 1, marginBottom: "0.6rem" }}>
        {pkg.price}
      </div>
      <p style={{ fontSize: "0.78rem", lineHeight: 1.65, color: "var(--color-text-muted)", marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-border)" }}>
        {pkg.description}
      </p>

      <div className="flex flex-col gap-2.5 flex-1 mb-6">
        {pkg.features.map(f => (
          <div key={f} className="flex items-start gap-2.5">
            <div style={{ width: 5, height: 5, background: "var(--color-emerald)", flexShrink: 0, marginTop: "0.38rem" }} />
            <span style={{ fontSize: "0.76rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{f}</span>
          </div>
        ))}
      </div>

      <Link href="/contact"
        className="inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 group hover:-translate-y-px"
        style={{
          background: pkg.highlight ? "var(--color-emerald)" : "transparent",
          color: pkg.highlight ? "#040805" : "var(--color-emerald)",
          border: pkg.highlight ? "none" : "1px solid var(--color-emerald-border)",
          padding: "0.72rem 1.5rem", fontSize: "0.78rem",
          borderRadius: "999px",
          boxShadow: pkg.highlight ? "0 0 22px var(--color-emerald-glow)" : "none",
        }}>
        {pkg.highlight ? "Start Now" : pkg.price === "Custom" ? "Let's Talk" : "Get Started"}
        <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      {!pkg.highlight && (
        <motion.div className="absolute bottom-0 left-0 h-[2px]"
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.4 }}
          style={{ background: "var(--color-emerald)" }} />
      )}
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
              Six domains. One team. Full-stack web, mobile apps, AI/ML, cybersecurity, UI/UX design, and mentorship — all from engineers who've shipped real products to real users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-9"
            >
              {SERVICES.map(s => (
                <button key={s.id}
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
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
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--color-emerald)";
                    (e.currentTarget as HTMLElement).style.color = "var(--color-emerald)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.08)";
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

      {/* ══ DOMAIN STRIP ════════════════════════════════════════════════════════ */}
      <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid grid-cols-3 lg:grid-cols-6" style={{ gap: "1px", background: "var(--color-border)" }}>
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.id}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="flex flex-col items-center justify-center gap-2 px-2 py-5 group"
                  style={{ background: "var(--color-surface)", borderRadius: "10px", cursor: "pointer", transition: "background 0.2s" }}
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--color-emerald-bg)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--color-surface)"}>
                  <Icon size={17} style={{ color: "var(--color-emerald)" }} />
                  <span style={{ fontSize: "0.56rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-text-faint)", textAlign: "center", lineHeight: 1.3 }}>
                    {s.number}. {s.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══ SERVICES ACCORDION ══════════════════════════════════════════════════ */}
      <section id="services" style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-12 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="What We Build" />
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--color-text)" }}>
                Click any service
                <br />
                <span style={{ color: "var(--color-emerald)" }}>to explore it.</span>
              </h2>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "22rem" }}>
              Each card expands to show the full stack, features, and pricing. Tap the one you need.
            </p>
          </div>

          <div className="flex flex-col gap-px" style={{ background: "var(--color-border)" }}>
            {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═════════════════════════════════════════════════════════════ */}
      <section ref={packagesRef} style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="flex flex-col justify-between gap-8 mb-12 lg:flex-row lg:items-end">
            <div>
              <SectionLabel text="Pricing" />
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--color-text)" }}>
                Transparent.
                <br />
                <span style={{ color: "var(--color-emerald)" }}>No surprises.</span>
              </h2>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "22rem" }}>
              Starting prices in Kenyan Shillings. Every project gets a detailed quote after a free 30-minute scoping call — no commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px lg:grid-cols-3" style={{ background: "var(--color-border)" }}>
            {PACKAGES.map((pkg, i) => <PackageCard key={pkg.name} pkg={pkg} index={i} inView={packagesInView} />)}
          </div>

          <motion.div initial={{ opacity: 0 }} animate={packagesInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-6 pt-6 mt-7"
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

      {/* ══ WHY US ══════════════════════════════════════════════════════════════ */}
      <section ref={whyRef} style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel text="Why Softrinx" />
              <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.045em", lineHeight: 0.95, color: "var(--color-text)", marginBottom: "1.5rem" }}>
                Engineers who
                <br />
                <span style={{ color: "var(--color-emerald)" }}>actually ship.</span>
              </h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.82, color: "var(--color-text-muted)", marginBottom: "2rem" }}>
                We're not a marketplace or an agency that passes your project to a stranger. We are the engineers who build it — five CS graduates from DeKUT, Westlands, Nairobi, who treat every project like it's our own startup.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 font-semibold transition-colors group"
                style={{ color: "var(--color-emerald)", fontSize: "0.85rem" }}>
                Meet the team <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="flex flex-col gap-px" style={{ background: "var(--color-border)" }}>
              {[
                { icon: Users, title: "You talk to the engineer", body: "No account managers. No middlemen. You reach out — you get the engineer building your product." },
                { icon: Zap, title: "7 products shipped in year one", body: "AgriLens, HealthMaster, StreamBox, Decluttr, IntelliMark — real users, real traction." },
                { icon: Lock, title: "Full source code. Always yours.", body: "Everything we build belongs to you. Walk away with the repo. No lock-in, ever." },
                { icon: Globe, title: "Built in Westlands, Nairobi. Used globally.", body: "Products used in Kenya and Germany. World-class engineering has no zip code requirement." },
                { icon: Code2, title: "We do it right or we fix it.", body: "If something isn't working post-launch, we fix it. No blame, no extra charge." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title}
                    initial={{ opacity: 0, x: 14 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    style={{ padding: "1.2rem 1.5rem", background: "var(--color-bg)", borderRadius: "10px", position: "relative", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    {i === 0 && <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "var(--color-emerald)" }} />}
                    <div style={{ width: 32, height: 32, flexShrink: 0, border: "1px solid var(--color-border)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={14} style={{ color: "var(--color-emerald)" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.83rem", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--color-text)", marginBottom: "0.3rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.74rem", lineHeight: 1.68, color: "var(--color-text-muted)" }}>
                        {item.body}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ═════════════════════════════════════════════════════════════ */}
      <section ref={processRef} style={{
        paddingTop: "clamp(72px, 10vw, 112px)",
        paddingBottom: "clamp(72px, 10vw, 112px)",
        background: "var(--color-surface)",
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