"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const servicesMenu = [
  {
    title: "All Services",
    href: "/services",
    desc: "Explore all podcast, video, and content strategy services.",
  },
  {
    title: "Podcast Production",
    href: "/services/podcast",
    desc: "Build authority with a podcast that drives real business outcomes.",
  },
  {
    title: "Video Content",
    href: "/services/video",
    desc: "Short and long-form video designed for reach, retention, and pipeline.",
  },
  {
    title: "Content Strategy",
    href: "/services/content",
    desc: "Clarity in positioning, messaging, distribution, and execution.",
  },
];

const insightsMenu = [
  {
    title: "All Insights",
    href: "/insights",
    desc: "Browse all articles, ideas, trends, and editorial content.",
  },
  {
    title: "Why Every CXO in India Needs a Podcast in 2026",
    href: "/insights/details/cxo-podcast-2026",
    desc: "A featured piece on authority, first-mover advantage, and B2B audio.",
  },
  {
    title: "Leadership in the Digital Age",
    href: "/insights/details/leadership-digital-age",
    desc: "How modern leaders build trust and visibility through content.",
  },
  {
    title: "The Future of Content Marketing",
    href: "/insights/details/future-content-marketing",
    desc: "Where content, distribution, and audience building are heading next.",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<null | "services" | "insights">(null);
  const [mobileOpen, setMobileOpen] = useState<null | "services" | "insights">(null);

  const desktopMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target as Node)
      ) {
        setDesktopOpen(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setDesktopOpen(null);
    setMobileOpen(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinkClass = "text-black/80 hover:text-red-600";
  const dropdownPanelClass =
    "border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]";
  const dropdownItemHoverClass = "hover:bg-[#F7F2EA]";
  const dropdownTitleClass = "text-black";
  const dropdownDescClass = "text-black/55";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[9999] bg-[#F7F2EA] text-black border-b border-black/10">
        <div className="max-w-7xl mx-auto h-[86px] px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <span className="text-xl font-bold tracking-[0.28em] text-red-600">
              VOXTENT
            </span>
          </Link>

          <div
            ref={desktopMenuRef}
            className="hidden md:flex items-center gap-10 relative"
          >
            <Link
              href="/"
              className={`text-[15px] font-medium transition ${
                isActive("/") ? "text-red-600" : navLinkClass
              }`}
            >
              Home
            </Link>

            <Link
              href="/services/podcast"
              className={`text-[15px] font-medium transition ${
                pathname.startsWith("/services/podcast") ? "text-red-600" : navLinkClass
              }`}
            >
              Podcast
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDesktopOpen("services")}
            >
              <button
                type="button"
                aria-expanded={desktopOpen === "services"}
                aria-controls="services-menu"
                className={`flex h-[86px] items-center gap-1 text-[15px] font-medium transition ${
                  pathname.startsWith("/services") ? "text-red-600" : navLinkClass
                }`}
                onClick={() =>
                  setDesktopOpen(desktopOpen === "services" ? null : "services")
                }
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopOpen === "services" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {desktopOpen === "services" && (
                <div
                  id="services-menu"
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-0"
                  onMouseLeave={() => setDesktopOpen(null)}
                >
                  <div className="h-3 w-full" />
                  <div className={`w-[620px] rounded-2xl p-5 ${dropdownPanelClass}`}>
                    <div className="grid grid-cols-2 gap-3">
                      {servicesMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`rounded-xl p-4 transition ${dropdownItemHoverClass}`}
                        >
                          <div>
                            <p className={`text-[15px] font-semibold ${dropdownTitleClass}`}>
                              {item.title}
                            </p>
                            <p className={`mt-1 text-sm leading-7 ${dropdownDescClass}`}>
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDesktopOpen("insights")}
            >
              <button
                type="button"
                aria-expanded={desktopOpen === "insights"}
                aria-controls="insights-menu"
                className={`flex h-[86px] items-center gap-1 text-[15px] font-medium transition ${
                  pathname.startsWith("/insights") ? "text-red-600" : navLinkClass
                }`}
                onClick={() =>
                  setDesktopOpen(desktopOpen === "insights" ? null : "insights")
                }
              >
                Insights
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    desktopOpen === "insights" ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {desktopOpen === "insights" && (
                <div
                  id="insights-menu"
                  className="absolute left-1/2 top-full -translate-x-1/2 pt-0"
                  onMouseLeave={() => setDesktopOpen(null)}
                >
                  <div className="h-3 w-full" />
                  <div className={`w-[430px] rounded-2xl p-5 ${dropdownPanelClass}`}>
                    <div className="grid grid-cols-1 gap-2">
                      {insightsMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`rounded-xl p-4 transition ${dropdownItemHoverClass}`}
                        >
                          <p className={`text-[15px] font-semibold ${dropdownTitleClass}`}>
                            {item.title}
                          </p>
                          <p className={`mt-1 text-sm leading-7 ${dropdownDescClass}`}>
                            {item.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`text-[15px] font-medium transition ${
                pathname.startsWith("/contact") ? "text-red-600" : navLinkClass
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <button className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                Let’s Talk
              </button>
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-2xl text-black"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-[9999] h-full w-[88%] max-w-sm transform border-l border-black/10 bg-[#F7F2EA] text-black overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <span className="text-lg font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-base font-medium"
          >
            Home
          </Link>

          <Link
            href="/services/podcast"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-base font-medium"
          >
            Podcast
          </Link>

          <div className="py-3 border-t border-black/10">
            <button
              type="button"
              aria-expanded={mobileOpen === "services"}
              className="flex w-full items-center justify-between text-left text-base font-medium"
              onClick={() =>
                setMobileOpen(mobileOpen === "services" ? null : "services")
              }
            >
              <span>Services</span>
              <span className="text-xl">{mobileOpen === "services" ? "−" : "+"}</span>
            </button>

            {mobileOpen === "services" && (
              <div className="mt-4 flex flex-col gap-4 pl-1">
                {servicesMenu.map((item) => (
                  <Link
                    key={`${item.href}-mobile`}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <p className="text-[15px] font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-black/60">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="py-3 border-t border-black/10">
            <button
              type="button"
              aria-expanded={mobileOpen === "insights"}
              className="flex w-full items-center justify-between text-left text-base font-medium"
              onClick={() =>
                setMobileOpen(mobileOpen === "insights" ? null : "insights")
              }
            >
              <span>Insights</span>
              <span className="text-xl">{mobileOpen === "insights" ? "−" : "+"}</span>
            </button>

            {mobileOpen === "insights" && (
              <div className="mt-4 flex flex-col gap-4 pl-1">
                {insightsMenu.map((item) => (
                  <Link
                    key={`${item.href}-mobile`}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block"
                  >
                    <p className="text-[15px] font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-black/60">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-3 text-base font-medium border-t border-black/10"
          >
            Contact
          </Link>

          <div className="pt-6">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full rounded-xl bg-red-600 py-3 text-sm font-semibold text-white transition hover:bg-red-700">
                Let’s Talk
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}