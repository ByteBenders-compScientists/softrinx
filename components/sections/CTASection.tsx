"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Subtle gradient accents */}
      <div className="absolute w-64 h-64 rounded-full top-20 left-20 bg-emerald-400/10 blur-3xl" />
      <div className="absolute rounded-full bottom-20 right-20 w-80 h-80 bg-teal-400/10 blur-3xl" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="mb-8 text-5xl font-bold text-gray-900 md:text-7xl">
            Ready To Build
            <span className="block mt-2 text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              Something Great?
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed text-gray-600">
            Let&apos;s discuss your project and bring your vision to life with cutting-edge technology and expert craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-full shadow-lg group bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold transition-all duration-300 bg-white border-2 rounded-full text-emerald-600 border-emerald-600 hover:bg-emerald-50"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Link>
          </div>

          {/* Simple features */}
          <div className="grid gap-12 md:grid-cols-3">
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
                <h3 className="mb-2 text-xl font-bold text-gray-900">
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