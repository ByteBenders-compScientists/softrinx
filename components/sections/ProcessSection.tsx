"use client";

import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals and market landscape to craft a winning strategy."
    },
    {
      icon: PenTool,
      title: "Design & Prototyping",
      description: "Our designers create stunning, user-centric interfaces that bring your vision to life."
    },
    {
      icon: Code2,
      title: "Development",
      description: "Expert developers build your solution using cutting-edge technologies and best practices."
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "We deploy your solution and continuously optimize for peak performance."
    }
  ];

  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Large background text - static, no animation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-bold text-white/5 whitespace-nowrap pointer-events-none">
          OUR PROCESS
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-emerald-400">Process</span>
          </h2>
          <p className="text-xl text-gray-400">
            A proven methodology that delivers exceptional results.
          </p>
        </div>

        {/* Steps Grid - Simple, clean */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group"
                style={{
                  animation: `fadeIn 0.6s ease forwards ${idx * 0.15}s`,
                  opacity: 0
                }}
              >
                <div className="relative">
                  {/* Step number - large, behind */}
                  <div className="absolute -top-4 -left-2 text-7xl font-bold text-emerald-500/10">
                    0{idx + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-6 inline-flex p-4 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
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