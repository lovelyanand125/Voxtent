"use client";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Voxtent</h1>
        <div className="flex gap-6 text-sm">
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Build Podcasts, Videos & Content with Kanishk Indrarun
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Voxtent helps creators, startups, and businesses turn ideas into powerful podcasts,
        videos, and digital content — from concept to distribution.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg">
          Start Now
        </button>
      </section>
      <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">
  
  <img
    src="/images/sample1.jpg"
    className="rounded-xl"
  />

  <div>
    <h2 className="text-3xl font-bold mb-4">
      Why Choose Voxtent?
    </h2>

    <p className="text-gray-400 mb-6">
      We help brands and creators turn ideas into powerful digital content.
      From podcasts to videos and written content — everything is handled
      end-to-end with speed and quality.
    </p>

    <button className="bg-white text-black px-5 py-2 rounded">
      Learn More
    </button>
  </div>

</section>
      {/* SERVICES */}
      <section className="px-10 py-20 grid md:grid-cols-3 gap-8">
        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Podcast Production</h3>
          <p className="text-gray-400">
          From idea to launch — we create professional podcasts, interviews, voiceovers,
          and storytelling content that engages your audience.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Video Content</h3>
          <p className="text-gray-400">
          High-quality videos, reels, and visual content designed for social media,
          marketing, and brand storytelling.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Content Generation</h3>
          <p className="text-gray-400">
          Blogs, scripts, newsletters, and marketing content tailored to your brand voice
          and audience.
          </p>
        </div>
      </section>
      <section className="px-10 py-20 text-center">
  <h2 className="text-3xl font-bold mb-10">How Voxtent Works</h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div>
      <h3 className="font-semibold text-lg mb-2">Idea</h3>
      <p className="text-gray-400">
        Share your idea or business goal.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">Creation</h3>
      <p className="text-gray-400">
        We produce podcasts, videos, and content tailored to your needs.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2"> Scale</h3>
      <p className="text-gray-400">
        Distribute and grow your audience with high-quality content.
      </p>
    </div>
  </div>
</section>

      {/* STATS (like Timbre credibility) */}
      <section className="bg-gray-900 py-16 text-center">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="text-gray-400">Podcasts Created</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">50+</h2>
            <p className="text-gray-400">Clients Served</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">1M+</h2>
            <p className="text-gray-400">Content Views</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-800 p-4 rounded-lg">
            <img src="/images/Sample1.jpg" className="rounded mb-3" />
            <h3>Startup Podcast</h3>
          </div>

          <div className="border border-gray-800 p-4 rounded-lg">
            <img src="/images/Sample2.jpg" className="rounded mb-3" />
            <h3>Business Series</h3>
          </div>

          <div className="border border-gray-800 p-4 rounded-lg">
            <img src="/images/Sample3.jpg" className="rounded mb-3" />
            <h3>Marketing Content</h3>
          </div>
        </div>
      </section>
      <section className="px-10 py-20">
  <h2 className="text-3xl font-bold text-center mb-10">
    Latest Updates
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <img src="/images/sample2.jpg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          How to Build a Podcast Brand
        </h3>
        <p className="text-gray-400 mb-4">
          Learn how businesses are using podcasts to grow their audience.
        </p>

        <a href="/blog/podcast" className="text-blue-400">
          Read More →
        </a>
      </div>
    </div>

    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <img src="/images/sample3.jpg" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          Video Content for Growth
        </h3>
        <p className="text-gray-400 mb-4">
          Why video is the fastest way to grow your brand today.
        </p>

        <a href="/blog/video" className="text-blue-400">
          Read More →
        </a>
      </div>
    </div>

  </div>
</section>
      {/* CONTACT */}
      <section className="px-6 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Let’s Work Together
        </h2>

        <form
          className="max-w-xl mx-auto flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(data),
            });

            alert("Message sent!");
          }}
        >
          <input name="name" placeholder="Name" className="p-3 bg-black border border-gray-700 rounded" />
          <input name="email" placeholder="Email" className="p-3 bg-black border border-gray-700 rounded" />
          <textarea name="message" placeholder="Message" className="p-3 bg-black border border-gray-700 rounded" />

          <button className="bg-white text-black py-3 rounded">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 Voxtent. All rights reserved.
      </footer>

    </main>
  );
}