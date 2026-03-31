export default function Home() {
  return (
    <main className="font-sans">

      {/* 🔴 HEADER (Sticky) */}
      <header className="sticky top-0 z-50 bg-[#FAF6F0] border-b border-gray-200">
        <div className="flex justify-between items-center px-6 md:px-16 py-4">
          <h1 className="text-red-600 font-bold text-xl tracking-widest">
            VOXTENT
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-700">
            <a href="#" className="hover:text-black">What We Do</a>
            <a href="#" className="hover:text-black">Our Work</a>
            <a href="#" className="hover:text-black">About</a>
          </nav>

          <button className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Let’s Talk
          </button>
        </div>
      </header>

      {/* 🔴 S1 HERO */}
      <section className="bg-[#1C1C1C] text-white py-28 px-6 md:px-16">
        <p className="text-red-500 uppercase tracking-widest text-sm mb-4">
          Podcast-led growth for businesses, brands, and leaders.
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          The most powerful voices <br />
          <span className="text-red-600">
            in any room started somewhere.
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          We build content engines that turn what you know into authority and what you create into real business growth.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Start the conversation →
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            See our work ↓
          </button>
        </div>
      </section>

      {/* 🔴 S2 TENSION BAND */}
      <section className="bg-red-600 text-white py-16 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold max-w-4xl">
          Every business has a point of view worth hearing. <br />
          Most are still waiting for the right moment to share it.
        </h2>

        <p className="mt-4 italic text-white/80">
          There is no right moment. There is only now.
        </p>
      </section>

      {/* 🔴 S3 WHO THIS IS FOR */}
      <section className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <h2 className="text-2xl font-bold mb-10">
          Built for anyone with something worth saying.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              title: "Scaling a business",
              desc: "You need the market to see you as the authority — not just another option.",
            },
            {
              title: "Founder or CXO",
              desc: "Your thinking deserves a wider room. We build the platform that puts you there.",
            },
            {
              title: "Running a brand",
              desc: "Content keeps getting made and forgotten. You need an engine that builds over time.",
            },
            {
              title: "Building something new",
              desc: "Startup or new vertical — you need presence before you have proof.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="text-red-600 mt-4 font-semibold cursor-pointer">
                That’s me →
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔴 S4 PILLARS */}
      <section className="bg-white py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-4">
          One engine. Five ways it works for you.
        </h2>

        <p className="text-gray-500 mb-10">
          Podcast is the core. Everything around it is built to amplify, distribute, and convert.
        </p>

        <div className="grid md:grid-cols-5 gap-6">

          {[
            "Podcast solutions",
            "Content development",
            "Paid marketing",
            "Lead gen & sales",
            "Content at scale",
          ].map((title, i) => (
            <div key={i} className="border p-5 rounded-xl hover:shadow-lg transition">
              <div className={`w-6 h-6 mb-3 rounded ${i % 2 === 0 ? "bg-red-600" : "bg-black"}`} />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Built to drive real outcomes, not vanity metrics.
              </p>
              <p className="text-red-600 mt-3 text-sm font-semibold cursor-pointer">
                How we do it →
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔴 S5 CATEGORY CREATOR */}
      <section className="bg-[#1C1C1C] text-white py-24 px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
          The businesses that own their sector tomorrow <br />
          <span className="text-red-600">
            are building their voice today.
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl">
          We exist at the intersection of content, technology, and business growth.
        </p>

        <ul className="mt-8 space-y-3 text-gray-300">
          <li>→ We start with your business problem.</li>
          <li>→ We build for your sector.</li>
          <li>→ We connect content to outcomes.</li>
        </ul>

        <button className="mt-8 border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition">
          See how we think →
        </button>
      </section>

      {/* 🔴 S6 DIFFERENCE */}
      <section className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-10">
          Why the people who work with us stop looking.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "We think in pipelines, not episodes.",
            "We know this market from experience.",
            "We stay until it works.",
          ].map((text, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-red-600">
              <p className="font-semibold">{text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔴 S7 FINAL CTA */}
      <section className="bg-red-600 text-white py-24 px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl">
          Your voice is your most underused business asset.
        </h2>

        <p className="mt-4 text-white/90">
          Let’s figure out what it could be doing for you.
        </p>

        <button className="mt-8 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Start the conversation →
        </button>

        <p className="mt-4 text-sm text-white/80">
          No pitch decks. No long proposals. Just a real conversation.
        </p>
      </section>

    </main>
  );
}