"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isPodcast = pathname.startsWith("/services/podcast");

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
            className={`text-xl font-bold tracking-[0.2em] cursor-pointer transition ${
              isPodcast ? "text-white" : "text-red-600"
            }`}
          >
            VOXTENT
          </span>
        </Link>

        {/* NAV */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium ${
            isPodcast ? "text-gray-200" : "text-gray-700"
          }`}
        >
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/services/podcast" className="hover:text-red-600 transition">Podcast</Link>
          <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          <Link href="/insights" className="hover:text-red-600 transition">Insights</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact Us</Link>
        </nav>

        {/* CTA */}
        <Link href="/contact">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-sm font-medium">
            Let's Talk
          </button>
        </Link>

      </div>
    </header>
  );
}
