import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Build Podcasts & Video Creation | Voxtent",
  description: "Build Podcasts, Videos & Content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF6F0] text-black">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <img
            src="/Image/Sample5.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#FAF6F0]/90" />
        </div>

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer style={{ background: "#111111" }} className="text-white px-6 md:px-16 pt-16 pb-8">
          <div className="max-w-7xl mx-auto">

            {/* Top grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

              {/* Brand */}
              <div>
                <p className="font-black text-xl tracking-widest mb-3">VOXTENT</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building content engines that turn ideas into authority.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  Quick Links
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: "About", href: "/about" },
                    { label: "Services", href: "/services" },
                    { label: "Insights", href: "/insights" },
                    { label: "Contact", href: "/contact" },
                  ].map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-gray-400 text-sm hover:text-white transition"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  Services
                </p>
                <ul className="space-y-2.5">
                  {[
                    { label: "Podcast", href: "/services/podcast" },
                    { label: "Content", href: "/services/content" },
                    { label: "Marketing", href: "/services/marketing" },
                    { label: "Strategy", href: "/services/strategy" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="text-gray-400 text-sm hover:text-white transition"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  Contact
                </p>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li>Bangalore, India</li>
                  <li>
                    <a href="tel:+919663799617" className="hover:text-white transition">
                      +91 96637 99617
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@voxtent.in" className="hover:text-white transition">
                      hello@voxtent.in
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-3 text-xs text-gray-600">
              <p>© 2026 Voxtent. All rights reserved.</p>
              <div className="flex gap-5">
                <a href="/privacy" className="hover:text-gray-400 transition">Privacy</a>
                <a href="/terms" className="hover:text-gray-400 transition">Terms</a>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
