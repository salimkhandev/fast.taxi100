"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#hero",       label: "الرئيسية" },
  { href: "#how",        label: "كيف تعمل" },
  { href: "#pricing",    label: "الأسعار" },
  { href: "#driver",     label: "كن سائقاً" },
  { href: "#faq",        label: "الأسئلة الشائعة" },
  { href: "#contact",    label: "تواصل معنا" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(13, 27, 42, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,166,35,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo — right side in RTL */}
          <Link href="#hero" className="flex items-center gap-3" onClick={handleNavClick}>
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber/40">
              <Image
                src="/ride-logo.jpg"
                alt="FAST.TAXI100 Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className="font-black tracking-tight hidden sm:block"
              style={{ color: "#F5A623", fontSize: "1.1rem", letterSpacing: "0.02em" }}
            >
              FAST.TAXI100
            </span>
          </Link>

          {/* Desktop nav — center */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/8 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA button — left side in RTL */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20حجز%20رحلة%20مع%20FAST.TAXI100"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber text-sm py-2 px-4 hidden sm:inline-flex"
            >
              <span>💬</span>
              <span dir="ltr">+964 781 400 7182</span>
            </a>

            {/* Hamburger — mobile */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="فتح القائمة"
            >
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-200"
                style={{ transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-200"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-white transition-all duration-200"
                style={{ transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(13, 27, 42, 0.98)",
          borderBottom: menuOpen ? "1px solid rgba(245,166,35,0.2)" : "none",
        }}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="py-3 px-4 rounded-xl text-base font-semibold text-white/85 hover:text-white hover:bg-white/8 transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/9647814007182?text=السلام%20عليكم%2C%20أريد%20حجز%20رحلة%20مع%20FAST.TAXI100"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="btn-amber mt-3 justify-center text-base"
          >
            <span>💬</span>
            <span dir="ltr">+964 781 400 7182</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
