"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = ["All", "Podcast", "Content", "Marketing", "Strategy", "CXO"];

const featured = {
  category: "PODCAST",
  title: "Why Every CXO in India Needs a Podcast in 2026",
  excerpt: "The window for first-mover advantage in B2B audio is closing faster than anyone expected. Here's what the data says — and what to do about it.",
  date: "Apr 12, 2026",
  readTime: "8 min read",
  img: "/Image/image1.png",
  tag: "Trending",
};

const articles = [
  {
    category: "CONTENT",
    title: "Leadership in the Digital Age",
    excerpt: "How to navigate the challenges of modern leadership and drive innovation in your organization through consistent content.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    img: null,
    isVideo: false,
  },
  {
    category: "MARKETING",
    title: "Building Authentic Online Communities",
    excerpt: "Strategies to foster engagement and trust with your audience across LinkedIn, podcasts, and beyond.",
    date: "Apr 8, 2026",
    readTime: "6 min read",
    img: null,
    isVideo: false,
  },
  {
    category: "STRATEGY",
    title: "The Future of Content Marketing",
    excerpt: "Key trends shaping how brands engage with audiences in a post-algorithm world.",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    img: "/Image/hero1.jpg",
    isVideo: false,
  },
  {
    category: "PODCAST",
    title: "CXO Conversations: Innovating for the Future",
    excerpt: "A deep dive into how India's top executives are using audio content to drive thought leadership.",
    date: "Apr 4, 2026",
    readTime: "36 min listen",
    img: "/Image/service3.jpg",
    isVideo: true,
  },
  {
    category: "CONTENT",
    title: "Repurposing Long-Form Content at Scale",
    excerpt: "One podcast episode can generate 30+ assets. Here's the exact workflow we use at Voxtent.",
    date: "Apr 2, 2026",
    readTime: "4 min read",
    img: null,
    isVideo: false,
  },
  {
    category: "MARKETING",
    title: "LinkedIn for Founders: What Actually Works",
    excerpt: "We analysed 200 founder profiles. Here's the content pattern that consistently drives inbound leads.",
    date: "Mar 30, 2026",
    readTime: "6 min read",
    img: null,
    isVideo: false,
  },
];

const observations = [
  "Shift towards personalised content experiences",
  "Growth in B2B influencer marketing",
  "Emerging remote work strategies",
  "Audio-first brand building gaining traction",
  "CXO personal brands driving deal flow",
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory.toUpperCase());

  return (
    <main className="bg-[#FAF6F0] text-black min-h-screen">

      {/* HERO */}
      <section className="bg-[#0B1A2B] text-white py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none select-none flex items-center justify-end pr-16">
          <span className="text-[220px] font-bold tracking-tighter">I</span>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl relative z-10"
        >
          <motion.p variants={fadeUp} className="text-red-400 uppercase tracking-widest text-xs mb-4 font-semibold">
            Voxtent Insights
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight">
            Content.<br />
            <span className="text-red-400">Podcasts.</span><br />
            Influence.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-gray-300 text-lg max-w-xl">
            Insights and trends for CXOs, founders, and content-driven businesses across India.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a href="#articles">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Explore Insights
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="sticky top-[65px] z-40 bg-[#FAF6F0]/95 backdrop-blur-sm border-b border-gray-200 px-6 md:px-16 py-3 shadow-sm">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-red-400 hover:text-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div id="articles" className="max-w-7xl mx-auto px-6 md:px-16 py-16">

        {/* FEATURED */}
        {activeCategory === "All" && (
          <AnimatedSection className="mb-16">
            <motion.div variants={stagger} className="grid md:grid-cols-5 gap-8">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="md:col-span-3 relative rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="h-72 md:h-96 bg-gray-800 relative overflow-hidden">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {featured.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-red-400 text-xs uppercase tracking-widest font-semibold mb-2">
                      {featured.category}
                    </p>
                    <h2 className="text-white text-2xl font-bold leading-snug mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4 max-w-lg hidden md:block">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-gray-400 text-xs">
                      <span>{featured.date}</span>
                      <span>.</span>
                      <span>{featured.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* WHAT WE ARE OBSERVING */}
              <motion.div variants={fadeUp} className="md:col-span-2 flex flex-col justify-between">
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full flex flex-col">
                  <div>
                    <p className="text-red-500 text-xs uppercase tracking-widest font-semibold mb-4">
                      What We Are Observing
                    </p>
                    <ul className="space-y-3">
                      {observations.map((obs, i) => (
                        <motion.li
                          key={i}
                          variants={fadeUp}
                          className="flex items-start gap-3 text-sm text-gray-700 py-3 border-b border-gray-100 last:border-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5" />
                          {obs}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400">Updated weekly by the Voxtent team</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        )}

        {/* ARTICLE GRID */}
        <AnimatedSection>
          <motion.div variants={stagger} className="grid md:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group"
              >
                {article.img && (
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {article.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="bg-red-600 text-white rounded-full px-4 py-1.5 text-xs font-bold flex items-center gap-2">
                          <span>&#9654;</span> {article.readTime}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <p className="text-red-500 text-xs uppercase tracking-widest font-semibold mb-2">
                    {article.category}
                  </p>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-red-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span className="text-red-500 font-semibold group-hover:underline">
                      {article.isVideo ? "Watch" : "Read More"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

      </div>

      {/* NEWSLETTER + CTA */}
      <section className="bg-[#0B1A2B] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <AnimatedSection>
            <motion.div variants={stagger}>
              <motion.p variants={fadeUp} className="text-red-400 text-xs uppercase tracking-widest font-semibold mb-3">
                Newsletter
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                Want to build your brand through content?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-6">
                Get weekly insights on B2B podcasting, content strategy, and what is working for India's top founders and CXOs.
              </motion.p>
              {subscribed ? (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 font-semibold"
                >
                  You are in! Check your inbox.
                </motion.p>
              ) : (
                <motion.div variants={fadeUp} className="flex gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-400 transition"
                  />
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => email && setSubscribed(true)}
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={stagger} className="space-y-4">
              <motion.p variants={fadeUp} className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">
                Browse by category
              </motion.p>
              {categories.filter((c) => c !== "All").map((cat) => (
                <motion.button
                  key={cat}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  onClick={() => {
                    setActiveCategory(cat);
                    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center justify-between w-full py-3 border-b border-white/10 text-gray-300 hover:text-white group transition"
                >
                  <span className="font-medium">{cat}</span>
                  <span className="text-red-500 opacity-0 group-hover:opacity-100 transition">&#8594;</span>
                </motion.button>
              ))}
            </motion.div>
          </AnimatedSection>

        </div>
      </section>

      {/* TALK CTA */}
      <section className="bg-red-600 text-white py-16 px-6 md:px-16 text-center">
        <AnimatedSection>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">
            Ready to create content that builds your business?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/80 mb-8 text-lg">
            Let's talk about your podcast, content strategy, or brand story.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Talk to Us
              </motion.button>
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

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
          <p>2026 Voxtent</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition">Privacy</span>
            <span className="hover:text-white cursor-pointer transition">Terms</span>
          </div>
        </div>
      </footer>

    </main>
  );
}
