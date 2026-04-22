"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export function AppDownloadBanner() {
  return (
    <section id="cta" className="py-24 bg-[#111c2d]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00685f]/20 border border-[#00685f]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#89f5e7] animate-pulse" />
            <span className="text-[10px] font-black tracking-widest uppercase text-[#89f5e7]">
              Ready to Launch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to scale your{" "}
            <span className="text-[#89f5e7]">Lost &amp; Found?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Join venues across the UK already using VFetch to turn lost items into moments of
            delight. Free for venues - owners pay a small claim fee.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/for-venues#contact"
              className="bg-[#00685f] hover:bg-[#008378] text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#00685f]/30"
            >
              Get Started Today
            </Link>
            <Link
              href="/for-venues#contact"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
