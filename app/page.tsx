"use client";

import type { Metadata } from "next";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

/* ✅ PAGE TITLE FIX (THIS WAS YOUR ISSUE) */
export const metadata: Metadata = {
title: "Build Podcasts & Video Creation",
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

function AnimatedSection({
children,
className = "",
}: {
children: React.ReactNode;
className?: string;
}) {
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: "-80px" });

return (
<motion.div
ref={ref}
initial={{ opacity: 0, y: 40 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6, ease: EASE }}
className={className}
>
{children}
</motion.div>
);
}

const fadeUp = {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.55, ease: EASE },
},
};

const services = [
{
title: "Podcast Production",
desc: "End-to-end podcast studio",
link: "/services/podcast",
img: "/Image/image1.png",
},
{
title: "Video Content",
desc: "Short & long-form content",
link: "/services/video",
img: "/Image/hero1.jpg",
},
{
title: "Content Strategy",
desc: "Aligned to business growth",
link: "/services/content",
img: "/Image/service3.jpg",
},
{
title: "Paid Marketing",
desc: "Reach the right audience",
link: "/services/marketing",
img: "/Image/Sample4.jpg",
},
{
title: "Lead Gen",
desc: "Turn content into pipeline",
link: "/services/leadgen",
img: "/Image/image2.jpg",
},
];

function ServiceCard({ item }: { item: typeof services[0] }) {
const [hovered, setHovered] = useState(false);

return ( <Link href={item.link}>
<motion.div
variants={fadeUp}
onHoverStart={() => setHovered(true)}
onHoverEnd={() => setHovered(false)}
animate={
hovered
? {
scale: 1.04,
y: -8,
boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
}
: { scale: 1, y: 0 }
}
transition={{ duration: 0.25 }}
className="rounded-xl overflow-hidden border border-gray-100 cursor-pointer"
> <img src={item.img} className="h-48 w-full object-cover" /> <div className="p-6 bg-white"> <h3 className="font-semibold text-lg">{item.title}</h3> <p className="text-sm text-gray-500">{item.desc}</p> </div>
</motion.div> </Link>
);
}

export default function Home() {
return ( <main className="bg-[#FAF6F0] text-black">


  {/* HERO */}
  <section className="relative h-screen flex items-center text-white overflow-hidden pt-20">
    <motion.img
      src="/Image/Sample5.jpg"
      className="absolute w-full h-full object-cover"
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, ease: EASE }}
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 px-6 md:px-16 max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-bold"
      >
        Your podcast is your most powerful business tool.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg text-gray-300"
      >
        Build authority. Drive growth. Own your voice.
      </motion.p>

      <div className="mt-8">
        <Link href="/services/podcast">
          <button className="bg-red-500 px-6 py-3 rounded-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </section>

  {/* SERVICES */}
  <section className="py-20 px-6 md:px-16">
    <AnimatedSection>
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </div>
    </AnimatedSection>
  </section>

  {/* FOOTER */}
  <footer className="bg-[#0B1A2B] text-gray-300 py-16 px-6 md:px-16">
    <div className="grid md:grid-cols-4 gap-10">

      <div>
        <h2 className="text-white font-bold text-xl mb-4 tracking-[0.15em]">
          VOXTENT
        </h2>
        <p className="text-sm text-gray-400">
          Building content engines that turn ideas into authority.
        </p>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/insights">Insights</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Services</h3>
        <ul className="space-y-2 text-sm">
          <li><Link href="/services/podcast">Podcast</Link></li>
          <li><Link href="/services/content">Content</Link></li>
          <li><Link href="/services/marketing">Marketing</Link></li>
          <li><Link href="/services/leadgen">Lead Gen</Link></li>
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
