import React, { useState, useEffect, useRef } from 'react';

export default function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const technologies = [
    { name: "React", logo: "/images/images/react.png" },
    { name: "Next.js", logo: "/images/images/next.png" },
    { name: "TypeScript", logo: "/images/images/typescript.png" },
    { name: "Node.js", logo: "/images/images/node.png" },
    { name: "Python", logo: "/images/images/python.png" },
    { name: "PostgreSQL", logo: "/images/images/postgresql.png" },
    { name: "MongoDB", logo: "/images/images/mongodb.png" },
    { name: "AWS", logo: "/images/images/aws.png" },
    { name: "Docker", logo: "/images/images/docker.png" },
    { name: "Kubernetes", logo: "/images/images/kubernetes.png" },
    { name: "TensorFlow", logo: "/images/images/tensorflow.png" },
    { name: "GraphQL", logo: "/images/images/graphql.png" },
    { name: "Redis", logo: "/images/images/redis.png" },
    { name: "Vue.js", logo: "/images/images/vue.png" },
    { name: "Tailwind", logo: "/images/images/tailwind.png" }
  ];

  const positions = [
    { top: "5%", left: "8%", size: 90 },
    { top: "2%", left: "28%", size: 80 },
    { top: "12%", left: "48%", size: 100 },
    { top: "6%", left: "68%", size: 85 },
    { top: "8%", left: "88%", size: 75 },
    { top: "28%", left: "5%", size: 95 },
    { top: "32%", left: "22%", size: 80 },
    { top: "35%", left: "42%", size: 105 },
    { top: "30%", left: "65%", size: 90 },
    { top: "32%", left: "85%", size: 80 },
    { top: "55%", left: "10%", size: 85 },
    { top: "60%", left: "30%", size: 95 },
    { top: "58%", left: "52%", size: 80 },
    { top: "62%", left: "72%", size: 100 },
    { top: "56%", left: "90%", size: 75 }
  ];

  return (
    <section ref={sectionRef} className="relative py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Magnetic cursor effect */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Large background text */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 text-[220px] font-black text-white/3 whitespace-nowrap pointer-events-none select-none">
          TECH STACK
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20">
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Technology Arsenal</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Powered By{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              Modern Tech
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, future-proof solutions that drive innovation.
          </p>
        </div>

        {/* Floating Tech Logos - Interactive Galaxy */}
        <div className="relative h-[750px] max-w-7xl mx-auto">
          {/* Connection lines on hover */}
          {hoveredTech !== null && technologies.map((tech, idx) => {
            if (idx === hoveredTech) return null;
            const hoveredPos = positions[hoveredTech];
            const currentPos = positions[idx];
            
            return (
              <svg key={`line-${idx}`} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <line
                  x1={`${hoveredPos.left}`}
                  y1={`${hoveredPos.top}`}
                  x2={`${currentPos.left}`}
                  y2={`${currentPos.top}`}
                  stroke="rgba(16, 185, 129, 0.2)"
                  strokeWidth="1"
                  className="animate-pulse"
                />
              </svg>
            );
          })}

          {technologies.map((tech, idx) => {
            const pos = positions[idx];
            const isHovered = hoveredTech === idx;
            
            return (
              <div
                key={tech.name}
                className="absolute cursor-pointer group"
                style={{
                  top: pos.top,
                  left: pos.left,
                  animation: `orbit${idx % 3} ${8 + (idx % 4)}s ease-in-out infinite`,
                  animationDelay: `${idx * 0.2}s`,
                  zIndex: isHovered ? 50 : 10
                }}
                onMouseEnter={() => setHoveredTech(idx)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div 
                  className="relative transition-all duration-500"
                  style={{
                    transform: isHovered 
                      ? `scale(1.4)` 
                      : `scale(1)`,
                  }}
                >
                  {/* Ripple effect on hover */}
                  {isHovered && (
                    <>
                      <div className="absolute inset-0 rounded-full animate-ping bg-emerald-500/20" style={{
                        width: pos.size * 1.5,
                        height: pos.size * 1.5,
                        left: -pos.size * 0.25,
                        top: -pos.size * 0.25
                      }} />
                      <div className="absolute inset-0 rounded-full animate-pulse bg-emerald-400/30 blur-2xl" style={{
                        width: pos.size * 2,
                        height: pos.size * 2,
                        left: -pos.size * 0.5,
                        top: -pos.size * 0.5
                      }} />
                    </>
                  )}

                  {/* Logo Image */}
                  <div 
                    className="relative backdrop-blur-sm rounded-2xl p-4 transition-all duration-500"
                    style={{ 
                      width: pos.size, 
                      height: pos.size,
                      background: isHovered 
                        ? 'rgba(16, 185, 129, 0.15)'
                        : 'rgba(15, 23, 42, 0.6)',
                      border: isHovered ? '2px solid rgba(16, 185, 129, 0.5)' : '2px solid rgba(16, 185, 129, 0.1)',
                      boxShadow: isHovered ? '0 0 40px rgba(16, 185, 129, 0.3)' : 'none'
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain transition-all duration-500"
                      style={{
                        filter: isHovered ? 'brightness(1.2) drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))' : 'brightness(0.9)'
                      }}
                    />
                  </div>

                  {/* Tech name label */}
                  <div 
                    className={`absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg whitespace-nowrap font-bold text-sm transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 1), rgba(13, 148, 136, 1))',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    {tech.name}
                  </div>

                  {/* Particle effect */}
                  {isHovered && (
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400"
                          style={{
                            top: '50%',
                            left: '50%',
                            animation: `particle ${1 + i * 0.1}s ease-out forwards`,
                            transform: `rotate(${i * 45}deg)`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 max-w-5xl mx-auto">
          {[
            { value: "15+", label: "Technologies" },
            { value: "500+", label: "Projects Built" },
            { value: "99.9%", label: "Uptime" },
            { value: "100%", label: "Satisfaction" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="relative inline-block">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-all duration-500" />
              </div>
              <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit0 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, -25px); }
        }
        @keyframes orbit1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes orbit2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(80px); }
        }
        @keyframes particle {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) translateY(-50px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}