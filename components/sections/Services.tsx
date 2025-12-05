"use client";

import { useEffect, useRef, useState } from 'react';
import { 
  Code, Smartphone, Server, BrainCircuit, Database, Shield, Cpu, Cloud, ArrowRight, CheckCircle2, Sparkles
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Software Development',
    description: 'Software development is the process of creating computer software programs that perform specific functions or tasks.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  },
  {
    number: '02',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App Development',
    description: 'Native iOS & Android applications and cross-platform solutions that deliver seamless performance.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
  },
  {
    number: '03',
    icon: <Server className="w-8 h-8" />,
    title: 'Cloud Solutions',
    description: 'Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
  },
  {
    number: '04',
    icon: <BrainCircuit className="w-8 h-8" />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI integration and machine learning solutions to power intelligent business applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
  {
    number: '05',
    icon: <Database className="w-8 h-8" />,
    title: 'Database Architecture',
    description: 'Robust database design, optimization, and management for efficient data handling at scale.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
  },
  {
    number: '06',
    icon: <Shield className="w-8 h-8" />,
    title: 'Cyber Security',
    description: 'Comprehensive security solutions to protect your applications, data, and infrastructure.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % services.length;
        
        if (scrollContainerRef.current) {
          const cardWidth = 290;
          scrollContainerRef.current.scrollTo({
            left: next * cardWidth,
            behavior: 'smooth'
          });
        }
        
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollToCard = (index) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = 290;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-32 bg-gray-950 overflow-hidden min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header with stylish background text */}
        <div className="relative text-center mb-12">
          {/* Large background "Services" text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full">
            <h3 className="text-[14rem] md:text-[18rem] lg:text-[22rem] font-black text-gray-800/20 tracking-tighter select-none whitespace-nowrap text-center leading-none">
              Services
            </h3>
          </div>
          
          {/* Foreground "Our Services" */}
          <h2 className="relative text-5xl md:text-6xl font-bold text-white tracking-tight pt-4">
            Our Services
          </h2>
        </div>

        {/* Intro text section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold uppercase text-sm tracking-wider">What We Offer</span>
            <Sparkles className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We provide cutting-edge technology solutions tailored to your business needs. From concept to deployment, 
            our expert team delivers innovative services that drive growth and digital transformation.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Expert Team</h4>
                <p className="text-gray-400 text-sm">Seasoned professionals with years of industry experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">Modern Tech Stack</h4>
                <p className="text-gray-400 text-sm">Latest frameworks and cutting-edge technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-semibold mb-1">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Round-the-clock assistance and maintenance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Single Row Scrolling Container */}
        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer min-w-[260px] h-[340px] snap-center flex-shrink-0 shadow-lg hover:shadow-2xl"
              >
                {/* Background image on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="relative z-10 p-5 h-full flex flex-col">
                  {/* Number */}
                  <div className="text-5xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-300 mb-2">
                    {service.number}
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                      <span className="uppercase text-xs tracking-wider">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Icon in concentric circles bottom right */}
                <div className="absolute -bottom-8 -right-8 w-28 h-28 opacity-30 group-hover:opacity-100 transition-all duration-500">
                  {/* Concentric circles */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors duration-500"></div>
                  <div className="absolute inset-3 rounded-full border-2 border-emerald-500/30 group-hover:border-emerald-500/50 transition-colors duration-500"></div>
                  <div className="absolute inset-6 rounded-full border-2 border-emerald-500/40 group-hover:border-emerald-500/60 transition-colors duration-500 flex items-center justify-center">
                    {/* Icon in center */}
                    <div className="text-emerald-500 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-2 mb-16">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`transition-all duration-300 rounded-full border ${
                index === activeIndex
                  ? 'w-8 h-2.5 bg-emerald-500 border-emerald-500'
                  : 'w-2.5 h-2.5 bg-transparent border-gray-600 hover:border-emerald-500'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800  p-10 border border-gray-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's transform your ideas into reality. Our team is ready to deliver exceptional solutions 
                tailored to your unique business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-gray-600 hover:border-emerald-500 text-white font-semibold rounded-lg transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}