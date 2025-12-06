"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  GraduationCap, BookOpen, Users, CheckCircle2,
  ArrowRight, Sparkles, Award, Video,
  FileText, Target, TrendingUp, Clock,
  Code, Database, Cloud, Brain
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function TrainingPage() {
  const heroRef = useRef(null);
  const programsRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isProgramsInView = useInView(programsRef, { once: true, amount: 0.3 });
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

  const trainingPrograms = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Development Training",
      description: "Comprehensive training on modern development frameworks and best practices.",
      features: ["React, Next.js", "Node.js, Python", "Best practices", "Code reviews"]
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Management",
      description: "Learn database design, optimization, and management techniques.",
      features: ["SQL & NoSQL", "Query optimization", "Data modeling", "Performance tuning"]
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud & DevOps",
      description: "Master cloud platforms and DevOps practices for modern deployments.",
      features: ["AWS, Azure, GCP", "Docker & Kubernetes", "CI/CD pipelines", "Infrastructure as code"]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI & Machine Learning",
      description: "Introduction to AI/ML concepts and practical implementation.",
      features: ["ML fundamentals", "TensorFlow, PyTorch", "Model deployment", "Practical projects"]
    }
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Hands-On Learning",
      description: "Practical exercises and real-world projects to reinforce learning."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Training",
      description: "Customized training programs for your entire team."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Training sessions that fit your team's schedule."
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Training"
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
              <GraduationCap className="w-5 h-5 mr-2" />
              Professional Training Services
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Empower Your Team with <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Expert Training</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive training programs to upskill your team and keep them at the forefront of technology.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="#programs" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section ref={programsRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isProgramsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-600 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Training Programs</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Training Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From development to cloud computing, we offer training in the latest technologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isProgramsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-emerald-50 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <ul className="space-y-3">
                    {program.features.map((feature, fIdx) => (
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isBenefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Our Training?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of professional, hands-on training.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`text-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-500 ${isBenefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
              Ready to Upskill Your Team?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Contact us to discuss custom training programs tailored to your team's needs.
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

