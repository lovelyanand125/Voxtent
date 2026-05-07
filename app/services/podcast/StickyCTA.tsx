"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Start the conversation →");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShow(scrollY > 400);

      if (scrollY < 800) {
        setText("Explore podcast strategy →");
      } else if (scrollY < 1600) {
        setText("See how it works →");
      } else {
        setText("Start your podcast →");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/90 backdrop-blur-md text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-6 border border-white/10">
        
        <p className="hidden md:block text-sm text-gray-300">
          Your podcast starts here
        </p>

        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-red-500 px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          {text}
        </button>

      </div>
    </div>
  );
}