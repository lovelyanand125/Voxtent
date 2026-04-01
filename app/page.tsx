export default function Home() {
  return (
    <main className="font-sans bg-[#FAF6F0]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#FAF6F0] border-b border-red-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="text-red-600 font-bold tracking-[0.2em] text-lg">
            VOXTENT
          </div>

          {/* NAV */}
          <nav className="hidden md:flex gap-10 text-gray-700 text-sm font-medium">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#" className="hover:text-black transition">Podcast</a>
            <a href="#" className="hover:text-black transition">Services</a>
            <a href="#" className="hover:text-black transition">Insights</a>
            <a href="#" className="hover:text-black transition">Contact Us</a>
          </nav>

          {/* CTA */}
          <button className="bg-red-600 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition">
            Let’s Talk
          </button>

        </div>

      </header>

      {/* HERO */}
      <section className="bg-[#F5EFE6] text-black py-28 px-6 md:px-16 relative">

        <p className="text-red-600 uppercase tracking-widest text-sm mb-4">
          A podcast and content studio.
        </p>

        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">
          Your podcast is the most powerful <br />
          <span className="text-red-600">
            business tool you're not using yet.
          </span>
        </h1>

        <p className="text-gray-600 mt-6 max-w-2xl">
          Your voice. Your audience. Your business.
        </p>

        <div className="mt-8">
          <button className="text-red-600 font-semibold border-b border-red-600 pb-1 hover:opacity-70 transition">
            Start the conversation →
          </button>
        </div>

        <div className="absolute right-10 top-20 text-[140px] text-red-100 font-bold opacity-30 hidden md:block">
          V
        </div>
      </section>

      {/* S2 */}
      <section className="bg-red-600 text-white py-16 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold max-w-4xl">
          Every business has a point of view worth hearing. <br />
          Most are still waiting for the right moment to share it.
        </h2>

        <p className="mt-4 italic text-white/80">
          There is no right moment. There is only now.
        </p>
      </section>

      {/* S3 */}
      <section className="bg-[#FAF6F0] py-20 px-6 md:px-16">
        <h2 className="text-2xl font-bold mb-10">
          Built for anyone with something worth saying.
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Scaling a business",
            "Founder or CXO",
            "Running a brand",
            "Building something new",
          ].map((title, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">
                You need authority, not noise. We help you build that.
              </p>
              <p className="text-red-600 mt-4 font-semibold cursor-pointer">
                That’s me →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* S4 */}
      <section className="bg-white py-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-4">
          One engine. Five ways it works for you.
        </h2>

        <p className="text-gray-500 mb-10">
          Podcast is the core. Everything around it amplifies, distributes, and converts.
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
                Built for real outcomes, not vanity metrics.
              </p>
              <p className="text-red-600 mt-3 text-sm font-semibold cursor-pointer">
                How we do it →
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* S5 LIGHT */}
      <section className="bg-[#FAF6F0] py-24 px-6 md:px-16">

        <h2 className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight">
          The businesses that own their sector tomorrow <br />
          <span className="text-red-600">
            are building their voice today.
          </span>
        </h2>

        <p className="text-gray-600 mt-6 max-w-3xl">
          We exist at the intersection of content, technology, and business growth.
        </p>

        <ul className="mt-8 space-y-3 text-gray-700">
          <li>→ We start with your business problem.</li>
          <li>→ We build for your sector.</li>
          <li>→ We connect content to outcomes.</li>
        </ul>

        <button className="mt-8 border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition">
          See how we think →
        </button>

      </section>

      {/* FINAL CTA */}
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
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1A2B] text-gray-300 py-16 px-6 md:px-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-white font-bold text-xl mb-4 tracking-wide">
              VOXTENT
            </h2>
            <p className="text-sm text-gray-400">
              Building content engines that turn ideas into authority.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Services</li>
              <li>Insights</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Podcast</li>
              <li>Content</li>
              <li>Marketing</li>
              <li>Strategy</li>
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
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </footer>

    </main>
  );
}