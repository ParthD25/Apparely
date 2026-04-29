"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#6C47FF]/10 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Ready to Transform Your Style?
        </h2>
        <p className="text-lg text-[#A0A0B0] mb-10">
          Download Apparely now and get your first AI-powered outfit recommendation in under 60 seconds.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0A0A0F] font-bold rounded-xl hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
        >
          <Apple className="w-6 h-6" />
          <div className="text-left">
            <div className="text-xs font-medium opacity-70 uppercase tracking-wider">Download on the</div>
            <div className="text-lg leading-none">App Store</div>
          </div>
        </motion.button>

        <p className="mt-4 text-sm text-[#6B6B7B]">Coming soon to Android</p>
      </motion.div>
    </section>
  );
}
