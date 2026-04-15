"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
const pathname = usePathname();
const isPodcast = pathname.startsWith("/services/podcast");

const [menuOpen, setMenuOpen] = useState(false);

return (
<>
{/* HEADER */}
<header
className={`fixed top-0 left-0 w-full z-[9999] border-b ${
          isPodcast
            ? "bg-black/70 backdrop-blur text-white border-white/10"
            : "bg-[#FAF6F0]/95 backdrop-blur text-black border-gray-200"
        }`}
> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


      {/* LOGO */}
      <Link href="/">
        <h1 className="font-bold tracking-[0.2em] text-red-600">
          VOXTENT
        </h1>
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/services/podcast">Podcast</Link>
        <Link href="/services">Services</Link>
        <Link href="/insights">Insights</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* CTA (desktop only) */}
        <Link href="/contact" className="hidden md:block">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Let’s Talk
          </button>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>

      </div>
    </div>
  </header>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="fixed inset-0 bg-black/60 z-[9998]">
      <div className="absolute right-0 top-0 w-[80%] h-full bg-white p-6">

        <button onClick={() => setMenuOpen(false)} className="mb-6">
          Close ✕
        </button>

        <div className="flex flex-col gap-6 text-lg">

          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services/podcast" onClick={() => setMenuOpen(false)}>Podcast</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link href="/contact">
            <button className="mt-4 bg-red-600 text-white px-4 py-3 rounded">
              Let’s Talk
            </button>
          </Link>

        </div>
      </div>
    </div>
  )}
</>


);
}
