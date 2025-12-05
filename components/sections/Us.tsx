// Why Choose Us Section Component
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [counters, setCounters] = useState({
    strategy: 0,
    audience: 0,
    keyword: 0
  });

  // Animate counters when in view
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = { strategy: 70, audience: 98, keyword: 85 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          strategy: Math.floor(targets.strategy * progress),
          audience: Math.floor(targets.audience * progress),
          keyword: Math.floor(targets.keyword * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-emerald-600 font-semibold mb-6">
              <div className="w-12 h-0.5 bg-emerald-600"></div>
              Why Choose Us
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unlock The Potential Of Your Business.
            </h2>
            
            {/* Logo and Tagline Box */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-br-full"></div>
              
              <div className="relative flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Soft<span className="text-emerald-500">conic</span>
                  </h3>
                </div>
              </div>
              
              <div className="relative">
                <p className="text-white font-semibold text-lg mb-2">
                  Best Creative IT Agency And Solutions
                </p>
                <p className="text-emerald-400 text-lg font-bold">
                  Since 2005.
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We combine strategic thinking with technical excellence to deliver solutions that drive 
              measurable results. Our proven methodologies and commitment to quality ensure your project 
              succeeds from concept to deployment and beyond.
            </p>

            {/* #1 Badge and About More Button */}
            <div className="flex items-center gap-6 mb-8">
              <div className="text-8xl font-bold text-gray-200 leading-none">
                #1
              </div>
              
              <Link 
                href="/about"
                className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-gray-900 hover:border-emerald-500 hover:bg-emerald-50 transition-all group"
              >
                <ArrowRight className="w-6 h-6 text-gray-900 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-bold transition-colors group text-sm tracking-wider"
            >
              ABOUT MORE
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Content - Image and Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                width={700}
                height={500}
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Metrics Cards */}
            <div className="space-y-6">
              {/* Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28">
                    {/* Circular Progress */}
                    <svg className="transform -rotate-90 w-28 h-28">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 326.7" }}
                        animate={isInView ? { 
                          strokeDasharray: `${(counters.strategy / 100) * 326.7} 326.7` 
                        } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {counters.strategy}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Strategy</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Data-driven strategic planning aligned with your business objectives to ensure 
                    measurable success and sustainable growth.
                  </p>
                </div>
              </motion.div>

              {/* Audience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28">
                    <svg className="transform -rotate-90 w-28 h-28">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 326.7" }}
                        animate={isInView ? { 
                          strokeDasharray: `${(counters.audience / 100) * 326.7} 326.7` 
                        } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {counters.audience}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Audience</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Deep understanding of your target users and market dynamics to create solutions 
                    that truly resonate with your audience.
                  </p>
                </div>
              </motion.div>

              {/* Keyword */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28">
                    <svg className="transform -rotate-90 w-28 h-28">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="52"
                        stroke="#10b981"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 326.7" }}
                        animate={isInView ? { 
                          strokeDasharray: `${(counters.keyword / 100) * 326.7} 326.7` 
                        } : {}}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {counters.keyword}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Keyword</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Optimized for search visibility and digital discoverability to ensure your 
                    solution reaches the right audience at the right time.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}