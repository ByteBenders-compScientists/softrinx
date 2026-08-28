"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { COLORS, type ThemeMode, type ThemeColors } from "@/constants/colors";

interface ThemeContextValue {
  mode: ThemeMode;
  isDark: boolean;
  colors: ThemeColors;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ─── CSS variable injection ───────────────────────────────────────────────────
function applyTheme(mode: ThemeMode) {
  const c = COLORS[mode];
  const root = document.documentElement;

  root.setAttribute("data-theme", mode);

  // Backgrounds
  root.style.setProperty("--color-bg",          c.bgPrimary);
  root.style.setProperty("--color-surface",      c.bgSurface);
  root.style.setProperty("--color-card",         c.bgCard);
  root.style.setProperty("--color-card-hover",   c.bgCardHover);

  // Borders
  root.style.setProperty("--color-border",       c.border);
  root.style.setProperty("--color-border-mid",   c.borderMid);
  root.style.setProperty("--color-border-bright",c.borderBright);

  // Text
  root.style.setProperty("--color-text",         c.textPrimary);
  root.style.setProperty("--color-text-muted",   c.textMuted);
  root.style.setProperty("--color-text-faint",   c.textFaint);
  root.style.setProperty("--color-text-label",   c.textLabel);

  // Brand
  root.style.setProperty("--color-emerald",      c.emerald);
  root.style.setProperty("--color-emerald-glow", c.emeraldGlow);
  root.style.setProperty("--color-emerald-bg",   c.emeraldBg);
  root.style.setProperty("--color-emerald-border",c.emeraldBorder);

  // Nav
  root.style.setProperty("--color-nav-bg",       c.navBg);
  root.style.setProperty("--color-nav-border",   c.navBorder);

  // Scrollbar
  root.style.setProperty("--color-scroll-track", c.scrollTrack);
  root.style.setProperty("--color-scroll-thumb", c.scrollThumb);
  root.style.setProperty("--color-scroll-thumb-hover", c.scrollThumbHover);

  // Body background — eliminates white flash between sections
  document.body.style.background = c.bgPrimary;
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light"); // Default to light

  // On mount — read saved preference or default to light
  useEffect(() => {
    const saved = localStorage.getItem("softrinx-theme") as ThemeMode | null;
    const resolved: ThemeMode = saved ?? "light"; // Overrides system pref to enforce light default
    setMode(resolved);
    applyTheme(resolved);
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem("softrinx-theme", next);
      applyTheme(next);
      return next;
    });
  }, []);

  const value: ThemeContextValue = {
    mode,
    isDark: mode === "dark",
    colors: COLORS[mode] as ThemeColors,
    toggle,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}