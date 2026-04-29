"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C47FF] to-[#8B6FFF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold">Apparely</span>
          </Link>
          <Link href="/" className="text-sm text-[#A0A0B0] hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-[#6B6B7B] mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-8 text-[#A0A0B0] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, including your name, email address, and photos of clothing items you upload to the app. We also collect usage data to improve our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>We use your information to provide and improve Apparely&apos;s services, including AI-powered outfit recommendations, wardrobe analysis, and personalized styling suggestions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. On-Device Processing</h2>
              <p>Whenever possible, image analysis and AI processing happens directly on your device. This means your wardrobe photos are not uploaded to our servers unless necessary for cloud-based AI features.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Storage</h2>
              <p>Your wardrobe data is stored locally on your device using SQLite. If you use cloud features, minimal data is stored on our secure servers. We do not sell your personal data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
              <p>We use trusted third-party services for authentication (Firebase Auth), payments (RevenueCat), and analytics. These services have their own privacy policies and security measures.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information at any time. You can request a copy of your data or ask us to delete your account and associated data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Data Security</h2>
              <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Children&apos;s Privacy</h2>
              <p>Apparely is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes through the app or via email.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@apparely.app" className="text-[#8B6FFF] hover:text-[#6C47FF]">hello@apparely.app</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
