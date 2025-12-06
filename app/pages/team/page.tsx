// app/team/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";
import "@/styles/team.scss";

export default function TeamPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll(".anim-element");
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Clint Simiyu",
      role: "Founder & CEO",
      bio: "With over 5 years of experience in software development, Clint leads our vision and strategic direction.",
      image: "/images/images/simiyu.jpg",
      social: {
        linkedin: "https://linkedin.com/in/clint-simiyu/",
        twitter: "https://twitter.com",
        github: "https://github.com/Clint171",
        email: "clintsimiyu004@gmail.com"
      }
    },
    {
      id: 2,
      name: "Baruk Ali",
      role: "CTO",
      bio: "Baruk oversees our technical strategy and ensures we're using the latest technologies to deliver exceptional results.",
      image: "/images/images/baruk.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/mohammed-ali-mbaruk-56785639b",
        twitter: "https://x.com/Baruk_KE",
        github: "https://github.com/Baruk1-netizen",
        email: "baruk.developer@gmail.com"
      }
    },
    {
      id: 3,
      name: "Walter Onyango",
      role: "Lead Developer",
      bio: "Walter heads our development team, architecting robust solutions that meet the complex needs of our enterprise clients.",
      image: "/images/images/walter.jpg",
      social: {
        linkedin: "https://linkedin.com/in/walter-onyango",
        twitter: "https://x.com/taya_dev",
        github: "https://github.com/waltertaya",
        email: "taya.developer@gmail.com"
      }
    },
    {
      id: 4,
      name: "Brian Chege",
      role: "Fullstack Web and Mobile Developer",
      bio: "Brian specializes in building scalable web and mobile applications, ensuring seamless user experiences across all platforms.",
      image: "/images/images/brian.jpg",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://x.com/https://twitter.com/chegephil24",
        github: "https://github.com/CHEGEBB/CHEGEBB",
        email: "chegephil24@gmail.com"
      }
    },
    {
      id: 5,
      name: "Samwel Njuguna",
      role: "AI Solutions Architect",
      bio: "Samwel leads our AI initiatives, implementing cutting-edge machine learning solutions for our enterprise clients.",
      image: "/images/images/samwel.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/samwel-njuguna/",
        twitter: "https://x.com/Njuguna128801",
        github: "https://github.com/lewmas9152",
        email: "samwelnjuguna190@gmail.com"
      }
    }
  ];

  const valueProps = [
    {
      title: "Innovation",
      description: "We stay ahead of technological trends to provide cutting-edge solutions.",
      icon: "🚀"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in code quality and user experience.",
      icon: "✨"
    },
    {
      title: "Collaboration",
      description: "We work closely with clients to ensure their vision becomes reality.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We're transparent in our processes and committed to honest relationships.",
      icon: "🛡️"
    }
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-emerald-900 team-hero">
        <div className="absolute inset-0 team-bg-pattern opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full team-light-beam"></div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl anim-element team-title">
              Meet Our <span className="text-emerald-400">Team</span>
            </h1>
            <p className="mb-10 text-xl text-gray-300 anim-element team-subtitle">
              The talented individuals behind Softrinx&apos;s success. A diverse group of experts committed to delivering excellence in every project.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Core Team Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold anim-element"> Team</h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-emerald-500"></div>
            <p className="text-xl text-gray-600 anim-element">
              Meet the visionaries who drive our company forward with expertise, passion, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(0, 5).map((member, index) => (
              <div 
                key={member.id} 
                className="overflow-hidden transition-all duration-500 shadow-lg team-card rounded-xl hover:shadow-2xl anim-element"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent hover:opacity-100">
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} className="p-2 text-white transition-colors rounded-full bg-white/10 backdrop-blur-sm hover:bg-emerald-500">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.social.twitter} className="p-2 text-white transition-colors rounded-full bg-white/10 backdrop-blur-sm hover:bg-emerald-500">
                        <Twitter size={18} />
                      </a>
                      <a href={member.social.github} className="p-2 text-white transition-colors rounded-full bg-white/10 backdrop-blur-sm hover:bg-emerald-500">
                        <Github size={18} />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="p-2 text-white transition-colors rounded-full bg-white/10 backdrop-blur-sm hover:bg-emerald-500">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="mb-3 font-medium text-emerald-600">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold anim-element">Our Values</h2>
            <div className="w-20 h-1 mx-auto mb-6 bg-emerald-500"></div>
            <p className="text-xl text-gray-600 anim-element">
              The core principles that guide our work and define our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((value, index) => (
              <div 
                key={index} 
                className="p-8 transition-transform duration-300 bg-white shadow-md rounded-xl hover:-translate-y-2 anim-element values-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Join Our Team Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-emerald-600 to-blue-500">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold text-white ">Join Our Team</h2>
            <p className="mb-8 text-xl text-white/90 ">
              We&apos;re always looking for talented individuals who are passionate about technology and innovation.
              Check out our current openings and become part of our success story.
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center px-8 py-4 font-semibold transition-colors bg-white rounded-full shadow-lg text-emerald-600 hover:bg-gray-100 hover:shadow-xl join-btn"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}