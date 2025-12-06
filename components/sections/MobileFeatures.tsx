import React from 'react';
import { Smartphone, Wifi, Bell, MapPin, Camera, Fingerprint, Share2, Cloud, CreditCard, Lock, Zap, Globe, Apple } from 'lucide-react';

const MobileFeatures = () => {
  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Push Notifications',
      description: 'Keep users engaged with smart, personalized notifications that drive opens and conversions.',
      stat: '3x Higher',
      metric: 'Engagement'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Geolocation & Maps',
      description: 'Real-time location tracking, route optimization, and location-based services.',
      stat: 'GPS Accurate',
      metric: 'To 5 meters'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Camera & AR Features',
      description: 'Augmented reality, photo/video capture, QR scanning, and image recognition.',
      stat: 'AR Ready',
      metric: 'iOS & Android'
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: 'Biometric Security',
      description: 'Face ID, Touch ID, and fingerprint authentication for secure access.',
      stat: '100% Secure',
      metric: 'Authentication'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Offline Mode',
      description: 'Apps work without internet. Auto-sync when connection is restored.',
      stat: 'Works Offline',
      metric: 'Full functionality'
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: 'Social Integration',
      description: 'One-tap login with Google, Apple, Facebook. Easy content sharing.',
      stat: '5x Faster',
      metric: 'User onboarding'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Sync',
      description: 'Seamless data sync across devices. Pick up where you left off.',
      stat: 'Real-Time',
      metric: 'Sync across devices'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'In-App Payments',
      description: 'Apple Pay, Google Pay, Stripe integration. Secure checkout in seconds.',
      stat: '99.9%',
      metric: 'Success rate'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption protecting user data and communications.',
      stat: '256-bit',
      metric: 'Encryption'
    }
  ];

  const platforms = [
    {
      name: 'iOS',
      logo: <Apple className="w-12 h-12" />,
      features: ['SwiftUI', 'HealthKit', 'CoreML', 'ARKit', 'Apple Pay', 'Siri Shortcuts'],
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Android',
      logo: <Globe className="w-12 h-12" />,
      features: ['Jetpack Compose', 'Google Fit', 'ML Kit', 'ARCore', 'Google Pay', 'Android Auto'],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <span className="text-sm font-bold tracking-wider uppercase text-emerald-600">Native Features</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          </div>
          <h2 className="mb-6 text-6xl font-bold text-gray-900 md:text-7xl">
            Unlock every <span className="text-transparent bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text">mobile feature</span>
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-gray-600">
            We don't just build apps. We harness every native capability to create experiences users can't live without.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 mb-20 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative p-8 transition-all duration-300 border-2 border-gray-200 group bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:border-emerald-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-100 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-600">{feature.description}</p>

              {/* Stat */}
              <div className="pt-6 border-t border-gray-200">
                <div className="text-xl font-bold text-emerald-600">{feature.stat}</div>
                <div className="text-sm text-gray-500">{feature.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Specific Features */}
        <div className="grid gap-8 md:grid-cols-2">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br ${platform.color} text-white`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>

              <div className="relative">
                {/* Logo */}
                <div className="mb-6 text-6xl">{platform.logo}</div>
                
                <h3 className="mb-4 text-4xl font-bold">{platform.name} Native</h3>
                <p className="mb-8 text-lg text-white/80">
                  Built specifically for {platform.name} using the latest frameworks and APIs.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {platform.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="font-medium text-white/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="relative p-12 mt-20 overflow-hidden text-center text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 bg-white rounded-full w-96 h-96 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 bg-white rounded-full w-96 h-96 blur-3xl"></div>
          </div>
          
          <div className="relative">
            <Zap className="w-16 h-16 mx-auto mb-6" />
            <h3 className="mb-4 text-4xl font-bold">Need a feature we didn't mention?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-xl text-emerald-50">
              We integrate with any API, SDK, or third-party service. If it's possible on mobile, we can build it.
            </p>
            <button className="px-10 py-4 text-lg font-bold transition-all duration-300 bg-white shadow-xl text-emerald-600 rounded-xl hover:bg-gray-100 hover:scale-105">
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;