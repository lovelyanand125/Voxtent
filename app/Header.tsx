"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
const pathname = usePathname();
const isPodcast = pathname.startsWith("/services/podcast");
const [isOpen, setIsOpen] = useState(false);

return (
<>
{/* HEADER */}
<header
className={`fixed top-0 left-0 w-full z-[9999] border-b ${
          isPodcast
            ? "bg-black/70 backdrop-blur text-white border-white/10"
            : "bg-[#FAF6F0] text-black border-black/10"
        }`}
> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


      {/* LOGO */}
      <Link href="/">
        <h1 className="font-bold tracking-[0.2em] text-xl text-red-600">
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

      {/* DESKTOP CTA */}
      <div className="hidden md:block">
        <Link href="/contact">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Let’s Talk
          </button>
        </Link>
      </div>

      {/* HAMBURGER */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
    </div>
  </header>

  {/* OVERLAY */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black/30 z-[9998]"
      onClick={() => setIsOpen(false)}
    />
  )}

  {/* MOBILE MENU */}
  <div
    className={`fixed top-0 right-0 h-full w-[85%] max-w-xs bg-[#FAF6F0] z-[9999] transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } border-l border-black/10`}
  >
    {/* TOP */}
    <div className="flex justify-between items-center px-6 py-4 border-b">
      <span className="font-semibold text-lg">Menu</span>
      <button
        onClick={() => setIsOpen(false)}
        className="text-xl"
      >
        ✕
      </button>
    </div>

    {/* LINKS */}
    <nav className="flex flex-col px-6 py-6 gap-5 text-base font-medium">

      <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
      <Link href="/services/podcast" onClick={() => setIsOpen(false)}>Podcast</Link>
      <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
      <Link href="/insights" onClick={() => setIsOpen(false)}>Insights</Link>
      <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

      {/* CTA */}
      <div className="pt-6">
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          <button className="w-full bg-red-600 text-white py-3 rounded-md">
            Let’s Talk
          </button>
        </Link>
      </div>

    </nav>
  </div>
</>


);
}
