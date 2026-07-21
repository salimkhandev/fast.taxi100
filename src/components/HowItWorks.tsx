import { PhoneCall, MapPin, Zap, MessageCircle, Phone } from "lucide-react";

const steps = [
  {
    number: "١",
    icon: PhoneCall,
    title: "تواصل معنا",
    desc: "اتصل بنا أو أرسل رسالة واتساب مباشرةً. لا تطبيق مطلوب، لا تسجيل، بدون انتظار.",
    highlight: "اتصال · واتساب",
  },
  {
    number: "٢",
    icon: MapPin,
    title: "حدد موقعك ووجهتك",
    desc: "أخبرنا من أين أنت وإلى أين تريد الذهاب داخل الناصرية — أي حي، أي وقت.",
    highlight: "جميع أحياء الناصرية",
  },
  {
    number: "٣",
    icon: Zap,
    title: "سائقنا يوصلك بسرعة وأمان",
    desc: "سائق موثوق يصلك في أقرب وقت، يوصلك إلى وجهتك بأمان وبأسعار أقل من التكسي.",
    highlight: "أمان · سرعة · راحة",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="section-padding relative overflow-hidden"
      style={{ background: "#0A1828" }}
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

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
            كيف تعمل الخدمة؟
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            ٣ خطوات بسيطة للوصول إلى وجهتك
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            بدون تطبيق، بدون تسجيل، بدون انتظار — فقط تواصل معنا وانطلق!
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-14 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(245,166,35,0.3), rgba(245,166,35,0.3), transparent)",
              margin: "0 12%",
            }}
          />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="card flex flex-col items-center text-center gap-4 relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Step number bubble */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #F5A623, #D4891A)",
                    color: "#0D1B2A",
                    boxShadow: "0 0 20px rgba(245,166,35,0.4)",
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-amber/10 text-amber my-1">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text */}
                <h3 className="font-black text-white text-xl">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>

                {/* Highlight tag */}
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full mt-auto"
                  style={{
                    background: "rgba(245,166,35,0.1)",
                    color: "#F5A623",
                    border: "1px solid rgba(245,166,35,0.2)",
                  }}
                >
                  {step.highlight}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA under section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-10 w-full sm:w-auto">
          <a
            href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20حجز%20رحلة%20مع%20FAST.TAXI100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber px-7 py-3 justify-center w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            احجز عبر واتساب
          </a>
          <a href="tel:+9647814007182" className="btn-outline px-7 py-3 justify-center w-full sm:w-auto">
            <Phone className="w-5 h-5" />
            أو اتصل الآن
          </a>
        </div>
      </div>
    </section>
  );
}
