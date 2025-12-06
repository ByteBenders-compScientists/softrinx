// app/testimonials/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/testimonials.scss";

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      company: "FinTech Solutions Inc.",
      role: "CEO",
      quote: "Softrinx delivered a transformative financial platform that exceeded our expectations. Their team's technical expertise and commitment to understanding our unique business needs resulted in a solution that has increased our operational efficiency by 35%. They weren't just developers; they were strategic partners in our digital transformation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200",
      stars: 5,
      category: "fintech"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "HealthPlus",
      role: "CTO",
      quote: "The patient management system built by Softrinx revolutionized our healthcare practice. Not only did they deliver a HIPAA-compliant solution on time and within budget, but they also incorporated AI-driven features that have improved our diagnostic accuracy. Their attention to security and user experience has made all the difference.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
      logo: "https://images.unsplash.com/photo-1612026348880-28c19898b34b?w=200",
      stars: 5,
      category: "healthcare"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      company: "Global Retail Corp",
      role: "Digital Transformation Director",
      quote: "We approached Softrinx to revamp our legacy e-commerce platform, and they delivered beyond our expectations. The new system handles 10x more traffic, has increased conversions by 28%, and integrates seamlessly with our inventory management. Their team was responsive, professional, and genuinely invested in our success.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
      logo: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=200",
      stars: 5,
      category: "ecommerce"
    },
    {
      id: 4,
      name: "Emily Zhang",
      company: "EdTech Innovations",
      role: "Product Manager",
      quote: "The learning management system developed by Softrinx has transformed how we deliver educational content. Their team demonstrated a deep understanding of educational technologies and user engagement. The platform's intuitive design and robust features have received overwhelmingly positive feedback from both educators and students.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
      logo: "https://images.unsplash.com/photo-1610844264834-843a0653767c?w=200",
      stars: 4,
      category: "education"
    },
    {
      id: 5,
      name: "James Wilson",
      company: "Manufacturing Solutions",
      role: "Operations Director",
      quote: "Softrinx built a custom ERP system that integrated our entire manufacturing process. The real-time analytics and automation features have reduced our production costs by 22% and eliminated most of the manual data entry errors. Their team took the time to understand our complex workflows and delivered a solution that truly addressed our pain points.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      logo: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccb7?w=200",
      stars: 5,
      category: "manufacturing"
    },
    {
      id: 6,
      name: "Olivia Martinez",
      company: "Travel Experiences",
      role: "Marketing Director",
      quote: "The mobile app developed by Softrinx has been instrumental in our company's growth. The intuitive booking interface and personalized recommendation engine have increased our customer engagement and bookings by over 40%. Their team's focus on user experience and performance optimization has made our app stand out in a competitive market.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
      logo: "https://images.unsplash.com/photo-1572055582936-8e45677f79fe?w=200",
      stars: 5,
      category: "travel"
    }
  ];

  const featuredProjects = [
    {
      client: "FinTech Solutions",
      title: "AI-Powered Investment Platform",
      description: "Developed a machine learning algorithm that predicts market trends with 87% accuracy, resulting in significantly improved portfolio performance for clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    },
    {
      client: "HealthPlus",
      title: "Patient Management System",
      description: "Created a HIPAA-compliant platform that reduced administrative work by 40% and improved patient satisfaction scores by 35%.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
    },
    {
      client: "Global Retail",
      title: "Omnichannel E-commerce Solution",
      description: "Built a scalable platform handling 20,000+ concurrent users with 99.99% uptime, integrating physical and online sales channels.",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Auto-advance slider
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-emerald-900 testimonials-hero">
        <div className="absolute inset-0 testimonials-pattern opacity-10"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl testimonials-title">
              Our <span className="text-emerald-400">Success Stories</span>
            </h1>
            <p className="mb-10 text-xl text-gray-300 testimonials-subtitle">
              Don&apos;t just take our word for it. Hear what our clients have to say about our work and the results we&apos;ve delivered.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>
      
      {/* Featured Testimonial Slider */}
      <section className="py-20 bg-white featured-testimonials">
  <div className="container px-4 mx-auto">
    <div className="relative">

      {/* Slider Track */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out snap-x snap-mandatory"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full px-4 snap-center"
            >
              {/* Card */}
              <div className="p-8 bg-white shadow-xl rounded-2xl md:p-12 testimonial-card">
                <div className="flex flex-col gap-8 md:flex-row">
                  
                  {/* Left Section */}
                  <div className="md:w-1/3">
                    <div className="relative mb-6 overflow-hidden aspect-square rounded-xl">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div>
                      <div className="relative w-32 h-12 mb-4">
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.company}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h3>

                      <p className="font-medium text-emerald-600">
                        {testimonial.role}
                      </p>

                      <p className="text-gray-500">{testimonial.company}</p>

                      {/* Stars */}
                      <div className="flex mt-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.stars
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col justify-center md:w-2/3">
                    <Quote className="w-12 h-12 mb-6 text-emerald-500/20" />

                    <p className="mb-6 text-xl leading-relaxed text-gray-700">
                      {testimonial.quote}
                    </p>

                    <a
                      href={`/case-studies/${testimonial.category}`}
                      className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
                    >
                      Read full case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevTestimonial}
          className="p-3 text-gray-700 bg-gray-100 rounded-full hover:bg-emerald-100 hover:text-emerald-600"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-emerald-500 w-8" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="p-3 text-gray-700 bg-gray-100 rounded-full hover:bg-emerald-100 hover:text-emerald-600"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  </div>
</section>

      
      {/* Results Section */}
      <section className="py-20 bg-gray-50 stats-section">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Real Results</h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-emerald-500"></div>
            <p className="text-xl text-gray-600">
              Our solutions deliver measurable impact across industries. Here&apos;s what we&apos;ve achieved for our clients.
            </p>
          </div>
          
          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "500+", label: "Projects Delivered", delay: 0 },
              { value: "35%", label: "Average Efficiency Improvement", delay: 100 },
              { value: "99.9%", label: "Uptime for Critical Systems", delay: 200 },
              { value: "28%", label: "Average Revenue Increase", delay: 300 }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-8 text-center bg-white shadow-lg rounded-xl stat-card"
                style={{ 
                  transitionDelay: `${stat.delay}ms`,
                  opacity: visibleStats ? 1 : 0,
                  transform: visibleStats ? "translateY(0)" : "translateY(30px)" 
                }}
              >
                <div className="mb-3 text-5xl font-bold text-emerald-600 counter">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Featured Case Studies</h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-emerald-500"></div>
            <p className="text-xl text-gray-600">
              Explore detailed case studies showing how we&apos;ve helped businesses overcome challenges and achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="overflow-hidden transition-all duration-500 shadow-lg group rounded-xl hover:shadow-2xl case-study-card"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="mb-1 font-medium text-emerald-400">{project.client}</p>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <a
                    href={`/case-studies/${project.client.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center font-medium transition-colors text-emerald-600 hover:text-emerald-700"
                  >
                    Read case study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 font-medium text-white transition-colors rounded-lg shadow-md bg-emerald-500 hover:bg-emerald-600"
            >
              View All Case Studies
            </a>
          </div>
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Trusted By</h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-emerald-500"></div>
            <p className="text-xl text-gray-600">
              We&apos;ve helped companies of all sizes across multiple industries achieve their technology goals.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center max-w-5xl gap-8 mx-auto md:gap-12 client-logos">
            {[
              "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200",
              "https://images.unsplash.com/photo-1612026348880-28c19898b34b?w=200",
              "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=200",
              "https://images.unsplash.com/photo-1610844264834-843a0653767c?w=200",
              "https://images.unsplash.com/photo-1563203369-26f2e4a5ccb7?w=200",
              "https://images.unsplash.com/photo-1572055582936-8e45677f79fe?w=200"
            ].map((logo, index) => (
              <div key={index} className="relative w-32 h-20 transition-all duration-300 grayscale hover:grayscale-0 logo-item">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-emerald-600 to-blue-500">
        <div className="absolute inset-0 testimonial-cta-pattern opacity-10"></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-white">Ready to Join Our Success Stories?</h2>
            <p className="mb-8 text-xl text-white/90">
              Let&apos;s discuss how we can help your business achieve similar results through innovative technology solutions.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="px-8 py-4 font-semibold transition-colors bg-white rounded-full shadow-lg text-emerald-600 hover:bg-gray-100 hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 font-semibold text-white transition-colors border-2 rounded-full bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              >
                Explore More Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}