"use client";

import Image from "next/image";
import { Zap, MessageCircle, Phone, ShieldCheck, CheckCircle2, Bike, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WA_URL =
  "https://wa.me/9647814007182?text=" +
  encodeURIComponent("السلام عليكم، أريد حجز رحلة مع FAST.TAXI100 ⚡");

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #060E18 60%, #0D1B2A 100%)",
      }}
    >
      {/* ── Decorative speed-line grid (background) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white"
            style={{
              top: `${i * 7 + 2}%`,
              left: 0,
              right: 0,
              transform: `scaleX(${0.4 + (i % 3) * 0.2})`,
              transformOrigin: "left",
            }}
          />
        ))}
      </div>

      {/* ── Amber radial glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,166,35,0.18) 0%, transparent 70%)",
          transform: "translateY(-50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24 pb-16 lg:pt-28 lg:pb-20">

          {/* ── Text content (right in RTL) ── */}
          <motion.div
            className="flex flex-col items-start gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold"
              style={{
                background: "rgba(245,166,35,0.12)",
                border: "1px solid rgba(245,166,35,0.3)",
                color: "#F5A623",
              }}
            >
              <Zap className="w-4 h-4" />
              أول وأسرع خدمة توصيل بالدراجة في الناصرية
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.75rem)", lineHeight: 1.2 }}
            >
              <span className="text-white">أول تكسي دراجة</span>
              <br />
              <span className="text-gradient">في الناصرية</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-white/70 font-medium leading-relaxed flex flex-col gap-1"
              style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: "520px" }}
            >
              <span className="flex items-center gap-2"><Bike className="w-5 h-5 text-amber" /> توصيل ركاب بالدراجة النارية</span>
              <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-amber" /> سريع | آمن | موثوق</span>
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-amber" /> الناصرية</span>
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { num: "24/7",   label: "خدمة مستمرة" },
                { num: "100٪",   label: "تغطية الناصرية" },
                { num: "⚡",     label: "أسرع من التكسي" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-black text-amber text-xl">{stat.num}</p>
                  <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber text-base px-7 py-3.5 glow-amber justify-center w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span dir="ltr">+964 781 400 7182</span>
              </a>
              <a
                href="tel:+9647814007182"
                className="btn-outline text-base px-7 py-3.5 justify-center w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن
              </a>
            </div>

            {/* Trust note */}
            <p className="text-xs text-white/35 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber" />
              سائقون موثوقون · الدفع عند الوصول · بدون تطبيق مسبق
            </p>
          </motion.div>

          {/* ── Logo / visual (left in RTL) ── */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer amber ring glow */}
              <div
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%)",
                }}
              />
              {/* Logo circle */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
                style={{ borderColor: "rgba(245,166,35,0.4)" }}
              >
                <Image
                  src="/ride-logo.jpg"
                  alt="FAST.TAXI100 — تكسي الدراجات الناصرية"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Floating badge — top */}
              <div
                className="absolute -top-3 -right-3 rounded-2xl px-3 py-2 text-center shadow-xl"
                style={{ background: "#F5A623", color: "#0D1B2A" }}
              >
                <p className="font-black text-sm leading-none">FAST</p>
                <p className="font-black text-xs opacity-75">.TAXI100</p>
              </div>

              {/* Floating badge — bottom */}
              <div
                className="absolute -bottom-2 -left-3 rounded-2xl px-3 py-2 shadow-xl"
                style={{
                  background: "rgba(13,27,42,0.95)",
                  border: "1px solid rgba(245,166,35,0.3)",
                }}
              >
                <p className="text-xs text-white/60">متاح الآن</p>
                <p className="font-black text-amber text-sm flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-500" /> خدمة نشطة</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll hint ── */}
        <div className="flex justify-center pb-8">
          <a
            href="#how"
            className="flex flex-col items-center gap-2 text-white/30 hover:text-amber transition-colors"
            aria-label="اذهب لقسم كيف تعمل"
          >
            <span className="text-xs">اكتشف المزيد</span>
            <span
              className="block w-px h-8 bg-gradient-to-b from-white/0 via-amber/50 to-amber/0"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
