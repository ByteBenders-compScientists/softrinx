"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Twitter, Linkedin, Github, Facebook } from "lucide-react";
import { useTheme } from "@/contexts/themeContext";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/_softrinx" },
  { name: "GitHub", icon: Github, href: "https://github.com/Softrinx" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/softrinx" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1C9Vim8B4P/" },
];

export default function Footer() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const year = new Date().getFullYear();

  return (
    <>
      {/* ─── The Overlapping CTA Dock ─────────────────────────────────────── */}
      <div className="relative z-30 px-4 mx-auto lg:px-16" style={{ maxWidth: "1000px", marginTop: "80px" }}>
        <motion.div 
          className="relative flex flex-col items-center justify-between w-full shadow-2xl md:flex-row rounded-[2rem] -mb-24 overflow-hidden"
          style={{ 
            background: "var(--color-surface)", 
            border: "1px solid var(--color-border)",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left: CTA Text & Button */}
          <div className="relative z-10 flex flex-col items-center w-full p-8 text-center md:w-1/2 md:items-start md:p-12 md:text-left">
            <h2 
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--color-text)",
                marginBottom: "1.5rem"
              }}
            >
              Have an idea?<br />
              <span style={{ color: "var(--color-emerald)" }}>Let's match.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 font-bold transition-transform duration-300 rounded-full group"
              style={{
                background: "var(--color-text)",
                color: "var(--color-bg)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              Get in touch
              <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Right: Embedded CTA Image */}
          <div className="relative flex items-end justify-center w-full pt-4 md:w-1/2 md:pt-0">
            <img 
              src="/images/footercta1.png" 
              alt="Connect with Softrinx" 
              className="object-cover object-bottom w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] h-auto rounded-br-[2rem]"
              style={{ display: "block" }}
            />
          </div>
        </motion.div>
      </div>

      {/* ─── Main Footer ───────────────────────────────────────────────────── */}
      <footer
        ref={ref}
        className="relative w-full overflow-hidden pt-36 md:pt-48 pb-8"
        style={{
          background: "var(--color-bg)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        {/* Giant Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h1 
            style={{
              fontSize: "clamp(5rem, 18vw, 22rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "var(--color-text)",
              opacity: 0.03,
              lineHeight: 0.8,
              whiteSpace: "nowrap"
            }}
          >
            SOFTRINX
          </h1>
        </div>

        {/* Far Right Decorative Image (Scaled Down) */}
        <div className="absolute right-0 top-1/4 bottom-0 w-[50%] max-w-[700px] z-[0] pointer-events-none opacity-40 md:opacity-80">
          <img 
            src="/images/footer.png" 
            alt="Softrinx visual" 
            className="object-contain object-right w-full h-full"
          />
        </div>

        {/* Far Left Floating Image */}
        <div className="absolute left-[-2%] top-[30%] w-48 h-48 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] z-[1] pointer-events-none float-animation hidden md:block">
          <img 
            src="/images/footercta2.png" 
            alt="Floating decorative element" 
            className="object-contain w-full h-full drop-shadow-2xl"
          />
        </div>

        {/* Main Content Grid */}
        <div className="relative z-10 px-6 mx-auto lg:px-16" style={{ maxWidth: "1600px" }}>
          <div className="flex flex-col justify-between gap-12 lg:flex-row mb-20 lg:pl-16 xl:pl-32">
            
            {/* Left: Navigation Links */}
            <div className="flex flex-col gap-2 md:gap-4 pt-12">
              {footerLinks.map((link, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + (i * 0.1) }}
                >
                  <Link
                    href={link.href}
                    className="block font-black capitalize transition-all duration-300 hover:translate-x-4"
                    style={{ 
                      fontSize: "clamp(3rem, 6vw, 5.5rem)", 
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "var(--color-text)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-emerald)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right: Info Panels (No Card, Just Text) */}
            <motion.div 
              className="flex flex-col justify-center w-full max-w-[400px] gap-12 lg:mr-12 pt-12"
              initial={{ opacity: 0, x: 40 }} 
              animate={inView ? { opacity: 1, x: 0 } : {}} 
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Newsletter Subscribe */}
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-faint)", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                  Newsletter
                </span>
                <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-5 py-4 bg-transparent border rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                    style={{ 
                      borderColor: "var(--color-border-mid)", 
                      color: "var(--color-text)", 
                      fontSize: "0.95rem" 
                    }}
                  />
                  <button 
                    type="button" 
                    className="w-full px-5 py-4 font-bold transition-all rounded-xl hover:opacity-90"
                    style={{ background: "var(--color-text)", color: "var(--color-bg)", fontSize: "0.95rem" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Direct Contact */}
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-faint)", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                  Get in Touch
                </span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:info@softrinx.com" className="text-xl font-bold transition-colors hover:text-[var(--color-emerald)]" style={{ color: "var(--color-text)" }}>
                    info@softrinx.com
                  </a>
                  <a href="tel:+254750109798" className="text-xl font-bold transition-colors hover:text-[var(--color-emerald)]" style={{ color: "var(--color-text)" }}>
                    +254 750 109798
                  </a>
                  <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", marginTop: "0.5rem", fontWeight: 500 }}>
                    Westlands, Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Socials (With Icons) */}
              <div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-text-faint)", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
                  Follow Us
                </span>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {socials.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bold transition-colors group"
                        style={{ color: "var(--color-text)", fontSize: "0.95rem" }}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full transition-colors group-hover:bg-[var(--color-emerald-bg)]">
                           <Icon size={18} className="transition-colors group-hover:text-[var(--color-emerald)]" />
                        </div>
                        <span className="transition-colors group-hover:text-[var(--color-emerald)]">{s.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ─── Bottom Info Bar ─────────────────────────────────────────────── */}
        <div className="relative z-10 w-full px-6 pt-6 mx-auto border-t lg:px-16" style={{ borderColor: "var(--color-border)", maxWidth: "1600px" }}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-4">
               <Image
                  src="/images/images/logo.png"
                  alt="Softrinx Logo"
                  width={110}
                  height={28}
                  style={{ filter: isDark ? "invert(1)" : "none", opacity: 0.9 }}
                />
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 500 }}>
                © {year}. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-6">
              <Link href="/privacy" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 500 }} className="hover:text-[var(--color-emerald)] transition-colors">Privacy Policy</Link>
              <Link href="/terms" style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 500 }} className="hover:text-[var(--color-emerald)] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .float-animation {
            animation: floatSmooth 6s ease-in-out infinite alternate;
          }

          @keyframes floatSmooth {
            0% { transform: translateY(0px) rotate(0deg); }
            100% { transform: translateY(-30px) rotate(3deg); }
          }
        `}</style>
      </footer>
    </>
  );
}