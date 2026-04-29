"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Try before you subscribe",
    features: [
      { text: "Up to 25 wardrobe items", included: true },
      { text: "10 AI recommendations/day", included: true },
      { text: "5 outfit generations/day", included: true },
      { text: "2 health scans/day", included: true },
      { text: "Cloud AI features", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Beginner",
    price: "5.99",
    description: "Local AI, unlimited basics",
    features: [
      { text: "Up to 200 wardrobe items", included: true },
      { text: "Unlimited recommendations", included: true },
      { text: "Unlimited outfit generations", included: true },
      { text: "Unlimited health scans", included: true },
      { text: "Cloud AI features", included: false },
    ],
    cta: "Subscribe",
    popular: false,
  },
  {
    name: "Intermediate",
    price: "9.99",
    description: "300 cloud AI credits + 3-day trial",
    features: [
      { text: "Up to 200 wardrobe items", included: true },
      { text: "Unlimited local AI", included: true },
      { text: "300 cloud AI credits/mo", included: true },
      { text: "Advanced image analysis", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Advanced",
    price: "19.99",
    description: "Unlimited everything",
    features: [
      { text: "Unlimited wardrobe items", included: true },
      { text: "Unlimited local AI", included: true },
      { text: "Unlimited cloud AI credits", included: true },
      { text: "All premium features", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Go Advanced",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#6C47FF]/10 border border-[#6C47FF]/20 text-sm font-semibold text-[#8B6FFF] uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Choose Your Style Level</h2>
          <p className="text-lg text-[#A0A0B0]">Start free, upgrade when you're ready for more.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-[#1A1A24] border-[#6C47FF] shadow-lg shadow-[#6C47FF]/10"
                  : "bg-[#1A1A24]/60 border-white/5 hover:border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#6C47FF] text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-lg text-[#A0A0B0]">$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-[#6B6B7B]">/mo</span>
                </div>
                <p className="text-sm text-[#6B6B7B]">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-[#4ADE80] flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-[#6B6B7B] flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-[#A0A0B0]" : "text-[#6B6B7B]"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#download"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#6C47FF] hover:bg-[#8B6FFF] text-white hover:shadow-lg hover:shadow-[#6C47FF]/25"
                    : "bg-white/5 border border-white/10 hover:border-[#6C47FF]/50 hover:text-[#8B6FFF] text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
