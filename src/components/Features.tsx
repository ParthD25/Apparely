"use client";

import { motion } from "framer-motion";
import { Camera, MessageCircle, ThumbsUp, BarChart3, Shield, Upload } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Snap Your Wardrobe",
    description: "Point your camera at any clothing item and watch as AI automatically detects, crops, removes the background, and categorizes it.",
    highlight: "Multi-item detection — snap a flat-lay and extract each piece",
    featured: true,
  },
  {
    icon: MessageCircle,
    title: "Chat with Lumina",
    description: "Tell Lumina where you're going — she'll ask about the setting, time, occasion, and your style mood.",
  },
  {
    icon: ThumbsUp,
    title: "Swipe to Decide",
    description: "Browse AI-generated outfit combinations Tinder-style. Like it? Swipe right. The more you swipe, the smarter Lumina gets.",
  },
  {
    icon: BarChart3,
    title: "Wardrobe Health Score",
    description: "Get insights into your closet's variety, color balance, and wear frequency. Know what's missing and what you wear too much.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Image analysis runs on-device whenever possible. Your wardrobe photos stay local — we prioritize your privacy.",
  },
  {
    icon: Upload,
    title: "Upload & Improve",
    description: "Wore an outfit Lumina suggested? Send her a photo and get color/contrast feedback with concrete tips to level up.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6C47FF]/10 border border-[#6C47FF]/20 text-sm font-semibold text-[#8B6FFF] uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Style Smarter, Not Harder</h2>
          <p className="text-lg text-[#A0A0B0] max-w-2xl mx-auto">
            From wardrobe digitization to AI-powered recommendations, Apparely handles the heavy lifting so you can focus on looking great.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative p-8 rounded-2xl border transition-all duration-300 ${
                feature.featured
                  ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#6C47FF]/10 to-[#EC4899]/5 border-[#6C47FF]/20 hover:border-[#6C47FF]/40"
                  : "bg-[#1A1A24]/80 border-white/5 hover:border-white/10 hover:bg-[#222230]/80"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                feature.featured
                  ? "bg-gradient-to-br from-[#6C47FF] to-[#8B6FFF]"
                  : "bg-[#6C47FF]/15"
              }`}>
                <feature.icon className={`w-6 h-6 ${feature.featured ? "text-white" : "text-[#8B6FFF]"}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#A0A0B0] text-sm leading-relaxed mb-4">{feature.description}</p>
              {feature.highlight && (
                <div className="pt-4 border-t border-white/5">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#6C47FF]/15 text-[#8B6FFF] text-xs font-medium">
                    {feature.highlight.split(" — ")[0]}
                  </span>
                  <span className="text-xs text-[#6B6B7B] ml-2">
                    — {feature.highlight.split(" — ")[1]}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
