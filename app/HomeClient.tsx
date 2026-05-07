"use client";

import { useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";

const services = [
  { title: "Podcast Production", desc: "End-to-end podcast studio", link: "/services/podcast", img: "/Image/image1.png" },
  { title: "Video Content", desc: "Short & long-form content", link: "/services/video", img: "/Image/hero1.jpg" },
  { title: "Content Strategy", desc: "Aligned to business growth", link: "/services/content", img: "/Image/service3.jpg" },
  { title: "Paid Marketing", desc: "Reach the right audience", link: "/services/marketing", img: "/Image/Sample4.jpg" },
  { title: "Lead Gen", desc: "Turn content into pipeline", link: "/services/leadgen", img: "/Image/image2.jpg" },
];

export default function HomeClient() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      <div style={{ opacity: splashDone ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <main className="bg-[#FAF6F0] text-black">

          {/* HERO SECTION */}
          <section className="relative h-screen flex items-center text-white overflow-hidden">
            <img src="//Image/home1.jpg" className="absolute w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-6 md:px-16 max-w-4xl pt-20">
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Your podcast is your most powerful business tool.
              </h1>
              <p className="mt-6 text-lg text-gray-300">Build authority. Drive growth. Own your voice.</p>
              <div className="mt-8">
                <Link href="/services/podcast">
                  <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg">Get Started</button>
                </Link>
              </div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section className="py-20 px-6 md:px-16">
            <h2 className="text-3xl font-bold mb-10">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                    <img src={item.img} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
