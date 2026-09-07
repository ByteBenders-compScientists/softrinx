/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Mail, Phone, MapPin, Clock,
  Send, Check, ChevronDown, Quote
} from "lucide-react";
import { useTheme } from "@/contexts/themeContext";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────
const CONTACT_ITEMS = [
  { icon: Mail,  label: "Email",    value: "info@softrinx.com",  href: "mailto:info@softrinx.com",    note: "Reply within 24 hrs" },
  { icon: Phone, label: "Phone",   value: "+254 750 109 798",    href: "tel:+254750109798",           note: "Available 24/7" },
  { icon: MapPin,label: "Office",  value: "Westlands, Nairobi",        href: "https://maps.google.com",     note: "HQ & Development" },
];

const SERVICES_LIST = [
  "Web Application", "Mobile App", "Custom Software",
  "Cloud Infrastructure", "AI & Machine Learning", "Cyber Security", "Other",
];

const BUDGETS = [
  "Below Ksh 5,000", "Ksh 5k – Ksh 15k", "Ksh 15k – Ksh 30k",
  "Ksh 30k – Ksh 75k", "Ksh 75k+", "Not sure yet",
];

const FAQS = [
  {
    q: "What happens after I submit?",
    a: "We review your submission and reach out within 24 hours to schedule a call. We’ll discuss your project, goals, and next steps.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We work with clients worldwide, and we have experience managing remote projects across different time zones.",
  },
  {
    q: "How do you price projects?",
    a: "We provide custom quotes based on project scope, complexity, and requirements. We aim for transparent pricing and value for your investment.",
  },
  {
    q: "Can I see more work before reaching out?",
    a: "Absolutely! You can view our portfolio on the Portfolio page, which showcases a variety of projects we’ve completed for different industries.",
  },
];
// ─── Massive Abstract Tech SVG ────────────────────────────────────────────────
const AbstractBackground = () => (
<svg
className="absolute top-0 right-0 z-0 pointer-events-none opacity-[0.07] sm:opacity-[0.12] transform translate-x-1/4 -translate-y-1/4"
style={{ width: "min(1200px, 150vw)", height: "auto" }}
viewBox="0 0 447 371"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path fillRule="evenodd" clipRule="evenodd" d="M387.031 371H371.554V185.277H387.031V355.523L557.277 355.523V371L387.031 371V371Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M557.276 309.092V324.569L417.984 324.569L417.984 309.092H417.984V185.277H433.461V309.092L557.276 309.092Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M557.277 324.569V340.046H417.984L402.508 340.046V340.046H402.508V185.277H417.984V324.569L557.277 324.569Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M402.508 355.523H387.031V355.523L387.031 355.523V340.046H387.031V185.277H402.508V340.046L557.277 340.046V355.523L402.508 355.523V355.523Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M557.277 293.615V309.092H448.939L433.462 309.092L433.462 309.092H433.462V185.276H448.939V293.615L557.277 293.615Z" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 92.9688 53.7231)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 139.399 53.7231)" fill="currentColor"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 123.923 53.7234)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 170.353 53.7229)" fill="currentColor"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 108.445 53.7231)" fill="currentColor"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 154.876 53.7231)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 371.554 185.277)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 417.984 185.277)" fill="currentColor"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 402.508 185.277)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 387.03 185.277)" fill="currentColor"/>
<rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 433.462 185.277)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 278.692 93.0601)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 325.123 93.0601)" fill="currentColor"/>
<rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 309.646 93.0603)" fill="var(--color-emerald)"/>
<rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 356.077 93.0601)" fill="currentColor"/>
<rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 294.17 93.0601)" fill="currentColor"/>
<rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 340.601 93.0598)" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M294.169 278.138H278.692V92.4153H294.169V262.661L464.416 262.661V278.138L294.169 278.138V278.138Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M464.415 216.231V231.708L325.123 231.708L325.123 216.231H325.123V92.4153H340.6V216.231L464.415 216.231Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M464.416 231.708V247.185L309.647 247.185L309.647 247.184H309.646V92.4151H325.123V231.708L464.416 231.708Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M464.416 185.277V200.754L356.077 200.754V200.754H356.077V92.4152H371.554V185.277L464.416 185.277Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M309.647 262.661H294.17V262.661L294.17 262.661L294.17 247.184H294.17V92.4152H309.647V247.184L464.416 247.184V262.661L309.647 262.661V262.661Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M356.078 216.23H340.601V92.415H356.078V200.753L464.416 200.753V216.23L356.078 216.23V216.23Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M387.031 92.4153H371.554V-93.3078H387.031V76.9381L557.277 76.9381V92.415L387.031 92.4151V92.4153Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M433.461 45.9846H417.984V45.9846L417.984 45.9846L417.984 30.5076H417.984V-93.3077H433.461V30.5076L557.276 30.5076V45.9846L433.461 45.9846V45.9846Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M557.276 45.9845V61.4614L402.507 61.4614V61.4612H402.507V-93.3081H417.984V45.9845L557.276 45.9845Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M402.507 76.9382H387.03V-93.308H402.507V61.4613L557.277 61.4612V76.9382L402.507 76.9382V76.9382Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M557.276 15.0304V30.5073L433.461 30.5073V30.5071V15.0304V-93.3083H448.938V15.0304L557.276 15.0304Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M185.831 15.0306L185.831 -0.446289L371.554 -0.446273L371.554 15.0307L201.308 15.0306L201.308 185.277L185.831 185.277L185.831 15.0306L185.831 15.0306Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M247.739 185.277L232.262 185.277L232.262 61.4616L232.262 45.9847L232.262 45.9844L247.739 45.9844L247.739 45.9847L371.554 45.9847L371.554 61.4616L247.739 61.4616L247.739 185.277Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M216.785 45.9846L216.785 30.5077L216.785 30.5077L216.785 30.5076L232.262 30.5076L232.262 30.5077L371.554 30.5077L371.554 45.9846L232.262 45.9846L232.262 185.277L216.785 185.277L216.785 45.9846L216.785 45.9846Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M263.216 92.4152L263.216 76.9382L371.554 76.9382L371.554 92.4152L278.693 92.4152L278.693 185.277L263.216 185.277L263.216 92.4152L263.216 92.4152Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M216.786 185.276L201.309 185.276L201.309 30.5074L201.309 15.0305L201.309 15.0303L216.786 15.0303L216.786 15.0305L371.555 15.0305L371.555 30.5074L216.786 30.5074L216.786 185.276Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M247.739 76.9381L247.739 61.4612L371.555 61.4612L371.555 76.9381L263.216 76.9381L263.216 185.277L247.739 185.277L247.739 76.9381L247.739 76.9381Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.5843 107.892H0.107422V-77.8308H15.5843V92.4152L185.831 92.4152V107.892L15.5843 107.892V107.892Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M185.83 45.9847V61.4617L46.5378 61.4617L46.5378 45.9847H46.5382V-77.8312H62.0151V45.9847L185.83 45.9847Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M185.831 61.4613V76.9382H46.5382L31.0616 76.9382V76.9382H31.0613V-77.831H46.5382V61.4613L185.831 61.4613Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M185.83 15.0311V30.508L77.4917 30.5081L77.4917 15.0311H77.4933V-77.8307H92.9702V15.0311L185.83 15.0311Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M185.83 76.9383V92.4153L15.5841 92.4153V92.4151H15.584V-77.8311H31.0609V76.9383L185.83 76.9383Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M77.4926 45.9846H62.0156V-77.8308H77.4926V30.5073L185.832 30.5072V45.9842L77.4926 45.9842V45.9846Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M278.692 185.277V200.754H108.446L92.9693 200.754V200.754H92.9688V15.0308H108.446V185.277L278.692 185.277Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M278.692 138.846V154.323L139.399 154.323L139.399 138.846H139.399V15.0303H154.876V138.846L278.692 138.846Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M278.692 154.323V169.8H139.4L123.923 169.8V169.8H123.923V15.0305H139.4V154.323L278.692 154.323Z" fill="var(--color-emerald)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M278.692 107.893V123.37L170.354 123.37L170.354 123.369H170.354V15.031H185.83V107.893L278.692 107.893Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M278.692 169.8V185.277L108.445 185.277V169.8H108.445V15.0307H123.922V169.8L278.692 169.8Z" fill="currentColor"/>
<path fillRule="evenodd" clipRule="evenodd" d="M170.354 138.846H154.877V15.0305H170.354V123.369L278.692 123.369V138.846L170.354 138.846V138.846Z" fill="var(--color-emerald)"/>
</svg>
);

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 20, x = 0 }: {
  children: React.ReactNode; delay?: number; y?: number; x?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Custom Select (Minimal Underline) ─────────────────────────────────────────
function MinimalSelect({
  label, options, value, onChange, required, error,
}: {
  label: string; options: string[]; value: string;
  onChange: (v: string) => void; required?: boolean; error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "var(--color-emerald)" }}> *</span>}
      </label>
      <button type="button" onClick={() => { setOpen(!open); setFocused(true); }} onBlur={() => setTimeout(() => setFocused(false), 200)}
        className="flex items-center justify-between w-full transition-colors duration-300"
        style={{
          padding: "0.75rem 0",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${error ? "rgba(239,68,68,0.6)" : open || focused ? "var(--color-emerald)" : "var(--color-border)"}`,
          color: value ? "var(--color-text)" : "var(--color-text-faint)",
          fontSize: "0.95rem",
          fontWeight: value ? 500 : 400,
          textAlign: "left",
          cursor: "pointer",
          outline: "none",
        }}>
        <span>{value || `Select ${label.toLowerCase()}`}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} style={{ color: "var(--color-text-faint)" }} />
        </motion.span>
      </button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -4, scaleY: 0.97 }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl shadow-xl overflow-hidden"
            style={{
              position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, zIndex: 50,
              background: "var(--color-surface)",
              border: `1px solid var(--color-border-mid)`,
              transformOrigin: "top",
            }}
          >
            <div className="max-h-[220px] overflow-y-auto custom-scrollbar p-2">
              {options.map((o) => (
                <button key={o} type="button"
                  onClick={() => { onChange(o); setOpen(false); }}
                  className="w-full text-left transition-all duration-150 rounded-xl"
                  style={{
                    padding: "0.75rem 1rem",
                    fontSize: "0.85rem",
                    color: o === value ? "var(--color-emerald)" : "var(--color-text)",
                    fontWeight: o === value ? 700 : 500,
                    background: o === value ? "var(--color-emerald-bg)" : "transparent",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => { if(o !== value) e.currentTarget.style.background = "var(--color-bg)" }}
                  onMouseLeave={(e) => { if(o !== value) e.currentTarget.style.background = "transparent" }}
                >
                  {o}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {error && <p style={{ fontSize: "0.72rem", color: "rgba(239,68,68,0.9)", marginTop: "0.35rem" }}>{error}</p>}
    </div>
  );
}

// ─── Input Field (Minimal Underline) ──────────────────────────────────────────
function MinimalInput({
  label, type = "text", placeholder, value, onChange,
  required, error, multiline,
}: {
  label: string; type?: string; placeholder?: string; value: string;
  onChange: (v: string) => void; required?: boolean; error?: string; multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? "textarea" : "input";
  return (
    <div>
      <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-text-muted)", marginBottom: "0.25rem", textTransform: "uppercase" }}>
        {label}{required && <span style={{ color: "var(--color-emerald)" }}> *</span>}
      </label>
      <Tag
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 4 : undefined}
        style={{
          width: "100%",
          padding: "0.75rem 0",
          background: "transparent",
          border: "none",
          borderBottom: `2px solid ${error ? "rgba(239,68,68,0.6)" : focused ? "var(--color-emerald)" : "var(--color-border)"}`,
          color: "var(--color-text)",
          fontSize: "0.95rem",
          fontWeight: 500,
          outline: "none",
          resize: multiline ? "none" : undefined,
          transition: "border-color 0.3s ease",
          fontFamily: "inherit",
        }}
      />
      {error && <p style={{ fontSize: "0.72rem", color: "rgba(239,68,68,0.9)", marginTop: "0.35rem" }}>{error}</p>}
    </div>
  );
}

// ─── FAQ Item (Modern Animated Version) ──────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <motion.div 
        className="mb-4 overflow-hidden rounded-[1.5rem] transition-colors duration-300"
        animate={{ backgroundColor: open ? "var(--color-surface)" : "transparent" }}
        style={{ border: "1px solid var(--color-border)" }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full gap-4 p-6 text-left transition-colors hover:bg-[var(--color-surface)] group"
          style={{ cursor: "pointer", border: "none", background: "transparent" }}
        >
          <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)" }} className="group-hover:text-[var(--color-emerald)] transition-colors">
            {q}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full transition-colors"
            style={{ background: open ? "var(--color-emerald)" : "var(--color-border)" }}
          >
            <ChevronDown size={16} style={{ color: open ? "#040805" : "var(--color-text)" }} />
          </motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="px-6 pb-6 pt-0">
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text-muted)" }}>
                  {a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Reveal>
  );
}

// ─── Main Contact Page ─────────────────────────────────────────────────────────
export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // Form state
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "", email: "", phone: "",
    service: "", budget: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string) => (v: string) =>
    setForm((p) => ({ ...p, [field]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (!form.service) e.service = "Select a service";
    if (!form.budget) e.budget = "Select a budget";
    if (form.message.trim().length < 10) e.message = "Tell us a bit more";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <Navigation />

      {/* ══ DEDICATED TOP HERO ══════════════════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "45svh", background: "#050505",
          borderBottomLeftRadius: "clamp(24px, 4vw, 48px)", borderBottomRightRadius: "clamp(24px, 4vw, 48px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "40px", zIndex: 10,
        }}>

        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image src="/images/cta6.jpg" alt="Contact Softrinx" fill priority className="object-cover opacity-60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.4) 40%, rgba(5,5,5,0.95) 100%)" }} />
        </div>

        <div className="relative z-10 w-full px-6 mx-auto lg:px-16 mt-16" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col items-start gap-4 text-left">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]" />
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-white">Contact Us</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="text-[clamp(3rem,6.2vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-white">
              Let's build <span className="text-[var(--color-emerald)]">together.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ══ HERO / FORM SPLIT (Editorial & Awesome) ════════════════════════════ */}
      <section 
        className="relative py-24 overflow-hidden md:py-32 lg:py-40"
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <AbstractBackground />

        <div 
          ref={heroRef}
          className="relative z-10 px-6 mx-auto lg:px-16" 
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            
            {/* ── Left Column: Typography & Arch Image (Spans 6 cols) ── */}
            <motion.div
              className="flex flex-col h-full lg:col-span-6"
              initial={{ opacity: 0, x: -40 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-8">
                  <div className="rounded-full shadow-[0_0_10px_var(--color-emerald)]" style={{ width: "6px", height: "6px", background: "var(--color-emerald)" }} />
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
                    Get Started
                  </span>
                </div>

                <h2 
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.95,
                    color: "var(--color-text)",
                    marginBottom: "2rem"
                  }}
                >
                  Get in <br/>
                  <span style={{ color: "var(--color-emerald)" }}>
                    touch.
                  </span>
                </h2>
              </div>

              {/* Arch Image with hover effect (No sharp corners) */}
              <motion.div 
                className="relative w-full mt-6 mb-12 overflow-hidden bg-emerald-500/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  borderRadius: "500px 500px 2rem 2rem",
                  aspectRatio: "4/4.5"
                }}
              >
                <Image 
                  src="/images/contact.png" 
                  alt="Connect with Softrinx" 
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Contact Grid below the image */}
              <div className="grid grid-cols-1 pt-8 border-t sm:grid-cols-2 gap-x-8 gap-y-10" style={{ borderColor: "var(--color-border)" }}>
                {CONTACT_ITEMS.map((method, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 mb-3">
                      <method.icon size={18} style={{ color: "var(--color-emerald)" }} />
                      <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {method.label}
                      </h4>
                    </div>
                    {method.href ? (
                      <a href={method.href} className="inline-block transition-colors hover:text-[var(--color-emerald)]" style={{ fontSize: "1.05rem", color: "var(--color-text)", fontWeight: 700, marginBottom: "0.3rem" }}>
                        {method.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "1.05rem", color: "var(--color-text)", fontWeight: 700, marginBottom: "0.3rem" }}>
                        {method.value}
                      </p>
                    )}
                    <p style={{ fontSize: "0.85rem", color: "var(--color-text-faint)", fontWeight: 500 }}>
                      {method.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right Column: The Form (Spans 6 cols) ── */}
            <motion.div
              className="lg:col-span-6 lg:pl-8 xl:pl-16 lg:pt-8"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center rounded-[2.5rem]"
                    style={{
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface)",
                      padding: "4rem 2rem",
                      minHeight: "600px",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.1 }}
                      className="rounded-full shadow-2xl shadow-emerald-500/20"
                      style={{ width: "80px", height: "80px", background: "var(--color-emerald)", display: "flex", alignItems: "center", justifyItems: "center", marginBottom: "2rem" }}
                    >
                      <Check size={36} className="m-auto" style={{ color: "#040805" }} />
                    </motion.div>
                    <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "var(--color-text)", marginBottom: "1rem" }}>
                      Message received.
                    </h3>
                    <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "24rem", marginBottom: "3rem" }}>
                      We'll reply within 24 hours. In the meantime, take a look at our portfolio to see what we've built.
                    </p>
                    <div className="flex flex-col w-full gap-4 sm:flex-row sm:justify-center">
                      <button onClick={() => setSubmitted(false)}
                        className="rounded-full transition-colors hover:bg-[var(--color-border)]"
                        style={{ padding: "1rem 2rem", border: "1px solid var(--color-border-mid)", background: "transparent", color: "var(--color-text-muted)", fontSize: "0.9rem", fontWeight: 700, cursor: "pointer" }}>
                        Send another
                      </button>
                      <Link href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 font-bold rounded-full transition-transform hover:scale-105"
                        style={{ padding: "1rem 2rem", background: "var(--color-emerald)", color: "#040805", fontSize: "0.9rem" }}>
                        View Portfolio <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-8 lg:space-y-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                      <MinimalInput label="First Name" placeholder="Jane" value={form.firstName} onChange={set("firstName")} required error={errors.firstName} />
                      <MinimalInput label="Last Name" placeholder="Doe" value={form.lastName} onChange={set("lastName")} required error={errors.lastName} />
                    </div>
                    
                    <MinimalInput label="Company" placeholder="Your Company Ltd (optional)" value={form.company} onChange={set("company")} />
                    
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                      <MinimalInput label="Email" type="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} required error={errors.email} />
                      <MinimalInput label="Phone" type="tel" placeholder="+254 700 000000" value={form.phone} onChange={set("phone")} />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                      <MinimalSelect label="Project Type" options={SERVICES_LIST} value={form.service} onChange={set("service")} required error={errors.service} />
                      <MinimalSelect label="Budget Range" options={BUDGETS} value={form.budget} onChange={set("budget")} required error={errors.budget} />
                    </div>
                    
                    <MinimalInput label="Project Details" placeholder="Briefly describe your requirements, timeline, and goals..." value={form.message} onChange={set("message")} required error={errors.message} multiline />

                    <div className="pt-4">
                      <button type="submit" disabled={submitting}
                        className="flex items-center justify-center w-full gap-3 font-bold transition-all duration-300 rounded-full active:scale-95 group md:w-auto"
                        style={{
                          padding: "1.2rem 2.5rem",
                          background: submitting ? "var(--color-emerald-bg)" : "var(--color-text)",
                          color: submitting ? "var(--color-emerald)" : "var(--color-bg)",
                          fontSize: "0.95rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          border: "none",
                          cursor: submitting ? "not-allowed" : "pointer",
                        }}
                        onMouseEnter={(e) => { if(!submitting) e.currentTarget.style.background = "var(--color-emerald)" }}
                        onMouseLeave={(e) => { if(!submitting) e.currentTarget.style.background = "var(--color-text)" }}
                      >
                        {submitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              style={{ width: "18px", height: "18px", border: "2px solid var(--color-emerald)", borderTopColor: "transparent", borderRadius: "50%" }}
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <motion.span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                              <ArrowUpRight size={18} strokeWidth={2.5} />
                            </motion.span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
        paddingTop: "clamp(80px, 12vw, 120px)",
        paddingBottom: "clamp(80px, 12vw, 120px)",
      }}>
        <div className="px-6 mx-auto lg:px-16" style={{ maxWidth: "1360px" }}>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 mb-6">                  
                </div>
                <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--color-text)", marginBottom: "1.5rem" }}>
                  Frequently Asked <br/>Questions
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-text-muted)", maxWidth: "24rem" }}>
                  Everything you need to know about working with us before we jump on a call.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              {FAQS.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FULL-WIDTH BOTTOM CTA ══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 mx-auto w-full" style={{ maxWidth: "100vw" }}>
        <div className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-[#070707] border border-[var(--color-border)] flex flex-col md:flex-row items-center shadow-2xl shadow-black/50">
          
          {/* Left Content Area */}
          <div className="relative z-10 w-full md:w-[60%] p-8 md:p-12 lg:p-20 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Ready to build <br/> your own?
            </h2>
            <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-12 max-w-[90%] md:max-w-md font-medium">
              Let's talk about your next project. We'll walk you through exactly how we'd approach it — a straight technical scoping conversation, no obligation.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center w-full">
              {/* Primary Green Pill Button */}
              <Link href="/contact" className="inline-flex items-center gap-4 font-bold transition-transform hover:scale-105 tracking-[0.08em] text-[0.75rem] uppercase rounded-full"
                style={{ background: "var(--color-emerald)", color: "#040805", padding: "0.5rem 0.5rem 0.5rem 1.5rem" }}>
                Start a Project
                <div className="flex items-center justify-center rounded-full" style={{ background: "#040805", color: "var(--color-emerald)", width: "34px", height: "34px" }}>
                  <ArrowUpRight size={16} strokeWidth={3} />
                </div>
              </Link>
              
              {/* Secondary Outline Pill Button */}
              <Link href="/services" className="inline-flex items-center gap-2 font-bold transition-colors uppercase tracking-[0.08em] text-[0.75rem] rounded-full hover:bg-white/10"
                style={{ color: "white", padding: "0.95rem 1.5rem", border: "1px solid rgba(255,255,255,0.2)" }}>
                View Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative w-full md:w-[40%] h-[300px] md:h-full md:absolute md:right-0 md:top-0 md:bottom-0">
            {/* Desktop Gradient Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/30 to-transparent z-10 hidden md:block" />
            {/* Mobile Gradient Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/30 to-transparent z-10 md:hidden" />
            
            <Image 
              src="/images/cta3.png" 
              alt="Ready to build" 
              fill 
              className="object-cover object-center md:object-right" 
            />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}