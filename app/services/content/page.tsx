"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What does a content strategy engagement actually deliver?",
    a: "At the end of a strategy engagement you get a complete content playbook — your positioning, messaging pillars, content formats, platform priorities, editorial calendar, and a 90-day execution plan. It's a document your team can act on immediately.",
  },
  {
    q: "Do we need to have existing content for you to work with?",
    a: "No. Many of our clients come to us with zero content history. The strategy is built from scratch around your business goals, audience, and competitive landscape.",
  },
  {
    q: "How long does a strategy engagement take?",
    a: "A standard content strategy engagement takes 3–4 weeks from discovery to final delivery. We work fast because we've done this across sectors — we're not starting from a blank page.",
  },
  {
    q: "Can you execute on the strategy too?",
    a: "Yes. Most clients move from strategy into an ongoing production engagement with us. But you can also take the playbook and execute with your own team — we build it to be self-sufficient.",
  },
  {
    q: "What sectors do you have experience in?",
    a: "We've built content strategies for clients across B2B SaaS, manufacturing, pharma, logistics, financial services, real estate, and professional services. The principles are consistent — the execution is always sector-specific.",
  },
];

export default function ContentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#FAF6F0] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          <img
            src="/Image/hero1.jpg"
            alt="Content Strategy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-12">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-lg mb-4">
              C
            </div>
            <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">
              Content Strategy
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-6">
              Clarity first.<br />
              <span className="text-red-400">Content second.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mb-8">
              Before you create another piece of content, you need to know exactly why you're creating it and who it's for. That's what we build.
            </p>
            <a href="/contact">
              <button className="bg-red-600 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition">
                Build your content strategy →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROBLEM BAND ── */}
      <section className="text-white py-16 px-6 md:px-16" style={{ background: "#0B1A2B" }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
            Most businesses create content. Very few have a content strategy.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            There's a difference between publishing consistently and building authority systematically. One fills a calendar. The other builds a business. We help you move from the first to the second.
          </p>
        </div>
      </section>

      {/* ── EVERYTHING INCLUDED ── */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-2">Everything included.</h2>
        <p className="text-gray-500 mb-12">Nothing left to figure out.</p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            "Audience & competitor research",
            "Brand positioning workshop",
            "Messaging pillar development",
            "Platform prioritisation",
            "Format & channel strategy",
            "90-day editorial calendar",
            "Content brief templates",
            "SEO & keyword mapping",
            "Distribution playbook",
            "KPI & measurement framework",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 flex items-start gap-2"
            >
              <span className="text-red-500 font-black mt-0.5">✓</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-black mb-12">How it works.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", title: "Discovery call", body: "We learn your business model, revenue goals, current content activity, and audience. Honest assessment — no flattery." },
            { n: "02", title: "Research & audit", body: "We research your market, audit your competitors' content, and identify the gaps and opportunities specific to your category." },
            { n: "03", title: "Strategy build", body: "We develop your positioning, messaging pillars, platform strategy, and 90-day calendar. Collaborative review sessions throughout." },
            { n: "04", title: "Handoff & activation", body: "You receive a complete content playbook and briefing session. If you're moving into production with us, we start immediately." },
          ].map((step) => (
            <div key={step.n} className="flex flex-col gap-3">
              <span className="text-5xl font-black text-gray-100">{step.n}</span>
              <h3 className="font-black text-lg">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-16 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-8">Common questions.</h2>
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left font-semibold text-gray-900 hover:text-red-600 transition"
              >
                {faq.q}
                <span className="text-red-500 text-xl ml-4">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 md:h-80">
          <img src="/Image/Sample5.jpg" alt="CTA" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "rgba(11,26,43,0.85)" }}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to build a content strategy that drives inbound?
            </h2>
            <p className="text-gray-300 mb-6">Tell us what you're trying to build. We'll tell you honestly if we can help.</p>
            <a href="/contact">
              <button className="bg-red-600 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition">
                Start the conversation →
              </button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
