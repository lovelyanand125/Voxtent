"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
{
title: "Podcast Production",
desc: "End-to-end podcast creation from concept to launch.",
link: "/services/podcast",
img: "/Image/image1.png",
},
{
title: "Video Content",
desc: "Short & long-form video that drives engagement.",
link: "/services/video",
img: "/Image/hero1.jpg",
},
{
title: "Content Strategy",
desc: "Strategic storytelling aligned to business growth.",
link: "/services/content",
img: "/Image/service3.jpg",
},
{
title: "Paid Marketing",
desc: "Amplify reach with targeted campaigns.",
link: "/services/marketing",
img: "/Image/Sample4.jpg",
},
{
title: "Lead Generation",
desc: "Turn content into measurable pipeline.",
link: "/services/leadgen",
img: "/Image/image2.jpg",
},
];

export default function ServicesPage() {
return ( <main className="bg-[#FAF6F0] text-black">


  {/* HERO */}
  <section className="relative h-[70vh] flex items-center text-white overflow-hidden">
    <img
      src="/Image/Sample5.jpg"
      className="absolute w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 px-6 md:px-16 max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Services that turn content into growth
      </motion.h1>

      <p className="mt-6 text-lg text-gray-300">
        From strategy to execution — we build content engines that scale.
      </p>
    </div>
  </section>

  {/* PROBLEM → SOLUTION */}
  <section className="py-20 px-6 md:px-16">
    <div className="grid md:grid-cols-2 gap-12">

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-bold mb-4">The Problem</h2>
        <p className="text-gray-600">
          Most brands struggle with inconsistent content, lack of strategy,
          and zero measurable outcomes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
        <p className="text-gray-600">
          We combine storytelling, distribution, and growth systems to
          transform content into a business asset.
        </p>
      </motion.div>

    </div>
  </section>

  {/* SERVICES GRID */}
  <section className="py-20 px-6 md:px-16">
    <h2 className="text-3xl font-bold mb-10">What We Offer</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {services.map((item, index) => (
        <Link key={index} href={item.link}>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition cursor-pointer"
          >
            <img
              src={item.img}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {item.desc}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </section>

  {/* WHY VOXTENT */}
  <section className="py-20 px-6 md:px-16 bg-white">
    <h2 className="text-3xl font-bold mb-10">Why Voxtent</h2>

    <div className="grid md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="font-bold text-xl mb-2">Strategy First</h3>
        <p className="text-gray-600">
          Every piece of content is aligned to business outcomes.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Execution Excellence</h3>
        <p className="text-gray-600">
          High-quality production across formats and platforms.
        </p>
      </div>

      <div>
        <h3 className="font-bold text-xl mb-2">Growth Focused</h3>
        <p className="text-gray-600">
          Content that drives leads, not just views.
        </p>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="py-20 px-6 md:px-16 text-center">
    <h2 className="text-3xl font-bold mb-6">
      Ready to build your content engine?
    </h2>

    <Link href="/contact">
      <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg">
        Let’s Talk
      </button>
    </Link>
  </section>

</main>


);
}
