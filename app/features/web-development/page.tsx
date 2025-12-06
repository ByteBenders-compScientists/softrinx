/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useEffect } from 'react';
import { Code2, Zap, Shield, Rocket, Globe, Server, Database, Layout, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users, Award, Clock, Layers, Terminal, Cpu, MousePointer } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import TechnologyStackSection from '@/components/sections/TechnologyStackSection';
import CTASectionWhite from '@/components/sections/CtaWeb';
import ProcessSectionDark from '@/components/sections/ProcessSectionDark';
import Unique from '@/components/sections/Unique';


const WebDevelopmentPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const technologies = [
    { name: 'Next.js', logo: '/images/images/next.png', gradient: 'from-black to-gray-700' },
    { name: 'React', logo: '/images/images/react.png', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Vue.js', logo: '/images/images/vue.png', gradient: 'from-green-400 to-emerald-500' },
    { name: 'Angular', logo: '/images/images/angular.png', gradient: 'from-red-500 to-pink-600' },
    { name: 'Node.js', logo: '/images/images/node.png', gradient: 'from-green-500 to-lime-600' },
    { name: 'Django', logo: '/images/images/django.png', gradient: 'from-emerald-600 to-green-700' },
    { name: 'PostgreSQL', logo: '/images/images/postgresql.png', gradient: 'from-blue-600 to-indigo-700' },
    { name: 'MongoDB', logo: '/images/images/mongodb.png', gradient: 'from-green-600 to-emerald-700' },
  ];

  const capabilities = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Blazing Fast',
      metric: '<2s',
      description: 'Load Times',
      detail: 'Optimized for Core Web Vitals, ranking factors, and user experience'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Fort Knox Security',
      metric: '100%',
      description: 'Secure',
      detail: 'Enterprise-grade encryption, GDPR compliant, penetration tested'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Infinite Scale',
      metric: '10M+',
      description: 'Users',
      detail: 'Architected to handle growth from day one to millions of users'
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Clean Code',
      metric: 'A+',
      description: 'Quality',
      detail: 'Maintainable, documented, tested code that your team can work with'
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gray-950">
      <Navigation />

      {/* Hero Section - Dark with massive background text */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950">
        {/* Massive background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
          <div className="text-[20rem] font-bold text-white whitespace-nowrap">
            WEB DEV
          </div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Cursor follow effect */}
        <div 
          className="absolute transition-all duration-300 rounded-full pointer-events-none w-96 h-96 bg-emerald-500/5 blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192
          }}
        ></div>

        <div className="relative z-10 px-6 py-32 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-emerald-500/10 border-emerald-500/30 backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">Web Development Mastery</span>
              </div>
              
              <h1 className="mb-6 text-6xl font-bold leading-tight text-white md:text-7xl">
                We don&apos;t just build websites.
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text">
                  We engineer digital empires.
                </span>
              </h1>
              
              <p className="mb-8 text-xl leading-relaxed text-gray-400">
                High-performance web applications built with cutting-edge technologies. From Next.js to Django, we master every stack. Lightning-fast, scalable, and built to dominate your market.
              </p>

              <div className="mb-12">
                <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-emerald-400">Technologies We Master</div>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Tailwind CSS', 'SASS', 'PostgreSQL', 'MongoDB'].map((tech, i) => (
                    <div key={i} className="px-4 py-2 text-sm font-medium transition-all duration-300 bg-gray-900 border rounded-lg border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 font-bold text-white transition-all duration-300 border-2 border-gray-700 rounded-lg hover:border-emerald-500 hover:bg-emerald-500/10">
                  View Our Work
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" 
                  alt="Coding"
                  className="object-cover w-full h-full border shadow-2xl rounded-2xl shadow-emerald-500/20 border-emerald-500/20"
                />
                <div className="absolute p-6 bg-gray-900 border -bottom-8 -right-8 border-emerald-500/30 rounded-xl backdrop-blur-sm">
                  <div className="mb-1 text-4xl font-bold text-emerald-400">200+</div>
                  <div className="text-sm text-gray-400">Projects Launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build - White */}
      <section className="relative py-32 overflow-hidden bg-white">
        {/* Background text effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
          <div className="text-[15rem] font-bold text-gray-900 whitespace-nowrap">
            CAPABILITIES
          </div>
        </div>

        <div className="relative px-6 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-sm font-bold tracking-wider uppercase text-emerald-600">What We Build</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>
            <h2 className="mb-6 text-6xl font-bold text-gray-900">
              Not your typical <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">web apps</span>
            </h2>
            <p className="max-w-3xl mx-auto text-2xl text-gray-600">
              E-commerce platforms processing millions. SaaS dashboards serving thousands. Enterprise systems managing entire operations. We build digital products that make money.
            </p>
          </div>

          {/* Unique layout - not cards */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left - Large featured */}
            <div className="relative group">
              <div className="absolute transition-all duration-500 -inset-4 bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 rounded-3xl blur-2xl group-hover:blur-3xl"></div>
              <div className="relative p-12 border border-gray-200 shadow-xl bg-gradient-to-br from-gray-50 to-white rounded-2xl">
                <div className="mb-8">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 shadow-lg bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-emerald-500/30 rotate-3 group-hover:rotate-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4 text-4xl font-bold text-gray-900">E-Commerce Platforms</h3>
                  <p className="mb-6 text-xl text-gray-600">Custom online stores that convert browsers into buyers. Inventory management, payment processing, analytics - everything you need to sell online.</p>
                  
                  <div className="space-y-3">
                    {['Headless Commerce Architecture', 'Multi-currency & Multi-language', 'Real-time Inventory Sync', 'AI-Powered Recommendations'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-emerald-600">$5M+</div>
                      <div className="text-sm text-gray-500">Revenue Generated</div>
                    </div>
                    <ArrowRight className="w-8 h-8 transition-transform text-emerald-600 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stacked smaller */}
            <div className="space-y-6">
              {[
                {
                  icon: <Database className="w-6 h-6" />,
                  title: 'SaaS Dashboards',
                  desc: 'Real-time analytics, user management, subscription billing. Built to scale from 10 to 10,000 customers.',
                  stat: '50K+ Active Users',
                  color: 'blue'
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: 'Corporate Websites',
                  desc: 'Professional presence that converts. SEO-optimized, lightning-fast, and designed to impress enterprise clients.',
                  stat: '#1 Google Rankings',
                  color: 'purple'
                },
                {
                  icon: <Server className="w-6 h-6" />,
                  title: 'Custom Web Apps',
                  desc: 'Internal tools, booking systems, CRMs - whatever your business needs, we build it from scratch.',
                  stat: '99.9% Uptime',
                  color: 'emerald'
                }
              ].map((item, i) => (
                <div key={i} className="relative p-8 transition-all duration-300 border border-gray-200 group bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl hover:border-emerald-300">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${item.color}-500/10 to-transparent rounded-bl-full`}></div>
                  <div className="relative">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-4 text-${item.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mb-4 leading-relaxed text-gray-600">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-${item.color}-600 font-bold text-lg`}>{item.stat}</span>
                      <ArrowRight className={`w-5 h-5 text-${item.color}-600 group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     <TechnologyStackSection/>
     <Unique/>
     <ProcessSectionDark/>


      <CTASectionWhite/>

    

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;