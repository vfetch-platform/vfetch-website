"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCalendly } from "./CalendlyContext";

export function AppDownloadBanner() {
  const { open: openCalendly } = useCalendly();
  return (
    <section id="cta" className="py-20 bg-[#FAFBFC]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-[#0D7B6C] px-8 py-14 sm:px-12 text-center shadow-xl shadow-[#0D7B6C]/15"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to reduce lost-property workload?
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            See how VFetch can help your venue log items faster, reduce guest-service
            calls and complete secure returns through one operational platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openCalendly}
              className="bg-white hover:bg-[#F3F4F6] text-[#0D7B6C] px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-[#0B6B5E]/20"
            >
              Book Demo
            </button>
            <Link
              href="/for-venues#contact"
              className="bg-[#0B6B5E] text-white border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#0B6B5E]/80 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
