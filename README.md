<div align="center">

<img src="https://raw.githubusercontent.com/ParthD25/Apperly/main/assets/app_icon_1024.png" width="140" alt="Apparely App Icon">

# Apparely

### Your Personal AI Stylist

**Snap your wardrobe. Chat with Lumina. Dress with confidence.**

[![Website](https://img.shields.io/badge/Website-apparely.app-6C47FF?style=for-the-badge)](https://apparely.app)
[![iOS](https://img.shields.io/badge/Download-iOS-0A84FF?style=for-the-badge&logo=apple&logoColor=white)](https://apps.apple.com)

</div>

---

## Why I Built This

I created **Apparely** because I was tired of staring at my closet every morning with no idea what to wear. I wanted a personal stylist who knew every item I owned — but I didn't want to pay thousands for one. So I built an AI that does exactly that.

Apparely turns your phone into a fashion assistant. Snap photos of your clothes, chat with **Lumina** (the AI stylist), and get outfit recommendations tailored to your plans — all from your own closet.

---

## How It Works

| | |
|---|---|
| **1. Snap** | Photograph your clothes. AI auto-detects, crops, removes backgrounds, and catalogs everything. |
| **2. Chat** | Tell Lumina where you're going. She asks about setting, time, occasion, and style mood. |
| **3. Swipe** | Browse AI-curated outfit combinations. Like it? Swipe right. She learns your taste over time. |

<div align="center">

| Wardrobe | AI Chat | Outfit Swipe | Health Score |
|----------|---------|--------------|--------------|
| ![Wardrobe](https://raw.githubusercontent.com/ParthD25/Apperly/main/assets/screenshots/wardrobe.png) | ![Chat](https://raw.githubusercontent.com/ParthD25/Apperly/main/assets/screenshots/chat.png) | ![Swipe](https://raw.githubusercontent.com/ParthD25/Apperly/main/assets/screenshots/swipe.png) | ![Health](https://raw.githubusercontent.com/ParthD25/Apperly/main/assets/screenshots/health.png) |

</div>

---

## What It Does

- **Smart Wardrobe Cataloging** — AI detects clothing items, removes backgrounds, and auto-categorizes
- **Multi-Item Extraction** — Snap a flat-lay; tap each item to extract it individually
- **Concierge Chat Flow** — Lumina walks you through setting, location, time, and occasion
- **Tinder-Style Swipe Deck** — Like/dislike outfits; AI learns your preferences
- **Wardrobe Health Score** — Insights on variety, color balance, and wear frequency
- **Photo Feedback** — Upload a photo of your worn outfit for color/contrast tips
- **Privacy-First AI** — Image analysis runs on-device; your photos stay local

---

## The Tech Behind It

### Mobile App
| Layer | Technology |
|-------|-----------|
| Framework | Flutter (iOS-first) |
| State Management | Provider + Riverpod patterns |
| Local DB | SQLite (`apparely_wardrobe.db`) |
| Preferences | SharedPreferences |
| Images | `image_picker`, `camera`, `local_rembg` |

### AI / ML Stack
I designed a **local-first, profit-optimized** AI pipeline that minimizes cloud costs:

```
Image Analysis:  CoreML → Apple Vision → Local Python → Downloaded Model → Heuristic Fallback
Text Chat:       Dev Server → Downloaded LLM → Cloud (with explicit user consent)
```

| Component | Purpose |
|-----------|---------|
| CoreML | On-device image classification (zero cloud cost) |
| Apple Vision | Object detection and segmentation |
| Local Python | Custom heuristics for clothing categorization |
| Downloaded Models | Optional local LLM for offline text chat |
| Cloud Fallback | Groq/OpenAI only when local AI isn't enough |

### Backend
| Service | Tech |
|---------|------|
| Serverless Functions | Firebase Functions (TypeScript) |
| Auth | Firebase Auth |
| Subscriptions | RevenueCat (Beginner $5.99, Intermediate $9.99, Advanced $19.99) |
| Usage Tracking | Custom Firebase Functions with tier enforcement |

### Showcase Website
The marketing site is built with **Next.js**, **React Three Fiber** (3D particle background), **Framer Motion** (scroll animations), and **Tailwind CSS**.

---

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Flutter App   │────▶│  Firebase Auth  │────▶│  RevenueCat     │
│                 │     │                 │     │  (Subscriptions)│
│  ┌───────────┐  │     └─────────────────┘     └─────────────────┘
│  │  Camera   │  │
│  │  Gallery  │  │     ┌─────────────────┐
│  │  SQLite   │  │────▶│ Firebase Functions│
│  │  SharedPref│ │     │  (Usage Tracking) │
│  └───────────┘  │     └─────────────────┘
│                 │
│  ┌───────────┐  │     ┌─────────────────┐
│  │ CoreML    │  │     │  Cloud AI APIs  │
│  │ Apple Vis │  │────▶│  (Fallback)     │
│  │ Heuristics│  │     └─────────────────┘
│  └───────────┘  │
└─────────────────┘
```

---

## Subscription Tiers

| Plan | Price | What's Included |
|------|-------|-----------------|
| **Free** | $0/mo | 25 items, 10 recs/day, 5 gens/day |
| **Beginner** | $5.99/mo | 200 items, unlimited local AI |
| **Intermediate** | $9.99/mo | 300 cloud AI credits + 3-day trial |
| **Advanced** | $19.99/mo | Unlimited everything |

---

## Links

- **Website**: [apparely.app](https://apparely.app)
- **App Store**: Coming soon
- **Contact**: [hello@apparely.app](mailto:hello@apparely.app)

---

Built with passion by **Parth**.

&copy; 2025 Apparely. All rights reserved.
