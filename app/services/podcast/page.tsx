"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const steps = [
  { step: "01", title: "Discovery call", desc: "We learn your business, audience, and goals. No templates — every show is built from scratch around your objectives." },
  { step: "02", title: "Show concept & format", desc: "We define your format, episode structure, guest strategy, and positioning. You get a complete show bible before we record anything." },
  { step: "03", title: "Studio setup or remote", desc: "We handle the technical side — whether that's our Bangalore studio, your office, or a remote setup anywhere in India." },
  { step: "04", title: "Record & produce", desc: "Professional recording, editing, sound design, and mastering. Every episode sounds like it belongs on the world stage." },
  { step: "05", title: "Distribute & grow", desc: "Your show goes live on Spotify, Apple, YouTube, and everywhere your audience listens. We build the growth strategy around it." },
];

const deliverables = [
  "Show concept & brand identity",
  "Episode structure & format",
  "Guest outreach & briefing",
  "Studio or remote recording",
  "Editing & sound design",
  "Show notes & transcripts",
  "Distribution to all platforms",
  "Short-form content cuts",
  "Monthly performance reports",
  "LinkedIn & social repurposing",
];

const faqs = [
  { q: "How long does it take to launch?", a: "From our first call to your first episode live — typically 3 to 4 weeks. We move fast without cutting corners." },
  { q: "Do I need to come to a studio?", a: "No. We can work with your office, our Bangalore studio, or a remote setup. We'll guide you on the right approach for your budget and goals." },
  { q: "How often do we publish?", a: "We recommend fortnightly to start — enough to build momentum without overwhelming your schedule. We adjust based on your capacity." },
  { q: "Who owns the content?", a: "You do. 100%. We produce it, you own it. Simple." },
  { q: "Can you handle guests across India?", a: "Yes. We've produced remote and in-person episodes with guests across Mumbai, Delhi, Hyderabad, and internationally." },
];

export default function PodcastPage() {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <main className="font-sans bg-[#FAF6F0] text-black">

      {/* HERO */}
      <section className="relative py-32 px-6 md:px-16 overflow-hidden bg-[#0B1A2B] text-white">
        <img src="/Image/c1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B]/90 to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your audience is already listening. <br />
            <span className="text-red-400">Just not to you.</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl">
            India now has over 200 million podcast listeners. The businesses and leaders who start building their voice today will own the conversation tomorrow.
          </p>

          <button onClick={() => setOpen(true)} className="mt-8 bg-red-500 px-8 py-3 rounded-lg font-semibold">
            Let's build yours →
          </button>
        </div>
      </section>

<section className="relative bg-white py-20 px-6 md:px-10 lg:px-12 overflow-hidden">
  <img src="/Image/p1.jpg" className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" />

  <AnimatedSection>
    <div className="max-w-6xl mx-auto relative z-10">

      {/* TITLE */}
      <h2 className="mt-4 text-3xl font-bold md:text-5xl">
        Podcasting in India is not a trend. It’s a shift.
      </h2>
<div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-2xl border border-black/10 bg-[#EDE7E1] px-6 py-6">
    <p className="text-4xl font-bold leading-none">200M+</p>
    <p className="mt-5 text-[15px] leading-7 text-gray-600">
      Podcast listeners in India in 2025, up from 100M a year ago.
    </p>
  </div>

  <div className="rounded-2xl border border-black/10 bg-[#EDE7E1] px-6 py-6">
    <p className="text-4xl font-bold leading-none">28%</p>
    <p className="mt-5 text-[15px] leading-7 text-gray-600">
      Year-on-year growth rate, one of the fastest in the world.
    </p>
  </div>

  <div className="rounded-2xl border border-black/10 bg-[#EDE7E1] px-6 py-6">
    <p className="text-4xl font-bold leading-none">#3</p>
    <p className="mt-5 text-[15px] leading-7 text-gray-600">
      India is the third largest podcast market globally.
    </p>
  </div>

  <div className="rounded-2xl border border-black/10 bg-[#EDE7E1] px-6 py-6">
    <p className="text-4xl font-bold leading-none">$4.2Bn</p>
    <p className="mt-5 text-[15px] leading-7 text-gray-600">
      Projected value of India’s podcast market by 2033.
    </p>
  </div>

</div>
      {/* STATS GRID */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {/* your 4 cards */}
      </div>

{/* 🔥 FIXED: TEXT LEFT + IMAGE RIGHT */}
<div className="mt-12 grid lg:grid-cols-2 gap-10 items-stretch">

  {/* LEFT TEXT */}
  <div className="rounded-2xl border border-black/10 bg-[#F4EEE8] px-6 py-7 md:px-8 relative overflow-hidden">

    <img 
      src="/Image/p5.jpg"
      className="absolute inset-0 w-full h-full object-cover opacity-[0.03]"
    />

    <div className="relative z-10">
      <p className="text-gray-700 leading-7 text-[15px] md:text-base">
        584 million people worldwide now listen to podcasts. 75% of B2B decision-makers are already tuning in, and half of them do so daily. 91% of marketers are increasing their podcast investments this year, while branded podcasts continue to drive stronger brand awareness than those without.

        <br /><br />

        In India, the market is growing at 28% year-on-year. The RBI launched a podcast. Tata Steel launched a podcast. Durex launched a podcast.

        <br /><br />

        The question is not whether your business should have one. It is whether you can afford to be the only one without.
      </p>
    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="h-full">
    <img
      src="/Image/p2.jpg" // 👈 replace with your image
      className="w-full h-full object-cover rounded-2xl shadow-md"
    />
  </div>

</div>

    </div>
  </AnimatedSection>
</section>
      {/* WHY PODCAST WORKS */}
      <section className="bg-[#FAF6F0] py-16 px-6 md:px-10 lg:px-12">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              No other format does what a podcast does.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

              <div className="rounded-2xl border bg-white overflow-hidden">
                <img src="/Image/p3.jpg" className="h-40 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Authentic connection</h3>
                  <p className="mt-3 text-gray-700 text-sm">
                    You speak directly to your audience without fighting for a 30-second window. Podcast listeners give you deeper attention than most other formats.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border bg-white overflow-hidden">
                <img src="/Image/i2.jpg" className="h-40 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-bold">Compounding authority</h3>
                  <p className="mt-3 text-gray-700 text-sm">
                    Every episode builds trust, every guest adds credibility, and every release strengthens your brand positioning over time.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border bg-white overflow-hidden">
                <img src="/Image/p7.jpg" className="h-40 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-lg font-bold">360° content engine</h3>
                  <p className="mt-3 text-gray-700 text-sm">
                    One series can be repurposed into clips, social posts, newsletters, PR angles, and long-form thought leadership content.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </section>

{/* HOW IT WORKS + FAQ */}
<section className="relative py-24 px-6 md:px-16 overflow-hidden bg-[#FAF6F0]">

  {/* Background texture */}
  <img
    src="/Image/p1.jpg"
    className="absolute inset-0 w-full h-full object-cover opacity-[0.04]"
  />

  <AnimatedSection>
    <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT — HOW IT WORKS */}
      <div>
        <h2 className="text-3xl font-bold mb-8">How it works.</h2>

        <div className="space-y-5">
          {steps.map((item, i) => (
            <div
              key={i}
              className="flex gap-5 bg-white p-6 rounded-xl border border-black/10 shadow-sm hover:shadow-md transition"
            >
              <span className="text-red-500 font-bold text-xl">
                {item.step}
              </span>

              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — COMMON QUESTIONS */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Common questions.</h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-black/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-medium">{faq.q}</span>
                <span className="text-red-500 text-xl">
                  {openFaq === i ? "×" : "+"}
                </span>
              </button>

              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  </AnimatedSection>
</section>
{/* HOW WE DO IT — PREMIUM INTERACTIVE */}
<section className="bg-[#FAF6F0] py-28 px-6 md:px-16 relative overflow-hidden">
  <AnimatedSection>
    <div className="max-w-7xl mx-auto">

      {/* HEADER */}
      <p className="text-xs tracking-[0.25em] text-red-500 mb-4">
        HOW WE DO IT
      </p>

      <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
        Most corporate podcasts fail after 6 episodes —
        <br />
        <span className="text-red-500">
          not due to production quality, but lack of strategy.
        </span>
      </h2>

      <p className="mt-6 text-gray-600 max-w-xl text-sm leading-7">
        We solve this before we switch on a single microphone. Every engagement starts with a clear objective, a defined audience, and a content system built to last.
      </p>

      {/* GRID */}
      <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {[
          {
            title: "Strategy First",
            desc: "Define purpose, audience, and system.",
            details:
              "We begin by defining your podcast’s purpose — brand authority, thought leadership, employer branding, or demand generation. Then we map your audience persona, content themes, and cadence. Success metrics are defined upfront.",
            tags: ["Objective setting", "Audience mapping", "Content calendar"],
          },
          {
            title: "Anchor & Guest",
            desc: "Choose the right voices.",
            details:
              "We identify internal and external voices aligned with your brand narrative. We brief, prepare, and coach every guest to ensure consistency in tone and authority.",
            tags: ["Host coaching", "Guest curation", "Brand alignment"],
          },
          {
            title: "Production",
            desc: "End-to-end execution.",
            details:
              "Studio or remote — we handle recording, editing, sound design, and mastering. Every detail is handled professionally.",
            tags: ["Recording", "Editing", "Sound design"],
          },
          {
            title: "Distribution",
            desc: "Every major platform.",
            details:
              "Your show goes live across Spotify, Apple, YouTube, and more — ensuring reach and discoverability.",
            tags: ["Spotify", "Apple", "YouTube"],
          },
          {
            title: "Growth",
            desc: "Turn content into results.",
            details:
              "We build a promotion engine — organic + paid — to drive real audience growth and engagement.",
            tags: ["Organic", "Paid ads", "Analytics"],
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveModal(i)}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative cursor-pointer rounded-2xl border border-black/10 bg-white p-6 overflow-hidden"
          >

            {/* Magnetic glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
              style={{
                background: "radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(255,0,0,0.08), transparent 60%)"
              }}
            />

            {/* NUMBER */}
            <motion.p
              initial={{ opacity: 0.4 }}
              whileHover={{ scale: 1.2 }}
              className="text-red-500 text-sm mb-2 font-semibold"
            >
              {String(i + 1).padStart(2, "0")}
            </motion.p>

            {/* TITLE */}
            <h3 className="font-semibold text-lg">{card.title}</h3>

            <p className="text-gray-600 text-sm mt-2">
              {card.desc}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {card.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs px-3 py-1 rounded-full bg-[#F4EEE8]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-red-500 opacity-0 group-hover:opacity-100 transition">
              View details →
            </p>

          </motion.div>
        ))}

      </div>
    </div>
  </AnimatedSection>

  {/* MODAL */}
  {activeModal !== null && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white max-w-2xl w-full mx-4 rounded-2xl p-8 relative shadow-2xl"
      >

        {/* CLOSE */}
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        {/* CONTENT */}
        <p className="text-sm text-red-500 font-semibold mb-2">
          {String(activeModal + 1).padStart(2, "0")}
        </p>

        <h3 className="text-2xl font-bold mb-4">
          {
            [
              "Strategy First",
              "Anchor & Guest",
              "Production",
              "Distribution",
              "Growth",
            ][activeModal]
          }
        </h3>

        <p className="text-gray-700 leading-7">
          {
            [
              "We begin by defining your podcast’s purpose — brand authority, thought leadership, employer branding, or demand generation. Then we map your audience persona, content themes, and cadence. Success metrics are defined upfront.",
              "We identify internal and external voices aligned with your brand narrative. We brief, prepare, and coach every guest.",
              "Studio or remote — we handle recording, editing, sound design, and mastering.",
              "Your show goes live across all major platforms ensuring reach and discoverability.",
              "We build a promotion engine — organic + paid — designed for traction and measurable growth.",
            ][activeModal]
          }
        </p>

        <Link href="/contact#contact-form">
  <button className="mt-8 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
    Start strategy conversation →
  </button>
</Link>

      </motion.div>
    </div>
  )}

</section>
{/* BEYOND THE STUDIO — PREMIUM */}
<section className="bg-[#FAF6F0] py-24 px-6 md:px-16">
  <AnimatedSection>
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT CONTENT */}
      <div>
        <p className="text-xs tracking-[0.2em] text-red-500 mb-4">
          BEYOND THE STUDIO
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          A podcast is a door.
          <br />
          <span className="text-red-500 italic">
            We help you walk through the ones that matter.
          </span>
        </h2>

        <p className="mt-6 text-gray-600 text-sm leading-7 max-w-lg">
          Most studios stop at production. We don’t. The real value of a podcast isn’t the episode — it’s what the episode unlocks.
        </p>

        <p className="mt-4 text-gray-700 text-sm leading-7 max-w-lg">
          Access. Authority. Distribution. Partnerships.  
          We design your podcast as a business asset — not just content.
        </p>

        <p className="mt-6 text-sm text-gray-800 font-medium max-w-md">
          If you're only recording episodes, you're leaving 80% of the value on the table.
        </p>

        {/* CTA */}
        <Link href="/contact">
          <p className="mt-8 inline-block text-sm text-red-500 font-medium cursor-pointer hover:underline">
            Tell us what you're building →
          </p>
        </Link>
      </div>

      {/* RIGHT CARDS */}
      <div className="space-y-5">

        {[
          {
            title: "Thought leadership placement",
            short: "Get featured where your audience already listens.",
            full: "We place your founders, leaders, and experts on established podcasts your audience already trusts. We identify the right shows, handle introductions, and prepare your spokesperson — so you don’t just publish content, you enter conversations that already exist.",
          },
          {
            title: "Brand sponsorship & collaboration",
            short: "Partnerships that feel native, not forced.",
            full: "We design strategic collaborations and sponsorships that align with your positioning. No generic ad slots — only high-context partnerships that feel like part of the show, not an interruption.",
          },
          {
            title: "Podcast-led PR",
            short: "Turn episodes into media leverage.",
            full: "Your podcast becomes a PR engine. We turn episodes into press narratives, media hooks, and visibility opportunities — so your podcast doesn’t just live on platforms, it travels across industries.",
          },
        ].map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveModal(i)}
            className="group relative rounded-xl border border-black/10 bg-white p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>

            <p className="mt-3 text-sm text-gray-600">
              {item.short}
            </p>

            {/* subtle hover line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
          </div>
        ))}

      </div>

    </div>
  </AnimatedSection>

  {/* MODAL */}
  {activeModal !== null && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      
      <div className="bg-white max-w-xl w-full rounded-2xl p-8 relative shadow-2xl">
        
        <button
          onClick={() => setActiveModal(null)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {[
          {
            title: "Thought leadership placement",
            content:
              "We place your leaders where attention already exists. Instead of building from zero, you plug into trusted audiences. We handle outreach, positioning, prep, and narrative alignment so every appearance strengthens your authority.",
          },
          {
            title: "Brand sponsorship & collaboration",
            content:
              "We build partnerships that actually make sense. The right shows, the right formats, the right integration. Your brand becomes part of the story — not an ad that people skip.",
          },
          {
            title: "Podcast-led PR",
            content:
              "Every episode becomes a leverage point. We extract stories, angles, and narratives that can travel into PR, media, and industry conversations — multiplying the impact of every recording.",
          },
        ][activeModal] && (
          <>
            <h3 className="text-2xl font-bold">
              {
                [
                  "Thought leadership placement",
                  "Brand sponsorship & collaboration",
                  "Podcast-led PR",
                ][activeModal]
              }
            </h3>

            <p className="mt-4 text-gray-600 leading-7 text-sm">
              {
                [
                  "We place your leaders where attention already exists. Instead of building from zero, you plug into trusted audiences. We handle outreach, positioning, prep, and narrative alignment so every appearance strengthens your authority.",
                  "We build partnerships that actually make sense. The right shows, the right formats, the right integration. Your brand becomes part of the story — not an ad that people skip.",
                  "Every episode becomes a leverage point. We extract stories, angles, and narratives that can travel into PR, media, and industry conversations — multiplying the impact of every recording.",
                ][activeModal]
              }
            </p>
          </>
        )}

      </div>
    </div>
  )}
</section>
    </main>
  );
}