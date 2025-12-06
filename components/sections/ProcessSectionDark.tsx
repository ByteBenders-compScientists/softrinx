import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

const ProcessSectionDark = () => {
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business, competitors, and target audience. No generic solutions - every project starts with understanding what makes your business unique.',
      details: ['Competitive Analysis', 'User Research', 'Technical Requirements', 'Project Roadmap'],
      duration: '1-2 weeks',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description: 'Interactive prototypes you can click through before we write a single line of code. See exactly what you\'re getting, make changes early when it\'s cheap.',
      details: ['Wireframing', 'UI Design', 'Interactive Prototype', 'User Testing'],
      duration: '2-3 weeks',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Agile sprints with weekly demos. You see progress, not just status reports. Clean code, documented, tested, and built for scale from day one.',
      details: ['Agile Development', 'Code Reviews', 'Quality Assurance', 'Performance Testing'],
      duration: '6-12 weeks',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80'
    },
    {
      number: '04',
      title: 'Launch & Scale',
      description: 'Deployment, monitoring, and optimization. We don\'t just launch and disappear - we stick around to ensure everything runs smoothly and scales with your growth.',
      details: ['Cloud Deployment', 'Performance Monitoring', 'Security Audits', 'Ongoing Support'],
      duration: 'Ongoing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gray-950">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <div className="text-[15rem] font-bold text-white whitespace-nowrap">
          PROCESS
        </div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-400">How We Work</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h2 className="mb-6 text-6xl font-bold text-white">
            From concept to <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text">conquest</span>
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-400">
            A battle-tested process refined over 200+ successful projects
          </p>
        </div>

        {/* Timeline with active state */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 hidden w-1 transform -translate-x-1/2 bg-gray-800 left-1/2 lg:block"></div>
          <div 
            className="absolute top-0 hidden w-1 transition-all duration-1000 transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-emerald-500 to-emerald-600 lg:block"
            style={{ height: `${(activeProcess + 1) * 25}%` }}
          ></div>

          <div className="space-y-24">
            {processSteps.map((step, i) => (
              <div key={i} className={`relative transition-all duration-500 ${activeProcess === i ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}`}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative inline-block mb-6">
                      <div className="font-bold text-8xl text-emerald-500/10">{step.number}</div>
                      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${activeProcess === i ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 scale-110' : 'bg-gray-700'}`}>
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="mb-4 text-4xl font-bold text-white">{step.title}</h3>
                    <p className="mb-6 text-xl leading-relaxed text-gray-400">{step.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {step.details.map((detail, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-emerald-500" />
                          <span className="text-sm font-medium text-gray-300">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-emerald-500/10 border-emerald-500/30">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-semibold text-emerald-400">{step.duration}</span>
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute transition-all duration-500 -inset-4 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl blur-2xl group-hover:blur-3xl"></div>
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="relative object-cover w-full border shadow-2xl rounded-2xl aspect-video border-emerald-500/20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionDark;