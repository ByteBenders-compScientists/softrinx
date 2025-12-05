// app/about/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  Users, Award, Clock, Zap, ChevronRight, 
  Globe, Code, Smartphone, BrainCircuit, 
  PenToolIcon,
  RocketIcon,
  LifeBuoyIcon,
  Linkedin,
  Target,
  Lightbulb,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import OurApproachSection from "@/components/sections/approach";
import WhyChooseUsSection from "@/components/sections/Us";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function AboutPage() {
  const heroRef = useRef(null);
  const approachRef = useRef(null);
  const whyChooseRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isApproachInView = useInView(approachRef, { once: true, amount: 0.3 });
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [parallaxY, setParallaxY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stats counter animation
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    projects: 0,
    awards: 0
  });

  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = { years: 5, customers: 1500, projects: 800, awards: 15 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          years: Math.floor(targets.years * progress),
          customers: Math.floor(targets.customers * progress),
          projects: Math.floor(targets.projects * progress),
          awards: Math.floor(targets.awards * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  // Team Members Data
  const teamMembers = [
    {
      name: "Mateo Daniel",
      role: "Founder, CTO",
      bio: "Visionary technologist with 15+ years building enterprise-grade software solutions that drive real business transformation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&q=80",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Elias Josiah",
      role: "Co-Founder, CEO",
      bio: "Strategic business leader passionate about leveraging technology to solve complex challenges and create lasting value.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&q=80",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Miles Jaxon",
      role: "Head of HR & Manager",
      bio: "People-first leader focused on building high-performing teams and fostering cultures of innovation and excellence.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&q=80",
      socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" }
    },
    {
      name: "Silas Nicholas",
      role: "Software Engineer",
      bio: "Full-stack engineer specializing in scalable architectures, clean code, and delivering robust solutions on time.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&q=80",
      socials: { linkedin: "#", github: "#" }
    }
  ];

  // Testimonials
  const testimonials = [
    {
      platform: "Trustpilot",
      rating: 5,
      text: "Softrinx transformed our legacy system into a modern, cloud-based platform that reduced our operational costs by 40% while improving performance dramatically.",
      author: "Sarah Mitchell",
      role: "CTO at TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80",
      date: "Nov 15, 2024"
    },
    {
      platform: "Google",
      rating: 5,
      text: "Working with Softrinx was an absolute pleasure. Their team's expertise in mobile development helped us launch our app 2 months ahead of schedule with exceptional quality.",
      author: "Marcus Chen",
      role: "Product Director at FinanceHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80",
      date: "Oct 28, 2024"
    },
    {
      platform: "Trustpilot",
      rating: 5,
      text: "The attention to detail and commitment to our success was outstanding. Softrinx didn't just deliver software—they delivered a complete solution that transformed our business.",
      author: "Elena Rodriguez",
      role: "CEO at HealthTech Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80",
      date: "Dec 2, 2024"
    }
  ];

  const approachSections = [
    {
      title: "Customized Solutions",
      description: "We don't believe in one-size-fits-all. Every project begins with deep discovery to understand your unique business challenges, goals, and requirements.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&q=80"
    },
    {
      title: "Quality Reliability",
      description: "Our rigorous testing and quality assurance processes ensure every solution we deliver is robust, secure, and performs flawlessly under real-world conditions.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&q=80"
    }
  ];

  const whyChooseMetrics = [
    { label: "Strategy", percentage: 70 },
    { label: "Audience", percentage: 98 },
    { label: "Keyword", percentage: 85 }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section - Dark */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gray-950"
      >
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 z-10"
            style={{ transform: `translateY(${parallaxY}px)` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
              alt="Softrinx team collaboration"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/95" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                We're on a mission to{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  build better software
                </span>{" "}
                for a digital world
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 max-w-3xl"
            >
              For over a decade, we've been helping businesses transform their ideas into powerful, 
              scalable, and user-friendly applications that drive real results.
            </motion.p>
          </div>
        </div>
      </section>

     <OurApproachSection/>
      <WhyChooseUsSection/>

      {/* Stats Section - Light */}
      <section ref={statsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Stats</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, value: counters.years, label: "Years", subtitle: "Working With Passion" },
              { icon: Users, value: counters.customers, label: "Customer", subtitle: "Satisfied Customer" },
              { icon: Target, value: counters.projects, label: "Project", subtitle: "We Have Completed" },
              { icon: Award, value: counters.awards, label: "Awards", subtitle: "Achievement For Service" }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}{stat.label === "Customer" ? "K" : stat.label === "Project" ? "" : ""}
                </div>
                <div className="text-xl font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.subtitle}</div>
              </motion.div>
            ))}
          </div>

          {/* Client logos */}
          <div className="mt-20">
            <p className="text-center text-gray-600 font-semibold mb-10">
              We Take Care Of More Than 1.5k Trusted Allies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
              {["Health Master", "Alx", "IntelliMark", "Aws", "Github"].map((company, idx) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={isStatsInView ? { opacity: 0.4 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-gray-600">{company}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection/>

      {/* Team Section - Light */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Team Members</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the talented individuals who bring passion, expertise, and innovation to every project we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay with social icons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                    <div className="flex gap-3">
                      <a 
                        href={member.socials.linkedin}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      {member.socials.twitter && (
                        <a 
                          href={member.socials.twitter}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                          </svg>
                        </a>
                      )}
                      {member.socials.facebook && (
                        <a 
                          href={member.socials.facebook}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                          </svg>
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a 
                          href={member.socials.instagram}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 2h9a5.5 5.5 0 015.5 5.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark with Background */}
      <section ref={ctaRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-950/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isCtaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
                  <div className="relative w-32 h-32 rounded-full border-4 border-emerald-500 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-white">10</div>
                    <div className="text-sm text-emerald-400">Years</div>
                  </div>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Unlock the Potential of Your Business?
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's discuss your project and explore how we can help you achieve your business goals with cutting-edge software solutions.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-transparent border-2 border-emerald-500 text-white font-bold rounded-full hover:bg-emerald-500 transition-all duration-300 group text-lg"
              >
                Contact With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Articles Preview - Optional Light Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Latest Article</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay informed with insights, best practices, and industry trends from our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      item === 1 ? '1697577418970-95d99b5a55cf' : 
                      item === 2 ? '1517245386807-bb43f82c33c4' : 
                      '1516321318423-f06f85e504b3'
                    }?w=600&q=80`}
                    alt="Article"
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Technology
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>By Admin</span>
                  <span>•</span>
                  <span>Dec {item}, 2024</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {item === 1 && "How AI is Transforming Software Development"}
                  {item === 2 && "Best Practices for Scalable Web Applications"}
                  {item === 3 && "The Future of Mobile App Development"}
                </h3>
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-emerald-600 font-semibold hover:gap-2 transition-all group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}