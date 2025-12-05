"use client";

import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

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
          
          let yearsCount = 0;
          const yearsInterval = setInterval(() => {
            yearsCount++;
            setCounters(prev => ({ ...prev, years: yearsCount }));
            if (yearsCount >= 5) clearInterval(yearsInterval);
          }, 100);

          let customersCount = 0;
          const customersInterval = setInterval(() => {
            customersCount += 50;
            setCounters(prev => ({ ...prev, customers: customersCount }));
            if (customersCount >= 1500) {
              setCounters(prev => ({ ...prev, customers: 1500 }));
              clearInterval(customersInterval);
            }
          }, 30);

          let projectsCount = 0;
          const projectsInterval = setInterval(() => {
            projectsCount += 20;
            setCounters(prev => ({ ...prev, projects: projectsCount }));
            if (projectsCount >= 800) {
              setCounters(prev => ({ ...prev, projects: 800 }));
              clearInterval(projectsInterval);
            }
          }, 30);

          let awardsCount = 0;
          const awardsInterval = setInterval(() => {
            awardsCount++;
            setCounters(prev => ({ ...prev, awards: awardsCount }));
            if (awardsCount >= 15) clearInterval(awardsInterval);
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="bg-[#0a0a0a] py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={sectionRef} className="w-full">
          <div className="mb-6 flex items-center justify-start gap-4 px-2">
            <div className="bg-[#1a1a1a] border border-gray-800 px-5 py-2.5 flex items-center gap-2.5 hover:border-orange-500/50 transition-all duration-300 group">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-orange-500 font-bold text-sm">Trustpilot</span>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5.0/5.0</span>
            </div>

            <div className="bg-[#1a1a1a] border border-gray-800 px-5 py-2.5 flex items-center gap-2.5 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-1">
                <span className="text-[#4285F4] font-bold text-base group-hover:scale-110 transition-transform duration-300 inline-block">G</span>
                <span className="text-[#EA4335] font-bold text-base group-hover:scale-110 transition-transform duration-300 inline-block" style={{transitionDelay: '50ms'}}>o</span>
                <span className="text-[#FBBC05] font-bold text-base group-hover:scale-110 transition-transform duration-300 inline-block" style={{transitionDelay: '100ms'}}>o</span>
                <span className="text-[#4285F4] font-bold text-base group-hover:scale-110 transition-transform duration-300 inline-block" style={{transitionDelay: '150ms'}}>g</span>
                <span className="text-[#34A853] font-bold text-base group-hover:scale-110 transition-transform duration-300 inline-block" style={{transitionDelay: '200ms'}}>l</span>
                <span className="text-[#EA4335] font-bold text-base group-hover:scale-110 transition-transform duration-300 inline-block" style={{transitionDelay: '250ms'}}>e</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">5.0/5.0</span>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-800 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
              <div className="group relative p-8 text-center hover:bg-gradient-to-br hover:from-blue-500/5 hover:via-transparent hover:to-transparent transition-all duration-500">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
                <div className="relative">
                  <div className="text-6xl font-bold text-white mb-2 tabular-nums group-hover:scale-110 transition-transform duration-500">
                    {counters.years}
                  </div>
                  <div className="text-white text-lg font-semibold mb-1 group-hover:text-blue-300 transition-colors duration-300">Years</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">Working With Passion</div>
                </div>
              </div>

              <div className="group relative p-8 text-center hover:bg-gradient-to-br hover:from-emerald-500/5 hover:via-transparent hover:to-transparent transition-all duration-500">
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
                <div className="relative">
                  <div className="text-6xl font-bold text-white mb-2 tabular-nums group-hover:scale-110 transition-transform duration-500">
                    {counters.customers >= 1000 ? `${(counters.customers / 1000).toFixed(1)}K` : counters.customers}
                  </div>
                  <div className="text-white text-lg font-semibold mb-1 group-hover:text-emerald-300 transition-colors duration-300">Customer</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">Satisfied Customer</div>
                </div>
              </div>

              <div className="group relative p-8 text-center hover:bg-gradient-to-br hover:from-purple-500/5 hover:via-transparent hover:to-transparent transition-all duration-500">
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
                <div className="relative">
                  <div className="text-6xl font-bold text-white mb-2 tabular-nums group-hover:scale-110 transition-transform duration-500">
                    {counters.projects}
                  </div>
                  <div className="text-white text-lg font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300">Project</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">We Have Completed</div>
                </div>
              </div>

              <div className="group relative p-8 text-center hover:bg-gradient-to-br hover:from-orange-500/5 hover:via-transparent hover:to-transparent transition-all duration-500">
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl"></div>
                <div className="relative">
                  <div className="text-6xl font-bold text-white mb-2 tabular-nums group-hover:scale-110 transition-transform duration-500">
                    {counters.awards}
                  </div>
                  <div className="text-white text-lg font-semibold mb-1 group-hover:text-orange-300 transition-colors duration-300">Awards</div>
                  <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">Achievement For Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}