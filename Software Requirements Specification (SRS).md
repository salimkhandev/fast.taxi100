# Software Requirements Specification (SRS)
## Fast.Taxi100 — Official Website

**Prepared for:** Fast.Taxi100 (Motorcycle Ride-Hailing Service, Al-Nasiriyah, Iraq)
**Document Version:** 1.0
**Date:** July 21, 2026
**Platform:** Next.js (RTL, Arabic)

---

## 1. Introduction

### 1.1 Purpose
This document specifies the requirements for building the official website of **Fast.Taxi100**, the first motorcycle-taxi (bike-hailing) service in Al-Nasiriyah, Iraq. The website will serve as the primary digital presence for the business until a native mobile app is launched, functioning as a booking, recruitment, and trust-building tool.

### 1.2 Scope
The website will:
- Present the Fast.Taxi100 brand professionally and consistently with its existing Instagram identity
- Enable riders to request rides via call/WhatsApp (manual booking, since no live app exists yet)
- Enable prospective drivers to apply to join the platform
- Publish pricing, coverage areas, and safety information currently missing from all existing channels
- Capture a waitlist for the upcoming mobile app
- Improve discoverability outside of Instagram (e.g., via Google search)

### 1.3 Intended Audience
- Developer(s) building the Next.js site
- Fast.Taxi100 business owner/stakeholder
- Future team members maintaining or extending the site

### 1.4 Background
Fast.Taxi100 currently operates entirely through Instagram (@fast.taxi100) and manual phone/WhatsApp bookings (07814007182). It has no website, no live app, no published pricing, and no formal driver application process. This SRS addresses those gaps.

---

## 2. Business Overview

### 2.1 Business Model
- Fast.Taxi100 is a **ride-hailing platform**, not a personal driving service.
- Independent drivers use **their own motorcycles** and earn per-ride fares.
- The platform takes a **commission per ride** ("عمولة مناسبة على كل رحلة") from drivers.
- Booking is currently 100% manual (phone call / WhatsApp); a mobile app is in development but not yet live.

### 2.2 Current Value Proposition (Riders)
- First and only bike-taxi service in Al-Nasiriyah
- Faster than regular taxis in city traffic/congestion
- Lower fares than traditional taxis
- Safe, reliable, available 24/7
- Covers all areas of Nasiriyah (possible intercity routes — to be confirmed)

### 2.3 Current Value Proposition (Drivers)
- Extra daily income (دخل إضافي يومي)
- Flexible working hours (ساعات عمل مرنة)
- Fair commission per ride (عمولة مناسبة على كل رحلة)
- Ongoing team support (دعم ومتابعة مستمرة من الفريق)

### 2.4 Identified Problems the Website Must Solve
| # | Problem | Impact |
|---|---|---|
| 1 | No online booking — 100% manual calls/WhatsApp | Bottleneck, lost customers during peak demand |
| 2 | No published pricing anywhere | Undermines "cheaper than taxi" claim, causes hesitation |
| 3 | No trust/legitimacy signals | Riders (especially female riders) hesitant to contact via WhatsApp cold |
| 4 | Weak, unstructured driver recruitment | Limits driver supply, the platform's core constraint |
| 5 | Inconsistent messaging across Instagram posts | Confusing first impression for new visitors |
| 6 | Entire presence lives inside Instagram | Not discoverable via Google; no owned digital asset |

---

## 3. Branding Guidelines

### 3.1 Name
- **Brand name:** FAST.TAXI100 (exact casing/format as used on Instagram and logo — do not alter)
- **Tagline:** أول تكسي دراجة في الناصرية ("The first motorcycle taxi in Nasiriyah")

### 3.2 Logo
- Already designed — two riders on a motorcycle silhouette, with speed/motion lines
- To be used in: header, footer, favicon, social share image (OG image)

### 3.3 Color Palette (derived from existing posts/logo)
| Role | Color | Approx. Hex |
|---|---|---|
| Primary (CTAs, highlights) | Golden yellow / amber | #F5A623 |
| Secondary (backgrounds, headers) | Navy / near-black | #0D1B2A |
| Accent | White | #FFFFFF |
| Optional accent (from app mockup) | Blue | #1E88E5 |

### 3.4 Typography
- Headings: Bold Arabic display font — e.g., **Cairo Bold** or **Tajawal Bold** or **IBM Plex Sans Arabic Bold**
- Body: **Cairo Regular** or **Tajawal Regular**
- Brand wordmark "FAST.TAXI100" retained in Latin script per existing usage (mixed-script identity)
- Loaded via `next/font` (Google Fonts)

### 3.5 Visual/Iconography Style
- Motion motifs: speed lines, lightning bolt (⚡), speedometer imagery
- Authentic photography: real drivers, real bikes, real Nasiriyah landmarks (e.g., the bridge, skyline) — avoid generic stock imagery
- Card-style promotional graphics matching his existing flyer aesthetic

---

## 4. Functional Requirements

### 4.1 General
- FR-1: Website must be fully in **Arabic**, with `dir="rtl"` and `lang="ar"` set at the root layout
- FR-2: Website must be a **responsive**, mobile-first single-page (scrolling) site with anchor navigation for MVP
- FR-3: Website must load logo, colors, and fonts consistent with existing Instagram branding

### 4.2 Header / Navigation
- FR-4: Sticky header with logo (right-aligned per RTL) and nav links: الرئيسية | كيف تعمل | الأسعار | كن سائقاً | الأسئلة الشائعة | تواصل معنا
- FR-5: Persistent, always-visible "احجز الآن" (Book Now) button in header

### 4.3 Hero Section
- FR-6: Headline: "أول تكسي دراجة في الناصرية"
- FR-7: Subheadline reinforcing speed/safety/coverage
- FR-8: Two primary CTA buttons:
  - 📞 اتصل الآن → `tel:+9647814007182`
  - 💬 واتساب → `https://wa.me/9647814007182?text=...` (pre-filled booking message)

### 4.4 How It Works Section
- FR-9: 3-step visual explanation of the manual booking flow:
  1. تواصل معنا عبر الاتصال أو واتساب
  2. حدد موقعك ووجهتك
  3. سائقنا يوصلك بسرعة وأمان
- FR-10: Note clarifying booking is manual for now, with "التطبيق قريباً" messaging

### 4.5 Why Choose Us Section
- FR-11: Benefit card grid:
  - ⚡ أسرع من التكسي في الزحمة
  - 💰 أسعار أقل
  - 🛡️ أمان وموثوقية
  - 🕐 خدمة على مدار الساعة
  - 📍 يغطي كل مناطق الناصرية

### 4.6 Pricing Section
- FR-12: Display pricing information (fixed rates, per-km, or zone-based — pending confirmation from business owner)
- FR-13: If exact figures unavailable at launch, publish pricing *logic* (e.g., "based on distance") rather than leaving the section blank

### 4.7 Coverage Area Section
- FR-14: List or map of Nasiriyah neighborhoods covered
- FR-15: Separate listing for intercity routes if confirmed as an active service (e.g., Suq Al-Shuyukh, Samawah)

### 4.8 Driver Recruitment Section
- FR-16: Dedicated section (or page) reusing existing recruitment messaging:
  - 💰 دخل إضافي يومي
  - 🕐 ساعات عمل مرنة
  - 🤝 عمولة مناسبة على كل رحلة
  - 📞 دعم ومتابعة مستمرة من الفريق
- FR-17: List of driver requirements (own motorcycle, valid license/ID, minimum age — to be confirmed)
- FR-18: **Driver application form** with fields:
  - الاسم الكامل (Full name)
  - رقم الهاتف (Phone number)
  - المنطقة (Area)
  - نوع الدراجة وسنة الصنع (Bike model/year)
- FR-19: Form submission sends data via WhatsApp deep link (`wa.me`) and/or email to the business owner

### 4.9 Gallery Section
- FR-20: Image/video gallery pulling existing content (drivers, fleet, night-ride clips) to reinforce brand authenticity

### 4.10 App Waitlist Section
- FR-21: "تطبيقنا قادم قريباً" section with a short waitlist signup form (phone and/or email)
- FR-22: Captured leads stored for future app launch marketing

### 4.11 FAQ Section
- FR-23: Expandable FAQ covering:
  - كيف أحجز رحلة؟
  - هل الخدمة آمنة؟
  - ما هي مناطق التغطية؟
  - كيف أنضم كسائق؟
  - ما هي طريقة الدفع؟

### 4.12 Footer
- FR-24: Contact info (phone, WhatsApp button), Instagram link, service area note, copyright line

---

## 5. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-1 | Site must be built with **Next.js** (App Router recommended) |
| NFR-2 | Full **RTL** layout support (logical CSS properties, RTL-aware component library e.g. Tailwind + RTL plugin) |
| NFR-3 | Mobile-first responsive design (majority of target users will access via phone) |
| NFR-4 | Fast load time — optimized images (Next.js `<Image>` component), minimal JS bloat |
| NFR-5 | SEO-optimized for Arabic search terms (e.g., "تكسي دراجة الناصرية", "توصيل بالدراجة النارية الناصرية") |
| NFR-6 | Accessible click-to-call and click-to-WhatsApp links functional on all devices |
| NFR-7 | Deployed with HTTPS on a custom domain (see Section 7) |
| NFR-8 | Analytics integration (e.g., basic page-view tracking) to measure booking/driver-form conversions |

---

## 6. Content Requirements (Pending Confirmation from Business Owner)

The following information must be confirmed before final content population:
1. Exact pricing structure (fixed fare, per-km rate, or zone-based)
2. Confirmed service area boundaries within Nasiriyah
3. Whether intercity routes (Suq Al-Shuyukh, Samawah, etc.) are an active ongoing service or one-off promotional content
4. Formal driver requirements (license type, age minimum, bike condition standards)
5. Number of active drivers currently on the platform (for social proof, if shareable)
6. Expected app launch timeframe (for the "coming soon" section)

---

## 7. Technical Stack & Deployment

| Component | Recommendation |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS with RTL support plugin |
| Fonts | Cairo / Tajawal via `next/font` (Google Fonts) |
| Forms | Client-side form → WhatsApp deep link and/or serverless email handler (e.g., Resend, Formspree) |
| Hosting | Vercel (native Next.js support) |
| Domain | fasttaxi100.com or fast-taxi100.com (subject to availability) |
| Analytics | Google Analytics or Vercel Analytics |

---

## 8. Out of Scope (for MVP)

- Live in-app booking/dispatch system (pending native app development)
- User accounts / login system
- Online payment processing
- Real-time driver tracking/map
- Multi-language support (English) — Arabic-only for MVP

---

## 9. Success Criteria

The website will be considered successful if it:
- Reduces friction for new riders to initiate a booking (via one-click call/WhatsApp)
- Increases driver applications compared to Instagram-only recruitment
- Establishes a discoverable, credible web presence independent of Instagram
- Provides a clear foundation to transition into the full booking app once launched

---

*End of Document*