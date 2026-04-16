"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

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
        setForm({
          name: "",
          email: "",
          mobile: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF6F0] flex flex-col">
      {/* HERO */}
      <section className="relative min-h-[560px] py-28 px-6 md:px-16 text-white overflow-hidden">
        <motion.img
          src="/Image/c2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/75" />
        <div className="absolute inset-0 bg-[#0b1a2b]/25" />

        <div className="relative z-10 max-w-4xl pt-10 md:pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Let’s build something
            <span className="text-red-400"> powerful.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-gray-200 max-w-2xl"
          >
            Tell us about your idea - we’ll guide you forward.
          </motion.p>

          <div className="mt-6 flex gap-3 flex-wrap text-sm">
            <span className="bg-red-500/20 text-red-100 border border-red-300/20 px-4 py-2 rounded-full backdrop-blur-sm">
              ⚡ 24h response
            </span>
            <span className="bg-cyan-500/20 text-cyan-100 border border-cyan-300/20 px-4 py-2 rounded-full backdrop-blur-sm">
              🎯 Strategy-first
            </span>
            <span className="bg-amber-500/20 text-amber-100 border border-amber-300/20 px-4 py-2 rounded-full backdrop-blur-sm">
              🚀 Growth focused
            </span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-24 px-6 md:px-16 flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 space-y-10"
          >
            <img
              src="/Image/c3.jpg"
              alt="Voxtent studio"
              className="rounded-xl shadow w-full h-64 object-cover ring-1 ring-black/5"
            />

            <div className="text-sm space-y-5">
              <div>
                <p className="text-red-500 text-xs uppercase tracking-[0.18em] font-semibold">
                  Studio
                </p>
                <p className="text-black">Bangalore, Mumbai, Delhi NCR</p>
              </div>

              <div>
                <p className="text-red-500 text-xs uppercase tracking-[0.18em] font-semibold">
                  Phone
                </p>
                <p className="text-black">+91 96637 99617</p>
              </div>

              <div>
                <p className="text-red-500 text-xs uppercase tracking-[0.18em] font-semibold">
                  Email
                </p>
                <p className="text-black">hello@voxtent.in</p>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>✔ No spam, no sales pressure</p>
              <p>✔ Clear next steps guaranteed</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-3"
          >
            {status === "sent" ? (
              <div className="bg-white p-10 rounded-xl shadow text-center border border-green-200">
                <h2 className="text-2xl font-bold mb-3 text-green-700">
                  You're in 🚀
                </h2>
                <p className="text-gray-500">We’ll contact you within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-xl shadow space-y-6 border border-black/5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-black/10 p-3 rounded-lg focus:ring-2 focus:ring-red-400 transition outline-none"
                  />

                  <input
                    placeholder="Company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="border border-black/10 p-3 rounded-lg focus:ring-2 focus:ring-cyan-400 transition outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="border border-black/10 p-3 rounded-lg focus:ring-2 focus:ring-amber-400 transition outline-none"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Mobile"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="border border-black/10 p-3 rounded-lg focus:ring-2 focus:ring-red-400 transition outline-none"
                  />
                </div>

                <textarea
                  required
                  rows={4}
                  placeholder="What are you trying to build?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="border border-black/10 p-3 w-full rounded-lg focus:ring-2 focus:ring-red-400 transition outline-none"
                />

                <p className="text-sm text-gray-500">
                  👉 We review every request personally. Expect a response within
                  24 hours.
                </p>

                <button className="bg-red-600 text-white py-3 rounded-lg w-full hover:bg-red-700 transition hover:scale-[1.02] font-semibold">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* S2 REASSURANCE STRIP */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto border-t border-black/10 pt-10">
          <div className="mb-6">
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-black">
              Three trust signals - no pitch, no pressure.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-white p-5 shadow-sm">
              <div className="h-1 w-14 rounded-full bg-red-500 mb-4" />
              <h3 className="font-semibold text-black mb-2">
                Your time is respected here.
              </h3>
              <p className="text-sm text-gray-600 leading-6">
                We don’t do long discovery calls that lead nowhere. Every
                conversation we have is focused, honest, and worth showing up for.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-5 shadow-sm">
              <div className="h-1 w-14 rounded-full bg-cyan-500 mb-4" />
              <h3 className="font-semibold text-black mb-2">No hidden agenda.</h3>
              <p className="text-sm text-gray-600 leading-6">
                We’ll listen first. If we think we can genuinely help, we’ll tell
                you how. If we can’t, we’ll tell you that too.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm">
              <div className="h-1 w-14 rounded-full bg-amber-500 mb-4" />
              <h3 className="font-semibold text-black mb-2">
                Transparent from the first conversation.
              </h3>
              <p className="text-sm text-gray-600 leading-6">
                No vague proposals. No inflated promises. Just a clear view of
                what working with us looks like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}