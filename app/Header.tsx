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
        className={`sticky top-0 z-50 border-b backdrop-blur-md ${
          isPodcast
            ? "bg-black text-white border-white/10 shadow-lg"
            : "bg-[#FAF6F0] text-black shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <h1
              className={`font-extrabold text-lg tracking-[0.25em] cursor-pointer ${
                isPodcast ? "text-white" : "text-red-600"
              }`}
            >
              VOXTENT
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden md:flex items-center gap-8 text-sm font-semibold ${
              isPodcast ? "text-white" : "text-black"
            }`}
          >
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/services/podcast" className="hover:text-red-600 transition">
              Podcast
            </Link>
            <Link href="/services" className="hover:text-red-600 transition">
              Services
            </Link>
            <Link href="/insights" className="hover:text-red-600 transition">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition">
              Contact Us
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CTA */}
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
              <span
                className={`w-6 h-0.5 ${
                  isPodcast ? "bg-white" : "bg-black"
                }`}
              />
              <span
                className={`w-6 h-0.5 ${
                  isPodcast ? "bg-white" : "bg-black"
                }`}
              />
              <span
                className={`w-6 h-0.5 ${
                  isPodcast ? "bg-white" : "bg-black"
                }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden fixed inset-0 z-40 ${
            isPodcast ? "bg-black text-white" : "bg-[#FAF6F0] text-black"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-lg font-semibold">

            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link href="/services/podcast" onClick={() => setMenuOpen(false)}>
              Podcast
            </Link>

            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>

            <Link href="/insights" onClick={() => setMenuOpen(false)}>
              Insights
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="bg-red-600 text-white px-6 py-3 rounded-md mt-4">
                Let’s Talk
              </button>
            </Link>

          </div>
        </div>
      )}
    </>
  );
}