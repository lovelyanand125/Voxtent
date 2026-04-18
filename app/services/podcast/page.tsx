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
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value }),
    });
    alert(res.ok ? "Message sent!" : "Something went wrong. Please try again.");
    setOpen(false);
  };

  return (
    <main className="font-sans bg-[#FAF6F0] text-black">

      {/* HERO */}
      <section className="relative py-32 px-6 md:px-16 overflow-hidden bg-[#0B1A2B] text-white">
        <motion.img
          src="/Image/image1.png"
          alt="Podcast studio"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" as const }}
          className="absolute w-full h-full object-cover top-0 left-0 opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2B]/90 to-transparent" />
        <div className="absolute right-10 bottom-10 text-[180px] font-bold text-white opacity-5 hidden md:block select-none">P</div>

        <div className="relative z-10 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-red-400 uppercase tracking-widest text-sm mb-4"
          >
            The opportunity is open. Most businesses haven't walked through it yet.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Your audience is already listening. <br />
            <span className="text-red-400">Just not to you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-gray-300 text-lg max-w-2xl"
          >
            India now has over 200 million podcast listeners. The businesses and leaders who start building their voice today will own the conversation tomorrow.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen(true)}
            className="mt-8 bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Let's build yours→
          </motion.button>
        </div>
      </section>
      {/* S2 — THE NUMBERS */}
      <section className="bg-white py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400"
          >
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-red-500"
          >
            Why now
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 text-3xl md:text-4xl font-bold max-w-4xl leading-tight"
          >
            Podcasting in India is not a trend. It’s a shift.
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-gray-200 bg-[#FAF6F0] px-5 py-6"
            >
              <p className="text-3xl md:text-4xl font-bold text-black">200M+</p>
              <p className="mt-3 text-sm text-gray-600 leading-6">
                Podcast listeners in India in 2025, up from 100M a year ago.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-gray-200 bg-[#FAF6F0] px-5 py-6"
            >
              <p className="text-3xl md:text-4xl font-bold text-black">28%</p>
              <p className="mt-3 text-sm text-gray-600 leading-6">
                Year-on-year growth rate, one of the fastest in the world.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-gray-200 bg-[#FAF6F0] px-5 py-6"
            >
              <p className="text-3xl md:text-4xl font-bold text-black">#3</p>
              <p className="mt-3 text-sm text-gray-600 leading-6">
                India is the third largest podcast market globally.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-gray-200 bg-[#FAF6F0] px-5 py-6"
            >
              <p className="text-3xl md:text-4xl font-bold text-black">$4.2Bn</p>
              <p className="mt-3 text-sm text-gray-600 leading-6">
                Projected value of India’s podcast market by 2033.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 max-w-5xl rounded-xl border border-gray-200 bg-[#FAF6F0] px-6 py-6"
          >
            <p className="text-sm md:text-[15px] text-gray-700 leading-7">
584 million people worldwide now listen to podcasts. 75% of B2B decision-makers are already tuning in half of them daily. 91% of marketers are increasing their podcast investments this year. Companies with branded podcasts see 89% higher brand awareness than those without.
In India, this market is growing at 28% year-on-year. The RBI launched a podcast. Tata Steel launched a podcast. Durex launched a podcast.
The question isn't whether your business should have one. It's whether you can afford to be the only one without."
            </p>
          </motion.div>
        </AnimatedSection>
      </section>

            {/* S3 — WHY PODCASTING WORKS FOR BUSINESS */}
      <section className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400"
          >
            Why podcasting works for business
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-red-500"
          >
            The business case
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 text-3xl md:text-4xl font-bold max-w-4xl leading-tight text-black"
          >
            No other format does what a podcast does.
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 max-w-5xl space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="border-b border-black/10 pb-6"
            >
              <h3 className="text-xl md:text-2xl font-bold leading-snug text-black">
                It is the most authentic way to connect.
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                You are talking directly to your audience — no algorithm filtering,
                no 30-second window. A podcast listener gives you 30-45 minutes of
                undivided attention. No other medium offers that.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="border-b border-black/10 pb-6"
            >
              <h3 className="text-xl md:text-2xl font-bold leading-snug text-black">
                It builds thought leadership that compounds.
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                Every episode adds to your authority. Every guest adds credibility.
                Every platform adds reach. A podcast is not a campaign — it is an
                asset that grows over time.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-xl md:text-2xl font-bold leading-snug text-black">
                It is a 360° content engine.
              </h3>
              <p className="mt-3 text-gray-700 leading-7">
                One well-produced series gives you months of content — clips for
                social, quotes for LinkedIn, scripts for newsletters, material for
                PR. You create once and distribute everywhere.
              </p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-white py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-4">
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-500 mb-12">
            One engagement covers strategy to distribution — and everything in between.
          </motion.p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 py-3 border-b border-gray-100"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-12">
            How it works.
          </motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                className="flex gap-6 bg-white p-6 rounded-xl border border-gray-100 cursor-default"
              >
                <span className="text-red-500 font-bold text-2xl w-10 flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-12">
            Common questions.
          </motion.h2>
          <div className="max-w-3xl space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold">{item.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-red-500 text-2xl font-light flex-shrink-0 ml-4"
                  >
                    +
                  </motion.span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="px-5 pb-5 text-gray-600 text-sm"
                  >
                    {item.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-red-600 text-white py-24 px-6 md:px-16 overflow-hidden">
        <img src="/Image/p5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="relative z-10">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-5xl font-bold max-w-3xl">
              Ready to start your show?
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-white/90 text-lg">
              Let's talk about what your podcast could do for your business.
            </motion.p>
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpen(true)}
              className="mt-8 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Start the conversation →
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" as const }}
            className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-2xl"
          >
            <button onClick={() => setOpen(false)} className="absolute top-4 right-5 text-2xl text-gray-400 hover:text-black transition">×</button>
            <h2 className="text-xl font-bold mb-1">Let's Talk</h2>
            <p className="text-sm text-gray-500 mb-6">Tell us what you're building. We'll take it from there.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="name" placeholder="Your name" required className="p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400" />
              <input name="email" type="email" placeholder="Email address" required className="p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-red-400" />
              <textarea name="message" placeholder="What are you working on?" rows={4} className="p-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:border-red-400" />
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} type="submit" className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}


    </main>
  );
}
