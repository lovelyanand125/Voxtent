"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.55, ease: "easeOut" as const },
},
};

export default function ContactPage() {
const [form, setForm] = useState({
name: "",
email: "",
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
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    setStatus("sent");
    setForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  } else {
    setStatus("error");
  }
} catch (error) {
  console.error("Submit error:", error);
  setStatus("error");
}


};

return ( <main className="min-h-screen bg-[#FAF6F0]">


  {/* HERO */}
  <section className="bg-[#0B1A2B] text-white py-24 px-6 md:px-16">
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
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Let's build something
        <br />
        <span className="text-red-400">worth talking about.</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-5 text-gray-300 text-lg max-w-xl"
      >
        Whether you're starting a podcast, scaling content, or exploring —
        we'd love to hear what you're building.
      </motion.p>
    </motion.div>
  </section>

  {/* CONTENT */}
  <section className="py-24 px-6 md:px-16">
    <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-20">

      {/* LEFT INFO */}
      <div className="md:col-span-2 space-y-10 text-sm">
        <div>
          <h3 className="text-xs uppercase tracking-widest text-red-500 mb-2 font-semibold">
            Studio & Office
          </h3>
          <p className="font-medium text-gray-900">Bangalore, India</p>
          <p className="text-gray-500 mt-1">
            Remote & on-site engagements across India
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-red-500 mb-2 font-semibold">
            Phone
          </h3>
          <a
            href="tel:+919663799617"
            className="font-medium hover:text-red-600"
          >
            +91 96637 99617
          </a>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-red-500 mb-2 font-semibold">
            Email
          </h3>
          <a
            href="mailto:hello@voxtent.in"
            className="font-medium hover:text-red-600"
          >
            hello@voxtent.in
          </a>
        </div>
      </div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:col-span-3"
      >
        {status === "sent" ? (
          <div className="bg-white rounded-2xl p-10 shadow border text-center">
            <h2 className="text-2xl font-bold mb-2">Message sent!</h2>
            <p className="text-gray-500 mb-6">
              We'll get back within one business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-red-600 font-semibold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-2xl shadow space-y-6"
          >

            <div className="grid md:grid-cols-2 gap-5">
              <input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              />

              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
                className="border p-3 rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              />
            </div>

            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-red-400 outline-none"
            />

            <textarea
              required
              rows={5}
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-red-400 outline-none resize-none"
            />

            {status === "error" && (
              <p className="text-red-500 text-sm">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-red-600 text-white py-3 rounded-lg w-full hover:bg-red-700 transition disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

          </form>
        )}
      </motion.div>

    </div>
  </section>

</main>


);
}
