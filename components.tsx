"use client";

import { motion } from "framer-motion";
import { statistics } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="section-container py-24">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            AI-Native Quantitative Investment Infrastructure
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-black mt-8 leading-tight"
          >
            The Future of
            <span className="block gradient-text">
              Quant Intelligence
            </span>
          </motion.h1>

          <p className="text-xl text-gray-400 mt-8 max-w-xl">
            Combining artificial intelligence,
            systematic research,
            and institutional-grade analytics
            to engineer sustainable alpha.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {statistics.map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-5"
              >
                <div className="text-3xl font-black text-cyan-400">
                  {item.value}
                </div>

                <div className="text-sm text-gray-400 mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[32px] p-8">
          <h3 className="text-2xl font-bold">
            Quantum Research Terminal
          </h3>

          <p className="text-gray-400 mt-2">
            Institutional Multi-Market Intelligence
          </p>

          <div className="space-y-6 mt-8">
            <div>
              <div className="flex justify-between mb-2">
                <span>Signal Sharpe</span>
                <span className="text-cyan-400">4.82</span>
              </div>

              <div className="h-2 bg-white/10 rounded-full">
                <div className="h-2 bg-cyan-400 rounded-full w-[82%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Portfolio Fitness</span>
                <span className="text-emerald-400">3.67</span>
              </div>

              <div className="h-2 bg-white/10 rounded-full">
                <div className="h-2 bg-emerald-400 rounded-full w-[74%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
