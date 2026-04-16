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

const [status, setStatus] = useState<
"idle" | "sending" | "sent" | "error"

> ("idle");

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

return ( <main className="min-h-screen bg-[#FAF6F0] flex flex-col">


  {/* HERO */}
  <section className="relative py-28 px-6 md:px-16 text-white overflow-hidden">
    <motion.img
      src="/Image/c3.jpg"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    />
    <div className="absolute inset-0 bg-black/70" />

    <div className="relative z-10 max-w-4xl">
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
        className="mt-4 text-gray-300"
      >
        Tell us about your idea — we’ll guide you forward.
      </motion.p>

      <div className="mt-6 flex gap-3 flex-wrap text-sm">
        <span className="bg-white/10 px-4 py-2 rounded-full">⚡ 24h response</span>
        <span className="bg-white/10 px-4 py-2 rounded-full">🎯 Strategy-first</span>
        <span className="bg-white/10 px-4 py-2 rounded-full">🚀 Growth focused</span>
      </div>
    </div>
  </section>

  {/* MAIN */}
  <section className="py-24 px-6 md:px-16 flex-1">
    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-20">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:col-span-2 space-y-10"
      >
        <img
          src="/Image/c2.jpg"
          className="rounded-xl shadow w-full h-64 object-cover"
        />

        <div className="text-sm space-y-5">
          <div>
            <p className="text-red-500 text-xs uppercase">Studio</p>
            <p>Banashankari, Bangalore</p>
          </div>

          <div>
            <p className="text-red-500 text-xs uppercase">Phone</p>
            <p>+91 96637 99617</p>
          </div>

          <div>
            <p className="text-red-500 text-xs uppercase">Email</p>
            <p>hello@voxtent.in</p>
          </div>
        </div>

        {/* EXTRA TRUST */}
        <div className="text-sm text-gray-600">
          <p>✔ We respond within 24 hours</p>
          <p>✔ No spam, no sales pressure</p>
          <p>✔ Clear next steps guaranteed</p>
        </div>
      </motion.div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-3"
      >
        {status === "sent" ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-3">You're in 🚀</h2>
            <p className="text-gray-500">We’ll contact you within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-xl shadow space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-3 rounded focus:ring-2 focus:ring-red-400 transition"
              />

              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="border p-3 rounded focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border p-3 rounded focus:ring-2 focus:ring-red-400 transition"
              />

              <input
                required
                type="tel"
                placeholder="Mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="border p-3 rounded focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <textarea
              required
              rows={4}
              placeholder="What are you trying to build?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border p-3 w-full rounded focus:ring-2 focus:ring-red-400 transition"
            />

            <p className="text-sm text-gray-500">
              👉 We review every request personally. Expect a response within 24 hours.
            </p>

            <button className="bg-red-600 text-white py-3 rounded w-full hover:bg-red-700 transition hover:scale-[1.02]">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

    </div>
  </section>

  {/* TESTIMONIAL */}
  <section className="px-6 md:px-16 pb-20 text-center">
    <div className="max-w-3xl mx-auto">
      <p className="italic text-gray-700 text-lg">
        “Voxtent helped us scale from 0 to 50K audience and build a real inbound pipeline.”
      </p>
      <p className="text-sm text-gray-500 mt-3">
        — Founder, B2B SaaS Company
      </p>
    </div>
  </section>

  {/* FOOTER */}
  <footer className="bg-[#0B1A2B] text-white px-6 md:px-16 py-16">
    <div className="grid md:grid-cols-4 gap-10">

      <div>
        <h2 className="font-bold text-lg">VOXTENT</h2>
        <p className="text-sm text-gray-400 mt-2">
          Building content engines that turn ideas into authority.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Quick Links</h3>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Services</h3>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/podcast">Podcast</Link>
          <Link href="/services">Content</Link>
          <Link href="/services">Marketing</Link>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Contact</h3>
        <p>Bangalore, India</p>
        <p className="text-blue-400">+91 9663799617</p>
        <p>hello@voxtent.in</p>
      </div>

    </div>

    <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-400">
      2026 Voxtent
    </div>
  </footer>

</main>


);
}
