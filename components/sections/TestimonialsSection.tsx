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
    <section ref={sectionRef} className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Happy Customers</h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Don't just take our word for it—hear what our clients have to say about their experience 
              working with Softrinx and the results we've delivered.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex gap-4"
          >
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
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
                className="min-w-full flex justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full max-w-4xl"
                >
                  {/* Testimonial Card */}
                  <div className="bg-gray-900 rounded-3xl p-10 md:p-12 shadow-2xl relative">
                    {/* Platform Header */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800">
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
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {testimonial.author}
                        </h4>
                        <p className="text-emerald-400 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-gray-400 text-sm">{testimonial.date}</p>
                        <p className="text-gray-500 text-xs">{testimonial.time}</p>
                      </div>
                    </div>
                  </div>

                  {/* Author Image - Centered Below Card */}
                  <div className="flex justify-center -mt-12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={100}
                        height={100}
                        className="relative w-24 h-24 rounded-full border-4 border-gray-950 object-cover shadow-xl"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
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