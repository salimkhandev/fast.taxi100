"use client";

import { useState } from "react";
import { Bike, DollarSign, Clock, Handshake, Headset, CheckCircle2, ClipboardList, FileText, MessageCircle } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "دخل إضافي يومي",           desc: "اكسب بشكل يومي بجانب عملك الأساسي — الأرباح تدخل مباشرة بيدك." },
  { icon: Clock,      title: "ساعات عمل مرنة",            desc: "أنت من يحدد وقت عملك — صباحاً أو مساءً، حسب جدولك الشخصي." },
  { icon: Handshake,  title: "عمولة مناسبة على كل رحلة", desc: "نسبة عمولة عادلة تتفق عليها مع الفريق من البداية — بدون مفاجآت." },
  { icon: Headset,    title: "دعم ومتابعة مستمرة",        desc: "فريق FAST.TAXI100 دائماً معك — لأي استفسار أو مشكلة في أي وقت." },
];

const requirements = [
  "دراجة نارية خاصة بك وبحالة جيدة",
  "رخصة قيادة سارية المفعول",
  "بطاقة هوية وطنية",
  "العمر لا يقل عن ١٨ سنة",
  "معرفة جيدة بشوارع الناصرية",
  "التزام وانضباط في التعامل مع الزبائن",
];

const WA_BASE = "https://wa.me/9647814007182?text=";

export default function DriverRecruitment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "",
    bike: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    // Build a pre-filled WhatsApp message with the form data
    const msg = encodeURIComponent(
      `السلام عليكم، أريد الانضمام كسائق في FAST.TAXI100 ⚡\n\n` +
      `الاسم: ${form.name}\n` +
      `رقم الهاتف: ${form.phone}\n` +
      `المنطقة: ${form.area || "غير محدد"}\n` +
      `نوع الدراجة: ${form.bike || "غير محدد"}`
    );
    window.open(WA_BASE + msg, "_blank");
    setSent(true);
  };

  return (
    <section
      id="driver"
      className="section-padding relative"
      style={{ background: "#060E18" }}
    >
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,166,35,0.35), transparent)",
        }}
      />

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
            <Bike className="w-4 h-4" /> انضم كسائق
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            حوّل دراجتك إلى مصدر دخل يومي
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            انضم لفريق FAST.TAXI100 واستفد من دراجتك الموجودة لتحقيق دخل إضافي
            بساعات مرنة تناسبك.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Right column: Benefits + Requirements */}
          <div className="flex flex-col gap-7">

            {/* Benefits */}
            <div>
              <h3 className="font-black text-white text-xl mb-5 flex items-center gap-2">
                🎯 ماذا تكسب معنا؟
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="card">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber/10 text-amber mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-black text-white text-base mb-1">{b.title}</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Requirements */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#1A2B3C",
                border: "1px solid rgba(245,166,35,0.12)",
              }}
            >
              <h3 className="font-black text-white text-lg mb-4 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-amber" />
                متطلبات الانضمام
              </h3>
              <ul className="flex flex-col gap-2.5">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/65">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                      style={{ background: "rgba(245,166,35,0.15)", color: "#F5A623" }}
                    >
                      {i + 1}
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left column: Application form */}
          <div
            className="rounded-2xl p-7 sticky top-24"
            style={{
              background: "linear-gradient(160deg, #1A2B3C, #0F1E2E)",
              border: "2px solid rgba(245,166,35,0.25)",
            }}
          >
            {sent ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center text-center gap-4 py-8">
                <CheckCircle2 className="w-14 h-14 text-green-500" />
                <h3 className="font-black text-white text-xl">
                  تم إرسال طلبك!
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  سيتم تحويلك إلى واتساب. سيتواصل معك فريق FAST.TAXI100 في أقرب وقت.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline text-sm mt-2 px-6 py-2"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-black text-white text-xl mb-1 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber" /> قدّم طلبك الآن
                </h3>
                <p className="text-white/50 text-sm mb-7">
                  أملأ البيانات وسنتواصل معك خلال ٢٤ ساعة
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-white/70 mb-1.5">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="مثال: علي حسن محمد"
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        direction: "rtl",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(245,166,35,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-white/70 mb-1.5">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07xxxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        direction: "ltr",
                        textAlign: "right",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(245,166,35,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  {/* Area */}
                  <div>
                    <label className="block text-sm font-bold text-white/70 mb-1.5">
                      المنطقة / الحي
                    </label>
                    <input
                      type="text"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="مثال: حي الجامعة"
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        direction: "rtl",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(245,166,35,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  {/* Bike */}
                  <div>
                    <label className="block text-sm font-bold text-white/70 mb-1.5">
                      نوع الدراجة وسنة الصنع
                    </label>
                    <input
                      type="text"
                      name="bike"
                      value={form.bike}
                      onChange={handleChange}
                      placeholder="مثال: هوندا CG 125 — 2020"
                      className="w-full px-4 py-3 rounded-xl text-sm font-medium text-white outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        direction: "rtl",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(245,166,35,0.6)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.12)")
                      }
                    />
                  </div>

                  <button type="submit" className="btn-amber justify-center mt-2 py-3.5 text-base glow-amber">
                    <MessageCircle className="w-5 h-5" />
                    أرسل الطلب عبر واتساب
                  </button>

                  <p className="text-center text-xs text-white/30">
                    سيفتح واتساب تلقائياً بعد الإرسال
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
