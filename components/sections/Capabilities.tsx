import React, { useState } from 'react';
import { Smartphone, Battery, Zap, Shield, Globe, Bell, CheckCircle2 } from 'lucide-react';

const MobileCapabilities = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Native Performance',
      metric: '60 FPS',
      description: 'Smooth Animations',
      detail: 'Buttery smooth performance that feels native on iOS and Android'
    },
    {
      icon: <Battery className="w-12 h-12" />,
      title: 'Battery Optimized',
      metric: '40%',
      description: 'Less Drain',
      detail: 'Efficient code that extends battery life without compromising features'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Lightning Fast',
      metric: '<1s',
      description: 'Load Time',
      detail: 'Instant app launches and seamless navigation between screens'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Bank-Grade Security',
      metric: '256-bit',
      description: 'Encryption',
      detail: 'End-to-end encryption protecting user data at every level'
    }
  ];

  const features = [
    {
      title: 'Cross-Platform Development',
      description: 'One codebase for iOS and Android. Deploy faster, maintain easier, save budget.',
      apps: ['E-Commerce', 'Social Media', 'Healthcare', 'Finance']
    },
    {
      title: 'Real-Time Features',
      description: 'Push notifications, live chat, real-time updates. Keep users engaged 24/7.',
      apps: ['Live Tracking', 'Messaging', 'Collaboration', 'Gaming']
    },
    {
      title: 'Offline Functionality',
      description: 'Your app works even without internet. Sync seamlessly when back online.',
      apps: ['Reading Apps', 'Notes', 'Media Players', 'Productivity']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-semibold tracking-wider uppercase text-emerald-600">What We Deliver</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Built for <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">mobile-first</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Every pixel optimized for touch. Every animation butter-smooth. Every feature designed for mobile users.
          </p>
        </div>

        <div className="grid gap-6 mb-20 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative p-8 overflow-hidden transition-all duration-500 border border-gray-100 group bg-gray-50 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-emerald-200"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="mb-4 transition-all duration-300 transform text-emerald-600 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{item.detail}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-emerald-600">{item.metric}</span>
                  <span className="text-sm text-gray-500">{item.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="p-8 transition-all duration-300 border border-gray-200 group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl hover:border-emerald-300">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{feature.description}</p>
              
              <div className="space-y-2">
                {feature.apps.map((app, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileCapabilities;