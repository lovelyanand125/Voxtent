"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
{
title: "Podcast Production",
desc: "Build authority with a podcast that drives real business outcomes.",
img: "/Image/image1.png",
result: "50K+ audience growth for B2B founders",
link: "/services/podcast",
},
{
title: "Video Content",
desc: "Short & long-form video designed for reach and retention.",
img: "/Image/s2.jpg",
result: "2M+ monthly impressions",
link: "/services/video",
},
{
title: "Content Strategy",
desc: "Clarity in positioning, messaging, and execution.",
img: "/Image/s3.jpg",
result: "Inbound pipeline within 90 days",
link: "/services/content",
},
];

export default function ServicesPage() {
const ref = useRef(null);
const { scrollYProgress } = useScroll({ target: ref });
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

return ( <main className="bg-[#FAF6F0] text-black">


  {/* HERO */}
  <section className="relative h-[80vh] flex items-center overflow-hidden">
    <motion.img
      src="/Image/s3.jpg"
      className="absolute w-full h-full object-cover"
      style={{ y }}
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 px-6 md:px-16 max-w-4xl text-white">
      <h1 className="text-5xl md:text-6xl font-bold">
        Services designed for growth
      </h1>
      <p className="mt-6 text-gray-300">
        Not content for vanity — content that drives business.
      </p>
    </div>
  </section>

  {/* STORY */}
  <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16">
      <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold mb-4">Content without strategy fails.</h2>
        <p className="text-gray-600">
          Most brands create content, but it doesn’t lead to business growth.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}>
        <h2 className="text-3xl font-bold mb-4">We build systems.</h2>
        <p className="text-gray-600">
          We turn content into a growth engine — not just output.
        </p>
      </motion.div>
    </div>
  </section>

  {/* SERVICES */}
  <section ref={ref} className="space-y-32 px-6 md:px-16 py-24">
    {services.map((s, i) => (
      <div key={i} className="grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src={s.img}
          className="rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
        />

        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
          <p className="text-gray-600 mb-4">{s.desc}</p>
          <p className="text-red-600 font-semibold mb-6">Result: {s.result}</p>

          <div className="bg-white border p-5 rounded-lg mb-6">
            <p className="text-sm text-gray-600">
              Helped a founder grow from zero to 50K audience and build inbound leads.
            </p>
          </div>

          <Link href={s.link}>
            <button className="bg-red-500 text-white px-5 py-2 rounded">
              Explore →
            </button>
          </Link>
        </motion.div>

      </div>
    ))}
  </section>

  {/* ENGAGEMENT */}
  <section className="py-24 px-6 md:px-16 bg-white text-center">
    <h2 className="text-3xl font-bold mb-10">How we work</h2>

    <div className="grid md:grid-cols-3 gap-10">
      <div>
        <h3 className="font-bold mb-2">Step 1</h3>
        <p className="text-gray-600">Understand your business deeply</p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Step 2</h3>
        <p className="text-gray-600">Build content systems</p>
      </div>

      <div>
        <h3 className="font-bold mb-2">Step 3</h3>
        <p className="text-gray-600">Scale growth</p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-28 text-center bg-black text-white px-6">
    <h2 className="text-4xl font-bold mb-6">
      Ready to build your content engine?
    </h2>

    <Link href="/contact">
      <button className="bg-red-600 px-8 py-4 rounded-lg">
        Let’s Talk
      </button>
    </Link>
  </section>

  
</main>


);
}
