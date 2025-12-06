import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Users, Code } from 'lucide-react';

export default function CorporateHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[75vh] bg-slate-950 overflow-hidden">
      {/* Gradient overlay that darkens toward bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      <div className="container relative z-10 px-6 pt-32 pb-20 mx-auto lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Content - 7 columns */}
          <div className="space-y-6 lg:col-span-7">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
                

 
We Build{' '}
                <span className="text-teal-400">Enterprise-grade software solutions that</span>{' '}
                transform your business. 
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              For over a decade, we&apos;ve been helping businesses transform their ideas into powerful, scalable, and user-friendly applications that drive real results.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group flex items-center gap-3 px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="flex items-center gap-3 px-8 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/10 hover:border-teal-400/50 transition-all duration-300">
                Our Services
              </button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-teal-400" />
                  <div className="text-2xl font-bold text-white">10+</div>
                </div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-teal-400" />
                  <div className="text-2xl font-bold text-white">500+</div>
                </div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-teal-400" />
                  <div className="text-2xl font-bold text-white">200+</div>
                </div>
                <div className="text-sm text-slate-400">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Image Layout */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative h-[500px]">
              {/* Large main image - diagonal cut */}
              <div 
                className="absolute top-0 right-0 w-[70%] h-[340px] overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]"
                style={{ 
                  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                  transform: `translateY(${scrollY * 0.06}px)`
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=700&fit=crop" 
                  alt="Workspace"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent" />
              </div>

              {/* Small accent image - bottom left */}
              <div 
                className="absolute bottom-0 left-0 w-[55%] h-[180px] rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-105 shadow-2xl border-4 border-slate-900"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                
                {/* Floating badge */}
                <div className="absolute px-4 py-2 text-sm font-bold text-white bg-teal-500 rounded-full shadow-lg -top-3 -right-3">
                  10+ Years
                </div>
              </div>

              {/* Decorative accent line */}
              <div className="absolute top-[160px] left-[20%] w-24 h-1 bg-gradient-to-r from-teal-400 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom darkening gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}