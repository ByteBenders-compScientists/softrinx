import React, { useState } from 'react';
import { Code2, Smartphone, Layers } from 'lucide-react';

const MobileTechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = {
    crossPlatform: [
      { name: 'Flutter', logo: '/images/images/flutter.png', color: 'from-blue-400 to-cyan-500', desc: 'Google\'s UI toolkit for beautiful native apps' },
      { name: 'React Native', logo: '/images/images/react.png', color: 'from-cyan-500 to-blue-500', desc: 'Build native apps using React' },
      { name: 'Dart', logo: '/images/images/dart.png', color: 'from-emerald-400 to-blue-500', desc: 'Language powering Flutter apps' }
    ],
    native: [
      { name: 'Swift', logo: '/images/images/swift.png', color: 'from-orange-500 to-red-500', desc: 'Native iOS development' },
      { name: 'Kotlin', logo: '/images/images/kotlin.png', color: 'from-purple-500 to-pink-500', desc: 'Modern Android development' },
      { name: 'SwiftUI', logo: '/images/images/swiftui.png', color: 'from-blue-500 to-indigo-600', desc: 'Declarative UI for iOS' }
    ],
    backend: [
      { name: 'Firebase', logo: '/images/images/firebase.png', color: 'from-yellow-500 to-orange-500', desc: 'Real-time database & auth' },
      { name: 'GraphQL', logo: '/images/images/graphql.png', color: 'from-pink-500 to-purple-500', desc: 'Efficient API queries' },
      { name: 'Redux', logo: '/images/images/redux.png', color: 'from-purple-600 to-purple-800', desc: 'State management' }
    ]
  };

  const tabs = [
    { label: 'Cross-Platform', key: 'crossPlatform', icon: <Layers className="w-5 h-5" /> },
    { label: 'Native', key: 'native', icon: <Smartphone className="w-5 h-5" /> },
    { label: 'Backend & APIs', key: 'backend', icon: <Code2 className="w-5 h-5" /> }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <div className="text-[20rem] font-bold text-white whitespace-nowrap">
          STACK
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 blur-3xl"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-400">Mobile Technologies</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h2 className="mb-6 text-6xl font-bold text-white md:text-7xl">
            Powered by <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text">cutting-edge</span> tech
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-400">
            We use the frameworks and tools that power apps used by billions worldwide.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === i
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-2xl shadow-emerald-500/50 scale-105'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {technologies[tabs[activeTab].key].map((tech, i) => (
            <div
              key={i}
              className="relative p-8 transition-all duration-500 bg-gray-900 border border-gray-800 group rounded-2xl hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="relative object-contain w-full h-full transition-transform duration-500 filter group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="items-center justify-center hidden w-full h-full">
                    <Code2 className="w-16 h-16 text-emerald-400" />
                  </div>
                </div>
                
                <h3 className="mb-3 text-2xl font-bold text-center text-white transition-colors group-hover:text-emerald-400">{tech.name}</h3>
                <p className="text-sm leading-relaxed text-center text-gray-400">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid gap-6 mt-20 md:grid-cols-4">
          {[
            { number: '10M+', label: 'Downloads', sublabel: 'Across all platforms' },
            { number: '4.8★', label: 'Average Rating', sublabel: 'App Store & Play Store' },
            { number: '99.9%', label: 'Crash-Free', sublabel: 'Sessions tracked' },
            { number: '<100ms', label: 'Response Time', sublabel: 'API performance' }
          ].map((stat, i) => (
            <div key={i} className="p-6 text-center transition-all duration-300 bg-gray-900 border border-gray-800 rounded-xl hover:border-emerald-500/50">
              <div className="mb-2 text-4xl font-bold text-emerald-400">{stat.number}</div>
              <div className="mb-1 font-semibold text-white">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileTechStack;