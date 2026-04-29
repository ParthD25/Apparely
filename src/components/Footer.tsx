"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Download", href: "/#download" },
  ],
  Company: [
    { label: "Contact", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C47FF] to-[#8B6FFF] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Apparely</span>
            </Link>
            <p className="text-sm text-[#A0A0B0] leading-relaxed max-w-xs">
              Your personal AI stylist. Snap, chat, and dress with confidence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#A0A0B0] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-[#6B6B7B]">
            &copy; {new Date().getFullYear()} Apparely. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
