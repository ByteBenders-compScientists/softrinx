import React, { useEffect, useRef, useState } from 'react';

export default function ServicesShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const services = [
    {
      number: "01",
      title: "Technology Consulting",
      description: "Strategic guidance for complex technology decisions",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    },
    {
      number: "02",
      title: "Software Development",
      description: "Custom enterprise software built with cutting-edge tech",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    },
    {
      number: "03",
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    },
    {
      number: "04",
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    },
    {
      number: "05",
      title: "AI Solutions",
      description: "Intelligent systems powered by machine learning",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    },
    {
      number: "06",
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    }
  ];

  // Double the services array for seamless loop
  const doubledServices = [...services, ...services];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Large scrolling background text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[200px] font-bold text-gray-50 whitespace-nowrap pointer-events-none">
        <div className="inline-block animate-scroll-text">
          WHAT WE DELIVER • WHAT WE DELIVER • WHAT WE DELIVER • 
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="text-emerald-500 font-semibold text-sm tracking-wider uppercase">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            What We <span className="text-emerald-600">Deliver</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Infinite scrolling carousel */}
        <div className="relative">
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div 
            ref={scrollRef}
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex gap-8 ${isPaused ? '' : 'animate-carousel'}`}
              style={{ width: 'fit-content' }}
            >
              {doubledServices.map((service, idx) => (
                <div
                  key={idx}
                  className="group flex-shrink-0 w-[380px] cursor-pointer"
                >
                  {/* Image with number overlay - NO border radius */}
                  <div className="relative h-[480px] overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                    
                    {/* Large number - fully visible */}
                    <div className="absolute bottom-6 left-6 text-[120px] font-black leading-none">
                      <span className="text-white/10">{service.number}</span>
                    </div>

                    {/* Animated accent lines */}
                    <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-emerald-500 group-hover:w-full transition-all duration-500 delay-100" />
                    
                    {/* Floating badge on hover */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="bg-emerald-500 text-white px-4 py-2 text-sm font-bold">
                        VIEW DETAILS
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-0.5 bg-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <span className="text-emerald-500 font-bold text-sm">{service.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">Hover to pause • Scroll automatically</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-text {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes carousel {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-text {
          animation: scroll-text 40s linear infinite;
        }

        .animate-carousel {
          animation: carousel 40s linear infinite;
        }

        .animate-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}