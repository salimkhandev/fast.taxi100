"use client";

import { useState } from "react";

const faqs = [
  {
    q: "كيف أحجز رحلة؟",
    a: "الحجز بسيط جداً — اتصل بنا على الرقم 07814007182 أو أرسل رسالة عبر واتساب. أخبرنا بموقعك الحالي ووجهتك، وسيصلك السائق في أقرب وقت ممكن.",
  },
  {
    q: "هل الخدمة آمنة؟",
    a: "نعم، السلامة أولويتنا. جميع سائقينا معروفون لدى الفريق وتم التحقق منهم. الدراجات بحالة جيدة، والسائقون ملتزمون بقوانين المرور.",
  },
  {
    q: "ما هي مناطق التغطية؟",
    a: "نغطي جميع أحياء مدينة الناصرية — من الجامعة والحبوبي إلى الوركاء والرفاع وجميع الأحياء الأخرى. للرحلات خارج المدينة تواصل معنا مسبقاً للاتفاق.",
  },
  {
    q: "كيف أنضم كسائق؟",
    a: "اذهب لقسم «كن سائقاً» في هذه الصفحة وأملأ نموذج الطلب. ستحتاج إلى دراجة خاصة بك وفي حالة جيدة، رخصة قيادة، وبطاقة هوية وطنية. سيتواصل معك فريقنا خلال 24 ساعة.",
  },
  {
    q: "ما هي طريقة الدفع؟",
    a: "الدفع نقداً فقط عند الوصول إلى وجهتك. لا حاجة لبطاقة ائتمان أو دفع مسبق — تتفق على السعر مع السائق قبل انطلاق الرحلة.",
  },
  {
    q: "ما الفرق بين FAST.TAXI100 والتكسي التقليدي؟",
    a: "الدراجة أسرع بكثير في زحمة المرور، وأجرتها أقل من التكسي التقليدي لنفس المسافة. كذلك الخدمة متاحة على مدار الساعة دون انتظار طويل.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="faq"
      className="section-padding relative"
      style={{ background: "#0D1B2A" }}
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

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
            ❓ الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            هل لديك سؤال؟
          </h2>
          <p className="text-white/55 text-lg">
            إليك إجابات على أكثر الأسئلة تكراراً من زبائننا.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  border: isOpen
                    ? "1px solid rgba(245,166,35,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  background: isOpen ? "#1A2B3C" : "#111D2B",
                }}
              >
                {/* Question row — button for a11y */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-base leading-snug"
                    style={{ color: isOpen ? "#F5A623" : "white" }}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 text-sm"
                    style={{
                      background: isOpen
                        ? "rgba(245,166,35,0.2)"
                        : "rgba(255,255,255,0.06)",
                      color: isOpen ? "#F5A623" : "rgba(255,255,255,0.4)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▾
                  </span>
                </button>

                {/* Answer — animated via max-height */}
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-right"
          style={{
            background: "rgba(245,166,35,0.05)",
            border: "1px solid rgba(245,166,35,0.15)",
          }}
        >
          <span className="text-4xl flex-shrink-0">💬</span>
          <div className="flex-1">
            <p className="font-bold text-white mb-1">سؤالك غير موجود هنا؟</p>
            <p className="text-white/50 text-sm">
              تواصل معنا مباشرة عبر واتساب وسنرد عليك في أقرب وقت.
            </p>
          </div>
          <a
            href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20لدي%20سؤال%20حول%20خدمة%20FAST.TAXI100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber text-sm px-6 py-2.5 flex-shrink-0"
          >
            اسألنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
