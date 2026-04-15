"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

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

export default function HomeClient() {
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
      <h1 className="text-5xl md:text-7xl font-bold">
        Your podcast is your most powerful business tool.
      </h1>

      <p className="mt-6 text-lg text-gray-300">
        Build authority. Drive growth. Own your voice.
      </p>

      <div className="mt-8">
        <Link href="/services/podcast">
          <button className="bg-red-500 px-6 py-3 rounded-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </section>

</main>


);
}
