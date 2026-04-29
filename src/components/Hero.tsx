"use client";

import { motion } from "framer-motion";
import { Apple, ArrowDown, Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* CSS Gradient Orbs (behind Three.js canvas) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#6C47FF]/20 blur-[120px] animate-float" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/15 blur-[100px] animate-float-slow" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#EC4899]/10 blur-[80px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C47FF]/10 border border-[#6C47FF]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-sm font-medium text-[#8B6FFF]">Now available on iOS</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Your Wardrobe.
          <br />
          <span className="gradient-text">Infinite Outfits.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg sm:text-xl text-[#A0A0B0] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Snap your clothes. Chat with <span className="text-white font-semibold">Lumina</span>, your AI stylist.
          Get personalized outfit recommendations for any occasion — all from your own closet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/#download"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0F] font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
          >
            <Apple className="w-5 h-5" />
            Download on the App Store
          </Link>
          <Link
            href="/#features"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Explore Features
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-1">50K+</div>
            <div className="text-sm text-[#6B6B7B]">Outfits Generated</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-bold mb-1">
              4.9 <Star className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
            </div>
            <div className="text-sm text-[#6B6B7B]">App Store Rating</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold mb-1">10K+</div>
            <div className="text-sm text-[#6B6B7B]">Active Stylists</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#6B6B7B] text-xs">
          <div className="w-5 h-8 rounded-full border-2 border-[#6B6B7B]/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-[#6B6B7B]"
            />
          </div>
          Scroll to explore
        </div>
      </motion.div>
    </section>
  );
}
