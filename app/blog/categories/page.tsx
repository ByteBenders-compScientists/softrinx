// app/blog/categories/page.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { 
  Code, Smartphone, Palette, Brain, Cloud, Wrench,
  ArrowRight, TrendingUp, FileText, ChevronRight,
  Layers, Sparkles
} from "lucide-react";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/styles/blog.scss";

export default function CategoriesPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const popularRef = useRef(null);
  
  const isCategoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const isPopularInView = useInView(popularRef, { once: true, amount: 0.3 });

  const categories = [
    {
      name: "Web Development",
      slug: "web-development",
      description: "Modern web technologies, frameworks, and best practices for building scalable applications",
      icon: <Code className="w-8 h-8" />,
      color: "blue",
      gradient: "from-blue-500 to-indigo-600",
      articleCount: 15,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
      topics: ["React", "Next.js", "TypeScript", "Node.js", "API Design"]
    },
    {
      name: "Mobile Development",
      slug: "mobile-apps",
      description: "iOS, Android, and cross-platform mobile app development techniques and patterns",
      icon: <Smartphone className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-pink-600",
      articleCount: 12,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
      topics: ["React Native", "Flutter", "Swift", "Kotlin", "Mobile UX"]
    },
    {
      name: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Design principles, user research, and creating delightful digital experiences",
      icon: <Palette className="w-8 h-8" />,
      color: "pink",
      gradient: "from-pink-500 to-rose-600",
      articleCount: 10,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      topics: ["Figma", "Design Systems", "Accessibility", "User Research", "Prototyping"]
    },
    {
      name: "AI & Machine Learning",
      slug: "ai-ml",
      description: "Artificial intelligence, machine learning models, and practical AI implementation",
      icon: <Brain className="w-8 h-8" />,
      color: "orange",
      gradient: "from-orange-500 to-red-600",
      articleCount: 8,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      topics: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "LLMs"]
    },
    {
      name: "Cloud & DevOps",
      slug: "devops",
      description: "Infrastructure, deployment pipelines, monitoring, and cloud architecture",
      icon: <Cloud className="w-8 h-8" />,
      color: "teal",
      gradient: "from-teal-500 to-cyan-600",
      articleCount: 7,
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
      topics: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
    },
    {
      name: "Software Architecture",
      slug: "architecture",
      description: "System design, architectural patterns, and building maintainable software",
      icon: <Layers className="w-8 h-8" />,
      color: "emerald",
      gradient: "from-emerald-500 to-green-600",
      articleCount: 6,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      topics: ["Microservices", "Domain-Driven Design", "Event Sourcing", "CQRS", "Clean Code"]
    }
  ];

  const popularArticles = [
    {
      category: "Web Development",
      title: "Building Scalable React Applications with Next.js 16",
      slug: "scalable-react-nextjs-16",
      views: "3.1k"
    },
    {
      category: "AI & ML",
      title: "AI-Powered Development: Tools That Boost Productivity",
      slug: "ai-powered-development-tools",
      views: "4.5k"
    },
    {
      category: "UI/UX Design",
      title: "The Psychology of User Interface Design",
      slug: "psychology-ui-design",
      views: "3.7k"
    }
  ];

  return (
    <main className="bg-white">
      <Navigation />
      
      {/* Hero Section with Grid Pattern */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="categories-grid-pattern"></div>
          <div className="absolute rounded-full categories-gradient-orb top-20 left-20 w-96 h-96 bg-emerald-500/20 blur-3xl"></div>
          <div className="absolute rounded-full categories-gradient-orb-delayed bottom-20 right-20 w-96 h-96 bg-teal-500/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full categories-badge bg-emerald-500/20 backdrop-blur-sm text-emerald-300">
              <Wrench className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Explore Topics</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl categories-hero-title">
              Browse by <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Category</span>
            </h1>

            <p className="mb-10 text-xl text-gray-300 categories-hero-subtitle">
              Dive deep into specialized topics and discover articles tailored to your interests
            </p>

            <div className="flex flex-wrap justify-center gap-8 categories-stats">
              {[
                { value: "6", label: "Categories" },
                { value: "58", label: "Articles" },
                { value: "15k", label: "Readers" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={categoriesRef} className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-7xl">
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isCategoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">All Categories</h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Find exactly what you&apos;re looking for across our comprehensive content library
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category, idx) => (
                <div 
                  key={category.slug}
                  onMouseEnter={() => setHoveredCategory(category.slug)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`categories-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${isCategoriesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-80`}></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute p-3 text-white transition-transform duration-300 transform top-4 left-4 bg-white/20 backdrop-blur-md rounded-xl group-hover:scale-110">
                      {category.icon}
                    </div>

                    {/* Article Count Badge */}
                    <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-white/20 backdrop-blur-md">
                      {category.articleCount} articles
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-2xl font-bold transition-colors group-hover:text-emerald-600">
                      {category.name}
                    </h3>

                    <p className="mb-4 leading-relaxed text-gray-600">
                      {category.description}
                    </p>

                    {/* Topics Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.topics.slice(0, 3).map((topic, topicIdx) => (
                        <span 
                          key={topicIdx}
                          className="px-3 py-1 text-xs font-medium text-gray-700 transition-colors bg-gray-100 rounded-full cursor-pointer hover:bg-emerald-100 hover:text-emerald-700"
                        >
                          {topic}
                        </span>
                      ))}
                      {category.topics.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded-full">
                          +{category.topics.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link 
                      href={`/blog/categories/${category.slug}`}
                      className={`flex items-center justify-between w-full px-4 py-3 bg-gradient-to-r ${category.gradient} text-white rounded-xl font-medium transition-all duration-300 transform group-hover:shadow-lg ${
                        hoveredCategory === category.slug ? 'translate-x-1' : ''
                      }`}
                    >
                      <span>Explore Articles</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Decorative Element */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular in Each Category */}
      <section ref={popularRef} className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-12 transform transition-all duration-1000 ${isPopularInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 mb-4 text-orange-600 bg-orange-100 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Most Popular</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold">Trending Across Categories</h2>
              <p className="text-gray-600">The most read articles from each topic area</p>
            </div>

            <div className="space-y-4">
              {popularArticles.map((article, idx) => (
                <Link
                  key={idx}
                  href={`/blog/${article.slug}`}
                  className={`categories-popular-card group flex items-center justify-between p-6 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg transform ${isPopularInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 text-lg font-bold rounded-full bg-emerald-100 text-emerald-600">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-medium text-emerald-600">{article.category}</div>
                      <div className="text-lg font-bold transition-colors group-hover:text-emerald-600">
                        {article.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">{article.views} views</div>
                    <ChevronRight className="w-5 h-5 text-gray-400 transition-all transform group-hover:text-emerald-600 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Stats */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-teal-600">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8 text-center text-white md:grid-cols-3">
              {[
                { 
                  icon: <FileText className="w-12 h-12 mx-auto mb-4" />,
                  value: "New articles weekly",
                  label: "Stay updated with fresh content"
                },
                {
                  icon: <Sparkles className="w-12 h-12 mx-auto mb-4" />,
                  value: "Expert insights",
                  label: "Written by industry professionals"
                },
                {
                  icon: <TrendingUp className="w-12 h-12 mx-auto mb-4" />,
                  value: "Trending topics",
                  label: "Always covering what matters"
                }
              ].map((item, idx) => (
                <div key={idx} className="categories-stat-item">
                  {item.icon}
                  <div className="mb-2 text-xl font-bold">{item.value}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Never Miss an Update
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Subscribe to get the latest articles from your favorite categories
            </p>
            <div className="flex flex-col max-w-xl gap-4 mx-auto sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 transition-colors border-2 border-gray-200 rounded-full focus:border-emerald-500 focus:outline-none"
              />
              <button className="px-8 py-4 font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}