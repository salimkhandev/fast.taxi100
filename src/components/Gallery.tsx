"use client";

import { motion } from "framer-motion";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

/* Gallery cards: styled placeholders until real photos are added to /public/gallery/ */
const galleryItems = [
  {
    id: 1,
    caption: "أول تكسي دراجة في الناصرية — FAST.TAXI100",
    aspect: "square",
    emoji: "🏍️",
    gradient: "linear-gradient(135deg, #1A2B3C 0%, #0D1B2A 100%)",
    accentColor: "#F5A623",
    tag: "انطلاق الخدمة",
  },
  {
    id: 2,
    caption: "رحلات سريعة وآمنة للركاب",
    aspect: "wide",
    emoji: "⚡",
    gradient: "linear-gradient(135deg, #0F2035 0%, #1A3050 100%)",
    accentColor: "#F5A623",
    tag: "السرعة والأمان",
  },
  {
    id: 3,
    caption: "سائقون محترفون بدراجات حديثة",
    aspect: "square",
    emoji: "🪖",
    gradient: "linear-gradient(135deg, #162030 0%, #0A1520 100%)",
    accentColor: "#F5A623",
    tag: "سائقون موثوقون",
  },
  {
    id: 4,
    caption: "فريق عمل FAST.TAXI100",
    aspect: "tall",
    emoji: "🤝",
    gradient: "linear-gradient(135deg, #1C2B3A 0%, #0D1825 100%)",
    accentColor: "#F5A623",
    tag: "الفريق",
  },
  {
    id: 5,
    caption: "توصيل في شوارع الناصرية الحديثة",
    aspect: "wide",
    emoji: "🗺️",
    gradient: "linear-gradient(135deg, #0E1F30 0%, #1A2D40 100%)",
    accentColor: "#F5A623",
    tag: "الناصرية",
  },
];

const aspectMap: Record<string, string> = {
  square: "aspect-square",
  wide:   "aspect-video",
  tall:   "aspect-[3/4]",
};

const spanMap: Record<number, string> = {
  2: "md:col-span-2",
  5: "md:col-span-2",
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding relative"
      style={{ background: "#0D1B2A" }}
    >
      {/* Top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.25)",
              color: "#F5A623",
            }}
          >
            📸 معرض الصور
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            FAST.TAXI100 على أرض الواقع
          </h2>
          <p className="text-white/55 text-base max-w-md mx-auto">
            سائقونا، دراجاتنا الحديثة، وشوارع الناصرية — خيارك الأول للتنقل السريع.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer flex flex-col items-center justify-center ${
                aspectMap[item.aspect]
              } ${spanMap[item.id] ?? ""}`}
              style={{
                background: item.gradient,
                border: "1px solid rgba(245,166,35,0.2)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 40%, rgba(245,166,35,0.08) 0%, transparent 65%)",
                }}
              />

              {/* Corner badge */}
              <div
                className="absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(245,166,35,0.15)",
                  border: "1px solid rgba(245,166,35,0.3)",
                  color: "#F5A623",
                }}
              >
                {item.tag}
              </div>

              {/* Emoji icon */}
              <div className="text-5xl md:text-6xl mb-3 select-none transition-transform duration-300 group-hover:scale-110">
                {item.emoji}
              </div>

              {/* Caption */}
              <p
                className="text-white/70 text-xs md:text-sm font-bold text-center px-4 leading-snug"
                dir="rtl"
              >
                {item.caption}
              </p>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{
                  background: "linear-gradient(to top, rgba(13,27,42,0.85) 0%, transparent 60%)",
                }}
              >
                <p className="text-white text-sm font-bold w-full text-center">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white/45 text-sm mb-4">
            تابعنا على إنستغرام لمزيد من الصور ومقاطع الفيديو
          </p>
          <a
            href="https://www.instagram.com/p/Daxx9FsIoDl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center justify-center gap-2 px-7 py-3 text-sm w-full sm:w-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            شاهد على إنستغرام
          </a>
        </motion.div>
      </div>
    </section>
  );
}
