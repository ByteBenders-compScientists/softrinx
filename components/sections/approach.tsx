"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function OurApproachSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-24 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            We deliver professional solutions tailored to meet your specific business needs and solve 
            challenges for your customers. Our services range from custom development to full-scale digital transformation.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                alt="Team collaboration"
                width={400}
                height={500}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock The Potential Of Your Business.
            </h3>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We believe in delivering tailored solutions that are designed to address your unique requirements. 
              We take the time to understand your business and provide personalized services that align with your goals.
            </p>

            {/* Two Column Features */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="flex-1 h-px bg-gray-700"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">Customized Solutions</h4>
                <p className="text-gray-400 text-sm">
                  Services are professional offerings provided to meet specific needs.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <div className="flex-1 h-px bg-gray-700"></div>
                </div>
                <h4 className="text-xl font-bold mb-3">Quality Reliability</h4>
                <p className="text-gray-400 text-sm">
                  Services are professional offerings provided to ensure excellence.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image and Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 flex flex-col items-center gap-8"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-full">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Professional workspace"
                width={400}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Years Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative"
            >
              <div className="w-48 h-48 rounded-full bg-emerald-500 flex flex-col items-center justify-center shadow-2xl">
                <div className="text-6xl font-bold text-white">10</div>
                <div className="text-xl text-white font-semibold">Years</div>
                {/* Decorative circles around */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-300 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}