import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAST.TAXI100 — أول تكسي دراجة في الناصرية",
  description:
    "خدمة تكسي الدراجات النارية في الناصرية. أسرع، أرخص، وأكثر أماناً من التكسي التقليدي. احجز الآن عبر الاتصال أو واتساب.",
  keywords: [
    "تكسي دراجة الناصرية",
    "توصيل بالدراجة النارية الناصرية",
    "fast taxi 100",
    "fast.taxi100",
    "موتوسيكل تكسي العراق",
    "توصيل سريع الناصرية",
  ],
  openGraph: {
    title: "FAST.TAXI100 — أول تكسي دراجة في الناصرية",
    description: "خدمة تكسي الدراجات النارية الأولى في الناصرية، العراق.",
    siteName: "FAST.TAXI100",
    locale: "ar_IQ",
    type: "website",
    images: [{ url: "/ride-logo.jpg", width: 800, height: 600 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAST.TAXI100 — أول تكسي دراجة في الناصرية",
    description: "خدمة تكسي الدراجات النارية الأولى في الناصرية، العراق.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} scroll-smooth`}>
      <body className="font-cairo bg-navy text-white antialiased">
        {children}
      </body>
    </html>
  );
}
