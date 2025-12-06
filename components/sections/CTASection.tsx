"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle gradient accents */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Ready To Build
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Something Great?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and bring your vision to life with cutting-edge technology and expert craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mb-20">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Link>
          </div>

          {/* Simple features */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Free Consultation",
                description: "30-minute strategy call to discuss your goals"
              },
              {
                title: "Custom Proposal",
                description: "Detailed roadmap with timeline and pricing"
              },
              {
                title: "No Commitment",
                description: "Just honest advice and actionable insights"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center"
                style={{
                  animation: `fadeIn 0.6s ease forwards ${idx * 0.2}s`,
                  opacity: 0
                }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}