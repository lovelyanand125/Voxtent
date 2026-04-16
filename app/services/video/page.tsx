"use client";

import { useState } from "react";

export default function VideoPage() {
  const [openFaq, setOpenFaq] = useState(null as number | null);

  const faqs = [
    { q: "What types of video do you produce?", a: "We produce short-form social videos (Reels, LinkedIn clips), long-form YouTube content, talking-head videos, product explainers, and anchor-led video podcasts. Format is decided based on your audience and business goal." },
    { q: "Do I need to come to a studio?", a: "Not necessarily. We work in our Bangalore studio, at your office, or remotely. For remote shoots we guide you through setup so the quality is indistinguishable from in-studio." },
    { q: "How many videos do I get per month?", a: "Our standard content packages include 8-12 short-form assets per month from a single long-form shoot session. We design the output around your content calendar." },
    { q: "Who writes the scripts?", a: "We do. Our content team handles research, scripting, and briefing. You review and approve before anything goes in front of a camera." },
    { q: "Do you handle distribution too?", a: "Yes. Production without distribution is wasted output. Every video engagement includes a platform distribution plan with posting schedules and copy." },
  ];

  return (
    <main className="bg-[#FAF6F0] min-h-screen">

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <img src="/Image/s2.jpg" alt="Video" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-12">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg mb-4" style={{ background: "#CC0000" }}>V</div>
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Video Content</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-6">
            Video that moves people.<br /><span className="text-red-400">And moves pipeline.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">Short-form, long-form, studio or remote — we build video content that earns attention and drives business outcomes.</p>
          <a href="/contact">
            <button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Start your video strategy →</button>
          </a>
        </div>
      </section>

      {/* PROBLEM BAND */}
      <section className="text-white py-16 px-6 md:px-16" style={{ background: "#0B1A2B" }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Most video content gets three seconds of attention and zero business results.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">The problem is not production quality. It is that the content was never built around a business outcome. We start with what you want to achieve and work backwards to the video.</p>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-2">Everything included.</h2>
        <p className="text-gray-500 mb-12">Nothing left to figure out.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Content strategy & scripting", "Studio or remote recording", "Professional editing & colour grade", "Motion graphics & captions", "Short-form social cuts", "Thumbnail design", "YouTube & LinkedIn optimisation", "Monthly content calendar", "Performance reporting", "Repurposing into written assets"].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium text-gray-700 flex items-start gap-2">
              <span className="text-red-500 font-black mt-0.5">✓</span>{item}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto border-t border-gray-200">
        <h2 className="text-3xl md:text-4xl font-black mb-12">How it works.</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { n: "01", title: "Discovery call", body: "We learn your business, audience, and content goals." },
            { n: "02", title: "Content strategy", body: "We map your video pillars, formats, and 90-day calendar." },
            { n: "03", title: "Scripting & briefing", body: "Our team writes every script. You review and approve." },
            { n: "04", title: "Shoot & produce", body: "Professional recording, editing, colour, captions delivered." },
            { n: "05", title: "Distribute & measure", body: "We publish across platforms and track results monthly." },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to build video content that works?</h2>
          <p className="text-gray-300 mb-6">Tell us what you are trying to build. We will tell you honestly if we can help.</p>
          <a href="/contact"><button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Start the conversation →</button></a>
        </div>
      </section>

    </main>
  );
}
