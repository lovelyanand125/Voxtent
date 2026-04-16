"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
  slug: "cxo-podcast-2026",
  category: "PODCAST",
  title: "Why Every CXO in India Needs a Podcast in 2026",
  excerpt:
    "The window for first-mover advantage in B2B audio is closing faster than anyone expected. Here's what the data says — and what to do about it.",
  date: "Apr 12, 2026",
  readTime: "8 min read",
  img: "/Image/image1.png",
  tag: "Trending",
};

const articles = [
  {
    slug: "leadership-digital-age",
    category: "CONTENT",
    title: "Leadership in the Digital Age",
    excerpt:
      "How to navigate the challenges of modern leadership and drive innovation in your organization through consistent content.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    img: "/Image/hero3.jpg",   // 📁 add your JPG here
    isVideo: false,
  },
  {
    slug: "authentic-communities",
    category: "MARKETING",
    title: "Building Authentic Online Communities",
    excerpt:
      "Strategies to foster engagement and trust with your audience across LinkedIn, podcasts, and beyond.",
    date: "Apr 8, 2026",
    readTime: "6 min read",
    img: "/Image/c2.jpg",    // 📁 add your JPG here
    isVideo: false,
  },
  {
    slug: "future-content-marketing",
    category: "STRATEGY",
    title: "The Future of Content Marketing",
    excerpt:
      "Key trends shaping how brands engage with audiences in a post-algorithm world.",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    img: "/Image/hero1.jpg",
    isVideo: false,
  },
  {
    slug: "cxo-conversations",
    category: "PODCAST",
    title: "CXO Conversations: Innovating for the Future",
    excerpt:
      "A deep dive into how India's top executives are using audio content to drive thought leadership.",
    date: "Apr 4, 2026",
    readTime: "36 min listen",
    img: "/Image/service3.jpg",
    isVideo: true,
  },
  {
    slug: "repurposing-content",
    category: "CONTENT",
    title: "Repurposing Long-Form Content at Scale",
    excerpt:
      "One podcast episode can generate 30+ assets. Here's the exact workflow we use at Voxtent.",
    date: "Apr 2, 2026",
    readTime: "4 min read",
    img: "/Image/s2.jpg",    // 📁 add your JPG here
    isVideo: false,
  },
  {
    slug: "linkedin-founders",
    category: "MARKETING",
    title: "LinkedIn for Founders: What Actually Works",
    excerpt:
      "We analysed 200 founder profiles. Here's the content pattern that consistently drives inbound leads.",
    date: "Mar 30, 2026",
    readTime: "6 min read",
    img: "/Image/c3.jpg",     // 📁 add your JPG here
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
  const router = useRouter();

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory.toUpperCase());

  return (
    <main className="bg-[#FAF6F0] text-black min-h-screen">

      {/* ── HERO ── */}
      <section
        className="text-white py-24 px-6 md:px-16 relative overflow-hidden"
        style={{ background: "#0B1A2B" }}
      >
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
              <button className="bg-red-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                Explore Insights
              </button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FILTER ── */}
      <div className="sticky top-[65px] z-40 bg-[#FAF6F0]/95 backdrop-blur-sm border-b border-gray-200 px-6 md:px-16 py-3 shadow-sm">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── ARTICLES ── */}
      <div id="articles" className="max-w-7xl mx-auto px-6 md:px-16 py-16">

        {/* Featured + Observing — two column layout */}
        {activeCategory === "All" && (
          <AnimatedSection>
            <motion.div variants={fadeUp} className="flex flex-col md:flex-row gap-6 mb-12">

              {/* LEFT — Featured Article */}
              <div
                onClick={() => router.push(`/insights/details/${featured.slug}`)}
                className="cursor-pointer group md:w-[60%] relative rounded-2xl overflow-hidden h-[380px] md:h-[420px] flex-shrink-0"
              >
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Trending badge top-left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {featured.tag}
                  </span>
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">
                    {featured.category}
                  </p>
                  <h2 className="text-white text-xl md:text-2xl font-bold leading-snug mb-2 group-hover:text-red-300 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — What We Are Observing */}
              <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6 md:p-7 flex flex-col justify-between">
                <div>
                  <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-5">
                    What We Are Observing
                  </p>
                  <ul className="space-y-0">
                    {observations.map((obs, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-3.5 border-b border-gray-100 last:border-0"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{obs}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-400 mt-5">Updated weekly by the Voxtent team</p>
              </div>

            </motion.div>
          </AnimatedSection>
        )}

        {/* Article grid */}
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => router.push(`/insights/details/${article.slug}`)}
                className="bg-white rounded-xl border border-gray-200 cursor-pointer group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* Image — always shown, bleeds to top */}
                <div className="relative overflow-hidden h-44 flex-shrink-0">
                  <img
                    src={article.img!}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {article.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                        <span className="text-red-600 text-sm ml-0.5">▶</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text body */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-red-500 text-xs font-semibold mb-2 uppercase tracking-wide">{article.category}</p>

                  <h3 className="font-bold text-base mb-2 leading-snug group-hover:text-red-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex justify-between items-center text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span>{article.date}</span>
                    <span
                      onClick={(e) => { e.stopPropagation(); router.push(`/insights/details/${article.slug}`); }}
                      className="text-red-500 font-semibold hover:underline cursor-pointer"
                    >
                      {article.isVideo ? "Watch" : "Read More"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Newsletter */}
        <div className="mt-16 bg-white border border-gray-200 rounded-xl p-8 md:p-10">
          <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Newsletter</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 max-w-lg">
            Want to build your brand through content?
          </h3>
          <p className="text-gray-500 text-sm mb-6 max-w-lg">
            Get weekly insights on B2B podcasting, content strategy, and what is working for India's top founders and CXOs.
          </p>
          {subscribed ? (
            <p className="text-green-600 font-semibold">✓ You're subscribed. Check your inbox.</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-red-400"
              />
              <button type="submit" className="bg-red-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Browse by category */}
        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Browse by category</p>
          <div className="flex flex-wrap gap-4">
            {["Podcast", "Content", "Marketing", "Strategy", "CXO"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                {cat} →
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* ── FINAL CTA ── */}
      <section className="text-white py-20 px-6 md:px-16 text-center" style={{ background: "#0B1A2B" }}>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Ready to create content that builds your business?
        </h2>
        <p className="text-gray-400 mb-8">Let's talk about your podcast, content strategy, or brand story.</p>
        <a href="/contact">
          <button className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition">
            Talk to Us
          </button>
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#111] text-white px-6 md:px-16 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

            {/* Brand */}
            <div className="md:col-span-1">
              <p className="font-black text-xl tracking-widest text-white mb-3">VOXTENT</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building content engines that turn ideas into authority.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Quick Links</p>
              <ul className="space-y-2.5">
                {["About", "Services", "Insights", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`/${l.toLowerCase()}`} className="text-gray-400 text-sm hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Services</p>
              <ul className="space-y-2.5">
                {["Podcast", "Content", "Marketing", "Strategy"].map((s) => (
                  <li key={s}>
                    <a href={`/services/${s.toLowerCase()}`} className="text-gray-400 text-sm hover:text-white transition">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Contact</p>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>Bangalore, India</li>
                <li>
                  <a href="tel:+919663799617" className="hover:text-white transition">+91 96637 99617</a>
                </li>
                <li>
                  <a href="mailto:hello@voxtent.in" className="hover:text-white transition">hello@voxtent.in</a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-3 text-xs text-gray-600">
            <p>© 2026 Voxtent. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="/privacy" className="hover:text-gray-400 transition">Privacy</a>
              <a href="/terms" className="hover:text-gray-400 transition">Terms</a>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}
