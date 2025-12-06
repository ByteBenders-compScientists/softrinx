"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Github, Phone
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdownToggle = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Pages",
      path: "#",
      dropdown: [
        { name: "Team", path: "/pages/team" },
        { name: "FAQ", path: "/pages/faq" },
        { name: "Pricing", path: "/pages/pricing" },
        { name: "Testimonials", path: "/pages/testimonials" }
      ]
    },
    {
      name: "Blog",
      path: "#",
      dropdown: [
        { name: "Latest Posts", path: "/blog/latest" },
        { name: "Categories", path: "/blog/categories" },
        { name: "Author", path: "/blog/author" }
      ]
    },
    {
      name: "Features",
      path: "/features",
      dropdown: [
        { name: "Web Development", path: "/features/web-development" },
        { name: "Mobile Apps", path: "/features/mobile-apps" },
        { name: "UI/UX Design", path: "/features/design" },
        { name: "AI Solutions", path: "/features/ai-solutions" }
      ]
    },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Consultation", path: "/services/consultation" },
        { name: "Development", path: "/services/development" },
        { name: "Maintenance", path: "/services/maintenance" },
        { name: "Training", path: "/services/training" }
      ]
    },
    { name: "Contact", path: "/contact" }
  ];

  const socialIcons = [
    { icon: <Facebook size={20} />, link: "https://facebook.com" },
    { icon: <Twitter size={20} />, link: "https://twitter.com" },
    { icon: <Instagram size={20} />, link: "https://instagram.com" },
    { icon: <Linkedin size={20} />, link: "https://linkedin.com" },
    { icon: <Github size={20} />, link: "https://github.com" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-gray-900/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/images/logo3.png" 
              alt="Softrinx Logo" 
              width={150} 
              height={40} 
              className={`h-10 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="items-center hidden space-x-1 lg:flex">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center">
                    {item.path !== "#" ? (
                      <>
                        <Link 
                          href={item.path}
                          className="px-4 py-2 text-sm font-medium tracking-wider text-white uppercase transition-colors hover:text-emerald-400"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={(e) => handleDropdownToggle(e, item.name)}
                          className="px-1 py-2 text-white transition-colors hover:text-emerald-400"
                          aria-label={`Toggle ${item.name} dropdown`}
                        >
                          <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={(e) => handleDropdownToggle(e, item.name)}
                        className="flex items-center px-4 py-2 text-sm font-medium tracking-wider text-white uppercase transition-colors hover:text-emerald-400"
                      >
                        {item.name}
                        <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.path}
                    className="px-4 py-2 text-sm font-medium tracking-wider text-white uppercase transition-colors hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 transform origin-top-right ${
                      activeDropdown === item.name 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link 
                          href={dropdownItem.path}
                          key={dropdownItem.name}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Client Support & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Client Support - Hidden on mobile */}
            <div className="items-center hidden gap-3 pl-6 border-l lg:flex border-white/20">
              <div className="text-right">
                <p className="text-xs tracking-wider text-gray-300 uppercase">For Client Support:</p>
                <a 
                  href="tel:+254750109798" 
                  className="font-semibold text-white transition-colors hover:text-emerald-400"
                >
                +254 750 109798
                </a>
              </div>
              <Phone className="w-5 h-5 text-emerald-400" />
            </div>

            {/* Get A Quote Button - Hidden on mobile */}
            <Link
              href="/contact"
              className="hidden lg:block px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50"
            >
              Get A Quote
            </Link>

            {/* Hamburger Menu */}
            <button 
              className="p-2 lg:hidden"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <Menu size={28} className={`text-white ${isOpen ? 'hidden' : 'block'}`} />
              <X size={28} className={`text-white ${isOpen ? 'block' : 'hidden'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Desktop Full-Screen Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-md transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container h-full px-4 py-8 mx-auto overflow-y-auto">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="flex items-center" onClick={toggleMenu}>
                <Image 
                  src="/images/images/logo3.png" 
                  alt="Softrinx Logo" 
                  width={150} 
                  height={40} 
                  className="w-auto h-10"
                />
              </Link>
              <button 
                className="p-2 text-gray-700 transition-colors rounded-md hover:bg-emerald-50 hover:text-emerald-600"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Hero Image with Text */}
            <div className="relative w-full h-48 mb-8 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute text-white bottom-4 left-4 right-4">
                <p className="mb-1 text-sm text-emerald-400">Ready to innovate?</p>
                <h3 className="text-xl font-bold">Let&apos;s Build Together</h3>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col space-y-6 text-2xl font-medium">
              {navItems.map((item) => (
                <div key={item.name} className="pb-4 border-b border-gray-100">
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        {item.path !== "#" ? (
                          <>
                            <Link 
                              href={item.path}
                              className="flex-1 text-gray-800 transition-colors hover:text-emerald-600"
                              onClick={toggleMenu}
                            >
                              {item.name}
                            </Link>
                            <button 
                              onClick={(e) => handleDropdownToggle(e, item.name)}
                              className="p-2 text-gray-800 transition-colors hover:text-emerald-600"
                              aria-label={`Toggle ${item.name} submenu`}
                            >
                              <ChevronDown 
                                size={24} 
                                className={`transition-transform duration-200 ${
                                  activeDropdown === item.name ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                          </>
                        ) : (
                          <button 
                            onClick={(e) => handleDropdownToggle(e, item.name)}
                            className="flex items-center justify-between w-full text-gray-800 transition-colors hover:text-emerald-600"
                          >
                            {item.name}
                            <ChevronDown 
                              size={24} 
                              className={`transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Dropdown */}
                      <div 
                        className={`mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name 
                            ? 'max-h-96 opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link 
                            href={dropdownItem.path}
                            key={dropdownItem.name}
                            className="block py-2 text-lg text-gray-600 hover:text-emerald-600"
                            onClick={toggleMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.path}
                      className="block text-gray-800 transition-colors hover:text-emerald-600"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Client Support Mobile */}
            <div className="p-4 mt-8 border bg-emerald-50 rounded-xl border-emerald-100">
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="text-xs tracking-wider text-gray-600 uppercase">For Client Support:</p>
                  <a 
                    href="tel:+254750109798" 
                    className="text-lg font-semibold text-emerald-600 hover:text-emerald-700"
                  >
                  +254 750 109798
                  </a>
                </div>
              </div>
            </div>

            {/* Get Quote Button Mobile */}
            <Link
              href="/contact"
              className="px-6 py-3 mt-4 font-semibold text-center text-white transition-all duration-300 rounded-lg bg-emerald-500 hover:bg-emerald-600"
              onClick={toggleMenu}
            >
              Get A Quote
            </Link>

            {/* Social & Contact */}
            <div className="pt-8 mt-auto">
              <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-700 transition-colors bg-gray-100 rounded-full hover:bg-emerald-100 hover:text-emerald-600"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="mt-6">
                <p className="text-gray-600">Have questions? Get in touch!</p>
                <p className="mt-1 font-medium text-emerald-600">hello@softrinx.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;