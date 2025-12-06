import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import Image from 'next/image';

const TechnologyStackSection = () => {
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    { 
      name: 'Next.js', 
      logo: '/images/images/next.png', 
      color: 'text-white',
      glow: 'group-hover:shadow-white/20'
    },
    { 
      name: 'React', 
      logo: '/images/images/react.png', 
      color: 'text-cyan-400',
      glow: 'group-hover:shadow-cyan-500/30'
    },
    { 
      name: 'Vue.js', 
      logo: '/images/images/vue.png', 
      color: 'text-emerald-400',
      glow: 'group-hover:shadow-emerald-500/30'
    },
    { 
      name: 'Angular', 
      logo: '/images/images/angular.png', 
      color: 'text-red-500',
      glow: 'group-hover:shadow-red-500/30'
    },
    { 
      name: 'Node.js', 
      logo: '/images/images/node.png', 
      color: 'text-green-500',
      glow: 'group-hover:shadow-green-500/30'
    },
    { 
      name: 'Django', 
      logo: '/images/images/django.png', 
      color: 'text-emerald-600',
      glow: 'group-hover:shadow-emerald-600/30'
    },
    { 
      name: 'PostgreSQL', 
      logo: '/images/images/postgresql.png', 
      color: 'text-blue-500',
      glow: 'group-hover:shadow-blue-500/30'
    },
    { 
      name: 'MongoDB', 
      logo: '/images/images/mongodb.png', 
      color: 'text-green-600',
      glow: 'group-hover:shadow-green-600/30'
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gray-950">
      {/* Massive background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <div className="text-[20rem] font-bold text-white whitespace-nowrap">
          TECH
        </div>
      </div>

      {/* Gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 blur-3xl"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-400">Technology Arsenal</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h2 className="mb-6 text-6xl font-bold text-white md:text-7xl">
            Powered by the <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text">best tech</span>
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-400">
            We don&apos;t chase trends. We master proven technologies that Fortune 500 companies trust.
          </p>
        </div>

        {/* Tech grid - clean layout with logos prominently displayed */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {technologies.map((tech, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredTech(i)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`group relative transition-all duration-500 ${
                hoveredTech === i ? 'scale-110 z-10' : hoveredTech !== null ? 'scale-95 opacity-50' : ''
              }`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 ${tech.glow}`}></div>
              
              <div className="relative flex flex-col items-center justify-center">
                {/* Logo container */}
                <div className="relative flex items-center justify-center w-32 h-32 mb-6">
                  <Image
                    src={tech.logo} 
                    alt={tech.name}
                    width={128}
                    height={128}
                    className="object-contain w-full h-full transition-all duration-500 filter group-hover:drop-shadow-2xl group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const nextSibling = (e.target as HTMLImageElement).nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="items-center justify-center hidden w-full h-full">
                    <Code2 className={`w-20 h-20 ${tech.color}`} />
                  </div>
                </div>
                
                {/* Tech name */}
                <h3 className={`text-2xl font-bold ${tech.color} group-hover:text-white transition-colors duration-300`}>
                  {tech.name}
                </h3>

                {/* Animated underline */}
                <div className="w-0 h-1 mt-3 transition-all duration-500 rounded-full group-hover:w-full bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Infinite scrolling tech badges */}
        <div className="relative mt-20 overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0 gap-4">
                {['Tailwind CSS', 'SASS', 'TypeScript', 'GraphQL', 'Redis', 'Docker', 'AWS', 'Vercel', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Stripe'].map((tech, i) => (
                  <div 
                    key={i}
                    className="px-6 py-3 border border-gray-800 rounded-full bg-gray-900/50 backdrop-blur-sm whitespace-nowrap"
                  >
                    <span className="font-semibold text-gray-400">{tech}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TechnologyStackSection;