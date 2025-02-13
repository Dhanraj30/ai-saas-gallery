"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Gallery AI",
    description: "Automatically resize and format your images to perfectly fit Instagram, Facebook, Twitter, and other platform requirements.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Video Optimization",
    description: "Compress and optimize your videos while maintaining quality, perfect for social media uploads and faster loading.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Preview",
    description: "See how your content will look on different platforms before posting, with AI suggestions for better engagement.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <div className="mb-8 flex justify-center">
            <div className="p-3 bg-[#1A1A1A] rounded-2xl shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 text-white">
            Perfect Format for Every Platform
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            AI-powered image and video optimization for all your social media posts. One upload, perfect formats everywhere.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/sign-up">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-xl text-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Start Optimizing Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              One Upload, Multiple Formats
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powered by Cloudinary AI, we automatically optimize and format your content for each platform
            </p>
          </motion.div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-cyan-900 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-12 text-white">
            Optimized for Every Platform
          </h2>
          <div className="flex justify-center gap-6">
            {[
              { name: 'instagram', label: 'Instagram' },
              { name: 'tiktok', label: 'TikTok' },
              { name: 'twitter', label: 'Twitter' },
              { name: 'facebook', label: 'Facebook' },
              { name: 'linkedin', label: 'LinkedIn' }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
                  <Image
                    src={`/${platform.name}-icon.svg`}
                    alt={platform.label}
                    width={24}
                    height={24}
                    className="brightness-[2]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="mb-8 flex justify-center">
              <div className="p-3 bg-[#1A1A1A] rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Used by entreprenurs
            </h2>
            <p className="text-xl text-gray-400">
              Proactiv is used by serial entrepreneurs and overachievers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                quote: "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
              },
              {
                quote: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
              },
              {
                quote: "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
              },
              {
                quote: "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-cyan-900 transition-all duration-300"
              >
                <p className="text-gray-400 leading-relaxed">
                  {testimonial.quote}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
