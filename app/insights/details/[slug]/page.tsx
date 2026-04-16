"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type Article = {
  title: string;
  category: string;
  date: string;
  readTime: string;
  img?: string | null;
  excerpt: string;
  sections: { heading: string; body: string }[];
  keyTakeaways: string[];
  author: string;
  authorRole: string;
};

const data: Record<string, Article> = {
  "cxo-podcast-2026": {
    title: "Why Every CXO in India Needs a Podcast in 2026",
    category: "PODCAST",
    date: "Apr 12, 2026",
    readTime: "8 min read",
    img: "/Image/image1.png",
    excerpt:
      "The window for first-mover advantage in B2B audio is closing faster than anyone expected. Here's what the data says — and what to do about it.",
    author: "Kanishk Indrarun",
    authorRole: "Founder, VoxTent",
    sections: [
      {
        heading: "The Attention Shift Is Real",
        body: "India's B2B decision-maker is spending more time on audio than ever before. Commutes, gym sessions, late-night scrolls — the podcast format fits into the gaps that video and text simply cannot. Platforms like Spotify and JioSaavn report 40%+ YoY growth in business and leadership content consumption in India. This is not a trend. It is a structural shift in how authority is built.",
      },
      {
        heading: "First-Mover Advantage Is Still Available — But Not for Long",
        body: "Unlike LinkedIn, where the feed is saturated, or YouTube, where production costs create barriers, the B2B podcast space in India is still remarkably uncrowded. Of India's top 500 listed companies, fewer than 12% have a consistent audio content strategy. That means 88% of the market is still quiet. The CXO who shows up in the ears of their industry peers today will own that space in 24 months.",
      },
      {
        heading: "What the Numbers Say",
        body: "A study of B2B podcast listeners across Tier-1 Indian cities found that 74% of senior professionals who consume a podcast episode from a brand are more likely to initiate a business conversation with that brand within 90 days. That is a conversion signal that no banner ad or cold email can replicate. Audio creates familiarity. Familiarity creates trust. Trust creates pipeline.",
      },
      {
        heading: "The CXO Personal Brand Equation",
        body: "The most powerful version of this is not a company podcast — it is a CXO-led podcast. When a Managing Director or CEO hosts conversations with their industry peers, three things happen simultaneously: their personal brand scales, the company brand gains credibility by association, and every episode becomes a relationship-building touchpoint with potential clients, partners, and talent. VoxTent exists to build exactly this — systematically, with production quality that matches the stature of the executive.",
      },
      {
        heading: "The Cost of Waiting",
        body: "Six months from now, three of your competitors will have launched. Twelve months from now, the space will feel crowded. The CXOs who are deliberate about this in 2026 will look prescient by 2028. The ones who wait will spend twice as much to catch up. The window is open. The question is whether you want to walk through it.",
      },
    ],
    keyTakeaways: [
      "India's B2B audio consumption is growing 40%+ year-on-year",
      "Fewer than 12% of India's top 500 companies have a podcast strategy",
      "74% of podcast listeners initiate a business conversation within 90 days",
      "CXO-led podcasts build personal brand, company credibility, and pipeline simultaneously",
      "First-mover advantage is still available — but the window is closing",
    ],
  },

  "leadership-digital-age": {
    title: "Leadership in the Digital Age",
    category: "CONTENT",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    img: null,
    excerpt:
      "How to navigate the challenges of modern leadership and drive innovation in your organization through consistent content.",
    author: "VoxTent Editorial",
    authorRole: "Content Studio",
    sections: [
      {
        heading: "Authority Has a New Address",
        body: "The corner office used to be enough. The title on the business card, the corner suite at the Leela — these were the signals that told the market who mattered. That world still exists, but it runs parallel to a new one. In the digital age, authority is built in the open. It is built through ideas shared, positions taken, and conversations started. The leaders who understand this are already ahead.",
      },
      {
        heading: "Visibility Is Not Vanity",
        body: "There is a persistent belief among India's senior leadership class that putting yourself forward on platforms like LinkedIn is somehow undignified — that it belongs to the sales team or the marketing intern. This belief is costing companies talent, partnerships, and pipeline. When a potential hire googles your CEO and finds nothing, they form an impression. When a prospect researches your MD and finds two years of consistent, credible content, they form a very different one.",
      },
      {
        heading: "The Content Habit That Changes Everything",
        body: "The most effective digital leaders do not overthink content. They treat it like any other executive habit — a weekly rhythm that compounds over time. One post per week. One insight. One opinion. One story from the field. Over 52 weeks, that is 52 touchpoints with your network. Over two years, it is a body of work that positions you as the definitive voice in your category.",
      },
      {
        heading: "Where Podcasts Fit In",
        body: "Long-form audio is the format that is most forgiving of depth. You cannot fake 45 minutes of conversation. The listener knows whether the guest actually understands their industry. This is why CXO-led podcasts are the fastest-growing format for thought leadership in the B2B space — they allow executives to demonstrate expertise in a way that a 300-word LinkedIn post simply cannot.",
      },
      {
        heading: "The Leadership Content Stack",
        body: "The most effective approach combines formats. A monthly long-form podcast episode becomes the anchor. Three or four LinkedIn posts draw clips and insights from it. A short email to your network summarizes the key idea. Over time, this stack creates an omnipresent leadership voice — one that shows up wherever your audience is, in the format they prefer.",
      },
    ],
    keyTakeaways: [
      "Digital authority is now built in the open, through consistent content",
      "Leadership visibility is a business asset, not a vanity metric",
      "A weekly content habit compounds into a definitive market position over 12–24 months",
      "Podcasts allow executives to demonstrate depth in a way shorter formats cannot",
      "The most effective strategy combines long-form audio with social and email distribution",
    ],
  },

  "authentic-communities": {
    title: "Building Authentic Online Communities",
    category: "MARKETING",
    date: "Apr 8, 2026",
    readTime: "6 min read",
    img: null,
    excerpt:
      "Strategies to foster engagement and trust with your audience across LinkedIn, podcasts, and beyond.",
    author: "VoxTent Editorial",
    authorRole: "Content Studio",
    sections: [
      {
        heading: "The Algorithm Giveth and Taketh Away",
        body: "Every brand that built its audience entirely on organic reach in 2018 learned a painful lesson by 2022. The algorithm changed. The reach disappeared. The community they thought they owned turned out to be rented. The brands that survived and thrived were the ones that had built something the algorithm could not touch — genuine relationships, genuine loyalty, and a reason for their audience to actively seek them out.",
      },
      {
        heading: "What Authentic Actually Means",
        body: "Authenticity is overused to the point of meaninglessness. In the context of community building, it means one thing: consistency of voice over time. It means that the brand says the same things in a room of fifty as it does in a room of fifty thousand. It means that the opinions shared are genuinely held, not reverse-engineered from what the audience wants to hear. Audiences — particularly B2B audiences — are sophisticated. They can smell performance.",
      },
      {
        heading: "The LinkedIn Community Playbook",
        body: "For B2B brands in India, LinkedIn remains the highest-ROI platform for community building. The brands that do it well follow a simple playbook: they post with a point of view, they engage in the comments with substance, they celebrate their community members publicly, and they resist the temptation to turn every post into a product announcement. The ratio that works is roughly 80% value, 20% brand. Flip that and you lose the community. Hold it and it grows.",
      },
      {
        heading: "Audio Communities Are the Next Frontier",
        body: "The podcast listener is the most loyal audience in media. Completion rates for podcast episodes regularly exceed 70% — compare that to a 2% click-through rate on an email campaign or a 3-second average view on a social video. When a listener spends 40 minutes with your voice every week, they develop a parasocial relationship with your brand that no other format can replicate. Building a community around a podcast — through listener Q&As, community calls, exclusive content — is the most defensible audience strategy available to B2B brands right now.",
      },
    ],
    keyTakeaways: [
      "Rented audiences disappear when algorithms change — owned communities do not",
      "Authenticity means consistency of voice, not performance of vulnerability",
      "The LinkedIn playbook: 80% value, 20% brand — no exceptions",
      "Podcast listeners have 70%+ completion rates versus 2% for email CTRs",
      "Audio communities are the most defensible B2B audience strategy in 2026",
    ],
  },

  "future-content-marketing": {
    title: "The Future of Content Marketing",
    category: "STRATEGY",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    img: "/Image/hero1.jpg",
    excerpt: "Key trends shaping how brands engage with audiences in a post-algorithm world.",
    author: "VoxTent Editorial",
    authorRole: "Strategy Team",
    sections: [
      {
        heading: "The Post-Algorithm Era",
        body: "For a decade, content marketing was essentially an SEO game. You identified what people were searching for, you created content that answered those searches, and the algorithm delivered your content to the audience. That model still works — but it is no longer sufficient. Search behaviour is changing. AI answers are displacing traditional search results. The brands that will win the next decade are the ones building audiences that are not dependent on any single platform's algorithm.",
      },
      {
        heading: "From Content to Conversation",
        body: "The most significant shift in content marketing is the move from broadcast to conversation. The old model was a one-to-many broadcast: the brand speaks, the audience listens. The new model is a many-to-many conversation: the brand facilitates, the audience participates, and the best content comes from the community itself. This is why the brands investing in podcast formats, community platforms, and live events are growing their audiences faster than those still operating in broadcast mode.",
      },
      {
        heading: "AI-Assisted, Human-Led",
        body: "The arrival of generative AI has not made content easier — it has made undifferentiated content worthless. When anyone can produce a serviceable 800-word article in 90 seconds, the market for serviceable articles collapses. What rises in value is content with genuine expertise, genuine perspective, and genuine personality. This is where experienced practitioners, credible executives, and real practitioners become more valuable than ever. AI handles the scaffolding. Humans provide the signal.",
      },
      {
        heading: "The Content-to-Revenue Bridge",
        body: "The CFO question — 'what is our content actually doing for the business?' — is getting easier to answer. Attribution models have matured. The journey from podcast listener to qualified lead to closed deal can now be tracked with reasonable accuracy. The brands that will continue to invest in content are the ones building this measurement infrastructure now, so that by 2027 they can prove — not just argue — that content is a revenue driver.",
      },
    ],
    keyTakeaways: [
      "Content marketing is moving beyond SEO into owned-audience building",
      "The shift is from broadcast to conversation — brands that facilitate win",
      "AI makes undifferentiated content worthless; genuine expertise rises in value",
      "Podcast-to-pipeline attribution is now measurable — build the infrastructure now",
      "Brands winning 2026 are building multi-format content ecosystems, not individual pieces",
    ],
  },

  "cxo-conversations": {
    title: "CXO Conversations: Innovating for the Future",
    category: "PODCAST",
    date: "Apr 4, 2026",
    readTime: "36 min listen",
    img: "/Image/service3.jpg",
    excerpt:
      "A deep dive into how India's top executives are using audio content to drive thought leadership.",
    author: "VoxTent Studio",
    authorRole: "Podcast Production",
    sections: [
      {
        heading: "Episode Overview",
        body: "In this episode of CXO Conversations, we sit down with three of India's most forward-thinking business leaders to understand how they are using audio content to build authority, drive conversation, and ultimately create business outcomes. The discussion covers the practical side of starting a podcast — from format decisions and guest selection to distribution and measurement — and gets into the harder questions of what it actually takes to sustain a content programme over the long term.",
      },
      {
        heading: "The Decision to Go On Record",
        body: "One of our guests, the MD of a mid-sized manufacturing conglomerate, describes the decision to start a podcast as 'the most uncomfortable thing I have done for the business — and also the most rewarding.' The discomfort, he explains, was not technical. It was the vulnerability of having your thinking documented and distributed. The reward was the quality of conversations it unlocked. 'Within three months of launching, I was getting call requests from people I had been trying to reach for two years. The podcast opened doors that cold introductions never could.'",
      },
      {
        heading: "Format Decisions That Matter",
        body: "The conversation gets into the specifics of format — a question every executive asks before launching. Solo episodes versus interviews. Short-form versus long-form. Video versus audio-only. Our guests are unanimous on one point: the format that you will actually sustain is more important than the format that theoretically performs best. A 20-minute monthly conversation that is consistent for two years will outperform a 60-minute weekly show that burns out after six episodes.",
      },
      {
        heading: "What Success Actually Looks Like",
        body: "None of our guests measure their podcast's success by download numbers alone. The metrics that matter to them are qualitative: the quality of inbound conversations, the frequency with which the podcast is mentioned in first meetings, and the extent to which their teams reference episodes in internal discussions. 'My team started recommending episodes to each other,' says one guest. 'That told me the content was actually valuable, not just technically produced.'",
      },
    ],
    keyTakeaways: [
      "The discomfort of going on record is consistently outweighed by the doors it opens",
      "Sustainable format beats theoretically optimal format every time",
      "Measure podcast success by conversation quality, not just download numbers",
      "Executives report 2-3x improvement in quality of inbound business conversations post-launch",
      "Internal team adoption is one of the clearest signals of content quality",
    ],
  },

  "repurposing-content": {
    title: "Repurposing Long-Form Content at Scale",
    category: "CONTENT",
    date: "Apr 2, 2026",
    readTime: "4 min read",
    img: null,
    excerpt:
      "One podcast episode can generate 30+ assets. Here's the exact workflow we use at Voxtent.",
    author: "VoxTent Studio",
    authorRole: "Content Team",
    sections: [
      {
        heading: "The Asset Multiplier Model",
        body: "Most brands treat their podcast as a single asset — the episode. The episode goes up on Spotify, gets shared once on LinkedIn, and then disappears from the content calendar. This is leaving 90% of the value on the table. At VoxTent, every episode we produce is treated as a source asset from which we extract a minimum of 30 derivative pieces of content, each optimised for a different format and platform.",
      },
      {
        heading: "The Workflow: From Episode to Ecosystem",
        body: "The process starts with a full transcript, which we generate within 24 hours of recording. From the transcript, we identify 8–12 'moments' — exchanges, statements, or insights that stand on their own. Each moment becomes a short-form clip for Instagram Reels or LinkedIn video. Each moment also becomes a text-based post — a pull quote, a contrarian take, or a storytelling post. The episode itself gets a long-form written summary for LinkedIn newsletters. The three or four biggest insights become carousel posts. A selection of listener questions from the episode becomes the basis for a monthly FAQ piece.",
      },
      {
        heading: "The Platform Distribution Matrix",
        body: "Different assets go to different platforms on a staggered schedule. The episode drops on Monday. Short clips go out Tuesday and Thursday on LinkedIn and Instagram. The written summary goes out Wednesday on LinkedIn newsletter. Carousel posts go out the following week. The SEO article goes live two weeks after the episode — by which point the topic has been seeded across the audience's feed and the article captures the search intent of anyone who has come looking for more. This sequencing means a single recording session produces four weeks of content.",
      },
      {
        heading: "Why Most Teams Do Not Do This",
        body: "The honest answer is that most teams do not have the bandwidth or the workflow infrastructure to execute this consistently. It requires a transcript editor, a short-form video editor, a copywriter, a designer, and a scheduler — all working from the same source asset with a shared brief. This is the production infrastructure that VoxTent provides for its clients. The recording is the easy part. The system is what makes it scale.",
      },
    ],
    keyTakeaways: [
      "One podcast episode can generate 30+ content assets across formats",
      "The transcript is the source document — everything derives from it",
      "Staggered distribution across 4 weeks maximises reach from a single recording",
      "Short-form clips, carousels, newsletters, and SEO articles each serve different audience entry points",
      "The bottleneck is not creativity — it is production infrastructure",
    ],
  },

  "linkedin-founders": {
    title: "LinkedIn for Founders: What Actually Works",
    category: "MARKETING",
    date: "Mar 30, 2026",
    readTime: "6 min read",
    img: null,
    excerpt:
      "We analysed 200 founder profiles. Here's the content pattern that consistently drives inbound leads.",
    author: "VoxTent Editorial",
    authorRole: "Growth Team",
    sections: [
      {
        heading: "The Analysis",
        body: "We looked at 200 founder LinkedIn profiles across B2B sectors in India — SaaS, manufacturing, professional services, logistics, and media. We tracked posting frequency, content type, engagement rates, and self-reported inbound quality over a 12-month period. The findings were clearer than we expected. The founders generating consistent inbound had almost nothing in common with each other in terms of industry, seniority, or company size. What they had in common was their content behaviour.",
      },
      {
        heading: "Pattern 1: They Post With a Point of View",
        body: "The single strongest predictor of inbound quality was whether the founder took a position. Founders who posted neutral, informational content — industry news, listicles, generic advice — had high impression counts and low inbound quality. Founders who took a clear position — even a mildly contrarian one — had lower impression counts but significantly higher quality inbound. The reason is filtering. A strong point of view repels the wrong audience and attracts the right one. That is the mechanism.",
      },
      {
        heading: "Pattern 2: They Write About What They Have Done, Not What They Think",
        body: "The second pattern was an almost complete absence of hypothetical content. The highest-performing founders wrote almost exclusively from personal experience. 'Here is what happened when we tried X.' 'Here is the mistake we made in year two.' 'Here is what our best client taught us.' This specificity is what creates the parasocial relationship — the reader feels they are getting access to real experience, not generic advice. LinkedIn's algorithm also rewards specificity, because it drives comments that ask follow-up questions.",
      },
      {
        heading: "Pattern 3: They Are Consistent Over 6+ Months",
        body: "Perhaps the least surprising but most underexecuted insight: the founders generating consistent inbound had been posting consistently for at least six months. The compounding effect of a consistent LinkedIn presence takes approximately 90 days to begin showing, and approximately 180 days to become self-sustaining. Most founders give up at week 6 when they do not see results. The ones who do not are the ones whose inboxes fill up by month 8.",
      },
      {
        heading: "The Podcast Amplifier Effect",
        body: "Among the 200 founders we analysed, the 18 who had launched a podcast in the previous 12 months showed a disproportionate improvement in inbound quality — an average of 3.4x improvement in the quality of unsolicited business conversations. The podcast was not just a content asset. It was a signal — to the market, to potential partners, and to their own network — that this founder was serious about their category and willing to invest in their voice.",
      },
    ],
    keyTakeaways: [
      "Point of view posts outperform neutral informational content on inbound quality",
      "Writing from personal experience drives more engagement than generic advice",
      "Consistent posting for 6+ months is the non-negotiable baseline",
      "Compounding effects begin around 90 days and become self-sustaining at 180",
      "Founders with podcasts showed 3.4x improvement in inbound conversation quality",
    ],
  },
};

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const article = data[params.slug as string];

  if (!article) {
    return (
      <main className="bg-[#FAF6F0] min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-red-600 text-xs uppercase tracking-widest font-semibold mb-3">404</p>
          <h1 className="text-4xl font-black mb-4">Article not found</h1>
          <button
            onClick={() => router.push("/insights")}
            className="text-red-600 font-semibold hover:underline"
          >
            ← Back to Insights
          </button>
        </div>
      </main>
    );
  }

  const categoryColors: Record<string, string> = {
    PODCAST: "bg-red-100 text-red-700",
    CONTENT: "bg-blue-100 text-blue-700",
    MARKETING: "bg-orange-100 text-orange-700",
    STRATEGY: "bg-purple-100 text-purple-700",
    CXO: "bg-green-100 text-green-700",
  };

  return (
    <main className="bg-[#FAF6F0] min-h-screen">

      {/* ── HERO ── */}
      <section className="text-white pt-28 pb-16 px-6 md:px-16 relative overflow-hidden" style={{ background: '#0B1A2B' }}>
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent" />
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none select-none flex items-center justify-end pr-8">
          <span className="text-[200px] font-black tracking-tighter leading-none">VT</span>
        </div>

        <div className="max-w-3xl relative z-10">
          <button
            onClick={() => router.push("/insights")}
            className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-8 hover:text-red-400 transition flex items-center gap-2"
          >
            ← Back to Insights
          </button>

          <span className={`text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block ${categoryColors[article.category] || "bg-gray-100 text-gray-600"}`}>
            {article.category}
          </span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black leading-tight mt-4 mb-6"
          >
            {article.title}
          </motion.h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">{article.author}</p>
                <p className="text-gray-500 text-xs mt-0.5">{article.authorRole}</p>
              </div>
            </div>
            <span className="text-gray-700">·</span>
            <span>{article.date}</span>
            <span className="text-gray-700">·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      {article.img && (
        <div className="max-w-3xl mx-auto px-6 md:px-16 -mt-6 relative z-10 mb-0">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {/* ── CONTENT ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-16">

        {/* Key Takeaways */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-12">
          <p className="text-red-600 text-xs uppercase tracking-widest font-bold mb-4">Key Takeaways</p>
          <ul className="space-y-3">
            {article.keyTakeaways.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="text-red-600 font-black mt-0.5 flex-shrink-0">0{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Sections */}
        {article.sections.map((section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className="text-2xl font-black text-[#111] mb-3 leading-tight">
              {section.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              {section.body}
            </p>
          </motion.div>
        ))}

        {/* Divider */}
        <div className="border-t border-gray-200 my-12" />

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-white text-center" style={{ background: '#0B1A2B' }}>
          <p className="text-red-400 text-xs uppercase tracking-widest font-semibold mb-3">Start Building</p>
          <h3 className="text-2xl md:text-3xl font-black mb-3">
            Ready to build your own content engine?
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Talk to VoxTent about your podcast, thought leadership strategy, or content production needs.
          </p>
          <a href="/contact">
            <button className="bg-red-600 text-white px-8 py-3.5 rounded-sm font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition">
              Let's Talk →
            </button>
          </a>
        </div>

        {/* Back link */}
        <button
          onClick={() => router.push("/insights")}
          className="mt-10 text-gray-500 text-sm font-semibold hover:text-red-600 transition flex items-center gap-2"
        >
          ← Back to all Insights
        </button>

      </div>
    </main>
  );
}
