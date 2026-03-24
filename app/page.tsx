"use client";

export default function Home() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      alert("Message sent!");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <main className="bg-black text-white">

      {/* Dashboard */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Voxtent</h1>
        <div className="flex gap-6 text-sm">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Main function */}
      <section
  className="h-screen flex items-center bg-cover bg-center px-10"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url('/images/sample5.jpg')",
  }}
>
  <div className="max-w-2xl">

    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Build Podcasts, Videos & Content with Voxtent
    </h1>

    <p className="text-gray-300 mb-6">
      Transform your ideas into powerful podcasts, engaging videos,
      and high-quality content — all in one place.
    </p>

    <div className="flex gap-4">
      <button className="bg-white text-black px-6 py-3 rounded-lg">
        Get Started
      </button>

      <button className="border border-white px-6 py-3 rounded-lg">
        View Work
      </button>
    </div>

  </div>
</section>
<section id="services" className="px-6 md:px-16 py-24 bg-gray-100 text-black">

<h2 className="text-3xl font-bold text-center mb-4">
  Our Services
</h2>
<p className="text-center text-gray-500 mb-12">
  Everything you need to build, grow, and scale your content.
</p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-500 text-white p-3 rounded-full">
          🎧
        </div>
        <h3 className="text-lg font-semibold">Podcast Production</h3>
      </div>

      <p className="text-gray-600 mb-6 text-sm">
        We create engaging podcasts, interviews, and storytelling content
        that builds strong audience connections.
      </p>

      <div className="flex justify-end">
        <button className="border border-blue-500 text-blue-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition">
          →
        </button>
      </div>

    </div>

    {/* CARD 2 */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-purple-500 text-white p-3 rounded-full">
          🎬
        </div>
        <h3 className="text-lg font-semibold">Video Content</h3>
      </div>

      <p className="text-gray-600 mb-6 text-sm">
        From reels to full productions, we create high-quality visual
        content for marketing and storytelling.
      </p>

      <div className="flex justify-end">
        <button className="border border-purple-500 text-purple-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
          →
        </button>
      </div>

    </div>

    {/* CARD 3 */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-green-500 text-white p-3 rounded-full">
          ✍️
        </div>
        <h3 className="text-lg font-semibold">Content Creation</h3>
      </div>

      <p className="text-gray-600 mb-6 text-sm">
        Blogs, scripts, and marketing content tailored to your brand
        voice and audience.
      </p>

      <div className="flex justify-end">
        <button className="border border-green-500 text-green-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-green-500 hover:text-white transition">
          →
        </button>
      </div>

    </div>

  </div>
</section>

{/* STATS
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
*/}


      {/* PORTFOLIO */}
      <section className="px-6 md:px-16 py-24">
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
      <section id="work" className="px-10 py-20">
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
<section id="contact" className="px-6 md:px-16 py-24 bg-gray-900 text-white">

<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

  {/* LEFT SIDE */}
  <div>
    <h2 className="text-4xl font-bold mb-4">
      Let’s Work Together 🚀
    </h2>

    <p className="text-gray-400 mb-6">
      Have an idea for a podcast, video, or content project?  
      Tell us about it and we’ll help you bring it to life.
    </p>

    <div className="space-y-3 text-gray-300">
      <p>📍 Bangalore, India</p>
      <p>📧 contact@voxtent.in</p>
      <p>📞 +91 9663799617</p>
    </div>
  </div>

  {/* RIGHT SIDE FORM */}
  <form
    onSubmit={handleSubmit}
    className="bg-black p-6 rounded-xl flex flex-col gap-4"
  >

    <input
      name="name"
      type="text"
      placeholder="Your Name"
      required
      className="p-3 bg-gray-900 border border-gray-700 rounded focus:border-white outline-none"
    />

    <input
      name="email"
      type="email"
      placeholder="Your Email"
      required
      className="p-3 bg-gray-900 border border-gray-700 rounded focus:border-white outline-none"
    />

    <textarea
      name="message"
      placeholder="Tell us about your project..."
      rows={4}
      required
      className="p-3 bg-gray-900 border border-gray-700 rounded focus:border-white outline-none"
    />

    <button
      type="submit"
      className="bg-white text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
    >
      Send Message
    </button>

  </form>

</div>
</section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white px-6 md:px-16 py-16">

<div className="grid md:grid-cols-4 gap-10">

  {/* LOGO + ABOUT */}
  <div>
    <h2 className="text-xl font-bold mb-4">Voxtent</h2>
    <p className="text-sm text-gray-300 mb-4">
      We help brands create podcasts, videos, and content that engage
      and grow their audience.
    </p>

    <p className="mb-3">Stay in touch</p>

    <div className="flex gap-3">
      <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-full">F</div>
      <div className="bg-blue-400 w-10 h-10 flex items-center justify-center rounded-full">X</div>
      <div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full">in</div>
    </div>
  </div>

  {/* SERVICES */}
  <div>
    <h3 className="font-semibold mb-4">Services</h3>
    <ul className="space-y-2 text-gray-300 text-sm">
      <li>Podcast Production</li>
      <li>Video Content</li>
      <li>Content Writing</li>
      <li>Marketing</li>
    </ul>
  </div>

  {/* COMPANY */}
  <div>
    <h3 className="font-semibold mb-4">Company</h3>
    <ul className="space-y-2 text-gray-300 text-sm">
      <li>About Us</li>
      <li>Careers</li>
      <li>Blogs</li>
      <li>Contact</li>
    </ul>
  </div>

  {/* NEWSLETTER */}
  <div>
    <h3 className="font-semibold mb-4">Subscribe</h3>

    <div className="flex">
      <input
        placeholder="Email Address"
        className="px-4 py-2 rounded-l bg-blue-900 border border-blue-700 w-full"
      />
      <button className="bg-blue-500 px-4 py-2 rounded-r">
        Subscribe
      </button>
    </div>

    <p className="text-sm text-gray-400 mt-4">
      Bangalore, India
    </p>
  </div>

</div>

<div className="border-t border-blue-800 mt-10 pt-6 text-center text-gray-400 text-sm">
  © 2026 Voxtent. All rights reserved.
</div>

</footer>

    </main>
  );
}