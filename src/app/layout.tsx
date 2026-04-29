import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apparely — Your Personal AI Stylist",
  description: "Snap your wardrobe. Chat with Lumina. Dress with confidence. AI-powered personal styling in your pocket.",
  keywords: ["AI stylist", "wardrobe app", "outfit recommendations", "fashion AI", "personal stylist app"],
  authors: [{ name: "Apparely" }],
  openGraph: {
    type: "website",
    url: "https://apparely.app",
    title: "Apparely — Your Personal AI Stylist",
    description: "Snap your wardrobe. Chat with Lumina. Get personalized outfit recommendations from your own closet.",
    images: ["https://apparely.app/assets/icons/app_icon_1024.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apparely — Your Personal AI Stylist",
    description: "Snap your wardrobe. Chat with Lumina. Get personalized outfit recommendations from your own closet.",
    images: ["https://apparely.app/assets/icons/app_icon_1024.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#6C47FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/assets/icons/app_icon_1024.png" />
        <link rel="apple-touch-icon" href="/assets/icons/app_icon_1024.png" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-white">
        {children}
        {/* Vercel Web Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
            `,
          }}
        />
        <script defer src="/_vercel/insights/script.js" />
      </body>
    </html>
  );
}
