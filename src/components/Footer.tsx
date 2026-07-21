import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Instagram, MapPin, Bike, Zap, Users, ShieldCheck } from "lucide-react";

const navLinks = [
  { href: "#hero",       label: "الرئيسية" },
  { href: "#how",        label: "كيف تعمل" },
  { href: "#pricing",    label: "الأسعار" },
  { href: "#driver",     label: "كن سائقاً" },
  { href: "#faq",        label: "الأسئلة الشائعة" },
  { href: "#contact",    label: "تواصل معنا" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      style={{ background: "#060E18", borderTop: "1px solid rgba(245,166,35,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber/40">
                <Image
                  src="/ride-logo.jpg"
                  alt="FAST.TAXI100"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-black text-amber tracking-wide" style={{ fontSize: "1.05rem" }}>
                  FAST.TAXI100
                </p>
                <p className="text-xs text-white/50">أول تكسي دراجة في الناصرية</p>
              </div>
            </div>
            <div className="text-sm text-white/70 flex flex-col gap-1.5 mt-1">
              <span className="flex items-center gap-2"><Bike className="w-4 h-4 text-amber" /> توصيل ركاب بالدراجة النارية</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-amber" /> سريع | آمن | موثوق</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber" /> الناصرية</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4 text-amber" /> نبحث عن سائقين للانضمام</span>
            </div>
          </div>

          {/* Nav links column */}
          <div>
            <h3 className="font-bold text-amber mb-4 text-sm uppercase tracking-wider">
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div id="contact-info">
            <h3 className="font-bold text-amber mb-4 text-sm uppercase tracking-wider">
              تواصل معنا
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+9647814007182"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber" />
                <span dir="ltr">+964 781 400 7182</span>
              </a>
              <a
                href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20حجز%20رحلة%20مع%20FAST.TAXI100"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-amber" />
                واتساب — احجز رحلتك
              </a>
              <a
                href="https://www.instagram.com/p/Daxx9FsIoDl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-amber" />
                تابعنا على إنستغرام
              </a>
              <p className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-amber" />
                الناصرية، العراق
              </p>
            </div>

            {/* Big WhatsApp CTA */}
            <a
              href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20حجز%20رحلة%20مع%20FAST.TAXI100"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber mt-5 text-sm justify-center flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span dir="ltr">+964 781 400 7182</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
            <p>
              © {year} FAST.TAXI100 — جميع الحقوق محفوظة
            </p>
            <p>
              الناصرية، ذي قار، العراق — خدمة 24/7
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
