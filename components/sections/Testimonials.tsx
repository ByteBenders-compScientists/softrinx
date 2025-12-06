"use client";

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    text: "I Cannot Express Enough How Satisfied I Am With The Web Development Services Provided By Softrinx. They Are Very Good And User Friendly And They Work Very Nice And Creative",
    author: "Watson Bekaryn",
    role: "CEO At atlantis.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    text: "Outstanding Experience! The Team At Softrinx Delivered Beyond Our Expectations. Their Technical Expertise And Attention To Detail Made Our Project A Huge Success",
    author: "Sarah Mitchell",
    role: "CTO At TechVision Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    text: "Exceptional Quality And Professional Service. Softrinx Transformed Our Digital Presence With Their Innovative Solutions. Highly Recommend Their Development Services",
    author: "Michael Chen",
    role: "Founder Of DataFlow Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    text: "Working With Softrinx Was A Game Changer For Our Business. Their Custom Software Solution Increased Our Efficiency By 300% And The Support Has Been Outstanding",
    author: "Emily Rodriguez",
    role: "Operations Director At Global Ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    rating: 5
  },
  {
    text: "The Mobile App They Built For Us Is Simply Amazing. Intuitive Design, Flawless Performance, And Delivered On Time. Softrinx Is Our Go-To Development Partner",
    author: "James Anderson",
    role: "Product Manager At InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5
  }
];

const partners = [
  { name: 'Healthmaster', logo: '/images/images/hm.png' },
  { name: 'Uamas', logo: '/images/images/uamas.png' },
    { name: 'Alx', logo: '/images/images/alx.png' },
    { name: 'DjAfroStreamBox', logo: '/images/images/afro.png' },

];

// Profile photo positions (scattered around the screen)
const profilePositions = [
  { top: '15%', left: '8%', size: 'w-16 h-16', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
  { top: '25%', right: '12%', size: 'w-20 h-20', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
  { top: '45%', left: '5%', size: 'w-14 h-14', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop' },
  { top: '55%', right: '8%', size: 'w-18 h-18', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop' },
  { top: '70%', left: '10%', size: 'w-16 h-16', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop' },
  { top: '35%', left: '15%', size: 'w-12 h-12', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { top: '60%', right: '15%', size: 'w-14 h-14', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop' },
  { top: '80%', right: '20%', size: 'w-16 h-16', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Scattered profile photos with real images */}
      {profilePositions.map((position, index) => (
        <div
          key={index}
          className={`absolute ${position.size} rounded-full border-2 border-emerald-500/30 backdrop-blur-sm overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-lg hover:shadow-emerald-500/50`}
          style={{
            top: position.top,
            left: position.left,
            right: position.right,
            animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.3}s`
          }}
        >
          <img 
            src={position.image} 
            alt={`Profile ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Partners carousel at top */}
        <div className="mb-20">
          {/* Header with background text effect */}
          <div className="relative mb-10 text-center">
            <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2">
              <h3 className="text-[10rem] md:text-[14rem] lg:text-[18rem] font-black text-gray-800/20 tracking-tighter select-none whitespace-nowrap text-center leading-none">
                Collaborations
              </h3>
            </div>
            
            <h3 className="relative pt-4 text-xl font-bold tracking-tight text-white md:text-2xl">
              Our Collaborations
            </h3>
          </div>
          
          <div className="relative py-6 overflow-hidden bg-gray-800/20">
            <div className="flex animate-scroll">
              {partners.concat(partners).map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-12 min-w-[180px]  hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                >
                  <Image
                    src={partner.logo} 
                    alt={partner.name}
                    width={150}
                    height={48}
                    className="object-contain w-auto h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main testimonial content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with large background text effect */}
          <div className="relative mb-12">
            <div className="absolute w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2">
              <h3 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-gray-800/20 tracking-tighter select-none whitespace-nowrap text-center leading-none">
                Appreciations
              </h3>
            </div>
            
            <h2 className="relative pt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Appreciations
            </h2>
          </div>

          {/* Trustpilot stars */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-1 bg-emerald-600 px-3 py-1.5 rounded">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-sm font-bold text-white">Trustpilot</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              ))}
            </div>
          </div>

          {/* Testimonial text with animation */}
          <div className="mb-10 min-h-[200px] flex items-center justify-center">
            <p 
              className={`text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              &ldquo;{currentTestimonial.text}&rdquo;
            </p>
          </div>

          {/* Author info with profile image and animation */}
          <div 
            className={`flex flex-col items-center transition-all duration-500 ${
              isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}
          >
            <div className="w-20 h-20 mb-4 overflow-hidden rounded-full shadow-lg border-3 border-emerald-500 shadow-emerald-500/30">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.author}
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="mb-1 text-2xl font-bold text-white">
              {currentTestimonial.author}
            </h4>
            <p className="font-medium text-emerald-400">
              {currentTestimonial.role}
            </p>
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-2.5 bg-emerald-500'
                    : 'w-2.5 h-2.5 bg-gray-600 hover:bg-emerald-500/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          50% {
            transform: translateY(-5px) rotate(-2deg);
          }
          75% {
            transform: translateY(-15px) rotate(1deg);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}