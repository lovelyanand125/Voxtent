"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [dotsVisible, setDotsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show dots after logo appears
    const t1 = setTimeout(() => setDotsVisible(true), 600);
    // Start fade out
    const t2 = setTimeout(() => setFadeOut(true), 2000);
    // Tell parent we're done
    const t3 = setTimeout(() => onComplete(), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "#111111",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: 1,
          transform: "translateY(0)",
          animation: "splashFadeUp 0.6s ease forwards",
        }}
      >
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: "2.5rem",
            letterSpacing: "6px",
            color: "#FAF6F0",
            marginBottom: "4px",
          }}
        >
          VOX<span style={{ color: "#CC0000" }}>TENT</span>
        </p>
        <p
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: "0.7rem",
            letterSpacing: "4px",
            color: "rgba(250,246,240,0.4)",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          A Podcast &amp; Content Studio
        </p>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "32px",
          opacity: dotsVisible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#FAF6F0",
              animation: `splashDot 1s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashDot {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); background: #CC0000; }
        }
      `}</style>
    </div>
  );
}
