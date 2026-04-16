"use client";

import { useState } from "react";

export default function StrategyPage() {
  const [openFaq, setOpenFaq] = useState(null as number | null);

  const faqs = [
    { q: "What is the difference between content strategy and growth strategy?", a: "Content strategy defines what you create and why. Growth strategy defines how you use content, marketing, and distribution together to drive measurable business outcomes. We offer both, and the best engagements combine them." },
    { q: "Who is this for?", a: "Founders, CMOs, and marketing leaders who know they need a coherent strategy but do not have the internal bandwidth to build one properly. Also for businesses that have been creating content without seeing pipeline impact." },
    { q: "Do you work with early-stage companies?", a: "Yes. Some of our most effective strategy work has been with companies under 50 people who are building their go-to-market from scratch. Starting with strategy saves significant money later." },
    { q: "How long does an engagement take?", a: "A focused strategy engagement typically takes 3 to 6 weeks. Larger or more complex businesses take longer. We scope it honestly before we start." },
    { q: "What do we walk away with?", a: "A complete strategy document, a 90-day execution roadmap, platform and format recommendations, and a briefing session with your team. Everything documented and immediately actionable." },
  ];

  return (
    <main className="bg-[#FAF6F0] min-h-screen">

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <img src="/Image/p3.jpg" alt="Strategy" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "/Image/p2.jpg"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-12">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg mb-4" style={{ background: "#CC0000" }}>S</div>
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Growth Strategy</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-6">
            Strategy before<br /><span className="text-red-400">everything else.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">The businesses that grow fastest are the ones that know exactly where they are going before they start spending. We build that map.</p>
          <a href="/contact">
            <button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Build your growth strategy →</button>
          </a>
        </div>
      </section>

      {/* PROBLEM BAND */}
      <section className="text-white py-16 px-6 md:px-16" style={{ background: "#0B1A2B" }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Execution without strategy is just expensive experimentation.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">Most businesses skip strategy because it feels slow. Then they spend 12 months producing content that does not convert, running campaigns that do not compound, and wondering why growth has stalled. Strategy is not slow. Doing it wrong is slow.</p>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-2">Everything included.</h2>
        <p className="text-gray-500 mb-12">Nothing left to figure out.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Business & revenue audit", "ICP & audience definition", "Competitive landscape analysis", "Positioning & messaging framework", "Channel & platform strategy", "Content & campaign roadmap", "90-day execution plan", "Budget allocation guidance", "KPI & measurement framework", "Team briefing session"].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 flex items-start gap-2">
              <span className="text-red-500 font-black mt-0.5">✓</span>{item}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-black mb-12">How it works.</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { n: "01", title: "Business deep dive", body: "We spend the first week understanding your business model, revenue goals, team, and market. No templates — every strategy starts here." },
            { n: "02", title: "Research & analysis", body: "We research your competitors, your audience, and your market position. We find the gaps others have missed." },
            { n: "03", title: "Strategy development", body: "We build your positioning, channel strategy, content approach, and 90-day roadmap. Collaborative review throughout." },
            { n: "04", title: "Handoff & activation", body: "You receive the complete strategy document and a full briefing session. We stay available for 30 days of questions." },
          ].map((s) => (
            <div key={s.n} className="flex flex-col gap-3">
              <span className="text-5xl font-black text-red-300">{s.n}</span>
              <h3 className="font-black text-lg">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-8">Common questions.</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-200">
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center py-5 text-left font-semibold text-gray-900 hover:text-red-600 transition">
              {faq.q}<span className="text-red-500 text-xl ml-4">{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>}
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src="/Image/p1.jpg" alt="CTA" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "rgba(11,26,43,0.85)" }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to build a strategy that actually drives growth?</h2>
          <p className="text-gray-300 mb-6">Tell us where you are and where you want to get to. We will tell you honestly how to get there.</p>
          <a href="/contact"><button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Start the conversation →</button></a>
        </div>
      </section>

    </main>
  );
}
