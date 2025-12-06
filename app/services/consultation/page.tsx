"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  MessageSquare, Users, Target, CheckCircle2,
  ArrowRight, Sparkles, Calendar, Phone,
  Video, FileText, TrendingUp, Award
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function ConsultationPage() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.3 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const consultationServices = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Planning",
      description: "Define your vision, set clear objectives, and create a roadmap for success.",
      features: ["Business analysis", "Goal setting", "Roadmap creation"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Technical Assessment",
      description: "Evaluate your current technology stack and identify improvement opportunities.",
      features: ["Architecture review", "Performance audit", "Security analysis"]
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Requirements Gathering",
      description: "Comprehensive analysis of your needs to ensure project success.",
      features: ["Stakeholder interviews", "Documentation", "Feasibility studies"]
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Technology Selection",
      description: "Expert guidance on choosing the right technologies for your project.",
      features: ["Tech stack recommendations", "Cost analysis", "Scalability planning"]
    }
  ];

  const consultationProcess = [
    {
      number: "01",
      title: "Initial Discovery",
      description: "We start with a free consultation to understand your business needs and challenges.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Deep Analysis",
      description: "Comprehensive assessment of your current state and future requirements.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Solution Design",
      description: "Customized recommendations and strategic roadmap tailored to your goals.",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Implementation Plan",
      description: "Detailed action plan with timelines, resources, and success metrics.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Leverage years of industry experience to make informed decisions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Clear Roadmap",
      description: "Get a detailed plan that aligns with your business objectives."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cost Optimization",
      description: "Identify opportunities to reduce costs and maximize ROI."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Risk Mitigation",
      description: "Avoid common pitfalls and ensure project success from the start."
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Consultation"
            fill
            className="object-cover opacity-20"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/80" />
        </div>
        
        {/* Interactive Floating Elements */}
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
              <MessageSquare className="w-5 h-5 mr-2" />
              Expert Consultation Services
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Strategic <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Consultation</span> That Drives Results
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Get expert guidance to make informed technology decisions, optimize your strategy, and accelerate your digital transformation journey.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#services" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Learn More
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
                Comprehensive Consultation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategic planning to technical assessment, we provide expert guidance at every stage of your journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {consultationServices.map((service, idx) => (
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
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach that ensures we understand your needs and deliver actionable insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationProcess.map((step, idx) => (
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
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isBenefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Consultation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference that expert guidance makes in your technology decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-500 ${isBenefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="text-emerald-600 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
              Ready to Get Expert Guidance?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Schedule a free consultation and discover how we can help you make the right technology decisions for your business.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 hover:bg-gray-50 transition-all duration-300"
              >
                Schedule Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}


