// Gallery placeholders — replace src with real image paths when ready
// e.g. src="/gallery/photo1.jpg"
const galleryItems = [
  { id: 1,  caption: "سائقونا في الشوارع",          aspect: "square",   icon: "🏍️" },
  { id: 2,  caption: "رحلات ليلية سريعة",            aspect: "wide",     icon: "🌙" },
  { id: 3,  caption: "أسطولنا من الدراجات",          aspect: "square",   icon: "⚡" },
  { id: 4,  caption: "في قلب الناصرية",             aspect: "tall",     icon: "📍" },
  { id: 5,  caption: "سائق سعيد، زبون سعيد",        aspect: "square",   icon: "😊" },
  { id: 6,  caption: "الجسر القديم — الناصرية",     aspect: "wide",     icon: "🌉" },
  { id: 7,  caption: "رحلات الصباح الباكر",         aspect: "square",   icon: "🌅" },
  { id: 8,  caption: "فريق FAST.TAXI100",           aspect: "square",   icon: "🤝" },
];

// Aspect ratio map for placeholder sizing
const aspectMap: Record<string, string> = {
  square: "aspect-square",
  wide:   "aspect-video",
  tall:   "aspect-[3/4]",
};

// Span classes to create masonry-like layout on grid
const spanMap: Record<number, string> = {
  2: "md:col-span-2",
  6: "md:col-span-2",
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding relative"
      style={{ background: "#0D1B2A" }}
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
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
            سائقونا الحقيقيون، دراجاتنا، وشوارع الناصرية — هذا هو FAST.TAXI100.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                aspectMap[item.aspect]
              } ${spanMap[item.id] ?? ""}`}
              style={{
                background: "#1A2B3C",
                border: "1px solid rgba(245,166,35,0.1)",
              }}
            >
              {/* ── Placeholder content (remove when adding real images) ── */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                {/* Large icon as visual stand-in */}
                <span
                  className="text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 12px rgba(245,166,35,0.4))" }}
                >
                  {item.icon}
                </span>

                {/* Caption */}
                <p className="text-xs md:text-sm text-white/50 text-center font-semibold leading-snug">
                  {item.caption}
                </p>

                {/* "Add image" hint */}
                <span
                  className="text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "rgba(245,166,35,0.12)",
                    color: "#F5A623",
                    border: "1px solid rgba(245,166,35,0.2)",
                  }}
                >
                  + أضف صورة
                </span>
              </div>

              {/* ── When adding real images, replace above div with: ──
                  <Image
                    src="/gallery/photo-X.jpg"
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
              ── And add this overlay below the Image tag: ── */}

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.85) 0%, transparent 60%)",
                }}
              >
                <p className="text-white text-xs font-bold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/45 text-sm mb-4">
            تابعنا على إنستغرام لمزيد من الصور ومقاطع الفيديو
          </p>
          <a
            href="https://www.instagram.com/p/Daxx9FsIoDl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex px-7 py-3 text-sm"
          >
            <span>📸</span>
            شاهد على إنستغرام
          </a>
        </div>
      </div>
    </section>
  );
}
