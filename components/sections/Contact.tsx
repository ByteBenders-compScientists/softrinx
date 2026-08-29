"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare
} from "lucide-react";

// ─── Contact Info Data ────────────────────────────────────────────────────────
const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "info@softrinx.com",
    subtext: "Response within 4 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+254 750 109 798",
    subtext: "Mon-Fri, 8am - 6pm EAT",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Westlands, Nairobi",
    subtext: "HQ & Development Hub",
  },
];

// ─── Massive Abstract Tech SVG ────────────────────────────────────────────────
const AbstractBackground = () => (
  <svg 
    className="absolute top-0 right-0 z-0 pointer-events-none opacity-10 sm:opacity-20 transform translate-x-1/4 -translate-y-1/4"
    style={{ width: "min(1200px, 150vw)", height: "auto" }}
    viewBox="0 0 447 371" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M387.031 371H371.554V185.277H387.031V355.523L557.277 355.523V371L387.031 371V371Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M557.276 309.092V324.569L417.984 324.569L417.984 309.092H417.984V185.277H433.461V309.092L557.276 309.092Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M557.277 324.569V340.046H417.984L402.508 340.046V340.046H402.508V185.277H417.984V324.569L557.277 324.569Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M402.508 355.523H387.031V355.523L387.031 355.523V340.046H387.031V185.277H402.508V340.046L557.277 340.046V355.523L402.508 355.523V355.523Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M557.277 293.615V309.092H448.939L433.462 309.092L433.462 309.092H433.462V185.276H448.939V293.615L557.277 293.615Z" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 92.9688 53.7231)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 139.399 53.7231)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 123.923 53.7234)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 170.353 53.7229)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 108.445 53.7231)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 154.876 53.7231)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 371.554 185.277)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 417.984 185.277)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 402.508 185.277)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 387.03 185.277)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.723" transform="matrix(1 0 0 -1 433.462 185.277)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 278.692 93.0601)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 325.123 93.0601)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 309.646 93.0603)" fill="var(--color-emerald)"/>
    <rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 356.077 93.0601)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 294.17 93.0601)" fill="var(--color-text)"/>
    <rect width="15.4769" height="185.078" transform="matrix(1 0 0 -1 340.601 93.0598)" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M294.169 278.138H278.692V92.4153H294.169V262.661L464.416 262.661V278.138L294.169 278.138V278.138Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M464.415 216.231V231.708L325.123 231.708L325.123 216.231H325.123V92.4153H340.6V216.231L464.415 216.231Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M464.416 231.708V247.185L309.647 247.185L309.647 247.184H309.646V92.4151H325.123V231.708L464.416 231.708Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M464.416 185.277V200.754L356.077 200.754V200.754H356.077V92.4152H371.554V185.277L464.416 185.277Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M309.647 262.661H294.17V262.661L294.17 262.661L294.17 247.184H294.17V92.4152H309.647V247.184L464.416 247.184V262.661L309.647 262.661V262.661Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M356.078 216.23H340.601V92.415H356.078V200.753L464.416 200.753V216.23L356.078 216.23V216.23Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M387.031 92.4153H371.554V-93.3078H387.031V76.9381L557.277 76.9381V92.415L387.031 92.4151V92.4153Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M433.461 45.9846H417.984V45.9846L417.984 45.9846L417.984 30.5076H417.984V-93.3077H433.461V30.5076L557.276 30.5076V45.9846L433.461 45.9846V45.9846Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M557.276 45.9845V61.4614L402.507 61.4614V61.4612H402.507V-93.3081H417.984V45.9845L557.276 45.9845Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M402.507 76.9382H387.03V-93.308H402.507V61.4613L557.277 61.4612V76.9382L402.507 76.9382V76.9382Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M557.276 15.0304V30.5073L433.461 30.5073V30.5071V15.0304V-93.3083H448.938V15.0304L557.276 15.0304Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M185.831 15.0306L185.831 -0.446289L371.554 -0.446273L371.554 15.0307L201.308 15.0306L201.308 185.277L185.831 185.277L185.831 15.0306L185.831 15.0306Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M247.739 185.277L232.262 185.277L232.262 61.4616L232.262 45.9847L232.262 45.9844L247.739 45.9844L247.739 45.9847L371.554 45.9847L371.554 61.4616L247.739 61.4616L247.739 185.277Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M216.785 45.9846L216.785 30.5077L216.785 30.5077L216.785 30.5076L232.262 30.5076L232.262 30.5077L371.554 30.5077L371.554 45.9846L232.262 45.9846L232.262 185.277L216.785 185.277L216.785 45.9846L216.785 45.9846Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M263.216 92.4152L263.216 76.9382L371.554 76.9382L371.554 92.4152L278.693 92.4152L278.693 185.277L263.216 185.277L263.216 92.4152L263.216 92.4152Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M216.786 185.276L201.309 185.276L201.309 30.5074L201.309 15.0305L201.309 15.0303L216.786 15.0303L216.786 15.0305L371.555 15.0305L371.555 30.5074L216.786 30.5074L216.786 185.276Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M247.739 76.9381L247.739 61.4612L371.555 61.4612L371.555 76.9381L263.216 76.9381L263.216 185.277L247.739 185.277L247.739 76.9381L247.739 76.9381Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M15.5843 107.892H0.107422V-77.8308H15.5843V92.4152L185.831 92.4152V107.892L15.5843 107.892V107.892Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M185.83 45.9847V61.4617L46.5378 61.4617L46.5378 45.9847H46.5382V-77.8312H62.0151V45.9847L185.83 45.9847Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M185.831 61.4613V76.9382H46.5382L31.0616 76.9382V76.9382H31.0613V-77.831H46.5382V61.4613L185.831 61.4613Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M185.83 15.0311V30.508L77.4917 30.5081L77.4917 15.0311H77.4933V-77.8307H92.9702V15.0311L185.83 15.0311Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M185.83 76.9383V92.4153L15.5841 92.4153V92.4151H15.584V-77.8311H31.0609V76.9383L185.83 76.9383Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M77.4926 45.9846H62.0156V-77.8308H77.4926V30.5073L185.832 30.5072V45.9842L77.4926 45.9842V45.9846Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M278.692 185.277V200.754H108.446L92.9693 200.754V200.754H92.9688V15.0308H108.446V185.277L278.692 185.277Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M278.692 138.846V154.323L139.399 154.323L139.399 138.846H139.399V15.0303H154.876V138.846L278.692 138.846Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M278.692 154.323V169.8H139.4L123.923 169.8V169.8H123.923V15.0305H139.4V154.323L278.692 154.323Z" fill="var(--color-emerald)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M278.692 107.893V123.37L170.354 123.37L170.354 123.369H170.354V15.031H185.83V107.893L278.692 107.893Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M278.692 169.8V185.277L108.445 185.277V169.8H108.445V15.0307H123.922V169.8L278.692 169.8Z" fill="var(--color-text)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M170.354 138.846H154.877V15.0305H170.354V123.369L278.692 123.369V138.846L170.354 138.846V138.846Z" fill="var(--color-emerald)"/>
  </svg>
);

// ─── Form Component (Editorial Minimalist Style) ──────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputStyles = (fieldName: string) => ({
    width: "100%",
    padding: "0.75rem 0",
    fontSize: "1rem",
    color: "var(--color-text)",
    background: "transparent",
    border: "none",
    borderBottom: `2px solid ${
      focused === fieldName ? "var(--color-emerald)" : "var(--color-border)"
    }`,
    borderRadius: "0",
    outline: "none",
    transition: "border-color 0.3s ease",
  });

  const labelStyles = {
    display: "block",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "var(--color-text-label)",
    marginBottom: "0.25rem",
    textTransform: "uppercase" as const,
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label style={labelStyles}>First Name *</label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            onFocus={() => setFocused("firstName")}
            onBlur={() => setFocused(null)}
            style={inputStyles("firstName")}
            placeholder="John"
          />
        </div>
        <div>
          <label style={labelStyles}>Last Name *</label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            onFocus={() => setFocused("lastName")}
            onBlur={() => setFocused(null)}
            style={inputStyles("lastName")}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label style={labelStyles}>Company *</label>
        <input
          type="text"
          required
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          onFocus={() => setFocused("company")}
          onBlur={() => setFocused(null)}
          style={inputStyles("company")}
          placeholder="Your Company Ltd"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label style={labelStyles}>Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={inputStyles("email")}
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label style={labelStyles}>Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            style={inputStyles("phone")}
            placeholder="+254 700 000000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label style={labelStyles}>Project Type</label>
          <select
            value={formData.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            onFocus={() => setFocused("projectType")}
            onBlur={() => setFocused(null)}
            style={{
              ...inputStyles("projectType"),
              color: formData.projectType ? "var(--color-text)" : "var(--color-text-muted)",
              cursor: "pointer",
            }}
          >
            <option value="">Select type</option>
            <option value="web">Web Application</option>
            <option value="mobile">Mobile App</option>
            <option value="cloud">Cloud Infrastructure</option>
            <option value="ai">AI Integration</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label style={labelStyles}>Budget Range</label>
          <select
            value={formData.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            onFocus={() => setFocused("budget")}
            onBlur={() => setFocused(null)}
            style={{
              ...inputStyles("budget"),
              color: formData.budget ? "var(--color-text)" : "var(--color-text-muted)",
              cursor: "pointer",
            }}
          >
            <option value="">Select range</option>
            <option value="10-25k">Ksh 10k - 25k</option>
            <option value="25-50k">Ksh 25k - 50k</option>
            <option value="50-100k">Ksh 50k - 100k</option>
            <option value="100k+">Ksh 100k+</option>
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyles}>Project Details *</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          rows={3}
          style={{
            ...inputStyles("message"),
            resize: "vertical",
            minHeight: "100px",
          }}
          placeholder="Briefly describe your requirements, timeline, and goals..."
        />
      </div>

      <div className="flex justify-start">
        <button
          type="submit"
          className="flex items-center justify-center w-full gap-3 px-10 py-4 mt-6 font-bold transition-all duration-300 md:w-auto group"
          style={{
            background: "var(--color-text)",
            color: "var(--color-bg)",
            fontSize: "0.9rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "0",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-emerald)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-text)")}
        >
          Send Message
          <motion.span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={18} strokeWidth={3} />
          </motion.span>
        </button>
      </div>
    </form>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      style={{
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--color-border)",
      }}
      className="py-24 md:py-32"
    >
      <AbstractBackground />

      <div 
        ref={ref}
        className="relative z-10 px-6 mx-auto lg:px-16" 
        style={{ maxWidth: "1400px" }}
      >
        <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* ── Left Column: Typography & Custom Figma Image (Spans 6 cols) ── */}
          <motion.div
            className="flex flex-col h-full lg:col-span-6"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-8">
                <div style={{ width: "8px", height: "8px", background: "var(--color-emerald)" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--color-emerald)", textTransform: "uppercase" }}>
                  Let's Connect
                </span>
              </div>

              <h2 
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  color: "var(--color-text)",
                  marginBottom: "2rem"
                }}
              >
                Let's build <br/>
                <span style={{ color: "var(--color-emerald)" }}>
                  together.
                </span>
              </h2>
            </div>

            {/* Huge Standalone Figma Image with subtle hover effect */}
            <motion.div 
              className="relative w-full mt-6 mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img 
                src="/images/contact.png" 
                alt="Softrinx Team Member Connect" 
                className="w-full h-auto"
                style={{ 
                  objectFit: "contain",
                  filter: "drop-shadow(0 25px 50px rgba(45, 212, 191, 0.1))"
                }}
              />
            </motion.div>
            
            {/* Contact Grid below the image */}
            <div className="grid grid-cols-1 pt-8 border-t sm:grid-cols-2 gap-x-8 gap-y-10" style={{ borderColor: "var(--color-border)" }}>
              {contactMethods.map((method, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-2">
                    <method.icon size={18} style={{ color: "var(--color-emerald)" }} />
                    <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-text)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {method.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: "1rem", color: "var(--color-text)", fontWeight: 500, marginBottom: "0.2rem" }}>
                    {method.detail}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                    {method.subtext}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: The Form (Spans 6 cols) ── */}
          <motion.div
            className="lg:col-span-6 lg:pl-12 lg:pt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pt-2">
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}