import { MapPin, Check, Info, Milestone, MessageCircle, CheckCircle2, Phone } from "lucide-react";

const neighborhoods = [
  "الجامعة",
  "الحبوبي",
  "الوركاء",
  "العزيزية",
  "النصر",
  "السكري",
  "الرفاع",
  "الجمهورية",
  "الطالبية",
  "الفرحاتية",
  "المنصور",
  "حي المهندسين",
  "الثورة",
  "البصرة الصغيرة",
  "الصالحية",
  "أبو سخير",
  "النهضة",
  "العروبة",
  "حي الأطباء",
  "البلدية",
  "الكرامة",
  "الشعب",
  "المركز",
  "الجسر الجديد",
];

const intercity = [
  { city: "سوق الشيوخ", dist: "~٣٠ كم", status: "متاح بالاتفاق" },
  { city: "الشطرة",      dist: "~٤٥ كم", status: "متاح بالاتفاق" },
  { city: "الرفاعي",     dist: "~٦٠ كم", status: "تواصل للاستفسار" },
];

export default function Coverage() {
  return (
    <section
      id="coverage"
      className="section-padding relative"
      style={{ background: "#0A1828" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.25)",
              color: "#F5A623",
            }}
          >
            <MapPin className="w-4 h-4" /> مناطق التغطية
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            نغطي كل أحياء الناصرية
          </h2>
          <p className="text-white/55 text-lg max-w-lg mx-auto">
            من أي حي وإلى أي حي — FAST.TAXI100 يوصلك في جميع أنحاء مدينة الناصرية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Neighborhoods grid */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#1A2B3C",
                border: "1px solid rgba(245,166,35,0.12)",
              }}
            >
              <h3 className="font-black text-white text-lg mb-5 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#4CAF50", boxShadow: "0 0 6px #4CAF50" }}
                />
                أحياء الناصرية المغطاة
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {neighborhoods.map((n) => (
                  <div
                    key={n}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold text-white/70 hover:text-white transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    {n}
                  </div>
                ))}
              </div>

              {/* "All areas" note */}
              <p className="mt-5 text-xs text-white/40 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber" />
                إذا حيّك غير مذكور، تواصل معنا — على الأرجح نغطيه!
              </p>
            </div>
          </div>

          {/* Intercity + Map placeholder */}
          <div className="flex flex-col gap-5">

            {/* Intercity */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#1A2B3C",
                border: "1px solid rgba(30,136,229,0.2)",
              }}
            >
              <h3 className="font-black text-white text-lg mb-4 flex items-center gap-2">
                <Milestone className="w-5 h-5 text-blue-400" />
                رحلات خارج المدينة
              </h3>
              <div className="flex flex-col gap-3">
                {intercity.map((r) => (
                  <div
                    key={r.city}
                    className="flex items-center justify-between py-2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div>
                      <p className="font-bold text-white text-sm">{r.city}</p>
                      <p className="text-white/40 text-xs">{r.dist}</p>
                    </div>
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(30,136,229,0.12)",
                        color: "#64B5F6",
                        border: "1px solid rgba(30,136,229,0.2)",
                      }}
                    >
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20الاستفسار%20عن%20رحلة%20خارج%20المدينة"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full text-center py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
                style={{
                  background: "rgba(30,136,229,0.1)",
                  color: "#64B5F6",
                  border: "1px solid rgba(30,136,229,0.2)",
                }}
              >
                <MessageCircle className="w-4 h-4" /> استفسر عن رحلتك
              </a>
            </div>

            {/* Availability badge */}
            <div
              className="rounded-2xl p-5 text-center flex flex-col items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(245,166,35,0.1), rgba(245,166,35,0.04))",
                border: "1px solid rgba(245,166,35,0.2)",
              }}
            >
              <CheckCircle2 className="w-10 h-10 text-green-500 mb-2" />
              <p className="font-black text-white text-base">خدمة نشطة الآن</p>
              <p className="text-white/50 text-sm mt-1">٢٤ ساعة · ٧ أيام أسبوعياً</p>
              <a
                href="tel:+9647814007182"
                className="btn-amber mt-4 justify-center text-sm w-full"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
