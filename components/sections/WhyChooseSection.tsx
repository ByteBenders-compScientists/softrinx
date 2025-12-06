import React, { useState, useEffect, useRef } from 'react';
import { Zap, Shield, Users, TrendingUp, Award, Clock } from 'lucide-react';

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      stat: "40%",
      metric: "Faster",
      description: "We deliver projects 40% faster than industry standards without compromising quality"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      stat: "100%",
      metric: "Secure",
      description: "Bank-level security protocols protecting your data and your customers"
    },
    {
      icon: Users,
      title: "Expert Team",
      stat: "100+",
      metric: "Specialists",
      description: "Certified professionals with decades of combined experience"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      stat: "250%",
      metric: "ROI",
      description: "Our clients see an average 250% increase in return on investment"
    },
    {
      icon: Award,
      title: "Award Winning",
      stat: "50+",
      metric: "Awards",
      description: "Recognized excellence across multiple industry categories"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      stat: "24/7",
      metric: "Available",
      description: "Round-the-clock support ensuring your business never stops"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-white overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header with large background text */}
        <div className="relative mb-24 text-center">
          {/* Large background text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none">
            <h2 className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-transparent select-none"
                style={{
                  WebkitTextStroke: '2px rgba(16, 185, 129, 0.08)',
                  letterSpacing: '-0.02em'
                }}>
              WHY SOFTRINX
            </h2>
          </div>

          {/* Front heading */}
          <div className="relative z-10 pt-8">
            <h3 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Why Partner With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Us
              </span>
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We deliver transformative digital experiences that drive measurable business growth and lasting competitive advantage.
            </p>
          </div>
        </div>

        {/* Benefits Grid - No cards, just clean layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Accent line on hover */}
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-emerald-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-emerald-500 group-hover:text-emerald-600 transition-colors">
                        {benefit.stat}
                      </span>
                      <span className="text-lg font-semibold text-teal-500">
                        {benefit.metric}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105">
            Start Your Project Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}