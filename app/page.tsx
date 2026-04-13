"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const EASE = [0.25, 0.1, 0.25, 1] as const;

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
transition: {
duration: 0.55,
ease: EASE,
},
},
};

const stagger = {
hidden: {},
visible: { transition: { staggerChildren: 0.12 } },
};

const personas = [
{ title: "Scaling a business", desc: "You need authority, not noise. We help you build that.", link: "/for/scaling" },
{ title: "Founder or CXO", desc: "Your story is your strongest asset. We help you tell it.", link: "/for/founders" },
{ title: "Running a brand", desc: "Content that moves people from awareness to action.", link: "/for/brands" },
{ title: "Building something new", desc: "Own your category before someone else does.", link: "/for/builders" },
];

const services = [
{ title: "Podcast Production", desc: "End-to-end podcast studio — concept, production, distribution, and growth.", link: "/services/podcast", img: "/Image/image1.png" },
{ title: "Video Content", desc: "Short-form cuts, reels, and long-form video engineered for business outcomes.", link: "/services/video", img: "/Image/hero1.jpg" },
{ title: "Content Strategy", desc: "A content engine aligned to your sales funnel, sector, and audience.", link: "/services/content", img: "/Image/service3.jpg" },
{ title: "Paid Marketing", desc: "Distribute your content where your buyers actually are.", link: "/services/marketing", img: "/Image/Sample4.jpg" },
{ title: "Lead Gen & Sales", desc: "Turn authority content into pipeline and revenue.", link: "/services/leadgen", img: "/Image/image2.jpg" },
];

const insights = [
{
tag: "Content Strategy",
title: "Why most B2B content budgets are spent in the wrong place",
desc: "Most companies spend 80% of their content budget on creation and almost nothing on distribution.",
read: "4 min read",
},
{
tag: "Podcast",
title: "The podcast ROI question every founder asks",
desc: "Podcast ROI isn't measured in downloads.",
read: "5 min read",
},
{
tag: "Personal Branding",
title: "Your LinkedIn is a billboard. Your podcast is a relationship.",
desc: "A post gets you noticed. A show gets you trusted.",
read: "3 min read",
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
? { scale: 1.04, y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }
: { scale: 1, y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" }
}
transition={{ duration: 0.25 }}
className="rounded-xl overflow-hidden border border-gray-100 cursor-pointer"
> <div className="relative overflow-hidden h-48">
<motion.img
src={item.img}
alt={item.title}
animate={hovered ? { scale: 1.08 } : { scale: 1 }}
transition={{ duration: 0.4 }}
className="w-full h-full object-cover"
/> </div> <div className="p-6 bg-white"> <h3 className="font-semibold text-lg mb-1">{item.title}</h3> <p className="text-sm text-gray-500">{item.desc}</p> <p className="text-red-600 mt-3 text-sm font-semibold">How we do it →</p> </div>
</motion.div> </Link>
);
}

export default function Home() {
const [open, setOpen] = useState(false);

return ( <main className="font-sans bg-[#FAF6F0] text-black"> <header className="sticky top-0 z-50 bg-[#FAF6F0]/90 backdrop-blur border-b border-red-200"> <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> <h1 className="text-red-600 font-bold tracking-[0.2em] text-lg">VOXTENT</h1>
<button onClick={() => setOpen(true)} className="bg-red-600 text-white px-5 py-2 rounded-md">
Let's Talk </button> </div> </header>


  <section className="py-20 px-6 md:px-16">
    <AnimatedSection>
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item, i) => (
          <ServiceCard key={i} item={item} />
        ))}
      </div>
    </AnimatedSection>
  </section>
</main>


);
}
