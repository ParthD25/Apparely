"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      {/* Simple nav */}
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
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#6C47FF]/10 border border-[#6C47FF]/20 text-sm font-semibold text-[#8B6FFF] uppercase tracking-wider mb-4">
              Contact
            </span>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-[#A0A0B0]">
              Questions, feedback, or partnership inquiries? We&apos;d love to hear from you.
            </p>
          </motion.div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-[#1A1A24] border border-white/10 rounded-xl text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-[#6C47FF]/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-[#1A1A24] border border-white/10 rounded-xl text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-[#6C47FF]/30 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1A1A24] border border-white/10 rounded-xl text-white placeholder-[#6B6B7B] focus:outline-none focus:border-[#6C47FF] focus:ring-1 focus:ring-[#6C47FF]/30 transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#6C47FF] hover:bg-[#8B6FFF] text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#6C47FF]/25 disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-[#4ADE80]/10 border-2 border-[#4ADE80] flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#4ADE80]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-[#A0A0B0]">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
            </motion.div>
          )}

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-[#6B6B7B] mb-2">Or email us directly</p>
            <a
              href="mailto:hello@apparely.app"
              className="inline-flex items-center gap-2 text-[#8B6FFF] hover:text-[#6C47FF] transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@apparely.app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
