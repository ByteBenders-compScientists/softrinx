"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Palette, Figma, CheckCircle2, ArrowRight,
  Sparkles, Eye, MousePointer, Layers,
  Monitor, Heart, Zap, Target
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function UIUXDesignPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "User Interface Design",
      description: "Pixel-perfect interfaces that combine aesthetics with functionality.",
      features: ["Visual design", "Design systems", "Responsive layouts", "Component libraries"]
    },
    {
      icon: <MousePointer className="w-10 h-10" />,
      title: "User Experience Design",
      description: "Research-driven UX that creates intuitive and engaging experiences.",
      features: ["User research", "Journey mapping", "Wireframing", "Usability testing"]
    },
    {
      icon: <Figma className="w-10 h-10" />,
      title: "Prototyping",
      description: "Interactive prototypes that bring your ideas to life before development.",
      features: ["High-fidelity mockups", "Interactive prototypes", "Animation design", "User testing"]
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency across your product.",
      features: ["Component libraries", "Style guides", "Design tokens", "Documentation"]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Research",
      description: "Understand users, competitors, and market trends.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Design",
      description: "Create beautiful interfaces with attention to detail.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Prototype",
      description: "Build interactive prototypes for testing.",
      icon: <Figma className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Iterate",
      description: "Refine based on user feedback and testing.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80"
            alt="UI/UX Design"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/80" />
        </div>
        
        <div 
          className="absolute w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.05,
            top: mousePosition.y * 0.05,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          style={{
            right: mousePosition.x * 0.03,
            bottom: mousePosition.y * 0.03,
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 backdrop-blur-sm rounded-full text-emerald-300 font-medium mb-6">
              <Palette className="w-5 h-5 mr-2" />
              UI/UX Design Excellence
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Design That <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Captivates</span> & Converts
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We create stunning, intuitive interfaces that don't just look beautiful—they solve problems, delight users, and drive measurable business results.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isServicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-600 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Design Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From user research to final designs, we deliver end-to-end UI/UX solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isServicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-emerald-50 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isProcessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Design Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A user-centered approach that ensures your designs are both beautiful and functional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className={`text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-500 ${isProcessInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <div className="text-emerald-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="py-24 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready to Transform Your User Experience?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's create designs that your users will love and that drive business results.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:bg-gray-50 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

