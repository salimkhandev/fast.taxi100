const tiers = [
  {
    label: "رحلة قصيرة",
    sublabel: "داخل الحي الواحد",
    price: "1,000",
    unit: "دينار",
    distance: "حتى 2 كم",
    time: "٥–١٠ دقائق",
    examples: ["من البيت للجامع", "من السوق للمدرسة", "داخل الحي"],
    color: "#4CAF50",
    popular: false,
  },
  {
    label: "رحلة متوسطة",
    sublabel: "بين الأحياء المتجاورة",
    price: "2,500",
    unit: "دينار",
    distance: "٢ – ٥ كم",
    time: "١٠–٢٠ دقائق",
    examples: ["الجامعة ← الحبوبي", "الوركاء ← السكري", "العزيزية ← النصر"],
    color: "#F5A623",
    popular: true,
  },
  {
    label: "رحلة طويلة",
    sublabel: "عبر المدينة",
    price: "4,000",
    unit: "دينار",
    distance: "٥ – ١٠ كم",
    time: "٢٠–٣٠ دقائق",
    examples: ["الطرف الشمالي ← الجنوبي", "المركز ← الأطراف", "عبور كامل للمدينة"],
    color: "#1E88E5",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding relative"
      style={{ background: "#060E18" }}
    >
      {/* Top divider */}
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
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.25)",
              color: "#F5A623",
            }}
          >
            💰 الأسعار
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            أسعار شفافة وعادلة
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            أسعار تقديرية حسب المسافة — أرخص من التكسي التقليدي دوماً.
            السعر النهائي يُحدد عند الحجز.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="relative card flex flex-col gap-5"
              style={{
                border: tier.popular
                  ? "2px solid rgba(245,166,35,0.6)"
                  : "1px solid rgba(245,166,35,0.12)",
                background: tier.popular
                  ? "linear-gradient(160deg, #1A2B3C, #0F1E2E)"
                  : undefined,
              }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div
                  className="absolute -top-3.5 inset-x-0 flex justify-center"
                >
                  <span
                    className="text-xs font-black px-4 py-1 rounded-full"
                    style={{ background: "#F5A623", color: "#0D1B2A" }}
                  >
                    ⭐ الأكثر طلباً
                  </span>
                </div>
              )}

              {/* Label */}
              <div className="pt-2">
                <h3 className="font-black text-white text-xl">{tier.label}</h3>
                <p className="text-white/45 text-sm mt-0.5">{tier.sublabel}</p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2">
                <span
                  className="font-black leading-none"
                  style={{ fontSize: "2.8rem", color: tier.color }}
                >
                  {tier.price}
                </span>
                <span className="text-white/60 font-bold mb-1 text-sm">
                  {tier.unit} تقريباً
                </span>
              </div>

              {/* Meta */}
              <div className="flex gap-3 flex-wrap">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  📏 {tier.distance}
                </span>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  ⏱️ {tier.time}
                </span>
              </div>

              {/* Examples */}
              <ul className="flex flex-col gap-1.5">
                {tier.examples.map((ex, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/55">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: tier.color }}
                    />
                    {ex}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20حجز%20رحلة%20مع%20FAST.TAXI100"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center py-2.5 rounded-xl font-bold text-sm transition-all duration-200"
                style={
                  tier.popular
                    ? {
                        background: "#F5A623",
                        color: "#0D1B2A",
                      }
                    : {
                        background: "rgba(245,166,35,0.08)",
                        color: "#F5A623",
                        border: "1px solid rgba(245,166,35,0.25)",
                      }
                }
              >
                احجز هذه الرحلة 💬
              </a>
            </div>
          ))}
        </div>

        {/* Notes row */}
        <div
          className="rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm"
          style={{
            background: "rgba(245,166,35,0.05)",
            border: "1px solid rgba(245,166,35,0.12)",
          }}
        >
          {[
            { icon: "💵", text: "الدفع نقداً عند الوصول فقط" },
            { icon: "🤝", text: "السعر يُتفق عليه قبل الانطلاق" },
            { icon: "📞", text: "اسأل عن السعر الدقيق قبل الحجز" },
          ].map((note, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-white/55">
              <span className="text-xl">{note.icon}</span>
              <span>{note.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
