// app/services/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Code, Server, Database, Cloud, 
  Brain, TrendingUp, BarChart3, 
  Zap, ArrowRight, CheckCircle2,
  Cpu, Network, Layers, Sparkles,
  GitBranch, Shield, Rocket
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function ServicesPage() {
  const heroRef = useRef(null);
  const softwareRef = useRef(null);
  const mlRef = useRef(null);
  const dataScienceRef = useRef(null);
  const techStackRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const isSoftwareInView = useInView(softwareRef, { once: true, amount: 0.2 });
  const isMLInView = useInView(mlRef, { once: true, amount: 0.2 });
  const isDataScienceInView = useInView(dataScienceRef, { once: true, amount: 0.2 });
  const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.2 });
  const isProcessInView = useInView(processRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  // Software Engineering Services
  const softwareServices = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Full-Stack Development",
      description: "End-to-end web applications built with modern frameworks and best practices.",
      features: ["React, Next.js, Vue", "Node.js, Python, Go", "REST & GraphQL APIs", "Real-time features"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Engineering",
      description: "Scalable server architectures and microservices that power your applications.",
      features: ["Microservices architecture", "API design & development", "Database optimization", "Caching strategies"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Solutions",
      description: "Robust data storage and management systems optimized for performance.",
      features: ["PostgreSQL, MongoDB", "Redis caching", "Data modeling", "Query optimization"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud deployments on AWS, Azure, and GCP with DevOps automation.",
      features: ["Container orchestration", "CI/CD pipelines", "Auto-scaling", "Cost optimization"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs with comprehensive documentation and versioning.",
      features: ["REST & GraphQL", "API documentation", "Rate limiting", "Authentication & security"],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "System Architecture",
      description: "Enterprise-grade system design for scalability, reliability, and performance.",
      features: ["System design", "Load balancing", "Fault tolerance", "Performance tuning"],
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      borderColor: "border-violet-200"
    }
  ];

  // Machine Learning Services
  const mlServices = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "ML Model Development",
      description: "Custom machine learning models tailored to your specific business needs.",
      features: ["Predictive analytics", "Classification models", "Regression analysis", "Model optimization"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Natural Language Processing",
      description: "AI-powered text analysis, sentiment detection, and language understanding.",
      features: ["Text classification", "Sentiment analysis", "Named entity recognition", "Chatbots & assistants"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "border-cyan-200"
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Computer Vision",
      description: "Image and video analysis using deep learning and neural networks.",
      features: ["Object detection", "Image classification", "Facial recognition", "Video analytics"],
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200"
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing applications.",
      features: ["LLM integration", "AI APIs", "Model deployment", "Real-time inference"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200"
    }
  ];

  // Data Science Services
  const dataScienceServices = [
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics.",
      features: ["Statistical analysis", "Trend identification", "Pattern recognition", "KPI tracking"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Data Visualization",
      description: "Interactive dashboards and visualizations that tell your data story.",
      features: ["Interactive dashboards", "Real-time charts", "Custom visualizations", "Report generation"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "Data Pipelines",
      description: "Automated ETL pipelines for efficient data processing and transformation.",
      features: ["ETL/ELT pipelines", "Data integration", "Data quality checks", "Scheduled processing"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Data Engineering",
      description: "Build robust data infrastructure for storage, processing, and access.",
      features: ["Data warehousing", "Data lakes", "Stream processing", "Data governance"],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    }
  ];

  // Tech Stack
  const techStack = [
    {
      category: "Languages",
      techs: ["Python", "JavaScript/TypeScript", "Java", "Go", "Rust", "SQL"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "ML/AI Frameworks",
      techs: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "OpenAI"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: "Data Tools",
      techs: ["Pandas", "NumPy", "Apache Spark", "Airflow", "dbt", "Tableau"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Expert Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Software Engineering,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ML & Data Science
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We build scalable software solutions, develop intelligent ML models, and transform data into actionable insights.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Software Engineering Services */}
      <section ref={softwareRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isSoftwareInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 mb-4">
                <Code className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Software Engineering</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Build Scalable Software Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From full-stack applications to microservices architecture, we engineer robust software systems that scale with your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isSoftwareInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`inline-flex p-4 rounded-xl ${service.bgColor} ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} mr-3 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning Services */}
      <section ref={mlRef} className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isMLInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 mb-4">
                <Brain className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Machine Learning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Intelligent AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage the power of machine learning and AI to automate processes, make predictions, and enhance user experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {mlServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isMLInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`inline-flex p-4 rounded-xl ${service.bgColor} ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} mr-3 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Science Services */}
      <section ref={dataScienceRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isDataScienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-600 mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Data Science</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transform Data Into Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build data pipelines, create visualizations, and extract meaningful insights from your data to drive business decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {dataScienceServices.map((service, idx) => (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-8 border-2 ${service.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isDataScienceInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`inline-flex p-4 rounded-xl ${service.bgColor} ${service.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-700">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} mr-3 flex-shrink-0`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techStackRef} className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isTechStackInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with cutting-edge technologies across software engineering, machine learning, and data science.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {techStack.map((category, idx) => (
                <div
                  key={idx}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 ${isTechStackInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white/10 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.techs.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isProcessInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures quality, transparency, and successful project delivery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "01", title: "Discovery", desc: "Understand requirements, goals, and constraints" },
                { number: "02", title: "Design", desc: "Architecture, data models, and UI/UX planning" },
                { number: "03", title: "Development", desc: "Agile sprints with regular demos and feedback" },
                { number: "04", title: "Deploy", desc: "Testing, deployment, and ongoing support" }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-500 ${isProcessInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef} 
        className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready to Build Something Amazing?
            </h2>
            <p className={`text-xl mb-12 text-white/90 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let&apos;s discuss your project and explore how we can help you achieve your goals with cutting-edge software engineering, ML, and data science solutions.
            </p>
            <div className={`flex flex-wrap gap-4 justify-center transform transition-all duration-1000 delay-500 ${isCtaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
