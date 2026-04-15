import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Voxtent",
    template: "%s | Voxtent",
  },
  description: "Build Podcasts & Video Creation",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
> <body className="min-h-full flex flex-col relative bg-[#FAF6F0] text-black">

    {/* BACKGROUND */}
    <div className="fixed inset-0 z-0 pointer-events-none">
      <img
        src="/Image/Sample5.jpg"
        alt="background"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-[#FAF6F0]/90" />
    </div>

    {/* HEADER */}
    <div className="relative z-[9999]">
      <Header />
    </div>

    {/* CONTENT */}
    <main className="flex-1 pt-20 relative z-10">
      {children}
    </main>

  </body>
</html>


);
}
