"use client";

import { useState } from 'react';
import { Microscope, Briefcase, Shield, CheckCircle2, Phone, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Microscope className="w-10 h-10" />,
    title: "Research & Discovery",
    description: "We dive deep into your business needs, analyzing market trends and user behaviors to craft data-driven solutions that give you a competitive edge."
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Industry Expertise",
    description: "Our seasoned team brings years of experience across fintech, healthcare, e-commerce, and enterprise sectors to deliver solutions that work."
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control ensure your software is secure, scalable, and performs flawlessly under real-world conditions."
  }
];

const features = [
  { text: "Agile Development", color: "text-emerald-600" },
  { text: "Scalable Architecture", color: "text-emerald-600" },
  { text: "Modern Tech Stack", color: "text-emerald-600" },
  { text: "24/7 Support", color: "text-emerald-600" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyOrganization: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* What We Do Section with animated background text */}
        <div className="relative mb-20 text-center">
          {/* Large background "Services" text - animated */}
          <div className="absolute w-full overflow-hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none left-1/2 top-1/2">
            <h3 className="text-[4rem] md:text-[14rem] lg:text-[14rem] font-black text-gray-200/40 tracking-tighter select-none whitespace-nowrap text-center leading-none animate-pulse">
              What we Do
            </h3>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase text-emerald-600">What We Offer</span>
              <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              What We Do
            </h2>
          </div>
        </div>

        {/* Service Cards with stagger animation */}
        <div className="grid grid-cols-1 gap-8 mb-24 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center transition-all duration-500 ease-out group hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-white transition-all duration-300 rounded-full bg-emerald-500 group-hover:bg-emerald-600 group-hover:shadow-xl group-hover:shadow-emerald-500/30">
                {service.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Creative Business Section with slide-in animation */}
        <div className="grid items-center grid-cols-1 gap-12 mb-24 lg:grid-cols-2">
          {/* Image */}
          <div className="relative group" style={{ animation: 'slideInLeft 0.8s ease-out' }}>
            <div className="absolute inset-0 transition-all duration-500 rounded-lg bg-emerald-500/20 blur-xl group-hover:blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Softrinx team collaboration"
              className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div style={{ animation: 'slideInRight 0.8s ease-out' }}>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Transform Your Vision Into Powerful Software Solutions
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              At Softrinx, we combine cutting-edge technology with deep industry expertise to build software that drives real business results. From enterprise applications to mobile experiences, we deliver solutions that scale with your ambitions.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 transition-transform duration-300 group hover:translate-x-2"
                  style={{ animation: `fadeIn 0.5s ease-out ${0.9 + index * 0.1}s both` }}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-5 h-5 transition-transform duration-300 rounded-full bg-emerald-500 group-hover:scale-110">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className={`font-semibold ${feature.color}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section with background text effect */}
        <div className="relative">
          {/* Large background "Contact" text - animated */}
          <div className="absolute top-0 w-full overflow-hidden -translate-x-1/2 pointer-events-none left-1/2">
            <h3 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-gray-200/30 tracking-tighter select-none whitespace-nowrap text-center leading-none animate-pulse">
              Contact
            </h3>
          </div>

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-emerald-500 animate-pulse" />
                <span className="text-sm font-semibold tracking-wider uppercase text-emerald-600">Get In Touch</span>
              </div>
              
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                Have a project in mind? Whether you&apos;re looking to build a new application, modernize your systems, or need expert technical guidance, our team is ready to help you succeed.
              </p>

              {/* Call Us Box */}
              <div className="inline-block p-6 mb-8 transition-all duration-300 border-2 rounded-lg border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 group">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 transition-transform duration-300 text-emerald-500 group-hover:rotate-12" />
                  <span className="font-semibold text-emerald-600">Call Us Now:</span>
                  <span className="text-lg font-bold text-gray-900">+254 750 109798</span>
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                <div className="transition-transform duration-300 group hover:translate-x-2">
                  <button className="flex items-center gap-2 mb-3 font-bold text-gray-900 transition-colors hover:text-emerald-600">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span>Headquarters</span>
                  </button>
                  <p className="text-sm text-gray-600 ml-7">
                    Softrinx Ltd, Nyeri Kenya.
                    Our main hub where we ideate, innovate, and deliver world-class software solutions.
                  </p>
                </div>

                <div className="transition-transform duration-300 group hover:translate-x-2">
                  <button className="flex items-center gap-2 mb-3 font-bold text-gray-900 transition-colors hover:text-emerald-600">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span>Development Center</span>
                  </button>
                  <p className="text-sm text-gray-600 ml-7">
                    Nyeri, Nairobi Kenya.
                    Our state-of-the-art development center focused on building scalable and robust software solutions.
                  </p>
                </div>

                <div className="transition-transform duration-300 group hover:translate-x-2">
                  <button className="flex items-center gap-2 mb-3 font-bold text-gray-900 transition-colors hover:text-emerald-600">
                    <Mail className="w-5 h-5 text-emerald-500" />
                    <span>Email Support</span>
                  </button>
                  <p className="text-sm text-gray-600 ml-7">
                    Reach us at info@softrinx.com for general inquiries, or support@softrinx.com 
                    for technical assistance. We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form (White themed) */}
            <div 
              className="p-8 transition-shadow duration-500 bg-white border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl"
              style={{ animation: 'fadeInUp 1s ease-out' }}
            >
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                Get a Free Consultation
              </h3>
              <p className="mb-8 text-sm text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.companyOrganization}
                    onChange={(e) => handleChange('companyOrganization', e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+25412345678"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-300 border border-gray-300 rounded-lg resize-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Tell us about your project, timeline, and requirements..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full gap-2 py-4 font-bold text-white transition-all duration-300 rounded-lg group bg-emerald-500 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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