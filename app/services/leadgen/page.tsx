"use client";

import { useState } from "react";

export default function LeadGenPage() {
  const [openFaq, setOpenFaq] = useState(null as number | null);

  const faqs = [
    { q: "How do you generate leads through content?", a: "We build content assets — podcasts, videos, articles, lead magnets — that attract your ideal buyer. Each asset is designed with a clear next step that moves the prospect into your pipeline. Content warms the lead before your sales team ever picks up the phone." },
    { q: "What does a lead gen engagement include?", a: "It includes ICP definition, lead magnet creation, landing page build, email nurture sequences, LinkedIn outreach copy, and a 90-day content-to-pipeline plan. Everything coordinated around a single goal — qualified conversations." },
    { q: "How long before we see results?", a: "Most clients see initial traction within 30 to 60 days. A fully compounding pipeline typically takes 90 days. We set honest expectations upfront — content-led lead gen is not a quick fix, but it builds pipeline that does not dry up the moment you stop spending." },
    { q: "Do you work with our existing CRM?", a: "Yes. We integrate with HubSpot, Salesforce, Zoho, and most major CRMs. Lead data flows directly into your existing system so your sales team works from their usual tools." },
    { q: "What sectors do you have experience with?", a: "B2B SaaS, professional services, manufacturing, pharma, logistics, and financial services. The tactics differ by sector — we adapt the approach to where your buyers actually spend their time." },
  ];

  return (
    <main className="bg-[#FAF6F0] min-h-screen">

      {/* HERO */}
      <section className="relative h-[520px] overflow-hidden">
        <img src="/Image/image2.jpg" alt="Lead Gen" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "/Image/s3.jpg"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 px-6 md:px-16 pb-12">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg mb-4" style={{ background: "#CC0000" }}>L</div>
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Lead Generation</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl mb-6">
            Turn content into<br /><span className="text-red-400">qualified pipeline.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">Content that attracts, nurtures, and converts — built around your ideal buyer and your sales cycle.</p>
          <a href="/contact">
            <button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Build your pipeline →</button>
          </a>
        </div>
      </section>

      {/* PROBLEM BAND */}
      <section className="text-white py-16 px-6 md:px-16" style={{ background: "#0B1A2B" }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Content without a pipeline goal is a cost centre, not a growth engine.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">Most content teams optimise for views and followers. We optimise for conversations with the right people. Every asset we build has a clear next step designed to move your prospect closer to a sales conversation.</p>
        </div>
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black mb-2">Everything included.</h2>
        <p className="text-gray-500 mb-12">Nothing left to figure out.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["ICP & buyer persona definition", "Lead magnet creation", "Landing page design", "Email nurture sequences", "LinkedIn outreach copy", "Content-to-pipeline mapping", "CRM integration", "Lead scoring framework", "Monthly pipeline reporting", "90-day execution roadmap"].map((item, i) => (
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
            { n: "01", title: "Define your buyer", body: "We map your ICP in detail — industry, role, pain points, buying triggers, and where they spend time online." },
            { n: "02", title: "Build the assets", body: "Lead magnets, landing pages, email sequences, and content pieces — all designed to attract and convert your specific buyer." },
            { n: "03", title: "Activate the funnel", body: "Assets go live across your channels. We monitor what attracts attention and what converts it into pipeline." },
            { n: "04", title: "Optimise & scale", body: "We report monthly on pipeline generated, refine what is working, and build on the assets that are converting best." },
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
        <img src="/Image/Sample5.jpg" alt="CTA" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "rgba(11,26,43,0.85)" }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to build a pipeline through content?</h2>
          <p className="text-gray-300 mb-6">Tell us your target audience and growth goal. We will build the system around it.</p>
          <a href="/contact"><button className="text-white px-8 py-3.5 font-bold uppercase tracking-wider text-sm" style={{ background: "#CC0000" }}>Start the conversation →</button></a>
        </div>
      </section>

    </main>
  );
}
