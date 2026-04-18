import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
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

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/voxtent/",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/voxtent/",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@voxtent",
    icon: FaYoutube,
  },
  {
    name: "X",
    href: "https://x.com/voxtent",
    icon: FaXTwitter,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF6F0] text-black`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <footer className="bg-[#111111] text-white pt-16 pb-6 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
                <div>
                  <h2 className="text-2xl font-bold tracking-[0.2em] text-red-500 mb-4">
                    VOXTENT
                  </h2>

                  <p className="text-white/75 text-sm leading-7 max-w-sm">
                    We help founders, CXOs, and modern brands build authority
                    through podcasts, video content, and strategic content
                    systems.
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-semibold mb-3">
                      Stay in touch with us
                    </p>

                    <div className="flex gap-3">
                      {socialLinks.map((item) => {
                        const Icon = item.icon;

                        return (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.name}
                            title={item.name}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition"
                          >
                            <Icon size={18} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
                    Services
                  </h3>

                  <div className="flex flex-col gap-3 text-sm text-white/85">
                    <Link
                      href="/services/podcast"
                      className="hover:text-red-400 transition"
                    >
                      Podcast Production
                    </Link>

                    <Link
                      href="/services/video"
                      className="hover:text-red-400 transition"
                    >
                      Video Content
                    </Link>

                    <Link
                      href="/services/content"
                      className="hover:text-red-400 transition"
                    >
                      Content Strategy
                    </Link>

                    <Link
                      href="/contact"
                      className="hover:text-red-400 transition"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
                    Company
                  </h3>

                  <div className="flex flex-col gap-3 text-sm text-white/85">
                    <Link
                      href="/about"
                      className="hover:text-red-400 transition"
                    >
                      About Us
                    </Link>

                    <Link
                      href="/insights"
                      className="hover:text-red-400 transition"
                    >
                      Insights
                    </Link>

                    <Link
                      href="/contact"
                      className="hover:text-red-400 transition"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4">
                    Contact
                  </h3>

                  <p className="text-sm text-white/75 leading-7 mb-4">
                    Bangalore, India
                  </p>

                  <div className="flex overflow-hidden rounded-lg border border-white/15">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none"
                    />
                    <button className="bg-red-600 px-5 text-sm font-semibold hover:bg-red-700 transition">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/70">
                <p>Copyright © 2026 Voxtent. All Rights Reserved.</p>

                <div className="flex items-center gap-3">
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>

                  <span>|</span>

                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-white transition"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}