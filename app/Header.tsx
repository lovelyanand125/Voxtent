"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Podcast", href: "/services/podcast" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isPodcast = pathname.startsWith("/services/podcast");
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── MAIN HEADER BAR ── */}
      <header
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "70px", zIndex: 10000 }}
        className={`shadow-md transition-colors duration-300 ${
          isPodcast ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-5 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" onClick={close}>
            <span className="font-extrabold tracking-[0.25em] text-red-600 text-lg">
              VOXTENT
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-red-600 transition ${
                  pathname === link.href ? "text-red-600" : isPodcast ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <Link href="/contact" className="hidden md:block">
            <button className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 transition">
              Let's Talk
            </button>
          </Link>

          {/* MOBILE: HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                isPodcast ? "bg-white" : "bg-gray-800"
              } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                isPodcast ? "bg-white" : "bg-gray-800"
              } ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                isPodcast ? "bg-white" : "bg-gray-800"
              } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>

        </div>
      </header>

      {/* ── MOBILE FULL-SCREEN MENU ── */}
      {menuOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 9999, paddingTop: "70px" }}
          className="md:hidden bg-white flex flex-col"
        >
          {/* NAV LINKS */}
          <nav className="flex flex-col flex-1 px-6 pt-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`text-lg font-medium py-4 border-b border-gray-100 hover:text-red-600 transition ${
                  pathname === link.href ? "text-red-600" : "text-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE CTA */}
          <div className="px-6 py-8">
            <Link href="/contact" onClick={close}>
              <button className="w-full bg-red-600 text-white py-4 rounded-xl text-base font-semibold hover:bg-red-700 transition">
                Let's Talk
              </button>
            </Link>
            <p className="text-center text-xs text-gray-400 mt-3">hello@voxtent.in · +91 96637 99617</p>
          </div>
        </div>
      )}
    </>
  );
}
