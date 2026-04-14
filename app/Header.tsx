"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isPodcast = pathname.startsWith("/services/podcast");

  const [open, setOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isPodcast
          ? "bg-black/80 backdrop-blur-md text-white border-b border-white/10"
          : "bg-white text-black border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <span
            className={`text-xl font-bold tracking-[0.2em] cursor-pointer ${
              isPodcast ? "text-white" : "text-red-600"
            }`}
          >
            VOXTENT
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/services/podcast">Podcast</Link>
          <Link href="/services">Services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* CTA (desktop only) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-sm">
              Let's Talk
            </button>
          </Link>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-sm">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services/podcast" onClick={() => setOpen(false)}>Podcast</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

        </div>
      )}
    </header>
  );
}