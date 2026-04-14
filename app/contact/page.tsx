"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0]">

      {/* HERO STRIP */}
      <section className="bg-[#0B1A2B] text-white py-20 px-6 md:px-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-red-400 uppercase tracking-widest text-sm mb-3"
          >
            Get in touch
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight text-white"
          >
            Let's build something<br />
            <span className="text-red-400">worth talking about.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-gray-300 text-lg max-w-xl"
          >
            Whether you're starting a podcast, scaling content, or just exploring —
            we'd love to hear what you're working on.
          </motion.p>
        </motion.div>
      </section>

      {/* FORM + INFO GRID */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16">

          {/* LEFT — INFO */}
          <div className="md:col-span-2 space-y-10">

            <div>
              <h3 className="text-xs uppercase tracking-widest text-red-500 mb-3 font-semibold">
                Studio & Office
              </h3>
              <p className="text-gray-900 font-medium">Bangalore, India</p>
              <p className="text-gray-500 text-sm mt-1">Available for remote & on-site engagements across India</p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-red-500 mb-3 font-semibold">
                Phone
              </h3>
              <a
                href="tel:+919663799617"
                className="text-gray-900 font-medium hover:text-red-600 transition"
              >
                +91 96637 99617
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-red-500 mb-3 font-semibold">
                Email
              </h3>
              <a
                href="mailto:hello@voxtent.in"
                className="text-gray-900 font-medium hover:text-red-600 transition"
              >
                hello@voxtent.in
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-red-500 mb-3 font-semibold">
                What we can help with
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Podcast production & strategy",
                  "Video content & short-form",
                  "Content distribution & growth",
                  "Paid media & lead generation",
                  "Brand storytelling & thought leadership",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            {status === "sent" ? (
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Message sent!</h2>
                <p className="text-gray-500 mb-6">We'll get back to you within one business day.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-red-600 font-semibold hover:underline text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Send us a message</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Tell us what you're building. We'll take it from there.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        required
                        placeholder="Rahul Sharma"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                        Company
                      </label>
                      <input
                        placeholder="Your company"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="rahul@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wide">
                      What are you working on? *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your podcast idea, content goals, or what you'd like to achieve..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition resize-none bg-white"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </motion.button>

                </form>
              </div>
            )}
          </motion.div>

        </div>
      </section>

    </main>
  );
}
