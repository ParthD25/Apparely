"use client";

import { motion } from "framer-motion";
import { Camera, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Photograph Your Clothes",
    description: "Snap individual items or a flat-lay of multiple pieces. Our AI detects, crops, and catalogs each item automatically.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Chat with Lumina",
    description: "Tell her about your plans. She'll ask about the setting, time, occasion, and your style mood — just like a real stylist.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get Your Outfit",
    description: "Swipe through personalized combinations from your own wardrobe. Save favorites, get feedback, and never wonder what to wear again.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 bg-[#12121A]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6C47FF]/10 border border-[#6C47FF]/20 text-sm font-semibold text-[#8B6FFF] uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">From Photo to Fabulous</h2>
          <p className="text-lg text-[#A0A0B0]">Three simple steps to unlock your personal AI stylist.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C47FF]/50 via-[#8B5CF6]/30 to-transparent hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C47FF] to-[#8B6FFF] flex items-center justify-center z-10 relative">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-2 rounded-2xl bg-[#6C47FF]/20 blur-xl" />
                </div>

                <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                  <span className="text-6xl font-extrabold text-[#6C47FF]/10 leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                  <p className="text-[#A0A0B0] leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Phone mockup visual */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: i % 2 === 0 ? 5 : -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-48 h-80 bg-[#1A1A24] rounded-[2.5rem] border-4 border-[#2a2a3a] p-3 shadow-2xl shadow-black/50"
                  style={{ perspective: "1000px" }}
                >
                  <div className="w-full h-full bg-[#0A0A0F] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-4">
                    {i === 0 && (
                      <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-[#6C47FF]/40 to-[#8B6FFF]/20" />
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-[#8B5CF6]/40 to-[#EC4899]/20" />
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-[#EC4899]/40 to-[#6C47FF]/20" />
                        <div className="aspect-square rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center text-white/20 text-2xl">+</div>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="flex flex-col gap-2 w-full">
                        <div className="self-start px-3 py-2 rounded-xl bg-[#1A1A24] text-xs text-[#A0A0B0]">Where are you heading?</div>
                        <div className="self-end px-3 py-2 rounded-xl bg-[#6C47FF] text-xs text-white">Dinner date downtown</div>
                        <div className="self-start px-3 py-2 rounded-xl bg-[#1A1A24] text-xs text-[#A0A0B0]">What time? What&apos;s the vibe?</div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-24 h-20 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]" />
                        <div className="w-24 h-28 rounded-xl bg-gradient-to-br from-[#6C47FF] to-[#8B6FFF]" />
                        <div className="flex gap-6 mt-2">
                          <span className="text-[#F87171] text-xl">✕</span>
                          <span className="text-[#4ADE80] text-xl">♥</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
