"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const EASE = [0.25, 0.1, 0.25, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    title: "Podcast Solutions",
    badge: "Our flagship service",
    badgeStyle: "border-[#888] text-[#888]",
    link: "/services/podcast",
    desc: "We don't just produce podcasts. We build shows designed to grow your authority, your audience, and your business. Strategy, scripting, anchor support, studio and online recording, editing, distribution to 20+ platforms, and promotion — all under one roof. With a studio network across Mumbai, Delhi NCR, Bangalore, Hyderabad, Pune, and Chennai — we come to you.",
    includes: [
      "Concept & storyboard",
      "Scripting & anchor support",
      "Studio & online recording",
      "Editing & post-production",
      "Distribution to 20+ platforms",
      "Organic & paid promotion",
    ],
    dashed: false,
  },
  {
    title: "Content Development",
    badge: null,
    link: "#",
    desc: "Great content doesn't happen by accident. We build content strategies and produce the content that brings them to life — articles, newsletters, scripts, thought leadership, and more.",
    includes: [
      "Content strategy & calendar",
      "Long-form articles & blogs",
      "Newsletters & email content",
      "CXO & thought leadership writing",
      "Scripts for video & audio",
      "Social media content",
    ],
    dashed: false,
  },
  {
    title: "Paid Marketing",
    badge: null,
    link: "#",
    desc: "Getting heard by the right people doesn't happen organically alone. We plan and run paid campaigns across LinkedIn, Meta, Google, and Spotify — built around your content, your audience, and your commercial objective. Every rupee tracked, every campaign optimised, every result reported with transparency.",
    includes: [
      "LinkedIn Ads",
      "Meta Ads",
      "Google Ads",
      "Spotify podcast promotion",
      "Campaign strategy & planning",
      "Performance reporting",
    ],
    dashed: false,
  },
  {
    title: "Lead Gen & Sales Support",
    badge: null,
    link: "#",
    desc: "Content that doesn't connect to pipeline is just noise. We build the systems that turn your audience into leads and your leads into conversations — and stay with you until the content is working for your business, not just performing on a dashboard.",
    includes: [
      "Content-led lead generation",
      "Lead nurturing sequences",
      "Sales enablement content",
      "CRM content integration",
      "Pipeline reporting & optimisation",
    ],
    dashed: false,
  },
  {
    title: "Content at Scale",
    badge: "New",
    badgeStyle: "border-[#111] text-[#111]",
    link: "#",
    desc: "Not every piece of content needs to be hand-crafted. We use the best AI tools available to produce articles, scripts, voiceovers, avatar videos, and social content — fast, consistent, and at a fraction of traditional production costs. Every output reviewed and refined before it reaches you.",
    includes: [
      "AI-written articles & newsletters",
      "AI podcast scripts & show notes",
      "AI voiceovers & audio content",
      "AI avatar video production",
      "Social media content at scale",
    ],
    dashed: true,
  },
];

const promises = [
  "Strategy before production — always.",
  "Transparent reporting on everything we run.",
  "One team, one roof, zero handoffs.",
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#111111] font-['DM_Sans',sans-serif] overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="bg-[#FAF6F0] px-6 md:px-12 pt-24 pb-20 border-b border-[#E8E0D5]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#CC0000] mb-5"
        >
          What we do
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="font-['Playfair_Display',serif] text-4xl md:text-6xl font-bold leading-[1.1] mb-6"
        >
          One studio.<br />
          <span className="text-[#CC0000] italic">Every service your content needs.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="text-base text-[#666] leading-[1.8] max-w-[560px]"
        >
          From podcast strategy to paid campaigns — VoxTent covers every layer of the content
          journey. Built for businesses, brands, and leaders who want results, not just output.
        </motion.p>
      </section>

      {/* ── SERVICE PILLARS ── */}
      <section className="bg-white px-6 md:px-12 py-20">
        <FadeUp className="mb-14">
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#CC0000] mb-3">
            Our services
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-[40px] font-bold leading-[1.2]">
            Five ways we help you grow.
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-[2px]">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.06}>
              <div
                className={`border border-[#E8E0D5] border-t-[3px] border-t-[#CC0000] px-8 md:px-10 py-9 transition-colors hover:bg-[#FAF6F0] ${
                  s.dashed ? "border-dashed border-t-solid border-t-[#CC0000]" : ""
                }`}
              >
                {/* Head row */}
                <div className="flex items-start justify-between gap-5 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-['Playfair_Display',serif] text-[22px] font-bold text-[#111]">
                      {s.title}
                    </span>
                    {s.badge && (
                      <span
                        className={`text-[10px] font-medium tracking-[0.06em] px-3 py-[3px] rounded-full border ${s.badgeStyle}`}
                      >
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <Link
                    href={s.link}
                    className="text-[12px] font-medium text-[#CC0000] tracking-[0.06em] whitespace-nowrap border-b border-transparent hover:border-[#CC0000] pb-[1px] transition-all flex-shrink-0"
                  >
                    Explore →
                  </Link>
                </div>

                {/* Description */}
                <p className="text-sm text-[#555] leading-[1.8] max-w-[680px] mb-6">
                  {s.desc}
                </p>

                {/* Includes */}
                <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] mb-3">
                  What&rsquo;s included
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
                  {s.includes.map((item) => (
                    <span
                      key={item}
                      className="text-[13px] text-[#666] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#CC0000] flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── PROMISE ── */}
      <section className="bg-[#FAF6F0] px-6 md:px-12 py-20 border-t border-b border-[#E8E0D5]">
        <FadeUp>
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#CC0000] mb-3">
            Our commitment
          </p>
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-[36px] font-bold leading-[1.2] max-w-[560px] mt-3 mb-5">
            We don&rsquo;t hand you files and disappear.
          </h2>
          <p className="text-[15px] text-[#666] leading-[1.8] max-w-[560px] mb-9">
            Every service we offer is connected to a business outcome. We measure success in
            pipeline, authority, and growth — not just deliverables. And we stay until it works.
          </p>
          <div className="flex flex-col max-w-[600px]">
            {promises.map((p, i) => (
              <div
                key={i}
                className={`flex items-center gap-[14px] py-4 text-[15px] text-[#111] ${
                  i < promises.length - 1 ? "border-b border-[#E8E0D5]" : ""
                }`}
              >
                <span className="text-[#CC0000] font-medium flex-shrink-0">→</span>
                {p}
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#CC0000] px-6 md:px-12 py-24 overflow-hidden">
        {/* Watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[-20px] bottom-[-40px] font-bold text-white opacity-[0.04] leading-none select-none"
          style={{ fontSize: "200px", letterSpacing: "-8px", fontFamily: "DM Sans, sans-serif" }}
        >
          VT
        </span>

        <FadeUp>
          <p className="text-[10px] font-medium tracking-[0.22em] uppercase text-white/55 mb-5">
            Not sure where to start?
          </p>
          <h2 className="font-['Playfair_Display',serif] text-[28px] md:text-[44px] font-bold text-white leading-[1.2] max-w-[560px] mb-[14px]">
            Not sure which service is right for you?
          </h2>
          <p className="text-[15px] text-white/65 max-w-[440px] leading-[1.7] mb-9">
            Tell us what you&rsquo;re trying to build — we&rsquo;ll point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="text-[13px] font-medium text-white tracking-[0.1em] border-b-[1.5px] border-white pb-[3px] hover:opacity-75 transition-opacity"
          >
            Let&rsquo;s Talk →
          </Link>
          <p className="text-[12px] text-white/35 mt-4 italic">
            No pitch decks. Just an honest 30-minute conversation.
          </p>
        </FadeUp>
      </section>

    </main>
  );
}
