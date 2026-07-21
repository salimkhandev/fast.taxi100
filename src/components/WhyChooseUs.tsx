import { Zap, Banknote, ShieldCheck, Clock, MapPin, Handshake, Car, Swords } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "أسرع من التكسي في الزحمة",
    desc: "الدراجة النارية تتفادى ازدحام الطرق وتوصلك بضعف سرعة التكسي التقليدي.",
    color: "#F5A623",
  },
  {
    icon: Banknote,
    title: "أسعار أقل بكثير",
    desc: "توفّر نسبة كبيرة مقارنة بأجرة التاكسي لنفس المسافة — مناسب يومياً.",
    color: "#4CAF50",
  },
  {
    icon: ShieldCheck,
    title: "أمان وموثوقية",
    desc: "سائقون مُختارون بعناية، معرّفون لدى الفريق، يضمنون رحلة آمنة في كل مرة.",
    color: "#1E88E5",
  },
  {
    icon: Clock,
    title: "خدمة على مدار الساعة",
    desc: "٢٤ ساعة يومياً، ٧ أيام أسبوعياً — صباحاً وليلاً، في كل الأوقات.",
    color: "#9C27B0",
  },
  {
    icon: MapPin,
    title: "يغطي كل مناطق الناصرية",
    desc: "من الوسط إلى الأطراف — نصلك أينما كنت داخل مدينة الناصرية.",
    color: "#F5A623",
  },
  {
    icon: Handshake,
    title: "دفع عند الوصول",
    desc: "لا دفع مسبق، لا بطاقة ائتمان مطلوبة — ادفع نقداً عند وصولك فقط.",
    color: "#FF5722",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="section-padding relative"
      style={{ background: "#0D1B2A" }}
    >
      {/* Top amber glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,166,35,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.25)",
              color: "#F5A623",
            }}
          >
            لماذا FAST.TAXI100؟
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            الاختيار الذكي لأهل الناصرية
          </h2>
          <p className="text-white/55 text-lg max-w-lg mx-auto">
            نوفر لك كل ما تحتاجه في رحلة مثالية — السرعة، الأمان، والسعر المناسب.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="card group cursor-default"
                style={{ animationDelay: `${idx * 0.07}s` }}
              >
                {/* Icon circle */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${b.color}15`,
                    border: `1px solid ${b.color}30`,
                    color: b.color,
                  }}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3
                  className="font-black text-lg text-white mb-2 transition-colors duration-200"
                  style={{ lineHeight: 1.3 }}
                >
                  {b.title}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="mt-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"
                  style={{ background: `linear-gradient(90deg, transparent, ${b.color})` }}
                />
              </div>
            );
          })}
        </div>

        {/* Comparison highlight box */}
        <div
          className="mt-12 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(245,166,35,0.08), rgba(245,166,35,0.03))",
            border: "1px solid rgba(245,166,35,0.2)",
          }}
        >
          {[
            { label: "تكسي تقليدي", sub: "بطيء · غالي · غير متاح دوماً", icon: Car, dim: true },
            { label: "مقارنة", sub: "", icon: Swords, dim: false },
            { label: "FAST.TAXI100", sub: "سريع · رخيص · متاح 24/7", icon: Zap, dim: false },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className={`flex flex-col items-center justify-center ${item.dim ? "opacity-40" : ""}`}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber/10 text-amber mb-2">
                  <Icon className="w-6 h-6" />
                </div>
                <p
                  className="font-black text-lg"
                  style={{ color: item.dim ? "white" : "#F5A623" }}
                >
                  {item.label}
                </p>
                {item.sub && (
                  <p className="text-sm text-white/50 mt-1">{item.sub}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
