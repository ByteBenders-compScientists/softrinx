import React from 'react';
import { Rocket, ArrowRight, Users, Clock, Shield, Award, Zap } from 'lucide-react';

const CTASectionWhite = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <div className="text-[15rem] font-bold text-gray-900 whitespace-nowrap">
          BUILD
        </div>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto text-center">
        <div className="mb-8">
          <Rocket className="w-20 h-20 mx-auto text-emerald-600" />
        </div>
        
        <h2 className="mb-6 text-6xl font-bold text-gray-900 md:text-7xl">
          Ready to build your <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">next big thing</span>?
        </h2>
        
        <p className="max-w-3xl mx-auto mb-12 text-2xl text-gray-600">
          Stop settling for mediocre web applications. Let&apos;s build something that actually makes an impact.
        </p>
        
        <div className="flex flex-col justify-center gap-6 mb-16 sm:flex-row">
          <button className="flex items-center justify-center gap-3 px-12 py-6 text-xl font-bold text-white transition-all duration-300 group bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
            Start Your Project
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center justify-center gap-3 px-12 py-6 text-xl font-bold text-gray-900 transition-all duration-300 border-2 border-gray-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50">
            <Users className="w-6 h-6" />
            View Our Work
          </button>
        </div>

        <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
          {[
            { icon: <Clock className="w-8 h-8" />, text: '24h Response Time', subtext: 'Always available' },
            { icon: <Shield className="w-8 h-8" />, text: 'NDA Protected', subtext: 'Your IP is safe' },
            { icon: <Award className="w-8 h-8" />, text: 'Fixed-Price Options', subtext: 'No surprises' },
            { icon: <Zap className="w-8 h-8" />, text: 'Rapid Deployment', subtext: 'Launch in weeks' }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="inline-flex mb-3 transition-transform duration-300 text-emerald-600 group-hover:scale-110">{item.icon}</div>
              <div className="mb-1 font-bold text-gray-900">{item.text}</div>
              <div className="text-sm text-gray-500">{item.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASectionWhite;