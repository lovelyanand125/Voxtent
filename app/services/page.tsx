"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const EASE = [0.25, 0.1, 0.25, 1] as const;

function Section({ children }: { children: React.ReactNode }) {
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: "-100px" });

return (
<motion.div
ref={ref}
initial={{ opacity: 0, y: 60 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.7, ease: EASE }}
>
{children}
</motion.div>
);
}

const services = [
{
title: "Podcast Production",
desc: "End-to-end podcast creation that builds authority.",
result: "3x audience growth in 90 days",
link: "/services/podcast",
},
{
title: "Video Content",
desc: "High-performing video content across platforms.",
result: "2M+ monthly reach for clients",
link: "/services/video",
},
{
title: "Content Strategy",
desc: "Strategic storytelling aligned with revenue.",
result: "Clear positioning + inbound pipeline",
link: "/services/content",
},
];

export default function ServicesPage() {
return ( <main className="bg-[#FAF6F0] text-black">


  {/* HERO (DIFFERENT FROM HOME) */}
  <section className="py-32 px-6 md:px-16 max-w-5xl">
    <Section>
      <p className="text-red-600 uppercase text-sm mb-4">
        Services
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        We don’t just create content. <br />
        <span className="text-gray-500">
          We build growth systems.
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Every service is designed to move your business forward —
        not just generate views.
      </p>
    </Section>
  </section>

  {/* PROBLEM → INSIGHT */}
  <section className="py-24 px-6 md:px-16 bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

      <Section>
        <h2 className="text-3xl font-bold mb-4">
          Most content doesn’t convert.
        </h2>
        <p className="text-gray-600">
          Brands are producing content, but without strategy,
          distribution, or measurable outcomes.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-4">
          We fix that.
        </h2>
        <p className="text-gray-600">
          Our services combine storytelling, systems, and growth
          to turn content into a revenue channel.
        </p>
      </Section>

    </div>
  </section>

  {/* SERVICES — INTERACTIVE STACK */}
  <section className="py-24 px-6 md:px-16">
    <div className="max-w-5xl mx-auto space-y-20">

      {services.map((s, i) => (
        <Section key={i}>
          <div className="border-l-4 border-red-600 pl-6">

            <h3 className="text-3xl font-bold mb-2">
              {s.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {s.desc}
            </p>

            <p className="text-sm text-red-600 font-semibold mb-6">
              Result: {s.result}
            </p>

            {/* CASE STUDY */}
            <div className="bg-white border p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-2">
                Case Study
              </h4>
              <p className="text-sm text-gray-600">
                Helped a B2B founder grow from zero to 50K audience
                through strategic podcasting and content distribution.
              </p>
            </div>

            {/* CTA */}
            <Link href={s.link}>
              <button className="bg-red-500 text-white px-5 py-2 rounded">
                Explore Service →
              </button>
            </Link>

          </div>
        </Section>
      ))}

    </div>
  </section>

  {/* FINAL CTA */}
  <section className="py-28 px-6 md:px-16 text-center bg-black text-white">
    <Section>
      <h2 className="text-4xl font-bold mb-6">
        Ready to turn content into growth?
      </h2>

      <p className="text-gray-400 mb-8">
        Let’s build a system tailored to your business.
      </p>

      <Link href="/contact">
        <button className="bg-red-600 px-8 py-4 rounded-lg">
          Let’s Talk
        </button>
      </Link>
    </Section>
  </section>

</main>


);
}
