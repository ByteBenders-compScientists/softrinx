'use client'
import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Shield, Users, Globe, Download, Star, TrendingUp, Layers, Code2, Cpu, Battery, Wifi, Bell, Heart, ShoppingCart, MessageCircle, Camera, ArrowRight, CheckCircle2, Award, Clock, Sparkles, Terminal } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import MobileTechStack from '@/components/sections/MobileStack';
import MobileCapabilities from '@/components/sections/Capabilities';
import MobileCTA from '@/components/sections/CtaMobile';
import MobileFeatures from '@/components/sections/MobileFeatures';
import MobileShowcase from '@/components/sections/MobileShow';


const MobileAppDevPage = () => {
  const [activeApp, setActiveApp] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveApp((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const appShowcase = [
    {
      name: 'E-Commerce',
      screens: [
        { icon: <ShoppingCart className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
        { icon: <Heart className="w-8 h-8" />, color: 'from-red-500 to-pink-500' },
        { icon: <Star className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' }
      ]
    },
    {
      name: 'Social Media',
      screens: [
        { icon: <MessageCircle className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
        { icon: <Camera className="w-8 h-8" />, color: 'from-purple-500 to-blue-500' },
        { icon: <Users className="w-8 h-8" />, color: 'from-emerald-500 to-teal-500' }
      ]
    },
    {
      name: 'Business',
      screens: [
        { icon: <TrendingUp className="w-8 h-8" />, color: 'from-emerald-500 to-green-500' },
        { icon: <Layers className="w-8 h-8" />, color: 'from-blue-500 to-indigo-500' },
        { icon: <Cpu className="w-8 h-8" />, color: 'from-gray-700 to-gray-900' }
      ]
    }
  ];

  const stats = [
    { label: 'Apps Launched', value: '150+' },
    { label: 'Total Downloads', value: '10M+' },
    { label: 'App Store Rating', value: '4.8★' },
    { label: 'Active Users', value: '2M+' }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />

      {/* Hero Section with Phone Mockups - Dark */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-950">
        {/* Massive background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
          <div className="text-[20rem] font-bold text-white whitespace-nowrap">
            MOBILE
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
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">Mobile App Development</span>
              </div>
              
              <h1 className="mb-6 text-6xl font-bold leading-tight text-white md:text-7xl">
                Apps that users
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text">
                  can't stop using
                </span>
              </h1>
              
              <p className="mb-8 text-xl leading-relaxed text-gray-400">
                Native iOS and Android apps built with Flutter, React Native, and Dart. From concept to App Store launch, we create mobile experiences that engage millions.
              </p>

              <div className="mb-12">
                <div className="mb-4 text-sm font-semibold tracking-wider uppercase text-emerald-400">Technologies We Master</div>
                <div className="flex flex-wrap gap-3">
                  {['Flutter', 'React Native', 'Dart', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'GraphQL'].map((tech, i) => (
                    <div key={i} className="px-4 py-2 text-sm font-medium transition-all duration-300 bg-gray-900 border rounded-lg border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
                  Build Your App
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-4 font-bold text-white transition-all duration-300 border-2 border-gray-700 rounded-lg hover:border-emerald-500 hover:bg-emerald-500/10">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Phone Mockups */}
            <div className="relative hidden lg:block">
              <div className="relative h-[600px] flex items-center justify-center gap-4">
                {/* Center Phone - Active */}
                <div className="relative z-20 transition-all duration-500" style={{ transform: 'scale(1.1)' }}>
                  <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl shadow-emerald-500/20 overflow-hidden relative">
                    {/* Phone notch */}
                    <div className="absolute top-0 z-10 w-32 h-6 transform -translate-x-1/2 left-1/2 bg-gray-950 rounded-b-3xl"></div>
                    
                    {/* Screen content */}
                    <div className={`absolute inset-2 bg-gradient-to-br ${appShowcase[activeApp].screens[1].color} rounded-[2.5rem] flex items-center justify-center`}>
                      <div className="text-white">
                        {appShowcase[activeApp].screens[1].icon}
                      </div>
                    </div>

                    {/* Status bar icons */}
                    <div className="absolute z-20 flex items-center justify-between px-4 text-xs text-white top-2 left-16 right-4">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-4 h-3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Left Phone */}
                <div className="absolute left-0 z-10 transition-all duration-500 opacity-60" style={{ transform: 'scale(0.85) translateX(-20px) rotate(-5deg)' }}>
                  <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 z-10 w-32 h-6 transform -translate-x-1/2 left-1/2 bg-gray-950 rounded-b-3xl"></div>
                    <div className={`absolute inset-2 bg-gradient-to-br ${appShowcase[activeApp].screens[0].color} rounded-[2.5rem] flex items-center justify-center`}>
                      <div className="text-white">
                        {appShowcase[activeApp].screens[0].icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Phone */}
                <div className="absolute right-0 z-10 transition-all duration-500 opacity-60" style={{ transform: 'scale(0.85) translateX(20px) rotate(5deg)' }}>
                  <div className="w-[280px] h-[560px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-xl overflow-hidden relative">
                    <div className="absolute top-0 z-10 w-32 h-6 transform -translate-x-1/2 left-1/2 bg-gray-950 rounded-b-3xl"></div>
                    <div className={`absolute inset-2 bg-gradient-to-br ${appShowcase[activeApp].screens[2].color} rounded-[2.5rem] flex items-center justify-center`}>
                      <div className="text-white">
                        {appShowcase[activeApp].screens[2].icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* App type indicator */}
              <div className="mt-8 text-center">
                <div className="mb-3 text-xl font-bold text-emerald-400">{appShowcase[activeApp].name} Apps</div>
                <div className="flex justify-center gap-2">
                  {appShowcase.map((_, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-300 ${activeApp === i ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-700'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-24 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <MobileCapabilities/>
      <MobileTechStack/>
      <MobileFeatures/>
      <MobileShowcase/>
      <MobileCTA/>

      <Footer />
    </div>
  );
};

export default MobileAppDevPage;