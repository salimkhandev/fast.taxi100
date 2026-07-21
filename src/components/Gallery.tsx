import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    caption: "أول تكسي دراجة في الناصرية — FAST.TAXI100",
    aspect: "square",
    src: "/gallery/img1.png",
  },
  {
    caption: "رحلات سريعة وآمنة للركاب",
    id: 2,
    aspect: "wide",
    src: "/gallery/img2.png",
  },
  {
    id: 3,
    caption: "سائقون محترفون بدراجات حديثة",
    aspect: "square",
    src: "/gallery/img3.png",
  },
  {
    id: 4,
    caption: "فريق عمل FAST.TAXI100",
    aspect: "tall",
    src: "/gallery/img4.png",
  },
  {
    id: 5,
    caption: "توصيل في شوارع الناصرية الحديثة",
    aspect: "wide",
    src: "/gallery/img5.png",
  },
];

const aspectMap: Record<string, string> = {
  square: "aspect-square",
  wide: "aspect-video",
  tall: "aspect-[3/4]",
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
            سائقونا، دراجاتنا الحديثة، وشوارع الناصرية — خيارك الأول للتنقل السريع.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                aspectMap[item.aspect]
              } ${spanMap[item.id] ?? ""}`}
              style={{
                background: "#1A2B3C",
                border: "1px solid rgba(245,166,35,0.15)",
              }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(13,27,42,0.9) 0%, transparent 70%)",
                }}
              >
                <p className="text-white text-sm font-bold">{item.caption}</p>
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
