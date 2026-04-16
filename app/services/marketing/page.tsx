"use client";

import { useState } from "react";

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState(null as number | null);

  const faqs = [
    { q: "What platforms do you run campaigns on?", a: "We run paid campaigns across LinkedIn, Meta (Instagram & Facebook), and Google. Platform selection is always based on where your audience actually is, not where it is cheapest to advertise." },
    { q: "What is the minimum budget you work with?", a: "We work with monthly ad spends starting from Rs 50,000. Below that threshold, the data volume is too low to optimise meaningfully. We will tell you this upfront if your budget does not fit." },
    { q: "Do you handle creative as well?", a: "Yes. We build all ad creatives, copy, and landing pages in-house. You do not need a separate design team. Everything is produced and managed by us." },
    { q: "How do you measure success?", a: "We track cost per lead, lead quality, pipeline generated, and where possible, closed revenue. We report monthly with full transparency on what is working and what we are changing." },
    { q: "Can you run marketing for a B2B company with a long sales cycle?", a: "Yes — most of our clients have 60 to 180 day sales cycles. We build campaigns specifically for long-cycle B2B, focused on warm pipeline and brand recall rather than instant conversion." },
  ];

  return (
    <main className="bg-[#FAF6F0] min-h-screen">

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <img src="/Image/s3.jpg" alt="Marketing" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-12">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg mb-4" style={{ background: "#CC0000" }}>M</div>
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Paid Marketing</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-6">
            Marketing that fills<br /><span className="text-red-400">your pipeline.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">LinkedIn, Meta, and Google campaigns built for B2B businesses that need qualified leads, not just impressions.</p>
          <a href="/contact">
            <button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Start your campaign →</button>
          </a>
        </div>
      </section>

      {/* PROBLEM BAND */}
      <section className="text-white py-16 px-6 md:px-16" style={{ background: "#0B1A2B" }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Most B2B marketing spend produces activity, not pipeline.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">Impressions, clicks, and followers are not revenue. We build campaigns with a single objective — qualified conversations with the right people. Everything else is secondary.</p>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-2">Everything included.</h2>
        <p className="text-gray-500 mb-12">Nothing left to figure out.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["LinkedIn campaign strategy", "Meta & Google campaign setup", "Ad creative & copywriting", "Landing page design", "Audience targeting & segmentation", "A/B testing & optimisation", "Lead magnet development", "CRM integration", "Monthly performance reports", "Retargeting campaigns"].map((item, i) => (
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
            { n: "01", title: "Audit & strategy", body: "We audit your current marketing, define your ICP, and build a campaign strategy before spending a single rupee." },
            { n: "02", title: "Creative & copy", body: "We produce all ad creatives, headlines, and landing pages in-house. Ready for launch within 2 weeks." },
            { n: "03", title: "Launch & optimise", body: "Campaigns go live. We monitor daily, optimise weekly, and report monthly with full transparency." },
            { n: "04", title: "Scale what works", body: "We double down on what drives pipeline and cut what does not. Every rupee earns its place." },
          ].map((s) => (
            <div key={s.n} className="flex flex-col gap-3">
              <span className="text-5xl font-black text-gray-100">{s.n}</span>
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
        <img src="/Image/Sample5.jpg" alt="CTA" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "rgba(11,26,43,0.85)" }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to build a pipeline through paid marketing?</h2>
          <p className="text-gray-300 mb-6">Tell us your target audience and growth goal. We will build the campaign around it.</p>
          <a href="/contact"><button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Start the conversation →</button></a>
        </div>
      </section>

    </main>
  );
}
