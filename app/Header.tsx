"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isPodcast = pathname.startsWith("/services/podcast");

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[9999] ${
          isPodcast
            ? "bg-black text-white border-b border-white/10"
            : "bg-[#FAF6F0] text-black border-b border-gray-200"
        } shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <span
              className={`font-extrabold text-lg tracking-[0.25em] cursor-pointer ${
                isPodcast ? "text-white" : "text-red-600"
              }`}
            >
              VOXTENT
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <Link href="/services/podcast" className="hover:text-red-600">Podcast</Link>
            <Link href="/services" className="hover:text-red-600">Services</Link>
            <Link href="/insights" className="hover:text-red-600">Insights</Link>
            <Link href="/contact" className="hover:text-red-600">Contact</Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CTA (desktop) */}
            <Link href="/contact">
              <button className="hidden md:block bg-red-600 text-white px-5 py-2.5 rounded-md font-semibold shadow-md hover:bg-red-700 transition">
                Let’s Talk
              </button>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className={`w-6 h-0.5 ${isPodcast ? "bg-white" : "bg-black"}`} />
              <span className={`w-6 h-0.5 ${isPodcast ? "bg-white" : "bg-black"}`} />
              <span className={`w-6 h-0.5 ${isPodcast ? "bg-white" : "bg-black"}`} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-[9998] ${
            isPodcast ? "bg-black text-white" : "bg-[#FAF6F0] text-black"
          } flex flex-col items-center justify-center gap-8 text-lg font-semibold`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services/podcast" onClick={() => setMenuOpen(false)}>Podcast</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md mt-4">
              Let’s Talk
            </button>
          </Link>
        </div>
      )}
    </>
  );
}