// Happy Customers Testimonials Section
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      platform: "Trustpilot",
      logo: "https://cdn.brandfolder.io/D78R4GYX/as/pl8tqb-5qo8xh-3me6l4/Trustpilot_Logo_White.svg",
      rating: 5,
      text: "Integer purus odio, placerat nec rhoncus in, ullamcorper nec dolor. Curabitur ut diam sem. Mauris suscipit velit quis felis iaculis, nec suscipit magna volutpat. Praesent nec neque at dolor venenatis consectetur european gon Donec lacinia placerat felis non aliquam.",
      author: "Mateo Daniel",
      role: "CEO At atlantis.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80",
      date: "May 9, 2023",
      time: "10:30 PM"
    },
    {
      platform: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
      rating: 5,
      text: "Working with Softrinx transformed our entire digital infrastructure. Their expertise in cloud solutions helped us reduce costs by 40% while improving performance. The team's dedication and professionalism exceeded all our expectations.",
      author: "Sarah Mitchell",
      role: "CTO At techflow.io",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80",
      date: "Nov 15, 2024",
      time: "2:45 PM"
    },
    {
      platform: "Trustpilot",
      logo: "https://cdn.brandfolder.io/D78R4GYX/as/pl8tqb-5qo8xh-3me6l4/Trustpilot_Logo_White.svg",
      rating: 5,
      text: "Exceptional service from start to finish. The Softrinx team took time to understand our unique challenges and delivered a custom solution that perfectly fit our needs. Our customer satisfaction scores have increased by 35% since launch.",
      author: "Marcus Chen",
      role: "Product Director At innovate.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80",
      date: "Oct 28, 2024",
      time: "4:20 PM"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden text-white bg-gray-950">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Happy Customers</h2>
            <p className="max-w-2xl text-lg text-gray-400">
              Don&apos;t just take our word for it—hear what our clients have to say about their experience 
              working with Softrinx and the results we&apos;ve delivered.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden gap-4 md:flex"
          >
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full border-emerald-500 hover:bg-emerald-500 group"
            >
              <ChevronLeft className="w-5 h-5 transition-colors text-emerald-500 group-hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full border-emerald-500 hover:bg-emerald-500 group"
            >
              <ChevronRight className="w-5 h-5 transition-colors text-emerald-500 group-hover:text-white" />
            </button>
          </motion.div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="flex gap-8 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex justify-center min-w-full"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full max-w-4xl"
                >
                  {/* Testimonial Card */}
                  <div className="relative p-10 bg-gray-900 shadow-2xl rounded-3xl md:p-12">
                    {/* Platform Header */}
                    <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-800">
                      <div className="flex items-center gap-4">
                        {testimonial.platform === "Trustpilot" ? (
                          <div className="flex items-center gap-2">
                            <Star className="w-6 h-6 fill-emerald-400 text-emerald-400" />
                            <span className="text-2xl font-bold text-white">Trustpilot</span>
                          </div>
                        ) : (
                          <span className="text-2xl font-bold">
                            <span className="text-blue-500">G</span>
                            <span className="text-red-500">o</span>
                            <span className="text-yellow-500">o</span>
                            <span className="text-blue-500">g</span>
                            <span className="text-green-500">l</span>
                            <span className="text-red-500">e</span>
                          </span>
                        )}
                      </div>
                      
                      {/* Star Rating */}
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="mb-8 text-lg leading-relaxed text-gray-300">
                      &ldquo{testimonial.text}&rdquo;
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="mb-1 text-xl font-bold text-white">
                          {testimonial.author}
                        </h4>
                        <p className="font-medium text-emerald-400">
                          {testimonial.role}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-400">{testimonial.date}</p>
                        <p className="text-xs text-gray-500">{testimonial.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Author Image - Centered Below Card */}
                  <div className="flex justify-center -mt-12">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl"></div>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={100}
                        height={100}
                        className="relative object-cover w-24 h-24 border-4 rounded-full shadow-xl border-gray-950"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-12 md:hidden">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full border-emerald-500 hover:bg-emerald-500 group"
            >
              <ChevronLeft className="w-5 h-5 transition-colors text-emerald-500 group-hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full border-emerald-500 hover:bg-emerald-500 group"
            >
              <ChevronRight className="w-5 h-5 transition-colors text-emerald-500 group-hover:text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide 
                    ? 'w-8 h-3 bg-emerald-500' 
                    : 'w-3 h-3 bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Optional: Auto-scroll functionality */}
        {/* Add this useEffect if you want auto-scrolling */}
        {/* 
        useEffect(() => {
          const timer = setInterval(() => {
            nextSlide();
          }, 5000); // Change slide every 5 seconds
          
          return () => clearInterval(timer);
        }, [currentSlide]);
        */}
      </div>
    </section>
  );
}