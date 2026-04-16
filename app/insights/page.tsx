"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Category = "All" | "Podcast" | "Content" | "Marketing" | "Strategy" | "CXO";

type Article = {
  slug: string;
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const articles: Article[] = [
  {
    slug: "cxo-podcast-2026",
    category: "Podcast",
    title: "Why Every CXO in India Needs a Podcast in 2026",
    excerpt:
      "The opportunity for category leadership in B2B audio is still open — but not for long.",
    date: "Apr 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "leadership-digital-age",
    category: "Content",
    title: "Leadership in the Digital Age",
    excerpt:
      "How modern leaders build visibility, authority, and trust through consistent content.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "authentic-communities",
    category: "Marketing",
    title: "Building Authentic Online Communities",
    excerpt:
      "What actually creates trust and participation in a world of rented attention.",
    date: "Apr 8, 2026",
    readTime: "6 min read",
  },
  {
    slug: "future-content-marketing",
    category: "Strategy",
    title: "The Future of Content Marketing",
    excerpt:
      "Why the next era of content belongs to brands building owned audiences, not borrowed reach.",
    date: "Apr 6, 2026",
    readTime: "7 min read",
  },
  {
    slug: "cxo-conversations",
    category: "Podcast",
    title: "CXO Conversations: Innovating for the Future",
    excerpt:
      "A deeper look at how executives are using audio content to shape influence and pipeline.",
    date: "Apr 4, 2026",
    readTime: "36 min listen",
  },
  {
    slug: "repurposing-content",
    category: "Content",
    title: "Repurposing Long-Form Content at Scale",
    excerpt:
      "One strong source asset can power weeks of distribution if the system is built properly.",
    date: "Apr 2, 2026",
    readTime: "4 min read",
  },
  {
    slug: "linkedin-founders",
    category: "Marketing",
    title: "LinkedIn for Founders: What Actually Works",
    excerpt:
      "The posting patterns that consistently turn founder visibility into inbound opportunities.",
    date: "Mar 30, 2026",
    readTime: "6 min read",
  },
  {
    slug: "boardroom-to-brand",
    category: "CXO",
    title: "From Boardroom to Brand",
    excerpt:
      "Why executive presence now extends far beyond meetings, events, and press mentions.",
    date: "Mar 28, 2026",
    readTime: "5 min read",
  },
];

const observations = [
  "CXO-led content is outperforming brand-led content in trust and recall.",
  "Podcasts are becoming the strongest long-form authority asset in B2B.",
  "Distribution systems matter more than isolated content creation.",
];

const categories: Category[] = [
  "All",
  "Podcast",
  "Content",
  "Marketing",
  "Strategy",
  "CXO",
];

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const featured = articles[0];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return articles;
    return articles.filter((article) => article.category === selectedCategory);
  }, [selectedCategory]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <main className="bg-[#FAF6F0] text-black">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[560px] flex items-center px-6 md:px-16 py-24 text-white">
        <img
          src="/Image/i3.jpg"
          alt="Voxtent insights background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#041526]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041526]/95 via-[#041526]/72 to-[#041526]/28" />

        <div className="relative z-10 max-w-3xl">
          <p className="text-red-400 uppercase tracking-[0.22em] text-xs font-bold mb-4">
            Voxtent Insights
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95]">
            Content.
            <br />
            <span className="text-[#ff6b6b]">Podcasts.</span>
            <br />
            Influence.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl leading-8">
            Insights and trends for CXOs, founders, and content-driven businesses
            across India.
          </p>

          <a href="#articles">
            <button className="mt-10 bg-red-600 hover:bg-red-700 transition text-white px-7 py-3.5 rounded-xl font-semibold">
              Explore Insights
            </button>
          </a>
        </div>

        <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden md:block z-10">
          <div className="w-7 h-36 rounded-sm bg-white/8" />
        </div>
      </section>

      {/* FEATURED + OBSERVATIONS */}
      <section className="px-6 md:px-16 py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.4fr_0.8fr] gap-10">
          <div className="bg-white rounded-3xl border border-black/8 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <p className="text-red-600 text-xs font-bold uppercase tracking-[0.18em] mb-4">
              Featured
            </p>

            <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
              {featured.category}
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-black leading-tight max-w-3xl">
              {featured.title}
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8 max-w-2xl">
              {featured.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>

            <Link
              href={`/insights/details/${featured.slug}`}
              className="inline-flex mt-8 text-red-600 font-semibold hover:text-red-700 transition"
            >
              Read featured insight →
            </Link>
          </div>

          <div className="bg-[#071a2d] text-white rounded-3xl p-8 md:p-10">
            <p className="text-red-400 text-xs font-bold uppercase tracking-[0.18em] mb-5">
              What We Are Observing
            </p>

            <ul className="space-y-5">
              {observations.map((obs, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200 leading-7">
                  <span className="mt-2 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                  <span>{obs}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-white/60">
              Updated weekly by the Voxtent team
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                    active
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-700 border border-black/10 hover:border-red-300 hover:text-red-600"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/details/${article.slug}`}
                className="group bg-white rounded-2xl border border-black/8 p-7 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition"
              >
                <span className="inline-flex rounded-full bg-black/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-700">
                  {article.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold leading-tight group-hover:text-red-600 transition">
                  {article.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto rounded-[32px] overflow-hidden bg-[#0a1725] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-red-400 text-xs font-bold uppercase tracking-[0.18em] mb-4">
                Newsletter
              </p>

              <h3 className="text-3xl md:text-4xl font-black leading-tight max-w-xl">
                Want to build your brand through content?
              </h3>

              <p className="mt-5 text-white/75 text-lg leading-8 max-w-xl">
                Get weekly insights on B2B podcasting, content strategy, and what
                is working for India&apos;s top founders and CXOs.
              </p>
            </div>

            <div className="p-8 md:p-12 flex items-center">
              {subscribed ? (
                <div className="rounded-2xl bg-white/8 border border-white/10 px-6 py-5 text-green-300 font-medium">
                  ✓ You&apos;re subscribed. Check your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="w-full">
                  <label className="block text-sm text-white/70 mb-3">
                    Enter your email
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="flex-1 rounded-xl px-4 py-3.5 bg-white text-black outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3.5 rounded-xl font-semibold"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-7xl mx-auto bg-white rounded-[32px] border border-black/8 p-8 md:p-12 text-center">
          <p className="text-red-600 text-xs font-bold uppercase tracking-[0.18em] mb-4">
            Start Building
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">
            Ready to create content that builds your business?
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
            Let&apos;s talk about your podcast, content strategy, or brand story.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-8 bg-red-600 hover:bg-red-700 transition text-white px-8 py-3.5 rounded-xl font-semibold"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}