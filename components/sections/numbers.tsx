"use client";

import { useEffect, useRef, useState } from 'react';

export default function Numbers() {
  const [counters, setCounters] = useState({
    years: 0,
    customers: 0,
    projects: 0,
    awards: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate years counter
          let yearsCount = 0;
          const yearsInterval = setInterval(() => {
            yearsCount++;
            setCounters(prev => ({ ...prev, years: yearsCount }));
            if (yearsCount >= 5) clearInterval(yearsInterval);
          }, 100);

          // Animate customers counter
          let customersCount = 0;
          const customersInterval = setInterval(() => {
            customersCount += 50;
            setCounters(prev => ({ ...prev, customers: customersCount }));
            if (customersCount >= 1500) {
              setCounters(prev => ({ ...prev, customers: 1500 }));
              clearInterval(customersInterval);
            }
          }, 30);

          // Animate projects counter
          let projectsCount = 0;
          const projectsInterval = setInterval(() => {
            projectsCount += 20;
            setCounters(prev => ({ ...prev, projects: projectsCount }));
            if (projectsCount >= 800) {
              setCounters(prev => ({ ...prev, projects: 800 }));
              clearInterval(projectsInterval);
            }
          }, 30);

          // Animate awards counter
          let awardsCount = 0;
          const awardsInterval = setInterval(() => {
            awardsCount++;
            setCounters(prev => ({ ...prev, awards: awardsCount }));
            if (awardsCount >= 15) clearInterval(awardsInterval);
          }, 100);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div 
      ref={sectionRef}
      className="relative -mt-20 z-20"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          
          {/* Main stats container */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-950 rounded-3xl shadow-2xl overflow-hidden border border-emerald-500/20">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-blue-500/10 animate-pulse"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16 185 129 / 0.5) 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Stats grid */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-12">
              {/* Years */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 rounded-2xl transition-all duration-500 blur-xl"></div>
                <div className="relative">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent mb-3 transition-all duration-500 group-hover:scale-110">
                    {counters.years}
                  </div>
                  <div className="text-base md:text-lg font-bold text-white mb-1">Years</div>
                  <div className="text-xs md:text-sm text-gray-400">Working With Passion</div>
                </div>
              </div>

              {/* Customers */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-2xl transition-all duration-500 blur-xl"></div>
                <div className="relative">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-3 transition-all duration-500 group-hover:scale-110">
                    {(counters.customers / 1000).toFixed(1)}K
                  </div>
                  <div className="text-base md:text-lg font-bold text-white mb-1">Customer</div>
                  <div className="text-xs md:text-sm text-gray-400">Satisfied Customer</div>
                </div>
              </div>

              {/* Projects */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-2xl transition-all duration-500 blur-xl"></div>
                <div className="relative">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-purple-100 to-purple-300 bg-clip-text text-transparent mb-3 transition-all duration-500 group-hover:scale-110">
                    {counters.projects}
                  </div>
                  <div className="text-base md:text-lg font-bold text-white mb-1">Project</div>
                  <div className="text-xs md:text-sm text-gray-400">We Have Completed</div>
                </div>
              </div>

              {/* Awards */}
              <div className="text-center group relative">
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 rounded-2xl transition-all duration-500 blur-xl"></div>
                <div className="relative">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-orange-100 to-orange-300 bg-clip-text text-transparent mb-3 transition-all duration-500 group-hover:scale-110">
                    {counters.awards}
                  </div>
                  <div className="text-base md:text-lg font-bold text-white mb-1">Awards</div>
                  <div className="text-xs md:text-sm text-gray-400">Achievement For Service</div>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-emerald-500/30 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}