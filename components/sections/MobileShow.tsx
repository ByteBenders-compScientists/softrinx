import React, { useState } from 'react';
import { ShoppingBag, Heart, DollarSign, Users, MessageCircle, Camera, TrendingUp, BarChart3, Briefcase, ArrowRight, Star, Download } from 'lucide-react';

const MobileShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      name: 'E-Commerce',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      apps: [
        {
          name: 'Fashion Marketplace',
          description: 'Built a complete shopping experience with AR try-on, real-time inventory, and one-click checkout.',
          metrics: { downloads: '500K+', rating: '4.8★', revenue: '$2M+' },
          features: ['AR Try-On', 'Live Chat Support', 'Wishlist Sync', 'Push Notifications'],
          image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80'
        },
        {
          name: 'Grocery Delivery',
          description: 'On-demand grocery app with real-time tracking, scheduled delivery, and smart recommendations.',
          metrics: { downloads: '1M+', rating: '4.7★', orders: '100K+/month' },
          features: ['Real-Time Tracking', 'Schedule Delivery', 'AI Recommendations', 'Multiple Payments'],
          image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'
        }
      ]
    },
    {
      name: 'Social Media',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      apps: [
        {
          name: 'Community Platform',
          description: 'Social network connecting 2M+ users with real-time messaging, stories, and live streaming.',
          metrics: { users: '2M+', rating: '4.9★', engagement: '45 min/day' },
          features: ['Live Streaming', 'Stories', 'Group Chats', 'Video Calls'],
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80'
        },
        {
          name: 'Photo Sharing App',
          description: 'Instagram-style photo sharing with advanced filters, AI tagging, and social features.',
          metrics: { photos: '10M+', rating: '4.8★', engagement: '3.2 posts/day' },
          features: ['AI Filters', 'Smart Albums', 'Collaborative Posts', 'Analytics'],
          image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=400&q=80'
        }
      ]
    },
    {
      name: 'Business & Finance',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-500',
      apps: [
        {
          name: 'Investment Platform',
          description: 'Stock trading app with real-time market data, portfolio management, and AI insights.',
          metrics: { users: '300K+', rating: '4.9★', volume: '$50M+/month' },
          features: ['Real-Time Trading', 'Portfolio Analytics', 'AI Insights', 'Watchlists'],
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80'
        },
        {
          name: 'Expense Tracker',
          description: 'Personal finance app helping users save money with smart budgeting and expense tracking.',
          metrics: { users: '800K+', rating: '4.7★', saved: '$100M+' },
          features: ['Auto-Categorization', 'Budget Alerts', 'Bill Reminders', 'Reports'],
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80'
        }
      ]
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gray-950">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
        <div className="text-[20rem] font-bold text-white whitespace-nowrap">
          APPS
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-400">Our Portfolio</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h2 className="mb-6 text-6xl font-bold text-white md:text-7xl">
            Apps that <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text">dominate</span> their markets
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-400">
            From e-commerce giants to social platforms with millions of users. We build apps that scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`group px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                activeCategory === i
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-2xl scale-105`
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className={`transition-transform duration-300 ${activeCategory === i ? 'scale-110' : ''}`}>
                {cat.icon}
              </div>
              {cat.name}
            </button>
          ))}
        </div>

        {/* App Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {categories[activeCategory].apps.map((app, i) => (
            <div
              key={i}
              className="overflow-hidden transition-all duration-500 bg-gray-900 border border-gray-800 group rounded-3xl hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* App Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${categories[activeCategory].color} opacity-20`}></div>
                <img 
                  src={app.image}
                  alt={app.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute flex items-center gap-2 px-4 py-2 text-yellow-400 rounded-full top-4 right-4 bg-black/70 backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold">{app.metrics.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-4 text-3xl font-bold text-white">{app.name}</h3>
                <p className="mb-6 leading-relaxed text-gray-400">{app.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-gray-800">
                  {Object.entries(app.metrics).map(([key, value], j) => (
                    <div key={j} className="text-center">
                      <div className="mb-1 text-2xl font-bold text-emerald-400">{value}</div>
                      <div className="text-xs tracking-wider text-gray-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {app.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center justify-center w-full gap-2 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:shadow-xl hover:shadow-emerald-500/50 group">
                  View Case Study
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="p-12 mt-20 border border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div className="cursor-pointer group">
              <Download className="w-10 h-10 mx-auto mb-3 transition-transform text-emerald-400 group-hover:scale-110" />
              <div className="mb-2 text-4xl font-bold text-white">150+</div>
              <div className="text-gray-400">Apps Published</div>
            </div>
            <div className="cursor-pointer group">
              <Star className="w-10 h-10 mx-auto mb-3 text-yellow-400 transition-transform fill-current group-hover:scale-110" />
              <div className="mb-2 text-4xl font-bold text-white">4.8</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="cursor-pointer group">
              <Users className="w-10 h-10 mx-auto mb-3 text-blue-400 transition-transform group-hover:scale-110" />
              <div className="mb-2 text-4xl font-bold text-white">10M+</div>
              <div className="text-gray-400">Total Downloads</div>
            </div>
            <div className="cursor-pointer group">
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-purple-400 transition-transform group-hover:scale-110" />
              <div className="mb-2 text-4xl font-bold text-white">$100M+</div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileShowcase;