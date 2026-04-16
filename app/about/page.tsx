export default function AboutPage() {
  return (
    <main className="bg-[#FAF6F0] min-h-screen">
      <section className="text-white py-28 px-6 md:px-16" style={{ background: "#0B1A2B" }}>
        <div className="max-w-3xl">
          <p className="text-red-500 text-xs uppercase tracking-widest font-semibold mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            We build content<br />
            <span className="text-red-500">that means business.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            VoxTent is a podcast and content studio built for businesses, brands, and leaders who are ready to own the conversation in their industry.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-16 py-20">
        <p className="text-gray-600 text-lg leading-relaxed">
          We partner with founders, CXOs, and marketing teams across India to build podcast-led content engines — from strategy and production to distribution and lead generation. Every engagement starts with a clear business outcome, not just a content brief.
        </p>
      </section>
    </main>
  );
}