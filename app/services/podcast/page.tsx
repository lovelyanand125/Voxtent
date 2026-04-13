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

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur border-b border-red-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-red-600 font-bold tracking-[0.2em] text-lg cursor-pointer"
            >
              VOXTENT
            </motion.h1>
          </Link>

          <nav className="hidden md:flex gap-10 text-gray-700 text-sm font-medium">
            {["Home", "Podcast", "Services", "Insights", "Contact Us"].map((item) => (
              <a key={item} href={item === "Home" ? "/" : `/#${item.toLowerCase().replace(" ", "")}`} className="hover:text-red-600 transition">
                {item}
              </a>
            ))}
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen(true)}
            className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition"
          >
            Let's Talk
          </motion.button>
        </div>
      </header>

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
            Podcast Production
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Your show. <br />
            <span className="text-red-400">Built to mean business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-gray-300 text-lg max-w-2xl"
          >
            We take founders, CXOs, and business leaders from zero to a fully produced, distributed, and growing podcast — without the guesswork.
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
            Start your podcast →
          </motion.button>
        </div>
      </section>

      {/* WHY PODCAST */}
      <section className="bg-red-600 text-white py-16 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold max-w-4xl">
            A podcast isn't a content play. <br className="hidden md:block" />
            It's a business development engine in disguise.
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-white/80 max-w-2xl">
            The most trusted voices in any sector have a show. Your competitors don't yet. That window won't stay open.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-white py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-4">
            Everything included. Nothing left to figure out.
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
        <img src="/Image/Sample5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
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

      {/* FOOTER */}
      <footer className="bg-[#0B1A2B] text-gray-300 py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-white font-bold text-xl mb-4 tracking-[0.15em]">VOXTENT</h2>
            <p className="text-sm text-gray-400">Building content engines that turn ideas into authority.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["About", "Services", "Insights", "Contact"].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Podcast", "Content", "Marketing", "Strategy"].map((l) => (
                <li key={l} className="hover:text-white cursor-pointer transition">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">Bangalore, India</p>
            <p className="text-sm mt-2 text-blue-400">+91 9663799617</p>
            <p className="text-sm mt-2">hello@voxtent.in</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between text-sm">
          <p>© 2026 Voxtent</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition">Privacy</span>
            <span className="hover:text-white cursor-pointer transition">Terms</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
