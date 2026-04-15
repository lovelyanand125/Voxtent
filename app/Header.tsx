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
            : "bg-[#FAF6F0] text-black"
        }`}
> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">


      {/* LOGO */}
      <Link href="/">
        <h1
          className={`font-bold tracking-[0.2em] text-xl ${
            isPodcast ? "text-white" : "text-red-600"
          }`}
        >
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

      {/* CTA (DESKTOP) */}
      <div className="hidden md:block">
        <Link href="/contact">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Let’s Talk
          </button>
        </Link>
      </div>

      {/* HAMBURGER (MOBILE) */}
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
      className="fixed inset-0 bg-black/40 z-[9998]"
      onClick={() => setIsOpen(false)}
    />
  )}

  {/* MOBILE MENU */}
  <div
    className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[9999] transform transition-transform duration-300 ease-in-out shadow-2xl ${
      isOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* TOP BAR */}
    <div className="flex justify-between items-center p-6 border-b">
      <span className="font-bold text-lg">Menu</span>
      <button
        onClick={() => setIsOpen(false)}
        className="text-2xl"
      >
        ✕
      </button>
    </div>

    {/* NAV ITEMS */}
    <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
      <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
      <Link href="/services/podcast" onClick={() => setIsOpen(false)}>Podcast</Link>
      <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
      <Link href="/insights" onClick={() => setIsOpen(false)}>Insights</Link>
      <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

      {/* CTA */}
      <Link href="/contact" onClick={() => setIsOpen(false)}>
        <button className="mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
          Let’s Talk
        </button>
      </Link>
    </nav>
  </div>
</>


);
}
