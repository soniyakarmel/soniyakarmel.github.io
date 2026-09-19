"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { portfolioAssets } from "@/data/portfolio-assets";

export default function Hero() {
  const heroBackground = portfolioAssets.hero.main || "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80";

  return (
    <section className="relative h-[80vh] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${heroBackground}')` }}>
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-[#f5dfba]"
        >
          Traditional Craft • Modern Luxury
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-5xl font-bold leading-tight text-shadow md:text-7xl"
        >
          Aari Work Blouses
          <br />
          Crafted for Heritage & Celebration
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-white/85"
        >
          Luxury handcrafted embroidery for weddings, family functions, and statement festive wear.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/works" className="rounded-full bg-white px-7 py-3 font-semibold text-maroon transition hover:scale-[1.02]">
            Browse Designs
          </Link>
          <Link href="/book" className="rounded-full border border-white/60 bg-transparent px-7 py-3 font-semibold text-white transition hover:bg-white/10">
            Book Service
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
