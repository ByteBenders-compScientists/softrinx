"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    category: 'CLOUD HOSTING',
    title: 'Unlocking Scalability, Reliability, And Efficiency.',
    description: 'Integer pulvinar odio placerat nec rhoncus us, ullamcorper nascetur nascetur auctor taciti senectus.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop',
    side: 'left'
  },
  {
    id: 2,
    category: 'IT CONSULTING',
    title: 'Empowering Business Performance Through Expert.',
    description: 'Transform your business with cutting-edge IT consulting strategies that drive innovation and growth through expert guidance.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=600&fit=crop',
    side: 'right'
  },
  {
    id: 3,
    category: 'E-COMMERCE PLATFORM',
    title: 'Revolutionizing Online Retail Experience.',
    description: 'Modern e-commerce platform delivering exceptional user experience and seamless shopping journey for customers worldwide.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    side: 'left'
  },
  {
    id: 4,
    category: 'MOBILE DEVELOPMENT',
    title: 'Next-Generation Mobile Application.',
    description: 'Award-winning mobile application combining stunning design with powerful functionality and user-centric approach.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    side: 'right'
  }
];

export default function CaseStudy() {
  const [visibleCards, setVisibleCards] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header with background text */}
        <div className="relative text-center mb-24">
          {/* Large background "Case Study" text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full overflow-hidden">
            <h3 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-gray-900/[0.03] tracking-tighter select-none whitespace-nowrap text-center leading-none">
              Case Study
            </h3>
          </div>
          
          {/* Foreground text */}
          <div className="relative pt-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-6">
              Case Study
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our successful projects and see how we deliver exceptional results
            </p>
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/40 via-blue-500/40 to-purple-500/40 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Case study cards */}
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                ref={(el) => (observerRefs.current[index] = el)}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  study.side === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content side */}
                <div className={`w-full lg:w-1/2 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : study.side === 'left' 
                      ? 'opacity-0 -translate-x-20' 
                      : 'opacity-0 translate-x-20'
                } transition-all duration-1000 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}>
                  <div className={`${study.side === 'left' ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                    <div className={`inline-block px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded mb-4 ${study.side === 'left' ? 'lg:float-right lg:clear-right' : ''}`}>
                      <span className="text-emerald-600 font-bold uppercase text-xs tracking-wider">{study.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight hover:text-emerald-600 transition-colors duration-300 clear-both">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {study.description}
                    </p>
                    <button className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-gray-300 hover:border-emerald-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-500/10">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Center connector dot */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-lg ${
                    visibleCards.includes(index) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  } transition-all duration-500`}
                  style={{ transitionDelay: `${index * 200 + 400}ms` }}>
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                  </div>
                  {/* Horizontal connecting line */}
                  <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-${study.side === 'left' ? 'r' : 'l'} from-emerald-500/80 to-transparent ${
                    study.side === 'left' ? 'right-full mr-2.5' : 'left-full ml-2.5'
                  } ${
                    visibleCards.includes(index) ? 'w-16 opacity-100' : 'w-0 opacity-0'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 200 + 600}ms` }}></div>
                </div>

                {/* Image side */}
                <div className={`w-full lg:w-1/2 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-x-0' 
                    : study.side === 'left' 
                      ? 'opacity-0 translate-x-20' 
                      : 'opacity-0 -translate-x-20'
                } transition-all duration-1000 ease-out`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}>
                  <div className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-emerald-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <div className="relative h-[400px] overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-500"></div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-emerald-500/0 group-hover:border-emerald-500/60 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-blue-500/0 group-hover:border-blue-500/60 transition-all duration-500"></div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}