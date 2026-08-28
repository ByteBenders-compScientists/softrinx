"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Facebook, Twitter, Instagram,
  Linkedin, Github, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { useTheme } from "@/contexts/themeContext";

const NAV_ITEMS = [
  { name: "Home",      path: "/" },
  { name: "About",     path: "/about" },
  { name: "Services",  path: "/services" },
  { name: "Features",  path: "/features" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact",   path: "/contact" },
];

const SOCIALS = [
  { icon: <Facebook  size={16} />, link: "https://facebook.com"  },
  { icon: <Twitter   size={16} />, link: "https://twitter.com"   },
  { icon: <Instagram size={16} />, link: "https://instagram.com" },
  { icon: <Linkedin  size={16} />, link: "https://linkedin.com"  },
  { icon: <Github    size={16} />, link: "https://github.com"    },
];

// ─── Abstract thumbnail ─────────────────────────────────────────────────────
function AbstractThumb({ colors = ["#10b981", "#6366f1", "#0ea5e9"] }: { colors?: string[] }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "4 / 3",
        borderRadius: "12px",
        background:
          `radial-gradient(circle at 25% 20%, ${colors[0]} 0%, transparent 45%), ` +
          `radial-gradient(circle at 80% 30%, ${colors[1]} 0%, transparent 50%), ` +
          `radial-gradient(circle at 50% 85%, ${colors[2]} 0%, transparent 55%), ` +
          "#f5f7f5", 
      }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.4) 100%)" }} />
    </div>
  );
}

// ─── Mega menu content ──────────────────────────────────────────────────────
const MEGA_MENUS: Record<string, { kind: string }> = {
  About: { kind: "about" },
  Services: { kind: "services" },
  Features: { kind: "features" },
  Portfolio: { kind: "portfolio" },
  Contact: { kind: "contact" },
};

function AboutMenu({ em }: { em: string }) {
  return (
    <div className="grid grid-cols-[1fr_280px] gap-8" style={{ padding: "20px" }}>
      <div>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "14px" }}>
          Who We Are
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/about" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Our Story</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>The journey of Softrinx</p>
          </Link>
          <Link href="/about#team" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Leadership</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Meet the core team</p>
          </Link>
          <Link href="/careers" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Careers</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Join our growing agency</p>
          </Link>
          <Link href="/about#mission" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Mission</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Our vision for the future</p>
          </Link>
        </div>
      </div>
      <Link href="/about" className="block group">
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "10px" }}>
          Inside Softrinx
        </p>
        <AbstractThumb colors={["#f59e0b", "#ec4899", "#8b5cf6"]} />
        <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d", marginTop: "12px", lineHeight: 1.35 }}>
          Building the future of digital enterprise
        </p>
        <span className="inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ fontSize: "0.8rem", fontWeight: 600, color: em, marginTop: "6px" }}>
          Read more <ArrowUpRight size={12} />
        </span>
      </Link>
    </div>
  );
}

function FeaturesMenu({ em }: { em: string }) {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8" style={{ padding: "20px" }}>
      <Link href="/features" className="block group">
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "10px" }}>
          Our Tech Stack
        </p>
        <AbstractThumb colors={["#3b82f6", "#14b8a6", "#8b5cf6"]} />
        <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d", marginTop: "12px", lineHeight: 1.35 }}>
          Modern infrastructure for scalable applications
        </p>
        <span className="inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ fontSize: "0.8rem", fontWeight: 600, color: em, marginTop: "6px" }}>
          View specs <ArrowUpRight size={12} />
        </span>
      </Link>
      <div>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "14px" }}>
          Capabilities
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Cloud Hosting</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>AWS & Vercel optimization</p>
          </div>
          <div className="p-3">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Security</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Enterprise-grade protection</p>
          </div>
          <div className="p-3">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>AI Integration</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Automate your workflows</p>
          </div>
          <div className="p-3">
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d" }}>Analytics</p>
            <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Data-driven insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactMenu({ em }: { em: string }) {
  return (
    <div className="grid grid-cols-[1fr_280px] gap-8" style={{ padding: "20px" }}>
      <div>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "14px" }}>
          Get In Touch
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/contact" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0f0d" }}>Sales & Proposals</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>Discuss a new project with our team</p>
          </Link>
          <a href="tel:+254750109798" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0f0d" }}>Direct Line</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>+254 750 109798</p>
          </a>
          <a href="mailto:info@softrinx.com" className="block p-3 transition-colors rounded-lg hover:bg-black/5">
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0f0d" }}>General Inquiry</p>
            <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.55)", marginTop: "2px" }}>info@softrinx.com</p>
          </a>
        </div>
      </div>
      <Link href="/contact" className="block group">
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "10px" }}>
          Global Reach
        </p>
        <AbstractThumb colors={["#f43f5e", "#d946ef", "#6366f1"]} />
        <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d", marginTop: "12px", lineHeight: 1.35 }}>
          Ready to scale your business worldwide?
        </p>
        <span className="inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ fontSize: "0.8rem", fontWeight: 600, color: em, marginTop: "6px" }}>
          Start a conversation <ArrowUpRight size={12} />
        </span>
      </Link>
    </div>
  );
}

function ServicesMenu({ em }: { em: string }) {
  const columns = [
    { label: "Services", items: ["Web Development", "Mobile Apps", "Payment Integrations", "AI & Automation"], more: "All services" },
    { label: "Platforms", items: ["Next.js", "React Native", "Appwrite", "Node.js"] },
    { label: "Industries", items: ["Fintech", "Healthcare", "E-commerce"] },
  ];
  return (
    <div style={{ padding: "20px" }}>
      <Link
        href="/services"
        className="flex items-center justify-between transition-all duration-200 group"
        style={{
          background: "#f4f7f5", borderRadius: "14px", border: "1px solid rgba(0,0,0,0.04)",
          padding: "18px 22px", marginBottom: "22px",
        }}
      >
        <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0a0f0d" }}>
          Your whole web team.
        </span>
        <span className="flex items-center gap-2" style={{ fontSize: "0.8rem", fontWeight: 600, color: "rgba(0,0,0,0.6)" }}>
          Discover <ArrowRight size={11} /> Design <ArrowRight size={11} /> Build <ArrowRight size={11} /> Launch
          <span className="flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5"
            style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid rgba(0,0,0,0.15)", marginLeft: "8px" }}>
            <ArrowRight size={13} color="#0a0f0d" />
          </span>
        </span>
      </Link>

      <div className="grid grid-cols-3 gap-8">
        {columns.map((col) => (
          <div key={col.label}>
            <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "12px" }}>
              {col.label}
            </p>
            <div className="flex flex-col gap-2.5">
              {col.items.map((item) => (
                <Link key={item} href="/services" style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0a0f0d" }}>
                  {item}
                </Link>
              ))}
              {col.more && (
                <Link href="/services" style={{ fontSize: "0.82rem", color: "rgba(0,0,0,0.5)", textDecoration: "underline", marginTop: "4px" }}>
                  {col.more}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioMenu({ em }: { em: string }) {
  const builds = [
    { title: "Fintech Dashboard", stack: "Next.js · Node" },
    { title: "Streaming Platform", stack: "Next.js · Appwrite" },
    { title: "Healthcare Portal", stack: "React Native" },
  ];
  return (
    <div className="grid grid-cols-[280px_1fr] gap-8" style={{ padding: "20px" }}>
      <Link href="/portfolio" className="block group">
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "10px" }}>
          Featured case study
        </p>
        <AbstractThumb />
        <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0a0f0d", marginTop: "12px", lineHeight: 1.35 }}>
          Experience the work we've done for our clients and the impact we've made in their industries.
        </p>
        <span className="inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-0.5"
          style={{ fontSize: "0.8rem", fontWeight: 600, color: em, marginTop: "6px" }}>
          Read case study <ArrowUpRight size={12} />
        </span>
      </Link>
      <div>
        <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: "14px" }}>
          Recent builds
        </p>
        <div className="flex flex-col gap-4">
          {builds.map((b) => (
            <Link key={b.title} href="/portfolio" className="block p-2 -ml-2 transition-colors rounded-lg hover:bg-black/5">
              <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0a0f0d" }}>{b.title}</p>
              <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.55)", marginTop: "1px" }}>{b.stack}</p>
            </Link>
          ))}
        </div>
        <Link href="/portfolio" style={{ fontSize: "0.82rem", color: "rgba(0,0,0,0.6)", textDecoration: "underline", marginTop: "16px", display: "inline-block" }}>
          All work
        </Link>
      </div>
    </div>
  );
}

const Navigation = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const { colors } = useTheme();

  const em = colors.emerald;
  
  // Boolean to determine if the nav background is active
  const isNavSolid = scrolled || activeMenu;

  // Dynamic colors based on scroll/menu state
  const dynamicNavText = isNavSolid ? "#0a0f0d" : "#ffffff";
  const dynamicNavTextFaint = isNavSolid ? "rgba(10, 15, 13, 0.6)" : "rgba(255, 255, 255, 0.7)";
  const mobileMenuIconColor = isNavSolid || isOpen ? "#0a0f0d" : "#ffffff";
  const hoverPillBg = isNavSolid ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.15)";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeAll = () => { setIsOpen(false); setActiveMenu(null); };
  const isActive = (p: string) => p === "/" ? pathname === "/" : pathname.startsWith(p);

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full transition-all duration-500"
        onMouseLeave={() => setActiveMenu(null)}
        style={{
          background: isNavSolid ? "rgba(255, 255, 255, 0.3)" : "transparent",
          backdropFilter: isNavSolid ? "blur(18px) saturate(180%)" : "none",
          WebkitBackdropFilter: isNavSolid ? "blur(18px) saturate(180%)" : "none",
          borderBottom: isNavSolid ? `1px solid rgba(0,0,0,0.06)` : "1px solid transparent",
          borderBottomLeftRadius: isNavSolid ? "24px" : "0px",
          borderBottomRightRadius: isNavSolid ? "24px" : "0px",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{ background: `linear-gradient(90deg,transparent,${em}90,transparent)`, opacity: 0.7 }} />

        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between" style={{ height: "68px", gap: "1rem" }}>

            <Link href="/" className="flex-shrink-0" style={{ lineHeight: 0 }}>
              <Image
                src="/images/images/logo.png"
                alt="Softrinx"
                width={130} height={36}
                className="w-auto"
                style={{ height: "clamp(28px, 4vw, 36px)" }}
              />
            </Link>

            <div className="items-stretch justify-center flex-1 hidden lg:flex">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.path);
                const hasMenu = !!MEGA_MENUS[item.name];
                const highlighted = active || activeMenu === item.name;
                return (
                  <div
                    key={item.name}
                    onMouseEnter={() => setActiveMenu(hasMenu ? item.name : null)}
                    className="relative flex items-center"
                  >
                    <Link
                      href={item.path}
                      className="flex items-center px-4 py-2 mx-0.5 text-[13px] font-semibold transition-all duration-200"
                      style={{
                        color: highlighted ? em : dynamicNavText,
                        background: highlighted ? hoverPillBg : "transparent",
                        borderRadius: "9999px",
                      }}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center flex-shrink-0 gap-3">
              <div className="items-center flex-shrink-0 hidden gap-2 lg:flex">
                <Phone size={14} style={{ color: em, flexShrink: 0 }} />
                <div style={{ lineHeight: 1.2 }}>
                  <p className="transition-colors duration-200" style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: dynamicNavTextFaint, marginBottom: "1px" }}>
                    Support
                  </p>
                  <a href="tel:+254750109798"
                    className="transition-colors duration-200"
                    style={{ fontSize: "12px", fontWeight: 700, color: dynamicNavText, whiteSpace: "nowrap" }}>
                    +254 750 109798
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center flex-shrink-0 transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
                style={{
                  background: em, color: "#040805",
                  padding: "0.55rem 1.1rem", fontSize: "12.5px", fontWeight: 700,
                  letterSpacing: "0.05em", whiteSpace: "nowrap", borderRadius: "9999px",
                }}
              >
                Get A Quote
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center transition-colors duration-200 lg:hidden w-9 h-9"
                style={{ color: mobileMenuIconColor }}
                aria-label="Menu"
              >
                <span className="absolute transition-all duration-300"
                  style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
                  <Menu size={22} />
                </span>
                <span className="absolute transition-all duration-300"
                  style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)" }}>
                  <X size={22} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden w-full px-10 lg:block">
          <div className="relative mx-auto w-full max-w-[1440px]">
            <AnimatePresence>
              {activeMenu && MEGA_MENUS[activeMenu] && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute"
                  style={{
                    top: "10px", right: "0",
                    width: ["About", "Contact", "Features"].includes(activeMenu) ? "650px" : activeMenu === "Portfolio" ? "760px" : "820px",
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(24px) saturate(160%)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    borderRadius: "18px",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.08)",
                  }}
                >
                  {activeMenu === "About" && <AboutMenu em={em} />}
                  {activeMenu === "Services" && <ServicesMenu em={em} />}
                  {activeMenu === "Features" && <FeaturesMenu em={em} />}
                  {activeMenu === "Portfolio" && <PortfolioMenu em={em} />}
                  {activeMenu === "Contact" && <ContactMenu em={em} />}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <div
        className="fixed inset-0 z-40"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none", transition: "opacity 0.3s" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(255,255,255,0.4)", backdropFilter: "blur(6px)" }}
          onClick={closeAll}
        />

        <div
          className="absolute left-0 right-0 flex flex-col"
          style={{
            width: "100%",
            background: colors.bgSurface,
            borderBottom: `1px solid ${colors.border}`,
            borderBottomLeftRadius: "24px",
            borderBottomRightRadius: "24px",
            top: "68px",
            maxHeight: "calc(100% - 68px)",
            transform: isOpen ? "translateY(0)" : "translateY(-16px)",
            opacity: isOpen ? 1 : 0,
            transition: "transform 0.35s cubic-bezier(0.32,0.72,0,1), opacity 0.3s",
            overflow: "hidden",
            boxShadow: "0 24px 40px rgba(0,0,0,0.05)",
          }}
        >
          <nav className="flex-1 px-5 pt-6 pb-2 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={closeAll}
                  className="flex items-center py-3 transition-colors duration-200"
                  style={{
                    fontSize: "1.65rem", fontWeight: 600, letterSpacing: "-0.01em",
                    color: active ? em : colors.textPrimary,
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex-shrink-0 px-5 py-6 space-y-5" style={{ borderTop: `1px solid ${colors.border}` }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center flex-shrink-0"
                style={{ width: "34px", height: "34px", background: colors.emeraldBg, border: `1px solid ${colors.emeraldBorder}`, borderRadius: "50%" }}>
                <Phone size={14} style={{ color: em }} />
              </div>
              <div>
                <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: colors.textFaint }}>
                  Client Support
                </p>
                <a href="tel:+254750109798" style={{ fontSize: "13px", fontWeight: 700, color: colors.textPrimary }}>
                  +254 750 109798
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={closeAll}
              className="flex items-center justify-center w-full font-bold transition-all duration-200"
              style={{
                background: em, color: "#040805", padding: "0.9rem",
                fontSize: "14px", letterSpacing: "0.02em", borderRadius: "9999px",
              }}
            >
              Get A Quote
            </Link>

            <div className="flex items-center gap-1">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200"
                  style={{ width: "32px", height: "32px", color: colors.textFaint, borderRadius: "50%" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = em}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = colors.textFaint}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <p style={{ fontSize: "10px", textAlign: "center", color: colors.textFaint }}>
              info@softrinx.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;