// components/sections/About.jsx
"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (imageRef.current) imageRef.current.classList.add('opacity-100', 'translate-x-0');
          if (contentRef.current) contentRef.current.classList.add('opacity-100', 'translate-x-0');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Image Side */}
          <div 
            ref={imageRef} 
            className="w-full transition-all duration-1000 -translate-x-16 opacity-0 lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute w-full h-full border-4 -bottom-6 -right-6 border-emerald-500 rounded-xl"></div>
              <div className="relative z-10 overflow-hidden shadow-2xl rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
                  alt="Our Team"
                  width={600}
                  height={400}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              <div className="absolute flex items-center p-4 bg-white rounded-lg shadow-lg -top-8 -left-8">
                <div className="p-3 mr-3 text-white rounded-full bg-emerald-500">
                  <Check size={24} />
                </div>
                <div>
                  <span className="block text-xl font-bold text-gray-800">10+</span>
                  <span className="text-sm text-gray-500">Years Experience</span>
                </div>
              </div>

              <div className="absolute p-4 bg-white rounded-lg shadow-lg bottom-8 -right-8">
                <div className="flex mb-2 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="block font-bold text-gray-800">Trusted by 200+ clients</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div 
            ref={contentRef} 
            className="w-full transition-all duration-1000 delay-300 translate-x-16 opacity-0 lg:w-1/2"
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Crafting Digital Excellence Since 2024
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              We&apos;re a team of passionate designers, developers, and strategists who love creating 
              exceptional digital experiences. Our mission is to help businesses transform their ideas 
              into powerful, user-friendly solutions.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
              {[
                'Cutting-edge technologies',
                'User-centered design',
                'Agile methodology',
                'Continuous delivery',
                'Scalable solutions',
                'Post-launch support'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 p-1 mr-3 rounded-full bg-emerald-100">
                    <Check size={18} className="text-emerald-600" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Web Development</span>
                <span className="font-medium text-emerald-600">95%</span>
              </div>
              <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="h-full rounded-full bg-emerald-600" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Mobile Development</span>
                <span className="font-medium text-emerald-600">90%</span>
              </div>
              <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="h-full rounded-full bg-emerald-600" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">UI/UX Design</span>
                <span className="font-medium text-emerald-600">92%</span>
              </div>
              <div className="w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="h-full rounded-full bg-emerald-600" style={{ width: '92%' }}></div>
              </div>
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;