"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, 
  Github, ArrowRight, ChevronRight, Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Top curved shape */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Small CTA Section */}
      <div className="container mx-auto px-4 py-8 mb-12">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Ready to start your project?</h3>
              <p className="text-white/90 text-sm md:text-base">
                Let's discuss your ideas and transform them into exceptional digital experiences
              </p>
            </div>
            
            <Link 
              href="/contact"
              className="group px-6 py-3 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-2xl hover:scale-105 whitespace-nowrap"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Company Info - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <Image 
                src="/images/images/logo3.png" 
                alt="Softrinx Logo" 
                width={180} 
                height={45} 
                className="h-12 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm pr-8">
              Softrinx is a leading software development agency specializing in cutting-edge digital solutions. 
              We transform businesses through innovative technology, exceptional design, and strategic thinking.
            </p>
            
            {/* Social Links */}
            <div>
              <h5 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Follow Us</h5>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-emerald-600 transition-all duration-300 border border-gray-700/50 hover:border-emerald-500 hover:scale-110"
                >
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-emerald-600 transition-all duration-300 border border-gray-700/50 hover:border-emerald-500 hover:scale-110"
                >
                  <Twitter size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-emerald-600 transition-all duration-300 border border-gray-700/50 hover:border-emerald-500 hover:scale-110"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-emerald-600 transition-all duration-300 border border-gray-700/50 hover:border-emerald-500 hover:scale-110"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="group p-3 bg-gray-800/50 rounded-xl hover:bg-emerald-600 transition-all duration-300 border border-gray-700/50 hover:border-emerald-500 hover:scale-110"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links - Spans 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Portfolio', link: '/portfolio' },
                { name: 'Case Studies', link: '/case-studies' },
                { name: 'Blog', link: '/blog' },
                { name: 'Careers', link: '/careers' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.link}
                    className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Custom Software Development', link: '/services/software-development' },
                { name: 'Mobile App Development', link: '/services/mobile-development' },
                { name: 'UI/UX Design', link: '/services/ui-ux-design' },
                { name: 'Cloud Solutions', link: '/services/cloud-services' },
                { name: 'AI & Machine Learning', link: '/services/ai-solutions' },
                { name: 'DevOps & Security', link: '/services/devops' },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.link}
                    className="text-gray-400 hover:text-emerald-400 transition-all duration-300 flex items-center group text-sm"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-white relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-500"></span>
            </h4>
            
            <ul className="space-y-4 mb-8">
              <li>
                <a 
                  href="https://goo.gl/maps/softrinx" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start text-gray-400 hover:text-emerald-400 transition-colors group text-sm"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    Nyeri Town, Nyeri County
                    <br />
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@softrinx.com" 
                  className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group text-sm"
                >
                  <Mail className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>info@softrinx.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+254 750 109798" 
                  className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors group text-sm"
                >
                  <Phone className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+254 750 109798</span>
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="bg-gray-800/30 rounded-xl p-5 border border-gray-700/50 backdrop-blur-sm">
              <h5 className="text-sm font-semibold mb-3 text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-500" />
                Newsletter
              </h5>
              <p className="text-gray-400 text-xs mb-4">Stay updated with our latest insights and tech trends.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-900/50 border border-gray-700 rounded-l-lg px-4 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-200 text-sm placeholder-gray-500"
                />
                <button 
                  type="button" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-r-lg px-4 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-left text-sm">
              © {currentYear} <span className="text-emerald-500 font-semibold">Softrinx</span>. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm hover:underline underline-offset-4">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm hover:underline underline-offset-4">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;