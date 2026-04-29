"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-[#6B6B7B] mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <div className="space-y-8 text-[#A0A0B0] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using Apparely, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
              <p>Apparely is an AI-powered fashion assistant that helps users catalog their wardrobe and receive outfit recommendations. We use artificial intelligence and machine learning to analyze clothing items and provide styling suggestions.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
              <p>To use certain features of Apparely, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Subscription and Billing</h2>
              <p>Apparely offers both free and paid subscription plans. Paid subscriptions are billed on a recurring basis. You may cancel your subscription at any time, and cancellation will take effect at the end of the current billing period.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. User Content</h2>
              <p>You retain ownership of any photos or content you upload to Apparely. By uploading content, you grant us a limited license to process and analyze it for the purpose of providing our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Privacy</h2>
              <p>Your privacy is important to us. Please review our <Link href="/privacy/" className="text-[#8B6FFF] hover:text-[#6C47FF]">Privacy Policy</Link> to understand how we collect, use, and protect your information.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>Apparely is provided &quot;as is&quot; without warranties of any kind. We are not responsible for any fashion choices or outcomes resulting from the use of our recommendations.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
              <p>We may update these Terms of Service from time to time. We will notify you of any material changes through the app or via email.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact</h2>
              <p>If you have any questions about these Terms, please contact us at <a href="mailto:hello@apparely.app" className="text-[#8B6FFF] hover:text-[#6C47FF]">hello@apparely.app</a>.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
