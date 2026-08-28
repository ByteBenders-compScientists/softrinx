"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, Phone, Facebook, Twitter, Instagram,
  Linkedin, Github, Search, Sun, Moon,
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

const Navigation = () => {
  const [isOpen,      setIsOpen]      = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname  = usePathname();
  const { isDark, toggle, colors } = useTheme();

  const em = colors.emerald;

  // The nav always sits on top of the dark hero video, and on scroll it
  // becomes a dark frosted-glass bar (not tied to the site's light/dark
  // toggle) — so text stays white in both states instead of flipping to
  // dark-on-dark when the theme is light.
  const navText       = "rgba(255,255,255,0.72)";
  const navTextBright  = "#ffffff";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 80);
  }, [searchOpen]);

  const closeSearch = () => { setSearchOpen(false); setSearchQuery(""); };
  const isActive    = (p: string) => p === "/" ? pathname === "/" : pathname.startsWith(p);

  return (
    <>
      {/* ── Desktop + Mobile Nav bar ───────────────────────────────────────── */}
      <nav
        className="fixed z-50 w-full transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6, 10, 9, 0.55)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {/* Top emerald accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{ background: `linear-gradient(90deg,transparent,${em}90,transparent)`, opacity: 0.7 }} />

        <div className="px-5 mx-auto" style={{ maxWidth: "1360px" }}>
          <div className="flex items-center justify-between" style={{ height: "68px", gap: "1rem" }}>

            {/* Logo — unchanged */}
            <Link href="/" className="flex-shrink-0" style={{ lineHeight: 0 }}>
              <Image
                src="/images/images/logo.png"
                alt="Softrinx"
                width={130} height={36}
                className="w-auto"
                style={{ height: "clamp(28px, 4vw, 36px)" }}
              />
            </Link>

            {/* ── Desktop nav links (hidden when search open) ── */}
            <div
              className="items-stretch justify-center flex-1 hidden lg:flex"
              style={{
                transition: "opacity 0.2s, transform 0.2s",
                opacity: searchOpen ? 0 : 1,
                pointerEvents: searchOpen ? "none" : "auto",
                transform: searchOpen ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="relative flex items-center px-5 text-[12.5px] tracking-[0.1em] uppercase font-semibold transition-colors duration-200 group"
                    style={{ color: active ? em : navText }}
                  >
                    {/* Active state: left vertical emerald bar + bottom bar */}
                    {active && (
                      <span style={{
                        position: "absolute",
                        left: 0,
                        top: "20%",
                        bottom: "20%",
                        width: "2px",
                        background: em,
                        display: "block",
                      }} />
                    )}

                    <span>{item.name}</span>

                    {/* Hover underline (inactive only) */}
                    {!active && (
                      <span
                        className="absolute bottom-0 left-5 h-[1.5px] transition-all duration-300 w-0 group-hover:w-[calc(100%-40px)]"
                        style={{ background: `${em}55` }}
                      />
                    )}

                    {/* Active bottom bar */}
                    {active && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{ background: em }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Right side controls ── */}
            <div className="flex items-center flex-shrink-0 gap-2">

              {/* ── Search — expands LEFT over nav, never touches phone/CTA ── */}
              <div className="relative items-center hidden lg:flex">
                {/* Expanded input — absolute positioned left of button */}
                <div
                  style={{
                    position: "absolute",
                    right: "calc(100% + 8px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: searchOpen ? "220px" : "0px",
                    overflow: "hidden",
                    transition: "width 0.3s cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      borderRadius: "6px",
                      padding: "0 10px",
                      width: "220px",
                      opacity: searchOpen ? 1 : 0,
                      transition: "opacity 0.2s",
                    }}
                  >
                    <Search size={13} style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }} />
                    <input
                      ref={searchRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                      placeholder="Search…"
                      style={{
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        fontSize: "0.82rem",
                        color: "#fff",
                        padding: "8px 6px",
                        fontFamily: "inherit",
                      }}
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery("")}
                        style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", display: "flex" }}>
                        <X size={12} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search toggle button */}
                <button
                  onClick={() => searchOpen ? closeSearch() : setSearchOpen(true)}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: "34px", height: "34px",
                    background: searchOpen ? colors.emeraldBg : "rgba(255,255,255,0.06)",
                    border: `1px solid ${searchOpen ? colors.emeraldBorder : "rgba(255,255,255,0.12)"}`,
                    borderRadius: "6px",
                    color: searchOpen ? em : navText,
                    cursor: "pointer",
                  }}
                  aria-label="Search"
                >
                  {searchOpen ? <X size={15} /> : <Search size={15} />}
                </button>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggle}
                className="flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  width: "34px", height: "34px",
                  background: colors.emeraldBg,
                  border: `1px solid ${colors.emeraldBorder}`,
                  borderRadius: "50%",
                  color: em,
                  position: "relative",
                  overflow: "hidden",
                }}
                aria-label="Toggle theme"
              >
                <span className="absolute transition-all duration-300"
                  style={{ opacity: isDark ? 1 : 0, transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)" }}>
                  <Sun size={14} />
                </span>
                <span className="absolute transition-all duration-300"
                  style={{ opacity: isDark ? 0 : 1, transform: isDark ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)" }}>
                  <Moon size={14} />
                </span>
              </button>

              {/* Divider */}
              <div className="flex-shrink-0 hidden w-px h-5 lg:block" style={{ background: "rgba(255,255,255,0.14)" }} />

              {/* Phone — desktop only, never wraps */}
              <div className="items-center flex-shrink-0 hidden gap-2 lg:flex">
                <Phone size={14} style={{ color: em, flexShrink: 0 }} />
                <div style={{ lineHeight: 1.2 }}>
                  <p style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1px" }}>
                    Support
                  </p>
                  <a href="tel:+254750109798"
                    style={{ fontSize: "12px", fontWeight: 700, color: navTextBright, whiteSpace: "nowrap" }}>
                    +254 750 109798
                  </a>
                </div>
              </div>

              {/* CTA — desktop */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center flex-shrink-0 transition-all duration-200 hover:-translate-y-px active:scale-[0.98]"
                style={{
                  background: em,
                  color: "#040805",
                  padding: "0.55rem 1.1rem",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  borderRadius: "9999px",
                  boxShadow: `0 0 18px ${colors.emeraldGlow}`,
                }}
              >
                Get A Quote
              </Link>

              {/* Hamburger — mobile. Always white: nav is always dark-styled now. */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center transition-colors lg:hidden w-9 h-9"
                style={{ color: "#fff" }}
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
      </nav>

      {/* ── Mobile Menu — Bejamas-style: full-width panel dropping from below
           the nav bar, plain unboxed nav list, pill CTA pinned to the
           bottom. (Previously a narrow 300px sidebar sliding from the
           right — replaced entirely.) ── */}
      <div
        className="fixed inset-0 z-40"
        style={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none", transition: "opacity 0.3s" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel — full width, drops down from under the nav bar */}
        <div
          className="absolute left-0 right-0 flex flex-col"
          style={{
            width: "100%",
            background: colors.bgSurface,
            borderBottom: `1px solid ${colors.border}`,
            top: "68px",
            maxHeight: "calc(100% - 68px)",
            transform: isOpen ? "translateY(0)" : "translateY(-16px)",
            opacity: isOpen ? 1 : 0,
            transition: "transform 0.35s cubic-bezier(0.32,0.72,0,1), opacity 0.3s",
            overflow: "hidden",
          }}
        >
          {/* Search row */}
          <div className="flex items-center flex-shrink-0 gap-2 px-5 pt-6 pb-4">
            <div className="flex items-center gap-2 flex-1 px-3 py-2.5"
              style={{ background: colors.bgCard, border: `1px solid ${colors.border}`, borderRadius: "8px" }}>
              <Search size={13} style={{ color: colors.textFaint, flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search…"
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  fontSize: "0.82rem", color: colors.textPrimary, fontFamily: "inherit",
                }}
              />
            </div>
          </div>

          {/* Nav links — plain stacked list, no boxes, Bejamas-sized type */}
          <nav className="flex-1 px-5 py-2 overflow-y-auto">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center py-3 transition-colors duration-200"
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: active ? em : colors.textPrimary,
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Panel footer — phone, pill CTA, socials */}
          <div className="flex-shrink-0 px-5 py-6 space-y-5" style={{ borderTop: `1px solid ${colors.border}` }}>
            {/* Phone */}
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

            {/* CTA — full-width pill, matching Bejamas' bottom "Contact" button */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full font-bold transition-all duration-200"
              style={{
                background: em, color: "#040805",
                padding: "0.9rem",
                fontSize: "14px",
                letterSpacing: "0.02em",
                borderRadius: "9999px",
              }}
            >
              Get A Quote
            </Link>

            {/* Socials */}
            <div className="flex items-center gap-1">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: "32px", height: "32px",
                    color: colors.textFaint,
                    borderRadius: "50%",
                  }}
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