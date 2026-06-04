"use client";

import Link from "next/link";
import { navigation } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">
      <nav className="section-container h-20 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-black">
            UniFi Quantum Fund
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold">
          Launch Platform
        </button>
      </nav>
    </header>
  );
}
