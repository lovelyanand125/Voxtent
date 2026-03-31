export default function Home() {
  return (
    <main className="font-sans">

      {/* 🔴 HEADER */}
      <header className="sticky top-0 z-50 bg-[#FAF6F0] border-b">
        <div className="flex justify-between items-center px-6 md:px-16 py-4">
          <h1 className="text-red-600 font-bold text-xl tracking-widest">
            VOXTENT
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-700">
            <a href="#">What We Do</a>
            <a href="#">Our Work</a>
            <a href="#">About</a>
          </nav>

          <button className="bg-red-600 text-white px-5 py-2 rounded-md">
            Let’s Talk
          </button>
        </div>
      </header>

      {/* 🔴 HERO */}
      <section className="bg-[#1C1C1C] text-white py-28 px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl">
          The most powerful voices <br />
          <span className="text-red-600">
            in any room started somewhere.
          </span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          We build content engines that turn knowledge into authority and attention into revenue.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-red-600 px-6 py-3 rounded-lg">
            Start the conversation →
          </button>

          <button className="border px-6 py-3 rounded-lg">
            See our work ↓
          </button>
        </div>
      </section>

      {/* 🔴 S3 */}
      <section className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <h2 className="text-2xl font-bold mb-10">
          Built for anyone with something worth saying.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Scaling a business", "Founder or CXO", "Running a brand", "Building something new"].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                We help you turn ideas into influence and influence into growth.
              </p>
              <p className="text-red-600 mt-4">That’s me →</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔴 FINAL CTA (NEW — LIKE YOUR IMAGE BUT VOXTENT STYLE) */}
      <section className="bg-red-600 text-white text-center py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to build your category?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Let’s turn your ideas into a content engine that drives real business outcomes — not just views.
        </p>

        <button className="mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Start a conversation →
        </button>
      </section>

      {/* 🔴 FOOTER */}
      <footer className="bg-[#0D0D0D] text-gray-400 py-16 px-6 md:px-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-white font-bold text-xl mb-4">
              VOXTENT
            </h2>
            <p className="text-sm">
              We build content engines that turn ideas into authority and authority into revenue.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Podcast Production</li>
              <li>Content Strategy</li>
              <li>Video & Media</li>
              <li>Growth Marketing</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">Bangalore, India</p>
            <p className="text-sm mt-2">hello@voxtent.in</p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2026 Voxtent. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </footer>

    </main>
  );
}