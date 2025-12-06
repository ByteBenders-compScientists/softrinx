import React from 'react';
import { Smartphone, ArrowRight, Users, Clock, Shield, Award, Zap, Download } from 'lucide-react';

const MobileCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <div className="text-[15rem] font-bold text-gray-900 whitespace-nowrap">
          LAUNCH
        </div>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto text-center">
        <div className="mb-8">
          <Smartphone className="w-20 h-20 mx-auto text-emerald-600" />
        </div>
        
        <h2 className="mb-6 text-6xl font-bold text-gray-900 md:text-7xl">
          Ready to launch your <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">mobile app</span>?
        </h2>
        
        <p className="max-w-3xl mx-auto mb-12 text-2xl text-gray-600">
          From initial concept to App Store launch and beyond. Let's build a mobile experience that users love.
        </p>
        
        <div className="flex flex-col justify-center gap-6 mb-16 sm:flex-row">
          <button className="flex items-center justify-center gap-3 px-12 py-6 text-xl font-bold text-white transition-all duration-300 group bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:shadow-2xl hover:shadow-emerald-500/50 hover:scale-105">
            Start Your App
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="flex items-center justify-center gap-3 px-12 py-6 text-xl font-bold text-gray-900 transition-all duration-300 border-2 border-gray-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50">
            <Download className="w-6 h-6" />
            View Case Studies
          </button>
        </div>

        <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
          {[
            { icon: <Clock className="w-8 h-8" />, text: '2-4 Month Delivery', subtext: 'MVP to market fast' },
            { icon: <Shield className="w-8 h-8" />, text: 'App Store Approval', subtext: 'We handle submission' },
            { icon: <Award className="w-8 h-8" />, text: 'Post-Launch Support', subtext: '90 days included' },
            { icon: <Zap className="w-8 h-8" />, text: 'Free Updates', subtext: 'First 3 months' }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="inline-flex mb-3 transition-transform duration-300 text-emerald-600 group-hover:scale-110">{item.icon}</div>
              <div className="mb-1 font-bold text-gray-900">{item.text}</div>
              <div className="text-sm text-gray-500">{item.subtext}</div>
            </div>
          ))}
        </div>

        {/* App Store Badges */}
        <div className="flex justify-center gap-6 mt-16">
          <div className="flex items-center gap-3 px-8 py-4 transition-all duration-300 bg-gray-900 cursor-pointer rounded-xl hover:bg-gray-800 group">
            <div className="text-white">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400">Download on the</div>
              <div className="font-bold text-white">App Store</div>
            </div>
          </div>

          <div className="flex items-center gap-3 px-8 py-4 transition-all duration-300 bg-gray-900 cursor-pointer rounded-xl hover:bg-gray-800 group">
            <div className="text-white">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-400">GET IT ON</div>
              <div className="font-bold text-white">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileCTA;