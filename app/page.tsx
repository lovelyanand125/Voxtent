"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const services = [
  {
    title: "Content Strategy",
    desc: "Aligned to funnel & growth",
    img: "/images/service1.jpg",
    link: "/services/content",
  },
  {
    title: "Paid Marketing",
    desc: "Reach buyers faster",
    img: "/images/service2.jpg",
    link: "/services/paid",
  },
  {
    title: "Lead Gen",
    desc: "Convert content into pipeline",
    img: "/images/service3.jpg",
    link: "/services/lead",
  },
];

function ServiceCard({ item }: { item: (typeof services)[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={item.link}>
      <motion.div
        variants={fadeUp}
        initial="initial"
        whileInView="animate"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
      >
        <img src={item.img} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="bg-[#FAF6F0] text-black">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center"
        >
          Build Podcasts, Videos & Content
          <br />
          <span className="text-red-500">that drive growth</span>
        </motion.h1>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </section>

    </main>
  );
}