"use client";

import { useRef } from 'react';
import { Target, TrendingUp } from 'lucide-react';
import Numbers from './numbers';
import Image from 'next/image';

export default function Facts() {
  const sectionRef = useRef(null);

  return (
    <>
      {/* Numbers component - positioned at the top, overlapping */}
      <Numbers />
      
      <section 
        ref={sectionRef}
        className="relative pt-48 pb-32 bg-white overflow-hidden min-h-screen"
      >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16 185 129 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Large background text */}
            <div className="absolute -left-32 top-0 pointer-events-none w-full">
              <h3 className="text-[14rem] md:text-[16rem] lg:text-[18rem] font-black text-gray-900/5 tracking-tighter select-none whitespace-nowrap leading-none">
                Excellence
              </h3>
            </div>

            <div className="relative z-10">
              {/* Why Choose Us badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-emerald-500"></div>
                <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock The Potential<br />Of Your Business.
              </h2>

              {/* Company Info Box */}
              <div className="bg-white shadow-2xl rounded-lg p-8 mb-8 border border-dotted border-bottom-2 border-emerald-600">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">S</span>
                  </div>
                  <div>
                    <h3 className="text-emerald-500 font-bold text-xl">Softrinx</h3>
                    <p className="text-emerald-400 text-sm">Creative IT Agency And Solutions</p>
                    <p className="text-emerald-400 text-sm font-bold">Since 2024</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Transforming businesses through innovative software solutions. From startups to enterprises, 
                  we deliver cutting-edge technology that drives real growth and measurable results.
                </p>

                {/* #1 badge */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded flex items-center justify-center">
                    <span className="text-4xl font-black text-gray-700">#1</span>
                  </div>
                  <button className="px-6 py-3 bg-transparent border border-gray-700 hover:border-emerald-500 text-gray-600 rounded-full text-sm font-semibold transition-all duration-300">
                    ABOUT MORE
                  </button>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-gray-900">98%</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Client Retention</h4>
                    <p className="text-gray-500 text-sm">Long-term partnerships built on trust and results</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-gray-900">3x</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Faster Delivery</h4>
                    <p className="text-gray-500 text-sm">Efficient processes that accelerate time-to-market</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Proven ROI</h4>
                    <p className="text-gray-500 text-sm">Solutions that drive measurable business growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group">
            {/* Gradient background effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Geometric shapes behind image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
            
            {/* Border frame effect */}
            <div className="absolute inset-0 rounded-2xl border-4 border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-500"></div>
            
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/images/homee.png"
                alt="Team collaboration"
                width={600}
                height={800}
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-emerald-500 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-blue-500 rounded-bl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}