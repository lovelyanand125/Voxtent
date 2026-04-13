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

const personas = [
  { title: "Scaling a business", desc: "You need authority, not noise. We help you build that.", link: "/for/scaling" },
  { title: "Founder or CXO", desc: "Your story is your strongest asset. We help you tell it.", link: "/for/founders" },
  { title: "Running a brand", desc: "Content that moves people from awareness to action.", link: "/for/brands" },
  { title: "Building something new", desc: "Own your category before someone else does.", link: "/for/builders" },
];

const services = [
  { title: "Podcast Production", desc: "End-to-end podcast studio — concept, production, distribution, and growth.", link: "/services/podcast", img: "/Image/image1.png" },
  { title: "Video Content", desc: "Short-form cuts, reels, and long-form video engineered for business outcomes.", link: "/services/video", img: "/Image/hero1.jpg" },
  { title: "Content Strategy", desc: "A content engine aligned to your sales funnel, sector, and audience.", link: "/services/content", img: "/Image/service3.jpg" },
  { title: "Paid Marketing", desc: "Distribute your content where your buyers actually are.", link: "/services/marketing", img: "/Image/Sample4.jpg" },
  { title: "Lead Gen & Sales", desc: "Turn authority content into pipeline and revenue.", link: "/services/leadgen", img: "/Image/image2.jpg" },
];

const insights = [
  {
    tag: "Content Strategy",
    title: "Why most B2B content budgets are spent in the wrong place",
    desc: "Most companies spend 80% of their content budget on creation and almost nothing on distribution. Here's why that's backwards — and what a smarter split looks like.",
    read: "4 min read",
  },
  {
    tag: "Podcast",
    title: "The podcast ROI question every founder asks — and how to actually answer it",
    desc: "Podcast ROI isn't measured in downloads. It's measured in deals opened, trust built, and categories owned. We break down how to set the right metrics from day one.",
    read: "5 min read",
  },
  {
    tag: "Personal Branding",
    title: "Your LinkedIn is a billboard. Your podcast is a relationship.",
    desc: "A post gets you noticed. A show gets you trusted. The founders growing fastest in India right now are doing both — and using one to feed the other.",
    read: "3 min read",
  },
];

function ServiceCard({ item }: { item: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={item.link}>
      <motion.div
        variants={fadeUp}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={hovered ? { scale: 1.04, y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" } : { scale: 1, y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" }}
        transition={{ duration: 0.25 }}
        className="rounded-xl overflow-hidden border border-gray-100 cursor-pointer"
      >
        <div className="relative overflow-hidden h-48">
          <motion.img
            src={item.img}
            alt={item.title}
            animate={hovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 bg-white">
          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>
          <p className="text-red-600 mt-3 text-sm font-semibold">How we do it →</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

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
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-600 font-bold tracking-[0.2em] text-lg"
          >
            VOXTENT
          </motion.h1>

          <nav className="hidden md:flex gap-10 text-gray-700 text-sm font-medium">
            {["Home", "Podcast", "Services", "Insights", "Contact Us"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:text-red-600 transition">
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
      <section id="home" className="relative h-screen flex items-center text-white overflow-hidden">
        <motion.img
          src="/Image/Sample5.jpg"
          alt="VoxTent studio background"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" as const }}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute right-10 bottom-20 text-[200px] font-bold text-white opacity-5 hidden md:block select-none">V</div>

        <div className="relative z-10 px-6 md:px-16 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-red-400 uppercase tracking-widest text-sm mb-4"
          >
            A podcast and content studio.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Your podcast is the most powerful{" "}
            <span className="text-red-400">business tool you're not using yet.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 text-gray-300 text-lg max-w-2xl"
          >
            Your voice. Your audience. Your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <Link href="/services/podcast">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* RED BAND */}
      <section className="bg-red-600 text-white py-16 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold max-w-4xl">
            Every business has a point of view worth hearing.{" "}
            <br className="hidden md:block" />
            Most are still waiting for the right moment to share it.
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 italic text-white/80">
            There is no right moment. There is only now.
          </motion.p>
        </AnimatedSection>
      </section>

      {/* WHO WE'RE FOR */}
      <section id="podcast" className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-bold mb-10">
            Built for anyone with something worth saying.
          </motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-4 gap-6">
            {personas.map((item, i) => (
              <Link key={i} href={item.link}>
                <motion.div
                  variants={fadeUp}
                  whileHover={{ scale: 1.04, y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
                  className="bg-white p-6 rounded-xl border border-gray-100 cursor-pointer"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <p className="text-red-600 mt-4 font-semibold text-sm">That's me →</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl font-bold mb-4">
            One engine. Five ways it works for you.
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-500 mb-12">
            Podcast is the core. Everything around it amplifies, distributes, and converts.
          </motion.p>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <ServiceCard key={i} item={item} />
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-[#FAF6F0] py-24 px-6 md:px-16">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
            The businesses that own their sector tomorrow{" "}
            <span className="text-red-600">are building their voice today.</span>
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-600 mt-6 max-w-3xl">
            We exist at the intersection of content, technology, and business growth.
          </motion.p>
          <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 space-y-3 text-gray-700">
            {["We start with your business problem.", "We build for your sector.", "We connect content to outcomes."].map((line, i) => (
              <motion.li key={i} variants={fadeUp}>→ {line}</motion.li>
            ))}
          </motion.ul>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.04, backgroundColor: "#dc2626", color: "white" }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 border border-red-600 text-red-600 px-6 py-3 rounded-lg transition"
          >
            See how we think →
          </motion.button>
        </AnimatedSection>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="bg-[#f5efe6] py-20 px-6 md:px-16">
        <AnimatedSection>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} className="text-red-600 uppercase tracking-widest text-sm mb-2">
              Insights
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-3">
              Content that builds businesses.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mb-12 max-w-2xl">
              Perspectives on podcasting, content strategy, and what it actually takes to build authority in your sector.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              {insights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                  className="bg-white rounded-xl p-6 border border-gray-100 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-widest">{item.tag}</span>
                    <h3 className="font-bold text-lg mt-3 mb-3 leading-snug">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-xs text-gray-400">{item.read}</span>
                    <span className="text-red-600 text-sm font-semibold">Read →</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* FINAL CTA */}
      <section id="contactus" className="relative bg-red-600 text-white py-24 px-6 md:px-16 overflow-hidden">
        <img src="/Image/Sample5.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" />
        <div className="relative z-10">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-5xl font-bold max-w-3xl">
              Your voice is your most underused business asset.
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-4 text-white/90 text-lg">
              Let's figure out what it could be doing for you.
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
