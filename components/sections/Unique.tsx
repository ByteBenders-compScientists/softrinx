import React from 'react';
import { Code, Layout, Smartphone, Users, Headphones, Shield, CheckCircle2, Zap, Rocket, TrendingUp } from 'lucide-react';

const Unique = () => {
  const services = [
    { icon: <Code className="w-6 h-6" />, text: 'Custom Software' },
    { icon: <Users className="w-6 h-6" />, text: 'Enterprise Software' },
    { icon: <Layout className="w-6 h-6" />, text: 'Web Application' },
    { icon: <Shield className="w-6 h-6" />, text: 'Software Consulting' },
    { icon: <Smartphone className="w-6 h-6" />, text: 'Mobile Application' },
    { icon: <Headphones className="w-6 h-6" />, text: 'Maintenance and Support' }
  ];

  const capabilities = [
    {
      number: '01',
      icon: <Zap className="w-8 h-8" />,
      title: 'Requirements Gathering',
      description: 'We start by understanding your vision, business goals, and technical needs. Every detail matters in building the perfect solution.'
    },
    {
      number: '02',
      icon: <Code className="w-8 h-8" />,
      title: 'Analysis & Planning',
      description: 'Strategic planning meets technical excellence. We architect solutions that scale with your ambitions and exceed expectations.'
    },
    {
      number: '03',
      icon: <Layout className="w-8 h-8" />,
      title: 'Design & Development',
      description: 'Where creativity meets code. Beautiful interfaces backed by robust, scalable architecture built with industry-leading technologies.'
    },
    {
      number: '04',
      icon: <Rocket className="w-8 h-8" />,
      title: 'Testing, Device & Release',
      description: 'Rigorous testing across devices and platforms. We ensure flawless performance before launch and support you beyond.'
    },
    {
      number: '05',
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Maintenance & Support',
      description: 'We don\'t disappear after launch. Continuous monitoring, updates, and support to keep your application running at peak performance.'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
        <div className="text-[15rem] font-bold text-gray-900 whitespace-nowrap">
          EXCELLENCE
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 blur-3xl"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Top Section - Software Development */}
        <div className="grid items-center gap-16 mb-32 lg:grid-cols-2">
          {/* Left - Content */}
          <div>
            <h2 className="mb-6 text-6xl font-bold leading-tight text-gray-900">
              Web
              <br />
              <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">
                Development
              </span>
            </h2>
            
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              We don&apos;t just write code—we engineer digital experiences that transform businesses. From concept to deployment, our expert team delivers cutting-edge web applications that drive real results and measurable growth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-all duration-300 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <span className="font-semibold text-gray-700 transition-colors group-hover:text-emerald-600">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with tilt */}
          <div className="relative">
            <div className="absolute transition-all duration-500 -inset-6 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative overflow-hidden transition-transform duration-500 transform border-4 border-white shadow-2xl rounded-3xl rotate-2 hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                alt="Software Development"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-white">
                  <div className="mb-1 text-3xl font-bold">200+</div>
                  <div className="text-sm opacity-90">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work Section - Completely Different Layout */}
        <div>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-gray-900">
              How We <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">Work</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              A proven methodology refined through hundreds of successful projects
            </p>
          </div>

          {/* Horizontal scrolling cards layout */}
          <div className="relative">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.slice(0, 3).map((step, i) => (
                <div key={i} className="relative p-8 transition-all duration-300 border-2 border-gray-200 group bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Number badge */}
                  <div className="absolute flex items-center justify-center w-16 h-16 text-xl font-bold text-white transition-transform duration-300 shadow-lg -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-emerald-500/30 rotate-12 group-hover:rotate-0">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom two in 2 column */}
            <div className="grid gap-6 mt-6 md:grid-cols-2">
              {capabilities.slice(3).map((step, i) => (
                <div key={i} className="relative p-8 transition-all duration-300 border-2 border-gray-200 group bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Number badge */}
                  <div className="absolute flex items-center justify-center w-16 h-16 text-xl font-bold text-white transition-transform duration-300 shadow-lg -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-emerald-500/30 rotate-12 group-hover:rotate-0">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-110">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-24">
          <div className="relative p-12 overflow-hidden shadow-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl shadow-emerald-500/30">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative grid gap-8 text-center text-white md:grid-cols-3">
              <div>
                <div className="mb-2 text-5xl font-bold">98%</div>
                <div className="text-emerald-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold">5M+</div>
                <div className="text-emerald-100">Users Powered</div>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold">24/7</div>
                <div className="text-emerald-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unique;