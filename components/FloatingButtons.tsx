/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/contexts/themeContext";

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ─── Shared tooltip ───────────────────────────────────────────────────────────
function Tooltip({ label, visible, isDark }: { label: string; visible: boolean; isDark: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 8, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 6, scale: 0.94 }}
          transition={{ duration: 0.18, ease: [0.32, 0.72, 0, 1] }}
          style={{
            position: "absolute",
            right: "calc(100% + 14px)",
            top: "50%",
            transform: "translateY(-50%)",
            background: isDark ? "rgba(13, 18, 16, 0.95)" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "0.5rem 1rem",
            whiteSpace: "nowrap",
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            pointerEvents: "none",
          }}
        >
          <span style={{
            fontSize: "0.75rem", fontWeight: 700,
            color: "var(--color-text)", letterSpacing: "0.04em",
          }}>
            {label}
          </span>
          {/* Arrow pointing right toward the button */}
          <div style={{
            position: "absolute", right: "-5px", top: "50%",
            transform: "translateY(-50%)",
            width: 0, height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: `5px solid ${isDark ? "#0d1210" : "#ffffff"}`,
          }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Scroll to top ────────────────────────────────────────────────────────────
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const { isDark } = useTheme();

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docH > 0 ? scrollY / docH : 0);
    setVisible(scrollY > 320);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Progress ring
  const SIZE = 54;
  const STROKE = 2.5;
  const R = (SIZE - STROKE * 2) / 2;
  const CIRC = 2 * Math.PI * R;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          aria-label="Scroll to top"
          style={{
            position: "relative",
            width: `${SIZE}px`, height: `${SIZE}px`,
            background: isDark ? "rgba(13, 18, 16, 0.85)" : "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "50%",
            border: "1px solid var(--color-border)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", padding: 0, flexShrink: 0,
            boxShadow: hovered
              ? "0 12px 32px rgba(0,0,0,0.22), 0 0 0 1px var(--color-emerald)"
              : "0 6px 20px rgba(0,0,0,0.12)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <Tooltip label="Scroll to top" visible={hovered} isDark={isDark} />

          {/* Progress ring */}
          <svg width={SIZE} height={SIZE}
            style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)", borderRadius: "50%" }}>
            <circle cx={SIZE/2} cy={SIZE/2} r={R}
              fill="none" stroke="var(--color-border)" strokeWidth={STROKE} />
            <circle cx={SIZE/2} cy={SIZE/2} r={R}
              fill="none" stroke="var(--color-emerald)" strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC * (1 - progress)}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>

          {/* Arrow */}
          <motion.div
            animate={{ y: hovered ? -3 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "relative", zIndex: 1,
              color: hovered ? "var(--color-emerald)" : "var(--color-text)",
              transition: "color 0.2s",
              display: "flex",
            }}
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── WhatsApp button ──────────────────────────────────────────────────────────
function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 700);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/254750109798?text=${encodeURIComponent("Hi Softrinx! I'd like to discuss a project.")}`;
  const SIZE = 54;

  return (
    <AnimatePresence>
      {mounted && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          style={{
            position: "relative",
            width: `${SIZE}px`, height: `${SIZE}px`,
            background: "#25D366",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#ffffff", flexShrink: 0,
            boxShadow: "0 8px 24px rgba(37,211,102,0.45), 0 4px 12px rgba(0,0,0,0.15)",
            textDecoration: "none",
          }}
        >
          <Tooltip label="Chat on WhatsApp" visible={hovered} isDark={isDark} />
          <WhatsAppIcon size={25} />

          {/* Pulse ring */}
          <motion.div
            style={{
              position: "absolute", inset: 0,
              border: "2px solid #25D366",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.7, 0, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

// ─── Combined — stacked column, bottom-right ──────────────────────────────────
export default function FloatingButtons() {
  return (
    <div style={{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.75rem",
    }}>
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

export { WhatsAppButton, ScrollToTopButton };