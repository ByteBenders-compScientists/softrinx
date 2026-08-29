"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight, Quote } from "lucide-react";
// Adjust this import path to wherever your ThemeProvider is located
import { useTheme } from "@/contexts/themeContext"; 

// ─── Real client stories from actual Softrinx projects ────────────────────────
const testimonials = [
  {
    id: 1,
    company: "MEMORA",
    text: "They didn't just build a website — they built a brand identity that lets our photography breathe online. Every pixel serves the emotion we wanted to convey.",
    author: "Memora Visuals",
    role: "Photography Studio",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=200&h=200&fit=crop&crop=center",
    link: "https://memoravisuals.com",
  },
  {
    id: 2,
    company: "AGRILENS",
    text: "A farmer photographs a diseased crop and gets an AI diagnosis in seconds. Softrinx made something that genuinely matters to smallholder farmers across Kenya.",
    author: "AgriLens Team",
    role: "AI AgriTech Platform",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop&crop=center",
    link: "https://agrilens-farmer.vercel.app/",
  },
  {
    id: 3,
    company: "INTELLIMARK",
    text: "Our lecturers now have AI that grades, tracks, and adapts. Assessment creation went from hours to minutes — deployed across our entire university cohort.",
    author: "IntelliMark",
    role: "EdTech AI Platform",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop&crop=center",
    link: "https://intellimark.pages.dev/",
  },
  {
    id: 4,
    company: "FARMSENSE",
    text: "Precision agriculture without expensive IoT hardware — we couldn't believe it was possible. FarmSense is now helping farmers across three counties optimise their yields.",
    author: "FarmSense",
    role: "Smart Farming Platform",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&h=200&fit=crop&crop=center",
    link: "https://farm-sense-mu.vercel.app/",
  },
  {
    id: 5,
    company: "DJAFRO CINEMA",
    text: "A full streaming platform — custom video player, offline mode, subscriptions — shipped on time and on budget. Exactly what we envisioned for local cinema enthusiasts.",
    author: "Djafro Team",
    role: "Movie Streaming Platform",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&h=200&fit=crop&crop=center",
    link: "https://djafrocinema.com/",
  },
  {
    id: 6,
    company: "WERENTONLINE",
    text: "Tourists are now effortlessly booking our coastal rentals online. The seamless integration of payments and property management completely transformed our workflow.",
    author: "WereNtOnline",
    role: "Travel & Rentals",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=200&h=200&fit=crop&crop=center",
    link: "https://www.werentonline.com/",
  },
];

// ─── Simple SVG for Google Logo ──────────────────────────────────────────────
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ─── Theme-Aware Testimonial Card ────────────────────────────────────────────
function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <a
      href={t.link}
      target="_blank"
      rel="noopener noreferrer"
      className="testimonial-card flex-shrink-0 flex flex-col justify-between group relative overflow-hidden"
      style={{
        width: "clamp(300px, 80vw, 400px)",
        background: "var(--color-card)",
        borderRadius: "1.25rem",
        padding: "2.5rem 2rem",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
        border: "1px solid var(--color-border)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* ── Massive Faded Shadow Quote Icon ── */}
      <div className="absolute -top-4 -right-2 pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
        <Quote size={140} strokeWidth={0.5} style={{ color: "var(--color-text-faint)", opacity: 0.3 }} />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div>
          <div className="flex items-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#10B981" color="#10B981" />
            ))}
          </div>
          <p style={{
            fontSize: "1.1rem",
            lineHeight: 1.65,
            fontWeight: 400,
            color: "var(--color-text-muted)",
            marginBottom: "2.5rem",
            transition: "color 0.3s ease"
          }}>
            "{t.text}"
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <div style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "2px solid var(--color-bg)",
            transition: "border-color 0.3s ease"
          }}>
            <img src={t.image} alt={t.author} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--color-text)", margin: 0, transition: "color 0.3s ease" }}>
              {t.author}
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-label)", margin: 0, transition: "color 0.3s ease" }}>
              {t.role}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── Main Section Component ───────────────────────────────────────────────────
export default function Testimonials() {
  const { isDark } = useTheme(); // Access theme context
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-40px" });

  // Duplicate the array for a seamless infinite scroll loop
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section 
      style={{
        background: "var(--color-surface)", 
        paddingTop: "clamp(80px,12vw,120px)",
        paddingBottom: "clamp(64px,10vw,100px)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease"
      }}
    >
      <div className="px-6 mx-auto lg:px-16 relative z-10" style={{ maxWidth: "1400px" }}>
        
        {/* Header */}
        <div ref={headerRef} className="mb-14 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              style={{ 
                fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", 
                fontWeight: 800, 
                letterSpacing: "-0.03em", 
                lineHeight: 1.1, 
                color: "var(--color-text)",
                marginBottom: "1rem",
                transition: "color 0.3s ease"
              }}
            >
              Results that speak volumes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", transition: "color 0.3s ease" }}
            >
              Find out why our clients trust us to build platforms that scale.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Auto-Scrolling Marquee ── */}
      <div className="marquee-wrapper mb-20 relative w-full overflow-hidden">
        {/* Fade gradients using the dynamic theme background */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-32 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to right, var(--color-bg) 0%, transparent 100%)" }}
        />
        <div 
          className="absolute top-0 bottom-0 right-0 w-32 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to left, var(--color-bg) 0%, transparent 100%)" }}
        />
        
        <div className="marquee-track flex gap-6 px-6 py-4">
          {scrollItems.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* ── Bottom Review Footer ── */}
      <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1400px" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem", fontWeight: 500 }}>
            Join other satisfied clients scaling with us
          </p>
          
          <div className="flex items-center gap-4">
            <div style={{
              background: "var(--color-surface)",
              padding: "0.625rem",
              borderRadius: "9999px",
              border: "1px solid var(--color-border)",
              boxShadow: isDark ? "none" : "0 1px 2px rgba(0,0,0,0.05)",
            }}>
              <GoogleLogo />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={`g-${i}`} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
                <span style={{ fontWeight: 700, color: "var(--color-text)", marginLeft: "0.25rem" }}>5.0</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--color-text-label)", margin: 0, fontWeight: 500, letterSpacing: "0.025em", textTransform: "uppercase" }}>
                Based on Google Reviews
              </p>
            </div>
          </div>

          <a 
            href="#reviews" 
            className="flex items-center gap-2 text-sm font-semibold group transition-colors hover:!text-emerald-500"
            style={{ color: "var(--color-text)" }}
          >
            View all reviews 
            <span className="transform transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
          background: var(--color-card-hover) !important;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track {
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); } 
        }
      `}</style>
    </section>
  );
}